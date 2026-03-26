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
  // --- Entry point event (shown in Start Here section) ---
  {
    slug: "one-hour-on-ai",
    status: "live",
    audience: ["high-school", "engineering", "non-tech", "senior-it"],
    title: "One Hour on AI: What You Actually Need to Know",
    tagline:
      "New to AI? Join our free monthly live session - 90 minutes, open to everyone, no commitment required",
    description:
      "We will help you understand AI and find your right starting point. Whether you are a student, a working professional, or just curious - this session gives you a clear, honest picture of what AI is, what it can do, and which GradTensor course (if any) is right for you. Runs twice every month. Live online.",
    duration: "90 minutes",
    hours: "Runs twice every month",
    idealFor:
      "Anyone curious about AI - students, professionals, parents, anyone",
    whoForShort: "Open to everyone",
    price: "INR 99",
    weeks: [],
    projects: [],
    whoFor: [
      "Anyone curious about AI - no prior knowledge needed",
      "Students, working professionals, parents, or anyone wanting to understand AI before committing to a course",
    ],
    ctaPrimary: "Register",
    ctaSecondary: "",
    faqs: [],
  },

  // --- Segment 1: School Students ---
  {
    slug: "little-ai-builders",
    status: "pre-register",
    audience: ["high-school"],
    title: "Little AI Builders",
    tagline: "Explore AI. Create something. Have fun",
    description:
      "Your child will build their own AI character - give it a name, a personality, and teach it things. No coding, no complex tools, just creativity and curiosity in a browser. They leave with a genuine understanding of how AI works, a Creator's Manual for their AI character, and the confidence to say: I made something with AI.",
    duration: "4 weekends",
    hours: "45 min Saturday + 45 min Sunday each weekend",
    idealFor: "Children aged 8-12, any background",
    whoForShort: "Ages 8-12, no coding",
    price: "INR 1,999 + GST",
    weeks: [
      "Weekend 1: What is AI and how does it think - stories, examples, and a live demo. Then meet your AI - first conversation, what AI can and cannot do",
      "Weekend 2: Give your AI a name and personality. Then teach your AI something about a topic your child loves",
      "Weekend 3: Ask your AI better questions - the difference between a vague question and a good one. Then use your AI as a helper at school and home",
      "Weekend 4: Build your Creator's Manual documenting your AI character. Then Showcase - present your AI to the group and family",
    ],
    projects: [
      "Your own AI character with a name, personality, and knowledge you gave it",
      "A Creator's Manual explaining how your AI works",
    ],
    whoFor: [
      "Any child aged 8-12 - no coding, no device setup needed beyond a tablet or laptop with a browser",
      "Parent welcome to sit alongside",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "parent-ai-workshop",
    status: "pre-register",
    audience: ["high-school"],
    title: "Parent AI Workshop",
    tagline: "Understand what your child is learning - and why it matters",
    description:
      "You are investing in your child's AI education. This 2-hour session makes sure you know exactly what they are learning, why it matters, and how to support their learning at home without needing to be a tech expert. You leave with a clear picture of what AI is, which GradTensor course is right for your child, and practical ways to encourage AI learning at home.",
    duration: "1 Saturday",
    hours: "2 hours",
    idealFor: "Parents of children aged 8-18",
    whoForShort: "Parents",
    price: "INR 499 + GST",
    weeks: [],
    projects: [],
    whoFor: [
      "Any parent of a school-going child aged 8-18",
      "No technical background needed, no preparation required",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-explorer-teens",
    status: "pre-register",
    audience: ["high-school"],
    title: "AI Explorer for Teens",
    tagline: "What is AI? What can it do? What does it mean for you?",
    description:
      "You have used ChatGPT or heard about it. But you are not sure what it actually is, whether you should take it seriously, or what it means for your future. One weekend gives you a genuine understanding of AI, hands-on experience with 3 different tools, and an honest picture of what AI means for your studies, interests, and future career. A low-commitment way to find out before signing up for a longer course.",
    duration: "1 weekend",
    hours: "2 hours Saturday + 2 hours Sunday",
    idealFor: "Any teenager aged 13-18, any background",
    whoForShort: "Ages 13-18, any background",
    price: "INR 999 + GST",
    weeks: [
      "Session 1: What AI actually is - not the science fiction version. Mental model, live demo, clearing up misconceptions",
      "Session 2: What AI is good at and where it fails - why it makes things up, why the quality of your question matters more than which tool you use",
      "Session 3: AI and your life - using AI for school projects, creative work, learning new things, and things you should never trust AI to do alone",
      "Session 4: AI and your future - which careers AI will change, which it will create, and the smartest thing you can do right now",
    ],
    projects: [],
    whoFor: [
      "Any teenager aged 13-18 - no coding, no device setup needed",
      "Great for parents unsure whether their teen is ready for a longer course",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "teen-ai-builders",
    stage: "discover",
    status: "live",
    audience: ["high-school"],
    title: "Teen AI Builders",
    tagline:
      "Build your first AI app. No coding experience needed",
    description:
      "You are not going to learn about AI - you are going to build with it. By the end of 4 weekends you will have a working AI application with memory, a personality you designed, and a public URL you can share with anyone. Not a certificate saying you learned about AI - an actual app, deployed, shareable, yours.",
    duration: "4 weekends",
    hours: "2 hours Saturday + 2 hours Sunday each weekend",
    idealFor: "Teenagers aged 13-18 who want to build something with AI",
    whoForShort: "Ages 13-18, no coding needed",
    price: "INR 3,999 + GST",
    weeks: [
      "Weekend 1: What is AI and how does it think. Then your first AI program in Google Colab",
      "Weekend 2: Give your AI a personality. Then make it remember across sessions",
      "Weekend 3: Design your AI's behaviour with prompt engineering. Then build the web interface using Gradio",
      "Weekend 4: Deploy to a public URL anyone can use. Then Demo Day - present your project",
    ],
    projects: [
      "A fully deployed AI application with a public URL - yours to show at school, college interviews, and to anyone who asks",
    ],
    whoFor: [
      "Teenagers aged 13-18 who want to build, not just learn",
      "No coding experience needed - a laptop and curiosity are enough",
      "Batch size capped at 20 students",
    ],
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
      "Go further. Build production-grade AI",
    description:
      "You built your first AI app in Teen AI Builders. Now you go deeper. RAG, document intelligence, memory architecture, production deployment - the concepts professional AI engineers use every day. You will build a Document Intelligence Bot that reads, understands, and answers questions from any uploaded document. Most engineers learn RAG in their third or fourth year of college. You will know it before you finish school.",
    duration: "2 weekends",
    hours: "2 hours Saturday + 2 hours Sunday each weekend",
    idealFor: "School students aged 13-18 who have completed Teen AI Builders",
    whoForShort: "After Teen AI Builders",
    price: "INR 4,999 + GST",
    weeks: [
      "Weekend 1 Sat: How AI reads and understands documents - retrieval augmented generation explained from scratch",
      "Weekend 1 Sun: Building the document pipeline - setting up the system that lets your AI read and index documents",
      "Weekend 2 Sat: Building the intelligence layer - connecting the document pipeline to the AI model, handling queries",
      "Weekend 2 Sun: Polish, deploy, and present - making it production-ready, deploying to a public URL, Demo Day",
    ],
    projects: [
      "A Document Intelligence Bot - an AI that reads, understands, and answers questions from any uploaded document",
    ],
    whoFor: [
      "Students who have completed Teen AI Builders",
      "Basic familiarity with Google Colab",
      "Batch size capped at 15 students",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },

  // --- Segment 2: College Students ---
  {
    slug: "ai-explorer-students",
    status: "pre-register",
    audience: ["engineering"],
    title: "AI Explorer for Students",
    tagline:
      "Understand AI. Use it at college. Know what it means for your career",
    description:
      "Everyone is talking about AI. Your professors are mentioning it. Companies are asking about it in interviews. You have tried ChatGPT a few times but you are not sure if you are using it right. You leave with a clear mental model of AI, hands-on experience with 3 tools, an honest picture of what AI means for your career path, and a 90-day action plan you start the next day.",
    duration: "1 weekend",
    hours: "2 hours Saturday + 2 hours Sunday",
    idealFor: "Any college student, any year, any stream",
    whoForShort: "Any stream, any year",
    price: "INR 999 + GST",
    weeks: [
      "Session 1: What AI actually is - clear up misconceptions, build the right mental model, live comparison of ChatGPT, Claude, and Gemini",
      "Session 2: AI for your academic life - research, writing, learning, project work, internship applications, and things AI gets wrong",
      "Session 3: AI and the job market - which roles are growing, which are declining, what companies are actually looking for",
      "Session 4: Your AI starter plan - 3 tools to use this week, a 90-day skill-building roadmap based on your stream and goals",
    ],
    projects: [],
    whoFor: [
      "Any college student, any year, any stream - engineering, commerce, arts, science, law, medicine",
      "No technical background needed",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "build-first-ai-app",
    status: "pre-register",
    audience: ["engineering"],
    title: "Build Your First AI App",
    tagline:
      "Go from zero to a working AI application. No coding experience needed",
    description:
      "Most of your batchmates will graduate having used AI. You will graduate having built with it. That is a different conversation in every interview. You leave with a fully working, deployed AI application with a public URL - a portfolio project you can put on LinkedIn and show at interviews. No coding background required. The course assumes nothing and gets you to a working, shareable AI application in 4 weekends.",
    duration: "4 weekends",
    hours: "2 hours Saturday + 2 hours Sunday each weekend",
    idealFor: "College students who want to build something with AI - any stream",
    whoForShort: "No coding needed",
    price: "INR 3,999 + GST",
    weeks: [
      "Weekend 1: What is AI and how does it think, then your first AI program in Google Colab",
      "Weekend 2: Give your AI a personality, then make it remember across sessions",
      "Weekend 3: Design your AI's behaviour with prompt engineering, then build the web interface",
      "Weekend 4: Deploy to a public URL anyone can use, then Demo Day - present your project",
    ],
    projects: [
      "A fully working AI application deployed at a public URL - yours to show at interviews, put on LinkedIn, and share with anyone",
    ],
    whoFor: [
      "College students in any year, any stream who want to build something with AI",
      "Entrepreneurs, tinkerers, internship applicants who want to stand out",
      "No coding background required",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-for-mba",
    status: "pre-register",
    audience: ["engineering"],
    title: "AI for MBA and Management Students",
    tagline:
      "Lead in the AI era. Think strategically. Decide confidently",
    description:
      "Every management role you interview for will ask about AI. Every organisation you join will be figuring out AI. The students who can think clearly about AI strategy - not just use AI tools - will be the ones who lead. You leave with a business-focused mental model for evaluating AI, confidence in case study and interview discussions, and a framework for leading AI adoption in any organisation.",
    duration: "1 weekend",
    hours: "2 hours Saturday + 2 hours Sunday",
    idealFor: "MBA, PGDM, BBA students across all specialisations",
    whoForShort: "Management students",
    price: "INR 2,999 + GST",
    weeks: [
      "Session 1: The AI business landscape - what companies are actually doing with AI versus what they claim",
      "Session 2: AI in your future function - how AI is changing marketing, finance, HR, operations, and consulting",
      "Session 3: Leading AI adoption - ethics, governance, bias, and the questions every leader needs to ask",
      "Session 4: Your AI leadership edge - frameworks for evaluating AI investments, positioning yourself as an AI-literate business leader",
    ],
    projects: [],
    whoFor: [
      "MBA, PGDM, BBA students across marketing, finance, HR, operations, and consulting tracks",
      "Students headed into leadership and strategy roles, not coding roles",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-for-professional-degree",
    status: "pre-register",
    audience: ["engineering"],
    title: "AI for Professional Degree Students",
    tagline:
      "Enter your profession ahead of it. Not behind it",
    description:
      "AI is already changing how senior CAs and lawyers work - client communications, audit documentation, compliance notices, contract review, legal drafting. Most professional degree students will enter their first role without knowing any of this. The ones who do will stand out from day one. You leave with hands-on experience with profession-relevant AI workflows and a clear action plan for building AI skills during articleship or law school.",
    duration: "1 weekend",
    hours: "2 hours Saturday + 2 hours Sunday",
    idealFor: "CA students (Foundation, IPCC, Final), article clerks, LLB and LLM students",
    whoForShort: "CA & Law students",
    price: "INR 2,999 + GST",
    weeks: [
      "Session 1: What AI is actually doing in your profession - honest picture of which tasks are being automated",
      "Session 2: AI tools for your professional work - live demos tailored to your track (CA or Law)",
      "Session 3: AI in your articleship or internship - how to demonstrate AI literacy to your principal or senior partner",
      "Session 4: The AI-ready professional - what skills to build, how to position yourself in interviews",
    ],
    projects: [],
    whoFor: [
      "CA students at any stage - Foundation, IPCC, Final, or article clerks",
      "LLB and LLM students at any year",
    ],
    ctaPrimary: "Pre-Register",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "ai-ready-engineer",
    stage: "portfolio",
    status: "pre-register",
    audience: ["high-school", "engineering"],
    title: "AI-Ready Engineer",
    tagline:
      "Get hired in the AI era before your batchmates figure out what is happening",
    description:
      "Most engineering graduates know Python and data structures. Very few know how to build production AI systems - RAG pipelines, LangChain agents, FastAPI backends, vector databases. Companies are hiring for these skills right now and finding very few candidates who have them. You leave with a deployed AI engineering project, production experience with LangChain, RAG, and FastAPI, and a resume that stands out from every other CS graduate.",
    duration: "2 weeks",
    hours: "8 live hours + 4 project hours",
    idealFor: "Final-year students & fresh graduates preparing for placements",
    whoForShort: "Final-year CS/IT students",
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
      "Make yourself irreplaceable in the age of AI",
    description:
      "AI is automating tasks that entry-level jobs used to involve. Fresher hiring has slowed in some sectors. The question is not whether AI will affect your career - it is whether you will be on the right side of that change. You leave with a clear picture of where AI is heading for your career path, hands-on AI skills applied to your target function, the human skills AI cannot replicate, and a written 90-day plan you start the next day.",
    duration: "2-3 weeks",
    hours: "5 live sessions | 60 minutes each",
    idealFor:
      "Final-year college students in any stream, 6-18 months from entering the workforce",
    whoForShort: "Final-year, any stream",
    price: "INR 8,999 + GST",
    weeks: [
      "Session 1: The honest reality - what AI is actually doing to entry-level work in India. Not the fear, not the hype. The real picture.",
      "Session 2: AI fluency for your role - hands-on AI skills applied to tasks common in your target function",
      "Session 3: The skills AI cannot replace - taste, judgment, communication, adaptability. Co-delivered with a soft skills specialist.",
      "Session 4: Visibility and personal brand - why being skilled is not enough, how to build a presence that creates opportunities",
      "Session 5: Your 90-day plan - workshop session. Each student leaves with a written, specific action plan.",
    ],
    projects: [],
    whoFor: [
      "Final-year college students in any stream - engineering, commerce, arts, humanities, science, law, management",
      "Students who are 6-18 months away from entering the workforce",
    ],
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

  // --- Segment 5: Corporate Teams (B2B) ---
  // Per-profession cards - no pricing, contact for details
  {
    slug: "b2b-customer-support",
    status: "pre-register",
    audience: ["senior-it"],
    title: "Customer Support Teams",
    tagline: "Respond better. Respond faster",
    description:
      "Support agents draft responses in seconds instead of minutes. Written English improves across the team. Response quality stays consistent from agent to agent. If your agents handle even one additional ticket per hour because they draft faster, this training pays for itself within days.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "Operations managers, BPO training managers, customer service directors",
    whoForShort: "Support teams",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-hr",
    status: "pre-register",
    audience: ["senior-it"],
    title: "HR Teams",
    tagline: "Hire better. Communicate clearer. Move faster",
    description:
      "HR professionals write the same documents repeatedly - JDs, offer letters, rejection emails, performance reviews, policy communications. Your team leaves with ready-to-use templates that cut drafting time by 50-70%. Hiring cycles move faster. HR communications become consistent across the team.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "HR directors, talent acquisition heads, people ops managers",
    whoForShort: "HR teams",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-marketing",
    status: "pre-register",
    audience: ["senior-it"],
    title: "Marketing Teams",
    tagline: "Same headcount, more campaigns",
    description:
      "Marketing teams produce enormous volumes of content - social posts, email campaigns, ad copy, briefs, reports. Your team leaves with templates that eliminate the blank page and speed up first drafts without replacing creative judgment. More campaigns executed per quarter with the same team.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "Marketing managers, CMOs, brand managers, digital marketing directors",
    whoForShort: "Marketing teams",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-sales",
    status: "pre-register",
    audience: ["senior-it"],
    title: "Sales Teams",
    tagline: "Prospect smarter. Follow up faster. Close more",
    description:
      "Every hour your sales team spends writing is an hour not spent in conversations. Your team leaves with templates for prospecting emails, follow-ups, proposals, and CRM updates. If your sales team sends 3x more personalised follow-ups per day, what does that do to your pipeline by end of quarter?",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "Sales directors, VP Sales, revenue operations managers",
    whoForShort: "Sales teams",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-operations",
    status: "pre-register",
    audience: ["senior-it"],
    title: "Operations Teams",
    tagline: "Document faster. Communicate clearer. Run tighter",
    description:
      "Operations professionals deal with constant documentation - SOPs, process notes, vendor communications, escalation reports. Your team leaves with templates that cut documentation time by 60%. Less time writing about what is happening, more time making things happen.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "COOs, operations managers, process improvement heads, supply chain managers",
    whoForShort: "Operations teams",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-finance",
    status: "pre-register",
    audience: ["senior-it"],
    title: "Finance Teams",
    tagline: "Analyse faster. Report clearer. Explain better",
    description:
      "Finance professionals spend significant time turning numbers into narratives - management reports, variance analysis, board presentations. Co-delivered with a practising finance professional. Your team produces the same quality of management reporting in half the time. Board presentations get clearer. Non-finance stakeholders actually understand what the numbers mean.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "CFOs, finance controllers, FP&A managers",
    whoForShort: "Finance teams",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-ca",
    status: "pre-register",
    audience: ["senior-it"],
    title: "CA Firms",
    tagline: "File faster. Communicate clearer. Review smarter",
    description:
      "CA professionals and article clerks spend significant time on audit observations, tax summaries, compliance notices, and client communications. Co-delivered with a practising CA. Your firm produces the same quality work in a fraction of the time. Article clerks become productive faster.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "CA firm managing partners, training heads, ICAI chapter officers",
    whoForShort: "CA firms",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-legal",
    status: "pre-register",
    audience: ["senior-it"],
    title: "Legal Teams",
    tagline: "Draft faster. Think deeper. Bill smarter",
    description:
      "Lawyers and legal professionals spend hours on routine drafting - NDAs, contract reviews, compliance communications, client updates. Co-delivered with a practising legal professional. Your team handles more matters in the same hours. Drafting time drops dramatically. Billable capacity increases.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "Managing partners, general counsel, legal ops heads",
    whoForShort: "Legal teams",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-teachers",
    status: "pre-register",
    audience: ["senior-it"],
    title: "Teachers and Educators",
    tagline: "Plan better. Communicate clearer. Give feedback faster",
    description:
      "Teachers spend hours every week on documentation - lesson plans, assessments, parent communications, report card comments. None of this is teaching. Your staff leaves with templates that save 3-5 hours per week. Parent communication quality improves across the school. Teachers spend more time teaching.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "School principals, academic directors, teacher training coordinators",
    whoForShort: "Schools & educators",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-procurement",
    status: "pre-register",
    audience: ["senior-it"],
    title: "Procurement and Supply Chain",
    tagline: "Source smarter. Document faster. Communicate clearer",
    description:
      "Procurement professionals produce constant documentation under time pressure - RFQ documents, vendor evaluations, purchase orders, supplier communications. Your team leaves with templates that cut procurement documentation time by 50-70%. Fewer errors from unclear instructions. Faster procurement cycles.",
    duration: "Online or onsite",
    hours: "Full day or 2-3 live sessions",
    idealFor: "CPOs, procurement managers, supply chain directors",
    whoForShort: "Procurement teams",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
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
