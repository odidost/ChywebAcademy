"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Send,
  Clock,
  Building2,
  MapPin,
  Phone,
  Globe,
  AlertTriangle,
  Lock,
  Star,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LuxurySelect from "@/components/LuxurySelect";

interface RealEstateAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultPipelineStage?: string;
}

const CORRIDORS = [
  { label: "Lekki Phase 1 / Ikoyi / Victoria Island (Lagos)", value: "Lekki Phase 1 / Ikoyi / VI" },
  { label: "Lekki Phase 2 / Chevron / Orchid Corridor", value: "Lekki Phase 2 / Chevron Corridor" },
  { label: "Epe / Ibeju-Lekki / Free Trade Zone", value: "Epe / Ibeju-Lekki Corridor", badge: "High Growth" },
  { label: "Abuja (Maitama / Wuse 2 / Guzape / Jabi)", value: "Abuja Prime Corridors" },
  { label: "Port Harcourt (GRA / Peter Odili / Airport Rd)", value: "Port Harcourt Prime" },
  { label: "Other Emerging Nigerian City / Corridor", value: "Other Corridor" },
];

const PIPELINE_STAGES = [
  { label: "Pre-Launch / Off-Plan Development", value: "Pre-Launch / Off-Plan Development", badge: "Priority" },
  { label: "Active Construction & Unit Sales", value: "Active Construction & Unit Sales" },
  { label: "Multi-Project Pipeline (3+ Developments)", value: "Multi-Project Pipeline", badge: "Enterprise" },
  { label: "Real Estate Brokerage / Agency Listings", value: "Brokerage / Agency Listings" },
  { label: "Individual Realtor / Investment Advisor", value: "Individual Realtor" },
];

const FOCUS_AREAS = [
  { label: "Developer Pre-Launch & Off-Plan SEO", value: "Developer Pre-Launch & Off-Plan SEO", badge: "High Pipeline" },
  { label: "High-Converting Real Estate Web Design", value: "High-Converting Real Estate Web Design", badge: "Speed-to-Lead" },
  { label: "Full Developer Digital Growth (SEO + Web + AEO)", value: "Full Developer Growth Suite", badge: "Complete" },
  { label: "Local Google 3-Pack & AI Search (AEO/GEO)", value: "Local SEO & AI Search" },
  { label: "Pre-Launch Sprint (8-12 Weeks)", value: "Pre-Launch Sprint" },
];

const BIGGEST_HURDLES = [
  { label: "Losing pre-sale buyers to rival developments showing up first", value: "Losing buyers to rival developments on Google/AI", badge: "Lost Sales" },
  { label: "Slow website or clunky forms losing mobile leads", value: "Slow site losing mobile property inquiries", badge: "Conversion Leak" },
  { label: "Zero search visibility before project is physically completed", value: "Zero search visibility before physical completion", badge: "Off-Plan Friction" },
  { label: "Slow lead response time (taking hours instead of 5 minutes)", value: "Slow lead response window", badge: "10x Leakage" },
  { label: "Tired of generic agencies that don't know off-plan real estate", value: "Generic agency doesn't understand off-plan sales", badge: "Frustrated" },
];

