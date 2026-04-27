import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import AIMasteryGradient from "@/components/AIMasteryGradient";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trainers } from "@/data/trainers";
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

      {/* What makes GradTensor different */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
              // What makes us different
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The{" "}
              <span className="gradient-text">GradTensor Gradient</span>
              . One AI mastery ladder, two audiences.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                We have developed the GradTensor Gradient - a four-level AI
                mastery ladder that takes a learner from AI Consumer to AI
                Builder to AI Agent Builder to AI Orchestrator. The ladder
                applies to both audiences we serve.
              </p>
              <p>
                <strong className="text-foreground">For individuals</strong>{" "}
                who want to improve their career prospects in the AI
                engineering domain - the ladder is a clear path from
                understanding AI to building production agentic systems.{" "}
                <strong className="text-foreground">For institutions</strong>{" "}
                that want to improve efficiency with AI - the ladder maps
                directly to the skills their teams or students need at each
                stage.
              </p>
              <p>
                Most of our courses are delivered through institutional
                partnerships - educational institutions (schools, colleges and
                institutes) and corporate training. Live, hands-on,
                and customised to the audience in the room.
              </p>
            </div>

            {/* Two-column summary of audiences */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card/40 p-5">
                <p className="mb-2 font-mono text-[11px] tracking-wider uppercase text-primary">
                  // Educational Institutions
                </p>
                <p className="font-display text-base font-semibold">
                  Schools, Colleges, Institutes
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Programmes that prepare students for the AI-shaped job
                  market.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card/40 p-5">
                <p className="mb-2 font-mono text-[11px] tracking-wider uppercase text-primary">
                  // Corporate Training
                </p>
                <p className="font-display text-base font-semibold">
                  Enterprise Teams &amp; Leadership
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Workshops that turn AI from a tool teams use into a workflow
                  teams own.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Mastery Gradient (full framework) */}
      <AIMasteryGradient showCoursesCta={false} />

      {/* Founder & Lead Trainer */}
      <section className="border-t border-border/50 py-16 md:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 animate-on-scroll">
              <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
                // Founder &amp; Lead Trainer
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

              <ul className="mt-6 space-y-2">
                {founder.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {item.includes("mlship") ? (
                      <>
                        Maintains{" "}
                        <a
                          href="https://github.com/sudhanvalabs/mlship"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline decoration-primary/30 underline-offset-2 hover:text-primary/80"
                        >
                          mlship
                        </a>
                        , open-source CLI for AI/ML engineers
                      </>
                    ) : item.includes("published author") &&
                      founder.books.length > 0 ? (
                      <>
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
                      </>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>

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
            <h2 className="mb-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Want to work together?
            </h2>
            <p className="mb-6 text-base text-muted-foreground">
              See our programmes for colleges, institutes, schools and
              corporates - or get in touch to discuss a partnership.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/courses"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Explore Programmes
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href="mailto:partnerships@gradtensor.com?subject=Partnership%20Enquiry"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-card/50 px-8 py-3 font-display text-sm font-medium tracking-wider text-foreground transition-all hover:border-primary/30 hover:bg-card"
              >
                Partnership Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
