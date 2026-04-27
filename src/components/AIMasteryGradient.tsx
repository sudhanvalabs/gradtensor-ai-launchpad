import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  Code2,
  Network,
  Workflow,
  School,
  GraduationCap,
  Building2,
  Briefcase,
} from "lucide-react";

type Tone = "corporate" | "primary";
type AudienceKey =
  | "schools"
  | "collegesAndInstitutes"
  | "corporates"
  | "workingPros";

const audienceMap: Record<
  AudienceKey,
  { icon: typeof School; label: string }
> = {
  schools: { icon: School, label: "Schools" },
  collegesAndInstitutes: {
    icon: GraduationCap,
    label: "Colleges & Institutes",
  },
  corporates: { icon: Building2, label: "Corporates" },
  workingPros: { icon: Briefcase, label: "Working Professionals" },
};

type Level = {
  level: number;
  icon: typeof BookOpen;
  name: string;
  tagline: string;
  operationalTerm: string;
  description: string;
  tone: Tone;
  audiences: AudienceKey[];
};

const levels: Level[] = [
  {
    level: 1,
    icon: BookOpen,
    name: "AI Foundations",
    tagline: "Become AI-Native",
    operationalTerm: "Conversations with AI",
    description:
      "Using AI tools confidently for everyday questions and tasks.",
    tone: "corporate",
    audiences: ["corporates"],
  },
  {
    level: 2,
    icon: Code2,
    name: "AI Proficiency",
    tagline: "Become Fluent",
    operationalTerm: "Prompts and Prompt Chains",
    description:
      "Crafted prompts and human-sequenced workflows that compress multi-step work.",
    tone: "primary",
    audiences: ["schools", "collegesAndInstitutes", "corporates"],
  },
  {
    level: 3,
    icon: Network,
    name: "AI Agent Builder",
    tagline: "Become a Builder",
    operationalTerm: "AI Agents",
    description:
      "Purpose-built AI with tools and context, deployed to do real work.",
    tone: "primary",
    audiences: ["collegesAndInstitutes", "corporates", "workingPros"],
  },
  {
    level: 4,
    icon: Workflow,
    name: "AI Orchestrator",
    tagline: "Become an Orchestrator",
    operationalTerm: "Multi-Agent Workflows",
    description:
      "Systems where agents coordinate and hand off to deliver outcomes.",
    tone: "primary",
    audiences: ["collegesAndInstitutes", "corporates", "workingPros"],
  },
];

const toneClasses = {
  card: {
    corporate:
      "border-amber-500/40 bg-amber-500/5 hover:border-amber-500/60 hover:shadow-[0_0_20px_rgba(233,168,0,0.18)]",
    primary:
      "border-primary/40 bg-primary/5 hover:border-primary/60 hover:shadow-[var(--glow-primary)]",
  },
  badge: {
    corporate: "bg-amber-500 text-amber-950",
    primary: "bg-primary text-primary-foreground",
  },
  iconWrap: {
    corporate:
      "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    primary: "border-primary/30 bg-primary/10 text-primary",
  },
  tagline: {
    corporate: "text-amber-700 dark:text-amber-400",
    primary: "text-primary",
  },
  opTerm: {
    corporate:
      "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    primary: "border-primary/30 bg-primary/10 text-primary",
  },
} as const;

// Ascending min-heights so the silhouette steps up L1 -> L4
const ascendingHeights = [
  "md:min-h-[400px]",
  "md:min-h-[440px]",
  "md:min-h-[480px]",
  "md:min-h-[520px]",
];

interface AIMasteryGradientProps {
  showCoursesCta?: boolean;
  showChips?: boolean;
  showBootcampCallout?: boolean;
}

