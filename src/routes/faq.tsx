import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Minus, Phone, Plus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
const FAQS = [
  { q: "How long does a typical installation take?", a: "Most window installations complete in 1–3 days. Doors typically take a single day. Conservatories and extensions range from 2–6 weeks depending on scope." },
  { q: "What guarantee comes with your work?", a: "Every installation is backed by our 10-year comprehensive guarantee covering frames, glass units, hardware and workmanship." },
  { q: "Are your products energy efficient?", a: "Yes. Our standard specification meets A++ energy ratings with U-values as low as 0.8 W/m²K on triple-glazed systems." },
  { q: "Do you offer finance?", a: "We offer 0% APR interest-free credit and low-rate finance up to 10 years, subject to status." },
  { q: "Which areas do you cover?", a: "We install across mainland UK. Our regional teams operate from London, Manchester, Birmingham and Bristol." },
  { q: "Can I get a quote without a visit?", a: "Yes — send photos and rough measurements and we'll return an indicative quote within 24 hours. A survey is required to confirm the final price." },
  { q: "Are you FENSA registered?", a: "Yes. We are FENSA and TrustMark registered, which means every installation is self-certified against Building Regulations." },
  { q: "How do I care for my new windows?", a: "Aluminium and uPVC frames only need occasional cleaning with warm soapy water. We provide a full aftercare guide on handover." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | Affordable Glazings" },
      { name: "description", content: "Common questions on installation, guarantees, finance, energy ratings and aftercare, answered by our experts." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQPage,
});

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="Frequently asked"
        title={<>Everything you need to <span className="text-brand-blue">know first.</span></>}
        description="Common questions on installations, guarantees, finance and aftercare."
      />
      <section className="py-14 md:py-16">
        <div className="container-page max-w-3xl">
          <div className="rounded-3xl bg-white border border-navy/5 overflow-hidden shadow-soft">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`border-b border-navy/5 last:border-b-0 transition-colors ${
                    isOpen ? "bg-soft-gray/60" : "hover:bg-soft-gray/40"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    {/* The open row gets a coloured rule rather than another
                        background tint — the tint alone was too subtle to find
                        when scanning eight collapsed rows. */}
                    <span className="flex items-start gap-4 min-w-0">
                      <span
                        className={`mt-2 h-5 w-[3px] rounded-full shrink-0 transition-colors ${
                          isOpen ? "bg-cta" : "bg-transparent group-hover:bg-navy/15"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-lg font-semibold transition-colors ${
                          isOpen ? "text-brand-blue" : "text-navy group-hover:text-brand-blue"
                        }`}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={`size-9 rounded-full grid place-items-center shrink-0 transition-colors ${
                        isOpen ? "bg-cta text-white" : "bg-soft-gray text-brand-blue group-hover:bg-navy/10"
                      }`}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {/* pl-[2.7rem] lines the answer up under the question text,
                      past the rule and its gap, so both share a left edge. */}
                  {isOpen && (
                    <div className="pl-[2.7rem] pr-6 pb-6 text-navy/70 leading-relaxed animate-fade-in">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Eight answers will never cover everything, and the page had no
              exit before this — the only way on was the browser back button. */}
          <div
            className="mt-10 rounded-3xl bg-navy p-8 md:p-10 flex flex-col sm:flex-row sm:items-center gap-6"
            data-reveal="up"
          >
            <div className="flex-1">
              <h2 className="text-2xl font-display font-semibold text-white mb-2">
                Still not answered?
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Talk to a specialist — no script, no pressure, no obligation to buy anything.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:08001234567"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-white hover:text-navy transition-colors"
              >
                <Phone className="size-4" /> 0800 123 4567
              </a>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 bg-cta text-navy ring-1 ring-cta-hover px-6 py-3.5 rounded-full text-sm font-bold hover:bg-cta-hover hover:text-white transition-colors"
              >
                Ask us <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
