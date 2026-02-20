import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getCourseBySlug } from "@/data/courses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  Users,
  CheckCircle2,
  Mail,
  Download,
} from "lucide-react";

const CourseDetail = () => {
  useScrollAnimation();
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;
  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 font-display text-4xl font-bold">Course Not Found</h1>
            <p className="mb-6 text-lg text-muted-foreground">
              The course you're looking for doesn't exist.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 font-display text-base font-semibold text-primary hover:underline"
            >
              <ArrowLeft size={18} />
              Back to Programs
            </Link>
          </div>
        </div>
        <SiteFooter hideCta />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back link */}
      <div className="pt-24 md:pt-28">
        <div className="section-container">
          <Link
            to={`/courses?tab=${course.category}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Programs
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <section className="pt-6 pb-12 md:pb-16">
        <div className="section-container">
          <div className="animate-fade-up">
            <span className={course.badgeClass}>{course.badge}</span>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {course.title}
            </h1>

            <p className="mt-3 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              {course.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-base text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock size={18} className="text-primary" /> {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen size={18} className="text-primary" /> {course.hours}
              </span>
              <span className="flex items-center gap-2">
                <Users size={18} className="text-primary" /> {course.idealFor}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Course Body */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Curriculum */}
            <div className="animate-on-scroll">
              <h3 className="mb-4 font-display text-sm font-bold tracking-wider text-foreground">
                WHAT YOU'LL LEARN
              </h3>
              <ul className="space-y-3">
                {course.weeks.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-base text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="animate-on-scroll">
              <h3 className="mb-4 font-display text-sm font-bold tracking-wider text-foreground">
                PROJECTS YOU'LL BUILD
              </h3>
              <ul className="space-y-3">
                {course.projects.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-base text-muted-foreground">
                    <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who This Is For */}
            <div className="animate-on-scroll">
              <h3 className="mb-4 font-display text-sm font-bold tracking-wider text-foreground">
                WHO THIS IS FOR
              </h3>
              <ul className="space-y-3">
                {course.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-2 text-base text-muted-foreground">
                    <ArrowRight size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {course.faqs.length > 0 && (
        <section className="pb-16">
          <div className="section-container">
            <div className="mx-auto max-w-3xl animate-on-scroll">
              <h3 className="mb-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible>
                {course.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                    <AccordionTrigger className="font-display text-base font-medium tracking-tight text-foreground hover:text-primary hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* CTAs */}
      <section className="pb-24">
        <div className="section-container">
          <div className="animate-on-scroll flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center md:p-12">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                Ready to get started?
              </h3>
              <p className="mt-1 text-base text-muted-foreground">
                Secure your spot in the next cohort.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@gradtensor.com"
                className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                <Mail size={18} />
                {course.ctaPrimary}
              </a>
              <a
                href="mailto:hello@gradtensor.com?subject=Syllabus%20Request"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 font-display text-base font-medium tracking-wider text-foreground transition-all hover:border-primary/30"
              >
                <Download size={18} />
                {course.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter hideCta />
    </div>
  );
};

export default CourseDetail;
