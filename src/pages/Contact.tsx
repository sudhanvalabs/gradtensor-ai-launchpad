import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import WhatsAppButton from "@/components/WhatsAppButton";

const CALENDLY_URL = "https://calendly.com/gradtensor/30min";
const WHATSAPP_GENERAL =
  "https://wa.me/919108030542?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20GradTensor";
const FORM_RECIPIENT = "partnerships@gradtensor.com";

const contactLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact GradTensor",
  url: "https://gradtensor.com/contact",
  publisher: {
    "@type": "Organization",
    name: "GradTensor",
    email: "partnerships@gradtensor.com",
    telephone: "+91 91080 30542",
  },
};

type FormStatus = "idle" | "success";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const organisation = String(data.get("organisation") || "").trim();
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "").trim();

    const subject = `Contact enquiry: ${name}${interest ? ` (${interest})` : ""}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : null,
      `Interest: ${interest}`,
      "",
      "Message:",
      message,
    ].filter(Boolean) as string[];

    const mailto = `mailto:${FORM_RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setStatus("success");
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact"
        description="Reach GradTensor by WhatsApp, email, or a scheduled call. We work with colleges across India - students, faculty, and institutional leadership."
        path="/contact"
        jsonLd={contactLd}
      />
      <Navbar />

      <div className="pt-24 md:pt-28">
        <div className="section-container">
          {/* Breadcrumb */}
          <p className="mb-8 font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">
              GradTensor
            </Link>
            <span className="mx-2">/</span>
            <strong className="font-semibold text-foreground">Contact</strong>
          </p>

          {/* Header */}
          <header className="border-t-[6px] border-primary pt-8 pb-12">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-primary">
              Get in touch
            </p>
            <h1 className="mb-6 max-w-3xl font-display text-4xl italic font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Tell us what you want to build.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground/85 sm:text-xl">
              We work with colleges across India - students, faculty, and
              institutional leadership. Tell us a little about who you are and
              what you need. We will respond within two working days.
            </p>
          </header>
        </div>
      </div>

      {/* Direct contact channels */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-3">
            {/* WhatsApp card */}
            <div className="group relative flex flex-col gap-3 overflow-hidden border border-foreground/80 bg-card p-6 pt-7">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-[6px]"
                style={{ backgroundColor: "#d4a574" }}
              />
              <div className="mt-3 flex items-center gap-2">
                <MessageCircle size={16} className="text-muted-foreground" />
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Fastest reply
                </p>
              </div>
              <h3 className="font-display text-2xl italic font-medium leading-tight">
                WhatsApp us
              </h3>
              <div className="space-y-1 font-mono text-sm leading-relaxed text-foreground/90">
                <div>
                  <span className="text-foreground">+91 91080 30542</span>
                  <span className="text-muted-foreground"> General enquiries</span>
                </div>
                <div>
                  <span className="text-foreground">+91 98452 03997</span>
                  <span className="text-muted-foreground"> Institutional partnerships</span>
                </div>
              </div>
              <WhatsAppButton
                href={WHATSAPP_GENERAL}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-foreground bg-foreground px-5 py-2.5 font-display text-sm font-medium tracking-wider text-background transition-all hover:bg-foreground/90"
              >
                Open WhatsApp
                <ArrowRight size={14} />
              </WhatsAppButton>
            </div>

            {/* Email card */}
            <div className="group relative flex flex-col gap-3 overflow-hidden border border-foreground/80 bg-card p-6 pt-7">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-[6px]"
                style={{ backgroundColor: "#7a9b8c" }}
              />
              <div className="mt-3 flex items-center gap-2">
                <Mail size={16} className="text-muted-foreground" />
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  Best for detailed enquiries
                </p>
              </div>
              <h3 className="font-display text-2xl italic font-medium leading-tight">
                Email us
              </h3>
              <div className="space-y-1 font-mono text-sm leading-relaxed">
                <a
                  href="mailto:partnerships@gradtensor.com"
                  className="text-foreground underline decoration-foreground/30 underline-offset-2 transition-colors hover:text-primary"
                >
                  partnerships@gradtensor.com
                </a>
                <p className="font-display text-sm leading-relaxed text-muted-foreground">
                  For institutional partnerships - colleges, placement cells,
                  and faculty development.
                </p>
              </div>
              <a
                href="mailto:partnerships@gradtensor.com"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-foreground bg-foreground px-5 py-2.5 font-display text-sm font-medium tracking-wider text-background transition-all hover:bg-foreground/90"
              >
                Open Email
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Phone card */}
            <div className="group relative flex flex-col gap-3 overflow-hidden border border-foreground/80 bg-card p-6 pt-7">
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 top-0 h-[6px]"
                style={{ backgroundColor: "#c8472e" }}
              />
              <div className="mt-3 flex items-center gap-2">
                <Phone size={16} className="text-muted-foreground" />
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                  For scheduled calls
                </p>
              </div>
              <h3 className="font-display text-2xl italic font-medium leading-tight">
                Call us
              </h3>
              <div className="space-y-1 font-mono text-sm leading-relaxed text-foreground/90">
                <div>+91 91080 30542</div>
                <div>+91 98452 03997</div>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-foreground bg-transparent px-5 py-2.5 font-display text-sm font-medium tracking-wider text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Book a call
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What helps us help you */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              What helps us help you
            </p>
            <h2 className="mb-6 font-display text-2xl italic font-medium tracking-tight sm:text-3xl">
              A few details speed things up.
            </h2>
            <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              When you reach out, it helps if you mention who it is for
              (Students, Faculty, or your Institution), the size of the cohort,
              and the timeframe you are working with. If you have a specific
              programme in mind, name it. If you do not, describe the outcome
              you want and we will suggest a fit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Or send us a message
            </p>
            <h2 className="mb-8 font-display text-2xl italic font-medium tracking-tight sm:text-3xl">
              Send us a note.
            </h2>

            {status === "success" ? (
              <div
                role="status"
                className="space-y-3 border-l-4 border-primary bg-card p-6"
              >
                <p className="font-display text-lg italic">
                  Your email client should have opened with the message ready
                  to send.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Send it from there and we will reply within two working
                  days. If nothing opened, email us directly at{" "}
                  <a
                    href={`mailto:${FORM_RECIPIENT}`}
                    className="text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80"
                  >
                    {FORM_RECIPIENT}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm">
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                      Your name *
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="rounded-md border border-foreground/40 bg-background px-3 py-2.5 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm">
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                      Email *
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="rounded-md border border-foreground/40 bg-background px-3 py-2.5 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                    Organisation
                  </span>
                  <input
                    type="text"
                    name="organisation"
                    autoComplete="organization"
                    className="rounded-md border border-foreground/40 bg-background px-3 py-2.5 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                    I am interested in *
                  </span>
                  <select
                    name="interest"
                    required
                    defaultValue=""
                    className="rounded-md border border-foreground/40 bg-background px-3 py-2.5 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="For Students">For Students</option>
                    <option value="For Faculty">For Faculty</option>
                    <option value="For Institutions">For Institutions</option>
                    <option value="Not sure yet">Not sure yet</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm">
                  <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                    Tell us more *
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="rounded-md border border-foreground/40 bg-background px-3 py-2.5 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </label>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Submitting opens your email client with this message
                  pre-filled, addressed to {FORM_RECIPIENT}.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-foreground bg-foreground px-6 py-3 font-display text-sm font-semibold tracking-wider text-background transition-all hover:bg-foreground/90"
                >
                  Open in Email
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office address band */}
      <section className="border-t border-border py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Where we are
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              <address className="not-italic text-base leading-relaxed text-foreground">
                <div className="font-display text-lg font-semibold">GradTensor</div>
                <div className="text-muted-foreground">A venture of Sudhanva Labs LLP</div>
                <div className="mt-2">Bengaluru, Karnataka</div>
                <div>India</div>
              </address>
              <div className="text-base leading-relaxed text-foreground">
                <div className="font-display text-lg font-semibold">Hours</div>
                <div className="text-muted-foreground">Monday to Friday</div>
                <div className="mt-2">10:00 to 18:00 IST</div>
                <div className="mt-2 font-mono text-sm text-muted-foreground">
                  Response within two working days
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;
