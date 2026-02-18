import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I had zero AI experience before GradTensor. After 6 weeks, I shipped a RAG chatbot and an AI agent, and got placed at a Bangalore startup as a GenAI Engineer. The live cohort format kept me accountable, and the projects were exactly what interviewers wanted to see.",
    name: "Priya Sharma",
    college: "BITS Pilani",
    placed: "Sarvam AI",
  },
  {
    quote:
      "The 16-week program took me from basic Python to deploying AI agents in production. The mock interviews and portfolio reviews were game-changers — I got 3 offers in my campus placement season.",
    name: "Arjun Mehta",
    college: "VIT Vellore",
    placed: "Fractal Analytics",
  },
  {
    quote:
      "As a working professional switching from backend to AI, I needed something practical, not theoretical. GradTensor's curriculum was exactly what I needed — every week I built something I could demo.",
    name: "Sneha Reddy",
    college: "3 yrs exp, Infosys → AI role",
    placed: "Thoughtworks",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Real outcomes from real students who went through our programs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-on-scroll flex flex-col rounded-xl border border-border bg-card/50 p-8 transition-all hover:border-border hover:bg-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote size={24} className="mb-4 text-primary/40" />
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.college}</p>
                <p className="mt-1 font-display text-xs text-primary">
                  Placed at {t.placed}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
