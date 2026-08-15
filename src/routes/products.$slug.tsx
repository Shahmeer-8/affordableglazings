import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Lightbox } from "@/components/site/Lightbox";
import { getProduct, type Product } from "@/data/products";
import { SupplierMarquee } from "@/components/site/SupplierMarquee";
import { TrustBadgeStrip } from "@/components/site/TrustBadgeStrip";
import { OurProcess } from "@/components/site/OurProcess";
import { Swipeable } from "@/components/site/Swipeable";

const CATEGORY_PATHS: Record<string, string> = {
  Windows: "/windows",
  Doors: "/doors",
  Rooflights: "/rooflights",
  Conservatories: "/conservatories",
};

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    return {
      meta: [
        { title: `${product?.name ?? "Product"} | Affordable Glazings` },
        { name: "description", content: product?.tagline ?? "" },
        { property: "og:url", content: `/products/${product?.slug ?? ""}` },
        ...(product ? [{ property: "og:image", content: product.images[0] }] : []),
      ],
      links: [{ rel: "canonical", href: `/products/${product?.slug ?? ""}` }],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={`Product range · ${product.category}`}
        title={<>{product.name.replace(/\.$/, "")}<span className="text-brand-blue">.</span></>}
        description={product.tagline}
        image={product.images[0]}
      >
        {/* Full-width and stacked on mobile. Side by side, "Back to all
            conservatories" is long enough to wrap the pair onto two rows
            anyway, so they may as well be two clean full-width tap targets
            rather than two ragged pills. */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 bg-transparent border border-cta text-cta w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-cta hover:text-white transition-colors"
          >
            Request a quote <ArrowRight className="size-4" />
          </a>
          <Link
            to={CATEGORY_PATHS[product.category] ?? "/"}
            hash="range"
            className="inline-flex items-center justify-center gap-2 border border-cta text-cta w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-cta hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to all {product.category.toLowerCase()}
          </Link>
        </div>
      </PageHero>

      {(product.category === "Windows" || product.category === "Doors") && <TrustBadgeStrip />}

      <Features product={product} />
      <OurProcess image={product.images[1] ?? product.images[0]} alt={`${product.name} installation in progress`} />
      <Gallery product={product} />
      <SupplierMarquee />

    </>
  );
}

function Features({ product }: { product: Product }) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Why choose this range</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Features</h2>
        </div>
        <Swipeable at="md" className="md:grid-cols-2">
          {product.features.map((f, i) => (
            <div
              key={f}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 70}ms` }}
              className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-navy/5 card-lift shrink-0 w-[78%] snap-start md:w-auto md:shrink"
            >
              <div className="size-10 rounded-2xl bg-white grid place-items-center text-brand-blue shrink-0 shadow-soft">
                <Check className="size-5" />
              </div>
              <p className="text-navy/80 font-medium pt-2">{f}</p>
            </div>
          ))}
        </Swipeable>
      </div>
    </section>
  );
}

function Gallery({ product }: { product: Product }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const items = product.images.map((src, i) => ({
    src,
    title: `${product.name} installation ${i + 1}`,
    category: product.category,
  }));
  const isCarousel = items.length > 3;

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Recent installations</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Project gallery</h2>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/gallery" className="text-sm font-semibold text-navy hover:text-brand-blue inline-flex items-center gap-2">
              View the full gallery <ArrowRight className="size-4" />
            </Link>
            {isCarousel && (
              <div className="hidden sm:flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  aria-label="Previous images"
                  className="size-9 rounded-full border border-navy/15 grid place-items-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  aria-label="Next images"
                  className="size-9 rounded-full border border-navy/15 grid place-items-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {isCarousel ? (
          <div
            ref={scrollerRef}
            className="cards-scroll cards-scroll-md flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-1 px-1"
          >
            {items.map((item, i) => (
              <button
                key={i}
                data-card
                type="button"
                onClick={() => setLightbox(i)}
                data-reveal="up"
                style={{ ["--reveal-delay" as never]: `${i * 90}ms` }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-navy/5 text-left cursor-zoom-in shrink-0 snap-start w-[85%] sm:w-[46%] lg:w-[31.5%]"
                aria-label={`Enlarge ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <Swipeable at="sm" gap="gap-5" className={`sm:grid-cols-2 ${items.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
            {items.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                data-reveal="up"
                style={{ ["--reveal-delay" as never]: `${i * 90}ms` }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-navy/5 text-left cursor-zoom-in shrink-0 w-[85%] snap-start sm:w-auto sm:shrink"
                aria-label={`Enlarge ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.title}
                </span>
              </button>
            ))}
          </Swipeable>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox items={items} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
      )}
    </section>
  );
}

