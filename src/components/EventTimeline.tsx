const STEPS = [
  {
    number: "01",
    title: "The Vision",
    description:
      "A creative consultation to understand your exact vibe, shot-list, and musical tastes.",
  },
  {
    number: "02",
    title: "The Blueprint",
    description:
      "We curate the perfect soundtrack and scout the venue for cinematic lighting opportunities.",
  },
  {
    number: "03",
    title: "The Atmosphere",
    description:
      "We arrive early, set up discreetly, pack the dance floor, and capture the magic invisibly.",
  },
  {
    number: "04",
    title: "The Legacy",
    description:
      "Your high-end photo galleries, highlight films, and recorded streams delivered rapidly.",
  },
];

export const EventTimeline = () => {
  return (
    <section id="method" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Our Process
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-foreground">
            The Seamless{" "}
            <span className="gradient-gold-text">Event Method</span>
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20" />

          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Step bubble */}
              <div className="relative z-10 w-20 h-20 rounded-full glass-gold border border-gold/40 gold-border-glow flex flex-col items-center justify-center mb-6 shrink-0">
                <span className="text-xs font-semibold text-gold/60 leading-none">
                  {step.number}
                </span>
                <div className="w-4 h-px bg-gold/40 my-0.5" />
                <span className="text-xs font-bold text-gold leading-none">
                  {4 - i === 4 ? "PLAN" : 4 - i === 3 ? "PREP" : 4 - i === 2 ? "EVENT" : "DELIVER"}
                </span>
              </div>

              <div className="glass-gold rounded-2xl p-6 w-full hover:border-gold/40 transition-all duration-300">
                <h3 className="font-playfair text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
