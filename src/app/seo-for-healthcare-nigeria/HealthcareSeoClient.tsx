"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Activity,
  HeartPulse,
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
  Bot,
  MapPin,
  BarChart3,
  Cpu,
  Award,
  FileCheck2,
  Flame,
  Star,
  TrendingUp,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import HealthcareAuditModal from "@/components/HealthcareAuditModal";
import HealthcareVisibilityChecker from "@/components/HealthcareVisibilityChecker";
import HealthcareClusterNav from "@/components/HealthcareClusterNav";
import HealthcareMobileStickyBar from "@/components/HealthcareMobileStickyBar";

export default function HealthcareSeoClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Healthcare SEO & Symptom Search");
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const liveRankings = [
    { query: "'urgent pediatrician near me Lekki'", rank: "Position #1 Google 3-Pack", facility: "Premier Children Clinic Lagos", time: "Just now" },
    { query: "'affordable dental scaling Yaba'", rank: "Position #1 Local Search", facility: "Specialist Dental Practice", time: "3 mins ago" },
    { query: "'ChatGPT: best hospital for maternity Lekki'", rank: "Direct AI Entity Citation", facility: "Maternal Health Center", time: "6 mins ago" },
    { query: "'24-hour pharmacy dispensing Abuja'", rank: "Position #2 Google Maps", facility: "Licensed Community Pharmacy", time: "9 mins ago" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotificationIndex((prev) => (prev + 1) % liveRankings.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [liveRankings.length]);

  const openAudit = (service = "Healthcare SEO & Symptom Search") => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const searchTicker = [
    "🩺 'why does my child have a high fever at night Lagos'",
    "📍 'best specialist clinic near me open now Victoria Island'",
    "🤖 'Gemini: which private hospital has consultant cardiologists in Ikeja?'",
    "💊 '24-hour prescription medication delivery pharmacy Abuja'",
    "🌐 'medical condition and treatment guides compliant with NDPA'",
  ];

  const services = [
    {
      icon: <Search className="text-[#2258FF]" size={24} />,
      title: "Healthcare Keyword Research",
      desc: "We map search demand across symptoms, conditions, specialties, and locations; 'pediatrician near me' behaves completely differently from 'child fever treatment', and both matter depending on where a patient is in their decision process.",
      highlight: "Symptom & specialty intent mapping",
    },
    {
      icon: <MapPin className="text-[#2258FF]" size={24} />,
      title: "Local SEO for Hospitals, Clinics & Pharmacies",
      desc: "Google Business Profile optimization, consistent listings across health directories like Nigeria Healthcare Directory, and location-specific content built to capture 'near me' searches at the neighborhood level.",
      highlight: "Google 3-Pack neighborhood lock",
    },
    {
      icon: <Cpu className="text-[#2258FF]" size={24} />,
      title: "Technical Healthcare SEO",
      desc: "Site speed, mobile optimization, and crawlability fixes built for facility sites with multiple departments, specialists, and service pages, so patients and search engines alike can navigate your full clinical offering.",
      highlight: "Multi-department indexation",
    },
    {
      icon: <FileCheck2 className="text-[#2258FF]" size={24} />,
      title: "Compliant Healthcare Content Strategy",
      desc: "Accurate, patient-friendly condition and treatment guides that build topical authority and answer real patient questions, written carefully to inform without crossing into medical claims that create regulatory risk.",
      highlight: "Topical clinical authority",
    },
    {
      icon: <Bot className="text-[#2258FF]" size={24} />,
      title: "Healthcare AEO (Answer Engine Optimization)",
      desc: "Structuring content to directly answer questions patients ask AI assistants—'what are the symptoms of malaria' or 'is [condition] treatable in Nigeria'—so your facility becomes a cited, trusted source in ChatGPT and Google AI Overviews.",
      highlight: "ChatGPT & Gemini entity citation",
    },
    {
      icon: <Globe className="text-[#2258FF]" size={24} />,
      title: "Healthcare GEO (Generative Engine Optimization)",
      desc: "Building comprehensive, well-organized service and specialty content that AI systems can accurately summarize when a patient asks for a broader comparison of care options in their area.",
      highlight: "Generative comparison inclusion",
    },
    {
      icon: <Award className="text-[#2258FF]" size={24} />,
      title: "Off-Page SEO and Medical PR",
      desc: "Earned mentions on recognized Nigerian health and business publications, directory consistency, and backlinks that build the entity trust both Google and AI systems weigh heavily for healthcare sources specifically.",
      highlight: "Institutional backlink authority",
    },
    {
      icon: <BarChart3 className="text-[#2258FF]" size={24} />,
      title: "Analytics & Appointment Attribution",
      desc: "Monthly reporting on organic traffic, keyword rankings by specialty and location, appointment inquiries, and AI referral traffic, tied to actual patient volume, not just page views.",
      highlight: "Patient booking attribution",
    },
  ];

  const packages = [
    {
      name: "Clinic Starter",
      bestFor: "Single-doctor or small private clinics",
      price: "₦150,000 – ₦300,000",
      period: "per month",
      desc: "Core local search and symptom visibility to dominate 'doctor near me' queries in your neighborhood.",
      features: [
        "Symptom keyword research (up to 25 local terms)",
        "Local SEO & Google Business Profile weekly optimization",
        "Basic technical audit & mobile speed checks",
        "Nigeria Healthcare Directory citation alignment",
        "Monthly rankings & patient call tracking report",
      ],
      highlight: false,
    },
    {
      name: "Clinic Growth",
      bestFor: "Multi-specialty clinics with several medical lines",
      price: "₦350,000 – ₦700,000",
      period: "per month",
      desc: "Full symptom content strategy, AEO schema, and search authority across multiple clinical specialties.",
      features: [
        "Everything in Clinic Starter",
        "Topical condition & treatment guide content strategy",
        "AEO & MedicalWebPage JSON-LD schema implementation",
        "Off-page SEO & medical publication backlinks",
        "ChatGPT & Gemini citation frequency monitoring",
        "Dedicated account manager & monthly patient lead reporting",
      ],
      highlight: true,
      badge: "Most Popular for Medical Practices",
    },
    {
      name: "Hospital / Multi-Department",
      bestFor: "Hospitals with multiple clinical specialties and consultants",
      price: "₦800,000 – ₦2,000,000+",
      period: "per month",
      desc: "Enterprise medical SEO across all clinical departments, emergency centers, and generative AI search.",
      features: [
        "Everything in Clinic Growth",
        "Coordinated SEO across all departments & consultant profiles",
        "Generative Engine Optimization (GEO) for AI comparisons",
        "Priority technical support & crawl budget management",
        "Digital PR in Nigerian health & business press",
        "NDPA data privacy compliance audit across all digital assets",
      ],
      highlight: false,
    },
    {
      name: "Pharmacy SEO",
      bestFor: "Single or multi-location community and online pharmacies",
      price: "₦200,000 – ₦500,000",
      period: "per month",
      desc: "Local search and delivery-service visibility aligned with 2026 Electronic Pharmacy Regulations.",
      features: [
        "Local SEO & Google Maps optimization for each branch",
        "Compliant OTC product & delivery service visibility",
        "PCN 2026 electronic consultation schema alignment",
        "Local 'pharmacy near me' 3-pack dominance",
        "Monthly delivery inquiry and search attribution",
      ],
      highlight: false,
    },
  ];

  const differentiators = [
    {
      title: "We understand healthcare search behavior specifically",
      desc: "Symptom-driven, urgent, trust-sensitive, we build keyword and content strategy around how patients actually search, not a generic local business template.",
    },
    {
      title: "We write compliant, accurate content",
      desc: "Every piece of health content is built to inform without overstepping into medical claims that create regulatory risk, protecting your facility's reputation and license.",
    },
    {
      title: "We optimize for AI search now, not later",
      desc: "Most agencies claiming healthcare SEO experience have no framework for AEO or GEO. We apply the same approach behind our work in AI-powered SEO and answer engine optimization, adapted for healthcare's trust and accuracy demands.",
    },
    {
      title: "We connect SEO with your site's design",
      desc: "Alongside our healthcare web design work, your SEO strategy and site experience are built to reinforce each other, not operate as disconnected efforts.",
    },
    {
      title: "We teach as well as execute",
      desc: "Our digital marketing training in Nigeria covers the same fundamentals, if you'd rather build this understanding on your own in-house clinical team.",
    },
  ];

  const faqs = [
    {
      question: "Can healthcare SEO content make medical claims about treatment outcomes?",
      answer:
        "No, and we specifically avoid this. Content is written to inform patients and build trust without making outcome guarantees or claims that could create regulatory or legal risk for your facility under NAFDAC or medical council standards.",
    },
    {
      question: "How long does healthcare SEO take to show results?",
      answer:
        "Local SEO and Google Business Profile improvements can show movement within 4-8 weeks. Broader organic visibility and AI search citations typically take 3-6 months of consistent, compliant content work.",
    },
    {
      question: "Do you handle SEO for pharmacies given the new 2026 regulations?",
      answer:
        "Yes, we build SEO strategy that stays aligned with the Electronic Pharmacy Regulations 2026, including how online dispensing and delivery services can be visible and promoted compliantly.",
    },
    {
      question: "Can a small clinic really compete with larger hospitals in search?",
      answer:
        "Yes, often more easily in local and symptom-specific searches, where a well-optimized clinic can outrank a larger hospital that hasn't built out specific, accurate content for that condition or neighborhood.",
    },
    {
      question: "How much does SEO for healthcare cost in Nigeria?",
      answer:
        "Pricing ranges from ₦150,000 monthly for a single clinic to ₦2,000,000+ for multi-department hospitals. We'll recommend the right package after a free audit of your current site.",
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
            LIVE SYMPTOM &amp; CARE SEARCH DEMAND:
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
              ChyWeb Healthcare SEO Suite
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Symptom-Driven Search
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            SEO for Healthcare{" "}
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
            Rank When Patients Search for Care,{" "}
            <span className="text-[#2258FF] font-black">
              Not Just When They Search for You
            </span>
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria&apos;s healthcare SEO agency, built around symptoms and medical conditions, so hurting patients find your doctors at the exact moment of decision.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => openAudit("Healthcare SEO Audit")}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Book a Free Healthcare SEO Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20our%20healthcare%20symptom%20search%20rankings."
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
            Free SEO audit • Zero obligation • Direct strategy line
          </div>

          {/* Micro-Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Zap size={16} className="text-[#2258FF]" />
              <span>Symptom-Driven Query Optimization</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Google Maps 3-Pack Neighborhood Dominance</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Bot size={16} className="text-amber-500" />
              <span>ChatGPT &amp; Gemini AI Citations</span>
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
                <span>chyweb.agency/healthcare/symptom-ranking-radar • Lagos, NG</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Google 3-Pack Live</span>
              </div>
            </div>

            {/* Visual Showcase Media: High-End Clinical Terminal Canvas */}
            <div className="relative h-[380px] sm:h-[500px] overflow-hidden flex items-end p-6 sm:p-8 bg-gradient-to-br from-[#0a1e64] via-[#091b5c] to-[#040e2d]">
              <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
              <div className="absolute -top-12 right-10 w-96 h-96 bg-[#2258FF]/20 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/15 blur-[90px] pointer-events-none" />

              {/* Dynamic Live Ranking Alert */}
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
                      ⚡ {liveRankings[currentNotificationIndex].rank}
                    </span>
                    <strong className="text-xs sm:text-sm font-black truncate block text-white">
                      {liveRankings[currentNotificationIndex].query}
                    </strong>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {liveRankings[currentNotificationIndex].facility}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0 border-l border-white/15 pl-3">
                    <span className="text-xs sm:text-sm font-black text-emerald-300 block font-mono">
                      Top 1
                    </span>
                    <span className="text-[9px] text-white/70 block">
                      {liveRankings[currentNotificationIndex].time}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Verified Medical SEO Authority Badge */}
              <div className="hidden sm:flex absolute top-4 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl border border-white/80 items-center gap-3 text-left z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-600">
                  <Star size={18} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-slate-900 font-black text-xs">
                    <span>4.99 / 5.0 Medical Authority</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Verified</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Top Ranked Symptom Specialists
                  </span>
                </div>
              </div>

              {/* Floating Mini Growth Indicator (Bottom Right of Media) */}
              <div className="hidden md:flex absolute bottom-6 right-6 bg-[#2258FF]/95 backdrop-blur-md border border-white/30 text-white rounded-2xl p-3 shadow-xl items-center gap-2.5 z-20 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#2258FF]/30 border border-[#2258FF]/50 flex items-center justify-center text-[#2258FF]">
                  <TrendingUp size={16} className="text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Symptom Search</span>
                  <strong className="text-xs font-black text-emerald-400">+4.1x Organic Reach</strong>
                </div>
              </div>

              {/* Bottom Canvas Overlay Details */}
              <div className="relative z-10 text-left text-white max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                  Symptom Search Psychology • Entity Authority
                </div>
                <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                  Being Found for What Hurting Patients Search Before They Ever Pick a Doctor
                </h3>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock - Ultra-Clean Frosted Control Center */}
            <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center text-left text-slate-900 shadow-xl z-20 relative">
              <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Condition Rankings
                </span>
                <strong className="text-base sm:text-xl font-black text-[#2258FF]">
                  85+ Page 1
                </strong>
                <span className="text-[10px] text-blue-600 font-bold block mt-0.5">Symptom &amp; urgency terms</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Local 3-Pack Rank
                </span>
                <strong className="text-base sm:text-xl font-black text-emerald-600">
                  #1 in District
                </strong>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">Google Maps immediate reach</span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100/80 hidden sm:block">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  AEO &amp; AI Overviews
                </span>
                <strong className="text-base sm:text-xl font-black text-amber-600">
                  Top Cited
                </strong>
                <span className="text-[10px] text-amber-700 font-bold block mt-0.5">ChatGPT &amp; Gemini citations</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
                <button
                  onClick={() => openAudit("Healthcare SEO Audit")}
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
          SECTION: Symptoms & Solutions H2
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <HeartPulse size={14} className="text-[#2258FF]" />
            <span>Search Behavior</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Patients Are Searching for Symptoms and Solutions, Not Just Facility Names
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Healthcare search behavior is fundamentally different from most other industries. Nigeria&apos;s internet population sits around 109 million people, and a growing share of that population is turning to search engines and increasingly AI assistants before ever calling a facility directly. Nigeria&apos;s Electronic Pharmacy Regulations 2026 now formally recognize online consultation and digital pharmaceutical services as part of how patients access care, and telemedicine and electronic prescriptions are reshaping the entire patient journey from symptom to treatment.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-sm space-y-4 mb-12">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            That means the search happening before a patient reaches your website isn&apos;t &ldquo;Lagos General Hospital&rdquo;;
            it&apos;s <code className="text-[#2258FF] bg-blue-50 font-bold px-2 py-0.5 rounded">&ldquo;why does my child have a fever at night&rdquo;</code> or{" "}
            <code className="text-[#2258FF] bg-blue-50 font-bold px-2 py-0.5 rounded">&ldquo;affordable dental clinic near Yaba&rdquo;</code>.
            If your SEO strategy only targets your facility&apos;s name and generic service pages, you&apos;re invisible during the exact moment a patient is deciding where to go.
          </p>
        </div>

        {/* 3 Pillars of Healthcare SEO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#2258FF] font-black flex items-center justify-center text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Symptom-Driven Queries</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patients search under urgency, worry, or pain. Triage-first search structures give them rapid clarity and direct appointment paths.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#2258FF] font-black flex items-center justify-center text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Deep E-E-A-T Standards</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Google&apos;s algorithms hold healthcare content to the strictest quality guidelines. Verified consultant citations are vital.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#2258FF] font-black flex items-center justify-center text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">Strict Medical Guardrails</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              NDPA privacy and NAFDAC advertising codes mean content must inform accurately without making unverified medical outcome claims.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Our 8 SEO Services for Healthcare Facilities
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles size={13} className="text-[#2258FF]" />
            <span>Clinical Search Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our SEO Services for Healthcare Facilities
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Everything your medical facility needs to capture local and symptom-driven patient volume:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2258FF]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
                    {svc.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
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
          DIAGNOSTIC TOOL: Brand Dark Navy Contrast
      ========================================================================= */}
      <section id="checker" className="py-20 px-6 max-w-7xl mx-auto">
        <HealthcareVisibilityChecker onOpenAudit={openAudit} />
      </section>

      {/* =========================================================================
          PRICING PACKAGES
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>Transparent Medical Retainers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            SEO Packages for Healthcare in Nigeria
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            We&apos;ll recommend the right package and give you an exact quote after a free audit of your current site:
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
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
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
                onClick={() => openAudit(`Healthcare SEO: ${pkg.name}`)}
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

        {/* One-off audit */}
        <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between max-w-2xl mx-auto">
          <div>
            <h4 className="text-base font-bold text-slate-900">Healthcare SEO Audit (One-Time)</h4>
            <p className="text-xs text-slate-600 mt-1">Full technical, content, local, and AI-visibility audit with a prioritized roadmap.</p>
            <div className="text-[#2258FF] font-mono font-bold text-lg mt-2">₦100,000 – ₦350,000</div>
          </div>
          <button
            onClick={() => openAudit("One-Time Healthcare SEO Audit")}
            className="px-5 py-2.5 rounded-xl bg-[#2258FF] hover:bg-[#1442e6] text-white text-xs font-bold transition-all cursor-pointer flex-shrink-0 ml-4 shadow-sm"
          >
            Claim Audit
          </button>
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
            Healthcare content carries real weight. We write and optimize content that informs without diagnosing, that builds trust without overstating outcomes, and that stays within the advertising and content boundaries that apply to healthcare and pharmaceutical marketing in Nigeria, including the Nigeria Data Protection Act for any patient-facing forms or data capture. Every piece of content we produce is reviewed against these standards before it goes live, not as an afterthought.
          </p>
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
            What sets our medical search methodology apart in Nigeria:
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
          title="Frequently Asked Questions: SEO for Healthcare in Nigeria"
          subtitle="Everything you need to know regarding symptom search optimization, compliance, and competing with large hospital groups."
          faqs={faqs}
        />
      </section>

      {/* =========================================================================
          FINAL CTA BANNER
      ========================================================================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#0a1e64] via-[#1040e6] to-[#2258FF] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 text-center relative z-10 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black !text-white tracking-tight">
            Stop Losing Patients to Facilities That Simply Show Up First in Search
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
            Every day your facility isn&apos;t optimized for how patients actually search—by symptoms, conditions, and neighborhoods—you&apos;re losing patients to a competitor with stronger visibility, not necessarily better care.
          </p>

          <div className="flex items-center justify-center pt-2">
            <button
              onClick={() => openAudit("Healthcare SEO Audit")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer"
            >
              Book a Free Healthcare SEO Audit →
            </button>
          </div>
        </div>
      </section>

      {/* Cluster Nav */}
      <HealthcareClusterNav
        currentPath="/seo-for-healthcare-nigeria"
        onOpenAuditModal={openAudit}
      />

      {/* Mobile Sticky Bar */}
      <HealthcareMobileStickyBar onOpenAudit={() => openAudit("Mobile CTA")} ctaText="Free SEO Audit" />

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
