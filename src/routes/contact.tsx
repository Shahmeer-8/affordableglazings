import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

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
          <div className="rounded-[36px] overflow-hidden aspect-[16/6] bg-gradient-to-br from-navy to-brand-blue relative grid place-items-center text-white">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
            <div className="relative text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60 mb-2">Coverage</p>
              <p className="text-2xl md:text-3xl font-display font-semibold">Installing across mainland UK</p>
            </div>
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
