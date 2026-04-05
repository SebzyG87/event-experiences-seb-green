import { useState, useRef, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div ref={menuRef}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* All Services Glass Pill */}
        <a
          href="https://withsebgreen.co.uk"
          className="glass-gold rounded-full px-4 py-2.5 flex items-center gap-2 hover:border-gold/60 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium text-foreground">Hub</span>
        </a>

        {/* Center Title */}
        <h1 className="hidden md:block font-playfair text-lg font-bold text-foreground tracking-wide">
          Event Experiences with Seb Green
        </h1>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-foreground hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 glass-gold rounded-3xl p-6">
          <nav className="flex flex-col gap-4">
            <a
              href="#method"
              onClick={closeMenu}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              The Method
            </a>
            <a
              href="#experience"
              onClick={closeMenu}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Experience
            </a>
            <a
              href="#pricing"
              onClick={closeMenu}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Investment
            </a>
            <a
              href="#audio-zone"
              onClick={closeMenu}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Hear My Sound
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-foreground hover:text-gold transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="https://work.withsebgreen.co.uk/"
              onClick={closeMenu}
              className="text-gold hover:text-amber transition-colors font-medium"
            >
              All Services →
            </a>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
};
