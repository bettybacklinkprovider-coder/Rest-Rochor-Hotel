import React from 'react';
import { Bed, Wifi, Wind, Clock, Sparkles, MapPin, Briefcase, Coffee, ArrowRight } from 'lucide-react';
import { FACILITIES_DATA } from '../../data/hotelData';
import { useNavigation } from '../../context/NavigationContext';

const getFacilityIcon = (iconName: string) => {
  switch (iconName) {
    case 'Bed': return <Bed className="w-6 h-6" />;
    case 'Wifi': return <Wifi className="w-6 h-6" />;
    case 'Wind': return <Wind className="w-6 h-6" />;
    case 'Clock': return <Clock className="w-6 h-6" />;
    case 'Sparkles': return <Sparkles className="w-6 h-6" />;
    case 'MapPin': return <MapPin className="w-6 h-6" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6" />;
    case 'Coffee': return <Coffee className="w-6 h-6" />;
    default: return <Sparkles className="w-6 h-6" />;
  }
};

export const FacilitiesSection: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
            Hotel Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Facilities & Services
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Everything you need for a comfortable, effortless, and connected stay in Singapore. Enjoy essential amenities tailored for modern travelers.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((facility) => (
            <div
              key={facility.id}
              className="rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#C59B27]/60 hover:shadow-xl transition-all duration-300 group flex flex-col overflow-hidden"
            >
              {facility.image && (
                <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {facility.highlight && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-amber-300 px-2.5 py-1 rounded-md shadow-xs">
                      {facility.highlight}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 text-[#C59B27] flex items-center justify-center shadow-md backdrop-blur-xs group-hover:bg-[#C59B27] group-hover:text-white transition-colors">
                    {getFacilityIcon(facility.iconName)}
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {!facility.image && (
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#C59B27] flex items-center justify-center">
                        {getFacilityIcon(facility.iconName)}
                      </div>
                      {facility.highlight && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C59B27] bg-amber-100/60 px-2 py-0.5 rounded-sm">
                          {facility.highlight}
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#C59B27] transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('facilities')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-[#C59B27] transition-colors cursor-pointer group"
          >
            <span>Discover All Guest Services & Amenities Page</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
