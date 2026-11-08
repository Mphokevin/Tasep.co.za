import React, { useState } from 'react';
import { PageId, ServiceCategory } from '../types';
import { TOWING_SERVICES, JPZ_INFO, SOWETO_LANDMARKS } from '../data/jpzData';
import { 
  AlertTriangle, Phone, CheckCircle2, Calculator, 
  ArrowRight, ShieldCheck, Clock, MapPin, Truck, ShieldAlert, Layers, Zap, Disc, Anchor, Compass, Cpu
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenEmergency: () => void;
  initialServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenEmergency,
  initialServiceId,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory>(
    (initialServiceId as ServiceCategory) || TOWING_SERVICES[0].id
  );

  // Estimator state
  const [estService, setEstService] = useState<ServiceCategory>('breakdown-towing');
  const [estDistanceKm, setEstDistanceKm] = useState<number>(15);
  const [estVehicleType, setEstVehicleType] = useState<'standard' | 'luxury-awd' | 'bakkie-suv' | 'commercial'>('standard');
  const [estUrgency, setEstUrgency] = useState<'asap' | 'standard'>('asap');

  const calculateEstimate = () => {
    let base = 550;
    if (estService === 'flatbed-rollback') base = 850;
    if (estService === 'accident-recovery') base = 750;
    if (estService === 'winch-ditch-recovery') base = 650;
    if (estService === 'tyre-puncture' || estService === 'jumpstart-battery') return 350;

    let kmCharge = 0;
    if (estDistanceKm > 10) {
      kmCharge = (estDistanceKm - 10) * 18;
    }

    let vehicleFactor = 0;
    if (estVehicleType === 'luxury-awd') vehicleFactor = 200;
    if (estVehicleType === 'bakkie-suv') vehicleFactor = 150;
    if (estVehicleType === 'commercial') vehicleFactor = 350;

    return Math.round(base + kmCharge + vehicleFactor);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-red-500" />;
      case 'Truck': return <Truck className="w-6 h-6 text-yellow-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Disc': return <Disc className="w-6 h-6 text-emerald-500" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-purple-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-500" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-rose-500" />;
      default: return <Truck className="w-6 h-6 text-yellow-500" />;
    }
  };

  const activeServiceObj = TOWING_SERVICES.find(s => s.id === selectedService) || TOWING_SERVICES[0];

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-yellow-500/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-wider">
              24/7 Professional Towing Fleet
            </span>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Soweto Roadside & Recovery Services
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              From light passenger breakdowns and puncture fixes to heavy-duty hydraulic flatbed rollbacks and winch rescues from Soweto embankments.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={onOpenEmergency}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-red-900/40 cursor-pointer animate-pulse"
            >
              <AlertTriangle className="w-4 h-4 text-yellow-300" />
              <span>REQUEST IMMEDIATE DISPATCH</span>
            </button>
            <a
              href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-yellow-400 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-700"
            >
              <Phone className="w-4 h-4" />
              <span>Call {JPZ_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Service Selector & Detailed Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Service Menu */}
          <div className="lg:col-span-4 space-y-2">
            <h3 className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest px-1 mb-2">
              Select Towing Division
            </h3>
            {TOWING_SERVICES.map((srv) => {
              const isActive = selectedService === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedService(srv.id)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center gap-3 border cursor-pointer ${
                    isActive
                      ? 'bg-yellow-400 text-slate-950 font-black border-yellow-500 shadow-md scale-[1.01]'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${isActive ? 'bg-slate-950/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate leading-tight">{srv.shortTitle}</p>
                    <p className={`text-[11px] truncate ${isActive ? 'text-slate-800 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                      {srv.etaEstimate}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Service Detail Card */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-800">
              <img
                src={activeServiceObj.image}
                alt={activeServiceObj.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs sm:text-sm font-bold bg-yellow-400 text-slate-950 px-3 py-1 rounded-full">
                  {activeServiceObj.baseRateEstimate}
                </span>
                <span className="text-xs bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                  ETA: {activeServiceObj.etaEstimate}
                </span>
              </div>
            </div>

            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 text-xs font-bold uppercase mb-2">
                Division Profile
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {activeServiceObj.title}
              </h2>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold mt-1">
                {activeServiceObj.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                {activeServiceObj.description}
              </p>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-3">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                Operational Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeServiceObj.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {activeServiceObj.specs.map((sp, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">{sp.label}</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{sp.value}</span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenEmergency}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-900/30"
              >
                <AlertTriangle className="w-4 h-4 text-yellow-300" />
                Dispatch For {activeServiceObj.shortTitle}
              </button>
              <button
                onClick={() => onNavigate('contact', activeServiceObj.id)}
                className="py-3 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-sm cursor-pointer"
              >
                Schedule Booking / Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RATE & DISTANCE ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-yellow-500/40 shadow-2xl">
          <div className="max-w-xl mx-auto text-center space-y-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-black uppercase">
              <Calculator className="w-4 h-4" />
              Transparent Pricing Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Instant Towing Rate Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Calculate an honest estimate before calling. Zero surprise hook fees or hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Input Controls */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-yellow-400 block mb-1">
                  1. Service Type
                </label>
                <select
                  value={estService}
                  onChange={(e) => setEstService(e.target.value as ServiceCategory)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-400"
                >
                  <option value="breakdown-towing">Mechanical Breakdown Tow (Standard Wheel-lift)</option>
                  <option value="flatbed-rollback">Hydraulic Flatbed Rollback (Zero Ground Contact)</option>
                  <option value="accident-recovery">Accident Recovery & Scene Clearing</option>
                  <option value="winch-ditch-recovery">Off-Road / Embankment Winching</option>
                  <option value="tyre-puncture">Roadside Tyre Change Callout</option>
                  <option value="jumpstart-battery">12V / 24V Battery Booster Jump</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-yellow-400">2. Estimated Distance</span>
                  <span className="text-white">{estDistanceKm} km</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={80}
                  step={5}
                  value={estDistanceKm}
                  onChange={(e) => setEstDistanceKm(Number(e.target.value))}
                  className="w-full accent-yellow-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Local Soweto (5-15km)</span>
                  <span>JHB South / CBD (25km)</span>
                  <span>East / West Rand (45km+)</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-yellow-400 block mb-1">
                  3. Vehicle Category
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setEstVehicleType('standard')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      estVehicleType === 'standard' ? 'bg-yellow-400 text-slate-950 font-bold border-yellow-400' : 'bg-slate-800 border-slate-700 text-slate-300'
                    }`}
                  >
                    Hatch / Sedan
                  </button>
                  <button
                    type="button"
                    onClick={() => setEstVehicleType('luxury-awd')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      estVehicleType === 'luxury-awd' ? 'bg-yellow-400 text-slate-950 font-bold border-yellow-400' : 'bg-slate-800 border-slate-700 text-slate-300'
                    }`}
                  >
                    Luxury / AWD / Low
                  </button>
                  <button
                    type="button"
                    onClick={() => setEstVehicleType('bakkie-suv')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      estVehicleType === 'bakkie-suv' ? 'bg-yellow-400 text-slate-950 font-bold border-yellow-400' : 'bg-slate-800 border-slate-700 text-slate-300'
                    }`}
                  >
                    Bakkie / SUV / 4x4
                  </button>
                  <button
                    type="button"
                    onClick={() => setEstVehicleType('commercial')}
                    className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                      estVehicleType === 'commercial' ? 'bg-yellow-400 text-slate-950 font-bold border-yellow-400' : 'bg-slate-800 border-slate-700 text-slate-300'
                    }`}
                  >
                    Commercial Van
                  </button>
                </div>
              </div>
            </div>

            {/* Estimated Price Output */}
            <div className="bg-slate-950/80 p-6 rounded-2xl border-2 border-yellow-500/40 text-center space-y-4">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Estimated Towing Fair Rate
              </span>
              <div className="text-4xl sm:text-5xl font-black text-yellow-400 tracking-tight">
                R{calculateEstimate()}
              </div>
              <p className="text-xs text-slate-400">
                Includes dispatch, initial hooking, and {estDistanceKm} km transport. Final price confirmed before hitching.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={onOpenEmergency}
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 cursor-pointer"
                >
                  <AlertTriangle className="w-4 h-4 text-yellow-300" />
                  Dispatch at this Estimated Rate
                </button>
                <a
                  href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-yellow-400 text-xs font-bold text-center border border-slate-700"
                >
                  Direct Phone Confirmation: {JPZ_INFO.primaryPhone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
