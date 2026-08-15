import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";

/**
 * Quote / enquiry endpoint.
 *
 * Two interchangeable transports, tried in that order:
 *
 *  1. SMTP — sends through the company's own IONOS mailbox. Nothing to sign
 *     up for and no DNS to verify, because the mailbox already exists and
 *     already owns the domain.
 *  2. Resend HTTP API — kept as an alternative. Better deliverability at
 *     volume and no long-lived TCP connection, which matters if this ever
 *     moves to an edge runtime where raw sockets aren't available.
 *
 * Credentials only ever come from the environment. They must never be written
 * into this file: it is committed to a GitHub repository, and a mailbox
 * password in git history is compromised the moment it lands there.
 *
 * SMTP (IONOS):
 *   SMTP_USER  — full mailbox address, e.g. sales@affordableglazing.co.uk
 *   SMTP_PASS  — that mailbox's password
 *   SMTP_HOST  — optional, defaults to smtp.ionos.co.uk
 *   SMTP_PORT  — optional, defaults to 587 (STARTTLS). 465 = implicit TLS.
 *
 * Resend (only needed if SMTP is not configured):
 *   RESEND_API_KEY, QUOTE_FROM_EMAIL
 *
 * Either way:
 *   QUOTE_TO_EMAIL — optional, defaults to the sales inbox below.
 */
const TO_EMAIL = "sales@affordableglazing.co.uk";
const DEFAULT_SMTP_HOST = "smtp.ionos.co.uk";
const DEFAULT_SMTP_PORT = 587;

/** Shown to visitors for every delivery failure. They can't act on the cause,
    only on the phone number, so the cause travels in `code` and the logs. */
const FALLBACK_MESSAGE =
  "We couldn't send that just now. Please call 0800 123 4567 and we'll take your details.";

function readConfig() {
  const smtpUser = process.env.SMTP_USER?.trim() ?? "";
  const smtpPass = process.env.SMTP_PASS ?? "";
  const smtpHost = process.env.SMTP_HOST?.trim() || DEFAULT_SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || DEFAULT_SMTP_PORT;

  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const resendFrom = process.env.QUOTE_FROM_EMAIL?.trim() ?? "";

  const to = process.env.QUOTE_TO_EMAIL?.trim() || TO_EMAIL;

  const smtpReady = Boolean(smtpUser && smtpPass);
  const resendReady = Boolean(apiKey && resendFrom);

  return {
    smtpUser,
    smtpPass,
    smtpHost,
    smtpPort,
    apiKey,
    resendFrom,
    to,
    smtpReady,
    resendReady,
    transport: smtpReady ? ("smtp" as const) : resendReady ? ("resend" as const) : null,
  };
}

const Payload = z.object({
  name: z.string().min(1).max(120),
  phone: z.string().min(1).max(40),
  postcode: z.string().min(1).max(20),
  // Optional. Name, phone and postcode are already enough to quote from, so a
  // missing email must not cost the enquiry. An empty string is accepted; a
  // non-empty one still has to be a real address, otherwise the reply-to would
  // be set to something undeliverable.
  email: z
    .string()
    .max(200)
    .optional()
    .default("")
    .refine((v) => v === "" || z.string().email().safeParse(v).success, {
      message: "Enter a valid email address",
    }),
  message: z.string().max(4000).optional().default(""),
  source: z.string().max(200).optional().default("Website"),
  // Bots fill every field they find; a real person never sees this one.
  // Deliberately permissive: constraining it to max(0) made zod reject the
  // request outright with a 400, which tells the bot it was caught. Accepting
  // the value here lets the handler swallow it with a 200 instead.
  company: z.string().max(200).optional(),
  attachment: z
    .object({
      filename: z.string().max(200),
      // Base64 without the data: prefix. Capped client-side; re-checked here
      // because a client-side limit is a convenience, not a control.
      content: z.string().max(7_000_000),
      contentType: z.string().max(100),
    })
    .optional(),
});

