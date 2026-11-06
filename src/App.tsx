import React, { useState } from 'react';
import { PageId } from './types';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { FlyerModal } from './components/FlyerModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [showFlyerModal, setShowFlyerModal] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageId, serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen onDismiss={() => setShowSplash(false)} />
      )}

      {/* Official Flyer Inspection Modal */}
      <FlyerModal
        isOpen={showFlyerModal}
        onClose={() => setShowFlyerModal(false)}
        onNavigateToServices={() => handleNavigate('services')}
        onNavigateToContact={() => handleNavigate('contact')}
      />

      {/* Top Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSplash={() => setShowSplash(true)}
        onOpenFlyer={() => setShowFlyerModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenFlyer={() => setShowFlyerModal(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            initialDivisionId={selectedServiceId}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenFlyer={() => setShowFlyerModal(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            preselectedServiceId={selectedServiceId}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSplash={() => setShowSplash(true)}
        onOpenFlyer={() => setShowFlyerModal(true)}
      />

      {/* Mobile Bottom Thumb Navigation */}
      <MobileBottomNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
