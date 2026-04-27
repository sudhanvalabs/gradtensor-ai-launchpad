import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

type Tone = "corporate" | "primary";

const items: { level: string; name: string; tone: Tone }[] = [
  { level: "L1", name: "AI Consumer", tone: "corporate" },
  { level: "L2", name: "AI Builder", tone: "primary" },
  { level: "L3", name: "AI Agent Builder", tone: "primary" },
  { level: "L4", name: "AI Orchestrator", tone: "primary" },
];

const pillClass = {
  corporate:
    "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  primary: "border-primary/40 bg-primary/10 text-primary",
} as const;

interface AIMasteryGradientStripProps {
  subtitle?: string;
}

const AIMasteryGradientStrip = ({
  subtitle = "Every programme below maps to one of these four levels.",
}: AIMasteryGradientStripProps) => {
  return (
    <section className="border-y border-border/50 bg-card/30 py-8 md:py-10">
      <div className="section-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Left: eyebrow */}
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
              // The GradTensor Gradient
            </p>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>

          {/* Middle: pill strip */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            {items.map((item, i) => (
              <div key={item.level} className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase ${pillClass[item.tone]}`}
                >
                  <span className="opacity-70">{item.level}</span>
                  <span className="opacity-30">·</span>
                  <span>{item.name}</span>
                </span>
                {i < items.length - 1 && (
                  <ChevronRight
                    size={14}
                    className="shrink-0 text-muted-foreground/60"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right: link */}
          <Link
            to="/about"
            className="group inline-flex shrink-0 items-center gap-1.5 font-display text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            See the framework
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIMasteryGradientStrip;
