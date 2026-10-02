import type { ReactNode } from "react";

export function Section({
  id,
  index,
  label,
  title,
  children,
  className = "",
}: {
  id?: string;
  index: string;
  label: string;
  title?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-reveal border-t border-border ${className}`} data-scroll-reveal>
      <div className="shell grid gap-10 py-24 md:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] md:py-36">
        <div className="section-rail flex items-start gap-4 md:flex-col md:gap-3" data-reveal-item>
          <span className="eyebrow text-gold">{index}</span>
          <span className="eyebrow">{label}</span>
        </div>
        <div className="section-content min-w-0">
          {title ? <h2 className="display-lg max-w-3xl text-foreground">{title}</h2> : null}
          {children}
        </div>
      </div>
    </section>
  );
}

export function PageHeader({
  index,
  label,
  title,
  lead,
}: {
  index: string;
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="scroll-reveal shell pb-16 pt-44 md:pb-24 md:pt-56" data-scroll-reveal>
      <div className="flex items-center gap-4">
        <span className="eyebrow text-gold">{index}</span>
        <span className="rule max-w-24" />
        <span className="eyebrow">{label}</span>
      </div>
      <h1 className="display-xl reveal mt-8 max-w-5xl text-foreground">{title}</h1>
      {lead ? <p className="body-lg mt-8 max-w-2xl">{lead}</p> : null}
    </header>
  );
}
