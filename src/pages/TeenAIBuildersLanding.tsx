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
  Calendar,
  Timer,
  ArrowRight,
  Cpu,
  Globe,
  MessageSquare,
  Presentation,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const COURSE_TITLE = "Teen AI Builders";

const learnCards = [
  {
    icon: Cpu,
    title: "How AI Assistants Actually Work",
    description:
      "Tokens, context, why AI sometimes gets things wrong - explained in plain language, not jargon.",
  },
  {
    icon: Globe,
    title: "Build and Deploy a Real Web App",
    description:
      "Write code that talks to an AI model, then wrap it in a web interface anyone can use.",
  },
  {
    icon: MessageSquare,
    title: "Design AI Behaviour Through Prompts",
    description:
      "Control how an AI thinks, speaks and behaves - the skill behind every real AI product ever built.",
  },
  {
    icon: Presentation,
    title: "Present and Defend a Technical Project",
    description:
      "Demo their project, explain every decision, answer questions. The skill that serves them in college interviews and beyond.",
  },
];

const comparisonRows = [
  {
    aspect: "Personality",
    chatgpt: "Generic, resets every chat",
    yours: "Designed by them, consistent always",
  },
  {
    aspect: "Memory",
    chatgpt: "Forgets when the tab closes",
    yours: "Remembers name, level and history across sessions",
  },
  {
    aspect: "Purpose",
    chatgpt: "Does everything averagely",
    yours: "Genuinely good at one specific thing they chose",
  },
  {
    aspect: "Ownership",
    chatgpt: "Anyone's chatbot",
    yours: "Their AI, their name for it, their link, their design",
  },
];

const curriculum = [
  {
    week: "Week 1",
    title: "Understand & Set Up",
    sessions: [
      {
        title: "How AI Assistants Actually Work",
        description:
          "Understand what is really happening when you talk to an AI - and where this course sits on the AI landscape.",
      },
      {
        title: "Your First AI Program",
        description:
          "Write real code that talks directly to an AI model. No prior experience needed.",
      },
    ],
  },
  {
    week: "Week 2",
    title: "Personality & Memory",
    sessions: [
      {
        title: "Give Your Assistant a Personality",
        description:
          "Design who your AI is - its name, how it speaks, and what makes it distinctly yours.",
      },
      {
        title: "Make It Remember",
        description:
          "Build an assistant that remembers across sessions - the feature that separates what you build from any free AI tool.",
      },
    ],
  },
  {
    week: "Week 3",
    title: "Purpose & Interface",
    sessions: [
      {
        title: "Give It a Teaching Method",
        description:
          "Move from personality to purpose - your AI now has a structured way of being genuinely useful.",
      },
      {
        title: "Make It Real",
        description:
          "Move out of the code editor into a proper web app with a shareable link. Anyone can use it from their phone.",
      },
    ],
  },
  {
    week: "Week 4",
    title: "Refine & Showcase",
    sessions: [
      {
        title: "Make It Yours",
        description:
          "Polish, extend, personalise. One more round of deliberate improvement - this is where good becomes great.",
      },
      {
        title: "Showcase",
        description:
          "Present your assistant to a real audience. Demo it, explain it, defend every decision. Leave knowing what to build next.",
      },
    ],
  },
];

const outcomes = [
  {
    number: "01",
    title: "A Personalised AI Assistant at a Public URL",
    description:
      "Built, deployed, and working. Friends and family can open the link right now and use it. Ready to demo to anyone at any time.",
  },
  {
    number: "02",
    title: "Cross-Session Memory",
    description:
      "An AI that remembers users across conversations - something no free AI tool does out of the box. A genuine technical differentiator.",
  },
  {
    number: "03",
    title: "The Ability to Explain What You Built",
    description:
      "From a 30-second demo to a 10-minute walkthrough of every technical decision. This is what stands out in college interviews and competitions.",
  },
  {
    number: "04",
    title: "A Foundation to Keep Building",
    description:
      "The same codebase can be extended into anything. Students leave knowing how to keep going - and what to build next.",
  },
];

const isFor = [
  "You are aged 13-18",
  "You are curious about how AI actually works",
  "You want to build something real, not watch videos",
  "You are willing to put in 8 hours across 4 weeks",
  "You have no coding experience - or some",
];

