import React from 'react';
import { Phone, Mail, Instagram, MapPin, Clock, MessageSquare, ArrowUpRight, Copy, Check } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(STUDIO_DETAILS.phoneRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 font-semibold">
            Connect With Gunslingers
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase">
            Contact & Studio Location
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            Visit us in Kochi for a private consultation, DM our artists on Instagram, or chat directly via WhatsApp for quick quotes and tattoo school admissions.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Cards + Live Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Contact Methods Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* WhatsApp Card (Primary) */}
            <a
              href={`https://wa.me/91${STUDIO_DETAILS.phoneRaw}?text=Hi%20Gunslingers%20Tattoo%20Studio`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border-2 border-black bg-neutral-900 text-white hover:bg-black transition-all flex items-start justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#25D366]">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Direct Inquiry</span>
                </div>
                <div className="font-display text-2xl font-bold tracking-tight text-white mt-1">
                  +91 {STUDIO_DETAILS.phoneRaw}
                </div>
                <p className="text-xs text-neutral-300">
                  Instant quote estimations, appointment scheduling & queries.
                </p>
              </div>
              <div className="p-2 bg-white/10 group-hover:bg-white group-hover:text-black transition-colors shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${STUDIO_DETAILS.email}`}
              className="group p-6 border border-black/15 bg-neutral-50 hover:border-black transition-colors flex items-start justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
                  <Mail className="w-4 h-4 text-black" />
                  <span>Official Email</span>
                </div>
                <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-black mt-1 break-all">
                  {STUDIO_DETAILS.email}
                </div>
                <p className="text-xs text-neutral-600">
                  Artist applications, brand collaborations & student enrollments.
                </p>
              </div>
              <div className="p-2 border border-black/15 group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={STUDIO_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-black/15 bg-neutral-50 hover:border-black transition-colors flex items-start justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
                  <Instagram className="w-4 h-4 text-black" />
                  <span>Instagram Gallery</span>
                </div>
                <div className="font-display text-lg sm:text-xl font-bold tracking-tight text-black mt-1">
                  {STUDIO_DETAILS.instagramHandle}
                </div>
                <p className="text-xs text-neutral-600">
                  Daily flash drops, fresh healed tattoo reels & student work.
                </p>
              </div>
              <div className="p-2 border border-black/15 group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* Hours & Direct Address */}
            <div className="p-6 border border-black/15 bg-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
                <Clock className="w-4 h-4 text-black" />
                <span>Operating Hours</span>
              </div>
              <div className="text-sm font-semibold text-black">
                {STUDIO_DETAILS.hours}
              </div>
              <p className="text-xs text-neutral-500">
                Walk-ins welcomed based on artist chair availability; booking ahead recommended.
              </p>
            </div>

          </div>

          {/* Column 2: Studio Google Map Embed */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="border-2 border-black bg-white p-2 h-full flex flex-col justify-between shadow-md">
              <div className="p-4 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-black" />
                    <span>Studio Address</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-black uppercase mt-0.5">
                    GUNSLINGERS TATTOO SCHOOL & STUDIO KOCHI
                  </h4>
                </div>
                <div className="text-xs font-mono text-neutral-600">
                  Kerala, India
                </div>
              </div>

              {/* Embedded Google Maps iFrame */}
              <div className="relative w-full h-[400px] lg:h-[480px] bg-neutral-100 overflow-hidden">
                <iframe
                  src={STUDIO_DETAILS.mapsEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="GUNSLINGERS TATTOO SCHOOL & STUDIO KOCHI Google Map"
                  className="w-full h-full filter grayscale contrast-125 hover:filter-none transition-all duration-500"
                ></iframe>
              </div>

              <div className="p-4 bg-neutral-50 border-t border-black/10 flex items-center justify-between text-xs">
                <span className="text-neutral-600 font-medium">
                  Easy parking & transit access in Kochi.
                </span>
                <a
                  href="https://maps.google.com/?cid=7000216501191590238"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold uppercase tracking-wider text-black hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
