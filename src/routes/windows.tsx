import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Palette, ShieldCheck, ThermometerSun } from "lucide-react";
import productWindows from "@/assets/product-windows.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/windows")({
  head: () => ({
    meta: [
      { title: "Premium Windows — Aluminium, uPVC & Timber | Affordable Glazings" },
      {
        name: "description",
        content:
          "A++ energy-rated windows in aluminium, uPVC and timber. Bespoke casement, sash, tilt & turn and heritage styles, precision-installed across the UK.",
      },
      { property: "og:title", content: "Premium Windows | Affordable Glazings" },
      { property: "og:description", content: "A++ energy rated windows, bespoke to your home." },
      { property: "og:url", content: "/windows" },
    ],
    links: [{ rel: "canonical", href: "/windows" }],
  }),
  component: WindowsPage,
});

const STYLES = [
  { title: "Casement", body: "Timeless side-hung windows with the widest choice of configurations." },
  { title: "Sash", body: "Heritage-authentic vertical sliders with modern thermal performance." },
  { title: "Tilt & Turn", body: "European engineering, twin function opening for effortless ventilation." },
  { title: "Bay & Bow", body: "Statement projections that flood period homes with natural light." },
  { title: "Flush", body: "Contemporary flat-fronted profiles for a minimalist aesthetic." },
  { title: "Fixed Frames", body: "Ultra-slim structural glazing for uninterrupted views." },
];

const FEATURES = [
  { icon: ThermometerSun, title: "0.8 U-Value", body: "Beyond passive-house thermal performance for lower bills." },
  { icon: ShieldCheck, title: "PAS 24 Secure", body: "Multi-point locking and laminated glass options as standard." },
  { icon: Palette, title: "200+ Colours", body: "RAL colour matching, dual-tone frames and heritage finishes." },
  { icon: Layers, title: "Triple Glazed", body: "Argon-filled cavities with soft-coat low-E glass." },
];

function WindowsPage() {
  return (
    <>
      <PageHero
        eyebrow="Windows"
        title={<>Windows that <span className="text-brand-blue">redefine</span> your view.</>}
        description="Precision-engineered aluminium, uPVC and timber windows — bespoke to your home, designed to last a lifetime."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/quote" className="bg-navy text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors inline-flex items-center gap-2">
            Get free quote <ArrowRight className="size-4" />
          </Link>
          <Link to="/gallery" className="border border-navy/10 bg-white text-navy px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/60 transition-colors">
            View gallery
          </Link>
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-[36px] overflow-hidden aspect-[16/8] shadow-elegant">
            <img src={productWindows} alt="Premium aluminium casement window" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-page">
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy max-w-2xl mb-14">
            Engineered for performance you can measure.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-8 rounded-3xl bg-soft-gray">
                <Icon className="size-6 text-brand-blue mb-6" />
                <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Styles</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">A style for every home.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STYLES.map((s) => (
              <div key={s.title} className="p-8 rounded-3xl bg-white border border-navy/5 hover:border-brand-blue/30 hover:shadow-elegant transition-all">
                <h3 className="text-2xl font-display font-semibold text-navy mb-3">{s.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to see the difference?" subtitle="Book a free in-home consultation — no obligation, no pressure, just expert advice." />
    </>
  );
}
