import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute = 'home' | 'rooms' | 'facilities' | 'contact';

interface NavigationContextType {
  currentPage: PageRoute;
  navigateTo: (page: PageRoute) => void;
  isBookingOpen: boolean;
  openBooking: (defaultRoomId?: string) => void;
  closeBooking: () => void;
  selectedRoomForBooking?: string;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('/rooms')) return 'rooms';
      if (path.includes('/facilities')) return 'facilities';
      if (path.includes('/contact')) return 'contact';
    }
    return 'home';
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<string | undefined>(undefined);

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('/rooms')) setCurrentPage('rooms');
      else if (path.includes('/facilities')) setCurrentPage('facilities');
      else if (path.includes('/contact')) setCurrentPage('contact');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    let targetPath = '/';
    if (page === 'rooms') targetPath = '/rooms';
    else if (page === 'facilities') targetPath = '/facilities';
    else if (page === 'contact') targetPath = '/contact';

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBooking = (defaultRoomId?: string) => {
    setSelectedRoomForBooking(defaultRoomId);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        isBookingOpen,
        openBooking,
        closeBooking,
        selectedRoomForBooking,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
