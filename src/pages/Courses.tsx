import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Clock, BookOpen, Users, CheckCircle2 } from "lucide-react";

const courses = [
  {
    id: "skill",
    badge: "SKILL-BASED",
    badgeClass: "badge-skill",
    title: "AI Engineering & Agentic Foundations",
    tagline: "Build production-ready AI agents in 6 weeks",
    duration: "6 weeks",
    hours: "24 live hours + 24 project hours",
    price: "₹21,000 – ₹25,000",
    earlyBird: "₹18,500",
    idealFor: "Final-year CS students, 3–6 months from placements",
    weeks: [
      "Week 1: How LLMs Actually Work",
      "Week 2: APIs & Embeddings",
      "Week 3: Prompt Engineering as a Discipline",
      "Week 4: Building RAG Pipelines",
      "Week 5: Agents from First Principles",
      "Week 6: Agent Frameworks (LangGraph) & Production",
    ],
    projects: [
      "RAG chatbot with custom knowledge base (deployed)",
      "AI agent with tool orchestration (deployed)",
    ],
    whoFor: [
      "Final-year students who need an AI edge in campus interviews",
      "Engineers who want to add agentic AI skills quickly",
      "Anyone who needs to build and demo AI systems fast",
    ],
    ctaPrimary: "Enroll in Next Cohort",
    ctaSecondary: "Download Syllabus",
  },
  {
    id: "cohort",
    badge: "COHORT-BASED",
    badgeClass: "badge-cohort",
    title: "AI Foundations — Job Ready in 16 Weeks",
    tagline: "From Python basics to deployed AI systems",
    duration: "16 weeks",
    hours: "64 live hours + 96 project hours",
    price: "₹45,000 – ₹65,000",
    earlyBird: null,
    idealFor: "Students with 6+ months runway, career switchers, professionals upskilling",
    weeks: [
      "Phase 1 (Weeks 1–4): Python, ML basics, neural networks from scratch",
      "Phase 2 (Weeks 5–10): LLMs, RAG, AI agents, prompt engineering, fine-tuning",
      "Phase 3 (Weeks 11–14): APIs, deployment, Docker, capstone project",
      "Phase 4 (Weeks 15–16): Portfolio polish, resume prep, mock interviews",
    ],
    projects: [
      "Neural network built from scratch (NumPy only)",
      "RAG system for document Q&A",
      "AI agent with real integrations",
      "End-to-end capstone project with real users",
    ],
    whoFor: [
      "Second/third-year students planning ahead",
      "Working professionals switching to AI careers",
      "Anyone who wants deep foundations, not just surface skills",
    ],
    ctaPrimary: "Apply for Next Cohort",
    ctaSecondary: "Download Full Curriculum",
  },
];

const comparisonRows = [
  { label: "Duration", skill: "6 weeks", cohort: "16 weeks" },
  { label: "Total Hours", skill: "48 hours", cohort: "160 hours" },
  { label: "Prerequisites", skill: "Basic Python", cohort: "None (start from zero)" },
  { label: "Focus", skill: "AI agents & RAG", cohort: "Full AI engineering stack" },
  { label: "Projects", skill: "2 deployed projects", cohort: "4+ projects + capstone" },
  { label: "Best For", skill: "Fast placement prep", cohort: "Deep career transition" },
  { label: "Price", skill: "₹21k–25k", cohort: "₹45k–65k" },
];

const Courses = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="section-container text-center">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl animate-fade-up">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
            From fast-track placement prep to deep foundations — choose your path to AI job readiness.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      {courses.map((course, idx) => (
        <section key={course.id} id={course.id} className="pb-20">
          <div className="section-container">
            <div className="animate-on-scroll overflow-hidden rounded-2xl border border-border bg-card">
              {/* Course Header */}
              <div className="border-b border-border p-8 md:p-12">
                <span className={course.badgeClass}>{course.badge}</span>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {course.title}
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">{course.tagline}</p>

                <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" /> {course.hours}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-primary" /> {course.idealFor}
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-2xl font-bold text-primary">
                    {course.price}
                  </span>
                  {course.earlyBird && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-display text-xs text-primary">
                      Early bird: {course.earlyBird}
                    </span>
                  )}
                </div>
              </div>

              {/* Course Body */}
              <div className="grid gap-8 p-8 md:grid-cols-3 md:p-12">
                {/* Curriculum */}
                <div>
                  <h3 className="mb-4 font-display text-sm font-bold tracking-wider text-foreground">
                    WHAT YOU'LL LEARN
                  </h3>
                  <ul className="space-y-3">
                    {course.weeks.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <h3 className="mb-4 font-display text-sm font-bold tracking-wider text-foreground">
                    PROJECTS YOU'LL BUILD
                  </h3>
                  <ul className="space-y-3">
                    {course.projects.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who This Is For */}
                <div>
                  <h3 className="mb-4 font-display text-sm font-bold tracking-wider text-foreground">
                    WHO THIS IS FOR
                  </h3>
                  <ul className="space-y-3">
                    {course.whoFor.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight size={14} className="mt-0.5 flex-shrink-0 text-primary" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Course CTAs */}
              <div className="flex flex-col gap-4 border-t border-border p-8 sm:flex-row md:px-12">
                <a
                  href="mailto:hello@gradtensor.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
                >
                  {course.ctaPrimary}
                </a>
                <a
                  href="mailto:hello@gradtensor.com"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 font-display text-sm font-medium tracking-wider text-foreground transition-all hover:border-primary/30"
                >
                  {course.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section className="pb-24">
        <div className="section-container">
          <div className="animate-on-scroll">
            <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Compare <span className="gradient-text">Programs</span>
            </h2>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-card">
                    <th className="p-4 text-left font-display text-xs font-bold tracking-wider text-muted-foreground">
                      FEATURE
                    </th>
                    <th className="p-4 text-left font-display text-xs font-bold tracking-wider text-primary">
                      6-WEEK AGENTIC
                    </th>
                    <th className="p-4 text-left font-display text-xs font-bold tracking-wider text-primary">
                      16-WEEK FOUNDATIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-border/50 ${i % 2 === 0 ? "bg-card/30" : ""}`}
                    >
                      <td className="p-4 font-display text-xs font-medium tracking-wider text-foreground">
                        {row.label}
                      </td>
                      <td className="p-4 text-muted-foreground">{row.skill}</td>
                      <td className="p-4 text-muted-foreground">{row.cohort}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Courses;
