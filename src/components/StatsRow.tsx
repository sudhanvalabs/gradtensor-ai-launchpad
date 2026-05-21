const stats = [
  {
    value: "Live Sessions",
    label: "Live, instructor-led. Every cohort.",
  },
  {
    value: "Half-day to 6 Months",
    label: "From first build to production mastery.",
  },
  {
    value: "100% Hands-On",
    label: "Every Level 2+ course ends with a working AI system you built.",
  },
];

const StatsRow = () => {
  return (
    <section className="border-y border-border/50 py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 animate-on-scroll">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center sm:text-left">
              <div className="font-display text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;
