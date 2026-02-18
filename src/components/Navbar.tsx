import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold tracking-tight">
          <span className="gradient-text">Grad</span>
          <span className="text-foreground">Tensor</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-display text-sm tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@gradtensor.com"
            className="rounded-md border border-primary/30 bg-primary/10 px-4 py-2 font-display text-xs font-medium tracking-wider text-primary transition-all hover:bg-primary/20"
          >
            Talk to an Advisor
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-b border-border bg-background px-4 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 font-display text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:hello@gradtensor.com"
            className="mt-2 block rounded-md border border-primary/30 bg-primary/10 px-4 py-2 text-center font-display text-xs font-medium tracking-wider text-primary"
          >
            Talk to an Advisor
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
