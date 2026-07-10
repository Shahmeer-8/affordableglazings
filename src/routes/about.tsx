import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import craftsman from "@/assets/craftsman.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Affordable Glazings" },
      { name: "description", content: "Family-run since 1994. Over 30 years of glazing craftsmanship, engineered in Britain, installed across the UK." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: craftsman },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Our story"
        title={<>Thirty years of <span className="text-brand-blue">craftsmanship.</span></>}
        description="From a single Kent workshop in 1994 to Britain's most trusted glazing partner — our story is one of care, precision and pride."
      />
      <section className="py-16">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[36px] overflow-hidden aspect-[4/5] shadow-elegant">
            <img src={craftsman} alt="Craftsman at work" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="space-y-6 text-navy/70 leading-relaxed text-lg">
            <p>We founded Affordable Glazings on a single principle: that the best homes deserve the best glass, installed by people who care about the craft.</p>
            <p>Three decades later, that principle still guides every quote we write, every frame we fabricate and every threshold we cross. We are family-owned, engineer-led and utterly obsessive about the details you'll never see.</p>
            <p>Our workshops in Kent, Manchester and Birmingham fabricate every system in-house. Our field teams are directly employed, certified and mentored by senior craftsmen. Nothing is subcontracted. Nothing is left to chance.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { k: "30+", l: "Years of craft" },
            { k: "2,400", l: "Homes transformed" },
            { k: "1,200+", l: "5-star reviews" },
            { k: "0", l: "Subcontractors" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-5xl font-display font-semibold text-brand-blue mb-2">{s.k}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-navy/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  ),
});
