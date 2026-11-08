import React, { useState } from 'react';
import { PageId } from '../types';
import { JPZ_INFO, TOWING_SERVICES, FLEET_VEHICLES, GALLERY_PHOTOS, SOWETO_LANDMARKS, CLIENT_REVIEWS } from '../data/jpzData';
import { 
  AlertTriangle, Phone, MessageSquare, Clock, ShieldCheck, 
  MapPin, Star, Play, CheckCircle2, ChevronRight, 
  ArrowRight, Sparkles, Navigation, X, ShieldAlert, Truck, Layers, Zap, Disc, Anchor, Compass
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenEmergency: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEmergency }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [activeFleetTab, setActiveFleetTab] = useState<string>(FLEET_VEHICLES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-red-500" />;
      case 'Truck': return <Truck className="w-6 h-6 text-yellow-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Disc': return <Disc className="w-6 h-6 text-emerald-500" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-purple-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-500" />;
      default: return <Truck className="w-6 h-6 text-yellow-500" />;
    }
  };

  const currentVehicle = FLEET_VEHICLES.find(v => v.id === activeFleetTab) || FLEET_VEHICLES[0];

  return (
    <div className="space-y-16 pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] bg-slate-950 flex items-center overflow-hidden">
        {/* Hero Background image with dramatic lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/IMG-20261029-WA0263_744a00c7.jpg"
            alt="JPZ Towing Blue Nissan Truck in Soweto at Sunset"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 scale-105 transform motion-safe:animate-subtle-zoom"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 backdrop-blur-md text-red-400 text-xs sm:text-sm font-black tracking-wide uppercase">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span>24/7 Soweto Active Response • 15–25 Min ETA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] font-heading uppercase">
              FASTEST TOWING & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500">ACCIDENT RECOVERY</span> IN SOWETO
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Breakdown on Chris Hani Road, flat battery at Maponya Mall, or late-night accident near Bara? JPZ Towing dispatches certified recovery units immediately across all Soweto zones.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenEmergency}
                className="group relative px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 hover:from-red-500 hover:via-amber-400 hover:to-red-500 text-white font-black text-base tracking-wide shadow-2xl shadow-red-600/40 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <AlertTriangle className="w-5 h-5 text-yellow-200 animate-bounce" />
                <span>REQUEST ASAP EMERGENCY TOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
                className="px-6 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-base flex items-center justify-center gap-2.5 shadow-xl shadow-yellow-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-slate-950" />
                <span>CALL: {JPZ_INFO.primaryPhone}</span>
              </a>
            </div>

            {/* Micro-trust indicators */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-slate-300 text-xs">
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md p-2.5 rounded-lg border border-slate-800">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>15-25m Avg Arrival</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md p-2.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Insurance Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md p-2.5 rounded-lg border border-slate-800">
                <Truck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Wheel-Lift & Rollback</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md p-2.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                <span>100% Soweto Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOWETO LANDMARKS TICKER */}
      <section className="bg-yellow-500 text-slate-950 py-3.5 px-4 font-bold overflow-hidden shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <span className="shrink-0 flex items-center gap-1.5 uppercase tracking-wider font-black">
            <MapPin className="w-4 h-4 text-slate-950" />
            Active Soweto Staging Hubs:
          </span>
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar whitespace-nowrap pl-4">
            {SOWETO_LANDMARKS.map((lm) => (
              <span key={lm.name} className="flex items-center gap-1.5 opacity-90 hover:opacity-100">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                {lm.name} ({lm.avgEtaMins}m ETA)
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY TRIAGE / COMMON CALLOUTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <span className="text-xs font-black text-yellow-500 uppercase tracking-widest">
            Immediate Roadside Triage
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase">
            What is your current emergency?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Click your situation to launch an instant dispatched rescue request with the right equipment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <button
            onClick={onOpenEmergency}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-500/40 hover:border-red-500 shadow-sm hover:shadow-lg transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
              Vehicle Accident
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Collision, rollover, police scene clearing.
            </p>
            <span className="mt-3 inline-flex items-center text-xs font-black text-red-500">
              Dispatch ASAP →
            </span>
          </button>

          <button
            onClick={onOpenEmergency}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-500/40 hover:border-yellow-500 shadow-sm hover:shadow-lg transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
              Engine Breakdown
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Overheated, clutch dead, broken ball joint.
            </p>
            <span className="mt-3 inline-flex items-center text-xs font-black text-yellow-600 dark:text-yellow-400">
              Call Wheel-Lift →
            </span>
          </button>

          <button
            onClick={onOpenEmergency}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-500/40 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Disc className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
              Puncture / Flat Tyre
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Pothole blowout, roadside wheel swap.
            </p>
            <span className="mt-3 inline-flex items-center text-xs font-black text-blue-600 dark:text-blue-400">
              Request Tech →
            </span>
          </button>

          <button
            onClick={onOpenEmergency}
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-500/40 hover:border-emerald-500 shadow-sm hover:shadow-lg transition-all text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
              Dead Battery / Boost
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Car won't turn over, commercial booster jump.
            </p>
            <span className="mt-3 inline-flex items-center text-xs font-black text-emerald-600 dark:text-emerald-400">
              Get Jumpstart →
            </span>
          </button>
        </div>
      </section>

      {/* REAL FLEET SHOWCASE & VIDEO PLAYER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl border-2 border-yellow-500/30 overflow-hidden shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-black text-yellow-400 uppercase tracking-widest block mb-1">
                Authentic JPZ Fleet In Action
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Built For Tough Township Roads & Highway Rescues
              </h2>
            </div>

            {/* Fleet Tab Switchers */}
            <div className="flex flex-wrap gap-2">
              {FLEET_VEHICLES.map((vehicle) => (
                <button
                  key={vehicle.id}
                  onClick={() => setActiveFleetTab(vehicle.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeFleetTab === vehicle.id
                      ? 'bg-yellow-400 text-slate-950 shadow-md font-black'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {vehicle.name.split(' (')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Fleet Vehicle Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual media area: Video or Primary Photo */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video border border-slate-700 shadow-xl group">
                {currentVehicle.videoSrc ? (
                  <video
                    src={currentVehicle.videoSrc}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                    poster={currentVehicle.primaryImage}
                  />
                ) : (
                  <img
                    src={currentVehicle.primaryImage}
                    alt={currentVehicle.name}
                    className="w-full h-full object-cover"
                  />
                )}

                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-yellow-400 border border-yellow-400/40">
                  {currentVehicle.plate} • {currentVehicle.callsign}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2">
                {[currentVehicle.primaryImage, ...currentVehicle.galleryImages.slice(0, 4)].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhoto(img)}
                    className="relative rounded-lg overflow-hidden aspect-video border border-slate-700 hover:border-yellow-400 transition-colors cursor-pointer"
                  >
                    <img src={img} alt="Fleet detail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Specs & Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase">
                {currentVehicle.type}
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                {currentVehicle.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentVehicle.description}
              </p>

              {/* Spec list */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-[11px] text-slate-400 block">Tow Capacity</span>
                  <span className="text-sm font-bold text-yellow-400">{currentVehicle.specs.capacity}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-[11px] text-slate-400 block">Winch Power</span>
                  <span className="text-sm font-bold text-yellow-400">{currentVehicle.specs.winchRating}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 col-span-2">
                  <span className="text-[11px] text-slate-400 block">Specialty Deployment</span>
                  <span className="text-xs font-semibold text-slate-200">{currentVehicle.specs.specialty}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenEmergency}
                  className="flex-1 py-3 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <AlertTriangle className="w-4 h-4 text-slate-950" />
                  Dispatch This Rig
                </button>
                <a
                  href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4 text-yellow-400" />
                  Direct Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE TOWING SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black text-yellow-500 uppercase tracking-widest">
              Comprehensive Roadside Solutions
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Services We Provide 24/7
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-yellow-600 dark:text-yellow-400 hover:underline cursor-pointer"
          >
            <span>View All Detailed Specs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOWING_SERVICES.slice(0, 8).map((srv) => (
            <div
              key={srv.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col group"
            >
              <div className="relative h-44 overflow-hidden bg-slate-800">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                  <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    {srv.etaEstimate}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                      {srv.shortTitle}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {srv.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services', srv.id)}
                    className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-yellow-500 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenEmergency}
                    className="px-2.5 py-1 rounded bg-yellow-400 hover:bg-yellow-300 text-slate-950 text-xs font-black cursor-pointer shadow-xs"
                  >
                    Dispatch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REAL RECOVERY PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-black text-yellow-500 uppercase tracking-widest">
            On The Ground In Soweto
          </span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Real Scene Recovery Gallery
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Real photos from our daily operations—clearing accidents, winching cars from embankments, and transporting vehicles safely.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(photo.src)}
              className="group relative rounded-xl overflow-hidden aspect-4/3 bg-slate-900 cursor-pointer shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <span className="inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-yellow-400 text-slate-950 font-bold mb-1">
                  {photo.category}
                </span>
                <p className="text-xs font-semibold text-white leading-snug line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VERIFIED WHATSAPP TESTIMONIAL & TRUST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-neutral-900 rounded-3xl p-6 sm:p-10 border border-yellow-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* WhatsApp Real Encounter Highlight */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>Verified Soweto WhatsApp Encounter</span>
              </div>

              <h3 className="text-2xl font-black text-white">
                "Do u know pimville square? We can meetup there..."
              </h3>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 text-slate-950 font-black flex items-center justify-center">
                    SK
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Samke & Friend</h4>
                    <span className="text-xs text-yellow-400">Pimville Square, Soweto</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  "I just called them samke and luckily I know him don't worry... Pulled up in 15 minutes with the blue Nissan truck. Handled the breakdown without stress!"
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Known, trusted & respected across Soweto</span>
              </div>
            </div>

            {/* Other Reviews */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLIENT_REVIEWS.filter(r => r.id !== 'rev-samke').map((review) => (
                <div key={review.id} className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{review.author}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] text-yellow-400 font-semibold block">
                    {review.suburb} • {review.service}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FULL PHOTO INSPECTION LIGHTBOX */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-10 right-0 p-1.5 rounded-full bg-slate-800 text-white hover:bg-slate-700"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt="Inspected JPZ Photo"
              className="max-h-[80vh] w-auto object-contain rounded-xl border border-yellow-500/40 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
