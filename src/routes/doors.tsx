import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, DoorOpen, KeyRound, Layers, Lock, Palette, ShieldCheck, Sparkles, ThermometerSun } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductRange } from "@/components/site/ProductRange";
import { GalleryReel } from "@/components/site/GalleryReel";
import { ExploreMore } from "@/components/site/ExploreMore";
import { HandleFinishes } from "@/components/site/HandleFinishes";
import { GlassOptions } from "@/components/site/GlassOptions";
import { Swipeable } from "@/components/site/Swipeable";
import doorsHero from "@/assets/doors-hero.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsBifold from "@/assets/doors-bifold.jpg";
import doorsFrench from "@/assets/doors-french.jpg";
import doorsHardware from "@/assets/doors-hardware.jpg";
import productDoors from "@/assets/product-doors.jpg";
import bifold2 from "@/assets/products/bifold-2.jpg";
import sliding2 from "@/assets/products/sliding-2.jpg";
import crittall1 from "@/assets/products/crittall-1.jpg";
export const Route = createFileRoute("/doors")({
  head: () => ({
    meta: [
      { title: "Luxury Doors — Composite, Bi-Fold & Sliding | Affordable Glazings" },
      { name: "description", content: "Bespoke composite, uPVC, French, sliding, bi-fold and stable doors. PAS 24 secured, smart-lock ready and made to open your home to more light and life." },
      { property: "og:title", content: "Luxury Doors | Affordable Glazings" },
      { property: "og:description", content: "Bespoke composite, bi-fold and sliding doors — engineered for security, style and seamless indoor-outdoor living." },
      { property: "og:image", content: doorsHero },
      { property: "og:url", content: "/doors" },
    ],
    links: [{ rel: "canonical", href: "/doors" }],
  }),
  component: DoorsPage,
});

const SECURITY = [
  { icon: ShieldCheck, title: "PAS 24:2022", body: "Every door passes 30+ attack tests, from body slams to jemmy bars." },
  { icon: KeyRound, title: "TS007 3★ cylinders", body: "Anti-snap, anti-drill, anti-bump and anti-pick as standard on all entrances." },
  { icon: Layers, title: "Laminated glass", body: "Impact-resistant glass panels bond in place even when shattered." },
  { icon: Lock, title: "Hook-bolt locking", body: "Up to 8 hardened steel hooks and shootbolts spread the load across the frame." },
];

const COLOURS = [
  { name: "Chartwell Green", hex: "#7a8c7a", ral: "RAL 6021" }, { name: "Duck Egg", hex: "#a8c8c9", ral: "RAL 6034" }, { name: "Anthracite", hex: "#2a2f33", ral: "RAL 7016" },
  { name: "Racing Green", hex: "#1e3b2c", ral: "RAL 6009" }, { name: "Rioja Red", hex: "#5c1a20", ral: "RAL 3005" }, { name: "French Navy", hex: "#1a2a44", ral: "RAL 5013" },
  { name: "Cream", hex: "#efe6d3", ral: "RAL 9001" }, { name: "Slate", hex: "#4c5359", ral: "RAL 7015" },
];

const GLASS_STYLES = [
  { t: "Clear bevelled", d: "Traditional cut-glass sparkle for period doors." },
  { t: "Contemporary linear", d: "Frosted horizontal stripes for modern minimalism." },
  { t: "Stained Art Deco", d: "Hand-leaded coloured glass in geometric patterns." },
  { t: "Obscure privacy", d: "15 textures from stippled to satin — full privacy, full light." },
];

const PROCESS = [
  { n: "01", t: "Design consultation", d: "Explore samples of every skin, glass and hardware option in your own hallway." },
  { n: "02", t: "Precision templating", d: "Threshold, lintel, reveal and opening handed — no assumptions, no site surprises." },
  { n: "03", t: "Factory build", d: "Each door slab is bonded, pressed and cured to your exact specification in a British factory." },
  { n: "04", t: "Immaculate install", d: "Old door out, new door in, threshold sealed, keys handed over — often within a single day." },
];

