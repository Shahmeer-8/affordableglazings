import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";

const POSTS = [
  { title: "Choosing the right glazing for a period property", tag: "Guides", read: "6 min", excerpt: "Balancing heritage aesthetics with modern thermal performance is easier than you think." },
  { title: "How A++ windows lower your energy bills in 2026", tag: "Efficiency", read: "4 min", excerpt: "Every degree matters. Here's the maths behind the savings." },
  { title: "Bi-folds vs sliding doors: a designer's take", tag: "Design", read: "8 min", excerpt: "The definitive comparison for open-plan living, from a chartered architect." },
  { title: "The 2026 building regulations, decoded", tag: "Regulation", read: "5 min", excerpt: "What the new Part L revisions mean for homeowners this year." },
  { title: "Anatomy of a perfect installation day", tag: "Behind the scenes", read: "7 min", excerpt: "From arrival to snag-list, what to expect when we install your new windows." },
  { title: "Understanding U-values, in plain English", tag: "Guides", read: "3 min", excerpt: "The single most important number when comparing glazing quotes." },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Insights & Guides | Affordable Glazings" },
      { name: "description", content: "Expert guides on windows, doors, thermal performance, planning and design from our master craftsmen." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Journal"
        title={<>Insights from <span className="text-brand-blue">the workshop.</span></>}
        description="Guides, opinions and behind-the-scenes stories from our design and installation teams."
      />
      <section className="py-16">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POSTS.map((p) => (
            <Link key={p.title} to="/blog" className="group rounded-3xl overflow-hidden bg-white hover:shadow-elegant border border-navy/5 transition-all">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/20 to-navy/40 relative">
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-white/90 text-navy px-3 py-1.5 rounded-full">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors">{p.title}</h3>
                <p className="text-sm text-navy/60 mb-4 leading-relaxed">{p.excerpt}</p>
                <div className="text-xs uppercase tracking-widest text-navy/40">{p.read} read</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  ),
});
