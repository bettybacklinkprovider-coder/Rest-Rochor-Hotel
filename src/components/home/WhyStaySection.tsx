import React from 'react';
import { Smile, MapPin, HeartHandshake, ShieldCheck, Check } from 'lucide-react';
import { WHY_STAY_ITEMS } from '../../data/hotelData';

const getWhyIcon = (iconName: string) => {
  switch (iconName) {
    case 'Smile': return <Smile className="w-7 h-7 text-[#C59B27]" />;
    case 'MapPin': return <MapPin className="w-7 h-7 text-[#C59B27]" />;
    case 'HeartHandshake': return <HeartHandshake className="w-7 h-7 text-[#C59B27]" />;
    case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-[#C59B27]" />;
    default: return <Check className="w-7 h-7 text-[#C59B27]" />;
  }
};

export const WhyStaySection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
            The Rest Rochor Advantage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Why Stay With Us
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Discover why leisure and business guests consistently choose Rest Rochor Hotel for their Singapore stay.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_STAY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-[#C59B27]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between overflow-hidden"
            >
              {item.image && (
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <span className="absolute top-3 right-3 text-2xl font-serif font-bold text-white/90 drop-shadow-md">
                    0{index + 1}
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#C59B27]/15 border border-[#C59B27]/30">
                      {getWhyIcon(item.iconName)}
                    </div>
                    {!item.image && (
                      <span className="text-3xl font-serif font-bold text-slate-600">
                        0{index + 1}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs text-[#C59B27] font-medium">
                  <Check className="w-4 h-4" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
