import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trainers } from "@/data/trainers";
import { whatsappCustomLink } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const founder = trainers[0];

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About GradTensor",
  description:
    "GradTensor was founded to help students and working professionals build practical AI skills that employers actually need.",
  publisher: {
    "@type": "Organization",
    name: "GradTensor",
  },
  mainEntity: {
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.title,
    description: founder.bio[0],
    sameAs: founder.links.map((link) => link.url),
  },
};

const LEVELS = [
  {
    num: "L 01",
    name: "Foundations",
    outcome: "Become AI-Native",
    desc: "Understand what AI is, what it isn't, and how to think clearly about it.",
    format: "Half-day / Keynote",
  },
  {
    num: "L 02",
    name: "Proficiency",
    outcome: "Become Fluent",
    desc: "Work confidently with AI tools, prompts, and patterns in your context.",
    format: "1-2 day workshop",
  },
  {
    num: "L 03",
    name: "Builder",
    outcome: "Become a Builder",
    desc: "Build real AI-powered workflows, tools, and applications.",
    format: "4 weeks / 30 hours",
  },
  {
    num: "L 04",
    name: "Orchestrator",
    outcome: "Become an Orchestrator",
    desc: "Design, deploy, and govern autonomous AI systems in production.",
    format: "6 months / 64 live hours",
  },
];

const TRACKS = [
  {
    number: "Track 01",
    name: "For Leaders",
    desc: "Direct AI work without doing it yourself.",
    range: "Levels 01 → 02",
    href: "/for-leaders",
    barColor: "#d4a574",
  },
  {
    number: "Track 02",
    name: "For Professionals",
    desc: "Apply AI in the work you already do.",
    range: "Levels 01 → 03",
    href: "/for-professionals",
    barColor: "#7a9b8c",
  },
  {
    number: "Track 03",
    name: "For Engineers",
    desc: "Build production AI systems.",
    range: "Levels 01 → 04",
    href: "/for-engineers",
    barColor: "#c8472e",
  },
];

