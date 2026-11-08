import React from 'react';
import { PageId } from '../types';
import { Home, Truck, Info, PhoneCall, AlertTriangle } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEmergency: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
  onOpenEmergency,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-yellow-500/30 shadow-[0_-4px_20px_rgba(0,0,0,0.6)] px-2 py-1.5 pb-safe transition-colors duration-200">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {/* Home */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex-1 py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-all cursor-pointer ${
            currentPage === 'home'
              ? 'text-yellow-400 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Home className={`w-5 h-5 ${currentPage === 'home' ? 'text-yellow-400' : 'text-slate-400'}`} />
          <span className="text-[10px] tracking-tight">Home</span>
        </button>

        {/* Services */}
        <button
          onClick={() => {
            onNavigate('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex-1 py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-all cursor-pointer ${
            currentPage === 'services'
              ? 'text-yellow-400 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Truck className={`w-5 h-5 ${currentPage === 'services' ? 'text-yellow-400' : 'text-slate-400'}`} />
          <span className="text-[10px] tracking-tight">Services</span>
        </button>

        {/* Center ASAP Emergency Trigger */}
        <div className="flex-1 flex justify-center -mt-5">
          <button
            onClick={onOpenEmergency}
            className="w-13 h-13 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 text-white shadow-lg shadow-red-600/50 border-2 border-yellow-400 flex flex-col items-center justify-center active:scale-90 transition-transform animate-pulse cursor-pointer"
            aria-label="Emergency ASAP Tow Form"
          >
            <AlertTriangle className="w-5 h-5 text-yellow-200" />
            <span className="text-[9px] font-black uppercase tracking-tighter">ASAP</span>
          </button>
        </div>

        {/* About */}
        <button
          onClick={() => {
            onNavigate('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex-1 py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-all cursor-pointer ${
            currentPage === 'about'
              ? 'text-yellow-400 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Info className={`w-5 h-5 ${currentPage === 'about' ? 'text-yellow-400' : 'text-slate-400'}`} />
          <span className="text-[10px] tracking-tight">About</span>
        </button>

        {/* Contact */}
        <button
          onClick={() => {
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex-1 py-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-all cursor-pointer ${
            currentPage === 'contact'
              ? 'text-yellow-400 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <PhoneCall className={`w-5 h-5 ${currentPage === 'contact' ? 'text-yellow-400' : 'text-slate-400'}`} />
          <span className="text-[10px] tracking-tight">Contact</span>
        </button>
      </div>
    </div>
  );
};
