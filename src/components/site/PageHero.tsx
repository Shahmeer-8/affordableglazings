import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-10 md:pt-12 pb-10 md:pb-12 bg-canvas border-b border-line">
      <div className="container-page">
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
