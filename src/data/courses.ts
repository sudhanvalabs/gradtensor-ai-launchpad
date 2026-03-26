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
  description?: string;
  price?: string; // e.g. "INR 2,999 + GST" - omit if not yet decided
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
  // --- Entry point course (shown in its own section) ---
  {
    slug: "ai-explorer",
    status: "live",
    audience: ["high-school", "engineering", "non-tech", "senior-it"],
    title: "AI Explorer",
    tagline:
      "Understand AI, use it confidently, know where it is going",
    duration: "2 weeks",
    hours: "4 live sessions | 60 minutes each",
    idealFor:
      "Anyone who wants to understand AI - regardless of background, role, or age",
    whoForShort: "No prior knowledge needed",
    price: "INR 3,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "View & Enroll",
    ctaSecondary: "",
    faqs: [],
  },

  // --- Segment 1: School Students ---
  {
    slug: "teen-ai-builders",
    stage: "discover",
    status: "live",
    audience: ["high-school"],
    title: "Teen AI Builders",
    tagline:
      "Build your personalised AI assistant, no coding experience needed",
    duration: "4 weeks",
    hours: "8 live hours",
    idealFor: "Teens and beginners curious about AI",
    whoForShort: "Anyone, no coding needed",
    price: "INR 3,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-builder-pro",
    status: "pre-register",
    audience: ["high-school"],
    title: "AI Builder Pro",
    tagline:
      "Advanced AI for school students, build a production-grade AI application",
    duration: "4 weeks",
    hours: "8 live hours",
    idealFor: "School students who have completed Teen AI Builders",
    whoForShort: "School students, after Teen AI Builders",
    price: "INR 4,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },

  // --- Segment 2: College Students ---
  {
    slug: "ai-ready-engineer",
    stage: "portfolio",
    status: "pre-register",
    audience: ["engineering"],
    title: "AI-Ready Engineer",
    tagline:
      "Get hired in the AI era before your batchmates figure out what's happening",
    duration: "2 weeks",
    hours: "8 live hours + 4 project hours",
    idealFor: "Final-year students & fresh graduates preparing for placements",
    whoForShort: "Final-year students & fresh grads",
    price: "INR 7,999 + GST",
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

  // --- Segment 3: Tech Professionals ---
  {
    slug: "ai-engineering-agentic-foundations",
    stage: "production",
    status: "live",
    audience: ["engineering", "non-tech"],
    title: "AI Engineering & Agentic Foundations",
    tagline: "Build production-ready AI agents",
    duration: "6 weeks",
    hours: "24 live hours + 24 project hours",
    idealFor: "Final-year students & working professionals adding AI skills",
    whoForShort: "Engineers adding AI skills",
    price: "INR 24,999 + GST",
    weeks: [
      "Week 1: How LLMs Actually Work",
      "Week 2: APIs, Prompt Engineering, and Structured Outputs",
      "Week 3: Memory: Embeddings and Vector Databases",
      "Week 4: RAG: Knowledge Grounding Without Hallucination",
      "Week 5: Agents From First Principles",
      "Week 6: Frameworks, Production, and Deployment",
    ],
    projects: [
      "A deployed RAG system that reads your documents and answers questions accurately - without hallucinating. Deployed at a public URL by Week 4.",
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
        a: "No prior AI or ML experience needed. The course starts from LLM fundamentals and builds up from there. You need Python basics and professional coding experience - the AI knowledge is what the course provides.",
      },
      {
        q: "How much time per week does this require?",
        a: "Approximately 8 hours per week - 4 hours of live sessions and 4 hours of project work.",
      },
    ],
  },
  {
    slug: "multi-agent-systems",
    status: "pre-register",
    audience: ["engineering"],
    title: "Multi-Agent Systems",
    tagline:
      "Multiple specialised agents collaborating under an orchestrator",
    duration: "TBD",
    hours: "TBD",
    idealFor: "Engineers ready to build advanced multi-agent architectures",
    whoForShort: "Experienced AI engineers",
    price: "INR 18,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },

  // --- Shared: College Students + Working Professionals ---
  {
    slug: "the-human-edge",
    status: "pre-register",
    audience: ["engineering", "non-tech"],
    title: "The Human Edge",
    tagline:
      "How to make yourself irreplaceable in the age of AI",
    duration: "2-3 weeks",
    hours: "5 live sessions | 60 minutes each",
    idealFor:
      "Working professionals and final-year students in any stream",
    whoForShort: "No coding needed",
    price: "INR 8,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },

  // --- Segment 4: Working Professionals (B2C) ---

  // Entry point for professionals
  {
    slug: "ai-explorer-professionals",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Explorer for Professionals",
    tagline:
      "Understand AI, use it confidently at work, know where it is going",
    description:
      "Everyone around you is talking about AI. You are not sure if you are using it right, if you are missing something important, or whether your role is at risk. This course gives you clarity - not hype, not fear, just an honest picture. You leave with a clear mental model of how AI works, hands-on experience with Claude and ChatGPT using examples from your own profession, and a personal 30-day action plan.",
    duration: "1 weekend",
    hours: "2 hours Saturday + 2 hours Sunday",
    idealFor:
      "Any working professional who wants to understand AI - regardless of role or industry",
    whoForShort: "No prior knowledge needed",
    price: "INR 999 + GST",
    weeks: [
      "Session 1: What AI actually is - clear up misconceptions, build the right mental model, live side-by-side comparison of ChatGPT, Claude, and Gemini on a real work task",
      "Session 2: What AI is genuinely good at - and where it fails. Hallucination explained honestly. Why prompt quality matters more than which tool you use",
      "Session 3: AI at work - live demos from real professional scenarios across functions. You leave with 2-3 working prompts you built yourself",
      "Session 4: Where AI is going - and your personal 30-day action plan for using AI at work starting tomorrow",
    ],
    projects: [],
    whoFor: [
      "Any working professional who has tried ChatGPT once or twice and still does not feel confident about what it can do for their work",
      "Finance, HR, marketing, sales, legal, CA, operations - any function, any industry",
      "No technical background needed",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },

  // Level 1: AI Prompts - profession-specific
  {
    slug: "ai-prompts-ca",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Prompts for Chartered Accountants",
    tagline: "Do in 8 minutes what used to take 45",
    description:
      "Your colleagues are producing the same work faster. Junior CAs at tech-forward firms are already using AI to draft audit observations, tax summaries, and client communications in minutes. You leave with 8 personal prompt templates - audit observations, tax computation summaries, compliance notices, client communications, article clerk briefs, board talking points, filing checklists, and internal SOPs. Use them the next morning.",
    duration: "1 day",
    hours: "1-day workshop or 3 × 90 min live sessions",
    idealFor: "Chartered Accountants and article clerks",
    whoForShort: "CAs & article clerks",
    price: "INR 4,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-prompts-finance",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Prompts for Finance Professionals",
    tagline: "Turn numbers into narratives in minutes, not hours",
    description:
      "If your management reports take a day and your variance commentary sounds like every other finance team's, AI is the fastest way to close that gap. You leave with 8 personal prompt templates for the written layer on top of your analysis - management reports, variance analysis, board presentations, client reviews, budget documentation, invoice disputes, policy explanations, and month-end close updates.",
    duration: "1 day",
    hours: "1-day workshop or 3 × 90 min live sessions",
    idealFor: "Finance professionals in reporting, analysis, and FP&A roles",
    whoForShort: "Finance professionals",
    price: "INR 4,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-prompts-hr",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Prompts for HR Professionals",
    tagline:
      "Spend less time drafting. More time on the work that actually matters",
    description:
      "If you are spending half your day on JDs, offer letters, and rejection emails, that time is costing you influence. You leave with 8 personal prompt templates - job descriptions, candidate outreach messages, interview question sets, offer letters, rejection emails, performance review comments, policy communications, and onboarding plans. Before: 1 hour writing a JD. After: 10 minutes.",
    duration: "1 day",
    hours: "1-day workshop or 3 × 90 min live sessions",
    idealFor: "HR professionals across hiring, L&D, and operations",
    whoForShort: "HR professionals",
    price: "INR 4,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-prompts-marketing",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Prompts for Marketing Professionals",
    tagline: "Kill the blank page. Ship campaigns faster",
    description:
      "If the person next to you is producing 3 content variants while you are still on your first draft, it shows in output and campaign velocity. You leave with 8 personal prompt templates - social media posts, email campaigns, ad copy variations, content calendars, campaign briefs, competitor analysis summaries, SEO descriptions, and performance report narratives. Before: 2 hours for 5 social variants. After: 20 minutes.",
    duration: "1 day",
    hours: "1-day workshop or 3 × 90 min live sessions",
    idealFor: "Marketing professionals in content, campaigns, and brand roles",
    whoForShort: "Marketing professionals",
    price: "INR 4,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-prompts-sales",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Prompts for Sales Professionals",
    tagline: "Write less. Sell more",
    description:
      "Every hour you spend drafting emails and proposals is an hour you are not in a conversation. AI does not close deals - you do. But it gets the writing done so you have more time for the conversations that matter. You leave with 8 templates - cold outreach, follow-ups, proposals, objection responses, re-engagement messages, win/loss notes, reference requests, and CRM deal updates. Before: 20 minutes per cold email. After: 3 minutes.",
    duration: "1 day",
    hours: "1-day workshop or 3 × 90 min live sessions",
    idealFor: "Sales professionals in B2B and B2C roles",
    whoForShort: "Sales professionals",
    price: "INR 4,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-prompts-legal",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Prompts for Legal Professionals",
    tagline: "Draft in minutes. Think for hours",
    description:
      "The most valuable thing a lawyer does is think - interpret, advise, judge risk. The least valuable is drafting routine correspondence and formatting documents. You leave with 8 personal prompt templates - NDA drafts, plain-language summaries, legal opinion memos, contract review checklists, clause explanations, cease and desist drafts, compliance communications, and client status updates. Before: 2 hours drafting an NDA. After: 20 minutes.",
    duration: "1 day",
    hours: "1-day workshop or 3 × 90 min live sessions",
    idealFor: "Lawyers, legal counsel, and compliance professionals",
    whoForShort: "Legal professionals",
    price: "INR 4,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },

  // Level 2: AI Workflows - profession-specific
  {
    slug: "ai-workflows-ca",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Workflows for Chartered Accountants",
    tagline: "Collapse a 10-step process into 3 prompts",
    description:
      "Level 1 made your drafting faster. Level 2 makes entire processes shorter. A multi-step process - receive invoice, extract data, verify vendor, calculate TDS, draft approval note - compressed into a chained prompt sequence you run in 8 minutes instead of 45. You learn process mapping, master prompt design, and chained prompting. You leave with documented master prompts for your 5 most time-consuming processes. No new tools - just Claude used at full depth.",
    duration: "2 days",
    hours: "2-day workshop or 5 × 90 min live sessions",
    idealFor:
      "Chartered Accountants who have completed AI Prompts for CAs or equivalent",
    whoForShort: "CAs with Level 1 experience",
    price: "INR 12,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-workflows-finance",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Workflows for Finance Professionals",
    tagline: "Build prompt chains that turn raw data into board-ready output",
    description:
      "Your analysis is already good. The problem is the time it takes to turn it into narratives and reports that non-finance people actually read. You learn to build prompt chains that take raw data and produce polished financial communication - variance commentary, management reports, board packs - in a fraction of the time. Before: management report narrative takes 3 hours. After: 25 minutes.",
    duration: "2 days",
    hours: "2-day workshop or 5 × 90 min live sessions",
    idealFor:
      "Finance professionals who have completed AI Prompts for Finance or equivalent",
    whoForShort: "Finance pros with Level 1 experience",
    price: "INR 12,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-workflows-hr",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Workflows for HR Professionals",
    tagline: "Automate the hiring pipeline. Reclaim your strategic time",
    description:
      "HR professionals spend most of their time on process - screening, scheduling, communicating, documenting. You learn to compress multi-step HR processes using chained prompting so the administrative load drops dramatically. Resume screening, interview prep, offer workflows, performance reviews, policy rollouts, exit analysis, and L&D assessments - all compressed. Before: screening 50 resumes takes 3 hours. After: 40 minutes.",
    duration: "2 days",
    hours: "2-day workshop or 5 × 90 min live sessions",
    idealFor:
      "HR professionals who have completed AI Prompts for HR or equivalent",
    whoForShort: "HR pros with Level 1 experience",
    price: "INR 12,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-workflows-marketing",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Workflows for Marketing Professionals",
    tagline: "One brief becomes a full campaign. In two hours",
    description:
      "A campaign brief that used to take a team a week to execute - content calendar, copy variations, email sequence, social posts, performance report - can be compressed into 2-3 hours using chained prompting. You still make all the creative decisions. You just stop spending time on the blank page. Before: campaign brief to first-week content takes 2 days. After: 90 minutes.",
    duration: "2 days",
    hours: "2-day workshop or 5 × 90 min live sessions",
    idealFor:
      "Marketing professionals who have completed AI Prompts for Marketing or equivalent",
    whoForShort: "Marketers with Level 1 experience",
    price: "INR 12,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-workflows-sales",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Workflows for Sales Professionals",
    tagline: "Build a personalised outreach machine. Without a team",
    description:
      "Top salespeople are not just better at conversations - they are better at preparing for them. You learn to build prompt chains that research a prospect, generate personalised outreach, prepare for the meeting, and follow up - compressing hours of preparation into minutes. Before: researching and personalising outreach for 10 prospects takes a morning. After: 1 hour.",
    duration: "2 days",
    hours: "2-day workshop or 5 × 90 min live sessions",
    idealFor:
      "Sales professionals who have completed AI Prompts for Sales or equivalent",
    whoForShort: "Sales pros with Level 1 experience",
    price: "INR 12,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-workflows-legal",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Workflows for Legal Professionals",
    tagline: "Handle twice the work. Bill the same hours",
    description:
      "Legal work has two components: the thinking and the drafting. You get paid for the thinking. AI compresses the drafting so dramatically that the same working hours produce significantly more output - more clients served, more matters progressed, more documents reviewed. Contract reviews, matter preparation, document drafting, due diligence, client communications, compliance audits, and billing narratives - all compressed. Before: contract review and client summary takes 2 hours. After: 25 minutes.",
    duration: "2 days",
    hours: "2-day workshop or 5 × 90 min live sessions",
    idealFor:
      "Legal professionals who have completed AI Prompts for Legal or equivalent",
    whoForShort: "Legal pros with Level 1 experience",
    price: "INR 12,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },

  /* --- Beyond ChatGPT (replaced by profession-specific courses above) ---
  {
    slug: "beyond-chatgpt",
    status: "pre-register",
    audience: ["non-tech"],
    title:
      "Beyond ChatGPT: Master AI Automation with Claude, n8n and Zapier for Workplace Productivity",
    tagline:
      "Automate 30-50% of your daily work without writing a single line of code",
    duration: "6 weeks",
    hours: "Approximately 6 hours",
    idealFor:
      "Working professionals with no coding background who want to automate their work",
    whoForShort: "No coding needed",
    price: "INR 14,999 + GST",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  */

  // --- Segment 5: Corporate Teams ---
  {
    slug: "ai-prompts-customer-support",
    status: "pre-register",
    audience: ["senior-it"],
    title: "AI Prompts for Customer Support",
    tagline: "Respond better, respond faster",
    duration: "1 week",
    hours: "Blended live and recorded",
    idealFor: "Companies training their customer-facing and functional teams",
    whoForShort: "Customer-facing teams",
    price: "Pricing on request",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "View & Enroll",
    ctaSecondary: "",
    faqs: [],
  },

  /* --- Commented out: can be restored later ---
  {
    slug: "ai-explorer-old",
    status: "pre-register",
    audience: ["non-tech"],
    title: "AI Explorer (old)",
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
    slug: "build-with-ai-tools",
    status: "pre-register",
    audience: ["non-tech"],
    title: "Build With AI Tools",
    tagline:
      "Build real apps and products using AI coding agents like Claude Code. No traditional coding experience needed - just the methodology to build effectively.",
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
  --- */
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
