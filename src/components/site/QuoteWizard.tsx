import { useState } from "react";
import { ArrowRight, Calendar, Check, ClipboardList, UserRound } from "lucide-react";

const PRODUCTS = ["Windows", "Doors", "Conservatories", "Roofline", "Repairs", "Commercial"] as const;
const TIMING = ["ASAP", "1–3 months", "3–6 months", "Just researching"] as const;
const STEP_META = [
  { icon: ClipboardList, label: "Project" },
  { icon: Calendar, label: "Timing" },
  { icon: UserRound, label: "Details" },
] as const;

/**
 * Self-contained multi-step quote form (Project → Timing → Details) in a white
 * card. Used on the /quote page and inside the CTA section on every page.
 */
export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState<string>("");
  const [timing, setTiming] = useState<string>("");
  const [done, setDone] = useState(false);

  return (
    <div className="rounded-[28px] bg-white border border-navy/5 shadow-elegant p-6 md:p-8">
      {!done && (
        <div className="mb-7">
          <div className="flex items-center justify-between mb-3">
            {STEP_META.map(({ icon: Icon, label }, i) => {
              const n = i + 1;
              const active = n <= step;
              return (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className={`size-8 rounded-full grid place-items-center border-2 transition-colors duration-300 ${
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

      {done ? (
        <div className="text-center py-6">
          <div className="mx-auto size-14 rounded-full bg-green-100 text-green-700 grid place-items-center mb-5">
            <Check className="size-7" />
          </div>
          <h3 className="text-2xl font-display font-semibold text-navy mb-2">We've got it.</h3>
          <p className="text-navy/60 max-w-md mx-auto">A specialist will call you within 4 working hours to book a free in-home consultation.</p>
        </div>
      ) : step === 1 ? (
        <div>
          <h3 className="text-xl md:text-2xl font-display font-semibold text-navy mb-5">What are you interested in?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PRODUCTS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => { setProduct(p); setStep(2); }}
                className={`p-4 rounded-2xl border text-left transition-all ${product === p ? "border-brand-blue bg-brand-blue/5" : "border-navy/10 hover:border-brand-blue/40"}`}
              >
                <span className="font-semibold text-navy text-sm">{p}</span>
              </button>
            ))}
          </div>
        </div>
      ) : step === 2 ? (
        <div>
          <h3 className="text-xl md:text-2xl font-display font-semibold text-navy mb-5">When are you looking to start?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TIMING.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => { setTiming(t); setStep(3); }}
                className={`p-4 rounded-2xl border text-left transition-all ${timing === t ? "border-brand-blue bg-brand-blue/5" : "border-navy/10 hover:border-brand-blue/40"}`}
              >
                <span className="font-semibold text-navy text-sm">{t}</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setStep(1)} className="mt-5 text-sm text-navy/60 hover:text-navy">← Back</button>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-4">
          <h3 className="text-xl md:text-2xl font-display font-semibold text-navy mb-1">Where should we send your quote?</h3>
          <p className="text-navy/60 text-sm mb-2">
            <span className="text-brand-blue font-semibold">{product}</span> · {timing}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="qw-name" />
            <Field label="Email" name="qw-email" type="email" />
            <Field label="Phone" name="qw-phone" type="tel" />
            <Field label="Postcode" name="qw-postcode" />
          </div>
          <button type="submit" className="w-full bg-navy text-white px-8 py-3.5 rounded-full font-semibold hover:bg-brand-blue transition-colors inline-flex items-center justify-center gap-2">
            Request my free quote <ArrowRight className="size-4" />
          </button>
          <p className="text-xs text-navy/50 text-center">No obligation · We reply within 4 working hours.</p>
          <button type="button" onClick={() => setStep(2)} className="text-sm text-navy/60 hover:text-navy w-full text-center">← Back</button>
        </form>
      )}
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-[0.18em] text-navy/50">{label}</label>
      <input id={name} name={name} type={type} required className="mt-1.5 w-full px-4 py-3 rounded-xl border border-navy/10 bg-soft-gray outline-none focus:border-brand-blue focus:bg-white transition-colors" />
    </div>
  );
}