const About = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About GradTensor"
        description="GradTensor was founded to help students and working professionals build practical AI skills that employers actually need."
        path="/about"
        jsonLd={aboutLd}
      />
      <Navbar />

      {/* Back link */}
      <div className="pt-24 md:pt-28">
        <div className="section-container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="section-container">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            // About GradTensor
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
            Stop fearing AI.{" "}
            <span className="gradient-text">Start getting ahead with it.</span>
          </h1>
          <p
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            GradTensor is a specialist AI training academy based in Bengaluru
            where every course is live and instructor-led. No pre-recorded
            videos. No self-paced drift. Just real cohorts moving through real
            material with a real practitioner.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              What makes us different
            </p>
            <h2 className="mb-6 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
              One framework. Three tracks.{" "}
              <em className="not-italic text-primary">Same ladder.</em>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                We have developed the GradTensor Gradient - a four-level AI
                mastery ladder from AI Foundations to AI Orchestrator. The
                ladder is the same for everyone. What changes is the track you
                take through it, based on your role and what you need to do
                with AI.
              </p>
              <p>
                Every programme is delivered through one of two channels:
                corporate L&amp;D teams, or partnerships with colleges and
                institutes. Every cohort is live and instructor-led. No
                pre-recorded videos. No self-paced drift.
              </p>
            </div>

            {/* Manifesto doorway */}
            <div className="mt-12">
              <div
                aria-hidden="true"
                className="mb-5 h-px w-20 bg-muted-foreground"
              />
              <p className="mb-2 font-display text-base italic text-foreground/85 sm:text-lg">
                The full story of why we exist, and what we stand for, is in
                our manifesto.
              </p>
              <Link
                to="/manifesto"
                className="group inline-flex items-center gap-1.5 font-display text-base text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary/80 hover:decoration-primary"
              >
                Read the manifesto
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The GradTensor Gradient */}
      <section id="gradient" className="border-t border-border/50 py-16 md:py-20 scroll-mt-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 animate-on-scroll">
              <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                The GradTensor Gradient
              </p>
              <h2 className="mb-3 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
                Our proprietary four-level AI mastery framework.
              </h2>
              <p className="text-lg italic text-muted-foreground">
                Find your level. Take the next step.
              </p>
            </div>

            {/* Vertical ladder */}
            <div className="border-y border-foreground/80 animate-on-scroll">
              {LEVELS.map((lv, i) => (
                <div
                  key={lv.num}
                  className={`grid grid-cols-[60px_1fr] sm:grid-cols-[80px_1fr_160px] items-center gap-x-6 gap-y-2 py-6 ${
                    i > 0 ? "border-t border-foreground/80" : ""
                  }`}
                >
                  <div className="font-mono text-xs tracking-[0.15em] text-muted-foreground sm:text-sm">
                    {lv.num}
                  </div>
                  <div>
                    <div className="font-display text-xl italic font-medium leading-tight tracking-tight sm:text-2xl">
                      {lv.name}
                      <span className="ml-2 text-base font-normal not-italic text-muted-foreground">
                        · {lv.outcome}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {lv.desc}
                    </p>
                  </div>
                  <div className="col-start-2 sm:col-start-3 font-mono text-[11px] tracking-[0.1em] text-foreground sm:text-right">
                    {lv.format}
                  </div>
                </div>
              ))}
            </div>

            {/* Three tracks through the ladder */}
            <div className="mt-12 animate-on-scroll">
              <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Three tracks through the ladder
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {TRACKS.map((t) => (
                  <Link
                    key={t.href}
                    to={t.href}
                    className="group relative flex flex-col gap-2 overflow-hidden border border-foreground/80 bg-card p-5 pt-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 top-0 h-[6px]"
                      style={{ backgroundColor: t.barColor }}
                    />
                    <p className="mt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                      {t.number}
                    </p>
                    <h3 className="font-display text-lg italic font-medium leading-tight tracking-tight">
                      {t.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-dashed border-muted-foreground/40 pt-3">
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                        {t.range}
                      </span>
                      <ArrowRight
                        size={14}
                        className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Integrated programme callout */}
            <div className="mt-10 border-2 border-foreground/80 bg-card p-6 sm:p-7 animate-on-scroll">
              <p className="mb-2 font-mono text-[10px] tracking-[0.2em] uppercase text-primary">
                Integrated programme
              </p>
              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                Levels 02 to 04 for engineers are also delivered as a single
                integrated programme: the AI Agentic Engineering Bootcamp.
                Six months of live instruction, four months of training plus a
                two-month capstone, 64 live hours. Built for engineering
                colleges, technical institutes, placement partners, and
                corporate engineering teams.
              </p>
              <Link
                to="/for-engineers"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.18em] uppercase text-foreground transition-colors hover:text-primary"
              >
                Explore the Bootcamp
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Lead Instructor */}
      <section className="border-t border-border/50 py-16 md:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 animate-on-scroll">
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
                // Founder &amp; Lead Instructor
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Meet <span className="gradient-text">{founder.name}</span>
              </h2>
              <p className="mt-1 text-base text-primary font-medium">
                {founder.title}
              </p>
            </div>

            <div
              className="rounded-2xl border border-border bg-card p-8 md:p-10 animate-fade-up opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="space-y-4">
                {founder.bio.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {founder.books.length > 0 && (
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      Published author:{" "}
                      {founder.books.map((book, bi) => (
                        <span key={bi}>
                          {bi > 0 && " and "}
                          <a
                            href={book.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline decoration-primary/30 underline-offset-2 hover:text-primary/80"
                          >
                            {book.title}
                          </a>
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>
              )}

              {founder.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {founder.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card/80 to-card/50 p-8 md:p-10 text-center animate-on-scroll">
            <h2 className="mb-3 font-display text-2xl italic font-medium tracking-tight sm:text-3xl">
              Want to work together?
            </h2>
            <p className="mb-6 text-base text-muted-foreground">
              Three tracks for three audiences. One framework underneath. Find
              your door in, or get in touch to discuss a partnership.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/framework"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Explore the Framework
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <WhatsAppButton
                href={whatsappCustomLink("Hi, I'd like to discuss a partnership with GradTensor.")}
                className="inline-flex items-center justify-center rounded-lg border border-foreground/80 bg-transparent px-8 py-3 font-display text-sm font-medium tracking-wider text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Partnership Enquiry
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
