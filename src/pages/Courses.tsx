import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import AIMasteryGradientStrip from "@/components/AIMasteryGradientStrip";
import EducationalInstitutions from "@/components/EducationalInstitutions";
import CorporateOfferings from "@/components/CorporateOfferings";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { courses } from "@/data/courses";
import { ArrowLeft } from "lucide-react";

const coursesListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "GradTensor AI Courses",
  itemListElement: courses
    .filter((c) => c.status === "live")
    .map((course, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://gradtensor.com/courses/${course.slug}`,
      name: course.title,
    })),
};

const Courses = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Courses & Programs"
        description="AI Agentic Engineering Bootcamp, Teen AI Builders for schools, and corporate AI training. Stop fearing AI. Start getting ahead with it."
        path="/courses"
        jsonLd={coursesListLd}
      />
      <Navbar />

      {/* Back link */}
      <div className="pt-24 md:pt-28">
        <div className="section-container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Page intro */}
      <section className="pt-12 pb-4 md:pt-16">
        <div className="section-container">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            // All Programmes
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Every AI skill you need.{" "}
            <span className="gradient-text">In the right order.</span>
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            GradTensor delivers AI programmes through partnerships with
            colleges, training institutes, schools and corporates - a clear
            progression from your first AI application to production agentic
            systems.
          </p>
        </div>
      </section>

      <AIMasteryGradientStrip />
      <EducationalInstitutions />
      <CorporateOfferings />

      <SiteFooter />
    </div>
  );
};

export default Courses;
