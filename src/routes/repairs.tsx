import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Swipeable } from "@/components/site/Swipeable";
export const Route = createFileRoute("/repairs")({
  head: () => ({
    meta: [
      { title: "Window & Door Repairs | Affordable Glazings" },
      { name: "description", content: "Fast, professional repairs for hinges, locks, handles, misted units and broken glass. Nationwide, all makes." },
      { property: "og:url", content: "/repairs" },
    ],
    links: [{ rel: "canonical", href: "/repairs" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Repairs & Maintenance"
        title={<>When glass fails, we <span className="text-brand-blue">fix it fast.</span></>}
        description="Same-day emergency call-outs and scheduled repairs for windows, doors and locks — any make, any model."
      />
      <section className="py-16 bg-white">
        {/* container-page is load-bearing here: the row's -mx-6 bleed needs a
            padded parent to bleed out of, or it overhangs the viewport and
            drags a horizontal scrollbar onto the whole page on mobile. */}
        <div className="container-page">
          <Swipeable at="md" gap="gap-5" className="md:grid-cols-4">
            {["Misted units", "Broken locks", "Hinge failure", "Handle replacement"].map((t) => (
              <div key={t} className="p-6 rounded-2xl bg-soft-gray shrink-0 w-[70%] snap-start md:w-auto md:shrink">
                <h3 className="font-semibold text-navy mb-1">{t}</h3>
                <p className="text-sm text-navy/60">Fixed price, same-day where possible.</p>
              </div>
            ))}
          </Swipeable>
        </div>
      </section>
    </>
  ),
});
