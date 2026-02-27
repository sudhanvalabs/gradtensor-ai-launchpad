import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Layers } from "lucide-react";
import { getFullTrackCourse } from "@/data/courses";

const FullTrackCard = () => {
  const course = getFullTrackCourse();
  if (!course) return null;

  return (
    <section className="pb-24 md:pb-32">
      <div className="section-container">
        <div className="animate-on-scroll rounded-2xl border border-primary/20 bg-card p-8 md:p-12 card-glow">
          <span className="font-display text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
            FULL TRACK
          </span>

          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Prefer one continuous program?
          </h2>

          <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {course.tagline}. Go from absolute beginner to deployed AI systems
            in a single structured program.
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              {course.duration}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen size={16} className="text-primary" />
              {course.hours}
            </span>
            <span className="flex items-center gap-2">
              <Layers size={16} className="text-primary" />
              {course.projects.length} projects
            </span>
          </div>

          <div className="mt-8">
            <Link
              to={`/courses/${course.slug}`}
              className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
            >
              Learn More
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullTrackCard;
