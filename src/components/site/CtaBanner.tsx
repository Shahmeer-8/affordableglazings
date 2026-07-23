import { Phone } from "lucide-react";
import { QuoteWizard } from "./QuoteWizard";

/**
 * Quote CTA section. Carries id="quote" so the header's "Free Quote" button and
 * any in-page CTA can smooth-scroll the visitor straight to the multi-step quote
 * form on the current page instead of routing away.
 */
export function CtaBanner({
  title = "Start your transformation today.",
  subtitle = "Request a bespoke consultation with our specialists. Free, no-obligation, and delivered within 24 hours.",
}: { title?: string; subtitle?: string }) {
  return (
    <section id="quote" className="scroll-mt-24 py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto bg-brand-blue rounded-[40px] p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-semibold leading-[1.05]">{title}</h2>
            <p className="text-white/80 text-lg leading-relaxed">{subtitle}</p>
            <a
              href="tel:08001234567"
              className="inline-flex items-center gap-2.5 text-white font-semibold group"
            >
              <span className="inline-flex items-center justify-center size-10 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                <Phone className="size-4" />
              </span>
              Or call 0800 123 4567
            </a>
          </div>

          <QuoteWizard />
        </div>

        <div className="absolute -bottom-32 -left-32 size-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 size-96 bg-navy/25 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
