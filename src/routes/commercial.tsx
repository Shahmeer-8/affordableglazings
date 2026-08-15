import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, FileText, HardHat, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Swipeable } from "@/components/site/Swipeable";
import shopLine from "@/assets/commercial/shop-line.jpg";
import shopFront from "@/assets/commercial/shop-front.jpg";
import smartWall from "@/assets/commercial/smart-wall.jpg";
import buildingFrontDoor from "@/assets/commercial/building-front-door.jpg";

const SERVICES = [
  { t: "Shop line", b: "Full-length structural glazing lines for retail frontages.", img: shopLine },
  { t: "Shop front", b: "Aluminium shopfronts, automatic entrances and screens.", img: shopFront },
  { t: "Smart wall", b: "Stick, unitised and structural curtain-walling systems.", img: smartWall },
  { t: "Building front door", b: "Steel, aluminium and fire-rated commercial entrance doors.", img: buildingFrontDoor },
];

const CREDENTIALS = [
  { icon: HardHat, k: "CHAS & SafeContractor", v: "Accredited for principal contractor work" },
  { icon: ShieldCheck, k: "£10m public liability", v: "Certificates issued on request" },
  { icon: FileText, k: "NBS-ready specifications", v: "Full O&M and CAD packages supplied" },
  { icon: BadgeCheck, k: "CE / UKCA marked", v: "Every system tested to BS EN standards" },
];

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
      {/* Credentials band. This page is read by specifiers and contractors,
          not homeowners — they are checking whether we can be put on a
          tender list, so the qualifications come before the product photos. */}
      <section className="bg-navy">
        <div className="container-page grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
          {CREDENTIALS.map(({ icon: Icon, k, v }) => (
            <div key={k} className="py-6 px-4 sm:px-6" data-reveal="up">
              <Icon className="size-5 text-brand-blue-2 mb-3" />
              <div className="text-sm font-semibold text-white leading-snug">{k}</div>
              <div className="text-xs text-white/50 mt-1 leading-snug">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        {/* container-page is load-bearing here: the row's -mx-6 bleed needs a
            padded parent to bleed out of, or it overhangs the viewport and
            drags a horizontal scrollbar onto the whole page on mobile. */}
        <div className="container-page">
          <div className="max-w-2xl mb-9" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">
              Systems we supply
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.08]">
              Four disciplines, one contract.
            </h2>
          </div>

          <Swipeable at="lg" gap="gap-5" className="lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <div
                key={s.t}
                data-reveal="up"
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
                className="group relative rounded-3xl bg-soft-gray overflow-hidden card-lift shrink-0 w-[62%] snap-start lg:w-auto lg:shrink"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-white/90 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {s.b}
                  </p>
                </div>
                {/* Orange name strip, matching the product range cards on
                    every consumer page — this was the only card family on the
                    site still finishing on plain grey. */}
                <div className="px-4 py-3.5 bg-cta">
                  <h3 className="text-base font-display font-semibold text-white">{s.t}</h3>
                </div>
              </div>
            ))}
          </Swipeable>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <div
            className="rounded-[32px] bg-black px-8 py-12 md:px-14 md:py-14 flex flex-col lg:flex-row lg:items-center gap-8"
            data-reveal="up"
          >
            <div className="flex-1">
              <p className="text-xs font-bold text-[#6F84D8] uppercase tracking-[0.22em] mb-3">
                Working with us
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-[1.1] text-balance">
                Send us the drawings.
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed max-w-lg">
                Attach elevations or a schedule to the enquiry form and our commercial team will come
                back with a measured take-off and budget costing.
              </p>
            </div>
            <a
              href="#quote"
              className="shrink-0 btn-shine bg-cta text-navy ring-1 ring-cta-hover px-8 py-4 rounded-full text-sm font-bold hover:bg-cta-hover hover:text-white transition-colors inline-flex items-center justify-center gap-2"
            >
              Start an enquiry <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  ),
});
