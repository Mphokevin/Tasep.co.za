import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, SERVICE_DIVISIONS, PILLARS } from '../data/companyData';
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Users,
  TrendingUp,
  Sparkles,
  Building2,
  Pickaxe,
  Coins,
  ChevronRight,
  FileText,
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, selectedServiceId?: string) => void;
  onOpenFlyer: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenFlyer }) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-blue-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-teal-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getDivisionIcon = (name: string) => {
    switch (name) {
      case 'Pickaxe':
        return <Pickaxe className="w-5 h-5 text-blue-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-600" />;
      default:
        return <Building2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#061830] via-[#092244] to-[#0b2b52] text-white pt-10 sm:pt-16 pb-20 sm:pb-28">
        {/* Ambient background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Brand Statement & Actions */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Brand Tagline Header */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs text-xs font-semibold text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>TASEP ! A Spirit For Innovation</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] font-heading">
                  BUILDING TODAY FOR A{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                    BETTER TOMORROW
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  TASEP PTY LTD is an integrated commercial powerhouse uniting four dynamic sectors: <strong>Mining Projects</strong>, <strong>Property Development</strong>, <strong>Strategic Financing</strong>, and <strong>Specialized Corporate Cleaning Solutions</strong>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Request Corporate Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
                >
                  <span>Explore 4 Sectors</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Call-out contact bar */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                    Direct Corporate Line
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                    className="text-2xl font-black text-white hover:text-emerald-300 transition-colors flex items-center gap-2 font-heading"
                  >
                    <Phone className="w-5 h-5 text-emerald-400 animate-bounce" />
                    079 751 9840
                  </a>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <button
                    onClick={onOpenFlyer}
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-cyan-300 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    title="View official poster"
                  >
                    <FileText className="w-4 h-4" />
                    Poster
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Zero Harm Safety Protocol
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Turnkey EPC Capability
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Nationwide Fleet Deployment
                </span>
              </div>
            </div>

            {/* Right Column: Featured Executive & Brand Visual */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Glowing border decoration */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 via-cyan-400 to-emerald-500 rounded-3xl opacity-35 blur-xl" />

                <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border border-white/20 overflow-hidden shadow-2xl">
                  {/* Executive photo cropped from image 2 */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950">
                    <img
                      src={COMPANY_INFO.executivePortraitUrl}
                      alt="TASEP PTY LTD Executive Leadership"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                    
                    {/* Badge on photo */}
                    <div className="absolute top-3 left-3 bg-[#081b33]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-yellow-400" />
                      Executive Leadership
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-bold text-white font-heading">
                          TASEP Leadership & Governance
                        </h4>
                        <p className="text-xs text-cyan-400 font-medium">
                          Empowering Industrial Excellence
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                        <img
                          src={COMPANY_INFO.logoUrl}
                          alt="TASEP Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 italic pt-1 leading-relaxed">
                      &quot;Building today for a better tomorrow is our daily commitment to every client, partner, and community across South Africa.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars Section (Extracted directly from Image 2 bottom) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            Guiding Corporate Principles
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            The 4 Pillars That Define TASEP
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Every operation across our mining, construction, capital, and cleaning divisions is anchored in four foundational commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 tracking-tight font-heading">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase block mt-0.5">
                    {pillar.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <button
                  onClick={() => onNavigate('about')}
                  className="flex items-center gap-1 hover:text-blue-800 transition-colors cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 4 Core Divisions Showcase (Extracted pictures from Image 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-1">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
              Our 4 Integrated Business Divisions
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              From heavy-tonnage open-cast mining to precision corporate hygiene, explore how our multi-disciplinary divisions solve complex challenges.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
          >
            <span>View All Detailed Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_DIVISIONS.map((division, idx) => (
            <div
              key={division.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image banner extracted from image 2 */}
              <div className="relative h-56 sm:h-64 w-full bg-slate-900 overflow-hidden">
                <img
                  src={division.image}
                  alt={division.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Sector Number */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20 text-xs font-bold text-white flex items-center gap-1.5">
                  {getDivisionIcon(division.iconName)}
                  <span>Division 0{idx + 1}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                    {division.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600">
                    {division.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {division.summary}
                  </p>
                </div>

                {/* Capabilities preview */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {division.capabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services', division.id)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Full Division Overview</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('contact', division.id)}
                    className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Marketing Flyer Feature Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#071930] via-[#092b47] to-[#042d2a] p-6 sm:p-10 text-white overflow-hidden shadow-xl border border-white/10">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>Official Marketing Collateral</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Explore The Complete TASEP PTY LTD Publication
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Inspect the authentic branded flyer containing complete vertical specifications, executive credentials, and direct contact details.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenFlyer}
                  className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span>Inspect High-Res Publication</span>
                </button>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <button
                onClick={onOpenFlyer}
                className="relative group cursor-pointer block rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 hover:scale-105 transition-transform"
                title="Click to zoom in"
              >
                <img
                  src={COMPANY_INFO.flyerUrl}
                  alt="TASEP Flyer Preview"
                  className="w-48 sm:w-56 h-auto object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5">
                    Click to Zoom
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Consultation CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              Ready to Partner on Your Next High-Impact Venture?
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl">
              Whether you need heavy excavation equipment, property development oversight, strategic capital financing, or corporate facility cleaning, our directors are ready.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors cursor-pointer text-center"
            >
              Go to Contact Forms
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quick WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
