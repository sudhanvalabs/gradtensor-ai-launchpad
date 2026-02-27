import { Link } from "react-router-dom";
import { siteConfig, whatsappLink } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="section-container">
        {/* Footer links */}
        <div className="flex flex-col items-center justify-between gap-6 text-base text-muted-foreground sm:flex-row">
          <div>
            <Link to="/" className="font-display text-lg font-bold tracking-tight">
              <span className="gradient-text">Grad</span>
              <span className="text-foreground">Tensor</span>
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">A venture of Sudhanva Labs LLP</p>
          </div>
          <div className="flex gap-6 font-display text-sm tracking-wider">
            <WhatsAppButton href={whatsappLink("general")} className="transition-colors hover:text-primary">
              WhatsApp Us
            </WhatsAppButton>
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
              Email Us
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
