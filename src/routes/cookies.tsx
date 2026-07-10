import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [{ title: "Cookie Policy | Affordable Glazings" }, { name: "description", content: "How we use cookies and how to manage your preferences." }],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" />
      <section className="pb-24">
        <div className="container-page max-w-3xl text-navy/70 leading-relaxed space-y-6">
          <p>We use essential cookies to run the site and, with your consent, analytics cookies to understand how it's used.</p>
          <p>You can change your preferences at any time. Blocking cookies may affect site functionality.</p>
        </div>
      </section>
    </>
  ),
});
