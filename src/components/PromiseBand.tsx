const PromiseBand = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl animate-on-scroll">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            What you walk away with
          </p>
          <h2 className="font-display text-3xl italic font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Build AI systems you{" "}
            <em className="not-italic text-primary">understand</em>,{" "}
            <em className="not-italic text-primary">defend</em>, and{" "}
            <em className="not-italic text-primary">fix</em>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            Not toy notebooks. Not certificates of attendance. Working AI
            systems you built yourself, and can explain, debug, and ship with
            confidence.
          </p>
          <div
            aria-hidden="true"
            className="mt-8 h-px w-20 bg-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default PromiseBand;
