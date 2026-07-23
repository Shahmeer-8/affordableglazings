import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Clock,
  Flag,
  Hammer,
  Leaf,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import productWindows from "@/assets/product-windows.jpg";
import productDoors from "@/assets/product-doors.jpg";
import productConservatories from "@/assets/product-conservatories.jpg";
import craftsman from "@/assets/craftsman.jpg";
import consVictorian from "@/assets/cons-victorian.jpg";
import consTiled from "@/assets/cons-tiled.jpg";
import windowsSash from "@/assets/windows-sash.jpg";
import windowsDetail from "@/assets/windows-detail.jpg";
import doorsBifold from "@/assets/doors-bifold.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import { CtaBanner } from "@/components/site/CtaBanner";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Affordable Glazings — Premium UK Windows, Doors & Conservatories" },
      {
        name: "description",
        content:
          "Bespoke architectural glazing across the UK. A++ energy-rated windows, luxury doors and light-filled conservatories, expertly installed.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      {/* <WhyUs /> */}
      {/* <Performance /> */}
      <Process />
      <BeforeAfter />
      <Testimonials />
      <Journal />
      <CtaBanner />
    </>
  );
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <section className="relative min-h-[82vh] flex items-center pt-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-[1.08] animate-hero-pan"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroHome}
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
        {/* Header-safe scrim: guarantees nav legibility regardless of what the video is showing up top */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/70 via-navy/25 to-transparent" />
        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
      </div>

      <div className="container-page relative z-10 w-full py-16">
        <div className="max-w-3xl space-y-7 text-white">
          <div
            className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white text-[11px] font-semibold tracking-[0.18em] uppercase border border-brass/30"
          >
            <span className="size-1.5 bg-brass rounded-full animate-pulse" />
            British Engineering · Est. 1994
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight">
            <span className="hero-line">
              {"Redefining the".split(" ").map((w, i) => (
                <span key={w} className="hero-word" style={{ ["--wd" as never]: `${120 + i * 110}ms` }}>
                  {w}&nbsp;
                </span>
              ))}
            </span>
            <span className="hero-line">
              <span className="hero-word" style={{ ["--wd" as never]: "400ms" }}>
                <span className="text-gradient-brand text-gradient-animate">view of home.</span>
              </span>
            </span>
          </h1>

          <p
            style={{ animationDelay: "560ms" }}
            className="animate-reveal text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
          >
            Bespoke windows, doors and conservatories — crafted in Britain.
          </p>

          <div
            style={{ animationDelay: "680ms" }}
            className="animate-reveal flex flex-wrap gap-3 pt-2"
          >
            <a
              href="#quote"
              className="group btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-blue-2 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-[0_10px_40px_-10px_var(--brand-blue)] hover:shadow-[0_20px_60px_-10px_var(--brand-blue)] transition-all hover:-translate-y-0.5"
            >
              Get Free Quote
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 glass-dark text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/15 hover:-translate-y-0.5 transition-all"
            >
              View Our Work
            </Link>
          </div>

          <div className="pt-5 flex flex-wrap gap-2.5">
            {[
              { icon: Award, label: "10-Year Guarantee" },
              { icon: Flag, label: "Made in Britain" },
              { icon: Leaf, label: "A++ Energy Rated" },
              { icon: ShieldCheck, label: "FENSA Registered" },
            ].map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                style={{ animationDelay: `${900 + i * 130}ms` }}
                className="animate-reveal inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-xs font-semibold text-white/85 border border-white/10 transition-transform duration-300 hover:-translate-y-0.5 hover:border-brass/40"
              >
                <Icon className="size-3.5 text-brand-blue-2" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 text-[10px] uppercase tracking-[0.3em] animate-float">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  );
}

/* ---------------------------- TRUST STRIP --------------------------- */

function TrustStrip() {
  const items = ["FENSA", "Which? Trusted", "Checkatrade 9.8", "Made in Britain", "TrustMark", "Certass"];
  return (
    <section className="border-y border-navy/5 bg-white">
      <div className="container-page py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {items.map((i) => (
          <span key={i} className="text-xs md:text-sm font-bold uppercase tracking-[0.22em] text-navy/40">
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ---------------------------- */

const SERVICES = [
  {
    to: "/windows",
    title: "Casement Windows",
    tag: "Signature",
    img: productWindows,
    body: "A++ rated with ultra-slim sightlines.",
  },
  {
    to: "/doors",
    title: "Bi-Fold Systems",
    tag: "Grand Entrances",
    img: productDoors,
    body: "Seamless indoor-outdoor living, PAS 24 secured.",
  },
  {
    to: "/conservatories",
    title: "Sun Rooms",
    tag: "Living Spaces",
    img: productConservatories,
    body: "Thermal glass for year-round comfort.",
  },
];

function Services() {
  return (
    <section className="pt-12 md:pt-16 pb-8 md:pb-10">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Our Specialisms</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-navy leading-[1.05] text-balance">
              Architectural solutions for every modern space.
            </h2>
          </div>
          <p className="text-navy/60 text-sm max-w-xs">From heritage homes to modern extensions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Link
              key={s.to}
              to={s.to}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 120}ms` }}
              className="group relative overflow-hidden rounded-3xl bg-white p-3 border border-navy/5 card-lift"
            >

              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                />
              </div>
              <div className="px-3 pb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-1.5">{s.tag}</p>
                <h3 className="text-xl font-display font-semibold text-navy mb-1.5">{s.title}</h3>
                <p className="text-navy/60 text-sm mb-4">{s.body}</p>
                <span className="text-brand-blue font-semibold flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                  Explore range <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHY US ------------------------------ */

const WHY = [
  { icon: ShieldCheck, title: "10-year guarantee", body: "Every installation backed by our comprehensive lifetime-of-home guarantee." },
  { icon: Leaf, title: "A++ energy rated", body: "Reduce heating bills by up to 30% with our high-performance thermal glazing." },
  { icon: Ruler, title: "Bespoke to millimetre", body: "Laser-measured, factory-cut, and hand-finished for a millimetre-perfect fit." },
  { icon: Award, title: "Award-winning team", body: "FENSA, TrustMark and Which? Trusted Trader certified craftsmen." },
  { icon: Clock, title: "On-time, every time", body: "Fixed installation dates, no surprises. Cleanup included." },
  { icon: Sparkles, title: "Design consultancy", body: "In-home visualisation with 3D mockups before you commit a penny." },
];

function WhyUs() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="container-page">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Why choose us</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] text-balance">
            Craftsmanship you can feel, performance you can measure.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
              className="p-8 rounded-3xl bg-soft-gray hover:bg-white hover:shadow-elegant border border-transparent hover:border-brand-blue/20 transition-all duration-500 group"
            >
              <div className="size-12 rounded-2xl bg-white grid place-items-center text-brand-blue mb-6 shadow-soft group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-blue-2 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Icon className="size-5" />
              </div>
              <h3 className="text-xl font-display font-semibold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- PERFORMANCE --------------------------- */

function Performance() {
  const stats: { node: import("react").ReactNode; label: string }[] = [
    { node: <AnimatedCounter to={0.8} decimals={1} />, label: "U-Value Performance" },
    { node: <><AnimatedCounter to={100} />%</>, label: "Recyclable Aluminium" },
    { node: <><AnimatedCounter to={35} />dB</>, label: "Noise Reduction" },
    { node: "PAS24", label: "Security Certified" },
  ];

  return (
    <section className="py-14 md:py-16 bg-navy text-white overflow-hidden relative">
      <div className="absolute -top-40 -right-40 size-[560px] rounded-full bg-brand-blue/25 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-brand-blue-2/15 blur-3xl" />

      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center relative">
        <div className="space-y-10">
          <p data-reveal="up" className="text-xs font-bold text-brand-blue-2 uppercase tracking-[0.22em]">Performance</p>
          <h2 data-reveal="up" style={{ ["--reveal-delay" as never]: "80ms" }} className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-[1.02]">
            Engineered for the future of thermal comfort.
          </h2>
          <p data-reveal="up" style={{ ["--reveal-delay" as never]: "160ms" }} className="text-white/70 max-w-lg text-lg leading-relaxed">
            Our systems exceed the latest Building Regulations for thermal efficiency, acoustic insulation and security.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                data-reveal="up"
                style={{ ["--reveal-delay" as never]: `${i * 80}ms` }}
                className="border-t border-white/10 pt-6"
              >
                <div className="text-4xl md:text-5xl font-display font-semibold text-gradient-brand mb-2">{s.node}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>


          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              to="/windows"
              className="bg-white text-navy px-8 py-4 rounded-xl font-bold hover:bg-brand-blue hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Explore specifications <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="glass-dark rounded-[36px] p-2 shadow-2xl">
            <div className="aspect-[3/4] rounded-[28px] overflow-hidden">
              <img
                src={craftsman}
                alt="Master craftsman installing premium glazing"
                loading="lazy"
                width={1200}
                height={1600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 md:-left-10 glass rounded-2xl px-5 py-4 shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="size-8 rounded-full bg-navy border-2 border-white" />
                ))}
              </div>
              <div>
                <div className="text-navy font-semibold text-sm">2,400+ homes</div>
                <div className="text-navy/60 text-xs">transformed nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROCESS ----------------------------- */

const STEPS = [
  { n: "01", icon: Ruler, title: "Technical Survey", body: "Laser-accurate measurements and a design consultation at your home." },
  { n: "02", icon: Hammer, title: "Bespoke Fabrication", body: "Your frames are crafted in our UK facility to your exact specification." },
  { n: "03", icon: Truck, title: "White-Glove Install", body: "Clean, respectful and precise installation by FENSA-certified fitters." },
  { n: "04", icon: BadgeCheck, title: "10-Year Aftercare", body: "Enjoy peace of mind with our industry-leading comprehensive warranty." },
];

function Process() {
  return (
    <section className="pt-8 md:pt-10 pb-14 md:pb-20">
      <div className="container-page">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">The process</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">
            Four steps, one flawless finish.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ n, icon: Icon, title, body }, i) => (
            <div
              key={n}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 100}ms` }}
              className="relative p-8 rounded-3xl bg-white border border-navy/5 hover:border-brand-blue/40 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-3xl font-display font-semibold text-brand-blue">{n}</span>
                <Icon className="size-6 text-navy/40" />
              </div>
              <h3 className="text-xl font-display font-semibold text-navy mb-2">{title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- BEFORE / AFTER ------------------------- */

function BeforeAfter() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-page grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-3">Recent projects</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-navy leading-[1.05] mb-3">
            See the difference precision makes.
          </h2>
          <p className="text-navy/60 leading-relaxed mb-5 max-w-lg">
            From dated conservatories to award-winning glass extensions — every project tells a story of transformation.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors"
            >
              View the full gallery <ArrowRight className="size-4" />
            </Link>
            <span className="text-sm text-navy/40 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-brass" />
              Drag to compare
            </span>
          </div>
        </div>
        <BeforeAfterSlider
          before={consVictorian}
          after={consTiled}
          beforeLabel="Before"
          afterLabel="After"
          className="mx-auto w-full max-w-xl"
        />
      </div>
    </section>
  );
}

/* --------------------------- TESTIMONIALS --------------------------- */

const REVIEWS = [
  {
    name: "Sarah W.",
    location: "Surrey",
    body: "From consultation to installation, the whole experience felt effortless. Our new bi-folds have completely transformed the back of the house.",
  },
  {
    name: "James H.",
    location: "Kent",
    body: "Precise, respectful and impeccably tidy. The team's attention to detail is on another level — you can feel the difference immediately.",
  },
  {
    name: "Priya K.",
    location: "North London",
    body: "Our heating bill dropped by over a third in the first year. The A++ windows have paid for themselves faster than I imagined.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function Testimonials() {
  return (
    <section className="py-14 md:py-16">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8">
          <div>
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] max-w-xl">
              Rated 4.9 by British homeowners.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-navy/60 text-sm">
            <div className="flex gap-0.5 text-brand-blue">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-navy">4.9 / 5</span>
            <span>from 1,200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 120}ms` }}
              className="p-8 rounded-3xl bg-white border border-navy/5 card-lift"
            >
              <div className="flex gap-0.5 text-brand-blue mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-navy/80 leading-relaxed mb-6">"{r.body}"</blockquote>
              <figcaption className="flex items-center gap-3 text-sm">
                <div className="size-11 rounded-full grid place-items-center text-white font-semibold text-xs shrink-0 bg-gradient-to-br from-brand-blue to-brand-blue-2 ring-2 ring-brass/30 ring-offset-2 ring-offset-white">
                  {initials(r.name)}
                </div>
                <div>
                  <div className="font-semibold text-navy">{r.name}</div>
                  <div className="text-navy/50">{r.location}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ JOURNAL ----------------------------- */

const POSTS = [
  { title: "Choosing the right glazing for a period property", tag: "Guides", read: "6 min", img: windowsSash },
  { title: "How A++ windows lower your energy bills in 2026", tag: "Efficiency", read: "4 min", img: windowsDetail },
  { title: "Bi-folds vs sliding doors: a designer's take", tag: "Design", read: "8 min", img: doorsBifold },
];

function Journal() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8">
          <div>
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Journal</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05]">
              Insights from the workshop.
            </h2>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-navy hover:text-brand-blue inline-flex items-center gap-2">
            All articles <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {POSTS.map((p, i) => (
            <Link
              key={p.title}
              to="/blog"
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 120}ms` }}
              className="group rounded-3xl overflow-hidden bg-soft-gray hover:bg-navy hover:text-white hover:-translate-y-1 hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-[4/3] bg-navy/5 relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/0 to-navy/0" />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-[0.2em] uppercase bg-white/90 text-navy px-3 py-1.5 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 leading-tight">{p.title}</h3>
                <div className="text-xs uppercase tracking-widest opacity-60">{p.read} read</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
