export const siteConfig = {
  name: "GradTensor",
  copyrightYear: 2026,
  nextBatch: "April 2026",

  whatsapp: {
    number: "919108030542",
    messages: {
      general: "Hi, I'd like to know more about GradTensor courses",
      advisor: "Hi, I'd like to speak with an advisor about GradTensor courses",
      enroll: "Hi, I'm interested in enrolling in the course",
      syllabus: "Hi, I'd like to request the syllabus",
      executive: "Hi, I'm interested in the Executive AI program. Here's what I'd find valuable:",
      suggest: "Hi, I'd like to suggest a course topic:",
    },
  },

  // Future: Graphy course URLs
  // graphy: {
  //   skillCourse: "https://gradtensor.graphy.com/...",
  //   cohortCourse: "https://gradtensor.graphy.com/...",
  // },
};

export function whatsappLink(
  messageKey: keyof typeof siteConfig.whatsapp.messages
): string {
  const msg = encodeURIComponent(siteConfig.whatsapp.messages[messageKey]);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${msg}`;
}
