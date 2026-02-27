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
      {/* Stage number + label */}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
          {info.number}
        </span>
        <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
          {info.label}
        </span>
      </div>

      {/* Course name */}
      <h3 className="mb-1 font-display text-lg font-bold tracking-tight lg:text-xl">
        {course.title}
      </h3>

      {/* Duration + Hours */}
      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock size={12} className="text-primary" />
          {course.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <BookOpen size={12} className="text-primary" />
          {course.hours}
        </span>
      </div>

      {/* Tagline */}
      <p className="mb-2 text-sm text-muted-foreground">
        {course.tagline}
      </p>

      {/* Who for */}
      <p className="mb-4 text-xs text-muted-foreground/70 flex-1">
        For: {course.whoForShort}
      </p>

      {/* Status badge + CTA */}
      <div className="mt-auto">
        {isLive ? (
          <>
            <span className="badge-live mb-3 inline-block">LIVE</span>
            <Link
              to={`/courses/${course.slug}`}
              className="group/btn flex items-center gap-2 font-display text-sm font-medium tracking-wider text-foreground transition-colors hover:text-primary"
            >
              Learn More
              <ArrowRight
                size={14}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </Link>
          </>
        ) : (
          <>
            <span className="badge-pre-register mb-3 inline-block">
              PRE-REGISTER
            </span>
            <button
              onClick={() => onPreRegister(course.slug)}
              className="group/btn flex items-center gap-2 font-display text-sm font-medium tracking-wider text-foreground transition-colors hover:text-primary"
            >
              Pre-Register
              <ArrowRight
                size={14}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </button>
            <p className="mt-1 text-xs text-muted-foreground">
              Launching soon...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LearningJourney;
