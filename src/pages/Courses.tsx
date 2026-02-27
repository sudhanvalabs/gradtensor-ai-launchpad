import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import LearningJourney from "@/components/LearningJourney";
import AdvisorySection from "@/components/AdvisorySection";
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
        description="Build AI products. Not just AI skills. Explore our 5-stage learning journey from first curiosity to production-grade AI systems."
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

      {/* Header */}
      <section className="pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="section-container text-center">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Five stages from first curiosity to leading AI adoption. Start
            wherever you are.
          </p>
        </div>
      </section>

      <LearningJourney />
      <AdvisorySection />

      <SiteFooter />
    </div>
  );
};

export default Courses;
