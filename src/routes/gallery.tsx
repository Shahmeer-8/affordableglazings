import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import heroHome from "@/assets/hero-home.jpg";
import productWindows from "@/assets/product-windows.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productConservatories from "@/assets/product-conservatories.jpg";
import craftsman from "@/assets/craftsman.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery | Affordable Glazings" },
      { name: "description", content: "Real installations across the UK. Explore our recent windows, doors and conservatory transformations." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: heroHome },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => {
    const images = [heroHome, productWindows, productDoors, productConservatories, craftsman, heroHome, productDoors, productWindows, productConservatories];
    return (
      <>
        <PageHero
          eyebrow="Gallery"
          title={<>Real homes, <span className="text-brand-blue">transformed.</span></>}
          description="Every project is a bespoke story. Browse our recent transformations across the UK."
        />
        <section className="py-16">
          <div className="container-page">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
              {images.map((src, i) => (
                <div key={i} className="rounded-3xl overflow-hidden bg-white break-inside-avoid group">
                  <img
                    src={src}
                    alt={`Project ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <CtaBanner />
      </>
    );
  },
});
