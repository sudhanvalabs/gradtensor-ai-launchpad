export type CourseStatus = "live" | "pre-register";

export type CourseCategory = "workshop" | "bootcamp" | "school" | "corporate";

export interface Course {
  slug: string;
  status: CourseStatus;
  category: CourseCategory;
  title: string;
  tagline: string;
  duration: string;
  hours: string;
  idealFor: string;
  whoForShort: string;
  description?: string;
  price?: string;
  enrollUrl?: string;
  weeks: string[];
  projects: string[];
  whoFor: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  faqs: { q: string; a: string }[];
}

export const courses: Course[] = [
  // --- AI Builder Intensive: 2-Day Hands-On (B2B for colleges & institutes) ---
  {
    slug: "ai-builder-intensive",
    status: "pre-register",
    category: "workshop",
    title: "AI Builder Intensive",
    tagline:
      "A 2-day hands-on programme for engineering, BCA and MCA colleges. Students build and deploy a live AI Interview Coach.",
    description:
      "Delivered through partnerships with engineering colleges and BCA/MCA institutes. Final and pre-final year students build and deploy a live, mobile-ready AI Mock Interview Coach at their own URL by end of Day 2 - using real AI APIs. The clearest entry point into AI for placement-bound students.",
    duration: "2 days",
    hours: "9 AM - 5 PM, in-person or online",
    idealFor:
      "Final & pre-final year engineering, BCA, MCA students preparing for placements",
    whoForShort: "Engineering & tech college cohorts",
    weeks: [
      "Day 1 - Understand and Build: How LLMs and AI APIs work. First API call to Claude. System prompts, conversation history, structured output. End state - a working interview coach in the browser.",
      "Day 2 - Ship and Impress: Error handling, mobile-responsive UI, memory so the app remembers past interviews, and live deployment. End state - the AI Interview Coach live at a URL each student owns.",
    ],
    projects: [
      "AI Mock Interview Coach - deployed live at each student's own URL. Conducts a full mock interview for any company and role, scores answers, gives detailed feedback, and generates a personalised 30-day placement prep plan.",
    ],
    whoFor: [
      "Final & pre-final year students preparing for placements",
      "Engineering, BCA, MCA cohorts - any branch",
      "College & training-institute placement programmes",
    ],
    ctaPrimary: "For Colleges: Download Proposal",
    ctaSecondary: "",
    faqs: [
      {
        q: "What will students actually build?",
        a: "An AI Mock Interview Coach. They enter any company and role and the AI conducts a full mock interview - asks questions, scores answers, gives detailed feedback, and generates a personalised 30-day placement prep plan. By end of Day 2 it is deployed live at a URL each student owns.",
      },
      {
        q: "Do students need prior AI or coding experience?",
        a: "No prior AI experience required. Basic familiarity with code helps but is not required - they use AI to generate the code, and we teach them how to direct it, read it, and make it theirs.",
      },
      {
        q: "Is this delivered to individuals?",
        a: "No. The programme is delivered through institutional partnerships only - engineering colleges and BCA/MCA institutes. Individual students access it through their college or training partner.",
      },
      {
        q: "How does this connect to the bootcamp?",
        a: "The Intensive is the entry path. It gives students a working understanding of AI APIs, prompts, and deployment in 2 days. The 6-month AI Agentic Engineering Bootcamp goes much deeper - advanced memory and vector databases, AI agents that search the web, multi-agent systems, and production-ready agentic AI systems.",
      },
      {
        q: "Do students get a certificate?",
        a: "Yes. Students receive a GradTensor participation certificate, plus access to the GradTensor AI community on WhatsApp.",
      },
    ],
  },

  // --- Flagship: AI Agentic Engineering Bootcamp ---
  {
    slug: "ai-agentic-engineering-bootcamp",
    status: "pre-register",
    category: "bootcamp",
    title: "AI Agentic Engineering Bootcamp",
    tagline:
      "Become an AI Orchestrator. The role companies will pay a premium for.",
    description:
      "Every student - PHP, Java, Python, Full Stack - is a potential candidate for this bootcamp. In 2026, writing code by hand is fast becoming a low-value skill. The best paying jobs in the coming years will go to AI Orchestrators - people who build and coordinate AI agents to solve any problem a business has, with extreme efficiency and accuracy. That is not a prediction. It is already happening. This bootcamp turns you into exactly that. Not an AI user. Not a prompt engineer. An AI Orchestrator - the person companies will pay a premium for because there simply are not enough of them.",
    duration: "6 months",
    hours: "4 months live training (64 hours) + 2 months capstone project",
    idealFor:
      "Students and working professionals moving to an AI career",
    whoForShort: "Students & professionals",
    weeks: [
      "Months 1-4: Live online training - 3 days a week including doubt clearance sessions. Learn AI fundamentals and build real AI agents from scratch.",
      "Months 5-6: Capstone project - build and deploy a production AI application. Your project is reviewed and mentored by GradTensor.",
    ],
    projects: [
      "Multiple AI agents built from scratch during training",
      "A production AI application built, deployed, and mentored during the capstone",
    ],
    whoFor: [
      "Engineering students and graduates - PHP, Java, Python, Full Stack, any stack",
      "Working professionals who want to move into AI engineering",
      "Anyone with basic coding experience who wants to become an AI Orchestrator",
    ],
    ctaPrimary: "Contact for Pricing",
    ctaSecondary: "",
    faqs: [
      {
        q: "What is an AI Orchestrator?",
        a: "An AI Orchestrator is someone who builds and coordinates AI agents to solve business problems with extreme efficiency and accuracy. They do not just use AI tools - they architect AI systems. This is the highest-demand role in tech right now.",
      },
      {
        q: "Do I need prior AI experience?",
        a: "No. You need basic coding experience in any language - Python, Java, PHP, JavaScript, anything. The bootcamp teaches AI engineering from the ground up.",
      },
      {
        q: "What happens after the 4 months of training?",
        a: "You spend 2 months building a capstone project - a production AI application reviewed and mentored by GradTensor. On successful completion, you receive GradTensor certification.",
      },
      {
        q: "Can I turn my capstone into a product?",
        a: "Yes. Students can choose to extend their capstone into a working product they take to market, or use it as a live demo of production expertise to land a job. The best capstone projects will have real users. We help students who want to go that route.",
      },
      {
        q: "How is this different from online AI courses?",
        a: "This is live, instructor-led training 3 days a week for 4 months, followed by 2 months of mentored project work. You build real AI agents, not toy projects. You leave with GradTensor certification and a production application.",
      },
    ],
  },

  // --- School Programme: Teen AI Builders (12-week B2B) ---
  {
    slug: "teen-ai-builders",
    status: "live",
    category: "school",
    title: "Teen AI Builders",
    tagline:
      "Hands-on AI development for Grades 8 to 12. Build. Deploy. Earn the GradTensor AI Builder Certificate.",
    description:
      "Students build a fully deployed AI-powered web application from scratch over 12 weeks. The application is an escape room game that runs live on the internet at a URL they can share with anyone. An AI model generates a different puzzle every time it is played. Students write every line of code, understand it, and deploy it themselves.",
    duration: "12 weeks",
    hours: "90 minutes per week",
    idealFor: "School students in Grades 8 to 12, any curriculum board",
    whoForShort: "Grades 8-12, no prerequisites",
    weeks: [
      "Weeks 1-3: AI Literacy and the Visual Shell - discover how Generative AI and language models actually work. Build a first web page using HTML and CSS.",
      "Weeks 4-6: Building the Game Engine with AI - write structured prompts and use an AI coding assistant to generate JavaScript step by step. By Week 6 the game is fully playable.",
      "Weeks 7-9: Going Live with AI - make the first live call to an AI language model API. The game now generates a different puzzle every time. Learn prompt engineering and error handling.",
      "Weeks 10-11: Polish, Deploy, and Extend - publish the application to the internet with a live URL. Add visual polish, fix bugs, and extend with their own ideas.",
      "Week 12: Showcase and Certification - present the live AI-powered application to the class. Receive the GradTensor AI Builder Certificate.",
    ],
    projects: [
      "A fully deployed AI-powered escape room game at a public URL - built from scratch using HTML, CSS, JavaScript, and live AI API integration",
    ],
    whoFor: [
      "School students in Grades 8 to 12 - any curriculum board, ages 12 to 17",
      "No prior coding or AI experience required",
      "Minimum 20 students per batch",
      "Conducted at your school - online or in-person",
    ],
    ctaPrimary: "Bring to Your School",
    ctaSecondary: "",
    faqs: [
      {
        q: "Do students need prior coding experience?",
        a: "No. The programme starts from scratch - no prior coding or AI experience required. Students learn HTML, CSS, JavaScript, and AI API integration as part of the course.",
      },
      {
        q: "What do students build?",
        a: "A fully deployed AI-powered escape room game that runs live on the internet. An AI model generates a different puzzle every time the game is played. Students write every line of code, understand it, and deploy it themselves.",
      },
      {
        q: "What skills do students develop?",
        a: "HTML and CSS (build and style web pages), JavaScript (dynamic logic and user interaction), AI API Integration (connect to live AI models), and Deployment (publish a working application to the internet).",
      },
      {
        q: "What is the minimum batch size?",
        a: "Minimum 20 students per batch. The programme can be customised to your school calendar and schedule.",
      },
      {
        q: "Is there a certification?",
        a: "Yes. Students receive the GradTensor AI Builder Certificate on successful completion of the programme.",
      },
    ],
  },

  // --- Corporate Training ---
  {
    slug: "b2b-leadership",
    status: "pre-register",
    category: "corporate",
    title: "Leadership Teams",
    tagline: "Lead the AI shift. Decide sharper. Move the organisation forward",
    description:
      "Senior leaders need a working grasp of AI - not coding skills, but the judgement to make confident bets on where AI fits, what to fund, and how to redesign teams and processes around it. Training covers AI prompts for strategic thinking, board and investor communication, and AI prompt chains that compress executive analysis and decision-making.",
    duration: "Online or onsite",
    hours: "Half day or full day",
    idealFor: "CEOs, CXOs, founders, business heads, function heads, senior leadership teams",
    whoForShort: "Senior leaders",
    weeks: [],
    projects: [],
    whoFor: [],
    ctaPrimary: "Contact Us",
    ctaSecondary: "",
    faqs: [],
  },
  {
    slug: "b2b-customer-support",
    status: "pre-register",
    category: "corporate",
    title: "Customer Support Teams",
    tagline: "Respond better. Respond faster",
    description:
      "Support agents draft responses in seconds instead of minutes. Written English improves across the team. Response quality stays consistent from agent to agent. Training covers AI prompts for common support scenarios and AI prompt chains that compress multi-step support processes.",
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
    category: "corporate",
    title: "HR Teams",
    tagline: "Hire better. Communicate clearer. Move faster",
    description:
      "HR professionals write the same documents repeatedly - JDs, offer letters, rejection emails, performance reviews, policy communications. Training covers AI prompts that cut drafting time by 50-70% and AI prompt chains that compress multi-step HR processes like hiring pipelines and performance cycles.",
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
    category: "corporate",
    title: "Marketing Teams",
    tagline: "Same headcount, more campaigns",
    description:
      "Marketing teams produce enormous volumes of content - social posts, email campaigns, ad copy, briefs, reports. Training covers AI prompts that eliminate the blank page and AI prompt chains that compress entire campaign creation from brief to first-week content.",
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
    category: "corporate",
    title: "Sales Teams",
    tagline: "Prospect smarter. Follow up faster. Close more",
    description:
      "Every hour your sales team spends writing is an hour not spent in conversations. Training covers AI prompts for prospecting, follow-ups, and proposals, plus AI prompt chains that compress research-to-outreach into minutes instead of hours.",
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
    category: "corporate",
    title: "Operations Teams",
    tagline: "Document faster. Communicate clearer. Run tighter",
    description:
      "Operations professionals deal with constant documentation - SOPs, process notes, vendor communications, escalation reports. Training covers AI prompts that cut documentation time by 60% and AI prompt chains that compress multi-step operational processes.",
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
    category: "corporate",
    title: "Finance Teams",
    tagline: "Analyse faster. Report clearer. Explain better",
    description:
      "Finance professionals spend significant time turning numbers into narratives - management reports, variance analysis, board presentations. Training covers AI prompts for financial communication and AI prompt chains that turn raw data into board-ready output in a fraction of the time.",
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
    category: "corporate",
    title: "CA Firms",
    tagline: "File faster. Communicate clearer. Review smarter",
    description:
      "CA professionals and article clerks spend significant time on audit observations, tax summaries, compliance notices, and client communications. Training covers AI prompts for CA-specific documents and AI prompt chains that collapse multi-step processes into chained prompt sequences.",
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
    category: "corporate",
    title: "Legal Teams",
    tagline: "Draft faster. Think deeper. Bill smarter",
    description:
      "Lawyers and legal professionals spend hours on routine drafting - NDAs, contract reviews, compliance communications, client updates. Training covers AI prompts for legal documents and AI prompt chains that compress contract reviews, matter preparation, and due diligence.",
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
    category: "corporate",
    title: "Teachers and Educators",
    tagline: "Plan better. Communicate clearer. Give feedback faster",
    description:
      "Teachers spend hours every week on documentation - lesson plans, assessments, parent communications, report card comments. Training covers AI prompts that save 3-5 hours per week and AI prompt chains that compress planning and communication cycles.",
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
    category: "corporate",
    title: "Procurement and Supply Chain",
    tagline: "Source smarter. Document faster. Communicate clearer",
    description:
      "Procurement professionals produce constant documentation under time pressure - RFQ documents, vendor evaluations, purchase orders, supplier communications. Training covers AI prompts and AI prompt chains that cut procurement documentation time by 50-70%.",
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
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return courses.filter((c) => c.category === category);
}
