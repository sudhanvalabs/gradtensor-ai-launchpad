import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyGradTensor from "@/components/WhyGradTensor";
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

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="GradTensor - Build AI Products. Not Just AI Skills."
        description="Build AI products. Not just AI skills. A 5-stage learning journey from first curiosity to production-grade AI systems."
        path="/"
        jsonLd={[organizationLd]}
      />
      <Navbar />
      <Hero />
      <WhyGradTensor />
      <SiteFooter />
    </div>
  );
};

export default Index;
