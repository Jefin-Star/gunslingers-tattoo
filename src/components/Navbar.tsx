import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services & Pricing', href: '#services' },
    { label: 'Tattoo School', href: '#school' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-24 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with circular framed logo */}
        <a href="#" className="flex items-center gap-4 shrink-0 group">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-[1.5px] border-black/85 ring-1 ring-black/15 ring-offset-2 p-1.5 flex items-center justify-center overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:scale-105 group-hover:border-black group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)] shrink-0">
            <img 
              src="./images/gunslingers-logo-light.png" 
              alt="Gunslingers Tattoo Logo" 
              className="w-full h-full object-contain block"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-[0.08em] text-black leading-none uppercase">
              GUNSLINGERS
            </span>
            <span className="text-[10px] tracking-[0.28em] text-neutral-400 uppercase font-mono font-medium mt-1">
              TATTOO SCHOOL & STUDIO
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (pure minimalist luxury typography) */}
        <nav className="hidden lg:flex items-center gap-9 text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-800">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-black hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={`https://wa.me/91${STUDIO_DETAILS.phoneRaw}?text=Hi%20Gunslingers%20Tattoo%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20tattoo/training`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:text-black transition-colors px-3 py-2 border border-black/15 hover:border-black rounded-none"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-black text-white hover:bg-neutral-800 transition-colors text-xs font-bold uppercase tracking-widest px-5 py-3 whitespace-nowrap"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:bg-neutral-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-black/10 bg-white px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wide uppercase text-neutral-900 py-1 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-black/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/91${STUDIO_DETAILS.phoneRaw}?text=Hi%20Gunslingers%20Tattoo%20Studio`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center border border-black/20 text-xs font-semibold uppercase tracking-wider text-black flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct WhatsApp (+91 {STUDIO_DETAILS.phoneRaw})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
