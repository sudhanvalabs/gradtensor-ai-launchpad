import { FileSearch, KeyRound, Lock } from "lucide-react";

/*
  Forge, described as it is actually built.

  This section previously claimed Forge was "our platform for governed AI" with
  four named products, and the mockup that preceded this rewrite claimed it
  "runs on your own servers, no data to third parties". Both are wrong in ways
  that matter on a page selling trustworthiness:

    * Forge is hosted software (Vercel and Supabase). There is no self-hosted or
      in-country deployment today. Never say "your own servers".
    * Data does reach third parties by design: document text goes to an
      embedding provider at ingest, and questions plus retrieved material go to a
      model provider. The true claims are the CONTROLS, which is what the three
      cards below state.
    * "Every output traced to its sources" is falsifiable in one question: ask
      Forge something with no documents attached and there is no source. The
      shipped wording is "answers can be traced".

  The sealed-environment card is the one genuinely differentiated thing here and
  is shipped, so it can be as concrete as it likes.
*/

const capabilities = [
  {
    icon: FileSearch,
    title: "Answers you can trace",
    description:
      "Answers can be traced back to the material they came from, so you know what a claim rests on before you act on it.",
  },
  {
    icon: KeyRound,
    title: "Controls you set",
    description:
      "Access controls, audit logs, and retention you set, with permanent deletion when you want it. Nothing you send trains a model.",
  },
  {
    icon: Lock,
    title: "A sealed room for your model",
    description:
      "Deliver a proprietary model to a client instead of licensing it away. They upload their data and get the analysis back, and never see the code.",
  },
];

const Forge = () => {
  return (
    <section id="forge" className="scroll-mt-16 border-y border-border/50 bg-secondary/30 py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 max-w-2xl animate-on-scroll">
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
            private AI workspace for confidential work: your people work with your
            documents and data in plain language, inside a workspace your
            organisation controls.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            The work that most needs AI is the work you can least afford to paste
            into a public tool. Forge is where that work can go instead.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className="animate-on-scroll rounded-lg border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary">
                <c.icon size={22} className="text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {c.description}
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
