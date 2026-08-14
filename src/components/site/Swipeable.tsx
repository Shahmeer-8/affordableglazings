import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Bp = "sm" | "md" | "lg";

/* Tailwind scans source text, so every breakpoint variant has to appear
   literally — `${at}:grid` would never make it into the stylesheet. */
const GRID: Record<Bp, string> = {
  sm: "sm:grid sm:overflow-visible sm:snap-none",
  md: "md:grid md:overflow-visible md:snap-none",
  lg: "lg:grid lg:overflow-visible lg:snap-none",
};
/* Edge bleed: the row runs to the screen edge while scrolling so the next
   card is cut by the viewport rather than by a gutter — that framing is
   what reads as "swipeable". Cancelled once it becomes a grid. */
const BLEED: Record<Bp, string> = {
  sm: "-mx-6 px-6 sm:mx-0 sm:px-0",
  md: "-mx-6 px-6 md:mx-0 md:px-0",
  lg: "-mx-6 px-6 lg:mx-0 lg:px-0",
};
const MASK: Record<Bp, string> = {
  sm: "cards-scroll",
  md: "cards-scroll cards-scroll-md",
  lg: "cards-scroll cards-scroll-lg",
};
const HIDE_CUE: Record<Bp, string> = { sm: "sm:hidden", md: "md:hidden", lg: "lg:hidden" };

/**
 * A row of cards that is a snap-scrolling carousel on small screens and a
 * plain CSS grid from `at` upwards.
 *
 * Below `at` it also renders a live scroll indicator. Three separate signals
 * tell the visitor more content exists — the next card peeking past the
 * screen edge, the fade mask over it, and this bar showing how much of the
 * row they've seen. The bar is the one that survives on a card that happens
 * to end flush with the edge, which is why it's here rather than relying on
 * the peek alone.
 *
 * It only appears when the row genuinely overflows, so a two-card section on
 * a large phone never shows a cue it can't honour.
 */
export function Swipeable({
  children,
  at = "sm",
  gap = "gap-4",
  bleed = true,
  cue = true,
  tone = "light",
  className = "",
  outerClassName = "",
  reveal,
  as: Row = "div",
}: {
  children: ReactNode;
  /** Breakpoint at which the carousel becomes a grid. */
  at?: Bp;
  gap?: string;
  bleed?: boolean;
  cue?: boolean;
  /** Background the cue sits on, so the track stays visible either way. */
  tone?: "light" | "dark";
  /** Element for the row — `ol`/`ul` where the children are a real list. */
  as?: "div" | "ol" | "ul";
  /** Classes for the row itself — grid columns, backgrounds, etc. */
  className?: string;
  /** Classes for the wrapper — grid placement, margins. */
  outerClassName?: string;
  reveal?: "up" | "left" | "right" | "fade" | "zoom";
}) {
  // A callback ref rather than `ref={ref}` — `as` widens the row to a union
  // of div/ol/ul, and no single RefObject type satisfies all three.
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [pages, setPages] = useState(0);
  const count = Children.count(children);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // 8px of slack — sub-pixel rounding alone shouldn't summon a cue.
    if (max <= 8) {
      setPages(0);
      return;
    }
    setPages(Math.max(2, Math.round(el.scrollWidth / el.clientWidth)));
    setProgress(Math.min(1, el.scrollLeft / max));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [measure]);

  // ResizeObserver watches the row's own box, which doesn't change when the
  // item count does — a filtered result set can go from two cards to six
  // with identical outer dimensions and a completely different scrollWidth.
  useEffect(measure, [count, measure]);

  const thumb = 100 / pages;

  return (
    <div className={outerClassName} data-reveal={reveal}>
      <Row
        ref={(el: HTMLElement | null) => {
          ref.current = el;
        }}
        style={
          {
            "--fade-l": pages > 1 && progress > 0.01 ? "10%" : "0%",
            "--fade-r": pages > 1 && progress < 0.99 ? "18%" : "0%",
          } as React.CSSProperties
        }
        className={`${MASK[at]} flex ${gap} overflow-x-auto snap-x snap-mandatory ${GRID[at]} ${
          bleed ? BLEED[at] : ""
        } ${className}`}
      >
        {children}
      </Row>

      {cue && pages > 1 && (
        <div className={`mt-4 flex items-center gap-3 ${HIDE_CUE[at]}`} aria-hidden="true">
          <div
            className={`h-[3px] flex-1 rounded-full overflow-hidden ${
              tone === "dark" ? "bg-white/15" : "bg-navy/10"
            }`}
          >
            <div
              className="h-full rounded-full bg-cta"
              style={{
                width: `${thumb}%`,
                // Travel is the leftover track, so the thumb lands flush
                // against the right edge exactly at the end of the scroll.
                marginInlineStart: `${progress * (100 - thumb)}%`,
              }}
            />
          </div>
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.16em] whitespace-nowrap ${
              tone === "dark" ? "text-white/45" : "text-navy/40"
            }`}
          >
            {progress > 0.99 ? "End" : "Swipe"}
          </span>
        </div>
      )}
    </div>
  );
}
