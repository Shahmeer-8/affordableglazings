import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Check } from "lucide-react";

export const Route = createFileRoute("/finance")({
  head: () => ({
    meta: [
      { title: "Finance & Buy Now Pay Later | Affordable Glazings" },
      { name: "description", content: "Flexible finance options with 0% APR available. Spread the cost of your home improvement over 2 to 10 years." },
      { property: "og:url", content: "/finance" },
    ],
    links: [{ rel: "canonical", href: "/finance" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Finance"
        title={<>Improve now, <span className="text-brand-blue">spread the cost.</span></>}
        description="Regulated finance partners, transparent rates and no early repayment fees."
      />
      <section className="py-24 bg-white">
        <div className="container-page grid lg:grid-cols-3 gap-5">
          {[
            { t: "0% APR", body: "Interest-free credit over 24 months on qualifying orders.", tag: "Most popular", featured: true },
            { t: "Low-rate finance", body: "Extended terms up to 10 years at competitive fixed APR.", tag: "Flexible" },
            { t: "Buy Now, Pay 2027", body: "Defer your first payment for up to 12 months.", tag: "Defer" },
          ].map((p) => (
            <div key={p.t} className={`p-10 rounded-[32px] ${p.featured ? "bg-navy text-white shadow-elegant" : "bg-soft-gray text-navy"}`}>
              <p className={`text-[10px] font-bold tracking-[0.22em] uppercase mb-6 ${p.featured ? "text-brand-blue" : "text-brand-blue"}`}>{p.tag}</p>
              <h3 className="text-3xl font-display font-semibold mb-4">{p.t}</h3>
              <p className={`text-sm leading-relaxed mb-8 ${p.featured ? "text-white/70" : "text-navy/60"}`}>{p.body}</p>
              <ul className="space-y-2 text-sm">
                {["No hidden fees", "Soft credit check", "Instant decision"].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className={`size-4 ${p.featured ? "text-brand-blue" : "text-brand-blue"}`} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="container-page text-xs text-navy/50 mt-10 max-w-3xl">
          Finance provided by our authorised credit brokers. Affordable Glazings Ltd is authorised and regulated by the Financial Conduct Authority. Credit is subject to status and affordability.
        </p>
      </section>
      <CtaBanner />
    </>
  ),
});
