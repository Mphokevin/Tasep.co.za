import React from 'react';
import { X, ExternalLink, Download, Phone, ShieldCheck, Sparkles, Building2, Pickaxe, Coins } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToServices?: () => void;
  onNavigateToContact?: () => void;
}

export const FlyerModal: React.FC<FlyerModalProps> = ({
  isOpen,
  onClose,
  onNavigateToServices,
  onNavigateToContact
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              Official TASEP PTY LTD Corporate Showcase
            </h2>
            <p className="text-xs text-slate-500">
              High-resolution view of the official marketing publication
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-900 flex flex-col md:flex-row gap-6 items-center">
          {/* Main flyer image */}
          <div className="w-full md:w-3/5 flex justify-center bg-black/40 rounded-xl p-2 border border-slate-800 shadow-inner">
            <img
              src={COMPANY_INFO.flyerUrl}
              alt="TASEP PTY LTD Official Flyer"
              className="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Quick breakdown alongside */}
          <div className="w-full md:w-2/5 space-y-4 text-slate-200">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-400 block mb-1">
                Extracted Verticals
              </span>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2 text-slate-200">
                  <Pickaxe className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Mining Projects & Earthmoving</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Property Development & High-Rises</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <Coins className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Financing & Project Capital</span>
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Specialized Corporate Cleaning Solutions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-950 to-slate-900 p-4 rounded-xl border border-blue-800/40">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-400 block mb-1">
                Main Alert Line
              </span>
              <p className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                {COMPANY_INFO.primaryPhone}
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="w-full py-2 px-3 text-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                >
                  Call Now ({COMPANY_INFO.primaryPhone})
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 text-center rounded-lg bg-emerald-700/60 hover:bg-emerald-700 text-emerald-100 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  WhatsApp Us
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Full compliance & certified operations across Southern Africa.</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-white flex justify-between items-center text-xs text-slate-600">
          <span className="font-medium text-slate-700">TASEP PTY LTD · A Spirit For Innovation</span>
          <div className="flex gap-2">
            {onNavigateToServices && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToServices();
                }}
                className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium transition-colors"
              >
                View 4 Divisions
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
