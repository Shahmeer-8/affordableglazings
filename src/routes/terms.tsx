import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms of Service | Affordable Glazings" }, { name: "description", content: "Terms and conditions governing our services and website." }],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="pb-24">
        <div className="container-page max-w-3xl text-navy/70 leading-relaxed space-y-6">
          <p>These terms govern your use of our website and any services provided. By using this site you agree to them.</p>
          <p>All quotations are subject to a site survey. Prices are valid for 30 days. Deposit terms and installation obligations are detailed in your individual contract.</p>
          <p>Nothing in these terms affects your statutory rights as a consumer.</p>
        </div>
      </section>
    </>
  ),
});
