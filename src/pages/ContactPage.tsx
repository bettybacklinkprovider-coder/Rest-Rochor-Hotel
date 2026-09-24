import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Calendar, CheckCircle2, Navigation, Send, ExternalLink, Sparkles } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { useNavigation } from '../context/NavigationContext';

export const ContactPage: React.FC = () => {
  const { openBooking } = useNavigation();

  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header */}
      <section className="bg-[#1A1A1A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
            Reach Out to Rest Rochor Hotel
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Contact & Location
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our 24/7 reception desk at 12 Perak Rd is available around the clock to assist with reservation inquiries, room availability, airport travel, and local Singapore guidance.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Phone */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#C59B27] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                24/7 Phone Support
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                {HOTEL_INFO.phone}
              </h2>
              <p className="text-xs text-slate-500">
                Direct phone reservation and reception assistance available 24 hours daily.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={`tel:${HOTEL_INFO.phoneClean}`}
                className="w-full py-3 rounded-xl bg-[#1A1A1A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C59B27] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Card 2: Address */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#C59B27] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                Hotel Address
              </span>
              <h2 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                {HOTEL_INFO.address}
              </h2>
              <p className="text-xs text-slate-500">
                {HOTEL_INFO.neighborhood}, Singapore 208133
              </p>
            </div>
            <div className="pt-6">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 text-xs font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Card 3: Online Reservation */}
          <div className="bg-[#1A1A1A] text-white p-6 rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27]/20 text-[#C59B27] flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B27] block">
                Instant Direct Booking
              </span>
              <h2 className="font-serif text-2xl font-bold text-white">
                Best Rate Guarantee
              </h2>
              <p className="text-xs text-slate-300">
                Book direct for flexible dates, check-in options, and transparent room rates in SGD.
              </p>
            </div>
            <div className="pt-6">
              <button
                onClick={() => openBooking()}
                className="w-full py-3 rounded-xl bg-[#C59B27] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#b0881f] transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Stay</span>
              </button>
            </div>
          </div>

        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
                Send Us A Message
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Guest Inquiry Form
              </h2>
              <p className="text-slate-600 text-xs mt-1">
                Have questions regarding room setup, group bookings, or transit? Send us a quick note.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-xl font-bold text-emerald-900">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, <span className="font-semibold">{name}</span>! Our front desk team at Rest Rochor Hotel will respond to <span className="font-semibold">{email}</span> within 1-2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-5 py-2.5 rounded-lg bg-emerald-700 text-white text-xs font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Tan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+65 9123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Room Reservation">Room Reservation & Availability</option>
                    <option value="Group Stay">Group Stay / Extended Booking</option>
                    <option value="Airport Transfer">Airport / MRT Directions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your inquiry or stay requirements here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1A1A1A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#C59B27] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Front Desk</span>
                </button>
              </form>
            )}

          </div>

          {/* Map and Directions */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C59B27]" />
                  12 Perak Rd, Singapore 208133
                </h3>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(HOTEL_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C59B27] font-semibold hover:underline flex items-center gap-1"
                >
                  Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="h-72 rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  title="Rest Rochor Hotel Google Maps"
                  src="https://maps.google.com/maps?q=12%20Perak%20Rd,%20Singapore%20208133&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Travel & MRT Directions */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C59B27]" />
                How to Reach Us from Changi Airport & MRT
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block">Via MRT (Downtown Line / DT13):</span>
                  <p className="mt-0.5">Take Downtown Line to Rochor Station (DT13). Exit B, walk 2 minutes (180m) down Perak Road.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block">Via Taxi / Grab from Changi Airport (SIN):</span>
                  <p className="mt-0.5">Approx 18-22 minutes drive via ECP highway directly to 12 Perak Rd, Singapore 208133.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">Front Desk Business Hours:</span>
                    <span className="text-slate-500">24 Hours / 365 Days</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-900 block">Check-in / Check-out:</span>
                    <span className="text-slate-500">3:00 PM / 12:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
