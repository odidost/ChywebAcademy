"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Send,
  Clock,
  Building,
  MapPin,
  Phone,
  Globe,
  Target,
  AlertTriangle,
  Lock,
  Star,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LuxurySelect from "@/components/LuxurySelect";

interface HospitalityAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultPropertyType?: string;
}

const PROPERTY_CATEGORIES = [
  { label: "Hotel / Boutique Lodge", value: "Hotel / Boutique Lodge", badge: "Popular" },
  { label: "Luxury Shortlet / Serviced Apartment", value: "Luxury Shortlet / Serviced Apartment", badge: "High Margin" },
  { label: "Fine Dining / Casual Restaurant", value: "Fine Dining / Casual Restaurant" },
  { label: "Hotel Chain / Multi-Location Brand", value: "Hotel Chain / Multi-Location Brand", badge: "Enterprise" },
  { label: "Resort / Beach Club", value: "Resort / Beach Club" },
];

const FOCUS_AREAS = [
  { label: "Local SEO, AEO & AI Search (Hotel)", value: "Local SEO, AEO & AI Search (Hotel)", badge: "High ROI" },
  { label: "Hotel Booking Engine Web Design", value: "Hotel Booking Engine Web Design", badge: "Direct Bookings" },
  { label: "Hospitality Digital Marketing (Full Stack)", value: "Hospitality Digital Marketing (Full Stack)", badge: "End-to-End" },
  { label: "Restaurant Reservations & Local SEO", value: "Restaurant Reservations & Local SEO" },
  { label: "Luxury Shortlet Web & Direct Funnel", value: "Luxury Shortlet Web & Direct Funnel" },
];

const GROWTH_HURDLES = [
  { label: "High OTA Commissions (Booking.com/Expedia eating 18-25%)", value: "High OTA Commissions (Booking.com/Expedia eating 18-25%)", badge: "Critical Waste" },
  { label: "Website is slow, clunky, or converts under 2%", value: "Website is slow, clunky, or converts under 2%", badge: "Funnel Leak" },
  { label: "Invisible on Google Maps 3-Pack and ChatGPT/Gemini", value: "Invisible on Google Maps 3-Pack and ChatGPT/Gemini", badge: "Zero Traffic" },
  { label: "Empty weekday suites or low walk-in restaurant covers", value: "Empty weekday suites or low walk-in restaurant covers", badge: "Low Occupancy" },
  { label: "Tired of coordinating 4 uncoordinated freelancers", value: "Tired of coordinating 4 uncoordinated freelancers", badge: "Disjointed" },
];

