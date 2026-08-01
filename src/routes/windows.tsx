import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Palette, ShieldCheck, ThermometerSun, Volume2, Wrench, Sparkles, Sun } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductRange } from "@/components/site/ProductRange";
import { ExploreMore } from "@/components/site/ExploreMore";
import windowsHero from "@/assets/windows-hero.jpg";
import windowsInterior from "@/assets/windows-interior.jpg";
import installer from "@/assets/installer.jpg";
export const Route = createFileRoute("/windows")({
  head: () => ({
    meta: [
      { title: "Premium Windows — Aluminium, uPVC & Timber | Affordable Glazings" },
      { name: "description", content: "A-rated bespoke windows for UK homes. Casement, sash, tilt & turn, flush and bay windows — engineered for warmth, security and lasting beauty." },
      { property: "og:title", content: "Premium Windows | Affordable Glazings" },
      { property: "og:description", content: "A-rated bespoke windows engineered for warmth, security and lasting beauty." },
      { property: "og:image", content: windowsHero },
      { property: "og:url", content: "/windows" },
    ],
    links: [{ rel: "canonical", href: "/windows" }],
  }),
  component: WindowsPage,
});

const PERFORMANCE = [
  { icon: ThermometerSun, title: "0.8 W/m²K U-Value", body: "Beyond passive-house standard. Triple-glazed argon-filled units with warm-edge spacer bars and soft-coat Low-E glass keep every room warm in winter, cool in summer." },
  { icon: Volume2, title: "42 dB Acoustic Rating", body: "Laminated acoustic glass laminates reduce traffic and neighbour noise by up to 90%. Ideal for homes near main roads, flight paths or busy town centres." },
  { icon: ShieldCheck, title: "PAS 24:2022 Secure", body: "Every window is tested and certified to Secured by Design standards, with multi-point shootbolt locking, anti-jemmy hinges and toughened or laminated glass." },
  { icon: Sun, title: "Solar Control Glass", body: "Optional solar coatings deflect summer heat gain without dimming light — a game-changer for south-facing rooms and glass extensions." },
];

const GLASS = [
  { title: "Double Glazing", body: "Argon-filled 28mm units with Low-E glass — our energy-rated standard." },
  { title: "Triple Glazing", body: "44mm sealed units with two Low-E coatings for passive-house performance." },
  { title: "Acoustic Glass", body: "6.4mm laminated inner pane engineered to absorb high-frequency traffic noise." },
  { title: "Obscure & Privacy", body: "Fifteen textured patterns — from stippled and cotswold to contemporary linear." },
  { title: "Georgian Bars", body: "Internal, external or through-pane astragals in every colour and profile." },
  { title: "Leaded Lights", body: "Hand-soldered lead cames in diamond, square and stained-glass configurations." },
];

const COLOURS = [
  { name: "Anthracite Grey", hex: "#2a2f33", ral: "RAL 7016" },
  { name: "Jet Black", hex: "#0f1114", ral: "RAL 9005" },
  { name: "Chartwell Green", hex: "#7a8c7a", ral: "RAL 6021" },
  { name: "Agate Grey", hex: "#7c7f80", ral: "RAL 7038" },
  { name: "Cream", hex: "#efe6d3", ral: "RAL 9001" },
  { name: "Rosewood", hex: "#4a2a1a", ral: "RAL 8016" },
  { name: "Irish Oak", hex: "#6b3f22", ral: "RAL 8001" },
  { name: "Arctic White", hex: "#f5f5f2", ral: "RAL 9016" },
];


const PROCESS = [
  { n: "01", t: "Free consultation", d: "A senior surveyor visits your home, listens to your goals and shares samples, colours and glass options in person." },
  { n: "02", t: "Precision survey", d: "Every aperture is laser-measured. We photograph, template and confirm every reveal so nothing is left to chance." },
  { n: "03", t: "Bespoke manufacture", d: "Your windows are built to order in a UK factory to your exact dimensions, colours and hardware specification." },
  { n: "04", t: "White-glove install", d: "Our uniformed installers protect your floors, remove the old frames, fit and seal the new — then leave the site spotless." },
  { n: "05", t: "10-year guarantee", d: "Every installation is backed by our insurance-backed guarantee, plus manufacturer warranties on hardware and sealed units." },
];

const FAQS = [
  { q: "How long does a full window installation take?", a: "Most homes are completed in 1–3 days. A single window is typically fitted in under two hours, and our teams work room by room so daily life is barely disrupted." },
  { q: "Which frame material should I choose — aluminium, uPVC or timber?", a: "Aluminium offers the slimmest sightlines and a lifetime finish; uPVC delivers the best price-to-performance ratio; timber is unmatched for period authenticity. Your surveyor will guide you based on your property style, budget and orientation." },
  { q: "Are your windows FENSA registered?", a: "Yes. We are FENSA-registered installers, which means every installation is self-certified against Building Regulations and comes with an insurance-backed guarantee." },
  { q: "Will new windows really cut my energy bills?", a: "A-rated windows typically save UK households between £120 and £235 per year (Energy Saving Trust), and triple glazing pushes savings further. Payback usually falls between six and ten years." },
  { q: "Can you match heritage or listed-property styles?", a: "Absolutely. We offer flush sash, run-through horns, slim putty-line beading and hand-applied woodgrain finishes for conservation areas, and can supply timber windows where planning requires." },
];

