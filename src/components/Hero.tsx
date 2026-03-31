import { Phone, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import weddingFloor from "@/assets/wedding-dance-floor.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={weddingFloor}
          alt="Elegant wedding dance floor with golden lighting"
          className="w-full h-full object-cover object-center"
        />
        {/* Heavy cinematic dark overlay so gold text pops */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/50" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* 5-Star Badge */}
        <div className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2.5 mb-10">
          <span className="text-gold text-base leading-none">★★★★★</span>
          <span className="text-sm font-medium text-foreground">5-Star Rated Experience</span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight leading-tight">
          Don't Just Host an Event.
          <br />
          <span className="gradient-gold-text gold-glow">Create a Legacy.</span>
        </h1>

        {/* Sub-text */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Sound, Vision, and Live Broadcasts. We eliminate vendor fatigue by providing the ultimate atmosphere and capturing every cinematic moment with{" "}
          <span className="text-gold font-medium">one seamless, high-end team.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="neon" size="xl" asChild>
            <a href="https://calendly.com/workwithsebgreen/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Phone size={20} />
              Check Your Date's Availability
            </a>
          </Button>

          <Button variant="ghost-neon" size="xl" asChild>
            <a
              href="https://www.facebook.com/sebgreendj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Facebook size={20} />
              View Real Events
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-10 mx-auto rounded-full gradient-gold opacity-50" />
      </div>
    </section>
  );
};
