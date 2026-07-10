import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, DoorOpen, Fingerprint, KeyRound, Layers, Lock, Palette, ShieldCheck, Smartphone, Sparkles, ThermometerSun } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import doorsHero from "@/assets/doors-hero.jpg";
import doorsSliding from "@/assets/doors-sliding.jpg";
import doorsBifold from "@/assets/doors-bifold.jpg";
import doorsFrench from "@/assets/doors-french.jpg";
import doorsHardware from "@/assets/doors-hardware.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productWindows from "@/assets/product-windows.jpg";
import productConservatories from "@/assets/product-conservatories.jpg";
import { CtaBanner } from "@/components/site/CtaBanner";

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

const COLLECTION = [
  { title: "Composite Front Doors", tag: "Signature", body: "A 48mm solid-timber core wrapped in a colour-through GRP skin. Warmer than uPVC, more secure than timber, and impervious to warping, splitting or fading.", img: doorsHero },
  { title: "uPVC Doors", tag: "Practical", body: "The most cost-effective way to modernise a home. Multi-chambered profiles, steel reinforcement and a lifetime of low-maintenance colour options.", img: productDoors },
  { title: "French Doors", tag: "Timeless", body: "Double-opening classic doors — perfect for gardens, terraces and formal dining rooms. Slim sightlines, elegant proportions, unmistakable charm.", img: doorsFrench },
  { title: "Sliding Patio Doors", tag: "Panoramic", body: "Whisper-quiet ultra-slim aluminium sliders with panes up to 3m tall. The cleanest possible transition between garden and living space.", img: doorsSliding },
  { title: "Bi-Fold Doors", tag: "Statement", body: "Fold-back panels that stack neatly to one side, opening entire walls to the outside. Available in aluminium and hybrid alu-clad timber.", img: doorsBifold },
  { title: "Stable Doors", tag: "Country", body: "Independently opening upper and lower leaves — the country-cottage classic, updated with modern locking and thermal cores.", img: productDoors },
];

const SECURITY = [
  { icon: ShieldCheck, title: "PAS 24:2022", body: "Every door passes 30+ attack tests, from body slams to jemmy bars." },
  { icon: KeyRound, title: "TS007 3★ cylinders", body: "Anti-snap, anti-drill, anti-bump and anti-pick as standard on all entrances." },
  { icon: Layers, title: "Laminated glass", body: "Impact-resistant glass panels bond in place even when shattered." },
  { icon: Lock, title: "Hook-bolt locking", body: "Up to 8 hardened steel hooks and shootbolts spread the load across the frame." },
];

const SMART = [
  { icon: Fingerprint, t: "Biometric entry", d: "Read your fingerprint in under 0.4s. Store up to 100 authorised users." },
  { icon: Smartphone, t: "Smart app control", d: "Grant one-time or scheduled access to guests, cleaners and tradespeople from your phone." },
  { icon: KeyRound, t: "Keypad backup", d: "Rolling PIN codes and mechanical key override — you're never locked out." },
];

