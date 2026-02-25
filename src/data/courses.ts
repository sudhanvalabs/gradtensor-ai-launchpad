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
    idealFor: "Final-year students & working professionals adding AI skills",
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
    ctaPrimary: "Enroll in Next Batch",
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
    idealFor: "Students with 6+ months runway, career switchers, professionals upskilling",
    weeks: [
      "Phase 1 (Weeks 1-4): Python, ML basics, neural networks from scratch",
      "Phase 2 (Weeks 5-10): LLMs, RAG, AI agents, prompt engineering, fine-tuning",
      "Phase 3 (Weeks 11-14): APIs, deployment, Docker, capstone project",
      "Phase 4 (Weeks 15-16): Portfolio polish, resume prep, mock interviews",
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
  {
    slug: "ai-ready-engineer",
    category: "skill",
    badge: "SKILL-BASED",
    badgeClass: "badge-skill",
    title: "AI-Ready Engineer",
    tagline:
      "Get hired in the AI era — before your batchmates figure out what's happening",
    duration: "2 weeks",
    hours: "8 live hours + 4 project hours",
    idealFor: "Final-year students & fresh graduates preparing for placements",
    weeks: [
      "Session 1: How AI Systems Actually Work — LLMs, embeddings, RAG, agents, and tracing a real query end-to-end",
      "Session 2: Build Part 1 — Core Document Intelligence Bot — ingestion, chunking, vector search, LLM integration, deployed to a public URL",
      "Session 3: Build Part 2 — Extend with Advanced Features — multi-document support, conversation memory, confidence scoring, web interface",
      "Session 4: Architecture Discussion & Project Defence — team presentations, instructor grilling, the 10 RAG interview questions, and your 90-day roadmap",
    ],
    projects: [
      "Document Intelligence Bot — upload any PDF, ask questions, get precise referenced answers using RAG architecture (deployed)",
    ],
    whoFor: [
      "Final-year students or recent graduates with basic Python skills",
      "Students with placements coming who want to stand out with a real AI project",
      "Anyone willing to put in 12 focused hours across 2 weeks to build something demoable",
    ],
    ctaPrimary: "Enroll Now",
    ctaSecondary: "Request Details",
    faqs: [
      {
        q: "Do I need prior AI or ML experience?",
        a: "No. You need basic Python knowledge — the program teaches LLMs, embeddings, RAG, and agents from scratch in Session 1 before you build anything.",
      },
      {
        q: "How much time does this require?",
        a: "About 12 hours total across 2 weeks — 4 live sessions of 2 hours each plus about 1 hour of async pre-work per week.",
      },
      {
        q: "What do I walk away with?",
        a: "A production-quality Document Intelligence Bot on your GitHub, the ability to explain it at any depth in an interview, exposure to real AI interview questions, and a 90-day roadmap for your AI career.",
      },
      {
        q: "How is this different from the 6-week AI Engineering course?",
        a: "This is a focused 2-week sprint designed for students facing imminent placements. The 6-week course goes deeper into agents and frameworks. Graduates of this program get discounted access to the longer course.",
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
