import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";

/* Small inline components keep the long prose readable in source. */

const P = ({ children }: { children: ReactNode }) => (
  <p className="mb-6 text-[18px] leading-[1.75] sm:text-[19px] md:text-[20px]">
    {children}
  </p>
);

const PullQuote = ({ children }: { children: ReactNode }) => (
  <blockquote className="my-12 font-display text-[26px] italic font-medium leading-[1.3] tracking-tight sm:my-16 sm:text-[30px] md:text-[34px]">
    {children}
  </blockquote>
);

const Ornament = () => (
  <div
    aria-hidden="true"
    className="my-12 text-center font-mono text-base text-muted-foreground tracking-[0.6em] sm:my-16"
  >
    ·  ·  ·
  </div>
);

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="mb-6 font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground sm:text-[13px]">
    {children}
  </p>
);

const manifestoLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "In the age of AI-built AI, we teach the craft.",
  author: {
    "@type": "Person",
    name: "Prabhu Eshwarla",
  },
  publisher: {
    "@type": "Organization",
    name: "GradTensor",
  },
  datePublished: "2026",
  description:
    "The GradTensor manifesto: why AI craftsmanship matters in an age where AI is increasingly built by AI.",
};

const Manifesto = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="The Manifesto"
        description="In the age of AI-built AI, we teach the craft. The GradTensor manifesto by Prabhu Eshwarla."
        path="/manifesto"
        jsonLd={manifestoLd}
      />
      <Navbar />

      {/* Top spacer for the fixed navbar */}
      <div className="pt-24 md:pt-28" />

      {/* Header band */}
      <header className="border-b border-foreground pb-12 pt-4">
        <div className="section-container">
          <div className="mx-auto max-w-[720px]">
            <p className="mb-4 font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground">
              GradTensor / The Manifesto
            </p>
            <h1 className="mb-6 font-display text-4xl italic font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
              In the age of AI-built AI, we teach the craft.
            </h1>
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Written by Prabhu Eshwarla, Founder · 2026
            </p>
          </div>
        </div>
      </header>

      {/* Essay body */}
      <article className="py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-[680px] text-foreground">
            <P>Something quiet is happening in software.</P>
            <P>
              AI is now built by AI. Models train models. Agents write code
              that creates agents. Systems compose other systems. The human is
              increasingly downstream of the build - reviewing what was
              generated, accepting what was produced, deploying what was
              assembled.
            </P>
            <P>
              This is not bad. Some of it is genuinely good. AI tooling has put
              working software within reach of people who could not have
              written it before. That is a real democratisation and it
              deserves to be celebrated.
            </P>
            <P>But there is a shadow on the wall.</P>

            <PullQuote>
              The cathedrals are being built by machines, and very few people
              are checking the{" "}
              <span className="text-primary">foundations</span>.
            </PullQuote>

            <P>
              We see it every day. Production AI systems that leak data.
              Agents that hallucinate confidently and break quietly. Vibecoded
              pipelines that pass demos and fail customers. Cost overruns that
              no one understands because no one can read the trace. The
              applications work until they don't, and when they don't, the
              people who built them cannot explain why.
            </P>
            <P>
              The skill that used to matter - knowing how to write the code -
              is being commoditised. The skill that matters now is different.
              It is the skill of building systems you understand, can defend,
              and can fix. It is the skill of designing for reliability before
              the demo and for cost before the launch. It is the skill of
              choosing what to build, what to evaluate, what to ship, and what
              to throw away.
            </P>
            <P>We call this skill the craft.</P>

            <Ornament />

            <SectionLabel>What we mean by craft.</SectionLabel>

            <P>
              We do not mean elitism. We do not mean that AI should be hard,
              or that only certain people are allowed to build with it. We
              mean the opposite.
            </P>
            <P>
              The craft is the patient, learnable, teachable set of practices
              that separates someone who prompts an AI into producing a demo
              from someone who builds an AI system that runs in production for
              two years and still works.
            </P>
            <P>
              The craft is knowing why the system behaves the way it does, not
              just that it behaved that way once on your laptop.
            </P>
            <P>
              The craft is choosing the right model, the right context, the
              right evaluations, the right guardrails - because you understand
              the tradeoffs, not because someone on LinkedIn said this was the
              new best practice.
            </P>
            <P>
              The craft is reading your logs. Writing your evals. Owning your
              costs. Shipping with intent.
            </P>

            <PullQuote>
              The <span className="text-primary">craft</span> is what the AI
              cannot do for you, even as the AI does more and more.
            </PullQuote>

            <Ornament />

            <SectionLabel>Why this matters now.</SectionLabel>

            <P>
              For decades, software craftsmanship was a conversation among
              programmers. The arguments were familiar - design patterns,
              clean code, test-driven development. The stakes were limited. A
              poorly written application was annoying, slow, sometimes
              embarrassing. It rarely changed the world.
            </P>
            <P>AI changes the stakes.</P>
            <P>
              The systems being built today are increasingly autonomous. They
              make decisions. They take actions. They write to databases, send
              messages, move money, talk to customers. When they go wrong,
              they go wrong at scale. The human cost of careless AI is already
              real and it will grow.
            </P>
            <P>
              The world does not need more people who can produce AI demos. It
              needs more people who can craft AI systems. It needs builders
              who treat AI as engineering rather than magic - knowable,
              structured, debuggable, defensible.
            </P>
            <P>That is who we serve.</P>

            <Ornament />

            <SectionLabel>What we are not.</SectionLabel>

            <P>
              We are not an AI awareness brand. Awareness is the floor, not
              the destination. A half-day session on what AI can and cannot do
              is useful. It is also not enough.
            </P>
            <P>
              We are not an AI hype factory. We will not promise AGI by
              Tuesday or replace your workforce by Friday. The honest claims
              about AI are large enough on their own. The dishonest claims do
              not need our help.
            </P>
            <P>
              We are not a doomer brand either. AI is not the end of humanity
              any more than electricity was. It is a powerful technology, and
              like every powerful technology, it rewards the careful and
              punishes the careless.
            </P>
            <P>
              We are not selling certificates. We are not selling badges. We
              are not selling membership in a community. We are selling a
              craft - which means we are selling a path, not a token.
            </P>

            <Ornament />

            <SectionLabel>What we believe.</SectionLabel>

            <P>
              We believe AI is engineering. Knowable. Structured. Debuggable.
              Teachable.
            </P>
            <P>We believe the only AI worth shipping is AI you understand.</P>
            <P>
              We believe a working application is worth more than a stack of
              certificates.
            </P>
            <P>
              We believe live, instructor-led teaching does what recorded
              videos cannot - because the craft is learned in the room, not
              from the screen.
            </P>
            <P>
              We believe Indian builders, professionals, and leaders deserve
              AI education that meets them where they are - not a translation
              of Silicon Valley curricula.
            </P>
            <P>
              We believe the next decade belongs to people who can craft AI
              systems, and the people who only know how to prompt them will
              be left behind.
            </P>

            <Ornament />

            <SectionLabel>What we do.</SectionLabel>

            <P>We teach AI craftsmanship across four levels.</P>
            <P>
              Foundations - so you can think clearly about AI.
              <br />
              Proficiency - so you can work confidently with it.
              <br />
              Builder - so you can build real things that work.
              <br />
              Orchestrator - so you can deploy autonomous systems you can
              defend.
            </P>
            <P>We teach this to three audiences.</P>
            <P>
              Leaders, so they can direct AI work with clarity and govern it
              with rigour.
              <br />
              Professionals, so they can apply AI to the work they already
              do, without becoming engineers.
              <br />
              Engineers, so they can build production AI systems that hold up
              under load, scrutiny, and time.
            </P>
            <P>
              Every cohort is live. Every course ends with something you
              built. Every learner leaves with the same thing - the beginning
              of a craft they can keep practising.
            </P>
            <P>This is what we do, and this is what we are for.</P>

            <Ornament />

            <SectionLabel>An invitation.</SectionLabel>

            <P>
              If you are tired of AI hype, AI doom, and AI noise, you are in
              the right place.
            </P>
            <P>
              If you want to build AI you understand, defend, and ship - we
              are who we built this for.
            </P>
            <P>
              The age of AI-built AI is here. The age of the AI craftsman is
              just beginning.
            </P>

            <PullQuote>
              <span className="text-primary">Brick by brick.</span>
            </PullQuote>
          </div>
        </div>
      </article>

      {/* Closing CTA band */}
      <section className="border-t border-foreground py-20 md:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-[680px] text-center">
            <h2 className="mb-4 font-display text-3xl italic font-medium tracking-tight sm:text-4xl md:text-5xl">
              Walk the path.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-foreground/85 sm:text-lg">
              Three tracks. Four levels. One craft. Find your door in.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/framework"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 rounded-lg border border-foreground bg-foreground px-8 py-3 font-display text-sm font-semibold tracking-wider text-background transition-all hover:bg-foreground/90"
              >
                Explore the Framework
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/#tracks"
                className="inline-flex items-center justify-center rounded-lg border border-foreground bg-transparent px-8 py-3 font-display text-sm font-medium tracking-wider text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Find Your Track
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Manifesto;
