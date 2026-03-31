export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Seb transformed our wedding day into a cinematic legacy. The DJ set had everyone on the floor, and the photos are absolutely stunning.",
      name: "S.B.",
      role: "Wedding Client",
    },
    {
      quote: "The Ultimate Bundle was exactly what we needed — one team, zero vendor headaches, and footage we'll treasure forever. Cannot recommend highly enough.",
      name: "C.H.",
      role: "Event Organiser",
    },
  ];

  return (
    <section className="py-24 px-4 relative hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/3 to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            What Clients Say
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
            Real <span className="gradient-gold-text">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Stories from the couples and organisers who trusted us with their most important moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-gold rounded-3xl p-8 border border-gold/25 flex flex-col gap-6">
              <div className="text-gold text-2xl leading-none">★★★★★</div>
              <p className="text-muted-foreground leading-relaxed italic font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gold/20 pt-4">
                <p className="font-playfair font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-gold/70">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
