import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { whatsappLink } from "@/data/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

const TRACKS = [
  {
    number: "Students",
    name: "For Students",
    href: "/for-students",
    color: "#c8472e",
  },
  {
    number: "Faculty",
    name: "For Faculty",
    href: "/for-faculty",
    color: "#7a9b8c",
  },
  {
    number: "Institutions",
    name: "For Institutions",
    href: "/for-institutions",
    color: "#d4a574",
  },
];

const DEFAULT_ACCENT = "#5fb32d";

const trackByPath = new Map(TRACKS.map((t) => [t.href, t]));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tracksOpen, setTracksOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setTracksOpen(true);
  };
  const closeDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setTracksOpen(false), 150);
  };

  const currentTrack = trackByPath.get(location.pathname);
  const isTracksActive = Boolean(currentTrack);

  const isActive = (href: string) => location.pathname === href;

  const underlineFor = (href: string) =>
    isActive(href) ? DEFAULT_ACCENT : undefined;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl animate-slide-down">
      <div className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <img src={logo} alt="GradTensor" className="h-[60px] w-[60px] dark:hidden" />
          <img src={logoDark} alt="GradTensor" className="h-[60px] w-[60px] hidden dark:block" />
          <span>
            <span className="text-gt-green">Grad</span>
            <span className="text-foreground">Tensor</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={`flex h-16 items-center border-b-2 font-display text-base tracking-wide transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
            style={{ borderColor: underlineFor("/") ?? "transparent" }}
          >
            Home
          </Link>

          <Link
            to="/framework"
            className={`flex h-16 items-center border-b-2 font-display text-base tracking-wide transition-colors hover:text-primary ${
              isActive("/framework") ? "text-primary" : "text-muted-foreground"
            }`}
            style={{ borderColor: underlineFor("/framework") ?? "transparent" }}
          >
            Framework
          </Link>

          {/* Tracks dropdown */}
          <div
            className="relative h-16"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={tracksOpen}
              className={`flex h-16 items-center gap-1 border-b-2 font-display text-base tracking-wide transition-colors hover:text-primary ${
                isTracksActive ? "text-primary" : "text-muted-foreground"
              }`}
              style={{
                borderColor: isTracksActive ? currentTrack!.color : "transparent",
              }}
              onFocus={openDropdown}
              onBlur={closeDropdown}
            >
              Programmes
              <ChevronDown
                size={14}
                className={`transition-transform ${tracksOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              role="menu"
              aria-hidden={!tracksOpen}
              className={`absolute left-0 top-full mt-2 w-[260px] overflow-hidden border border-foreground/40 bg-foreground text-background shadow-[var(--shadow-card)] transition-all duration-150 ${
                tracksOpen
                  ? "pointer-events-auto opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 -translate-y-1"
              }`}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              {TRACKS.map((track, i) => (
                <Link
                  key={track.href}
                  to={track.href}
                  role="menuitem"
                  className={`group relative flex items-center gap-3 px-6 py-4 transition-colors hover:bg-background/[0.08] ${
                    i > 0 ? "border-t border-background/15" : ""
                  }`}
                  onClick={() => setTracksOpen(false)}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-1"
                    style={{ backgroundColor: track.color }}
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-background/55">
                      {track.number}
                    </span>
                    <span className="font-display text-base italic font-medium leading-none">
                      {track.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/about"
            className={`flex h-16 items-center border-b-2 font-display text-base tracking-wide transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary" : "text-muted-foreground"
            }`}
            style={{ borderColor: underlineFor("/about") ?? "transparent" }}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`flex h-16 items-center border-b-2 font-display text-base tracking-wide transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary" : "text-muted-foreground"
            }`}
            style={{ borderColor: underlineFor("/contact") ?? "transparent" }}
          >
            Contact
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            aria-label="Toggle theme"
          >
            <Sun size={18} className="hidden dark:block" />
            <Moon size={18} className="block dark:hidden" />
          </button>
          <WhatsAppButton
            href={whatsappLink("planProgramme")}
            className="btn-shimmer rounded-lg border border-foreground bg-foreground px-5 py-2.5 font-display text-sm font-medium tracking-wider text-background transition-all hover:bg-foreground/90"
          >
            Bring AI to Your Campus
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
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block py-3 font-display text-base transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/framework"
            onClick={() => setIsOpen(false)}
            className={`block py-3 font-display text-base transition-colors hover:text-primary ${
              isActive("/framework") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Framework
          </Link>

          <p className="mt-2 pt-2 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Programmes
          </p>
          {TRACKS.map((track) => (
            <Link
              key={track.href}
              to={track.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 py-2.5 pl-3 font-display text-base transition-colors hover:text-primary ${
                isActive(track.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <span
                aria-hidden="true"
                className="inline-block h-3 w-1"
                style={{ backgroundColor: track.color }}
              />
              {track.name}
            </Link>
          ))}

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`mt-2 block py-3 font-display text-base transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`block py-3 font-display text-base transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>

          <WhatsAppButton
            href={whatsappLink("planProgramme")}
            className="mt-2 block rounded-lg border border-foreground bg-foreground px-4 py-2.5 text-center font-display text-sm font-medium tracking-wider text-background"
          >
            Bring AI to Your Campus
          </WhatsAppButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
