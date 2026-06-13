import { Radio, Rocket, Cpu, Target } from "lucide-react";

const differentiators = [
  {
    icon: Radio,
    title: "Live Cohorts, Not Recorded Videos",
    description:
      "AI craftsmanship is learned in the room, not from the screen. Live cohorts with senior engineers who ship AI in production. No pre-recorded videos. No self-paced drift.",
  },
  {
    icon: Rocket,
    title: "Portfolio Pieces, Not Certificates",
    description:
      "Every student leaves with a deployed AI system at a URL they own - something to show at placements, not a certificate of attendance.",
  },
  {
    icon: Cpu,
    title: "Built for the Whole Campus",
    description:
      "Students get placement-ready. Faculty learn to teach with AI. Institutions get one partner for both. Capability that compounds across your campus.",
  },
  {
    icon: Target,
    title: "Placement-Ready, Not Just Aware",
    description:
      "56% higher pay for AI-skilled developers (PwC 2025). 143% growth in AI Engineer job postings (LinkedIn 2026). Students who build with AI pull away from those who only use it.",
  },
];

const WhyGradTensor = () => {
  return (
    <section className="border-y border-border/50 py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 animate-on-scroll">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Why <span className="text-gt-green">Grad</span><span className="text-foreground">Tensor</span>
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
