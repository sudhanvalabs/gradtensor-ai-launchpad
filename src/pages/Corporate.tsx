import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getCoursesByCategory } from "@/data/courses";
import { ArrowLeft, ArrowRight, Mail, Phone, Clock, BookOpen } from "lucide-react";

const corporateCourses = getCoursesByCategory("corporate");

const corporateLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GradTensor Corporate AI Training",
  itemListElement: corporateCourses.map((course, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: course.title,
  })),
};

const Corporate = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Corporate AI Training"
        description="AI training for your teams - from AI prompts that speed up daily work to AI workflows that compress entire processes. Customised to your function, your workflows, your documents."
        path="/corporate"
        jsonLd={corporateLd}
      />
      <Navbar />

      {/* Back link */}
      <div className="pt-24 md:pt-28">
        <div className="section-container">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="section-container text-center">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
            Corporate AI{" "}
            <span className="gradient-text">Training</span>
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            AI training tailored to your teams. From AI prompts that speed up
            daily work to AI workflows that compress entire processes.
            Customised to your function, your workflows, your documents.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="pb-12">
        <div className="section-container">
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                AI Prompts
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your team leaves with ready-to-use prompt templates for their
                most common tasks. Templates they can use the next morning.
                Cut drafting time by 50-70%.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                AI Workflows
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Compress multi-step processes into chained prompt sequences.
                A 10-step process that took 45 minutes becomes 3 prompts in 8
                minutes. No new tools - just AI used at full depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course cards by function */}
      <section className="pb-20">
        <div className="section-container">
          <h2
            className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Training by Function
          </h2>
          <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
            {corporateCourses.map((course, i) => (
              <div
                key={course.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg animate-fade-up opacity-0"
                style={{ animationDelay: `${0.3 + i * 0.05}s` }}
              >
                <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
                  {course.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-primary">
                  {course.tagline}
                </p>
                {course.description && (
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>
                )}

                <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-primary" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={14} className="text-primary" />
                    {course.hours}
                  </span>
                </div>

                <p className="mb-4 text-xs text-muted-foreground">
                  Ideal for: {course.idealFor}
                </p>

                <div className="mt-auto pt-3 border-t border-border/50">
                  <a
                    href="mailto:partnerships@gradtensor.com"
                    className="group/btn flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 font-display text-sm font-semibold tracking-wider text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    Contact Us
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card/80 to-card/50 p-8 md:p-10 text-center">
            <h2 className="mb-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to train your team?
            </h2>
            <p className="mb-4 text-base text-muted-foreground">
              Every course is customised to your team's actual workflows and
              documents. We also offer company-wide AI awareness sessions as a
              starting point.
            </p>
            <p className="mb-8 text-sm text-muted-foreground">
              Contact us to discuss a training roadmap for your organisation.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:partnerships@gradtensor.com"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-display text-sm font-semibold tracking-wider text-foreground transition-all hover:border-primary/30 hover:text-primary"
              >
                <Mail size={16} />
                partnerships@gradtensor.com
              </a>
              <a
                href="https://wa.me/919108030542"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-display text-sm font-semibold tracking-wider text-foreground transition-all hover:border-primary/30 hover:text-primary"
              >
                <Phone size={16} />
                +91 91080 30542
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Corporate;
