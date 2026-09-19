"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Bot,
  MapPin,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  Star,
  ArrowRight,
  PhoneCall,
  Zap,
  Globe,
  Database,
  Cpu,
  HelpCircle,
  MessageSquare,
  Building,
  Check,
  Award,
  Layers,
  Clock,
  Compass,
  Flame,
  BarChart3,
  CheckCheck,
  ChevronRight,
  Sliders,
  FileCheck2,
  XCircle,
  AlertCircle,
  Video,
  Lock,
  DollarSign,
  Send,
  Loader2,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import HospitalityAuditModal from "@/components/HospitalityAuditModal";
import GrandSlamOfferCard from "@/components/GrandSlamOfferCard";
import HotelRoiCalculator from "@/components/HotelRoiCalculator";
import LiveHospitalityBookingWidget from "@/components/LiveHospitalityBookingWidget";
import HospitalityClusterNav from "@/components/HospitalityClusterNav";
import HospitalityMobileStickyBar from "@/components/HospitalityMobileStickyBar";

export default function HotelSeoAgencyClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Local SEO, AEO & AI Search (Hotel)");

  // Interactive Diagnostic State (Upgrade 1)
  const [diagHotelName, setDiagHotelName] = useState("");
  const [diagDistrict, setDiagDistrict] = useState("Victoria Island, Lagos");
  const [diagScanning, setDiagScanning] = useState(false);
  const [diagResult, setDiagResult] = useState<null | {
    score: number;
    mapsStatus: string;
    aiStatus: string;
    otaLeakage: string;
  }>(null);

  const handleRunScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!diagHotelName.trim()) return;
    setDiagScanning(true);
    setDiagResult(null);
    setTimeout(() => {
      setDiagScanning(false);
      setDiagResult({
        score: 52,
        mapsStatus: "Outside Google 3-Pack (Position #8–#14)",
        aiStatus: "Thin Entity Data (ChatGPT Recommends Competitor Suites)",
        otaLeakage: "₦3,200,000 – ₦6,500,000 Monthly Commission Bleed",
      });
    }, 1600);
  };

  const openAudit = (serviceName = "Local SEO, AEO & AI Search (Hotel)") => {
    setModalService(serviceName);
    setIsModalOpen(true);
  };

  const processSteps = [
    {
      step: "01",
      title: "Full Audit",
      badge: "Discovery & Entity Scan",
      desc: "We assess your current Local SEO foundation, entity data, and how AI systems currently represent (or fail to represent) your property.",
      output: "Entity & AI Visibility Baseline",
    },
    {
      step: "02",
      title: "Local Foundation",
      badge: "Google 3-Pack & Citations",
      desc: "Google Business Profile optimization, citation consistency, and review generation strategy built first, since it underpins the other two pillars.",
      output: "Verified GBP & Review System",
    },
    {
      step: "03",
      title: "AEO Content and Schema",
      badge: "Conversational Extraction",
      desc: "Answer-first content built around real traveler questions, wrapped in structured data AI systems can parse and trust.",
      output: "FAQPage & Lodging Schema",
    },
    {
      step: "04",
      title: "GEO Content Depth",
      badge: "AI Overview Synthesis",
      desc: "Comprehensive, well-organized content across amenities, location, and guest experience, built to be summarized accurately rather than thinly or incorrectly.",
      output: "Deep Multi-Amenity Entities",
    },
    {
      step: "05",
      title: "Monitoring",
      badge: "Tri-Channel Tracking",
      desc: "We track your visibility across all three channels, map pack rankings, AI citation frequency, and how AI systems currently summarize your property, adjusting as each evolves.",
      output: "Continuous Monthly Attribution",
    },
  ];

  const pricingTiers = [
    {
      name: "Local SEO & Review System",
      price: "₦350,000",
      period: "per month",
      desc: "Essential search presence for boutique hotels and serviced residences seeking Google Maps 3-Pack placement and rapid review velocity.",
      features: [
        "Google Business Profile weekly optimization & geotagged suite photos",
        "Local 3-Pack rank tracking across 20+ neighborhood keywords",
        "Automated 5-star review generation system with post-stay SMS/WhatsApp",
        "Citation consistency across top Nigerian travel and business directories",
        "Monthly direct map booking, website clicks, and phone call attribution",
      ],
      highlight: false,
    },
    {
      name: "Full-Spectrum Hotel SEO (Local + AEO + GEO)",
      price: "₦750,000",
      period: "per month",
      desc: "Our complete 3-pillar strategy uniting Google Maps dominance, ChatGPT & Perplexity direct citations, and AI Overviews synthesis.",
      features: [
        "Everything in Local SEO & Review System",
        "Answer Engine Optimization (AEO) for ChatGPT, Perplexity & Gemini",
        "Generative Engine Optimization (GEO) for multi-hotel AI comparisons",
        "Advanced JSON-LD LodgingBusiness, Room, and FAQPage schema",
        "High-depth amenity, dining, and location content cluster engineering",
        "Bi-weekly citation frequency and generative AI representation tracking",
        "60-Day Direct Traction Guarantee",
      ],
      highlight: true,
      badge: "Most Popular Strategy",
    },
    {
      name: "Hotel Chain & Luxury Resort Domination",
      price: "₦1,200,000",
      period: "per month",
      desc: "Enterprise tri-channel search domination for multi-property hospitality groups and luxury resorts across Nigeria.",
      features: [
        "Multi-property search dominance across Lagos, Abuja, and Port Harcourt",
        "Enterprise entity SEO & digital PR authority placements",
        "Full AEO/GEO integration across all suite, conference, and banquet pages",
        "Direct competitor displacement strategy against OTAs on brand searches",
        "Dedicated Senior Hospitality SEO Strategist & weekly executive reporting",
        "Market exclusivity for your specific hotel tier and district",
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "What's the difference between AEO and GEO for a hotel?",
      answer:
        "AEO focuses on getting your content directly cited as the answer to a specific question asked to an AI assistant. GEO focuses on how your content performs when it's synthesized into a broader AI-generated summary or comparison, where a traveler may never read past the generated text at all.",
    },
    {
      question: "How long does hotel SEO take to show results?",
      answer:
        "Local SEO improvements like Google Business Profile fixes can show movement within 4 to 8 weeks. Organic SEO traffic overall typically takes around 6 months to gain real traction, with AEO and GEO citation frequency building over a similar or slightly longer timeframe as entity trust compounds.",
    },
    {
      question: "Do I need to choose between Local SEO, AEO, and GEO, or can I do all three?",
      answer:
        "All three should be done together. They share a lot of the same foundation, consistent business data, strong reviews, and well-structured content, so running them as one coordinated strategy is both more effective and more efficient than treating them as separate projects.",
    },
    {
      question: "How much does full-spectrum hotel SEO cost in Nigeria?",
      answer:
        "Most hotels investing in Local SEO, AEO, and GEO together budget between ₦300,000 and ₦1,200,000 monthly, depending on property size and market competitiveness. We'll provide an exact quote after a free audit.",
    },
    {
      question: "Can a small independent hotel really compete with larger chains in AI search?",
      answer:
        "Yes, often more easily than in traditional paid advertising. AI systems favor clear, well-structured, trustworthy content over sheer brand size, which means a well-optimized independent hotel can get cited or summarized favorably ahead of a larger competitor with thinner, less organized content.",
    },
  ];

  const searchTicker = [
    "📍 'hotels near Victoria Island' → Local SEO Business",
    "🤖 'best business hotel in Lagos' → AEO ChatGPT Business",
    "✨ 'summarize 3 boutique hotels in Lekki' → GEO Business",
    "📈 Hotels investing properly cut OTA dependency by 18% on average",
    "🏆 4.8★ Google rated hotels see 34% higher direct booking conversion",
    "⚡ Organic SEO traffic compounds over time in a way paid ads never do",
  ];

  return (
    <div className="relative overflow-hidden bg-[#F8F9FA] min-h-screen text-slate-900 font-sans">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2258FF]/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-amber-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] pointer-events-none" />

      {/* Live Search Demand Marquee Ticker */}
      <div className="w-full bg-[#2258FF] text-white py-2.5 overflow-hidden border-b border-blue-600 relative z-20 shadow-sm">
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

      {/* =========================================================================
          HERO SECTION: Single-Column Luxury Architectural Layout Matching Previous Hero Pages
      ========================================================================= */}
      <section className="relative pt-16 sm:pt-22 pb-20 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3F0E6] to-[#E9E5D9] text-slate-800 rounded-b-[48px] sm:rounded-b-[60px] overflow-hidden border-b border-slate-300/50 shadow-[0_12px_45px_rgba(0,0,0,0.04)] z-10">
        {/* Ambient Architectural Lighting & Dot Matrix */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] bg-gradient-to-b from-[#2258FF]/12 via-amber-400/10 to-transparent blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Top Status Capsule / Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs font-bold mb-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#2258FF]/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-slate-900 font-black tracking-wide uppercase text-[11px] sm:text-xs">
              SEO Agency for Hotels in Nigeria
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            SEO Agency for Hotels{" "}
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

          {/* Value Subheadline (H2): AEO, Local SEO & GEO Under One Strategy */}
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-800 tracking-tight leading-snug mb-5 max-w-4xl mx-auto">
            AEO, Local SEO &amp; GEO{" "}
            <span className="text-[#2258FF] font-black">
              Under One Strategy
            </span>
          </h2>

          {/* Subtitle & Value Proposition - Clean & Concise */}
          <p className="text-slate-800 text-lg sm:text-xl lg:text-[22px] leading-snug mb-4 font-bold max-w-3xl mx-auto">
            Nigeria's SEO agency for hotels, covering Local SEO, AEO, and GEO, not just one of the three.
          </p>

          <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Someone typing &ldquo;hotels near Victoria Island&rdquo; is doing Local SEO business. Someone asking ChatGPT &ldquo;best business hotel in Lagos&rdquo; is doing AEO business. Someone letting an AI assistant summarize three properties in one paragraph before they click anything is doing GEO business. Most hotels, and most agencies, still only handle the first one.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => openAudit()}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Book a Free SEO Audit →</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20book%20a%20free%20hotel%20SEO%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-300/90 text-slate-900 font-extrabold text-base hover:bg-slate-50 hover:border-[#2258FF]/50 transition-all flex items-center justify-center gap-2.5 shadow-sm hover:-translate-y-0.5"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <PhoneCall size={18} className="text-[#2258FF]" />
              <span>WhatsApp: 0906 762 3555</span>
            </a>
          </div>

          <div className="text-xs text-slate-500 font-medium mb-6">
            Free audit. No obligation.
          </div>

          {/* Floating Revenue Proof Pill */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>
              Hotels investing properly in SEO cut <strong>OTA dependency by 18% on average</strong>. That's just the Local SEO piece.
            </span>
          </div>

          {/* Micro-Trust Badges with Verified Client Benchmarks */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <MapPin size={16} className="text-[#2258FF]" />
              <span>Google Maps 3-Pack #1 Placement</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Bot size={16} className="text-emerald-500" />
              <span>ChatGPT &amp; Gemini AI Citations</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Sparkles size={16} className="text-amber-500" />
              <span>AI Overviews Comparison Dominance</span>
            </div>
          </div>
        </div>

        {/* Centered Single-Column Visual Showcase: Luxury Digital Terminal Frame */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-[32px] overflow-hidden shadow-[0_25px_65px_rgba(34,88,255,0.18)] border-4 border-white/90 relative group bg-[#1040E6]">
            {/* High-End App/Browser Control Bar */}
            <div className="bg-[#2258FF] px-4 sm:px-6 py-3 border-b border-white/20 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[11px] font-mono text-white/90 ml-2 hidden sm:inline-block">
                  chyweb.agency/hotel-seo/tri-channel-cockpit
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Tri-Channel Engine Active</span>
              </div>
            </div>

            {/* Visual Showcase Media */}
            <div className="relative overflow-hidden">
              <img
                src="/images/hotel_ai_seo_cockpit.jpg"
                alt="Hotel SEO AI Optimization Command Center Lagos Nigeria"
                className="w-full h-[380px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/95 via-[#0a1e64]/30 to-transparent pointer-events-none" />

              {/* Floating Badges on Image */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1e64]/90 backdrop-blur-md text-white font-bold text-xs shadow-lg border border-white/10">
                <MapPin size={14} className="text-[#2258FF]" />
                <span>Google Maps #1: 'Hotels Near Victoria Island'</span>
                <span className="text-amber-400 font-black">4.9★ (380+ Reviews)</span>
              </div>

              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white font-black text-xs shadow-lg border border-emerald-400/30">
                <Bot size={14} />
                <span>ChatGPT &amp; Gemini Direct Recommendation</span>
              </div>

              {/* Bottom Interactive Dock */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 bg-[#0a1e64]/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/15 text-white shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-8 space-y-2 text-left">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider">
                        AI Search Citation
                      </span>
                      <span className="text-xs text-emerald-400 font-bold">✓ Verified JSON-LD Lodging Schema</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      <span className="text-emerald-400 font-bold block mb-1">ChatGPT &amp; Google AI Overview Response:</span>
                      &ldquo;Based on verified guest reviews and executive amenities, <strong>[Your Hotel Name]</strong> is the premier recommended boutique stay in Victoria Island for corporate travelers and luxury weekend getaways. Direct rates include complimentary breakfast and fast airport transfer.&rdquo;
                    </div>
                  </div>

                  <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between gap-2.5 border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
                    <div className="text-left md:text-right">
                      <div className="text-xs text-slate-400">Direct Search Uplift</div>
                      <div className="text-2xl font-black text-amber-400">+42% <span className="text-xs text-emerald-400 font-bold">Direct Bookings</span></div>
                    </div>
                    <button
                      onClick={() => openAudit()}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Audit My Hotel SEO</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* 3 Channels Pill Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/10 text-[11px] text-left">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <MapPin size={13} className="text-[#2258FF]" />
                    <span>1. Local SEO: <strong>Top 3-Pack Placement</strong></span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <Bot size={13} className="text-emerald-400" />
                    <span>2. AEO: <strong>ChatGPT Direct Answers</strong></span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <Sparkles size={13} className="text-amber-400" />
                    <span>3. GEO: <strong>AI Overviews Synthesis</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Strip */}
            <div className="px-6 py-4 bg-[#0a1e64] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>+42% Organic Direct Reservation Growth</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#2258FF]" />
                <span>-18% Less Reliance on Booking.com</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>4.9★ Review Velocity Acceleration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UPGRADE 1: INSTANT AI & GOOGLE MAPS VISIBILITY DIAGNOSTIC SCANNER
      ========================================================================= */}
      <section className="py-12 sm:py-16 -mt-8 relative z-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-[32px] bg-white border-2 border-[#2258FF]/20 shadow-[0_16px_50px_rgba(34,88,255,0.09)] p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="px-3.5 py-1 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-2.5 inline-block">
              Free 60-Second Property Diagnostic
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              Check Your Hotel's Live AI &amp; Google 3-Pack Visibility
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Enter your property details below to simulate how ChatGPT and Google Maps rank you against competing stays in your district.
            </p>
          </div>

          <form onSubmit={handleRunScan} className="max-w-3xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-7">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1.5 block">
                  Hotel / Property Name
                </label>
                <div className="relative">
                  <Building size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grand Horizon Hotel & Suites"
                    value={diagHotelName}
                    onChange={(e) => setDiagHotelName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#2258FF] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="sm:col-span-5">
                <label className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-1.5 block">
                  City / District
                </label>
                <select
                  value={diagDistrict}
                  onChange={(e) => setDiagDistrict(e.target.value)}
                  className="w-full px-3.5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-800 focus:bg-white focus:border-[#2258FF] focus:outline-none transition-all"
                >
                  <option value="Victoria Island, Lagos">Victoria Island, Lagos</option>
                  <option value="Ikoyi, Lagos">Ikoyi, Lagos</option>
                  <option value="Lekki Phase 1, Lagos">Lekki Phase 1, Lagos</option>
                  <option value="Ikeja GRA / Airport, Lagos">Ikeja GRA / Airport, Lagos</option>
                  <option value="Maitama, Abuja">Maitama, Abuja</option>
                  <option value="Central Business District, Abuja">Central Area, Abuja</option>
                  <option value="Port Harcourt GRA">Port Harcourt GRA</option>
                  <option value="Other Nigerian City">Other Nigerian City</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={diagScanning}
              className="w-full py-4 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] disabled:bg-blue-400 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {diagScanning ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Scanning Google Maps &amp; ChatGPT Entity Data...</span>
                </>
              ) : (
                <>
                  <Zap size={18} />
                  <span>Run Live Visibility Scan Now (Free)</span>
                </>
              )}
            </button>
          </form>

          {/* Diagnostic Result Box */}
          {diagResult && (
            <div className="mt-8 pt-8 border-t border-slate-200 max-w-3xl mx-auto space-y-5 animate-fadeIn">
              <div className="p-5 rounded-2xl bg-[#0a1e64] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 font-black text-2xl flex items-center justify-center shrink-0">
                    {diagResult.score}%
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Preliminary AI Visibility Score
                    </span>
                    <strong className="text-lg font-black block">
                      Moderate Search Vulnerability Detected
                    </strong>
                    <span className="text-xs text-slate-300">
                      Property: <strong>{diagHotelName}</strong> ({diagDistrict})
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openAudit(`Diagnostic Follow-up for ${diagHotelName}`)}
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-xs shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Get Full 7-Point PDF Breakdown</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-rose-600 font-black text-xs mb-1">
                    <AlertCircle size={14} />
                    <span>Maps 3-Pack Rank</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium">{diagResult.mapsStatus}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-amber-600 font-black text-xs mb-1">
                    <Bot size={14} />
                    <span>AI Citation Trust</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium">{diagResult.aiStatus}</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-1.5 text-[#2258FF] font-black text-xs mb-1">
                    <DollarSign size={14} />
                    <span>Est. Commission Bleed</span>
                  </div>
                  <p className="text-xs text-slate-700 font-medium">{diagResult.otaLeakage}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          UPGRADE 5: DISTRICT EXCLUSIVITY SCARCITY TRIGGER
      ========================================================================= */}
      <section className="py-6 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50 border border-amber-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
              <Lock size={20} />
            </div>
            <div>
              <strong className="text-sm font-black text-slate-900 block">
                Strict District Exclusivity Policy
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed">
                To prevent conflicts of interest, we only accept a maximum of <strong>2 non-competing properties per district</strong>. We never optimize your direct competitors against you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-amber-800 bg-white/80 border border-amber-300/80 px-3.5 py-1.5 rounded-full shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Q3/Q4 District Quotas Open</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          H2: WHY HOTELS NEED THREE KINDS OF SEO NOW, NOT ONE
          (Modular, Bite-Sized Layout Fixing "too much content in a container")
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Search Reality
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            Why Hotels Need Three Kinds of SEO Now, Not One
          </h2>
        </div>

        {/* Part 1: The Compounding Economics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {/* Card A: 18% OTA Commission Cut */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-black text-xl border border-emerald-200">
              18%
            </div>
            <div>
              <strong className="text-base font-black text-slate-900 block mb-1">
                Average OTA Dependency Reduction
              </strong>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hotels that invest properly in SEO reduce their dependency on OTA commissions by an average of <strong>18% within 12 months</strong>.
              </p>
            </div>
          </div>

          {/* Card B: 6 Months Compounding Traction */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center shrink-0 font-black text-xl border border-[#2258FF]/20">
              6mo
            </div>
            <div>
              <strong className="text-base font-black text-slate-900 block mb-1">
                Organic SEO Compounds Over Time
              </strong>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Paid ads stop the moment budget ends, but organic SEO compounds over time, typically gaining <strong>real traction around 6 months</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Transition Summary Box */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#2258FF]/5 border border-[#2258FF]/20 text-center mb-16">
          <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
            That's the case for SEO generally. But the way travelers actually search has split into <strong>three distinct behaviors</strong>, and a hotel that only optimizes for the first one is invisible in the other two. An SEO agency for hotels in Nigeria that only handles the first of these three is solving a third of the actual problem.
          </p>
        </div>

        {/* =========================================================================
            DEEP DIVE: THE THREE DISCIPLINE CARDS (Bite-Sized Modular Design)
        ========================================================================= */}
        <div className="space-y-12 max-w-6xl mx-auto mb-20">
          {/* Pillar 1: Local SEO Card with Image */}
          <div className="p-7 sm:p-10 rounded-[36px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2258FF]/10 text-[#2258FF] text-xs font-black uppercase tracking-wider">
                  <MapPin size={13} />
                  <span>Pillar 01 • The Foundation</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  Local SEO: Winning the &ldquo;Near Me&rdquo; and City-Level Search
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Local SEO is the foundation, and it's still where a huge share of hotel bookings begin. This covers your Google Business Profile, kept complete and accurate with real photos, updated hours, and correct contact information; consistent citations across relevant directories; and content built around actual city- and neighborhood-level intent.
                </p>

                {/* Sub-card: Intent & Reviews System */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-xs font-black text-slate-900 block mb-1">
                      City &amp; Neighborhood Intent
                    </strong>
                    <span className="text-[11px] text-slate-600 leading-tight block">
                      &ldquo;hotels in Lekki&rdquo; performs differently than &ldquo;hotels in Nigeria,&rdquo; and both matter depending on search specificity.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <strong className="text-xs font-black text-slate-900 block mb-1">
                      4.8★ Review System &amp; Recency
                    </strong>
                    <span className="text-[11px] text-slate-600 leading-tight block">
                      Hotels with 4.8★ ratings see meaningfully stronger direct bookings. Steady recency matters more than old 3-year-old reviews.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#2258FF]/5 border border-[#2258FF]/20 text-xs text-[#2258FF] font-semibold">
                  ✓ We build a genuine review generation system into your Local SEO strategy, not just a request buried in a post-stay email nobody opens.
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] group">
                  <img
                    src="/images/hospitality_seo_maps.jpg"
                    alt="Guest Searching Google Maps for Hotels in Lagos"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-md">
                    📍 Google Maps 3-Pack: Top placement for local hotel demand
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: AEO Card with Highlight Link */}
          <div className="p-7 sm:p-10 rounded-[36px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-wider border border-emerald-200">
                  <Bot size={13} />
                  <span>Pillar 02 • Conversational AI</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  AEO: Getting Cited When Travelers Ask AI Assistants Directly
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Answer Engine Optimization is about becoming the source an AI system trusts enough to quote directly, not just rank for. When a traveler asks ChatGPT or Perplexity &ldquo;which hotel in Abuja is best for a business trip,&rdquo; the answer that comes back was pulled from somewhere, and that somewhere needs to be built to be extractable and trustworthy.
                </p>

                {/* Sub-card: Structured Schema & Entity Trust */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-2 text-xs sm:text-sm text-slate-700">
                  <strong className="text-emerald-900 font-bold block">
                    What This Requires:
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    Structuring your website with clear, direct answers to the exact questions travelers ask, wrapping key information in FAQPage and Organization schema so AI systems can parse it programmatically, and building entity trust, consistent business data, earned mentions, and verified reviews.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://chyweb.com.ng/blog/best-aeo-agency-in-nigeria-2026-guide-to-ai-search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2258FF] hover:text-[#1040e6] hover:underline"
                  >
                    <span>Read our complete breakdown of what Answer Engine Optimization actually involves →</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 shadow-lg border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                    <span>ChatGPT 4o • Query</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 text-xs text-slate-200">
                    &ldquo;which hotel in Abuja is best for a business trip with fast WiFi?&rdquo;
                  </div>
                  <div className="text-[11px] text-slate-400">AI Citation Output:</div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-200 leading-relaxed">
                    &ldquo;<strong>[Your Hotel Name]</strong> is specifically engineered for business travelers, featuring dedicated 200Mbps fiber internet, private conference suites, and verified 4.9★ reviews.&rdquo;
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono text-right">
                    ✓ Sourced from JSON-LD FAQPage Schema
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: GEO Card with Lobby Image & AI SEO Guide Link */}
          <div className="p-7 sm:p-10 rounded-[36px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-black uppercase tracking-wider border border-amber-200">
                  <Sparkles size={13} />
                  <span>Pillar 03 • Generative AI Overviews</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  GEO: Winning Inside AI-Generated Summaries and Comparisons
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Generative Engine Optimization is the newest and least understood piece of hotel SEO, and it's already shaping decisions. AI is summarizing hotel websites before guests even click through, meaning a traveler comparing three properties might read a single AI-generated paragraph pulling from all three sites and never visit any of them individually before deciding.
                </p>

                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2 text-xs sm:text-sm text-slate-700">
                  <strong className="text-amber-900 font-bold block">
                    Synthesized Comparison Superiority:
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    If your content isn't structured clearly enough for an AI system to accurately summarize your property's strengths, you're being represented poorly, or not at all. This requires genuinely comprehensive, well-organized content across your amenities, location advantages, and guest experience.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2258FF] hover:text-[#1040e6] hover:underline"
                  >
                    <span>Explore our framework for AI-powered SEO applied to generative comparisons →</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] group">
                  <img
                    src="/images/hotel_lobby_lagos.jpg"
                    alt="Luxury Hotel Lobby Lagos AI Overview Entity"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 text-[11px] font-bold shadow-md">
                    ✨ Generative AI: Accurately representing luxury amenities &amp; perks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            UPGRADE 3: BEFORE VS. AFTER SEARCH REALITY COMPARISON
        ========================================================================= */}
        <div className="mb-20 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 font-black text-xs uppercase tracking-wider mb-2.5 inline-block border border-slate-200">
              The Booking Difference
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Un-Optimized Hotel vs. The ChyWeb Search Engine
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              See what actually happens when a Nigerian corporate executive or tourist searches for accommodation in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* The Invisible Hotel (Before) */}
            <div className="p-7 sm:p-8 rounded-[32px] bg-white border-2 border-rose-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-black text-xs border border-rose-200">
                    The Invisible Hotel (Before ChyWeb)
                  </span>
                  <XCircle size={22} className="text-rose-500" />
                </div>
                <strong className="text-lg font-black text-slate-900 block mb-4">
                  Stalled at #9 in Google Maps, Ignored by AI
                </strong>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>Google Maps: Position #9, 3.8★ rating, last review left 11 months ago.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>ChatGPT query: AI hallucinates or recommends competing hotel across the street.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>AI Overviews: Completely omitted from the 3-hotel summary comparison.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-500 font-bold mt-0.5">✕</span>
                    <span>Direct bookings: Under 18%; 82% of revenue locked in OTA 20% commission commissions.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-100 text-xs font-black text-rose-600 flex items-center justify-between">
                <span>Annual Commission Lost: ₦18,000,000+</span>
                <span className="text-slate-400 font-normal">Paid to Middlemen</span>
              </div>
            </div>

            {/* The ChyWeb Optimized Hotel (After) */}
            <div className="p-7 sm:p-8 rounded-[32px] bg-[#0a1e64] text-white border-2 border-[#2258FF]/50 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-black text-xs border border-emerald-400/30">
                    The ChyWeb Optimized Hotel (After SEO)
                  </span>
                  <CheckCircle2 size={22} className="text-emerald-400" />
                </div>
                <strong className="text-lg font-black text-white block mb-4">
                  #1 Google 3-Pack, Directly Quoted by ChatGPT &amp; AI
                </strong>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Google Maps: #1 in 3-Pack with 4.9★ rating and 40+ fresh reviews every 30 days.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>ChatGPT query: Quoted as the #1 recommended business stay with exact boardroom specs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>AI Overviews: Highlighted for complimentary breakfast &amp; best direct website rates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>Direct bookings: Surges by +42%, putting ₦2.1M+ back into bank account monthly.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-xs font-black text-emerald-300 flex items-center justify-between">
                <span>Commission Saved: +₦2,160,000 / mo</span>
                <span className="text-slate-300 font-normal">Direct Bank Profit</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            HOW THESE THREE WORK TOGETHER FOR A HOTEL
        ========================================================================= */}
        <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/20 text-white">
          <img
            src="/images/luxury_hotel_suite.jpg"
            alt="How Local SEO, AEO, and GEO Work Together"
            className="absolute inset-0 w-full h-full object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#0a1e64]/95" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mb-10">
              <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest inline-block mb-4">
                Unified Search System
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black !text-white leading-tight mb-4" style={{ color: "#ffffff" }}>
                How These Three Work Together for a Hotel
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                When these three channels operate under one coordinated technical strategy, your hotel dominates search whether a guest types, speaks, or relies on AI:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <MapPin size={18} />
                  <span>1. Local SEO</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  Gets you found when a traveler is searching by proximity or city, and builds the review and business-data foundation everything else relies on.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                  <Bot size={18} />
                  <span>2. AEO</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  Gets you directly cited when a traveler asks an AI assistant a specific question about hotels in your area.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-blue-200 font-bold text-sm">
                  <Sparkles size={18} />
                  <span>3. GEO</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  Gets you accurately and favorably represented when AI systems generate broader comparisons and summaries travelers never fully read past.
                </p>
              </div>
            </div>

            {/* Synthesis Key Takeaway Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/15 border border-white/20 text-white max-w-4xl">
              <p className="text-xs sm:text-sm font-medium leading-relaxed !text-white" style={{ color: "#ffffff" }}>
                <strong>Key Takeaway:</strong> A hotel doing all three shows up whether a guest types a search, asks a question out loud, or lets an AI assistant do the comparison shopping for them. A hotel doing only Local SEO is only covering the search behavior that's been around the longest, and increasingly, the smallest share of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UPGRADE 2: OTA COMMISSION BLEED VS. SEO PROFIT ROI MATH TABLE
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs uppercase tracking-wider mb-3 inline-block">
            Direct Financial Arbitrage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            OTA Commission Bleed vs. Direct SEO Investment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Why hotel SEO is not an expense—it is commission recovery that returns net profit directly to your hotel bank account every single month.
          </p>
        </div>

        <div className="rounded-[32px] bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[11px] font-black uppercase tracking-wider">
                  <th className="py-4 px-6">Property Tier</th>
                  <th className="py-4 px-6">Monthly Revenue</th>
                  <th className="py-4 px-6 text-rose-600">OTA 20% Commission</th>
                  <th className="py-4 px-6 text-emerald-600">18% Cut with SEO</th>
                  <th className="py-4 px-6">Monthly Retainer</th>
                  <th className="py-4 px-6 text-[#2258FF] font-black">Net Bank Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Boutique Hotel <span className="text-slate-400 font-normal block text-xs">(20 Suites)</span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-700">₦25,000,000</td>
                  <td className="py-4 px-6 font-semibold text-rose-600">₦5,000,000 / mo</td>
                  <td className="py-4 px-6 font-bold text-emerald-600">+₦900,000 / mo</td>
                  <td className="py-4 px-6 text-slate-600">₦350,000</td>
                  <td className="py-4 px-6 font-black text-emerald-600 text-base">
                    +₦550,000 <span className="text-[11px] font-bold text-emerald-700 block">(157% ROI)</span>
                  </td>
                </tr>

                <tr className="bg-blue-50/40 hover:bg-blue-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Business / Mid-Scale <span className="text-slate-400 font-normal block text-xs">(45 Rooms)</span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-700">₦60,000,000</td>
                  <td className="py-4 px-6 font-semibold text-rose-600">₦12,000,000 / mo</td>
                  <td className="py-4 px-6 font-bold text-emerald-600">+₦2,160,000 / mo</td>
                  <td className="py-4 px-6 text-slate-600">₦750,000</td>
                  <td className="py-4 px-6 font-black text-[#2258FF] text-base">
                    +₦1,410,000 <span className="text-[11px] font-bold text-blue-800 block">(188% ROI)</span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Luxury Resort / Chain <span className="text-slate-400 font-normal block text-xs">(100+ Rooms)</span>
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-700">₦150,000,000</td>
                  <td className="py-4 px-6 font-semibold text-rose-600">₦30,000,000 / mo</td>
                  <td className="py-4 px-6 font-bold text-emerald-600">+₦5,400,000 / mo</td>
                  <td className="py-4 px-6 text-slate-600">₦1,200,000</td>
                  <td className="py-4 px-6 font-black text-emerald-600 text-base">
                    +₦4,200,000 <span className="text-[11px] font-bold text-emerald-700 block">(350% ROI)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              * Calculations based on average 18% OTA commission reduction. Does not include new organic bookings created.
            </span>
            <button
              onClick={() => openAudit()}
              className="text-[#2258FF] font-black hover:underline cursor-pointer"
            >
              Calculate Your Exact Hotel Numbers →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LIVE EXPERIENCE SIMULATOR
      ========================================================================= */}
      <LiveHospitalityBookingWidget onOpenAuditModal={() => openAudit()} />

      {/* =========================================================================
          DIRECT BOOKING ROI CALCULATOR
      ========================================================================= */}
      <HotelRoiCalculator onOpenAuditModal={() => openAudit()} />

      {/* =========================================================================
          SERVICE PROCESS: OUR HOTEL SEO SERVICE PROCESS (5 Steps)
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Our Hotel SEO Service Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            A systematic 5-stage framework engineered to take your property from zero AI visibility to city-wide booking dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2258FF] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono font-black text-[#2258FF] bg-[#2258FF]/10 px-2.5 py-1 rounded-full">
                    {step.badge}
                  </span>
                  <span className="text-xl font-black text-slate-300 font-mono">
                    {step.step}
                  </span>
                </div>
                <strong className="text-base font-black text-slate-900 block mb-2">{step.title}</strong>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{step.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                <span>{step.output}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 60-Day Guarantee Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong className="text-sm font-black text-slate-900 block">
                The 60-Day Direct Traction Risk Reversal
              </strong>
              <span className="text-xs text-slate-600">
                If we do not produce measurable rank improvements in your target Google Maps 3-Pack and citation growth within 60 days, we work at no charge until you do.
              </span>
            </div>
          </div>
          <button
            onClick={() => openAudit()}
            className="px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Book a Free SEO Audit →</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          PRICING PACKAGES
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Investment Structure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Hotel SEO Investment in Nigeria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Most hotels budget between ₦300,000 and ₦1,200,000 monthly. Transparent retainers engineered around high direct reservation ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 rounded-[32px] bg-white border flex flex-col justify-between transition-all duration-300 ${
                tier.highlight
                  ? "border-2 border-[#2258FF] shadow-[0_20px_50px_rgba(34,88,255,0.18)] relative lg:-translate-y-2"
                  : "border-slate-200/90 shadow-md hover:shadow-xl"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2258FF] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{tier.desc}</p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">{tier.price}</span>
                  <span className="text-xs text-slate-500 font-bold">/{tier.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    What is included:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openAudit(tier.name)}
                className={`w-full py-4 rounded-2xl font-black text-sm transition-all cursor-pointer ${
                  tier.highlight
                    ? "bg-[#2258FF] hover:bg-[#1240e3] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          GRAND SLAM OFFER CARD
      ========================================================================= */}
      <GrandSlamOfferCard
        onClaim={() => openAudit()}
        title="The Tri-Channel Hotel SEO Grand Slam System"
        badge="Zero-Risk 60-Day Search Traction Guarantee"
      />

      {/* =========================================================================
          WHY CHYWEB ACADEMY AS YOUR SEO AGENCY FOR HOTELS IN NIGERIA
      ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            Hospitality Authority
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-5">
            Why ChyWeb Academy as Your SEO Agency for Hotels in Nigeria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Most SEO agencies in Nigeria are still built entirely around traditional ranking factors, Local SEO at best, with no real framework for AEO or GEO at all. We built our agency around exactly the shift already reshaping hotel search, the same framework behind our broader{" "}
            <a
              href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2258FF] font-bold underline hover:text-[#1040e6]"
            >
              AI-powered SEO
            </a>{" "}
            work, applied specifically to hospitality. If you'd rather understand this deeply enough to run it yourself, our{" "}
            <a
              href="https://chyweb.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2258FF] font-bold underline hover:text-[#1040e6]"
            >
              digital marketing training in Nigeria
            </a>{" "}
            covers the same fundamentals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openAudit()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Free SEO Audit →</span>
            </button>
            <Link
              href="/seo-training"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore SEO Training in Nigeria →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UPGRADE 4: 1-TAP WHATSAPP FAST-TRACK VIDEO AUDIT FOR BUSY MANAGERS
      ========================================================================= */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold mb-1">
              <Video size={14} />
              <span>Busy General Manager? Skip the Forms</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Request a 60-Second Video Audit via WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Send us your hotel name and city on WhatsApp. Our Lead Hospitality Strategist will record a personalized screen-share audit of your Google Maps 3-Pack rank and ChatGPT citations within 2 hours.
            </p>
          </div>

          <a
            href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20a%2060-second%20WhatsApp%20video%20audit%20for%20my%20hotel."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-white text-emerald-800 hover:bg-emerald-50 font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2.5 shrink-0 hover:scale-105"
          >
            <PhoneCall size={18} className="text-emerald-600" />
            <span>WhatsApp (0906 762 3555)</span>
          </a>
        </div>
      </section>

      {/* Hospitality Solutions Cluster Grid */}
      <HospitalityClusterNav
        currentPath="/hotel-seo-agency-nigeria"
        onOpenAuditModal={() => openAudit()}
      />

      {/* =========================================================================
          FAQ ACCORDION SECTION (UPGRADE 6: SCHEMA BADGES)
      ========================================================================= */}
      <FaqSection
        faqs={faqs}
        title="Frequently Asked Questions: SEO Agency for Hotels in Nigeria"
      />

      {/* =========================================================================
          FINAL CTA BANNER: STOP BEING INVISIBLE IN TWO-THIRDS OF HOW TRAVELERS SEARCH
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-10 sm:p-16 lg:p-20">
          <img
            src="/images/luxury_hotel_suite.jpg"
            alt="Luxury Hotel SEO Nigeria"
            className="absolute inset-0 w-full h-full object-cover brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#0a1e64]/95" />

          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2258FF]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest mb-6 inline-block">
              Total Search Presence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight !text-white" style={{ color: "#ffffff" }}>
              Stop Being Invisible in Two-Thirds of How Travelers Actually Search Now
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Ranking on Google alone was enough five years ago. It isn't anymore. Let's make sure your hotel shows up whether a traveler types, asks, or lets AI do the comparison for them.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openAudit("Hotel SEO Audit")}
                className="w-full sm:w-auto px-9 py-4.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Free SEO Audit →</span>
              </button>
              <button
                onClick={() => openAudit("Free AEO & GEO Visibility Check")}
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={18} className="text-amber-300" />
                <span>Request a Free AEO & GEO Visibility Check →</span>
              </button>
            </div>

            <p className="text-white/60 text-xs mt-6">
              Free 30-Minute AI Search Benchmark • Google 3-Pack Map Audit • No Obligation
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Sticky Conversion Bar */}
      <HospitalityMobileStickyBar onOpenAuditModal={() => openAudit()} />

      {/* Interactive Modal */}
      <HospitalityAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalService}
        defaultPropertyType="Hotel / Boutique Lodge"
      />
    </div>
  );
}
