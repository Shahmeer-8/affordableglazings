import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-navy/5 pt-24 pb-12">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
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
              { to: "/products", label: "All Products" },
              { to: "/products", label: "Windows", hash: "windows" },
              { to: "/products", label: "Doors", hash: "doors" },
              { to: "/products", label: "Rooflights", hash: "rooflights" },
              { to: "/products", label: "Conservatories", hash: "conservatories" },
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
            <h5 className="font-bold uppercase text-[10px] tracking-widest text-navy/40 mb-5">Get in touch</h5>
            <ul className="space-y-3 text-sm text-navy/70">
              <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5 text-brand-blue" /> 0800 123 4567</li>
              <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5 text-brand-blue" /> hello@affordableglazings.co.uk</li>
              <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 text-brand-blue" /> Mayfair Industrial Estate, London</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-navy/5 gap-6">
          <p className="text-xs text-navy/50">© {new Date().getFullYear()} Affordable Glazings Ltd. Registered in England & Wales. FENSA Registered.</p>
          <div className="flex flex-wrap gap-6 text-[11px] font-semibold uppercase tracking-widest text-navy/50">
            <Link to="/privacy" className="hover:text-navy">Privacy</Link>
            <Link to="/terms" className="hover:text-navy">Terms</Link>
            <Link to="/cookies" className="hover:text-navy">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string; hash?: string }[] }) {
  return (
    <div>
      <h5 className="font-bold uppercase text-[10px] tracking-widest text-navy/40 mb-5">{title}</h5>
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
