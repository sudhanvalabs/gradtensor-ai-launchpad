import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningTracks from "@/components/LearningTracks";
import WhyGradTensor from "@/components/WhyGradTensor";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import SiteFooter from "@/components/SiteFooter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LearningTracks />
      <WhyGradTensor />
      <Testimonials />
      <FAQSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
