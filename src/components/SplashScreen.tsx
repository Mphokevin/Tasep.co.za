import React, { useEffect, useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onDismiss: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss }) => {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth progression
        const increment = Math.random() * 15 + 10;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        triggerClose();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const triggerClose = () => {
    setFadingOut(true);
    setTimeout(() => {
      onDismiss();
    }, 450);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to TASEP PTY LTD"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-[#061830] to-[#042426] text-white p-6 transition-all duration-500 ${
        fadingOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl" />
        {/* Subtle geometric grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full mx-auto">
        {/* Logo Container with Centered Logo */}
        <div className="relative group mb-8">
          {/* Animated decorative ring */}
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-3xl opacity-60 blur-md group-hover:opacity-85 transition duration-700 animate-pulse" />
          
          <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-white/20 flex items-center justify-center">
            <img
              src={COMPANY_INFO.logoUrl}
              alt="TASEP PTY LTD Logo"
              className="w-44 h-44 sm:w-52 sm:h-52 object-contain select-none"
            />
          </div>
        </div>

        {/* Brand Headline */}
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
            TASEP PTY LTD
          </h1>
          <p className="text-cyan-400 font-semibold tracking-wide text-sm sm:text-base italic">
            TASEP ! A Spirit For Innovation
          </p>
          <p className="text-slate-300 text-xs sm:text-sm font-medium tracking-widest uppercase pt-1">
            Building Today For A Better Tomorrow
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs space-y-2 mb-6">
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700/60 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Initializing Experience
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Skip / Enter Button */}
        <button
          onClick={triggerClose}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-md"
        >
          <span>Enter Web Application</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Direct quick contact pill */}
        <div className="mt-8 text-xs text-slate-400">
          <span>Direct Inquiries: </span>
          <a
            href="tel:0797519840"
            className="text-emerald-400 font-semibold hover:underline"
          >
            079 751 9840
          </a>
        </div>
      </div>
    </div>
  );
};
