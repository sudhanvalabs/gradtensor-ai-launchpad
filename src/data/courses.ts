export type CourseStage =
  | "discover"
  | "portfolio"
  | "production"
  | "ship"
  | "advise";

export type CourseStatus = "live" | "pre-register";

export type Audience =
  | "high-school"
  | "engineering"
  | "non-tech"
  | "senior-it";

export const audienceLabels: Record<Audience, string> = {
  "high-school": "High School Students",
  engineering: "Tech Students & Grads",
  "non-tech": "Non-Tech Builders",
  "senior-it": "Senior IT Professionals",
};

export interface Course {
  slug: string;
  stage?: CourseStage;
  status: CourseStatus;
  audience: Audience[];
  title: string;
  tagline: string;
  duration: string;
  hours: string;
  idealFor: string;
  whoForShort: string;
  enrollUrl?: string;
  weeks: string[];
  projects: string[];
  whoFor: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  faqs: { q: string; a: string }[];
}

export const stageLabels: Record<
  CourseStage,
  { number: number; label: string; description: string }
> = {
  discover: {
    number: 1,
    label: "Discover",
    description: "Explore AI with zero prerequisites",
  },
  portfolio: {
    number: 2,
    label: "Portfolio",
    description: "Build projects that prove your skills",
  },
  production: {
    number: 3,
    label: "Production",
    description: "Ship production-grade AI systems",
  },
  ship: {
    number: 4,
    label: "Ship",
    description: "Launch your own AI product",
  },
  advise: {
    number: 5,
    label: "Advise",
    description: "Guide teams and organisations on AI",
  },
};

