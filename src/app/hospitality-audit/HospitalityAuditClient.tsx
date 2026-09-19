"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  Send,
  Building,
  MapPin,
  Phone,
  Globe,
  Target,
  Zap,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Lock,
  HelpCircle,
  Flame,
} from "lucide-react";
import LuxurySelect from "@/components/LuxurySelect";

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

export default function HospitalityAuditClient() {
  const [formData, setFormData] = useState({
    businessName: "",
    propertyType: "Hotel / Boutique Lodge",
    city: "Lagos",
    phoneOrWhatsApp: "",
    websiteOrMapLink: "",
    serviceInterest: "Local SEO, AEO & AI Search (Hotel)",
    biggestChallenge: "High OTA Commissions (Booking.com/Expedia eating 18-25%)",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.phoneOrWhatsApp) return;

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

  const faqs = [
    {
      q: "Is this audit genuinely 100% free with zero catch?",
      a: "Yes. There is no credit card required and no sales pressure. We believe in providing immense value upfront. When you see the precision of our diagnosis and how much revenue you can recover, many property owners choose to hire us to implement the roadmap — but you are under zero obligation.",
    },
    {
      q: "What exact deliverables will I receive within 48 hours?",
      a: "You receive three specific deliverables: (1) A Technical Funnel & Mobile Speed Teardown showing why visitors abandon, (2) An OTA Commission Cut Strategy showing how to redirect guests into direct bookings, and (3) An AI Search & Google Maps Visibility Report showing your rankings on Google 3-Pack, ChatGPT, and Gemini.",
    },
    {
      q: "Can I request this for a restaurant or serviced apartment shortlet?",
      a: "Absolutely. Our hospitality specialists audit hotels, boutique lodges, multi-unit shortlets in Ikoyi/Lekki/Maitama, and upscale restaurants across Nigeria.",
    },
    {
      q: "Do you need password access to our booking engine or PMS?",
      a: "No. We perform an external guest-journey and technical search audit from the public eye and search engines, simulating real guest booking actions. We will never ask for your passwords or private credentials.",
    },
  ];

  const searchTicker = [
    "🏨 'hotels in Victoria Island with 24hr light & pool'",
    "🍽️ 'best rooftop restaurant in Lekki for date night'",
    "🌴 'private weekend resort near Lagos for couples'",
    "🛎️ 'executive hotel in Maitama Abuja with fast WiFi'",
    "🥂 'romantic dinner spot in Ikeja GRA tonight'",
    "⭐ 'safe boutique suites in Ikoyi with breakfast'",
    "📈 'cut Booking.com commissions with direct hotel bookings'",
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] min-h-screen text-[#0b0f19] flex flex-col font-sans selection:bg-[#2258FF] selection:text-white">
      {/* Decorative Orbs - ChyWeb Brand Blue & Golden Amber */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2258FF]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-amber-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/8 blur-[120px] pointer-events-none" />

      <Header />

      {/* Live Marquee Ticker of Real Searches - Vibrant ChyWeb Electric Blue */}
      <div className="w-full bg-[#2258FF] text-white py-2.5 overflow-hidden border-b border-blue-600 relative z-20 shadow-sm mt-16 sm:mt-20">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap text-xs font-semibold">
          <span className="flex items-center gap-2 text-amber-300 font-black">
            <Flame size={14} className="animate-pulse" />
            LIVE NIGERIAN SEARCH DEMAND:
          </span>
          {searchTicker.concat(searchTicker).map((query, idx) => (
            <span key={idx} className="flex items-center gap-2 text-white/90">
              <span>{query}</span>
              <span className="text-blue-300">•</span>
            </span>
          ))}
        </div>
      </div>

      <main className="flex-grow pt-8 sm:pt-12 pb-20 sm:pb-28 relative z-10">
        {/* Breadcrumb & Quick Anchor */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-[#2258FF] transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href="/hospitality-digital-marketing-agency-nigeria" className="hover:text-[#2258FF] transition-colors">
              Hospitality Agency
            </Link>
            <ChevronRight size={13} />
            <span className="text-slate-900 font-bold">Free 48-Hour Property Audit</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs font-bold mb-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#2258FF]/40 transition-colors">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-slate-900 font-black tracking-wide uppercase text-[11px] sm:text-xs">
              Zero Risk • 100% Done-For-You Analysis
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              ₦150,000 Waived 100%
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-5">
            Turn Empty Rooms & Tables Into{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                Direct Bookings
              </span>
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3.5 sm:h-4 text-amber-400/80 -z-10 overflow-visible"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 14C80 4 220 3 297 12"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Lock in your <strong>Free 48-Hour Property Audit</strong>. We will uncover exactly where your booking funnel is leaking, how much you are losing to OTAs, and how to rank #1 in Google Maps and AI search.
          </p>
        </div>

        {/* Centerpiece 2-Column Luxury Form Canvas */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="bg-white border-2 border-slate-200/90 rounded-[32px] sm:rounded-[40px] shadow-[0_30px_90px_rgba(15,23,42,0.12)] overflow-hidden">
            {/* Top Urgency Ribbon */}
            <div className="bg-gradient-to-r from-[#0a1e64] via-[#1240e3] to-[#2258FF] text-white text-xs sm:text-sm font-black py-3 px-6 flex items-center justify-between border-b border-white/15">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-amber-300 uppercase tracking-wider font-mono font-bold">₦150,000 Audit Waived 100%</span>
                <span className="hidden sm:inline text-white/50">•</span>
                <span className="hidden sm:inline text-white/90">Free 48-Hour Comprehensive Property Diagnosis</span>
              </div>

              <div className="flex items-center gap-2 text-white/90 text-xs font-mono font-semibold">
                <Clock size={14} className="text-amber-300" />
                <span className="hidden md:inline">Current Capacity:</span>
                <span className="text-amber-300 font-black">3 Audits Per City / Mo</span>
              </div>
            </div>

            {/* Split Body */}
            {!submitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
                {/* LEFT COLUMN: Sleek Value Sidebar (4 Cols) */}
                <div className="lg:col-span-4 bg-gradient-to-br from-[#2258FF] via-[#1240e3] to-[#0a1b5c] text-white p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
                  {/* Photo Overlay */}
                  <img
                    src="/images/luxury_hotel_suite.jpg"
                    alt="Luxury Hospitality Suite"
                    className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay pointer-events-none"
                  />

                  {/* Ambient Glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/25 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 space-y-5">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-black uppercase tracking-wider mb-2.5">
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
                      <div className="px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-amber-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">Funnel & Speed Audit</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded">₦50k</span>
                      </div>

                      <div className="px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-emerald-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">OTA Commission Cut Plan</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded">₦50k</span>
                      </div>

                      <div className="px-3.5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-cyan-300 flex-shrink-0" />
                          <span className="text-xs font-bold text-white">AEO/AI Search Check</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded">₦50k</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Footer */}
                  <div className="relative z-10 pt-5 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="fill-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-white">4.98★</span>
                    </div>
                    <span className="text-white/70 text-[11px]">380+ Audits Done</span>
                  </div>
                </div>

                {/* RIGHT COLUMN: The High-Converting Short Form (8 Cols - Main Attraction) */}
                <div className="lg:col-span-8 bg-[#FAF8F5] p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Lock size={12} className="text-[#2258FF]" /> Confidential Property Submission
                      </span>
                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Takes ~90 seconds
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Property Name & Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm placeholder:text-slate-400 focus:border-[#2258FF] focus:ring-4 focus:ring-[#2258FF]/10 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-400 transition-all outline-none"
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

                    {/* Row 2: Location & WhatsApp Direct */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black text-slate-900 mb-1.5 flex items-center gap-1.5">
                          <MapPin size={14} className="text-emerald-600" />
                          <span>City / State in Nigeria <span className="text-rose-500">*</span></span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Lagos"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm placeholder:text-slate-400 focus:border-[#2258FF] focus:ring-4 focus:ring-[#2258FF]/10 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-400 transition-all outline-none"
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
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm placeholder:text-slate-400 focus:border-[#2258FF] focus:ring-4 focus:ring-[#2258FF]/10 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-400 transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Row 3: Website & Primary Focus Area */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 font-semibold text-sm placeholder:text-slate-400 focus:border-[#2258FF] focus:ring-4 focus:ring-[#2258FF]/10 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-slate-400 transition-all outline-none"
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

                    {/* Row 4: #1 Growth Hurdle */}
                    <div>
                      <LuxurySelect
                        label="What is your #1 growth hurdle right now?"
                        icon={<AlertTriangle size={14} className="text-rose-500" />}
                        value={formData.biggestChallenge}
                        onChange={(val) => setFormData({ ...formData, biggestChallenge: val })}
                        options={GROWTH_HURDLES}
                      />
                    </div>

                    {/* Submit Action */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0c33be] text-white font-black text-sm sm:text-base shadow-[0_12px_28px_rgba(34,88,255,0.3)] transition-all flex items-center justify-center gap-2.5 hover:scale-[1.01] cursor-pointer"
                      >
                        <Send size={18} />
                        <span>Claim Free ₦150k Audit & Roadmap on WhatsApp →</span>
                      </button>

                      <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1 text-emerald-700 font-bold">
                          <ShieldCheck size={14} /> 100% Free
                        </span>
                        <span>•</span>
                        <span>No Obligation</span>
                        <span>•</span>
                        <span className="text-slate-700 font-semibold">Direct WhatsApp strategy line: 0906 762 3555</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              /* SUBMISSION CONFIRMATION SCREEN */
              <div className="p-8 sm:p-16 text-center bg-[#FAF8F5]">
                <div className="w-20 h-20 rounded-3xl bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <CheckCircle2 size={44} />
                </div>

                <span className="px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3 inline-block">
                  Audit Dispatched Successfully
                </span>

                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3 leading-tight">
                  Your ₦150,000 Audit Request Has Been Created!
                </h3>

                <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                  We have generated your custom audit request for <strong>{formData.businessName}</strong>. A dedicated WhatsApp chat has been prepared for our Senior Hospitality Growth Director.
                </p>

                <div className="max-w-md mx-auto p-5 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8 text-left text-xs sm:text-sm space-y-2 text-slate-700">
                  <div><strong>Property:</strong> {formData.businessName} ({formData.city})</div>
                  <div><strong>Primary Focus:</strong> {formData.serviceInterest}</div>
                  <div><strong>Growth Hurdle:</strong> {formData.biggestChallenge}</div>
                  <div><strong>WhatsApp Line:</strong> {formData.phoneOrWhatsApp}</div>
                  <div className="text-emerald-600 font-bold pt-1.5 border-t border-slate-100">
                    ✓ 48-Hour Turnaround Confirmed by ChyWeb Strategy Team
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/2349067623555?text=${encodeURIComponent(
                      `Hello ChyWeb Academy! I just requested my Free 48-Hour Hospitality Audit for ${formData.businessName} in ${formData.city}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm sm:text-base transition-all cursor-pointer"
                  >
                    Submit Another Property
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4-Step Process Strip */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-[#2258FF] uppercase tracking-wider">Transparent Protocol</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">What Happens in the Next 48 Hours</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-mono font-black text-[#2258FF] bg-blue-50 px-2.5 py-1 rounded-md">HOUR 0 - 6</span>
              <h4 className="font-black text-slate-900 text-sm mt-3 mb-1">Receipt & Intake</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our Senior Hospitality Director acknowledges your request via WhatsApp and clarifies your current OTA commission rate.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-mono font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">HOUR 6 - 24</span>
              <h4 className="font-black text-slate-900 text-sm mt-3 mb-1">Funnel & Speed Teardown</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We test your mobile load speed, check booking drop-offs, and inspect your Google Business Profile & AI Overviews.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-mono font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">HOUR 24 - 36</span>
              <h4 className="font-black text-slate-900 text-sm mt-3 mb-1">Roadmap Synthesis</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We craft a step-by-step PDF roadmap outlining how many millions you can reclaim from OTAs each month.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-mono font-black text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">HOUR 36 - 48</span>
              <h4 className="font-black text-slate-900 text-sm mt-3 mb-1">Private WhatsApp Delivery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your full audit is delivered directly to your WhatsApp with a 15-minute voice note breakdown. Zero spam, zero pressure.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-[#2258FF] uppercase tracking-wider">Frequently Asked Questions</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Audit Details & Clarity</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-black text-slate-900 text-sm sm:text-base mb-2 flex items-start gap-2">
                  <HelpCircle size={18} className="text-[#2258FF] flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
