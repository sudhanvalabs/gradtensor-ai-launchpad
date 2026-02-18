import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need ML experience to start?",
    a: "No. The 6-week course assumes basic Python knowledge but teaches LLMs, embeddings, and agents from the ground up. If you want to learn ML from scratch, the 16-week program is better.",
  },
  {
    q: "How much time per week does this require?",
    a: "6-week course: 8 hours/week (4 live + 4 project). 16-week course: 10 hours/week (4 live + 6 project).",
  },
  {
    q: "What's the difference between skill-based and cohort programs?",
    a: "Skill-based courses (6 weeks) focus on one area like AI agents or RAG. The cohort program (16 weeks) is a comprehensive journey from Python basics to deployed AI systems, ideal for deeper career transitions.",
  },
  {
    q: "Will this help me in campus placements?",
    a: "Yes. You'll have deployed projects to show in interviews, and you'll be able to answer AI engineering questions that 99% of students can't. We've designed this specifically around what companies ask in campus AI roles.",
  },
  {
    q: "What if I can't attend live sessions?",
    a: "All live sessions are recorded and shared within 24 hours. However, we strongly recommend attending live — the interaction, doubt-clearing, and accountability are what make cohort learning effective.",
  },
];

const FAQSection = () => {
  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center animate-on-scroll">
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="animate-on-scroll">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="font-display text-sm font-medium tracking-tight text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