const notFor = [
  "You want a passive video course at 2x speed",
  "You want a certificate without doing real work",
  "You are not comfortable with basic computer use",
  "You expect to use a phone instead of a laptop",
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
    q: "Is this course only for teens?",
    a: "The course is designed for ages 13 and above. While the curriculum and pace are optimized for school students, adults who are complete beginners to AI and coding are welcome to join. The content is the same regardless of age.",
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
    a: "We use Google Colab for all coding - it runs entirely in the browser, nothing to install, and works on any laptop including school Chromebooks. Your teen will also need an AI API key with $5 in credits - this requires a credit/debit card, so a parent's help will be needed. The instructor will walk through the setup during the course and give time to complete it before the next session. Nothing needs to be set up before day one - just show up with a laptop and a Google account.",
  },
  {
    q: "Is there any cost for the tools used in the course?",
    a: "Google Colab is free. Students will need to purchase a minimum of $5 (approx. Rs. 460, subject to exchange rate) in AI API credits for the exercises. This is a one-time purchase that covers the entire course (this amount is paid directly to the AI platform and does not go to GradTensor). We will guide students step by step on how to set this up and monitor their usage.",
  },
  {
    q: "How are the live classes conducted?",
    a: "All sessions are live on Google Meet in small batches with limited students, so every student gets individual attention. Each session is 1 hour, twice a week for 4 weeks.",
  },
  {
    q: "What will my teen have at the end of the course?",
    a: "A working AI assistant with a real web interface - something friends and family can actually use. They will understand basics of how modern AI systems work, know how to build with AI tools, and have a clear picture of where to go next if they want to keep learning.",
  },
  {
    q: "What if my teen gets stuck during a session?",
    a: "Batch sizes are kept small so every student gets individual attention. The instructor will address questions in real time during every session. Students also get access to a WhatsApp group for the batch where they can ask questions between sessions and get help from both the instructor and fellow students.",
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
    document
      .getElementById("upcoming-batches")
      ?.scrollIntoView({ behavior: "smooth" });
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
      <section ref={heroRef} className="pt-16">
        <div className="section-container py-10 md:py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-display text-sm font-medium text-primary">
                Live Course - Next Batch Starting Soon
              </span>

              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="gradient-text">Teen AI</span>{" "}
                <span className="text-foreground">Builders</span>
              </h1>

              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Your child will build their own personalised AI assistant - with
                a public web link, a personality they design, and a memory that
                works across conversations. In 4 weeks. No coding experience
                needed.
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
                  <Rocket size={18} className="text-primary" /> 1 Deployed AI
                  App
                </span>
              </div>

              {/* Pricing */}
              <div className="mt-8">
                <p className="font-display text-2xl font-bold text-foreground">
                  Rs. 2,999
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  + $5 (approx. Rs. 460, subject to exchange rate) for AI API
                  credits used during exercises
                </p>
              </div>

              <Button
                onClick={scrollToBatches}
                size="lg"
                className="btn-shimmer mt-6 rounded-lg bg-primary px-10 py-4 font-display text-lg font-semibold tracking-wider text-primary-foreground"
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

      {/* What You'll Build */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <h2 className="mb-4 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            What You'll Build
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            Every student builds their own personalised AI assistant - something
            with a name they choose, a personality they design, and a memory
            that persists across sessions. It lives at a web link anyone can
            open on their phone. This is not a tutorial project you throw away.
            It is something they own, can extend, and can demo to anyone.
          </p>

          {/* Comparison table */}
          <h3 className="mb-6 text-center font-display text-lg font-semibold">
            How Is This Different from Just Using ChatGPT?
          </h3>
          <div className="mx-auto max-w-3xl overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b border-border p-3 text-left font-display font-semibold text-muted-foreground">
                    &nbsp;
                  </th>
                  <th className="border-b border-border p-3 text-left font-display font-semibold text-muted-foreground">
                    ChatGPT
                  </th>
                  <th className="border-b border-border bg-primary/10 p-3 text-left font-display font-semibold text-primary">
                    What Your Child Builds
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.aspect}>
                    <td className="border-b border-border/50 p-3 font-display font-medium text-foreground">
                      {row.aspect}
                    </td>
                    <td className="border-b border-border/50 p-3 text-muted-foreground">
                      {row.chatgpt}
                    </td>
                    <td className="border-b border-border/50 bg-primary/5 p-3 text-foreground">
                      {row.yours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            What You'll Learn
          </h2>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {learnCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <card.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 8-Session Journey */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <h2 className="mb-4 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            The 8-Session Journey
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base text-muted-foreground">
            4 weeks. 8 live sessions. Each session builds directly on the last.
            By Session 6, students have a working app at a public link. Sessions
            7 and 8 are about making it genuinely good and presenting it with
            confidence.
          </p>
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

      {/* What You Leave With */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="mb-4 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            What You Leave With
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base text-muted-foreground">
            Four concrete things - not a certificate with nothing behind it.
          </p>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {outcomes.map((o) => (
              <div
                key={o.number}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-display text-3xl font-bold text-primary/30">
                  {o.number}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {o.description}
                </p>
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
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-green-600 dark:text-green-400">
                This program IS for you if...
              </h3>
              <ul className="space-y-3">
                {isFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-orange-600 dark:text-orange-400">
                This program is NOT for you if...
              </h3>
              <ul className="space-y-3">
                {notFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <XCircle
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-orange-600 dark:text-orange-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      {teenBatches.length > 0 && (
        <section id="upcoming-batches" className="py-16 md:py-20">
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
