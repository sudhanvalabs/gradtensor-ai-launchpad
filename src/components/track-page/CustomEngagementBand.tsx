import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CustomEngagementBandProps {
  label: string;
  title: string;
  ctaText: string;
  ctaHref: string;
  variant?: "light" | "dark";
}

const CustomEngagementBand = ({
  label,
  title,
  ctaText,
  ctaHref,
  variant = "light",
}: CustomEngagementBandProps) => {
  const isWhatsApp = /^https?:\/\/(www\.)?wa\.me\//.test(ctaHref);
  const isExternal =
    !isWhatsApp &&
    (/^(https?:)?\/\//.test(ctaHref) || ctaHref.startsWith("mailto:"));
  const className =
    variant === "dark" ? "tp-custom tp-custom-dark" : "tp-custom tp-custom-light";

  return (
    <div className={className}>
      <div>
        <div className="tp-custom-label">{label}</div>
        <div className="tp-custom-title">{title}</div>
      </div>
      {isWhatsApp ? (
        <WhatsAppButton href={ctaHref} className="tp-custom-cta">
          {ctaText}
        </WhatsAppButton>
      ) : isExternal ? (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="tp-custom-cta"
        >
          {ctaText}
        </a>
      ) : (
        <Link to={ctaHref} className="tp-custom-cta">
          {ctaText}
        </Link>
      )}
    </div>
  );
};

export default CustomEngagementBand;
