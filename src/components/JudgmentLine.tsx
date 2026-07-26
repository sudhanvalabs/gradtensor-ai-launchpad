import { Check, X } from "lucide-react";

const automate = [
  "Drafting quotes, enquiries, and supplier documents",
  "Reading and summarising tenders, contracts, and specs",
  "First-pass quality paperwork and service reports",
  "Surfacing answers from your manuals, SOPs, and procedures",
  "Monitoring your logs against your thresholds and flagging exceedances for review",
];

const stays = [
  "Final quality sign-off",
  "Contractual and pricing commitments",
  "Safety-critical and compliance decisions",
  "Final verification before anything ships",
];

const JudgmentLine = () => {
  return (
    <section id="judgment-line" className="scroll-mt-16 py-24 md:py-32">
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          {/* Left: the idea */}
          <div className="animate-on-scroll">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              The method
            </p>
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              The Judgment Line
            </h2>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Not everything should be automated. The value of AI in an operating
              business comes from knowing where it belongs, and the risk comes
              from putting it where it does not.
            </p>
            <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Judgment Line is how we draw that boundary with you. On one side,
              the repetitive work AI can take off your team's plate. On the other,
              the judgment, accountability, and sign-off that must stay with your
              people. This is what makes our automation governed, and what makes it
              safe to put in front of a risk-aware operation.
            </p>
            <p className="font-display text-lg italic text-foreground/80">
              Hours back, without handing over control.
            </p>
          </div>

          {/* Right: the two columns */}
          <div className="animate-on-scroll grid gap-6 sm:grid-cols-2" style={{ transitionDelay: "0.1s" }}>
            <div className="rounded-lg border border-primary/30 bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                  <Check size={16} className="text-primary" />
                </span>
                <h3 className="font-display text-base font-bold tracking-tight">
                  AI can carry this
                </h3>
              </div>
              <ul className="space-y-3">
                {automate.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground/10">
                  <X size={16} className="text-foreground/70" />
                </span>
                <h3 className="font-display text-base font-bold tracking-tight">
                  This stays with your people
                </h3>
              </div>
              <ul className="space-y-3">
                {stays.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <X size={15} className="mt-0.5 shrink-0 text-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgmentLine;
