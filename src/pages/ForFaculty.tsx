import SEO from "@/components/SEO";
import BreadcrumbBand from "@/components/track-page/BreadcrumbBand";
import BuiltForPanel from "@/components/track-page/BuiltForPanel";
import CustomEngagementBand from "@/components/track-page/CustomEngagementBand";
import FooterBand from "@/components/track-page/FooterBand";
import OfferingsHeading from "@/components/track-page/OfferingsHeading";
import ProductCard from "@/components/track-page/ProductCard";
import TrackHeader from "@/components/track-page/TrackHeader";
import TrackPageShell from "@/components/track-page/TrackPageShell";

/*
  For Faculty — new page. The flagship "AI for Faculty - Productivity Workshop" card
  is grounded in the real CES-Telang IHM proposal (lesson plan / homework / test paper
  / concept explainer workflows, three-layer context, free Claude.ai, two 2-hour
  sessions, group project + presentation to principal).

  NOTE: the FDP and Train-the-Trainer cards below are DRAFT placeholder offerings -
  confirm scope, format, and pricing with the user before publishing.

  Accent: calm sage #7a9b8c / #5a7e6f.
*/

const BUILT_FOR = [
  "College and university faculty",
  "Department heads and senior lecturers",
  "Faculty across any discipline - engineering, commerce, management, hospitality, humanities",
  "Faculty new to AI tools",
  "Training and placement officers running faculty upskilling",
  "Institutions running Faculty Development Programmes (FDP)",
];

const ForFaculty = () => {
  return (
    <TrackPageShell accent="#7a9b8c" accentDark="#5a7e6f">
      <SEO
        title="For Faculty"
        description="Faculty learn to use AI immediately for the work that fills their week - lesson plans, homework, test papers, concept explanations - with examples from their own subjects. Hands-on, not awareness theatre."
        path="/for-faculty"
      />

      <BreadcrumbBand
        segments={[
          { label: "GradTensor", href: "/" },
          { label: "For Faculty" },
        ]}
      />

      <TrackHeader
        trackLabel="For Faculty"
        headlineLead="Teach with AI."
        headlineEm="Confidently."
        lede="Faculty learn to use AI immediately for the work that fills their week - lesson plans, homework, test papers, concept explanations - with examples from their own subjects. Hands-on practice, not awareness theatre."
      />

      <BuiltForPanel items={BUILT_FOR} />

      <div>
        <OfferingsHeading
          label="Offerings"
          headingLead="From first setup."
          headingEm="To teaching with AI."
        />

        <ProductCard
          variant="flagship"
          level="W 01"
          levelName="Workshop"
          name="AI for Faculty - Productivity Workshop"
          description="Two short online sessions across two days. Each faculty member configures their own AI workspace, practises real workflows hands-on, builds a group project between sessions, and presents to peers and the principal on Day 2."
          includes="Three-layer context setup (school / subject / class). Lesson Plan Generator. Homework Generator. Test Paper Generator. Multi-level Concept Explainer. Case Study & Scenario Builder. Refinement using your own past materials."
          deliveredThrough="Customised to the subjects your faculty teach. Runs on free Claude.ai - no licensing required. Includes two weeks of post-workshop email support."
          meta={[
            { label: "Format", value: "2 x 2-hour sessions" },
            { label: "Mode", value: "Online" },
            { label: "Audience", value: "Up to ~10 faculty" },
            { label: "Tools", value: "Free Claude.ai" },
          ]}
        />

        <ProductCard
          level="F 01"
          levelName="Programme"
          name="Faculty Development Programme (FDP)"
          description="A deeper multi-day FDP for departments that want faculty to go beyond personal productivity - into designing AI-aware assignments, assessments, and course materials."
          includes="Everything in the workshop, plus assessment design with AI, academic integrity in the AI era, building a reusable teaching toolkit, and a department-wide AI teaching playbook."
          deliveredThrough="Draft offering - format and alignment to AICTE / NEP 2020 FDP requirements to be confirmed."
          meta={[
            { label: "Format", value: "3-5 days" },
            { label: "Mode", value: "On-site / Online" },
            { label: "Audience", value: "15-30 faculty" },
          ]}
        />

        <ProductCard
          level="F 02"
          levelName="Embed"
          name="Curriculum & Train-the-Trainer"
          description="For colleges that want AI embedded into their courses long-term, taught by their own faculty - not dependent on an external trainer every semester."
          includes="Train a faculty cohort to deliver AI sessions themselves. Co-design AI-integrated course modules. Build shared teaching assets the department owns."
          deliveredThrough="Draft offering - scope and engagement model to be confirmed."
          meta={[
            { label: "Format", value: "Custom" },
            { label: "Mode", value: "On-site / Online" },
            { label: "Engagement", value: "Per department" },
          ]}
        />
      </div>

      <CustomEngagementBand
        variant="light"
        label="For colleges"
        title="Bring an AI productivity workshop or a full FDP to your faculty. Every session is tailored to the subjects your faculty actually teach."
        ctaText="Plan an FDP →"
        ctaHref="/contact"
      />

      <FooterBand />
    </TrackPageShell>
  );
};

export default ForFaculty;
