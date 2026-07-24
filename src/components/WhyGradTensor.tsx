import { Compass, ShieldCheck, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Compass,
    title: "An under-served sector, taken seriously",
    description:
      "Most AI vendors chase software, finance, and consumer apps. We bring credible, governed AI to the physical economy - the plants, sites, and depots that keep getting overlooked.",
  },
  {
    icon: ShieldCheck,
    title: "Governance is the through-line",
    description:
      "Human control, audit trails, access controls, and compliance-aware design are built in, not bolted on. This is AI a risk-aware operation can actually put to work.",
  },
  {
    icon: Wrench,
    title: "Enterprise-grade engineering",
    description:
      "We come from building and running systems inside large global corporations. We know what production-grade, accountable software looks like, and we hold our AI to that bar.",
  },
];

const WhyGradTensor = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 max-w-2xl animate-on-scroll">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Why GradTensor
          </p>
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Credible AI for businesses that make real things
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            GradTensor exists to put governed AI to work in the physical economy -
            responsibly, and where it genuinely helps. We pair deep engineering
            experience with a clear method for keeping people in control.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-secondary transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[var(--glow-primary)]">
                <r.icon size={24} className="text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
                {r.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGradTensor;
