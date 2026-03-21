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
    slugs: ["ai-explorer"],
    footerNote: "Leads naturally into any of the five tracks.",
  },
  {
    value: "school",
    trigger: "School Students",
    name: "School Students (Age 13-18)",
    label: "For school students aged 13-18",
    color: "#2dd4bf",
    slugs: ["teen-ai-builders", "ai-builder-pro"],
    progressionNote:
      "Complete Teen AI Builders first, then continue into AI Builder Pro.",
  },
  {
    value: "college",
    trigger: "College Students",
    name: "College Students",
    label: "For college students preparing for placements and AI careers",
    color: "#818cf8",
    slugs: ["ai-ready-engineer"],
  },
  {
    value: "tech",
    trigger: "Tech Professionals",
    name: "Tech Professionals",
    label:
      "For working engineers and developers with 1+ years of coding experience",
    color: "#a78bfa",
    slugs: ["ai-engineering-agentic-foundations", "multi-agent-systems"],
    progressionNote:
      "AI Engineering and Agentic Foundations is the prerequisite for Multi-Agent Systems.",
  },
  {
    value: "non-tech",
    trigger: "Non-Tech Professionals",
    name: "Non-Tech Working Professionals",
    label:
      "For working professionals with no coding background who want to automate their work",
    color: "#34d399",
    slugs: ["beyond-chatgpt"],
  },
  {
    value: "corporate",
    trigger: "Corporate Teams",
    name: "Corporate Teams",
    label: "For companies training their customer-facing and functional teams",
    color: "#f59e0b",
    slugs: ["ai-prompts-customer-support"],
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
            const tabCourses = tab.slugs
              .map((s) => getCourseBySlug(s))
              .filter((c): c is Course => c !== undefined);

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
                    {tabCourses.map((course, i) => (
                      <CourseCard
                        key={course.slug}
                        course={course}
                        index={i}
                        onPreRegister={openPreRegister}
                        onRegister={openRegister}
                      />
                    ))}
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
