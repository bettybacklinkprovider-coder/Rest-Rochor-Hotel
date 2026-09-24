import React from 'react';
import { Phone, MapPin, Mail, Clock, Calendar, Navigation, ExternalLink } from 'lucide-react';
import { HOTEL_INFO } from '../../data/hotelData';
import { useNavigation } from '../../context/NavigationContext';

export const ContactCtaSection: React.FC = () => {
  const { navigateTo, openBooking } = useNavigation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
            Get In Touch & Visit Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Book Your Stay at Rest Rochor Hotel
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Conveniently situated at 12 Perak Rd, Singapore. Contact our 24/7 reception team or book direct online for the best rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contact & Call To Action */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 sm:p-10 rounded-2xl flex flex-col justify-between shadow-xl border border-slate-800">
            <div className="space-y-8">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
                  Direct Contact Information
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  We're Here to Help
                </h3>
              </div>

              <div className="space-y-6 text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="p-2.5 rounded-lg bg-[#C59B27]/20 text-[#C59B27] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Call Reception / Enquiries</span>
                    <a
                      href={`tel:${HOTEL_INFO.phoneClean}`}
                      className="text-lg font-bold text-white hover:text-[#C59B27] transition-colors"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                    <span className="block text-[11px] text-amber-400 mt-0.5">24 Hours Available</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="p-2.5 rounded-lg bg-[#C59B27]/20 text-[#C59B27] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Hotel Location</span>
                    <p className="text-base font-semibold text-white mt-0.5">
                      {HOTEL_INFO.address}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {HOTEL_INFO.neighborhood}, Singapore
                    </p>
                  </div>
                </div>

                {/* Check In / Out */}
                <div className="flex items-center gap-3 text-xs text-slate-300 px-1">
                  <Clock className="w-4 h-4 text-[#C59B27]" />
                  <span>Check-in: {HOTEL_INFO.checkIn} · Check-out: {HOTEL_INFO.checkOut}</span>
                </div>

              </div>

            </div>

            {/* CTAs */}
            <div className="pt-8 space-y-3 border-t border-slate-800 mt-8">
              <button
                onClick={() => openBooking()}
                className="w-full py-4 px-6 rounded-xl bg-[#C59B27] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#b0881f] transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay Direct</span>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors cursor-pointer text-center"
              >
                View Full Contact Form & Directions
              </button>
            </div>

          </div>

          {/* Right Column: Visual Interactive Map & Transit Guide */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] flex items-center gap-1.5">
                  <Navigation className="w-4 h-4" /> Transit & Map Location
                </span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C59B27] font-semibold hover:underline flex items-center gap-1"
                >
                  Open Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h3 className="font-serif text-xl font-bold text-slate-900">
                12 Perak Road, Singapore 208133
              </h3>
            </div>

            {/* Simulated Interactive Map Display */}
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-300 shadow-inner bg-slate-200">
              <iframe
                title="Rest Rochor Hotel Location Map"
                src="https://maps.google.com/maps?q=12%20Perak%20Rd,%20Singapore%20208133&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            {/* Nearby MRT Stations Info */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C59B27]" /> Walking Distance to MRT Stations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                {HOTEL_INFO.mrtStations.map((mrt, i) => (
                  <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="font-semibold text-slate-900 block truncate">{mrt.name.split('(')[0]}</span>
                    <span className="text-slate-500">{mrt.distance}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
