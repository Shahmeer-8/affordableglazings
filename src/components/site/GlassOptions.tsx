import glassDouble from "@/assets/glass/double-glazing.webp";
import glassTriple from "@/assets/glass/triple-glazing.webp";
import glassAcoustic from "@/assets/glass/acoustic-glass.webp";
import glassObscure from "@/assets/glass/obscure-privacy.webp";
import glassGeorgian from "@/assets/glass/georgian-bars.webp";
import glassSolar from "@/assets/glass/solar-glass.webp";
import { Swipeable } from "./Swipeable";

const GLASS = [
  { title: "Double Glazing", body: "Argon-filled 28mm units with Low-E glass — our energy-rated standard.", img: glassDouble },
  { title: "Triple Glazing", body: "44mm sealed units with two Low-E coatings for passive-house performance.", img: glassTriple },
  { title: "Acoustic Glass", body: "6.4mm laminated inner pane engineered to absorb high-frequency traffic noise.", img: glassAcoustic },
  { title: "Obscure & Privacy", body: "Fifteen textured patterns — from stippled and cotswold to contemporary linear.", img: glassObscure },
  { title: "Georgian Bars", body: "Internal, external or through-pane astragals in every colour and profile.", img: glassGeorgian },
  { title: "Solar Glass", body: "Reflective low-emissivity coating that deflects summer heat gain without dimming natural light.", img: glassSolar },
];

/** Shared across windows/doors/rooflights — the glass build-up options are
    the same physical products regardless of which frame they're fitted to. */
export function GlassOptions() {
  return (
    <section className="py-12 md:py-14 bg-white">
      <div className="container-page">
        <div className="max-w-2xl mb-8" data-reveal="up">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Glass options</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.05] mb-3">The glass is where the magic happens.</h2>
          <p className="text-navy/60 leading-relaxed">More than 70% of a window's performance is decided by the glass — we build every sealed unit around the way you live.</p>
        </div>
        <Swipeable at="sm" className="sm:grid-cols-2 lg:grid-cols-3">
          {GLASS.map((g, i) => (
            <figure
              key={g.title}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 60}ms` }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/2] bg-navy/5 ring-1 ring-navy/5 shrink-0 w-[72%] snap-start sm:w-auto sm:shrink"
            >
              <img
                src={g.img}
                alt={g.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* The glass photography is deliberately pale, so the scrim has
                  to be near-solid where the caption sits — a light gradient
                  left white text unreadable on the frosted/clear panes. */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 from-0% via-navy/45 via-40% to-transparent to-75% transition-opacity duration-300 group-hover:from-navy" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-sm font-semibold text-white">{g.title}</h3>
                {/* max-height, not opacity: an opacity-only reveal keeps the
                    paragraph's layout box and pushes the title off the
                    bottom edge even when hidden. */}
                <p className="text-[11px] text-white/80 leading-snug max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-1">
                  {g.body}
                </p>
              </figcaption>
            </figure>
          ))}
        </Swipeable>
      </div>
    </section>
  );
}
