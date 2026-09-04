import { Link } from "react-router-dom";
import { GraduationCap, Compass, Boxes, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

/*
  The three pillars. This replaced a four-stage consulting arc (govern people's
  AI, assess, build, govern and improve), which had no room for training and read
  as one engagement rather than as a firm.

  The arc is not lost: it is the three bullets inside the Consulting card, which
  is where it belongs now that it is one pillar of three rather than the whole
  offer.

  The Products card previews Forge the way forgeprivate.com positions it: one
  workspace, three audiences, and the `brings` line is what makes that a position
  rather than a menu. The Forge section below carries the full version.

  Forge is hosted software, not something that runs on a client's own servers,
  and it is not airtight from every third party: retrieval sends text to an
  embedding provider and questions to a model provider. Say what the controls
  are, never that the data never leaves.
*/

type Pillar = {
  step: string;
  icon: LucideIcon;
  kind: string;
  name: string;
  tagline: string;
  body: string;
  points: { label: string; text: string }[];
  outcome: string;
  cta: { label: string; to?: string; href?: string };
};

const pillars: Pillar[] = [
  {
    step: "01",
    icon: GraduationCap,
    kind: "Service",
    name: "AI training",
    tagline: "Teams that can use AI, not just discuss it.",
    body: "Hands-on programmes taught on your own workflows, so people leave able to do the work differently on Monday.",
    points: [
      {
        label: "Corporates",
        text: "Role-based upskilling for teams and leadership, with a usage policy your people can actually follow.",
      },
      {
        label: "Colleges",
        text: "Job-ready AI skills for students and faculty.",
      },
      {
        label: "Industry verticals",
        text: "Programmes shaped to the way your sector actually works.",
      },
    ],
    outcome: "Your people productive. Your data protected.",
    cta: { label: "Plan a programme", to: "/contact" },
  },
  {
    step: "02",
    icon: Compass,
    kind: "Service",
    name: "AI consulting",
    tagline: "From deciding what to automate to running it in production.",
    body: "Digital transformation of your business with AI, in the order that keeps it governed: decide first, then build, then keep it dependable.",
    points: [
      {
        label: "Assess",
        text: "Map your operations and draw the Judgment Line, workflow by workflow, between what AI should run, what it should assist, and what stays with your people.",
      },
      {
        label: "Build",
        text: "Assistants, trackers, and automations that run on your real work, with a human on the decisions that matter.",
      },
      {
        label: "Govern",
        text: "Review what the systems did, tune the thresholds, handle the exceptions, and redraw the line as your business changes.",
      },
    ],
    outcome: "Where AI pays off, and where it stays out.",
    cta: { label: "Start with an assessment", href: siteConfig.calendarUrl },
  },
  {
    step: "03",
    icon: Boxes,
    kind: "Product",
    name: "Forge",
    tagline: "A private workspace for confidential work.",
    body: "Our own product, and where our engagements get built. One workspace, three ways in, and what changes between them is who brings what.",
    points: [
      {
        label: "Companies",
        text: "You bring your documents and data, and work with all of it using frontier AI.",
      },
      {
        label: "Consultants",
        text: "You bring your model, your client brings the data, and the code never leaves you.",
      },
      {
        label: "Training teams",
        text: "You bring the exercise, learners bring real work, and none of it leaves the organisation.",
      },
    ],
    outcome: "Nothing you send trains a model.",
    cta: { label: "Visit forgeprivate.com", href: "https://www.forgeprivate.com" },
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
            Training, consulting, and our own product
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Three ways to work with us. Most engagements use more than one, because
            teaching people to use AI, deciding where it belongs, and building the
            thing that runs there are the same problem at three depths.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.name}
              className={`animate-on-scroll flex flex-col rounded-lg border bg-card p-8 transition-all duration-300 hover:shadow-[var(--glow-primary)] ${
                p.kind === "Product"
                  ? "border-primary/30 hover:border-primary/50"
                  : "border-border hover:border-primary/30"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                  <p.icon size={22} className="text-primary" />
                </div>
                <span className="font-mono text-sm tracking-[0.2em] text-muted-foreground">
                  {p.step}
                </span>
              </div>

              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {p.kind}
              </p>
              <h3 className="mb-1 font-display text-2xl font-bold tracking-tight">
                {p.name}
              </h3>
              <p className="mb-4 font-display text-sm italic text-primary">
                {p.tagline}
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>

              <ul className="mb-6 flex-1 space-y-3 border-t border-border/60 pt-5">
                {p.points.map((pt) => (
                  <li key={pt.label} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">{pt.label}.</span>{" "}
                    {pt.text}
                  </li>
                ))}
              </ul>

              <p className="mb-5 font-mono text-[11px] leading-relaxed tracking-wide text-foreground/80">
                {p.outcome}
              </p>
              {p.cta.to ? (
                <Link
                  to={p.cta.to}
                  className="font-display text-sm font-medium tracking-wide text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/80"
                >
                  {p.cta.label}
                </Link>
              ) : (
                <a
                  href={p.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-sm font-medium tracking-wide text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/80"
                >
                  {p.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
