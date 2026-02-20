import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Loved the post. I like the fact that you have stripped away the technical jargon and kept it simple and intuitive. Anyone should be able to read and comprehend it.",
    name: "Shyam Sreenivasan",
    title: "MS Robotics @ Northeastern | Autonomy Software Engineer",
  },
  {
    quote:
      "The framing of gradient as feedback intensity rather than a real-world unit is something most tutorials skip entirely — that distinction alone probably prevents a lot of confusion for beginners. The real estate agent analogy throughout keeps everything grounded while building up to autograd naturally.",
    name: "Neural Foundry",
    title: "Substack",
  },
  {
    quote:
      "Really solid explanation of why shuffling matters in batch training. The section on how unshuffled batches can cluster similar examples and create biased gradients is something I wish I'd understood earlier when debugging convergence problems.",
    name: "The AI Architect",
    title: "Newsletter",
  },
  {
    quote:
      "The way you explained how tokens look at each other and decide what's relevant really clarified the bigram limitation. You've made such an elegant connection between search engines and QKV, thank you!",
    name: "Rainbow Roxy",
    title: "Newsletter",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            What Our <span className="gradient-text">Learners Say</span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
            Feedback from readers of our deep-dive AI and ML content series.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-on-scroll card-hover flex flex-col rounded-xl border border-border bg-card/50 p-8 hover:border-primary/20 hover:bg-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote size={28} className="mb-4 text-primary/40" />
              <p className="mb-6 flex-1 text-base leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-base font-bold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
