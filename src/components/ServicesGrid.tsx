import { ServiceCard } from "./ServiceCard";

export const ServicesGrid = () => {
  const services = [
    {
      id: "weddings",
      title: "Weddings",
      description: "Unforgettable soundtracks for your most special day. From first dance to last song.",
    },
    {
      id: "private-parties",
      title: "Private Parties",
      description: "Crafting the perfect vibe for your personal celebrations and milestone moments.",
    },
    {
      id: "corporate-events",
      title: "Corporate Events",
      description: "Professional DJ sets that elevate your company's image and brand activations.",
    },
    {
      id: "club-nights",
      title: "Club Nights",
      description: "High-energy House music to ignite the dance floor all night long.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`${id}-details`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-neon-green text-sm font-semibold uppercase tracking-widest mb-4 block">
            Services
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
            Perfect For Any
            <span className="gradient-neon-text block">Occasion</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              onClick={() => scrollToSection(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
