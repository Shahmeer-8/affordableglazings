import { createFileRoute } from "@tanstack/react-router";
import { QuoteWizard } from "@/components/site/QuoteWizard";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Free Quote | Affordable Glazings" },
      { name: "description", content: "Get a free, no-obligation quote in under 60 seconds. A specialist will reply within 4 working hours." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <section className="pt-14 pb-16 min-h-screen">
      <div className="container-page max-w-3xl">
        <div className="mb-8">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Free quote · 60 seconds</p>
          <h1 className="text-4xl md:text-6xl font-display font-semibold text-navy leading-[1.02]">
            Tell us about your <span className="text-brand-blue">project.</span>
          </h1>
        </div>
        <QuoteWizard />
      </div>
    </section>
  );
}
