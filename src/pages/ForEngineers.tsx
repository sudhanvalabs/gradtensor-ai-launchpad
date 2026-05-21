import SEO from "@/components/SEO";
import { whatsappLink } from "@/data/siteConfig";
import BreadcrumbBand from "@/components/track-page/BreadcrumbBand";
import BuiltForPanel from "@/components/track-page/BuiltForPanel";
import CustomEngagementBand from "@/components/track-page/CustomEngagementBand";
import FooterBand from "@/components/track-page/FooterBand";
import OfferingsHeading from "@/components/track-page/OfferingsHeading";
import ProductCard from "@/components/track-page/ProductCard";
import TrackHeader from "@/components/track-page/TrackHeader";
import TrackPageShell from "@/components/track-page/TrackPageShell";

/*
  BEGIN REFERENCE MOCKUP — keep in sync with /Users/prabhueshwarla/Downloads/04-engineers.html
  See repo file for full source. Key structure:
  - Breadcrumb: GradTensor / For Engineers
  - Header: 6px accent top border, track label, italic H1 "Build / production AI systems.", lede
  - Built for: 2-col list, em-dash bullets in accent-dark
  - Offerings: label + italic H2 "Four levels. Brick by brick." (accent-dark em)
  - 4 product cards (3-col grid: level / content / meta), L04 = inverted flagship
  - Custom engagement band (light variant): paper bg, 2px ink border, dark CTA → /contact
  - Footer band
  END REFERENCE MOCKUP
*/

const BUILT_FOR = [
  "Working software developers",
  "CS and engineering students",
  "Corporate tech teams",
  "Engineering college labs",
  "Solo builders and indie hackers",
  "Engineering managers",
  "Solution and technical architects",
  "Senior engineers moving into AI roles",
];

const ForEngineers = () => {
  return (
    <TrackPageShell accent="#c8472e" accentDark="#a13821">
      <SEO
        title="For Engineers"
        description="Build production AI systems. From your first working build to deploying autonomous agents in production. The full ladder, taught by engineers who ship."
        path="/for-engineers"
      />

      <BreadcrumbBand
        segments={[
          { label: "GradTensor", href: "/" },
          { label: "For Engineers" },
        ]}
      />

      <TrackHeader
        trackLabel="Track 03 / For Engineers"
        headlineLead="Build"
        headlineEm="production AI systems."
        lede="From your first working build to deploying autonomous agents in production. The full ladder, taught by engineers who ship."
      />

      <BuiltForPanel items={BUILT_FOR} />

      <div>
        <OfferingsHeading
          headingLead="Four levels."
          headingEm="Brick by brick."
        />

        <ProductCard
          level="L 01"
          levelName="Foundations"
          name="AI Landscape for Engineers"
          description="A fast-tracked orientation session. The terrain before the build. For engineers who want a clear mental map before going deep."
          includes="Model landscape. APIs vs frameworks. What's mature, what's hype. How to evaluate AI tools as an engineer."
          deliveredThrough="Delivered through engineering colleges, BCA/MCA institutes, and corporate tech teams."
          meta={[
            { label: "Format", value: "Half-day" },
            { label: "Mode", value: "On-site / Online" },
            { label: "Audience", value: "20-50" },
          ]}
        />

        <ProductCard
          level="L 02"
          levelName="Proficiency"
          name="AI Builder Intensive"
          description="Two days. Hands-on. By Friday, every participant has built and shipped a working AI-powered application."
          includes="First API calls. System prompts. Conversation memory. Tool use. A complete project deployed and demoed."
          deliveredThrough="Delivered through engineering colleges, BCA/MCA institutes, and corporate tech teams."
          meta={[
            { label: "Format", value: "2 days" },
            { label: "Mode", value: "On-site / Online" },
            { label: "Audience", value: "15-30" },
          ]}
        />

        <ProductCard
          level="L 03"
          levelName="Builder"
          name="AI Builder Cohort"
          description="Four weeks of spaced learning with production patterns, real projects, and peer review. For engineers who want depth, not just exposure."
          includes="RAG and document AI. Prompt chains. Evals and testing. Cost optimisation. Production deployment patterns."
          deliveredThrough="Delivered through engineering college partnerships and corporate engineering teams. Also serves Solution Architects and Technical Architects designing AI-integrated systems."
          meta={[
            { label: "Format", value: "4 weeks" },
            { label: "Duration", value: "30 hours" },
            { label: "Mode", value: "Online cohort" },
          ]}
        />

        <ProductCard
          variant="flagship"
          level="L 04"
          levelName="Orchestrator"
          name="AI Agentic Engineering Bootcamp"
          description="Six months. The flagship. For engineers ready to design, build, and deploy autonomous AI systems in production."
          includes="Agent architectures. Multi-agent orchestration. Memory and state. Evals at scale. Safety and assurance. Capstone shipped to production."
          deliveredThrough="Delivered through engineering colleges, technical institutes, placement partners, and corporate engineering teams. Also serves senior engineers and architects transitioning into AI systems roles."
          meta={[
            { label: "Format", value: "6 months" },
            { label: "Duration", value: "64 live hours" },
            { label: "Mode", value: "Online cohort" },
            { label: "Certification", value: "GradTensor" },
          ]}
        />
      </div>

      <CustomEngagementBand
        variant="light"
        label="For colleges and corporates"
        title="Custom engineering programmes for CS departments, engineering teams, and tech-led organisations."
        ctaText="Talk to us →"
        ctaHref={whatsappLink("advisor")}
      />

      <FooterBand />
    </TrackPageShell>
  );
};

export default ForEngineers;
