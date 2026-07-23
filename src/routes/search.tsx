import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search as SearchIcon } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ALL_PRODUCTS } from "@/data/products";

const PAGES: { title: string; to: string; hint: string }[] = [
  { title: "Windows", to: "/windows", hint: "Sash, casement, heritage, bay & flush windows" },
  { title: "Doors", to: "/doors", hint: "Composite, French, sliding & bi-folding doors" },
  { title: "Rooflights", to: "/rooflights", hint: "Slim and pyramid roof lanterns" },
  { title: "Conservatories", to: "/conservatories", hint: "Light-filled extensions and orangeries" },
  { title: "Gallery", to: "/gallery", hint: "Recent installations across the UK" },
  { title: "About & Contact", to: "/about", hint: "Our story and how to reach us" },
  { title: "Repairs", to: "/repairs", hint: "Glazing repairs and replacements" },
  { title: "Commercial", to: "/commercial", hint: "Commercial glazing projects" },
  { title: "FAQs", to: "/faq", hint: "Guarantees, finance, energy ratings & aftercare" },
];

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  head: () => ({
    meta: [
      { title: "Search | Affordable Glazings" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const navigate = useNavigate();
  const [value, setValue] = useState(q);
  const query = q.trim().toLowerCase();

  const products = query
    ? ALL_PRODUCTS.filter((p) =>
        [p.name, p.summary, p.category, ...p.features].join(" ").toLowerCase().includes(query),
      )
    : [];
  const pages = query
    ? PAGES.filter((p) => `${p.title} ${p.hint}`.toLowerCase().includes(query))
    : [];
  const total = products.length + pages.length;

  return (
    <>
      <PageHero
        eyebrow="Search"
        title={query ? <>Results for &ldquo;<span className="text-brand-blue">{q}</span>&rdquo;</> : <>Find your <span className="text-brand-blue">perfect fit.</span></>}
        description={query ? `${total} result${total === 1 ? "" : "s"} across products and pages.` : "Search our windows, doors, rooflights and conservatories."}
      >
        <form
          className="relative max-w-xl"
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/search", search: { q: value } });
          }}
        >
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-navy/40" />
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search products…"
            aria-label="Search"
            className="w-full pl-12 pr-28 py-4 rounded-full border border-navy/10 bg-white outline-none focus:border-brand-blue transition-colors"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors"
          >
            Search
          </button>
        </form>
      </PageHero>

      <section className="py-14 md:py-16">
        <div className="container-page">
          {!query && (
            <p className="text-navy/60">Type a product or style above to see matching pages.</p>
          )}

          {query && total === 0 && (
            <div className="max-w-lg">
              <p className="text-lg text-navy/70">No matches for &ldquo;{q}&rdquo;.</p>
              <p className="mt-2 text-navy/50">Try a broader term like &ldquo;windows&rdquo;, &ldquo;doors&rdquo; or &ldquo;conservatory&rdquo;, or <Link to="/about" hash="contact" className="text-brand-blue font-semibold hover:underline">ask our team</Link>.</p>
            </div>
          )}

          {products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-3xl overflow-hidden bg-white border border-navy/5 card-lift"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.images[0]} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-1.5">{p.category}</p>
                    <h3 className="text-lg font-display font-semibold text-navy mb-1.5">{p.name}</h3>
                    <p className="text-sm text-navy/60">{p.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {pages.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-navy/40 mb-4">Pages</h2>
              <div className="grid gap-2 max-w-2xl">
                {pages.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-navy/5 bg-white px-5 py-4 hover:border-brand-blue/30 transition-colors"
                  >
                    <span>
                      <span className="font-semibold text-navy">{p.title}</span>
                      <span className="block text-sm text-navy/55">{p.hint}</span>
                    </span>
                    <ArrowRight className="size-4 text-brand-blue shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
