import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
            className="h-full w-full object-cover opacity-20 dark:opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        {/* Floating glow orbs */}
        <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[300px] w-[300px] rounded-full bg-primary/8 blur-[100px] animate-float dark:bg-primary/5" />
        </div>
        <div className="absolute right-1/4 top-2/3 translate-x-1/2">
          <div className="h-[250px] w-[400px] rounded-full bg-primary/6 blur-[120px] animate-float dark:bg-primary/4" style={{ animationDelay: "3s" }} />
        </div>

        <div className="section-container relative z-10 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            {/* Headline */}
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Stop Fearing AI.{" "}
              <span className="gradient-text">Start Getting Ahead With It.</span>
            </h1>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/about#gradient"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Explore AI Learning Framework
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card/50 px-8 py-4 font-display text-base font-medium tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                Explore Courses
              </Link>
            </div>

            {/* Mono tagline */}
            <p
              className="mt-5 font-mono text-xs tracking-wide text-muted-foreground animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              // From AI user to AI builder to AI orchestrator - find your level
            </p>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 gap-8 border-t border-border/50 pt-8 sm:grid-cols-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "Live Sessions", label: "Instructor-led, every course" },
                { value: "Half-day to 6 Months", label: "Course durations across programmes" },
                { value: "100% Hands-On", label: "Every Level 2+ course ends with a deployed app" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
