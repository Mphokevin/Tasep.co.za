import React from 'react';
import { PageId } from '../types';
import { Home, Layers, Info, Send, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface MobileBottomNavProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentPage,
  onNavigate,
}) => {
  const tabs = [
    { id: 'home' as PageId, label: 'Home', icon: Home },
    { id: 'services' as PageId, label: 'Services', icon: Layers },
    { id: 'about' as PageId, label: 'About', icon: Info },
    { id: 'contact' as PageId, label: 'Contact', icon: Send },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1.5 pb-safe">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onNavigate(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex-1 py-1.5 px-1 flex flex-col items-center justify-center gap-1 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-blue-600 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive ? 'bg-blue-50 scale-110' : ''
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} />
              </div>
              <span className="text-[11px] tracking-tight leading-none">
                {tab.label}
              </span>
            </button>
          );
        })}

        {/* Quick dial button on mobile */}
        <a
          href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
          aria-label="Direct Phone Call"
          className="ml-1 p-2.5 rounded-full bg-emerald-600 text-white shadow-md hover:bg-emerald-700 active:scale-95 transition-all flex items-center justify-center"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
