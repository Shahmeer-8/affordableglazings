import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

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
      <section className="py-16">
        <div className="container-page max-w-3xl">
          <div className="rounded-3xl bg-white border border-navy/5 overflow-hidden">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-navy/5 last:border-b-0">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-navy">{f.q}</span>
                    <span className="size-9 rounded-full bg-soft-gray grid place-items-center text-brand-blue shrink-0">
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-navy/70 leading-relaxed animate-fade-in">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
