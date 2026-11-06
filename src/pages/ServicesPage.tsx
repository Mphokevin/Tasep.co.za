import React, { useState, useEffect } from 'react';
import { PageId, ServiceDivision } from '../types';
import { SERVICE_DIVISIONS, COMPANY_INFO } from '../data/companyData';
import {
  Pickaxe,
  Building2,
  Coins,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  Phone,
  MessageCircle,
  Clock,
  Layers,
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, selectedServiceId?: string) => void;
  initialDivisionId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  initialDivisionId
}) => {
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>(
    initialDivisionId || 'mining-projects'
  );

  useEffect(() => {
    if (initialDivisionId) {
      setSelectedDivisionId(initialDivisionId);
    }
  }, [initialDivisionId]);

  const activeDivision =
    SERVICE_DIVISIONS.find((d) => d.id === selectedDivisionId) || SERVICE_DIVISIONS[0];

  const getDivisionIcon = (name: string, size = 5) => {
    const className = `w-${size} h-${size}`;
    switch (name) {
      case 'Pickaxe':
        return <Pickaxe className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'Coins':
        return <Coins className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#061930] via-[#092b4a] to-[#052233] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Extracted From Corporate Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Our 4 Core Industry Divisions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Delivering cross-sector excellence with institutional rigor, state-of-the-art heavy machinery, and dedicated project managers across Southern Africa.
          </p>
        </div>
      </section>

      {/* Main Interactive Division Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Navigation Tabs */}
        <div className="bg-white p-2 rounded-2xl border border-slate-200/90 shadow-sm flex flex-wrap gap-2 mb-10">
          {SERVICE_DIVISIONS.map((div) => {
            const isActive = div.id === selectedDivisionId;
            return (
              <button
                key={div.id}
                onClick={() => setSelectedDivisionId(div.id)}
                className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className={isActive ? 'text-cyan-400' : 'text-slate-500'}>
                  {getDivisionIcon(div.iconName, 4)}
                </span>
                <span className="truncate">{div.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Division Detailed Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md">
          {/* Top visual strip featuring the extracted photo from image 2 */}
          <div className="relative h-64 sm:h-96 w-full bg-slate-900 overflow-hidden">
            <img
              src={activeDivision.image}
              alt={activeDivision.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-600/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                {getDivisionIcon(activeDivision.iconName, 4)}
                <span>Division Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                {activeDivision.title}
              </h2>
              <p className="text-emerald-300 text-sm sm:text-base font-semibold">
                {activeDivision.tagline}
              </p>
            </div>
          </div>

          {/* Division Detailed Content Grid */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Overview & Scope */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  Overview & Operational Mandate
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeDivision.description}
                </p>

                {/* Capabilities Checklist */}
                <div className="pt-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Core Capabilities & Scope of Delivery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeDivision.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Specifications & Parameters */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h4 className="text-sm font-bold text-white font-heading">
                      Technical Benchmarks
                    </h4>
                    <span className="text-[11px] text-cyan-400 font-mono">
                      Certified Delivery
                    </span>
                  </div>

                  <div className="space-y-3">
                    {activeDivision.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/60 last:border-0 last:pb-0">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="text-white font-semibold text-right max-w-[200px]">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Immediate Action CTA */}
                  <div className="pt-4 space-y-2">
                    <button
                      onClick={() => onNavigate('contact', activeDivision.id)}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Inquire About {activeDivision.shortTitle}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Call 079 751 9840 Directly</span>
                    </a>
                  </div>
                </div>

                {/* Assurance box */}
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 text-xs text-blue-900">
                  <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">Safety & Standards Adherence</span>
                    All {activeDivision.title} contracts operate strictly under SABS, CIDB, and OHSA protocols with comprehensive liability coverage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of the remaining 3 divisions for rapid switching */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 font-heading">
            Browse All Divisions
          </h3>
          <p className="text-xs text-slate-500">
            Click any division card below to load its full operational parameters
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_DIVISIONS.map((div) => {
            const isSelected = div.id === selectedDivisionId;
            return (
              <div
                key={div.id}
                onClick={() => {
                  setSelectedDivisionId(div.id);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className={`bg-white rounded-2xl border p-4 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className="h-32 rounded-xl overflow-hidden mb-3 bg-slate-900">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1 flex items-center justify-between">
                  <span className="truncate">{div.title}</span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                  )}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {div.tagline}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct Contact Banner Matching Flyer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-100">
              Immediate Response Team
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading">
              Ready to Scope Out Your Project Requirements?
            </h3>
            <p className="text-sm text-emerald-50 max-w-xl">
              Connect with our technical division heads today for site inspections, feasibility assessments, or commercial cleaning audits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-emerald-800 font-extrabold text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call 079 751 9840</span>
            </a>
            <button
              onClick={() => onNavigate('contact', selectedDivisionId)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Form On Page 4</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
