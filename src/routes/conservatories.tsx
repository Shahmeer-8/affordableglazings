import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import productConservatories from "@/assets/product-conservatories.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/conservatories")({
  head: () => ({
    meta: [
      { title: "Conservatories, Orangeries & Extensions | Affordable Glazings" },
      { name: "description", content: "Light-filled conservatories, orangeries, garden rooms and glass extensions — bespoke architectural design and installation." },
      { property: "og:url", content: "/conservatories" },
    ],
    links: [{ rel: "canonical", href: "/conservatories" }],
  }),
  component: Page,
});

const TYPES = [
  { title: "Orangeries", body: "Solid perimeter with lantern roof for a room that feels like architecture." },
  { title: "Lean-to", body: "A refined, cost-effective extension for bungalows and period homes." },
  { title: "Victorian", body: "Faceted bay design that suits traditional British houses." },
  { title: "Edwardian", body: "Rectangular footprint that maximises internal floor space." },
  { title: "Gable-end", body: "Vaulted ceiling for grand proportions and dramatic light." },
  { title: "Glass Extensions", body: "Structural glass boxes designed with your architect." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Conservatories"
        title={<>Rooms that live <span className="text-brand-blue">with the light.</span></>}
        description="Architectural extensions engineered for year-round comfort, from classic conservatories to structural glass boxes."
      >
        <Link to="/quote" className="bg-navy text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors inline-flex items-center gap-2">
          Design your extension <ArrowRight className="size-4" />
        </Link>
      </PageHero>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-[36px] overflow-hidden aspect-[16/8] shadow-elegant">
            <img src={productConservatories} alt="Glass conservatory" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Six styles</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Find the right shape for your home.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TYPES.map((s) => (
              <div key={s.title} className="p-8 rounded-3xl bg-soft-gray hover:bg-white hover:shadow-elegant border border-transparent hover:border-navy/5 transition-all">
                <h3 className="text-2xl font-display font-semibold text-navy mb-3">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
