import { Link } from "react-router-dom";
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

        <Link
          to="/courses"
          className="ml-auto text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Browse Courses
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
