export interface Trainer {
  slug: string;
  name: string;
  title: string;
  bio: string[];
  highlights: string[];
  books: { publisher: string; url: string }[];
  links: { label: string; url: string }[];
}

export const trainers: Trainer[] = [
  {
    slug: "prabhu-eshwarla",
    name: "Prabhu Eshwarla",
    title: "AI Systems Architect | Author",
    bio: [
      "Prabhu builds AI systems designed for production - and trains engineers to do the same. With over two decades of engineering and leadership across distributed systems, blockchain infrastructure, and enterprise platforms, he now focuses on AI infrastructure, developer tools, and engineering education.",
      "He has held senior leadership roles at Hewlett Packard including heading HP Software services delivery for the India region, and was CTO for a European blockchain startup. Prabhu holds a Master's degree in Engineering from BITS, Pilani. A passionate educator at heart, he has authored two technical books - a commitment that reflects his drive to make complex engineering topics accessible to a wider audience.",
      "AI is reshaping careers faster than universities can update their curriculum. Prabhu started GradTensor to bridge that gap - helping final-year students and working professionals build practical AI skills that employers actually need. In a world where those who can build with AI will pull ahead of those who can't, curated, hands-on training isn't optional - it's a career advantage.",
    ],
    highlights: [
      "Architects AI infrastructure for security, performance, and cost control",
      "Designs and deploys self-hosted and open-source AI systems",
      "Helps organizations move from AI experimentation to production",
      "Teaches AI systems engineering - training engineers to reason about AI, not just use it",
      "Speaker at international tech conferences",
      "2x published author (Manning Publications, Packt)",
      "Maintains mlship, open-source CLI for AI/ML engineers",
    ],
    books: [
      { publisher: "Manning", url: "https://www.amazon.in/Rust-Servers-Services-Prabhu-Eshwarla/dp/1617298603" },
      { publisher: "Packt", url: "https://www.amazon.in/Practical-System-Programming-Rust-Developers/dp/1800560966/" },
    ],
    links: [
      { label: "Substack", url: "https://trustandreason.substack.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/peshwarla" },
    ],
  },
];
