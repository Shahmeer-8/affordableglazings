import { Calculator } from "lucide-react";

export function StickyQuote() {
  return (
    <a href="#quote"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-white border border-navy/10 p-2 pr-5 rounded-full shadow-elegant hover:scale-[1.03] transition-transform"
    >
      <span className="size-10 rounded-full bg-navy grid place-items-center text-[#FCFCFC] shadow-soft group-hover:bg-cta transition-colors">
        <Calculator className="size-4" />
      </span>
      <span className="text-left pr-1">
        <span className="block text-[10px] font-mono uppercase text-navy/50 leading-none">Free</span>
        <span className="block text-sm font-bold text-navy leading-tight">Instant Quote</span>
      </span>
    </a>
  );
}
