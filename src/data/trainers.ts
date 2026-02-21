export interface Trainer {
  slug: string;
  name: string;
  title: string;
  bio: string[];
  highlights: string[];
  links: { label: string; url: string }[];
}

export const trainers: Trainer[] = [
  {
    slug: "prabhu-eshwarla",
    name: "Prabhu Eshwarla",
    title: "AI Systems Architect | Author (Manning, Packt)",
    bio: [
      "Prabhu builds AI systems designed for production - and trains engineers to do the same. With over two decades of engineering and leadership across distributed systems, blockchain infrastructure, and enterprise platforms, he now focuses on AI infrastructure, developer tools, and engineering education.",
      "He has held senior leadership roles at Hewlett Packard including heading HP Software services delivery for the India region, and was CTO for a European blockchain startup.",
    ],
    highlights: [
      "Architects AI infrastructure for security, performance, and cost control",
      "Designs and deploys self-hosted and open-source AI systems",
      "Helps organizations move from AI experimentation to production",
      "Teaches AI systems engineering - training engineers to reason about AI, not just use it",
      "2x published author (Manning Publications, Packt)",
      "Maintains mlship, open-source CLI for AI/ML engineers",
    ],
    links: [
      { label: "Substack", url: "https://trustandreason.substack.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/prabhueshwarla" },
    ],
  },
];
