import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Compass, Home, Layers, PenTool, Ruler, Sparkles, Sun, ThermometerSun, TreePine, Wrench } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductRange } from "@/components/site/ProductRange";
import consHero from "@/assets/cons-hero.jpg";
import consVictorian from "@/assets/cons-victorian.jpg";
import consInterior from "@/assets/cons-interior.jpg";
import consGable from "@/assets/cons-gable.jpg";
import consTiled from "@/assets/cons-tiled.jpg";
import productConservatories from "@/assets/product-conservatories.jpg";
import productWindows from "@/assets/product-windows.jpg";
import productDoors from "@/assets/product-doors.jpg";
import homeowners from "@/assets/homeowners.jpg";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/conservatories")({
  head: () => ({
    meta: [
      { title: "Conservatories, Orangeries & Extensions | Affordable Glazings" },
      { name: "description", content: "Bespoke conservatories, orangeries, garden rooms and glass extensions. Architect-led design, energy-efficient glazing and year-round comfort." },
      { property: "og:title", content: "Conservatories & Orangeries | Affordable Glazings" },
      { property: "og:description", content: "Bespoke conservatories, orangeries and glass extensions engineered for year-round living." },
      { property: "og:image", content: consHero },
      { property: "og:url", content: "/conservatories" },
    ],
    links: [{ rel: "canonical", href: "/conservatories" }],
  }),
  component: Page,
});

const REASONS = [
  { icon: Home, t: "Add up to 15% property value", d: "A well-designed conservatory is one of the highest-ROI home improvements in the UK market." },
  { icon: Sun, t: "Light-flooded living space", d: "Even north-facing gardens gain a bright, welcoming new room that feels bigger than its footprint." },
  { icon: TreePine, t: "Bring the garden indoors", d: "Watch the seasons change from your favourite armchair — no planning permission required in most cases." },
  { icon: ThermometerSun, t: "Year-round comfort", d: "Modern thermally-broken frames and Low-E roof glass mean warm winters and cool summers, not saunas." },
];

const ROOFS = [
  { icon: Sun, t: "Solar Control Glass", d: "Self-cleaning Low-E glass with a solar coating that reflects 78% of solar heat gain while transmitting daylight — no more overheating in July." },
  { icon: Layers, t: "Polycarbonate", d: "Multi-wall thermally efficient panels — the most economical way to weatherproof a conservatory. Ideal on tighter budgets." },
  { icon: Home, t: "Solid Tiled (LABC)", d: "Fully-insulated lightweight tiled roof with plasterboard soffit. Turns a conservatory into a proper year-round room, and often adds to your EPC rating." },
  { icon: Sparkles, t: "Glass Lantern", d: "A dramatic architectural pyramid of glass over a solid orangery perimeter — the ultimate light-well." },
];

const PLANNING = [
  { t: "Permitted development", d: "Most single-storey conservatories under 30m² fall within permitted development rights and don't require planning permission." },
  { t: "Building regs", d: "We manage LABC certification, structural sign-off, thermal calcs and completion certificates for every build." },
  { t: "Conservation areas", d: "We're experienced in listed and conservation-area applications, including material-matching for heritage projects." },
];

const PROCESS = [
  { n: "01", t: "Discovery", d: "We visit, measure, discuss how you'll use the space and what light you need. A relaxed conversation, no pressure." },
  { n: "02", t: "Architectural design", d: "CAD drawings, elevations and 3D visualisations you can walk around before a single brick is laid." },
  { n: "03", t: "Groundworks", d: "Insulated concrete-raft foundations, damp-proofing and drainage — the invisible foundation of every great extension." },
  { n: "04", t: "Frame & glazing", d: "Factory-built aluminium or uPVC frames erected on-site, followed by triple-sealed roof glazing." },
  { n: "05", t: "Finishing", d: "Plastering, electrics, underfloor heating, tiling and decorating — you receive a fully finished, move-in-ready room." },
  { n: "06", t: "Handover", d: "A guided walk-through, digital handover pack, and a 10-year insurance-backed guarantee." },
];

