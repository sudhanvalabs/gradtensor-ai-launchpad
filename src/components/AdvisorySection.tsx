import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

const AdvisorySection = () => {
  return (
    <section className="pb-24 md:pb-32">
      <div className="section-container">
        <div className="animate-on-scroll mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Not sure which course is right for you?
          </h2>
          <p className="mb-8 text-base text-muted-foreground sm:text-lg">
            Every learner's situation is different. Chat with us and we'll help
            you pick the right starting point based on your background, goals,
            and timeline.
          </p>
          <WhatsAppButton
            href={whatsappLink("advisor")}
            className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
          >
            <MessageCircle size={18} />
            Chat with an Advisor
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;