const COLOURS = [
  { name: "Chartwell Green", hex: "#7a8c7a" }, { name: "Duck Egg", hex: "#a8c8c9" }, { name: "Anthracite", hex: "#2a2f33" },
  { name: "Racing Green", hex: "#1e3b2c" }, { name: "Rioja Red", hex: "#5c1a20" }, { name: "French Navy", hex: "#1a2a44" },
  { name: "Cream", hex: "#efe6d3" }, { name: "Slate", hex: "#4c5359" },
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
      <section className="relative pt-32 pb-16 bg-canvas overflow-hidden">
        <div className="container-page grid lg:grid-cols-12 gap-10 items-center pt-10">
          <div className="lg:col-span-6 relative z-10">
            <span className="inline-block text-[11px] font-bold tracking-[0.28em] uppercase text-brand-blue mb-6" data-reveal="fade">Doors Collection</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] text-navy text-balance" data-reveal="up">
              Grand entrances. <span className="italic text-brand-blue">Effortless</span> everyday.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-navy/60 max-w-xl leading-relaxed" data-reveal="up" style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}>
              From solid-core composite front doors to floor-to-ceiling sliding walls of glass — every door we install is built to welcome you home for a lifetime.
            </p>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal="up" style={{ ["--reveal-delay" as string]: "240ms" } as Record<string, string>}>
              <Link to="/quote" className="btn-shine bg-navy text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors inline-flex items-center gap-2">
                Get a free door quote <ArrowRight className="size-4" />
              </Link>
              <Link to="/gallery" className="border border-navy/15 text-navy px-8 py-4 rounded-full text-sm font-semibold hover:bg-white transition-colors">
                View installations
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-xs uppercase tracking-widest text-navy/50" data-reveal="fade" style={{ ["--reveal-delay" as string]: "360ms" } as Record<string, string>}>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-blue" /> PAS 24 Secured</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-blue" /> Smart-lock ready</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-brand-blue" /> 10-year guarantee</span>
            </div>
          </div>
          <div className="lg:col-span-6 relative" data-reveal="right">
            <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-elegant">
              <img src={doorsHero} alt="Luxury anthracite composite front door with brass hardware" className="w-full h-full object-cover" width={1600} height={1000} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-elegant max-w-[220px] hidden md:block animate-float">
              <div className="text-3xl font-display font-semibold text-navy">1.0</div>
              <div className="text-xs text-navy/60 mt-1">W/m²K U-value on our signature composite range</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container-page max-w-4xl text-center" data-reveal="up">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">The threshold matters</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-navy leading-[1.05] mb-8 text-balance">
            A door is the first sentence your home speaks about you.
          </h2>
          <p className="text-lg text-navy/60 leading-relaxed">Whether it's the entrance that greets your visitors or the wall of glass that opens onto a summer garden, a well-made door changes the rhythm of your day. We spend as long designing the door you will touch a thousand times as some builders spend on entire rooms.</p>
        </div>
      </section>

      {/* Collection — bento */}
      <section className="py-28 bg-canvas">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16" data-reveal="up">
            <div className="max-w-xl">
              <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">The full collection</p>
              <h2 className="text-4xl md:text-6xl font-display font-semibold text-navy leading-[1.02]">Seven doors. Endless possibilities.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[280px]">
            {COLLECTION.map((c, i) => {
              const span = [
                "md:col-span-4 md:row-span-2",
                "md:col-span-2 md:row-span-1",
                "md:col-span-2 md:row-span-1",
                "md:col-span-3 md:row-span-2",
                "md:col-span-3 md:row-span-1",
                "md:col-span-3 md:row-span-1",
              ][i] || "md:col-span-3";
              return (
                <div key={c.title} className={`${span} group relative rounded-[28px] overflow-hidden bg-navy`} data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 80}ms` } as Record<string, string>}>
                  <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110 opacity-90 group-hover:opacity-100" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-blue-2 mb-2">{c.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-display font-semibold mb-2">{c.title}</h3>
                    <p className="text-sm text-white/75 leading-relaxed max-w-md">{c.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-bleed lifestyle */}
      <section className="relative h-[75vh] overflow-hidden">
        <img src={doorsSliding} alt="Sliding doors opening onto garden" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-navy/10" />
        <div className="container-page relative h-full flex items-center">
          <div className="max-w-2xl text-white" data-reveal="up">
            <p className="text-xs font-bold tracking-[0.28em] uppercase text-brand-blue-2 mb-4">Feature focus</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.02] mb-6 text-balance">Blur the line between inside and out.</h2>
            <p className="text-lg text-white/75 leading-relaxed">Aluminium sliding and bi-fold systems with 20mm sightlines. Ultra-thin frames. Structural glass panels up to 3m tall. Because the garden shouldn't feel like a different room.</p>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-28 bg-white">
        <div className="container-page grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5" data-reveal="left">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Security</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] mb-6">Peace of mind, engineered into every millimetre.</h2>
            <p className="text-navy/65 leading-relaxed">A door is only as secure as its weakest component. That's why we specify the hardware first and build the door around it — not the other way round.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4" data-reveal="right">
            {SECURITY.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="p-7 rounded-2xl bg-navy text-white card-lift" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 80}ms` } as Record<string, string>}>
                <Icon className="size-6 text-brand-blue-2 mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart lock */}
      <section className="py-28 bg-soft-gray">
        <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
          <div data-reveal="left" className="order-2 lg:order-1">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Smart-lock ready</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] mb-8">Your keys, whenever you want them.</h2>
            <div className="space-y-5">
              {SMART.map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-soft">
                    <Icon className="size-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy text-lg mb-1">{t}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-elegant order-1 lg:order-2" data-reveal="right">
            <img src={doorsHardware} alt="Premium brushed brass door handle detail" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Colour + Glass */}
      <section className="py-28 bg-white">
        <div className="container-page">
          <div className="max-w-2xl mb-16" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Design your door</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-navy leading-[1.02]">Colour. Glass. Hardware. Yours.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div data-reveal="up">
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-6">Signature colours</h3>
              <div className="grid grid-cols-4 gap-3">
                {COLOURS.map((c) => (
                  <div key={c.name} className="group">
                    <div className="aspect-square rounded-2xl shadow-soft transition-transform group-hover:scale-105" style={{ background: c.hex }} />
                    <p className="mt-2 text-[11px] font-medium text-navy text-center">{c.name}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-navy/55">Plus 200+ RAL matches available on request — including dual-tone inside/outside.</p>
            </div>
            <div data-reveal="up" style={{ ["--reveal-delay" as string]: "120ms" } as Record<string, string>}>
              <h3 className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-6">Glass styles</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {GLASS_STYLES.map((g) => (
                  <div key={g.t} className="p-5 rounded-2xl bg-canvas border border-navy/5 hover:border-brand-blue/30 hover:shadow-soft transition">
                    <Palette className="size-5 text-brand-blue mb-3" />
                    <h4 className="font-semibold text-navy mb-1">{g.t}</h4>
                    <p className="text-sm text-navy/60">{g.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-24 bg-canvas">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10" data-reveal="up">
            <div>
              <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Recent projects</p>
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">Doors in the wild.</h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-brand-blue hidden md:inline-flex items-center gap-2">Full gallery <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[doorsHero, doorsBifold, doorsFrench, doorsSliding, doorsHardware, productDoors, doorsBifold, doorsHero].map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 || i === 5 ? "col-span-2 aspect-[2/1]" : "aspect-square"}`} data-reveal="zoom" style={{ ["--reveal-delay" as string]: `${i * 60}ms` } as Record<string, string>}>
                <img src={src} alt={`Door project ${i + 1}`} className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-110" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — vertical */}
      <section className="py-28 bg-navy text-white">
        <div className="container-page">
          <div className="max-w-2xl mb-16" data-reveal="up">
            <p className="text-xs font-bold text-brand-blue-2 uppercase tracking-[0.22em] mb-3">How we install</p>
            <h2 className="text-4xl md:text-6xl font-display font-semibold leading-[1.02]">Four unhurried steps.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <div key={p.n} className="p-8 rounded-3xl border border-white/10 relative" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 100}ms` } as Record<string, string>}>
                <div className="text-5xl font-display font-semibold text-brand-blue-2/40 mb-5">{p.n}</div>
                <h3 className="font-display font-semibold text-xl mb-2">{p.t}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews strip */}
      <section className="py-24 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: "The new bi-folds have completely transformed how we live. We're outside constantly.", n: "Chris & Amy P.", w: "Cheltenham" },
              { q: "The composite front door is an absolute tank. Beautiful too — half our street has asked where it's from.", n: "Diane R.", w: "Bristol" },
              { q: "Sliding doors were fitted in a single day, and the finish is flawless. Genuine craftsmanship.", n: "Nadeem J.", w: "Manchester" },
            ].map((t, i) => (
              <figure key={i} className="p-8 rounded-3xl bg-canvas border border-navy/5 card-lift" data-reveal="up" style={{ ["--reveal-delay" as string]: `${i * 100}ms` } as Record<string, string>}>
                <div className="text-brand-blue mb-4">★★★★★</div>
                <blockquote className="text-navy leading-relaxed mb-6">"{t.q}"</blockquote>
                <figcaption className="text-sm">
                  <div className="font-semibold text-navy">{t.n}</div>
                  <div className="text-navy/50 text-xs">{t.w}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-soft-gray">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-14" data-reveal="up">
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

      {/* Related */}
      <section className="py-24 bg-white">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {[
            { to: "/windows" as const, t: "Windows", d: "Casement, sash, tilt & turn", img: productWindows },
            { to: "/conservatories" as const, t: "Conservatories", d: "Extensions & orangeries", img: productConservatories },
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

      <CtaBanner title="Design your dream door." subtitle="Free consultation, transparent pricing, and a door that will still look brand-new in 2040." />
    </>
  );
}

const _icons = [DoorOpen, ThermometerSun, Sparkles];
void _icons;
