import React, { useEffect, useState } from 'react';
import { JPZ_INFO } from '../data/jpzData';
import { ArrowRight, PhoneCall, Zap, ShieldCheck } from 'lucide-react';

interface SplashScreenProps {
  onDismiss: () => void;
  onOpenEmergency?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss, onOpenEmergency }) => {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.random() * 20 + 15;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        triggerClose();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const triggerClose = () => {
    setFadingOut(true);
    setTimeout(() => {
      onDismiss();
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to JPZ Towing Services"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-neutral-950 text-white p-6 transition-all duration-500 ${
        fadingOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background warning grid & glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #facc15 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full mx-auto">
        {/* Pulsing Emergency Status Badge */}
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-black tracking-widest uppercase animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          24/7 Soweto Emergency Towing Active
        </div>

        {/* Logo Container with Middle Centered Logo */}
        <div className="relative group mb-6">
          <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500 via-amber-400 to-red-500 rounded-3xl opacity-50 blur-lg group-hover:opacity-80 transition duration-700 animate-pulse" />
          
          <div className="relative bg-black rounded-2xl p-4 shadow-2xl border-2 border-yellow-400/40 flex items-center justify-center overflow-hidden">
            <img
              src={JPZ_INFO.logo}
              alt="JPZ Towing Services Official Logo"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain select-none filter drop-shadow-[0_10px_20px_rgba(250,204,21,0.25)]"
            />
          </div>
        </div>

        {/* Brand Headline */}
        <div className="space-y-1.5 mb-6">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
            JPZ TOWING SERVICES
          </h1>
          <p className="text-yellow-400 font-bold tracking-wide text-sm sm:text-base">
            Fast Response Roadside & Accident Recovery
          </p>
          <p className="text-slate-400 text-xs font-semibold tracking-wider uppercase">
            Soweto • Greater Johannesburg • 24/7/365
          </p>
        </div>

        {/* Fast progress bar */}
        <div className="w-full max-w-xs space-y-2 mb-6">
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-yellow-500 via-amber-400 to-red-500 rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-yellow-400">
              <Zap className="w-3 h-3 text-yellow-400" />
              Dispatch Readiness Check
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-xs">
          <button
            onClick={triggerClose}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-xs sm:text-sm font-black transition-all cursor-pointer shadow-lg shadow-yellow-500/20"
          >
            <span>Enter App</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-red-900/30"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{JPZ_INFO.primaryPhone}</span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Licensed & Insured
          </span>
          <span>•</span>
          <span>Average ETA 15–25 Mins</span>
        </div>
      </div>
    </div>
  );
};
