import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Lightbox } from "@/components/site/Lightbox";
import { getProduct, SUPPLIERS, type Product } from "@/data/products";

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
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors"
          >
            Request a quote <ArrowRight className="size-4" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-navy/10 text-navy px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white transition-colors"
          >
            <ArrowLeft className="size-4" /> Back to all products
          </Link>
        </div>
      </PageHero>

      <Features product={product} />
      <Gallery product={product} />
      <Suppliers />

      <CtaBanner
        title="Need specification advice?"
        subtitle="Share your plans, preferred system, or any inspiration photos and we'll respond with a tailored estimate within 24 hours."
      />
    </>
  );
}

function Features({ product }: { product: Product }) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Why choose this range</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.features.map((f, i) => (
            <div
              key={f}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 70}ms` }}
              className="flex items-start gap-4 p-6 rounded-3xl bg-soft-gray border border-transparent hover:border-brand-blue/20 hover:bg-white hover:shadow-soft transition-all duration-500"
            >
              <div className="size-10 rounded-2xl bg-white grid place-items-center text-brand-blue shrink-0 shadow-soft">
                <Check className="size-5" />
              </div>
              <p className="text-navy/80 font-medium pt-2">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ product }: { product: Product }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = product.images.map((src, i) => ({
    src,
    title: `${product.name} installation ${i + 1}`,
    category: product.category,
  }));

  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Recent installations</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Project gallery</h2>
          </div>
          <Link to="/gallery" className="text-sm font-semibold text-navy hover:text-brand-blue inline-flex items-center gap-2">
            View the full gallery <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 ${product.images.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox(i)}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 90}ms` }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-navy/5 text-left cursor-zoom-in"
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
      </div>

      {lightbox !== null && (
        <Lightbox items={items} index={lightbox} onClose={() => setLightbox(null)} onIndexChange={setLightbox} />
      )}
    </section>
  );
}

function Suppliers() {
  return (
    <section className="border-y border-navy/5 bg-white">
      <div className="container-page py-10">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-navy/40 mb-6">Trusted Suppliers</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {SUPPLIERS.map((s) => (
            <span key={s} className="text-sm md:text-base font-display font-semibold tracking-wide text-navy/50">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
