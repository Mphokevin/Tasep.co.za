import React, { useState } from 'react';
import { PageId, ServiceCategory, StandardBookingInquiry } from '../types';
import { JPZ_INFO, SOWETO_LANDMARKS, TOWING_SERVICES, FAQS } from '../data/jpzData';
import { 
  Phone, Mail, MapPin, MessageSquare, Clock, 
  ShieldCheck, AlertTriangle, CheckCircle2, Send, 
  HelpCircle, ChevronDown, ChevronUp, Navigation
} from 'lucide-react';
import { ServiceAreaMap } from '../components/ServiceAreaMap';

interface ContactPageProps {
  onOpenEmergency: () => void;
  preselectedServiceId?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenEmergency,
  preselectedServiceId,
}) => {
  // Booking Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [serviceType, setServiceType] = useState<ServiceCategory>(
    (preselectedServiceId as ServiceCategory) || 'breakdown-towing'
  );
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [urgency, setUrgency] = useState<'immediate' | 'today' | 'scheduled'>('immediate');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Submission state
  const [submittedBooking, setSubmittedBooking] = useState<StandardBookingInquiry | null>(null);

  // Quick Callback State
  const [cbName, setCbName] = useState('');
  const [cbPhone, setCbPhone] = useState('');
  const [cbSubmitted, setCbSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: StandardBookingInquiry = {
      id: `JPZ-BOOK-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName,
      phone,
      email: email || undefined,
      pickupLocation: pickup,
      dropoffLocation: dropoff,
      serviceType,
      vehicleDetails: vehicleDetails || 'Standard Vehicle',
      preferredDate,
      preferredTime,
      urgency,
      specialInstructions,
      createdAt: new Date().toLocaleDateString()
    };
    setSubmittedBooking(newBooking);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCbSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8 pb-20">
      {/* Top Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-yellow-500/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-black uppercase tracking-wider">
              24/7 Soweto Dispatch Centre
            </span>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Contact JPZ Towing & Bookings
            </h1>
            <p className="text-sm sm:text-base text-slate-300">
              Immediate breakdown assistance, scheduled inter-provincial towing, or insurance quotations. Our operators are standing by 24 hours a day.
            </p>
          </div>

          {/* Stranded Right Now Warning Strip */}
          <div className="mt-6 p-4 rounded-2xl bg-red-950/80 border border-red-500/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <div>
                <p className="text-xs font-bold text-yellow-300 uppercase">Stranded on the road right this moment?</p>
                <p className="text-sm font-black text-white">Don't wait for email or standard forms!</p>
              </div>
            </div>

            <button
              onClick={onOpenEmergency}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 text-white font-black text-xs uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 cursor-pointer animate-pulse"
            >
              <AlertTriangle className="w-4 h-4 text-yellow-200" />
              <span>Launch ASAP Emergency Form</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Forms & Contact Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Integrated Booking & Quote Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
            {submittedBooking ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Booking Request Received!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Reference: <span className="font-mono text-yellow-500 font-bold">{submittedBooking.id}</span>. Our Soweto dispatch controller is reviewing your route and will contact you at <strong className="text-slate-900 dark:text-white">{submittedBooking.phone}</strong> shortly.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-left text-xs space-y-2 max-w-md mx-auto border border-slate-200 dark:border-slate-700">
                  <p><strong>Route:</strong> {submittedBooking.pickupLocation} → {submittedBooking.dropoffLocation}</p>
                  <p><strong>Service:</strong> {submittedBooking.serviceType.replace('-', ' ')}</p>
                  <p><strong>Vehicle:</strong> {submittedBooking.vehicleDetails}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/27810798244?text=Hi%20JPZ%2C%20I%20just%20submitted%20booking%20${submittedBooking.id}%20for%20pickup%20at%20${encodeURIComponent(submittedBooking.pickupLocation)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Notify Driver on WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmittedBooking(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold"
                  >
                    Submit Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    Towing & Vehicle Transport Form
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Book ahead or request an official corporate towing quotation across Soweto and Gauteng.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sipho Ndlovu"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 081 079 8244"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>

                {/* Email & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Dispatch Urgency
                    </label>
                    <select
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value as any)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                    >
                      <option value="immediate">Immediate Dispatch (15-25 min target)</option>
                      <option value="today">Later Today</option>
                      <option value="scheduled">Scheduled Date & Time Ahead</option>
                    </select>
                  </div>
                </div>

                {/* Pickup & Dropoff */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Pickup Location / Suburb *
                    </label>
                    <input
                      type="text"
                      required
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Pimville Square / Chris Hani Rd"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Dropoff Destination *
                    </label>
                    <input
                      type="text"
                      required
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      placeholder="e.g. Dealership / Home / Panel Shop"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>

                {/* Service Category & Vehicle Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Service Category
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value as ServiceCategory)}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                    >
                      {TOWING_SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Vehicle Make, Model & Reg
                    </label>
                    <input
                      type="text"
                      value={vehicleDetails}
                      onChange={(e) => setVehicleDetails(e.target.value)}
                      placeholder="e.g. 2021 Silver Toyota Hilux (011 JPZ GP)"
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Special Instructions (Keys status, flat tyre, accident details)
                  </label>
                  <textarea
                    rows={3}
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="Provide any gate codes, specific workshop drop off bays, or condition notes..."
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Booking & Request Quotation</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Hotlines & Fast Callback Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Hotlines Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-yellow-500/40 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-black border border-yellow-400/60 p-1 flex items-center justify-center">
                  <img src={JPZ_INFO.logo} alt="JPZ Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-white">JPZ 24/7 Hotlines</h3>
                  <p className="text-xs text-yellow-400">Direct Operator On Call</p>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={`tel:${JPZ_INFO.primaryPhoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-yellow-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Primary Hotline & WhatsApp</span>
                      <span className="text-sm font-black text-yellow-400">{JPZ_INFO.primaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded font-bold">Call Now</span>
                </a>

                <a
                  href={`tel:${JPZ_INFO.secondaryPhoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Secondary Line</span>
                      <span className="text-sm font-bold text-white">{JPZ_INFO.secondaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">Direct</span>
                </a>

                <a
                  href={`tel:${JPZ_INFO.alternativePhoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <div>
                      <span className="text-[10px] text-slate-400 block">Alternative Line</span>
                      <span className="text-sm font-bold text-white">{JPZ_INFO.alternativePhone}</span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400">Direct</span>
                </a>

                <a
                  href={JPZ_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <div>
                      <span className="text-[10px] text-emerald-400 block">WhatsApp Instant SOS</span>
                      <span className="text-sm font-bold">Send Live GPS Location</span>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 px-2 py-0.5 rounded font-bold">Chat</span>
                </a>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/50 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>{JPZ_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Quick 60-Second Callback Form */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-500" />
                <span>Quick 60-Second Callback</span>
              </h3>
              
              {cbSubmitted ? (
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! An operator will ring you back immediately.</span>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={cbName}
                    onChange={(e) => setCbName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                  <input
                    type="tel"
                    required
                    value={cbPhone}
                    onChange={(e) => setCbPhone(e.target.value)}
                    placeholder="Your Phone Number (e.g. 081 079 8244)"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-yellow-400 hover:bg-slate-800 dark:hover:bg-yellow-300 text-white dark:text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Request Instant Callback
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SOWETO & GREATER JOHANNESBURG SERVICE AREA COVERAGE MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceAreaMap onOpenEmergency={onOpenEmergency} />
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-black text-yellow-500 uppercase tracking-widest">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-yellow-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
