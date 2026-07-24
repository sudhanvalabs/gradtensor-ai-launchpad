import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const aboutDescription =
  "GradTensor brings governed AI automation to the physical economy - manufacturing, construction, distribution, and industrial services. We put AI to work across operations, from back-office paperwork to plant-floor maintenance, always under human control.";

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About GradTensor",
  description: aboutDescription,
  publisher: {
    "@type": "Organization",
    name: "GradTensor",
  },
};

const VALUES = [
  {
    name: "Governance first",
    desc: "We build AI that keeps a human in control, with an audit trail on every decision. Safety is designed in, not added later.",
  },
  {
    name: "Honest scoping",
    desc: "We tell you plainly what AI can and cannot do reliably in your operation, and where it must not go.",
  },
  {
    name: "Outcomes over hype",
    desc: "We measure success in hours saved, paperwork reduced, and downtime avoided - not in features shipped.",
  },
  {
    name: "Enterprise-grade engineering",
    desc: "We hold our AI to the standard of production systems we have run inside large global corporations.",
  },
];

const About = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About GradTensor"
        description={aboutDescription}
        path="/about"
        jsonLd={aboutLd}
      />
      <Navbar />

      {/* Back link */}
      <div className="pt-24 md:pt-28">
        <div className="section-container">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="section-container">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-primary uppercase">
            // About GradTensor
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
            Governed AI for the{" "}
            <span className="gradient-text">physical economy.</span>
          </h1>
          <p
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            GradTensor puts AI to work in the businesses that make, move, and
            maintain physical things. We bring credible, governed AI to an
            under-served sector - manufacturing first - and keep your people in
            control of it.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Our Mission
            </p>
            <h2 className="mb-6 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
              AI where it belongs.{" "}
              <em className="not-italic text-primary">Nowhere it doesn't.</em>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                Most AI vendors chase software, finance, and consumer apps. The
                businesses that actually make and move things - the plants, sites,
                and depots that run the real economy - get overlooked. We exist to
                change that.
              </p>
              <p>
                We bring generative and agentic AI to operations across the
                physical economy: back-office document work like enquiries, quotes,
                tenders, and quality paperwork, and plant-floor work like
                maintenance knowledge and log monitoring, troubleshooting support
                from your manuals and maintenance history, and expert answers over
                machine manuals and procedures. Always with a clear line between
                what AI carries and what stays with your people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl animate-on-scroll">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              How We Work
            </p>
            <h2 className="mb-6 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
              Assess, train, implement.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                We start with a Judgment Line Assessment to map your operations and
                find exactly where AI belongs. We align your leadership and train
                your teams to use it safely. Then we build and deploy governed AI
                assistants on Forge, our platform for operations automation - with a
                human in control and a full audit trail on every decision.
              </p>
            </div>
            <Link
              to="/#what-we-do"
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.18em] uppercase text-foreground transition-colors hover:text-primary"
            >
              See what we do
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 animate-on-scroll">
              <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Our Values
              </p>
              <h2 className="font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
                What we hold to.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 animate-on-scroll">
              {VALUES.map((v) => (
                <div
                  key={v.name}
                  className="flex flex-col gap-2 border border-foreground/80 bg-card p-6"
                >
                  <h3 className="font-display text-lg italic font-medium leading-tight tracking-tight text-primary">
                    {v.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card/80 to-card/50 p-8 md:p-10 text-center animate-on-scroll">
            <h2 className="mb-3 font-display text-2xl italic font-medium tracking-tight sm:text-3xl">
              See what AI can do in your business
            </h2>
            <p className="mb-6 text-base text-muted-foreground">
              Book a free one-hour demo-talk, run on your own documents and work.
              No slideware, no hard sell.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
              >
                Book a 1-hour demo-talk
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;
