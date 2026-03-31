import { Instagram, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
              Seb Green
            </h3>
            <p className="text-muted-foreground text-sm mb-1">
              Event Experiences
            </p>
            <p className="text-muted-foreground text-sm">
              DJ · Photography · Film · Live Streaming
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:workwithsebgreen@gmail.com"
                className="text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                workwithsebgreen@gmail.com
              </a>
              <a
                href="tel:+447900332505"
                className="text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                +44 7900 332505
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/policies" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/policies" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href="https://instagram.com/_sebgreen_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-gold flex items-center justify-center hover:border-gold/60 transition-all group"
            aria-label="Instagram"
          >
            <Instagram size={18} className="text-muted-foreground group-hover:text-gold transition-colors" />
          </a>
          <a
            href="mailto:workwithsebgreen@gmail.com"
            className="w-10 h-10 rounded-full glass-gold flex items-center justify-center hover:border-gold/60 transition-all group"
            aria-label="Email"
          >
            <Mail size={18} className="text-muted-foreground group-hover:text-gold transition-colors" />
          </a>
          <a
            href="tel:+447900332505"
            className="w-10 h-10 rounded-full glass-gold flex items-center justify-center hover:border-gold/60 transition-all group"
            aria-label="Phone"
          >
            <Phone size={18} className="text-muted-foreground group-hover:text-gold transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-green-4828ab103/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-gold flex items-center justify-center hover:border-gold/60 transition-all group"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} className="text-muted-foreground group-hover:text-gold transition-colors" />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Event Experiences with Seb Green. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
