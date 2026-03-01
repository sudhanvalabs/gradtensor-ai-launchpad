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
  {
    week: "Week 1",
    title: "Understand and Set Up",
    sessions: [
      { title: "The World of Conversational AI", description: "Understand how AI assistants actually work - and how they are different from the bots that existed before. See the full landscape of AI systems from simple conversational apps to autonomous AI agents. Leave knowing exactly where you are starting and where the ladder goes." },
      { title: "Your First AI Program", description: "Write your first program that talks directly to an AI - no ChatGPT, no apps, just you and the AI communicating through code. No prior coding experience needed." },
    ],
  },
  {
    week: "Week 2",
    title: "Personality and Memory",
    sessions: [
      { title: "Give Your AI a Personality", description: "Learn to control how your AI thinks, speaks, and behaves. Every student's AI assistant becomes unique here." },
      { title: "Make It Remember", description: "Build an AI assistant that remembers the conversation - just like ChatGPT does. Understand why this is harder than it sounds and what it means for AI systems." },
    ],
  },
  {
    week: "Week 3",
    title: "Purpose and Interface",
    sessions: [
      { title: "Give Your AI a Job", description: "Turn your AI assistant from a fun experiment into something genuinely useful. A study helper, a quiz bot, a recommendation engine - your choice." },
      { title: "Make It Real", description: "Transform your AI into a real app that anyone can use - no coding knowledge required on their end." },
    ],
  },
  {
    week: "Week 4",
    title: "Refine and Showcase",
    sessions: [
      { title: "Make It Yours", description: "Improve, extend, and personalise. This is where your AI becomes something you are genuinely proud of." },
      { title: "Showcase", description: "Present your AI to a real audience. Celebrate what you built. Understand where the journey goes next." },
    ],
  },
];

const faqs = [
  {
    q: "Does my teen need any coding experience?",
    a: "None at all. This course is designed for complete beginners. You will learn to use AI tools to generate and understand code - which is how modern developers actually work. No prior coding or AI knowledge needed before day one.",
  },
  {
    q: "What age group is this for?",
    a: "Primarily designed for school students ages 13 and above. The course is hands-on and project-based - engaging for teens while building real, practical skills.",
  },
  {
    q: "What does my teen need before the course starts?",
    a: "Just three things: a laptop or desktop computer (see the next question for specifications), a stable internet connection, and a Google account (Gmail). No software installation needed. No prior setup required. Everything else is handled in the first session.",
  },
  {
    q: "What kind of laptop does my teen need?",
    a: "Any laptop or desktop bought in the last 5-6 years will work. Requirements: Windows 10 or above, macOS, or ChromeOS (Chromebooks work fine), 4GB RAM minimum (8GB recommended), Google Chrome (latest version), and a stable broadband connection of at least 5 Mbps. A tablet or phone is not sufficient - a laptop or desktop is required for the coding sessions. If you are unsure whether your device qualifies, WhatsApp us and we will confirm before you enroll.",
  },
  {
    q: "What tools and accounts will my teen need to set up?",
    a: "We use Google Colab for all coding - it runs entirely in the browser, nothing to install, and works on any laptop including school Chromebooks. Your teen will also need to create a free API key to connect to an AI service. We walk through both setups step by step in the first session. Nothing needs to be set up before day one - just show up with a laptop and a Google account.",
  },
  {
    q: "Is there any cost for the tools used in the course?",
    a: "Google Colab is free. The AI API key comes with a free usage tier that is more than sufficient for the entire course - most students will not need to pay anything. If usage does exceed the free tier, the cost is minimal (typically less than Rs. 100 for the full course). We will guide students on how to monitor their usage so there are no surprises.",
  },
  {
    q: "How are the live classes conducted?",
    a: "All sessions are live on Google Meet in small batches of maximum 20 students, so every student gets individual attention. Each session is 1 hour, twice a week for 4 weeks. If a session is missed, please inform us in advance and we will help you catch up.",
  },
  {
    q: "What will my teen have at the end of the course?",
    a: "A working AI assistant with a real web interface - something friends and family can actually use. They will understand how modern AI systems work, know how to build with AI tools, and have a clear picture of where to go next if they want to keep learning.",
  },
  {
    q: "What if my teen gets stuck during a session?",
    a: "The batch size is capped at 20 students so every student gets individual attention. The instructor will address questions in real time during every session. Students also get access to a WhatsApp group for the batch where they can ask questions between sessions and get help from both the instructor and fellow students.",
  },
  {
    q: "What if my teen misses a session?",
    a: "Sessions are live only - we do not provide recordings, as the live interaction is a core part of the learning experience. If a session must be missed, please inform us at least a few hours in advance. We will share a summary of what was covered and help your teen catch up before the next session. Missing more than two sessions is not recommended as each session builds on the previous one.",
  },
  {
    q: "Is this course only for teens interested in a tech career?",
    a: "Not at all. Understanding how AI works and being able to build with it is a useful skill regardless of what your teen wants to do in life - medicine, law, business, arts, or anything else. AI is becoming part of every field. This course gives teens a practical, hands-on understanding of it at an age when that knowledge compounds the most.",
  },
  {
    q: "How is this different from other coding courses for kids?",
    a: "Most coding courses for kids teach programming syntax - loops, variables, functions. This course teaches students to build real AI products using AI tools themselves. The skill is not memorising Python - it is knowing how to direct AI to build something, understand what it built, and extend it. That is a more relevant and immediately useful skill for this generation.",
  },
  {
    q: "What comes after this course?",
    a: "Teen AI Builders is Level 1 of the GradTensor learning journey. Students who want to go further can move to AI-Ready Engineer - where they build a more sophisticated AI system that can read documents and answer questions from it. The ladder is clear and each course builds directly on the previous one.",
  },
  {
    q: "How do I enroll?",
    a: "Click the Enroll Now button for your preferred batch. For any questions before enrolling, WhatsApp us at +91 91080 30542 - we are happy to help you decide if this course is the right fit for your teen.",
  },
];

const teenBatches = getBatchesForCourse("teen-ai-builders");

const TeenAIBuildersLanding = () => {
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
        description="Build your first AI app in 8 live sessions. No coding experience needed. Live classes, real projects, and a certificate. For ages 13 and above."
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
                <Video size={18} className="text-primary" /> 8 Live Sessions
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Rocket size={18} className="text-primary" /> 1 Deployed AI App
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
            The 8-Session Journey
          </h2>
          <div className="mx-auto max-w-2xl space-y-8">
            {curriculum.map((week, wi) => (
              <div key={wi}>
                <h3 className="mb-3 font-display text-lg font-semibold text-primary">
                  {week.week} - {week.title}
                </h3>
                <div className="space-y-3">
                  {week.sessions.map((s, si) => (
                    <div
                      key={si}
                      className="flex gap-4 rounded-xl border border-border bg-card p-5"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                        {wi * 2 + si + 1}
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold">
                          {s.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      {teenBatches.length > 0 && (
        <section id="upcoming-batches" className="py-16 md:py-20 bg-muted/30">
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
        onClick={scrollToBatches}
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
