import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, Search, X } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";
import windowsHero from "@/assets/windows-hero.jpg";
import doorsHero from "@/assets/doors-hero.jpg";
import consHero from "@/assets/cons-hero.jpg";
import consGable from "@/assets/cons-gable.jpg";
// The original artwork. The white-text variant existed only because the bar
// used to be near-black; on a white header the original reads as intended and
// the drawer can share the single file.
import logo from "@/assets/logo/mylogo.png";

const PHONE_DISPLAY = "0800 123 4567";
const PHONE_HREF = "tel:08001234567";

// Tracks `container-page` (80rem / 1.5rem padding) up to 1536px, so the logo
// lines up with every heading below it at the widths most people browse at.
//
// Above that it is allowed to widen. A nav carrying nine items, a phone number
// and a CTA has a different natural width from a 46ch paragraph, and holding
// it to 80rem on a 1920px screen left ~300px of empty white on each side with
// the whole bar bunched in the middle. Growing to 92rem closes roughly half of
// that while keeping the logo near the content's optical left edge.
const BAR = "mx-auto max-w-[80rem] 2xl:max-w-[92rem] px-6 2xl:px-10";

type MegaMenu = {
  key: string;
  label: string;
  to: string;
  category: string;
  image: string;
  blurb: string;
};

// Product categories open a full-width mega-menu; keys match PRODUCT_CATEGORIES titles.
const MEGA: MegaMenu[] = [
  { key: "windows", label: "Windows", to: "/windows", category: "Windows", image: windowsHero, blurb: "A++ rated, made-to-measure and installed by our own craftsmen." },
  { key: "doors", label: "Doors", to: "/doors", category: "Doors", image: doorsHero, blurb: "Composite, French, sliding and bi-fold doors, PAS 24 secured." },
  { key: "rooflights", label: "Roofs", to: "/rooflights", category: "Rooflights", image: consGable, blurb: "Slim and pyramid roof lanterns that flood rooms with daylight." },
  { key: "conservatories", label: "Conservatories", to: "/conservatories", category: "Conservatories", image: consHero, blurb: "Light-filled extensions built for year-round comfort." },
];

