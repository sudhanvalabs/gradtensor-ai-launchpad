import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const tracks = [
  {
    number: "Track 01",
    name: "For Leaders",
    description:
      "CXOs, boards, business heads. Direct AI work without doing it yourself.",
    range: "Levels 01 → 02",
    href: "/for-leaders",
    barColor: "#d4a574",
  },
  {
    number: "Track 02",
    name: "For Professionals",
    description:
      "Business functions, non-tech students. Apply AI in the work you already do.",
    range: "Levels 01 → 03",
    href: "/for-professionals",
    barColor: "#7a9b8c",
  },
  {
    number: "Track 03",
    name: "For Engineers",
    description:
      "Developers, architects, CS students, tech teams. Build production AI systems.",
    range: "Levels 01 → 04",
    href: "/for-engineers",
    barColor: "#c8472e",
  },
];

const ThreeTracks = () => {
  return (
    <section id="tracks" className="border-y border-border/50 py-20 md:py-28 scroll-mt-20">
      <div className="section-container">
        <div className="mb-12 animate-on-scroll">
          <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Find your door in
          </p>
          <h2 className="mb-3 font-display text-4xl italic font-medium tracking-tight sm:text-5xl">
            Three tracks. <em className="not-italic text-primary">Same ladder.</em>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Pick the track that matches your role. The framework underneath stays the same.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <Link
              key={track.href}
              to={track.href}
              className="group relative flex flex-col gap-3 overflow-hidden border border-ink/80 bg-card p-6 pt-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] animate-on-scroll"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-[6px]"
                style={{ backgroundColor: track.barColor }}
              />
              <p className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                {track.number}
              </p>
              <h3 className="font-display text-2xl italic font-medium leading-tight tracking-tight">
                {track.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {track.description}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-dashed border-muted-foreground/40 pt-4">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                  {track.range}
                </span>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                />
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          <Link
            to="/framework"
            className="inline-flex items-center gap-1.5 underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary/60"
          >
            Or explore the full framework
            <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ThreeTracks;
