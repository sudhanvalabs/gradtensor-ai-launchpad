import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        {/* Glow effect */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            {/* Trust badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 backdrop-blur-sm animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="font-display text-xs tracking-wider text-muted-foreground">
                Next cohort starts March 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              From Zero to{" "}
              <span className="gradient-text">AI Engineer</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-10 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Master LLMs, agents, and RAG systems through live cohorts. Get
              job-ready in 6–16 weeks with deployed projects that prove you can
              build.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/courses"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Browse Courses
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:hello@gradtensor.com"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card/50 px-8 py-3.5 font-display text-sm font-medium tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                Talk to an Advisor
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "6–16", label: "weeks to job-ready" },
                { value: "48+", label: "hours of live learning" },
                { value: "100%", label: "project-based curriculum" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Targeting Section */}
      <section className="border-t border-border/50 bg-secondary/30 py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Students */}
            <div className="animate-on-scroll group rounded-xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--glow-primary)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold tracking-tight">
                Preparing for Campus Placements?
              </h3>
              <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                Get placed in AI roles this season with skills 99% of students
                don't have. Build portfolio projects interviewers actually want
                to see.
              </p>
              <p className="mb-5 font-display text-xs font-semibold tracking-wider text-primary">
                6-WEEK FAST-TRACK AVAILABLE
              </p>
              <Link
                to="/courses#skill"
                className="group/link inline-flex items-center gap-2 font-display text-sm font-medium tracking-wider text-foreground transition-colors hover:text-primary"
              >
                View Student Track
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Professionals */}
            <div className="animate-on-scroll group rounded-xl border border-border bg-card/60 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[var(--glow-primary)]" style={{ transitionDelay: "0.1s" }}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                <Briefcase size={24} className="text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold tracking-tight">
                Switching to AI Careers?
              </h3>
              <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                Go from engineer to AI engineer with comprehensive foundations
                and real portfolio projects. Learn the modern AI stack companies
                are hiring for.
              </p>
              <p className="mb-5 font-display text-xs font-semibold tracking-wider text-primary">
                16-WEEK COMPLETE PROGRAM
              </p>
              <Link
                to="/courses#cohort"
                className="group/link inline-flex items-center gap-2 font-display text-sm font-medium tracking-wider text-foreground transition-colors hover:text-primary"
              >
                View Professional Track
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
