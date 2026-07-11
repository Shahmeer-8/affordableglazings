import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Lightbox } from "@/components/site/Lightbox";
import heroHome from "@/assets/hero-home.jpg";
import productWindows from "@/assets/product-windows.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productConservatories from "@/assets/product-conservatories.jpg";
import craftsman from "@/assets/craftsman.jpg";
import windowsBay from "@/assets/windows-bay.jpg";
import windowsDetail from "@/assets/windows-detail.jpg";
import windowsSash from "@/assets/windows-sash.jpg";
import windowsInterior from "@/assets/windows-interior.jpg";
import doorsBifold from "@/assets/doors-bifold.jpg";
import doorsFrench from "@/assets/doors-french.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsHardware from "@/assets/doors-hardware.jpg";
import consGable from "@/assets/cons-gable.jpg";
import consInterior from "@/assets/cons-interior.jpg";
import consTiled from "@/assets/cons-tiled.jpg";
import consVictorian from "@/assets/cons-victorian.jpg";

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
  component: GalleryPage,
});

const CATEGORIES = ["All", "Windows", "Doors", "Conservatories"] as const;

const PROJECTS: { src: string; title: string; category: (typeof CATEGORIES)[number] }[] = [
  { src: heroHome, title: "Full-height glazed rear extension", category: "Windows" },
  { src: productWindows, title: "Slimline casement windows, Surrey", category: "Windows" },
  { src: windowsBay, title: "Curved bay window, evening glow", category: "Windows" },
  { src: windowsDetail, title: "Precision aluminium frame detail", category: "Windows" },
  { src: windowsSash, title: "Heritage sash restoration, period townhouse", category: "Windows" },
  { src: windowsInterior, title: "Warm interior light, bay window", category: "Windows" },
  { src: productDoors, title: "Black aluminium bi-fold doors", category: "Doors" },
  { src: doorsBifold, title: "Family bi-fold entertaining space", category: "Doors" },
  { src: doorsFrench, title: "French doors onto countryside terrace", category: "Doors" },
  { src: doorsSliding, title: "Slimline sliding doors, garden view", category: "Doors" },
  { src: doorsHardware, title: "Brushed hardware, precision finish", category: "Doors" },
  { src: productConservatories, title: "Light-filled conservatory living space", category: "Conservatories" },
  { src: consGable, title: "Gable conservatory, illuminated at dusk", category: "Conservatories" },
  { src: consInterior, title: "Conservatory interior, garden outlook", category: "Conservatories" },
  { src: consTiled, title: "Modern tiled-roof conservatory", category: "Conservatories" },
  { src: consVictorian, title: "Victorian-style ornate conservatory", category: "Conservatories" },
  { src: craftsman, title: "Master craftsman on site", category: "Windows" },
];

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Real homes, <span className="text-brand-blue">transformed.</span></>}
        description="Every project is a bespoke story. Browse our recent transformations across the UK."
      />
      <section className="py-8">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  filter === c
                    ? "bg-navy text-white"
                    : "bg-soft-gray text-navy/70 hover:bg-navy/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-8 pb-16">
        <div className="container-page">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {filtered.map((p, i) => (
              <button
                key={p.src + p.title}
                onClick={() => setOpenIndex(i)}
                className="block w-full rounded-3xl overflow-hidden bg-white break-inside-avoid group text-left"
              >
                <div className="relative">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brass">{p.category}</span>
                    <p className="text-white font-semibold text-sm mt-1">{p.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {openIndex !== null && (
        <Lightbox
          items={filtered}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
      <CtaBanner />
    </>
  );
}
