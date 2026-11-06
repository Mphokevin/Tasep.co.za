import React, { useState } from 'react';
import { COMPANY_INFO, SERVICE_DIVISIONS, FAQS } from '../data/companyData';
import { ContactFormData, SubmittedInquiry } from '../types';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  FileCheck,
  Sparkles,
  Building2,
  Pickaxe,
  Coins,
  ChevronDown,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface ContactPageProps {
  preselectedServiceId?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  preselectedServiceId
}) => {
  const [formType, setFormType] = useState<'quote' | 'general' | 'callback'>(
    preselectedServiceId ? 'quote' : 'quote'
  );

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: preselectedServiceId || 'mining-projects',
    projectLocation: '',
    estimatedBudget: 'R500k - R2M',
    timeline: 'Immediate (1-30 days)',
    message: '',
    formType: 'quote',
    callbackDate: '',
    callbackTime: 'Morning (09:00 - 12:00)'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<SubmittedInquiry | null>(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(COMPANY_INFO.primaryPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details of your request';
    }
    if (formType === 'callback' && !formData.callbackDate) {
      newErrors.callbackDate = 'Please select a preferred callback date';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const refNumber = `TSP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const inquiry: SubmittedInquiry = {
        ...formData,
        formType,
        id: refNumber,
        submittedAt: new Date().toLocaleString()
      };
      setSubmittedInquiry(inquiry);
      setIsSubmitting(false);
    }, 700);
  };

  const getWhatsAppPrefilledUrl = (inquiry: SubmittedInquiry) => {
    const text = encodeURIComponent(
      `Hello TASEP PTY LTD! My name is ${inquiry.fullName} from ${
        inquiry.company || 'Private Client'
      }. Reference: ${inquiry.id}. I submitted an inquiry for ${
        inquiry.serviceCategory
      }: "${inquiry.message}". Please review!`
    );
    return `https://wa.me/27797519840?text=${text}`;
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#061830] via-[#092244] to-[#04282e] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <span>Integrated Communication Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-heading">
            Connect With TASEP PTY LTD
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Our corporate offices and field directors are ready to assist. Submit a detailed quotation request, schedule an executive callback, or reach out instantly via telephone and WhatsApp.
          </p>
        </div>
      </section>

      {/* Prominent Flyer Banner Replica (079 751 9840) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0a2342] via-[#0d3b66] to-[#085f63] text-white p-6 sm:p-10 shadow-2xl border-2 border-emerald-500/30 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Phone Callout Badge extracted from Image 2 */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-xl shadow-emerald-900/50 border-4 border-white/20 animate-pulse">
                  <Phone className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-emerald-300 block">
                  CONTACT US NOW
                </span>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="text-3xl sm:text-5xl font-black text-white hover:text-emerald-300 transition-colors tracking-tight font-heading block"
                >
                  {COMPANY_INFO.primaryPhone}
                </a>
                <p className="text-xs text-slate-300">
                  {COMPANY_INFO.emergencyLine}
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Directly</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm transition-colors flex items-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp</span>
              </a>

              <button
                onClick={handleCopyPhone}
                className="px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer backdrop-blur-xs"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Integrated Form & Contact Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Integrated Contact Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 space-y-8">
            {/* Form Mode Selector */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 font-heading">
                    Integrated Contact Portal
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Select your communication type below for expedited routing
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1 hidden sm:flex items-center justify-center">
                  <img
                    src={COMPANY_INFO.logoUrl}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Segmented Mode Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFormType('quote')}
                  className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    formType === 'quote'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Request Quote
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('general')}
                  className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    formType === 'general'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  General Message
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('callback')}
                  className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    formType === 'callback'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Schedule Call
                </button>
              </div>
            </div>

            {/* Submission Success Confirmation Modal / Card */}
            {submittedInquiry ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Inquiry Successfully Dispatched
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      Thank You, {submittedInquiry.fullName}!
                    </h3>
                    <p className="text-xs text-slate-600">
                      Our commercial operations desk has received your submission and will get back to you shortly.
                    </p>
                  </div>
                </div>

                {/* Reference Slip */}
                <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-xs space-y-3 text-xs">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Reference Number:</span>
                    <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                      {submittedInquiry.id}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Selected Division:</span>
                    <span className="font-semibold text-slate-800 capitalize">
                      {submittedInquiry.serviceCategory.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Contact Telephone:</span>
                    <span className="font-semibold text-slate-800">
                      {submittedInquiry.phone}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Dispatched At:</span>
                    <span className="text-slate-600">{submittedInquiry.submittedAt}</span>
                  </div>
                </div>

                {/* Instant Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={getWhatsAppPrefilledUrl(submittedInquiry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Reference via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmittedInquiry(null);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        company: '',
                        serviceCategory: 'mining-projects',
                        projectLocation: '',
                        estimatedBudget: 'R500k - R2M',
                        timeline: 'Immediate (1-30 days)',
                        message: '',
                        formType: 'quote',
                        callbackDate: '',
                        callbackTime: 'Morning (09:00 - 12:00)'
                      });
                    }}
                    className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Form Elements */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sipho Ndlovu"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                          : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-600 bg-white'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anglo Infra / Private"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-white"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sipho@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                          : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-600 bg-white'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Telephone / Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 079 751 9840 / +27..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                          : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-600 bg-white'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Division Category Selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Core Division of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceCategory: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                  >
                    {SERVICE_DIVISIONS.map((div) => (
                      <option key={div.id} value={div.id}>
                        {div.title} ({div.shortTitle})
                      </option>
                    ))}
                    <option value="multiple">Multiple Divisions / Turnkey Package</option>
                  </select>
                </div>

                {/* Specific Fields for Quote Request */}
                {formType === 'quote' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Project Site / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sandton, Witbank, Polokwane"
                        value={formData.projectLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, projectLocation: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Estimated Budget Bracket
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) =>
                          setFormData({ ...formData, estimatedBudget: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      >
                        <option value="Under R250k">Under R250,000</option>
                        <option value="R250k - R1M">R250,000 – R1 Million</option>
                        <option value="R1M - R5M">R1 Million – R5 Million</option>
                        <option value="R5M - R20M">R5 Million – R20 Million</option>
                        <option value="R20M+">R20 Million+ (Major Turnkey)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Project Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      >
                        <option value="Immediate (1-30 days)">Immediate (1–30 days)</option>
                        <option value="1-3 Months">1 – 3 Months</option>
                        <option value="3-6 Months">3 – 6 Months</option>
                        <option value="Long Term Tender">Long Term Tender / Pipeline</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Specific Fields for Callback */}
                {formType === 'callback' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Preferred Callback Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.callbackDate}
                        onChange={(e) =>
                          setFormData({ ...formData, callbackDate: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 ${
                          errors.callbackDate ? 'border-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.callbackDate && (
                        <span className="text-[11px] text-red-500 block">
                          {errors.callbackDate}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.callbackTime}
                        onChange={(e) =>
                          setFormData({ ...formData, callbackTime: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2"
                      >
                        <option value="Morning (08:30 - 11:30)">Morning (08:30 – 11:30)</option>
                        <option value="Midday (11:30 - 14:30)">Midday (11:30 – 14:30)</option>
                        <option value="Afternoon (14:30 - 17:00)">Afternoon (14:30 – 17:00)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Project Details / Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Detailed Scope or Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your site parameters, tonnage, square meters, capital needs, or cleaning frequency..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/30'
                        : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-600 bg-white'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 hover:from-blue-700 hover:via-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Dispatched to TASEP Desk...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>
                          {formType === 'quote'
                            ? 'Submit Official Quotation Request'
                            : formType === 'callback'
                            ? 'Schedule Corporate Callback'
                            : 'Send Message to Directorate'}
                        </span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Submissions are protected under POPIA and answered within 2 business hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Office Cards & Information */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Official Channels
                </span>
                <h3 className="text-xl font-bold font-heading">
                  TASEP (Pty) Ltd
                </h3>
                <p className="text-xs text-slate-300">
                  A Spirit For Innovation
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Line</span>
                    <a
                      href={`tel:${COMPANY_INFO.primaryPhone.replace(/\s+/g, '')}`}
                      className="font-bold text-white hover:text-emerald-400 text-base"
                    >
                      {COMPANY_INFO.primaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Instant Messaging</span>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-emerald-300 hover:underline"
                    >
                      Direct WhatsApp Desk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Electronic Mail</span>
                    <span className="font-semibold text-white">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Headquarters & Footprint</span>
                    <span className="font-semibold text-white">
                      {COMPANY_INFO.headquarters}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Operating Schedule</span>
                    <span className="text-slate-300 text-xs">
                      {COMPANY_INFO.businessHours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                <span className="text-emerald-400 font-bold block mb-1">
                  24/7 Field Support:
                </span>
                {COMPANY_INFO.emergencyLine}
              </div>
            </div>

            {/* Division Quick Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Direct Division Desks
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Pickaxe className="w-3.5 h-3.5 text-blue-600" />
                  <span>Mining Tenders & Earthmoving Ops</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Property Development & Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <Coins className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Capital Financing & Joint Ventures</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Specialized Corporate Cleaning Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-6">
          <div className="space-y-2 text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
              Inquiry Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding our quotation process, division operations, and partnership structures.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
