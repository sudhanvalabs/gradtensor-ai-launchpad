import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningTracks from "@/components/LearningTracks";
import WhyGradTensor from "@/components/WhyGradTensor";
// import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GradTensor",
  url: "https://gradtensor.com",
  logo: "https://gradtensor.com/logo.png",
  email: "courses@gradtensor.com",
  description:
    "Build production-ready AI agents and RAG systems. Fast-track to AI job readiness through practical, project-focused learning with live cohorts.",
  sameAs: [
    "https://www.linkedin.com/company/gradtensor",
    "https://twitter.com/GradTensor",
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the difference between skill-based and cohort programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skill-based courses (6 weeks) focus on one area like AI agents or RAG. The cohort program (16 weeks) is a comprehensive journey from Python basics to deployed AI systems, ideal for deeper career transitions.",
      },
    },
    {
      "@type": "Question",
      name: "Will this help me in campus placements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You'll have deployed projects to show in interviews, and you'll be able to answer AI engineering questions that 99% of students can't. We've designed this specifically around what companies ask in campus AI roles.",
      },
    },
    {
      "@type": "Question",
      name: "What if I can't attend live sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All live sessions are recorded and shared within 24 hours. However, we strongly recommend attending live - the interaction, doubt-clearing, and accountability are what make cohort learning effective.",
      },
    },
  ],
};

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="GradTensor - From Zero to AI Engineer"
        description="Build production-ready AI agents and RAG systems. Fast-track to AI job readiness through practical, project-focused learning with live cohorts."
        path="/"
        jsonLd={[organizationLd, faqLd]}
      />
      <Navbar />
      <Hero />
      <LearningTracks />
      <WhyGradTensor />
      {/* <Testimonials /> */}
      <FAQSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
