import { Fragment } from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface BreadcrumbBandProps {
  segments: BreadcrumbSegment[];
}

const BreadcrumbBand = ({ segments }: BreadcrumbBandProps) => (
  <div className="tp-breadcrumb">
    {segments.map((segment, i) => {
      const isLast = i === segments.length - 1;
      const node = segment.href && !isLast ? (
        <Link to={segment.href}>{segment.label}</Link>
      ) : (
        <strong>{segment.label}</strong>
      );
      return (
        <Fragment key={`${segment.label}-${i}`}>
          {node}
          {!isLast && <span className="tp-sep">/</span>}
        </Fragment>
      );
    })}
  </div>
);

export default BreadcrumbBand;
