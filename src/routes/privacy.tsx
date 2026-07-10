import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="pb-24">
        <div className="container-page max-w-3xl space-y-8 text-navy/70 leading-relaxed">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-2xl font-display font-semibold text-navy mb-3">{s.h}</h2>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy | Affordable Glazings" }, { name: "description", content: "How we collect, use and protect your personal data." }],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      sections={[
        { h: "Who we are", p: "Affordable Glazings Ltd is registered in England & Wales. We are the data controller for personal information you provide via this website." },
        { h: "What we collect", p: "Contact details you submit through our quote and enquiry forms, plus standard analytics data about how you use the site." },
        { h: "How we use it", p: "To respond to your enquiry, provide quotes and, with your consent, send occasional relevant updates. We never sell your data." },
        { h: "Your rights", p: "You may request access, correction or deletion of your data at any time by emailing hello@affordableglazings.co.uk." },
      ]}
    />
  ),
});