export default function RealEstateAuditModal({
  isOpen,
  onClose,
  defaultService = "Developer Pre-Launch & Off-Plan SEO",
  defaultPipelineStage = "Pre-Launch / Off-Plan Development",
}: RealEstateAuditModalProps) {
  const [formData, setFormData] = useState({
    developerName: "",
    projectName: "",
    corridor: CORRIDORS[1].value,
    pipelineStage: defaultPipelineStage,
    serviceInterest: defaultService,
    biggestHurdle: BIGGEST_HURDLES[0].value,
    phoneOrWhatsApp: "",
    websiteOrBrochure: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `🏗️ *NEW REAL ESTATE AUDIT REQUEST - CHYWEB ACADEMY*\n\n` +
      `🏢 Developer / Agency: ${formData.developerName}\n` +
      `🏘️ Project / Development: ${formData.projectName || "Active Pipeline"}\n` +
      `📍 Target Corridor: ${formData.corridor}\n` +
      `📊 Pipeline Stage: ${formData.pipelineStage}\n` +
      `🎯 Service Interest: ${formData.serviceInterest}\n` +
      `⚠️ #1 Hurdle: ${formData.biggestHurdle}\n` +
      `📞 WhatsApp / Phone: ${formData.phoneOrWhatsApp}\n` +
      `🌐 Website / Brochure: ${formData.websiteOrBrochure || "Will share in chat"}`
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
            className="fixed inset-0 bg-[#06101e]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white border-2 border-slate-200/90 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(6,16,30,0.35)] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Urgency Ribbon */}
            <div className="bg-gradient-to-r from-[#061e38] via-[#093554] to-[#047857] text-white text-[11px] sm:text-xs font-black py-2.5 px-5 flex items-center justify-between border-b border-white/15 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-amber-300 uppercase tracking-wider font-mono font-bold">₦200,000 Project Audit Waived</span>
                <span className="hidden sm:inline text-white/60">•</span>
                <span className="hidden sm:inline text-white/90">Free Project & Lead Flow Diagnosis</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden md:flex items-center gap-1 text-white/80 text-[10px]">
                  <Clock size={12} className="text-amber-300" />
                  <span>Only 4 Project Audits Open This Week</span>
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
                {/* Left Column: Value Prop */}
                <div className="lg:col-span-4 bg-gradient-to-br from-[#061e38] via-[#0b2d4f] to-[#022c22] text-white p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                  <img
                    src="/images/real_estate_developer_lagos.jpg"
                    alt="Luxury Development"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
                  />

                  <div className="relative z-10 space-y-5">
                    <div>
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-black uppercase tracking-wider mb-2.5">
                        <Sparkles size={11} className="text-amber-300" />
                        <span>Zero Risk • 100% Free</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black !text-white leading-tight">
                        Get Your Projects Found Before Handover
                      </h2>
                      <p className="text-white/80 text-xs mt-1.5 leading-snug">
                        Lagos absorbs 475,000 new residents a year. We diagnose where buyers are finding competing developers instead of you.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-amber-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">Corridor Demand & Search Map</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/20 px-1.5 py-0.5 rounded">₦65k</span>
                      </div>

                      <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-emerald-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">Speed-to-Lead Mobile Audit</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-400/20 px-1.5 py-0.5 rounded">₦60k</span>
                      </div>

                      <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-cyan-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">AEO/AI Citation Check</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-400/20 px-1.5 py-0.5 rounded">₦75k</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-5 border-t border-white/15 mt-4">
                    <div className="flex items-center gap-2 text-[11px] text-white/90 font-medium">
                      <Lock size={12} className="text-emerald-400" />
                      <span>Strict Project Confidentiality & NDA</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-8 p-6 sm:p-8 bg-slate-50 flex flex-col justify-center">
                  {submitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-2xl font-black text-slate-900">Audit Request Initiated!</h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto">
                        Your WhatsApp has been loaded with your project details. If your chat didn’t open automatically, reach us directly below.
                      </p>
                      <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href="https://wa.me/2349067623555"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all"
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
                            Developer or Agency Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. Haven Homes / Landwey"
                              value={formData.developerName}
                              onChange={(e) => setFormData({ ...formData, developerName: e.target.value })}
                              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            Project Name / Phase (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Azura Court Lekki Phase 2"
                            value={formData.projectName}
                            onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <LuxurySelect
                          label="Target Corridor / Location"
                          icon={<MapPin size={16} />}
                          value={formData.corridor}
                          onChange={(val) => setFormData({ ...formData, corridor: val })}
                          options={CORRIDORS}
                        />

                        <LuxurySelect
                          label="Pipeline Stage"
                          icon={<Zap size={16} />}
                          value={formData.pipelineStage}
                          onChange={(val) => setFormData({ ...formData, pipelineStage: val })}
                          options={PIPELINE_STAGES}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <LuxurySelect
                          label="Service You Need Most"
                          icon={<Sparkles size={16} />}
                          value={formData.serviceInterest}
                          onChange={(val) => setFormData({ ...formData, serviceInterest: val })}
                          options={FOCUS_AREAS}
                        />

                        <LuxurySelect
                          label="#1 Current Growth Hurdle"
                          icon={<AlertTriangle size={16} />}
                          value={formData.biggestHurdle}
                          onChange={(val) => setFormData({ ...formData, biggestHurdle: val })}
                          options={BIGGEST_HURDLES}
                        />
                      </div>

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
                              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-800 mb-1">
                            Website or Brochure Link
                          </label>
                          <div className="relative">
                            <Globe size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                              type="text"
                              placeholder="e.g. chyweb.com.ng or Instagram"
                              value={formData.websiteOrBrochure}
                              onChange={(e) => setFormData({ ...formData, websiteOrBrochure: e.target.value })}
                              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#047857] via-[#059669] to-[#047857] hover:from-[#059669] hover:to-[#047857] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 transition-all cursor-pointer"
                      >
                        <Send size={18} />
                        <span>Claim Free Real Estate Project Audit →</span>
                      </button>

                      <p className="text-[11px] text-center text-slate-500 mt-2">
                        100% Free • No Obligation • Instant WhatsApp Delivery to Lead Strategist
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
