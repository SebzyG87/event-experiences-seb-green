import { Music2, Camera, Radio } from "lucide-react";

const PILLARS = [
  {
    icon: Music2,
    label: "The Soundtrack",
    subtitle: "DJ Bookings",
    description:
      "Expertly curated House, Disco, and Tech. Seamless mixing that reads the room and builds unforgettable energy.",
    accent: "gold",
  },
  {
    icon: Camera,
    label: "The Memory",
    subtitle: "Photo & Film",
    description:
      "Vogue-style portraiture and documentary candids. Full AI-enhanced editing for rapid, stunning delivery.",
    accent: "amber",
  },
  {
    icon: Radio,
    label: "The Reach",
    subtitle: "Live Broadcasting",
    description:
      "Discreet, multi-camera live streaming so loved ones globally never miss a vow or a speech.",
    accent: "platinum",
  },
];

export const ExperienceMatrix = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            The Experience
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
            Three Pillars of{" "}
            <span className="gradient-gold-text">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every element working in harmony so you never deal with multiple vendors again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="glass-gold rounded-3xl p-8 hover:border-gold/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle number */}
                <span className="absolute top-6 right-8 font-playfair text-5xl font-black text-foreground/5">
                  0{i + 1}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon size={26} className="text-gold" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">
                  {pillar.subtitle}
                </p>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  {pillar.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
