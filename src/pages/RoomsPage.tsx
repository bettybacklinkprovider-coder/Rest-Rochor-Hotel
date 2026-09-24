import React, { useState } from 'react';
import { Wifi, Wind, Tv, Users, Calendar, CheckCircle2, ShieldCheck, Info, Sparkles, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { ROOMS_DATA, Room } from '../data/hotelData';
import { useNavigation } from '../context/NavigationContext';

export const RoomsPage: React.FC = () => {
  const { openBooking, navigateTo } = useNavigation();
  const [activeFilter, setActiveFilter] = useState<'all' | 'double' | 'twin' | 'suite' | 'family'>('all');
  const [selectedPreviewRoom, setSelectedPreviewRoom] = useState<Room | null>(null);
  const [roomActiveImageIndices, setRoomActiveImageIndices] = useState<Record<string, number>>({});

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (activeFilter === 'double') return room.id.includes('double');
    if (activeFilter === 'twin') return room.id.includes('twin');
    if (activeFilter === 'suite') return room.id.includes('suite');
    if (activeFilter === 'family') return room.id.includes('family');
    return true;
  });

  const handleRoomImageSelect = (roomId: string, index: number) => {
    setRoomActiveImageIndices((prev) => ({ ...prev, [roomId]: index }));
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#1A1A1A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27]">
            Rest Rochor Hotel · Singapore
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Rooms & Accommodation
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover clean, air-conditioned boutique rooms thoughtfully designed for relaxation after a day exploring Singapore. Enjoy free optical Wi-Fi, rain showers, and 24/7 reception service.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* Interactive Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            <span className="text-xs font-semibold text-slate-500 mr-2 uppercase tracking-wider hidden sm:inline">
              Filter By:
            </span>
            {[
              { id: 'all', label: 'All Rooms' },
              { id: 'double', label: 'Deluxe Double' },
              { id: 'twin', label: 'Superior Twin' },
              { id: 'suite', label: 'Executive Suite' },
              { id: 'family', label: 'Family Quad' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#1A1A1A] text-white shadow-sm font-semibold'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-900">{filteredRooms.length}</span> room type(s)
          </div>
        </div>

        {/* Room Catalog Listings */}
        <div className="space-y-12">
          {filteredRooms.map((room) => {
            const roomImages = room.images && room.images.length > 0 ? room.images : [room.image];
            const currentImgIndex = roomActiveImageIndices[room.id] || 0;
            const currentImg = roomImages[currentImgIndex] || room.image;

            return (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Room Image Container with Thumbnails */}
                <div className="lg:col-span-5 relative flex flex-col bg-slate-900 group">
                  <div className="relative h-72 lg:h-[320px] w-full overflow-hidden">
                    <img
                      src={currentImg}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {room.popular && (
                      <div className="absolute top-4 left-4 bg-[#1A1A1A] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 border border-slate-700 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>Guest Favorite</span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs">
                      <span className="font-bold text-base text-[#C59B27]">${room.priceSGD} SGD</span> / night
                    </div>
                  </div>

                  {/* Room Photo Thumbnails Bar */}
                  {roomImages.length > 1 && (
                    <div className="p-2.5 bg-slate-950 flex items-center gap-2 overflow-x-auto border-t border-slate-800">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider px-1">
                        Photos ({roomImages.length}):
                      </span>
                      {roomImages.map((imgUrl, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleRoomImageSelect(room.id, idx)}
                          className={`w-12 h-9 rounded-md overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                            currentImgIndex === idx
                              ? 'border-[#C59B27] ring-1 ring-[#C59B27]'
                              : 'border-slate-700 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Room Info */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#C59B27]" /> Capacity: {room.capacity} Guests
                      </span>
                      <span>·</span>
                      <span>Bed: {room.bedType}</span>
                      <span>·</span>
                      <span>Size: {room.sizeM2} m² ({Math.round(room.sizeM2 * 10.764)} sq ft)</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                      {room.name}
                    </h2>

                    <p className="text-[#C59B27] font-medium text-xs">
                      {room.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Amenities List */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
                      Key Room Amenities:
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-700">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 p-1.5 bg-slate-50 rounded-md border border-slate-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking & Contact Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Free Wi-Fi · Air-Con · 24/7 Support</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedPreviewRoom(room)}
                        className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Full Specs</span>
                      </button>

                      <button
                        onClick={() => openBooking(room.id)}
                        className="px-6 py-2.5 rounded-xl bg-[#C59B27] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#b0881f] transition-colors shadow-sm cursor-pointer flex items-center gap-2"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Room (${room.priceSGD} SGD)</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Need Help Booking Callout */}
        <div className="mt-16 bg-[#1A1A1A] text-white p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">Need Assistance or Group Booking?</h3>
            <p className="text-slate-300 text-xs">Call our 24/7 reception desk at +65 6993 9633 or send us a inquiry.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+6569939633"
              className="px-5 py-3 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors"
            >
              Call +65 6993 9633
            </a>
            <button
              onClick={() => navigateTo('contact')}
              className="px-5 py-3 rounded-xl bg-[#C59B27] text-white text-xs font-bold hover:bg-[#b0881f] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

      </div>

      {/* Full Specs Modal */}
      {selectedPreviewRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6 border border-slate-200 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                {selectedPreviewRoom.name}
              </h3>
              <button
                onClick={() => setSelectedPreviewRoom(null)}
                className="text-slate-400 hover:text-slate-700 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-2">
              <img
                src={selectedPreviewRoom.image}
                alt={selectedPreviewRoom.name}
                className="w-full h-52 object-cover rounded-xl"
              />
              {selectedPreviewRoom.images && selectedPreviewRoom.images.length > 1 && (
                <div className="flex items-center gap-2 pt-2 overflow-x-auto">
                  {selectedPreviewRoom.images.map((img, i) => (
                    <img key={i} src={img} alt={`Preview ${i + 1}`} className="w-16 h-12 rounded-lg object-cover border border-slate-200" />
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2 text-sm text-slate-600">
              <p><strong>Price:</strong> ${selectedPreviewRoom.priceSGD} SGD / night</p>
              <p><strong>Bed Type:</strong> {selectedPreviewRoom.bedType}</p>
              <p><strong>Room Size:</strong> {selectedPreviewRoom.sizeM2} m²</p>
              <p><strong>Max Occupancy:</strong> {selectedPreviewRoom.capacity} Guests</p>
              <p className="pt-2">{selectedPreviewRoom.description}</p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Full Amenities:</h4>
              <ul className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedPreviewRoom.amenities.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedPreviewRoom(null)}
                className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-medium"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const id = selectedPreviewRoom.id;
                  setSelectedPreviewRoom(null);
                  openBooking(id);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#C59B27] text-white text-xs font-bold uppercase"
              >
                Book This Room Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
