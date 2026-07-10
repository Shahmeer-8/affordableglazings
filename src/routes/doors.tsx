import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, DoorOpen, KeyRound, ShieldCheck, Sparkles } from "lucide-react";
import productDoors from "@/assets/product-doors.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/doors")({
  head: () => ({
    meta: [
      { title: "Luxury Doors — Bi-Fold, Sliding, Composite | Affordable Glazings" },
      { name: "description", content: "Bespoke bi-fold, sliding, French, composite and entrance doors — engineered for security, style and seamless indoor-outdoor living." },
      { property: "og:url", content: "/doors" },
    ],
    links: [{ rel: "canonical", href: "/doors" }],
  }),
  component: DoorsPage,
});

const RANGE = [
  { title: "Bi-Fold Doors", body: "Fold-back panels for uninterrupted garden access.", tag: "Signature" },
  { title: "Sliding Doors", body: "Ultra-slim frames with expansive glass panes.", tag: "Modern" },
  { title: "French Doors", body: "Classic double-opening doors for elegant transitions.", tag: "Timeless" },
  { title: "Composite Doors", body: "Solid, secure and beautifully styled front entrances.", tag: "Security" },
  { title: "Patio Doors", body: "Space-saving sliders in premium aluminium.", tag: "Versatile" },
  { title: "Garage Doors", body: "Insulated sectional and roller garage door systems.", tag: "Practical" },
];

const FEATURES = [
  { icon: ShieldCheck, title: "PAS 24 secured", body: "Multi-point locking, anti-snap cylinders and laminated glass." },
  { icon: DoorOpen, title: "Effortless operation", body: "German-engineered running gear rated for decades of daily use." },
  { icon: KeyRound, title: "Smart-lock ready", body: "Optional smart lock and biometric access on composite entrances." },
  { icon: Sparkles, title: "Threshold options", body: "Low-threshold and level access options for accessibility." },
];

function DoorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Doors"
        title={<>Grand entrances, <span className="text-brand-blue">effortless</span> everyday.</>}
        description="From ultra-slim sliders to solid-core composite front doors — designed to welcome you home."
      >
        <Link to="/quote" className="bg-navy text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors inline-flex items-center gap-2">
          Get free quote <ArrowRight className="size-4" />
        </Link>
      </PageHero>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-[36px] overflow-hidden aspect-[16/8] shadow-elegant">
            <img src={productDoors} alt="Bi-fold doors opening to garden" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Full range</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Every door, thoughtfully engineered.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RANGE.map((s) => (
              <div key={s.title} className="p-8 rounded-3xl bg-soft-gray hover:bg-white hover:shadow-elegant border border-transparent hover:border-navy/5 transition-all">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand-blue mb-3">{s.tag}</p>
                <h3 className="text-2xl font-display font-semibold text-navy mb-3">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[36px] overflow-hidden aspect-[4/5]">
            <img src={productDoors} alt="Modern doors detail" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Features</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy leading-[1.05] mb-10">Built for a lifetime of use.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="p-6 rounded-2xl bg-white border border-navy/5">
                  <Icon className="size-5 text-brand-blue mb-4" />
                  <h3 className="font-semibold text-navy mb-1">{title}</h3>
                  <p className="text-sm text-navy/60 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
