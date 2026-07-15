import { Factory, HardHat, Truck, Wrench } from "lucide-react";

const segments = [
  {
    icon: Factory,
    label: "Makers",
    title: "Manufacturing",
    description:
      "Owner-led and family-run plants making components, machinery, and finished goods.",
  },
  {
    icon: HardHat,
    label: "Builders",
    title: "Construction",
    description:
      "Contractors and project firms managing tenders, drawings, and site paperwork.",
  },
  {
    icon: Truck,
    label: "Movers",
    title: "Distribution",
    description:
      "Distributors and logistics operators running on quotes, orders, and dispatch documents.",
  },
  {
    icon: Wrench,
    label: "Keepers",
    title: "Industrial services",
    description:
      "Maintenance, inspection, and service businesses that keep physical assets running.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 max-w-2xl animate-on-scroll">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Who we serve
          </p>
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            The physical economy
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            We bring governed AI to the businesses that make, build, move, and
            maintain physical things - manufacturing, construction, distribution,
            and industrial services. Manufacturing first. These are operations
            other AI vendors overlook while they chase software and services. We
            walk in with credible AI expertise these businesses rarely get to see.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--glow-primary)]"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary transition-all duration-300 group-hover:border-primary/30">
                <s.icon size={22} className="text-primary" />
              </div>
              <p className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                {s.label}
              </p>
              <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