const AIMasteryGradient = ({
  showCoursesCta = true,
  showChips = true,
  showBootcampCallout = true,
}: AIMasteryGradientProps) => {
  return (
    <section
      id="gradient"
      aria-labelledby="gradient-heading"
      className="scroll-mt-20 border-y border-border/50 py-24 md:py-32"
    >
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 animate-on-scroll">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            // The GradTensor Gradient
          </p>
          <h2
            id="gradient-heading"
            className="mb-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Our Proprietary 4-Level{" "}
            <span className="gradient-text">AI Mastery Framework</span>
          </h2>
          <p className="mb-2 max-w-2xl text-base text-muted-foreground sm:text-lg">
            From AI Consumer to AI Orchestrator. Find where you are. Take the
            next step.
          </p>
          <p className="font-mono text-xs tracking-wider text-muted-foreground">
            <span className="text-primary">// Levels 1-2:</span> Better
            Consumers
            <span className="mx-3 text-border">|</span>
            <span className="text-primary">// Levels 3-4:</span> Real Creators
            and Orchestrators
          </p>
        </div>

        {/* Level cards: ascending heights, bottom-aligned, with connecting chevrons */}
        <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {levels.map((lvl, i) => {
            const Icon = lvl.icon;
            return (
              <Fragment key={lvl.name}>
                <article
                  aria-label={`Level ${lvl.level}: ${lvl.name}`}
                  className={`animate-on-scroll group relative flex flex-col rounded-xl border p-6 transition-all duration-300 ${toneClasses.card[lvl.tone]} ${ascendingHeights[i]}`}
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Level badge */}
                  <span
                    className={`inline-flex w-fit items-center rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase ${toneClasses.badge[lvl.tone]}`}
                  >
                    Level {lvl.level}
                  </span>

                  {/* Icon */}
                  <div
                    className={`mt-5 flex h-14 w-14 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${toneClasses.iconWrap[lvl.tone]}`}
                    aria-hidden="true"
                  >
                    <Icon size={26} strokeWidth={1.6} />
                  </div>

                  {/* Name */}
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {lvl.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    className={`mt-1 font-display text-sm font-semibold ${toneClasses.tagline[lvl.tone]}`}
                  >
                    {lvl.tagline}
                  </p>

                  {/* Operational term - subtle highlighted pill */}
                  <p
                    className={`mt-4 inline-flex w-fit items-center rounded-md border px-2.5 py-1 font-mono text-[11px] italic ${toneClasses.opTerm[lvl.tone]}`}
                  >
                    {lvl.operationalTerm}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {lvl.description}
                  </p>

                  {/* Audience chips (optional) */}
                  {showChips && (
                    <div className="mt-auto pt-4 border-t border-border/40">
                      <div className="flex flex-wrap gap-1.5">
                        {lvl.audiences.map((key) => {
                          const aud = audienceMap[key];
                          const AudIcon = aud.icon;
                          return (
                            <span
                              key={key}
                              className="inline-flex items-center gap-1 rounded-md border border-border bg-card/60 px-2 py-1 text-[11px] text-muted-foreground"
                            >
                              <AudIcon
                                size={11}
                                className="text-primary/70"
                                aria-hidden="true"
                              />
                              {aud.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </article>

                {/* Connecting chevron - desktop only, hidden on mobile/tablet */}
                {i < levels.length - 1 && (
                  <div
                    className="hidden lg:flex items-center justify-center pb-12"
                    aria-hidden="true"
                  >
                    <ChevronRight
                      size={24}
                      className="text-primary/50"
                      strokeWidth={1.6}
                    />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        {/* Integrated bootcamp callout (optional) */}
        {showBootcampCallout && (
          <div className="mt-10 animate-on-scroll mx-auto max-w-3xl rounded-xl border border-dashed border-border bg-muted/30 px-6 py-5 text-center">
            <p className="font-mono text-[11px] tracking-wider uppercase text-primary mb-1">
              // Integrated Programme
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Levels 2 to 4 are also delivered as a single integrated{" "}
              <strong className="text-foreground">
                AI Agentic Engineering Bootcamp
              </strong>{" "}
              for colleges, institutes and working professionals.
            </p>
          </div>
        )}

        {/* CTA (optional) */}
        {showCoursesCta && (
          <div className="mt-12 animate-on-scroll text-center">
            <Link
              to="/courses"
              className="group inline-flex items-center gap-2 font-display text-base font-semibold text-primary transition-colors hover:text-primary/80"
            >
              See all courses
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIMasteryGradient;
