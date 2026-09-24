import heroFacade from '../assets/images/hero_hotel_facade_1790249364082.jpg';
import aboutInterior from '../assets/images/about_hotel_interior_1790249376067.jpg';
import roomDeluxeDouble from '../assets/images/room_deluxe_double_1790249388139.jpg';
import roomExecutiveSuite from '../assets/images/room_executive_suite_1790249399736.jpg';
import roomTwinComfort from '../assets/images/room_twin_comfort_1790249413891.jpg';
import facilityReception from '../assets/images/facility_reception_1790249424091.jpg';

import facilityQuietRooms from '../assets/images/facility_quiet_rooms_1790252106151.jpg';
import facilitySpeedWifi from '../assets/images/facility_speed_wifi_1790252119013.jpg';
import facilityAirCon from '../assets/images/facility_air_con_1790252130210.jpg';
import facilityReceptionDesk from '../assets/images/facility_reception_desk_1790252142246.jpg';
import facilityHousekeeping from '../assets/images/facility_housekeeping_1790252156952.jpg';
import facilityRochorMrt from '../assets/images/facility_rochor_mrt_1790252168126.jpg';
import facilityLuggageHold from '../assets/images/facility_luggage_hold_1790252179574.jpg';
import facilityCoffeeTea from '../assets/images/facility_coffee_tea_1790252192044.jpg';

export interface Room {
  id: string;
  name: string;
  tagline: string;
  priceSGD: number;
  capacity: number;
  sizeM2: number;
  bedType: string;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  popular?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'room' | 'hotel' | 'service';
  highlight?: string;
  image?: string;
}

export const HOTEL_INFO = {
  name: 'Rest Rochor Hotel',
  phone: '+65 6993 9633',
  phoneClean: '+6569939633',
  address: '12 Perak Rd, Singapore 208133',
  city: 'Singapore',
  neighborhood: 'Rochor / Little India',
  email: 'stay@restrochorhotel.com',
  checkIn: '3:00 PM',
  checkOut: '12:00 PM',
  mapCoordinates: { lat: 1.3039, lng: 103.8524 },
  mrtStations: [
    { name: 'Rochor MRT (Downtown Line - DT13)', distance: '180m (2 min walk)' },
    { name: 'Jalan Besar MRT (Downtown Line - DT22)', distance: '350m (4 min walk)' },
    { name: 'Little India MRT (North East Line - NE7 / DT12)', distance: '500m (6 min walk)' },
  ],
  nearbyAttractions: [
    { name: 'Tekka Centre & Little India Heritage Trail', distance: '3 min walk' },
    { name: 'Mustafa Centre (24-Hour Shopping Mall)', distance: '7 min walk' },
    { name: 'Bugis Junction & Bugis Street Market', distance: '10 min walk' },
    { name: 'Marina Bay Sands & Gardens by the Bay', distance: '10 mins by MRT' },
    { name: 'Changi International Airport (SIN)', distance: '20 mins by Taxi / 35 mins by MRT' }
  ]
};

