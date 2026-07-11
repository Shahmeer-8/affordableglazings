import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-3xl aspect-[4/5] cursor-ew-resize touch-none ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label="Drag to compare before and after"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
      }}
    >
      <img src={after} alt={afterLabel} draggable={false} className="absolute inset-0 w-full h-full object-cover" />
      <span className="absolute bottom-4 right-4 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/90 text-navy px-3 py-1.5 rounded-full pointer-events-none">
        {afterLabel}
      </span>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={before} alt={beforeLabel} draggable={false} className="absolute inset-0 w-full h-full object-cover" />
        <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-[0.2em] bg-navy/80 text-white px-3 py-1.5 rounded-full pointer-events-none">
          {beforeLabel}
        </span>
      </div>

      <div
        className="absolute inset-y-0 w-0.5 bg-white/90 pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-11 rounded-full bg-white shadow-elegant grid place-items-center text-navy">
          <MoveHorizontal className="size-4" />
        </div>
      </div>
    </div>
  );
}
