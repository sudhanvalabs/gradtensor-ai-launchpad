import type { ReactNode } from "react";

interface TrackHeaderProps {
  trackLabel: string;
  headlineLead: string;
  headlineEm: string;
  lede: ReactNode;
}

const TrackHeader = ({ trackLabel, headlineLead, headlineEm, lede }: TrackHeaderProps) => (
  <header className="tp-header">
    <div className="tp-track-label">{trackLabel}</div>
    <h1 className="tp-h1">
      {headlineLead}
      <br />
      <em>{headlineEm}</em>
    </h1>
    <p className="tp-lede">{lede}</p>
  </header>
);

export default TrackHeader;
