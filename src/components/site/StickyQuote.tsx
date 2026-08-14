import { Calculator } from "lucide-react";

/**
 * Floating shortcut to the footer quote form.
 *
 * Collapses to a circular icon button below `sm`. At full width the pill
 * covered roughly a third of a small phone's screen width, and it sits over
 * exactly the bottom-right corner where the card carousels put their scroll
 * indicator. The label is kept for screen readers either way.
 */
export function StickyQuote() {
  return (
    <a
      href="#quote"
      aria-label="Get a free instant quote"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-3 bg-white border border-navy/10 p-2 sm:pr-5 rounded-full shadow-elegant hover:scale-[1.03] transition-transform"
    >
      <span className="size-10 rounded-full bg-navy grid place-items-center text-[#FCFCFC] shadow-soft group-hover:bg-cta transition-colors">
        <Calculator className="size-4" />
      </span>
      <span className="hidden sm:block text-left pr-1">
        <span className="block text-[10px] font-mono uppercase text-navy/50 leading-none">Free</span>
        <span className="block text-sm font-bold text-navy leading-tight">Instant Quote</span>
      </span>
    </a>
  );
}
