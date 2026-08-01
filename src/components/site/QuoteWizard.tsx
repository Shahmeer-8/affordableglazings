import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

/**
 * Single-step "Fast Quote" form used inside the footer CTA. Styled as a
 * dark navy panel per the Navy & Orange theme.
 */
export function QuoteWizard({
  showIntro = true,
  compact = false,
}: { showIntro?: boolean; compact?: boolean }) {
  const [done, setDone] = useState(false);

  return (
    <div className={`rounded-[28px] border border-[#2B336B] bg-navy ${compact ? "p-5 md:p-6" : "p-6 md:p-8"} shadow-2xl`}>
      {done ? (
        <div className="text-center py-8">
          <div className="mx-auto size-14 rounded-full bg-green-100 text-green-700 grid place-items-center mb-5">
            <Check className="size-7" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-[#FCFCFC] mb-2">We've got it.</h3>
          <p className="text-[#BFC4D8] max-w-md mx-auto">A specialist will reply within 24 hours to arrange your free, no-obligation quote.</p>
        </div>
      ) : (
        <>
          {showIntro && (
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-[#FCFCFC]">Fast Quote</h3>
              <p className="mt-2 text-[#BFC4D8] text-sm leading-relaxed">
                Share a few details about your project and we'll send a tailored estimate within 24 hours.
              </p>
            </div>
          )}

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            {/* Paired fields when compact so the footer form stays short
                enough to sit beside the link columns. */}
            <div className={compact ? "grid sm:grid-cols-2 gap-4" : "space-y-4"}>
              <Field name="name" placeholder="Name *" />
              <Field name="phone" type="tel" placeholder="Phone number *" />
              <Field name="email" type="email" placeholder="Email address *" />
              <Field name="postcode" placeholder="Postcode *" />
            </div>

            <div>
              <label htmlFor="fq-message" className="sr-only">Describe your project</label>
              <textarea
                id="fq-message"
                name="message"
                rows={compact ? 2 : 3}
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

            <button
              type="submit"
              className="w-full bg-transparent border border-cta text-cta px-8 py-3.5 rounded-full font-semibold hover:bg-cta hover:text-white transition-colors inline-flex items-center justify-center gap-2"
            >
              Get my fast quote <ArrowRight className="size-4" />
            </button>
            <p className="text-xs text-[#9EA6C5] text-center">No obligation · We reply within 24 hours.</p>
          </form>
        </>
      )}
    </div>
  );
}

function Field({ name, placeholder, type = "text" }: { name: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label htmlFor={`fq-${name}`} className="sr-only">{placeholder.replace(" *", "")}</label>
      <input
        id={`fq-${name}`}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl border border-[#2F3B80] bg-[#0F1434] text-[#FCFCFC] placeholder:text-[#9EA6C5] outline-none focus:border-cta transition-colors"
      />
    </div>
  );
}
