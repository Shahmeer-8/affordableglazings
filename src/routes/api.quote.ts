import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";

/**
 * Quote / enquiry endpoint.
 *
 * Delivers through Resend's HTTP API rather than an SMTP library — the send
 * is a single fetch, so nothing new is added to the dependency tree and it
 * works unchanged on Vercel's serverless runtime, where holding an SMTP
 * socket open is the usual thing that breaks.
 *
 * Required environment variables:
 *   RESEND_API_KEY    — from resend.com/api-keys
 *   QUOTE_FROM_EMAIL  — must be on a domain verified in Resend, e.g.
 *                       "Affordable Glazings <quotes@affordableglazing.co.uk>"
 * Optional:
 *   QUOTE_TO_EMAIL    — defaults to the sales inbox below
 */
const TO_EMAIL = "sales@affordableglazing.co.uk";

const Payload = z.object({
  name: z.string().min(1).max(120),
  phone: z.string().min(1).max(40),
  postcode: z.string().min(1).max(20),
  // Optional. Name, phone and postcode are already enough to quote from, so a
  // missing email must not cost the enquiry. An empty string is accepted; a
  // non-empty one still has to be a real address, otherwise reply_to below
  // would be set to something undeliverable.
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
  company: z.string().max(0).optional(),
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

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

function buildHtml(d: z.infer<typeof Payload>) {
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
      <table style="width:100%;border-collapse:collapse;padding:8px 24px" cellpadding="0" cellspacing="0">
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

export const Route = createFileRoute("/api/quote")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let parsed: z.infer<typeof Payload>;
        try {
          parsed = Payload.parse(await request.json());
        } catch {
          return Response.json(
            { ok: false, error: "Please check the details and try again." },
            { status: 400 },
          );
        }

        // Honeypot tripped — accept silently so the bot doesn't learn.
        if (parsed.company) return Response.json({ ok: true });

        const apiKey = process.env.RESEND_API_KEY;
        const from = process.env.QUOTE_FROM_EMAIL;
        if (!apiKey || !from) {
          console.error(
            "[quote] RESEND_API_KEY and/or QUOTE_FROM_EMAIL are not set — enquiry NOT delivered:",
            { name: parsed.name, email: parsed.email, phone: parsed.phone },
          );
          return Response.json(
            {
              ok: false,
              error:
                "We couldn't send that just now. Please call 0800 123 4567 and we'll take your details.",
            },
            { status: 503 },
          );
        }

        try {
          const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from,
              to: [process.env.QUOTE_TO_EMAIL || TO_EMAIL],
              // So hitting Reply in the inbox goes to the customer. Omitted
              // entirely when no address was given — Resend rejects the whole
              // send on an empty reply_to, which would turn "no email" into
              // "no enquiry at all".
              ...(parsed.email ? { reply_to: parsed.email } : {}),
              // The "phone back" marker is in the subject so it's visible in
              // the inbox list, before anyone opens the message.
              subject: `Quote request — ${parsed.name} (${parsed.postcode})${
                parsed.email ? "" : " · phone back"
              }`,
              html: buildHtml(parsed),
              ...(parsed.attachment
                ? {
                    attachments: [
                      {
                        filename: parsed.attachment.filename,
                        content: parsed.attachment.content,
                      },
                    ],
                  }
                : {}),
            }),
          });

          if (!res.ok) {
            // Log the enquiry alongside the failure — a provider outage must
            // not be the reason a lead disappears entirely.
            console.error("[quote] Resend rejected the send:", res.status, await res.text(), {
              name: parsed.name,
              email: parsed.email,
              phone: parsed.phone,
            });
            return Response.json(
              {
                ok: false,
                error:
                  "We couldn't send that just now. Please call 0800 123 4567 and we'll take your details.",
              },
              { status: 502 },
            );
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("[quote] send failed:", err, {
            name: parsed.name,
            email: parsed.email,
            phone: parsed.phone,
          });
          return Response.json(
            { ok: false, error: "Something went wrong. Please call 0800 123 4567." },
            { status: 500 },
          );
        }
      },
    },
  },
});
