import React, { useState } from 'react';
import { PageId } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { EmergencyModal } from './components/EmergencyModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AlertTriangle, Phone } from 'lucide-react';
import { JPZ_INFO } from './data/jpzData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [showEmergencyModal, setShowEmergencyModal] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageId, serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-yellow-400 selection:text-slate-950 relative transition-colors duration-200">
        {/* Splash Screen */}
        {showSplash && (
          <SplashScreen 
            onDismiss={() => setShowSplash(false)} 
            onOpenEmergency={() => {
              setShowSplash(false);
              setShowEmergencyModal(true);
            }}
          />
        )}

        {/* ASAP Emergency Tow Dispatch Modal */}
        <EmergencyModal
          isOpen={showEmergencyModal}
          onClose={() => setShowEmergencyModal(false)}
        />

        {/* Top Navbar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenEmergency={() => setShowEmergencyModal(true)}
          onOpenSplash={() => setShowSplash(true)}
        />

        {/* Main Pages */}
        <main className="flex-1 w-full">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenEmergency={() => setShowEmergencyModal(true)}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onOpenEmergency={() => setShowEmergencyModal(true)}
              initialServiceId={selectedServiceId}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigate={handleNavigate}
              onOpenEmergency={() => setShowEmergencyModal(true)}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage
              onOpenEmergency={() => setShowEmergencyModal(true)}
              preselectedServiceId={selectedServiceId}
            />
          )}
        </main>

        {/* Floating Quick SOS Pill for Desktop (bottom-right) */}
        <div className="hidden lg:flex fixed bottom-6 right-6 z-30 flex-col gap-2 items-end">
          <button
            onClick={() => setShowEmergencyModal(true)}
            className="group px-4 py-3 rounded-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-xs uppercase tracking-wider shadow-2xl shadow-red-600/50 flex items-center gap-2 border-2 border-yellow-300 animate-pulse cursor-pointer hover:scale-105 transition-all"
            aria-label="Launch ASAP Emergency Tow Request"
          >
            <AlertTriangle className="w-4 h-4 text-yellow-300" />
            <span>ASAP EMERGENCY TOW</span>
          </button>
        </div>

        {/* Corporate Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenEmergency={() => setShowEmergencyModal(true)}
          onOpenSplash={() => setShowSplash(true)}
        />

        {/* Mobile Bottom Thumb Navigation */}
        <MobileBottomNav
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenEmergency={() => setShowEmergencyModal(true)}
        />
      </div>
    </ThemeProvider>
  );
}
