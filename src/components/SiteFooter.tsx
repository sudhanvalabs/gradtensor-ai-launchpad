import { Link } from "react-router-dom";
import { siteConfig, whatsappLink } from "@/data/siteConfig";

const SiteFooter = ({ hideCta = false }: { hideCta?: boolean }) => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="section-container">
        {/* CTA banner */}
        {!hideCta && <div className="mb-12 rounded-xl border border-primary/20 bg-card p-8 text-center card-glow animate-on-scroll sm:p-12">
          <h3 className="mb-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build Your AI Career?
          </h3>
          <p className="mx-auto mb-6 max-w-lg text-base text-muted-foreground">
            Join the next cohort and go from zero to deployed AI projects in weeks, not years.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/courses"
              className="btn-shimmer inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 font-display text-base font-semibold tracking-wider text-primary-foreground transition-all hover:shadow-[var(--glow-strong)]"
            >
              Browse Courses
            </Link>
            <a
              href={whatsappLink("general")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3.5 font-display text-base font-medium tracking-wider text-foreground transition-all hover:border-primary/30"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>}

        {/* Footer links */}
        <div className="flex flex-col items-center justify-between gap-6 text-base text-muted-foreground sm:flex-row">
          <Link to="/" className="font-display text-lg font-bold tracking-tight">
            <span className="gradient-text">Grad</span>
            <span className="text-foreground">Tensor</span>
          </Link>
          <div className="flex gap-6 font-display text-sm tracking-wider">
            <Link to="/courses" className="transition-colors hover:text-primary">
              Courses
            </Link>
            <a href={whatsappLink("general")} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
              WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
