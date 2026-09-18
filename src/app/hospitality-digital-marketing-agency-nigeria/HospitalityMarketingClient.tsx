"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Hotel,
  Utensils,
  TrendingUp,
  ShieldCheck,
  Search,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Star,
  Zap,
  PhoneCall,
  Flame,
  Clock,
  Compass,
  DollarSign,
  Heart,
  Smile,
  Award,
  ChevronRight,
  PartyPopper,
  Users,
  Shield,
  Check,
  Lock,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FaqSection from "@/components/FaqSection";
import HospitalityAuditModal from "@/components/HospitalityAuditModal";
import HotelRoiCalculator from "@/components/HotelRoiCalculator";
import LiveHospitalityBookingWidget from "@/components/LiveHospitalityBookingWidget";
import HospitalityClusterNav from "@/components/HospitalityClusterNav";
import HospitalityMobileStickyBar from "@/components/HospitalityMobileStickyBar";

export default function HospitalityMarketingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"hotels" | "restaurants">("hotels");

  // Real-time live statistics simulation
  const [otaSavings, setOtaSavings] = useState(4820000);
  const [directBookings, setDirectBookings] = useState(3420);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const liveBookings = [
    { title: "Oceanview Penthouse Suite", city: "Victoria Island, Lagos", amount: "₦450,000", time: "Just now", type: "Hotel" },
    { title: "VIP Private Dining Table (6 Pax)", city: "Lekki Phase 1, Lagos", amount: "₦180,000", time: "2 mins ago", type: "Restaurant" },
    { title: "Executive Diplomatic Suite", city: "Maitama, Abuja", amount: "₦320,000", time: "5 mins ago", type: "Hotel" },
    { title: "Weekend Brunch for 4 Guests", city: "GRA, Port Harcourt", amount: "₦95,000", time: "8 mins ago", type: "Restaurant" },
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
    "🏨 'hotels in Victoria Island with 24hr light & pool'",
    "🍽️ 'best rooftop restaurant in Lekki for date night'",
    "🌴 'private weekend resort near Lagos for couples'",
    "🛎️ 'executive hotel in Maitama Abuja with fast WiFi'",
    "🥂 'romantic dinner spot in Ikeja GRA tonight'",
    "🍷 'seafood restaurant in Lekki Phase 1 with private dining'",
    "⭐ 'safe boutique suites in Ikoyi with breakfast'",
  ];

  const hotelPillars = [
    {
      icon: <Search className="text-[#2258FF]" size={22} />,
      title: "Google Maps & Local Search Domination",
      desc: "When travelers search 'hotels in Victoria Island' or ask AI for executive suites in Abuja, we put your property at the very top of Google Maps with prices, photos, and direct call buttons.",
      metric: "Top 3 Rank on Google Maps",
      badge: "More Direct Guests",
    },
    {
      icon: <TrendingUp className="text-[#2258FF]" size={22} />,
      title: "Direct Booking Engine (Cut Out OTAs)",
      desc: "Stop handing 18% to 25% of your room rates to Booking.com. We give guests a lightning-fast way to book directly on your website and pay with instant card or transfer.",
      metric: "Save ₦18k–₦25k per ₦100k booked",
      badge: "100% Margin Kept",
    },
    {
      icon: <Star className="text-amber-500" size={22} />,
      title: "Automated 5-Star WhatsApp Reviews",
      desc: "85% of guests check reviews before booking. We automatically send friendly WhatsApp messages after checkout that turn happy guests into public 5-star Google advocates.",
      metric: "Steady 4.8+ Star Rating",
      badge: "Trust That Converts",
    },
    {
      icon: <Sparkles className="text-[#2258FF]" size={22} />,
      title: "AI Search Ready (ChatGPT & Google AI)",
      desc: "Business travelers now ask ChatGPT 'recommend a clean, quiet hotel near Eko Hotel'. We set up your property so AI names your suites first when guests ask for recommendations.",
      metric: "Ranked in AI Travel Answers",
      badge: "Stay Ahead",
    },
    {
      icon: <MessageSquare className="text-emerald-500" size={22} />,
      title: "1-Tap WhatsApp Booking Concierge",
      desc: "Nigerian guests love WhatsApp. We place 1-tap booking buttons that connect guests straight to your front desk with their room choice pre-filled for fast closes.",
      metric: "Zero Missed Booking Inquiries",
      badge: "Fast Local Booking",
    },
  ];

  const restaurantPillars = [
    {
      icon: <Search className="text-amber-500" size={22} />,
      title: "Google Maps #1 for 'Best Food Near Me'",
      desc: "When hungry diners nearby search 'best restaurant in Lekki' or 'where to eat dinner tonight', your tables appear at the top of Google Maps with mouth-watering photos.",
      metric: "3x More Foot Traffic & Calls",
      badge: "Full Tables All Week",
    },
    {
      icon: <Compass className="text-amber-500" size={22} />,
      title: "Sensory Food & Drink Visuals That Sell",
      desc: "People eat with their eyes first. We display crisp, mouth-watering photos of your signature dishes and cocktails that make customers crave your food on the spot.",
      metric: "Instant Appetite Appeal",
      badge: "Higher Table Spend",
    },
    {
      icon: <CalendarCheck className="text-amber-500" size={22} />,
      title: "Fast 20-Second Table Reservations",
      desc: "No complicated forms. Guests can reserve a VIP table, birthday booth, or date night spot in 20 seconds flat, cutting no-shows with instant WhatsApp confirmations.",
      metric: "2.4x More Table Bookings",
      badge: "Packed Dining Floor",
    },
    {
      icon: <Utensils className="text-amber-500" size={22} />,
      title: "Social Content That Pulls Diners In",
      desc: "Short reels, menu stories, and vibe showcases tailored for Lagos and Abuja food lovers that turn casual Instagram scrollers into paying weekend regulars.",
      metric: "Consistent Weekday & Weekend Crowd",
      badge: "High Restaurant Buzz",
    },
    {
      icon: <Star className="text-amber-500" size={22} />,
      title: "Table QR Stands for Instant 5-Star Reviews",
      desc: "Satisfied diners leave reviews while enjoying their food. Elegant table QR stands let guests drop a 5-star Google review in just 10 seconds before asking for the bill.",
      metric: "100+ Real 5-Star Reviews Monthly",
      badge: "Local Food Authority",
    },
  ];

  const frameworkSteps = [
    {
      num: "01",
      title: "Free Direct Revenue Audit",
      desc: "We inspect your Google ranking, website speed, and OTA commission leaks, showing you exactly how much money you're leaving on the table.",
      icon: <Search size={20} className="text-[#2258FF]" />,
    },
    {
      num: "02",
      title: "Custom Local Growth Plan",
      desc: "We build a simple, step-by-step game plan tailored to your city, whether your property is in Lagos, Abuja, or Port Harcourt.",
      icon: <Compass size={20} className="text-amber-500" />,
    },
    {
      num: "03",
      title: "Fast Setup & Direct Booking Launch",
      desc: "We overhaul your Google profile, install 1-tap mobile booking, and link instant card and transfer checkouts that guests love.",
      icon: <Zap size={20} className="text-emerald-500" />,
    },
    {
      num: "04",
      title: "Local & AI Search Domination",
      desc: "We optimize your property so Google Maps, ChatGPT, and Instagram point high-paying guests directly to your doors.",
      icon: <Sparkles size={20} className="text-purple-500" />,
    },
    {
      num: "05",
      title: "Monthly Direct Profit Reports",
      desc: "Every month, you receive a clear, plain-English summary of direct bookings, rooms filled, and exact OTA commission money saved.",
      icon: <TrendingUp size={20} className="text-[#2258FF]" />,
    },
  ];

  const pricingTiers = [
    {
      name: "Boutique Restaurant & Lounge",
      price: "₦250,000",
      period: "per month",
      desc: "Perfect for independent dining spots and rooftop lounges ready to fill quiet weekday tables and own local food searches.",
      features: [
        "Google Maps weekly management & fresh food photo updates",
        "Top 3 ranking for 'restaurants near me' and neighborhood searches",
        "Table QR stands that collect real 5-star Google reviews effortlessly",
        "Menu optimization that makes diners crave your food instantly",
        "1-tap WhatsApp table reservations linked directly to your floor host",
        "Monthly breakdown of new diners and booked covers",
      ],
      badge: "Popular for Restaurants",
      highlight: false,
    },
    {
      name: "Hotel & Luxury Suites Accelerator",
      price: "₦650,000",
      period: "per month",
      desc: "Just 2 extra booked suites pays for this entire package. Cut Booking.com commissions and fill your rooms directly.",
      features: [
        "Top Google Maps & local search ranking for your city and district",
        "Direct booking engine with instant card and bank transfer checkout",
        "AI search setup so ChatGPT & Gemini name your hotel first",
        "Automated post-checkout WhatsApp flow for genuine 5-star reviews",
        "1-tap WhatsApp front desk concierge for fast room closes",
        "Zero long contracts with our 60-day measurable traction guarantee",
        "Monthly bank profit report showing exact OTA commission money saved",
      ],
      badge: "Most Popular for Hoteliers",
      highlight: true,
    },
    {
      name: "Multi-Property & Hotel Chain Enterprise",
      price: "₦1,500,000",
      period: "per month",
      desc: "Full digital engine for hotel chains, luxury resorts, and high-volume hospitality groups with multiple locations.",
      features: [
        "Multi-city Google Maps and search domination across all branches",
        "Custom booking engine and property management system (PMS) sync",
        "Targeted Google Hotel Ads and social re-engagement campaigns",
        "Dedicated Senior Hospitality Growth Lead managing your accounts",
        "Reputation defense and instant bad review resolution alerts",
        "Bi-weekly executive revenue strategy sessions with your leadership",
        "District exclusivity so we don't work with your direct local rivals",
      ],
      badge: "Full Enterprise Growth",
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "How much does hospitality digital marketing cost in Nigeria?",
      answer:
        "Most hotels and restaurants invest between ₦250,000 and ₦650,000 monthly. In most cases, booking just 2 to 3 extra executive suites or filling 5 weekend tables completely covers your monthly investment. Everything after that is pure profit straight into your bank account. We start with a 100% free audit so you know your exact numbers before spending a kobo.",
    },
    {
      question: "How soon will we see more direct bookings?",
      answer:
        "You will see immediate improvements in Google Maps calls, WhatsApp inquiries, and fresh 5-star reviews within the first 30 to 45 days. By month 2 to 3, direct bookings start meaningfully replacing third-party OTA bookings as your local ranking climbs.",
    },
    {
      question: "Will Nigerian guests really pay directly on our website instead of calling front desk?",
      answer:
        "Yes, when it is easy and safe. When guests see clear room photos, straightforward prices, and instant Paystack or Flutterwave payment options (card, bank transfer, or USSD), they happily pay upfront to lock in their room. For guests who still prefer chatting, our 1-tap WhatsApp button connects them instantly with their room details pre-selected.",
    },
    {
      question: "Can you really help us reduce what we pay to Booking.com?",
      answer:
        "Yes, that is our core mission. When your hotel ranks #1 on Google Maps and your website loads fast with clear direct booking perks (like free breakfast or late checkout), guests book directly with you. Our hotel clients cut OTA reliance by an average of 18% in their first year—saving millions in commission fees.",
    },
    {
      question: "Do you work with independent hotels and standalone restaurants?",
      answer:
        "Yes! Over 85% of our clients are independent boutique hotels, serviced apartments, and standalone restaurants in Lagos, Abuja, and Port Harcourt. These are the exact businesses that suffer most from heavy OTA commissions and benefit immediately from direct bookings.",
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

      {/* Hero Section - Centered Luxury Architectural Layout */}
      <section className="relative pt-16 sm:pt-22 pb-20 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3F0E6] to-[#E9E5D9] text-slate-800 rounded-b-[48px] sm:rounded-b-[60px] overflow-hidden border-b border-slate-300/50 shadow-[0_12px_45px_rgba(0,0,0,0.04)] z-10">
        {/* Ambient Architectural Lighting & Dot Matrix */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] bg-gradient-to-b from-[#2258FF]/12 via-amber-400/10 to-transparent blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Top Status Capsule / Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs font-bold mb-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#2258FF]/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-900 font-black tracking-wide uppercase text-[11px] sm:text-xs">
              ChyWeb Hospitality Revenue Suite
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Centered H1 Headline with Artistic Accent */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.08] mb-6 text-slate-900 max-w-5xl mx-auto">
            Turn Empty Rooms & Tables Into{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                High-Margin Direct Bookings
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

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-4 font-medium max-w-3xl mx-auto">
            You didn't invest millions into building executive suites or an exceptional kitchen just to watch diesel burn while your rooms sit half-empty, or surrender 20% commission on every guest to Booking.com.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            <strong className="text-slate-900 font-black">ChyWeb Academy</strong> builds the simple digital engine that turns local Google searches, corporate travelers, and weekend diners into direct, upfront-paid bookings straight into your account—with zero middleman cuts.
          </p>

          {/* Centered Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20discuss%20hospitality%20marketing%20for%20my%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-300/90 text-slate-900 font-extrabold text-base hover:bg-slate-50 hover:border-[#2258FF]/50 transition-all flex items-center justify-center gap-2.5 shadow-sm hover:-translate-y-0.5"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <PhoneCall size={18} className="text-[#2258FF]" />
              <span>WhatsApp: 0906 762 3555</span>
            </a>
          </div>

          {/* Micro-Trust Badges with Modern Glass Capsule Styling */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-[#2258FF]" />
              <span>0% Commission On Direct Guests</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Zap size={16} className="text-amber-500" />
              <span>60-Day Direct Traction Guarantee</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Instant Card & Bank Transfer Payments</span>
            </div>
          </div>

          {/* Centered Single-Column Visual Showcase: Luxury Digital Terminal Frame */}
          <div className="w-full max-w-5xl rounded-[32px] overflow-hidden shadow-[0_25px_65px_rgba(11,15,25,0.16)] border-4 border-white/90 relative group bg-slate-950">
            {/* High-End App/Browser Control Bar */}
            <div className="bg-slate-900/95 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white/70 text-[11px] font-mono border border-white/10">
                <Lock size={11} className="text-emerald-400" />
                <span>chyweb.agency/hospitality/direct-engine • Lagos, NG</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Yield Engine Active</span>
              </div>
            </div>

            {/* Visual Showcase Media */}
            <div className="relative overflow-hidden">
              <img
                src="/images/luxury_resort_lagos.jpg"
                alt="Happy Guests Relaxing at Luxury Boutique Hotel Resort in Lagos"
                className="w-full h-[380px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Dynamic Live Booking Alert Notification */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNotificationIndex}
                  initial={{ opacity: 0, y: -20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto bg-slate-900/90 backdrop-blur-xl border border-white/25 rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center gap-3.5 text-white max-w-md text-left z-20"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 absolute inset-0" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-emerald-400 font-black block uppercase tracking-wider">
                      {liveBookings[currentNotificationIndex].type === "Hotel" ? "⚡ Direct Room Reservation" : "🍷 Direct Table Reservation"}
                    </span>
                    <strong className="text-xs sm:text-sm font-black truncate block text-white">
                      {liveBookings[currentNotificationIndex].title} ({liveBookings[currentNotificationIndex].city})
                    </strong>
                    <span className="text-[10px] text-slate-300 font-medium">Payment secured via Paystack Direct</span>
                  </div>
                  <div className="text-right flex-shrink-0 border-l border-white/15 pl-3">
                    <span className="text-xs sm:text-sm font-black text-amber-300 block">
                      {liveBookings[currentNotificationIndex].amount}
                    </span>
                    <span className="text-[9px] text-emerald-300 font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">0% Commission Cut</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Google 4.9 Star Verified Badge */}
              <div className="hidden sm:flex absolute top-4 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl border border-white/80 items-center gap-3 text-left z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-600">
                  <Star size={18} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-slate-900 font-black text-xs">
                    <span>4.98 / 5.0 Rating</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Verified</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Top Ranked in VI, Lekki & Abuja
                  </span>
                </div>
              </div>

              {/* Floating Mini Growth Indicator (Bottom Right of Media) */}
              <div className="hidden md:flex absolute bottom-28 right-6 bg-slate-900/85 backdrop-blur-md border border-white/20 text-white rounded-2xl p-3 shadow-xl items-center gap-2.5 z-20 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#2258FF]/30 border border-[#2258FF]/50 flex items-center justify-center text-[#2258FF]">
                  <TrendingUp size={16} className="text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Direct Traffic Yield</span>
                  <strong className="text-xs font-black text-emerald-400">+2.4x More Direct Bookings</strong>
                </div>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock - Ultra-Clean Frosted Control Center */}
            <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center text-left text-slate-900 shadow-xl z-20 relative">
              <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Direct Margin Unlocked
                </span>
                <strong className="text-base sm:text-xl font-black text-[#2258FF]">
                  ₦{otaSavings.toLocaleString("en-NG")}
                </strong>
                <span className="text-[10px] text-blue-600 font-bold block mt-0.5">OTA commission retained</span>
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

      {/* The Uncomfortable Truth Section: The Leaking Funnel vs The ChyWeb Engine */}
      <section className="py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            The Nigerian Hospitality Reality
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            Your Guests Already Decided Online. <br />
            <span className="text-[#2258FF]">Is Your Property Showing Up?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Here is the plain truth: by the time a guest calls your front desk or walks into your lobby, they have already made up their mind on their phone. Nigerian travelers and diners check Google reviews, inspect photos, and compare prices first. If your property is hard to find or confusing to book, they pick your competitor in seconds.
          </p>
        </div>

        {/* 3 Hard Data Stats Bento with Brand Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          <div className="p-7 sm:p-9 lg:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(34,88,255,0.12)] hover:border-[#2258FF] transition-all duration-300 relative group overflow-hidden flex flex-col justify-start">
            <div className="w-14 h-1.5 bg-[#2258FF] rounded-full mb-6 sm:mb-7" />
            <div className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#2258FF]/10 text-[#2258FF] border border-[#2258FF]/20 font-black text-2xl sm:text-3xl lg:text-4xl mb-6 w-fit group-hover:scale-105 transition-transform tracking-tight">
              18%–25%
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 leading-snug">Saved On Every Booking</h3>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              Every direct booking saves you 18% to 25% that would otherwise go straight to Booking.com or Expedia. That saved money stays right in your bank account.
            </p>
          </div>

          <div className="p-7 sm:p-9 lg:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.12)] hover:border-emerald-500 transition-all duration-300 relative group overflow-hidden flex flex-col justify-start">
            <div className="w-14 h-1.5 bg-emerald-500 rounded-full mb-6 sm:mb-7" />
            <div className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 font-black text-2xl sm:text-3xl lg:text-4xl mb-6 w-fit group-hover:scale-105 transition-transform tracking-tight">
              2.4x
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 leading-snug">More Direct Dining Covers</h3>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              Restaurants and rooftop lounges that rank in the top 3 on Google Maps see more than double the table reservations from local food lovers and weekend groups.
            </p>
          </div>

          <div className="p-7 sm:p-9 lg:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.12)] hover:border-amber-500 transition-all duration-300 relative group overflow-hidden flex flex-col justify-start">
            <div className="w-14 h-1.5 bg-amber-500 rounded-full mb-6 sm:mb-7" />
            <div className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-amber-50 text-amber-500 border border-amber-200 font-black text-2xl sm:text-3xl lg:text-4xl mb-6 w-fit group-hover:scale-105 transition-transform tracking-tight">
              85%
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 leading-snug">Guests Read Reviews First</h3>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              85% of guests will never book a hotel or restaurant with poor or outdated reviews. An automated 5-star review flow locks in trust before guests even call you.
            </p>
          </div>
        </div>

        {/* Specialist Advantage Banner - Engaging Visual Layout */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-white border-2 border-[#2258FF]/20 shadow-[0_20px_50px_rgba(34,88,255,0.08)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="px-3.5 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-black text-xs uppercase tracking-widest inline-block mb-4">
                The Specialist Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                Why Hospitality Marketing Needs a Specialist, Not a General Web Agency
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Marketing a hotel or restaurant is nothing like marketing a law firm or clothing boutique. Treating it like a normal business is why so many Nigerian properties have beautiful websites that bring zero phone calls and zero room bookings.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#2258FF] flex items-center justify-center flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-black text-slate-900 block">Fast 20-Second Decisions</strong>
                    <span className="text-xs text-slate-600">Guests move from Google search to WhatsApp chat to confirmed booking in minutes when the steps are simple.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Utensils size={18} />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-black text-slate-900 block">Sensory Food & Room Trust</strong>
                    <span className="text-xs text-slate-600">Appetizing dishes, pristine suites, and clear pricing trigger instant booking desire in 85% of guests.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-black text-slate-900 block">Keeping Your Full Profit</strong>
                    <span className="text-xs text-slate-600">Eliminate the 18% to 25% middleman commission fee currently lost to Booking.com and foreign aggregators.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="/images/vibrant_dining_restaurant.jpg"
                  alt="Vibrant restaurant dining floor in Lekki Lagos"
                  className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-black text-amber-300 uppercase tracking-wider mb-1">
                    Direct Booking Flywheel
                  </span>
                  <strong className="text-lg font-black leading-tight">
                    "2.4x More Table Bookings & 0% OTA Commissions"
                  </strong>
                  <span className="text-xs text-slate-200 mt-1">
                    Lagos, Abuja & Port Harcourt hospitality properties
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Tabs: Hotels vs Restaurants */}
      <section className="py-20 bg-gradient-to-b from-[#F0F1E8]/60 via-[#F5F4F0] to-[#F5F4F0] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
              Dedicated Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Engineered Specifically for Your Venue
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Toggle between our dedicated frameworks for hotels and restaurants.
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm mt-6">
              <button
                onClick={() => setActiveTab("hotels")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  activeTab === "hotels"
                    ? "bg-[#2258FF] text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Hotel size={16} />
                <span>What We Do for Hotels</span>
              </button>
              <button
                onClick={() => setActiveTab("restaurants")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                  activeTab === "restaurants"
                    ? "bg-amber-500 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Utensils size={16} />
                <span>What We Do for Restaurants</span>
              </button>
            </div>
          </div>

          {/* Dynamic Photo Banner Based on Active Tab */}
          <div className="mb-10 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white relative group max-h-[400px]">
            <img
              src={activeTab === "hotels" ? "/images/luxury_hotel_suite.jpg" : "/images/vibrant_dining_restaurant.jpg"}
              alt={activeTab === "hotels" ? "Luxury Hotel Suite Full Occupancy in Lagos" : "Packed Restaurant in Lagos with Happy Diners"}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-amber-300 font-black text-xs uppercase tracking-wider w-fit mb-2">
                {activeTab === "hotels" ? "🏨 Direct Hotel Booking Engine" : "🍷 Vibrant Packed Dining Experience"}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 text-white !text-white" style={{ color: "#ffffff" }}>
                {activeTab === "hotels"
                  ? "Wake Up to 100% Booked High-Yield Suites"
                  : "Turn Casual Scrollers Into Packed Friday Dinner Tables"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                {activeTab === "hotels"
                  ? "Our direct booking and local SEO engine bypasses Booking.com so you keep 100% of your room revenue and welcome guests who booked directly on your own website."
                  : "From Google Maps 'Near Me' searches to viral foodie visuals and instant WhatsApp reservations, we keep your dining floor buzzing with happy, paying customers."}
              </p>
            </div>
          </div>

          {/* Tab Content Cards Styled with ChyWeb Brand Accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === "hotels" ? hotelPillars : restaurantPillars).map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[28px] bg-white border border-slate-200 shadow-[0_4px_18px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_32px_rgba(34,88,255,0.12)] hover:border-[#2258FF]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#2258FF]/10 border border-[#2258FF]/20 flex items-center justify-center text-[#2258FF] group-hover:bg-[#2258FF] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black text-[#2258FF] uppercase tracking-wider bg-[#2258FF]/10 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800">
                  <span className="text-[#2258FF] font-semibold">{item.metric}</span>
                  <CheckCircle2 size={16} className="text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 5-Step Proven Framework */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Proven Step-By-Step Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            The 5-Step Direct Revenue Framework
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            No guesswork, no confusing tech jargon. Just a clear, repeatable path from empty rooms to high-margin direct guest bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {frameworkSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[28px] bg-white border border-slate-200 shadow-[0_4px_16px_rgba(11,15,25,0.03)] hover:shadow-[0_12px_28px_rgba(34,88,255,0.1)] hover:border-[#2258FF]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#2258FF] font-mono group-hover:translate-x-1 transition-transform">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#2258FF]/10 border border-[#2258FF]/20 flex items-center justify-center text-[#2258FF]">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Guest Experience Simulator for Restaurant & Hotel Owners */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-700 font-black text-xs uppercase tracking-wider mb-3 inline-block">
            Experience The Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            The Friction-Free Booking Experience Nigerian Guests Love
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Test the live 20-second reservation flow below. When reserving is this fast on mobile phones, table covers jump by 2.4x and direct room bookings soar.
          </p>
        </div>

        <LiveHospitalityBookingWidget onOpenAuditModal={() => setIsModalOpen(true)} />
      </section>

      {/* Joyful Social Proof: Happy Hoteliers & Packed Dining */}
      <section className="py-20 bg-gradient-to-b from-amber-50/40 via-white to-blue-50/30 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 font-bold text-xs uppercase tracking-wider mb-3 inline-block">
              Real Nigerian Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Happy Guests, Full Tables & Smiling Hoteliers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              See what happens when your hospitality marketing connects directly with paying guests across Lagos, Abuja, and Port Harcourt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="p-8 rounded-[32px] bg-white border-2 border-slate-200 hover:border-[#2258FF] shadow-[0_8px_30px_rgba(34,88,255,0.08)] flex flex-col justify-between relative hover:-translate-y-1 transition-all">
              <div className="w-12 h-1.5 bg-[#2258FF] rounded-full mb-6" />
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500" />
                  ))}
                  <span className="text-xs font-black text-slate-800 ml-2">Saved ₦3.8M/Month</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-medium">
                  "Before ChyWeb, over 80% of our weekend guests came through Booking.com, taking 22% of our money every month. Within 4 months of ChyWeb setting up our direct booking engine and Google local SEO, 64% of guests began booking directly on our website. That extra ₦3.8M in saved commissions goes straight into our business every single month."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-extrabold text-slate-900 block">Chief Emeka O.</strong>
                  <span className="text-xs text-slate-500">Managing Director • Boutique Hotel & Suites, Victoria Island</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-[10px]">
                  -19% OTA Fees
                </span>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-8 rounded-[32px] bg-white border-2 border-slate-200 hover:border-amber-500 shadow-[0_8px_30px_rgba(245,158,11,0.08)] flex flex-col justify-between relative hover:-translate-y-1 transition-all">
              <div className="w-12 h-1.5 bg-amber-500 rounded-full mb-6" />
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500" />
                  ))}
                  <span className="text-xs font-black text-slate-800 ml-2">Full Weekday Tables</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-medium">
                  "Our lounge in Lekki was packed on Saturdays, but Tuesdays and Wednesdays were painfully quiet while our generator was running. ChyWeb revamped our Google profile, set up table QR reviews, and ran appetizing menu campaigns. Now we have steady dinner bookings across the entire week!"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-extrabold text-slate-900 block">Chef Folake B.</strong>
                  <span className="text-xs text-slate-500">Head Chef & Owner • Continental Lounge, Lekki</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-extrabold text-[10px]">
                  2.6x Table Bookings
                </span>
              </div>
            </div>

            {/* Story 3 */}
            <div className="p-8 rounded-[32px] bg-white border-2 border-slate-200 hover:border-emerald-500 shadow-[0_8px_30px_rgba(16,185,129,0.08)] flex flex-col justify-between relative hover:-translate-y-1 transition-all">
              <div className="w-12 h-1.5 bg-emerald-500 rounded-full mb-6" />
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500" />
                  ))}
                  <span className="text-xs font-black text-slate-800 ml-2">#1 In Abuja AI Search</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-medium">
                  "When corporate executives and government consultants search for executive suites in Abuja with fast fiber WiFi and reliable power, our hotel shows up first on Google Maps and ChatGPT. The quality of our corporate guests has never been higher, and they book directly with zero OTA cuts."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-extrabold text-slate-900 block">Ibrahim K.</strong>
                  <span className="text-xs text-slate-500">General Manager • Diplomatic Suites, Abuja</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2258FF] font-extrabold text-[10px]">
                  #1 AI Citation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Direct Booking ROI Calculator */}
      <HotelRoiCalculator onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* Pricing Packages */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Straightforward Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Simple Monthly Pricing With Guaranteed Returns
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Just 2 extra booked executive suites or 5 weekend dining tables completely covers your monthly investment. Zero hidden fees, zero long-term lock-in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-[32px] transition-all flex flex-col justify-between ${
                tier.highlight
                  ? "bg-white border-2 border-[#2258FF] shadow-[0_20px_50px_rgba(34,88,255,0.18)] relative lg:scale-105 z-10 ring-4 ring-[#2258FF]/10"
                  : "bg-white border border-slate-200 shadow-md hover:border-[#2258FF]/40 hover:shadow-xl"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2258FF] text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                  {tier.badge}
                </span>
              )}

              <div>
                {!tier.highlight && (
                  <span className="text-xs font-bold text-[#2258FF] uppercase tracking-wider block mb-2">
                    {tier.badge}
                  </span>
                )}
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{tier.desc}</p>

                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">{tier.price}</span>
                  <span className="text-xs text-slate-500 font-semibold">/{tier.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    What is included:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className={`w-full py-4 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                  tier.highlight
                    ? "bg-[#2258FF] hover:bg-[#1040e6] text-white shadow-[0_8px_20px_rgba(34,88,255,0.3)]"
                    : "bg-slate-100 hover:bg-[#2258FF] hover:text-white text-slate-900"
                }`}
              >
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose ChyWeb Academy Internal Links */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="p-10 sm:p-14 rounded-[36px] shadow-[0_20px_50px_rgba(34,88,255,0.22)] border-4 border-white relative overflow-hidden text-center text-white group">
          {/* Engaging Photographic Backdrop */}
          <img
            src="/images/luxury_hotel_suite.jpg"
            alt="Luxury Hospitality Architecture"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 opacity-30"
          />
          {/* Royal ChyWeb Blue to Deep Indigo Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#091b5c]/95" />

          {/* Ambient Lighting Accents */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 font-black text-xs uppercase tracking-wider mb-5 inline-flex items-center gap-2 shadow-sm">
              <Sparkles size={13} className="text-amber-300" />
              Why Partner With ChyWeb Academy
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white !text-white mb-6 leading-tight" style={{ color: "#ffffff" }}>
              We Are Not a General Agency Adding "Hospitality" as a Side Tab
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Hotels and restaurants are a dedicated focus area. We bring the same framework we use across our{" "}
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
                Answer Engine Optimization (AEO)
              </a>{" "}
              directly into hospitality marketing. Your property won't just be visible on Google—it will be visible everywhere your guests are searching, including the AI assistants shaping travel decisions in 2026.
            </p>

            {/* In-House Capability Box with Frosted Glass Styling */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto">
              <span>If you'd rather build this capability inside your in-house team, our </span>
              <Link href="/digital-marketing" className="text-amber-300 font-extrabold underline hover:text-white transition-colors">
                digital marketing training program
              </Link>
              <span> covers the exact same fundamentals we apply for our enterprise clients.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link Topic Cluster: The Full Hospitality Suite */}
      <HospitalityClusterNav
        currentPath="/hospitality-digital-marketing-agency-nigeria"
        onOpenAuditModal={() => setIsModalOpen(true)}
      />

      {/* FAQ Section */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions — Hospitality Digital Marketing" />

      {/* Final High-Converting CTA Banner - Engaging Photographic Backdrop */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <div className="p-10 sm:p-16 rounded-[40px] shadow-[0_25px_60px_rgba(34,88,255,0.25)] border-4 border-white relative overflow-hidden text-white">
          {/* Background Resort Photo */}
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Luxury resort pool and guests in Lagos"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          {/* Engaging ChyWeb Royal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2258FF]/95 via-[#1040e6]/90 to-blue-950/90" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 font-black text-xs uppercase tracking-wider mb-6 inline-block">
              Stop Bleeding Bookings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black mb-6 leading-tight text-white !text-white" style={{ color: "#ffffff" }}>
              Stop Losing Bookings to Properties With Worse Rooms & Better Marketing
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              Every day your rooms sit half-empty or your tables sit quiet, your generator fuel and staff costs remain the exact same. Meanwhile, rival properties down the road are fully booked simply because they show up first on Google. Let's claim your direct bookings today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white hover:bg-slate-100 text-[#2258FF] font-black text-base shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition-all cursor-pointer"
              >
                Claim Your Free Strategy Call →
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20claim%20the%20Free%20Hospitality%20Growth%20Audit!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-black text-base backdrop-blur-md transition-all"
              >
                WhatsApp: 0906 762 3555
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Mobile Sticky Conversion Bar */}
      <HospitalityMobileStickyBar onOpenAuditModal={() => setIsModalOpen(true)} />

      {/* Interactive Modal */}
      <HospitalityAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Hospitality Digital Marketing"
        defaultPropertyType="Hotel / Boutique Lodge"
      />
    </div>
  );
}
