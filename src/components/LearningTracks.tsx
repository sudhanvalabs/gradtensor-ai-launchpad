import { Link } from "react-router-dom";
import { Zap, Users, Briefcase, ArrowRight } from "lucide-react";

const tracks = [
  {
    icon: Zap,
    badge: "6 WEEKS",
    title: "Fast-Track Placement Prep",
    description:
      "Intensive 6-week programs focused on one critical skill — AI agents, RAG systems, or prompt engineering. Perfect for final-year students with 3–6 months to placement.",
    price: "Starting at ₹21,000",
    cta: "View Skill Courses",
    href: "/courses#skill",
  },
  {
    icon: Users,
    badge: "16 WEEKS",
    title: "Deep Foundations to Job-Ready",
    description:
      "Comprehensive 16-week program covering Python, ML basics, modern AI stack, deployment, and career prep. Build from first principles, ship real projects.",
    price: "Starting at ₹45,000",
    cta: "View Cohort Program",
    href: "/courses#cohort",
    featured: true,
  },
  {
    icon: Briefcase,
    badge: "CUSTOM",
    title: "AI Strategy for Leaders",
    description:
      "Understand how AI transforms businesses. Learn to evaluate AI opportunities, manage AI teams, and make informed technology decisions. For CTOs and product leaders.",
    price: "Custom pricing",
    cta: "Learn More",
    href: "mailto:hello@gradtensor.com",
  },
];

const LearningTracks = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your <span className="gradient-text">Learning Track</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            From fast-track placement prep to deep foundations — pick the path that matches your timeline and goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className={`animate-on-scroll group relative flex flex-col rounded-xl border p-8 transition-all duration-300 ${
                track.featured
                  ? "border-primary/30 bg-card card-glow"
                  : "border-border bg-card/50 hover:border-border hover:bg-card"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {track.featured && (
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-display text-[10px] font-bold tracking-widest text-primary-foreground">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary">
                <track.icon size={20} className="text-primary" />
              </div>

              <span className="mb-3 font-display text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
                {track.badge}
              </span>

              <h3 className="mb-3 font-display text-xl font-bold tracking-tight">
                {track.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {track.description}
              </p>

              <p className="mb-6 font-display text-sm font-semibold text-primary">
                {track.price}
              </p>

              <Link
                to={track.href}
                className="group/btn inline-flex items-center gap-2 font-display text-sm font-medium tracking-wider text-foreground transition-colors hover:text-primary"
              >
                {track.cta}
                <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;
