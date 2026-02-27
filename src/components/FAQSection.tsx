import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is the learning journey structured?",
    a: "GradTensor offers a 5-stage journey: Discover (no prerequisites), Portfolio (build interview-ready projects), Production (ship production-grade AI), Ship (launch your own AI product), and Advise (lead AI adoption). You can start at any stage that matches your level.",
  },
  {
    q: "Will this help me in campus placements?",
    a: "Yes. You'll have deployed projects to show in interviews, and you'll be able to answer AI engineering questions that 99% of students can't. We've designed this specifically around what companies ask in campus AI roles.",
  },
  {
    q: "What if I can't attend live sessions?",
    a: "All live sessions are recorded and shared within 24 hours. However, we strongly recommend attending live - the interaction, doubt-clearing, and accountability are what make live learning effective.",
  },
];

const FAQSection = () => {
  return (
    <section className="border-t border-border/50 py-24 md:py-32">
      <div className="section-container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center animate-on-scroll">
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="animate-on-scroll">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="font-display text-base font-medium tracking-tight text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
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
