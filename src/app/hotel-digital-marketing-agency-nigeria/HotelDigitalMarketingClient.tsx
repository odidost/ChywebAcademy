"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hotel,
  Layers,
  Search,
  Megaphone,
  Share2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Star,
  Zap,
  Globe,
  Gauge,
  Clock,
  Calendar,
  CreditCard,
  Flame,
  Lock,
  DollarSign,
  Compass,
  Building2,
  Users,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import HospitalityAuditModal from "@/components/HospitalityAuditModal";
import GrandSlamOfferCard from "@/components/GrandSlamOfferCard";
import HotelRoiCalculator from "@/components/HotelRoiCalculator";
import LiveHospitalityBookingWidget from "@/components/LiveHospitalityBookingWidget";
import HospitalityClusterNav from "@/components/HospitalityClusterNav";
import HospitalityMobileStickyBar from "@/components/HospitalityMobileStickyBar";

export default function HotelDigitalMarketingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Real-time live statistics simulation
  const [otaSavings, setOtaSavings] = useState(4820000);
  const [directBookings, setDirectBookings] = useState(3420);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const liveBookings = [
    { title: "Oceanview Penthouse Suite", city: "Victoria Island, Lagos", amount: "₦450,000", time: "Just now", type: "Hotel" },
    { title: "Diplomatic Presidential Suite", city: "Maitama, Abuja", amount: "₦380,000", time: "2 mins ago", type: "Hotel" },
    { title: "Executive Pool Villa", city: "Lekki Phase 1, Lagos", amount: "₦290,000", time: "5 mins ago", type: "Hotel" },
    { title: "Weekend Luxury Suite", city: "GRA, Port Harcourt", amount: "₦175,000", time: "8 mins ago", type: "Hotel" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setOtaSavings((prev) => prev + Math.floor(Math.random() * 25000) + 5000);
      setDirectBookings((prev) => prev + 1);
      setCurrentNotificationIndex((prev) => (prev + 1) % liveBookings.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [liveBookings.length]);

  const searchTicker = [
    "🏨 'luxury boutique hotel in Victoria Island with pool & generator'",
    "🛎️ 'executive suites in Maitama Abuja near Transcorp'",
    "🌴 'private resorts in Lekki for corporate retreats'",
    "📈 'cut Booking.com commissions for Nigerian boutique hotels'",
    "⭐ 'best hotels in Ikoyi for business travelers'",
    "🤖 'recommend top executive hotel near Eko Hotel on ChatGPT'",
    "💳 'direct hotel room booking with instant card pay'",
  ];

  // The 4 Core Disciplines
  // The 4 Core Disciplines
  const fourDisciplines = [
    {
      id: "web-design",
      title: "Web Design: Your Booking Engine, Not Just Your Brochure",
      lead: "Your website is the one destination every other channel funnels traffic into—it must convert once visitors arrive.",
      executiveTakeaway: "Every 100ms of extra load time cuts conversions by ~1%. Over half of mobile visitors abandon pages taking 3+ seconds.",
      features: [
        {
          title: "Native Booking Engine",
          desc: "Zero third-party redirects. Guests stay in your brand from room selection to instant Paystack, card, or transfer pay.",
          icon: <Layers className="text-[#2258FF]" size={18} />,
        },
        {
          title: "Upfront Dynamic Pricing",
          desc: "Live room availability and rates displayed immediately on your homepage, cutting the friction that sends guests to OTAs.",
          icon: <DollarSign className="text-[#2258FF]" size={18} />,
        },
        {
          title: "AI Search & Speed Built-In",
          desc: "Sub-second Nigerian load speeds with structured data so ChatGPT & Gemini cite and recommend your suites directly.",
          icon: <Sparkles className="text-[#2258FF]" size={18} />,
        },
      ],
      icon: <Layers className="text-[#2258FF]" size={24} />,
      image: "/images/luxury_hotel_suite.jpg",
      stat: "+23% Higher Conversion",
      statDetail: "From mobile-optimized booking engines",
      badge: "Channel 01 • Web Design",
      badgeColor: "bg-[#2258FF]",
    },
    {
      id: "seo",
      title: "SEO: Get Found Before Guests Ever Reach an OTA",
      lead: "Every booking through Booking.com or Expedia costs you a 15% to 25% commission cut. SEO traffic compounds over time.",
      executiveTakeaway: "Hotels investing properly in SEO reduce OTA dependency by an average of 18% within 12 months.",
      features: [
        {
          title: "Google Maps 3-Pack Domination",
          desc: "Rank in the top 3 on Google Maps when travelers search 'hotels near Victoria Island' or 'executive suites in Abuja'.",
          icon: <Search className="text-emerald-600" size={18} />,
        },
        {
          title: "Direct Answer Content",
          desc: "Content built to answer real guest questions (rates, WiFi, generator, pool) directly on search engines before OTAs appear.",
          icon: <CheckCircle2 className="text-emerald-600" size={18} />,
        },
        {
          title: "AI Search Ready (AEO)",
          desc: (
            <>
              Powered by our framework in{" "}
              <a
                href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
                className="text-[#2258FF] font-bold underline hover:text-blue-700"
              >
                AI-powered SEO
              </a>{" "}
              and{" "}
              <a
                href="https://chyweb.com.ng/blog/best-aeo-agency-in-nigeria-2026-guide-to-ai-search"
                className="text-[#2258FF] font-bold underline hover:text-blue-700"
              >
                AEO
              </a>
              , ensuring AI travel tools reference you first.
            </>
          ),
          icon: <Sparkles className="text-emerald-600" size={18} />,
        },
      ],
      icon: <Search className="text-emerald-600" size={24} />,
      image: "/images/hospitality_seo_maps.jpg",
      stat: "-18% OTA Reliance",
      statDetail: "Average drop within 12 months",
      badge: "Channel 02 • Hotel SEO",
      badgeColor: "bg-emerald-600",
    },
    {
      id: "paid-ads",
      title: "Paid Ads: Precision Spending, Not Guesswork",
      lead: "Paid advertising for hotels isn't one channel—it's a multi-tier stack capturing guests from intent to booking.",
      executiveTakeaway: "Retargeted hotel ads convert 2x to 4x better than cold traffic because you reach travelers with proven intent.",
      features: [
        {
          title: "Google Hotel Ads Stack",
          desc: "Puts your direct rates alongside OTA listings inside Google Search, Maps, and Google Travel to capture instant searchers.",
          icon: <Megaphone className="text-amber-500" size={18} />,
        },
        {
          title: "High-Intent Paid Social",
          desc: "Meta and Instagram destination ads averaging 2% to 4% CTR—well above the 0.5%–2% typical of generic landing pages.",
          icon: <TrendingUp className="text-amber-500" size={18} />,
        },
        {
          title: "Automated Retargeting Loop",
          desc: "Re-engages travelers who visited your site but didn't book, closing 2x to 4x better without splitting budget across rivals.",
          icon: <ShieldCheck className="text-amber-500" size={18} />,
        },
      ],
      icon: <Megaphone className="text-amber-500" size={24} />,
      image: "/images/luxury_resort_lagos.jpg",
      stat: "2x–4x Higher Return",
      statDetail: "From intent-based retargeting",
      badge: "Channel 03 • Paid Ads",
      badgeColor: "bg-amber-600",
    },
    {
      id: "social-media",
      title: "Social Media: Turning Followers Into Bookings, Not Just Likes",
      lead: "Social media only drives revenue when connected to an actual booking strategy, not just pretty aesthetic photos.",
      executiveTakeaway: "Video generates 2.1x–4.6x more reach, yet only 12% of hotel social posts include a direct booking link.",
      features: [
        {
          title: "High-Engagement Video",
          desc: "User-generated content & short-form video tours earning 2.8x to 5.1x more engagement than static branded posts.",
          icon: <Share2 className="text-purple-600" size={18} />,
        },
        {
          title: "1-Tap Booking CTAs",
          desc: "Bridges the 12% industry gap by placing 1-tap direct reservation links and WhatsApp front desk buttons on every post.",
          icon: <PhoneCall className="text-purple-600" size={18} />,
        },
        {
          title: "Segmented Audience Funnels",
          desc: "Segments content for corporate business travelers vs. weekend staycationers, feeding directly into paid retargeting.",
          icon: <Users className="text-purple-600" size={18} />,
        },
      ],
      icon: <Share2 className="text-purple-600" size={24} />,
      image: "/images/rooftop_dining_lounge.jpg",
      stat: "2.8x–5.1x Engagement",
      statDetail: "Plus 2.1x–4.6x more video reach",
      badge: "Channel 04 • Social Media",
      badgeColor: "bg-purple-600",
    },
  ];

  // How the 4 Channels Work Together
  const flywheel = [
    {
      step: "01",
      title: "Web Design",
      role: "Builds the fast, mobile-first foundation everything else points to.",
      icon: <Layers className="text-[#2258FF]" size={20} />,
      color: "bg-[#2258FF]",
    },
    {
      step: "02",
      title: "SEO",
      role: "Drives compounding organic visibility that reduces your reliance on OTA commissions over time.",
      icon: <Search className="text-emerald-500" size={20} />,
      color: "bg-emerald-500",
    },
    {
      step: "03",
      title: "Paid Ads",
      role: "Capture high-intent travelers immediately and retarget the ones who didn't convert on the first visit.",
      icon: <Megaphone className="text-amber-500" size={20} />,
      color: "bg-amber-500",
    },
    {
      step: "04",
      title: "Social Media",
      role: "Builds awareness and desire earlier in the guest journey, feeding both direct traffic and retargeting audiences.",
      icon: <Share2 className="text-purple-500" size={20} />,
      color: "bg-purple-500",
    },
  ];

  // Pricing Packages (Aligned with prompt: ₦500k to ₦2.5m)
  const pricingPackages = [
    {
      name: "SEO & Web Foundation",
      price: "₦500,000",
      period: "per month",
      desc: "For independent hotels looking to cement local organic dominance and convert mobile visitors directly.",
      features: [
        "Mobile-first direct booking website build or revamp",
        "Google Business Profile & Local 3-Pack optimization",
        "Hotel SEO & district-level keyword ranking",
        "Automated 5-star WhatsApp post-checkout reviews",
        "Monthly direct booking attribution report",
      ],
      highlight: false,
    },
    {
      name: "The 4-Channel Growth Suite",
      price: "₦1,250,000",
      period: "per month (incl. ad management)",
      desc: "Our complete integrated engine: Web Design, SEO, Paid Ads, and Social Media synchronized under one team.",
      features: [
        "Everything in SEO & Web Foundation",
        "Google Hotel Ads management (compete directly with Booking.com)",
        "Meta & Instagram dynamic retargeting campaigns",
        "High-converting video & social media content calendar",
        "AI Search Optimization for ChatGPT & Gemini",
        "Dedicated Senior Hospitality Growth Lead",
        "60-Day Direct Traction Risk Reversal Guarantee",
      ],
      highlight: true,
      badge: "Most Popular for Hotels",
    },
    {
      name: "Multi-Property & Resort Enterprise",
      price: "₦2,500,000",
      period: "per month",
      desc: "Full omnichannel domination for luxury resorts, boutique hotel groups, and multi-branch properties.",
      features: [
        "Full-funnel ad management across Google Travel, Meta & YouTube",
        "Multi-location local SEO & sub-domain architecture",
        "Custom PMS & booking engine deep API integrations",
        "Direct creator shoots & video storytelling production",
        "Bi-weekly executive revenue strategy sessions",
        "District exclusivity so we never work with direct rivals",
      ],
      highlight: false,
    },
  ];

  // Frequently Asked Questions Digital Marketing Agency for Hotels in Nigeria (5 exact questions)
  const faqs = [
    {
      question: "Do I need all four services, or can I start with just one?",
      answer:
        "You can start with one, most hotels begin with web design or SEO as the foundation, then layer in paid ads and social once that foundation is solid. But the strongest results come from having all four working together, since each channel makes the others perform better.",
    },
    {
      question: "How much does a full digital marketing package cost for a hotel in Nigeria?",
      answer:
        "Pricing depends on property size, ad spend, and scope, but most hotels investing in a coordinated web design, SEO, paid ads, and social strategy budget between ₦500,000 and ₦2,500,000 monthly, inclusive of ad spend. We'll provide an exact quote after a free audit of your current presence.",
    },
    {
      question: "How quickly will we see results?",
      answer:
        "Paid ads can drive bookings within days of launch. SEO typically takes around 6 months to gain real traction, but compounds afterward. Social media and web design improvements show measurable engagement and conversion shifts within 4 to 8 weeks.",
    },
    {
      question: "Will paid ads just replace the bookings we'd get anyway through SEO or direct traffic?",
      answer:
        "No, when managed properly, paid ads and SEO target different points in the guest journey and different traffic sources. Cannibalization is a real risk with poorly coordinated campaigns, which is exactly why running all four channels through one strategy matters.",
    },
    {
      question: "Can you manage our existing ad accounts and social profiles, or do we need to start fresh?",
      answer:
        "We can work with your existing accounts and history in most cases, preserving valuable data like audience targeting and past performance, rather than starting from zero.",
    },
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
          HERO SECTION: Centered H1, value subheadline, pushed-up CTAs & luxury terminal frame
      ========================================================================= */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3F0E6] to-[#E9E5D9] text-slate-800 rounded-b-[48px] sm:rounded-b-[60px] overflow-hidden border-b border-slate-300/50 shadow-[0_12px_45px_rgba(0,0,0,0.04)] z-10">
        {/* Ambient Architectural Lighting & Dot Matrix */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] bg-gradient-to-b from-[#2258FF]/12 via-amber-400/10 to-transparent blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Status Capsule / Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs font-bold mb-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#2258FF]/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-900 font-black tracking-wide uppercase text-[11px] sm:text-xs">
              ChyWeb Hotel Revenue Suite
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            Digital Marketing Agency{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                for Hotels in Nigeria
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

          {/* Value Subheadline (H2): Web Design, SEO, Paid Ads & Social Media Under One Roof */}
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-800 tracking-tight leading-snug mb-5 max-w-4xl mx-auto">
            Web Design, SEO, Paid Ads &amp; Social Media{" "}
            <span className="text-[#2258FF] font-black">
              Under One Roof
            </span>
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria&apos;s digital marketing agency for hotels, web design, SEO, paid ads, and social media, run as one strategy, not four disconnected vendors.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20review%20my%20hotel%20digital%20marketing%20strategy."
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
            Free audit. No obligation.
          </div>

          {/* Micro-Trust Badges with Verified Benchmarks */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Zap size={16} className="text-[#2258FF]" />
              <span>+23% Conversion with Mobile-Optimized Engine</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <TrendingUp size={16} className="text-emerald-500" />
              <span>18% Average Reduction in OTA Dependency</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-amber-500" />
              <span>4 Channels Built to Work Together</span>
            </div>
          </div>

          {/* Centered Single-Column Visual Showcase: 4-Channel Revenue Command Center Under One Roof */}
          <div className="w-full max-w-5xl rounded-[32px] overflow-hidden shadow-[0_25px_65px_rgba(34,88,255,0.18)] border-4 border-white/90 relative group bg-[#0a1e64]">
            {/* High-End App/Browser Control Bar */}
            <div className="bg-[#2258FF] px-4 sm:px-6 py-3 border-b border-white/20 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-mono border border-white/10">
                <Lock size={11} className="text-emerald-400" />
                <span>chyweb.agency/hotel-marketing/4-channels-under-one-roof • Lagos, NG</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>4 Channels Synchronized Live</span>
              </div>
            </div>

            {/* The 4-Channel Coordinated Visual Canvas (Under One Roof) */}
            <div className="relative p-3.5 sm:p-5 bg-[#081530] overflow-hidden">
              {/* Ambient Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-[#2258FF]/20 blur-[100px] pointer-events-none" />

              {/* 4 Connected Channels Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
                {/* Channel 1: Web Design */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] sm:h-[320px] border border-white/15 group/c1 shadow-lg bg-slate-900 flex flex-col justify-between p-3.5">
                  <img
                    src="/images/luxury_hotel_suite.jpg"
                    alt="Hotel Web Design & Direct Booking Engine"
                    className="absolute inset-0 w-full h-full object-cover group-hover/c1:scale-110 transition-transform duration-700 brightness-[0.75]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#0a1e64]/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Layers size={11} />
                      <span>Web Design</span>
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="relative z-10 text-left">
                    <span className="text-[10px] text-blue-300 font-black block uppercase tracking-wider">Channel 01</span>
                    <strong className="text-xs sm:text-sm font-black text-white block leading-tight mb-1 !text-white" style={{ color: "#ffffff" }}>
                      Direct Booking Engine
                    </strong>
                    <span className="inline-block text-[10px] text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                      +23% Conversion
                    </span>
                  </div>
                </div>

                {/* Channel 2: Hotel SEO */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] sm:h-[320px] border border-white/15 group/c2 shadow-lg bg-slate-900 flex flex-col justify-between p-3.5">
                  <img
                    src="/images/hospitality_seo_maps.jpg"
                    alt="Hotel SEO and Google Maps 3-Pack Optimization"
                    className="absolute inset-0 w-full h-full object-cover group-hover/c2:scale-110 transition-transform duration-700 brightness-[0.75]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#0a1e64]/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Search size={11} />
                      <span>Hotel SEO</span>
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="relative z-10 text-left">
                    <span className="text-[10px] text-emerald-300 font-black block uppercase tracking-wider">Channel 02</span>
                    <strong className="text-xs sm:text-sm font-black text-white block leading-tight mb-1 !text-white" style={{ color: "#ffffff" }}>
                      Google Maps &amp; AI
                    </strong>
                    <span className="inline-block text-[10px] text-amber-300 font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                      -18% OTA Reliance
                    </span>
                  </div>
                </div>

                {/* Channel 3: Paid Ads */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] sm:h-[320px] border border-white/15 group/c3 shadow-lg bg-slate-900 flex flex-col justify-between p-3.5">
                  <img
                    src="/images/luxury_resort_lagos.jpg"
                    alt="Google Hotel Ads and Precision Retargeting"
                    className="absolute inset-0 w-full h-full object-cover group-hover/c3:scale-110 transition-transform duration-700 brightness-[0.75]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#0a1e64]/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Megaphone size={11} />
                      <span>Paid Ads</span>
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="relative z-10 text-left">
                    <span className="text-[10px] text-amber-300 font-black block uppercase tracking-wider">Channel 03</span>
                    <strong className="text-xs sm:text-sm font-black text-white block leading-tight mb-1 !text-white" style={{ color: "#ffffff" }}>
                      Google Hotel Ads
                    </strong>
                    <span className="inline-block text-[10px] text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                      2x–4x Higher Return
                    </span>
                  </div>
                </div>

                {/* Channel 4: Social Media */}
                <div className="relative rounded-2xl overflow-hidden h-[240px] sm:h-[320px] border border-white/15 group/c4 shadow-lg bg-slate-900 flex flex-col justify-between p-3.5">
                  <img
                    src="/images/rooftop_dining_lounge.jpg"
                    alt="Hotel Social Media and Destination Storytelling"
                    className="absolute inset-0 w-full h-full object-cover group-hover/c4:scale-110 transition-transform duration-700 brightness-[0.75]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#0a1e64]/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-purple-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Share2 size={11} />
                      <span>Social Media</span>
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="relative z-10 text-left">
                    <span className="text-[10px] text-purple-300 font-black block uppercase tracking-wider">Channel 04</span>
                    <strong className="text-xs sm:text-sm font-black text-white block leading-tight mb-1 !text-white" style={{ color: "#ffffff" }}>
                      Video Storytelling
                    </strong>
                    <span className="inline-block text-[10px] text-purple-300 font-bold bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                      2.8x–5.1x Engagement
                    </span>
                  </div>
                </div>
              </div>

              {/* Central Floating "Under One Roof" Live Booking Synchronizer Dock */}
              <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/15 flex flex-col md:flex-row items-center justify-between gap-3 text-white relative z-20">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-shrink-0">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 absolute inset-0" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[10px] text-emerald-400 font-black uppercase tracking-wider block">
                      ⚡ 4 Channels Coordinated Under One Roof
                    </span>
                    <strong className="text-xs sm:text-sm font-black text-white truncate block">
                      {liveBookings[currentNotificationIndex].title} ({liveBookings[currentNotificationIndex].city})
                    </strong>
                    <span className="text-[10px] text-slate-300 font-medium">Attributed to Web Engine + SEO + Retargeting Stack</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/10 pt-2 md:pt-0">
                  <div className="text-left md:text-right">
                    <span className="text-xs sm:text-sm font-black text-amber-300 block">
                      {liveBookings[currentNotificationIndex].amount}
                    </span>
                    <span className="text-[9px] text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                      0% Commission Cut
                    </span>
                  </div>
                  <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/10">
                    <Star size={13} className="fill-amber-400 text-amber-400" />
                    <span>4.98★ Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock */}
            <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center text-left text-slate-900 shadow-xl z-20 relative">
              <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Commissions Saved
                </span>
                <strong className="text-base sm:text-xl font-black text-[#2258FF]">
                  ₦{otaSavings.toLocaleString("en-NG")}
                </strong>
                <span className="text-[10px] text-blue-600 font-bold block mt-0.5">Kept in your account</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Direct Guest Bookings
                </span>
                <strong className="text-base sm:text-xl font-black text-emerald-600">
                  {directBookings.toLocaleString()}+ Booked
                </strong>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">Paid straight to property</span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100/80 hidden sm:block">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Avg OTA Comm. Cut
                </span>
                <strong className="text-base sm:text-xl font-black text-amber-600">
                  -18.4% Saved
                </strong>
                <span className="text-[10px] text-amber-700 font-bold block mt-0.5">Off third-party fees</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-xs sm:text-sm shadow-[0_8px_20px_rgba(34,88,255,0.3)] transition-all hover:scale-[1.02] cursor-pointer text-center flex items-center justify-center gap-2"
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
          SECTION: The Reality of Separate Freelancers vs One Coordinated Strategy
      ========================================================================= */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] bg-white/95 backdrop-blur-xl border-2 border-slate-200/90 shadow-[0_20px_50px_rgba(11,15,25,0.05)]">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-3 inline-block">
              One Team • One Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">
              Why Disconnected Freelancers Fail to Fill Your Rooms
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nigeria&apos;s digital marketing agency for hotels, web design, SEO, paid ads, and social media, run as one strategy, not four disconnected vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* The Leak / The Hidden Risk */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-[30px] bg-gradient-to-br from-rose-50/40 via-slate-50 to-amber-50/40 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center mb-5 font-black text-lg shadow-xs">
                  ⚠️
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-rose-700 block mb-2">
                  The Disconnected Freelancer Trap
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug">
                  Four Separate Invoices, Zero Compounding Results
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Hire separate freelancers for your site, your SEO, and your ads, and each one runs in isolation, none of it compounding. Meanwhile hotels with mobile-optimized booking engines convert 23% higher, and reduce OTA dependency by 18% on average, but only when the channels actually reinforce each other.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Web designer builds a site without local SEO or conversion booking flows</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Ad freelancer sends expensive clicks to a slow page that doesn&apos;t convert</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Social media posts pretty photos with zero direct booking links</span>
                </div>
              </div>
            </div>

            {/* The Solution / The 4-Channel Integrated Fix */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-[30px] bg-gradient-to-br from-[#0a1e64] via-[#1040E6] to-[#2258FF] text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <img
                src="/images/luxury_hotel_suite.jpg"
                alt="Luxury Hotel Direct Booking System"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#1040E6]/80 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 flex items-center justify-center mb-5 font-black text-lg shadow-sm">
                  ⚡
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-300 block mb-2">
                  The Coordinated Revenue Engine
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-snug drop-shadow-sm">
                  One Team, One Strategy, Four Channels Working as One
                </h3>
                <p className="text-blue-50 text-sm sm:text-base leading-relaxed mb-6 font-medium drop-shadow-sm">
                  We fix that. One team, one strategy, four channels built to work together from day one. Web design captures and converts traffic, SEO compounds organic rankings, paid ads capture immediate intent, and social retargeting closes hesitating guests.
                </p>
              </div>

              <div className="relative z-10 space-y-3 pt-5 border-t border-white/20 text-xs sm:text-sm text-blue-50">
                <div className="flex items-center gap-2.5 font-bold">
                  <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-black flex-shrink-0">✓</span>
                  <span>Mobile-first direct booking engine with 0% OTA commissions</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold">
                  <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-black flex-shrink-0">✓</span>
                  <span>Google Hotel Ads &amp; Maps visibility dominating your city</span>
                </div>
                <div className="flex items-center gap-2.5 font-bold">
                  <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-900 flex items-center justify-center text-xs font-black flex-shrink-0">✓</span>
                  <span>Dynamic retargeting converting visitors 2x–4x better</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: The Economics of Coordination (Balanced, Scannable 3-Card & Metric Grid)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-3 inline-block border border-[#2258FF]/20">
            The Economics of Coordination
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight mb-4">
            Why Hotels Need All Four Channels Working Together,{" "}
            <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
              Not in Isolation
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Here&apos;s what most hotels get wrong: hiring separate freelancers who operate in silos. It doesn&apos;t compound because it was never built to work together.
          </p>
        </div>

        {/* 3 Balanced, Moderate-Height Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 items-stretch">
          {/* Card 1: The Disconnected Freelancer Trap */}
          <div className="p-7 sm:p-8 rounded-[28px] bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center font-black text-base mb-4">
                ⚠️
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 block mb-1">
                The Disconnection Problem
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 leading-snug">
                Why Isolated Retainers Never Compound
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                You hire a web designer, an SEO freelancer, and an ad manager separately. Each runs in isolation, creating fragmented invoices and zero compounding momentum.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>4 Invoices • 0 Synergy</span>
              <span className="text-slate-400">✕</span>
            </div>
          </div>

          {/* Card 2: The Numbers Behind Integration */}
          <div className="p-7 sm:p-8 rounded-[28px] bg-white border-2 border-[#2258FF]/30 shadow-md flex flex-col justify-between hover:border-[#2258FF] transition-colors relative">
            <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider">
              The Data Breakdown
            </span>
            <div>
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#2258FF] flex items-center justify-center font-black text-base mb-4">
                <TrendingUp size={20} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#2258FF] block mb-1">
                The Friction Math
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 leading-snug">
                $1.85 Clicks vs. +23% Conversion
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                The average hotel site converts only 1.5%–3.9%. Mobile engines convert 23% higher. At ~$1.85 per Google click, money bleeds fast unless landing pages and retargeting (2x–4x better) are coordinated.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2258FF]">
              <span>23% Lift • 2x–4x Retargeting</span>
              <span className="text-emerald-500">✓</span>
            </div>
          </div>

          {/* Card 3: The Compounding System */}
          <div className="p-7 sm:p-8 rounded-[28px] bg-gradient-to-br from-[#0a1e64] via-[#1040E6] to-[#2258FF] text-white shadow-lg flex flex-col justify-between relative overflow-hidden group">
            <img
              src="/images/hotel_lobby_lagos.jpg"
              alt="Coordinated Hotel Strategy"
              className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#1040E6]/80 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 flex items-center justify-center font-black text-base mb-4">
                ⚡
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 block mb-1">
                The Coordinated Solution
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mb-3 leading-snug drop-shadow-sm !text-white" style={{ color: "#ffffff" }}>
                Spend That Compounds vs Disappears
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-4 font-medium drop-shadow-sm">
                Treating these four services as one connected system, not four separate invoices, turns wasted click spend into high-margin direct guest bookings.
              </p>
            </div>
            <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-emerald-300">
              <span>1 Unified Agency Engine</span>
              <span>✓</span>
            </div>
          </div>
        </div>

        {/* 4 Compact Metric Tiles (Short, crisp numbers with clear labels) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-left">
            <span className="text-xs font-black text-slate-400 block uppercase mb-1">Baseline Conversion</span>
            <strong className="text-xl sm:text-2xl font-black text-slate-900 block mb-0.5">1.5% – 3.9%</strong>
            <span className="text-[11px] text-slate-500 font-medium">Standard hotel website range</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-200 shadow-xs text-left">
            <span className="text-xs font-black text-[#2258FF] block uppercase mb-1">Mobile-First Lift</span>
            <strong className="text-xl sm:text-2xl font-black text-[#2258FF] block mb-0.5">+23% Higher</strong>
            <span className="text-[11px] text-blue-700 font-medium">With integrated booking engine</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-200 shadow-xs text-left">
            <span className="text-xs font-black text-amber-600 block uppercase mb-1">Google Ads Cost</span>
            <strong className="text-xl sm:text-2xl font-black text-amber-600 block mb-0.5">~$1.85 / Click</strong>
            <span className="text-[11px] text-amber-700 font-medium">4.90% CTR • 3.85% Conversion</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs text-left">
            <span className="text-xs font-black text-emerald-600 block uppercase mb-1">Social Retargeting</span>
            <strong className="text-xl sm:text-2xl font-black text-emerald-600 block mb-0.5">2x – 4x Return</strong>
            <span className="text-[11px] text-emerald-700 font-medium">Compared to cold, first-touch ads</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: The Four Channels Detailed Breakdown (With Rich Images)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            The 4 Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            The Four Core Channels Behind Your Hotel&apos;s Revenue
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Four specialized disciplines engineered around how guests discover, evaluate, and book hotel rooms across Nigeria.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {fourDisciplines.map((disc, idx) => (
            <div
              key={disc.id}
              className={`rounded-[36px] bg-white border border-slate-200/90 shadow-[0_10px_35px_rgba(11,15,25,0.05)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Media Side (5 cols) */}
              <div className={`lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] overflow-hidden group ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={disc.image}
                  alt={disc.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/80 via-[#0a1e64]/20 to-transparent" />

                {/* Floating badge */}
                <div className="absolute top-6 left-6 z-10 px-3.5 py-1.5 rounded-full bg-[#2258FF] text-white text-xs font-black uppercase tracking-wider shadow-md">
                  {disc.badge}
                </div>

                {/* Bottom stat pill */}
                <div className="absolute bottom-6 left-6 right-6 z-10 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-xl text-slate-900 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 font-black uppercase block">{disc.statDetail}</span>
                    <strong className="text-base sm:text-lg font-black text-[#2258FF]">{disc.stat}</strong>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                    {disc.icon}
                  </div>
                </div>
              </div>

              {/* Text Side (7 cols) */}
              <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-[#2258FF] border border-blue-200">
                      Channel 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-300 font-bold">•</span>
                    <span className="text-xs font-bold text-slate-500">Core Revenue Discipline</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 leading-snug">
                    {disc.title}
                  </h3>

                  <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-4">
                    {disc.lead}
                  </p>

                  {/* Designed Executive Takeaway Banner */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100/80 mb-5 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center shrink-0 mt-0.5">
                      <TrendingUp size={14} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider block mb-0.5">
                        Performance Takeaway
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {disc.executiveTakeaway}
                      </p>
                    </div>
                  </div>

                  {/* 3 Designed Micro-Cards for Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {disc.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[#2258FF]/40 hover:shadow-sm transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center mb-2.5">
                            {feat.icon}
                          </div>
                          <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-snug mb-1.5">
                            {feat.title}
                          </h4>
                          <div className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                            {feat.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION: How the Four Channels Work Together (Compounding System)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-8 sm:p-14 lg:p-18 group">
          {/* Background Photo with High Visibility Blue Gradient Scrim */}
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Compounding Hospitality Marketing Strategy"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/95 via-[#1040E6]/88 to-[#2258FF]/82 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-[#0a1e64]/20" />

          <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-amber-300 font-black text-xs uppercase tracking-widest inline-block mb-4">
              The Compounding Engine
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-white leading-tight mb-6" style={{ color: "#ffffff" }}>
              How the Four Channels Work Together
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Each channel makes the others more effective. A guest sees your property on Instagram, searches your name on Google and finds strong SEO content and reviews, clicks a retargeting ad a few days later, and lands on a fast, mobile-optimized website that converts the visit into a booking. That&apos;s not four separate services, that&apos;s one coordinated system.
            </p>
          </div>

          {/* 4 Connected Channels Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {flywheel.map((fw, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-between hover:bg-white/15 transition-all text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-amber-300 font-mono">{fw.step}</span>
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      {fw.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 !text-white" style={{ color: "#ffffff" }}>
                    {fw.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-normal">
                    {fw.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Connected Flow Banner */}
          <div className="relative z-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center text-xs sm:text-sm text-blue-100 font-medium">
            <strong className="text-white font-bold block mb-1">The Guest Journey In Action:</strong>
            Instagram Discovery → Google 5-Star Reviews → Retargeting Ad → 0.8s Mobile Direct Booking.
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
          PRICING PACKAGES (₦500,000 to ₦2,500,000)
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Hotel Digital Marketing Investment in Nigeria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            One monthly fee covering your entire growth stack—no fragmented invoices, no finger-pointing, and no unaccountable freelancers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 rounded-[32px] bg-white border flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? "border-2 border-[#2258FF] shadow-[0_20px_50px_rgba(34,88,255,0.18)] relative lg:-translate-y-2"
                  : "border-slate-200/90 shadow-md hover:shadow-xl"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2258FF] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                  {pkg.badge}
                </span>
              )}

              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{pkg.desc}</p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">{pkg.price}</span>
                  <span className="text-xs text-slate-500 font-bold">/{pkg.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                    What is included:
                  </span>
                  {pkg.features.map((feat, fIdx) => (
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
                  pkg.highlight
                    ? "bg-[#2258FF] hover:bg-[#1240e3] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION: Why ChyWeb Academy as Your Digital Marketing Agency for Hotels in Nigeria
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-8 sm:p-14 lg:p-18 group">
          <img
            src="/images/luxury_hotel_suite.jpg"
            alt="ChyWeb Academy Hotel Digital Marketing Agency"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/95 via-[#1040E6]/88 to-[#2258FF]/82 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-[#0a1e64]/20" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-amber-300 font-black text-xs uppercase tracking-widest inline-block mb-4">
              Agency Authority &amp; Training
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-white leading-tight mb-6" style={{ color: "#ffffff" }}>
              Why ChyWeb Academy as Your Digital Marketing Agency for Hotels in Nigeria
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
              Most agencies in Nigeria offer these four services as separate line items handled by separate people who rarely talk to each other. We build them as one connected strategy from day one, backed by the same entity SEO and AI search framework covered in our broader agency work in{" "}
              <a
                href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
                className="text-amber-300 font-bold underline hover:text-amber-200 transition-colors"
              >
                AI-powered SEO
              </a>{" "}
              and{" "}
              <a
                href="https://chyweb.com.ng/blog/best-aeo-agency-in-nigeria-2026-guide-to-ai-search"
                className="text-amber-300 font-bold underline hover:text-amber-200 transition-colors"
              >
                answer engine optimization
              </a>
              . If you&apos;d rather build this expertise on your own team, our{" "}
              <a
                href="https://chyweb.com.ng/"
                className="text-amber-300 font-bold underline hover:text-amber-200 transition-colors"
              >
                digital marketing training in Nigeria
              </a>{" "}
              covers the same principles we apply across every hotel client.
            </p>

            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-9 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          IRRESISTIBLE VALUE OFFER: Zero-Risk Direct Booking Guarantee
      ========================================================================= */}
      <GrandSlamOfferCard
        onClaim={() => setIsModalOpen(true)}
        title="The 4-in-1 Hotel Direct Revenue Growth System"
        badge="Zero-Risk 60-Day Direct Booking Guarantee"
      />

      {/* Cross-Link Topic Cluster: The Full Hospitality Suite */}
      <HospitalityClusterNav
        currentPath="/hotel-digital-marketing-agency-nigeria"
        onOpenAuditModal={() => setIsModalOpen(true)}
      />

      {/* =========================================================================
          SECTION: Frequently Asked Questions Digital Marketing Agency for Hotels in Nigeria
      ========================================================================= */}
      <FaqSection
        faqs={faqs}
        title="Frequently Asked Questions Digital Marketing Agency for Hotels in Nigeria"
      />

      {/* =========================================================================
          FINAL CTA SECTION: Stop Losing Bookings to a Disconnected Marketing Strategy
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-10 sm:p-16 lg:p-20 group">
          {/* High-visibility Photographic Background */}
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Luxury Resort Lagos"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/95 via-[#1040E6]/88 to-[#2258FF]/82 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-[#0a1e64]/20" />

          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2258FF]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-amber-300 font-black text-xs uppercase tracking-widest mb-6 inline-block">
              End The Confusion
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight !text-white" style={{ color: "#ffffff" }}>
              Stop Losing Bookings to a Disconnected Marketing Strategy
            </h2>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
              Every day your web design, SEO, ads, and social media aren&apos;t working together, you&apos;re leaving bookings on the table that a coordinated strategy would have captured. Let&apos;s build it properly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20review%20my%20hotel%20digital%20marketing%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>WhatsApp: 0906 762 3555</span>
              </a>
            </div>

            <p className="text-blue-200/80 text-xs mt-6">
              Free 30-Minute Strategy Session • Direct Booking Revenue Audit • No Obligation
            </p>
          </div>
        </div>
      </section>

      {/* Floating Mobile Sticky Conversion Bar */}
      <HospitalityMobileStickyBar onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* Interactive Modal */}
      <HospitalityAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Hotel Digital Marketing (Full Stack)"
        defaultPropertyType="Hotel / Boutique Lodge"
      />
    </div>
  );
}
