export const siteConfig = {
  name: "GradTensor",
  copyrightYear: 2026,
  siteUrl: "https://gradtensor.com",
  twitterHandle: "@GradTensor",
  defaultDescription:
    "GradTensor is a specialist AI consultancy for mid-size businesses. We decide where AI belongs with our own method, the Judgment Line, build the systems on our own platform, Forge, and keep them governed - always under your control.",

  email: "partnerships@gradtensor.com",

  // 30-minute free consultation. Calendly 30-minute event type.
  calendarUrl: "https://calendly.com/gradtensor/30-min-consultation",

  googleSheetUrl:
    "https://script.google.com/macros/s/AKfycbwEBRDxehgeoOExaGU0aoglDrmQ3QVtGHFHF9myOj_CfSzYycA6VtLjQLRf-7_rHfc/exec",

  whatsapp: {
    // Business / operations line (matches the number shown in the footer + Contact).
    // TODO(user): confirm this number is WhatsApp-enabled; the old student line was 919108030542.
    number: "919845203997",
    messages: {
      // Enterprise repositioning
      consultation:
        "Hi, I'd like to book a free 30-min consultation about AI in our operations.",
      // Legacy (still referenced by unlinked college pages)
      general: "Hi, I'd like to know more about GradTensor courses",
      advisor: "Hi, I'd like to speak with an advisor about GradTensor courses",
      planProgramme: "Hi, I'd like to plan a training programme with GradTensor.",
      enroll: "Hi, I'm interested in enrolling in the course",
      syllabus: "Hi, I'd like to request the syllabus",
      executive: "Hi, I'm interested in the Executive AI program. Here's what I'd find valuable:",
      suggest: "Hi, I'd like to suggest a course topic:",
    },
  },

  // Future: Graphy course URLs
  // graphy: {
  //   skillCourse: "https://gradtensor.graphy.com/...",
  //   fullTrackCourse: "https://gradtensor.graphy.com/...",
  // },
};

export function whatsappLink(
  messageKey: keyof typeof siteConfig.whatsapp.messages
): string {
  const msg = encodeURIComponent(siteConfig.whatsapp.messages[messageKey]);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`;
}

export function whatsappCustomLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
