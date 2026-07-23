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
    <section id="quote" className="scroll-mt-24 py-10 md:py-12 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#3a4150] to-[#1e2129] rounded-[32px] p-6 md:p-10 relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-start">
          <div className="text-white space-y-5">
            <h2 className="text-3xl md:text-5xl font-display font-semibold leading-[1.05]">{title}</h2>
            <p className="text-white/70 text-lg leading-relaxed">{subtitle}</p>
            <a
              href="tel:08001234567"
              className="inline-flex items-center gap-2.5 text-white font-semibold group"
            >
              <span className="inline-flex items-center justify-center size-10 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Phone className="size-4" />
              </span>
              Or call 0800 123 4567
            </a>
          </div>

          <QuoteWizard />
        </div>

        <div className="absolute -bottom-32 -left-32 size-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 size-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}
