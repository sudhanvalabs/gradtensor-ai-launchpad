import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface StickyCTAProps {
  label: string;
  onClick: () => void;
  heroRef: React.RefObject<HTMLElement>;
}

const StickyCTA = ({ label, onClick, heroRef }: StickyCTAProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroRef]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-background/80 backdrop-blur-xl p-3 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button
        onClick={onClick}
        className="btn-shimmer w-full rounded-lg bg-primary py-3 font-display text-base font-semibold tracking-wider text-primary-foreground"
      >
        {label}
      </Button>
    </div>
  );
};

export default StickyCTA;
