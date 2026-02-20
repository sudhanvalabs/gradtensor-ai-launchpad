import { useState, type ReactNode } from "react";
import { QRCodeSVG } from "qrcode.react";
import { X, Copy, Check, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface WhatsAppButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const PHONE_DISPLAY = "+91 91080 30542";

function useIsMobile() {
  if (typeof window === "undefined") return false;
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

const WhatsAppButton = ({ href, className, children }: WhatsAppButtonProps) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) return; // let the link open WhatsApp directly
    e.preventDefault();
    setOpen(true);
  };

  const copyNumber = async () => {
    await navigator.clipboard.writeText(siteConfig.whatsapp.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative mx-4 w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X size={20} />
            </button>

            <h3 className="mb-2 font-display text-xl font-bold tracking-tight">
              Chat with us on WhatsApp
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Scan the QR code from your phone, or open WhatsApp Web below.
            </p>

            <div className="mb-6 flex justify-center rounded-xl bg-white p-4">
              <QRCodeSVG value={href} size={200} level="M" />
            </div>

            <div className="mb-4 flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-3">
              <span className="flex-1 font-display text-base font-medium">
                {PHONE_DISPLAY}
              </span>
              <button
                onClick={copyNumber}
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-display text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <ExternalLink size={16} />
              Open WhatsApp Web
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
