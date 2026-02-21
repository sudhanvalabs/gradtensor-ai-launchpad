import { Radio, Rocket, Cpu, Target } from "lucide-react";

const differentiators = [
  {
    icon: Radio,
    title: "Live Cohorts, Not Recorded Videos",
    description: "Real-time learning with instructor support, peer collaboration, and accountability that pre-recorded courses can't match.",
  },
  {
    icon: Rocket,
    title: "Build & Deploy Real Projects",
    description: "Portfolio pieces companies actually care about  - deployed AI agents and RAG systems, not toy notebooks.",
  },
  {
    icon: Cpu,
    title: "Modern Stack Focus",
    description: "LLMs, agents, RAG, prompt engineering  - the tools companies are hiring for right now, not outdated sklearn courses.",
  },
  {
    icon: Target,
    title: "Built for Employability",
    description: "Our curriculum is designed around what employers look for in AI roles. Build projects that demonstrate real capability, not just course completion.",
  },
];

const WhyGradTensor = () => {
  return (
    <section className="border-y border-border/50 py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 animate-on-scroll">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Why <span className="gradient-text">GradTensor</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            We built what we wished existed when we were learning AI  - practical, modern, and obsessed with outcomes.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className="animate-on-scroll group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-secondary transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[var(--glow-primary)] group-hover:scale-110">
                <item.icon size={24} className="text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 font-display text-base font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGradTensor;
