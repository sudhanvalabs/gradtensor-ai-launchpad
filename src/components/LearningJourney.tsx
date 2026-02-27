import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Clock, BookOpen } from "lucide-react";
import { getJourneyCourses, stageLabels } from "@/data/courses";
import type { Course } from "@/data/courses";
import PreRegisterDialog from "@/components/PreRegisterDialog";

const LearningJourney = () => {
  const journeyCourses = getJourneyCourses();
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
            wherever you are.
          </p>
        </div>

        {/* Desktop: horizontal with connectors */}
        <div className="hidden lg:block">
          <div className="flex items-stretch gap-0">
            {journeyCourses.map((course, i) => (
              <div key={course.slug} className="flex flex-1 items-stretch">
                <StageCard
                  course={course}
                  index={i}
                  onPreRegister={openPreRegister}
                />
                {i < journeyCourses.length - 1 && (
                  <div className="flex items-center px-1">
                    <ChevronRight
                      size={24}
                      className="text-primary/40 flex-shrink-0"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: vertical stack */}
        <div className="lg:hidden space-y-4">
          {journeyCourses.map((course, i) => (
            <StageCard
              key={course.slug}
              course={course}
              index={i}
              onPreRegister={openPreRegister}
            />
          ))}
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
      className="animate-on-scroll flex flex-col rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/20 hover:bg-card flex-1"
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

      {/* Status badge + CTA */}
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

export default LearningJourney;
