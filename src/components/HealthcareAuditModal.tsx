"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Send,
  Clock,
  Activity,
  MapPin,
  Phone,
  Globe,
  AlertTriangle,
  Lock,
  HeartPulse,
  Building,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LuxurySelect from "@/components/LuxurySelect";

interface HealthcareAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultFacilityType?: string;
}

const FACILITY_TYPES = [
  { label: "Multi-Department Private Hospital", value: "Multi-Department Hospital", badge: "Hospital" },
  { label: "Private Clinic / Specialist Practice", value: "Private Clinic / Specialist Practice", badge: "Popular" },
  { label: "Community or Digital Pharmacy", value: "Pharmacy (Electronic Regs 2026)", badge: "Pharmacy" },
  { label: "Diagnostic, Imaging or Laboratory Center", value: "Diagnostic & Lab Center" },
  { label: "Telemedicine Platform / HealthTech Startup", value: "Telemedicine Platform" },
  { label: "Dental / Eye / Maternity Specialist Center", value: "Specialty Medical Center" },
];

const LOCATIONS = [
  { label: "Lagos (Island - Ikoyi / VI / Lekki)", value: "Lagos Island / Lekki" },
  { label: "Lagos (Mainland - Ikeja / Surulere / Yaba)", value: "Lagos Mainland" },
  { label: "Abuja (Maitama / Wuse 2 / Garki / Jabi)", value: "Abuja FCT" },
  { label: "Port Harcourt / Rivers State", value: "Port Harcourt / Rivers" },
  { label: "Ibadan / Oyo State", value: "Ibadan / Oyo" },
  { label: "Other State / City in Nigeria", value: "Other Nigerian State" },
];

const FOCUS_AREAS = [
  { label: "Urgent Patient Discovery & Local SEO", value: "Urgent Patient Discovery & Local SEO", badge: "High ROI" },
  { label: "High-Trust Healthcare Web Design & Fast Booking", value: "Healthcare Web Design & Booking", badge: "Trust First" },
  { label: "Symptom & Condition-Based SEO (AEO/GEO)", value: "Symptom-Based SEO & AI Citation", badge: "AI Ready" },
  { label: "Full Hospital Digital Marketing & Patient Acquisition", value: "Full Hospital Marketing Suite" },
  { label: "Compliant Pharmacy Visibility & Delivery Promotion", value: "Compliant Pharmacy Visibility" },
];

const BIGGEST_HURDLES = [
  { label: "Invisible on Google Maps when patients search 'near me'", value: "Zero Google Maps visibility for near me", badge: "Lost Patients" },
  { label: "Slow or confusing mobile website losing patient bookings", value: "Slow site causes booking abandonment", badge: "Trust Leak" },
  { label: "Only ranking for facility name, not symptoms or conditions", value: "Invisible for symptom/condition searches", badge: "Low Volume" },
  { label: "Concerns regarding NDPA compliance & medical advertising codes", value: "NDPA and advertising regulatory worries", badge: "Compliance" },
  { label: "Tired of generic agencies that treat medical care like retail", value: "Generic agency doesn't understand healthcare", badge: "Disjointed" },
];

