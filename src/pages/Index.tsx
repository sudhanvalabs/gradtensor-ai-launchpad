import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIMasteryGradientStrip from "@/components/AIMasteryGradientStrip";
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
    "We help people stop fearing AI and start getting ahead with it. Live, hands-on courses from GradTensor.",
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
        title="GradTensor - Stop Fearing AI. Start Getting Ahead With It."
        description="We help people stop fearing AI and start getting ahead with it. Live, hands-on courses from GradTensor."
        path="/"
        jsonLd={[organizationLd]}
      />
      <Navbar />
      <Hero />
      <AIMasteryGradientStrip subtitle="A 4-level AI mastery ladder, from AI consumer to AI orchestrator. Find where you are and take the next step." />
      <WhyGradTensor />
      <SiteFooter />
    </div>
  );
};

export default Index;
