import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Check, ClipboardList, UserRound } from "lucide-react";

const PRODUCTS = ["Windows", "Doors", "Conservatories", "Roofline", "Repairs", "Commercial"] as const;
const TIMING = ["ASAP", "1–3 months", "3–6 months", "Just researching"] as const;
const STEP_META = [
  { icon: ClipboardList, label: "Project" },
  { icon: Calendar, label: "Timing" },
  { icon: UserRound, label: "Details" },
] as const;

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Free Quote | Affordable Glazings" },
      { name: "description", content: "Get a free, no-obligation quote in under 60 seconds. A specialist will reply within 4 working hours." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState<string>("");
  const [timing, setTiming] = useState<string>("");
  const [done, setDone] = useState(false);

  return (
    <section className="pt-28 pb-16 min-h-screen">
      <div className="container-page max-w-3xl">
        <div className="mb-10">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Free quote · 60 seconds</p>
          <h1 className="text-4xl md:text-6xl font-display font-semibold text-navy leading-[1.02]">
            Tell us about your <span className="text-brand-blue">project.</span>
          </h1>
        </div>

        {!done && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {STEP_META.map(({ icon: Icon, label }, i) => {
                const n = i + 1;
                const active = n <= step;
                return (
                  <div key={label} className="flex items-center gap-2">
                    <span
                      className={`size-9 rounded-full grid place-items-center border-2 transition-colors duration-300 ${
                        active ? "bg-brand-blue border-brand-blue text-white" : "border-navy/15 text-navy/40"
                      }`}
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className={`text-xs font-semibold hidden sm:inline ${active ? "text-navy" : "text-navy/40"}`}>
                      {label}
                    </span>
                  </div>
                );
              })}
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                {Math.round((step / 3) * 100)}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-navy/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brass transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="p-8 md:p-10 rounded-[32px] bg-white border border-navy/5 shadow-elegant">
          {done ? (
            <div className="text-center py-8">
              <div className="mx-auto size-14 rounded-full bg-green-100 text-green-700 grid place-items-center mb-6">
                <Check className="size-7" />
              </div>
              <h2 className="text-3xl font-display font-semibold text-navy mb-3">We've got it.</h2>
              <p className="text-navy/60 max-w-md mx-auto">A specialist will call you within 4 working hours to book a free in-home consultation.</p>
            </div>
          ) : step === 1 ? (
            <div>
              <h2 className="text-2xl font-display font-semibold text-navy mb-6">What are you interested in?</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {PRODUCTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => { setProduct(p); setStep(2); }}
                    className={`p-5 rounded-2xl border text-left transition-all ${product === p ? "border-brand-blue bg-brand-blue/5" : "border-navy/10 hover:border-brand-blue/40"}`}
                  >
                    <div className="font-semibold text-navy">{p}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : step === 2 ? (
            <div>
              <h2 className="text-2xl font-display font-semibold text-navy mb-6">When are you looking to start?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {TIMING.map((t) => (
                  <button
                    key={t}
                    onClick={() => { setTiming(t); setStep(3); }}
                    className={`p-5 rounded-2xl border text-left transition-all ${timing === t ? "border-brand-blue bg-brand-blue/5" : "border-navy/10 hover:border-brand-blue/40"}`}
                  >
                    <div className="font-semibold text-navy">{t}</div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="mt-6 text-sm text-navy/60 hover:text-navy">← Back</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-5">
              <h2 className="text-2xl font-display font-semibold text-navy mb-2">Where should we send your quote?</h2>
              <p className="text-navy/60 text-sm mb-4">
                <span className="text-brand-blue font-semibold">{product}</span> · {timing}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" type="tel" />
                <Field label="Postcode" name="postcode" />
              </div>
              <button type="submit" className="w-full bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue transition-colors inline-flex items-center justify-center gap-2">
                Request my free quote <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-navy/50 text-center">By submitting you agree to our privacy policy. We never share your data.</p>
              <button type="button" onClick={() => setStep(2)} className="mt-2 text-sm text-navy/60 hover:text-navy w-full text-center">← Back</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.22em] text-navy/50">{label}</label>
      <input id={name} name={name} type={type} required className="mt-2 w-full px-5 py-3.5 rounded-xl border border-navy/10 bg-soft-gray outline-none focus:border-brand-blue focus:bg-white transition-colors" />
    </div>
  );
}
