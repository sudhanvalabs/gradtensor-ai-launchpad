import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningJourney from "@/components/LearningJourney";
import FullTrackCard from "@/components/FullTrackCard";
import WhyGradTensor from "@/components/WhyGradTensor";
import AdvisorySection from "@/components/AdvisorySection";
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
    "Build AI products. Not just AI skills. A 5-stage learning journey from first curiosity to production-grade AI systems.",
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
      name: "How is the learning journey structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GradTensor offers a 5-stage journey: Discover (no prerequisites), Portfolio (build interview-ready projects), Production (ship production-grade AI), Ship (launch your own AI product), and Advise (lead AI adoption). You can start at any stage that matches your level.",
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
        text: "All live sessions are recorded and shared within 24 hours. However, we strongly recommend attending live - the interaction, doubt-clearing, and accountability are what make live learning effective.",
      },
    },
  ],
};

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="GradTensor - Build AI Products. Not Just AI Skills."
        description="Build AI products. Not just AI skills. A 5-stage learning journey from first curiosity to production-grade AI systems."
        path="/"
        jsonLd={[organizationLd, faqLd]}
      />
      <Navbar />
      <Hero />
      <LearningJourney />
      <FullTrackCard />
      <WhyGradTensor />
      <AdvisorySection />
      {/* <Testimonials /> */}
      <FAQSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
