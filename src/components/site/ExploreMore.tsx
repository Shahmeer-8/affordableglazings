import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import productWindows from "@/assets/product-windows.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productConservatories from "@/assets/product-conservatories.jpg";
import consGable from "@/assets/cons-gable.jpg";

const PAGES = [
  { key: "windows", to: "/windows" as const, t: "Windows", d: "Casement, sash, tilt & turn", img: productWindows },
  { key: "doors", to: "/doors" as const, t: "Doors", d: "Bi-fold, sliding & composite doors", img: productDoors },
  { key: "rooflights", to: "/rooflights" as const, t: "Rooflights", d: "Slim & pyramid roof lanterns", img: consGable },
  { key: "conservatories", to: "/conservatories" as const, t: "Conservatories", d: "Bespoke architectural glazing", img: productConservatories },
];

/** Shown on every category page — always the OTHER three, never the current one. */
export function ExploreMore({ current }: { current: "windows" | "doors" | "rooflights" | "conservatories" }) {
  const rest = PAGES.filter((p) => p.key !== current);

  return (
    <section className="py-12 md:py-14 bg-cta">
      <div className="container-page">
        <div className="flex items-end justify-between mb-8" data-reveal="up">
          <div>
            <p className="text-xs font-bold text-white/80 uppercase tracking-[0.22em] mb-3">Explore more</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white leading-[1.05]">Complete the look.</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {rest.map((r, i) => (
            <Link
              key={r.to}
              to={r.to}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
            >
              <img src={r.img} alt={r.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <h3 className="text-lg font-display font-semibold mb-0.5">{r.t}</h3>
                <p className="text-xs text-white/70 flex items-center gap-1.5">{r.d} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" /></p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
