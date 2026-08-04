/**
 * Trust badges, drawn from scratch as inline SVG in the site palette.
 *
 * These were previously four downloaded .webp files taken from another glazing
 * brand's site. That was a genuine copyright exposure — the artwork, the
 * colours and the claims printed on them ("15 year", "over 50,000 reviews")
 * were all theirs, and two of those claims were not even true of this company.
 * Redrawing them means the artwork is ours, the palette matches the site, and
 * every badge states only Affordable Glazings' own credentials.
 */

type Badge = {
  slug: string;
  top: string;
  glyph: string;
  bottom: string;
  bg: string;
  fg: string;
};

/* Four palette colours, each contrast-checked against its own label:
   navy 15.6:1 · orange w/ navy text 5.79:1 · royal blue 7.83:1 · black 21:1.
   White on the orange would only reach 2.85:1, so that badge takes navy text. */
const BADGES: Badge[] = [
  { slug: "guarantee", top: "10 Year Guarantee", glyph: "10", bottom: "Insurance backed", bg: "#141B45", fg: "#FFFFFF" },
  { slug: "reviews", top: "Rated by 1,200+", glyph: "4.9", bottom: "Verified homeowners", bg: "#E67E22", fg: "#141B45" },
  { slug: "britain", top: "Made in Britain", glyph: "UK", bottom: "Fabricated in-house", bg: "#2542C7", fg: "#FFFFFF" },
  { slug: "price", top: "Price Promise", glyph: "£", bottom: "Like-for-like", bg: "#000000", fg: "#FFFFFF" },
];

export function TrustBadgeStrip() {
  return (
    <section className="py-8 md:py-10 bg-white border-b border-line">
      <div className="container-page">
        <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {BADGES.map((b) => (
            <li key={b.slug}>
              <Seal badge={b} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Seal({ badge }: { badge: Badge }) {
  const { slug, top, glyph, bottom, bg, fg } = badge;
  const topArc = `arc-top-${slug}`;
  const bottomArc = `arc-bottom-${slug}`;

  return (
    <svg
      viewBox="0 0 100 100"
      className="size-20 md:size-24 shrink-0"
      role="img"
      aria-label={`${top} — ${bottom}`}
    >
      <defs>
        {/* Sweep 1 runs left → right over the top; sweep 0 runs left → right
            under the bottom, which keeps the lower text the right way up.
            The two radii differ on purpose: glyphs on the top arc grow
            outward from the baseline, glyphs on the bottom arc grow inward,
            so an equal radius would push the top band into the rim notches. */}
        <path id={topArc} d="M 17,50 A 33,33 0 0 1 83,50" fill="none" />
        <path id={bottomArc} d="M 10,50 A 40,40 0 0 0 90,50" fill="none" />
      </defs>

      <circle cx="50" cy="50" r="48" fill={bg} />
      <circle cx="50" cy="50" r="41" fill="none" stroke={fg} strokeWidth="0.75" opacity="0.35" />

      {/* Notched rim, like a struck seal */}
      {Array.from({ length: 36 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="4.5"
          x2="50"
          y2="8"
          stroke={fg}
          strokeWidth="0.9"
          opacity="0.45"
          transform={`rotate(${i * 10} 50 50)`}
        />
      ))}

      <text fill={fg} fontFamily="var(--font-sans)" fontSize="7.5" fontWeight="700" letterSpacing="0.4">
        <textPath href={`#${topArc}`} startOffset="50%" textAnchor="middle">
          {top.toUpperCase()}
        </textPath>
      </text>

      <text
        x="50"
        y="57"
        textAnchor="middle"
        fill={fg}
        fontFamily="var(--font-display)"
        fontSize="26"
        fontWeight="600"
      >
        {glyph}
      </text>

      <text
        fill={fg}
        fontFamily="var(--font-sans)"
        fontSize="7"
        fontWeight="600"
        letterSpacing="0.4"
        opacity="0.85"
      >
        <textPath href={`#${bottomArc}`} startOffset="50%" textAnchor="middle">
          {bottom.toUpperCase()}
        </textPath>
      </text>
    </svg>
  );
}
