import { Phone, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export const ActionZone = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/8 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Let's Create Together
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
            Ready to{" "}
            <span className="gradient-gold-text">Build Your Legacy?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Get in touch to check your date and let's craft something truly unforgettable together.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex justify-center mb-8">
          <Button variant="neon" size="xl" className="animate-pulse-glow" asChild>
            <a href="https://calendly.com/workwithsebgreen/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Phone size={22} />
              Book a Consultation
            </a>
          </Button>
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <a
            href="tel:+447900332505"
            className="glass-gold rounded-full py-4 px-6 flex items-center justify-center gap-3 hover:border-gold/60 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Phone size={20} className="text-gold" />
            </div>
            <span className="font-medium text-foreground">Call Now</span>
          </a>

          <a
            href="https://instagram.com/_sebgreen_"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-gold rounded-full py-4 px-6 flex items-center justify-center gap-3 hover:border-gold/60 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <Instagram size={20} className="text-gold" />
            </div>
            <span className="font-medium text-foreground">DM on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
