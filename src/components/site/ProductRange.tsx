import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { Swipeable } from "./Swipeable";

/**
 * Product range grid for a category landing page. Renders the category's
 * products as cards linking to their dedicated /products/$slug pages.
 */
export function ProductRange({ category, dark = false }: { category: string; dark?: boolean }) {
  const cat = PRODUCT_CATEGORIES.find((c) => c.title === category);
  if (!cat) return null;

  return (
    <section id="range" className={`scroll-mt-20 py-12 md:py-14 ${dark ? "bg-soft-gray" : "bg-canvas"}`}>
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
          <div className="max-w-lg">
            <p className="eyebrow mb-3">The range</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-navy leading-[1.08]">
              Choose your style.
            </h2>
          </div>
          <p className="text-ink-muted text-sm max-w-sm">{cat.tagline}</p>
        </div>

        {/* Compact cards: only the name and the actions sit in the card body.
            The summary and key features reveal over the image on hover, which
            keeps every card the same short height regardless of copy length. */}
        <Swipeable
          at="sm"
          className={`sm:grid-cols-2 ${cat.products.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2 lg:max-w-3xl"}`}
        >
          {cat.products.map((p, i) => (
            <article
              key={p.slug}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 90}ms` }}
              className={`group relative overflow-hidden rounded-2xl border border-line card-lift shrink-0 w-[78%] snap-start sm:w-auto sm:shrink ${dark ? "bg-white" : "bg-white"}`}
            >
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="block"
                aria-label={p.name}
              >
                <div className="glass-glint relative aspect-[5/4] overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={640}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-navy/85 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-400 p-5 flex flex-col justify-center">
                    <p className="text-white/90 text-sm leading-relaxed mb-3">{p.summary}</p>
                    <ul className="space-y-1.5">
                      {p.cardFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-white/75">
                          <Check className="size-3.5 mt-0.5 text-brass-2 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>

              <div className="flex items-center justify-between gap-3 px-4 py-3.5 bg-cta">
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="min-w-0 font-display font-semibold text-white text-base hover:text-navy transition-colors truncate"
                >
                  {p.name}
                </Link>
                <a
                  href="#quote"
                  className="shrink-0 bg-white text-cta px-3.5 py-2 rounded-full text-xs font-semibold hover:bg-navy hover:text-white transition-colors"
                >
                  Get a quote
                </a>
              </div>
            </article>
          ))}
        </Swipeable>
      </div>
    </section>
  );
}
