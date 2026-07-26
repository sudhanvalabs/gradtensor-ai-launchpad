import { Package, ClipboardList, Truck, Settings } from "lucide-react";

const segments = [
  {
    icon: Package,
    label: "Makers",
    title: "You produce",
    description:
      "Teams that make or assemble what they sell - products, goods, components, or the deliverables your business is built on.",
  },
  {
    icon: ClipboardList,
    label: "Builders",
    title: "You deliver projects",
    description:
      "Firms running on tenders, proposals, drawings, and project paperwork, from first quote to final sign-off.",
  },
  {
    icon: Truck,
    label: "Movers",
    title: "You move things",
    description:
      "Operations that run on quotes, orders, dispatch, and inventory, moving goods, stock, and work through the pipeline.",
  },
  {
    icon: Settings,
    label: "Keepers",
    title: "You keep things running",
    description:
      "Service, maintenance, and support teams that keep assets, systems, and customers running well.",
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
            Businesses that run on operations
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            We work with owner-led and mid-size businesses across industries - the
            ones with real operational complexity and little in-house AI. Whether
            you make products or deliver services, the same four kinds of work show
            up, and governed AI pays off in all of them.
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
