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
import consVictorian from "@/assets/cons-victorian.jpg";
import consTiled from "@/assets/cons-tiled.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import sash2 from "@/assets/products/sash-2.jpg";
import bifold1 from "@/assets/products/bifold-1.jpg";
import cons2 from "@/assets/products/cons-2.jpg";
import slimroof1 from "@/assets/products/slimroof-1.jpg";
import french1 from "@/assets/products/french-1.jpg";
import casement1 from "@/assets/products/casement-1.jpg";
import pyramid1 from "@/assets/products/pyramid-1.jpg";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { TrustSeals } from "@/components/site/TrustSeals";
import { SupplierMarquee } from "@/components/site/SupplierMarquee";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { GalleryReel } from "@/components/site/GalleryReel";
import bay1 from "@/assets/products/bay-1.jpg";
import heritage1 from "@/assets/products/heritage-1.jpg";
import flush1 from "@/assets/products/flush-1.jpg";
import stepSurvey from "@/assets/process/survey.jpg";
import stepFabrication from "@/assets/process/fabrication.jpg";
import stepInstall from "@/assets/process/install.jpg";
import stepAftercare from "@/assets/process/aftercare.jpg";

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
      <TrustSeals />
      <Services />
      {/* <WhyUs /> */}
      {/* <Performance /> */}
      <Process />
      <BeforeAfter />
      <SupplierMarquee />
      <Testimonials />
      <Journal />
    </>
  );
}

/* ------------------------------- HERO ------------------------------- */

function Hero() {
  return (
    <section className="relative min-h-[62vh] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-navy/78" />
        {/* Header-safe scrim: guarantees nav legibility regardless of what the video is showing up top */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/70 via-navy/25 to-transparent" />
        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "3px 3px" }} />
        {/* Signature moment: sunlight passing over the glass, once every ~11s */}
        <div className="hero-glint" />
      </div>

      <div className="container-page relative z-10 w-full py-12">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="animate-fade-in eyebrow eyebrow-on-dark">British engineering · Est. 1994</p>

          {/* Sized down from text-8xl; the credentials that used to sit here as
              chips now live in the seals band directly below, so the hero says
              one thing only. */}
          <h1 className="display-1">
            <span className="hero-line">
              {"Redefining the".split(" ").map((w, i) => (
                <span key={w} className="hero-word" style={{ ["--wd" as never]: `${120 + i * 110}ms` }}>
                  {w}&nbsp;
                </span>
              ))}
            </span>
            <span className="hero-line">
              <span className="hero-word" style={{ ["--wd" as never]: "400ms" }}>
                <span className="text-[#2E6BFF]">view of home.</span>
              </span>
            </span>
          </h1>

          <p
            style={{ animationDelay: "560ms" }}
            className="animate-reveal text-base md:text-lg text-[#D6D9E8] measure-body"
          >
            Bespoke windows, doors and conservatories — crafted in Britain.
          </p>

          <div
            style={{ animationDelay: "680ms" }}
            className="animate-reveal flex flex-wrap gap-3 pt-1"
          >
            <a
              href="#quote"
              className="group btn-shine inline-flex items-center gap-2 bg-transparent border border-cta text-cta px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-cta hover:text-white transition-all hover:-translate-y-0.5"
            >
              Get a free quote
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 border border-white text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white hover:text-navy hover:-translate-y-0.5 transition-all"
            >
              View our work
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-white/60 text-[10px] uppercase tracking-[0.3em] animate-float">
        <span>Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  );
}