export default function HealthcareAuditModal({
  isOpen,
  onClose,
  defaultService = "Urgent Patient Discovery & Local SEO",
  defaultFacilityType = "Private Clinic / Specialist Practice",
}: HealthcareAuditModalProps) {
  const [formData, setFormData] = useState({
    facilityName: "",
    facilityType: defaultFacilityType,
    location: LOCATIONS[0].value,
    serviceInterest: defaultService,
    biggestHurdle: BIGGEST_HURDLES[0].value,
    phoneOrWhatsApp: "",
    websiteOrMapLink: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `🏥 *NEW HEALTHCARE MARKETING & WEB AUDIT REQUEST*\n\n` +
      `🩺 Facility Name: ${formData.facilityName}\n` +
      `🏷️ Facility Type: ${formData.facilityType}\n` +
      `📍 City / State: ${formData.location}\n` +
      `🎯 Service Focus: ${formData.serviceInterest}\n` +
      `⚠️ Primary Hurdle: ${formData.biggestHurdle}\n` +
      `📞 WhatsApp / Contact: ${formData.phoneOrWhatsApp}\n` +
      `🌐 Website or Google Maps: ${formData.websiteOrMapLink || "Will provide in chat"}`
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07192f]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white border-2 border-slate-200/90 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(7,25,47,0.35)] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Ribbon */}
            <div className="bg-gradient-to-r from-[#072448] via-[#0284c7] to-[#0d9488] text-white text-[11px] sm:text-xs font-black py-2.5 px-5 flex items-center justify-between border-b border-white/15 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span className="text-amber-300 uppercase tracking-wider font-mono font-bold">₦150,000 Clinical Audit Waived</span>
                <span className="hidden sm:inline text-white/60">•</span>
                <span className="hidden sm:inline text-white/90">Patient Discovery & NDPA Check</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden md:flex items-center gap-1 text-white/80 text-[10px]">
                  <Clock size={12} className="text-amber-300" />
                  <span>Confidential Healthcare Evaluation</span>
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

            <div className="overflow-y-auto flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
                {/* Value Column */}
                <div className="lg:col-span-4 bg-gradient-to-br from-[#072448] via-[#083b6f] to-[#042f2e] text-white p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="relative z-10 space-y-5">
                    <div>
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-black uppercase tracking-wider mb-2.5">
                        <ShieldCheck size={11} className="text-cyan-300" />
                        <span>NDPA & PCN 2026 Compliant</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black !text-white leading-tight">
                        Get Found by Patients Searching for Care Right Now
                      </h2>
                      <p className="text-white/80 text-xs mt-1.5 leading-snug">
                        Patients in pain don&apos;t wait, they search. We diagnose whether your facility appears when it matters most.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-cyan-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">Google Maps 3-Pack Scan</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-400/20 px-1.5 py-0.5 rounded">₦50k</span>
                      </div>

                      <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-emerald-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">Symptom Search Footprint</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-400/20 px-1.5 py-0.5 rounded">₦50k</span>
                      </div>

                      <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-amber-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">Mobile Booking Speed Check</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/20 px-1.5 py-0.5 rounded">₦50k</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-5 border-t border-white/15 mt-4">
                    <div className="flex items-center gap-2 text-[11px] text-white/90 font-medium">
                      <Lock size={12} className="text-cyan-400" />
                      <span>Data Privacy Aligned with NDPA</span>
                    </div>
                  </div>
                </div>

                {/* Form Column */}
                <div className="lg:col-span-8 p-6 sm:p-8 bg-slate-50 flex flex-col justify-center">
                  {submitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900">Audit Request Initiated!</h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Your WhatsApp has been loaded with your medical facility information. Our healthcare marketing director will review your search footprint promptly.
                      </p>
                      <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href="https://wa.me/2349067623555"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold shadow-lg shadow-cyan-600/20 transition-all"
                        >
                          Open WhatsApp Chat Directly
                        </a>
                        <button
                          onClick={handleReset}
                          className="px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-bold transition-all"
                        >
                          Close Window
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            Hospital / Clinic / Pharmacy Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Activity size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. Lagoon Hospital / Reddington"
                              value={formData.facilityName}
                              onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 shadow-sm"
                            />
                          </div>
                        </div>

                        <LuxurySelect
                          label="Facility Type"
                          icon={<Building size={16} />}
                          value={formData.facilityType}
                          onChange={(val) => setFormData({ ...formData, facilityType: val })}
                          options={FACILITY_TYPES}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <LuxurySelect
                          label="Location / State"
                          icon={<MapPin size={16} />}
                          value={formData.location}
                          onChange={(val) => setFormData({ ...formData, location: val })}
                          options={LOCATIONS}
                        />

                        <LuxurySelect
                          label="Service You Need Most"
                          icon={<HeartPulse size={16} />}
                          value={formData.serviceInterest}
                          onChange={(val) => setFormData({ ...formData, serviceInterest: val })}
                          options={FOCUS_AREAS}
                        />
                      </div>

                      <LuxurySelect
                        label="#1 Biggest Patient Acquisition Hurdle"
                        icon={<AlertTriangle size={16} />}
                        value={formData.biggestHurdle}
                        onChange={(val) => setFormData({ ...formData, biggestHurdle: val })}
                        options={BIGGEST_HURDLES}
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            WhatsApp / Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="tel"
                              required
                              placeholder="0801 234 5678"
                              value={formData.phoneOrWhatsApp}
                              onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 shadow-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            Website or Google Maps Link
                          </label>
                          <div className="relative">
                            <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              placeholder="e.g. clinic.com.ng or Google Maps"
                              value={formData.websiteOrMapLink}
                              onChange={(e) => setFormData({ ...formData, websiteOrMapLink: e.target.value })}
                              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0284c7] hover:from-[#0369a1] hover:to-[#0284c7] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-cyan-700/25 hover:shadow-cyan-700/40 transition-all cursor-pointer"
                      >
                        <Send size={18} />
                        <span>Claim Free Healthcare Marketing & Web Audit →</span>
                      </button>

                      <p className="text-[11px] text-center text-slate-500 mt-2">
                        100% Confidential • Zero Obligation • Free Review by Certified Strategists
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
