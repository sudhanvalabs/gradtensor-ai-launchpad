const SITE_URL = "https://gradtensor.com";

const CRAWLER_UA =
  /WhatsApp|facebookexternalhit|Facebot|Twitterbot|LinkedInBot|TelegramBot|Slackbot|Discordbot|Googlebot/i;

interface OGData {
  title: string;
  description: string;
  image: string;
}

const OG_DATA: Record<string, OGData> = {
  "/": {
    title: "GradTensor - Build AI Products. Not Just AI Skills.",
    description:
      "Build AI products. Not just AI skills. A 5-stage learning journey from first curiosity to production-grade AI systems.",
    image: "/og/home.png",
  },
  "/teen-ai-builders": {
    title: "Teen AI Builders - Live AI Course for Teens | GradTensor",
    description:
      "Build your first AI app in 8 live sessions. No coding experience needed. Live classes, real projects, and a certificate. For ages 13 and above.",
    image: "/og/teen-ai-builders.png",
  },
  "/ai-engineering": {
    title: "AI Engineering & Agentic Foundations - 6-Week Live Course | GradTensor",
    description:
      "From LLM fundamentals to production-ready AI agents in 6 weeks. Build and deploy a RAG system and an AI agent. Live classes for engineers and professionals.",
    image: "/og/ai-engineering.png",
  },
  "/courses": {
    title: "AI Courses & Programs | GradTensor",
    description:
      "Build AI products. Not just AI skills. Three learning tracks - Student, Technical Builder, and Non-Technical Builder - each leading to real AI products you can ship.",
    image: "/og/courses.png",
  },
  "/schedule": {
    title: "Upcoming AI Course Batches | GradTensor",
    description:
      "Find the right schedule and enroll in an upcoming GradTensor AI course batch. Live online classes with flexible timings.",
    image: "/og/home.png",
  },
  "/trainers": {
    title: "Meet the Trainers | GradTensor",
    description:
      "Learn from practitioners who build AI systems in production. Meet GradTensor's expert trainers.",
    image: "/og/home.png",
  },
};

const FALLBACK: OGData = {
  title: "GradTensor - Build AI Products. Not Just AI Skills.",
  description:
    "Build AI products. Not just AI skills. A 5-stage learning journey from first curiosity to production-grade AI systems.",
  image: "/og/home.png",
};

function buildOGHTML(og: OGData, url: string): string {
  const imageURL = `${SITE_URL}${og.image}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${og.title}</title>
  <meta name="description" content="${og.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="GradTensor" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${og.title}" />
  <meta property="og:description" content="${og.description}" />
  <meta property="og:image" content="${imageURL}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@GradTensor" />
  <meta name="twitter:title" content="${og.title}" />
  <meta name="twitter:description" content="${og.description}" />
  <meta name="twitter:image" content="${imageURL}" />
</head>
<body></body>
</html>`;
}

export default function middleware(request: Request): Response | undefined {
  const ua = request.headers.get("user-agent") || "";

  if (!CRAWLER_UA.test(ua)) {
    return undefined;
  }

  const { pathname } = new URL(request.url);
  const og = OG_DATA[pathname] || FALLBACK;
  const html = buildOGHTML(og, `${SITE_URL}${pathname}`);

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export const config = {
  matcher: ["/", "/teen-ai-builders", "/ai-engineering", "/courses", "/schedule", "/trainers"],
};
