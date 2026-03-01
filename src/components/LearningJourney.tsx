import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Layers, ChevronDown } from "lucide-react";
import { courses, stageLabels, getCourseBySlug } from "@/data/courses";
import type { Course, CourseStage } from "@/data/courses";
import PreRegisterDialog from "@/components/PreRegisterDialog";
import RegisterDialog from "@/components/RegisterDialog";

const landingPages: Record<string, string> = {
  "teen-ai-builders": "/teen-ai-builders",
  "ai-engineering-agentic-foundations": "/ai-engineering",
};

const stageLabelOverrides: Record<string, { label: string }> = {
  "multi-agent-systems": { label: "Advanced" },
  "build-with-ai-tools": { label: "Build" },
};

const tracks = [
  {
    name: "Student Track",
    description:
      "For school and college students. Build your first AI system, get placement-ready, then continue into the Technical Builder track.",
    color: "#2dd4bf",
    slugs: ["teen-ai-builders", "ai-ready-engineer"],
    continuation:
      "Ready for more? Continue into the Technical Builder track with AI Engineering and Agentic Foundations.",
  },
  {
    name: "Technical Builder Track",
    description:
      "For working engineers and developers with 1+ years of coding experience. Build production AI systems, then ship your own product or move into advisory.",
    color: "#a78bfa",
    slugs: ["ai-engineering-agentic-foundations", "multi-agent-systems"],
    outcomeSlugs: ["ai-product-builder", "ai-transformation-partner"],
  },
  {
    name: "Non-Technical Builder Track",
    description:
      "For professionals and entrepreneurs with no coding background. Understand AI, build with AI tools, then advise organisations or ship your own product.",
    color: "#34d399",
    slugs: ["ai-explorer", "build-with-ai-tools"],
    outcomeSlugs: ["ai-product-builder", "ai-transformation-partner"],
  },
];

function getStageLabel(course: Course): { label: string } | null {
  if (stageLabelOverrides[course.slug]) {
    return stageLabelOverrides[course.slug];
  }
  if (course.stage) {
    return { label: stageLabels[course.stage].label };
  }
  return null;
}

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

  const fullTrackCourse = getCourseBySlug("ai-foundations-job-ready-16-weeks");

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        {/* Hero */}
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Find Your <span className="gradient-text">Path</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Three tracks built for where you are right now. Every track leads to
            the same place — building and shipping real AI products.
          </p>
        </div>

        {/* Tracks */}
        <div className="space-y-16">
          {tracks.map((track, trackIndex) => {
            const trackCourses = track.slugs
              .map((s) => getCourseBySlug(s))
              .filter((c): c is Course => c !== undefined);
            const outcomeCourses = (
              (track as { outcomeSlugs?: string[] }).outcomeSlugs || []
            )
              .map((s) => getCourseBySlug(s))
              .filter((c): c is Course => c !== undefined);

            return (
              <div
                key={track.name}
                className="animate-on-scroll"
                style={{ animationDelay: `${trackIndex * 0.1}s` }}
              >
                <div
                  className="rounded-xl border border-border bg-card/30 p-6 md:p-8"
                  style={{ borderLeftWidth: "4px", borderLeftColor: track.color }}
                >
                  {/* Track header */}
                  <h2 className="mb-2 font-display text-2xl font-bold tracking-tight">
                    {track.name}
                  </h2>
                  <p className="mb-8 max-w-2xl text-base text-muted-foreground">
                    {track.description}
                  </p>

                  {/* Sequential course cards */}
                  <div className="mx-auto max-w-2xl space-y-4">
                    {trackCourses.map((course, i) => (
                      <TrackCourseCard
                        key={course.slug}
                        course={course}
                        index={i}
                        onPreRegister={openPreRegister}
                        onRegister={openRegister}
                      />
                    ))}
                  </div>

                  {/* Student Track continuation note */}
                  {track.continuation && (
                    <div className="mx-auto mt-6 max-w-2xl flex items-start gap-2 rounded-lg border border-dashed border-border bg-muted/30 px-4 py-3">
                      <ChevronDown
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <p className="text-sm text-muted-foreground">
                        {track.continuation}
                      </p>
                    </div>
                  )}

                  {/* Outcome fork */}
                  {outcomeCourses.length > 0 && (
                    <div className="mx-auto mt-8 max-w-2xl">
                      <p className="mb-4 font-display text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                        Choose your outcome
                      </p>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {outcomeCourses.map((course, i) => (
                          <TrackCourseCard
                            key={course.slug}
                            course={course}
                            index={i}
                            onPreRegister={openPreRegister}
                            onRegister={openRegister}
                            isOutcome
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Track section */}
        {fullTrackCourse && (
          <div className="mt-16 animate-on-scroll">
            <p className="mb-6 text-center font-display text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
              The Complete Journey
            </p>
            <FullTrackStageCard
              course={fullTrackCourse}
              onPreRegister={openPreRegister}
            />
          </div>
        )}
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

interface TrackCourseCardProps {
  course: Course;
  index: number;
  onPreRegister: (slug: string) => void;
  onRegister: (slug: string) => void;
  isOutcome?: boolean;
}

const TrackCourseCard = ({
  course,
  index,
  onPreRegister,
  onRegister,
  isOutcome,
}: TrackCourseCardProps) => {
  const stageInfo = getStageLabel(course);
  const isLive = course.status === "live";
  const isTBD = course.duration === "TBD";

  return (
    <div
      className={`flex flex-col rounded-xl border p-5 transition-all hover:border-primary/20 hover:bg-card animate-fade-up ${
        isOutcome
          ? "border-dashed border-border bg-muted/20"
          : "border-border bg-card/50"
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Stage label + status */}
      <div className="mb-3 flex items-center gap-3">
        {stageInfo && (
          <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
            {stageInfo.label}
          </span>
        )}
        <span className="flex-1" />
        <span className={isLive ? "badge-live" : "badge-pre-register"}>
          {isLive ? "LIVE" : "SOON"}
        </span>
      </div>

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
            Duration: TBD
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
            Pre-Register
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

const FullTrackStageCard = ({
  course,
  onPreRegister,
}: {
  course: Course;
  onPreRegister: (slug: string) => void;
}) => {
  const isLive = course.status === "live";
  return (
    <div className="relative mx-auto max-w-2xl flex flex-col rounded-xl border-2 border-primary/40 bg-card p-6 transition-all hover:border-primary/60 card-glow animate-fade-up">
      {/* Featured pill */}
      <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-display text-xs font-bold tracking-widest text-primary-foreground">
        MOST COMPREHENSIVE
      </div>

      {/* Label + status */}
      <div className="mt-2 mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 font-display text-sm font-bold text-primary">
          <Layers size={16} />
        </span>
        <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-primary flex-1">
          Full Track
        </span>
        <span className={isLive ? "badge-live" : "badge-pre-register"}>
          {isLive ? "LIVE" : "SOON"}
        </span>
      </div>

      {/* Course name */}
      <h3 className="mb-3 font-display text-xl font-bold tracking-tight">
        {course.title}
      </h3>

      {/* Tagline */}
      <p className="mb-4 text-base text-muted-foreground flex-1">
        Covers the Student Track and Technical Builder Track in one continuous
        16-week program. For students and career switchers with 6+ months of
        runway.
      </p>

      {/* Duration + Hours */}
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock size={14} className="text-primary" />
          {course.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <BookOpen size={14} className="text-primary" />
          {course.hours}
        </span>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-4 border-t border-border/50">
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
            Pre-Register
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
