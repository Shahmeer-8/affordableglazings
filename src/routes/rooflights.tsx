import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductRange } from "@/components/site/ProductRange";
import { ExploreMore } from "@/components/site/ExploreMore";
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
      <section className="relative min-h-[58vh] flex items-end overflow-hidden">
        <img
          src={consGable}
          alt="Glazed roof lantern glowing at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
        <div className="container-page relative z-10 w-full pb-10 pt-14 text-white">
          <p className="eyebrow eyebrow-on-dark mb-3" data-reveal="fade">Rooflights collection</p>
          <h1 className="display-1 max-w-5xl text-balance" data-reveal="up">
            Daylight, delivered <span className="italic text-brand-blue-2">from above.</span>
          </h1>
          <p
            className="mt-5 text-base md:text-lg text-white/75 measure-body"
            data-reveal="up"
            style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}
          >
            Precision-built roof glazing that brightens extensions without losing warmth.
          </p>
          <div
            className="mt-7 flex flex-wrap gap-3"
            data-reveal="up"
            style={{ ["--reveal-delay" as string]: "240ms" } as Record<string, string>}
          >
            <a
              href="#quote"
              className="btn-shine bg-transparent border border-cta text-cta px-8 py-4 rounded-full text-sm font-semibold hover:bg-cta hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Get your free quote <ArrowRight className="size-4" />
            </a>
            <Link
              to="/gallery"
              className="border border-white text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-navy transition-colors"
            >
              Explore the gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-14 bg-white">
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

      <ExploreMore current="rooflights" />

    </>
  );
}
