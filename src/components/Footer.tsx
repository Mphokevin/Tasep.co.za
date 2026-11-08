import React from 'react';
import { PageId } from '../types';
import { JPZ_INFO, SOWETO_LANDMARKS } from '../data/jpzData';
import { Phone, Mail, MapPin, AlertTriangle, ShieldCheck, Clock, MessageSquare, Play, Heart, Download } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEmergency: () => void;
  onOpenSplash: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenEmergency,
  onOpenSplash,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t-2 border-yellow-500/30 pt-12 pb-24 lg:pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency CTA Card */}
        <div className="relative mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950 via-slate-900 to-amber-950 border border-red-500/40 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              Soweto Breakdown & Accident Hotline
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Stranded right now? Don't wait on the roadside alone.
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              JPZ Towing trucks are actively patrolling Soweto, N12, Golden Highway, and Baragwanath. Average arrival time 15–25 minutes.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenEmergency}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-black text-sm tracking-wide shadow-lg shadow-red-900/50 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <AlertTriangle className="w-5 h-5 text-yellow-300" />
              <span>REQUEST ASAP TOW (FORM)</span>
            </button>
            <a
              href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>{JPZ_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black rounded-xl border border-yellow-400/60 p-1 flex items-center justify-center">
                <img
                  src={JPZ_INFO.logo}
                  alt="JPZ Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-lg text-white block leading-tight">
                  JPZ TOWING
                </span>
                <span className="text-xs text-yellow-400 font-bold">
                  Soweto 24/7 Recovery
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Fast, reliable, and damage-free towing across Soweto and greater Johannesburg South. Equipped with custom wheel-lift trucks, heavy rollbacks, and dual-axle transporters.
            </p>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span>24 Hours / 7 Days / 365 Days a Year</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Insurance Compliant & Certified Rigging</span>
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Home - 24/7 Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Services & Fleet Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  About JPZ & Soweto Roots
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Contact Us & Standard Booking
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEmergency}
                  className="text-red-400 font-bold hover:text-red-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  ASAP Emergency Dispatch Form
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSplash}
                  className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Play className="w-3 h-3 text-yellow-400" />
                  Replay Splash Intro
                </button>
              </li>
              <li className="pt-1">
                <a
                  href="/jpz-towing-package.zip"
                  download="jpz-towing-package.zip"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-bold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Full Package (.zip)
                </a>
              </li>
            </ul>
          </div>

          {/* Key Soweto Hubs */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Soweto Fast Coverage
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
              {SOWETO_LANDMARKS.slice(0, 8).map((lm) => (
                <span key={lm.name} className="truncate">
                  • {lm.name.split(' ')[0]} ({lm.avgEtaMins}m)
                </span>
              ))}
            </div>
            <p className="text-[11px] text-yellow-400/80 pt-1">
              Serving Pimville, Diepkloof, Orlando, Dobsonville, Baragwanath, Protea Glen & JHB South.
            </p>
          </div>

          {/* Contact Dispatch Lines */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider">
              Emergency Hotlines
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-yellow-400 font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Primary: {JPZ_INFO.primaryPhone}</span>
              </a>
              <a
                href={`tel:${JPZ_INFO.secondaryPhoneRaw}`}
                className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Backup: {JPZ_INFO.secondaryPhone}</span>
              </a>
              <a
                href={JPZ_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded-lg bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 font-bold transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp SOS: 081 079 8244</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Pimville / Soweto, Gauteng</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {JPZ_INFO.legalName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with pride for Soweto motorists & transport safety
          </p>
        </div>
      </div>
    </footer>
  );
};
