import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/roofline")({
  head: () => ({
    meta: [
      { title: "Roofline, Fascias & Soffits | Affordable Glazings" },
      { name: "description", content: "Long-life fascias, soffits, guttering and cladding in premium uPVC and aluminium." },
      { property: "og:url", content: "/roofline" },
    ],
    links: [{ rel: "canonical", href: "/roofline" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Roofline"
        title={<>The <span className="text-brand-blue">finishing touch</span> your home deserves.</>}
        description="Fascias, soffits, bargeboards, guttering and cladding — protecting your home from the elements for decades."
      />
      <section className="py-16 bg-white">
        <div className="container-page grid md:grid-cols-3 gap-5">
          {[
            { t: "Fascias & Soffits", b: "Solid uPVC and aluminium boards in 20+ colours, made to measure." },
            { t: "Guttering", b: "Seamless aluminium and premium cast-effect uPVC systems." },
            { t: "Cladding & Bargeboards", b: "Contemporary wall cladding and traditional bargeboards." },
          ].map((s) => (
            <div key={s.t} className="p-8 rounded-3xl bg-soft-gray">
              <h3 className="text-2xl font-display font-semibold text-navy mb-3">{s.t}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  ),
});
