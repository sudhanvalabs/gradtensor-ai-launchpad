import { Check, X } from "lucide-react";

/*
  Method and standard, in one section.

  The Judgment Line is GradTensor's method: where AI goes. Defensible AI is the
  standard it has to meet once it is there. They were previously presented as a
  matched pair of "methods", which was wrong: Defensible AI is an engineering
  discipline the product is built to, not an engagement you sell. Kept together
  here because the buyer's question is one question, but labelled differently on
  purpose.

  The three Defensible AI lines are the shipped wording and are load-bearing.
  "Answers can be traced" is not "every answer is traced": a question asked with
  no documents attached has no source to cite, and "every" is the one word a
  technical buyer can falsify.

  Section id stays "judgment-line" because the navbar, footer, and About page
  all link to it.
*/

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

const standard = [
  {
    word: "Reliable",
    line: "Dependable, reproducible answers you can stand behind.",
  },
  {
    word: "Accountable",
    line: "Answers can be traced, evaluated, and explained, so you know who is answerable for them.",
  },
  {
    word: "Confidential",
    line: "Sensitive information stays within the boundaries it is permitted to exist in.",
  },
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
              people. We draw it before anything gets built, and we redraw it as
              your business changes.
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

        {/* The standard. Deliberately quieter than the method above it: the
            Judgment Line is what a buyer engages us for, Defensible AI is why
            the result holds up afterwards. */}
        <div className="mt-20 border-t border-border/60 pt-14 md:mt-24 md:pt-16">
          <div className="mb-10 max-w-2xl animate-on-scroll">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              The standard
            </p>
            <h3 className="mb-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Defensible AI
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              The bar we build our own product to, and the one we hold your systems
              to. Three properties, in this order, because an answer has to be worth
              having before it is worth defending.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {standard.map((s, i) => (
              <div
                key={s.word}
                className="animate-on-scroll border-l-2 border-primary/40 pl-5"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <h4 className="mb-2 font-display text-lg font-bold tracking-tight">
                  {s.word}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgmentLine;
