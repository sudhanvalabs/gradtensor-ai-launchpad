import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
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
            Get Placed in AI Roles{" "}
            <span className="gradient-text">This Campus Season</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Build production-ready AI agents and RAG systems. Learn the skills
            companies are actually hiring for in 2025.
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
  );
};

export default Hero;
