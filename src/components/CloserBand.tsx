import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CloserBand = () => {
  return (
    <section className="bg-foreground py-20 text-background md:py-28">
      <div className="section-container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center animate-on-scroll">
          <p className="font-display text-4xl italic font-medium tracking-tight sm:text-5xl md:text-6xl">
            Brick by brick.
          </p>
          <Link
            to="/manifesto"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-primary transition-colors hover:text-primary/80"
          >
            Read the manifesto
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CloserBand;
