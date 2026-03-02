import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

const LandingNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl animate-slide-down">
      <div className="section-container flex h-16 items-center">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight"
        >
          <img
            src={logo}
            alt="GradTensor"
            className="h-[60px] w-[60px] dark:hidden"
          />
          <img
            src={logoDark}
            alt="GradTensor"
            className="h-[60px] w-[60px] hidden dark:block"
          />
          <span>
            <span className="gradient-text">Grad</span>
            <span className="text-foreground">Tensor</span>
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <Link
            to="/courses"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Browse Courses
          </Link>
          <WhatsAppButton
            href={whatsappLink("general")}
            className="flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 font-display text-sm font-medium tracking-wider text-primary transition-all hover:bg-primary/20"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </WhatsAppButton>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
