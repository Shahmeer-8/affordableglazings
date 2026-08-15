import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="relative pt-10 md:pt-12 pb-10 md:pb-12 bg-canvas border-b border-line overflow-hidden">
      {image && (
        <>
          <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
          {/* Two scrims, because the text does something different at each
              size. On desktop the copy occupies the left column, so a
              left-to-right ramp can hold the photo back where the words are
              and release it where they aren't.

              On mobile the copy runs the full width — under that same ramp
              the end of every line landed on a photo showing at 75%, which
              made the headline, the tagline and both buttons hard to read on
              all thirteen product pages. Below `sm` the ramp runs top-to-
              bottom instead: the photo stays visible along the upper edge
              behind the eyebrow, then closes to near-solid over the title
              and buttons. */}
          <div className="absolute inset-0 sm:hidden bg-gradient-to-b from-canvas/65 from-0% via-canvas/93 via-28% to-canvas/96" />
          <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-canvas from-35% via-canvas/75 via-65% to-canvas/25" />
        </>
      )}
      <div className="container-page relative">
        <p className="eyebrow mb-4 animate-reveal">{eyebrow}</p>
        <h1 className="display-1 text-navy measure-display animate-reveal">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-ink-muted measure-body animate-reveal">
            {description}
          </p>
        )}
        {children && <div className="mt-7 animate-reveal">{children}</div>}
      </div>
    </section>
  );
}
