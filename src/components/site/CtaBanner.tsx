import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title = "Start your transformation today.",
  subtitle = "Request a bespoke consultation with our specialists. Free, no-obligation, delivered within 24 hours.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto bg-brand-blue rounded-[40px] p-12 md:p-24 relative overflow-hidden">
        <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-white leading-[1.05]">{title}</h2>
          <p className="text-white/80 text-lg md:text-xl">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
            >
              Get Free Quote <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:08001234567"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-colors"
            >
              Call 0800 123 4567
            </a>
          </div>
        </div>
        <div className="absolute -bottom-32 -left-32 size-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-32 -right-32 size-96 bg-navy/25 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
