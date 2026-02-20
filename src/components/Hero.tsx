import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/siteConfig";
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
            {/* Trust badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm animate-fade-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-display text-sm tracking-wider text-muted-foreground">
                Next batch starts {siteConfig.nextBatch}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
              From Zero to{" "}
              <span className="gradient-text">AI Engineer</span>
            </h1>

            {/* Subheadline */}
            <p className="mb-10 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Master LLMs, agents, and RAG systems through live sessions. Get
              job-ready in 6-16 weeks with deployed projects that prove you can
              build.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/courses"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Browse Courses
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink("advisor")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card/50 px-8 py-4 font-display text-base font-medium tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                Talk to an Advisor
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "6-16", label: "weeks to job-ready" },
                { value: "48+", label: "hours of live learning" },
                { value: "100%", label: "project-based curriculum" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
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
