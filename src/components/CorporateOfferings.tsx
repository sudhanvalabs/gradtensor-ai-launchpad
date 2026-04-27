import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";

const functions = [
  "Leadership",
  "HR",
  "Finance",
  "Marketing",
  "Sales",
  "Legal",
  "CA Firms",
  "Operations",
  "Customer Support",
  "Procurement",
  "Teachers & Educators",
];

const CorporateOfferings = () => {
  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 animate-on-scroll">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            // For Corporates
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            AI training for the{" "}
            <span className="gradient-text">whole organisation</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            From AI literacy across leadership and teams, to function-specific
            workflows that compress entire processes. Customised to your
            function, your workflows, your documents.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="animate-on-scroll rounded-2xl border border-border bg-card/30 p-8 md:p-10 transition-all hover:border-primary/20 hover:shadow-lg">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Building2 size={22} />
              </div>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-display text-[11px] font-semibold tracking-wider text-amber-600 dark:text-amber-400 uppercase">
                For Enterprises
              </span>
            </div>

            <h3 className="mb-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Corporate AI Training
            </h3>
            <p className="mb-6 font-mono text-xs tracking-wide text-muted-foreground border-l-2 border-amber-500 pl-3 max-w-xl">
              Half-day to 3-Day Workshops · Online or Onsite
            </p>

            {/* Two delivery modes */}
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border-l-[3px] border-l-amber-500 border border-border bg-amber-500/[0.04] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-display text-base font-semibold">
                    AI Foundations &amp; Literacy
                  </span>
                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
                    Level 1
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Half-day awareness sessions for leadership and the broader
                  workforce. Mental models, jargon, what AI can and cannot do,
                  and how to use it confidently every day.
                </p>
              </div>

              <div className="rounded-xl border-l-[3px] border-l-primary border border-border bg-primary/[0.04] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-display text-base font-semibold">
                    Function-Specific AI Training
                  </span>
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase text-primary">
                    Level 2
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Deeper workshops for individual functions. AI prompts that cut
                  drafting time by 50-70% and AI workflows that compress
                  multi-step processes into chained prompt sequences.
                </p>
              </div>
            </div>

            {/* Functions */}
            <p className="mb-3 font-mono text-[11px] tracking-wider uppercase text-primary">
              Functions we train
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {functions.map((fn) => (
                <span
                  key={fn}
                  className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {fn}
                </span>
              ))}
            </div>

            {/* What teams get */}
            <p className="mb-3 font-mono text-[11px] tracking-wider uppercase text-primary">
              What teams walk away with
            </p>
            <ul className="mb-8 space-y-1 text-sm text-muted-foreground">
              <li>→ Ready-to-use prompt templates for the team's most common tasks</li>
              <li>→ Function-specific AI workflows that compress multi-step processes</li>
              <li>→ Confidence to use AI daily - across leadership and teams</li>
              <li>→ Customised to your workflows, your documents, your tone</li>
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/corporate"
                className="btn-shimmer group/btn inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Explore Corporate Training
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </Link>
              <a
                href="https://calendly.com/gradtensor/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-display text-sm font-semibold tracking-wider text-primary border-b border-primary/40 pb-1 hover:text-primary/80"
              >
                Book a call →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateOfferings;
