import { useRef } from "react";
import LandingNavbar from "@/components/LandingNavbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  Code,
  Cpu,
  Globe,
  Paintbrush,
  Presentation,
  ArrowRight,
  Award,
  Users,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";

const COURSE_TITLE = "Teen AI Builders";

const skillCards = [
  {
    icon: Paintbrush,
    title: "HTML and CSS",
    description:
      "Build and style a web page from scratch. Layout, colour variables, and responsive design.",
  },
  {
    icon: Code,
    title: "JavaScript",
    description:
      "Write code that responds to user actions, creates elements dynamically, and handles logic.",
  },
  {
    icon: Cpu,
    title: "AI API Integration",
    description:
      "Connect to a live AI model, send prompts, handle responses, and build fallbacks for reliability.",
  },
  {
    icon: Globe,
    title: "Deployment",
    description:
      "Publish a working application to the internet. Every student leaves with a live URL they own.",
  },
];

const curriculum = [
  {
    weeks: "Weeks 1-3",
    title: "AI Literacy and the Visual Shell",
    description:
      "Students discover how Generative AI and language models actually work. They build their first web page using HTML and CSS, personalise it with their own colours, fonts, and game title, and see changes appear live in the browser. No prior experience needed.",
  },
  {
    weeks: "Weeks 4-6",
    title: "Building the Game Engine with AI",
    description:
      "Students write structured prompts and use an AI coding assistant to generate JavaScript step by step. They read the code, understand it, and integrate it. By Week 6 the game is fully playable with working puzzles and instant feedback.",
  },
  {
    weeks: "Weeks 7-9",
    title: "Going Live with AI",
    description:
      "Students make their first live call to an AI language model API. The game now generates a different puzzle question every time it is played. Students learn prompt engineering, handle errors, and see real AI in action inside code they wrote themselves.",
  },
  {
    weeks: "Weeks 10-11",
    title: "Polish, Deploy, and Extend",
    description:
      "Students publish their application to the internet and get a live URL they can share with anyone. They add visual polish, fix bugs, and independently extend the game with their own ideas.",
  },
  {
    weeks: "Week 12",
    title: "Showcase and Certification",
    description:
      "Each student presents their live AI-powered application to the class. They explain what they built, how AI helped them build it, and what they would build next. Students receive the GradTensor AI Builder Certificate.",
  },
];

const programmeDetails = [
  { label: "Duration", value: "12 weeks", sublabel: "90 minutes per week, one dedicated slot in the timetable" },
  { label: "No prerequisites", value: "", sublabel: "No prior coding or AI experience required" },
  { label: "Batch size", value: "", sublabel: "Minimum 20 students per batch" },
  { label: "Delivery", value: "", sublabel: "Conducted at your school, online or in-person" },
  { label: "Grades", value: "8 to 12", sublabel: "Any curriculum board, ages 12 to 17" },
  { label: "Certification", value: "", sublabel: "GradTensor AI Builder Certificate on completion" },
];

