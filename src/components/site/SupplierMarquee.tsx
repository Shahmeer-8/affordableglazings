import brand1 from "@/assets/brands/brand1.jpeg";
import brand2 from "@/assets/brands/brand2.jpeg";
import brand3 from "@/assets/brands/brand3.jpeg";
import brand4 from "@/assets/brands/brand4.jpeg";
import brand5 from "@/assets/brands/brand5.jpeg";
import brand6 from "@/assets/brands/brand6.jpeg";
import brand7 from "@/assets/brands/brand7.jpeg";

const SUPPLIER_LOGOS = [
  // { src: brand1, name: "Comar" },
  { src: brand7, name: "REHAU" },
  { src: brand5, name: "Deceuninck" },
  { src: brand3, name: "Aluplast" },
  { src: brand4, name: "Cortizo" },
  { src: brand2, name: "Smart Architectural Aluminium" },
  // { src: brand6, name: "FENSA Registered Company" },
];

// A single lap of the reel must be wider than any real viewport, or the two
// laps together fall short of the screen width and bare background shows
// through before the loop catches up (exactly the "gap after the images"
// the reel used to show once a couple of logos were removed). Repeating the
// list inside one lap — rather than just laying two laps end to end —
// guarantees that regardless of how many logos are configured.
const REPEAT = 3;

/**
 * Continuous logo slider. The track holds two identical laps and translates
 * by exactly -50%, so the loop is seamless with no JS. Each logo sits on a
 * white tile because the supplied artwork has mixed grounds (the Deceuninck
 * mark is white-on-blue) — tiles keep the row visually even.
 */
export function SupplierMarquee({
  title = "Trusted suppliers",
  dark = false,
}: { title?: string; dark?: boolean }) {
  const lap = Array.from({ length: REPEAT }, () => SUPPLIER_LOGOS).flat();

  return (
    <section className={`py-10 md:py-12 overflow-hidden ${dark ? "bg-navy" : "bg-canvas border-y border-line"}`}>
      <div className="container-page">
        <p className={`eyebrow ${dark ? "eyebrow-on-dark" : ""} mb-6`}>{title}</p>
      </div>

      <div className="marquee">
        <ul className="marquee-track">
          {[0, 1].map((copy) => (
            <li key={copy} className="marquee-seq" aria-hidden={copy === 1}>
              {lap.map((logo, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="shrink-0 grid place-items-center h-20 w-40 rounded-xl bg-white border border-[#EAEAEA] shadow-sm px-4"
                >
                  <img
                    src={logo.src}
                    alt={copy === 0 && i < SUPPLIER_LOGOS.length ? logo.name : ""}
                    loading="lazy"
                    className="max-h-12 w-auto object-contain"
                  />
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
