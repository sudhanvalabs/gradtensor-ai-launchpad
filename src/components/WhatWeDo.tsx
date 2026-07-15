import { Map, GraduationCap, Cog } from "lucide-react";

const offerings = [
  {
    step: "01",
    icon: Map,
    name: "Assess",
    tagline: "The Judgment Line Assessment",
    description:
      "We map your operations and identify exactly where AI belongs, and where it must not go. You get a clear, prioritised picture of the hours you can win back and the work that must stay with your people.",
    outcome: "Where AI pays off, and where it stays out.",
  },
  {
    step: "02",
    icon: GraduationCap,
    name: "Train",
    tagline: "Executive alignment and team training",
    description:
      "We align leadership on what AI can and cannot do in your business, then give your teams hands-on training to use AI safely in real operations - not theory, your actual work.",
    outcome: "Leaders aligned, teams confident and safe.",
  },
  {
    step: "03",
    icon: Cog,
    name: "Implement",
    tagline: "Governed AI assistants, built on Forge",
    description:
      "We build and deploy governed AI assistants for your real work. Office and document workflows - enquiries, quotes, BOMs, tenders, supplier documents, quality paperwork, service reports. And plant-floor needs - predictive-maintenance support, root-cause analysis, and knowledge assistants over machine manuals and maintenance procedures.",
    outcome: "Paperwork cut, downtime reduced, every step governed.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="scroll-mt-16 border-y border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 max-w-2xl animate-on-scroll">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            What we do
          </p>
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Assess, train, implement
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            One engagement arc, from first look to working systems. We start by
            finding where AI belongs, prepare your people to use it well, then
            build and deploy it under your control.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <div
              key={o.name}
              className="animate-on-scroll flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--glow-primary)]"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                  <o.icon size={22} className="text-primary" />
                </div>
                <span className="font-mono text-sm tracking-[0.2em] text-muted-foreground">
                  {o.step}
                </span>
              </div>
              <h3 className="mb-1 font-display text-2xl font-bold tracking-tight">
                {o.name}
              </h3>
              <p className="mb-4 font-display text-sm italic text-primary">
                {o.tagline}
              </p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {o.description}
              </p>
              <p className="border-t border-border/60 pt-4 font-mono text-[11px] leading-relaxed tracking-wide text-foreground/80">
                {o.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
