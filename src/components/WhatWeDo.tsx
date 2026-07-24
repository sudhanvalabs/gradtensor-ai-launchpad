import { ShieldCheck, Map, Boxes, RefreshCw, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Service = {
  step: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  body: ReactNode;
  outcome: string;
};

const product = (name: string) => (
  <strong className="font-semibold text-foreground">{name}</strong>
);

const services: Service[] = [
  {
    step: "01",
    icon: ShieldCheck,
    name: "Govern your people's AI",
    tagline: "Governed enablement of individual AI use.",
    body: (
      <>
        Today your people either paste company and client information into public
        chatbots, or avoid AI entirely. We fix both: a clear usage policy,
        hands-on training on your actual work, and {product("AI Copilots")} and{" "}
        {product("AI Experts")} deployed in a private, protected workspace on
        Forge - so your people get tools for doing and tools for knowing, with
        your company and client data staying under your control. How we protect
        it - data handling, retention, and access controls - is documented for
        your IT and compliance review.
      </>
    ),
    outcome: "Your people productive. Your data protected.",
  },
  {
    step: "02",
    icon: Map,
    name: "Decide what to automate",
    tagline: "The Judgment Line Assessment.",
    body: (
      <>
        We map your operations and draw the line, workflow by workflow, between
        what AI should run, what it should assist, and what must stay with your
        people. You get a prioritised picture of the hours you can win back and
        the work that must keep human judgment.
      </>
    ),
    outcome: "Where AI pays off, and where it stays out.",
  },
  {
    step: "03",
    icon: Boxes,
    name: "Build your business systems",
    tagline: "AI Trackers and AI Automations, built on Forge.",
    body: (
      <>
        We build your systems of record - {product("AI Trackers")} for the leads,
        orders, quality checks, and maintenance logs you now run on spreadsheets
        and WhatsApp - and your systems of action - {product("AI Automations")}{" "}
        that run selected workflows end to end, monitoring your logs against your
        thresholds and generating your recurring reports, while your people
        govern the exceptions.
      </>
    ),
    outcome: "Systems of record. Systems of action. Every step governed.",
  },
  {
    step: "04",
    icon: RefreshCw,
    name: "Govern and improve",
    tagline: "Ongoing governance of your AI operations.",
    body: (
      <>
        Once AI sits in your operations, someone must review what it did, tune
        the thresholds, handle the exceptions process, and redraw the Judgment
        Line as your business changes. We do this with you on an ongoing basis,
        so the systems stay dependable as they grow.
      </>
    ),
    outcome: "Dependable this quarter, and the next.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="scroll-mt-16 border-y border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 max-w-2xl animate-on-scroll">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            What we do
          </p>
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Four services, one arc
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Govern your people's AI, decide what to automate, build the systems,
            and keep them governed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="animate-on-scroll flex flex-col rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--glow-primary)]"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                  <s.icon size={22} className="text-primary" />
                </div>
                <span className="font-mono text-sm tracking-[0.2em] text-muted-foreground">
                  {s.step}
                </span>
              </div>
              <h3 className="mb-1 font-display text-2xl font-bold tracking-tight">
                {s.name}
              </h3>
              <p className="mb-4 font-display text-sm italic text-primary">
                {s.tagline}
              </p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <p className="border-t border-border/60 pt-4 font-mono text-[11px] leading-relaxed tracking-wide text-foreground/80">
                {s.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
