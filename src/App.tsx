import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-slate-800">
      <Navbar />

      <div className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'rooms' && <RoomsPage />}
        {currentPage === 'facilities' && <FacilitiesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </div>

      <Footer />
      <BookingModal />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
