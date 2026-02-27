import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Layers } from "lucide-react";
import {
  getJourneyCourses,
  getFullTrackCourse,
  stageLabels,
} from "@/data/courses";
import type { Course } from "@/data/courses";
import PreRegisterDialog from "@/components/PreRegisterDialog";

const LearningJourney = () => {
  const journeyCourses = getJourneyCourses();
  const fullTrackCourse = getFullTrackCourse();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  const openPreRegister = (slug: string) => {
    setSelectedCourse(slug);
    setDialogOpen(true);
  };

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

        {/* 3x2 grid on desktop, vertical stack on mobile */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {journeyCourses.map((course, i) => (
            <StageCard
              key={course.slug}
              course={course}
              index={i}
              onPreRegister={openPreRegister}
            />
          ))}

          {/* Full track as 6th card */}
          {fullTrackCourse && (
            <FullTrackStageCard course={fullTrackCourse} index={5} />
          )}
        </div>
      </div>

      <PreRegisterDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultCourse={selectedCourse}
      />
    </section>
  );
};

interface StageCardProps {
  course: Course;
  index: number;
  onPreRegister: (slug: string) => void;
}

const StageCard = ({ course, index, onPreRegister }: StageCardProps) => {
  const stage = course.stage!;
  const info = stageLabels[stage];
  const isLive = course.status === "live";

  return (
    <div
      className="animate-on-scroll flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/20 hover:bg-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Stage number + label + status */}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
          {info.number}
        </span>
        <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground flex-1">
          {info.label}
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
        {isLive ? (
          <Link
            to={`/courses/${course.slug}`}
            className="group/btn flex items-center justify-between font-display text-base font-semibold tracking-wider text-primary transition-colors hover:text-primary/80"
          >
            Learn More
            <ArrowRight
              size={16}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </Link>
        ) : (
          <button
            onClick={() => onPreRegister(course.slug)}
            className="group/btn flex w-full items-center justify-between font-display text-base font-semibold tracking-wider text-primary transition-colors hover:text-primary/80"
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
}: {
  course: Course;
  index: number;
}) => {
  return (
    <div
      className="animate-on-scroll relative flex flex-col rounded-xl border-2 border-primary/40 bg-card p-6 transition-all hover:border-primary/60 card-glow"
      style={{ transitionDelay: `${index * 0.08}s` }}
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
        <span className="badge-live">LIVE</span>
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

      {/* Duration + Hours + Projects */}
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
        <Link
          to={`/courses/${course.slug}`}
          className="group/btn flex items-center justify-between font-display text-base font-semibold tracking-wider text-primary transition-colors hover:text-primary/80"
        >
          Learn More
          <ArrowRight
            size={16}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default LearningJourney;
