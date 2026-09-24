import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, MapPin } from 'lucide-react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo, openBooking } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Rooms', page: 'rooms' },
    { label: 'Facilities & Services', page: 'facilities' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement / Quick Info Bar */}
      <div className="bg-[#1A1A1A] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{HOTEL_INFO.address}</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">
              Rochor MRT (2 min walk)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#C59B27] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-[#C59B27] font-medium hidden sm:inline">24/7 Front Desk</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark with Logo Image */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="group flex items-center gap-3"
          >
            <img
              src={HOTEL_IMAGES.logo}
              alt="Rest Rochor Hotel Logo"
              className="h-11 w-11 sm:h-12 sm:w-12 rounded-lg object-cover border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#C59B27] transition-colors leading-tight">
                Rest Rochor Hotel
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-500 font-medium">
                Singapore · Perak Road
              </span>
            </div>
          </a>

          {/* Zone 2: 4 Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#C59B27] font-semibold'
                      : 'text-slate-700 hover:text-[#C59B27]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C59B27] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phoneClean}`}
              className="p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:text-[#C59B27] hover:border-[#C59B27] transition-colors"
              title="Call Reception"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => openBooking()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#1A1A1A] text-white hover:bg-[#C59B27] transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openBooking()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold bg-[#1A1A1A] text-white hover:bg-[#C59B27] transition-all sm:hidden cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <button
                    key={item.page}
                    onClick={() => handleNavClick(item.page)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-left text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#C59B27]/10 text-[#C59B27] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C59B27]" />}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-slate-200 text-slate-800 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C59B27]" />
                  <span>Call Us: {HOTEL_INFO.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking();
                  }}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#C59B27] text-white text-sm font-semibold uppercase tracking-wider hover:bg-[#b0881f] transition-colors shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Stay</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