type Enquiry = z.infer<typeof Payload>;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

function buildHtml(d: Enquiry) {
  const row = (label: string, value: string) =>
    `<tr>
       <td style="padding:8px 16px 8px 0;color:#5a5f78;font:600 12px/1.4 system-ui,sans-serif;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;vertical-align:top">${esc(label)}</td>
       <td style="padding:8px 0;color:#141B45;font:400 15px/1.5 system-ui,sans-serif">${esc(value)}</td>
     </tr>`;

  return `<div style="background:#f5f6f8;padding:24px">
    <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e4e6eb">
      <div style="background:#141B45;padding:20px 24px">
        <div style="color:#fff;font:600 18px/1.3 system-ui,sans-serif">New quote request</div>
        <div style="color:#94a8f2;font:400 13px/1.4 system-ui,sans-serif;margin-top:4px">${esc(d.source)}</div>
      </div>
      <table style="width:100%;border-collapse:collapse" cellpadding="0" cellspacing="0">
        <tbody style="display:table;width:100%;padding:16px 24px">
          ${row("Name", d.name)}
          ${row("Phone", d.phone)}
          ${d.email ? row("Email", d.email) : row("Email", "Not given — call them back")}
          ${row("Postcode", d.postcode)}
          ${d.message ? row("Project", d.message) : ""}
          ${d.attachment ? row("Attached", d.attachment.filename) : ""}
        </tbody>
      </table>
    </div>
  </div>`;
}

/** Plain-text alternative. A message with no text part scores worse in most
    spam filters, which matters when from and to are the same mailbox. */
