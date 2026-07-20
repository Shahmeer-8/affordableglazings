import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import craftsman from "@/assets/craftsman.jpg";

const LOCATIONS = [
  { name: "London HQ", x: 46, y: 62, primary: true },
  { name: "Kent", x: 64, y: 70 },
  { name: "Manchester", x: 34, y: 30 },
  { name: "Birmingham", x: 38, y: 46 },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Contact | Affordable Glazings" },
      {
        name: "description",
        content:
          "Family-run since 1994 — over 30 years of glazing craftsmanship, engineered in Britain. Speak to our specialists for a free, no-obligation quote.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: craftsman },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutContactPage,
});

function AboutContactPage() {
  return (
    <>
      <PageHero
        eyebrow="About & Contact"
        title={<>Thirty years of <span className="text-brand-blue">craftsmanship.</span></>}
        description="From a single Kent workshop in 1994 to Britain's most trusted glazing partner — our story is one of care, precision and pride. Ready to talk? We're just below."
      />

      {/* Story */}
      <section className="py-16">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
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

      {/* Stats */}
      <section className="py-14 md:py-16 bg-white">
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

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-14 md:py-20">
        <div className="container-page">
          <div className="max-w-2xl mb-8">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Get in touch</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] text-balance">
              Let's start the conversation.
            </h2>
            <p className="mt-5 text-navy/60 text-lg leading-relaxed">
              Prefer to speak? Call. Prefer to write? Message us. We reply within 4 working hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-5">
              {[
                { icon: Phone, t: "Call", v: "0800 123 4567", h: "Mon–Sat, 8am–6pm" },
                { icon: Mail, t: "Email", v: "hello@affordableglazings.co.uk", h: "Replies within 4 hours" },
                { icon: MapPin, t: "Visit", v: "Mayfair Industrial Estate, London", h: "Showrooms in Kent, Manchester & Birmingham" },
              ].map(({ icon: Icon, t, v, h }) => (
                <div key={t} className="p-6 rounded-3xl bg-white border border-navy/5">
                  <div className="size-11 rounded-2xl bg-soft-gray grid place-items-center text-brand-blue mb-4">
                    <Icon className="size-5" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-navy/40 mb-1">{t}</div>
                  <div className="text-lg font-semibold text-navy">{v}</div>
                  <div className="text-sm text-navy/60 mt-1">{h}</div>
                </div>
              ))}
            </div>

            <form
              className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-white border border-navy/5 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — we'll be in touch.");
              }}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Postcode" name="postcode" />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.22em] text-navy/50">Message</label>
                <textarea id="message" rows={5} name="message" required className="mt-2 w-full px-5 py-4 rounded-2xl border border-navy/10 bg-soft-gray outline-none focus:border-brand-blue focus:bg-white transition-colors" />
              </div>
              <button type="submit" className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue transition-colors">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="pb-14 md:pb-20">
        <div className="container-page">
          <div className="rounded-[36px] overflow-hidden min-h-[22rem] md:aspect-[16/6] bg-gradient-to-br from-navy to-brand-blue relative text-white p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="relative z-10 max-w-xs shrink-0">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brass mb-3">Coverage</p>
              <p className="text-2xl md:text-3xl font-display font-semibold leading-tight mb-3">
                Installing across mainland UK
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                HQ in London, with regional showrooms in Kent, Manchester and Birmingham serving homeowners nationwide.
              </p>
            </div>

            <div className="relative flex-1 w-full h-56 md:h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                {LOCATIONS.filter((l) => !l.primary).map((l) => {
                  const hub = LOCATIONS.find((h) => h.primary)!;
                  return (
                    <line
                      key={l.name}
                      x1={hub.x}
                      y1={hub.y}
                      x2={l.x}
                      y2={l.y}
                      stroke="white"
                      strokeOpacity={0.25}
                      strokeWidth={0.4}
                      strokeDasharray="2 2"
                    />
                  );
                })}
                {LOCATIONS.map((l) => (
                  <circle
                    key={`${l.name}-pulse`}
                    cx={l.x}
                    cy={l.y}
                    r={l.primary ? 3 : 2}
                    fill="none"
                    stroke={l.primary ? "var(--brass)" : "white"}
                    strokeOpacity={0.5}
                    strokeWidth={0.5}
                    className="animate-pulse"
                  />
                ))}
                {LOCATIONS.map((l) => (
                  <circle
                    key={l.name}
                    cx={l.x}
                    cy={l.y}
                    r={l.primary ? 1.6 : 1.2}
                    fill={l.primary ? "var(--brass)" : "white"}
                  />
                ))}
              </svg>
              {LOCATIONS.map((l) => (
                <span
                  key={`${l.name}-label`}
                  className="absolute -translate-x-1/2 text-[10px] md:text-xs font-semibold uppercase tracking-wide text-white/80 bg-navy/40 backdrop-blur px-2 py-0.5 rounded-full whitespace-nowrap"
                  style={{ left: `${l.x}%`, top: `${l.y}%`, transform: "translate(-50%, 10px)" }}
                >
                  {l.name}
                </span>
              ))}
            </div>

            <div className="absolute -bottom-16 -right-16 size-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.22em] text-navy/50">{label}</label>
      <input id={name} name={name} type={type} required className="mt-2 w-full px-5 py-4 rounded-2xl border border-navy/10 bg-soft-gray outline-none focus:border-brand-blue focus:bg-white transition-colors" />
    </div>
  );
}
