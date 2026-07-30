import badgeGuarantee from "@/assets/logo/15yrs-guarantee-badge.webp";
import badgeReviews from "@/assets/logo/50k-reviews.webp";
import badgeBritain from "@/assets/logo/made-in-britain.webp";
import badgePricePromise from "@/assets/logo/price-match-promise.webp";

const BADGES = [
  { src: badgeGuarantee, alt: "15 Year Guarantee" },
  { src: badgeReviews, alt: "Over 50,000 Great Reviews" },
  { src: badgeBritain, alt: "Made in Britain" },
  { src: badgePricePromise, alt: "Price Promise" },
];

export function TrustBadgeStrip() {
  return (
    <section className="py-8 md:py-10 bg-white border-b border-line">
      <div className="container-page">
        <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {BADGES.map((b) => (
            <li key={b.alt}>
              <img src={b.src} alt={b.alt} loading="lazy" className="h-20 md:h-24 w-auto object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
