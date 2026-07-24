import { Shield, ScrollText, UserCheck } from "lucide-react";

const guarantees = [
  {
    icon: UserCheck,
    title: "A human in control",
    description:
      "Assistants draft, retrieve, and suggest. Your people decide, approve, and sign off. Nothing crosses the Judgment Line on its own.",
  },
  {
    icon: ScrollText,
    title: "A full audit trail",
    description:
      "Assistant activity is logged and traceable, with approval records on governed workflows. Available when it matters.",
  },
  {
    icon: Shield,
    title: "Built for your risk",
    description:
      "Access controls, guardrails, and compliance-aware design, so AI you deploy is AI you can stand behind.",
  },
];

const Forge = () => {
  return (
    <section id="forge" className="scroll-mt-16 border-y border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 max-w-2xl animate-on-scroll">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            The tool
          </p>
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Forge
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            <a
              href="https://forge.gradtensor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
            >
              Forge
            </a>{" "}
            is how we deliver. It is our platform for governed AI - AI Copilots,
            Trackers, Experts, and Automations for business operations. Any
            mid-size business can use Forge; for the physical economy, we deploy
            and govern it for you, end to end, on your real work.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {guarantees.map((g, i) => (
            <div
              key={g.title}
              className="animate-on-scroll rounded-lg border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                <g.icon size={22} className="text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
                {g.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forge;
