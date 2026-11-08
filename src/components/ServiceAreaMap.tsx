import React, { useState } from 'react';
import { 
  MapPin, Navigation, Clock, ShieldCheck, 
  ExternalLink, Search, CheckCircle2, AlertTriangle, Layers, Radio
} from 'lucide-react';
import { JPZ_INFO, SOWETO_LANDMARKS } from '../data/jpzData';

interface HubDetail {
  id: string;
  name: string;
  zone: 'rapid' | 'outer' | 'greater-jhb';
  zoneLabel: string;
  coords: { lat: number; lng: number };
  xPercent: number; // For responsive SVG visualization
  yPercent: number;
  eta: string;
  arterial: string;
  description: string;
  stagedUnit: string;
}

const HUBS: HubDetail[] = [
  {
    id: 'pimville-hq',
    name: 'Pimville Square (JPZ Base)',
    zone: 'rapid',
    zoneLabel: 'Zone 1: Primary Rapid Core',
    coords: { lat: -26.2736, lng: 27.8920 },
    xPercent: 50,
    yPercent: 54,
    eta: '8–12 mins',
    arterial: 'Modjadji St / Chris Hani Rd',
    description: 'Central operations dispatch and staging base. Fastest dispatch to all Soweto zones.',
    stagedUnit: 'Unit 1 (Nissan Hardbody 116 JPZ GP)'
  },
  {
    id: 'bara-hospital',
    name: 'Chris Hani Baragwanath Hospital',
    zone: 'rapid',
    zoneLabel: 'Zone 1: Primary Rapid Core',
    coords: { lat: -26.2608, lng: 27.9427 },
    xPercent: 68,
    yPercent: 46,
    eta: '10–14 mins',
    arterial: 'Old Potchefstroom Rd / Chris Hani Rd',
    description: 'Major medical arterial and high-traffic commuter junction connecting Diepkloof and Bara.',
    stagedUnit: 'Unit 1 & Heavy Rollback'
  },
  {
    id: 'maponya-mall',
    name: 'Maponya Mall & Klipspruit',
    zone: 'rapid',
    zoneLabel: 'Zone 1: Primary Rapid Core',
    coords: { lat: -26.2625, lng: 27.9048 },
    xPercent: 46,
    yPercent: 44,
    eta: '12–15 mins',
    arterial: 'Chris Hani Rd / Klipspruit Valley',
    description: 'Commercial heart of Soweto with underground and open-deck parking emergency callouts.',
    stagedUnit: 'Unit 1 (Wheel-Lift)'
  },
  {
    id: 'diepkloof-square',
    name: 'Diepkloof Square / N12 East',
    zone: 'rapid',
    zoneLabel: 'Zone 1: Primary Rapid Core',
    coords: { lat: -26.2483, lng: 27.9542 },
    xPercent: 72,
    yPercent: 36,
    eta: '12–16 mins',
    arterial: 'Immink Dr / N12 Highway',
    description: 'Strategic highway off-ramp handling breakdown and accident clearance near Southgate & N12.',
    stagedUnit: 'Heavy Rollback (DN 21 GY GP)'
  },
  {
    id: 'orlando-stadium',
    name: 'Orlando Stadium & Towers',
    zone: 'rapid',
    zoneLabel: 'Zone 1: Primary Rapid Core',
    coords: { lat: -26.2333, lng: 27.9250 },
    xPercent: 58,
    yPercent: 32,
    eta: '12–15 mins',
    arterial: 'Mooki St / Klipspruit Valley Rd',
    description: 'High-density historical precinct with rapid response for events, match days, and breakdowns.',
    stagedUnit: 'Unit 1 (Rapid Response)'
  },
  {
    id: 'devland-golden-hwy',
    name: 'Golden Highway & Devland',
    zone: 'rapid',
    zoneLabel: 'Zone 1: Primary Rapid Core',
    coords: { lat: -26.2890, lng: 27.9220 },
    xPercent: 62,
    yPercent: 68,
    eta: '10–14 mins',
    arterial: 'Golden Highway (R553) / Devland',
    description: 'Heavy industrial and commuter corridor connecting Soweto to Eldorado Park and the Vaal.',
    stagedUnit: 'Hilux 4x4 Rig & Trailer'
  },
  {
    id: 'dobsonville-mall',
    name: 'Dobsonville Mall',
    zone: 'outer',
    zoneLabel: 'Zone 2: Soweto Outer Corridor',
    coords: { lat: -26.2200, lng: 27.8720 },
    xPercent: 36,
    yPercent: 24,
    eta: '16–20 mins',
    arterial: 'Elias Motsoaledi Rd / Main Rd',
    description: 'North-western Soweto sector with regular mechanical assistance and jumpstart calls.',
    stagedUnit: 'Unit 1 (Wheel-Lift)'
  },
  {
    id: 'meadowlands',
    name: 'Meadowlands (Ndaba Dr)',
    zone: 'outer',
    zoneLabel: 'Zone 2: Soweto Outer Corridor',
    coords: { lat: -26.2300, lng: 27.8920 },
    xPercent: 44,
    yPercent: 28,
    eta: '14–18 mins',
    arterial: 'Ndaba Drive / Forbes Rd',
    description: 'Residential sectors 1 through 10 with tight township street maneuvering specialists.',
    stagedUnit: 'Unit 1 (Nissan Hardbody)'
  },
  {
    id: 'protea-glen',
    name: 'Protea Glen Mall & N12 West',
    zone: 'outer',
    zoneLabel: 'Zone 2: Soweto Outer Corridor',
    coords: { lat: -26.2930, lng: 27.8100 },
    xPercent: 20,
    yPercent: 64,
    eta: '18–22 mins',
    arterial: 'N12 West / Protea Blvd',
    description: 'Fast-expanding western suburb with heavy daily commute towards Potchefstroom and JHB CBD.',
    stagedUnit: 'Heavy Rollback & Hilux Rig'
  },
  {
    id: 'southgate-mall',
    name: 'Southgate Mall & M1 South',
    zone: 'greater-jhb',
    zoneLabel: 'Zone 3: Greater JHB & Expressways',
    coords: { lat: -26.2660, lng: 27.9850 },
    xPercent: 84,
    yPercent: 52,
    eta: '15–20 mins',
    arterial: 'Rifle Range Rd / Columbine / M1',
    description: 'Major regional interchange bridging Soweto, Mondeor, Robertsham, and Johannesburg CBD.',
    stagedUnit: 'Heavy Rollback (DN 21 GY GP)'
  },
  {
    id: 'jhb-cbd-booysens',
    name: 'Johannesburg South & Booysens',
    zone: 'greater-jhb',
    zoneLabel: 'Zone 3: Greater JHB & Expressways',
    coords: { lat: -26.2320, lng: 28.0200 },
    xPercent: 92,
    yPercent: 30,
    eta: '20–25 mins',
    arterial: 'M2 Highway / Booysens Rd',
    description: 'Dealership deliveries, panel shop transports, and inner-city accident clearance.',
    stagedUnit: 'Heavy Rollback & Transporter'
  }
];

