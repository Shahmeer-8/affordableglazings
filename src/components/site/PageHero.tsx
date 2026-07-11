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
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white to-soft-gray" />
      <div className="absolute -top-32 -right-40 z-0 size-[520px] rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -top-24 -left-40 z-0 size-[420px] rounded-full bg-navy/5 blur-3xl" />
      <div className="container-page relative z-10">
        <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brand-blue mb-5 animate-reveal">
          {eyebrow}
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-semibold text-navy leading-[0.98] text-balance max-w-4xl animate-reveal">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg md:text-xl text-navy/60 max-w-2xl leading-relaxed animate-reveal">
            {description}
          </p>
        )}
        {children && <div className="mt-10 animate-reveal">{children}</div>}
      </div>
    </section>
  );
}
