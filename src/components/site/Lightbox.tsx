import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: { src: string; title: string; category: string }[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onIndexChange]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-sm animate-fade-in flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
      >
        <X className="size-5" />
      </button>

      <button
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index - 1 + items.length) % items.length);
        }}
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 size-11 md:size-14 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
      >
        <ChevronLeft className="size-5 md:size-6" />
      </button>
      <button
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((index + 1) % items.length);
        }}
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 size-11 md:size-14 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
      >
        <ChevronRight className="size-5 md:size-6" />
      </button>

      <figure
        className="max-w-5xl w-full max-h-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
        />
        <figcaption className="text-center text-white/80">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brass">{item.category}</span>
          <p className="text-white font-semibold mt-1">{item.title}</p>
          <p className="text-white/40 text-xs mt-1">{index + 1} / {items.length}</p>
        </figcaption>
      </figure>
    </div>
  );
}