export const courses: Course[] = [
  {
    slug: "teen-ai-builders",
    stage: "discover",
    status: "live",
    audience: ["high-school"],
    title: "Teen AI Builders",
    tagline: "Build your first AI app - no coding experience needed",
    duration: "4 weeks",
    hours: "12 live hours + 8 project hours",
    idealFor: "Teens and beginners curious about AI",
    whoForShort: "Anyone, no coding needed",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-explorer",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Explorer",
    tagline: "Understand AI and build your first app - no technical background needed",
    duration: "4 weeks",
    hours: "12 live hours + 8 project hours",
    idealFor: "Non-tech professionals and curious minds exploring AI",
    whoForShort: "No coding needed",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-ready-engineer",
    stage: "portfolio",
    status: "pre-register",
    audience: ["engineering"],
    title: "AI-Ready Engineer",
    tagline:
      "Get hired in the AI era - before your batchmates figure out what's happening",
    duration: "2 weeks",
    hours: "8 live hours + 4 project hours",
    idealFor: "Final-year students & fresh graduates preparing for placements",
    whoForShort: "Final-year students & fresh grads",
    // enrollUrl: "TODO_GRAPHY_URL",
    weeks: [
      "Session 1: How AI Systems Actually Work - LLMs, embeddings, RAG, agents, and tracing a real query end-to-end",
      "Session 2: Build Part 1 - Core Document Intelligence Bot - ingestion, chunking, vector search, LLM integration, deployed to a public URL",
      "Session 3: Build Part 2 - Extend with Advanced Features - multi-document support, conversation memory, confidence scoring, web interface",
      "Session 4: Architecture Discussion & Project Defence - team presentations, instructor grilling, the 10 RAG interview questions, and your 90-day roadmap",
    ],
    projects: [
      "Document Intelligence Bot - upload any PDF, ask questions, get precise referenced answers using RAG architecture (deployed)",
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
        a: "No. You need basic Python knowledge - the program teaches LLMs, embeddings, RAG, and agents from scratch in Session 1 before you build anything.",
      },
      {
        q: "How much time does this require?",
        a: "About 12 hours total across 2 weeks - 4 live sessions of 2 hours each plus about 1 hour of async pre-work per week.",
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
  {
    slug: "ai-engineering-agentic-foundations",
    stage: "production",
    status: "live",
    audience: ["engineering", "non-tech"],
    title: "AI Engineering & Agentic Foundations",
    tagline: "Build production-ready AI agents in 6 weeks",
    duration: "6 weeks",
    hours: "24 live hours + 24 project hours",
    idealFor: "Final-year students & working professionals adding AI skills",
    whoForShort: "Engineers adding AI skills",
    // enrollUrl: "TODO_GRAPHY_URL",
    weeks: [
      "Week 1: How LLMs Actually Work",
      "Week 2: APIs, Prompt Engineering, and Structured Outputs",
      "Week 3: Memory: Embeddings and Vector Databases",
      "Week 4: RAG: Knowledge Grounding Without Hallucination",
      "Week 5: Agents From First Principles",
      "Week 6: Frameworks, Production, and Deployment",
    ],
    projects: [
      "A deployed RAG system that reads your documents and answers questions accurately — without hallucinating. Deployed at a public URL by Week 4.",
      "A deployed AI agent that reasons across multiple steps, uses real tools to take actions, and operates reliably in production. Live by Week 6.",
    ],
    whoFor: [
      "Engineers who have used AI tools but want to build with them at an engineering level",
      "Professionals moving into an AI engineering role who need to get up to speed fast",
      "Developers who want two deployed AI projects to demo and explain in interviews",
    ],
    ctaPrimary: "Enroll Now",
    ctaSecondary: "Download Syllabus",
    faqs: [
      {
        q: "Do I need machine learning or AI experience to start?",
        a: "No prior AI or ML experience needed. The course starts from LLM fundamentals and builds up from there. You need Python basics and professional coding experience — the AI knowledge is what the course provides.",
      },
      {
        q: "How much time per week does this require?",
        a: "Approximately 8 hours per week — 4 hours of live sessions and 4 hours of project work.",
      },
    ],
  },
  {
    slug: "ai-product-builder",
    stage: "ship",
    status: "pre-register",
    audience: ["engineering", "non-tech"],
    title: "AI Product Builder",
    tagline: "Go from engineer to indie AI product maker",
    duration: "6 weeks",
    hours: "18 live hours + 30 project hours",
    idealFor: "Engineers ready to build and launch their own AI product",
    whoForShort: "Engineers going independent",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-transformation-partner",
    stage: "advise",
    status: "pre-register",
    audience: ["senior-it"],
    title: "AI Transformation Partner",
    tagline: "Lead AI adoption for your team or organisation",
    duration: "4 weeks",
    hours: "12 live hours + 8 project hours",
    idealFor: "Senior professionals guiding AI strategy",
    whoForShort: "Senior professionals, 8+ years exp",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "multi-agent-systems",
    status: "pre-register",
    audience: ["engineering"],
    title: "Multi-Agent Systems",
    tagline:
      "Multiple specialised agents collaborating under an orchestrator. Includes the Architecting Multi-Agent Systems module.",
    duration: "TBD",
    hours: "TBD",
    idealFor: "Engineers ready to build advanced multi-agent architectures",
    whoForShort: "Experienced AI engineers",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "build-with-ai-tools",
    status: "pre-register",
    audience: ["non-tech"],
    title: "Build With AI Tools",
    tagline:
      "Build real apps and products using AI coding agents like Claude Code. No traditional coding experience needed — just the methodology to build effectively.",
    duration: "TBD",
    hours: "TBD",
    idealFor: "Non-tech professionals wanting to build with AI tools",
    whoForShort: "No coding needed",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-foundations-job-ready-16-weeks",
    status: "pre-register",
    audience: ["engineering"],
    title: "AI Foundations - Job Ready in 16 Weeks",
    tagline: "From Python basics to deployed AI systems",
    duration: "16 weeks",
    hours: "64 live hours + 96 project hours",
    idealFor:
      "Students with 6+ months runway, career switchers, professionals upskilling",
    whoForShort: "Career switchers & deep learners",
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
    ctaPrimary: "Apply for Next Batch",
    ctaSecondary: "Download Full Curriculum",
    faqs: [
      {
        q: "Do I need any prior coding experience?",
        a: "No. This program starts from Python basics and builds up to deployed AI systems. It's designed for complete beginners and career switchers.",
      },
      {
        q: "How much time per week does this require?",
        a: "About 10 hours per week - 4 hours of live sessions and 6 hours of project work.",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

/** Returns the 5 journey-stage courses (one per stage) in stage order */
export function getJourneyCourses(): Course[] {
  const stageOrder: CourseStage[] = [
    "discover",
    "portfolio",
    "production",
    "ship",
    "advise",
  ];
  return stageOrder
    .map((stage) => courses.find((c) => c.stage === stage))
    .filter((c): c is Course => c !== undefined);
}

/** Returns the full-track 16-week course (no stage) */
export function getFullTrackCourse(): Course | undefined {
  return courses.find((c) => c.slug === "ai-foundations-job-ready-16-weeks");
}

/** Returns courses that don't belong to a journey stage (full track, AI Explorer, etc.) */
export function getStagelessCourses(): Course[] {
  return courses.filter((c) => !c.stage);
}

export type Background = "high-school" | "college-tech" | "professional" | "non-tech";
export type TechComfort = "none" | "basic" | "comfortable";
export type Goal = "explore" | "get-hired" | "build-product" | "lead-strategy";

export function recommendCourses(
  background: Background,
  techComfort: TechComfort,
  goal: Goal
): Course[] {
  const scoreMap = new Map<string, number>();

  for (const course of courses) {
    scoreMap.set(course.slug, 0);
  }

  const add = (slug: string, points: number) => {
    scoreMap.set(slug, (scoreMap.get(slug) || 0) + points);
  };

  // Background scoring
  if (background === "high-school") {
    add("teen-ai-builders", 3);
  } else if (background === "college-tech") {
    add("ai-ready-engineer", 3);
    add("ai-engineering-agentic-foundations", 2);
    add("ai-foundations-job-ready-16-weeks", 2);
  } else if (background === "professional") {
    add("ai-engineering-agentic-foundations", 3);
    add("ai-product-builder", 2);
    add("ai-transformation-partner", 2);
  } else if (background === "non-tech") {
    add("ai-explorer", 3);
    add("ai-product-builder", 1);
  }

  // Tech comfort scoring
  if (techComfort === "none") {
    add("teen-ai-builders", 2);
    add("ai-explorer", 2);
    add("ai-foundations-job-ready-16-weeks", 1);
  } else if (techComfort === "basic") {
    add("ai-ready-engineer", 2);
    add("ai-foundations-job-ready-16-weeks", 2);
  } else if (techComfort === "comfortable") {
    add("ai-engineering-agentic-foundations", 2);
    add("ai-product-builder", 2);
    add("ai-ready-engineer", 1);
  }

  // Goal scoring
  if (goal === "explore") {
    add("teen-ai-builders", 2);
    add("ai-explorer", 2);
    add("ai-foundations-job-ready-16-weeks", 1);
  } else if (goal === "get-hired") {
    add("ai-ready-engineer", 3);
    add("ai-engineering-agentic-foundations", 2);
    add("ai-foundations-job-ready-16-weeks", 2);
  } else if (goal === "build-product") {
    add("ai-product-builder", 3);
    add("ai-engineering-agentic-foundations", 2);
  } else if (goal === "lead-strategy") {
    add("ai-transformation-partner", 3);
  }

  // Sort by score descending and return top 2
  const sorted = [...scoreMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .filter(([, score]) => score > 0)
    .slice(0, 2)
    .map(([slug]) => getCourseBySlug(slug)!)
    .filter(Boolean);

  return sorted;
}
