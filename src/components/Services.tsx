import React from 'react';
import { Check, ArrowRight, Zap, GraduationCap, Flame } from 'lucide-react';
import { SERVICES, STUDIO_DETAILS } from '../data/studioData';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-400 font-medium">
            Offerings & Rates
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-black tracking-tight uppercase">
            Specialized Services & Academy
          </h2>
          <p className="font-editorial text-xl sm:text-2xl text-neutral-700 italic">
            Transparent pricing, surgical cleanliness, and original artistry.
          </p>
          <p className="text-neutral-600 text-base leading-relaxed">
            Specialist in custom tattoos, laser removal, body piercings, hand poke, PMU microblading, and comprehensive professional tattoo training in Kochi.
          </p>
        </div>

        {/* Highlighted Bio Pricing Banner (High-end minimalist contrast) */}
        <div className="bg-black text-white p-8 sm:p-12 border border-black grid grid-cols-1 md:grid-cols-3 gap-8 shadow-xl">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-white/10 text-white font-bold flex items-center justify-center shrink-0 border border-white/20 text-lg">
              💉
            </div>
            <div className="space-y-1">
              <div className="font-display text-sm font-bold uppercase tracking-[0.15em] text-neutral-300">Custom Tattoos</div>
              <div className="text-3xl font-bold text-white font-display tracking-tight">From ₹2k</div>
              <p className="text-xs text-neutral-400 pt-1 font-light">Starting rate for fine-line, script & small custom works.</p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:border-l md:border-neutral-800 md:pl-8">
            <div className="w-12 h-12 bg-white/10 text-white font-bold flex items-center justify-center shrink-0 border border-white/20 text-lg">
              🎓
            </div>
            <div className="space-y-1">
              <div className="font-display text-sm font-bold uppercase tracking-[0.15em] text-neutral-300">Tattoo Training</div>
              <div className="text-3xl font-bold text-white font-display tracking-tight">Starts ₹50k</div>
              <p className="text-xs text-neutral-400 pt-1 font-light">Certified diploma course with live human client training.</p>
            </div>
          </div>

          <div className="flex items-start gap-5 md:border-l md:border-neutral-800 md:pl-8">
            <div className="w-12 h-12 bg-white/10 text-white font-bold flex items-center justify-center shrink-0 border border-white/20 text-lg">
              ⚡️
            </div>
            <div className="space-y-1">
              <div className="font-display text-sm font-bold uppercase tracking-[0.15em] text-neutral-300">Laser & Piercing</div>
              <div className="text-3xl font-bold text-white font-display tracking-tight">Customized</div>
              <p className="text-xs text-neutral-400 pt-1 font-light">Bespoke pricing per session, ink density or jewelry type.</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`border transition-all flex flex-col justify-between p-8 relative ${
                service.isFeatured 
                  ? 'border-2 border-black bg-white shadow-md' 
                  : 'border-black/15 bg-neutral-50 hover:border-black'
              }`}
            >
              {service.isFeatured && (
                <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1">
                  Signature Offering
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                    {service.tagline}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-black uppercase">
                    {service.name}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="py-2 border-y border-black/10 flex items-baseline justify-between">
                  <span className="text-xs font-mono uppercase text-neutral-600">Rate Structure</span>
                  <span className="text-xl font-black font-display text-black">
                    {service.priceNote}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature checklist */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono uppercase text-neutral-500 font-semibold">
                    What is included:
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Action */}
              <div className="pt-6 mt-6 border-t border-black/10">
                <button
                  onClick={() => onBookService(service.name)}
                  className={`w-full py-3 px-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors ${
                    service.isFeatured
                      ? 'bg-black text-white hover:bg-neutral-800'
                      : 'border border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  <span>Inquire / Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
