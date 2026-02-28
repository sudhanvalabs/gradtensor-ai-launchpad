import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Layers } from "lucide-react";
import {
  getJourneyCourses,
  getStagelessCourses,
  stageLabels,
  audienceLabels,
} from "@/data/courses";
import type { Course, Audience } from "@/data/courses";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PreRegisterDialog from "@/components/PreRegisterDialog";
import RegisterDialog from "@/components/RegisterDialog";
import { getCourseBySlug } from "@/data/courses";

const audiences = Object.keys(audienceLabels) as Audience[];

const LearningJourney = () => {
  const journeyCourses = getJourneyCourses();
  const stagelessCourses = getStagelessCourses();
  const [preRegDialogOpen, setPreRegDialogOpen] = useState(false);
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [activeAudience, setActiveAudience] = useState<string>("all");

  const openPreRegister = (slug: string) => {
    setSelectedCourse(slug);
    setPreRegDialogOpen(true);
  };

  const openRegister = (slug: string) => {
    setSelectedCourse(slug);
    setRegisterDialogOpen(true);
  };

  const allCourses = [...journeyCourses, ...stagelessCourses];

  const filteredCourses =
    activeAudience === "all"
      ? allCourses
      : allCourses.filter((c) =>
          c.audience.includes(activeAudience as Audience)
        );

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Your <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Five stages from first curiosity to leading AI adoption. Start
            wherever you are - or take the full track.
          </p>
        </div>

        {/* Audience filter tabs */}
        <div className="mb-10 flex justify-center animate-on-scroll">
          <Tabs
            value={activeAudience}
            onValueChange={setActiveAudience}
          >
            <TabsList className="h-auto flex-wrap gap-1 rounded-xl bg-muted p-1.5">
              <TabsTrigger
                value="all"
                className="rounded-lg px-4 py-2 font-display text-sm font-semibold tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All Programs
              </TabsTrigger>
              {audiences.map((a) => (
                <TabsTrigger
                  key={a}
                  value={a}
                  className="rounded-lg px-4 py-2 font-display text-sm font-semibold tracking-wide data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {audienceLabels[a]}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Course grid */}
        <div key={activeAudience} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, i) =>
            course.slug === "ai-foundations-job-ready-16-weeks" ? (
              <FullTrackStageCard
                key={course.slug}
                course={course}
                index={i}
                onPreRegister={openPreRegister}
              />
            ) : (
              <StageCard
                key={course.slug}
                course={course}
                index={i}
                onPreRegister={openPreRegister}
                onRegister={openRegister}
              />
            )
          )}
        </div>

        {filteredCourses.length === 0 && (
          <p className="mt-8 text-center text-base text-muted-foreground">
            No courses match this filter yet. Select "All Programs" to see
            everything.
          </p>
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

interface StageCardProps {
  course: Course;
  index: number;
  onPreRegister: (slug: string) => void;
  onRegister: (slug: string) => void;
}

const StageCard = ({ course, index, onPreRegister, onRegister }: StageCardProps) => {
  const stage = course.stage;
  const info = stage ? stageLabels[stage] : null;
  const isLive = course.status === "live";

  return (
    <div
      className="flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/20 hover:bg-card animate-fade-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Stage number + label + status */}
      <div className="mb-4 flex items-center gap-3">
        {info ? (
          <>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
              {info.number}
            </span>
            <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground flex-1">
              {info.label}
            </span>
          </>
        ) : (
          <span className="flex-1" />
        )}
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
        {course.tagline}
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
        {isLive && course.weeks.length > 0 ? (
          <Link
            to={`/courses/${course.slug}`}
            className="btn-shimmer group/btn flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
          >
            Enroll Now
            <ArrowRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        ) : isLive ? (
          <button
            onClick={() => onRegister(course.slug)}
            className="btn-shimmer group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
          >
            {course.ctaPrimary}
            <ArrowRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </button>
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
  index,
  onPreRegister,
}: {
  course: Course;
  index: number;
  onPreRegister: (slug: string) => void;
}) => {
  const isLive = course.status === "live";
  return (
    <div
      className="relative flex flex-col rounded-xl border-2 border-primary/40 bg-card p-6 transition-all hover:border-primary/60 card-glow animate-fade-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
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
        {course.tagline}. From absolute beginner to deployed AI systems in one
        program.
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
            to={`/courses/${course.slug}`}
            className="btn-shimmer group/btn flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
          >
            Enroll Now
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