// Compact dropdowns on the right of the nav.
const SIMPLE: { key: string; label: string; links: { label: string; to: string; hash?: string }[] }[] = [
  {
    key: "about",
    label: "About",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Project Gallery", to: "/gallery" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
  {
    key: "support",
    label: "Support",
    links: [
      { label: "FAQs", to: "/faq" },
      { label: "Repairs", to: "/repairs" },
      { label: "Commercial", to: "/commercial" },
      { label: "Contact Us", to: "/about", hash: "contact" },
    ],
  },
];

export function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close everything on route change.
  useEffect(() => {
    setActive(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // A white bar sitting on `bg-canvas` (#fcfcfc) has almost no edge of its
  // own — a 1px hairline is the whole separation, and it disappears entirely
  // where a section is pure white. The shadow only appears once the page has
  // moved, so the header stays flat at rest and gains depth exactly when it
  // starts overlapping content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 120);
  };

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/search", search: { q: query } });
    setMobileOpen(false);
  };

  // Scroll to the on-page quote form if present, else route to the quote page.
  const goToQuote = () => {
    const el = typeof document !== "undefined" ? document.getElementById("quote") : null;
    setMobileOpen(false);
    setActive(null);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else navigate({ to: "/quote" });
  };

  const activeMega = MEGA.find((m) => m.key === active);

  // `sticky` must live on the <header> itself: sticky is clamped to its
  // containing block, so putting it on an inner div of a short header made the
  // bar scroll away entirely.
  return (
    <header className="sticky top-0 z-50">
      {/* Opaque, not translucent: the hero photography on every product page
          scrolls directly under this bar, and a see-through white header
          turns navy nav labels into low-contrast grey the moment a dark
          image passes behind them. */}
      <div
        className={`bg-white border-b transition-shadow duration-300 ${
          scrolled ? "border-navy/10 shadow-[0_1px_16px_rgba(20,27,69,0.10)]" : "border-navy/[0.07]"
        }`}
      >
        <div className="relative" onMouseLeave={scheduleClose}>
          <div className={`${BAR} flex items-center gap-5 xl:gap-8 h-20 lg:h-[88px]`}>
            {/* Logo — sits before the primary nav, with a comfortable gap */}
            <Link to="/" className="shrink-0">
              <img src={logo} alt="Affordable Glazing" className="h-11 lg:h-14 w-auto object-contain" />
            </Link>

            {/* Primary nav (desktop) */}
            {/* brand-blue (#2542C7) rather than brand-blue-2 (#94a8f2) for
                every hover/active state: the pale tint was picked to lift off
                a near-black bar and lands at 2.2:1 on white, where the royal
                blue is 7.8:1. */}
            <nav aria-label="Primary" className="hidden xl:flex items-center gap-5 xl:gap-7 text-[0.9rem] font-semibold text-navy">
              <Link
                to="/"
                onMouseEnter={() => openMenu("")}
                className="h-[88px] inline-flex items-center border-b-2 border-transparent hover:text-brand-blue -mb-px"
                activeProps={{ className: "text-brand-blue" }}
                activeOptions={{ exact: true }}
              >
                Home
              </Link>
              {MEGA.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  onMouseEnter={() => openMenu(m.key)}
                  onClick={() => navigate({ to: m.to })}
                  aria-expanded={active === m.key}
                  className={`inline-flex items-center gap-1 h-[88px] border-b-2 -mb-px transition-colors ${
                    active === m.key ? "text-brand-blue border-cta" : "border-transparent hover:text-brand-blue"
                  }`}
                >
                  {m.label}
                  <ChevronDown className={`size-3.5 transition-transform ${active === m.key ? "rotate-180" : ""}`} />
                </button>
              ))}
              <Link
                to="/gallery"
                onMouseEnter={() => openMenu("")}
                className="h-[88px] inline-flex items-center border-b-2 border-transparent hover:text-brand-blue -mb-px"
                activeProps={{ className: "text-brand-blue" }}
              >
                Gallery
              </Link>
            </nav>

            {/* Right cluster */}
            <div className="ml-auto flex items-center gap-3 lg:gap-4 shrink-0">
              <div className="hidden xl:flex items-center gap-4 text-[0.9rem] font-semibold text-navy/65">
                {SIMPLE.map((m) => (
                  <div
                    key={m.key}
                    className="relative self-stretch flex items-center"
                    onMouseEnter={() => openMenu(m.key)}
                  >
                    <button
                      type="button"
                      aria-expanded={active === m.key}
                      className={`inline-flex items-center gap-1 transition-colors ${active === m.key ? "text-brand-blue" : "hover:text-brand-blue"}`}
                    >
                      {m.label}
                      <ChevronDown className={`size-3.5 transition-transform ${active === m.key ? "rotate-180" : ""}`} />
                    </button>
                    {active === m.key && (
                      <div className="absolute right-0 top-full bg-white border border-navy/10 rounded-b-2xl shadow-elegant animate-mega-drop min-w-52 py-2">
                        {m.links.map((l) => (
                          <Link
                            key={l.label}
                            to={l.to}
                            hash={l.hash}
                            onClick={() => setActive(null)}
                            className="block px-5 py-2.5 text-sm font-medium text-navy/80 hover:text-brand-blue hover:bg-soft-gray transition-colors"
                          >
                            {l.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <a href={PHONE_HREF} className="hidden 2xl:block text-right leading-tight group">
                <span className="block text-base font-display font-semibold text-navy group-hover:text-brand-blue transition-colors">
                  {PHONE_DISPLAY}
                </span>
                <span className="block text-[11px] text-navy/55">Mon–Sun, 8am–6pm</span>
              </a>
              <a
                href={PHONE_HREF}
                className="2xl:hidden inline-flex items-center justify-center size-10 rounded-full bg-soft-gray text-navy hover:bg-navy hover:text-white transition-colors"
                aria-label="Call us"
              >
                <Phone className="size-4" />
              </a>

              <button
                type="button"
                onClick={goToQuote}
                /* #E67E22 keeps the brand CTA colour, but two things that were
                   invisible on the near-black bar break on white:
                     · white label on the orange is 2.85:1 — fails AA. Navy on
                       the same orange is 5.79:1, so the label flips.
                     · the orange block itself is only 2.85:1 against white,
                       under the 3:1 WCAG minimum for a UI control's edge. The
                       darker-orange ring (#C9690F, 3.81:1) supplies that edge
                       without altering the fill colour.
                   On hover it inverts to the dark orange with white text,
                   which is 3.81:1 and reads as a deliberate press state. */
                className="hidden sm:inline-flex items-center gap-2 bg-cta text-navy ring-1 ring-cta-hover pl-5 pr-4 py-2.5 rounded-full text-sm font-bold hover:bg-cta-hover hover:text-white transition-colors shadow-soft"
              >
                Free Quote
                <span className="inline-flex items-center justify-center size-5 rounded-full bg-navy/15">
                  <ChevronDown className="size-3.5 -rotate-90" />
                </span>
              </button>

              <button
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="xl:hidden inline-flex items-center justify-center size-10 rounded-full border border-navy/15 text-navy hover:bg-soft-gray transition-colors"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>

          {/* Full-width mega panel */}
          {activeMega && (
            <div
              /* border-navy/5 was enough to fold a white panel away from a
                 near-black bar. Now both surfaces are white, so this line is
                 the only thing saying "panel", not "taller header". */
              className="hidden xl:block absolute left-0 right-0 top-full bg-white border-t border-navy/10 shadow-elegant animate-mega-drop"
              onMouseEnter={() => openMenu(activeMega.key)}
            >
              <MegaPanel menu={activeMega} onNavigate={() => setActive(null)} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <MobileDrawer
          query={query}
          setQuery={setQuery}
          onSubmitSearch={submitSearch}
          onQuote={goToQuote}
          expanded={mobileSection}
          setExpanded={setMobileSection}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}

function MegaPanel({ menu, onNavigate }: { menu: MegaMenu; onNavigate: () => void }) {
  const cat = PRODUCT_CATEGORIES.find((c) => c.title === menu.category);
  const products = cat?.products ?? [];

  return (
    <div className={`${BAR} py-10 grid grid-cols-12 gap-10`}>
      {/* Product range */}
      <div className="col-span-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy/40 mb-4 pb-2 border-b border-navy/5">
          The {menu.label} range
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              onClick={onNavigate}
              className="group block rounded-xl px-3 py-2.5 -mx-3 hover:bg-soft-gray transition-colors"
            >
              <span className="block text-sm font-semibold text-navy group-hover:text-brand-blue transition-colors">
                {p.name}
              </span>
              <span className="block text-xs text-navy/50 leading-snug mt-0.5">{p.summary}</span>
            </Link>
          ))}
        </div>
        <Link
          to={menu.to}
          onClick={onNavigate}
          className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-brand-blue hover:gap-3 transition-all"
        >
          View all {menu.label.toLowerCase()}
          <ChevronDown className="size-4 -rotate-90" />
        </Link>
      </div>

      {/* Promo card */}
      <div className="col-span-4">
        <div className="relative rounded-2xl overflow-hidden h-full min-h-52 flex flex-col justify-end p-6 text-white">
          <img src={menu.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10" />
          <div className="relative">
            <p className="text-sm text-white/85 leading-relaxed mb-4">{menu.blurb}</p>
            <div className="flex flex-col gap-2">
              <a
                href="#quote"
                onClick={onNavigate}
                className="inline-flex items-center justify-center gap-2 bg-white text-navy px-4 py-2.5 rounded-full text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors"
              >
                Book a free survey
              </a>
              <Link
                to="/gallery"
                onClick={onNavigate}
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                View gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({
  query,
  setQuery,
  onSubmitSearch,
  onQuote,
  expanded,
  setExpanded,
  onClose,
}: {
  query: string;
  setQuery: (v: string) => void;
  onSubmitSearch: (e: React.FormEvent) => void;
  onQuote: () => void;
  expanded: string | null;
  setExpanded: (v: string | null) => void;
  onClose: () => void;
}) {
  return (
    <div className="xl:hidden fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between h-16 px-5 border-b border-navy/10">
          <img src={logo} alt="Affordable Glazing" className="h-9 w-auto object-contain" />
          <button aria-label="Close menu" onClick={onClose} className="inline-flex items-center justify-center size-10 rounded-full border border-navy/10 text-navy">
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          <form onSubmit={onSubmitSearch} className="relative mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-navy/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              className="w-full pl-11 pr-4 py-3 rounded-full bg-soft-gray text-sm text-navy outline-none focus:bg-white border border-transparent focus:border-brand-blue/40 transition-colors"
            />
          </form>

          <nav className="flex flex-col" aria-label="Mobile">
            <Link to="/" onClick={onClose} className="py-3.5 text-base font-semibold text-navy border-b border-navy/5">
              Home
            </Link>
            {MEGA.map((m) => {
              const cat = PRODUCT_CATEGORIES.find((c) => c.title === m.category);
              const isOpen = expanded === m.key;
              return (
                <div key={m.key} className="border-b border-navy/5">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : m.key)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between py-3.5 text-base font-semibold text-navy"
                  >
                    {m.label}
                    <ChevronDown className={`size-4 text-navy/40 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pb-3 pl-1 flex flex-col gap-0.5 animate-fade-in">
                      {(cat?.products ?? []).map((p) => (
                        <Link
                          key={p.slug}
                          to="/products/$slug"
                          params={{ slug: p.slug }}
                          onClick={onClose}
                          className="py-2 text-sm text-navy/70 hover:text-brand-blue"
                        >
                          {p.name}
                        </Link>
                      ))}
                      <Link to={m.to} onClick={onClose} className="py-2 text-sm font-semibold text-brand-blue">
                        View all {m.label.toLowerCase()} →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}

            <Link to="/gallery" onClick={onClose} className="py-3.5 text-base font-semibold text-navy border-b border-navy/5">
              Gallery
            </Link>

            {SIMPLE.map((s) => {
              const isOpen = expanded === s.key;
              return (
                <div key={s.key} className="border-b border-navy/5">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : s.key)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between py-3.5 text-base font-semibold text-navy"
                  >
                    {s.label}
                    <ChevronDown className={`size-4 text-navy/40 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pb-3 pl-1 flex flex-col gap-0.5 animate-fade-in">
                      {s.links.map((l) => (
                        <Link key={l.label} to={l.to} hash={l.hash} onClick={onClose} className="py-2 text-sm text-navy/70 hover:text-brand-blue">
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="p-5 border-t border-navy/10 flex flex-col gap-3">
          <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-navy font-semibold">
            <Phone className="size-4 text-brand-blue" /> {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            onClick={onQuote}
            /* Same treatment as the desktop Free Quote button — this drawer
               is a white panel too, so white-on-orange fails here for the
               identical reason. */
            className="bg-cta text-navy ring-1 ring-cta-hover text-center py-3.5 rounded-full text-sm font-bold hover:bg-cta-hover hover:text-white transition-colors"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
