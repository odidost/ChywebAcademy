"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarCheck,
  Smartphone,
  CreditCard,
  Zap,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Layers,
  Lock,
  Calculator,
  AlertOctagon,
  Star,
  Check,
  Clock,
  Calendar,
  DollarSign,
  UserCheck,
  RefreshCw,
  XCircle,
  Award,
  Flame,
  Search,
  ExternalLink,
  ChevronRight,
  Wifi,
  Coffee,
  CheckCheck,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import HospitalityAuditModal from "@/components/HospitalityAuditModal";
import GrandSlamOfferCard from "@/components/GrandSlamOfferCard";
import HotelRoiCalculator from "@/components/HotelRoiCalculator";
import LiveHospitalityBookingWidget from "@/components/LiveHospitalityBookingWidget";
import HospitalityClusterNav from "@/components/HospitalityClusterNav";
import HospitalityMobileStickyBar from "@/components/HospitalityMobileStickyBar";

export default function HotelBookingWebDesignClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  // Real-time live statistics simulation
  const [otaSavings, setOtaSavings] = useState(4820000);
  const [directBookings, setDirectBookings] = useState(3420);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const showcaseRooms = [
    {
      id: "diplomatic-suite",
      title: "Diplomatic Sea-View Suite",
      city: "Victoria Island, Lagos",
      image: "/images/luxury_hotel_suite.jpg",
      directRate: 150000,
      otaRate: 185000,
      nights: 2,
      perks: ["King Bed & Ocean Balcony", "Free Chef Breakfast", "High-Speed 5G WiFi", "24/7 Power Guaranteed"],
      badge: "Most Booked Direct",
      remaining: 2,
    },
    {
      id: "presidential-penthouse",
      title: "Presidential Penthouse Suite",
      city: "Maitama, Abuja",
      image: "/images/hotel_lobby_lagos.jpg",
      directRate: 320000,
      otaRate: 390000,
      nights: 2,
      perks: ["Private Butler Service", "Panoramic Skyline Terrace", "VIP Lounge Access", "High-Speed 5G WiFi"],
      badge: "Executive VIP Tier",
      remaining: 1,
    },
    {
      id: "executive-pool-villa",
      title: "Executive Pool Villa",
      city: "Lekki Phase 1, Lagos",
      image: "/images/luxury_resort_lagos.jpg",
      directRate: 220000,
      otaRate: 275000,
      nights: 2,
      perks: ["Private Plunge Pool", "King Bed & Lounge", "Chef Room Service", "Zero Cancellation Fee"],
      badge: "Resort Collection",
      remaining: 3,
    },
  ];

  const activeRoom = showcaseRooms[selectedRoomIndex];
  const totalDirect = activeRoom.directRate * activeRoom.nights;
  const totalOTA = activeRoom.otaRate * activeRoom.nights;
  const guestSavings = totalOTA - totalDirect;

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

  // State for 8 Pillars Section
  const [activePillarCategory, setActivePillarCategory] = useState<"all" | "mobile_ux" | "engine_pay">("all");
  const [expandedPillars, setExpandedPillars] = useState<Record<string, boolean>>({});

  const togglePillarExpand = (id: string) => {
    setExpandedPillars((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // What Goes Into a Properly Built Hotel Booking Website (8 Core Pillars)
  const bookingPillars = [
    {
      id: "mobile-first",
      specCode: "SPEC-01",
      category: "mobile_ux",
      title: "Mobile-First Booking Flow Design",
      desc: "We design the entire journey — room cards, date selection, guest details, payment — for a thumb on a small screen first, then scale up to tablet and desktop. The reverse approach, designing for desktop and adapting down, is the structural reason most hotel booking flows underperform on mobile.",
      takeaway: "Designed for small screens first, then scaled up.",
      icon: <Smartphone className="text-[#2258FF]" size={22} />,
      badge: "Thumb-First UX",
      stat: "60-75% Mobile Bookings",
      amateurMistake: "Designing for desktop displays first, causing oversized headers and tiny, un-clickable buttons on smartphones.",
      chywebSpec: "Engineered around natural thumb reach zones with high-contrast sticky reservation controls.",
      widgetType: "mobile_reach",
    },
    {
      id: "date-selection",
      specCode: "SPEC-02",
      category: "mobile_ux",
      title: "Frictionless Date Selection",
      desc: "Most hotel booking flows still use clunky calendar widgets that take multiple taps to navigate and render dense grids that are hard to scan on a phone. We build date pickers that are fast, clear, and built for one-handed mobile use.",
      takeaway: "Fast, clear, one-handed mobile calendar.",
      icon: <CalendarCheck className="text-emerald-600" size={22} />,
      badge: "Zero-Lag Dates",
      stat: "2 Taps Check-In/Out",
      amateurMistake: "Multi-step modal popups that take 6+ taps to pick check-in and check-out dates.",
      chywebSpec: "Instant dual-tap date drawer with live rates previewed per night directly in calendar cells.",
      widgetType: "calendar_flow",
    },
    {
      id: "guest-checkout",
      specCode: "SPEC-03",
      category: "mobile_ux",
      title: "Guest Checkout, No Forced Account Creation",
      desc: "Requiring an account before booking is one of the most common, most avoidable sources of abandonment. We build guest checkout as the default, removing a step that has no upside for conversion.",
      takeaway: "Zero forced passwords or accounts.",
      icon: <UserCheck className="text-amber-500" size={22} />,
      badge: "Frictionless Checkout",
      stat: "#1 Cause of Drop-off",
      amateurMistake: "Forcing guest registration, email password setup, and OTP validation before viewing the price.",
      chywebSpec: "1-tap guest reservation collecting name, WhatsApp number, and payment with zero forced signups.",
      widgetType: "guest_toggle",
    },
    {
      id: "upfront-pricing",
      specCode: "SPEC-04",
      category: "engine_pay",
      title: "Transparent, Upfront Pricing",
      desc: "Dynamic rates and availability pulled directly onto your homepage and room pages, not hidden behind multiple clicks. Guests should see what a room actually costs before they're three steps into a booking flow.",
      takeaway: "Live rates displayed before guests start checkout.",
      icon: <DollarSign className="text-[#2258FF]" size={22} />,
      badge: "Dynamic Rates",
      stat: "+23% Conversion Lift",
      amateurMistake: "Hiding VAT, service fees, and room taxes until the final step, triggering sticker shock abandonment.",
      chywebSpec: "100% transparent rates displayed upfront with direct savings vs OTA platforms highlighted.",
      widgetType: "pricing_transparency",
    },
    {
      id: "native-payments",
      specCode: "SPEC-05",
      category: "engine_pay",
      title: "Native Payment Options",
      desc: "Apple Pay and Google Pay are exposed prominently at the top of the payment selector, not buried below a manual card entry form. Every additional tap costs conversions, especially on mobile, where this friction matters most.",
      takeaway: "Apple Pay, Paystack & automated bank transfers.",
      icon: <CreditCard className="text-purple-600" size={22} />,
      badge: "1-Tap Express Pay",
      stat: "40% Faster Checkout",
      amateurMistake: "Only offering a clunky 16-digit card input with frequent bank OTP timeouts.",
      chywebSpec: "Biometric 1-tap Apple Pay, verified Nigerian bank transfers, and Paystack cards.",
      widgetType: "express_payments",
    },
    {
      id: "speed-engineering",
      specCode: "SPEC-06",
      category: "mobile_ux",
      title: "Speed-First Engineering",
      desc: "Every 100 milliseconds of extra load time costs roughly 1% in conversions, and bounce probability rises sharply as load time increases past one second. We build lean, fast-loading booking pages, not bloated widgets weighed down by unnecessary scripts.",
      takeaway: "Lean code engineered for real Nigerian networks.",
      icon: <Zap className="text-amber-500" size={22} />,
      badge: "Sub-Second Load",
      stat: "0.8s Room Card Loading",
      amateurMistake: "Uncompressed 10MB gallery photos and 20 bulky external plugins dragging load times to 7+ seconds.",
      chywebSpec: "Next.js edge caching, WebP image compression, and sub-second execution on Nigerian 4G.",
      widgetType: "speed_meter",
    },
    {
      id: "pms-integration",
      specCode: "SPEC-07",
      category: "engine_pay",
      title: "Real-Time PMS & Booking Engine Integration",
      desc: "Whether you're running a specific property management system or a standalone booking engine, we integrate it natively into your site's design so guests never feel like they've been redirected to a disconnected third-party page.",
      takeaway: "Zero redirects; your luxury brand throughout.",
      icon: <Layers className="text-[#2258FF]" size={22} />,
      badge: "Native Sync",
      stat: "0% Double-Booking Risk",
      amateurMistake: "Hard-redirecting visitors to an ugly third-party URL where your branding and tracking vanish.",
      chywebSpec: "Embedded 2-way API synchronization with Cloudbeds, Opera, Hotelogix, or custom reservation engines.",
      widgetType: "pms_sync",
    },
    {
      id: "trust-signals",
      specCode: "SPEC-08",
      category: "engine_pay",
      title: "Trust Signals at Every Step",
      desc: "Reviews, security indicators, and clear cancellation policies displayed throughout the booking journey, not just on a separate policies page, reducing the doubt that causes last-minute abandonment.",
      takeaway: "Verified reviews & clear policies at room selection.",
      icon: <ShieldCheck className="text-emerald-600" size={22} />,
      badge: "High-Trust Elements",
      stat: "Bank-Grade Encryption",
      amateurMistake: "Hiding refund rules and security badges in the footer where anxious bookers can't see them.",
      chywebSpec: "Contextual verified ratings, 256-bit SSL badges, and instant WhatsApp booking confirmation receipts.",
      widgetType: "trust_badges",
    },
  ];

  // Our Booking-First Design Process (6 Stages)
  const processSteps = [
    {
      step: "01",
      title: "Funnel Audit",
      desc: "We map your current booking flow stage by stage, room selection, date picker, guest details, payment, confirmation, and identify exactly where guests are dropping off.",
      badge: "Audit & Analysis",
      icon: <Search className="text-[#2258FF]" size={20} />,
    },
    {
      step: "02",
      title: "Mobile-First UX Design",
      desc: "Every interaction designed for mobile first, then progressively enhanced for larger screens.",
      badge: "Thumb-First Prototyping",
      icon: <Smartphone className="text-[#2258FF]" size={20} />,
    },
    {
      step: "03",
      title: "Booking Engine Integration",
      desc: "Your reservation system, PMS, and payment processor connected natively, not bolted on as an awkward redirect.",
      badge: "Native Architecture",
      icon: <Layers className="text-[#2258FF]" size={20} />,
    },
    {
      step: "04",
      title: "Speed Optimization",
      desc: "Every page in the booking flow tested and optimized for load time, since speed loss directly compounds into conversion loss.",
      badge: "Sub-Second Tuning",
      icon: <Zap className="text-[#2258FF]" size={20} />,
    },
    {
      step: "05",
      title: "Testing",
      desc: "Full booking flow tested across devices before launch, from search to confirmation.",
      badge: "Multi-Device QA",
      icon: <CheckCircle2 className="text-[#2258FF]" size={20} />,
    },
    {
      step: "06",
      title: "Post-Launch Optimization",
      desc: "We continue testing and refining based on real guest behavior data, since even small gains at each funnel stage compound into meaningful revenue.",
      badge: "Continuous Gains",
      icon: <TrendingUp className="text-[#2258FF]" size={20} />,
    },
  ];

  // Frequently Asked Questions: Hotel Booking Web Designer in Nigeria (5 exact questions)
  const faqs = [
    {
      question: "How much does a hotel booking website cost in Nigeria?",
      answer:
        "Pricing depends on the complexity of your booking engine integration, PMS connection, and payment setup. Most hotel booking website projects range from ₦800,000 to ₦3,000,000+ depending on scope. We'll give you an exact quote after a free audit of your current booking flow.",
    },
    {
      question: "Can you fix our existing booking flow instead of building a new website?",
      answer:
        "Yes. In many cases, the booking flow itself, date picker, checkout steps, and mobile experience can be redesigned and optimized without rebuilding your entire website from scratch.",
    },
    {
      question: "Will you integrate with our current PMS or booking engine?",
      answer:
        "Yes, we integrate with your existing property management system or booking engine wherever possible, rather than forcing a switch, unless your current system is genuinely limiting your conversion potential.",
    },
    {
      question: "How long does a hotel booking website project take?",
      answer:
        "Most projects take 4 to 8 weeks from funnel audit to launch, depending on the complexity of your booking engine and payment integration requirements.",
    },
    {
      question: "How do I know if my current booking flow is actually losing me reservations?",
      answer:
        "The clearest sign is a large gap between desktop and mobile conversion rates, or unusually high abandonment at a specific step like the payment page. A funnel audit will show you exactly where and how much you're losing.",
    },
  ];

  const searchTicker = [
    "🏨 'hotels in Lekki with fast online booking & instant confirmation'",
    "⚡ 'instant hotel room booking Paystack Nigeria'",
    "🛎️ 'direct booking engine for Nigerian boutique hotels'",
    "💳 'seamless bank transfer payment for Lagos hotel suites'",
    "⭐ 'best hotel booking website designer in Abuja'",
    "📱 'mobile-first room reservation flow with zero drop-off'",
    "🔒 'bank-grade direct guest payment with zero OTA fees'",
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
          HERO SECTION: Bespoke Hotel Booking Engine Command Terminal
          Engineered to Turn Searches Into Confirmed Reservations
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
              Hotel Booking Web Designer in Nigeria
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            Hotel Booking Web Designer{" "}
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

          {/* Value Subheadline (H2): Websites Engineered to Turn Searches Into Confirmed Reservations */}
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-800 tracking-tight leading-snug mb-5 max-w-4xl mx-auto">
            Websites Engineered to Turn Searches Into{" "}
            <span className="text-[#2258FF] font-black">
              Confirmed Reservations
            </span>
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria&apos;s hotel booking web designer, engineering reservation flows built to convert, not just widgets bolted onto a pretty site.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Get a Free Booking Flow Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20a%20free%20booking%20flow%20audit%20for%20my%20hotel."
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
              A <strong>1.5% to 2.5% conversion lift</strong> on 3,000 monthly sessions means <strong>30 extra bookings a month</strong>, zero added ad spend.
            </span>
          </div>

          {/* Micro-Trust Badges with Verified Client Benchmarks */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Zap size={16} className="text-[#2258FF]" />
              <span>Mobile-Optimized Booking Engines Convert 23% Better</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <TrendingUp size={16} className="text-emerald-500" />
              <span>0.8s Sub-Second Nigerian Mobile Load</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-amber-500" />
              <span>Direct 1-Tap Card &amp; Bank Transfer Pay</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BESPOKE HERO SHOWCASE: The "Search-to-Confirmed Reservation" Live Engine Terminal
            (100x Better Custom Architecture for Hotel Booking Engine Web Design)
        ========================================================================= */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-[36px] sm:rounded-[44px] border-4 border-white shadow-[0_25px_70px_rgba(34,88,255,0.18)] overflow-hidden bg-[#0a1e64] relative text-white">
            {/* Top Browser & High-Trust Security Bar */}
            <div className="px-5 py-3.5 bg-[#2258FF] border-b border-white/20 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[11px] font-mono text-white/90 ml-2 hidden sm:inline-block">
                  https://grandhorizon.com.ng/book/direct-engine
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-bold">
                <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/15">
                  <Lock size={12} className="text-emerald-400" />
                  <span>256-Bit Bank Grade SSL</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Sub-Second Live Engine</span>
                </span>
              </div>
            </div>

            {/* Stage 1: Live Date & Availability Search Bar (Simulating Real Guest Flow) */}
            <div className="bg-[#0d2888] border-b border-[#2258FF]/30 p-4 sm:p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
                {/* Destination */}
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0">
                    <Search size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-200 block">Property / City</span>
                    <strong className="text-xs font-black text-white truncate block">Grand Horizon • Victoria Island</strong>
                  </div>
                </div>

                {/* Dates Selector */}
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-200 block">Dates (2 Nights)</span>
                    <strong className="text-xs font-black text-white block">Fri, 24 Oct — Sun, 26 Oct</strong>
                  </div>
                </div>

                {/* Guests */}
                <div className="p-3 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
                    <UserCheck size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-blue-200 block">Guests &amp; Room</span>
                    <strong className="text-xs font-black text-white block">2 Adults • 1 Direct Suite</strong>
                  </div>
                </div>

                {/* Live Status Button */}
                <div className="p-3 rounded-2xl bg-[#2258FF] text-white flex items-center justify-between shadow-md border border-white/20">
                  <div>
                    <span className="text-[9px] font-black uppercase text-blue-200 block">Live Availability</span>
                    <strong className="text-xs font-black block">Best Direct Rate Active</strong>
                  </div>
                  <CheckCheck size={18} className="text-emerald-300" />
                </div>
              </div>
            </div>

            {/* Stage 2 & 3: Two-Panel Split View (Room Tier Selection + 1-Tap Guest Checkout) */}
            <div className="p-5 sm:p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* LEFT SIDE (7 COLS): Dynamic Room Selection & Direct Rate Transparency */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                {/* Room Tiers Selector Switcher */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-200">
                      Select Suite Tier (Live Sync)
                    </span>
                    <span className="text-[11px] font-bold text-amber-300">
                      ⚡ 0% OTA Commission • Direct Pricing
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {showcaseRooms.map((room, idx) => (
                      <button
                        key={room.id}
                        onClick={() => setSelectedRoomIndex(idx)}
                        className={`p-2.5 sm:p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                          selectedRoomIndex === idx
                            ? "bg-[#2258FF] border-white/40 shadow-md text-white"
                            : "bg-white/10 border-white/15 hover:bg-white/15 text-blue-100"
                        }`}
                      >
                        <span className="text-[10px] font-bold block truncate opacity-80">{room.badge}</span>
                        <strong className="text-xs sm:text-sm font-black block truncate text-white">{room.title.split(" ")[0]} {room.title.split(" ")[1]}</strong>
                        <span className="text-[11px] font-bold block text-amber-300">₦{(room.directRate / 1000).toFixed(0)}k/night</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Room Photo Backdrop & Direct Price Card */}
                <div className="relative rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[340px] border border-white/20 group shadow-xl">
                  <img
                    src={activeRoom.image}
                    alt={activeRoom.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 brightness-[0.80]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#0a1e64]/40 to-transparent" />

                  {/* Top Floating Chips */}
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider shadow-sm border border-white/20">
                      {activeRoom.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider shadow-sm border border-emerald-400/30">
                      Only {activeRoom.remaining} Suites Left
                    </span>
                  </div>

                  {/* Animated Live Booking Alert Overlay */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentNotificationIndex}
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 z-20 bg-[#0a1e64]/95 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold text-white hidden sm:flex items-center gap-2 shadow-lg"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{liveBookings[currentNotificationIndex].title.split(" ")[0]} Suite booked just now</span>
                    </motion.div>
                  </AnimatePresence>

                  {/* Bottom Rate Transparency Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 p-4 sm:p-5 rounded-2xl bg-[#0a1e64]/95 backdrop-blur-xl border border-white/20">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base sm:text-lg font-black !text-white" style={{ color: "#ffffff" }}>
                          {activeRoom.title}
                        </h3>
                        <span className="text-xs text-blue-200">{activeRoom.city}</span>
                      </div>

                      <div className="text-left sm:text-right">
                        <div className="text-xs text-blue-300 line-through">
                          ₦{activeRoom.otaRate.toLocaleString()} on OTAs
                        </div>
                        <div className="text-xl font-black text-amber-300">
                          ₦{activeRoom.directRate.toLocaleString()} <span className="text-xs text-blue-100 font-normal">/ night direct</span>
                        </div>
                      </div>
                    </div>

                    {/* Inclusive Perks Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/10 text-[10px] text-blue-100">
                      {activeRoom.perks.map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                          <span className="truncate">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE (5 COLS): Express 1-Tap Guest Checkout Console */}
              <div className="lg:col-span-5 rounded-3xl bg-[#0d2888]/95 backdrop-blur-xl border border-[#2258FF]/40 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
                <div>
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div>
                      <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider block">
                        Step 2 of 2 • Fast Checkout
                      </span>
                      <h4 className="text-base font-black text-white !text-white" style={{ color: "#ffffff" }}>
                        Guest Reservation Flow
                      </h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                      ✓ No Password
                    </span>
                  </div>

                  {/* Express Guest Details */}
                  <div className="space-y-3 mb-5">
                    <div>
                      <label className="text-[10px] font-bold uppercase text-blue-200 block mb-1">
                        Guest Full Name
                      </label>
                      <div className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white flex items-center justify-between">
                        <span>Adewale Adeleke</span>
                        <CheckCircle2 size={14} className="text-emerald-400" />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase text-blue-200 block mb-1">
                        WhatsApp Number (Instant Voucher)
                      </label>
                      <div className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-bold text-white flex items-center justify-between">
                        <span>0803 762 3555</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-5">
                    <span className="text-[10px] font-bold uppercase text-blue-200 block mb-2">
                      Select Payment Method (1-Tap)
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-xl bg-[#2258FF] border border-white/40 text-center shadow-xs">
                        <span className="text-[11px] font-black block text-white">Apple Pay</span>
                        <span className="text-[9px] text-blue-200">1-Tap Touch</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-center">
                        <span className="text-[11px] font-black block text-white">Cards</span>
                        <span className="text-[9px] text-blue-200">Visa/Master</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-center">
                        <span className="text-[11px] font-black block text-white">Bank Transfer</span>
                        <span className="text-[9px] text-blue-200">Auto Verify</span>
                      </div>
                    </div>
                  </div>

                  {/* Transparent Pricing Summary */}
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 space-y-2 mb-5 text-xs">
                    <div className="flex justify-between text-blue-100">
                      <span>{activeRoom.nights} Nights Stay</span>
                      <span className="font-bold text-white">₦{totalDirect.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Direct Website Savings vs OTA</span>
                      <span>-₦{guestSavings.toLocaleString()}</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                      <strong className="text-sm font-black text-white">Total Due Now:</strong>
                      <strong className="text-lg font-black text-amber-300">₦{totalDirect.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>

                {/* Direct Action Reserve Button */}
                <div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-4 rounded-2xl bg-[#2258FF] hover:bg-[#1b4ae8] text-white font-black text-sm shadow-[0_10px_25px_rgba(34,88,255,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
                  >
                    <span>Complete Direct Reservation</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="flex items-center justify-between text-[10px] text-blue-200 pt-3">
                    <span>⚡ Instant WhatsApp Voucher</span>
                    <span className="text-emerald-400 font-bold">0% Commission Cut</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Performance Dock: 4 Pillars of High-Converting Architecture */}
            <div className="px-6 py-4 bg-[#0a1e64] border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-100">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>0.8s Sub-Second Page Speed</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-100">
                <span className="w-2 h-2 rounded-full bg-[#2258FF]" />
                <span>Zero Forced Account Registration</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-100">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Apple Pay &amp; Nigerian Cards</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-100">
                <span className="w-2 h-2 rounded-full bg-blue-300" />
                <span>Two-Way PMS Inventory Sync</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: The Reality of Hospitality Guest Decisions (Designed Below Hero)
      ========================================================================= */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] bg-white/95 backdrop-blur-xl border-2 border-slate-200/90 shadow-[0_20px_50px_rgba(11,15,25,0.05)]">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-3 inline-block">
              Websites Built to Book, Not Just Look Good
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">
              Why 85% of Hotel Website Visitors Leave Without Booking
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              On mobile, where 60-75% of reservations now happen, a clunky flow costs you even more—mobile-optimized booking engines convert 23% higher than those that aren&apos;t.
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
                  The Hidden Abandonment Leak
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug">
                  Losing Guests to Friction Your Own Site Created
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  85% of hotel website visitors abandon before completing a booking. On mobile, where 60-75% of reservations now happen, a clunky flow costs you even more. If your booking flow wasn&apos;t built by someone who specializes in exactly this problem, you&apos;re losing reservations that have nothing to do with your rooms or rates.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>85% visitor abandonment rate before booking completion</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Clunky date pickers &amp; forced password creation screens</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Guests surrender to OTAs, paying 18%–25% in commissions</span>
                </div>
              </div>
            </div>

            {/* The ChyWeb Systematic Fix */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-[30px] relative overflow-hidden shadow-xl flex flex-col justify-between group border border-blue-400/40 text-white">
              {/* High-visibility Photographic Backdrop */}
              <img
                src="/images/luxury_resort_lagos.jpg"
                alt="Luxury Resort Lagos"
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
              />
              {/* High-Contrast Dual-Layer Blue Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/95 via-[#1040E6]/88 to-[#2258FF]/82 backdrop-blur-[0.5px]" />
              <div className="absolute inset-0 bg-[#0a1e64]/20" />
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/25 text-amber-300 flex items-center justify-center mb-5 font-black text-lg shadow-xs backdrop-blur-md">
                  <Sparkles size={22} className="text-amber-300" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-amber-300 block mb-2 drop-shadow-sm">
                  The Conversion-Engineered Fix
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white !text-white mb-4 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" style={{ color: "#ffffff" }}>
                  Mobile-Optimized Engines Convert 23% Higher
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  We engineer zero-friction reservation flows with native booking engine integration, instant date selectors, and guest checkout designed specifically for Nigerian mobile networks.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-white/15 text-xs sm:text-sm text-blue-100 relative z-10">
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Thumb-first mobile reservation with zero forced passwords</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Native booking engine integration preserving your luxury brand</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Sub-second Nigerian load speed with instant Apple Pay &amp; transfers</span>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim Your Free Booking Flow Audit</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION H2: Why Booking Engine Design Is Its Own Specialty
          (Structured 3-Card Bento + 4 Metric Tiles)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Ecommerce Rigor • Not Pretty Brochures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            Why Booking Engine Design Is Its Own Specialty
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mt-4 leading-relaxed font-medium">
            Designing a hotel booking flow is closer to building an ecommerce checkout than it is to building a typical website, and treating it like a regular web design project is exactly how most hotels end up with a booking widget that technically works but quietly loses guests at every step.
          </p>
          {/* Simple, Clean Design for the 5 Friction Points */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                <AlertOctagon size={16} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-black text-amber-600 uppercase tracking-wider block mb-0.5">
                  Core Friction Points
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  A specialist hotel booking web designer in Nigeria understands the specific friction points that kill reservations:
                </p>
              </div>
            </div>

            {/* 5 Friction Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 my-3.5">
              <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Clunky date pickers</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Forced account creation</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Pricing that&apos;s hidden until deep into the flow</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Payment forms that don&apos;t support the payment methods guests actually want to use</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-slate-700 sm:col-span-2 lg:col-span-2">
                <span className="text-rose-500 font-bold">✕</span>
                <span>Page speed that degrades exactly when a guest&apos;s intent is highest</span>
              </div>
            </div>

            {/* Key Bottom Note */}
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                Every one of these is fixable, and every one of them is currently costing hotels real money.
              </p>
              <span className="text-[11px] font-black text-[#2258FF] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 whitespace-nowrap w-fit">
                ⚡ 100% Fixable Direct Flow
              </span>
            </div>
          </div>
        </div>

        {/* 3-Card High-Impact Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Card 1: The Disconnection Problem */}
          <div className="p-7 sm:p-8 rounded-[28px] bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div>
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center font-black text-base mb-4">
                ⚠️
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 block mb-1">
                The Disconnection Problem
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 leading-snug">
                Why Standard Web Design Fails Hotels
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                Treating a hotel booking flow like a regular brochure website leaves you with slow widgets bolted on via iframes that technically work, but quietly lose guests at every single step.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>Generic Widget • 85% Abandonment</span>
              <span className="text-slate-400">✕</span>
            </div>
          </div>

          {/* Card 2: The Data Breakdown */}
          <div className="p-7 sm:p-8 rounded-[28px] bg-white border-2 border-[#2258FF]/30 shadow-md flex flex-col justify-between hover:border-[#2258FF] transition-colors relative">
            <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider">
              The Friction Math
            </span>
            <div>
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#2258FF] flex items-center justify-center font-black text-base mb-4">
                <TrendingUp size={20} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#2258FF] block mb-1">
                The Conversion Difference
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 leading-snug">
                Where Guests Drop Off
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                Clunky date pickers, forced password creation, hidden room rates, and checkout forms missing Apple Pay or instant bank transfers cause severe drop-offs right when purchase intent is highest.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2258FF]">
              <span>+23% Conversion • 0.8s Speed</span>
              <span className="text-emerald-500">✓</span>
            </div>
          </div>

          {/* Card 3: The Compounding System */}
          <div className="p-7 sm:p-8 rounded-[28px] bg-gradient-to-br from-[#0a1e64] via-[#1040E6] to-[#2258FF] text-white shadow-lg flex flex-col justify-between relative overflow-hidden group">
            <img
              src="/images/hotel_lobby_lagos.jpg"
              alt="Engineered Hotel Booking Engine"
              className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#1040E6]/80 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 flex items-center justify-center font-black text-base mb-4">
                ⚡
              </div>
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 block mb-1">
                The Engineered Fix
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mb-3 leading-snug drop-shadow-sm !text-white" style={{ color: "#ffffff" }}>
                Frictionless Checkout Architecture
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed mb-4 font-medium drop-shadow-sm">
                Guest checkout as default, upfront rates, 1-tap Apple Pay &amp; Paystack, and sub-second room card loading turn visitors into high-margin confirmed bookings.
              </p>
            </div>
            <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-emerald-300">
              <span>1 Unified Direct Engine</span>
              <span>✓</span>
            </div>
          </div>
        </div>

        {/* 4 Compact Metric Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-left">
            <span className="text-xs font-black text-slate-400 block uppercase mb-1">Visitor Abandonment</span>
            <strong className="text-xl sm:text-2xl font-black text-slate-900 block mb-0.5">85% Drop-off</strong>
            <span className="text-[11px] text-slate-500 font-medium">Standard unoptimized flow</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-blue-200 shadow-xs text-left">
            <span className="text-xs font-black text-[#2258FF] block uppercase mb-1">Mobile-First Lift</span>
            <strong className="text-xl sm:text-2xl font-black text-[#2258FF] block mb-0.5">+23% Higher</strong>
            <span className="text-[11px] text-blue-700 font-medium">With integrated booking engine</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-200 shadow-xs text-left">
            <span className="text-xs font-black text-amber-600 block uppercase mb-1">Mobile Share</span>
            <strong className="text-xl sm:text-2xl font-black text-amber-600 block mb-0.5">60% – 75%</strong>
            <span className="text-[11px] text-amber-700 font-medium">Of reservations happen on phones</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-xs text-left">
            <span className="text-xs font-black text-emerald-600 block uppercase mb-1">Speed Multiplier</span>
            <strong className="text-xl sm:text-2xl font-black text-emerald-600 block mb-0.5">100ms = ~1%</strong>
            <span className="text-[11px] text-emerald-700 font-medium">Conversion penalty per delay</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: What Goes Into a Properly Built Hotel Booking Website
          (8 Pillars with Engineered Architecture, Interactive Specs & Performance Dock)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Engineered Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            What Goes Into a Properly Built Hotel Booking Website
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Eight essential technical pillars that turn casual lookers into confirmed, paid hotel guests without dropping them into friction.
          </p>

          {/* Interactive Category Filter Controller */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-8 flex-wrap justify-center gap-1.5">
            <button
              onClick={() => setActivePillarCategory("all")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activePillarCategory === "all"
                  ? "bg-[#2258FF] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>All 8 Technical Pillars</span>
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-[10px]">8</span>
            </button>
            <button
              onClick={() => setActivePillarCategory("mobile_ux")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activePillarCategory === "mobile_ux"
                  ? "bg-[#2258FF] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>📱 Mobile UX &amp; Flow</span>
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-[10px]">4</span>
            </button>
            <button
              onClick={() => setActivePillarCategory("engine_pay")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activePillarCategory === "engine_pay"
                  ? "bg-[#2258FF] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>💳 Engine, Rates &amp; Pay</span>
              <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-[10px]">4</span>
            </button>
          </div>
        </div>

        {/* 8 Engineered Pillars Grid - Sleek & Compact Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {bookingPillars
            .filter((feat) => activePillarCategory === "all" || feat.category === activePillarCategory)
            .map((feat) => (
              <div
                key={feat.id}
                className="p-5 sm:p-6 rounded-[24px] bg-white border-2 border-slate-200/90 shadow-xs hover:border-[#2258FF] hover:shadow-[0_14px_35px_rgba(34,88,255,0.1)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top subtle accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2258FF] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Bar: Spec Code, Badge, and Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                        {feat.specCode}
                      </span>
                      <span className="text-[10px] font-bold text-[#2258FF] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                        {feat.badge}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#2258FF]/40 transition-transform">
                      {feat.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-black text-slate-900 leading-snug mb-2 group-hover:text-[#2258FF] transition-colors">
                    {feat.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                    {feat.desc}
                  </p>
                </div>

                {/* Integrated Compact Micro-Metric Strip */}
                <div className="pt-3 border-t border-slate-100 space-y-2 mt-auto">
                  <div className="px-2.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-slate-800">
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{feat.stat}</span>
                    </span>
                    <span className="text-[10px] text-[#2258FF] font-black uppercase">Engineered</span>
                  </div>

                  <div className="text-[11px] font-semibold text-[#2258FF] flex items-center gap-1">
                    <span className="truncate">⚡ {feat.takeaway}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* =========================================================================
            BOTTOM PERFORMANCE DOCK: Cumulative 8-Pillar Architecture Impact
        ========================================================================= */}
        <div className="rounded-[36px] bg-gradient-to-br from-[#0a1e64] via-[#0d2888] to-[#1040E6] text-white p-7 sm:p-10 shadow-2xl border-2 border-white/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2258FF]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-left max-w-xl">
              <span className="px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-amber-300 text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
                <Sparkles size={13} className="text-amber-300" />
                <span>Compound Conversion Engineering</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white !text-white leading-tight mb-2" style={{ color: "#ffffff" }}>
                How All 8 Pillars Compound Into Direct Hotel Revenue
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                When mobile UX, zero-lag dates, guest checkout, upfront rates, native payments, sub-second speed, PMS sync, and trust signals work together, your website shifts from a passive brochure into an automated direct booking engine.
              </p>
            </div>

            {/* 4 Compounding Pillars KPI Pills */}
            <div className="grid grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-[10px] text-blue-200 uppercase font-mono block">Direct Lift</span>
                <strong className="text-lg sm:text-xl font-black text-emerald-400">+23% to +35%</strong>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-[10px] text-blue-200 uppercase font-mono block">Mobile Drop-Off</span>
                <strong className="text-lg sm:text-xl font-black text-amber-300">-42% Abandonment</strong>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-[10px] text-blue-200 uppercase font-mono block">Sync Latency</span>
                <strong className="text-lg sm:text-xl font-black text-blue-200">0.0s PMS Sync</strong>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left">
                <span className="text-[10px] text-blue-200 uppercase font-mono block">OTA Fees Reclaimed</span>
                <strong className="text-lg sm:text-xl font-black text-amber-300">₦1.8M - ₦4.5M/Mo</strong>
              </div>
            </div>
          </div>

          {/* Action trigger */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs text-blue-100">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>Free 48-hour audit assesses all 8 technical pillars on your current property website.</span>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-xs sm:text-sm shadow-lg transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <span>Audit Your Hotel's 8 Pillars (Free)</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Our Booking-First Design Process (6 Stages)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Structured Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Our Booking-First Design Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Six systematic phases engineered to eliminate booking friction and maximize direct hotel reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-[#2258FF] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black text-[#2258FF] bg-[#2258FF]/10 px-2.5 py-1 rounded-full">
                      {step.badge}
                    </span>
                    <span className="text-lg font-black text-slate-300 font-mono">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 block mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Zero-Downtime Guarantee Bar */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong className="text-sm font-black text-slate-900 block">
                The Zero-Downtime Migration Guarantee
              </strong>
              <span className="text-xs text-slate-600">
                Your existing reservations, PMS calendar sync, and front desk operations stay 100% active throughout the design and launch.
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Audit My Booking Engine</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION: What This Actually Means for Your Bottom Line
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Financial Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            What This Actually Means for Your Bottom Line
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Take a property with an average nightly rate of ₦150,000 and 3,000 monthly website sessions. Moving conversion from 1.5% to just 2.5%, a realistic outcome of fixing mobile friction, speed, and checkout flow, means roughly 30 additional bookings a month with zero additional marketing spend. That&apos;s not a hypothetical; it&apos;s the direct, repeatable result of fixing the booking flow itself rather than just pouring more traffic into a leaking funnel.
          </p>
        </div>

        {/* Concrete Math Bento Box */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] bg-white border-2 border-[#2258FF]/20 shadow-[0_20px_50px_rgba(34,88,255,0.08)] mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black text-[#2258FF] uppercase tracking-widest block mb-2">
              Model Scenario: ₦150,000 ADR • 3,000 Monthly Sessions
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Standard Leaking Funnel vs. ChyWeb Direct Engine
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Moving your booking conversion from an average 1.5% to 2.5% captures 30 extra direct bookings each month without spending one extra kobo on ads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 block mb-1">Standard Leaking Engine (1.5%)</span>
              <strong className="text-2xl sm:text-3xl font-black text-slate-900 block mb-1">45 Bookings / Mo</strong>
              <span className="text-sm font-bold text-slate-600 block">₦6,750,000 Revenue</span>
              <span className="text-[11px] text-rose-500 block mt-3">✕ Loses guests to OTA commissions</span>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold text-emerald-700 block mb-1">ChyWeb Optimized Engine (2.5%)</span>
              <strong className="text-2xl sm:text-3xl font-black text-emerald-600 block mb-1">75 Bookings / Mo</strong>
              <span className="text-sm font-bold text-emerald-700 block">₦11,250,000 Revenue</span>
              <span className="text-[11px] text-emerald-600 font-bold block mt-3">✓ 30 Extra Confirmed Bookings</span>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#2258FF] to-[#1240e3] text-white flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold text-white/80 block mb-1">Net Direct Gain:</span>
                <strong className="text-2xl sm:text-3xl font-black !text-white block mb-1" style={{ color: "#ffffff" }}>
                  +₦4,500,000 / Mo
                </strong>
                <span className="text-xs text-emerald-300 font-bold block">+₦54,000,000 Annually</span>
              </div>
              <span className="text-[11px] text-white/70 block mt-4 border-t border-white/20 pt-2">
                100% pure room profit retained with zero extra marketing spend.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE SIMULATOR & ROI CALCULATOR
      ========================================================================= */}
      <LiveHospitalityBookingWidget onOpenAuditModal={() => setIsModalOpen(true)} />
      <HotelRoiCalculator onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* =========================================================================
          SECTION: Why ChyWeb Academy as Your Hotel Booking Web Designer in Nigeria
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-8 sm:p-14 lg:p-18 group">
          {/* Background Photo with High Visibility Blue Gradient Scrim */}
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="ChyWeb Academy Hotel Booking Web Designer Nigeria"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/95 via-[#1040E6]/88 to-[#2258FF]/82 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-[#0a1e64]/20" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-amber-300 font-black text-xs uppercase tracking-widest inline-block mb-4">
              Specialist Hospitality Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black !text-white leading-tight mb-6" style={{ color: "#ffffff" }}>
              Why ChyWeb Academy as Your Hotel Booking Web Designer in Nigeria
            </h2>

            <div className="space-y-4 text-blue-100 text-base sm:text-lg leading-relaxed text-left max-w-3xl mx-auto mb-10">
              <p>
                We don&apos;t build hotel websites as a side offering alongside restaurant menus and business brochures. Booking-focused design is a specific discipline, and we approach it with the same structured, framework-driven method behind our work in{" "}
                <a
                  href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 font-bold underline hover:text-white inline-flex items-center gap-1"
                >
                  <span>AI-powered SEO</span>
                  <ExternalLink size={14} />
                </a>{" "}
                and{" "}
                <a
                  href="https://chyweb.com.ng/blog/best-aeo-agency-in-nigeria-2026-guide-to-ai-search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 font-bold underline hover:text-white inline-flex items-center gap-1"
                >
                  <span>answer engine optimization</span>
                  <ExternalLink size={14} />
                </a>
                , so your booking flow isn&apos;t just fast and well-designed; it&apos;s built to be found and trusted by both guests and the AI systems increasingly shaping where people choose to book.
              </p>
              <p>
                If you&apos;d rather understand these fundamentals for your own team, our{" "}
                <a
                  href="https://chyweb.com.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 font-bold underline hover:text-white inline-flex items-center gap-1"
                >
                  <span>digital marketing training in Nigeria</span>
                  <ExternalLink size={14} />
                </a>{" "}
                covers the same principles we apply to every hotel client.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Design Consultation</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20consult%20on%20my%20hotel%20booking%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>WhatsApp: 0906 762 3555</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VALUE OFFER: The Direct Booking Engine Grand Slam System
      ========================================================================= */}
      <GrandSlamOfferCard
        onClaim={() => setIsModalOpen(true)}
        title="The Hotel Direct Booking Engine Grand Slam System"
        badge="Zero-Risk Frictionless Booking Guarantee"
      />

      {/* Cross-Link Topic Cluster: The Full Hospitality Suite */}
      <HospitalityClusterNav
        currentPath="/hotel-booking-web-designer-nigeria"
        onOpenAuditModal={() => setIsModalOpen(true)}
      />

      {/* =========================================================================
          FAQ ACCORDION SECTION: Hotel Booking Web Designer in Nigeria
      ========================================================================= */}
      <FaqSection
        faqs={faqs}
        title="Frequently Asked Questions: Hotel Booking Web Designer in Nigeria"
      />

      {/* =========================================================================
          FINAL CTA BANNER: Stop Losing Reservations to a Booking Flow Working Against You
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-10 sm:p-16 lg:p-20">
          <img
            src="/images/luxury_hotel_suite.jpg"
            alt="Luxury Hotel Suite in Nigeria"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#091b5c]/95" />

          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2258FF]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest mb-6 inline-block">
              Fix The Leaking Funnel
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight !text-white" style={{ color: "#ffffff" }}>
              Stop Losing Reservations to a Booking Flow Working Against You
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every guest who abandons your booking page isn&apos;t lost because they chose another hotel, they&apos;re lost because your website made booking harder than it needed to be. Let&apos;s fix that.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Design Consultation</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20book%20a%20design%20consultation%20for%20my%20hotel%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>WhatsApp: 0906 762 3555</span>
              </a>
            </div>

            <p className="text-white/60 text-xs mt-6">
              Free 30-Minute Booking Flow Teardown • Abandonment Benchmark • Zero Obligation
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
        defaultService="Hotel Booking Engine Web Design"
        defaultPropertyType="Hotel / Boutique Lodge"
      />
    </div>
  );
}
