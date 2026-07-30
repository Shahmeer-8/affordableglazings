const PROCESS = [
  { n: "01", t: "Free consultation", d: "A senior surveyor visits your home, listens to your goals and shares samples, colours and glass options in person." },
  { n: "02", t: "Precision survey", d: "Every aperture is laser-measured. We photograph, template and confirm every reveal so nothing is left to chance." },
  { n: "03", t: "Bespoke manufacture", d: "Your product is built to order in a UK factory to your exact dimensions, colours and hardware specification." },
  { n: "04", t: "White-glove install", d: "Our uniformed installers protect your floors, remove the old frames, fit and seal the new — then leave the site spotless." },
  { n: "05", t: "10-year guarantee", d: "Every installation is backed by our insurance-backed guarantee, plus manufacturer warranties on hardware and sealed units." },
];

export function OurProcess({ image, alt }: { image: string; alt: string }) {
  return (
    <section className="py-12 md:py-14 bg-canvas">
      <div className="container-page grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="rounded-[28px] overflow-hidden aspect-[4/3] shadow-elegant" data-reveal="left">
          <img src={image} alt={alt} className="w-full h-full object-cover" loading="lazy" />
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
  );
}
