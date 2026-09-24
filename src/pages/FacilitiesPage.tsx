import React from 'react';
import { Bed, Wifi, Wind, Clock, Sparkles, MapPin, Briefcase, Coffee, ShieldCheck, Check, Calendar, Phone } from 'lucide-react';
import { FACILITIES_DATA, HOTEL_IMAGES, HOTEL_INFO } from '../data/hotelData';
import { useNavigation } from '../context/NavigationContext';

const getFacilityIcon = (iconName: string) => {
  switch (iconName) {
    case 'Bed': return <Bed className="w-6 h-6 text-[#C59B27]" />;
    case 'Wifi': return <Wifi className="w-6 h-6 text-[#C59B27]" />;
    case 'Wind': return <Wind className="w-6 h-6 text-[#C59B27]" />;
    case 'Clock': return <Clock className="w-6 h-6 text-[#C59B27]" />;
    case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C59B27]" />;
    case 'MapPin': return <MapPin className="w-6 h-6 text-[#C59B27]" />;
    case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#C59B27]" />;
    case 'Coffee': return <Coffee className="w-6 h-6 text-[#C59B27]" />;
    default: return <Sparkles className="w-6 h-6 text-[#C59B27]" />;
  }
};

export const FacilitiesPage: React.FC = () => {
  const { openBooking, navigateTo } = useNavigation();

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <section className="bg-[#1A1A1A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
            Guest Amenities & Hospitality
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Facilities & Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At Rest Rochor Hotel, we prioritize your comfort with high-speed Wi-Fi, round-the-clock reception assistance, immaculate room hygiene, and tailored concierge support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Spotlight Feature: 24/7 Front Desk & Hospitality */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <div className="lg:col-span-6 relative h-72 lg:h-[400px]">
            <img
              src={HOTEL_IMAGES.reception}
              alt="Rest Rochor Hotel 24/7 Reception"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-[#1A1A1A] text-white px-4 py-2 rounded-xl text-xs font-semibold border border-slate-700">
              <span className="text-[#C59B27]">24/7 Front Desk</span> · Always Available
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
              Guest Care Spotlight
            </span>
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              24-Hour Reception & Concierge Support
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you arrive on a late-night flight into Changi Airport or need early morning local transit suggestions, our dedicated reception desk is staffed 24 hours a day, 7 days a week.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Express Check-in & Check-out Process',
                'Complimentary Luggage Storage for Early Arrivals & Late Departures',
                'Local Singapore Transit Guidance (Rochor & Bugis MRT lines)',
                'Taxi Booking & Airport Transfer Coordination',
                'Multi-lingual Guest Assistance'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#C59B27] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => openBooking()}
                className="px-6 py-3 rounded-xl bg-[#C59B27] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#b0881f] transition-colors cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Stay Direct</span>
              </button>
            </div>
          </div>
        </div>

        {/* Full Facilities Catalog Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Comprehensive Hotel & Room Amenities
            </h2>
            <p className="text-slate-600 text-xs">
              Every detail is designed to make your Singapore journey seamless and relaxing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES_DATA.map((fac) => (
              <div
                key={fac.id}
                className="rounded-2xl bg-white border border-slate-200 hover:border-[#C59B27]/60 shadow-xs hover:shadow-lg transition-all flex flex-col overflow-hidden group justify-between"
              >
                <div>
                  {fac.image && (
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={fac.image}
                        alt={fac.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      {fac.highlight && (
                        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-amber-950 bg-amber-300 px-2.5 py-1 rounded-md shadow-xs">
                          {fac.highlight}
                        </span>
                      )}
                      <div className="absolute bottom-3 left-3 p-2.5 rounded-xl bg-white/90 text-[#C59B27] shadow-md backdrop-blur-xs">
                        {getFacilityIcon(fac.iconName)}
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    {!fac.image && (
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 inline-block mb-4">
                        {getFacilityIcon(fac.iconName)}
                      </div>
                    )}

                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                      {fac.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed">
                      {fac.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-[#C59B27] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Included in All Bookings</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Room Specific Inclusions List */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
                Standard Equipment
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                In-Room Amenities Checklist
              </h3>
            </div>
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200 hover:text-white text-xs font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Questions? Call {HOTEL_INFO.phone}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300">
            {[
              'Individual Whisper-Quiet Air Conditioner',
              'High-Speed Free Wi-Fi (1Gbps Optical)',
              '43" to 50" Smart Flat Screen HDTV',
              'Digital In-Room Electronic Safe',
              'Coffee & Tea Making Facilities',
              'En-suite Bathroom with Rain Shower',
              'Hairdryer & Premium Guest Toiletries',
              'Work Desk & Ergonomic Chair',
              'Complimentary Bottled Drinking Water',
              'Clean Cotton Linens & Plush Towels',
              'Daily Housekeeping Service',
              'Non-Smoking Room Environment'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <Check className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
