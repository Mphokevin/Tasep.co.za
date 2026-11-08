import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, PILLARS } from '../data/companyData';
import {
  ShieldCheck,
  Lightbulb,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
  Phone,
  ArrowRight,
  FileText,
  Building,
  Target,
  Compass,
  Zap
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenFlyer: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenFlyer }) => {
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
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#061830] via-[#092244] to-[#06242c] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold">
            <Building className="w-3.5 h-3.5" />
            <span>Corporate Profile & Governance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            A Spirit For Innovation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Founded on the relentless pursuit of progress, TASEP PTY LTD unites industrial heavy operations, architectural mastery, strategic capital structuring, and corporate hygiene into an integrated service powerhouse.
          </p>
        </div>
      </section>

      {/* Leadership Spotlight & Director's Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Executive Photo cropped from image 2 */}
          <div className="lg:col-span-5 h-full min-h-[380px] bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
            <img
              src={COMPANY_INFO.executivePortraitUrl}
              alt="TASEP PTY LTD Executive"
              className="w-full max-w-sm h-full object-cover rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white">
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block">
                Executive Leadership
              </span>
              <p className="text-sm font-bold font-heading">
                Managing Director & Operations Directorate
              </p>
              <p className="text-xs text-slate-300">
                TASEP (Pty) Ltd · South Africa
              </p>
            </div>
          </div>

          {/* Director's Vision */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
                Executive Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                &quot;Building Today For A Better Tomorrow Is More Than A Motto—It Is Our Obligation.&quot;
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In an era defined by rapid industrial shifts and urban growth, African businesses need agile, dependable partners capable of executing across the entire project lifecycle.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At TASEP, we built our foundation by bridging four essential engines of the modern economy: from breaking ground with our high-tonnage mining machinery and crafting vertical spaces in property development, to bridging liquidity gaps through innovative project financing and preserving corporate wellness through clinical hygiene solutions.
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-2xl font-black text-slate-900 block font-heading">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Committed Delivery
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-2xl font-black text-emerald-600 block font-heading">
                  4 Core
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Integrated Sectors
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                <span className="text-2xl font-black text-blue-600 block font-heading">
                  Zero
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Harm Target Metric
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Connect With Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenFlyer}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>View Brand Poster</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars In-Depth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block">
            Extracted Company Values
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Deep Dive Into Our 4 Core Pillars
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            These four pillars drive every calculation, safety checklist, contract negotiation, and customer relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center shrink-0 shadow-md">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight font-heading">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase">
                      {pillar.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                  {pillar.description}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                  {pillar.details}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Active Operating Mandate Across All 4 Divisions</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Governance & SHEQ Compliance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block">
              Safety, Health, Environment & Quality
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Rigorous Compliance, Zero Compromise
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Operating heavy excavators, towering cranes, and high-level chemical sanitation requires institutional discipline. TASEP maintains active adherence to all relevant South African statutory bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h4 className="font-bold text-sm text-white font-heading">
                Zero Harm Target
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Daily toolbox talks, certified operator logbooks, machine pre-shift inspections, and zero-tolerance drug/alcohol policies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-2">
              <Award className="w-6 h-6 text-cyan-400" />
              <h4 className="font-bold text-sm text-white font-heading">
                B-BBEE Empowerment
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated to local skills transfer, supplier development, and sustainable employment across local mining and construction communities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/60 space-y-2">
              <TrendingUp className="w-6 h-6 text-teal-400" />
              <h4 className="font-bold text-sm text-white font-heading">
                Eco-Conscious Reclamation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Post-mining land restoration, green architectural practices, and biodegradable cleaning solutions that minimize environmental footprints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-black text-slate-900 font-heading">
            Partner With A Spirit For Innovation
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Discuss joint ventures, site operations, or corporate sanitation tenders with our executive team today.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Go to Page 4 (Contact Forms)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Main Alert: {COMPANY_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
