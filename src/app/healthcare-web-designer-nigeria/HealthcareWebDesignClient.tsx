"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorSmartphone,
  HeartPulse,
  Activity,
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
  Compass,
  FileCheck,
  Check,
  CalendarCheck,
  Flame,
  Star,
  TrendingUp,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import HealthcareAuditModal from "@/components/HealthcareAuditModal";
import HealthcareVisibilityChecker from "@/components/HealthcareVisibilityChecker";
import HealthcareClusterNav from "@/components/HealthcareClusterNav";
import HealthcareMobileStickyBar from "@/components/HealthcareMobileStickyBar";

export default function HealthcareWebDesignClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Healthcare Web Design & Fast Booking");
  const [activeTab, setActiveTab] = useState<"hospitals" | "clinics">("hospitals");
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const liveBookings = [
    { department: "Pediatric Outpatient Care", consultant: "Dr. O. Adeleke, FMCPaed", time: "Just now", type: "1-Tap Confirmed Booking" },
    { department: "Consultant Obstetrics Clinic", consultant: "Dr. F. Nwosu, FWACS", time: "2 mins ago", type: "First Trimester Consultation" },
    { department: "Dental Implant & Surgery", consultant: "Specialist Dental Surgeon", time: "5 mins ago", type: "Emergency Appointment" },
    { department: "Family Medicine & Wellness", consultant: "Senior Medical Officer", time: "8 mins ago", type: "Routine Health Check" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotificationIndex((prev) => (prev + 1) % liveBookings.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [liveBookings.length]);

  const openAudit = (service = "Healthcare Web Design & Fast Booking") => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const searchTicker = [
    "🩺 'fast pediatric appointment booking Lekki Phase 1'",
    "⚡ 'hospital website loading in under 0.8 seconds on Nigerian mobile'",
    "🔒 'NDPA compliant medical inquiry form with zero data leaks'",
    "🏥 'clear specialist department directory with verified consultant credentials'",
    "📱 '3-tap emergency doctor consultation dispatch Lagos'",
  ];

  const hospitalFeatures = [
    {
      icon: <Compass className="text-[#2258FF]" size={22} />,
      title: "Multi-Department Navigation That Actually Works",
      desc: "Hospitals often bury their specialties behind confusing menus. We build clear, intuitive navigation so a patient looking for cardiology, pediatrics, or obstetrics finds the right department in seconds, not minutes.",
      highlight: "Frictionless triage routing",
    },
    {
      icon: <MonitorSmartphone className="text-[#2258FF]" size={22} />,
      title: "Fast, Mobile-First Clinical Architecture",
      desc: "With the vast majority of patient searches happening on mobile devices across Nigeria, we build every hospital site mobile-first, since a slow-loading site during an urgent medical search is a lost patient, not just a lost pageview.",
      highlight: "Sub-second emergency load",
    },
    {
      icon: <Users className="text-[#2258FF]" size={22} />,
      title: "Department & Specialist Profiles",
      desc: "Dedicated pages for each specialty and consultant: verified credentials, focus areas, fellowship training, and patient-friendly condition explanations that build institutional confidence before a patient calls.",
      highlight: "Doctor authority profiles",
    },
    {
      icon: <CalendarCheck className="text-[#2258FF]" size={22} />,
      title: "Appointment Booking Integration",
      desc: "Whether it's a simple inquiry form or a full hospital booking system, we remove friction from the path between 'I need to see a doctor' and a confirmed consultation.",
      highlight: "1-Tap consultation intake",
    },
    {
      icon: <Lock className="text-[#2258FF]" size={22} />,
      title: "Data Privacy Built In (NDPA Aligned)",
      desc: "Every form and patient touchpoint is designed with the Nigeria Data Protection Act in mind, so patient contact details and consultation queries are handled responsibly and kept strictly separate from open databases.",
      highlight: "NDPA patient data safety",
    },
  ];

  const clinicFeatures = [
    {
      icon: <Activity className="text-[#2258FF]" size={22} />,
      title: "Clear Service and Specialty Presentation",
      desc: "Whether you're a single-doctor practice or a multi-specialty group clinic, we make exactly what you treat and who you serve immediately obvious—no medical jargon or confusing digging required.",
      highlight: "Instant condition clarity",
    },
    {
      icon: <Zap className="text-[#2258FF]" size={22} />,
      title: "Simple, Fast Booking or Inquiry Forms",
      desc: "Short, frictionless forms placed where patient intent is highest, not buried behind multiple confusing clicks that a busy or anxious visitor won't bother completing.",
      highlight: "Friction-free intake",
    },
    {
      icon: <ShieldCheck className="text-[#2258FF]" size={22} />,
      title: "Trust Signals Front and Center",
      desc: "Doctor credentials, facility accreditations, and genuine patient testimonials displayed prominently, since clinical trust is the single biggest factor in a healthcare booking decision.",
      highlight: "Institutional reassurance",
    },
    {
      icon: <Globe className="text-[#2258FF]" size={22} />,
      title: "Local SEO Foundation Built In",
      desc: "Your site is structured from day one to support strong local search visibility, so a patient searching 'clinic near me' actually finds your facility, working hand in hand with healthcare SEO.",
      highlight: "Google 3-Pack foundation",
    },
  ];

  const packages = [
    {
      name: "Clinic Starter",
      bestFor: "Single-doctor or small private clinics",
      price: "₦300,000 – ₦550,000",
      period: "one-time",
      desc: "A mobile-first, high-trust digital front door designed to turn local searchers into booked appointments.",
      features: [
        "Mobile-first responsive clinical layout (up to 10 pages)",
        "Direct appointment / inquiry booking flow",
        "Doctor credential & accreditation showcase",
        "Basic local SEO & Google Business Profile mapping",
        "Instant WhatsApp & email appointment alerts",
      ],
      highlight: false,
    },
    {
      name: "Clinic Growth",
      bestFor: "Multi-specialty group medical practices",
      price: "₦600,000 – ₦1,200,000",
      period: "one-time",
      desc: "Expanded clinical platform with dedicated doctor profiles, patient reviews, and specialty sub-pages.",
      features: [
        "Everything in Clinic Starter",
        "Multiple specialist & department sub-pages",
        "Advanced appointment booking engine integration",
        "Patient review & testimonial verification display",
        "NDPA data privacy compliant inquiry forms",
      ],
      highlight: true,
      badge: "Most Popular for Clinics",
    },
    {
      name: "Hospital / Multi-Department",
      bestFor: "Hospitals with several departments and specialists",
      price: "₦1,500,000 – ₦4,000,000+",
      period: "one-time",
      desc: "Enterprise hospital web platform with intuitive triage navigation, emergency callouts, and multi-consultant directories.",
      features: [
        "Everything in Clinic Growth",
        "Multi-department architecture across all clinical units",
        "Specialist doctor directory with scheduling filters",
        "Emergency department banner & 1-tap dispatch numbers",
        "Hospital management / EHR webhook integrations",
        "Comprehensive AEO/GEO structured clinical data",
      ],
      highlight: false,
    },
  ];

  const differentiators = [
    {
      title: "We design for patient trust, not just aesthetics",
      desc: "Every decision—credential placement, review display, booking flow—is made around one question: does this help a worried patient feel confident enough to book?",
    },
    {
      title: "We understand healthcare's compliance realities",
      desc: "Patient data handling and honest, non-misleading content aren't afterthoughts; they're built into how we design every form and page from the start.",
    },
    {
      title: "We build for hospitals and clinics differently",
      desc: "A single clinic's booking flow and a hospital's multi-department navigation are completely different problems, and we don't force either into a generic template.",
    },
    {
      title: "We connect design with visibility",
      desc: "Your site is built alongside the same framework behind our healthcare digital marketing work, so it's not just well-designed; it's built to actually be found by patients searching for care.",
    },
    {
      title: "We teach as well as execute",
      desc: "Beyond client work, our digital marketing training in Nigeria covers the same fundamentals, if you'd rather understand what's behind your own site.",
    },
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery and Audit",
      desc: "We review your current site or starting point and exactly where patients might be dropping off before booking an appointment.",
    },
    {
      step: "02",
      title: "Patient-Journey Design",
      desc: "We map the path from urgent search to booked appointment, mobile-first, removing unnecessary friction at every clinical step.",
    },
    {
      step: "03",
      title: "High-Trust Build",
      desc: "Fast, clean, trust-focused development on Next.js—free of slow WordPress medical plugins that compromise patient privacy.",
    },
    {
      step: "04",
      title: "Booking & Data Privacy Integration",
      desc: "Appointment systems and forms built with patient data handling and NDPA compliance in mind from day one.",
    },
    {
      step: "05",
      title: "Testing and Launch",
      desc: "Speed, mobile responsiveness, and every single booking form tested thoroughly across Nigerian mobile devices before going live.",
    },
    {
      step: "06",
      title: "Ongoing Optimization",
      desc: "Continued refinement based on real patient behavior, eliminating drop-offs and ensuring phone lines and WhatsApp stay active.",
    },
  ];

  const faqs = [
    {
      question: "How much does a hospital or clinic website cost in Nigeria?",
      answer:
        "Pricing depends on facility size; a single clinic site differs significantly from a multi-department hospital platform. Clinic packages start at ₦300,000, while complex hospital platforms range from ₦1,500,000 to ₦4,000,000+. We'll give you an exact quote after a free audit of your current site or requirements.",
    },
    {
      question: "Can you integrate our existing appointment booking or hospital management system?",
      answer:
        "Yes, we integrate with your existing systems wherever possible, rather than forcing a switch, keeping consultation booking seamless for patients.",
    },
    {
      question: "How do you handle patient data on the website?",
      answer:
        "Every form and data touchpoint is designed with the Nigeria Data Protection Act in mind, keeping marketing and inquiry data handled responsibly and separately from clinical electronic health records.",
    },
    {
      question: "How long does a healthcare website project take?",
      answer:
        "Clinic sites typically take 4 to 6 weeks. Multi-department hospital platforms usually take 8 to 12 weeks depending on complexity.",
    },
    {
      question: "Do you also handle SEO and marketing once the site is built?",
      answer:
        "Yes, we can handle both, or just the design if that's all you need. Our healthcare digital marketing services build directly on the same foundation.",
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
            LIVE PATIENT TRUST &amp; BOOKING STANDARDS:
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
              ChyWeb Healthcare Web Suite
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Patient Reassurance &amp; Fast Booking
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            Healthcare Web Designer{" "}
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
            Websites Built for Patient Trust &amp;{" "}
            <span className="text-[#2258FF] font-black">
              Fast Appointments
            </span>
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria&apos;s specialist healthcare web designer for hospitals and clinics, built for how patients actually search and evaluate clinical credibility under urgent conditions.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => openAudit("Healthcare Website Audit")}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Get a Free Website Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20our%20clinic%20website%20design%20and%20booking%20flow."
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
            Free website audit • Zero obligation • Direct strategy line
          </div>

          {/* Micro-Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Zap size={16} className="text-[#2258FF]" />
              <span>0.6s Sub-Second Emergency Mobile Load</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Verified Doctor Accreditations Front &amp; Center</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <CalendarCheck size={16} className="text-amber-500" />
              <span>1-Tap Frictionless Appointment Intake</span>
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
                <span>chyweb.agency/healthcare/booking-reassurance-engine • Lagos, NG</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Intake Desk</span>
              </div>
            </div>

            {/* Visual Showcase Media: High-End Clinical Terminal Canvas */}
            <div className="relative h-[380px] sm:h-[500px] overflow-hidden flex items-end p-6 sm:p-8 bg-gradient-to-br from-[#0a1e64] via-[#091b5c] to-[#040e2d]">
              <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
              <div className="absolute -top-12 right-10 w-96 h-96 bg-[#2258FF]/20 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/15 blur-[90px] pointer-events-none" />

              {/* Dynamic Live Booking Notification */}
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
                      ⚡ {liveBookings[currentNotificationIndex].type}
                    </span>
                    <strong className="text-xs sm:text-sm font-black truncate block text-white">
                      {liveBookings[currentNotificationIndex].department}
                    </strong>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {liveBookings[currentNotificationIndex].consultant}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0 border-l border-white/15 pl-3">
                    <span className="text-xs sm:text-sm font-black text-emerald-300 block font-mono">
                      Confirmed
                    </span>
                    <span className="text-[9px] text-white/70 block">
                      {liveBookings[currentNotificationIndex].time}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Verified Clinical UX Rating Badge */}
              <div className="hidden sm:flex absolute top-4 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl border border-white/80 items-center gap-3 text-left z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-600">
                  <Star size={18} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-slate-900 font-black text-xs">
                    <span>4.98 / 5.0 Patient UX</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Verified</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Top Rated Clinical Portals
                  </span>
                </div>
              </div>

              {/* Floating Mini Growth Indicator (Bottom Right of Media) */}
              <div className="hidden md:flex absolute bottom-6 right-6 bg-[#2258FF]/95 backdrop-blur-md border border-white/30 text-white rounded-2xl p-3 shadow-xl items-center gap-2.5 z-20 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#2258FF]/30 border border-[#2258FF]/50 flex items-center justify-center text-[#2258FF]">
                  <TrendingUp size={16} className="text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Patient Intake</span>
                  <strong className="text-xs font-black text-emerald-400">3.2x Faster Appointments</strong>
                </div>
              </div>

              {/* Bottom Canvas Overlay Details */}
              <div className="relative z-10 text-left text-white max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                  Reassurance First • Multi-Department Intuitive Flow
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  Turning Anxious Visitors into Confident, Confirmed Consultations
                </h3>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock - Ultra-Clean Frosted Control Center */}
            <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center text-left text-slate-900 shadow-xl z-20 relative">
              <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Mobile Page Speed
                </span>
                <strong className="text-base sm:text-xl font-black text-[#2258FF]">
                  0.6s Instant
                </strong>
                <span className="text-[10px] text-blue-600 font-bold block mt-0.5">Emergency mobile loading</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Booking Drop-Off
                </span>
                <strong className="text-base sm:text-xl font-black text-emerald-600">
                  -42% Drop
                </strong>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">Frictionless intake flows</span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100/80 hidden sm:block">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Patient Data Privacy
                </span>
                <strong className="text-base sm:text-xl font-black text-amber-600">
                  NDPA Encrypted
                </strong>
                <span className="text-[10px] text-amber-700 font-bold block mt-0.5">Secure intake isolation</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
                <button
                  onClick={() => openAudit("Healthcare Website Audit")}
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
          SECTION: First Impression H2
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Clock size={14} className="text-[#2258FF]" />
            <span>The Trust Imperative</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Your Website Is the First Impression Before a Patient Ever Walks In
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            When someone searches &ldquo;clinic near me open now&rdquo; or &ldquo;best pediatrician in Lekki,&rdquo; your website is often the deciding factor between a booked appointment and a patient choosing the next result instead. With Nigeria&apos;s internet population now around 109 million people and telemedicine actively reshaping how patients access care under the country&apos;s 2026 Electronic Pharmacy Regulations, a slow, outdated, or confusing website isn&apos;t a cosmetic issue anymore; it&apos;s actively costing hospitals and clinics patients who never even called to find out how good the care actually is.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-sm space-y-4 mb-12">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
            <ShieldCheck className="text-[#2258FF]" size={22} />
            <span>Healthcare Has a Trust Problem Most Other Industries Don&apos;t</span>
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            A patient deciding whether to bring their child to your clinic or book a specialist consultation is looking for reassurance, not just information, and a site that loads slowly, buries its credentials, or makes booking difficult undermines that trust before a single conversation happens.
          </p>
        </div>

        {/* Why Healthcare Needs a Specialist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="text-base font-bold text-red-500">The Generic Agency Trap</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              A hospital&apos;s department pages and a clinic&apos;s appointment booking flow are not the same design problem as a retail store&apos;s product catalog, and treating them the same way is exactly how most Nigerian healthcare websites end up looking clinical in the wrong sense: cold, generic, and hard to actually use when it matters.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="text-base font-bold text-[#2258FF]">The 4 Answers in First 5 Seconds</div>
            <p className="text-xs text-slate-600 leading-relaxed">
              A specialist healthcare web designer in Nigeria understands what a patient actually needs to see in the first few seconds: <strong className="text-slate-900">is this facility legitimate, does it treat what I need, can I book quickly, and is my information safe?</strong>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: What We Build (Tabbed: Hospitals vs Clinics)
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineered for Reassurance and Fast Appointments
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Choose your facility type to explore our dedicated clinical features:
          </p>

          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300">
            <button
              type="button"
              onClick={() => setActiveTab("hospitals")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "hospitals"
                  ? "bg-[#2258FF] text-white shadow-md shadow-[#2258FF]/20"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              What We Build for Hospitals (5 Features)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("clinics")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "clinics"
                  ? "bg-[#2258FF] text-white shadow-md shadow-[#2258FF]/20"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              What We Build for Clinics (4 Features)
            </button>
          </div>
        </div>

        {activeTab === "hospitals" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {hospitalFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2258FF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {feat.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {clinicFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2258FF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {feat.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          DIAGNOSTIC TOOL: Brand Dark Navy Contrast
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <HealthcareVisibilityChecker onOpenAudit={openAudit} />
      </section>

      {/* =========================================================================
          PRICING PACKAGES
      ========================================================================= */}
      <section id="packages" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>Transparent Clinical Pricing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Healthcare Web Design Packages in Nigeria
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            We&apos;ll recommend the right package and give you an exact quote after a free audit of your current site or goals:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all ${
                pkg.highlight
                  ? "bg-white border-2 border-[#2258FF] shadow-[0_15px_40px_rgba(34,88,255,0.12)] scale-[1.02]"
                  : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#2258FF] mb-1">
                  {pkg.name}
                </div>
                <div className="text-xs text-slate-500 mb-3">{pkg.bestFor}</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono mb-1">
                  {pkg.price}
                </div>
                <div className="text-xs text-slate-400 mb-6">{pkg.period}</div>
                <p className="text-xs text-slate-600 mb-6 pb-6 border-b border-slate-100 leading-relaxed">
                  {pkg.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                    What&apos;s Included:
                  </div>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={15} className="text-[#2258FF] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openAudit(`Healthcare Web Package: ${pkg.name}`)}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.highlight
                    ? "bg-[#2258FF] hover:bg-[#1442e6] text-white shadow-md shadow-[#2258FF]/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                <span>Select Package</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Audit & Care Plan Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900">Website Audit (One-Time)</h4>
              <p className="text-xs text-slate-600 mt-1">Full review of speed, mobile experience, booking flow, and trust signals.</p>
              <div className="text-[#2258FF] font-mono font-bold text-lg mt-2">₦100,000 – ₦300,000</div>
            </div>
            <button
              onClick={() => openAudit("Healthcare Website Audit")}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all cursor-pointer flex-shrink-0 ml-4"
            >
              Request Audit
            </button>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900">Ongoing Care Plan (Monthly)</h4>
              <p className="text-xs text-slate-600 mt-1">Hosting, updates, content refreshes, uptime and security monitoring.</p>
              <div className="text-emerald-600 font-mono font-bold text-lg mt-2">₦40,000 – ₦120,000/mo</div>
            </div>
            <button
              onClick={() => openAudit("Medical Care Plan")}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all cursor-pointer flex-shrink-0 ml-4"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROCESS WALKTHROUGH
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Healthcare Web Design Process
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            From patient-journey mapping to NDPA compliance integration and verified launch:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProcess.map((step, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2258FF] flex items-center justify-center font-mono font-black text-sm">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE CHYWEB
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose ChyWeb Academy
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Clinical-grade web design built to reassure patients and protect your medical reputation:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#2258FF] font-bold text-sm sm:text-base">
                <CheckCircle2 size={17} className="flex-shrink-0 text-emerald-500" />
                <span className="text-slate-900">{diff.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
      ========================================================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-200">
        <FaqSection
          title="Frequently Asked Questions: Healthcare Web Designer in Nigeria"
          subtitle="Straightforward guidance on appointment system integrations, medical data privacy, and development timelines."
          faqs={faqs}
        />
      </section>

      {/* =========================================================================
          FINAL CTA BANNER
      ========================================================================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#0a1e64] via-[#1040e6] to-[#2258FF] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 text-center relative z-10 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black !text-white tracking-tight">
            Stop Losing Patients to a Website Working Against You
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
            Every day your site loads slowly, hides your specialists, or makes booking difficult, a patient who needed you is finding a competitor instead.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openAudit("Healthcare Website Audit")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer"
            >
              Get a Free Website Audit →
            </button>
            <button
              onClick={() => openAudit("Book a Healthcare Design Consultation")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/15 hover:bg-white/20 text-white font-bold text-sm border border-white/25 transition-all cursor-pointer"
            >
              Book a Design Consultation →
            </button>
          </div>
        </div>
      </section>

      {/* Cluster Nav */}
      <HealthcareClusterNav
        currentPath="/healthcare-web-designer-nigeria"
        onOpenAuditModal={openAudit}
      />

      {/* Mobile Sticky Bar */}
      <HealthcareMobileStickyBar onOpenAudit={() => openAudit("Mobile CTA")} ctaText="Free Web Audit" />

      {/* Audit Modal */}
      <HealthcareAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalService}
        defaultFacilityType="Multi-Department Hospital"
      />
    </div>
  );
}
