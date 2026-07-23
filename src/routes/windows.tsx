import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Layers, ShieldCheck, ThermometerSun, Volume2, Wrench, Sparkles, Sun } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductRange } from "@/components/site/ProductRange";
import windowsHero from "@/assets/windows-hero.jpg";
import windowsInterior from "@/assets/windows-interior.jpg";
import installer from "@/assets/installer.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productConservatories from "@/assets/product-conservatories.jpg";
import { CtaBanner } from "@/components/site/CtaBanner";

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
  { name: "Anthracite Grey", hex: "#2a2f33" },
  { name: "Jet Black", hex: "#0f1114" },
  { name: "Chartwell Green", hex: "#7a8c7a" },
  { name: "Agate Grey", hex: "#7c7f80" },
  { name: "Cream", hex: "#efe6d3" },
  { name: "Rosewood", hex: "#4a2a1a" },
  { name: "Irish Oak", hex: "#6b3f22" },
  { name: "Arctic White", hex: "#f5f5f2" },
];

const HANDLES = [
  { name: "Chrome", hex: "linear-gradient(135deg,#e6eaee,#aab2ba)" },
  { name: "Brushed Nickel", hex: "linear-gradient(135deg,#c3c4bd,#9a9b93)" },
  { name: "Brass", hex: "linear-gradient(135deg,#d8b878,#a97f3f)" },
  { name: "Matt Black", hex: "#17181b" },
  { name: "Heritage Cast Iron", hex: "#33352f" },
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
      <section className="relative min-h-[78vh] flex items-end overflow-hidden">
        <img src={windowsHero} alt="Modern British home with premium aluminium windows" className="absolute inset-0 w-full h-full object-cover" width={1600} height={1000} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />
        <div className="container-page relative z-10 pb-16 pt-20 text-white">
          <span className="inline-block text-[11px] font-bold tracking-[0.28em] uppercase text-white/70 mb-6" data-reveal="fade">Windows Collection</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] max-w-5xl text-balance" data-reveal="up">
            Windows that <span className="italic text-brand-blue-2">redefine</span> the way you see home.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed" data-reveal="up" style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}>
            Precision-engineered aluminium, uPVC and timber windows — bespoke to your home, built in Britain and installed by craftsmen who treat your property as their own.
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-reveal="up" style={{ ["--reveal-delay" as string]: "240ms" } as Record<string, string>}>
            <a href="#quote" className="btn-shine bg-white text-navy px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-blue hover:text-white transition-colors inline-flex items-center gap-2">
              Get your free quote <ArrowRight className="size-4" />
            </a>
            <Link to="/gallery" className="border border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors">
              Explore the gallery
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl" data-reveal="up" style={{ ["--reveal-delay" as string]: "360ms" } as Record<string, string>}>
            {[["12k+", "Homes glazed"], ["A++", "Energy rating"], ["4.9★", "10-year avg."], ["10yr", "Guarantee"]].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl md:text-4xl font-display font-semibold">{n}</div>
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
      <section className="py-14 md:py-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--brand-blue) 0%, transparent 50%)" }} />
        <div className="container-page relative">
          <div className="max-w-2xl mb-10" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue-2 uppercase tracking-[0.22em] mb-3">Performance</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.02]">Silence. Warmth. Security. Measured.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERFORMANCE.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm card-lift" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 100}ms` } as Record<string, string>}>
                <Icon className="size-7 text-brand-blue-2 mb-6" />
                <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass options */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-8" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Glass options</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.05] mb-3">The glass is where the magic happens.</h2>
            <p className="text-navy/60 leading-relaxed">More than 70% of a window's performance is decided by the glass — we build every sealed unit around the way you live.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GLASS.map((g, i) => (
              <div key={g.title} data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 60}ms` } as Record<string, string>} className="p-5 rounded-2xl bg-soft-gray border border-transparent hover:border-brand-blue/30 hover:bg-white hover:shadow-soft transition-all">
                <Layers className="size-5 text-brand-blue mb-3" />
                <h3 className="font-display font-semibold text-navy mb-1.5">{g.title}</h3>
                <p className="text-sm text-navy/60 leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colours & handle finishes */}
      <section className="py-14 md:py-16 bg-soft-gray">
        <div className="container-page">
          <div className="max-w-2xl mb-8" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Colour & finish</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.05] mb-3">200+ RAL colours. Zero compromise.</h2>
            <p className="text-navy/60">Matt, satin, textured or high-gloss — plus hand-applied woodgrain foils and a full range of handle finishes.</p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {COLOURS.map((c, i) => (
              <div key={c.name} className="group" data-reveal="zoom" style={{ ["--reveal-delay" as string]: `${i * 40}ms` } as Record<string, string>}>
                <div className="aspect-square rounded-xl shadow-soft transition-transform group-hover:scale-[1.04]" style={{ background: c.hex }} />
                <p className="mt-2 text-[11px] font-medium text-navy text-center">{c.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xs font-bold text-navy/50 uppercase tracking-[0.18em] mb-4">Handle finishes</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {HANDLES.map((h) => (
                <div key={h.name} className="flex items-center gap-3">
                  <span className="size-8 rounded-full shadow-soft ring-1 ring-navy/10" style={{ background: h.hex }} />
                  <span className="text-sm font-medium text-navy">{h.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & process */}
      <section className="py-14 md:py-16 bg-canvas">
        <div className="container-page grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="rounded-[28px] overflow-hidden aspect-[4/3] shadow-elegant" data-reveal="left">
            <img src={installer} alt="Professional window installer at work" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div data-reveal="right">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Our process</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.05] mb-6">From first visit to final polish.</h2>
            <ol className="space-y-4">
              {PROCESS.map((p) => (
                <li key={p.n} className="flex gap-5 group">
                  <div className="text-2xl font-display font-semibold text-brand-blue/50 group-hover:text-brand-blue transition-colors shrink-0 w-10">{p.n}</div>
                  <div>
                    <h3 className="font-display font-semibold text-navy mb-0.5">{p.t}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-16 bg-soft-gray">
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

      {/* Related */}
      <section className="py-14 md:py-16 bg-white">
        <div className="container-page">
          <div className="flex items-end justify-between mb-12" data-reveal="up">
            <div>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Explore more</p>
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Complete the look.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { to: "/doors" as const, t: "Doors Collection", d: "Bi-fold, sliding & composite doors", img: productDoors },
              { to: "/conservatories" as const, t: "Conservatories & Extensions", d: "Bespoke architectural glazing", img: productConservatories },
            ].map((r) => (
              <Link key={r.to} to={r.to} className="group relative rounded-[32px] overflow-hidden aspect-[16/10] block">
                <img src={r.img} alt={r.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold mb-1">{r.t}</h3>
                  <p className="text-sm text-white/70 flex items-center gap-2">{r.d} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to see the difference?" subtitle="Book a free in-home consultation. No obligation. No pressure. Just expert advice from people who love what they do." />
    </>
  );
}

const _icons = [Award, Wrench, Sparkles];
void _icons;
