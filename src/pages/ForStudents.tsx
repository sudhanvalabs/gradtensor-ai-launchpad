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
  For Students — merges the old For Engineers (Build path) and For Professionals
  (Apply path) into one college-facing page. Placement-led. Two paths through the
  same ladder: Build for CS/engineering students, Apply for every other discipline.
  Accent: bold red #c8472e / #a13821.
*/

const BUILT_FOR = [
  "CS and engineering students - BTech, BE, BCA, MCA",
  "Non-tech students - BBA, MBA, BCom, MCom, CA, humanities, hospitality",
  "Final and pre-final year students preparing for placements",
  "Engineering college labs and coding clubs",
  "Students building their own AI projects",
  "Recent graduates entering the job market",
];

const ForStudents = () => {
  return (
    <TrackPageShell accent="#c8472e" accentDark="#a13821">
      <SEO
        title="For Students"
        description="Get placement-ready by building real AI. Whether you write code or not, leave with working AI systems you can show in interviews. Two paths: Build for tech students, Apply for every other discipline."
        path="/for-students"
      />

      <BreadcrumbBand
        segments={[
          { label: "GradTensor", href: "/" },
          { label: "For Students" },
        ]}
      />

      <TrackHeader
        trackLabel="For Students"
        headlineLead="Get placement-ready."
        headlineEm="Build real AI."
        lede="Don't just learn about AI - build and deploy it. Whether you write code or not, you leave with working AI systems you can demo in interviews. Two paths through the ladder: Build if you're in tech, Apply if you're not."
      />

      <BuiltForPanel items={BUILT_FOR} />

      {/* PATH A — BUILD (CS / Engineering) */}
      <div>
        <OfferingsHeading
          label="Path A / Build"
          headingLead="For CS & engineering students."
          headingEm="Ship production AI."
        />

        <ProductCard
          level="L 01"
          levelName="Foundations"
          name="AI Landscape for Builders"
          description="A fast-tracked orientation session. The terrain before the build. A clear mental map before going deep."
          includes="Model landscape. APIs vs frameworks. What's mature, what's hype. How to evaluate AI tools as an engineer."
          deliveredThrough="Delivered through engineering colleges, BCA/MCA institutes, and technical institutes."
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
          description="Two days. Hands-on. By the end, every student has built and shipped a working AI-powered application - and has something to show at placements."
          includes="First API calls. System prompts. Conversation memory. Tool use. A complete project deployed and demoed."
          deliveredThrough="Delivered through engineering colleges, BCA/MCA institutes, and placement cells."
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
          description="Four weeks of spaced learning with production patterns, real projects, and peer review. For students who want depth, not just exposure."
          includes="RAG and document AI. Prompt chains. Evals and testing. Cost optimisation. Production deployment patterns."
          deliveredThrough="Delivered through engineering college partnerships and campus AI clubs."
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
          description="Six months. The flagship. For students ready to design, build, and deploy autonomous AI systems in production - the profile employers compete for."
          includes="Agent architectures. Multi-agent orchestration. Memory and state. Evals at scale. Safety and assurance. Capstone shipped to production."
          deliveredThrough="Delivered through engineering colleges, technical institutes, and placement partners."
          meta={[
            { label: "Format", value: "6 months" },
            { label: "Duration", value: "64 live hours" },
            { label: "Mode", value: "Online cohort" },
            { label: "Certification", value: "GradTensor" },
          ]}
        />
      </div>

      {/* PATH B — APPLY (Non-tech disciplines) */}
      <div>
        <OfferingsHeading
          label="Path B / Apply"
          headingLead="For every other discipline."
          headingEm="From aware to applied."
        />

        <ProductCard
          level="L 01"
          levelName="Foundations"
          name="AI Literacy Primer"
          description="A short, focused session that builds genuine understanding of AI. No jargon, no hype, no fear."
          includes="What AI actually is. How to think about it. Vocabulary that matters. First confident steps with AI tools."
          deliveredThrough="Delivered through partnerships with non-tech colleges - BBA, MBA, BCom, MCom, CA, humanities, hospitality."
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
          description="A focused workshop where students learn to use AI tools for the work of their discipline. Domain-specific, project-based."
          includes="Effective prompting. Working with documents and data. AI assistants for your field. Practical patterns that make you stand out in placements."
          deliveredThrough="Delivered through partnerships with non-tech colleges and business schools."
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
          description="A four-week cohort for students ready to build AI workflows for their domain. Not coding-heavy. Outcome-heavy."
          includes="Prompt chains for your field. Custom AI assistants. Automating repeat work. A working AI workflow shipped by the end."
          deliveredThrough="Delivered as a career-skills programme for non-tech college cohorts."
          meta={[
            { label: "Format", value: "4 weeks" },
            { label: "Duration", value: "30 hours" },
            { label: "Mode", value: "Online cohort" },
          ]}
        />
      </div>

      <CustomEngagementBand
        variant="light"
        label="Delivered through your college"
        title="We run these programmes in partnership with your institution. Ask your placement cell or department to bring GradTensor to campus."
        ctaText="Get in touch →"
        ctaHref="/contact"
      />

      <FooterBand />
    </TrackPageShell>
  );
};

export default ForStudents;
