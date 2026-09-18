"use client";

import { useState } from "react";
import Link from "next/link";
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

  const bookingFeatures = [
    {
      icon: <Smartphone className="text-[#2258FF]" size={22} />,
      title: "1-Tap Mobile Thumb Navigation",
      desc: "Designed for one-handed thumb navigation on mobile phones first, then progressively scaled up to desktop. The reverse approach—designing for desktop and squishing down—is why most Nigerian hotel engines fail miserably on phones.",
      badge: "Mobile Thumb UX",
    },
    {
      icon: <CalendarCheck className="text-emerald-600" size={22} />,
      title: "Frictionless Responsive Date Picker",
      desc: "No confusing multi-tap calendar grids that freeze or zoom awkwardly. We build clean, responsive date range pickers optimized specifically for mobile screens with instant room availability indication.",
      badge: "Zero-Lag Dates",
    },
    {
      icon: <UserCheck className="text-amber-500" size={22} />,
      title: "Guest Checkout (No Forced Passwords)",
      desc: "Forcing a guest to register an account and create a password before booking is the #1 reason guests abandon. We make frictionless guest checkout standard—name, phone, and payment in 20 seconds.",
      badge: "No Forced Login",
    },
    {
      icon: <TrendingUp className="text-[#2258FF]" size={22} />,
      title: "Upfront Real-Time Dynamic Pricing",
      desc: "Dynamic room rates and live availability pulled directly onto room cards. Guests see exact totals with zero hidden fees before they are three frustrating steps deep into the funnel.",
      badge: "100% Price Clarity",
    },
    {
      icon: <CreditCard className="text-emerald-600" size={22} />,
      title: "Native Paystack, Apple Pay & Bank Transfer",
      desc: "Instant Nigerian payment rails exposed immediately at checkout—supporting Visa, Mastercard, Verve, Apple Pay, and automated Nigerian bank transfer verification to slash cart abandonment.",
      badge: "Instant Verification",
    },
    {
      icon: <Zap className="text-amber-500" size={22} />,
      title: "Sub-Second Speed Engineering",
      desc: "0.8s room loading. Every 100 milliseconds saved retains roughly 1% in conversion, keeping guests inside your engine rather than fleeing in frustration to Booking.com.",
      badge: "98/100 Core Web Vitals",
    },
    {
      icon: <Layers className="text-[#2258FF]" size={22} />,
      title: "Real-Time Two-Way PMS Integration",
      desc: "Syncs directly with your existing Property Management System so room rates, inventory, and bookings update in real time with zero risk of double-bookings.",
      badge: "Zero Double-Bookings",
    },
    {
      icon: <ShieldCheck className="text-emerald-600" size={22} />,
      title: "Trust Triggers & Bank-Grade Security",
      desc: "Verified guest reviews, 256-bit SSL encryption badges, and clear cancellation terms displayed directly on the room selection screen to eliminate last-second buyer anxiety.",
      badge: "Bank-Grade Trust",
    },
  ];

  const deadlyFrictions = [
    {
      bad: "Forced account registration with password confirmation before seeing final rates",
      good: "Instant guest checkout requiring only name, WhatsApp number, and payment",
    },
    {
      bad: "Pinch-to-zoom desktop calendar that glitches on Nigerian smartphone screens",
      good: "Native thumb-friendly date selector that picks check-in and check-out in 2 taps",
    },
    {
      bad: "Redirects guests to an unfamiliar third-party aggregator URL with competing hotels",
      good: "100% native on-site booking engine preserving your luxury brand trust",
    },
    {
      bad: "Clunky manual bank transfers requiring guests to screenshot receipts on WhatsApp",
      good: "Automated Paystack bank transfer & card engine with instant digital receipt",
    },
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Funnel & Friction Audit",
      desc: "We analyze your room selection cards, date picker drop-offs, and payment failures to isolate the exact points leaking guest reservations.",
      badge: "Day 01–03",
    },
    {
      step: "02",
      title: "Mobile-First UX Prototyping",
      desc: "Every button, date input, and room tier is mapped for frictionless mobile booking before writing a single line of production code.",
      badge: "Day 04–08",
    },
    {
      step: "03",
      title: "PMS & Nigerian Payment Sync",
      desc: "Your live reservation engine, PMS inventory calendar, and Paystack/card gateways are natively synchronized into the interface.",
      badge: "Day 09–14",
    },
    {
      step: "04",
      title: "Low-Bandwidth Mobile Stress Test",
      desc: "Every step tested under real Nigerian 3G/4G conditions to guarantee sub-second load times across iPhone, Android, and tablets.",
      badge: "Day 15–18",
    },
    {
      step: "05",
      title: "Live Launch & Guest Verification",
      desc: "Live launch with full tracking of date selections, room card views, instant WhatsApp receipts, and completed reservation analytics.",
      badge: "Day 21 Launch",
    },
  ];

  const faqs = [
    {
      question: "How much does a hotel booking engine website cost in Nigeria?",
      answer:
        "Pricing depends on the complexity of your booking engine integration, PMS connection, and payment setup. Most hotel booking website projects range from ₦950,000 to ₦2,800,000+ depending on scope. Because every direct booking saves you 18%–25% in OTA commissions, most clients recoup their entire investment within 60 to 90 days. We provide an exact itemized quote after a free audit of your current booking flow.",
    },
    {
      question: "Can you fix our existing booking flow instead of rebuilding our entire website?",
      answer:
        "Yes! In many cases, the booking flow itself—the date picker, room selection cards, checkout steps, and mobile UX—can be redesigned and integrated as a high-speed direct booking engine without completely rebuilding your existing marketing pages from scratch.",
    },
    {
      question: "Will you integrate with our current PMS or booking engine software?",
      answer:
        "Yes, we integrate with your existing property management system (like Cloudbeds, Hotelogix, RoomRaccoon, Opera) or booking engine wherever possible rather than forcing an expensive switch, unless your legacy software is genuinely restricting your conversion rate.",
    },
    {
      question: "How long does a hotel booking engine project take?",
      answer:
        "Most hotel booking engine projects follow our 21-Day Rapid Launch Sprint from initial funnel audit to public launch, depending on room count, room tiers, and payment gateway verifications.",
    },
    {
      question: "How do I know if my current booking flow is actually leaking reservations?",
      answer:
        "The clearest indicator is a large gap between desktop and mobile conversion rates (e.g. 3% on desktop but under 1% on mobile), or an unusually high drop-off rate on your date picker or payment page. Our free funnel audit will show you the exact numbers and where your revenue is escaping.",
    },
  ];

  const searchTicker = [
    "⚡ 'instant hotel room booking Paystack Nigeria'",
    "🛎️ 'direct booking engine for Nigerian boutique hotels'",
    "🏨 'online room reservation Lekki with instant confirmation'",
    "💳 'seamless bank transfer payment for Lagos hotel suites'",
    "⭐ 'best hotel booking website design in Abuja'",
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
              Hotel Booking Web Designer in Nigeria
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Main Hero Headline with Hand-drawn Luxury Curve */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.08] mb-6 text-slate-900 max-w-5xl mx-auto">
            Websites Engineered to Turn Searches Into{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                Confirmed Reservations
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
            A hotel website without a properly built booking engine isn't a sales machine—it's just a digital business card that loses money. We engineer zero-friction reservation flows with 1-tap guest pay, instant dates, and zero forced account creation.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Retain guests who would otherwise flee to Booking.com and capture 100% of your room margin.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Audit My Hotel Booking Engine</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20fix%20my%20hotel%20booking%20system."
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
              <span>Zero Forced Account Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
              <span>1-Tap Paystack & Apple Pay</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
              <span>Real-Time Two-Way PMS Sync</span>
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
            SHOWCASE: 3-Step Frictionless Booking Canvas
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
                chyweb.agency/hotel-engine/instant-checkout
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>30s Fast Checkout</span>
              </div>
            </div>

            {/* Photographic Canvas with Luxury Suite & Booking Overlay */}
            <div className="relative min-h-[480px] sm:min-h-[540px] overflow-hidden flex items-end p-6 sm:p-10">
              <img
                src="/images/luxury_hotel_suite.jpg"
                alt="Luxury Hotel Suite Booking Flow"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-[0.82]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

              {/* Floating Speed Badge */}
              <div className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white font-black text-xs shadow-lg border border-emerald-400/30">
                <Clock size={14} />
                <span>Under 45s From Search to Confirmed Stay</span>
              </div>

              {/* Floating Commission Shield */}
              <div className="absolute top-6 right-6 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white font-bold text-xs shadow-lg border border-white/10">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>0% OTA Commission • Direct Payout</span>
              </div>

              {/* Bottom Interactive Booking Engine Dock */}
              <div className="relative z-20 w-full bg-slate-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/15 text-white shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider">
                        Guest Reservation Flow
                      </span>
                      <span className="text-xs text-emerald-400 font-bold">✓ No Password Required</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black !text-white tracking-tight" style={{ color: "#ffffff" }}>
                      Deluxe King Suite — Victoria Island
                    </h3>
                    <p className="text-xs text-slate-300">
                      Live calendar sync • Instant card & bank transfer verification • WhatsApp confirmation
                    </p>
                  </div>

                  <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end justify-between gap-3 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                    <div className="text-left md:text-right">
                      <div className="text-xs text-slate-400">2 Nights Total</div>
                      <div className="text-2xl font-black text-amber-400">₦300,000 <span className="text-xs text-emerald-400 font-bold">(Save ₦65k Direct)</span></div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Test Live Booking Flow</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* 3 Step Pill Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-[11px]">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#2258FF] text-white flex items-center justify-center text-[10px] font-black">1</span>
                    <span>Dates: <strong>Tonight, 2 Nights</strong></span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">2</span>
                    <span>Guests: <strong>2 Adults (Guest Mode)</strong></span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-emerald-400">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black">3</span>
                    <span>1-Tap Paystack / Apple Pay</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Strip */}
            <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>+28% Booking Completion Rate</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#2258FF]" />
                <span>Zero Double-Bookings Across Channels</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>100% Retained Room Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE FINANCIAL MATH SECTION: +₦4,500,000/Mo Equation
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs uppercase tracking-wider mb-4 inline-block">
            The Revenue Math
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            How a 1% Conversion Lift Adds <br />
            <span className="text-[#2258FF]">+₦4,500,000 Monthly Revenue</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Here is the concrete math every Nigerian hotel owner needs to see: you do not need more ad spend to fill empty rooms. Fixing your checkout friction unlocks millions in direct revenue from the traffic you already receive.
          </p>
        </div>

        {/* The Concrete Math Bento Box */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-[36px] bg-white border-2 border-[#2258FF]/20 shadow-[0_20px_50px_rgba(34,88,255,0.08)] mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black text-[#2258FF] uppercase tracking-widest block mb-2">
              Real Nigerian Property Example (3,000 Monthly Sessions • ₦150k Room Rate)
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Standard Clunky Engine vs ChyWeb Direct Engine
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Moving your booking conversion from an average 1.5% to just 2.5% produces 30 additional bookings a month with zero added ad spend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 block mb-1">Standard Clunky Flow (1.5%)</span>
              <strong className="text-2xl sm:text-3xl font-black text-slate-900 block mb-1">45 Bookings / Mo</strong>
              <span className="text-sm font-bold text-slate-600 block">₦6,750,000 Revenue</span>
              <span className="text-[11px] text-rose-500 block mt-2">✕ Loses ₦1.35M in OTA cuts</span>
            </div>

            <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-bold text-emerald-700 block mb-1">ChyWeb Optimized Engine (2.5%)</span>
              <strong className="text-2xl sm:text-3xl font-black text-emerald-600 block mb-1">75 Bookings / Mo</strong>
              <span className="text-sm font-bold text-emerald-700 block">₦11,250,000 Revenue</span>
              <span className="text-[11px] text-emerald-600 font-bold block mt-2">✓ 0% Middleman Commissions</span>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#2258FF] to-[#1240e3] text-white flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold text-white/80 block mb-1">Your Net Direct Gain:</span>
                <strong className="text-2xl sm:text-3xl font-black !text-white block mb-1" style={{ color: "#ffffff" }}>
                  +₦4,500,000 / Mo
                </strong>
                <span className="text-xs text-emerald-300 font-bold block">+₦54,000,000 Annually</span>
              </div>
              <span className="text-[11px] text-white/70 block mt-4 border-t border-white/20 pt-2">
                100% pure profit retained with zero extra marketing spend.
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            THE 8 DEADLY SINS & HOW CHYWEB FIXES THEM
        ========================================================================= */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
              Engineered UX Standards
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-3">
              Why Booking Engine Design Is Its Own Technical Discipline
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Designing a reservation checkout flow is closer to high-security fintech than regular web design. Here is how we engineer every touchpoint to eliminate booking drop-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingFeatures.map((f, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-[0_12px_32px_rgba(34,88,255,0.08)] hover:border-[#2258FF] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {f.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {f.badge}
                    </span>
                  </div>
                  <strong className="text-base font-black text-slate-900 block mb-2">{f.title}</strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BEFORE VS AFTER COMPARISON BANNER
        ========================================================================= */}
        <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/20 text-white">
          <img
            src="/images/luxury_hotel_suite.jpg"
            alt="Luxury Hotel Room Architecture"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#091b5c]/95" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mb-10">
              <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest inline-block mb-4">
                The Conversion Difference
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black !text-white leading-tight mb-4" style={{ color: "#ffffff" }}>
                What Leaks Bookings vs What Locks in Confirmed Stays
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                When a hotel booking engine is treated as an afterthought or bolted on with a slow iframe, guests abandon. Here is how ChyWeb turns friction into completed reservations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {deadlyFrictions.map((pt, i) => (
                <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
                  <div className="flex items-start gap-2.5 text-rose-300 text-xs sm:text-sm">
                    <span className="font-bold text-rose-400 flex-shrink-0">✕ What Leaks:</span>
                    <span>{pt.bad}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-emerald-300 text-xs sm:text-sm font-semibold border-t border-white/10 pt-3">
                    <span className="font-bold text-emerald-400 flex-shrink-0">✓ ChyWeb Engine:</span>
                    <span className="text-white">{pt.good}</span>
                  </div>
                </div>
              ))}
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
          BOOKING-FIRST IMPLEMENTATION FRAMEWORK (21-Day Roadmap)
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Implementation Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Our Booking-First Design Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            How we take your hotel website from high bounce rates to confirmed, paid reservations in 21 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {implementationSteps.map((step, idx) => (
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
                The Zero-Downtime Guarantee
              </strong>
              <span className="text-xs text-slate-600">
                Your existing bookings, current PMS rates, and reservations remain 100% intact throughout the engine build and launch.
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
          IRRESISTIBLE VALUE OFFER: Zero-Risk Direct Booking Guarantee
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
          FAQ ACCORDION SECTION
      ========================================================================= */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions — Hotel Booking Engine Web Design" />

      {/* =========================================================================
          FINAL CTA BANNER: Luxury Suite Backdrop with Royal Blue Overlay
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
              Fix The Booking Leak
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight !text-white" style={{ color: "#ffffff" }}>
              Stop Losing Reservations to a Booking Flow Working Against You
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every guest who abandons your booking page isn't lost because they chose another hotel—they are lost because your website made booking harder than it needed to be. Let us fix that today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Audit My Booking Engine</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20fix%20my%20hotel%20booking%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>WhatsApp: 0906 762 3555</span>
              </a>
            </div>

            <p className="text-white/60 text-xs mt-6">
              Free 30-Minute Checkout Flow Teardown • Abandonment Benchmark • Zero Obligation
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
