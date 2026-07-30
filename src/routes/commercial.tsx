import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
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
      <section className="py-16 bg-white">
        <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.t}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
              className="group relative rounded-3xl bg-soft-gray overflow-hidden"
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
              <div className="p-4">
                <h3 className="text-base font-display font-semibold text-navy">{s.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  ),
});
