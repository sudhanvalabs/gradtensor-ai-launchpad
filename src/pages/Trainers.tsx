import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trainers } from "@/data/trainers";
import { ArrowLeft, ExternalLink } from "lucide-react";

const trainersLd = trainers.map((trainer) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: trainer.name,
  jobTitle: trainer.title,
  description: trainer.bio[0],
  sameAs: trainer.links.map((link) => link.url),
}));

const Trainers = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Meet the Trainers"
        description="Learn from practitioners who build AI systems in production. Meet GradTensor's expert trainers."
        path="/trainers"
        jsonLd={trainersLd}
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

      {/* Header */}
      <section className="pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="section-container text-center">
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
            Meet Your <span className="gradient-text">Trainers</span>
          </h1>
          <p
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Learn from practitioners who build AI systems in production.
          </p>
        </div>
      </section>

      {/* Trainer cards */}
      <section className="pb-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl space-y-8">
            {trainers.map((trainer, i) => (
              <div
                key={trainer.slug}
                className="rounded-2xl border border-border bg-card p-8 md:p-10 animate-fade-up opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {trainer.name}
                </h2>
                <p className="mt-1 text-base text-primary font-medium">
                  {trainer.title}
                  {trainer.books.length > 0 && (
                    <>
                      {" ("}
                      {trainer.books.map((book, j) => (
                        <span key={j}>
                          {j > 0 && ", "}
                          <a
                            href={book.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-primary/30 underline-offset-2 transition-colors hover:text-primary/80"
                          >
                            {book.publisher}
                          </a>
                        </span>
                      ))}
                      {")"}
                    </>
                  )}
                </p>

                <div className="mt-6 space-y-4">
                  {trainer.bio.map((paragraph, j) => (
                    <p key={j} className="text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <ul className="mt-6 space-y-2">
                  {trainer.highlights.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item.includes("mlship") ? (
                        <>
                          Maintains{" "}
                          <a
                            href="https://github.com/sudhanvalabs/mlship"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline decoration-primary/30 underline-offset-2 hover:text-primary/80"
                          >
                            mlship
                          </a>
                          , open-source CLI for AI/ML engineers
                        </>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>

                {trainer.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-3">
                    {trainer.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Trainers;
