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
  XCircle,
  Users,
  Shield,
  Calendar,
  Timer,
  ArrowRight,
} from "lucide-react";

const course = getCourseBySlug("ai-engineering-agentic-foundations")!;
const COURSE_TITLE = course.title;

const benefits = [
  {
    icon: BrainCircuit,
    title: "Build From First Principles",
    description:
      "Every concept is taught from the ground up before any framework is introduced. When something breaks in production - and it will - you will know exactly why and how to fix it.",
  },
  {
    icon: Wrench,
    title: "Industry Tools and Stack",
    description:
      "You learn the tools that appear in actual job descriptions - not toy examples. Vector databases, LangChain, LangGraph, FastAPI, Docker, and cloud deployment are all part of the curriculum.",
  },
  {
    icon: Rocket,
    title: "Two Portfolio Pieces You Can Demo",
    description:
      "Both projects are deployed at a real public URL by the end of the course. Not a GitHub repository nobody will open - a live system you can show in an interview and explain every design decision behind.",
  },
  {
    icon: Users,
    title: "Live Sessions, Small Cohort",
    description:
      "24 hours of live instruction with real-time Q&A. Maximum 15 students per batch so every question gets answered.",
  },
  {
    icon: Shield,
    title: "Production Skills, Not Just AI Skills",
    description:
      "Most AI courses stop at \"it works on my laptop.\" This course goes further - containerisation, deployment, observability, and cost management. The skills that turn a working prototype into a production system.",
  },
];

const projects = [
  {
    title: "Portfolio Piece 1 - RAG System",
    description:
      "A deployed AI system that reads your documents and answers questions from them accurately - without hallucinating. Built on the same Retrieval-Augmented Generation architecture used by enterprise AI teams. Deployed at a public URL by Week 4.",
  },
  {
    title: "Portfolio Piece 2 - Production AI Agent",
    description:
      "A deployed AI agent that reasons across multiple steps, uses real tools to take actions, and operates reliably in production. Wrapped as a REST API, containerised with Docker, deployed to the cloud. Live by the end of Week 6.",
  },
];

const curriculum = [
  {
    week: 1,
    title: "How LLMs Actually Work",
    description:
      "Before you build with LLMs, you understand them. How they process language, what controls their behaviour, and how to make them do exactly what you need.",
  },
  {
    week: 2,
    title: "APIs, Prompt Engineering, and Structured Outputs",
    description:
      "The engineering discipline of working with AI APIs reliably. Structured outputs, evaluation, and the prompt engineering practices that separate engineers from casual users.",
  },
  {
    week: 3,
    title: "Memory: Embeddings and Vector Databases",
    description:
      "How AI systems store and retrieve knowledge beyond their context window. Hands-on with industry vector databases used in production systems.",
  },
  {
    week: 4,
    title: "RAG: Knowledge Grounding Without Hallucination",
    description:
      "Build a complete Retrieval-Augmented Generation pipeline. Understand why naive RAG fails and how to build one that does not. Portfolio Piece 1 goes live this week.",
  },
  {
    week: 5,
    title: "Agents From First Principles",
    description:
      "Build a working AI agent from scratch - no frameworks. Understand the reasoning loop, tool calling, and memory architecture before any abstraction hides it from you.",
  },
  {
    week: 6,
    title: "Frameworks, Production, and Deployment",
    description:
      "LangChain, LangGraph, FastAPI, Docker, cloud deployment, and observability. Take your agent from working to production-ready. Portfolio Piece 2 goes live this week.",
  },
];

const whoForYes = [
  "You have used AI tools but want to understand how they work and build with them at an engineering level",
  "You want two deployed AI projects you can demo and explain in interviews or to clients",
  "You are moving into an AI engineering role and need to get up to speed fast",
  "You want to build your own AI product and need the production skills to take it live",
];

const whoForNo = [
  "You have no coding experience - start with AI-Ready Engineer instead",
  "You are looking for a no-code AI course",
  "You want certification without building something real",
];

