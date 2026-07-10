import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

/**
 * Global scroll-reveal observer. Any element with [data-reveal] gets
 * data-visible="true" once it enters the viewport, triggering the CSS transition.
 * Elements can opt in with variants: data-reveal="up|fade|left|right|zoom".
 * Delay via style={{ ["--reveal-delay" as any]: "120ms" }}.
 */
export function useScrollReveal() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-visible])").forEach((el) => io.observe(el));
    };

    scan();
    // Rescan after route transitions
    const unsub = router.subscribe("onResolved", () => {
      requestAnimationFrame(() => {
        // reset for new elements
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          if (!el.dataset.visible) io.observe(el);
        });
      });
    });

    return () => {
      io.disconnect();
      unsub();
    };
  }, [router]);
}
