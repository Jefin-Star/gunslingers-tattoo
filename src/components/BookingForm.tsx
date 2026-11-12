import React, { useState } from 'react';
import { Send, Upload, CheckCircle2, AlertCircle, FileImage, MessageSquare } from 'lucide-react';
import { ARTISTS, SERVICES, STUDIO_DETAILS } from '../data/studioData';

interface BookingFormProps {
  initialArtist?: string;
  initialService?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialArtist = '',
  initialService = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState(initialService || 'Custom Tattoos');
  const [tattooIdea, setTattooIdea] = useState('');
  const [tattooSize, setTattooSize] = useState('Medium (3" - 6")');
  const [placement, setPlacement] = useState('');
  const [preferredArtist, setPreferredArtist] = useState(initialArtist || 'Any Available Master');
  const [budgetNote, setBudgetNote] = useState('');
  const [referenceFile, setReferenceFile] = useState<File | null>(null);
  const [referencePreview, setReferencePreview] = useState<string | null>(null);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setReferenceFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setReferencePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMsg('Please enter your full name and phone number.');
      return;
    }

    setLoading(true);

    // Simulate reliable consultation submission & construct instant WhatsApp redirect option
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*GUNSLINGERS TATTOO CONSULTATION REQUEST*
• Name: ${fullName}
• Phone: ${phoneNumber}
• Email: ${email || 'Not provided'}
• Service: ${serviceType}
• Tattoo Idea/Size: ${tattooIdea} (${tattooSize})
• Placement: ${placement || 'To be discussed'}
• Preferred Artist: ${preferredArtist}
• Estimated Budget: ${budgetNote || 'Standard studio rate'}`;

    const url = `https://wa.me/91${STUDIO_DETAILS.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-neutral-50 border-b border-black/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="text-xs uppercase tracking-[0.25em] font-mono text-neutral-500 font-semibold">
            Reserve Your Session
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase">
            Book a Consultation
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Fill out your tattoo concepts, placement, and preferred artist. We will review your idea, estimate session timing, and get in touch within 24 hours.
          </p>
        </div>

        <div className="bg-white border-2 border-black p-6 sm:p-10 shadow-lg">
          {submitted ? (
            <div className="py-12 text-center space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 bg-black text-white mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-black">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Thank you, <strong className="text-black">{fullName}</strong>. Your consultation details have been registered with GUNSLINGERS TATTOO SCHOOL & STUDIO. Our studio manager will reach out via phone/WhatsApp at <strong className="text-black">{phoneNumber}</strong>.
                </p>
              </div>

              {/* Instant WhatsApp Option */}
              <div className="pt-4 border-t border-black/10 space-y-3">
                <p className="text-xs text-neutral-500 font-mono">
                  Want an instant reply? Forward your details directly to our studio phone:
                </p>
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-6 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details via WhatsApp (+91 {STUDIO_DETAILS.phoneRaw})</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFullName('');
                    setPhoneNumber('');
                    setEmail('');
                    setTattooIdea('');
                    setPlacement('');
                    setReferenceFile(null);
                    setReferencePreview(null);
                  }}
                  className="text-xs uppercase font-mono tracking-wider text-neutral-600 hover:text-black pt-2 block mx-auto underline"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Error Message */}
              {errorMsg && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Part 1: Contact Information */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 pb-2 border-b border-black/10 mb-4 font-semibold">
                  01. Client Contact Details
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/20 focus:border-black focus:bg-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/20 focus:border-black focus:bg-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/20 focus:border-black focus:bg-white text-sm outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Part 2: Project Specifications */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 pb-2 border-b border-black/10 mb-4 font-semibold">
                  02. Tattoo Idea, Placement & Sizing
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                      Service Category
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/20 focus:border-black focus:bg-white text-sm outline-none transition-colors"
                    >
                      <option value="Custom Tattoos">Custom Tattoos (From ₹2k)</option>
                      <option value="Tattoo Training">Tattoo Training Diploma (Starts ₹50k)</option>
                      <option value="Laser Removal">Laser Tattoo Removal</option>
                      <option value="Body Piercings">Body Piercings</option>
                      <option value="Hand Poke">Hand Poke Tattoo</option>
                      <option value="PMU Microblading">PMU / Microblading</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                      Approximate Size
                    </label>
                    <select
                      value={tattooSize}
                      onChange={(e) => setTattooSize(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/20 focus:border-black focus:bg-white text-sm outline-none transition-colors"
                    >
                      <option value='Small / Minimalist (1" - 3")'>Small / Minimalist (1" - 3") - From ₹2k</option>
                      <option value='Medium (3" - 6")'>Medium (3" - 6")</option>
                      <option value='Large (6" - 10")'>Large (6" - 10")</option>
                      <option value="Half Sleeve / Rib Piece">Half Sleeve / Rib Piece</option>
                      <option value="Full Sleeve / Back Piece">Full Sleeve / Back Piece</option>
                      <option value="Tattoo School Course">Tattoo School Course Enrollment</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                      Body Placement (e.g. Forearm, Ribs, Collarbone)
                    </label>
                    <input
                      type="text"
                      value={placement}
                      onChange={(e) => setPlacement(e.target.value)}
                      placeholder="e.g. Left inner forearm"
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/20 focus:border-black focus:bg-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                      Preferred Artist
                    </label>
                    <select
                      value={preferredArtist}
                      onChange={(e) => setPreferredArtist(e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-50 border border-black/20 focus:border-black focus:bg-white text-sm outline-none transition-colors"
                    >
                      <option value="Any Available Master">Any Available Master Artist</option>
                      {ARTISTS.map((artist) => (
                        <option key={artist.id} value={artist.name}>
                          {artist.name} ({artist.role})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2">
                    Describe Your Tattoo Idea / Story / Elements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={tattooIdea}
                    onChange={(e) => setTattooIdea(e.target.value)}
                    placeholder="Describe elements, meaning, style (fine-line, black & grey, color, realism), or if this is a cover-up..."
                    className="w-full px-4 py-3 bg-neutral-50 border border-black/20 focus:border-black focus:bg-white text-sm outline-none transition-colors"
                  ></textarea>
                </div>
              </div>

              {/* Part 3: Reference Image Upload */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 pb-2 border-b border-black/10 mb-4 font-semibold">
                  03. Reference Image Upload
                </div>

                <div className="border-2 border-dashed border-black/25 p-6 text-center bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  {referencePreview ? (
                    <div className="space-y-3">
                      <div className="w-24 h-24 mx-auto border border-black overflow-hidden bg-white">
                        <img
                          src={referencePreview}
                          alt="Reference Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs font-medium text-black flex items-center justify-center gap-1.5">
                        <FileImage className="w-4 h-4" />
                        <span>{referenceFile?.name}</span>
                      </div>
                      <span className="text-[11px] text-neutral-500 underline">
                        Click or drag to replace image
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-10 h-10 bg-white border border-black/20 mx-auto flex items-center justify-center text-black">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-black">
                        Upload Reference Image / Sketch
                      </div>
                      <p className="text-xs text-neutral-500">
                        PNG, JPG, or WEBP up to 15MB.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-500 font-mono">
                  Studio Guarantee: Sterile execution & free anatomical placement consultation.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-black text-white hover:bg-neutral-800 transition-colors py-4 px-8 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting...' : 'Send Consultation Request'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};
