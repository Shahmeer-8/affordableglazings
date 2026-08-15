import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";

type Values = Record<string, string>;

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;

/** Strips the `data:<mime>;base64,` prefix the API expects to be absent. */
function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

/**
 * Two-step "Fast Quote" form used inside the footer CTA.
 *
 * Split into steps because the single-screen version put six fields plus a
 * file picker at the very bottom of a long mobile footer — the tallest thing
 * on the page guarding the site's primary conversion. Step one asks only for
 * what a callback actually needs (name, phone, postcode), which roughly
 * halves the visible height and gives the visitor a finishable-looking task;
 * everything optional moves to step two, where the commitment is already
 * made.
 *
 * Each step is its own <form> rather than one form with hidden fields, so
 * native `required` validation fires per step. A hidden required input can't
 * be focused, which makes the browser refuse to submit with no visible
 * explanation.
 */
export function QuoteWizard({
  showIntro = true,
  compact = false,
}: { showIntro?: boolean; compact?: boolean }) {
  const [step, setStep] = useState<0 | 1>(0);
  const [values, setValues] = useState<Values>({});
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const capture = (form: HTMLFormElement) =>
    Object.fromEntries(
      Array.from(new FormData(form).entries()).filter(([, v]) => typeof v === "string"),
    ) as Values;

  const submit = async (form: HTMLFormElement) => {
    setSending(true);
    setError(null);
    const fields = { ...values, ...capture(form) };

    try {
      const file = (form.elements.namedItem("attachment") as HTMLInputElement | null)?.files?.[0];
      let attachment;
      if (file) {
        if (file.size > MAX_ATTACHMENT_BYTES) {
          setError("That image is over 5MB — please attach a smaller one.");
          setSending(false);
          return;
        }
        attachment = {
          filename: file.name,
          content: await fileToBase64(file),
          contentType: file.type || "application/octet-stream",
        };
      }

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          source: `Fast Quote — ${typeof window !== "undefined" ? window.location.pathname : "/"}`,
          attachment,
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok || !data?.ok) {
        setError(data?.error ?? "Something went wrong. Please call 0800 123 4567.");
        return;
      }
      setValues(fields);
      setDone(true);
    } catch {
      setError("We couldn't reach the server. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`rounded-[28px] border border-[#2B336B] bg-navy ${compact ? "p-5 md:p-6" : "p-6 md:p-8"} shadow-2xl`}>
      {done ? (
        <div className="text-center py-8">
          <div className="mx-auto size-14 rounded-full bg-green-100 text-green-700 grid place-items-center mb-5">
            <Check className="size-7" />
          </div>
          <h3 className="text-[24px] font-display font-semibold text-white mb-2">We've got it.</h3>
          <p className="text-[15px] text-white max-w-md mx-auto">
            Thanks {values.name?.split(" ")[0] || "— "}, a specialist will reply within 24 hours to arrange your
            free, no-obligation quote.
          </p>
        </div>
      ) : (
        <>
          {showIntro && (
            <div className="mb-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[26px] md:text-[30px] font-display font-semibold text-white">Fast Quote</h3>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white shrink-0" role="status">
                  Step {step + 1} of 2
                </span>
              </div>
              <p className="mt-2 text-white text-[14px] leading-relaxed">
                {step === 0
                  ? "Two quick steps. We'll send a tailored estimate within 24 hours."
                  : "Almost there — anything else you'd like us to know?"}
              </p>
              {/* Two segments rather than a sliding bar: the visitor can see
                  the whole task is two steps long before starting it. */}
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {[0, 1].map((s) => (
                  <span
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      s <= step ? "bg-cta" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {step === 0 ? (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setValues((v) => ({ ...v, ...capture(e.currentTarget) }));
                setStep(1);
              }}
            >
              <div className={compact ? "grid sm:grid-cols-2 gap-4" : "space-y-4"}>
                <Field name="name" placeholder="Name *" defaultValue={values.name} />
                <Field name="phone" type="tel" placeholder="Phone number *" defaultValue={values.phone} />
              </div>
              <Field name="postcode" placeholder="Postcode *" defaultValue={values.postcode} />

              <button
                type="submit"
                className="w-full bg-cta text-white px-8 py-3.5 rounded-full font-semibold hover:bg-cta-hover transition-colors inline-flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="size-4" />
              </button>
              <p className="text-[12px] text-white text-center">Takes under a minute · No obligation.</p>
            </form>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                void submit(e.currentTarget);
              }}
            >
              {/* Step one's answers travel with the final submission. */}
              {["name", "phone", "postcode"].map((k) => (
                <input key={k} type="hidden" name={k} value={values[k] ?? ""} readOnly />
              ))}
              {/* Honeypot — hidden from people, irresistible to bots. */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] size-0 opacity-0"
              />

              <Field name="email" type="email" placeholder="Email address *" defaultValue={values.email} />

              <div>
                <label htmlFor="fq-message" className="sr-only">Describe your project</label>
                <textarea
                  id="fq-message"
                  name="message"
                  rows={compact ? 2 : 3}
                  defaultValue={values.message}
                  placeholder="Describe your project (optional)"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#2F3B80] bg-[#0F1434] text-[15px] text-white placeholder:text-[#9EA6C5] outline-none focus:border-cta transition-colors resize-y"
                />
              </div>

              <div>
                <label htmlFor="fq-file" className="block text-[11px] font-bold uppercase tracking-[0.18em] text-white mb-2">
                  Attach an image (optional)
                </label>
                <input
                  id="fq-file"
                  name="attachment"
                  type="file"
                  accept="image/*"
                  className="block w-full text-[13px] text-white file:mr-4 file:rounded-full file:border-0 file:bg-cta file:px-4 file:py-2 file:text-white file:text-sm file:font-semibold file:cursor-pointer hover:file:bg-cta-hover file:transition-colors"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="text-sm text-[#FFC9A8] bg-cta/15 border border-cta/40 rounded-xl px-4 py-3"
                >
                  {error}
                </p>
              )}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  disabled={sending}
                  className="shrink-0 size-12 rounded-full border border-white/20 text-[#BFC4D8] grid place-items-center hover:border-white/50 hover:text-white transition-colors disabled:opacity-50"
                  aria-label="Back to your details"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex-1 bg-transparent border border-cta text-cta px-6 py-3.5 rounded-full font-semibold hover:bg-cta hover:text-white transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:bg-transparent disabled:hover:text-cta"
                >
                  {sending ? (
                    <>
                      Sending <Loader2 className="size-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Get my fast quote <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-[12px] text-white text-center">We reply within 24 hours.</p>
            </form>
          )}
        </>
      )}
    </div>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
  defaultValue,
}: { name: string; placeholder: string; type?: string; defaultValue?: string }) {
  return (
    <div>
      <label htmlFor={`fq-${name}`} className="sr-only">{placeholder.replace(" *", "")}</label>
      <input
        id={`fq-${name}`}
        name={name}
        type={type}
        required
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl border border-[#2F3B80] bg-[#0F1434] text-[15px] text-white placeholder:text-[#9EA6C5] outline-none focus:border-cta transition-colors"
      />
    </div>
  );
}