/* ---------------------------- TRUST STRIP --------------------------- */


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
    <section className="py-12 md:py-14 bg-black">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div className="max-w-lg">
            <p className="eyebrow mb-3 text-[#6F84D8]">Our specialisms</p>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#FCFCFC] leading-[1.08] measure-display">
              Solutions for every modern space.
            </h2>
          </div>
          <p className="text-[#BFC4D8] text-sm max-w-xs">Heritage homes to modern extensions.</p>
        </div>

        {/* Copy sits over the image on hover so the card stays compact —
            same pattern as the product range cards. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <Link
              key={s.to}
              to={s.to}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 100}ms` }}
              className="group relative overflow-hidden rounded-2xl bg-navy shadow-elegant card-lift"
            >
              <div className="glass-glint relative aspect-[5/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={640}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 grid place-items-center p-5">
                  <p className="text-white/90 text-sm text-center leading-relaxed">{s.body}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C5CAD8]">{s.tag}</p>
                  <h3 className="text-base font-display font-semibold text-[#FCFCFC] truncate">{s.title}</h3>
                </div>
                <span className="shrink-0 inline-flex items-center justify-center size-8 rounded-full border border-cta text-cta group-hover:bg-cta group-hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
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
    <section className="py-12 md:py-16 bg-canvas">
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
    <section className="py-12 md:py-14 bg-navy text-white overflow-hidden relative">
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
              className="bg-cta text-white px-8 py-4 rounded-xl font-bold hover:bg-cta-hover transition-colors inline-flex items-center gap-2"
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
  { n: "01", icon: Ruler, title: "Technical Survey", body: "Laser-accurate measurements and a design consultation at your home.", img: stepSurvey },
  { n: "02", icon: Hammer, title: "Bespoke Fabrication", body: "Your frames are crafted in our UK facility to your exact specification.", img: stepFabrication },
  { n: "03", icon: Truck, title: "White-Glove Install", body: "Clean, respectful and precise installation by FENSA-certified fitters.", img: stepInstall },
  { n: "04", icon: BadgeCheck, title: "10-Year Aftercare", body: "Enjoy peace of mind with our industry-leading comprehensive warranty.", img: stepAftercare },
];

function Process() {
  return (
    <section className="py-12 md:py-16 bg-canvas">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow mb-4">The process</p>
          <h2 className="display-2 text-navy measure-display">
            Four steps, one flawless finish.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ n, icon: Icon, title, body, img }, i) => (
            <div
              key={n}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 100}ms` }}
              className="group relative rounded-3xl bg-white border border-navy/5 hover:border-brand-blue/40 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={img}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                  <span className="text-2xl font-display font-semibold text-white drop-shadow">{n}</span>
                  <Icon className="size-5 text-white/80" />
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-white/90 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {body}
                </p>
              </div>
              <div className="p-4 bg-cta">
                <h3 className="text-base font-display font-semibold text-white">{title}</h3>
              </div>
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
    <section className="py-12 md:py-16 bg-navy">
      <div className="container-page grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <p className="text-xs font-bold text-brand-blue-2 uppercase tracking-[0.22em] mb-3">Recent projects</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-[#FCFCFC] leading-[1.05] mb-3">
            See the difference precision makes.
          </h2>
          <p className="text-[#C7CBE0] leading-relaxed mb-5 max-w-lg">
            From dated conservatories to award-winning glass extensions — every project tells a story of transformation.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-transparent border border-cta text-cta px-6 py-3 rounded-full text-sm font-semibold hover:bg-cta hover:text-white transition-colors"
            >
              View the full gallery <ArrowRight className="size-4" />
            </Link>
            <span className="text-sm text-white/40 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-cta" />
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

/* Recent installations shown above the reviews, so the praise is attached to
   visible work rather than floating on its own. */
const REVIEW_PROJECTS = [
  { img: sash2, label: "Heritage sash · Islington" },
  { img: bifold1, label: "Glazed elevation · Cheltenham" },
  { img: cons2, label: "Sun room · Winchester" },
  { img: slimroof1, label: "Slim rooflight · Kent" },
];

function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-black text-white">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10">
          <div>
            <p className="eyebrow mb-4 text-[#6F84D8]">Reviews</p>
            <h2 className="display-2 measure-display text-[#FCFCFC]">
              Rated 4.9 by British homeowners.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[#B9BED3] text-sm">
            <div className="flex gap-0.5 text-cta">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-[#FCFCFC]">4.9 / 5</span>
            <span>from 1,200+ reviews</span>
          </div>
        </div>

        {/* Recent installations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
          {REVIEW_PROJECTS.map((p, i) => (
            <figure
              key={p.label}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 90}ms` }}
              className="glass-glint group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={p.img}
                alt={p.label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-[11px] md:text-xs font-semibold text-white/90">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              data-reveal="up"
              style={{ ["--reveal-delay" as never]: `${i * 120}ms` }}
              className="p-8 bg-navy"
            >
              <div className="flex gap-0.5 text-cta mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-[#D2D6E8] leading-relaxed mb-6 measure-body">"{r.body}"</blockquote>
              <figcaption className="flex items-center gap-3 text-sm pt-5 border-t border-white/10">
                <div>
                  <div className="font-semibold text-[#FCFCFC]">{r.name}</div>
                  <div className="text-[#A9AFBF]">{r.location}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- GALLERY CTA ---------------------------- */

const GALLERY_REEL = [
  { img: french1, label: "French doors · Surrey" },
  { img: casement1, label: "Casement · Oxford" },
  { img: pyramid1, label: "Pyramid lantern · Bath" },
  { img: cons2, label: "Sun room · Winchester" },
  { img: sash2, label: "Sash · Islington" },
  { img: bay1, label: "Bay window · Guildford" },
  { img: heritage1, label: "Heritage sash · Bath" },
  { img: flush1, label: "Flush casement · Chester" },
];

function Journal() {
  return (
    <section className="py-12 md:py-14 bg-canvas overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Our work</p>
            <h2 className="display-2 text-navy measure-display">
              Precision, in real British homes.
            </h2>
          </div>
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 bg-transparent border border-cta text-cta px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-cta hover:text-white transition-colors shrink-0"
          >
            Browse the gallery
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <GalleryReel items={GALLERY_REEL} />
    </section>
  );
}
