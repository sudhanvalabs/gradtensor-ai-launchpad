import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, ChevronDown } from "lucide-react";
import { getCourseBySlug } from "@/data/courses";
import type { Course } from "@/data/courses";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PreRegisterDialog from "@/components/PreRegisterDialog";
import RegisterDialog from "@/components/RegisterDialog";

const landingPages: Record<string, string> = {
  "teen-ai-builders": "/teen-ai-builders",
  "ai-engineering-agentic-foundations": "/ai-engineering",
};

const tabs = [
  {
    value: "start-here",
    trigger: "Start Here",
    name: "New to AI? Start Here.",
    label:
      "AI Explorer is for anyone who wants to understand AI and use it confidently - regardless of background, role, or age. No prior knowledge needed. Complete this first, then choose the track that fits your goals.",
    color: "#60a5fa",
    slugs: [
      { slug: "ai-explorer", context: "For anyone - no prior knowledge needed" },
    ],
    footerNote: "Leads naturally into any of the five tracks.",
  },
  {
    value: "school",
    trigger: "School Students",
    name: "School Students (Age 13-18)",
    label: "For school students aged 13-18",
    color: "#2dd4bf",
    slugs: [
      { slug: "teen-ai-builders", context: "For beginners with no coding experience" },
      { slug: "ai-builder-pro", context: "For students who have completed Teen AI Builders" },
    ],
    progressionNote:
      "Complete Teen AI Builders first, then continue into AI Builder Pro.",
  },
  {
    value: "college",
    trigger: "College Students",
    name: "College Students",
    label: "For college students preparing for placements and AI careers",
    color: "#818cf8",
    slugs: [
      { slug: "ai-ready-engineer", context: "For engineering and CS students" },
      { slug: "the-human-edge", context: "For final-year students in any stream entering a shifting job market" },
    ],
  },
  {
    value: "tech",
    trigger: "Engineers & Developers",
    name: "Engineers & Developers",
    label:
      "For working engineers and developers with 1+ years of coding experience",
    color: "#a78bfa",
    slugs: [
      { slug: "ai-engineering-agentic-foundations", context: "For engineers with 1+ years of coding experience" },
      { slug: "multi-agent-systems", context: "For engineers who have completed AI Engineering and Agentic Foundations" },
    ],
    progressionNote:
      "AI Engineering and Agentic Foundations is the prerequisite for Multi-Agent Systems.",
  },
  {
    value: "non-tech",
    trigger: "Working Professionals",
    name: "Working Professionals",
    label:
      "Stop fearing AI. Start getting ahead with it. Pick your profession and level — no coding, no new tools, just Claude or ChatGPT.",
    color: "#34d399",
    slugs: [
      { section: "Start Here" },
      { slug: "ai-explorer-professionals", context: "Entry point — for any working professional" },
      { section: "Level 1: AI Prompts — Pick your profession" },
      { slug: "ai-prompts-ca" },
      { slug: "ai-prompts-finance" },
      { slug: "ai-prompts-hr" },
      { slug: "ai-prompts-marketing" },
      { slug: "ai-prompts-sales" },
      { slug: "ai-prompts-legal" },
      { section: "Level 2: AI Workflows — Pick your profession" },
      { slug: "ai-workflows-ca" },
      { slug: "ai-workflows-finance" },
      { slug: "ai-workflows-hr" },
      { slug: "ai-workflows-marketing" },
      { slug: "ai-workflows-sales" },
      { slug: "ai-workflows-legal" },
    ],
    progressionNote:
      "AI Explorer for Professionals → Level 1: AI Prompts → Level 2: AI Workflows. Most professionals who attend AI Explorer enroll in Level 1 before the final session ends.",
  },
  {
    value: "corporate",
    trigger: "Corporate Teams",
    name: "Corporate Teams",
    label: "For companies training their customer-facing and functional teams",
    color: "#f59e0b",
    slugs: [
      { slug: "ai-prompts-customer-support", context: "For customer support, sales, and service teams" },
    ],
    corporateNote: true,
  },
];

