import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";

declare global {
  interface Window {
    __revealScan?: () => void;
  }
}

/**
 * Scroll-reveal is primarily driven by an inline <head> script (see __root.tsx)
 * that sets up the IntersectionObserver before hydration, so elements reveal on
 * first paint. This hook re-scans after client-side route transitions to observe
 * any freshly mounted [data-reveal] elements, and provides a fallback observer if
 * the inline script never ran.
 */
export function useScrollReveal() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let fallbackIo: IntersectionObserver | null = null;

    const scan = () => {
      if (window.__revealScan) {
        window.__revealScan();
        return;
      }
      // Fallback: inline script didn't run — create our own observer.
      if (typeof IntersectionObserver === "undefined") {
        document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
          el.dataset.visible = "true";
        });
        return;
      }
      if (!fallbackIo) {
        fallbackIo = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                (entry.target as HTMLElement).dataset.visible = "true";
                fallbackIo!.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
        );
      }
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-visible])")
        .forEach((el) => fallbackIo!.observe(el));
    };

    scan();

    const unsub = router.subscribe("onResolved", () => {
      requestAnimationFrame(scan);
    });

    return () => {
      fallbackIo?.disconnect();
      unsub();
    };
  }, [router]);
}
