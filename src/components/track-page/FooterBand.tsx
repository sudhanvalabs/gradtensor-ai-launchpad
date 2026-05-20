interface FooterBandProps {
  left?: string;
  right?: string;
}

const FooterBand = ({
  left = "GradTensor / Sudhanva Labs LLP",
  right = "Bengaluru, India",
}: FooterBandProps) => (
  <footer className="tp-footer">
    <div>{left}</div>
    <div>{right}</div>
  </footer>
);

export default FooterBand;
