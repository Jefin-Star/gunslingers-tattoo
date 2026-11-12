import React, { useState, useRef } from 'react';
import { 
  Upload, 
  Sparkles, 
  ArrowRight, 
  Tag, 
  Layers, 
  Compass, 
  Clock, 
  CheckCircle2, 
  Loader2, 
  AlertCircle,
  Eye,
  X
} from 'lucide-react';
import { PORTFOLIO_WORKS, TattooWork } from '../data/studioData';

interface PortfolioProps {
  onBookSpecific: (artistName?: string, style?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onBookSpecific }) => {
  const [works, setWorks] = useState<TattooWork[]>(PORTFOLIO_WORKS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalWork, setActiveModalWork] = useState<TattooWork | null>(null);

  // Vision AI Upload & Analysis State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [analyzedSuccessItem, setAnalyzedSuccessItem] = useState<TattooWork | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['All', 'Fine Line', 'Black & Grey', 'Realism', 'Color & Custom'];

  const filteredWorks = selectedCategory === 'All'
    ? works
    : works.filter((work) => 
        work.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'Color & Custom' && (work.category.includes('Color') || work.category.includes('Custom')))
      );

  // Automated Vision AI Upload Handler
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsAnalyzing(true);
    setAnalysisError(null);
    setAnalyzedSuccessItem(null);

    try {
      // Convert file to base64
      const base64Promise = new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const base64Data = await base64Promise;
      const previewUrl = URL.createObjectURL(file);

      // Call our server-side Vision AI endpoint
      const response = await fetch('/api/analyze-tattoo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageBase64: base64Data,
          mimeType: file.type || 'image/jpeg',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Vision AI analysis failed');
      }

      const data = await response.json();
      const analysis = data.analysis;

      // Map AI category to app's valid category
      let mappedCategory: TattooWork['category'] = 'Fine Line';
      const styleLower = (analysis.style || '').toLowerCase();
      if (styleLower.includes('realism') && (styleLower.includes('black') || styleLower.includes('grey'))) {
        mappedCategory = 'Black & Grey';
      } else if (styleLower.includes('realism')) {
        mappedCategory = 'Realism';
      } else if (styleLower.includes('color')) {
        mappedCategory = 'Color & Custom';
      } else if (styleLower.includes('hand poke') || styleLower.includes('dotwork')) {
        mappedCategory = 'Hand Poke';
      } else if (styleLower.includes('black')) {
        mappedCategory = 'Black & Grey';
      }

      const newTattooWork: TattooWork = {
        id: `ai-work-${Date.now()}`,
        title: analysis.title || 'Bespoke Studio Piece',
        category: mappedCategory,
        artist: 'GLADWIN MATHEW & Team',
        placement: analysis.placement || 'Anatomical Placement',
        duration: analysis.sessionEstimate || '3 - 4 hours',
        description: analysis.caption || 'Exquisite custom linework and anatomical gradation analyzed by Vision AI.',
        image: previewUrl,
        tags: analysis.tags || ['#CustomInk', '#VisionAI', '#Gunslingers'],
        contentSubject: analysis.contentSubject || 'Custom Tattoo Motif',
        complexity: analysis.complexity || 'Masterclass',
        aiAnalyzed: true,
      };

      // Prepend newly analyzed item to the sticky layered works stack
      setWorks((prev) => [newTattooWork, ...prev]);
      setAnalyzedSuccessItem(newTattooWork);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err: any) {
      console.error('Upload & Vision AI error:', err);
      setAnalysisError(err.message || 'Error running Vision AI analysis.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
          <div className="space-y-4 max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-400 font-medium flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-black" />
              <span>Layered Sticky Scroll Gallery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-black tracking-tight uppercase">
              Selected Works
            </h2>
            <p className="font-editorial text-xl sm:text-2xl text-neutral-700 italic">
              From microscopic single-needle florals to dark charcoal realism.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Explore authentic pieces completed at Gunslingers Studio in Kochi. Experience our layered sticky scroll gallery with automated Vision AI style detection and anatomical classification.
            </p>
          </div>

          {/* Interactive Actions: Vision AI Upload + Category Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 self-start md:self-end">
            
            {/* Vision AI Trigger Button */}
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="vision-ai-upload"
              />
              <label
                htmlFor="vision-ai-upload"
                className={`inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white hover:bg-neutral-800 transition-all text-[11px] font-bold uppercase tracking-[0.15em] cursor-pointer shadow-xs border border-black ${
                  isAnalyzing ? 'opacity-70 pointer-events-none' : ''
                }`}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Vision AI Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Analyze Image with Vision AI</span>
                  </>
                )}
              </label>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-50 border border-black/10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-all ${
                    selectedCategory === cat
                      ? 'bg-black text-white shadow-xs'
                      : 'text-neutral-600 hover:text-black hover:bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* AI Analysis Feedback Notification */}
        {analysisError && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{analysisError}</span>
            </div>
            <button 
              onClick={() => setAnalysisError(null)}
              className="text-neutral-500 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {analyzedSuccessItem && (
          <div className="p-5 bg-neutral-50 border-2 border-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-black font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Vision AI Analysis Complete: Added to Sticky Gallery</span>
              </div>
              <p className="text-xs text-neutral-600">
                Identified style: <strong className="text-black">{analyzedSuccessItem.category}</strong> · Content: <strong className="text-black">{analyzedSuccessItem.contentSubject}</strong>
              </p>
            </div>
            <button
              onClick={() => setActiveModalWork(analyzedSuccessItem)}
              className="text-xs uppercase font-bold tracking-wider text-black underline hover:text-neutral-600 flex items-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Inspect Details</span>
            </button>
          </div>
        )}

        {/* LAYERED STICKY SCROLL GALLERY STRUCTURE */}
        {/* Each card is sticky-positioned with an incremental top offset, creating a graceful stacked deck transition */}
        <div className="relative space-y-12 sm:space-y-16 pb-12">
          {filteredWorks.map((work, index) => {
            // Dynamic top offset for sticky stacking effect (e.g. 104px, 120px, 136px...)
            const stickyTop = 96 + index * 12;

            return (
              <div
                key={work.id}
                style={{ top: `${stickyTop}px` }}
                className="sticky z-10 transition-transform duration-300"
              >
                <div className="bg-white border-2 border-black shadow-[0_12px_36px_rgba(0,0,0,0.08)] overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                    
                    {/* Left Column: Visual Showcase (High-contrast presentation) */}
                    <div 
                      onClick={() => setActiveModalWork(work)}
                      className="lg:col-span-7 bg-neutral-950 relative overflow-hidden group cursor-pointer min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] flex items-center justify-center"
                    >
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 max-h-[580px]"
                        loading="lazy"
                      />

                      {/* Vision AI Badge */}
                      {work.aiAnalyzed && (
                        <div className="absolute top-4 left-4 z-10 bg-black/90 text-white border border-white/20 px-3 py-1 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest backdrop-blur-md">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>Vision AI Analyzed</span>
                        </div>
                      )}

                      {/* Hover view hint */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="px-4 py-2 bg-white text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg">
                          <Eye className="w-4 h-4" />
                          <span>Inspect High-Res Artwork</span>
                        </div>
                      </div>

                      {/* Bottom index marker */}
                      <div className="absolute bottom-4 left-4 z-10 bg-black/80 text-neutral-300 px-3 py-1 text-[11px] font-mono">
                        Plate {String(index + 1).padStart(2, '0')} / {String(filteredWorks.length).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Right Column: AI-Generated Descriptive Metadata & Technical Specs */}
                    <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-white space-y-8">
                      
                      {/* Top Metadata Header */}
                      <div className="space-y-5">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
                          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500 font-semibold">
                            {work.category}
                          </span>
                          <span className="text-[11px] font-mono text-black font-bold uppercase tracking-wider px-2 py-0.5 bg-neutral-100 border border-black/10">
                            {work.complexity || 'Masterclass'}
                          </span>
                        </div>

                        {/* Title & Subject */}
                        <div className="space-y-2">
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-black uppercase tracking-tight leading-tight">
                            {work.title}
                          </h3>
                          {work.contentSubject && (
                            <p className="text-xs uppercase font-mono tracking-wider text-neutral-500 flex items-center gap-1.5">
                              <Compass className="w-3.5 h-3.5 text-black" />
                              <span>Subject: {work.contentSubject}</span>
                            </p>
                          )}
                        </div>

                        {/* AI-Generated Editorial Caption */}
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-light">
                          {work.description}
                        </p>

                        {/* Descriptive Tags */}
                        {work.tags && work.tags.length > 0 && (
                          <div className="space-y-2 pt-2">
                            <div className="text-[10px] font-mono uppercase text-neutral-400 font-semibold flex items-center gap-1.5">
                              <Tag className="w-3 h-3 text-neutral-500" />
                              <span>Style & Content Tags:</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {work.tags.map((tag, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[11px] font-mono text-black bg-neutral-50 border border-black/10 px-2.5 py-1"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technical Parameters (Placement, Artist, Duration) */}
                        <div className="border-t border-black/10 pt-4 space-y-2.5 text-xs font-mono text-neutral-700">
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500 uppercase">Master Artist:</span>
                            <span className="font-bold text-black">{work.artist}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500 uppercase">Anatomical Placement:</span>
                            <span className="font-medium text-black">{work.placement}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500 uppercase">Session Parameter:</span>
                            <span className="font-medium text-black">{work.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Bottom Actions */}
                      <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          onClick={() => onBookSpecific(work.artist, work.category)}
                          className="w-full sm:flex-1 bg-black text-white hover:bg-neutral-800 transition-colors py-3.5 px-5 text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2"
                        >
                          <span>Inquire Similar Piece</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setActiveModalWork(work)}
                          className="w-full sm:w-auto border border-black/20 hover:border-black text-black py-3.5 px-4 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Zoom</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct consultation callout */}
        <div className="p-8 sm:p-10 bg-white border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="space-y-1">
            <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-black">
              Have a custom reference image or unique anatomy?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              Upload your reference sketch above for automated Vision AI analysis, or bring your ideas to an artist consultation at our Kochi studio.
            </p>
          </div>
          <button
            onClick={() => onBookSpecific()}
            className="bg-black text-white hover:bg-neutral-800 transition-colors px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] whitespace-nowrap shrink-0 flex items-center justify-center gap-2"
          >
            <span>Book Private Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Modal Zoom & Technical Detail View */}
      {activeModalWork && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalWork(null)}
        >
          <div
            className="relative bg-white border-2 border-black max-w-4xl w-full max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalWork(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-black text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Image side */}
              <div className="md:col-span-7 bg-neutral-950 flex items-center justify-center overflow-hidden p-4">
                <img
                  src={activeModalWork.image}
                  alt={activeModalWork.title}
                  className="w-full h-full max-h-[580px] object-contain"
                />
              </div>

              {/* Detail side */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{activeModalWork.category}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-black uppercase leading-tight">
                    {activeModalWork.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                    {activeModalWork.description}
                  </p>

                  {activeModalWork.tags && (
                    <div className="flex flex-wrap gap-1.5 py-1">
                      {activeModalWork.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="border-t border-b border-black/10 py-4 space-y-2 text-xs font-mono text-neutral-700">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500 uppercase">Artist:</span>
                      <span className="font-bold text-black">{activeModalWork.artist}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500 uppercase">Placement:</span>
                      <span className="font-medium text-black">{activeModalWork.placement}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-500 uppercase">Session Duration:</span>
                      <span className="font-medium text-black">{activeModalWork.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => {
                      const artist = activeModalWork.artist;
                      const style = activeModalWork.category;
                      setActiveModalWork(null);
                      onBookSpecific(artist, style);
                    }}
                    className="w-full bg-black text-white hover:bg-neutral-800 transition-colors py-3.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    <span>Book With {activeModalWork.artist}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveModalWork(null)}
                    className="w-full border border-black/20 text-neutral-700 hover:text-black py-2.5 text-xs font-semibold uppercase tracking-wider text-center"
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
