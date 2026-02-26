import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { whatsappLink } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/schedule", label: "Schedule" },
    { href: "/trainers", label: "Trainers" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl animate-slide-down">
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <img src={logo} alt="GradTensor" className="h-[60px] w-[60px] dark:hidden" />
          <img src={logoDark} alt="GradTensor" className="h-[60px] w-[60px] hidden dark:block" />
          <span>
            <span className="gradient-text">Grad</span>
            <span className="text-foreground">Tensor</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-display text-base tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            aria-label="Toggle theme"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>
          <WhatsAppButton
            href={whatsappLink("general")}
            className="btn-shimmer rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 font-display text-sm font-medium tracking-wider text-primary transition-all hover:bg-primary/20"
          >
            Talk to an Advisor
          </WhatsAppButton>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all"
            aria-label="Toggle theme"
          >
            <Sun size={16} className="hidden dark:block" />
            <Moon size={16} className="block dark:hidden" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-b border-border bg-background px-4 pb-4 md:hidden animate-slide-down">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 font-display text-base text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppButton
            href={whatsappLink("general")}
            className="mt-2 block rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5 text-center font-display text-sm font-medium tracking-wider text-primary"
          >
            Talk to an Advisor
          </WhatsAppButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
