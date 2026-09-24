import React from 'react';
import { Phone, MapPin, Mail, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  const { navigateTo, openBooking } = useNavigation();

  const handleNavClick = (page: PageRoute) => {
    navigateTo(page);
  };

  return (
    <footer className="bg-[#14171A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Intro */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
              Rest Rochor Hotel
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              A refined boutique stay offering modern air-conditioned accommodation, high-speed Wi-Fi, and 24/7 hospitality at Perak Road, Singapore.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
              <span>Official Hotel Website · Best Rate Guaranteed</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer text-slate-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('rooms')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer text-slate-300"
                >
                  Rooms & Accommodation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('facilities')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer text-slate-300"
                >
                  Facilities & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#C59B27] transition-colors cursor-pointer text-slate-300"
                >
                  Contact Us & Map
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => openBooking()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C59B27] hover:underline cursor-pointer"
                >
                  Book Direct Online &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Hotel Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Contact & Location
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-400">Phone Reservation</span>
                  <a
                    href={`tel:${HOTEL_INFO.phoneClean}`}
                    className="font-medium text-white hover:text-[#C59B27] transition-colors"
                  >
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-400">Address</span>
                  <span>{HOTEL_INFO.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-slate-400">Email Inquiry</span>
                  <a href={`mailto:${HOTEL_INFO.email}`} className="hover:underline">
                    {HOTEL_INFO.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Arrival & MRT Transit */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 border-l-2 border-[#C59B27] pl-2.5">
              Transit & Key Times
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <Navigation className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Nearest MRT:</span>
                  <p className="text-slate-400 mt-0.5">Rochor MRT (DT13) — 180 meters (2 min walk)</p>
                  <p className="text-slate-400">Jalan Besar MRT (DT22) — 350 meters</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300 pt-1">
                <Clock className="w-4 h-4 text-[#C59B27]" />
                <span>Check-in: {HOTEL_INFO.checkIn} | Check-out: {HOTEL_INFO.checkOut}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Rest Rochor Hotel, Singapore. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>12 Perak Rd, Singapore 208133</span>
            <span aria-hidden="true">·</span>
            <span>Tel: +65 6993 9633</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
