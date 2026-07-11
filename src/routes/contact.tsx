import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

const LOCATIONS = [
  { name: "London HQ", x: 46, y: 62, primary: true },
  { name: "Kent", x: 64, y: 70 },
  { name: "Manchester", x: 34, y: 30 },
  { name: "Birmingham", x: 38, y: 46 },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Affordable Glazings" },
      { name: "description", content: "Speak to our specialists. Free consultations, no-obligation quotes and same-day repairs across the UK." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start the <span className="text-brand-blue">conversation.</span></>}
        description="Prefer to speak? Call. Prefer to write? Message us. We reply within 4 working hours."
      />

      <section className="py-16">
        <div className="container-page grid lg:grid-cols-5 gap-8">
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

          <form className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-white border border-navy/5 space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch."); }}>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Postcode" name="postcode" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.22em] text-navy/50">Message</label>
              <textarea rows={5} name="message" required className="mt-2 w-full px-5 py-4 rounded-2xl border border-navy/10 bg-soft-gray outline-none focus:border-brand-blue focus:bg-white transition-colors" />
            </div>
            <button type="submit" className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue transition-colors">
              Send message
            </button>
          </form>
        </div>
      </section>

      <section className="pb-24">
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
