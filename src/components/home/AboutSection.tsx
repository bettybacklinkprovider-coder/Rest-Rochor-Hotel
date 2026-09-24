import React, { useState } from 'react';
import { ShieldCheck, MapPin, Heart, Sparkles, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { HOTEL_IMAGES } from '../../data/hotelData';
import { useNavigation } from '../../context/NavigationContext';

export const AboutSection: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [activePhoto, setActivePhoto] = useState<'exterior' | 'interior'>('exterior');

  const photos = [
    { id: 'exterior', url: HOTEL_IMAGES.about, title: 'Hotel Exterior & Entrance' },
    { id: 'interior', url: HOTEL_IMAGES.aboutOriginal, title: 'Hotel Interior & Lounge' }
  ];

  const currentPhoto = photos.find((p) => p.id === activePhoto) || photos[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Dual Photo Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                className="w-full h-[380px] sm:h-[440px] object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-medium flex items-center gap-1.5 border border-white/20">
                <ImageIcon className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>{currentPhoto.title}</span>
              </div>
            </div>

            {/* Photo Selector Switcher */}
            <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              <button
                onClick={() => setActivePhoto('exterior')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activePhoto === 'exterior'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>New Exterior Photo</span>
              </button>
              <button
                onClick={() => setActivePhoto('interior')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  activePhoto === 'interior'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Previous Interior Photo</span>
              </button>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
                About Rest Rochor Hotel
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Modern Comfort in the Heart of Singapore
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Rest Rochor Hotel offers a calm and peaceful sanctuary amidst the vibrant pulse of Singapore’s heritage corridor. Located at 12 Perak Rd, our boutique hotel combines contemporary guest amenities with unmatched access to Rochor MRT station, Bugis shopping hubs, and historic cultural landmarks.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-[#C59B27] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Comfort & Quiet</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Plush mattresses, air conditioning, and peaceful room atmosphere.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-[#C59B27] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Convenient Transit</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    2 minutes walk to Rochor MRT station with direct lines across the island.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-[#C59B27] shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Pristine Cleanliness</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Immaculate daily housekeeping and rigorous sanitation standards.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-[#C59B27] shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">Warm Hospitality</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Dedicated 24/7 front desk team focused on your comfort and itinerary.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => navigateTo('facilities')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#C59B27] transition-colors cursor-pointer group"
              >
                <span>Learn More About Our Facilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
