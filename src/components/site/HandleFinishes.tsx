import leverBase from "@/assets/handles/lever-base.jpg";
import brassHandle from "@/assets/doors-hardware.jpg";

/** One real handle photo, filtered per finish, plus a dedicated brass photo
    where a filter alone couldn't sell the material. */
const FINISHES = [
  { name: "Chrome", img: leverBase, filter: "saturate(0.15) brightness(1.3) contrast(1.05)" },
  { name: "Brushed Nickel", img: leverBase, filter: "sepia(0.15) saturate(0.5) brightness(1.05)" },
  { name: "Brass", img: brassHandle, filter: "none" },
  { name: "Matt Black", img: leverBase, filter: "grayscale(1) brightness(0.32) contrast(1.5)" },
];

export function HandleFinishes() {
  return (
    <div className="mt-10">
      <p className="text-xs font-bold text-navy/50 uppercase tracking-[0.18em] mb-4">Handle finishes</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {FINISHES.map((f, i) => (
          <figure
            key={f.name}
            data-reveal="zoom"
            style={{ ["--reveal-delay" as never]: `${i * 60}ms` }}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={f.img}
              alt={`${f.name} handle finish`}
              loading="lazy"
              style={{ filter: f.filter }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/5 to-transparent" />
            <figcaption className="absolute bottom-3 left-3 right-3 text-[11px] font-semibold text-white">
              {f.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
