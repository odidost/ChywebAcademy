"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorSmartphone,
  Zap,
  ShieldCheck,
  CreditCard,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock,
  Gauge,
  Utensils,
  Hotel,
  Star,
  Smartphone,
  Flame,
  Globe,
  TrendingUp,
  Search,
  Building,
  Camera,
  Compass,
  XCircle,
  FileText,
  Lock,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import HospitalityAuditModal from "@/components/HospitalityAuditModal";
import GrandSlamOfferCard from "@/components/GrandSlamOfferCard";
import HotelRoiCalculator from "@/components/HotelRoiCalculator";
import LiveHospitalityBookingWidget from "@/components/LiveHospitalityBookingWidget";
import HospitalityClusterNav from "@/components/HospitalityClusterNav";
import HospitalityMobileStickyBar from "@/components/HospitalityMobileStickyBar";

export default function HospitalityWebDesignClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePropertyTab, setActivePropertyTab] = useState<"hotel" | "restaurant">("hotel");

  // Real-time live statistics simulation
  const [otaSavings, setOtaSavings] = useState(4820000);
  const [directBookings, setDirectBookings] = useState(3420);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const liveBookings = [
    { title: "Oceanview Penthouse Suite", city: "Victoria Island, Lagos", amount: "₦450,000", time: "Just now", type: "Hotel" },
    { title: "VIP Private Dining Table (6 Pax)", city: "Lekki Phase 1, Lagos", amount: "₦180,000", time: "2 mins ago", type: "Restaurant" },
    { title: "Executive Diplomatic Suite", city: "Maitama, Abuja", amount: "₦320,000", time: "5 mins ago", type: "Hotel" },
    { title: "Weekend Table for 4 Diners", city: "GRA, Port Harcourt", amount: "₦95,000", time: "8 mins ago", type: "Restaurant" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setOtaSavings((prev) => prev + Math.floor(Math.random() * 25000) + 5000);
      setDirectBookings((prev) => prev + 1);
      setCurrentNotificationIndex((prev) => (prev + 1) % liveBookings.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [liveBookings.length]);

  // What We Build for Hotels (6 items as requested)
  const hotelFeatures = [
    {
      icon: <Smartphone className="text-[#2258FF]" size={22} />,
      title: "Mobile-First Booking Flows",
      desc: "With mobile accounting for the majority of hotel traffic and bookings, we design the entire reservation journey, room selection, date picker, guest details, payment, for a thumb on a small screen first, then scale up to tablet and desktop. This single shift alone is one of the biggest differentiators between a 1% and a 3%+ conversion rate.",
      highlight: "Thumb-first reservation journey",
    },
    {
      icon: <Layers className="text-[#2258FF]" size={22} />,
      title: "Native Booking Engine Integration",
      desc: "No clunky redirects to a third-party page that looks nothing like your brand. We integrate your booking engine directly and smoothly into your site's design, keeping guests inside a consistent, trustworthy experience from search to confirmation.",
      highlight: "Zero redirect drop-off",
    },
    {
      icon: <Zap className="text-[#2258FF]" size={22} />,
      title: "Speed-Optimized Builds",
      desc: "Every 100 milliseconds of extra load time costs roughly 1% in conversions. We build lean, fast-loading sites from the ground up, not bloated templates weighed down by unnecessary plugins and scripts.",
      highlight: "Sub-second Nigerian mobile loads",
    },
    {
      icon: <CreditCard className="text-[#2258FF]" size={22} />,
      title: "Transparent, Dynamic Pricing Display",
      desc: "Guests shouldn't have to dig through multiple pages to see your rates. We pull real-time pricing and availability directly onto your homepage and room pages, reducing the friction that sends guests straight to a booking platform instead.",
      highlight: "Live rates & availability upfront",
    },
    {
      icon: <ShieldCheck className="text-[#2258FF]" size={22} />,
      title: "Trust and Review Integration",
      desc: "Reviews, security badges, and clear policies displayed prominently across your site, not buried, build the confidence that convinces a guest to book direct instead of defaulting to an OTA they already trust.",
      highlight: "Verified reviews & security badges",
    },
    {
      icon: <Sparkles className="text-[#2258FF]" size={22} />,
      title: "AI and Search-Ready Structure",
      desc: "AI systems are already summarizing hotel websites before a guest clicks through at all. We structure your site's content and data so it's understood, trusted, and recommended by both traditional search engines and AI assistants like ChatGPT and Gemini.",
      highlight: "Google Maps & AI assistant ready",
    },
  ];

  // What We Build for Restaurants (4 items as requested)
  const restaurantFeatures = [
    {
      icon: <Utensils className="text-amber-500" size={22} />,
      title: "Mobile-Optimized Menus and Reservations",
      desc: "Fast-loading, easy-to-browse menus and a reservation flow that doesn't lose a hungry customer halfway through.",
      highlight: "0.4s load & 3-tap booking",
    },
    {
      icon: <Globe className="text-amber-500" size={22} />,
      title: "Delivery and Booking Platform Integration",
      desc: "Seamless connections to the reservation and delivery tools your customers already expect, without forcing them off your site into a disjointed experience.",
      highlight: "Connected reservation & delivery tools",
    },
    {
      icon: <Camera className="text-amber-500" size={22} />,
      title: "Visual Storytelling That Sells",
      desc: "Photography and layout built to make people hungry, not just informed, the difference between a menu page and a page that actually drives a booking or an order.",
      highlight: "Sensory food & ambiance visuals",
    },
    {
      icon: <Search className="text-amber-500" size={22} />,
      title: "Local Search Foundation Built In",
      desc: "Your site is structured from day one to support strong local search visibility, so the design work and the marketing work reinforce each other instead of fighting each other later.",
      highlight: "Top 'near me' Google ranking setup",
    },
  ];

  // Our Design Process (6 steps as requested)
  const designProcess = [
    {
      step: "01",
      title: "Discovery and Audit",
      desc: "We review your current site (or starting point), your competitors, and exactly where guests are dropping off before booking.",
      badge: "Step 1",
    },
    {
      step: "02",
      title: "UX and Booking Flow Design",
      desc: "We map the entire guest journey mobile-first, removing every unnecessary step between interest and confirmed booking.",
      badge: "Step 2",
    },
    {
      step: "03",
      title: "Build",
      desc: "Fast, clean, conversion-focused development, no bloated templates, no unnecessary plugins slowing you down.",
      badge: "Step 3",
    },
    {
      step: "04",
      title: "Booking Engine and Systems Integration",
      desc: "Your reservation system, payment processor, and any property management tools connected natively into the design.",
      badge: "Step 4",
    },
    {
      step: "05",
      title: "Testing and Launch",
      desc: "Speed, mobile responsiveness, and booking flow tested thoroughly before your site goes live.",
      badge: "Step 5",
    },
    {
      step: "06",
      title: "Ongoing Optimization",
      desc: "Conversion rate improvements don't stop at launch. We continue testing and refining based on real guest behavior.",
      badge: "Step 6",
    },
  ];

  // The Results a Properly Built Hospitality Website Delivers (4 items as requested)
  const deliverableResults = [
    {
      stat: "+23%",
      title: "Higher Conversion Rates",
      desc: "Up to 23% higher conversion rates from mobile-optimized booking engines alone.",
      accent: "from-[#2258FF]/15 to-[#2258FF]/5 text-[#2258FF] border-[#2258FF]/20",
      bar: "bg-[#2258FF]",
    },
    {
      stat: "18%–25%",
      title: "Reduced OTA Dependency",
      desc: "A fast, trustworthy direct booking experience is what actually convinces guests to book with you instead of a third-party platform.",
      accent: "from-emerald-500/15 to-emerald-500/5 text-emerald-600 border-emerald-200",
      bar: "bg-emerald-500",
    },
    {
      stat: "Sub-1.2s",
      title: "Lower Bounce Rates",
      desc: "Every second of load time saved directly reduces the abandonment eating into your bookings right now.",
      accent: "from-amber-500/15 to-amber-500/5 text-amber-600 border-amber-200",
      bar: "bg-amber-500",
    },
    {
      stat: "AI-Ready",
      title: "AI & Search Recommendations",
      desc: "A site AI systems can actually understand and recommend, not just one that looks good to a human visitor.",
      accent: "from-purple-500/15 to-purple-500/5 text-purple-600 border-purple-200",
      bar: "bg-purple-500",
    },
  ];

  const comparisonPoints = [
    {
      bad: "Generic WordPress theme with 35 slow plugins that takes 6.2 seconds to load",
      good: "Custom-coded Next.js hospitality engine that loads in 0.8 seconds on Nigerian phones",
    },
    {
      bad: "Confusing PDF menu or broken date widget that forces guests to call front desk",
      good: "1-tap mobile booking engine with live room rates, photo galleries, and instant card pay",
    },
    {
      bad: "Pushes guests away to an ugly external aggregator link where they see competitor hotels",
      good: "100% native on-site checkout keeping your luxury brand front and center with 0% OTA fees",
    },
    {
      bad: "No Google Maps schema or local SEO, leaving your property invisible to travelers",
      good: "Built-in hospitality schema and local signals engineered to dominate Google 3-Pack rankings",
    },
  ];

  // Frequently Asked Questions Hospitality Web Designer in Nigeria (5 exact questions)
  const faqs = [
    {
      question: "How much does a hospitality website cost in Nigeria?",
      answer:
        "Pricing depends on scope, a restaurant site with reservations is a different build than a full hotel site with booking engine integration and dynamic pricing. We'll give you an exact quote after understanding your specific needs during a free audit.",
    },
    {
      question: "Can you integrate our existing booking engine or PMS system?",
      answer:
        "Yes. We work with your existing booking engine, payment processor, or property management system rather than forcing you onto a new one, unless your current setup is genuinely holding back conversions.",
    },
    {
      question: "How long does a hospitality website project typically take?",
      answer:
        "Most hotel and restaurant website builds take 4 to 8 weeks from discovery to launch, depending on complexity and how much content and photography is ready to go.",
    },
    {
      question: "Will our new website actually load faster than our current one?",
      answer:
        "Speed is a core design priority from day one, not an afterthought. Given that every additional second of load time can cut conversions by up to 17%, this is one of the first things we test and optimize before launch.",
    },
    {
      question: "Do you also handle the marketing and SEO for the website once it's built?",
      answer:
        "Yes, we can handle both, or just the design if that's all you need. A well-designed site and a strong search strategy reinforce each other, so most hospitality clients see the best results when both are built together.",
    },
  ];

  const searchTicker = [
    "🏨 'hotels in Lekki with fast online booking & instant confirmation'",
    "🍽️ 'modern restaurant in VI with interactive digital food menu'",
    "🛎️ 'shortlet in Ikoyi with instant Paystack reservation'",
    "⭐ 'luxury boutique lodge Abuja with mobile-friendly room rates'",
    "🥂 'rooftop lounge in Lekki Phase 1 with 20-sec table booking'",
    "🌴 'beach resort in Lagos with zero-downtime booking engine'",
    "💳 'direct hotel room payment with Nigerian cards & bank transfer'",
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
              ChyWeb Hospitality Web Suite
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            Hospitality Web Designer{" "}
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

          {/* Value Subheadline (H2): Websites Built to Book, Not Just Look Good */}
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-800 tracking-tight leading-snug mb-5 max-w-4xl mx-auto">
            Websites Built to Book,{" "}
            <span className="text-[#2258FF] font-black">
              Not Just Look Good
            </span>
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria&apos;s specialist hospitality web designer. Fast, conversion-engineered sites for hotels and restaurants, not just pretty brochures.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Get a Free Website Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20my%20hospitality%20website%20design."
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

          {/* =========================================================================
              SHOWCASE: Dual-Device Responsive Frame (Desktop Canvas + Smartphone Thumb Flow)
          ========================================================================= */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Desktop Browser Display (7 cols) */}
              <div className="lg:col-span-7 rounded-[32px] sm:rounded-[36px] border-4 border-white shadow-[0_20px_50px_rgba(11,15,25,0.12)] overflow-hidden bg-[#0a1e64] relative group order-2 lg:order-1">
                {/* Browser window top bar */}
                <div className="px-5 py-3 bg-[#2258FF] border-b border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-white/80 bg-white/10 px-4 py-0.5 rounded-full border border-white/10">
                    chyweb.agency/hospitality/hotel-desktop-engine
                  </div>
                  <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Direct Engine</span>
                  </div>
                </div>

                {/* Photographic Room Showcase Canvas */}
                <div className="relative h-[340px] sm:h-[400px] overflow-hidden flex items-end p-6 sm:p-8">
                  <img
                    src="/images/luxury_hotel_suite.jpg"
                    alt="Luxury Suite Desktop View"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64] via-[#0a1e64]/30 to-transparent" />

                  {/* Dynamic Live Booking Alert Notification on Desktop Canvas */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentNotificationIndex}
                      initial={{ opacity: 0, y: -20, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.96 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#2258FF]/95 backdrop-blur-xl border border-white/30 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 text-white max-w-sm text-left z-20"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500 absolute inset-0" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] text-emerald-300 font-black block uppercase tracking-wider">
                          {liveBookings[currentNotificationIndex].type === "Hotel" ? "⚡ Direct Room Reservation" : "🍷 Direct Table Reservation"}
                        </span>
                        <strong className="text-xs font-black truncate block text-white">
                          {liveBookings[currentNotificationIndex].title}
                        </strong>
                        <span className="text-[9px] text-slate-300 font-medium">0% Commission Cut</span>
                      </div>
                      <div className="text-right flex-shrink-0 border-l border-white/15 pl-2.5">
                        <span className="text-xs font-black text-amber-300 block">
                          {liveBookings[currentNotificationIndex].amount}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Floating Rate Comparison Pill */}
                  <div className="relative z-10 w-full bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 text-white">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div>
                        <div className="text-[10px] text-[#2258FF] font-black uppercase tracking-wider">Dynamic Direct Engine</div>
                        <h4 className="text-lg font-black !text-white" style={{ color: "#ffffff" }}>Executive Suite — Lekki</h4>
                        <p className="text-xs text-slate-300">Live calendar availability • Instant Paystack confirmation</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-xs text-slate-400 line-through">₦180,000 on OTAs</div>
                        <div className="text-xl font-black text-amber-400">₦145,000 <span className="text-xs text-slate-300 font-normal">/ night direct</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smartphone Thumb-First Mockup (5 cols) */}
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                <div className="w-full max-w-[320px] sm:max-w-[340px] rounded-[44px] border-[6px] border-slate-800 bg-[#0a1e64] shadow-[0_24px_60px_rgba(34,88,255,0.22)] overflow-hidden relative text-white">
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="pt-3 pb-2 px-6 bg-slate-900 flex justify-center items-center border-b border-slate-800">
                    <div className="w-24 h-4 rounded-full bg-black border border-slate-800 flex items-center justify-end px-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Phone screen content */}
                  <div className="p-4 sm:p-5 space-y-3.5 bg-[#081530]">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-emerald-400 font-bold">⚡ 0.8s Instant Load</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                        Mobile Thumb Flow
                      </span>
                    </div>

                    {/* Room Mini Card with 2nd Image */}
                    <div className="rounded-2xl overflow-hidden relative border border-white/10 group">
                      <img
                        src="/images/luxury_hotel_suite.jpg"
                        alt="Mobile Suite Preview"
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#2258FF] text-white text-[9px] font-black uppercase">
                        Direct Rate
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-slate-900/90 text-amber-400 text-[10px] font-black">
                        ₦145k / night
                      </div>
                    </div>

                    {/* Date & Guest Tap Selectors */}
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                        <Calendar size={12} className="text-[#2258FF]" />
                        <span>Tonight, 1 Night</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                        <Clock size={12} className="text-amber-400" />
                        <span>Instant Booking</span>
                      </div>
                    </div>

                    {/* 1-Tap Paystack CTA */}
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0c33be] text-white font-black text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>1-Tap Pay with Paystack</span>
                      <ArrowRight size={13} />
                    </button>

                    <div className="flex justify-between items-center text-[10px] text-slate-400 px-1 pt-1">
                      <span>✓ Visa, Verve & Transfer</span>
                      <span className="text-emerald-400 font-bold">✓ 0% OTA Commission</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock */}
            <div className="mt-8 bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center text-left text-slate-900 shadow-xl">
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
              Nigeria&apos;s specialist hospitality web designer. Fast, conversion-engineered sites for hotels and restaurants, not just pretty brochures.
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
                  The average hotel website converts under 4% of visitors into bookings. 85% abandon before completing one. If your site is slow or your booking flow is clunky, you&apos;re not losing guests to a better property, you&apos;re losing them to friction your own site created.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Under 4% conversion and 85% mobile booking abandonment</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Slow page loads and clunky multi-step checkouts</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Guests give up and pay 20% more on Booking.com</span>
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
                  Engineered Around How Guests Actually Search and Book
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  We fix that: mobile-first design, native booking engine integration, speed-optimized builds, engineered around how guests actually search, compare, and book.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-white/15 text-xs sm:text-sm text-blue-100 relative z-10">
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Mobile-first thumb booking with zero forced passwords</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Native booking engine integration inside your luxury brand</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Speed-optimized builds that load in 0.8s on Nigerian networks</span>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim Your Free Website Audit</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: Why Hospitality Websites Need a Specialist Web Designer (H2)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            The Specialist Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            Why Hospitality Websites Need a Specialist Web Designer.
          </h2>
        </div>

        {/* 2-Card Layout: Generic Agency Trap vs. Hospitality-Specific Mechanics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Card 1: Photographic High-Impact Box with Royal Blue Gradient Scrim */}
          <div className="lg:col-span-5 rounded-[32px] relative overflow-hidden shadow-xl border border-blue-400/40 p-8 sm:p-10 flex flex-col justify-between text-white group">
            <img
              src="/images/hotel_lobby_lagos.jpg"
              alt="Hospitality Website Architecture"
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/95 via-[#1040E6]/88 to-[#2258FF]/82 backdrop-blur-[0.5px]" />
            <div className="absolute inset-0 bg-[#0a1e64]/25" />
            <div className="relative z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/15 text-amber-300 text-xs font-black uppercase tracking-wider mb-6 inline-block border border-white/20 backdrop-blur-md">
                Not a Corporate Brochure
              </span>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                A restaurant menu page and a hotel booking flow are <span className="text-amber-300 font-bold underline decoration-white decoration-2 underline-offset-4">not the same design problem</span> as a law firm&apos;s &quot;About Us&quot; page, and building them the same way is exactly how most Nigerian hospitality websites end up looking fine and converting terribly.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-white/20 text-blue-100 text-xs font-semibold relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Engineered specifically for how guests actually book in Nigeria</span>
            </div>
          </div>

          {/* Card 2: Hospitality-Specific Design Mechanics */}
          <div className="lg:col-span-7 rounded-[32px] bg-white p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#2258FF] bg-[#2258FF]/10 px-3 py-1 rounded-full border border-[#2258FF]/20 mb-4 inline-block">
                Industry-Specific Mechanics
              </span>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-medium">
                A specialist hospitality web designer in Nigeria understands the specific mechanics that actually move the needle in this industry: real-time availability and pricing, smooth booking engine integration, mobile-first checkout flows, trust-building review displays, and content structured to answer a guest&apos;s questions in seconds, not paragraphs.
              </p>

              {/* 5 Industry Mechanics Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-bold text-slate-800">
                  <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
                  <span>Real-Time Availability &amp; Pricing</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-bold text-slate-800">
                  <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
                  <span>Smooth Booking Engine Integration</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-bold text-slate-800">
                  <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
                  <span>Mobile-First Checkout Flows</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-bold text-slate-800">
                  <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
                  <span>Trust-Building Review Displays</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-bold text-slate-800 sm:col-span-2">
                  <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
                  <span>Content Structured for Seconds, Not Paragraphs</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-800 font-semibold">
              Generic web design agencies build pretty pages. Hospitality-specific design builds pages engineered to convert a browser into a booked guest.
            </div>
          </div>
        </div>

        {/* 4 Comparison Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {comparisonPoints.map((pt, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-start gap-2.5 text-rose-700 text-xs sm:text-sm">
                <span className="font-bold text-rose-500 flex-shrink-0">✕ Generic Agency:</span>
                <span>{pt.bad}</span>
              </div>
              <div className="flex items-start gap-2.5 text-emerald-800 text-xs sm:text-sm font-semibold border-t border-slate-100 pt-3">
                <span className="font-bold text-emerald-600 flex-shrink-0">✓ Hospitality Specialist:</span>
                <span>{pt.good}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: What We Build for Hotels & What We Build for Restaurants
      ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
              Engineered Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
              What We Build for Hotels &amp; Restaurants
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Explore how our web design is tailored specifically around how hotel guests and restaurant diners search, browse, and book.
            </p>

            {/* Interactive Toggle Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mt-8 gap-2 shadow-inner">
              <button
                onClick={() => setActivePropertyTab("hotel")}
                className={`px-6 sm:px-8 py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activePropertyTab === "hotel"
                    ? "bg-[#2258FF] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Hotel size={16} />
                <span>What We Build for Hotels</span>
              </button>

              <button
                onClick={() => setActivePropertyTab("restaurant")}
                className={`px-6 sm:px-8 py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activePropertyTab === "restaurant"
                    ? "bg-amber-500 text-slate-900 shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Utensils size={16} />
                <span>What We Build for Restaurants</span>
              </button>
            </div>
          </div>

          {/* TAB 1: WHAT WE BUILD FOR HOTELS (6 Items) */}
          {activePropertyTab === "hotel" && (
            <div className="space-y-12 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {hotelFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-7 sm:p-9 rounded-[32px] bg-[#FAF8F5] border border-slate-200/90 shadow-sm hover:shadow-[0_16px_36px_rgba(34,88,255,0.08)] hover:border-[#2258FF] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                        {feat.icon}
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 leading-snug">{feat.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{feat.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#2258FF]">
                      <span>{feat.highlight}</span>
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: WHAT WE BUILD FOR RESTAURANTS (4 Items) */}
          {activePropertyTab === "restaurant" && (
            <div className="space-y-10 animate-in fade-in duration-300">
              <div className="p-8 sm:p-12 rounded-[36px] bg-[#FAF8F5] border-2 border-amber-500/20 shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 font-black text-xs uppercase tracking-widest inline-block mb-3">
                      Dining &amp; Culinary Engine
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                      Web Design Built to Fill Tables Every Weekend
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      A restaurant website should stimulate appetite, showcase your ambiance, and make reserving a table as quick as sending a WhatsApp message.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {restaurantFeatures.map((rf, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                          <strong className="text-xs sm:text-sm font-black text-slate-900 block mb-1">{rf.title}</strong>
                          <p className="text-xs text-slate-600 leading-relaxed">{rf.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white group">
                    <img
                      src="/images/vibrant_dining_restaurant.jpg"
                      alt="Packed Lively Restaurant with Happy Diners in Lekki Lagos"
                      className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/90 via-[#0a1e64]/20 to-transparent flex items-end p-6 text-white">
                      <div>
                        <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-900 text-xs font-black uppercase tracking-wider block w-fit mb-2">
                          Packed Tables Every Weekend
                        </span>
                        <strong className="text-base sm:text-lg font-bold block !text-white" style={{ color: "#ffffff" }}>
                          &quot;2.4x more online table reservations since launching our new mobile menu.&quot;
                        </strong>
                        <span className="text-xs text-slate-300 block mt-1">
                          Direct WhatsApp &amp; SMS booking notifications sent instantly to your hostess stand.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PDF MENU VS DIGITAL MENU VISUAL TEARDOWN */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-7 rounded-3xl bg-rose-50/50 border border-rose-200 shadow-sm">
                  <div className="flex items-center gap-2.5 text-rose-600 font-black text-sm mb-4">
                    <XCircle size={20} />
                    <span>The Old Way: The 25MB PDF Menu</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>Forces diners to download heavy files that burn mobile data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>Tiny, blurry text you have to pinch and zoom to read.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>Zero dietary tags, no live chef specials, and zero photos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <strong className="text-rose-700">85% of hungry diners close the tab and choose another lounge.</strong>
                    </li>
                  </ul>
                </div>

                <div className="p-7 rounded-3xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-2.5 text-emerald-700 font-black text-sm mb-4">
                    <CheckCircle2 size={20} />
                    <span>The ChyWeb Way: Interactive Culinary Web App</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Opens instantly in 0.4 seconds with zero downloads required.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Mouthwatering high-resolution photography and ingredient tags.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Clear upfront pricing with live cocktail and wine pairings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <strong className="text-emerald-800">1-tap table booking directly to your WhatsApp or hostess SMS.</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: Our Design Process (6 Steps)
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Proven Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Our Design Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            A structured, conversion-focused process that takes your hospitality property from initial audit to live guest bookings.
          </p>
        </div>

        {/* 6 Process Cards in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {designProcess.map((step, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-[0_12px_32px_rgba(34,88,255,0.08)] hover:border-[#2258FF] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono font-black text-[#2258FF] bg-[#2258FF]/10 px-3 py-1 rounded-full">
                    {step.badge}
                  </span>
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900 block mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Guarantee Banner */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong className="text-sm font-black text-slate-900 block">
                Speed, Testing &amp; Seamless Launch
              </strong>
              <span className="text-xs text-slate-600">
                Speed, mobile responsiveness, and booking flow tested thoroughly before your site goes live.
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Start With a Free Audit</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: The Results a Properly Built Hospitality Website Delivers (4 Key Results)
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Measurable Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            The Results a Properly Built Hospitality Website Delivers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            When your website is engineered specifically for hospitality searchers, these are the concrete returns your property achieves.
          </p>
        </div>

        {/* 4 Result Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {deliverableResults.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(34,88,255,0.1)] hover:border-[#2258FF] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-14 h-1.5 ${item.bar} rounded-full mb-6 sm:mb-7`} />
                <div
                  className={`inline-flex items-center justify-center px-4 py-2.5 rounded-2xl bg-gradient-to-br ${item.accent} font-black text-2xl sm:text-3xl mb-5 w-fit group-hover:scale-105 transition-transform tracking-tight border`}
                >
                  {item.stat}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE HOTEL ROI CALCULATOR
      ========================================================================= */}
      <HotelRoiCalculator onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* =========================================================================
          SECTION 6: Why ChyWeb Academy as Your Hospitality Web Designer in Nigeria
      ========================================================================= */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="p-10 sm:p-14 rounded-[36px] shadow-[0_20px_50px_rgba(34,88,255,0.22)] border-4 border-white relative overflow-hidden text-center text-white group">
          {/* High-visibility Photographic Backdrop */}
          <img
            src="/images/luxury_hotel_suite.jpg"
            alt="Luxury Hospitality Architecture"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
          />
          {/* Royal ChyWeb Blue to Deep Indigo Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/92 via-[#1040E6]/85 to-[#2258FF]/80 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-[#0a1e64]/25" />

          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 font-black text-xs uppercase tracking-wider mb-5 inline-flex items-center gap-2 shadow-sm">
              <Sparkles size={13} className="text-amber-300" />
              Integrated Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white !text-white mb-6 leading-tight" style={{ color: "#ffffff" }}>
              Why ChyWeb Academy as Your Hospitality Web Designer in Nigeria
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              Design and marketing shouldn&apos;t be two disconnected vendors pointing fingers at each other when bookings don&apos;t come in. We build hospitality websites as part of the same framework behind our work in{" "}
              <a
                href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
                className="text-amber-300 font-black underline hover:text-amber-200 transition-colors"
              >
                AI-powered SEO
              </a>{" "}
              and{" "}
              <a
                href="https://chyweb.com.ng/blog/best-aeo-agency-in-nigeria-2026-guide-to-ai-search"
                className="text-amber-300 font-black underline hover:text-amber-200 transition-colors"
              >
                answer engine optimization
              </a>
              , so your site isn&apos;t just fast and beautiful, it&apos;s built to be found, trusted, and recommended by both guests and the AI systems increasingly shaping where people book and eat. If you&apos;d rather learn these fundamentals for your own team, our{" "}
              <a
                href="https://chyweb.com.ng/"
                className="text-amber-300 font-black underline hover:text-amber-200 transition-colors"
              >
                digital marketing training in Nigeria
              </a>{" "}
              covers the same principles we apply to every client site.
            </p>

            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-base shadow-[0_10px_25px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book a Design Consultation</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LIVE EXPERIENCE SIMULATOR
      ========================================================================= */}
      <LiveHospitalityBookingWidget onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* =========================================================================
          IRRESISTIBLE VALUE OFFER: Zero-Risk Direct Booking Guarantee
      ========================================================================= */}
      <GrandSlamOfferCard
        onClaim={() => setIsModalOpen(true)}
        title="The Done-For-You Hospitality Booking Website System"
        badge="Zero-Risk Direct Revenue Guarantee"
      />

      {/* Cross-Link Topic Cluster: The Full Hospitality Suite */}
      <HospitalityClusterNav
        currentPath="/hospitality-web-designer-nigeria"
        onOpenAuditModal={() => setIsModalOpen(true)}
      />

      {/* =========================================================================
          SECTION 7: Frequently Asked Questions Hospitality Web Designer in Nigeria
      ========================================================================= */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions Hospitality Web Designer in Nigeria" />

      {/* =========================================================================
          FINAL CTA SECTION: Stop Watching Guests Bounce Off Your Website
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-10 sm:p-16 lg:p-20 group">
          {/* High-visibility Photographic Background */}
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Luxury Resort and Hotel Guests in Lagos"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/92 via-[#1040E6]/84 to-[#2258FF]/80 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-[#0a1e64]/25" />

          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2258FF]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-amber-300 font-black text-xs uppercase tracking-widest mb-6 inline-block">
              Stop Handing Guests to Competitors
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight !text-white" style={{ color: "#ffffff" }}>
              Stop Watching Guests Bounce Off Your Website
            </h2>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
              Every day your site loads slowly or makes booking harder than it needs to be, you&apos;re handing guests to a competitor with a faster, smoother experience. Let&apos;s fix that.
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
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20my%20hospitality%20website%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>WhatsApp: 0906 762 3555</span>
              </a>
            </div>

            <p className="text-blue-200/80 text-xs mt-6">
              Free 30-Minute Video Audit • Sub-Second Speed Benchmark • Direct Booking Engine Setup
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
        defaultService="Hospitality Web Design"
        defaultPropertyType="Hotel / Boutique Lodge"
      />
    </div>
  );
}
