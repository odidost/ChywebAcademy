"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  HeartPulse,
  Search,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Building,
  ArrowRight,
  PhoneCall,
  Lock,
  Globe,
  Users,
  AlertTriangle,
  Megaphone,
  MapPin,
  Share2,
  Flame,
  Star,
  TrendingUp,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import HealthcareAuditModal from "@/components/HealthcareAuditModal";
import HealthcareVisibilityChecker from "@/components/HealthcareVisibilityChecker";
import HealthcareClusterNav from "@/components/HealthcareClusterNav";
import HealthcareMobileStickyBar from "@/components/HealthcareMobileStickyBar";

export default function HealthcareMarketingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Healthcare Digital Marketing (Full Stack)");
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const liveAppointments = [
    { title: "Urgent Pediatric Consultation", facility: "Specialist Children Clinic, Lekki", status: "Confirmed via Mobile", time: "Just now", patient: "Parent in Victoria Island" },
    { title: "Prescription Delivery Dispensing", facility: "Community Pharmacy, Maitama Abuja", status: "2026 E-Pharmacy Verified", time: "3 mins ago", patient: "Chronic Refill Order" },
    { title: "Cardiology Specialist Session", facility: "Multi-Department Hospital, Ikeja", status: "Booked via Google Maps", time: "6 mins ago", patient: "New Diagnostic Patient" },
    { title: "Emergency Maternity Intake", facility: "Maternity Care Centre, Port Harcourt", status: "Direct Phone Dispatch", time: "10 mins ago", patient: "Emergency Referral" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotificationIndex((prev) => (prev + 1) % liveAppointments.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [liveAppointments.length]);

  const openAudit = (service = "Healthcare Digital Marketing (Full Stack)") => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const searchTicker = [
    "🏥 'urgent care clinic near me open now Lekki'",
    "💊 'pharmacy delivering prescription medication tonight Abuja'",
    "🩺 'best pediatrician in Ikeja with online appointment booking'",
    "⚖️ 'NDPA compliant medical records & patient inquiry system'",
    "🌐 '2026 Electronic Pharmacy Regulations licensed digital dispensing'",
  ];

  const services = [
    {
      icon: <Globe className="text-[#2258FF]" size={24} />,
      title: "Healthcare Web Design",
      desc: "Fast, mobile-first websites built for how patients actually search under stress or urgency: clear service listings, easy appointment booking, and trust signals like doctor credentials, accreditations, and genuine patient reviews displayed prominently.",
      highlight: "Sub-second emergency load",
    },
    {
      icon: <Search className="text-[#2258FF]" size={24} />,
      title: "Healthcare SEO & AEO",
      desc: "Local and service-specific search optimization so your facility ranks for 'hospital near me', 'pediatric clinic Lagos', or '24-hour pharmacy Abuja', backed by entity SEO and Answer Engine Optimization (AEO) so patients asking AI assistants find you too.",
      highlight: "Google 3-Pack & AI citations",
    },
    {
      icon: <Megaphone className="text-[#2258FF]" size={24} />,
      title: "Compliant Paid Search Ads",
      desc: "Precision-targeted campaigns for high-intent searches, urgent care needs, specific specialties, or pharmacy services, built strictly within advertising guidelines that apply to healthcare and pharmaceutical marketing in Nigeria.",
      highlight: "High-intent patient acquisition",
    },
    {
      icon: <MapPin className="text-[#2258FF]" size={24} />,
      title: "Google Business Profile Optimization",
      desc: "Accurate operating hours, verified emergency location, specialty services, and consistent citations across directories like Nigeria Healthcare Directory, since Google Maps visibility is often the first thing an urgent patient sees.",
      highlight: "Maps emergency visibility",
    },
    {
      icon: <Share2 className="text-[#2258FF]" size={24} />,
      title: "Compliant Social Media & Patient Education",
      desc: "Content that builds trust and educates: health awareness posts, facility updates, consultant introductions, and patient-friendly information, managed with the clinical accuracy and care healthcare communication demands.",
      highlight: "Ethical medical branding",
    },
  ];

  const whoWeWorkWith = [
    {
      title: "Specialist & Group Clinics",
      desc: "From single-doctor practices to multi-specialty group clinics, we build visibility for the specific services and specialties that bring patients through your door.",
      badge: "Clinics",
      icon: <HeartPulse className="text-[#2258FF]" size={22} />,
    },
    {
      title: "Multi-Department Hospitals",
      desc: "Larger facilities with multiple departments and specialties need coordinated visibility across dozens of service lines simultaneously—from emergency care to specialist consultations, all findable and clearly communicated.",
      badge: "Hospitals",
      icon: <Building className="text-[#2258FF]" size={22} />,
    },
    {
      title: "Community & Online Pharmacies",
      desc: "With Nigeria's 2026 Electronic Pharmacy Regulations now governing online dispensing and requiring PCN registration for digital platforms, pharmacies need marketing that's both visible and fully compliant, covering local search and delivery promotion.",
      badge: "Pharmacies (2026 Regs)",
      icon: <Activity className="text-[#2258FF]" size={22} />,
    },
  ];

  const packages = [
    {
      name: "Clinic Starter",
      bestFor: "Single-doctor or small specialist clinics",
      price: "₦150,000 – ₦300,000",
      period: "per month",
      desc: "Essential local search and Google Maps optimization to capture patients in your immediate neighborhood.",
      features: [
        "Google Business Profile weekly optimization",
        "Basic local SEO for primary specialty",
        "Mobile-friendly website health & speed audit",
        "Patient review management workflow",
        "Monthly discovery and call tracking report",
      ],
      highlight: false,
    },
    {
      name: "Clinic Growth",
      bestFor: "Multi-specialty clinics with several service lines",
      price: "₦350,000 – ₦700,000",
      period: "per month",
      desc: "Complete digital growth engine with service-specific pages and compliant social media management.",
      features: [
        "Everything in Clinic Starter",
        "Full website design or performance refresh",
        "Service-specific SEO pages (Pediatrics, Dental, ObGyn)",
        "Compliant social media management & health awareness",
        "AEO structured schema for AI search visibility",
        "Monthly lead attribution & appointment metrics",
      ],
      highlight: true,
      badge: "Most Popular for Clinics",
    },
    {
      name: "Hospital / Multi-Department",
      bestFor: "Hospitals with multiple departments and specialties",
      price: "₦800,000 – ₦2,000,000+",
      period: "per month",
      desc: "Coordinated digital patient acquisition across all clinical departments and emergency services.",
      features: [
        "Everything in Clinic Growth",
        "Coordinated SEO across dozens of departments",
        "Compliant paid search for high-intent specialties",
        "Generative Engine Optimization (GEO) for AI comparisons",
        "Dedicated account strategist & hospital liaison",
        "NDPA data compliance monitoring across all forms",
      ],
      highlight: false,
    },
    {
      name: "Pharmacy Visibility",
      bestFor: "Single or multi-location community pharmacies",
      price: "₦200,000 – ₦500,000",
      period: "per month",
      desc: "Local search and delivery-service marketing compliant with 2026 Electronic Pharmacy Regulations.",
      features: [
        "Local SEO & Google Business Profile per branch",
        "Online prescription consultation & delivery promotion",
        "PCN 2026 compliant OTC product visibility",
        "Local 'pharmacy near me' 3-pack dominance",
        "Compliant paid ads within NAFDAC advertising guidelines",
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "Can you help us advertise prescription medications?",
      answer:
        "No, and any agency claiming otherwise is putting your facility at regulatory risk. Nigerian advertising rules strictly restrict direct-to-consumer marketing of prescription drugs. We focus on facility visibility, clinical services, over-the-counter offerings where applicable, and general health information rather than prescription drug promotion.",
    },
    {
      question: "How do you handle patient data and privacy in marketing campaigns?",
      answer:
        "We build every campaign with the Nigeria Data Protection Act (NDPA) in mind, avoiding the collection or use of sensitive medical records or condition history in public marketing databases, and ensuring inquiry forms have explicit data consent notices.",
    },
    {
      question: "How long does it take to see results for a clinic or hospital?",
      answer:
        "Google Business Profile and local SEO improvements can show movement within 4-8 weeks. Broader organic visibility and paid campaign results typically build over 2-4 months depending on your specialty, bed capacity, and local competition.",
    },
    {
      question: "Do you work with pharmacies specifically, given the new 2026 regulations?",
      answer:
        "Yes. We build marketing strategies that stay aligned with the Electronic Pharmacy Regulations 2026, including how online dispensing and delivery services can be promoted compliantly while respecting Pharmacy Council of Nigeria guidelines.",
    },
    {
      question: "How much does healthcare digital marketing cost in Nigeria?",
      answer:
        "Pricing ranges from ₦150,000 monthly for a single clinic to ₦2,000,000+ for multi-department hospitals, with website design and one-off audits available separately. We'll recommend the right package and provide an exact quote after a free audit of your current online presence.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] min-h-screen text-[#0b0f19]">
      {/* Decorative Orbs - ChyWeb Brand Blue & Golden Amber */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2258FF]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-amber-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/8 blur-[120px] pointer-events-none" />

      {/* Live Marquee Ticker */}
      <div className="w-full bg-[#2258FF] text-white py-2.5 overflow-hidden border-b border-blue-600 relative z-20 shadow-sm">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap text-xs font-semibold">
          <span className="flex items-center gap-2 text-amber-300 font-black">
            <Flame size={14} className="animate-pulse" />
            LIVE NIGERIAN HEALTHCARE SEARCH INTENT:
          </span>
          {searchTicker.concat(searchTicker).map((query, idx) => (
            <span key={idx} className="flex items-center gap-2 text-white/90">
              <span>{query}</span>
              <span className="text-blue-300">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================================
          HERO SECTION: Consistent with previous flagship pages
      ========================================================================= */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3F0E6] to-[#E9E5D9] text-slate-800 rounded-b-[48px] sm:rounded-b-[60px] overflow-hidden border-b border-slate-300/50 shadow-[0_12px_45px_rgba(0,0,0,0.04)] z-10">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] bg-gradient-to-b from-[#2258FF]/12 via-amber-400/10 to-transparent blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs font-bold mb-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#2258FF]/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-900 font-black tracking-wide uppercase text-[11px] sm:text-xs">
              ChyWeb Healthcare Digital Marketing
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              NDPA &amp; PCN 2026 Compliant
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            Healthcare Digital Marketing{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                in Nigeria
              </span>
              {/* Hand-drawn luxury curve accent in amber */}
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

          {/* Value Subheadline (H2) */}
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-800 tracking-tight leading-snug mb-5 max-w-4xl mx-auto">
            Get Found by Patients Searching for{" "}
            <span className="text-[#2258FF] font-black">
              Care Right Now
            </span>
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria&apos;s healthcare digital marketing agency, for clinics, hospitals, and pharmacies, built for patient trust, urgent intent, and regulatory compliance across Lagos, Abuja, Port Harcourt, and nationwide.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => openAudit("Healthcare Marketing Audit")}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Book a Free Healthcare Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20represent%20a%20healthcare%20facility%20and%20want%20to%20audit%20our%20patient%20search%20visibility."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-300/90 text-slate-900 font-extrabold text-base hover:bg-slate-50 hover:border-[#2258FF]/50 transition-all flex items-center justify-center gap-2.5 shadow-sm hover:-translate-y-0.5"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <PhoneCall size={18} className="text-[#2258FF]" />
              <span>WhatsApp: 0906 762 3555</span>
            </a>
          </div>

          <div className="text-xs text-slate-500 font-medium mb-8">
            Free facility audit • Zero obligation • Direct strategy line
          </div>

          {/* Micro-Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Zap size={16} className="text-[#2258FF]" />
              <span>109M Internet Population (2026 Data)</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Electronic Pharmacy Regulations 2026 Aligned</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Lock size={16} className="text-amber-500" />
              <span>NDPA Patient Privacy Standards</span>
            </div>
          </div>

          {/* Centered Single-Column Visual Showcase: Luxury Digital Terminal Frame */}
          <div className="w-full max-w-5xl rounded-[32px] overflow-hidden shadow-[0_25px_65px_rgba(34,88,255,0.18)] border-4 border-white/90 relative group bg-[#1040E6]">
            {/* High-End App/Browser Control Bar */}
            <div className="bg-[#2258FF] px-4 sm:px-6 py-3 border-b border-white/20 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white/70 text-[11px] font-mono border border-white/10">
                <Lock size={11} className="text-emerald-400" />
                <span>chyweb.agency/healthcare/patient-discovery-cockpit • Lagos, NG</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Urgent Care Triage Live</span>
              </div>
            </div>

            {/* Visual Showcase Media: High-End Clinical Terminal Canvas */}
            <div className="relative h-[380px] sm:h-[500px] overflow-hidden flex items-end p-6 sm:p-8 bg-gradient-to-br from-[#0a1e64] via-[#091b5c] to-[#040e2d]">
              <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
              <div className="absolute -top-12 right-10 w-96 h-96 bg-[#2258FF]/20 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/15 blur-[90px] pointer-events-none" />

              {/* Dynamic Live Appointment Notification */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNotificationIndex}
                  initial={{ opacity: 0, y: -20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#2258FF]/95 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-[0_15px_35px_rgba(34,88,255,0.35)] flex items-center gap-3.5 text-white max-w-md text-left z-20"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 absolute inset-0" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-amber-300 font-black block uppercase tracking-wider">
                      ⚡ {liveAppointments[currentNotificationIndex].status}
                    </span>
                    <strong className="text-xs sm:text-sm font-black truncate block text-white">
                      {liveAppointments[currentNotificationIndex].title}
                    </strong>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {liveAppointments[currentNotificationIndex].facility}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0 border-l border-white/15 pl-3">
                    <span className="text-xs sm:text-sm font-black text-emerald-300 block font-mono">
                      Confirmed
                    </span>
                    <span className="text-[9px] text-white/70 block">
                      {liveAppointments[currentNotificationIndex].time}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Verified Clinical Rating Badge */}
              <div className="hidden sm:flex absolute top-4 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl border border-white/80 items-center gap-3 text-left z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-600">
                  <Star size={18} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-slate-900 font-black text-xs">
                    <span>4.99 / 5.0 Patient Rating</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Verified</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Top Ranked Clinics &amp; Hospitals
                  </span>
                </div>
              </div>

              {/* Floating Mini Growth Indicator (Bottom Right of Media) */}
              <div className="hidden md:flex absolute bottom-6 right-6 bg-[#2258FF]/95 backdrop-blur-md border border-white/30 text-white rounded-2xl p-3 shadow-xl items-center gap-2.5 z-20 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#2258FF]/30 border border-[#2258FF]/50 flex items-center justify-center text-[#2258FF]">
                  <TrendingUp size={16} className="text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Patient Discovery</span>
                  <strong className="text-xs font-black text-emerald-400">+3.4x Inbound Bookings</strong>
                </div>
              </div>

              {/* Bottom Canvas Overlay Details */}
              <div className="relative z-10 text-left text-white max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                  Local Google 3-Pack • Symptom Intent • AI Overviews
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  Guiding Worried Patients to Your Doctors When Every Second Matters
                </h3>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock - Ultra-Clean Frosted Control Center */}
            <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center text-left text-slate-900 shadow-xl z-20 relative">
              <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Monthly Patients
                </span>
                <strong className="text-base sm:text-xl font-black text-[#2258FF]">
                  1,420+ Bookings
                </strong>
                <span className="text-[10px] text-blue-600 font-bold block mt-0.5">Direct patient consultations</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Google 3-Pack Rank
                </span>
                <strong className="text-base sm:text-xl font-black text-emerald-600">
                  #1 Top 3 Rated
                </strong>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">Urgent &amp; local clinic search</span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100/80 hidden sm:block">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Regulatory Trust
                </span>
                <strong className="text-base sm:text-xl font-black text-amber-600">
                  100% Compliant
                </strong>
                <span className="text-[10px] text-amber-700 font-bold block mt-0.5">NDPA &amp; PCN 2026 guidelines</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
                <button
                  onClick={() => openAudit("Healthcare Marketing Audit")}
                  className="w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0c33be] text-white font-black text-xs sm:text-sm shadow-[0_8px_20px_rgba(34,88,255,0.3)] transition-all hover:scale-[1.02] cursor-pointer text-center flex items-center justify-center gap-2"
                >
                  <span>Claim Free Audit</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Patients Are Searching For Care Online
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Users size={14} className="text-[#2258FF]" />
            <span>Digital Healthcare Shift</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Patients Are Searching for Care Online, Whether Your Facility Shows Up or Not
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nigeria&apos;s digital footprint is enormous and still growing. DataReportal&apos;s Digital 2026 report puts the country&apos;s
            internet population at around <strong>109 million people</strong>, with the Nigerian Communications Commission recording over{" "}
            <strong>142 million active internet subscriptions</strong> as of October 2025. Healthcare specifically is shifting fast alongside it.
            Nigeria&apos;s <strong>Electronic Pharmacy Regulations 2026</strong> now formally permit prescriptions and dispensing based on online consultations,
            and telemedicine, electronic prescriptions, and online pharmaceutical services are actively reshaping how patients access care across the country.
            Nigeria&apos;s healthcare market, serving over 200 million people, is already one of the largest in Africa, and digital discovery is becoming the front door to nearly all of it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-3xl font-black text-[#2258FF] font-mono">2026 Regs</div>
            <h3 className="text-base font-bold text-slate-900">Electronic Pharmacy Laws</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Formally permitting prescriptions and dispensing based on online consultations, requiring PCN-aligned digital frameworks.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-3xl font-black text-emerald-600 font-mono">Telemedicine</div>
            <h3 className="text-base font-bold text-slate-900">Virtual Health Front Door</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Electronic prescriptions and online health consultations are reshaping the entire patient journey from symptom to treatment.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
            <div className="text-3xl font-black text-amber-500 font-mono">200 Million+</div>
            <h3 className="text-base font-bold text-slate-900">Patient Population</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Digital discovery on Google Maps and search engines is now the primary gateway before a patient ever sets foot in your clinic.
            </p>
          </div>
        </div>

        {/* Why Specialist is Needed */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-sm space-y-3">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
            <ShieldCheck className="text-[#2258FF]" size={22} />
            <span>Why Healthcare Digital Marketing in Nigeria Needs a Specialist</span>
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Marketing a hospital or pharmacy carries real weight that marketing a retail store doesn&apos;t. Patient trust, data privacy under the <strong className="text-slate-900">Nigeria Data Protection Act (NDPA)</strong>, and advertising rules around pharmaceuticals and medical claims all shape what healthcare providers can and should say online. A generic digital marketing agency applying retail tactics to a clinic risks both poor results and compliance problems that put your license and reputation on the line.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            As a specialist in healthcare digital marketing in Nigeria, we build strategies that respect these realities: accurate, non-misleading content, careful handling of patient data, and marketing that builds genuine trust rather than making claims that could land a facility in regulatory trouble.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Our Healthcare Digital Marketing Services
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Healthcare Digital Marketing Services
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Ethical, clinical-grade patient acquisition solutions built strictly within Nigerian health regulations:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2258FF]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                    {svc.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {svc.highlight}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHO WE WORK WITH
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Who We Work With
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Specialized digital frameworks tailored to your specific healthcare entity:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whoWeWorkWith.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono font-bold text-[#2258FF] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          DIAGNOSTIC TOOL: Brand Dark Navy Contrast
      ========================================================================= */}
      <section id="diagnostic" className="py-20 px-6 max-w-7xl mx-auto">
        <HealthcareVisibilityChecker onOpenAudit={openAudit} />
      </section>

      {/* =========================================================================
          PRICING PACKAGES
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>Clinical Investment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Healthcare Digital Marketing Packages in Nigeria
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Pricing depends on facility type and the scope of services you need. Here&apos;s a realistic breakdown to help you budget:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl border flex flex-col justify-between relative transition-all ${
                pkg.highlight
                  ? "bg-white border-2 border-[#2258FF] shadow-[0_15px_40px_rgba(34,88,255,0.12)] scale-[1.02]"
                  : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#2258FF] mb-1">
                  {pkg.name}
                </div>
                <div className="text-xs text-slate-500 mb-2">{pkg.bestFor}</div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono mb-1">
                  {pkg.price}
                </div>
                <div className="text-[11px] text-slate-400 mb-4">{pkg.period}</div>
                <p className="text-xs text-slate-600 mb-5 pb-5 border-b border-slate-100 leading-relaxed">
                  {pkg.desc}
                </p>

                <div className="space-y-2.5 mb-6">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-[#2258FF] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openAudit(`Healthcare Package: ${pkg.name}`)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.highlight
                    ? "bg-[#2258FF] hover:bg-[#1442e6] text-white shadow-md shadow-[#2258FF]/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                <span>Select Package</span>
                <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

        {/* One-off options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900">Healthcare Website Design (One-Time)</h4>
              <p className="text-xs text-slate-600 mt-1">Mobile-first design, appointment/inquiry booking, trust signals, compliant content.</p>
              <div className="text-[#2258FF] font-mono font-bold text-lg mt-2">₦400,000 – ₦1,200,000</div>
            </div>
            <button
              onClick={() => openAudit("Healthcare Website Design One-Time")}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all cursor-pointer flex-shrink-0 ml-4"
            >
              Request Quote
            </button>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900">Clinical Marketing Audit (One-Time)</h4>
              <p className="text-xs text-slate-600 mt-1">Full review of current online presence, local SEO, Google Business Profile, and compliance check.</p>
              <div className="text-emerald-600 font-mono font-bold text-lg mt-2">₦100,000 – ₦300,000</div>
            </div>
            <button
              onClick={() => openAudit("Clinical Marketing Audit One-Time")}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all cursor-pointer flex-shrink-0 ml-4"
            >
              Claim Audit
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPLIANCE SECTION
      ========================================================================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-white border-2 border-amber-300/80 rounded-3xl p-8 sm:p-9 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-600 font-bold text-base">
            <ShieldCheck size={22} />
            <span>Why This Requires Careful, Compliant Execution</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Healthcare digital marketing in Nigeria operates under real constraints that generic agencies often miss. Patient data handling must align with the Nigeria Data Protection Act, pharmaceutical advertising is subject to NAFDAC and industry advertising codes, and prescription medications generally cannot be marketed directly to consumers the way over-the-counter products can. We build every healthcare campaign with these boundaries in mind from the start, so your visibility grows without regulatory risk attached to it.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
      ========================================================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-200">
        <FaqSection
          title="Frequently Asked Questions: Healthcare Digital Marketing in Nigeria"
          subtitle="Clear answers regarding medical advertising compliance, NDPA patient data privacy, and timeline to results."
          faqs={faqs}
        />
      </section>

      {/* =========================================================================
          FINAL CTA BANNER
      ========================================================================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#0a1e64] via-[#1040e6] to-[#2258FF] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 text-center relative z-10 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black !text-white tracking-tight">
            Stop Losing Patients to Facilities That Simply Show Up First
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
            Every day your clinic, hospital, or pharmacy isn&apos;t clearly visible online, patients searching for care nearby are finding a competitor instead, not because their care is better, but because they&apos;re easier to find.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openAudit("Healthcare Free Marketing Audit")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer"
            >
              Book a Free Healthcare Marketing Audit →
            </button>
            <button
              onClick={() => openAudit("Request a Free Visibility Check")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/15 hover:bg-white/20 text-white font-bold text-sm border border-white/25 transition-all cursor-pointer"
            >
              Request a Free Visibility Check →
            </button>
          </div>
        </div>
      </section>

      {/* Cluster Nav */}
      <HealthcareClusterNav
        currentPath="/healthcare-digital-marketing-nigeria"
        onOpenAuditModal={openAudit}
      />

      {/* Mobile Sticky Bar */}
      <HealthcareMobileStickyBar onOpenAudit={() => openAudit("Mobile CTA")} ctaText="Free Health Audit" />

      {/* Audit Modal */}
      <HealthcareAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalService}
        defaultFacilityType="Private Clinic / Specialist Practice"
      />
    </div>
  );
}
