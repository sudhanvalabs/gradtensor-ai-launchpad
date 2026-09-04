import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

/*
  Hero. Vertical-neutral as of the September 2026 repositioning.

  This replaced a manufacturing / supply-chain headline that was running as a
  deliberate vertical test on an otherwise neutral body. The test is retired:
  GradTensor now presents as an AI specialist firm with three ways in, and a
  sector-specific headline would speak to one of the three pillars only. The
  headline is deliberately short: it is an imperative, and the subhead below it
  does the explaining.

  Voice rules for this file and every sibling section: no em dashes, no
  exclamation marks, and no claim about Forge that Forge cannot back.
*/
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
          {/* Positioning tag */}
          <p
            className="mb-6 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            Applied AI specialists
          </p>

          {/* Headline */}
          <h1
            className="mb-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Put AI to <span className="gradient-text">work</span>.
          </h1>

          {/* Subhead */}
          <p
            className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            GradTensor is an AI specialist firm. We train your people, decide with
            you where AI belongs in your operations, and build the systems that run
            there. Three ways in, one standard: AI you can stand behind.
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
              Book a free 30-min consultation
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
            Hours back across your operations, without handing over the decisions
            that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
