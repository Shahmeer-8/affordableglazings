import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/repairs")({
  head: () => ({
    meta: [
      { title: "Window & Door Repairs | Affordable Glazings" },
      { name: "description", content: "Fast, professional repairs for hinges, locks, handles, misted units and broken glass. Nationwide, all makes." },
      { property: "og:url", content: "/repairs" },
    ],
    links: [{ rel: "canonical", href: "/repairs" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Repairs & Maintenance"
        title={<>When glass fails, we <span className="text-brand-blue">fix it fast.</span></>}
        description="Same-day emergency call-outs and scheduled repairs for windows, doors and locks — any make, any model."
      />
      <section className="py-24 bg-white">
        <div className="container-page grid md:grid-cols-4 gap-5">
          {["Misted units", "Broken locks", "Hinge failure", "Handle replacement"].map((t) => (
            <div key={t} className="p-6 rounded-2xl bg-soft-gray">
              <h3 className="font-semibold text-navy mb-1">{t}</h3>
              <p className="text-sm text-navy/60">Fixed price, same-day where possible.</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner title="Need a repair today?" subtitle="Call our engineers and book a call-out — most jobs completed same day." />
    </>
  ),
});
