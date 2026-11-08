import React, { useState } from 'react';
import { 
  AlertTriangle, PhoneCall, MessageSquare, MapPin, 
  Compass, CheckCircle2, X, Clock, ShieldCheck, 
  Truck, Loader2, Navigation, Radio
} from 'lucide-react';
import { JPZ_INFO, SOWETO_LANDMARKS, TOWING_SERVICES } from '../data/jpzData';
import { ServiceCategory, EmergencyRequest } from '../types';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (request: EmergencyRequest) => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [serviceType, setServiceType] = useState<ServiceCategory>('accident-recovery');
  const [condition, setCondition] = useState<'rolling' | 'wheels-locked' | 'accident-damage' | 'ditch-mud' | 'keys-locked'>('accident-damage');
  const [selectedLandmark, setSelectedLandmark] = useState('');
  const [customLocation, setCustomLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [notes, setNotes] = useState('');

  // Geolocation state
  const [isLocating, setIsLocating] = useState(false);
  const [gpsCoords, setGpsCoords] = useState<{ lat: number; lng: number; accuracy?: number } | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);

  // Dispatch submitted view state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeDispatch, setActiveDispatch] = useState<EmergencyRequest | null>(null);

  if (!isOpen) return null;

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setGeoError('Geolocation is not supported by your browser.');
      return;
    }

    setIsLocating(true);
    setGeoError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setIsLocating(false);
        const { latitude, longitude, accuracy } = pos.coords;
        setGpsCoords({ lat: latitude, lng: longitude, accuracy });
        if (!customLocation) {
          setCustomLocation(`GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)} (~${Math.round(accuracy)}m accuracy)`);
        }
      },
      (err) => {
        setIsLocating(false);
        setGeoError('Could not retrieve location. Please choose a Soweto landmark or enter street name below.');
        console.error('Geo error', err);
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 10000 }
    );
  };

  const getEffectiveLocation = () => {
    if (customLocation.trim()) return customLocation.trim();
    if (selectedLandmark) return selectedLandmark;
    if (gpsCoords) return `GPS Coordinates: ${gpsCoords.lat.toFixed(5)}, ${gpsCoords.lng.toFixed(5)}`;
    return 'Soweto (Location to be confirmed on call)';
  };

  const buildWhatsAppMessage = () => {
    const loc = getEffectiveLocation();
    const mapLink = gpsCoords ? `https://maps.google.com/?q=${gpsCoords.lat},${gpsCoords.lng}` : '';
    
    let msg = `🚨 *URGENT TOWING DISPATCH REQUEST* 🚨\n`;
    msg += `---------------------------------\n`;
    msg += `👤 *Name:* ${name || 'Customer'}\n`;
    msg += `📞 *Phone:* ${phone || 'Please call me back'}\n`;
    msg += `📍 *Location:* ${loc}\n`;
    if (mapLink) msg += `🗺️ *Live GPS Map:* ${mapLink}\n`;
    msg += `🚗 *Vehicle:* ${vehicle || 'Vehicle details to follow'}\n`;
    msg += `⚠️ *Service:* ${serviceType.replace('-', ' ').toUpperCase()}\n`;
    msg += `⚙️ *Condition:* ${condition.replace('-', ' ')}\n`;
    if (destination) msg += `🏁 *Tow To:* ${destination}\n`;
    if (notes) msg += `📝 *Notes:* ${notes}\n`;
    msg += `---------------------------------\n`;
    msg += `Please confirm fastest tow truck arrival!`;

    return encodeURIComponent(msg);
  };

  const handleWhatsAppSOS = () => {
    const encoded = buildWhatsAppMessage();
    const url = `https://wa.me/27810798244?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleSubmitInApp = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest: EmergencyRequest = {
      id: `JPZ-SOS-${Math.floor(100000 + Math.random() * 900000)}`,
      name: name || 'Emergency Caller',
      phone: phone || JPZ_INFO.primaryPhone,
      location: getEffectiveLocation(),
      gpsCoords: gpsCoords || undefined,
      landmark: selectedLandmark || undefined,
      vehicleMakeModel: vehicle || 'Standard Passenger Vehicle',
      serviceType,
      vehicleCondition: condition,
      destination: destination || 'Nearest Safe Storage / Approved Panel Shop',
      notes,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'dispatching'
    };

    setActiveDispatch(newRequest);
    setIsSubmitted(true);
    if (onSuccess) onSuccess(newRequest);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setActiveDispatch(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border-2 border-red-500/80 rounded-2xl shadow-2xl shadow-red-500/20 text-slate-100 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="emergency-modal-title"
      >
        {/* Pulsing Emergency Top Header Banner */}
        <div className="bg-gradient-to-r from-red-600 via-amber-600 to-red-600 px-4 py-3 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-yellow-300"></span>
            </span>
            <div>
              <h2 id="emergency-modal-title" className="text-sm sm:text-base font-black tracking-wider uppercase text-white flex items-center gap-1.5">
                <AlertTriangle className="w-5 h-5 text-yellow-300" />
                ASAP Emergency Towing Dispatch
              </h2>
              <p className="text-xs text-yellow-100 font-medium">Soweto Rapid Response • Avg 15-25 Mins</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-lg bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="Close emergency form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Emergency Phone Bar */}
        <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs text-slate-300 flex items-center gap-1.5">
            <Radio className="w-4 h-4 text-red-500 animate-pulse" />
            <span>Need an immediate voice operator?</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md shadow-red-900/40 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Call {JPZ_INFO.primaryPhone}
            </a>
            <a
              href={`tel:${JPZ_INFO.secondaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              {JPZ_INFO.secondaryPhone}
            </a>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted && activeDispatch ? (
            /* Live Dispatch Status View */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold tracking-wider uppercase mb-2">
                  Emergency Signal Transmitted
                </span>
                <h3 className="text-2xl font-black text-white">Tow Truck Dispatch Initialized!</h3>
                <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
                  Reference: <span className="font-mono text-yellow-400 font-bold">{activeDispatch.id}</span>
                </p>
              </div>

              {/* Status Tracker Card */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-left space-y-3">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-xs text-slate-400">Assigned Unit</p>
                      <p className="text-sm font-bold text-white">Nissan Hardbody Rapid Unit (116 JPZ GP)</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-yellow-400/20 text-yellow-300 font-bold">
                    ETA: ~16 Mins
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block">Location:</span>
                    <span className="text-slate-200 font-medium">{activeDispatch.location}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Vehicle:</span>
                    <span className="text-slate-200 font-medium">{activeDispatch.vehicleMakeModel}</span>
                  </div>
                </div>
              </div>

              {/* Dual Action CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSOS}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send Details Via WhatsApp to Driver
                </button>
                <a
                  href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
                  className="py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 transition-all text-center"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Tow Driver Now
                </a>
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="text-xs text-slate-400 hover:text-slate-200 underline mt-2"
              >
                Close Window & Keep Tracker Running
              </button>
            </div>
          ) : (
            /* Emergency Request Form */
            <form onSubmit={handleSubmitInApp} className="space-y-4">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-red-500" />
                    1. Breakdown / Accident Location
                  </label>
                  <button
                    type="button"
                    onClick={handleGetLocation}
                    disabled={isLocating}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {isLocating ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Detecting GPS...
                      </>
                    ) : (
                      <>
                        <Navigation className="w-3.5 h-3.5" />
                        Detect My GPS Location
                      </>
                    )}
                  </button>
                </div>

                {gpsCoords && (
                  <div className="p-2 rounded bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center justify-between">
                    <span>📍 GPS Lat: {gpsCoords.lat.toFixed(5)}, Lng: {gpsCoords.lng.toFixed(5)} (~{Math.round(gpsCoords.accuracy || 10)}m accuracy)</span>
                    <span className="font-bold text-emerald-400">Locked</span>
                  </div>
                )}

                {geoError && (
                  <p className="text-xs text-amber-300">{geoError}</p>
                )}

                {/* Quick soweto landmark picker */}
                <div>
                  <span className="text-xs text-slate-400 block mb-1">Quick Soweto Landmark:</span>
                  <select
                    value={selectedLandmark}
                    onChange={(e) => {
                      setSelectedLandmark(e.target.value);
                      if (e.target.value) setCustomLocation(e.target.value);
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-yellow-400"
                  >
                    <option value="">Select Nearest Soweto Landmark...</option>
                    {SOWETO_LANDMARKS.map((lm) => (
                      <option key={lm.name} value={`${lm.name} (${lm.area} - ${lm.popularRoad})`}>
                        {lm.name} - {lm.area} (~{lm.avgEtaMins} min ETA)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Custom street input */}
                <div>
                  <input
                    type="text"
                    value={customLocation}
                    onChange={(e) => setCustomLocation(e.target.value)}
                    placeholder="Or enter Street Name, Corner, or Specific Suburb (e.g. Pimville Zone 4)"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* Service & Condition Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    2. Emergency Situation
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value as ServiceCategory)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-yellow-400"
                  >
                    {TOWING_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    3. Vehicle Condition
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-yellow-400"
                  >
                    <option value="accident-damage">Accident Damage / Not Drivable</option>
                    <option value="rolling">Mechanical Breakdown (Steering & Wheels Roll)</option>
                    <option value="wheels-locked">Wheels Locked / Gearbox Seized</option>
                    <option value="ditch-mud">Stuck in Ditch / Rocks / Mud</option>
                    <option value="keys-locked">Keys Locked Inside / Electrical Dead</option>
                  </select>
                </div>
              </div>

              {/* Vehicle & Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Your Name (Required)
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Samke / Sipho"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Phone Number for Driver (Required)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 081 079 8244"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Vehicle Make & Model
                  </label>
                  <input
                    type="text"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder="e.g. Red VW Polo / Toyota Hilux"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Drop-off Destination (Optional)
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Home address, panel shop, mechanic"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSOS}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  Instant WhatsApp SOS (Fastest)
                </button>

                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-slate-950 font-black flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 transition-all cursor-pointer"
                >
                  <AlertTriangle className="w-5 h-5 text-slate-950" />
                  Submit ASAP Dispatch
                </button>
              </div>

              {/* Safety guarantee */}
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Certified Recovery Rigging
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  Soweto 15-25m Target
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
