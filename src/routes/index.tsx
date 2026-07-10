import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Clock,
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
import { CtaBanner } from "@/components/site/CtaBanner";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";

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
      <WhyUs />
      <Performance />
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
    <section className="relative min-h-[94vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroHome}
          aria-hidden="true"
        >
          <source
            src="https://videos.pexels.com/video-files/7578540/7578540-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
      </div>

      <div className="container-page relative z-10 w-full py-16">
        <div className="max-w-3xl space-y-8 text-white">
          <div
            data-reveal="fade"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white text-[11px] font-semibold tracking-[0.18em] uppercase"
          >
            <span className="size-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Premium British Engineering · Since 1994
          </div>

          <h1
            data-reveal="up"
            style={{ ["--reveal-delay" as never]: "80ms" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[0.95] tracking-tight text-balance"
          >
            Redefining the <br />
            <span className="text-gradient-brand">view of home.</span>
          </h1>

          <p
            data-reveal="up"
            style={{ ["--reveal-delay" as never]: "180ms" }}
            className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed"
          >
            Bespoke windows, doors and conservatories — engineered for energy efficiency,
            security and timeless British elegance.
          </p>

          <div
            data-reveal="up"
            style={{ ["--reveal-delay" as never]: "260ms" }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <Link
              to="/quote"
              className="group btn-shine inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-blue-2 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-[0_10px_40px_-10px_var(--brand-blue)] hover:shadow-[0_20px_60px_-10px_var(--brand-blue)] transition-all hover:-translate-y-0.5"
            >
              Get Free Quote
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 glass-dark text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/15 transition-colors"
            >
              View Our Work
            </Link>
          </div>

          <div
            data-reveal="up"
            style={{ ["--reveal-delay" as never]: "360ms" }}
            className="pt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm"
          >
            {[
              { k: "10 Year", v: "Guarantee" },
              { k: "A++", v: "Energy Rated" },
              { k: "FENSA", v: "Registered" },
              { k: "4.9/5", v: "Google Reviews" },
            ].map((s) => (
              <div key={s.k} className="flex items-center gap-3">
                <BadgeCheck className="size-5 text-brand-blue-2" />
                <div>
                  <div className="font-semibold">{s.k}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">{s.v}</div>
                </div>
              </div>
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
    body: "A++ rated with ultra-slim sightlines and precision engineering.",
  },
  {
    to: "/doors",
    title: "Bi-Fold Systems",
    tag: "Grand Entrances",
    img: productDoors,
    body: "Seamless indoor-outdoor living, secured to PAS 24 standards.",
  },
  {
    to: "/conservatories",
    title: "Sun Rooms",
    tag: "Living Spaces",
    img: productConservatories,
    body: "Advanced thermal glass for year-round comfort and light.",
  },
];

function Services() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Our Specialisms</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-navy leading-[1.03] text-balance">
              Architectural solutions for every modern space.
            </h2>
          </div>
          <p className="text-navy/60 max-w-sm">
            From heritage restoration to ultra-modern extensions — bespoke glazing that transforms daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Link
              key={s.to}
              to={s.to}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 120}ms` }}
              className="group relative overflow-hidden rounded-3xl bg-white p-4 border border-navy/5 card-lift"
            >

              <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-out"
                />
              </div>
              <div className="px-3 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-blue mb-2">{s.tag}</p>
                <h3 className="text-2xl font-display font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-navy/60 text-sm mb-5">{s.body}</p>
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
    <section className="py-24 md:py-32 bg-white">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
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
  const stats: { node: React.ReactNode; label: string }[] = [
    { node: <AnimatedCounter to={0.8} decimals={1} />, label: "U-Value Performance" },
    { node: <><AnimatedCounter to={100} />%</>, label: "Recyclable Aluminium" },
    { node: <><AnimatedCounter to={35} />dB</>, label: "Noise Reduction" },
    { node: "PAS24", label: "Security Certified" },
  ];

  return (
    <section className="py-24 md:py-32 bg-navy text-white overflow-hidden relative">
      <div className="absolute -top-40 -right-40 size-[560px] rounded-full bg-brand-blue/25 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-brand-blue-2/15 blur-3xl" />

      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
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
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl mb-14">
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
    <section className="py-24 md:py-32 bg-white">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.22em] mb-4">Recent projects</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-navy leading-[1.05] mb-6">
            See the difference precision makes.
          </h2>
          <p className="text-navy/60 leading-relaxed mb-8 max-w-lg">
            From dated conservatories to award-winning glass extensions — every project tells a story of transformation, comfort and value.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-colors"
          >
            View the full gallery <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-soft-gray">
            <img src={productWindows} alt="Casement window installation" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden aspect-[3/4] bg-soft-gray mt-8">
            <img src={productConservatories} alt="Conservatory extension" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
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

function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-14">
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
          {REVIEWS.map((r) => (
            <figure key={r.name} className="p-8 rounded-3xl bg-white border border-navy/5 hover:shadow-elegant transition-shadow">
              <div className="flex gap-0.5 text-brand-blue mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-navy/80 leading-relaxed mb-6">"{r.body}"</blockquote>
              <figcaption className="text-sm">
                <div className="font-semibold text-navy">{r.name}</div>
                <div className="text-navy/50">{r.location}</div>
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
  { title: "Choosing the right glazing for a period property", tag: "Guides", read: "6 min" },
  { title: "How A++ windows lower your energy bills in 2026", tag: "Efficiency", read: "4 min" },
  { title: "Bi-folds vs sliding doors: a designer's take", tag: "Design", read: "8 min" },
];

function Journal() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-14">
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
          {POSTS.map((p) => (
            <Link
              key={p.title}
              to="/blog"
              className="group rounded-3xl overflow-hidden bg-soft-gray hover:bg-navy hover:text-white transition-colors"
            >
              <div className="aspect-[4/3] bg-navy/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-navy/40 group-hover:scale-105 transition-transform duration-700" />
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
