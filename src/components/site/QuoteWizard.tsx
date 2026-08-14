import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Values = Record<string, string>;

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

  const capture = (form: HTMLFormElement) =>
    Object.fromEntries(new FormData(form).entries()) as Values;

  return (
    <div className={`rounded-[28px] border border-[#2B336B] bg-navy ${compact ? "p-5 md:p-6" : "p-6 md:p-8"} shadow-2xl`}>
      {done ? (
        <div className="text-center py-8">
          <div className="mx-auto size-14 rounded-full bg-green-100 text-green-700 grid place-items-center mb-5">
            <Check className="size-7" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-[#FCFCFC] mb-2">We've got it.</h3>
          <p className="text-[#BFC4D8] max-w-md mx-auto">
            Thanks {values.name?.split(" ")[0] || "— "}, a specialist will reply within 24 hours to arrange your
            free, no-obligation quote.
          </p>
        </div>
      ) : (
        <>
          {showIntro && (
            <div className="mb-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-[#FCFCFC]">Fast Quote</h3>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#9EA6C5] shrink-0" role="status">
                  Step {step + 1} of 2
                </span>
              </div>
              <p className="mt-2 text-[#BFC4D8] text-sm leading-relaxed">
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
              <p className="text-xs text-[#9EA6C5] text-center">Takes under a minute · No obligation.</p>
            </form>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setValues((v) => ({ ...v, ...capture(e.currentTarget) }));
                setDone(true);
              }}
            >
              {/* Step one's answers travel with the final submission. */}
              {["name", "phone", "postcode"].map((k) => (
                <input key={k} type="hidden" name={k} value={values[k] ?? ""} readOnly />
              ))}

              <Field name="email" type="email" placeholder="Email address *" defaultValue={values.email} />

              <div>
                <label htmlFor="fq-message" className="sr-only">Describe your project</label>
                <textarea
                  id="fq-message"
                  name="message"
                  rows={compact ? 2 : 3}
                  defaultValue={values.message}
                  placeholder="Describe your project (optional)"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#2F3B80] bg-[#0F1434] text-[#FCFCFC] placeholder:text-[#9EA6C5] outline-none focus:border-cta transition-colors resize-y"
                />
              </div>

              <div>
                <label htmlFor="fq-file" className="block text-xs font-bold uppercase tracking-[0.18em] text-[#9EA6C5] mb-2">
                  Attach an image (optional)
                </label>
                <input
                  id="fq-file"
                  name="attachment"
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm text-[#9EA6C5] file:mr-4 file:rounded-full file:border-0 file:bg-cta file:px-4 file:py-2 file:text-white file:text-sm file:font-semibold file:cursor-pointer hover:file:bg-cta-hover file:transition-colors"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="shrink-0 size-12 rounded-full border border-white/20 text-[#BFC4D8] grid place-items-center hover:border-white/50 hover:text-white transition-colors"
                  aria-label="Back to your details"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-transparent border border-cta text-cta px-6 py-3.5 rounded-full font-semibold hover:bg-cta hover:text-white transition-colors inline-flex items-center justify-center gap-2"
                >
                  Get my fast quote <ArrowRight className="size-4" />
                </button>
              </div>
              <p className="text-xs text-[#9EA6C5] text-center">We reply within 24 hours.</p>
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
        className="w-full px-4 py-3.5 rounded-xl border border-[#2F3B80] bg-[#0F1434] text-[#FCFCFC] placeholder:text-[#9EA6C5] outline-none focus:border-cta transition-colors"
      />
    </div>
  );
}
