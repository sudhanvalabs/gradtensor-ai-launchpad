import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trainers } from "@/data/trainers";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const founder = trainers[0];

const aboutDescription =
  "GradTensor is an India-focused AI education company for colleges. We help students and faculty stop fearing AI and start building with it, and support institutions in putting that capability to work and keeping it running.";

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About GradTensor",
  description: aboutDescription,
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
    number: "Students",
    name: "For Students",
    desc: "Get placement-ready by building real, deployed AI.",
    range: "Build + Apply",
    href: "/for-students",
    barColor: "#c8472e",
  },
  {
    number: "Faculty",
    name: "For Faculty",
    desc: "Use AI for lesson plans, tests, and teaching.",
    range: "Workshops & FDP",
    href: "/for-faculty",
    barColor: "#7a9b8c",
  },
  {
    number: "Institutions",
    name: "For Institutions",
    desc: "Bring AI to your whole campus, end to end.",
    range: "Campus partnerships",
    href: "/for-institutions",
    barColor: "#d4a574",
  },
];

const SERVICES = [
  {
    audience: "For engineering students",
    desc: "From a 2-day AI Builder Intensive to the 6-month AI Agentic Engineering Bootcamp. Every student builds and deploys working AI systems - the profile employers compete for at placements.",
  },
  {
    audience: "For non-tech students",
    desc: "Applied AI for BBA, MBA, BCom, CA, humanities, and hospitality students. Use AI well in your discipline and stand out in placements - no coding required.",
  },
  {
    audience: "For faculty",
    desc: "Hands-on AI productivity workshops and Faculty Development Programmes. Faculty learn to use AI for lesson plans, homework, test papers, and concept explanations - with examples from their own subjects.",
  },
  {
    audience: "For institutions",
    desc: "Campus-wide AI partnerships for principals, deans, and placement cells. One partner for student programmes, faculty development, and a roadmap aligned to NEP 2020 and AICTE priorities.",
  },
];

const STEPS = ["Deconstruct", "Build", "Break", "Defend", "Abstract", "Ship"];

const VALUES = [
  {
    name: "Substance over hype",
    desc: "We teach what works, not what is fashionable.",
  },
  {
    name: "Practitioner-led",
    desc: "Our instructors build AI systems themselves; we do not teach what we have not done.",
  },
  {
    name: "Honest scoping",
    desc: "We tell clients and learners what AI can and cannot do reliably.",
  },
  {
    name: "Public reference work",
    desc: "We publish openly so our approach is verifiable.",
  },
];

const About = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About GradTensor"
        description={aboutDescription}
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
            <span className="gradient-text">Start building with it.</span>
          </h1>
          <p
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            GradTensor is an India-focused AI education company for colleges. We
            help students and faculty stop fearing AI and start building with
            it, and support institutions in putting that capability to work and
            keeping it running.
          </p>
        </div>
      </section>

      {/* Intro video */}
      <section className="pb-12 md:pb-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <div className="overflow-hidden rounded-2xl border-2 border-foreground/80 bg-card shadow-[var(--shadow-card)]">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/r8AEOPE4OMo"
                  title="GradTensor intro"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Our Focus
            </p>
            <h2 className="mb-6 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
              Generative and agentic AI.{" "}
              <em className="not-italic text-primary">Nothing older.</em>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                We specialise in generative AI and agentic AI - the new wave of
                LLM-powered applications, autonomous agents, and AI-augmented
                workflows. We do not teach traditional machine learning or data
                science; those are mature fields with established providers.
              </p>
              <p>
                Our work is exclusively on the AI capabilities that have emerged
                since 2022 - prompting, agents, tool use, retrieval, evaluation,
                and production deployment patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Who We Serve
            </p>
            <h2 className="mb-6 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
              AI is a{" "}
              <em className="not-italic text-primary">horizontal skill</em> now.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                Our programmes are designed for students across every discipline
                - engineering and computer science, commerce and management,
                humanities, sciences, and hospitality.
              </p>
              <p>
                AI is no longer a specialist tool for technologists; it is a
                horizontal capability every graduate now needs at placements. We
                teach accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 animate-on-scroll">
              <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Our Services
              </p>
              <h2 className="mb-3 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
                What we deliver.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 animate-on-scroll">
              {SERVICES.map((s) => (
                <div
                  key={s.audience}
                  className="flex flex-col gap-2 border border-foreground/80 bg-card p-6"
                >
                  <h3 className="font-display text-lg italic font-medium leading-tight tracking-tight">
                    {s.audience}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base leading-relaxed text-foreground sm:text-lg animate-on-scroll">
              All our work centres on the Anthropic Claude stack, with reference
              materials drawn from our public Build with Claude series.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground animate-on-scroll">
              Running a corporate team and want custom AI training?{" "}
              <Link
                to="/contact"
                className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
              >
                Get in touch
              </Link>
              .
            </p>
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
                Three doors through the ladder
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
                Levels 02 to 04 for students are also delivered as a single
                integrated programme: the AI Agentic Engineering Bootcamp.
                Six months of live instruction, four months of training plus a
                two-month capstone, 64 live hours. Built for engineering
                colleges, BCA/MCA institutes, technical institutes, and
                placement partners.
              </p>
              <Link
                to="/for-students"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.18em] uppercase text-foreground transition-colors hover:text-primary"
              >
                Explore the Bootcamp
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Our Approach
            </p>
            <h2 className="mb-6 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
              Brick by Brick.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                We teach and build the way serious engineers learn - foundations
                first. Our methodology, called Brick by Brick, has six steps.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 border border-foreground/80 bg-card p-4"
                >
                  <span className="font-mono text-xs tracking-[0.15em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base italic font-medium tracking-tight">
                    {step}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base leading-relaxed text-foreground sm:text-lg">
              Learners do not just understand AI tools theoretically; they
              construct them, stress-test them, and learn to defend their design
              choices.
            </p>

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

      {/* Our Values */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 animate-on-scroll">
              <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Our Values
              </p>
              <h2 className="font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
                What we hold to.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 animate-on-scroll">
              {VALUES.map((v) => (
                <div
                  key={v.name}
                  className="flex flex-col gap-2 border border-foreground/80 bg-card p-6"
                >
                  <h3 className="font-display text-lg italic font-medium leading-tight tracking-tight text-primary">
                    {v.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              ))}
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
              Programmes for your students, development for your faculty, and a
              roadmap for your institution. Find your door in, or get in touch to
              discuss a campus partnership.
            </p>
            <div className="flex justify-center">
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
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