export const HOTEL_IMAGES = {
  hero: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790252099/unnamed.png',
  heroOriginal: heroFacade,
  heroSlides: [
    { url: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790252099/unnamed.png', caption: 'Rest Rochor Hotel' },
    { url: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251179/unnamed.jpg', caption: 'Rest Rochor Hotel Front View' },
    { url: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251276/unnamed_1.jpg', caption: 'Rest Rochor Hotel Exterior' },
    { url: heroFacade, caption: 'Hotel Facade & Main Entrance' },
    { url: aboutInterior, caption: 'Lounge & Reception Interior' }
  ],
  logo: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790252099/unnamed.png',
  about: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790252099/unnamed.png',
  aboutOriginal: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251276/unnamed_1.jpg',
  reception: facilityReception,
  deluxeDouble: roomDeluxeDouble,
  executiveSuite: roomExecutiveSuite,
  twinComfort: roomTwinComfort
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Room',
    tagline: 'Refined comfort designed for modern travelers and couples',
    priceSGD: 128,
    capacity: 2,
    sizeM2: 20,
    bedType: '1 Queen Bed',
    image: roomDeluxeDouble,
    images: [
      roomDeluxeDouble,
      'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251276/unnamed_1.jpg',
      'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251179/unnamed.jpg',
      aboutInterior
    ],
    description: 'Thoughtfully styled with warm hardwood accents and plush queen-size bedding. Ideal for couples or solo explorers seeking a quiet sanctuary after exploring vibrant Singapore.',
    amenities: [
      'High-Speed Free Wi-Fi',
      'Individual Air Conditioning',
      '43" Smart Flat Screen TV',
      'In-Room Digital Safe',
      'Tea & Espresso Station',
      'En-suite Bathroom with Rain Shower',
      'Complimentary Bottled Water',
      'Daily Housekeeping'
    ],
    popular: true
  },
  {
    id: 'superior-twin',
    name: 'Superior Twin Room',
    tagline: 'Bright and ergonomic layout perfect for friends or business colleagues',
    priceSGD: 138,
    capacity: 2,
    sizeM2: 22,
    bedType: '2 Single Beds',
    image: roomTwinComfort,
    images: [
      roomTwinComfort,
      'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251276/unnamed_1.jpg',
      'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251179/unnamed.jpg'
    ],
    description: 'Equipped with two premium single mattresses, custom reading lights, and functional workspace. Perfectly configured for leisure pairs or corporate trips.',
    amenities: [
      'High-Speed Free Wi-Fi',
      'Individual Air Conditioning',
      '43" Smart Flat Screen TV',
      'Dedicated Work Desk & Chair',
      'In-Room Digital Safe',
      'Electric Kettle & Coffee Set',
      'En-suite Bathroom with Rain Shower',
      'Hairdryer & Premium Toiletries'
    ]
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    tagline: 'Spacious boutique retreat with separate seating area and city views',
    priceSGD: 188,
    capacity: 3,
    sizeM2: 32,
    bedType: '1 King Bed + Sofa Bed',
    image: roomExecutiveSuite,
    images: [
      roomExecutiveSuite,
      'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251276/unnamed_1.jpg',
      aboutInterior,
      'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251179/unnamed.jpg'
    ],
    description: 'Our premier suite offers elevated luxury with a king-sized mattress, generous seating lounge, atmospheric mood lighting, and oversized bath amenities.',
    amenities: [
      'High-Speed Free Wi-Fi',
      'Individual Air Conditioning',
      '50" Smart HD TV',
      'Separate Living Lounge Area',
      'Mini Refrigerator & Beverage Station',
      'In-Room Digital Safe',
      'Designer Rain Shower & Plush Towels',
      'Express Check-in Service'
    ],
    popular: true
  },
  {
    id: 'family-comfort',
    name: 'Family Quad Room',
    tagline: 'Generous space crafted for families traveling together',
    priceSGD: 218,
    capacity: 4,
    sizeM2: 36,
    bedType: '2 Queen Beds',
    image: roomDeluxeDouble,
    images: [
      roomDeluxeDouble,
      'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251276/unnamed_1.jpg',
      'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251179/unnamed.jpg',
      heroFacade
    ],
    description: 'Designed for family comfort, featuring two queen beds, ample luggage area, and child-friendly amenities in the heart of Singapore heritage district.',
    amenities: [
      'High-Speed Free Wi-Fi',
      'Dual Air Conditioning Units',
      '50" Smart HD TV',
      'Mini Refrigerator',
      'Spacious En-suite Bathroom',
      'Family Toiletries Pack',
      'In-Room Safe & Kettle',
      '24/7 Front Desk Assistance'
    ]
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'comfortable-rooms',
    title: 'Comfortable & Quiet Rooms',
    description: 'Custom-designed rooms with plush orthopaedic mattresses, blackout curtains, and sound isolation for a restful sleep.',
    iconName: 'Bed',
    category: 'room',
    highlight: 'Premium Mattresses',
    image: facilityQuietRooms
  },
  {
    id: 'free-wifi',
    title: 'High-Speed Free Wi-Fi',
    description: 'Seamless optical fiber Wi-Fi throughout all guest rooms, lobby, and common areas with unlimited connectivity.',
    iconName: 'Wifi',
    category: 'hotel',
    highlight: 'Optical Fiber 1Gbps',
    image: facilitySpeedWifi
  },
  {
    id: 'air-conditioning',
    title: 'Individual Air Conditioning',
    description: 'Whisper-quiet climate control in every room, keeping you refreshed after a day in tropical Singapore.',
    iconName: 'Wind',
    category: 'room',
    highlight: 'Climate Controlled',
    image: facilityAirCon
  },
  {
    id: '24-7-assistance',
    title: '24/7 Front Desk & Assistance',
    description: 'Our attentive team is on-site around the clock to assist with check-ins, local travel advice, taxis, and guest requests.',
    iconName: 'Clock',
    category: 'service',
    highlight: 'Always On Duty',
    image: facilityReceptionDesk
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping & Hygiene',
    description: 'Rigorous sanitization protocols and daily room cleaning ensure pristine conditions throughout your stay.',
    iconName: 'Sparkles',
    category: 'service',
    highlight: 'Hospitality Clean',
    image: facilityHousekeeping
  },
  {
    id: 'convenient-location',
    title: 'Prime Rochor Location',
    description: 'Situated at 12 Perak Rd, steps away from 3 major MRT stations, authentic dining, and cultural shopping hubs.',
    iconName: 'MapPin',
    category: 'hotel',
    highlight: '3 MRTs Nearby',
    image: facilityRochorMrt
  },
  {
    id: 'luggage-storage',
    title: 'Secure Luggage Storage',
    description: 'Complimentary early arrival and late departure luggage hold so you can explore Singapore hands-free.',
    iconName: 'Briefcase',
    category: 'service',
    highlight: 'Free Guest Benefit',
    image: facilityLuggageHold
  },
  {
    id: 'beverage-counter',
    title: 'Complimentary Coffee & Tea',
    description: 'Enjoy complimentary hot beverages, purified water refills, and light refreshment counter in the main lobby.',
    iconName: 'Coffee',
    category: 'hotel',
    highlight: 'In-Lobby Refreshments',
    image: facilityCoffeeTea
  }
];

export const WHY_STAY_ITEMS = [
  {
    id: 'comfortable-stay',
    title: 'Comfortable Stay',
    description: 'Relax in modern air-conditioned rooms featuring luxury mattresses, soft linens, rain showers, and tranquil atmosphere.',
    iconName: 'Smile',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251179/unnamed.jpg'
  },
  {
    id: 'convenient-location',
    title: 'Convenient Location',
    description: 'Located at 12 Perak Rd, just 2 minutes from Rochor MRT. Quick transit to Bugis, Marina Bay, Orchard, and Changi Airport.',
    iconName: 'MapPin',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1790251276/unnamed_1.jpg'
  },
  {
    id: 'friendly-service',
    title: 'Friendly Service',
    description: '24/7 warm Singaporean hospitality. Our multi-lingual staff is always ready to guide your city itinerary and answer queries.',
    iconName: 'HeartHandshake',
    image: facilityReception
  },
  {
    id: 'clean-modern-rooms',
    title: 'Clean & Modern Rooms',
    description: 'Spotless cleanliness and pristine hygiene with modern aesthetic aesthetics, updated fixtures, and smart room tech.',
    iconName: 'ShieldCheck',
    image: roomDeluxeDouble
  }
];
