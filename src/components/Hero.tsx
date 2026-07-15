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

      <div className="section-container relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          {/* Sector tag */}
          <p
            className="mb-6 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            AI for the physical economy
          </p>

          {/* Headline */}
          <h1
            className="mb-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            AI automation for the businesses that{" "}
            <span className="gradient-text">make, build, move, and maintain</span>{" "}
            physical things.
          </h1>

          {/* Subhead */}
          <p
            className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            We put AI to work across your operations, from back-office paperwork
            to plant-floor maintenance and root-cause analysis, always under your
            control.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
            >
              Book a 1-hour demo-talk
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#what-we-do"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card/50 px-8 py-4 font-display text-base font-medium tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
            >
              See what we do
            </a>
          </div>

          {/* Buyer-facing microline: value + control, not credentials */}
          <p
            className="mt-8 max-w-2xl font-mono text-xs leading-relaxed tracking-wide text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Hours back on the paperwork and the plant floor, without handing over
            the decisions that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
