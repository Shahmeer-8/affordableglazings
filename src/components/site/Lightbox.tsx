import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/** Horizontal travel, in px, that counts as a swipe rather than a tap. */
const SWIPE_THRESHOLD = 50;

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
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const go = (delta: number) => onIndexChange((index + delta + items.length) % items.length);

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
      className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-sm animate-fade-in flex items-center justify-center p-4 pb-24 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onTouchStart={(e) => {
        const t = e.touches[0];
        touchStart.current = { x: t.clientX, y: t.clientY };
      }}
      onTouchEnd={(e) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - start.x;
        // Vertical intent shouldn't page the gallery — only act when the
        // gesture is decisively sideways.
        if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(t.clientY - start.y)) return;
        go(dx < 0 ? 1 : -1);
      }}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
      >
        <X className="size-5" />
      </button>

      {/* Docked as a pair at the bottom on phones, flanking the image from
          the screen edges on desktop. Centred vertically on a narrow screen
          they sat directly on top of the photo, covering the part of the
          image the visitor opened the lightbox to look at. */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-4 md:contents">
        <button
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className="md:absolute md:left-8 md:top-1/2 md:-translate-y-1/2 size-12 md:size-14 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
        >
          <ChevronLeft className="size-5 md:size-6" />
        </button>
        <button
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className="md:absolute md:right-8 md:top-1/2 md:-translate-y-1/2 size-12 md:size-14 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
        >
          <ChevronRight className="size-5 md:size-6" />
        </button>
      </div>

      <figure
        className="max-w-5xl w-full max-h-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.title}
          className="max-h-[58vh] md:max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
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