interface ServiceAreaMapProps {
  onOpenEmergency: () => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ onOpenEmergency }) => {
  const [selectedHub, setSelectedHub] = useState<HubDetail>(HUBS[0]);
  const [filterZone, setFilterZone] = useState<'all' | 'rapid' | 'outer' | 'greater-jhb'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHubs = HUBS.filter(hub => {
    const matchesZone = filterZone === 'all' || hub.zone === filterZone;
    const matchesSearch = hub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          hub.arterial.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesSearch;
  });

  const openInGoogleMaps = (hub: HubDetail) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${hub.coords.lat},${hub.coords.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 text-xs font-black uppercase tracking-wider mb-2">
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            Live Dispatch Coverage Map
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Soweto & Greater Johannesburg Service Area
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Visual map of staged JPZ recovery units, response corridors, and arrival zones across Soweto.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Zone 1: 10–15 Mins
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yellow-50 dark:bg-yellow-950/50 text-yellow-700 dark:text-yellow-400 font-bold border border-yellow-500/30">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            Zone 2: 15–20 Mins
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 font-bold border border-blue-500/30">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Zone 3: 20–25 Mins
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilterZone('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filterZone === 'all'
                ? 'bg-slate-900 text-white dark:bg-yellow-400 dark:text-slate-950 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Soweto Hubs ({HUBS.length})
          </button>
          <button
            onClick={() => setFilterZone('rapid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filterZone === 'rapid'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Rapid Core (Pimville / Bara / Maponya)
          </button>
          <button
            onClick={() => setFilterZone('outer')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filterZone === 'outer'
                ? 'bg-yellow-500 text-slate-950 shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Outer Corridors (Protea / Dobsonville)
          </button>
          <button
            onClick={() => setFilterZone('greater-jhb')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filterZone === 'greater-jhb'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Greater JHB / Southgate
          </button>
        </div>

        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search landmark or road..."
            className="w-full sm:w-56 pl-8 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400"
          />
        </div>
      </div>

      {/* Visual Map Canvas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive SVG Radar & Coverage Map */}
        <div className="lg:col-span-8 bg-slate-950 rounded-2xl border-2 border-yellow-500/30 overflow-hidden relative shadow-inner p-3 min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
          {/* Subtle Grid Map Canvas Pattern */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #facc15 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          {/* Concentric Response Radius Rings (Center at Pimville Square ~ 50% X, 54% Y) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Zone 1 Circle */}
            <div className="absolute w-[260px] h-[260px] rounded-full border border-emerald-500/30 bg-emerald-500/5 animate-pulse" />
            {/* Zone 2 Circle */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-yellow-500/20 bg-yellow-500/5" />
            {/* Zone 3 Circle */}
            <div className="absolute w-[600px] h-[600px] rounded-full border border-blue-500/10" />
          </div>

          {/* Expressway Lines representation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* N12 Highway */}
            <line x1="10%" y1="70%" x2="90%" y2="40%" stroke="#eab308" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.4" />
            {/* Golden Highway */}
            <line x1="60%" y1="20%" x2="68%" y2="90%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" opacity="0.35" />
            {/* Chris Hani Arterial */}
            <line x1="30%" y1="52%" x2="80%" y2="50%" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.4" />
          </svg>

          {/* Top Controls Overlay */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-yellow-500/30 text-white flex items-center gap-2 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="font-mono font-bold text-yellow-400">JPZ RAPID RADAR: SOWETO DISPATCH</span>
            </div>
            <div className="bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800 text-[11px] text-slate-300 font-mono">
              -26.2736° S, 27.8920° E
            </div>
          </div>

          {/* Landmark Pins Placed on Radar */}
          <div className="relative z-10 w-full h-[320px] sm:h-[380px]">
            {filteredHubs.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              const isPimvilleHQ = hub.id === 'pimville-hq';

              let pinColor = 'bg-yellow-400 text-slate-950 border-yellow-300';
              if (hub.zone === 'rapid') pinColor = 'bg-emerald-500 text-white border-emerald-300';
              if (hub.zone === 'greater-jhb') pinColor = 'bg-blue-500 text-white border-blue-300';
              if (isPimvilleHQ) pinColor = 'bg-red-600 text-white border-yellow-300 animate-bounce';

              return (
                <div
                  key={hub.id}
                  style={{ left: `${hub.xPercent}%`, top: `${hub.yPercent}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-125 z-20"
                  onClick={() => setSelectedHub(hub)}
                >
                  <div className="relative group">
                    {/* Pulsing ring for active or HQ */}
                    {(isSelected || isPimvilleHQ) && (
                      <span className="absolute -inset-2 rounded-full bg-yellow-400/40 animate-ping pointer-events-none" />
                    )}

                    {/* Pin button */}
                    <div className={`p-1.5 sm:p-2 rounded-full shadow-lg border-2 flex items-center justify-center ${pinColor} ${isSelected ? 'ring-4 ring-yellow-400/50 scale-110' : ''}`}>
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    {/* Pin Label tooltip */}
                    <div className={`absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md text-[10px] font-bold shadow-md pointer-events-none transition-all ${
                      isSelected 
                        ? 'bg-yellow-400 text-slate-950 opacity-100 scale-100' 
                        : 'bg-black/80 text-white opacity-0 group-hover:opacity-100'
                    }`}>
                      {hub.name.split(' (')[0]} ({hub.eta})
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Map Status Strip */}
          <div className="relative z-10 bg-black/80 backdrop-blur-md p-2.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 text-yellow-400 font-semibold text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Active Staged Units: Unit 1 (Nissan), Unit 2 (Hilux Rig), Unit 3 (Heavy Rollback)
            </span>
            <button
              onClick={() => openInGoogleMaps(selectedHub)}
              className="text-xs text-yellow-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
            >
              <span>Open Selected in Maps</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Selected Hub Detail Card */}
        <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-yellow-400/20 text-yellow-700 dark:text-yellow-400">
                {selectedHub.zoneLabel}
              </span>
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedHub.eta}
              </span>
            </div>

            <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight">
              {selectedHub.name}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedHub.description}
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Main Arterial:</span>
                <span className="font-semibold text-slate-900 dark:text-white text-right">{selectedHub.arterial}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">Staged Rig:</span>
                <span className="font-bold text-yellow-600 dark:text-yellow-400 text-right">{selectedHub.stagedUnit}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 dark:text-slate-400">GPS Coordinates:</span>
                <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300">{selectedHub.coords.lat.toFixed(4)}, {selectedHub.coords.lng.toFixed(4)}</span>
              </div>
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={onOpenEmergency}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 text-white font-black text-xs uppercase tracking-wide flex items-center justify-center gap-2 shadow-md shadow-red-900/30 cursor-pointer"
            >
              <AlertTriangle className="w-4 h-4 text-yellow-200" />
              <span>Dispatch ASAP To {selectedHub.name.split(' (')[0]}</span>
            </button>

            <button
              onClick={() => openInGoogleMaps(selectedHub)}
              className="w-full py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-blue-500" />
              <span>Navigate in External Maps</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
