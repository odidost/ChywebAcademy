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
  const [activeQueryTab, setActiveQueryTab] = useState<"maps" | "aeo" | "geo">("aeo");

  const pillars = [
    {
      num: "Pillar 01",
      badge: "The Foundation",
      icon: <MapPin className="text-[#2258FF]" size={24} />,
      title: "Local SEO: Dominating Google Maps 3-Pack",
      desc: "Over 68% of high-intent mobile searches for hotels in Nigeria happen on Google Maps. We optimize your Google Business Profile with verified high-res suite photography, amenity attributes, local citations ('hotels in Victoria Island' vs 'hotels in Lekki'), and an automated guest review flow to cement your 4.9★ rating.",
      metric: "Top 3 Google Maps Placement",
      bar: "bg-[#2258FF]",
      accent: "from-[#2258FF]/15 to-[#2258FF]/5 text-[#2258FF] border-[#2258FF]/20",
    },
    {
      num: "Pillar 02",
      badge: "Conversational Search",
      icon: <Bot className="text-emerald-600" size={24} />,
      title: "AEO: Answer Engine Optimization (ChatGPT & Gemini)",
      desc: "When an executive asks ChatGPT, Perplexity, or Siri: 'Which boutique hotel in Lagos is best for a corporate retreat with fast WiFi and airport pickup?', the AI quotes a specific property. We structure your hotel website with conversational Q&A schema and Organization entities so AI engines cite your suites directly.",
      metric: "Direct AI Recommendations",
      bar: "bg-emerald-500",
      accent: "from-emerald-500/15 to-emerald-500/5 text-emerald-600 border-emerald-200",
    },
    {
      num: "Pillar 03",
      badge: "Generative Search",
      icon: <Sparkles className="text-amber-500" size={24} />,
      title: "GEO: Generative Engine Optimization (AI Overviews)",
      desc: "Google AI Overviews increasingly summarize hotel comparisons before a guest ever clicks a website. In multi-hotel synthesis boxes, AI compares 3 competing hotels side-by-side. If your website lacks structured entity depth across suites, dining, and rates, AI misrepresents you or leaves you out entirely.",
      metric: "AI Comparison Table Domination",
      bar: "bg-amber-500",
      accent: "from-amber-500/15 to-amber-500/5 text-amber-600 border-amber-200",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Tri-Channel Visibility Audit",
      desc: "We analyze your Google Maps rank, review velocity, and test how ChatGPT, Gemini, and Google AI Overviews currently describe (or ignore) your hotel suites.",
      badge: "Audit & Benchmark",
    },
    {
      step: "02",
      title: "Google 3-Pack Map Domination",
      desc: "Google Business Profile optimization, local citation cleanup, geotagged media uploads, and automated 5-star review collection workflows.",
      badge: "Local Maps #1",
    },
    {
      step: "03",
      title: "AEO Content & JSON-LD Schema",
      desc: "Deep LodgingBusiness, HotelRoom, and FAQPage structured schema allowing conversational AI models to cite your property as the direct recommendation.",
      badge: "AEO AI Schema",
    },
    {
      step: "04",
      title: "GEO Entity Authority & PR",
      desc: "Comprehensive guides detailing executive meeting facilities, culinary offerings, and neighborhood perks built for AI synthesis engines.",
      badge: "Entity Depth",
    },
    {
      step: "05",
      title: "Active Algorithm Adaptation",
      desc: "Bi-weekly rank tracking across Google Maps, organic city keywords, and AI citation frequency to compound direct bookings month-over-month.",
      badge: "Monthly ROI Reports",
    },
  ];

  const pricingTiers = [
    {
      name: "Local SEO & 5-Star Review Engine",
      price: "₦350,000",
      period: "per month",
      desc: "Ideal for boutique hotels and serviced apartments aiming to dominate city-level searches and Google Maps 3-Pack rankings.",
      features: [
        "Google Business Profile weekly optimization & photo syndication",
        "Local 3-Pack rank tracking for 20+ neighborhood keywords",
        "Automated 5-star guest review generation & response system",
        "Local citation consistency & directory management across Nigeria",
        "Monthly direct map booking & phone call attribution reports",
      ],
      highlight: false,
    },
    {
      name: "Full-Spectrum Hotel SEO (Local + AEO + GEO)",
      price: "₦750,000",
      period: "per month",
      desc: "Our complete 3-pillar search strategy: Google Maps, ChatGPT conversational citations, and Google AI Overviews synthesis.",
      features: [
        "Everything in Local SEO & Review Engine",
        "Answer Engine Optimization (AEO) for ChatGPT & Perplexity",
        "Generative Engine Optimization (GEO) for Google AI Overviews",
        "Complete JSON-LD Hotel, Room & FAQPage schema architecture",
        "Content cluster creation targeting corporate & leisure guest queries",
        "Bi-weekly ranking & AI citation frequency attribution reports",
        "60-Day Direct Traction Risk Reversal Guarantee",
      ],
      highlight: true,
      badge: "Complete 2026 Strategy",
    },
    {
      name: "Hotel Chain & Resort Search Domination",
      price: "₦1,500,000",
      period: "per month",
      desc: "Multi-property search dominance for luxury resorts and hotel groups with nationwide reach across Lagos, Abuja, and PH.",
      features: [
        "Multi-location Local SEO across Lagos, Abuja, and Port Harcourt",
        "Enterprise entity SEO & digital PR authority backlinks",
        "Comprehensive AEO/GEO integration across all room & banquet pages",
        "Competitor displacement strategy against OTAs on brand searches",
        "Dedicated Senior SEO Strategist & weekly executive check-ins",
        "Market exclusivity for your target hotel category",
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "What is the difference between Local SEO, AEO, and GEO for a hotel?",
      answer:
        "Local SEO optimizes your Google Business Profile to win the Google Maps 3-Pack when someone searches 'hotels near me' or 'hotels in Victoria Island'. AEO (Answer Engine Optimization) structures your content so AI assistants like ChatGPT and Perplexity quote your hotel as the single best direct answer to conversational queries. GEO (Generative Engine Optimization) ensures that when AI produces multi-property comparison tables, your amenities, dining, and direct-booking perks are favorably highlighted.",
    },
    {
      question: "How long does hotel SEO take to produce direct reservations?",
      answer:
        "Local SEO improvements—such as Google Business Profile enhancements, geotagged photos, and review acceleration—often produce measurable rank jumps and phone inquiries within 4 to 8 weeks. Compounding organic traffic, brand displacement against OTAs, and regular AI citations typically gain strong authority over 3 to 6 months.",
    },
    {
      question: "Can an independent Nigerian hotel really outrank large international chains in AI search?",
      answer:
        "Yes, often much more easily than in traditional search! Generative AI engines favor clean, fast, well-structured entity content with verified review signals over sheer corporate brand size. An independent boutique hotel with pristine schema and authoritative content frequently gets cited ahead of legacy chains with outdated, slow websites.",
    },
    {
      question: "Will SEO help us reduce the 18% to 25% commission we lose to Booking.com?",
      answer:
        "Yes, that is the primary financial objective. When your hotel ranks #1 in Google Maps and is recommended directly by AI assistants, travelers book directly on your website rather than through an OTA aggregator. Our hotel clients cut OTA reliance by an average of 18% in their first 12 months—saving millions in commission fees.",
    },
    {
      question: "Do you also train our internal marketing and front-desk team?",
      answer:
        "Yes! As ChyWeb Academy, we not only manage your full-spectrum SEO campaigns, but we also train your front-desk and reservations personnel on automated review collection, WhatsApp follow-ups, and managing direct guest inquiries.",
    },
  ];

  const searchTicker = [
    "🔍 'best boutique hotel near Eko Hotel on ChatGPT'",
    "📍 'executive suites in Victoria Island on Google Maps 3-Pack'",
    "🤖 'recommend quiet business hotel in Abuja on Gemini AI'",
    "⭐ 'safe boutique hotel in Ikoyi with verified 5-star reviews'",
    "🏨 'luxury hotel near Transcorp Hilton Abuja with airport pickup'",
    "🌴 'beach resort in Lekki on Google AI Overviews'",
    "📈 'cut OTA commissions with direct Google search ranking'",
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] min-h-screen text-[#0b0f19]">
      {/* Decorative Orbs - ChyWeb Brand Blue & Golden Amber */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2258FF]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-amber-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/8 blur-[120px] pointer-events-none" />

      {/* Live Marquee Ticker of Real Searches - Vibrant ChyWeb Electric Blue */}
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
          HERO SECTION: Single-column centered architectural layout with interactive showcase
      ========================================================================= */}
      <section className="relative pt-16 sm:pt-22 pb-20 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3F0E6] to-[#E9E5D9] text-slate-800 rounded-b-[48px] sm:rounded-b-[60px] overflow-hidden border-b border-slate-300/50 shadow-[0_12px_45px_rgba(0,0,0,0.04)] z-10">
        {/* Ambient Architectural Lighting & Dot Matrix */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] bg-gradient-to-b from-[#2258FF]/12 via-amber-400/10 to-transparent blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Status Capsule / Eyebrow Pill */}
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

          {/* Main Hero Headline with Hand-drawn Luxury Curve */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.08] mb-6 text-slate-900 max-w-5xl mx-auto">
            AEO, Local SEO & GEO{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                Under One Strategy
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

          {/* Punchy Subtitle addressing customer pain point */}
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-4 font-medium max-w-3xl mx-auto">
            Ranking on traditional Google keywords used to be the whole game. In 2026, it is only one-third of it. Nigerian business travelers and tourists now search Google Maps, ask ChatGPT for recommendations, and read Google AI Overviews.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            We engineer multi-layered entity depth across Google Maps 3-Pack, AEO, and AI search engines so high-value travelers book directly with you.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Claim Free Hotel Search & AI Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20my%20hotel%20search%20rankings%20and%20AI%20citations."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#2258FF] text-slate-800 font-bold text-base hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <PhoneCall size={18} className="text-[#2258FF]" />
              <span>WhatsApp Direct (0906 762 3555)</span>
            </a>
          </div>

          {/* Trust Metrics Pill */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs font-bold text-slate-700 mb-14">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
              <span>Google Maps 3-Pack #1 Rank</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
              <span>ChatGPT & Gemini Citations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
              <span>Cut 18%–25% OTA Commissions</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-800">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400" />
                ))}
              </div>
              <span>4.98★ Rated Agency</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SHOWCASE: The Tri-Channel Search Cockpit (Google Maps + AEO + GEO)
        ========================================================================= */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[32px] sm:rounded-[40px] border-4 border-white shadow-[0_24px_60px_rgba(11,15,25,0.12)] overflow-hidden bg-slate-950 relative group">
            {/* Window Header */}
            <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-4 py-1 rounded-full border border-slate-800">
                chyweb.agency/hotel-seo/tri-channel-cockpit
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Tri-Channel Active</span>
              </div>
            </div>

            {/* Photographic Canvas with Luxury Resort & Search Overlay */}
            <div className="relative min-h-[480px] sm:min-h-[540px] overflow-hidden flex items-end p-6 sm:p-10">
              <img
                src="/images/luxury_resort_lagos.jpg"
                alt="Luxury Hotel in Lagos Recommended by AI"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

              {/* Floating Google 3-Pack Badge */}
              <div className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md text-white font-bold text-xs shadow-lg border border-white/10">
                <MapPin size={14} className="text-[#2258FF]" />
                <span>Google Maps #1: 'Hotels Near Victoria Island'</span>
                <span className="text-amber-400 font-black">4.9 ★ (380+ Reviews)</span>
              </div>

              {/* Floating AI Citation Status */}
              <div className="absolute top-6 right-6 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white font-black text-xs shadow-lg border border-emerald-400/30">
                <Bot size={14} />
                <span>ChatGPT & Gemini Direct Recommendation</span>
              </div>

              {/* Bottom Interactive Tri-Channel AI Cockpit Dock */}
              <div className="relative z-20 w-full bg-slate-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/15 text-white shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider">
                        AI Search Citation
                      </span>
                      <span className="text-xs text-emerald-400 font-bold">✓ Verified JSON-LD Lodging Schema</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                      <span className="text-emerald-400 font-bold block mb-1">ChatGPT & Google AI Overview Response:</span>
                      "Based on verified guest reviews and executive amenities, <strong>[Your Hotel Name]</strong> is the premier recommended boutique stay in Victoria Island for corporate travelers and luxury weekend getaways. Direct rates include complimentary breakfast and fast airport transfer."
                    </div>
                  </div>

                  <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between gap-3 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                    <div className="text-left md:text-right">
                      <div className="text-xs text-slate-400">Direct Search Uplift</div>
                      <div className="text-2xl font-black text-amber-400">+42% <span className="text-xs text-emerald-400 font-bold">Direct Bookings</span></div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Audit My Hotel SEO</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* 3 Channels Pill Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-[11px]">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <MapPin size={14} className="text-[#2258FF]" />
                    <span>1. Google Maps: <strong>Top 3-Pack Placement</strong></span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <Bot size={14} className="text-emerald-400" />
                    <span>2. AEO: <strong>ChatGPT Direct Answers</strong></span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <Sparkles size={14} className="text-amber-400" />
                    <span>3. GEO: <strong>AI Overviews Synthesis</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Strip */}
            <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
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
          THE NEW SEARCH REALITY: 3 PILLARS BENTO GRID
      ========================================================================= */}
      <section className="py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            The 2026 Search Reality
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            Why Nigerian Hotels Need Three Kinds of SEO Now, <br />
            <span className="text-[#2258FF]">Not Just Traditional Keywords</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Hotels investing in search reduce their dependency on Booking.com by an average of 18% within 12 months. But guest search behavior has fractured into three pathways. A hotel optimizing only for old keywords is invisible in two-thirds of the booking journey.
          </p>
        </div>

        {/* 3 Pillars Detailed Bento Grid with Generous Padding */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 mb-16 sm:mb-20">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 lg:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(34,88,255,0.1)] hover:border-[#2258FF] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${pillar.accent}`}>
                    {pillar.badge}
                  </span>
                </div>
                <div className={`w-14 h-1.5 ${pillar.bar} rounded-full mb-6`} />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 leading-snug">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{pillar.desc}</p>
              </div>
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#2258FF]">
                <span>{pillar.metric}</span>
                <CheckCircle2 size={18} className="text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            COORDINATED SEARCH TRIAD BANNER: Luxury Resort Background with Royal Blue
        ========================================================================= */}
        <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/20 text-white">
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Coordinated Hotel Search Engine Optimization"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#091b5c]/95" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mb-10">
              <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest inline-block mb-4">
                The Coordinated Search Triad
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black !text-white leading-tight mb-4" style={{ color: "#ffffff" }}>
                How Local SEO, AEO, and GEO Reinforce Each Other
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                When these three channels operate together under one technical data model, your direct bookings multiply while your cost-per-booking plummets:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <span className="text-amber-300 font-mono text-xs font-black block">1. Local SEO Foundation</span>
                <strong className="text-base font-black text-white block !text-white" style={{ color: "#ffffff" }}>Proximity & Maps Dominance</strong>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Secures top 3 placement when travelers search by location, building verified reviews and citation authority.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <span className="text-emerald-300 font-mono text-xs font-black block">2. AEO Conversational Trust</span>
                <strong className="text-base font-black text-white block !text-white" style={{ color: "#ffffff" }}>Direct AI Citations</strong>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Delivers your suites as the recommended answer when travelers ask ChatGPT or Perplexity specific questions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <span className="text-blue-200 font-mono text-xs font-black block">3. GEO Entity Synthesis</span>
                <strong className="text-base font-black text-white block !text-white" style={{ color: "#ffffff" }}>Comparison Superiority</strong>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Ensures Google AI Overviews highlight your direct booking perks, free breakfast, and room luxury over competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LIVE EXPERIENCE SIMULATOR
      ========================================================================= */}
      <LiveHospitalityBookingWidget onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* =========================================================================
          DIRECT BOOKING ROI CALCULATOR
      ========================================================================= */}
      <HotelRoiCalculator onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* =========================================================================
          HOTEL SEO IMPLEMENTATION ROADMAP (5 Stages)
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Scientific Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Our Hotel SEO Implementation Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From comprehensive entity auditing to dominating the Google 3-Pack and securing generative AI recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-[0_12px_32px_rgba(34,88,255,0.08)] hover:border-[#2258FF] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
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
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong className="text-sm font-black text-slate-900 block">
                The 60-Day Direct Traction Guarantee
              </strong>
              <span className="text-xs text-slate-600">
                If we do not deliver measurable rank improvements in your target Google Maps 3-Pack within 60 days, we work for free until you do.
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Claim Free Hotel SEO Audit</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* =========================================================================
          PRICING PACKAGES
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Transparent Retainers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Hotel SEO Investment in Nigeria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Predictable monthly pricing that compounds month-over-month as your search authority grows.
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
                onClick={() => setIsModalOpen(true)}
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
          IRRESISTIBLE VALUE OFFER: Zero-Risk Search Guarantee
      ========================================================================= */}
      <GrandSlamOfferCard
        onClaim={() => setIsModalOpen(true)}
        title="The Tri-Channel Hotel SEO Grand Slam System"
        badge="Zero-Risk 60-Day Search Traction Guarantee"
      />

      {/* =========================================================================
          THOUGHT LEADERSHIP & INTERNAL LINKS
      ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            Thought Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
            Why ChyWeb Academy as Your Hotel SEO Partner
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
            Most SEO agencies in Nigeria are still built around 2018 keyword counting with zero framework for AEO or GEO. We built our agency around the shift already reshaping hotel bookings in 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-bold">
            <a
              href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
              className="text-[#2258FF] hover:underline"
            >
              • AI-Powered SEO in Nigeria Guide →
            </a>
            <a
              href="https://chyweb.com.ng/blog/best-aeo-agency-in-nigeria-2026-guide-to-ai-search"
              className="text-[#2258FF] hover:underline"
            >
              • 2026 Guide to Answer Engine Optimization (AEO) →
            </a>
            <Link href="/seo-training" className="text-[#2258FF] hover:underline">
              • Practical SEO Training for Hotel Staff →
            </Link>
          </div>
        </div>
      </section>

      {/* Hospitality Solutions Cluster Grid */}
      <HospitalityClusterNav
        currentPath="/hotel-seo-agency-nigeria"
        onOpenAuditModal={() => setIsModalOpen(true)}
      />

      {/* =========================================================================
          FAQ ACCORDION SECTION
      ========================================================================= */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions — Hotel SEO Agency in Nigeria" />

      {/* =========================================================================
          FINAL CTA BANNER: Luxury Resort Backdrop with Royal Blue Overlay
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-10 sm:p-16 lg:p-20">
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Luxury Hotel in Nigeria"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#091b5c]/95" />

          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2258FF]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest mb-6 inline-block">
              Be Everywhere Guests Search
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight !text-white" style={{ color: "#ffffff" }}>
              Stop Being Invisible in Two-Thirds of How Travelers Search
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Ranking on traditional Google alone was enough five years ago. It isn't anymore. Let's make sure your suites show up whether a traveler searches Google Maps, asks ChatGPT, or reads an AI Overview.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Free Hotel SEO Audit</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20my%20hotel%20search%20rankings."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>WhatsApp: 0906 762 3555</span>
              </a>
            </div>

            <p className="text-white/60 text-xs mt-6">
              Free 30-Minute AI Search Benchmark • Google 3-Pack Map Audit • No Obligation
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Sticky Conversion Bar */}
      <HospitalityMobileStickyBar onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* Interactive Modal */}
      <HospitalityAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Local SEO, AEO & AI Search (Hotel)"
        defaultPropertyType="Hotel / Boutique Lodge"
      />
    </div>
  );
}
