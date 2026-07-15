import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import WhatWeDo from "@/components/WhatWeDo";
import JudgmentLine from "@/components/JudgmentLine";
import Forge from "@/components/Forge";
import WhyGradTensor from "@/components/WhyGradTensor";
import OfferBand from "@/components/OfferBand";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { siteConfig } from "@/data/siteConfig";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GradTensor",
  url: "https://gradtensor.com",
  logo: "https://gradtensor.com/logo.png",
  email: "partnerships@gradtensor.com",
  description: siteConfig.defaultDescription,
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
        title="GradTensor - Governed AI automation for the physical economy"
        description={siteConfig.defaultDescription}
        path="/"
        jsonLd={[organizationLd]}
      />
      <Navbar />
      <Hero />
      <WhoWeServe />
      <WhatWeDo />
      <JudgmentLine />
      <Forge />
      <WhyGradTensor />
      <OfferBand />
      <SiteFooter />
    </div>
  );
};

export default Index;