function buildText(d: Enquiry) {
  return [
    `New quote request (${d.source})`,
    "",
    `Name:     ${d.name}`,
    `Phone:    ${d.phone}`,
    `Email:    ${d.email || "Not given — call them back"}`,
    `Postcode: ${d.postcode}`,
    d.message ? `\nProject:\n${d.message}` : "",
    d.attachment ? `\nAttached: ${d.attachment.filename}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

function subjectFor(d: Enquiry) {
  // The "phone back" marker is in the subject so it's visible in the inbox
  // list, before anyone opens the message.
  return `Quote request — ${d.name} (${d.postcode})${d.email ? "" : " · phone back"}`;
}

async function sendViaSmtp(d: Enquiry, cfg: ReturnType<typeof readConfig>) {
  // Imported lazily so the SMTP client is only pulled in when it's the chosen
  // transport — a Resend-only deployment never loads it.
  const nodemailer = (await import("nodemailer")).default;

  const transporter = nodemailer.createTransport({
    host: cfg.smtpHost,
    port: cfg.smtpPort,
    // 465 is implicit TLS; 587 opens plaintext then upgrades via STARTTLS.
    secure: cfg.smtpPort === 465,
    auth: { user: cfg.smtpUser, pass: cfg.smtpPass },
    // Left unpooled (the default): serverless invocations are frozen between
    // requests, so a pooled connection would be torn down mid-flight. Waits
    // are bounded so a hung socket can't run out the function's whole budget.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });

  await transporter.sendMail({
    // IONOS rejects a From that isn't the authenticated mailbox, so this is
    // the mailbox itself — the visitor's address goes in replyTo instead.
    from: `Affordable Glazings Website <${cfg.smtpUser}>`,
    to: cfg.to,
    ...(d.email ? { replyTo: d.email } : {}),
    subject: subjectFor(d),
    text: buildText(d),
    html: buildHtml(d),
    ...(d.attachment
      ? {
          attachments: [
            {
              filename: d.attachment.filename,
              content: d.attachment.content,
              encoding: "base64",
              contentType: d.attachment.contentType,
            },
          ],
        }
      : {}),
  });
}

async function sendViaResend(d: Enquiry, cfg: ReturnType<typeof readConfig>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: cfg.resendFrom,
      to: [cfg.to],
      // Omitted entirely when no address was given — Resend rejects the whole
      // send on an empty reply_to, which would turn "no email" into "no
      // enquiry at all".
      ...(d.email ? { reply_to: d.email } : {}),
      subject: subjectFor(d),
      text: buildText(d),
      html: buildHtml(d),
      ...(d.attachment
        ? { attachments: [{ filename: d.attachment.filename, content: d.attachment.content }] }
        : {}),
    }),
  });

  if (!res.ok) {
    // Resend's own words — "The domain is not verified" and "API key is
    // invalid" are the two real-world causes, and both are unrecoverable
    // guesswork without this.
    throw new Error(`Resend returned ${res.status}: ${await res.text()}`);
  }
}

export const Route = createFileRoute("/api/quote")({
  server: {
    handlers: {
      /**
       * Config check. Open https://<site>/api/quote in a browser to see
       * whether delivery is actually wired up — the POST response can only
       * ever say "we couldn't send it", which is no help when the question is
       * *why*. Reports presence and shape only; no password or key is ever
       * echoed back.
       */
      GET: async () => {
        const cfg = readConfig();
        return Response.json(
          {
            ready: cfg.transport !== null,
            transport: cfg.transport,
            smtp: {
              configured: cfg.smtpReady,
              host: cfg.smtpHost,
              port: cfg.smtpPort,
              user: cfg.smtpUser || null,
              passwordSet: Boolean(cfg.smtpPass),
            },
            resend: {
              configured: cfg.resendReady,
              // Resend keys all start `re_`. Catches the classic mistake of
              // pasting a domain ID, a webhook secret or a stray quote mark.
              keyLooksValid: cfg.apiKey.startsWith("re_"),
              fromDomain: cfg.resendFrom.split("@")[1]?.replace(/>$/, "") ?? null,
            },
            deliversTo: cfg.to,
            hint:
              cfg.transport === null
                ? "Set SMTP_USER and SMTP_PASS in Vercel → Settings → Environment Variables (tick Production), then REDEPLOY — an existing deployment keeps the environment it was built with."
                : `Configured via ${cfg.transport}. If sends still fail, check the server logs for the [quote] line.`,
          },
          { headers: { "Cache-Control": "no-store" } },
        );
      },

      POST: async ({ request }) => {
        let parsed: Enquiry;
        try {
          parsed = Payload.parse(await request.json());
        } catch {
          return Response.json(
            { ok: false, code: "invalid", error: "Please check the details and try again." },
            { status: 400 },
          );
        }

        // Honeypot tripped — accept silently so the bot doesn't learn.
        if (parsed.company) return Response.json({ ok: true });

        const cfg = readConfig();
        const trace = {
          name: parsed.name,
          email: parsed.email,
          phone: parsed.phone,
          postcode: parsed.postcode,
        };

        if (cfg.transport === null) {
          console.error(
            "[quote] NOT DELIVERED — no transport configured. Set SMTP_USER and SMTP_PASS " +
              "(or RESEND_API_KEY and QUOTE_FROM_EMAIL) in Vercel and redeploy. Enquiry was:",
            trace,
          );
          return Response.json(
            { ok: false, code: "not_configured", error: FALLBACK_MESSAGE },
            { status: 503 },
          );
        }

        try {
          if (cfg.transport === "smtp") await sendViaSmtp(parsed, cfg);
          else await sendViaResend(parsed, cfg);
          return Response.json({ ok: true });
        } catch (err) {
          // The enquiry is logged with the failure so a transport problem
          // doesn't also lose the lead.
          console.error(
            `[quote] NOT DELIVERED via ${cfg.transport}:`,
            err instanceof Error ? err.message : err,
            trace,
          );
          return Response.json(
            { ok: false, code: "send_failed", error: FALLBACK_MESSAGE },
            { status: 502 },
          );
        }
      },
    },
  },
});
