import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const NAV = [
  { to: "/windows", label: "Windows" },
  { to: "/doors", label: "Doors" },
  { to: "/conservatories", label: "Conservatories" },
  { to: "/gallery", label: "Gallery" },
  { to: "/finance", label: "Finance" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-navy/5 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-page h-20 flex items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-display font-semibold tracking-tight text-navy shrink-0">
          Affordable<span className="text-brand-blue">Glazings</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7 text-sm font-medium text-navy/80">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-brand-blue transition-colors"
              activeProps={{ className: "text-brand-blue" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:08001234567"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-blue transition-colors"
          >
            <Phone className="size-4" />
            0800 123 4567
          </a>
          <Link
            to="/quote"
            className="hidden sm:inline-flex bg-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-all duration-300 hover:-translate-y-0.5 shadow-soft"
          >
            Free Quote
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden inline-flex items-center justify-center size-11 rounded-full border border-navy/10 bg-white/80 backdrop-blur"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-navy/5 bg-white/95 backdrop-blur-lg animate-fade-in">
          <nav className="container-page py-6 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-navy hover:text-brand-blue"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-3 bg-navy text-white text-center py-3 rounded-full text-sm font-semibold"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
