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
  { top: "Quick", mid: "24/7", bottom: "Turnaround", ring: "Same day quote" },
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
              <Seal top={s.top} mid={s.mid} bottom={s.bottom} ring={s.ring} />
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

function Seal({ top, mid, bottom, ring }: { top: string; mid: string; bottom: string; ring: string }) {
  // "24/7" carries twice the characters of "10" or "UK". Set at the same size
  // it would run past the inner ring and read as a wider, heavier seal than
  // the three beside it, so four-character glyphs step down to match them
  // optically rather than numerically.
  const midSize = mid.length >= 4 ? 19 : 27;
  // SVG text grows upward from its baseline, so shrinking the glyph without
  // raising the baseline would drop its optical centre ~3 units and leave it
  // sitting low against the stars. This keeps the centre where the 27px
  // glyphs put it.
  const midBaseline = mid.length >= 4 ? 50 : 53;

  // The wording beside the seal is hidden below `sm`, so on a phone the svg's
  // label is the only description a screen reader gets — it has to read as the
  // claim ("Quick Turnaround — Same day quote"), not as the glyph.
  return (
    <svg viewBox="0 0 100 100" className="size-14 md:size-16 shrink-0" role="img" aria-label={`${top} ${bottom} — ${ring}`}>
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
        y={midBaseline}
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize={midSize}
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
