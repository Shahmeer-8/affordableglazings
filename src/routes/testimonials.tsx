import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Sarah W.", loc: "Guildford, Surrey", body: "From consultation to installation, the whole experience felt effortless. Our new bi-folds have completely transformed the back of the house." },
  { name: "James H.", loc: "Sevenoaks, Kent", body: "Precise, respectful and impeccably tidy. The attention to detail is on another level." },
  { name: "Priya K.", loc: "Islington, London", body: "Our heating bill dropped by over a third in the first year. The A++ windows paid for themselves faster than I imagined." },
  { name: "Michael T.", loc: "Cambridge", body: "The team worked around our young family with genuine care. The final finish is showroom quality." },
  { name: "Elena R.", loc: "Bath", body: "Our Victorian sash restoration is indistinguishable from the originals — but with modern warmth." },
  { name: "Daniel O.", loc: "Manchester", body: "Every commitment kept. Every deadline hit. Every surface left cleaner than they found it." },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials & Reviews | Affordable Glazings" },
      { name: "description", content: "Rated 4.9/5 by British homeowners. Read real reviews from our recent customers." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>Words from <span className="text-brand-blue">our homes.</span></>}
        description="Over 1,200 five-star reviews across Google, Trustpilot and Checkatrade."
      />
      <section className="py-16">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="p-8 rounded-3xl bg-white border border-navy/5 hover:shadow-elegant transition-shadow">
              <div className="flex gap-0.5 text-brand-blue mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-navy/80 leading-relaxed mb-6">"{r.body}"</blockquote>
              <figcaption className="text-sm">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-navy/50">{r.loc}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  ),
});