const LearningJourney = () => {
  const [preRegDialogOpen, setPreRegDialogOpen] = useState(false);
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  const openPreRegister = (slug: string) => {
    setSelectedCourse(slug);
    setPreRegDialogOpen(true);
  };

  const openRegister = (slug: string) => {
    setSelectedCourse(slug);
    setRegisterDialogOpen(true);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <div className="mb-12 text-center animate-on-scroll">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Find Your <span className="gradient-text">Track</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Every GradTensor course is built for a specific audience. Pick your
            segment and start where you are.
          </p>
        </div>

        {/* Tabbed segments */}
        <Tabs defaultValue="start-here" className="animate-on-scroll">
          <TabsList className="mx-auto mb-10 flex h-auto w-full max-w-4xl flex-wrap justify-center gap-1 bg-transparent p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-full border border-border bg-card/50 px-4 py-2 font-display text-xs font-semibold tracking-wide transition-all data-[state=active]:border-primary/50 data-[state=active]:bg-primary/10 data-[state=active]:text-primary sm:text-sm"
              >
                {tab.trigger}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => {
            type TabEntry =
              | { type: "course"; course: Course; context?: string }
              | { type: "section"; title: string };

            const entries: TabEntry[] = tab.slugs
              .map((s): TabEntry | null => {
                if ("section" in s) {
                  return { type: "section", title: s.section };
                }
                const slug = typeof s === "string" ? s : s.slug;
                const context = typeof s === "string" ? undefined : s.context;
                const course = getCourseBySlug(slug);
                return course ? { type: "course", course, context } : null;
              })
              .filter((e): e is TabEntry => e !== null);

            return (
              <TabsContent key={tab.value} value={tab.value}>
                <div
                  className="rounded-xl border border-border bg-card/30 p-6 md:p-8"
                  style={{
                    borderLeftWidth: "4px",
                    borderLeftColor: tab.color,
                  }}
                >
                  {/* Tab header */}
                  <h2 className="mb-2 font-display text-2xl font-bold tracking-tight">
                    {tab.name}
                  </h2>
                  <p className="mb-8 max-w-2xl text-base text-muted-foreground">
                    {tab.label}
                  </p>

                  {/* Course cards */}
                  <div className="mx-auto max-w-2xl space-y-4">
                    {entries.map((entry, i) =>
                      entry.type === "section" ? (
                        <h3
                          key={entry.title}
                          className="pt-6 pb-1 font-display text-sm font-bold tracking-[0.1em] uppercase text-primary first:pt-0"
                        >
                          {entry.title}
                        </h3>
                      ) : (
                        <div key={entry.course.slug}>
                          {entry.context && (
                            <p className="mb-2 font-display text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">
                              {entry.context}
                            </p>
                          )}
                          <CourseCard
                            course={entry.course}
                            index={i}
                            onPreRegister={openPreRegister}
                            onRegister={openRegister}
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* Progression note */}
                  {(tab as { progressionNote?: string }).progressionNote && (
                    <div className="mx-auto mt-6 max-w-2xl flex items-start gap-2 rounded-lg border border-dashed border-border bg-muted/30 px-4 py-3">
                      <ChevronDown
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <p className="text-sm text-muted-foreground">
                        {(tab as { progressionNote?: string }).progressionNote}
                      </p>
                    </div>
                  )}

                  {/* Footer note (Start Here tab) */}
                  {(tab as { footerNote?: string }).footerNote && (
                    <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground/70 italic">
                      {(tab as { footerNote?: string }).footerNote}
                    </p>
                  )}

                  {/* Corporate segment extras */}
                  {(tab as { corporateNote?: boolean }).corporateNote && (
                    <div className="mx-auto mt-6 max-w-2xl space-y-3">
                      <p className="text-sm text-muted-foreground">
                        We also build industry-specific versions for Finance,
                        Marketing, HR, and Consulting teams.{" "}
                        <a
                          href="mailto:partnerships@gradtensor.com"
                          className="text-primary underline underline-offset-2 hover:text-primary/80"
                        >
                          Contact us
                        </a>{" "}
                        to discuss a custom batch for your organisation.
                      </p>
                      <p className="text-sm italic text-muted-foreground/70">
                        More industry-specific courses coming soon.
                      </p>
                    </div>
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Pricing note */}
        <p className="mt-10 text-center text-sm text-muted-foreground/70">
          All prices are in Indian Rupees and applicable for students and
          professionals based in India. International students -{" "}
          <a
            href="mailto:courses@gradtensor.com"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            please contact us
          </a>{" "}
          for pricing in your region.
        </p>
      </div>

      <PreRegisterDialog
        open={preRegDialogOpen}
        onOpenChange={setPreRegDialogOpen}
        defaultCourse={selectedCourse}
      />

      <RegisterDialog
        open={registerDialogOpen}
        onOpenChange={setRegisterDialogOpen}
        courseTitle={getCourseBySlug(selectedCourse)?.title || ""}
      />
    </section>
  );
};

interface CourseCardProps {
  course: Course;
  index: number;
  onPreRegister: (slug: string) => void;
  onRegister: (slug: string) => void;
}

const CourseCard = ({
  course,
  index,
  onPreRegister,
  onRegister,
}: CourseCardProps) => {
  const isLive = course.status === "live";
  const isTBD = course.duration === "TBD";

  return (
    <div
      className="flex flex-col rounded-xl border border-border bg-card/50 p-5 transition-all hover:border-primary/20 hover:bg-card animate-fade-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Course name */}
      <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
        {course.title}
      </h3>

      {/* Tagline */}
      <p className="mb-3 text-sm text-muted-foreground flex-1">
        {course.tagline}
      </p>

      {/* Duration + Hours */}
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        {isTBD ? (
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-primary" />
            Duration TBD
          </span>
        ) : (
          <>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen size={14} className="text-primary" />
              {course.hours}
            </span>
          </>
        )}
      </div>

      {/* Price */}
      {course.price && (
        <p className="mb-3 font-display text-lg font-bold tracking-tight text-foreground">
          {course.price}
        </p>
      )}

      {/* CTA */}
      <div className="mt-auto pt-3 border-t border-border/50">
        {isLive ? (
          <Link
            to={landingPages[course.slug] || `/courses/${course.slug}`}
            className="btn-shimmer group/btn flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
          >
            View & Enroll
            <ArrowRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        ) : (
          <button
            onClick={() => onPreRegister(course.slug)}
            className="group/btn flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 font-display text-sm font-semibold tracking-wider text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            Register Interest
            <ArrowRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default LearningJourney;
