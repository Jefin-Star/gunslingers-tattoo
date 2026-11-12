import React from 'react';
import { ArrowRight, ShieldCheck, Award, Sparkles, Compass } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

interface HeroProps {
  onBookClick: () => void;
  onPortfolioClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onPortfolioClick }) => {
  return (
    <section className="relative bg-white pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Subtitle Kicker (Clean unboxed text) */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-neutral-400 font-mono mb-8">
          <span className="font-semibold text-black tracking-[0.25em]">Kochi, Kerala</span>
          <span aria-hidden="true" className="text-neutral-300">/</span>
          <span>Atelier of Permanent Artistry</span>
          <span aria-hidden="true" className="text-neutral-300">/</span>
          <span>Accredited Tattoo Academy</span>
        </div>

        {/* 2-Column Split: Editorial Hero Typography + Studio Imagery & Quick Bio Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          {/* Column 1: Main Title & Tagline & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-bold text-black leading-[1.04] tracking-[-0.04em] text-balance">
                Where surgical ink meets enduring mastery.
              </h1>
              <p className="font-editorial text-2xl sm:text-3xl text-neutral-800 italic leading-snug">
                Precision lines. Anatomical harmony. Bespoke visual narratives.
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl font-normal">
              <strong className="text-black font-semibold">GUNSLINGERS TATTOO SCHOOL & STUDIO</strong> is Kochi’s landmark sanctuary for high-contrast bespoke tattoos, medical laser removal, clinical piercings, and hands-on professional tattoo artist diploma courses.
            </p>

            {/* Quick Pricing Strip (Clean minimalist card with generous whitespace) */}
            <div className="p-6 bg-white border border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Custom Tattoos</div>
                <div className="text-xl font-bold text-black font-display tracking-tight">From ₹2k</div>
                <div className="text-xs text-neutral-500">Fine line & blackwork</div>
              </div>
              <div className="sm:border-l sm:border-black/10 sm:pl-6 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Tattoo Training</div>
                <div className="text-xl font-bold text-black font-display tracking-tight">Starts ₹50k</div>
                <div className="text-xs text-neutral-500">Full master diploma</div>
              </div>
              <div className="sm:border-l sm:border-black/10 sm:pl-6 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400">Laser & Piercing</div>
                <div className="text-xl font-bold text-black font-display tracking-tight">Customized</div>
                <div className="text-xs text-neutral-500">Tailored consultation</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="bg-black text-white hover:bg-neutral-800 transition-all px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 group"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onPortfolioClick}
                className="border border-black text-black hover:bg-black hover:text-white transition-all px-8 py-4 text-xs font-bold uppercase tracking-[0.2em]"
              >
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap items-center gap-8 text-xs text-neutral-500 font-mono uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Class B Autoclave Sterility</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-black" />
                <span>Accredited Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-black" />
                <span>Zero Stencil Cloning</span>
              </div>
            </div>
          </div>

          {/* Column 2: Studio Visual Showcase & Brand Emblem with EXACT ORIGINAL LOGO COLORS */}
          <div className="lg:col-span-5 relative">
            <div className="relative border border-black/15 bg-white p-3 shadow-lg">
              
              {/* Logo Presentation Showcase Card */}
              <div className="relative aspect-[4/5] bg-neutral-950 overflow-hidden flex flex-col items-center justify-between p-8 text-center group">
                
                {/* Subtle studio backdrop */}
                <img
                  src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80"
                  alt="Gunslingers Tattoo Studio Atmosphere"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 filter contrast-125 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                <div className="relative z-10 w-full flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 border-b border-white/10 pb-3">
                  <span>Kochi Flagship Studio</span>
                  <span>Est. 2014</span>
                </div>

                {/* Central Brand Emblem text block (logo image removed per request) */}
                <div className="relative z-10 flex flex-col items-center space-y-6 my-auto px-2">
                  <div className="space-y-1.5">
                    <div className="font-display font-bold text-2xl text-white tracking-[0.12em] uppercase">
                      GUNSLINGERS
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.35em] text-neutral-400 font-mono">
                      TATTOO SCHOOL & STUDIO
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 max-w-xs leading-relaxed font-light">
                    Custom Tattoos · Certified Tattoo Academy · Laser Removal · PMU Microblading · Piercings
                  </p>
                </div>

                {/* Bottom Studio Timing Footer inside card */}
                <div className="relative z-10 w-full bg-white/5 border border-white/10 px-4 py-2.5 flex items-center justify-between text-[11px] text-neutral-300 font-mono">
                  <span>Operating Mon - Sun</span>
                  <span className="text-white font-medium">10:30 AM – 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Clean geometric frame accent */}
            <div className="absolute -bottom-5 -right-5 w-32 h-32 border-r border-b border-black/20 -z-10 hidden sm:block pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
