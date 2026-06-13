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
  For Institutions — recast of the old For Leaders page, from corporate C-suite to
  college leadership (principals, deans, TPOs, management). The page sells the
  partnership: one partner for student programmes, faculty development, and a
  campus-wide AI roadmap. Cards 2 and 3 point conceptually at /for-students and
  /for-faculty.

  Accent: authoritative gold #d4a574 / #b8895a.
*/

const BUILT_FOR = [
  "Principals, deans, and directors",
  "Training and placement officers (TPOs)",
  "Heads of department",
  "College management and trustees",
  "IQAC and accreditation coordinators",
  "Colleges and universities aligning to NEP 2020",
];

const ForInstitutions = () => {
  return (
    <TrackPageShell accent="#d4a574" accentDark="#b8895a">
      <SEO
        title="For Institutions"
        description="Bring AI to your campus end to end. Make students placement-ready and faculty AI-fluent with programmes that map to NEP 2020 and AICTE priorities - one partner for student bootcamps, faculty development, and campus-wide AI capability."
        path="/for-institutions"
      />

      <BreadcrumbBand
        segments={[
          { label: "GradTensor", href: "/" },
          { label: "For Institutions" },
        ]}
      />

      <TrackHeader
        trackLabel="For Institutions"
        headlineLead="Bring AI to your campus."
        headlineEm="End to end."
        lede="Make your students placement-ready and your faculty AI-fluent, with programmes that map to NEP 2020 and AICTE priorities. One partner for student bootcamps, faculty development, and a campus-wide AI roadmap."
      />

      <BuiltForPanel items={BUILT_FOR} />

      <div>
        <OfferingsHeading
          label="Offerings"
          headingLead="One partner."
          headingEm="Whole campus."
        />

        <ProductCard
          level="I 01"
          levelName="Briefing"
          name="Campus AI Readiness Briefing"
          description="A focused session for leadership that cuts through the hype and gives a clear, honest view of what AI means for your institution - placements, curriculum, and faculty."
          includes="Where AI is today. What employers now expect from graduates. Implications for curriculum and NEP 2020. A practical roadmap for your campus. Questions to ask any AI training vendor."
          deliveredThrough="Delivered on-site for leadership teams, IQAC, and placement cells."
          meta={[
            { label: "Format", value: "Half-day" },
            { label: "Mode", value: "On-site" },
            { label: "Audience", value: "10-30" },
          ]}
        />

        <ProductCard
          level="I 02"
          levelName="Students"
          name="Placement-Focused Student Programmes"
          description="The student ladder delivered to your campus - from a 2-day Builder Intensive to the 6-month Agentic Engineering Bootcamp - so your graduates leave with working AI systems to show employers."
          includes="Build and Apply tracks for tech and non-tech students. Placement-ready portfolios. Cohorts sized to your batches."
          deliveredThrough="See For Students for the full ladder. Delivered through your placement cell and departments."
          meta={[
            { label: "Range", value: "Levels 01-04" },
            { label: "Mode", value: "On-site / Online" },
            { label: "Audience", value: "Student batches" },
          ]}
        />

        <ProductCard
          level="I 03"
          levelName="Faculty"
          name="Faculty Development Programmes"
          description="Get your faculty using AI in their teaching - and able to keep curricula current. From a half-day productivity workshop to a multi-day FDP."
          includes="Hands-on faculty workshops. Department-wide FDP. Train-the-trainer so your faculty can teach it themselves."
          deliveredThrough="See For Faculty for the full programme. Tailored to the subjects your faculty teach."
          meta={[
            { label: "Format", value: "Workshop to FDP" },
            { label: "Mode", value: "On-site / Online" },
            { label: "Audience", value: "Faculty cohorts" },
          ]}
        />
      </div>

      <CustomEngagementBand
        variant="dark"
        label="Institutional partnerships"
        title="Plan a campus-wide AI roadmap - students, faculty, and curriculum - with one partner."
        ctaText="Start a conversation →"
        ctaHref="/contact"
      />

      <FooterBand />
    </TrackPageShell>
  );
};

export default ForInstitutions;