const prerequisites = [
  "Python basics - you can read and write simple Python code",
  "At least 1-2 years of professional experience writing code in any language or domain",
  "A laptop with a stable internet connection",
  "Curiosity about how AI systems actually work",
];

const faqs = [
  {
    q: "Do I need machine learning or AI experience to start?",
    a: "No prior AI or ML experience needed. The course starts from LLM fundamentals and builds up from there. You need Python basics and professional coding experience - the AI knowledge is what the course provides.",
  },
  {
    q: "What Python level do I need?",
    a: "You should be comfortable reading and writing simple Python - variables, functions, loops, and basic data structures. You do not need to be a Python expert. If you can follow a Python script and understand roughly what it does, you are ready.",
  },
  {
    q: "How much time per week does this require?",
    a: "Approximately 8 hours per week - 4 hours of live sessions and 4 hours of project work. The project hours are structured with clear deliverables so you are not staring at a blank screen wondering what to do.",
  },
  {
    q: "Are sessions recorded?",
    a: "Sessions are live only. Live interaction - questions, debugging in real time, seeing how an experienced engineer thinks through problems - is a core part of the learning. If a session is missed, please inform us in advance and we will share a summary and help you catch up.",
  },
  {
    q: "What tools and platforms will I use?",
    a: "You will work with industry-standard tools throughout the course. We will send the complete tool list and setup instructions after enrollment. Most tools have free tiers sufficient for the coursework - we will guide you through managing costs so there are no surprises.",
  },
  {
    q: "What will I have at the end of the course?",
    a: "Two deployed AI projects at real public URLs - a RAG system and a production AI agent. Both are yours to keep, extend, and demonstrate. You will also have a genuine understanding of how each system works at every level, which means you can explain and defend every design decision in an interview or to a client.",
  },
  {
    q: "What comes after this course?",
    a: "This course takes you to Level 3 of the GradTensor AI learning journey - a complete, production-ready single AI agent. The next level - multi-agent systems with orchestration - is a separate advanced course coming soon. If you are a senior professional looking to advise organisations on AI transformation, the AI Transformation Partner course may also be relevant.",
  },
  {
    q: "How do I enroll?",
    a: "Click the Enroll Now button above. For questions before enrolling, WhatsApp us at +91 91080 30542 - we are happy to help you decide if this course is the right fit for where you are right now.",
  },
];

const engBatches = getBatchesForCourse("ai-engineering-agentic-foundations");

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
        description="From LLM fundamentals to production-ready AI agents in 6 weeks. Build and deploy a RAG system and an AI agent. Live classes for engineers and professionals."
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
              From LLM fundamentals to production-ready AI agents - in 6 weeks.
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Build two real AI systems that you can deploy, demo, and explain at any level of depth. Not tutorials. Not theory. Production-quality engineering.
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
                <Rocket size={18} className="text-primary" /> 2 Deployed Projects
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            {projects.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {i === 0 ? <Wrench size={20} /> : <BrainCircuit size={20} />}
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-muted-foreground">
            Both projects are yours to keep, extend, and show to anyone.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            6-Week Learning Journey
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {curriculum.map((w) => (
              <div
                key={w.week}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                  {w.week}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {w.description}
                  </p>
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
          <div className="mx-auto max-w-2xl">
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              This course is designed for working software engineers and developers with at least 1-2 years of experience writing code professionally - in any domain. Web development, mobile, backend, enterprise, startup - the domain does not matter. What matters is that you are comfortable writing and reading code.
            </p>

            <h3 className="mb-4 font-display text-lg font-semibold">
              This is for you if:
            </h3>
            <div className="mb-8 space-y-3">
              {whoForYes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-primary"
                  />
                  <p className="text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-4 font-display text-lg font-semibold">
              This is not for you if:
            </h3>
            <div className="mb-8 space-y-3">
              {whoForNo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <XCircle
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-destructive"
                  />
                  <p className="text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>

            <h3 className="mb-4 font-display text-lg font-semibold">
              Prerequisites
            </h3>
            <div className="space-y-3">
              {prerequisites.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-primary"
                  />
                  <p className="text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
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
