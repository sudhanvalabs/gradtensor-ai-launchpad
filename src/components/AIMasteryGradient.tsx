import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Wrench,
  Bot,
  Network,
  School,
  GraduationCap,
  Building2,
  Briefcase,
} from "lucide-react";

type Tone = "corporate" | "primary";
type AudienceKey = "schools" | "collegesAndInstitutes" | "corporates" | "workingPros";

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
  level: string;
  icon: typeof BookOpen;
  title: string;
  description: string;
  tone: Tone;
  subLabel?: string;
  audiences: AudienceKey[];
};

const levels: Level[] = [
  {
    level: "Level 1",
    icon: BookOpen,
    title: "AI Consumer",
    description:
      "Mental models, jargon, becoming AI-native. Daily use without building.",
    tone: "corporate",
    subLabel: "Corporate AI Foundations & Literacy",
    audiences: ["corporates"],
  },
  {
    level: "Level 2",
    icon: Wrench,
    title: "AI Builder",
    description:
      "Cross the line from consumer to creator. Build and deploy real AI-powered applications using live APIs.",
    tone: "primary",
    subLabel: "Teen AI Builders · AI Builder Intensive · Function-Specific Training",
    audiences: ["schools", "collegesAndInstitutes", "corporates"],
  },
  {
    level: "Level 3",
    icon: Bot,
    title: "AI Agent Builder",
    description:
      "Single-purpose agents that do real work. Tool use, RAG, retrieval pipelines.",
    tone: "primary",
    subLabel: "AI Agentic Engineering Bootcamp (Months 1-4)",
    audiences: ["collegesAndInstitutes", "corporates", "workingPros"],
  },
  {
    level: "Level 4",
    icon: Network,
    title: "AI Orchestrator",
    description:
      "Systems where multiple agents coordinate and deliver outcomes.",
    tone: "primary",
    subLabel: "AI Agentic Engineering Bootcamp (Capstone)",
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
  iconWrap: {
    corporate:
      "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110",
    primary:
      "border-primary/30 bg-primary/10 text-primary group-hover:scale-110",
  },
  subLabel: {
    corporate: "text-amber-700 dark:text-amber-400",
    primary: "text-primary/80",
  },
} as const;

interface AIMasteryGradientProps {
  showCoursesCta?: boolean;
}

const AIMasteryGradient = ({ showCoursesCta = true }: AIMasteryGradientProps) => {
  return (
    <section id="gradient" className="scroll-mt-20 border-y border-border/50 py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-16 animate-on-scroll">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            // The AI Mastery Gradient
          </p>
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Four levels.{" "}
            <span className="gradient-text">One direction.</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Find where you are today. Take the next step.
          </p>
        </div>

        {/* Level cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((lvl, i) => {
            const Icon = lvl.icon;
            return (
              <div
                key={lvl.title}
                className={`animate-on-scroll group relative flex flex-col rounded-xl border p-6 transition-all duration-300 ${toneClasses.card[lvl.tone]}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Top: level pill + icon */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    {lvl.level}
                  </span>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 ${toneClasses.iconWrap[lvl.tone]}`}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                {/* Title + description */}
                <h3 className="mb-2 font-display text-xl font-bold tracking-tight">
                  {lvl.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {lvl.description}
                </p>

                {/* Sub-label (course mapping) */}
                {lvl.subLabel && (
                  <p
                    className={`mb-5 font-mono text-[11px] leading-relaxed ${toneClasses.subLabel[lvl.tone]}`}
                  >
                    {lvl.subLabel}
                  </p>
                )}

                {/* Audience chips */}
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
                          <AudIcon size={11} className="text-primary/70" />
                          {aud.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated bootcamp callout */}
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

        {/* CTA */}
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
