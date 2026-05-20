interface OfferingsHeadingProps {
  label?: string;
  headingLead: string;
  headingEm: string;
}

const OfferingsHeading = ({
  label = "Offerings",
  headingLead,
  headingEm,
}: OfferingsHeadingProps) => (
  <>
    <div className="tp-offerings-label">{label}</div>
    <h2 className="tp-offerings-h">
      {headingLead} <em>{headingEm}</em>
    </h2>
  </>
);

export default OfferingsHeading;
