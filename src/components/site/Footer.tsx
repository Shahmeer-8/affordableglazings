import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { QuoteWizard } from "./QuoteWizard";

export function Footer() {
  return (
    <footer className="border-t border-line">
      {/* Quote band. Carries id="quote" — the header CTA and every in-page
          "Get a quote" link scroll here, so this id is load-bearing. */}
      <section id="quote" className="scroll-mt-20 bg-navy text-white">
        <div className="container-page py-12 md:py-14 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow eyebrow-on-dark mb-4">Free quote</p>
            <h2 className="display-2 measure-display">Start your transformation.</h2>
            <p className="mt-5 text-white/70 leading-relaxed measure-body">
              Tell us about your project and a specialist will come back within 24 hours. No
              obligation, no pressure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a
                href="tel:08001234567"
                className="inline-flex items-center gap-3 text-white font-semibold group"
              >
                <span className="inline-flex items-center justify-center size-11 rounded-full bg-white/10 group-hover:bg-brass group-hover:text-navy transition-colors">
                  <Phone className="size-4" />
                </span>
                0800 123 4567
              </a>
              <span className="text-white/45 text-sm">Mon–Sat, 8am–6pm</span>
            </div>
          </div>

          <QuoteWizard showIntro={false} onDark />
        </div>
      </section>

      <div className="bg-shell">
      <div className="container-page pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 mb-12">
          <div className="col-span-2">
            <div className="text-2xl font-display font-semibold mb-5 text-navy">
              Affordable<span className="text-brand-blue">Glazings</span>
            </div>
            <p className="text-navy/60 max-w-xs leading-relaxed text-sm">
              Excellence in architectural glazing. Transforming British homes with precision, passion and premium materials since 1994.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="size-10 grid place-items-center rounded-full bg-soft-gray text-navy hover:bg-navy hover:text-white transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Products"
            links={[
              { to: "/windows", label: "Windows" },
              { to: "/doors", label: "Doors" },
              { to: "/rooflights", label: "Rooflights" },
              { to: "/conservatories", label: "Conservatories" },
              { to: "/roofline", label: "Roofline" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "Our Story" },
              { to: "/gallery", label: "Case Studies" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/blog", label: "Journal" },
            ]}
          />
          <FooterCol
            title="Support"
            links={[
              { to: "/faq", label: "FAQs" },
              { to: "/repairs", label: "Repairs" },
              { to: "/about", label: "Contact", hash: "contact" },
            ]}
          />

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h5 className="font-bold uppercase text-[10px] tracking-widest text-ink-muted mb-5">Get in touch</h5>
            <ul className="space-y-3 text-sm text-navy/70">
              <li>
                <a href="tel:08001234567" className="flex items-start gap-2 hover:text-brand-blue transition-colors">
                  <Phone className="size-4 mt-0.5 text-brand-blue shrink-0" /> 0800 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:hello@affordableglazings.co.uk" className="flex items-start gap-2 hover:text-brand-blue transition-colors break-all">
                  <Mail className="size-4 mt-0.5 text-brand-blue shrink-0" /> hello@affordableglazings.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-brand-blue shrink-0" /> Mayfair Industrial Estate, London</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-line gap-6">
          <p className="text-xs text-ink-muted">© {new Date().getFullYear()} Affordable Glazings Ltd. Registered in England &amp; Wales. FENSA Registered.</p>
          <div className="flex flex-wrap gap-6 text-[11px] font-semibold uppercase tracking-widest text-ink-muted">
            <Link to="/privacy" className="hover:text-navy">Privacy</Link>
            <Link to="/terms" className="hover:text-navy">Terms</Link>
            <Link to="/cookies" className="hover:text-navy">Cookies</Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string; hash?: string }[] }) {
  return (
    <div>
      <h5 className="font-bold uppercase text-[10px] tracking-widest text-ink-muted mb-5">{title}</h5>
      <ul className="space-y-2.5 text-sm font-medium text-navy/70">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} hash={l.hash} className="hover:text-brand-blue transition-colors">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
