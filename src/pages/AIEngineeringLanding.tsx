import { useState, useRef } from "react";
import coverImage from "@/assets/ai-engineering-cover.png";
import LandingNavbar from "@/components/LandingNavbar";
import StickyCTA from "@/components/StickyCTA";
import EngineeringRegisterDialog from "@/components/EngineeringRegisterDialog";
import SEO from "@/components/SEO";
import { getCourseBySlug } from "@/data/courses";
import { getBatchesForCourse } from "@/data/batches";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Video,
  Rocket,
  BrainCircuit,
  Code2,
  Wrench,
  Zap,
  CheckCircle2,
  Calendar,
  Timer,
  ArrowRight,
} from "lucide-react";

const course = getCourseBySlug("ai-engineering-agentic-foundations")!;
const COURSE_TITLE = course.title;

const benefits = [
  {
    icon: BrainCircuit,
    title: "Learn by Building",
    description: "Every week ends with a deployed project, not just theory",
  },
  {
    icon: Video,
    title: "Live Expert Sessions",
    description: "24 hours of live instruction with real-time Q&A",
  },
  {
    icon: Code2,
    title: "Production-Ready Skills",
    description: "RAG, agents, LangGraph - the stack companies actually use",
  },
  {
    icon: Zap,
    title: "Career Accelerator",
    description: "Portfolio projects that prove you can build, not just talk",
  },
];

const engBatches = getBatchesForCourse("ai-engineering-agentic-foundations");

const extraFaqs = [
  {
    q: "Who is this course for?",
    a: "Final-year engineering students, working professionals adding AI skills, and career switchers. Whether you're preparing for interviews or building AI at work, this course gives you hands-on skills with deployed projects.",
  },
  {
    q: "What's the time commitment?",
    a: "About 8 hours per week - 4 hours of live sessions and 4 hours of project work. Sessions are held on weekends so it fits around work or college schedules.",
  },
];

const AIEngineeringLanding = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [registerBatch, setRegisterBatch] = useState("");
  const heroRef = useRef<HTMLElement>(null);

  const scrollToBatches = () => {
    document.getElementById("upcoming-batches")?.scrollIntoView({ behavior: "smooth" });
  };

  const openRegisterWithBatch = (batchLabel: string, startDate: string) => {
    setRegisterBatch(`${batchLabel} - ${startDate}`);
    setRegisterOpen(true);
  };

  const faqs = [...course.faqs, ...extraFaqs];

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: COURSE_TITLE,
    description: course.tagline,
    provider: {
      "@type": "Organization",
      name: "GradTensor",
      url: "https://gradtensor.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Blended",
      duration: course.duration,
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Engineering & Agentic Foundations - 6-Week Live Course"
        description="Build production-ready AI agents in 6 weeks. RAG pipelines, tool orchestration, LangGraph. Live classes for engineers and professionals."
        path="/ai-engineering"
        jsonLd={[courseLd, faqLd]}
      />
      <LandingNavbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="pt-16"
      >
        <div className="section-container py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-display text-sm font-medium text-primary">
              Live Course - Enrolling Now
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text">AI Engineering</span>
              <br />
              <span className="text-foreground">& Agentic Foundations</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Build production-ready AI agents in 6 weeks.
              <br className="hidden sm:block" />
              From LLM fundamentals to deployed RAG pipelines and autonomous agents.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-6 text-base">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock size={18} className="text-primary" /> {course.duration}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Video size={18} className="text-primary" /> {course.hours}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Rocket size={18} className="text-primary" />{" "}
                {course.projects.length} Deployed Projects
              </span>
            </div>

            <Button
              onClick={scrollToBatches}
              size="lg"
              className="btn-shimmer mt-8 rounded-lg bg-primary px-10 py-4 font-display text-lg font-semibold tracking-wider text-primary-foreground"
            >
              Enroll Now
            </Button>
          </div>

          {/* Cover image */}
          <div>
            <img
              src={coverImage}
              alt="AI Engineering & Agentic Foundations"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Why This Course Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="card-hover rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon size={24} />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Build */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            What You'll Build
          </h2>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {course.projects.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {i === 0 ? <Wrench size={20} /> : <BrainCircuit size={20} />}
                </div>
                <h3 className="font-display text-lg font-semibold">
                  Project {i + 1}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Snapshot */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            6-Week Curriculum
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {course.weeks.map((w, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <div className="flex items-center">
                  <h3 className="font-display text-base font-semibold">
                    {w}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Who This Is For
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {course.whoFor.map((w, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 flex-shrink-0 text-primary"
                />
                <p className="text-base text-muted-foreground">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      {engBatches.length > 0 && (
        <section id="upcoming-batches" className="py-16 md:py-20">
          <div className="section-container">
            <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Upcoming Batches
            </h2>
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              {engBatches.map((batch) => (
                <div
                  key={`${batch.courseSlug}-${batch.batchLabel}`}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="mb-3 inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-display text-xs font-semibold tracking-wider text-primary">
                    {batch.batchLabel}
                  </span>
                  <div className="mb-6 flex flex-col gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>Starts {batch.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>{batch.days}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{batch.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Timer size={16} className="text-primary" />
                      <span>{batch.duration}</span>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() =>
                        openRegisterWithBatch(batch.batchLabel, batch.startDate)
                      }
                      className="btn-shimmer group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
                    >
                      Enroll Now
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-border/50"
                >
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

      {/* Sticky CTA (mobile) */}
      <StickyCTA
        label="Enroll Now"
        onClick={scrollToBatches}
        heroRef={heroRef}
      />

      {/* Registration Dialog */}
      <EngineeringRegisterDialog
        open={registerOpen}
        onOpenChange={setRegisterOpen}
        courseTitle={COURSE_TITLE}
        defaultBatch={registerBatch}
      />
    </div>
  );
};

export default AIEngineeringLanding;
