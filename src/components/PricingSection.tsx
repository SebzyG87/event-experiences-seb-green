import { Check, Star, Plus } from "lucide-react";
import { Button } from "./ui/button";

const PRICING_TIERS = [
  {
    tier: "Tier 1",
    title: "The Visuals",
    subtitle: "Photo & Film",
    focus: "Unforgettable imagery.",
    price: "Starts at £200",
    priceNote: "Events / £400 Weddings",
    features: [
      "Professional Coverage",
      "High-Res Digital Gallery",
      "Standard Editing",
      "Fast-Track AI Delivery available",
    ],
    featured: false,
    accentClass: "border-gold/30 hover:border-gold/60",
    iconClass: "text-gold",
    iconBg: "bg-gold/10",
    dotClass: "bg-gold",
  },
  {
    tier: "Best Value",
    title: "The Ultimate Bundle",
    subtitle: "DJ + Visuals — One Team",
    focus: "Total peace of mind.",
    price: "Custom Quote",
    priceNote: "Save up to 25% when bundling",
    features: [
      "Full Day DJ Hosting",
      "Full Event Photography",
      "Ceremony Highlight Video",
      "Priority Processing",
    ],
    featured: true,
    accentClass: "border-gold/70 hover:border-gold",
    iconClass: "text-gold",
    iconBg: "bg-gold/20",
    dotClass: "bg-gold",
  },
  {
    tier: "Tier 2",
    title: "The Soundtrack",
    subtitle: "DJ Services",
    focus: "The perfect party vibe.",
    price: "Starts at £80/hr",
    priceNote: "or £160 / Party",
    features: [
      "Bespoke Playlist Curation",
      "Pro Sound Setup",
      "Seamless Mixing",
      "Optional PA / Lighting",
    ],
    featured: false,
    accentClass: "border-gold/30 hover:border-gold/60",
    iconClass: "text-gold",
    iconBg: "bg-gold/10",
    dotClass: "bg-gold",
  },
];

const ADDONS = [
  { label: "Drone Aerial Cinematography", price: "£120" },
  { label: "Second Shooter / Camera", price: "£200" },
  { label: "48-Hour AI Turnaround", price: "£50" },
];

export const PricingSection = () => {
  // Reorder so featured is in centre
  const ordered = [PRICING_TIERS[0], PRICING_TIERS[1], PRICING_TIERS[2]];

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Strategic Investment
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
            Pricing That{" "}
            <span className="gradient-gold-text">Reflects Your Vision</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            All prices starting from — final quotes tailored to your event.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-start">
          {ordered.map((tier) => (
            <div
              key={tier.title}
              className={`rounded-3xl p-8 border transition-all duration-300 relative ${
                tier.featured
                  ? "glass-gold gold-border-glow border-gold/70 md:-translate-y-4"
                  : "glass-gold border-gold/25"
              } ${tier.accentClass}`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-gold text-primary-foreground">
                    <Star size={12} fill="currentColor" />
                    {tier.tier}
                  </span>
                </div>
              )}

              {!tier.featured && (
                <span className="text-xs font-semibold uppercase tracking-wider text-gold/60 mb-4 block">
                  {tier.tier}
                </span>
              )}

              <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">
                {tier.title}
              </h3>
              <p className="text-sm text-gold mb-1">{tier.subtitle}</p>
              <p className="text-xs text-muted-foreground mb-6 italic">
                Focus: {tier.focus}
              </p>

              <div className="mb-6">
                <span className="font-playfair text-3xl font-black text-foreground">
                  {tier.price}
                </span>
                {tier.priceNote && (
                  <p className="text-sm text-muted-foreground mt-1">{tier.priceNote}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check size={15} className="text-gold shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? "neon" : "ghost-neon"}
                className="w-full"
                asChild
              >
                <a href="https://calendly.com/workwithsebgreen/30min" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Enhance Your Package */}
        <div className="glass-gold rounded-3xl p-8 md:p-12">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-2 text-center">
            Enhance Your Package
          </h3>
          <p className="text-muted-foreground text-center mb-8 text-sm">
            Powerful add-ons to elevate your event further.
          </p>

          <ul className="space-y-4 max-w-lg mx-auto">
            {ADDONS.map((addon) => (
              <li
                key={addon.label}
                className="flex items-center justify-between p-4 rounded-2xl bg-muted/20 border border-gold/10 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Plus size={16} className="text-gold shrink-0" />
                  <span className="text-sm text-foreground font-medium">
                    {addon.label}
                  </span>
                </div>
                <span className="font-playfair text-lg font-bold text-gold">
                  {addon.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