const FAQS = [
  { q: "How secure are your composite doors?", a: "All composite doors are PAS 24:2022 certified, fitted with TS007 3-star anti-snap cylinders, hook-bolt multi-point locking and laminated glass. Insurers recognise this as the highest standard of residential door security in the UK." },
  { q: "Can I have a smart lock retro-fitted?", a: "Yes. Every composite door we install is smart-lock ready, and we can fit Yale, ERA, Danalock or Ultion Nuki systems out of the box. All options retain a mechanical key override." },
  { q: "How energy-efficient are your entrance doors?", a: "Our composite doors achieve a typical U-value of 1.0 W/m²K — significantly better than a standard timber door — thanks to a CFC-free foam core and thermally broken threshold." },
  { q: "Will bi-folds or sliding doors suit my home better?", a: "Bi-folds open the entire aperture and are ideal for merging garden and living space. Sliding doors offer the slimmest sightlines and the largest single panes when the view is what matters most. Our designer will walk you through both in person." },
  { q: "How long do bi-fold and sliding door installations take?", a: "Most installations are complete in 1–2 days. Structural openings requiring steelwork or glazing over 2.5m tall are scheduled with a project manager and typically take 3–5 days." },
];

function DoorsPage() {
  return (
    <>
      {/* Split hero */}
      <section className="relative py-10 md:py-12 bg-canvas overflow-hidden">
        <div className="container-page grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative z-10">
            <p className="eyebrow mb-3" data-reveal="fade">Doors collection</p>
            <h1 className="display-1 text-navy" data-reveal="up">
              Grand entrances. <span className="italic text-brand-blue">Effortless</span> everyday.
            </h1>
            <p className="mt-4 text-base text-ink-muted measure-body" data-reveal="up" style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}>
              Composite front doors to sliding walls of glass — built to last a lifetime.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" data-reveal="up" style={{ ["--reveal-delay" as string]: "240ms" } as Record<string, string>}>
              <a href="#quote" className="btn-shine bg-transparent border border-cta text-cta px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-cta hover:text-white transition-colors inline-flex items-center gap-2">
                Get a free door quote <ArrowRight className="size-4" />
              </a>
              <Link to="/gallery" className="border border-cta text-cta px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-cta hover:text-white transition-colors">
                View installations
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-ink-muted" data-reveal="fade" style={{ ["--reveal-delay" as string]: "360ms" } as Record<string, string>}>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-blue" /> PAS 24 Secured</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-blue" /> 10-year guarantee</span>
            </div>
          </div>
          {/* Landscape crop instead of a 4/5 portrait — the portrait was what
              pushed this hero past one screen. */}
          <div className="lg:col-span-6 relative" data-reveal="right">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-elegant">
              <img src={doorsHero} alt="Luxury anthracite composite front door with brass hardware" className="w-full h-full object-cover" width={1600} height={1200} />
            </div>
          </div>
        </div>
      </section>

      {/* Product range */}
      <ProductRange category="Doors" dark />

      {/* Full-bleed lifestyle */}
      <section className="relative h-[42vh] min-h-[300px] md:h-[75vh] overflow-hidden">
        <img src={doorsSliding} alt="Sliding doors opening onto garden" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-navy/10" />
        <div className="container-page relative h-full flex items-center">
          <div className="max-w-2xl text-white" data-reveal="up">
            <p className="text-xs font-bold tracking-[0.28em] uppercase text-brand-blue-2 mb-4">Feature focus</p>
            <h2 className="text-2xl md:text-6xl font-display font-semibold leading-[1.05] md:leading-[1.02] mb-3 md:mb-6 text-balance">Blur the line between inside and out.</h2>
            <p className="text-sm md:text-lg text-white/75 leading-relaxed">Aluminium sliding and bi-fold systems with 20mm sightlines. Ultra-thin frames. Structural glass panels up to 3m tall. Because the garden shouldn't feel like a different room.</p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-12 md:py-14 bg-white">
        <div className="container-page grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5" data-reveal="left">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Security</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] mb-6">Peace of mind, engineered into every millimetre.</h2>
            <p className="text-navy/65 leading-relaxed">A door is only as secure as its weakest component. That's why we specify the hardware first and build the door around it — not the other way round.</p>
          </div>
          <Swipeable at="sm" outerClassName="lg:col-span-7" reveal="right" className="sm:grid-cols-2">
            {SECURITY.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="p-7 rounded-2xl bg-navy text-white card-lift shrink-0 w-[78%] snap-start sm:w-auto sm:shrink" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 80}ms` } as Record<string, string>}>
                <Icon className="size-6 text-brand-blue-2 mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </Swipeable>
        </div>
      </section>

      <GlassOptions />

      {/* Colour + Glass */}
      <section className="py-12 md:py-14 bg-soft-gray">
        <div className="container-page">
          <div className="max-w-2xl mb-10" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Design your door</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy leading-[1.05] mb-3">Colour. Glass. Hardware. Yours.</h2>
          </div>
          <div data-reveal="up">
            <h3 className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-6">Signature colours</h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {COLOURS.map((c) => (
                <div key={c.name} className="group">
                  <div className="rgb-swatch aspect-square rounded-xl shadow-soft transition-transform group-hover:scale-[1.04]" style={{ background: c.hex }} data-ral={c.ral} />
                  <p className="mt-2 text-[11px] font-medium text-navy text-center">{c.name}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-navy/55">Plus 200+ RAL matches available on request — including dual-tone inside/outside.</p>
          </div>

          <div className="mt-12" data-reveal="up" style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}>
            <h3 className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-6">Glass styles</h3>
            <Swipeable at="sm" className="sm:grid-cols-2 lg:grid-cols-4">
              {GLASS_STYLES.map((g) => (
                <div key={g.t} className="p-5 rounded-2xl bg-canvas border border-navy/5 hover:border-brand-blue/30 hover:shadow-soft transition shrink-0 w-[78%] snap-start sm:w-auto sm:shrink">
                  <Palette className="size-5 text-brand-blue mb-3" />
                  <h4 className="font-semibold text-navy mb-1">{g.t}</h4>
                  <p className="text-sm text-navy/60">{g.d}</p>
                </div>
              ))}
            </Swipeable>
          </div>

          <div className="mt-12">
            <HandleFinishes />
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 md:py-14 bg-canvas">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10" data-reveal="up">
            <div>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Recent projects</p>
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Doors in the wild.</h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-brand-blue hidden md:inline-flex items-center gap-2">Full gallery <ArrowRight className="size-4" /></Link>
          </div>
        </div>
        <GalleryReel
          items={[
            { img: doorsHero, label: "Composite front door · Surrey" },
            { img: doorsBifold, label: "Bi-fold elevation · Cheltenham" },
            { img: doorsFrench, label: "French doors · Bath" },
            { img: doorsSliding, label: "Sliding doors · Winchester" },
            { img: doorsHardware, label: "Smart-lock hardware · Kent" },
            { img: productDoors, label: "Entrance suite · Oxford" },
            { img: bifold2, label: "Glazed elevation · Islington" },
            { img: sliding2, label: "Slim sightlines · Guildford" },
            { img: crittall1, label: "Crittall-style doors · Chester" },
          ]}
        />
      </section>

      {/* Process — vertical */}
      <section className="py-12 md:py-14 bg-black text-white">
        <div className="container-page">
          <div className="max-w-2xl mb-10" data-reveal="up">
            <p className="text-xs font-bold text-[#6F84D8] uppercase tracking-[0.22em] mb-3">How we install</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.02]">Four unhurried steps.</h2>
          </div>
          <Swipeable at="md" gap="gap-6" tone="dark" className="md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <div key={p.n} className="p-8 rounded-3xl bg-navy shadow-elegant relative shrink-0 w-[78%] snap-start md:w-auto md:shrink" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 100}ms` } as Record<string, string>}>
                <div className="text-5xl font-display font-semibold text-brand-blue-2/40 mb-5">{p.n}</div>
                <h3 className="font-display font-semibold text-xl mb-2">{p.t}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </Swipeable>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-14 bg-soft-gray">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-8" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Frequently asked</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Doors, answered.</h2>
          </div>
          <Accordion type="single" collapsible data-reveal="up">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`d-${i}`} className="border-navy/10">
                <AccordionTrigger className="text-left text-lg font-display font-semibold text-navy hover:text-brand-blue py-6">{f.q}</AccordionTrigger>
                <AccordionContent className="text-navy/65 leading-relaxed pb-6">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ExploreMore current="doors" />

    </>
  );
}

const _icons = [DoorOpen, ThermometerSun, Sparkles];
void _icons;
