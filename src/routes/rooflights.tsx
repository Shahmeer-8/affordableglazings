import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductRange } from "@/components/site/ProductRange";
import { CtaBanner } from "@/components/site/CtaBanner";
import consGable from "@/assets/cons-gable.jpg";

export const Route = createFileRoute("/rooflights")({
  head: () => ({
    meta: [
      { title: "Rooflights & Roof Lanterns | Affordable Glazings" },
      {
        name: "description",
        content:
          "Precision-built roof glazing that brightens extensions while maintaining thermal comfort. Slim and pyramid roof lanterns, engineered in Britain.",
      },
      { property: "og:url", content: "/rooflights" },
    ],
    links: [{ rel: "canonical", href: "/rooflights" }],
  }),
  component: RooflightsPage,
});

function RooflightsPage() {
  return (
    <>
      {/* Immersive hero */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden">
        <img
          src={consGable}
          alt="Glazed roof lantern glowing at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
        <div className="container-page relative z-10 pb-16 pt-20 text-white">
          <span className="inline-block text-[11px] font-bold tracking-[0.28em] uppercase text-white/70 mb-6" data-reveal="fade">
            Rooflights Collection
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] max-w-5xl text-balance" data-reveal="up">
            Daylight, delivered <span className="italic text-brand-blue-2">from above.</span>
          </h1>
          <p
            className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed"
            data-reveal="up"
            style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}
          >
            Precision-built roof glazing that brightens extensions while maintaining thermal comfort — from ultra-slim lanterns to
            architectural pyramid designs.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-3"
            data-reveal="up"
            style={{ ["--reveal-delay" as string]: "240ms" } as Record<string, string>}
          >
            <Link
              to="/quote"
              className="btn-shine bg-white text-navy px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Get your free quote <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/gallery"
              className="border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Explore the gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container-page grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5" data-reveal="left">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Why roof glazing</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] text-balance">
              The most dramatic light in a home never comes through a wall.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-navy/65 leading-relaxed" data-reveal="right">
            <p>
              Overhead glazing transforms kitchens, extensions and flat-roofed living spaces — pulling daylight deep into the plan and
              turning the sky into part of the room. Our rooflights are precision-built with thermally broken aluminium and
              high-performance glass, so all that light never comes at the cost of comfort.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {["Thermally broken aluminium", "Self-cleaning glass options", "U-values from 1.0 W/m²K", "Made to measure in Britain"].map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm text-navy font-medium">
                  <CheckCircle2 className="size-5 text-brand-blue shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product range */}
      <ProductRange category="Rooflights" dark />

      <CtaBanner
        title="Need specification advice?"
        subtitle="Share your plans, preferred system, or any inspiration photos and we'll respond with a tailored estimate within 24 hours."
      />
    </>
  );
}
