/**
 * Circular trust seals, drawn as inline SVG in the site palette.
 *
 * Deliberately NOT lifted from a competitor: the badge artwork on other
 * glazing sites carries their own claims (review counts, guarantee lengths,
 * price promises), which would be both their copyright and untrue here.
 * These use Affordable Glazings' own credentials instead.
 */
const SEALS = [
  { top: "10 Year", mid: "10", bottom: "Guarantee", ring: "Insurance backed" },
  { top: "Rated", mid: "4.9", bottom: "1,200+ reviews", ring: "Verified homeowners" },
  { top: "Energy", mid: "A++", bottom: "Rated glazing", ring: "Windows & doors" },
  { top: "Made in", mid: "UK", bottom: "Britain", ring: "Fabricated in-house" },
];

export function TrustSeals() {
  return (
    <section className="bg-canvas border-b border-[#ECECEC]">
      <div className="container-page py-8 md:py-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16">
          {SEALS.map((s) => (
            <li key={s.mid} className="flex items-center gap-3.5">
              <Seal top={s.top} mid={s.mid} bottom={s.bottom} />
              <span className="hidden sm:block">
                <span className="block text-sm font-semibold text-navy leading-tight">
                  {s.top} {s.bottom}
                </span>
                <span className="block text-xs text-ink-muted mt-0.5">{s.ring}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Seal({ top, mid, bottom }: { top: string; mid: string; bottom: string }) {
  return (
    <svg viewBox="0 0 100 100" className="size-14 md:size-16 shrink-0" role="img" aria-label={`${top} ${mid} ${bottom}`}>
      {/* filled orange seal face */}
      <circle cx="50" cy="50" r="47" fill="var(--cta)" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="white" strokeWidth="0.75" opacity="0.35" />
      {/* notched ticks around the rim, like a struck seal */}
      {Array.from({ length: 36 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="4.5"
          x2="50"
          y2="8"
          stroke="white"
          strokeWidth="0.9"
          opacity="0.5"
          transform={`rotate(${i * 10} 50 50)`}
        />
      ))}
      <text
        x="50"
        y="53"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="27"
        fontWeight="600"
        fill="white"
      >
        {mid}
      </text>
      <text
        x="50"
        y="70"
        textAnchor="middle"
        fontFamily="var(--font-sans)"
        fontSize="9"
        fontWeight="600"
        letterSpacing="1.2"
        fill="white"
      >
        ★★★
      </text>
    </svg>
  );
}
