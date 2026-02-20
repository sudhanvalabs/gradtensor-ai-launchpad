import { Link } from "react-router-dom";
import { Zap, Users, Briefcase, ArrowRight } from "lucide-react";
import { getTrackPrice } from "@/data/pricing";
import { useGeo } from "@/hooks/useGeo";

const tracks = [
  {
    icon: Zap,
    trackKey: "skill",
    badge: "SKILL-BASED",
    title: "Need to Upskill Fast?",
    description:
      "Short, intensive programs focused on one high-demand AI skill. Build and deploy real projects in weeks, not months.",
    idealFor: [
      "Final-year students wanting an edge in placements",
      "Professionals adding a specific AI skill to their stack",
    ],
    cta: "View Skill Courses",
    href: "/courses?tab=skill",
  },
  {
    icon: Users,
    trackKey: "cohort",
    badge: "COHORT-BASED",
    title: "Want Deep Foundations?",
    description:
      "Comprehensive programs that take you from fundamentals to deployed AI systems. Live cohorts with structured learning, real projects, and career prep.",
    idealFor: [
      "2nd/3rd year students planning ahead for AI careers",
      "Working professionals making a full career switch to AI",
    ],
    cta: "View Cohort Programs",
    href: "/courses?tab=cohort",
    featured: true,
  },
  {
    icon: Briefcase,
    trackKey: "executive",
    badge: "EXECUTIVE",
    title: "Leading AI Strategy?",
    description:
      "Understand how AI transforms businesses. Learn to evaluate AI opportunities, manage AI teams, and make informed technology decisions.",
    idealFor: [
      "CTOs and product leaders evaluating AI",
      "Decision-makers managing AI teams and initiatives",
    ],
    cta: "Learn More",
    href: "/courses?tab=executive",
  },
];

const LearningTracks = () => {
  const { currency } = useGeo();

  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Choose Your <span className="gradient-text">Learning Track</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            From fast-track placement prep to deep foundations  - pick the path that matches your timeline and goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className={`animate-on-scroll card-hover group relative flex flex-col rounded-xl border p-8 ${
                track.featured
                  ? "border-primary/30 bg-card card-glow"
                  : "border-border bg-card/50 hover:border-primary/20 hover:bg-card"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {track.featured && (
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-display text-xs font-bold tracking-widest text-primary-foreground">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary transition-all group-hover:border-primary/30 group-hover:shadow-[var(--glow-primary)]">
                <track.icon size={22} className="text-primary" />
              </div>

              <span className="mb-3 font-display text-xs font-bold tracking-[0.2em] text-muted-foreground">
                {track.badge}
              </span>

              <h3 className="mb-3 font-display text-2xl font-bold tracking-tight">
                {track.title}
              </h3>

              <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                {track.description}
              </p>

              <ul className="mb-6 flex-1 space-y-2">
                {track.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mb-6 font-display text-base font-semibold text-primary">
                {getTrackPrice(track.trackKey, currency)}
              </p>

              <Link
                to={track.href}
                className="group/btn inline-flex items-center gap-2 font-display text-base font-medium tracking-wider text-foreground transition-colors hover:text-primary"
              >
                {track.cta}
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTracks;
