import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { QuoteWizard } from "./QuoteWizard";
import heroVideo from "@/assets/hero-video.mp4";
import craftsman from "@/assets/craftsman.jpg";

/**
 * Footer layout: navigation and contact details occupy the left column, the
 * quote form sits in its own contrasting panel on the right. Following current
 * footer practice — three link columns with bold headers and subdued links,
 * the form given real contrast and whitespace so it reads as the primary
 * action rather than another list.
 *
 * A looping video sits behind everything with a heavy navy scrim — strong
 * enough that every line of nav/contact text stays fully readable, while
 * still leaving the motion/imagery visibly present at the edges.
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={craftsman}
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy/90" />

      <div className="container-page relative pt-14 pb-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
          {/* ── Left: brand, navigation, contact ─────────────────────── */}
          <div className="lg:col-span-7">
            <Link to="/" className="inline-block text-2xl font-display font-semibold text-white">
              Affordable<span className="text-brand-blue-2">Glazings</span>
            </Link>
            <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm">
              Bespoke windows, doors, rooflights and conservatories — fabricated in-house and
              installed by our own craftsmen since 1994.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8">
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
                  { to: "/about", label: "Our story" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/testimonials", label: "Testimonials" },
                ]}
              />
              <FooterCol
                title="Support"
                links={[
                  { to: "/faq", label: "FAQs" },
                  { to: "/repairs", label: "Repairs" },
                  { to: "/commercial", label: "Commercial" },
                  { to: "/about", label: "Contact us", hash: "contact" },
                ]}
              />
            </div>

            {/* Contact block — the details people actually came looking for,
                given more prominence than a link list. */}
            <div className="mt-10 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6">
              <ContactItem icon={Phone} label="Call us" href="tel:08001234567" value="0800 123 4567" hint="Mon–Sat, 8am–6pm" />
              <ContactItem icon={Mail} label="Email" href="mailto:hello@affordableglazings.co.uk" value="hello@affordableglazings.co.uk" hint="Reply within 24 hours" breakAll />
              <ContactItem icon={MapPin} label="Visit" value="Mayfair Industrial Estate, London" hint="Showrooms nationwide" />
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Linkedin, name: "LinkedIn" },
                { Icon: Instagram, name: "Instagram" },
                { Icon: Facebook, name: "Facebook" },
              ].map(({ Icon, name }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="size-10 grid place-items-center rounded-full bg-navy text-[#FCFCFC] hover:bg-cta transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: quote form ────────────────────────────────────────
              id="quote" is load-bearing — the header CTA and every in-page
              "get a quote" link scrolls to it. */}
          <div id="quote" className="lg:col-span-5 scroll-mt-24">
            <QuoteWizard compact />
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Affordable Glazings Ltd · Registered in England &amp; Wales ·
            FENSA registered
          </p>
          <div className="flex flex-wrap gap-6 text-[11px] font-semibold uppercase tracking-widest text-white/50">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  hint,
  href,
  breakAll = false,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  hint: string;
  href?: string;
  breakAll?: boolean;
}) {
  const body = (
    <>
      <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
        <Icon className="size-3.5 text-brass-2" />
        {label}
      </span>
      <span className={`block mt-1.5 text-sm font-semibold text-white ${breakAll ? "break-all" : ""}`}>
        {value}
      </span>
      <span className="block text-xs text-white/50 mt-0.5">{hint}</span>
    </>
  );

 return href ? (
    <a href={href} className="group block hover:text-cta transition-colors">
      {body}
    </a>
  ) : (
    <div>{body}</div>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string; hash?: string }[] }) {
  return (
    <div>
      <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white mb-4">{title}</h5>
      <ul className="space-y-2.5 text-sm text-[#C6CAD8]">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} hash={l.hash} className="hover:text-cta transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