const FAQS = [
  { q: "Do I need planning permission?", a: "The majority of conservatories fall under permitted development rights and require no planning application. We check your specific address and design against local rules, and manage any application on your behalf if one is required." },
  { q: "How long does a conservatory take to build?", a: "Groundworks and installation typically take 4–8 weeks depending on size, roof choice and finishing. We'll give you a full week-by-week Gantt chart at contract stage." },
  { q: "Can I use my conservatory in winter?", a: "Absolutely. Modern thermally-broken frames, Low-E glass and either a solid tiled roof or triple-glazed lantern make the space comfortable in every season. Underfloor heating is our most-requested upgrade." },
  { q: "Will it overheat in summer?", a: "Not with the right glass. Our solar-control roof glass reflects 78% of solar heat, and we can specify Pilkington Suncool or Celsius Elite for south-facing rooms. Opening roof vents and side windows create natural airflow." },
  { q: "What guarantee do I get?", a: "Every conservatory is backed by a 10-year insurance-backed guarantee covering structural integrity, glazing units and workmanship, plus manufacturer warranties on frames and hardware." },
];

function Page() {
  return (
    <>
      {/* Cinematic hero */}
      <section className="relative h-[100vh] min-h-[720px] flex items-center overflow-hidden">
        <img src={consHero} alt="Elegant orangery conservatory at dusk with warm lighting" className="absolute inset-0 w-full h-full object-cover scale-105" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/85" />
        <div className="container-page relative z-10 text-white">
          <span className="inline-block text-[11px] font-bold tracking-[0.28em] uppercase text-brand-blue-2 mb-6" data-reveal="fade">Conservatories · Orangeries · Extensions</span>
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-display font-semibold leading-[0.9] max-w-6xl text-balance" data-reveal="up">
            Rooms that live <em className="not-italic text-brand-blue-2">with the light</em>.
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed font-light" data-reveal="up" style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}>
            Architect-led conservatories, orangeries and glass extensions — built for British weather, designed for the way you actually live.
          </p>
          <div className="mt-12 flex flex-wrap gap-3" data-reveal="up" style={{ ["--reveal-delay" as string]: "240ms" } as Record<string, string>}>
            <Link to="/quote" className="btn-shine bg-brand-blue text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-navy transition-colors inline-flex items-center gap-2">
              Design your extension <ArrowRight className="size-4" />
            </Link>
            <Link to="/gallery" className="border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
              See recent projects
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-page grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5" data-reveal="left">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Introduction</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] text-balance">More than a room. A different way of living at home.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-navy/65 leading-relaxed" data-reveal="right">
            <p>A well-designed conservatory doesn't just add square metres — it changes the centre of gravity of your home. It becomes the room where morning coffee is drunk, where Sunday papers are read, where dinner parties spill into stargazing.</p>
            <p>Our design studio has been building conservatories and orangeries for British families for over twenty years. We handle everything under one roof: architecture, planning, groundworks, glazing, electrics, heating, plastering and decoration. One team, one contract, one point of contact from first sketch to keys.</p>
          </div>
        </div>
      </section>

      {/* Product range */}
      <ProductRange category="Conservatories" dark />

      {/* Why build */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="container-page">
          <div className="max-w-2xl mb-10" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Why build a conservatory</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-navy leading-[1.02]">Four reasons your future self will thank you.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {REASONS.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="p-8 rounded-3xl bg-white border border-navy/5 card-lift" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 100}ms` } as Record<string, string>}>
                <Icon className="size-7 text-brand-blue mb-6" />
                <h3 className="font-display font-semibold text-navy text-xl mb-3">{t}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed showpiece */}
      <section className="relative h-[75vh] overflow-hidden">
        <img src={consInterior} alt="Bright modern conservatory interior filled with plants" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/80" />
        <div className="container-page relative h-full flex items-end pb-16">
          <div className="max-w-3xl text-white" data-reveal="up">
            <p className="text-xs font-bold tracking-[0.28em] uppercase text-brand-blue-2 mb-4">Interior inspiration</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.02] text-balance">Yours to style, ours to build.</h2>
          </div>
        </div>
      </section>

      {/* Roofs */}
      <section className="py-14 md:py-20 bg-navy text-white">
        <div className="container-page">
          <div className="max-w-2xl mb-10" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue-2 uppercase tracking-[0.22em] mb-3">Roof options</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.02]">The roof does the heavy lifting.</h2>
            <p className="mt-6 text-white/60 text-lg">Glass or tile, lantern or lean-to — the roof you choose defines the room, the light, the temperature, and the energy bill.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROOFS.map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="p-8 rounded-3xl bg-white/5 border border-white/10 card-lift" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 100}ms` } as Record<string, string>}>
                <Icon className="size-7 text-brand-blue-2 mb-6" />
                <h3 className="font-display font-semibold text-xl mb-3">{t}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-6" data-reveal="up">
            <div className="rounded-[28px] overflow-hidden aspect-[16/10]">
              <img src={consTiled} alt="Tiled roof conservatory" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-[28px] overflow-hidden aspect-[16/10]">
              <img src={consGable} alt="Gable-end conservatory at dusk" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Planning */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="container-page grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5" data-reveal="left">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Planning advice</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] mb-6">We handle the paperwork.</h2>
            <p className="text-navy/65 leading-relaxed">Planning, permitted development, building regs, party wall notices, LABC sign-off — you'll never receive a form you don't understand. Our in-house planners take the whole conversation with your council off your plate.</p>
          </div>
          <div className="lg:col-span-7 space-y-4" data-reveal="right">
            {PLANNING.map(({ t, d }, i) => (
              <div key={t} className="p-7 rounded-2xl bg-white border border-navy/5 flex gap-5">
                <div className="size-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 text-brand-blue font-display font-semibold">{i + 1}</div>
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg mb-1">{t}</h3>
                  <p className="text-sm text-navy/60 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-10" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Construction process</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-navy leading-[1.02]">Six stages, one team.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS.map((p, i) => (
              <div key={p.n} className="p-8 rounded-3xl bg-soft-gray card-lift" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 80}ms` } as Record<string, string>}>
                <div className="text-5xl font-display font-semibold text-brand-blue/40 mb-4">{p.n}</div>
                <h3 className="font-display font-semibold text-navy text-xl mb-2">{p.t}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After / project gallery */}
      <section className="py-14 md:py-20 bg-canvas">
        <div className="container-page">
          <div className="flex items-end justify-between mb-12" data-reveal="up">
            <div className="max-w-xl">
              <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Project showcase</p>
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-navy leading-[1.02]">Twelve conservatories from the last twelve months.</h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-brand-blue hidden md:inline-flex items-center gap-2">All projects <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[consHero, consVictorian, consInterior, consGable, consTiled, productConservatories, consInterior, consHero].map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`} data-reveal="zoom" style={{ ["--reveal-delay" as string]: `${i * 60}ms` } as Record<string, string>}>
                <img src={src} alt={`Conservatory project ${i + 1}`} className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-[32px] overflow-hidden aspect-[4/5]" data-reveal="left">
            <img src={homeowners} alt="Happy homeowners in front of their new conservatory" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div data-reveal="right">
            <div className="text-brand-blue text-2xl mb-6">★★★★★</div>
            <blockquote className="text-2xl md:text-4xl font-display font-medium text-navy leading-[1.15] text-balance">
              "We were nervous about the disruption, but the team handled everything — drawings, planning, groundworks, decorating. Twelve weeks later we're eating breakfast in a room that feels like it's been part of the house forever."
            </blockquote>
            <div className="mt-10 pt-6 border-t border-navy/10">
              <div className="font-semibold text-navy">Robert & Helen T.</div>
              <div className="text-sm text-navy/50">Edwardian conservatory · Winchester · 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-soft-gray">
        <div className="container-page grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4" data-reveal="left">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">FAQs</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Questions from prospective clients.</h2>
            <div className="mt-8 space-y-3">
              {["Free CAD design", "Fixed-price contract", "10-year guarantee", "Finance available"].map((c) => (
                <div key={c} className="flex items-center gap-3 text-navy font-medium text-sm"><CheckCircle2 className="size-5 text-brand-blue" />{c}</div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8" data-reveal="right">
            <Accordion type="single" collapsible>
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`c-${i}`} className="border-navy/10">
                  <AccordionTrigger className="text-left text-lg font-display font-semibold text-navy hover:text-brand-blue py-6">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-navy/65 leading-relaxed pb-6">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {[
            { to: "/windows" as const, t: "Windows", d: "Complete the glazing story", img: productWindows },
            { to: "/doors" as const, t: "Doors", d: "Bi-fold, sliding & French", img: productDoors },
          ].map((r) => (
            <Link key={r.to} to={r.to} className="group relative rounded-[32px] overflow-hidden aspect-[16/9] block">
              <img src={r.img} alt={r.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-display font-semibold mb-1">{r.t}</h3>
                <p className="text-sm text-white/70 flex items-center gap-2">{r.d} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner title="Ready to design your extension?" subtitle="Book a free architectural consultation. CAD drawings, 3D visualisations and a fixed-price quote within seven days." />
    </>
  );
}

const _icons = [Compass, PenTool, Ruler, Wrench];
void _icons;
