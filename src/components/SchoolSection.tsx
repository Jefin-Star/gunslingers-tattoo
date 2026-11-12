import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2, ArrowRight, Clock, Users, ShieldAlert } from 'lucide-react';
import { TRAINING_CURRICULUM, STUDIO_DETAILS } from '../data/studioData';

interface SchoolProps {
  onApplyClick: () => void;
}

export const SchoolSection: React.FC<SchoolProps> = ({ onApplyClick }) => {
  return (
    <section id="school" className="py-20 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-neutral-500 font-semibold">
              <GraduationCap className="w-4 h-4 text-black" />
              <span>Gunslingers Academy of Tattoo Art</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase leading-tight">
              Launch Your Career As A Certified Professional Tattoo Artist.
            </h2>
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-3xl">
              Turn your artistic passion into a sustainable, high-earning profession. Our comprehensive tattoo school curriculum takes you from foundation hygiene and machine tuning to live client tattooing under master artist supervision.
            </p>
          </div>

          <div className="lg:col-span-4 bg-neutral-50 border-2 border-black p-6 sm:p-8 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Admission Details
            </div>
            <div className="text-3xl font-black font-display text-black">
              Starts ₹50k
            </div>
            <div className="text-xs text-neutral-600 space-y-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-black" />
                <span>Full-Time & Weekend Intensive Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-black" />
                <span>Limited to 4 Apprentices Per Batch</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-black" />
                <span>Certificate & Starter Kit Guidance</span>
              </div>
            </div>

            <button
              onClick={onApplyClick}
              className="w-full bg-black text-white hover:bg-neutral-800 transition-colors py-3.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 mt-4"
            >
              <span>Apply for Training Batch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Phase Curriculum Timeline */}
        <div className="space-y-6">
          <div className="border-b border-black/10 pb-4 flex items-center justify-between">
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-black">
              Course Syllabus & Modules
            </h3>
            <span className="text-xs font-mono text-neutral-500 uppercase">
              100% Practical & Clinical Training
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINING_CURRICULUM.map((module, mIdx) => (
              <div key={mIdx} className="border border-black/15 bg-neutral-50 p-6 space-y-4 hover:border-black transition-colors">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
                  {module.phase}
                </div>
                <h4 className="font-display text-lg font-bold text-black uppercase leading-snug">
                  {module.title}
                </h4>
                <ul className="space-y-2 pt-2 border-t border-black/10">
                  {module.items.map((item, iIdx) => (
                    <li key={iIdx} className="text-xs text-neutral-600 flex items-start gap-2">
                      <span className="text-black font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Equipment & Hygiene guarantee */}
        <div className="p-8 border border-black/15 bg-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-lg font-bold uppercase text-black">
                Need course syllabus PDF or have questions?
              </div>
              <p className="text-xs text-neutral-600">
                Connect directly with our Academy Director via WhatsApp or visit our studio in Kochi for a facility walk-through.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/91${STUDIO_DETAILS.phoneRaw}?text=Hi%20Gunslingers%20Tattoo%20Studio,%20I%20am%20interested%20in%20the%20Tattoo%20Training%20Course%20(₹50k)`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white hover:bg-neutral-800 transition-colors px-6 py-3 text-xs font-bold uppercase tracking-widest"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
