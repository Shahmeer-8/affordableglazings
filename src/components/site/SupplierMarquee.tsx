import brand1 from "@/assets/brands/brand1.jpeg";
import brand2 from "@/assets/brands/brand2.jpeg";
import brand3 from "@/assets/brands/brand3.jpeg";
import brand4 from "@/assets/brands/brand4.jpeg";
import brand5 from "@/assets/brands/brand5.jpeg";
import brand6 from "@/assets/brands/brand6.jpeg";
import brand7 from "@/assets/brands/brand7.jpeg";

const SUPPLIER_LOGOS = [
  { src: brand1, name: "Comar" },
  { src: brand7, name: "REHAU" },
  { src: brand5, name: "Deceuninck" },
  { src: brand3, name: "Aluplast" },
  { src: brand4, name: "Cortizo" },
  { src: brand2, name: "Smart Architectural Aluminium" },
  { src: brand6, name: "FENSA Registered Company" },
];

/**
 * Continuous logo slider. The track holds two identical sequences and
 * translates by exactly -50%, so the loop is seamless with no JS. Each logo
 * sits on a white tile because the supplied artwork has mixed grounds (the
 * Deceuninck mark is white-on-blue) — tiles keep the row visually even.
 */
export function SupplierMarquee({
  title = "Trusted suppliers",
  dark = false,
}: { title?: string; dark?: boolean }) {
  return (
    <section className={`py-10 md:py-12 overflow-hidden ${dark ? "bg-navy" : "bg-canvas border-y border-line"}`}>
      <div className="container-page">
        <p className={`eyebrow ${dark ? "eyebrow-on-dark" : ""} mb-6`}>{title}</p>
      </div>

      <div className="marquee">
        <ul className="marquee-track">
          {[0, 1].map((copy) => (
            <li key={copy} className="marquee-seq" aria-hidden={copy === 1}>
              {SUPPLIER_LOGOS.map((logo) => (
                <span
                  key={`${copy}-${logo.name}`}
                  className="shrink-0 grid place-items-center h-20 w-40 rounded-xl bg-white border border-line/70 px-4"
                >
                  <img
                    src={logo.src}
                    alt={copy === 0 ? logo.name : ""}
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
