import { useState, useRef } from "react";
import coverImage from "@/assets/teen-ai-builders-cover.png";
import LandingNavbar from "@/components/LandingNavbar";
import StickyCTA from "@/components/StickyCTA";
import RegisterDialog from "@/components/RegisterDialog";
import SEO from "@/components/SEO";
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
  Sparkles,
  Code2,
  Lightbulb,
  Users,
  Trophy,
  Calendar,
  Timer,
  ArrowRight,
} from "lucide-react";

const COURSE_TITLE = "Teen AI Builders";

const benefits = [
  {
    icon: Sparkles,
    title: "No Coding Needed",
    description: "Start from scratch - we teach you everything",
  },
  {
    icon: Video,
    title: "Live Classes",
    description: "Real instructors, not just videos",
  },
  {
    icon: Rocket,
    title: "Build Real Projects",
    description: "Launch an AI app you can show off",
  },
  {
    icon: Trophy,
    title: "Certificate",
    description: "Earn a credential for your portfolio",
  },
];

const projects = [
  {
    icon: Lightbulb,
    title: "AI Chatbot",
    description: "Build a smart chatbot that answers questions on any topic you choose",
  },
  {
    icon: Code2,
    title: "AI-Powered App",
    description: "Create an app that uses AI to solve a real problem you care about",
  },
  {
    icon: Users,
    title: "Team Project",
    description: "Collaborate with peers to build and present a creative AI solution",
  },
];

const curriculum = [
  { week: "Week 1", title: "What is AI? - Explore, Play, Understand", description: "Hands-on with ChatGPT, image generators, and real AI tools" },
  { week: "Week 2", title: "Prompt Engineering - Talk to AI Like a Pro", description: "Master the skill of getting AI to do exactly what you want" },
  { week: "Week 3", title: "Build Your First AI App", description: "Go from idea to a working AI project - no prior coding needed" },
  { week: "Week 4", title: "Demo Day - Show the World", description: "Present your project, get feedback, and celebrate" },
];

const faqs = [
  {
    q: "Does my teen need any coding experience?",
    a: "Not at all! This course is designed for complete beginners. We start from the basics and build up, so no prior coding or AI knowledge is needed.",
  },
  {
    q: "What age group is this for?",
    a: "This course is designed for students in grades 8-12 (ages 13-18). The content is engaging for teens while being substantive enough to build real skills.",
  },
  {
    q: "How are the live classes conducted?",
    a: "Classes are held live over Zoom with small batch sizes for personalized attention. Each session is 3 hours with breaks, and recordings are available if a session is missed.",
  },
  {
    q: "What will my teen have at the end of the course?",
    a: "A working AI project they built themselves, a certificate of completion, and real skills in AI and prompt engineering that will give them a head start in any career path.",
  },
];

const teenBatches = getBatchesForCourse("teen-ai-builders");

const TeenAIBuildersLanding = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [registerBatch, setRegisterBatch] = useState("");
  const heroRef = useRef<HTMLElement>(null);

  const openRegister = () => setRegisterOpen(true);

  const openRegisterWithBatch = (batchLabel: string, startDate: string) => {
    setRegisterBatch(`${batchLabel} - ${startDate}`);
    setRegisterOpen(true);
  };

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: COURSE_TITLE,
    description:
      "Build your first AI app - no coding experience needed. A 4-week live course for high-school students.",
    provider: {
      "@type": "Organization",
      name: "GradTensor",
      url: "https://gradtensor.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Blended",
      duration: "4 weeks",
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
        title="Teen AI Builders - Live AI Course for Teens"
        description="Build your first AI app in 4 weeks. No coding experience needed. Live classes, real projects, and a certificate. For grades 8-12."
        path="/teen-ai-builders"
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
              Live Course - Next Batch Starting Soon
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text">Teen AI</span>{" "}
              <span className="text-foreground">Builders</span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Build your first AI app - no coding experience needed.
              <br className="hidden sm:block" />A fun, hands-on course
              designed for teens who want to create, not just consume.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap gap-6 text-base">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock size={18} className="text-primary" /> 4 Weeks
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Video size={18} className="text-primary" /> 12 Live Hours
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Rocket size={18} className="text-primary" /> 3+ Projects
              </span>
            </div>

            <Button
              onClick={openRegister}
              size="lg"
              className="btn-shimmer mt-8 rounded-lg bg-primary px-10 py-4 font-display text-lg font-semibold tracking-wider text-primary-foreground"
            >
              Enroll Now
            </Button>
          </div>

          {/* Cover image */}
          <div className="hidden md:block">
            <img
              src={coverImage}
              alt="Teen AI Builders"
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
            Why Teens Love This Course
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
          <div className="grid gap-6 sm:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <p.icon size={20} />
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
        </div>
      </section>

      {/* Curriculum Snapshot */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            4-Week Curriculum
          </h2>
          <div className="mx-auto max-w-2xl space-y-4">
            {curriculum.map((c, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      {teenBatches.length > 0 && (
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="section-container">
            <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Upcoming Batches
            </h2>
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              {teenBatches.map((batch) => (
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

      {/* CTA Banner */}
      <section className="py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            Give your teen a head start in the AI era. Limited spots per batch.
          </p>
          <Button
            onClick={openRegister}
            size="lg"
            className="btn-shimmer mt-8 rounded-lg bg-primary px-10 py-4 font-display text-lg font-semibold tracking-wider text-primary-foreground"
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
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
        onClick={openRegister}
        heroRef={heroRef}
      />

      {/* Registration Dialog */}
      <RegisterDialog
        open={registerOpen}
        onOpenChange={setRegisterOpen}
        courseTitle={COURSE_TITLE}
        defaultBatch={registerBatch}
      />
    </div>
  );
};

export default TeenAIBuildersLanding;
