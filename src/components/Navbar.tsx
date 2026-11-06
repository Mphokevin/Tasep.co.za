import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, MessageCircle, Menu, X, Play, ChevronRight, FileText } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSplash: () => void;
  onOpenFlyer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSplash,
  onOpenFlyer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Divisions', badge: '4 Core' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us', badge: 'Forms' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top micro-bar */}
      <div className="bg-[#081b33] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-emerald-400 tracking-wide">
              {COMPANY_INFO.slogan}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">{COMPANY_INFO.tagline}</span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <button
              onClick={onOpenFlyer}
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Original Publication</span>
            </button>
            <span className="text-slate-600">·</span>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>
            <span className="text-slate-600">·</span>
            <button
              onClick={onOpenSplash}
              title="Re-open brand splash screen"
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Play className="w-3 h-3 text-cyan-400" />
              <span>Splash</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
            : 'bg-white py-3.5 border-b border-slate-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-200">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="TASEP PTY LTD Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#081b33] group-hover:text-blue-700 transition-colors leading-tight font-heading">
                TASEP <span className="text-blue-600 font-semibold text-sm">PTY LTD</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide">
                A Spirit For Innovation
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg cursor-pointer ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/80 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.badge && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-medium ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>079 751 9840</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-[#0c6b58] text-white text-xs sm:text-sm font-semibold hover:shadow-md hover:from-blue-700 hover:to-[#0a5747] transition-all cursor-pointer active:scale-95"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
              title="Call TASEP"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1 mb-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer text-left ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 block">Direct Line</span>
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                    className="text-base font-bold text-slate-900 flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    079 751 9840
                  </a>
                </div>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFlyer();
                  }}
                  className="flex-1 py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 text-center"
                >
                  View Publication Flyer
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSplash();
                  }}
                  className="py-2 px-3 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 text-center"
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
