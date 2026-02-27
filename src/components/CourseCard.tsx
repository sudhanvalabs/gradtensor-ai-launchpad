import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  onPreRegister?: (slug: string) => void;
}

const CourseCard = ({ course, onPreRegister }: CourseCardProps) => {
  const isLive = course.status === "live";

  if (!isLive && onPreRegister) {
    return (
      <button
        onClick={() => onPreRegister(course.slug)}
        className="card-hover group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left"
      >
        <div className="p-6 md:p-8">
          <span className="badge-pre-register">PRE-REGISTER</span>

          <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
            {course.title}
          </h3>

          <p className="mt-2 text-base text-muted-foreground">
            {course.tagline}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-primary" />
              {course.duration}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-border px-6 py-4 font-display text-sm font-semibold text-primary transition-colors group-hover:bg-primary/5 md:px-8">
          Pre-Register
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </button>
    );
  }

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="card-hover group block overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="p-6 md:p-8">
        <span className="badge-live">LIVE</span>

        <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl">
          {course.title}
        </h3>

        <p className="mt-2 text-base text-muted-foreground">
          {course.tagline}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock size={16} className="text-primary" />
            {course.duration}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-border px-6 py-4 font-display text-sm font-semibold text-primary transition-colors group-hover:bg-primary/5 md:px-8">
        View Details
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default CourseCard;
