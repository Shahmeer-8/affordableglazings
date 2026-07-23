import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const PRODUCTS = ["Windows", "Doors", "Rooflights", "Conservatories", "Roofline", "Repairs", "Commercial"] as const;

/**
 * Single-step "Fast Quote" form used on the /quote page and inside the CTA
 * section on every page. Styled to the site theme (navy / brand-blue).
 */
export function QuoteWizard({ showIntro = true }: { showIntro?: boolean }) {
  const [done, setDone] = useState(false);

  return (
    <div className="rounded-[28px] bg-white border border-navy/5 shadow-elegant p-6 md:p-8">
      {done ? (
        <div className="text-center py-8">
          <div className="mx-auto size-14 rounded-full bg-green-100 text-green-700 grid place-items-center mb-5">
            <Check className="size-7" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-navy mb-2">We've got it.</h3>
          <p className="text-navy/60 max-w-md mx-auto">A specialist will reply within 24 hours to arrange your free, no-obligation quote.</p>
        </div>
      ) : (
        <>
          {showIntro && (
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-navy">Fast Quote</h3>
              <p className="mt-2 text-navy/60 text-sm leading-relaxed">
                Share a few details about your project and we'll send a tailored estimate within 24 hours.
              </p>
            </div>
          )}

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <div>
              <label htmlFor="fq-product" className="sr-only">Product</label>
              <select
                id="fq-product"
                name="product"
                defaultValue=""
                required
                className="w-full px-4 py-3.5 rounded-xl border border-navy/10 bg-soft-gray text-navy outline-none focus:border-brand-blue focus:bg-white transition-colors"
              >
                <option value="" disabled>Select a product *</option>
                {PRODUCTS.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>

            <Field name="firstName" placeholder="First name *" />
            <Field name="phone" type="tel" placeholder="Phone number *" />
            <Field name="email" type="email" placeholder="Email address *" />
            <Field name="postcode" placeholder="Postcode *" />

            <div>
              <label htmlFor="fq-message" className="sr-only">Describe your project</label>
              <textarea
                id="fq-message"
                name="message"
                rows={3}
                placeholder="Describe your project (optional)"
                className="w-full px-4 py-3.5 rounded-xl border border-navy/10 bg-soft-gray text-navy outline-none focus:border-brand-blue focus:bg-white transition-colors resize-y"
              />
            </div>

            <div>
              <label htmlFor="fq-file" className="block text-xs font-bold uppercase tracking-[0.18em] text-navy/50 mb-2">
                Attach an image (optional)
              </label>
              <input
                id="fq-file"
                name="attachment"
                type="file"
                accept="image/*"
                className="block w-full text-sm text-navy/60 file:mr-4 file:rounded-full file:border-0 file:bg-navy file:px-4 file:py-2 file:text-white file:text-sm file:font-semibold file:cursor-pointer hover:file:bg-brand-blue file:transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-navy text-white px-8 py-3.5 rounded-full font-semibold hover:bg-brand-blue transition-colors inline-flex items-center justify-center gap-2"
            >
              Get my fast quote <ArrowRight className="size-4" />
            </button>
            <p className="text-xs text-navy/50 text-center">No obligation · We reply within 24 hours.</p>
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
        className="w-full px-4 py-3.5 rounded-xl border border-navy/10 bg-soft-gray text-navy placeholder:text-navy/45 outline-none focus:border-brand-blue focus:bg-white transition-colors"
      />
    </div>
  );
}