export default function HospitalityAuditModal({
  isOpen,
  onClose,
  defaultService = "Hospitality Digital Marketing (Full Stack)",
  defaultPropertyType = "Hotel / Boutique Lodge",
}: HospitalityAuditModalProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    propertyType: defaultPropertyType,
    city: "Lagos",
    phoneOrWhatsApp: "",
    websiteOrMapLink: "",
    serviceInterest: defaultService,
    biggestChallenge: "High OTA Commissions (Booking.com/Expedia eating 18-25%)",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.phoneOrWhatsApp) return;

    // Format professional WhatsApp message with all audited parameters
    const message = encodeURIComponent(
      `Hello ChyWeb Academy! I want to claim the Free 48-Hour Hospitality Audit & OTA Reduction Roadmap (₦150k Value).\n\n` +
      `🏨 Property / Business: ${formData.businessName}\n` +
      `🏷️ Category: ${formData.propertyType}\n` +
      `📍 City / State: ${formData.city}\n` +
      `📞 WhatsApp / Phone: ${formData.phoneOrWhatsApp}\n` +
      `🌐 Website / Maps: ${formData.websiteOrMapLink || "Will provide in chat"}\n` +
      `🎯 Primary Focus: ${formData.serviceInterest}\n` +
      `⚠️ #1 Growth Hurdle: ${formData.biggestChallenge}`
    );

    const waUrl = `https://wa.me/2349067623555?text=${message}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a1e64]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white border-2 border-slate-200/90 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(11,15,25,0.35)] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Top Urgency Ribbon */}
            <div className="bg-gradient-to-r from-[#0a1e64] via-[#1240e3] to-[#2258FF] text-white text-[11px] sm:text-xs font-black py-2.5 px-5 flex items-center justify-between border-b border-white/15 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-amber-300 uppercase tracking-wider font-mono font-bold">₦150,000 Audit Waived 100%</span>
                <span className="hidden sm:inline text-white/60">•</span>
                <span className="hidden sm:inline text-white/90">Free 48-Hour Property Diagnosis</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden md:flex items-center gap-1 text-white/80 text-[10px]">
                  <Clock size={12} className="text-amber-300" />
                  <span>3 Slots Per City This Month</span>
                </span>
                <button
                  onClick={onClose}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Modal Body: Split 2-Column Layout */}
            <div className="overflow-y-auto flex-1">
              {!submitted ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
                  {/* LEFT COLUMN: Sleek Value Sidebar (4 Cols) */}
                  <div className="lg:col-span-4 bg-gradient-to-br from-[#2258FF] via-[#1240e3] to-[#091b5c] text-white p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                    {/* Background image overlay */}
                    <img
                      src="/images/luxury_hotel_suite.jpg"
                      alt="Luxury Suite"
                      className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none"
                    />

                    {/* Ambient Glows */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 space-y-5">
                      <div>
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-black uppercase tracking-wider mb-2.5">
                          <Sparkles size={11} className="text-amber-300" />
                          <span>Zero Risk • 100% Free</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-black !text-white leading-tight" style={{ color: "#ffffff" }}>
                          Turn Empty Rooms Into Direct Bookings
                        </h2>
                        <p className="text-white/80 text-xs mt-1.5 leading-snug">
                          Lock in your 48-Hour Property Audit. We diagnose booking leaks and OTA commission waste.
                        </p>
                      </div>

                      {/* 3 Streamlined Value Chips */}
                      <div className="space-y-2">
                        <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-amber-300 flex-shrink-0" />
                            <span className="text-xs font-bold text-white">Funnel & Speed Audit</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/20 px-1.5 py-0.5 rounded">₦50k</span>
                        </div>

                        <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-emerald-300 flex-shrink-0" />
                            <span className="text-xs font-bold text-white">OTA Commission Cut Plan</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-400/20 px-1.5 py-0.5 rounded">₦50k</span>
                        </div>

                        <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={15} className="text-cyan-300 flex-shrink-0" />
                            <span className="text-xs font-bold text-white">AEO/AI Search Check</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-400/20 px-1.5 py-0.5 rounded">₦50k</span>
                        </div>
                      </div>
                    </div>

                    {/* Trust footer on left */}
                    <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-white/80">
                      <div className="flex items-center gap-1 text-amber-300">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} className="fill-amber-400" />
                          ))}
                        </div>
                        <span className="font-bold text-white ml-1">4.98★</span>
                      </div>
                      <span className="text-white/70">380+ Audits Done</span>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: The High-Converting Short Form (8 Cols - Main Attraction) */}
                  <div className="lg:col-span-8 bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Section 1: Business Identity */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
                            <Building size={14} className="text-[#2258FF]" />
                            <span>Property / Business Name <span className="text-rose-500">*</span></span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g., Eko Pearl Suites or Lekki Bistro"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-xs sm:text-sm placeholder:text-slate-400 focus:border-[#2258FF] focus:ring-4 focus:ring-[#2258FF]/10 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-400 transition-all outline-none"
                          />
                        </div>

                        <div>
                          <LuxurySelect
                            label="Property Category"
                            icon={<Target size={14} className="text-amber-500" />}
                            value={formData.propertyType}
                            onChange={(val) => setFormData({ ...formData, propertyType: val })}
                            options={PROPERTY_CATEGORIES}
                            required
                          />
                        </div>
                      </div>

                      {/* Section 2: Location & WhatsApp Direct */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
                            <MapPin size={14} className="text-emerald-600" />
                            <span>City / State in Nigeria <span className="text-rose-500">*</span></span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Lagos (Victoria Island), Abuja, Port Harcourt"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-xs sm:text-sm placeholder:text-slate-400 focus:border-[#2258FF] focus:ring-4 focus:ring-[#2258FF]/10 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-400 transition-all outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
                            <Phone size={14} className="text-emerald-600" />
                            <span>WhatsApp / Phone Number <span className="text-rose-500">*</span></span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="0906 762 3555"
                            value={formData.phoneOrWhatsApp}
                            onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-xs sm:text-sm placeholder:text-slate-400 focus:border-[#2258FF] focus:ring-4 focus:ring-[#2258FF]/10 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-400 transition-all outline-none"
                          />
                        </div>
                      </div>

                      {/* Section 3: Website URL & Focus Area */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
                            <Globe size={14} className="text-[#2258FF]" />
                            <span>Website or Google Maps Link</span>
                          </label>
                          <input
                            type="text"
                            placeholder="https://... or Google Maps Profile"
                            value={formData.websiteOrMapLink}
                            onChange={(e) => setFormData({ ...formData, websiteOrMapLink: e.target.value })}
                            className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-xs sm:text-sm placeholder:text-slate-400 focus:border-[#2258FF] focus:ring-4 focus:ring-[#2258FF]/10 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-400 transition-all outline-none"
                          />
                        </div>

                        <div>
                          <LuxurySelect
                            label="Primary Focus Area"
                            icon={<Zap size={14} className="text-amber-500" />}
                            value={formData.serviceInterest}
                            onChange={(val) => setFormData({ ...formData, serviceInterest: val })}
                            options={FOCUS_AREAS}
                          />
                        </div>
                      </div>

                      {/* Section 4: #1 Growth Hurdle */}
                      <div>
                        <LuxurySelect
                          label="What is your #1 growth hurdle right now?"
                          icon={<AlertTriangle size={14} className="text-rose-500" />}
                          value={formData.biggestChallenge}
                          onChange={(val) => setFormData({ ...formData, biggestChallenge: val })}
                          options={GROWTH_HURDLES}
                        />
                      </div>

                      {/* Submit Action Block */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#2258FF] via-[#1d4be8] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0c33be] text-white font-black text-sm sm:text-base shadow-[0_12px_32px_rgba(34,88,255,0.32)] transition-all flex items-center justify-center gap-2.5 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                        >
                          <Send size={18} />
                          <span>Claim Free ₦150k Audit & Roadmap on WhatsApp →</span>
                        </button>

                        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-500 font-medium">
                          <span className="flex items-center gap-1 text-emerald-700 font-bold">
                            <ShieldCheck size={14} /> 100% Free
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-600">
                            <Lock size={12} className="text-[#2258FF]" /> No Obligation
                          </span>
                          <span>•</span>
                          <span className="text-slate-800 font-semibold">Direct WhatsApp: 0906 762 3555</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                /* SUCCESS SCREEN */
                <div className="p-8 sm:p-14 text-center bg-[#FAF8F5] my-auto">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <CheckCircle2 size={44} />
                  </div>

                  <span className="px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3 inline-block">
                    Audit Dispatched Successfully
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 leading-tight">
                    Your ₦150,000 Audit Request Has Been Created!
                  </h3>

                  <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
                    We have generated your custom audit request for <strong>{formData.businessName}</strong>. A dedicated WhatsApp chat has been prepared for our Senior Hospitality Growth Director.
                  </p>

                  <div className="max-w-md mx-auto p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6 text-left text-xs space-y-1.5 text-slate-700">
                    <div><strong>Property:</strong> {formData.businessName} ({formData.city})</div>
                    <div><strong>Focus:</strong> {formData.serviceInterest}</div>
                    <div><strong>WhatsApp:</strong> {formData.phoneOrWhatsApp}</div>
                    <div className="text-emerald-600 font-bold pt-1">✓ 48-Hour Turnaround Confirmed</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/2349067623555?text=${encodeURIComponent(
                        `Hello ChyWeb Academy! I just requested my Free 48-Hour Hospitality Audit for ${formData.businessName} in ${formData.city}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Phone size={16} />
                      <span>Open WhatsApp Chat Directly</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
