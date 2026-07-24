import { ArrowRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

const OfferBand = () => {
  return (
    <section id="contact-offer" className="scroll-mt-16 bg-foreground py-20 text-background md:py-28">
      <div className="section-container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center animate-on-scroll">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-background/60">
            The next step
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Find out where AI belongs in your business
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
            Book a free 30-minute consultation. We talk through your operation and
            you leave with two or three concrete places AI can win back hours - and
            where it should stay out.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
            >
              Book a free 30-min consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="mt-2 font-mono text-xs tracking-wide text-background/55">
            Prefer to message us?{" "}
            <WhatsAppButton
              href={whatsappLink("consultation")}
              className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
            >
              WhatsApp
            </WhatsAppButton>{" "}
            or{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary/80"
            >
              email us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferBand;
