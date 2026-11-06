import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICE_DIVISIONS, PILLARS } from '../data/companyData';
import { Phone, MessageCircle, Mail, MapPin, ArrowRight, ShieldCheck, Play, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenSplash: () => void;
  onOpenFlyer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenSplash,
  onOpenFlyer,
}) => {
  return (
    <footer className="bg-[#051324] text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-md flex items-center justify-center">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="TASEP PTY LTD Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight font-heading">
                  TASEP PTY LTD
                </h3>
                <p className="text-xs text-cyan-400 font-medium">
                  {COMPANY_INFO.slogan}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Building today for a better tomorrow. Delivering integrated excellence across Mining Projects, Property Development, Financing, and Specialized Corporate Cleaning Solutions.
            </p>

            {/* Direct Contact Banner Pill */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 space-y-2">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                Direct Corporate Inquiries
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="text-lg font-extrabold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  {COMPANY_INFO.primaryPhone}
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-emerald-700/60 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <button
                onClick={onOpenSplash}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3 h-3 text-cyan-400" />
                <span>Replay Splash Screen</span>
              </button>
              <span>·</span>
              <button
                onClick={onOpenFlyer}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3 h-3 text-cyan-400" />
                <span>Official Flyer</span>
              </button>
            </div>
          </div>

          {/* Core Verticals */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2">
              Our 4 Divisions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_DIVISIONS.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-left group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Four Pillars */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Our Core Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PILLARS.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      onNavigate('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex flex-col text-left group cursor-pointer"
                  >
                    <span className="font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </span>
                    <span className="text-xs text-slate-500">{p.subtitle}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Office */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-2">
              HQ & Operations
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-300 block mb-0.5">Hours:</span>
                {COMPANY_INFO.businessHours}
              </div>
            </div>

            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full mt-2 py-2 px-3 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>SABS & SHEQ Compliant</span>
            <span>·</span>
            <span>B-BBEE Empowered</span>
            <span>·</span>
            <span>Republic of South Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
