import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";

/**
 * Product range grid for a category landing page. Renders the category's
 * products as cards linking to their dedicated /products/$slug pages.
 */
export function ProductRange({ category, dark = false }: { category: string; dark?: boolean }) {
  const cat = PRODUCT_CATEGORIES.find((c) => c.title === category);
  if (!cat) return null;

  return (
    <section id="range" className={`scroll-mt-28 py-24 md:py-28 ${dark ? "bg-soft-gray" : "bg-white"}`}>
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">The range</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">
              Choose your style.
            </h2>
          </div>
          <p className="text-navy/60 max-w-sm">{cat.tagline}</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${cat.products.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 max-w-4xl"}`}>
          {cat.products.map((p, i) => (
            <article
              key={p.slug}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 100}ms` }}
              className={`group relative overflow-hidden rounded-3xl border border-navy/5 card-lift flex flex-col ${dark ? "bg-white" : "bg-soft-gray"}`}
            >
              <Link to="/products/$slug" params={{ slug: p.slug }} className="block p-4 pb-0" aria-label={p.name}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </Link>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-semibold text-navy mb-2">{p.name}</h3>
                <p className="text-navy/60 text-sm mb-5">{p.summary}</p>
                <ul className="space-y-2 text-sm text-navy/70 mb-6">
                  {p.cardFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="size-4 mt-0.5 text-brand-blue shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between gap-3">
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="text-brand-blue font-semibold inline-flex items-center gap-2 text-sm group-hover:gap-3 transition-all"
                  >
                    View full details <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    to="/quote"
                    className="bg-navy text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-brand-blue transition-colors"
                  >
                    Get a quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
