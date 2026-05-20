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
  BEGIN REFERENCE MOCKUP — keep in sync with /Users/prabhueshwarla/Downloads/02-leaders.html
  Visual reference only; structure reuses the track-page components.
  Track accent: warm gold #d4a574, accent-dark #b8895a.
  Two product cards (L01-L02). Custom engagement band uses the dark variant
  and is doing real work here - it carries the L03-equivalent advisory offering.
  END REFERENCE MOCKUP
*/

const BUILT_FOR = [
  "CXOs and senior management",
  "Board members and trustees",
  "College principals and deans",
  "Heads of L&D and HR",
  "Business unit heads",
  "Founders and partners",
  "Principal architects and architecture review boards",
  "Investment committees and advisors",
];

const ForLeaders = () => {
  return (
    <TrackPageShell accent="#d4a574" accentDark="#b8895a">
      <SEO
        title="For Leaders"
        description="Direct AI work without doing it yourself. AI briefings and strategy intensives for CXOs, boards, principals, and senior leadership."
        path="/for-leaders"
      />

      <BreadcrumbBand
        segments={[
          { label: "GradTensor", href: "/" },
          { label: "For Leaders" },
        ]}
      />

      <TrackHeader
        trackLabel="Track 01 / For Leaders"
        headlineLead="Direct AI work."
        headlineEm="Without doing it yourself."
        lede="Most leaders don't need to build AI. They need to know what to approve, what to question, and what to escalate. This track gives you the clarity to do that."
      />

      <BuiltForPanel items={BUILT_FOR} />

      <div>
        <OfferingsHeading
          headingLead="Two formats."
          headingEm="No fluff."
        />

        <ProductCard
          level="L 01"
          levelName="Foundations"
          name="AI Briefing for Boards"
          description="A focused session that cuts through hype and gives leaders a clear, honest view of where AI is today and what it means for the organisation."
          includes="What AI can and cannot do today. Vocabulary to engage technical teams. Questions to ask your CTO. Red flags to watch for."
          deliveredThrough="Delivered through corporate L&D, board offsites, and senior leadership programmes at colleges and institutes."
          meta={[
            { label: "Format", value: "Half-day" },
            { label: "Mode", value: "On-site" },
            { label: "Audience", value: "10-30" },
          ]}
        />

        <ProductCard
          level="L 02"
          levelName="Proficiency"
          name="AI Strategy Intensive"
          description="Two days of structured work on the AI questions your organisation actually faces. Case-led, framework-driven, decision-focused."
          includes="A³ Framework for autonomous systems. Governance and risk. ROI patterns that work. Vendor evaluation. Building AI-ready teams. Buy versus build decisions."
          deliveredThrough="Delivered through corporate engagements and as executive programmes for institutional leadership teams. Also serves principal architects and architecture review boards making AI buy or build decisions."
          meta={[
            { label: "Format", value: "2 days" },
            { label: "Mode", value: "On-site" },
            { label: "Audience", value: "8-20" },
          ]}
        />
      </div>

      <CustomEngagementBand
        variant="dark"
        label="Beyond the standard tracks"
        title="Need deeper engagement? Advisory retainers and board sessions arranged by conversation."
        ctaText="Talk to us →"
        ctaHref={whatsappLink("advisor")}
      />

      <FooterBand />
    </TrackPageShell>
  );
};

export default ForLeaders;
