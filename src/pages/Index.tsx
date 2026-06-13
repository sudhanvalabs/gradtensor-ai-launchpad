import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromiseBand from "@/components/PromiseBand";
import ThreeTracks from "@/components/ThreeTracks";
import StatsRow from "@/components/StatsRow";
import EducationalInstitutions from "@/components/EducationalInstitutions";
import WhyGradTensor from "@/components/WhyGradTensor";
import CloserBand from "@/components/CloserBand";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GradTensor",
  url: "https://gradtensor.com",
  logo: "https://gradtensor.com/logo.png",
  email: "partnerships@gradtensor.com",
  description:
    "We help people stop fearing AI and start building with it. Hands-on, live AI training from GradTensor, an India-focused AI education company.",
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
        description="We help people stop fearing AI and start building with it. Hands-on, live AI training from GradTensor, an India-focused AI education company."
        path="/"
        jsonLd={[organizationLd]}
      />
      <Navbar />
      <Hero />
      <PromiseBand />
      <StatsRow />
      <ThreeTracks />
      <EducationalInstitutions />
      <WhyGradTensor />
      <CloserBand />
      <SiteFooter />
    </div>
  );
};

export default Index;
