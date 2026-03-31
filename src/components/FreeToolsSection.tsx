import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export const FreeToolsSection = () => {
  return (
    <section id="tools" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Free Tools
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-foreground mb-4">
            Plan Your <span className="gradient-gold-text">Event</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Start planning before you book — use our free event planning tool to map your vision.
          </p>
        </div>

        <div className="glass-gold rounded-3xl p-8 md:p-12 border border-gold/30 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-gold" />
          </div>
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
            Event Planning Tool
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Map your event timeline, guest numbers, and service requirements — completely free. Share your plan when you get in touch.
          </p>
          <Button variant="neon" size="xl" asChild>
            <a
              href="https://event-command.withsebgreen.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Try the Free Event Planning Tool
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
