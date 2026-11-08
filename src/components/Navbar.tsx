import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { JPZ_INFO } from '../data/jpzData';
import { Phone, MessageCircle, Menu, X, Play, AlertTriangle, ShieldCheck, Clock, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEmergency: () => void;
  onOpenSplash: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEmergency,
  onOpenSplash,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', badge: '8 Types' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Booking', badge: 'Forms' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-200">
      {/* Top emergency announcement bar */}
      <div className="bg-neutral-950 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-yellow-500/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-bold text-yellow-400 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Soweto 24/7 Rapid Response Towing
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-yellow-400" />
              Average Arrival: 15–25 Mins in Soweto
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Accident & Insurance Compliant
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenEmergency}
              className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1.5 font-extrabold cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-red-500 animate-bounce" />
              <span>Request ASAP Tow</span>
            </button>
            <span className="text-slate-700">|</span>
            <a
              href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
              className="flex items-center gap-1 text-yellow-400 font-extrabold hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-400" />
              <span>{JPZ_INFO.primaryPhone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="/jpz-towing-package.zip"
              download="jpz-towing-package.zip"
              title="Download Full Project Package (.zip)"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-bold transition-colors"
            >
              <Download className="w-3 h-3 text-emerald-400" />
              <span>Download (.zip)</span>
            </a>
            <span className="text-slate-700">|</span>
            <button
              onClick={onOpenSplash}
              title="View Splash Screen"
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 text-yellow-400" />
              <span>Splash</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-xl py-2 border-b border-slate-200 dark:border-yellow-500/20'
            : 'bg-white dark:bg-slate-950 py-3 border-b border-slate-200/80 dark:border-slate-850 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-xl shadow-md border-2 border-yellow-400/60 overflow-hidden flex items-center justify-center p-0.5 group-hover:border-yellow-400 transition-all duration-200">
              <img
                src={JPZ_INFO.logo}
                alt="JPZ Towing Services Logo"
                className="w-full h-full object-contain filter group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-yellow-500 transition-colors leading-none font-heading">
                  JPZ <span className="text-yellow-500 font-extrabold">TOWING</span>
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
                Soweto 24/7 Roadside & Accident
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-200 rounded-lg cursor-pointer ${
                    isActive
                      ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/40 shadow-xs'
                      : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                          isActive
                            ? 'bg-yellow-500 text-black'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs: ThemeToggle, Hotline, and ASAP EMERGENCY BUTTON */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Direct Phone Dial */}
            <a
              href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-colors"
              title="Call primary hotline"
            >
              <Phone className="w-3.5 h-3.5 text-yellow-500" />
              <span>{JPZ_INFO.primaryPhone}</span>
            </a>

            {/* High-visibility Emergency Button */}
            <button
              onClick={onOpenEmergency}
              className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white text-xs sm:text-sm font-black shadow-lg shadow-red-600/30 transition-all cursor-pointer active:scale-95 animate-pulse"
            >
              <AlertTriangle className="w-4 h-4 text-yellow-300 animate-spin-slow" />
              <span>EMERGENCY TOW</span>
              <span className="text-[10px] bg-black/40 px-1.5 py-0.5 rounded font-mono font-bold text-yellow-200">
                ASAP
              </span>
            </button>
          </div>

          {/* Mobile Actions: Emergency Button, ThemeToggle, and Hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={onOpenEmergency}
              className="px-2.5 py-1.5 rounded-lg bg-red-600 text-white text-xs font-black flex items-center gap-1 shadow-md shadow-red-900/40 animate-pulse cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-yellow-300" />
              <span>ASAP</span>
            </button>

            <ThemeToggle />
            
            <a
              href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
              className="p-2 rounded-lg bg-yellow-500 text-slate-950 font-bold"
              title="Call JPZ Towing"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* High-priority Emergency SOS Banner in Drawer */}
            <div className="mb-3 p-3 rounded-xl bg-gradient-to-r from-red-600/90 to-amber-600/90 text-white flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-yellow-200 uppercase tracking-wider">Broken Down or Accident?</p>
                <p className="text-sm font-black">Need a tow truck right now?</p>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="px-3 py-1.5 rounded-lg bg-white text-red-700 text-xs font-black shadow-md cursor-pointer"
              >
                Open Form
              </button>
            </div>

            <div className="flex flex-col space-y-1 mb-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors cursor-pointer text-left ${
                      isActive
                        ? 'bg-yellow-50 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-400 border-l-4 border-yellow-500'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 block">
                    Appearance
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Currently in {isDark ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
                <ThemeToggle showLabel />
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">24/7 Soweto Dispatch</span>
                  <a
                    href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
                    className="text-base font-black text-slate-900 dark:text-white flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-yellow-500" />
                    {JPZ_INFO.primaryPhone}
                  </a>
                </div>
                <a
                  href={JPZ_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>

              <div className="flex gap-2 pt-1">
                <a
                  href="/jpz-towing-package.zip"
                  download="jpz-towing-package.zip"
                  className="flex-1 py-2 px-3 rounded-lg bg-emerald-600/15 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center justify-center gap-1.5 text-center"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Package (.zip)</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSplash();
                  }}
                  className="py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 text-center"
                >
                  Replay Splash
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
