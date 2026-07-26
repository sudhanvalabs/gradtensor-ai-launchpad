const demos = [
  {
    title: "Enquiry to quote",
    product: "AI Copilot",
    description:
      "Turn an inbound enquiry into a priced quote. A Copilot drafts from your price list and specs; your team reviews and sends.",
  },
  {
    title: "Lead tracking without a CRM",
    product: "AI Tracker",
    description:
      "Capture leads from email and WhatsApp into one system of record you can query in plain language.",
  },
  {
    title: "Ask your documents",
    product: "AI Expert",
    description:
      "Put your manuals, SOPs, and policies behind one question box, and get authoritative answers with the source cited.",
  },
  {
    title: "Tender and document review",
    product: "AI Copilot",
    description:
      "Summarise long tenders, contracts, and specs down to the decisions that matter, each point traceable to the source.",
  },
  {
    title: "Threshold monitoring",
    product: "AI Automation",
    description:
      "Watch your logs against your thresholds, flag exceedances, and route them for review while your people govern the exceptions.",
  },
  {
    title: "Recurring reports",
    product: "AI Automation",
    description:
      "Generate the weekly and monthly reports your team assembles by hand, drafted from your records and left for sign-off.",
  },
];

const WorkflowDemos = () => {
  return (
    <section id="demos" className="scroll-mt-16 py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 max-w-2xl animate-on-scroll">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Demos
          </p>
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Workflows we've built
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            A sample of governed workflows we deploy on Forge. Each runs on your
            own data, with a human in control and a full record of what it did.
            These are examples, not the limit - we build for the work in front of
            you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((d, i) => (
            <div
              key={d.title}
              className="animate-on-scroll flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--glow-primary)]"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <span className="mb-4 inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                {d.product}
              </span>
              <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemos;
