import { Compass, ShieldCheck, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Compass,
    title: "A method, not just tools",
    description:
      "We start with the Judgment Line, deciding where AI belongs and where it must not go, so you get systems that fit your business rather than a pile of demos that never ship.",
  },
  {
    icon: ShieldCheck,
    title: "Governance is the through-line",
    description:
      "Human control, audit trails, access controls, and compliance-aware design are built in, not bolted on. We hold what we build to the same Defensible AI standard as our own product.",
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
            One firm, from the training room to production
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Most firms teach AI, or advise on it, or sell software. We do all
            three, which means the training is taught by the people who build, the
            advice is tested against what actually ships, and the product is one we
            answer for ourselves.
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
