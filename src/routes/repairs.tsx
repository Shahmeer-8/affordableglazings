import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CloudDrizzle, KeyRound, Phone, RotateCw, Wrench } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Swipeable } from "@/components/site/Swipeable";

const REPAIRS = [
  {
    icon: CloudDrizzle,
    t: "Misted units",
    d: "A blown seal lets moisture between the panes. We replace the sealed unit only — the frame stays put.",
  },
  {
    icon: KeyRound,
    t: "Broken locks",
    d: "Snapped cylinders, seized multi-point mechanisms and lost keys, upgraded to TS007 3-star as standard.",
  },
  {
    icon: RotateCw,
    t: "Hinge failure",
    d: "Dropped sashes and doors that catch on the frame, re-hung and realigned so they close on a fingertip.",
  },
  {
    icon: Wrench,
    t: "Handle replacement",
    d: "Worn, stiff or mismatched handles swapped for like-for-like or upgraded hardware in any finish.",
  },
];

export const Route = createFileRoute("/repairs")({
  head: () => ({
    meta: [
      { title: "Window & Door Repairs | Affordable Glazings" },
      { name: "description", content: "Fast, professional repairs for hinges, locks, handles, misted units and broken glass. Nationwide, all makes." },
      { property: "og:url", content: "/repairs" },
    ],
    links: [{ rel: "canonical", href: "/repairs" }],
  }),
  component: RepairsPage,
});

function RepairsPage() {
  return (
    <>
      <PageHero
        eyebrow="Repairs & Maintenance"
        title={<>When glass fails, we <span className="text-brand-blue">fix it fast.</span></>}
        description="Same-day emergency call-outs and scheduled repairs for windows, doors and locks — any make, any model."
      />

      {/* Someone landing here usually has a broken window right now, so the
          phone number belongs above the service list, not under it. */}
      <section className="bg-navy">
        <div className="container-page py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-white/70 text-sm leading-relaxed">
            <span className="font-semibold text-white">Emergency?</span> We aim to make any property
            secure the same day, anywhere in mainland UK.
          </p>
          <a
            href="tel:08001234567"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-cta text-navy ring-1 ring-cta-hover px-6 py-3 rounded-full text-sm font-bold hover:bg-cta-hover hover:text-white transition-colors"
          >
            <Phone className="size-4" /> 0800 123 4567
          </a>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-9" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">
              What we repair
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.08]">
              Most faults are a repair, not a replacement.
            </h2>
            <p className="mt-4 text-navy/60 leading-relaxed">
              We fix all makes, including units we didn't install. If a repair genuinely isn't the
              right call, we'll tell you that instead of selling you one.
            </p>
          </div>

          <Swipeable at="md" gap="gap-5" className="md:grid-cols-2 lg:grid-cols-4">
            {REPAIRS.map(({ icon: Icon, t, d }, i) => (
              <div
                key={t}
                data-reveal="up"
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
                className="group p-7 rounded-3xl bg-soft-gray border border-transparent hover:bg-white hover:border-brand-blue/25 hover:shadow-elegant transition-all duration-500 shrink-0 w-[72%] snap-start md:w-auto md:shrink"
              >
                <div className="size-12 rounded-2xl bg-white grid place-items-center text-brand-blue mb-6 shadow-soft group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">{t}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{d}</p>
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-cta">
                  Fixed price · Same-day where possible
                </p>
              </div>
            ))}
          </Swipeable>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <div
            className="rounded-[32px] bg-black px-8 py-12 md:px-14 md:py-14 flex flex-col lg:flex-row lg:items-center gap-8"
            data-reveal="up"
          >
            <div className="flex-1">
              <p className="text-xs font-bold text-[#6F84D8] uppercase tracking-[0.22em] mb-3">
                Not sure what's wrong?
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-[1.1] text-balance">
                Send us a photo and we'll diagnose it.
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed max-w-lg">
                Attach a picture of the fault to the quote form and an engineer will come back with a
                fixed price — usually without needing to visit first.
              </p>
            </div>
            <a
              href="#quote"
              className="shrink-0 btn-shine bg-cta text-navy ring-1 ring-cta-hover px-8 py-4 rounded-full text-sm font-bold hover:bg-cta-hover hover:text-white transition-colors inline-flex items-center justify-center gap-2"
            >
              Send a photo <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
