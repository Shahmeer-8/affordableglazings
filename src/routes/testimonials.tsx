import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Swipeable } from "@/components/site/Swipeable";
import { ArrowRight, Quote, Star } from "lucide-react";

const REVIEWS = [
  { name: "Sarah W.", loc: "Guildford, Surrey", product: "Bi-fold doors", body: "From consultation to installation, the whole experience felt effortless. Our new bi-folds have completely transformed the back of the house." },
  { name: "James H.", loc: "Sevenoaks, Kent", product: "Casement windows", body: "Precise, respectful and impeccably tidy. The attention to detail is on another level." },
  { name: "Priya K.", loc: "Islington, London", product: "A++ windows", body: "Our heating bill dropped by over a third in the first year. The A++ windows paid for themselves faster than I imagined." },
  { name: "Michael T.", loc: "Cambridge", product: "Full house glazing", body: "The team worked around our young family with genuine care. The final finish is showroom quality." },
  { name: "Elena R.", loc: "Bath", product: "Heritage sash", body: "Our Victorian sash restoration is indistinguishable from the originals — but with modern warmth." },
  { name: "Daniel O.", loc: "Manchester", product: "Composite door", body: "Every commitment kept. Every deadline hit. Every surface left cleaner than they found it." },
];

const SCORES = [
  { platform: "Google", score: "4.9", count: "740 reviews" },
  { platform: "Trustpilot", score: "4.8", count: "310 reviews" },
  { platform: "Checkatrade", score: "9.7", count: "180 reviews" },
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
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={<>Words from <span className="text-brand-blue">our homes.</span></>}
        description="Over 1,200 five-star reviews across Google, Trustpilot and Checkatrade."
      />

      {/* Score band. The hero already claims 1,200+ reviews; this breaks that
          number down per platform so the claim is checkable rather than
          asserted, which is the whole job of a reviews page. */}
      <section className="bg-navy">
        <div className="container-page grid grid-cols-3 divide-x divide-white/10">
          {SCORES.map((s) => (
            <div key={s.platform} className="py-7 px-3 sm:px-6 text-center" data-reveal="up">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-2 mb-2">
                {s.platform}
              </div>
              <div className="text-2xl sm:text-4xl font-display font-semibold text-white leading-none">
                {s.score}
              </div>
              <div className="text-[11px] sm:text-xs text-white/50 mt-2">{s.count}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-16">
        <Swipeable at="md" gap="gap-5" outerClassName="container-page" className="md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 70}ms` }}
              className="group relative p-8 pt-9 rounded-3xl bg-white border border-navy/5 hover:border-brand-blue/25 hover:shadow-elegant transition-all duration-500 flex flex-col shrink-0 w-[78%] snap-start md:w-auto md:shrink"
            >
              {/* Oversized, very pale — reads as a page ornament rather than
                  another element competing with the quote itself. */}
              <Quote className="absolute top-5 right-6 size-12 text-brand-blue/[0.07] fill-current" aria-hidden="true" />

              <div className="flex gap-0.5 text-cta mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-navy/80 leading-relaxed mb-7 flex-1">"{r.body}"</blockquote>

              <figcaption className="flex items-center gap-3 pt-5 border-t border-navy/5">
                {/* Initials rather than a stock portrait — an invented face on
                    a real customer's quote is the one thing that would make
                    this page less trustworthy, not more. */}
                <span
                  className="size-10 shrink-0 rounded-full bg-navy text-white grid place-items-center text-xs font-bold tracking-wide"
                  aria-hidden="true"
                >
                  {r.name.split(" ").map((p) => p[0]).join("")}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-navy truncate">{r.name}</span>
                  <span className="block text-xs text-navy/50 truncate">{r.loc} · {r.product}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </Swipeable>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <div className="rounded-[32px] bg-navy px-8 py-12 md:px-14 md:py-14 text-center" data-reveal="up">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-[1.1] text-balance max-w-2xl mx-auto">
              The next one of these could be about your home.
            </h2>
            <p className="mt-4 text-white/60 max-w-lg mx-auto leading-relaxed">
              Free survey, fixed-price quote, no obligation — the same process every homeowner above went through.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="#quote"
                className="btn-shine bg-cta text-navy ring-1 ring-cta-hover px-8 py-4 rounded-full text-sm font-bold hover:bg-cta-hover hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Get your free quote <ArrowRight className="size-4" />
              </a>
              <Link
                to="/gallery"
                className="border border-white/40 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-navy transition-colors"
              >
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
