import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { RoomsSection } from '../components/home/RoomsSection';
import { FacilitiesSection } from '../components/home/FacilitiesSection';
import { WhyStaySection } from '../components/home/WhyStaySection';
import { ContactCtaSection } from '../components/home/ContactCtaSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — About the Hotel */}
      <AboutSection />

      {/* Section 3 — Rooms & Accommodation */}
      <RoomsSection />

      {/* Section 4 — Facilities & Services */}
      <FacilitiesSection />

      {/* Section 5 — Why Stay With Us */}
      <WhyStaySection />

      {/* Section 6 — Contact / Booking CTA */}
      <ContactCtaSection />
    </main>
  );
};
