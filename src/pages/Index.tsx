import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import JudgmentLine from "@/components/JudgmentLine";
import Forge from "@/components/Forge";
import WorkflowDemos from "@/components/WorkflowDemos";
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

/*
  Landing page. WhoWeServe (the four operations archetypes) is deliberately not
  mounted here: it scoped the page to one pillar, consulting, and read oddly
  next to a training offer that includes colleges. The component is kept for a
  future consulting page.
*/
const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="GradTensor - AI training, consulting, and products"
        description={siteConfig.defaultDescription}
        path="/"
        jsonLd={[organizationLd]}
      />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <JudgmentLine />
      <Forge />
      <WorkflowDemos />
      <WhyGradTensor />
      <OfferBand />
      <SiteFooter />
    </div>
  );
};

export default Index;
