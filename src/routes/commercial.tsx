import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Glazing | Affordable Glazings" },
      { name: "description", content: "Curtain walling, shopfronts, aluminium doors and commercial glazing systems for developers, architects and businesses." },
      { property: "og:url", content: "/commercial" },
    ],
    links: [{ rel: "canonical", href: "/commercial" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Commercial"
        title={<>Architectural glazing for <span className="text-brand-blue">specifiers.</span></>}
        description="Turnkey commercial glazing partnerships for developers, architects and main contractors."
      />
      <section className="py-24 bg-white">
        <div className="container-page grid md:grid-cols-3 gap-5">
          {[
            { t: "Curtain walling", b: "Stick, unitised and structural glazing systems." },
            { t: "Shopfronts", b: "Aluminium shopfronts, automatic entrances and screens." },
            { t: "Commercial doors", b: "Steel, aluminium and fire-rated door assemblies." },
          ].map((s) => (
            <div key={s.t} className="p-8 rounded-3xl bg-soft-gray">
              <h3 className="text-2xl font-display font-semibold text-navy mb-3">{s.t}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner title="Bidding a project?" subtitle="Send us your drawings — we return specification-ready quotes within 48 hours." />
    </>
  ),
});