const faqs = [
  {
    q: "Do students need any prior coding or AI experience?",
    a: "None at all. The programme starts from scratch. Students learn HTML, CSS, JavaScript, and AI API integration as part of the curriculum. Every concept is introduced when it is needed.",
  },
  {
    q: "What do students build?",
    a: "A fully deployed AI-powered escape room game that runs live on the internet at a URL they can share with anyone. An AI model generates a different puzzle every time the game is played. Students write every line of code, understand it, and deploy it themselves.",
  },
  {
    q: "What age group is this for?",
    a: "Grades 8 to 12, any curriculum board. The programme is designed for students aged 12 to 17.",
  },
  {
    q: "How does the programme fit into the school timetable?",
    a: "The programme requires one 90-minute slot per week for 12 weeks. It can be customised to your school calendar and schedule. We offer both online and in-person delivery.",
  },
  {
    q: "What is the minimum batch size?",
    a: "Minimum 20 students per batch. For larger cohorts, we can run multiple parallel batches.",
  },
  {
    q: "What certification do students receive?",
    a: "Students who successfully complete the programme and present their project in Week 12 receive the GradTensor AI Builder Certificate.",
  },
  {
    q: "What equipment do students need?",
    a: "A laptop or desktop computer with a modern browser (Chrome recommended) and a stable internet connection. No software installation is required - all coding happens in the browser.",
  },
  {
    q: "Can the programme be customised?",
    a: "Yes. The programme is customisable to your school calendar and schedule. We offer a free 30-minute discovery call to discuss how it fits your school.",
  },
];

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: COURSE_TITLE,
  description:
    "Hands-on AI development programme for Grades 8 to 12. Students build a fully deployed AI-powered web application over 12 weeks.",
  provider: {
    "@type": "Organization",
    name: "GradTensor",
    url: "https://gradtensor.com",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Blended",
    duration: "12 weeks",
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

const TeenAIBuildersLanding = () => {
  const heroRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    document
      .getElementById("get-in-touch")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Teen AI Builders - School Programme | GradTensor"
        description="Hands-on AI development for Grades 8 to 12. Students build a fully deployed AI-powered web application over 12 weeks. Bring Teen AI Builders to your school."
        path="/teen-ai-builders"
        jsonLd={[courseLd, faqLd]}
      />
      <LandingNavbar />

      {/* Hero */}
      <section ref={heroRef} className="pt-16">
        <div className="section-container py-10 md:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-display text-sm font-medium text-emerald-600 dark:text-emerald-400">
              School Programme
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="gradient-text">Teen AI</span>{" "}
              <span className="text-foreground">Builders</span>
            </h1>

            <p className="mt-2 font-display text-lg font-medium text-muted-foreground sm:text-xl">
              Hands-on AI Development for Grades 8 to 12
            </p>

            <p className="mt-2 text-base italic text-muted-foreground/80">
              Build. Deploy. Earn the GradTensor AI Builder Certificate.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center rounded-xl border border-border bg-card/50 px-6 py-4">
                <span className="font-display text-2xl font-bold text-foreground">12</span>
                <span className="text-xs text-muted-foreground">Weeks</span>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border bg-card/50 px-6 py-4">
                <span className="font-display text-2xl font-bold text-foreground">90 min</span>
                <span className="text-xs text-muted-foreground">Per week</span>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-border bg-card/50 px-6 py-4">
                <span className="font-display text-2xl font-bold text-foreground">Gr. 8-12</span>
                <span className="text-xs text-muted-foreground">Age group</span>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 font-display text-lg font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
            >
              Bring to Your School
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* What Students Build */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <h2 className="mb-4 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            What Students Build and Learn
          </h2>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Students build a fully deployed AI-powered web application from
              scratch over the course of the programme. The application is an
              escape room game that runs live on the internet at a URL they can
              share with anyone. An AI model generates a different puzzle every
              time it is played. Students write every line of code, understand
              it, and deploy it themselves.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <h3 className="font-display text-base font-semibold text-foreground">
                  a) Build an AI-powered web application
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Students learn HTML, CSS, JavaScript, and live AI API
                  integration to build a complete working application that runs
                  in any browser.
                </p>
              </div>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <h3 className="font-display text-base font-semibold text-foreground">
                  b) Use AI as a development tool
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Students use an AI coding assistant to generate code step by
                  step, read it, verify it, and integrate it. A practical
                  introduction to AI-assisted software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Students Develop */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Skills Students Develop
          </h2>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {skillCards.map((card) => (
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

      {/* Course Overview */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <h2 className="mb-4 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Course Overview
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base text-muted-foreground">
            12 weeks. 90 minutes per week. Each phase builds directly on the last.
          </p>
          <div className="mx-auto max-w-2xl space-y-4">
            {curriculum.map((phase, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 md:p-6"
              >
                <div className="flex h-16 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
                  {phase.weeks}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">
                    {phase.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Structure */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Programme Structure
          </h2>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {programmeDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {detail.label}
                    {detail.value && (
                      <span className="ml-2 text-primary">{detail.value}</span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {detail.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GradTensor */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Why GradTensor
          </h2>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              GradTensor equips students with real-world AI coding skills that
              put them ahead of the curve. Every student leaves with a live
              deployed application, a personal URL they own, and the GradTensor
              AI Builder Certificate.
            </p>
          </div>
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

      {/* Get in Touch */}
      <section id="get-in-touch" className="py-16 md:py-20 bg-muted/30">
        <div className="section-container">
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card/80 to-card/50 p-8 md:p-10 text-center">
            <h2 className="mb-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to bring Teen AI Builders to your school?
            </h2>
            <p className="mb-8 text-base text-muted-foreground">
              We offer a free 30-minute discovery call for school coordinators
              and principals. Programme is customisable to your school calendar
              and schedule.
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

export default TeenAIBuildersLanding;
