const SITE_URL = "https://www.gradtensor.com";

const CRAWLER_UA =
  /WhatsApp|facebookexternalhit|Facebot|Twitterbot|LinkedInBot|TelegramBot|Slackbot|Discordbot|Googlebot/i;

interface OGData {
  title: string;
  description: string;
  image: string;
}

const OG_DATA: Record<string, OGData> = {
  "/": {
    title: "GradTensor - Stop Fearing AI. Start Getting Ahead With It.",
    description:
      "We help people stop fearing AI and start getting ahead with it. Live, hands-on courses from GradTensor.",
    image: "/og/home.png",
  },
  "/corporate": {
    title: "Corporate AI Training | GradTensor",
    description:
      "AI training for your teams - from AI prompts that speed up daily work to AI workflows that compress entire processes. Customised to your function, your workflows, your documents.",
    image: "/og/home.png",
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
  title: "GradTensor - Stop Fearing AI. Start Getting Ahead With It.",
  description:
    "We help people stop fearing AI and start getting ahead with it. Live, hands-on courses from GradTensor.",
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
  matcher: ["/", "/corporate", "/schedule", "/trainers"],
};
