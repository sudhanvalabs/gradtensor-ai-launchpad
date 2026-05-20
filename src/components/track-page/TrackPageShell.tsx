import type { CSSProperties, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import { TRACK_PAGE_CSS } from "./styles";

interface TrackPageShellProps {
  accent: string;
  accentDark: string;
  children: ReactNode;
}

const TrackPageShell = ({ accent, accentDark, children }: TrackPageShellProps) => {
  const style = {
    ["--accent" as never]: accent,
    ["--accent-dark" as never]: accentDark,
  } as CSSProperties;

  return (
    <>
      <Navbar />
      <div className="gt-track-page" style={style}>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <style>{TRACK_PAGE_CSS}</style>
        </Helmet>
        <div className="tp-container">{children}</div>
      </div>
    </>
  );
};

export default TrackPageShell;
