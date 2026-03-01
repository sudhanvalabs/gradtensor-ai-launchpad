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
        description="Build AI products. Not just AI skills. Three learning tracks - Student, Technical Builder, and Non-Technical Builder - each leading to real AI products you can ship."
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

      <LearningJourney />
      {/* <AdvisorySection /> */}

      <SiteFooter />
    </div>
  );
};

export default Courses;
