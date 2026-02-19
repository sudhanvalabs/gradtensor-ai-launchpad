export type CourseCategory = "skill" | "cohort" | "executive";

export interface Course {
  slug: string;
  category: CourseCategory;
  badge: string;
  badgeClass: string;
  title: string;
  tagline: string;
  duration: string;
  hours: string;
  price: string;
  earlyBird: string | null;
  idealFor: string;
  weeks: string[];
  projects: string[];
  whoFor: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  faqs: { q: string; a: string }[];
}

export const courses: Course[] = [
  {
    slug: "ai-engineering-agentic-foundations",
    category: "skill",
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
    faqs: [
      {
        q: "Do I need ML experience to start?",
        a: "No. This course assumes basic Python knowledge but teaches LLMs, embeddings, and agents from the ground up. If you want to learn ML from scratch, the 16-week program is better.",
      },
      {
        q: "How much time per week does this require?",
        a: "About 8 hours per week  - 4 hours of live sessions and 4 hours of project work.",
      },
    ],
  },
  {
    slug: "ai-foundations-job-ready-16-weeks",
    category: "cohort",
    badge: "COHORT-BASED",
    badgeClass: "badge-cohort",
    title: "AI Foundations  - Job Ready in 16 Weeks",
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
    faqs: [
      {
        q: "Do I need any prior coding experience?",
        a: "No. This program starts from Python basics and builds up to deployed AI systems. It's designed for complete beginners and career switchers.",
      },
      {
        q: "How much time per week does this require?",
        a: "About 10 hours per week  - 4 hours of live sessions and 6 hours of project work.",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return courses.filter((c) => c.category === category);
}
