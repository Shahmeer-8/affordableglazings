/**
 * Compact continuous image reel — same seamless two-lap technique as
 * SupplierMarquee (translateX -50% across two identical laps), but for
 * project photography. Cards are a fixed landscape size so the whole
 * section reads as a slim strip rather than a full-height mosaic, and the
 * lap is repeated enough times that it always exceeds viewport width —
 * otherwise the loop shows a bare gap once it wraps (the bug fixed in
 * SupplierMarquee).
 */

type GalleryItem = { img: string; label: string };

const REPEAT = 2;

export function GalleryReel({
  items,
  reverse = false,
}: {
  items: GalleryItem[];
  reverse?: boolean;
}) {
  const lap = Array.from({ length: REPEAT }, () => items).flat();

  return (
    <div className="marquee" style={{ ["--marquee-duration" as never]: "34s" }}>
      <ul className={`marquee-track ${reverse ? "marquee-track-reverse" : ""}`}>
        {[0, 1].map((copy) => (
          <li key={copy} className="marquee-seq marquee-seq-lg" aria-hidden={copy === 1}>
            {lap.map((item, i) => (
              <figure
                key={`${copy}-${i}`}
                className="glass-glint group relative shrink-0 w-64 sm:w-72 aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={copy === 0 ? item.label : ""}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/5 to-transparent" />
                <figcaption className="absolute bottom-3 left-3 right-3 text-[11px] font-semibold text-white">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
