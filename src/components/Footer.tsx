import React from 'react';
import { ArrowUp, Instagram, MessageSquare, Mail, MapPin } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Top Tier: Brand, Navigation, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center shrink-0">
                <img
                  src="/src/assets/images/regenerated_image_1794471850681.jpg"
                  alt="Gunslingers Studio Mark"
                  className="h-11 w-auto object-contain block"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-[0.08em] uppercase text-white block">
                  GUNSLINGERS
                </span>
                <span className="text-[10px] tracking-[0.28em] font-mono text-neutral-400 uppercase">
                  TATTOO SCHOOL & STUDIO
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm font-light">
              Kochi’s premier bespoke tattoo atelier and accredited tattoo academy. Dedicated to precision line stabilization, sterile clinical execution, and artist mentorship.
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-400 space-y-1">
              <div>💉 Custom Tattoos | From ₹2k</div>
              <div>🎓 Tattoo Training | Starts ₹50k</div>
              <div>⚡️ Laser Removal & Piercing | Customized Pricing</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              Studio Navigation
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-neutral-300 font-medium">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Philosophy</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Artist Portfolio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Pricing</a>
              </li>
              <li>
                <a href="#school" className="hover:text-white transition-colors">Tattoo School Diploma</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">Consultation Booking</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Studio Location & Map</a>
              </li>
            </ul>
          </div>

          {/* Connect & Hours */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              Get in Touch
            </div>

            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span>WhatsApp: +91 {STUDIO_DETAILS.phoneRaw}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>{STUDIO_DETAILS.email}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STUDIO_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-900 border border-neutral-800 hover:border-white transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${STUDIO_DETAILS.phoneRaw}?text=Hi%20Gunslingers%20Tattoo%20Studio`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-900 border border-neutral-800 hover:border-[#25D366] transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${STUDIO_DETAILS.email}`}
                className="p-2 bg-neutral-900 border border-neutral-800 hover:border-white transition-colors text-white"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} GUNSLINGERS TATTOO SCHOOL & STUDIO. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Kochi, Kerala</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
