import { Building2, LineChart, GraduationCap } from "lucide-react";

/*
  Forge, described the way forgeprivate.com describes itself.

  This section previously listed capabilities (traceability, controls, the sealed
  environment). Accurate, but it was not the product's actual position. Forge is
  one workspace that three different people arrive at, and what changes between
  them is who brings what. That is the position; the capabilities are what make
  it credible, and they live in the promise line above the cards.

  The `brings` line on each card is the load-bearing one, because it is what
  makes three audiences a position rather than a menu. Keep it.

  Claim discipline, which matters more here than anywhere else on the site:

    * Forge is hosted software (Vercel and Supabase). There is no self-hosted or
      in-country deployment. Never say "your own servers" or "no data to third
      parties": document text goes to an embedding provider at ingest and
      questions go to a model provider. The true claims are the CONTROLS, which
      is what the promise line states, in Forge's own shipped wording.
    * Never "every answer is traced". A question asked with no documents
      attached has no source, and "every" is the one word a technical buyer can
      falsify.
    * The training card must not imply cohort management, grading, or progress
      tracking. None of that exists. Per-learner workspaces and a shared
      materials project do.
*/

const audiences = [
  {
    icon: Building2,
    who: "Teams in companies",
    sub: "Corporates and SMEs",
    brings: "You bring your documents and data.",
    line: "The work that most needs AI is the work you can least afford to paste into a public tool. Contracts, reports, customer information, the spreadsheets the business actually runs on.",
    line2: "Your people get the productivity they are already looking for elsewhere, and your material stays somewhere you can point to.",
  },
  {
    icon: LineChart,
    who: "Consultants and service providers",
    sub: "Research, risk and analytics",
    brings: "You bring your model. Your client brings the data.",
    line: "Deliver your proprietary model to clients as a service instead of licensing it away. They upload their own data, run it, and get the analysis back.",
    line2: "They never see the code. It runs in a sealed environment with no way out, so the thing you spent years building stays yours.",
  },
  {
    icon: GraduationCap,
    who: "Training and AI labs",
    sub: "Corporate L&D, universities and training providers",
    brings: "You bring the exercise. Learners bring real work.",
    line: "Run AI training on material that matters instead of invented examples. Each learner gets their own private workspace; you put the course materials in a shared one.",
    line2: "Because nothing leaves the organisation, exercises can use the company's own documents and data, which is the part that is normally impossible.",
  },
];

const Forge = () => {
  return (
    <section id="forge" className="scroll-mt-16 border-y border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="section-container">
        <div className="mb-14 max-w-2xl animate-on-scroll">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            The product
          </p>
          <h2 className="mb-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Forge
          </h2>
          <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <a
              href="https://www.forgeprivate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
            >
              Forge
            </a>{" "}
            is our own product, and it is where our engagements get built. A
            private workspace for confidential work: bring your documents, your
            data, and the programs you run on them, work with all of it using
            frontier AI, and keep control of what leaves.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            AI adoption is already happening in most organisations, and most of it
            is invisible. The answer is not to stop people using AI. It is to give
            them a better place to do it.
          </p>
        </div>

        <div className="mb-10 max-w-2xl animate-on-scroll">
          <h3 className="mb-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            One workspace. Three ways in.
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            What changes is who brings what. What does not change is the promise:
            your documents and your data stay yours, nothing you send trains a
            model, access is controlled, and what happens is recorded.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <div
              key={a.who}
              className="animate-on-scroll flex flex-col rounded-lg border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                <a.icon size={22} className="text-primary" />
              </div>
              <h4 className="font-display text-lg font-bold leading-snug tracking-tight">
                {a.who}
              </h4>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {a.sub}
              </p>
              {/* The line that makes three audiences a position rather than a menu. */}
              <p className="mt-4 font-display text-base font-medium leading-snug text-primary">
                {a.brings}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.line}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.line2}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground animate-on-scroll">
          Any organisation can use Forge on its own. In a GradTensor engagement we
          deploy and govern it for you, end to end, on your real work.{" "}
          <a
            href="https://www.forgeprivate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
          >
            forgeprivate.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Forge;
