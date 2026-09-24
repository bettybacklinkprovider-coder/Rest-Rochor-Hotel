import React, { useState } from 'react';
import { Calendar, Phone, MapPin, Sparkles, Star, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { HOTEL_IMAGES } from '../../data/hotelData';

export const HeroSection: React.FC = () => {
  const { navigateTo, openBooking } = useNavigation();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = HOTEL_IMAGES.heroSlides || [
    { url: HOTEL_IMAGES.hero, caption: 'Rest Rochor Hotel Exterior' },
    { url: HOTEL_IMAGES.heroOriginal, caption: 'Hotel Facade & Entry' },
    { url: HOTEL_IMAGES.aboutOriginal, caption: 'Lounge & Reception Interior' }
  ];

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-slate-900 text-white min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[activeSlideIndex].url}
          alt={slides[activeSlideIndex].caption}
          className="w-full h-full object-cover object-center scale-105 transition-all duration-700 ease-in-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim overlay for WCAG legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl space-y-6">
          
          {/* Subtle location kicker badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Singapore Heritage District · 12 Perak Road</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-wrap-balance">
            Welcome to Rest Rochor Hotel
          </h1>

          {/* Short Welcoming Text */}
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
            Experience exceptional comfort, modern air-conditioned rooms, and warm Singaporean hospitality located just steps away from Rochor MRT station in central Singapore.
          </p>

          {/* Key Quick Highlights */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 pt-2">
            <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-md backdrop-blur-xs border border-white/10">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>4.8/5 Guest Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-md backdrop-blur-xs border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>2 Min to Rochor MRT</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-md backdrop-blur-xs border border-white/10">
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>24/7 Front Desk</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => openBooking()}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C59B27] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#b0881f] transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm border border-white/30 backdrop-blur-md transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </div>

        </div>
      </div>

      {/* Photo View Selector Controls at Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/15">
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="p-2 rounded-xl bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5 px-2">
          <ImageIcon className="w-3.5 h-3.5 text-[#C59B27]" />
          <span className="text-xs font-semibold text-white">
            Photo {activeSlideIndex + 1} of {slides.length}:
          </span>
          <span className="text-xs text-slate-300 hidden sm:inline">
            {slides[activeSlideIndex].caption}
          </span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="p-2 rounded-xl bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
