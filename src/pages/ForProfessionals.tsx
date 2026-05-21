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
  BEGIN REFERENCE MOCKUP — keep in sync with /Users/prabhueshwarla/Downloads/03-professionals.html
  Visual reference only; structure reuses the track-page components built for /for-engineers.
  Track accent: sage #7a9b8c, accent-dark #5a7e6f.
  Custom engagement band uses the dark variant (ink bg, accent outlined CTA).
  END REFERENCE MOCKUP
*/

const BUILT_FOR = [
  "Finance and accounting teams",
  "Marketing and sales professionals",
  "HR and operations",
  "Consultants and analysts",
  "Legal and CA firms",
  "Teachers and educators",
  "Non-tech college students - BBA, MBA, BCom, MCom, CA, humanities, hospitality",
  "Anyone whose work is mostly knowledge work",
];

const ForProfessionals = () => {
  return (
    <TrackPageShell accent="#7a9b8c" accentDark="#5a7e6f">
      <SEO
        title="For Professionals"
        description="Apply AI in the work you already do. Function-specific AI training for business teams, knowledge workers, and non-technical students."
        path="/for-professionals"
      />

      <BreadcrumbBand
        segments={[
          { label: "GradTensor", href: "/" },
          { label: "For Professionals" },
        ]}
      />

      <TrackHeader
        trackLabel="Track 02 / For Professionals"
        headlineLead="Apply AI"
        headlineEm="in the work you already do."
        lede="You don't need to become an engineer. You need to use AI well in your function, your domain, your daily work, whether you're already in a role or about to graduate into one. This track gets you there."
      />

      <BuiltForPanel items={BUILT_FOR} />

      <div>
        <OfferingsHeading
          headingLead="Three steps."
          headingEm="From aware to applied."
        />

        <ProductCard
          level="L 01"
          levelName="Foundations"
          name="AI Literacy Primer"
          description="A short, focused session that builds genuine understanding of AI. No jargon, no hype, no fear."
          includes="What AI actually is. How to think about it. Vocabulary that matters. First confident steps with AI tools."
          deliveredThrough="Delivered through corporate L&D programmes and partnerships with non-tech colleges (BBA, MBA, BCom, MCom, CA, humanities, hospitality)."
          meta={[
            { label: "Format", value: "Half-day" },
            { label: "Mode", value: "On-site / Online" },
            { label: "Audience", value: "20-100" },
          ]}
        />

        <ProductCard
          level="L 02"
          levelName="Proficiency"
          name="Applied AI Workshop"
          description="A focused workshop where participants learn to use AI tools for the work they actually do. Function-specific, project-based."
          includes="Effective prompting. Working with documents and data. AI assistants for your function. Practical patterns that save hours every week."
          deliveredThrough="Delivered through corporate function-specific training and partnerships with non-tech colleges (BBA, MBA, BCom, MCom, CA, humanities, hospitality). Functions served include Leadership, HR, Finance, Marketing, Sales, Legal, CA firms, Operations, Customer Support, Procurement, and Educators."
          meta={[
            { label: "Format", value: "1-2 days" },
            { label: "Mode", value: "On-site / Online" },
            { label: "Audience", value: "15-40" },
          ]}
        />

        <ProductCard
          level="L 03"
          levelName="Builder"
          name="Applied AI Cohort"
          description="A four-week cohort for professionals ready to build AI workflows for their domain. Not coding-heavy. Outcome-heavy."
          includes="Prompt chains for your function. Custom AI assistants. Automating repeat work. A working AI workflow shipped by the end."
          deliveredThrough="Delivered through corporate L&D partnerships and as a career-skills programme for non-tech college cohorts (BBA, MBA, BCom, MCom, CA, humanities, hospitality)."
          meta={[
            { label: "Format", value: "4 weeks" },
            { label: "Duration", value: "30 hours" },
            { label: "Mode", value: "Online cohort" },
          ]}
        />
      </div>

      <CustomEngagementBand
        variant="dark"
        label="For institutions and corporates"
        title="Custom programmes for colleges, business schools, and corporate L&D teams. Function-specific tracks available."
        ctaText="Talk to us →"
        ctaHref={whatsappLink("advisor")}
      />

      <FooterBand />
    </TrackPageShell>
  );
};

export default ForProfessionals;
