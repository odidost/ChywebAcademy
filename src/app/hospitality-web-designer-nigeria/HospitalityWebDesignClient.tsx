"use client";

import { useState } from "react";
import Link from "next/link";
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
  Award,
  Check,
  ChevronRight,
  MessageSquare,
  Smartphone,
  Flame,
  Globe,
  TrendingUp,
  Sliders,
  DollarSign,
  Search,
  Building,
  Key,
  XCircle,
  FileText,
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
  const [activePropertyTab, setActivePropertyTab] = useState<"hotel" | "restaurant" | "shortlet">("hotel");

  const hotelFeatures = [
    {
      icon: <Smartphone className="text-[#2258FF]" size={22} />,
      title: "Thumb-First Mobile Booking Flows",
      desc: "Over 70% of Nigerian guests book rooms directly from their smartphones. We design room cards, date pickers, guest forms, and 1-tap checkout specifically for mobile thumbs so guests never pinch-to-zoom or abandon in frustration.",
      metric: "+23% Mobile Conversion Rate",
    },
    {
      icon: <Layers className="text-[#2258FF]" size={22} />,
      title: "Native Booking Engine Integration",
      desc: "Stop sending guests to ugly, confusing third-party redirect links where 60% drop off. We integrate your booking engine natively into your site, keeping guests immersed in your luxury brand experience from room selection to payment.",
      metric: "Zero Redirect Drop-Off",
    },
    {
      icon: <Zap className="text-[#2258FF]" size={22} />,
      title: "Sub-Second Ultra-Fast Codebases",
      desc: "Slow websites kill bookings. Every 1-second delay cuts your revenue by up to 17%. We build custom, lightweight codebases free of bloated WordPress plugins, delivering lightning-fast 0.8s loads even on spotty Nigerian mobile networks.",
      metric: "98/100 Google PageSpeed",
    },
    {
      icon: <CreditCard className="text-[#2258FF]" size={22} />,
      title: "Live Real-Time Dynamic Room Pricing",
      desc: "Guests should never have to call front desk just to confirm tonight's room rate. We display live pricing, instant availability, and direct-booking perks upfront, eliminating the friction that sends guests back to Booking.com.",
      metric: "100% Upfront Price Clarity",
    },
    {
      icon: <ShieldCheck className="text-[#2258FF]" size={22} />,
      title: "Instant Paystack & Card Checkout",
      desc: "Seamlessly accept Visa, Mastercard, Verve, Apple Pay, and instant Nigerian bank transfers with immediate receipt generation and automatic WhatsApp/email confirmation sent to both guest and front desk.",
      metric: "Bank-Grade Trust & Security",
    },
    {
      icon: <Sparkles className="text-[#2258FF]" size={22} />,
      title: "AI Search & Rich Schema Architecture",
      desc: "Engineered with advanced Hotel, Room, and LodgingBusiness schema so Google Maps, ChatGPT, and Gemini AI assistants cite and recommend your property as the premier choice in your city.",
      metric: "AI & Google 3-Pack Ready",
    },
  ];

  const restaurantFeatures = [
    {
      title: "Lightning-Fast Mobile Digital Menus",
      desc: "No more downloading blurry 25MB PDF menus on mobile phones. We build crisp, interactive culinary menus with vivid photography, dietary tags, and direct price transparency.",
    },
    {
      title: "Frictionless Table Booking in 20 Seconds",
      desc: "Guests pick their party size, date, and preferred seating in three simple taps. Automated SMS & WhatsApp confirmations lock in reservations and slash weekend no-shows.",
    },
    {
      title: "Sensory Food Photography & Visual Storytelling",
      desc: "Designed to trigger instant appetite and social sharing. High-definition visual hierarchy showcases your signature dishes, rooftop ambience, and cocktail presentations.",
    },
    {
      title: "Built-In Local SEO & 'Near Me' Dining Domination",
      desc: "Structured from line one with local schema markup and location signals so your restaurant captures top rankings for high-intent searches like 'best dinner in Ikeja' or 'rooftop lounge Lekki'.",
    },
  ];

  const shortletFeatures = [
    {
      title: "Multi-Night Discount Automation",
      desc: "Automatically calculate weekly and monthly stay discounts upfront, encouraging high-ticket extended stays for diaspora visitors and corporate business travelers.",
    },
    {
      title: "1-Tap WhatsApp Inspection & Booking",
      desc: "Nigerian shortlet guests demand trust before paying. Direct WhatsApp booking triggers let guests view video walkthroughs and speak with your concierge in seconds.",
    },
    {
      title: "Live Multi-Platform Calendar Sync",
      desc: "Seamless synchronization between your direct booking site, Airbnb, and Booking.com to eliminate double-bookings and embarrassing guest cancellations.",
    },
    {
      title: "Automated Digital House Manual & Check-in",
      desc: "Send guests clean, mobile-optimized self-check-in guides, WiFi passwords, and estate security codes the moment their payment is verified.",
    },
  ];

  const launchSprint = [
    {
      step: "01",
      days: "Days 01–04",
      title: "Funnel Audit & Mobile Wireframes",
      desc: "We analyze your current site speed, identify booking drop-offs, and map a frictionless 3-tap mobile reservation flow for your rooms or dining tables.",
      badge: "Architecture & UX",
    },
    {
      step: "02",
      days: "Days 05–10",
      title: "Custom Next.js Codebase Build",
      desc: "Bespoke development built for blistering speed—no heavy, bloated WordPress templates or 40 slow plugins that crash on every update.",
      badge: "Sub-Second Code",
    },
    {
      step: "03",
      days: "Days 11–15",
      title: "PMS, Engine & Paystack Sync",
      desc: "Two-way integration with your live inventory, property management system, and instant Nigerian card & bank transfer checkout.",
      badge: "Engine & Payments",
    },
    {
      step: "04",
      days: "Days 16–19",
      title: "3G/4G Mobile Stress-Testing",
      desc: "Rigorous testing on iPhone, Android, and tablets under real Nigerian network speeds to guarantee 0.8s load times everywhere.",
      badge: "Speed & Security",
    },
    {
      step: "05",
      days: "Day 21",
      title: "Production Launch & Staff Handover",
      desc: "Zero-downtime deployment, automated Google review engine setup, staff booking walkthrough, and direct booking verification.",
      badge: "Live & Booking",
    },
  ];

  const abandonmentStats = [
    {
      stat: "85%",
      label: "Mobile Abandonment Rate",
      desc: "85% of guests who visit a slow or clunky hotel website leave without booking and go straight to Booking.com.",
      accent: "from-rose-500/15 to-rose-500/5 text-rose-600 border-rose-200",
      bar: "bg-rose-500",
    },
    {
      stat: "72%",
      label: "Nigerian Mobile Traffic",
      desc: "Over 70% of room inquiries and restaurant reservations in Nigeria now originate on mobile phone screens.",
      accent: "from-[#2258FF]/15 to-[#2258FF]/5 text-[#2258FF] border-[#2258FF]/20",
      bar: "bg-[#2258FF]",
    },
    {
      stat: "+23%",
      label: "Direct Booking Lift",
      desc: "Hotels that switch to a dedicated mobile booking engine experience an immediate 23% jump in direct reservations.",
      accent: "from-emerald-500/15 to-emerald-500/5 text-emerald-600 border-emerald-200",
      bar: "bg-emerald-500",
    },
    {
      stat: "-17%",
      label: "Revenue Per Extra Second",
      desc: "Every extra second of load time cuts conversion by 17%. Over half of mobile users leave if a site takes >3 seconds.",
      accent: "from-amber-500/15 to-amber-500/5 text-amber-600 border-amber-200",
      bar: "bg-amber-500",
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

  const faqs = [
    {
      question: "How much does a specialist hospitality website cost in Nigeria?",
      answer:
        "Pricing depends on the scope of your property: a boutique restaurant or rooftop lounge website with digital interactive menus and table booking typically ranges from ₦450,000 to ₦950,000. A full hotel or serviced apartment website with live booking engine integration, real-time room availability, dynamic pricing, and PMS synchronization ranges from ₦950,000 to ₦2,800,000+. Because every direct booking saves you 18%–25% in OTA commissions, most clients recoup their entire investment within the first 60 to 90 days.",
    },
    {
      question: "Can you integrate our existing hotel booking engine or PMS software?",
      answer:
        "Yes, absolutely. We work seamlessly with your existing PMS (like Cloudbeds, Hotelogix, RoomRaccoon, Opera) and booking engines. If your current booking engine is clunky and causing guests to abandon, we can either re-skin it for mobile or deploy our high-converting native booking engine connected directly to Paystack and Flutterwave.",
    },
    {
      question: "Will our new website genuinely load fast on Nigerian mobile networks?",
      answer:
        "Speed is our foundational obsession. We refuse to use bloated templates with 40 heavy plugins. We build lean, modern web applications that achieve 90+ scores on Google PageSpeed Insights and load in under 1.2 seconds on standard Nigerian 3G/4G connections. Fast load times mean fewer bounces and more bookings.",
    },
    {
      question: "How does your 21-Day Rapid Launch Sprint work?",
      answer:
        "We follow a strict 5-stage roadmap: Days 1–4 UX wireframes, Days 5–10 custom Next.js build, Days 11–15 PMS & Paystack integration, Days 16–19 network stress testing, and Day 21 live production launch. No disappearing acts, no endless delays. You get an exact launch date on Day 1.",
    },
    {
      question: "Do you also manage hotel SEO and digital marketing after launch?",
      answer:
        "Yes! A high-converting website is the engine, but targeted traffic is the fuel. Many of our hotel clients combine our web design with our monthly hotel digital marketing and Google Maps SEO retainers to ensure high-spending business travelers and weekend staycationers find and book their suites directly.",
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
              Hospitality Web Design Specialist
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Main Hero Headline with Hand-drawn Luxury Curve */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.08] mb-6 text-slate-900 max-w-5xl mx-auto">
            Websites Built to Book,{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                Not Just Look Pretty
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
            A beautiful hotel or restaurant website that does not generate bookings is just an expensive digital brochure that drains money. We build sub-second, mobile-first booking engines that turn casual smartphone browsers into paying guests.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Eliminate the 18% to 25% commission fees surrendered to Booking.com with direct Nigerian card and bank transfer checkouts that guests trust.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Book a Free Web & Speed Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20a%20high-converting%20hospitality%20booking%20website%20design."
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
              <span>Sub-1.2s Nigerian Mobile Load</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
              <span>Native Paystack & Apple Pay</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
              <span>Zero 20% OTA Commission Fees</span>
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
            SHOWCASE: Dual-Device Responsive Frame (Smartphone Thumb Flow + Desktop Canvas)
        ========================================================================= */}
        <div className="max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Desktop Browser Display (7 cols) */}
            <div className="lg:col-span-7 rounded-[32px] sm:rounded-[36px] border-4 border-white shadow-[0_20px_50px_rgba(11,15,25,0.12)] overflow-hidden bg-slate-950 relative group order-2 lg:order-1">
              {/* Browser window top bar */}
              <div className="px-5 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-4 py-0.5 rounded-full border border-slate-800">
                  chyweb.agency/hospitality/hotel-desktop-engine
                </div>
                <div className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Desktop 4K</span>
                </div>
              </div>

              {/* Photographic Room Showcase Canvas */}
              <div className="relative h-[340px] sm:h-[400px] overflow-hidden flex items-end p-6 sm:p-8">
                <img
                  src="/images/luxury_hotel_suite.jpg"
                  alt="Luxury Suite Desktop View"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

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
              <div className="w-full max-w-[320px] sm:max-w-[340px] rounded-[44px] border-[6px] border-slate-800 bg-slate-950 shadow-[0_24px_60px_rgba(34,88,255,0.22)] overflow-hidden relative text-white">
                {/* Dynamic Island / Speaker Notch */}
                <div className="pt-3 pb-2 px-6 bg-slate-900 flex justify-center items-center border-b border-slate-800">
                  <div className="w-24 h-4 rounded-full bg-black border border-slate-800 flex items-center justify-end px-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>

                {/* Phone screen content */}
                <div className="p-4 sm:p-5 space-y-3.5 bg-slate-950">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-emerald-400 font-bold">⚡ 0.8s Instant Load</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      Mobile Thumb Flow
                    </span>
                  </div>

                  {/* Room Mini Card */}
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

          {/* Unified Performance Dock */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>0.8s Sub-Second Speed Benchmark</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2258FF]" />
              <span>+23% Mobile Engine Direct Bookings</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>100% Direct Revenue Retained</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE SPEED BENCHMARK: WordPress Template vs ChyWeb Engine
      ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Speed & Conversion Benchmark
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Why 53% of Nigerian Travelers Abandon <br />
            <span className="text-[#2258FF]">Before Your Website Even Loads</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            On Nigerian mobile networks, speed is everything. If your website takes more than 3 seconds to load, over half of your potential guests bounce straight to Booking.com. Here is the plain technical difference between a typical agency's WordPress template and the ChyWeb Direct Engine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Card A: Typical WordPress Site */}
          <div className="p-7 sm:p-9 rounded-[32px] bg-white border-2 border-rose-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-2xl bg-rose-500 text-white font-black text-[11px] uppercase tracking-wider">
              The Commission Drain
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Gauge size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">Typical Hotel WordPress Site</h3>
                  <span className="text-xs text-rose-600 font-bold">6.2s Average Nigerian Mobile Load</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-bold text-slate-600">
                  <span>Google PageSpeed Mobile Score</span>
                  <span className="text-rose-600 font-black">34 / 100 (POOR)</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[34%] h-full bg-rose-500 rounded-full" />
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2 text-rose-700">
                  <span className="font-bold">✕ 38 Slow Plugins:</span>
                  <span>Heavy page builders that drag load times down to 6.2 seconds.</span>
                </div>
                <div className="flex items-start gap-2 text-rose-700">
                  <span className="font-bold">✕ Pinch-to-Zoom Date Picker:</span>
                  <span>Guests struggle to select check-in dates on small screens.</span>
                </div>
                <div className="flex items-start gap-2 text-rose-700">
                  <span className="font-bold">✕ Ugly External Redirect:</span>
                  <span>Sends guests to third-party portals where they see competing hotels.</span>
                </div>
                <div className="flex items-start gap-2 text-rose-700">
                  <span className="font-bold">✕ 85% Mobile Bounce:</span>
                  <span>Guests give up and book on Booking.com, costing you 20% in fees.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600">
              <span>Result: Zero direct phone bookings</span>
              <span>100% OTA Reliant</span>
            </div>
          </div>

          {/* Card B: ChyWeb Custom Hospitality Engine */}
          <div className="p-7 sm:p-9 rounded-[32px] bg-white border-2 border-[#2258FF] shadow-[0_16px_40px_rgba(34,88,255,0.12)] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-2xl bg-[#2258FF] text-white font-black text-[11px] uppercase tracking-wider">
              The Direct Revenue Machine
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center font-bold">
                  <Zap size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">ChyWeb Custom Direct Engine</h3>
                  <span className="text-xs text-emerald-600 font-bold">0.8s Sub-Second Mobile Load</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-bold text-slate-600">
                  <span>Google PageSpeed Mobile Score</span>
                  <span className="text-emerald-600 font-black">98 / 100 (ELITE)</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[98%] h-full bg-gradient-to-r from-[#2258FF] to-emerald-500 rounded-full" />
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2 text-emerald-700">
                  <span className="font-bold">✓ Zero-Plugin Next.js Build:</span>
                  <span>Pure lightweight code that opens instantly even on weak 3G/4G networks.</span>
                </div>
                <div className="flex items-start gap-2 text-emerald-700">
                  <span className="font-bold">✓ Thumb-Friendly Booking:</span>
                  <span>Large tap targets, instant date selector, and room comparison.</span>
                </div>
                <div className="flex items-start gap-2 text-emerald-700">
                  <span className="font-bold">✓ 100% Native Checkout:</span>
                  <span>Guests stay inside your brand from initial search to Paystack receipt.</span>
                </div>
                <div className="flex items-start gap-2 text-emerald-700">
                  <span className="font-bold">✓ +23% Direct Conversion:</span>
                  <span>More completed bookings, zero OTA commissions, cash straight to your bank.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2258FF]">
              <span>Result: Keep 100% room revenue</span>
              <span className="text-emerald-600 font-black">0% Middleman Fees</span>
            </div>
          </div>
        </div>

        {/* Live Simulator CTA Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <Gauge size={22} />
            </div>
            <div>
              <strong className="text-base font-black text-slate-900 block">Want to test your current hotel website speed?</strong>
              <span className="text-xs sm:text-sm text-slate-600">We will run a comprehensive Core Web Vitals audit and show you why guests are bouncing to OTAs.</span>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer shadow-md"
          >
            <span>Audit My Website Speed</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* =========================================================================
          THE ABANDONMENT EPIDEMIC: Responsive Padded Bento Stat Section
      ========================================================================= */}
      <section className="py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-black text-xs uppercase tracking-wider mb-4 inline-block">
            The Bleeding Funnel
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            Your Website Is Losing Bookings Right Now. <br />
            <span className="text-[#2258FF]">Here is the Plain Truth.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            The average hotel website converts only 1.5% to 2.5% of visitors into confirmed reservations. That means 97 out of every 100 people who visit leave without booking. The reason is almost never your rooms—it is friction, slow loading speeds, and clunky mobile checkout.
          </p>
        </div>

        {/* 4 Stat Cards with Generous Mobile & Desktop Padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 mb-16 sm:mb-20">
          {abandonmentStats.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 lg:p-9 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(34,88,255,0.1)] hover:border-[#2258FF] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-14 h-1.5 ${item.bar} rounded-full mb-6 sm:mb-7`} />
                <div
                  className={`inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-gradient-to-br ${item.accent} font-black text-3xl sm:text-4xl mb-5 w-fit group-hover:scale-105 transition-transform tracking-tight border`}
                >
                  {item.stat}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 leading-snug">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            SPECIALIST ADVANTAGE: Photographic Luxury Suite Backdrop with Royal Blue Overlay
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
                The Specialist Difference
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black !text-white leading-tight mb-4" style={{ color: "#ffffff" }}>
                Why General Web Agencies Build Websites That Fail to Book
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Designing a hotel or restaurant website is completely different from building a corporate law firm website. When a general web agency treats hospitality like a normal business, you end up with a pretty website that generates zero phone calls and zero room reservations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {comparisonPoints.map((pt, i) => (
                <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3">
                  <div className="flex items-start gap-2.5 text-rose-300 text-xs sm:text-sm">
                    <span className="font-bold text-rose-400 flex-shrink-0">✕ General Agency:</span>
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
          INTERACTIVE LIVE EXPERIENCE SIMULATOR: Table & Room Flow
      ========================================================================= */}
      <LiveHospitalityBookingWidget onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* =========================================================================
          INTERACTIVE 3-TAB PROPERTY ARCHITECTURE SHOWCASE
          Hotels • Restaurants • Shortlets
      ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
              Tailored Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
              What We Build For Your Specific Property Type
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Select your property model below to see how our engineering turns your specific visitors into confirmed reservations.
            </p>

            {/* Interactive 3-Tab Controls */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mt-8 gap-1 shadow-inner flex-wrap justify-center">
              <button
                onClick={() => setActivePropertyTab("hotel")}
                className={`px-5 sm:px-7 py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activePropertyTab === "hotel"
                    ? "bg-[#2258FF] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Hotel size={16} />
                <span>Boutique Hotels & Lodges</span>
              </button>

              <button
                onClick={() => setActivePropertyTab("restaurant")}
                className={`px-5 sm:px-7 py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activePropertyTab === "restaurant"
                    ? "bg-amber-500 text-slate-950 shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Utensils size={16} />
                <span>Restaurants & Lounges</span>
              </button>

              <button
                onClick={() => setActivePropertyTab("shortlet")}
                className={`px-5 sm:px-7 py-3 rounded-xl font-black text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                  activePropertyTab === "shortlet"
                    ? "bg-emerald-600 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Building size={16} />
                <span>Shortlets & Apartments</span>
              </button>
            </div>
          </div>

          {/* TAB 1: HOTELS CONTENT */}
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
                      <span>{feat.metric}</span>
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: RESTAURANTS & DIGITAL MENU TEARDOWN */}
          {activePropertyTab === "restaurant" && (
            <div className="space-y-10 animate-in fade-in duration-300">
              <div className="p-8 sm:p-12 rounded-[36px] bg-[#FAF8F5] border-2 border-amber-500/20 shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 font-black text-xs uppercase tracking-widest inline-block mb-3">
                      Dining & Culinary Engine
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex items-end p-6 text-white">
                      <div>
                        <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider block w-fit mb-2">
                          Packed Tables Every Weekend
                        </span>
                        <strong className="text-base sm:text-lg font-bold block !text-white" style={{ color: "#ffffff" }}>
                          "2.4x more online table reservations since launching our new mobile menu."
                        </strong>
                        <span className="text-xs text-slate-300 block mt-1">
                          Direct WhatsApp & SMS booking notifications sent instantly to your hostess stand.
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

          {/* TAB 3: SHORTLETS & SERVICED APARTMENTS */}
          {activePropertyTab === "shortlet" && (
            <div className="space-y-10 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {shortletFeatures.map((sf, idx) => (
                  <div key={idx} className="p-7 rounded-3xl bg-[#FAF8F5] border border-slate-200/90 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                        <Key size={20} />
                      </div>
                      <strong className="text-base font-black text-slate-900 block mb-2">{sf.title}</strong>
                      <p className="text-xs text-slate-600 leading-relaxed">{sf.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-[#1240e3] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h4 className="text-xl font-black !text-white" style={{ color: "#ffffff" }}>
                    Run Multiple Shortlet Units in Lagos or Abuja?
                  </h4>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">
                    We deploy custom multi-unit portals with instant WhatsApp inspection requests and direct bank card checkout.
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-black text-xs hover:bg-slate-100 transition-all flex-shrink-0 cursor-pointer shadow-md"
                >
                  Request Shortlet Web Proposal
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE HOTEL ROI CALCULATOR
      ========================================================================= */}
      <HotelRoiCalculator onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* =========================================================================
          21-DAY RAPID LAUNCH ROADMAP: Chronological Staged Timeline
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Guaranteed 21-Day Sprint
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Our 21-Day Hospitality Launch Sprint
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            In Nigeria, web agencies are infamous for taking 6 months or disappearing halfway. We follow a strict 21-day chronological delivery sprint—guaranteed.
          </p>
        </div>

        {/* 5 Milestone Cards in Clean Horizontal/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-10">
          {launchSprint.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-[0_12px_32px_rgba(34,88,255,0.08)] hover:border-[#2258FF] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-black text-[#2258FF] bg-[#2258FF]/10 px-2.5 py-1 rounded-full">
                    {step.days}
                  </span>
                  <span className="text-xl font-black text-slate-300 font-mono">
                    {step.step}
                  </span>
                </div>
                <strong className="text-base font-black text-slate-900 block mb-2">{step.title}</strong>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{step.desc}</p>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block border-t border-slate-100 pt-3">
                {step.badge}
              </span>
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
                The 21-Day Punctuality Guarantee
              </strong>
              <span className="text-xs text-slate-600">
                If your website is not ready for guest reservations within 21 days of receiving your assets, we credit you ₦150,000 off your build cost.
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Lock In Your Launch Date</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </section>

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
          FAQ ACCORDION SECTION
      ========================================================================= */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions — Hospitality Web Design" />

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
              Stop The Commission Bleed
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight !text-white" style={{ color: "#ffffff" }}>
              Stop Watching High-Paying Guests Bounce to Booking.com
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every day your website loads slowly or makes booking harder than it needs to be, you are handing direct reservations and 20% commission checks to competitors with a faster, smoother checkout. Let us fix that once and for all.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Free Web & Speed Audit</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20my%20hospitality%20website%20design."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>WhatsApp: 0906 762 3555</span>
              </a>
            </div>

            <p className="text-white/60 text-xs mt-6">
              Free 30-Minute Video Audit • Sub-Second Speed Benchmark • 21-Day Launch Guarantee
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
