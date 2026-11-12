import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { ARTISTS, SAFETY_STANDARDS } from '../data/studioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        
        {/* Section Header with generous space */}
        <div className="max-w-3xl space-y-5">
          <div className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-400 font-medium">
            Philosophy & Safety Standards
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-black tracking-tight leading-[1.08]">
            Crafting permanent stories with surgical discipline.
          </h2>
          <p className="font-editorial text-xl sm:text-2xl text-neutral-700 italic">
            "Every mark is a permanent intersection of geometry, skin biology, and personal narrative."
          </p>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed pt-1">
            Founded with an uncompromising commitment to anatomical harmony and medical cleanroom standards, <strong className="text-black font-semibold">GUNSLINGERS TATTOO SCHOOL & STUDIO</strong> represents Kochi’s premier atelier for bespoke fine-line tattoos and accredited tattoo artist education.
          </p>
        </div>

        {/* Studio Philosophy Grid (Spacious, pure white, crisp borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-black/10 bg-white hover:border-black transition-all space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-black uppercase tracking-wide">
              Bespoke Originality
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              We never replicate flash stencils or Pinterest clones. Every design is hand-crafted after a private anatomical consultation, respecting your natural muscle flow and bone structure.
            </p>
          </div>

          <div className="p-8 border border-black/10 bg-white hover:border-black transition-all space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-black uppercase tracking-wide">
              Hospital-Grade Hygiene
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Class B vacuum autoclaves, sealed single-use membrane needle cartridges opened in your presence, medical surface barriers, and certified organic, heavy-metal-free inks.
            </p>
          </div>

          <div className="p-8 border border-black/10 bg-white hover:border-black transition-all space-y-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-black uppercase tracking-wide">
              Mentorship Pedigree
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Kerala’s leading tattoo academy. Our hands-on mentorship program empowers aspiring tattooists with the artistic mastery, hygiene certifications, and client protocols required to succeed.
            </p>
          </div>
        </div>

        {/* Safety Standards Deep-Dive */}
        <div className="border-2 border-black p-8 sm:p-10 bg-black text-white space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-400">
                Gold Standard Protocol
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
                Clinical Sterilization & Client Safety
              </h3>
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              COMPLIANT WITH GLOBAL BODY ART SANITATION
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_STANDARDS.map((std, idx) => (
              <div key={idx} className="space-y-2 border-l border-neutral-800 pl-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span className="font-display text-sm font-bold uppercase tracking-wider text-white">
                    {std.title}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {std.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Meet The Resident Artists */}
        <div className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 font-semibold">
                Master Craftsmen & Instructors
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-black uppercase tracking-tight mt-1">
                Resident Artists & Mentors
              </h3>
            </div>
            <p className="text-sm text-neutral-600 max-w-md">
              Specialized masters in distinct disciplines—from high-contrast realism to surgical fine-line and permanent cosmetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTISTS.map((artist) => (
              <div
                key={artist.id}
                className="group border border-black/15 bg-white hover:border-black transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] bg-neutral-100 overflow-hidden border-b border-black/10">
                  <img
                    src={artist.avatar}
                    alt={artist.name}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black text-white text-[10px] font-mono uppercase px-2.5 py-1 tracking-wider">
                    {artist.experience}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="font-display text-xl font-bold text-black uppercase">
                      {artist.name}
                    </h4>
                    <p className="text-xs font-mono uppercase text-neutral-600 font-semibold">
                      {artist.role}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed py-2">
                    {artist.bio}
                  </p>

                  <div className="pt-3 border-t border-black/10 space-y-2">
                    <div className="text-[11px] font-mono uppercase text-neutral-500">
                      Disciplines:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {artist.specialty.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-medium text-black bg-neutral-100 px-2 py-0.5 border border-black/10"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
