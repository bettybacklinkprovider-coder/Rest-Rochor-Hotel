import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';

export const BookingModal: React.FC = () => {
  const { isBookingOpen, closeBooking, selectedRoomForBooking } = useNavigation();

  // Booking Form State
  const [roomId, setRoomId] = useState<string>(selectedRoomForBooking || ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isBookingOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const nights = Math.max(1, Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24)));

  const totalPriceSGD = currentRoom.priceSGD * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail || !guestPhone) return;

    const refCode = `RRH-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    closeBooking();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#1A1A1A] text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C59B27] uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Reservation · Rest Rochor Hotel</span>
            </div>
            <h2 className="font-serif text-2xl font-bold mt-1 text-white">
              {isSubmitted ? 'Booking Confirmation' : 'Book Your Stay in Singapore'}
            </h2>
          </div>
          <button
            onClick={resetForm}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            /* Confirmation Screen */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                  Reservation Reference
                </span>
                <p className="text-3xl font-bold text-slate-900 font-mono mt-1 text-[#C59B27]">
                  {bookingRef}
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  Thank you, <span className="font-semibold text-slate-900">{guestName}</span>! Your reservation request at Rest Rochor Hotel has been logged successfully.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-left space-y-3 text-sm">
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Hotel:</span>
                  <span className="font-medium text-slate-900">{HOTEL_INFO.name}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Address:</span>
                  <span className="font-medium text-slate-900">{HOTEL_INFO.address}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Room Type:</span>
                  <span className="font-medium text-slate-900">{currentRoom.name}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Dates ({nights} {nights === 1 ? 'night' : 'nights'}):</span>
                  <span className="font-medium text-slate-900">{checkIn} to {checkOut}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Guests:</span>
                  <span className="font-medium text-slate-900">{guests} Guest(s)</span>
                </div>
                <div className="flex justify-between font-bold text-base text-slate-900 pt-1">
                  <span>Estimated Total Amount:</span>
                  <span className="text-[#C59B27]">${totalPriceSGD} SGD</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                A confirmation email has been dispatched to <span className="font-medium">{guestEmail}</span>. Our 24/7 reception team (+65 6993 9633) is ready to welcome you upon arrival!
              </p>

              <button
                onClick={resetForm}
                className="w-full py-3 bg-[#1A1A1A] text-white font-semibold rounded-lg hover:bg-[#C59B27] transition-colors cursor-pointer"
              >
                Close Confirmation
              </button>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Select Room
                </label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full p-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-[#C59B27] focus:border-transparent transition-all font-medium text-sm"
                >
                  {ROOMS_DATA.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — ${room.priceSGD} SGD / night ({room.bedType})
                    </option>
                  ))}
                </select>
              </div>

              {/* Dates & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-[#C59B27]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-[#C59B27]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#C59B27]" />
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-[#C59B27]"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                  </select>
                </div>
              </div>

              {/* Price Calculation Summary Banner */}
              <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs text-amber-900 font-semibold">
                    {currentRoom.name} ({nights} {nights === 1 ? 'Night' : 'Nights'})
                  </p>
                  <p className="text-xs text-amber-700 mt-0.5">
                    ${currentRoom.priceSGD} SGD × {nights} nights
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-amber-800 uppercase block font-medium">Estimated Total</span>
                  <span className="text-2xl font-bold text-amber-900 font-serif">
                    ${totalPriceSGD} SGD
                  </span>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-4 pt-2 border-t border-slate-200">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                  Guest Contact Details
                </h3>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="sarah@example.com"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+65 9123 4567"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Special Requests / Flight Arrival Info (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Early arrival, high floor, quiet room..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#C59B27]"
                  />
                </div>
              </div>

              {/* Guarantees */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>No instant booking fees · Pay at hotel or direct confirmation · 24/7 assistance (+65 6993 9633)</span>
              </div>

              {/* Action */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#C59B27] text-white font-semibold text-sm uppercase tracking-wider hover:bg-[#b0881f] transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Confirm Reservation Request (${totalPriceSGD} SGD)</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
