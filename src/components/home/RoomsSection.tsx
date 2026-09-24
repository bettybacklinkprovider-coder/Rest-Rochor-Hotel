import React from 'react';
import { Wifi, Wind, Tv, Users, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { ROOMS_DATA } from '../../data/hotelData';
import { useNavigation } from '../../context/NavigationContext';

export const RoomsSection: React.FC = () => {
  const { navigateTo, openBooking } = useNavigation();

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
              Accommodations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
              Rooms & Accommodation
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              Thoughtfully curated rooms with premium bedding, individual air conditioning, rain showers, and optical Wi-Fi for your relaxed stay in Singapore.
            </p>
          </div>

          <div>
            <button
              onClick={() => navigateTo('rooms')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold text-sm hover:border-[#C59B27] hover:text-[#C59B27] transition-all shadow-xs cursor-pointer"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.slice(0, 3).map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Room Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {room.popular && (
                  <div className="absolute top-3 left-3 bg-[#1A1A1A] text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1 border border-slate-700 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#C59B27]" />
                    <span>Popular Choice</span>
                  </div>
                )}
                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-semibold">
                  <span className="text-[#C59B27] font-bold text-sm">${room.priceSGD} SGD</span> / night
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C59B27]" /> Max {room.capacity} Guests
                    </span>
                    <span>·</span>
                    <span>{room.bedType}</span>
                    <span>·</span>
                    <span>{room.sizeM2} m²</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#C59B27] transition-colors">
                    {room.name}
                  </h3>

                  <p className="text-slate-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>
                </div>

                {/* Key Amenities Badges */}
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Wifi className="w-3.5 h-3.5 text-slate-400" /> Free Wi-Fi
                    </span>
                    <span className="flex items-center gap-1">
                      <Wind className="w-3.5 h-3.5 text-slate-400" /> Air-Con
                    </span>
                    <span className="flex items-center gap-1">
                      <Tv className="w-3.5 h-3.5 text-slate-400" /> Smart TV
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => navigateTo('rooms')}
                      className="w-full py-2.5 px-3 rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-50 font-medium text-xs transition-colors text-center cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => openBooking(room.id)}
                      className="w-full py-2.5 px-3 rounded-lg bg-[#1A1A1A] text-white hover:bg-[#C59B27] font-medium text-xs transition-colors text-center cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Calendar className="w-3 h-3" />
                      <span>Book Room</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All Rooms Action Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('rooms')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C59B27] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#b0881f] transition-all shadow-md cursor-pointer"
          >
            <span>Explore Full Rooms Catalog & Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
