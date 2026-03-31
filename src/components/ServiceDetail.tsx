import { Check } from "lucide-react";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string[];
  included?: string[];
}

export const ServiceDetail = ({ id, title, description, included }: ServiceDetailProps) => {
  return (
    <section
      id={`${id}-details`}
      className="py-16 px-4 border-t border-border/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Title & Description */}
          <div>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              {title}
            </h3>
            {description.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right: What's Included */}
          {included && included.length > 0 && (
            <div className="glass-effect rounded-2xl p-6 h-fit">
              <h4 className="text-neon-green font-semibold uppercase tracking-wider text-sm mb-4">
                What's Included
              </h4>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-neon-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-neon-green" />
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