function WindowsPage() {
  return (
    <>
      {/* Immersive hero */}
      <section className="relative min-h-[58vh] flex items-end overflow-hidden">
        <img src={windowsHero} alt="Modern British home with premium aluminium windows" className="absolute inset-0 w-full h-full object-cover" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
        <div className="container-page relative z-10 w-full pb-10 pt-14 text-white">
          <p className="eyebrow eyebrow-on-dark mb-3" data-reveal="fade">Windows collection</p>
          <h1 className="display-1 max-w-5xl text-balance" data-reveal="up">
            Windows that <span className="italic text-brand-blue-2">redefine</span> home.
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/75 measure-body" data-reveal="up" style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}>
            Aluminium, uPVC and timber — bespoke to your home, built in Britain.
          </p>
          <div className="mt-7 flex flex-wrap gap-3" data-reveal="up" style={{ ["--reveal-delay" as string]: "240ms" } as Record<string, string>}>
            <a href="#quote" className="btn-shine bg-transparent border border-cta text-cta px-8 py-4 rounded-full text-sm font-semibold hover:bg-cta hover:text-white transition-colors inline-flex items-center gap-2">
              Get your free quote <ArrowRight className="size-4" />
            </a>
            <Link to="/gallery" className="border border-white text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-navy transition-colors">
              Explore the gallery
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-4 max-w-2xl" data-reveal="up" style={{ ["--reveal-delay" as string]: "360ms" } as Record<string, string>}>
            {[["12k+", "Homes glazed"], ["A++", "Energy rating"], ["4.9★", "10-year avg."], ["10yr", "Guarantee"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-xl md:text-2xl font-display font-semibold">{n}</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product range */}
      <ProductRange category="Windows" dark />

      {/* Full-bleed lifestyle */}
      <section className="relative h-[48vh] min-h-[340px] overflow-hidden">
        <img src={windowsInterior} alt="Luxury interior flooded with light through floor-to-ceiling windows" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="container-page relative z-10 h-full flex items-end pb-16">
          <blockquote className="max-w-2xl text-white text-2xl md:text-4xl font-display leading-[1.15] text-balance" data-reveal="up">
            "The light through these windows changed the whole feeling of the house. It's like living in a different home."
            <footer className="mt-6 text-sm uppercase tracking-widest text-white/60">— Elizabeth H., Guildford</footer>
          </blockquote>
        </div>
      </section>

      {/* Performance */}
      <section className="py-12 md:py-14 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--brand-blue) 0%, transparent 50%)" }} />
        <div className="container-page relative">
          <div className="max-w-2xl mb-10" data-reveal="up">
            <p className="text-xs font-bold text-[#6F84D8] uppercase tracking-[0.22em] mb-3">Performance</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.02]">Silence. Warmth. Security. Measured.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERFORMANCE.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="p-8 rounded-3xl bg-navy shadow-elegant card-lift" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 100}ms` } as Record<string, string>}>
                <Icon className="size-7 text-brand-blue-2 mb-6" />
                <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass options */}
      <section className="py-12 md:py-14 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-8" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Glass options</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.05] mb-3">The glass is where the magic happens.</h2>
            <p className="text-navy/60 leading-relaxed">More than 70% of a window's performance is decided by the glass — we build every sealed unit around the way you live.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GLASS.map((g, i) => (
              <div key={g.title} data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 60}ms` } as Record<string, string>} className="p-5 rounded-2xl bg-canvas border border-navy/5 hover:border-brand-blue/30 hover:shadow-soft transition">
                <Palette className="size-5 text-brand-blue mb-3" />
                <h3 className="font-display font-semibold text-navy mb-1.5">{g.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colours & handle finishes */}
      <section className="py-12 md:py-14 bg-soft-gray">
        <div className="container-page">
          <div className="max-w-2xl mb-8" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Colour & finish</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.05] mb-3">200+ RAL colours. Zero compromise.</h2>
            <p className="text-navy/60">Matt, satin, textured or high-gloss — plus hand-applied woodgrain foils in every RAL shade.</p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {COLOURS.map((c, i) => (
              <div key={c.name} className="group" data-reveal="zoom" style={{ ["--reveal-delay" as string]: `${i * 40}ms` } as Record<string, string>}>
                <div className="rgb-swatch aspect-square rounded-xl shadow-soft transition-transform group-hover:scale-[1.04]" style={{ background: c.hex }} data-ral={c.ral} />
                <p className="mt-2 text-[11px] font-medium text-navy text-center">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing & process */}
      <section className="py-12 md:py-14 bg-navy">
        <div className="container-page grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="rounded-[28px] overflow-hidden aspect-[4/3] shadow-elegant" data-reveal="left">
            <img src={installer} alt="Professional window installer at work" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div data-reveal="right">
            <p className="text-xs font-bold text-brand-blue-2 uppercase tracking-[0.22em] mb-3">Our process</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-[1.05] mb-6">From first visit to final polish.</h2>
            <ol className="space-y-4">
              {PROCESS.map((p) => (
                <li key={p.n} className="flex gap-5 group">
                  <div className="text-2xl font-display font-semibold text-brand-blue-2/50 group-hover:text-brand-blue-2 transition-colors shrink-0 w-10">{p.n}</div>
                  <div>
                    <h3 className="font-display font-semibold text-white mb-0.5">{p.t}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-14 bg-soft-gray">
        <div className="container-page grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4" data-reveal="left">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">FAQs</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Everything you wanted to ask.</h2>
            <p className="mt-6 text-navy/60">Can't see your question? Our team answer the phone in three rings.</p>
            <a href="tel:+441234567890" className="mt-6 inline-flex text-brand-blue font-semibold">Call 01234 567 890 →</a>
          </div>
          <div className="lg:col-span-8" data-reveal="right">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="border-navy/10">
                  <AccordionTrigger className="text-left text-lg font-display font-semibold text-navy hover:text-brand-blue py-6">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-navy/65 leading-relaxed pb-6">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <ExploreMore current="windows" />

    </>
  );
}

const _icons = [Award, Wrench, Sparkles];
void _icons;
