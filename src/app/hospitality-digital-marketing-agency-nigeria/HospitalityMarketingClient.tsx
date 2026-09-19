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
  Share2,
  Camera,
  Globe,
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

  const coreServices = [
    {
      icon: <Globe className="text-[#2258FF]" size={20} />,
      title: "Web Design",
      badge: "Fast & Mobile-First",
      image: "/images/luxury_hotel_suite.jpg",
      imageLabel: "Direct Booking UI",
      desc: "Fast, mobile-friendly websites and booking flows built for how guests actually browse and reserve—live room availability, quick Paystack, card, and bank transfer checkout, and verified guest reviews shown clearly, so your site turns website visitors into confirmed paying guests.",
      highlight: "Quick checkout with card and bank transfer",
    },
    {
      icon: <Search className="text-[#2258FF]" size={20} />,
      title: "SEO (Local & AI Search)",
      badge: "Google & AI",
      image: "/images/hospitality_seo_maps.jpg",
      imageLabel: "Google Maps & AI Search",
      desc: (
        <>
          Hotel and restaurant-specific local search optimization so you show up when travelers search <em>"hotels in Victoria Island"</em> or diners search <em>"best restaurant near me,"</em> and increasingly, when they ask an AI assistant <em>"where should I stay in Lagos for a business trip."</em> This is the same framework behind our broader{" "}
          <a
            href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
            className="text-[#2258FF] font-bold underline hover:text-blue-700 transition-colors"
          >
            AI-powered SEO
          </a>{" "}
          work, applied specifically to hospitality search behavior.
        </>
      ),
      highlight: "Top 3 Google Maps pack & AI travel assistant citations",
    },
    {
      icon: <Compass className="text-amber-500" size={20} />,
      title: "Google Business Profile Optimization",
      badge: "First Impression",
      image: "/images/hotel_lobby_lagos.jpg",
      imageLabel: "Verified Local Presence",
      desc: "Accurate hours, complete photos, correct menu or room details, and consistent information across booking platforms and directories, since your Google Business Profile is often the very first impression a guest gets of your property, before your website, before a single review.",
      highlight: "Complete photos, verified hours & direct call buttons",
    },
    {
      icon: <Share2 className="text-emerald-500" size={20} />,
      title: "Social Media",
      badge: "Engaging & Responsive",
      image: "/images/rooftop_dining_lounge.jpg",
      imageLabel: "Social Engagement & Hype",
      desc: "Content management across Instagram, Facebook, and WhatsApp built around how Nigerian guests actually move between platforms during the decision process—crisp photography, promotions, and responsive messaging that keeps your property visible and top of mind.",
      highlight: "Active engagement from Instagram reels to WhatsApp closes",
    },
    {
      icon: <Camera className="text-amber-500" size={20} />,
      title: "Content Development",
      badge: "Sensory & Visual",
      image: "/images/vibrant_dining_restaurant.jpg",
      imageLabel: "Sensory Food & Room Visuals",
      desc: "Photography, menu descriptions, room and amenity content, and destination or neighborhood storytelling that actually converts scrollers into bookings, built around what genuinely gets shared and searched for in Nigerian hospitality.",
      highlight: "Sensory visuals that make guests crave your rooms & food",
    },
    {
      icon: <Star className="text-amber-500" size={20} />,
      title: "Reputation Management",
      badge: "5-Star Trust Flow",
      image: "/images/hotel_lobby_lagos.jpg",
      imageLabel: "5-Star Review Systems",
      desc: "A structured system to generate more guest reviews and respond to them in a way that builds trust rather than looking defensive, since reviews are one of the strongest trust signals for both human travelers and the AI systems increasingly summarizing your property before a guest even clicks through.",
      highlight: "Automated post-checkout & table QR review generation",
    },
    {
      icon: <Zap className="text-[#2258FF]" size={20} />,
      title: "Paid Ads",
      badge: "High Intent",
      image: "/images/luxury_resort_lagos.jpg",
      imageLabel: "High-Intent Paid Acquisition",
      desc: "Targeted campaigns for high-intent searches, last-minute bookings, seasonal promotions, or specific events, built to capture guests at the exact moment they're deciding where to stay or eat, rather than competing on broad, expensive keywords that don't convert.",
      highlight: "Targeted capture of high-paying weekend & corporate guests",
    },
  ];

  const frameworkSteps = [
    {
      num: "01",
      title: "Audit",
      desc: "We review your current website, Google Business Profile, reviews, and booking flow to find exactly where you're losing guests and revenue.",
      icon: <Search size={20} className="text-[#2258FF]" />,
    },
    {
      num: "02",
      title: "Strategy",
      desc: "We build a plan specific to your property, your competitive set, and your city, not a generic template borrowed from another industry.",
      icon: <Compass size={20} className="text-amber-500" />,
    },
    {
      num: "03",
      title: "Execution",
      desc: "Web design, SEO, content, social media, and reputation management rolled out in a structured order, prioritized by what moves revenue fastest.",
      icon: <Zap size={20} className="text-emerald-500" />,
    },
    {
      num: "04",
      title: "AI and Search Optimization",
      desc: "We structure your content so both Google and AI assistants like ChatGPT and Gemini can find, trust, and recommend your property or restaurant.",
      icon: <Sparkles size={20} className="text-purple-500" />,
    },
    {
      num: "05",
      title: "Reporting",
      desc: "Monthly reporting on what actually matters—direct bookings, reservation volume, review growth, and search visibility, not empty vanity metrics.",
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
        "Pricing depends on property size and scope, but most hotels and restaurants invest between ₦250,000 and ₦1,500,000 monthly for a full digital marketing program, comparable to the 3-5% of revenue that hospitality businesses typically allocate to marketing globally. We'll give you an exact quote after a free audit of your current presence.",
    },
    {
      question: "How long before I see results?",
      answer:
        "Google Business Profile and review improvements can show movement within 4 to 6 weeks. Meaningful shifts in direct bookings and organic reservation volume typically build over 3 to 6 months of consistent execution.",
    },
    {
      question: "Do you work with both hotels and restaurants, or just one?",
      answer:
        "Both. The core discipline—local search, reviews, direct booking or reservation conversion, and AI visibility—overlaps significantly, and we tailor the specific tactics to whichever business you run.",
    },
    {
      question: "Can you help us reduce our dependence on booking platforms like Booking.com?",
      answer:
        "Yes, this is one of our main goals for hotel clients. A clear direct booking plan, simple booking steps on mobile phones, and verified guest reviews allow hotels to cut down reliance on booking sites and keep their profits.",
    },
    {
      question: "Do you work with independent properties or only large hotel chains?",
      answer:
        "We work primarily with independent hotels and restaurants—the businesses that benefit most from focused, hands-on strategy rather than a templated enterprise approach.",
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

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            Hospitality Digital Marketing{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                Agency in Nigeria
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

          {/* Value Subheadline (H2): Turn Empty Rooms and Empty Tables Into Bookings */}
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-800 tracking-tight leading-snug mb-5 max-w-4xl mx-auto">
            Turn Empty Rooms & Empty Tables Into{" "}
            <span className="text-[#2258FF] font-black">
              Confirmed Direct Bookings
            </span>
          </h2>

          {/* Subtitle & Value Proposition - Clean & Concise */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria's hospitality digital marketing agency, built to turn searches into bookings for hotels and restaurants across Lagos, Abuja, Port Harcourt, and beyond.
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

          <div className="text-xs text-slate-500 font-medium mb-8">
            Free 48-hour property diagnosis • Zero obligation • Direct strategy line
          </div>

          {/* Micro-Trust Badges with Verified Client Benchmarks */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <TrendingUp size={16} className="text-[#2258FF]" />
              <span>18% Average Drop in OTA Dependency for Hotels</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Utensils size={16} className="text-amber-500" />
              <span>2.4x More Bookings for Restaurants</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>Free Property Audit • Zero Obligation</span>
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/95 via-[#0a1e64]/25 to-transparent pointer-events-none" />

              {/* Dynamic Live Booking Alert Notification */}
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
              <div className="hidden md:flex absolute bottom-28 right-6 bg-[#2258FF]/95 backdrop-blur-md border border-white/30 text-white rounded-2xl p-3 shadow-xl items-center gap-2.5 z-20 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#2258FF]/30 border border-[#2258FF]/50 flex items-center justify-center text-[#2258FF]">
                  <TrendingUp size={16} className="text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Direct Booking Growth</span>
                  <strong className="text-xs font-black text-emerald-400">+2.4x More Direct Bookings</strong>
                </div>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock - Ultra-Clean Frosted Control Center */}
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
                  className="w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0c33be] text-white font-black text-xs sm:text-sm shadow-[0_8px_20px_rgba(34,88,255,0.3)] transition-all hover:scale-[1.02] cursor-pointer text-center flex items-center justify-center gap-2"
                >
                  <span>Claim Free Audit</span>
                  <ArrowRight size={15} />
                </button>
              </div>
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
              Built to Turn Searches Into Bookings
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">
              Your Guests Already Decided Online Before They Ever Walk In or Call
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Nigeria's hospitality digital marketing agency, built to turn searches into bookings for hotels and restaurants across Lagos, Abuja, Port Harcourt, and beyond.
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
                  The Hidden Leak
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug">
                  The Decision Is Lost Before Your Rooms or Food Get a Chance
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Your guests already decided online—on Google, Instagram, and AI assistants—before they ever called your front desk or walked into your lobby. A slow website, an outdated Google Business Profile, or thin reviews loses that decision before your food or rooms get a chance.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-slate-200/80 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Slow mobile loading loses 60%+ of Nigerian travelers instantly</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>Outdated Google hours, missing menus, or unaddressed bad reviews</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-rose-800">
                  <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs font-bold text-rose-600 flex-shrink-0">✕</span>
                  <span>No direct booking engine, surrendering 20% to Booking.com</span>
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
                  The Complete System
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white !text-white mb-4 leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" style={{ color: "#ffffff" }}>
                  Built for How Hospitality Guests Actually Search and Book
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  We fix that: web design, SEO, Google Business optimization, social media, appetizing content, reputation management, and high-intent paid ads—built specifically for how hospitality guests actually search and book in Nigeria.
                </p>
              </div>

              <div className="space-y-3 pt-5 border-t border-white/15 text-xs sm:text-sm text-blue-100 relative z-10">
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Fast 20-second mobile reservations & instant card/transfer payment</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>Top 3 Google Maps rank & AI travel assistant recommendations</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-white">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>18% average reduction in OTA commission loss for hotels</span>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Claim Your Free 48-Hour Property Audit</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why Hospitality Marketing Needs a Specialist (H2) */}
      <section className="py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            The Specialist Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            Why Hospitality Marketing Needs a Specialist.
          </h2>
        </div>

        {/* 2-Card Layout: Generic Agency Trap vs. Hospitality Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12 sm:mb-16">
          {/* Card 1: The Generic Agency Trap */}
          <div className="lg:col-span-5 rounded-3xl relative overflow-hidden shadow-xl border border-blue-400/40 group p-7 sm:p-9 flex flex-col justify-between text-white">
            {/* High-visibility Photographic Backdrop */}
            <img
              src="/images/hotel_lobby_lagos.jpg"
              alt="Boutique Hotel Lobby Lagos"
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
            />
            {/* High-Contrast Dual-Layer Blue Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e64]/95 via-[#1040E6]/88 to-[#2258FF]/82 backdrop-blur-[0.5px]" />
            <div className="absolute inset-0 bg-[#0a1e64]/25" />
            <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5 border border-white/20 backdrop-blur-md">
                <span>The Generic Agency Trap</span>
              </div>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Marketing a hotel or restaurant is <span className="text-amber-300 font-black underline decoration-white decoration-2 underline-offset-4">not the same job</span> as marketing a law firm or a retail store, and treating it that way is how most Nigerian hospitality businesses end up with a pretty website that doesn&apos;t actually drive bookings.
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-white/20 flex items-center gap-3 text-blue-100 text-xs font-semibold relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Aesthetics alone don&apos;t fill empty rooms or tables.</span>
            </div>
          </div>

          {/* Card 2: Hospitality Rhythm Breakdown */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#2258FF] bg-[#2258FF]/10 px-3 py-1 rounded-full border border-[#2258FF]/20">
                  The Hospitality Rhythm
                </span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">Fast guest booking cycle</span>
              </div>

              <p className="text-slate-800 font-bold text-base sm:text-lg mb-5">
                Hospitality has its own rhythm:
              </p>

              {/* 4 Rhythm Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#2258FF] flex items-center justify-center shrink-0 font-bold text-sm">
                    <CalendarCheck size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 uppercase tracking-wide">Seasonal Demand</div>
                    <div className="text-xs text-slate-500 mt-0.5">Peak holidays, retreats &amp; weekend rushes</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 font-bold text-sm">
                    <Zap size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 uppercase tracking-wide">Last-Minute Decisions</div>
                    <div className="text-xs text-slate-500 mt-0.5">Same-day room stays &amp; tonight&apos;s dinners</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-sm">
                    <Star size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 uppercase tracking-wide">Review-Driven Trust</div>
                    <div className="text-xs text-slate-500 mt-0.5">Google Maps rating &amp; verified guest trust</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-50 border border-purple-100">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 font-bold text-sm">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-black text-slate-900 uppercase tracking-wide">Fast Guest Journey</div>
                    <div className="text-xs text-slate-500 mt-0.5">Search → book → arrive in one afternoon</div>
                  </div>
                </div>
              </div>

              {/* Journey flow callout */}
              <div className="p-3.5 rounded-2xl bg-[#2258FF]/5 border border-[#2258FF]/15 text-xs text-slate-700 font-medium mb-5">
                <span className="font-bold text-slate-900">Moving Fast Across Apps:</span> Often across WhatsApp, Instagram, Google Maps, and your website booking all in the same afternoon.
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                A hospitality digital marketing agency in Nigeria built specifically for hotels and restaurants understands this rhythm and builds marketing that matches it, not a generic campaign borrowed from an unrelated industry.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Hard Data Proof Cards Bento with Brand Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          <div className="p-7 sm:p-9 lg:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(34,88,255,0.12)] hover:border-[#2258FF] transition-all duration-300 relative group overflow-hidden flex flex-col justify-start">
            <div className="w-14 h-1.5 bg-[#2258FF] rounded-full mb-6 sm:mb-7" />
            <div className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-[#2258FF]/10 text-[#2258FF] border border-[#2258FF]/20 font-black text-2xl sm:text-3xl lg:text-4xl mb-6 w-fit group-hover:scale-105 transition-transform tracking-tight">
              18%–25%
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 leading-snug">Saved On Every Booking</h3>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              Every direct booking saves you the 15% to 25% commission fee that would otherwise go straight to Booking.com or Expedia. That saved cash flow stays right in your property's account.
            </p>
          </div>

          <div className="p-7 sm:p-9 lg:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.12)] hover:border-emerald-500 transition-all duration-300 relative group overflow-hidden flex flex-col justify-start">
            <div className="w-14 h-1.5 bg-emerald-500 rounded-full mb-6 sm:mb-7" />
            <div className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 font-black text-2xl sm:text-3xl lg:text-4xl mb-6 w-fit group-hover:scale-105 transition-transform tracking-tight">
              2.4x
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 leading-snug">More Dining Reservations</h3>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              Restaurants and lounges that dominate Google Maps "near me" searches and offer fast 20-second reservation flows see 2.4x more dining covers and weekend table bookings.
            </p>
          </div>

          <div className="p-7 sm:p-9 lg:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(245,158,11,0.12)] hover:border-amber-500 transition-all duration-300 relative group overflow-hidden flex flex-col justify-start">
            <div className="w-14 h-1.5 bg-amber-500 rounded-full mb-6 sm:mb-7" />
            <div className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-amber-50 text-amber-500 border border-amber-200 font-black text-2xl sm:text-3xl lg:text-4xl mb-6 w-fit group-hover:scale-105 transition-transform tracking-tight">
              85%
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 leading-snug">Guests Read Reviews First</h3>
            <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              Over 85% of guests will never book a room or table with poor or outdated reviews. An automated 5-star review flow locks in trust before guests ever pick up the phone.
            </p>
          </div>
        </div>

        {/* Section 3: Hospitality Digital Marketing Services in Nigeria (H2) */}
        <div className="pt-10 mb-20">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 font-black text-xs uppercase tracking-wider mb-4 inline-block">
              Everything You Need
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight mb-4">
              Hospitality Digital Marketing Services in Nigeria
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Seven focused marketing services built specifically around how hotel guests, business travelers, and diners find and book rooms and tables across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-[26px] bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(11,15,25,0.03)] hover:shadow-[0_12px_28px_rgba(34,88,255,0.1)] hover:border-[#2258FF]/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {service.image && (
                    <div className="relative h-32 sm:h-36 -mx-5 -mt-5 sm:-mx-6 sm:-mt-6 mb-4 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/75 via-[#0a1e64]/15 to-transparent" />
                      <span className="absolute bottom-2.5 left-3 text-[9px] sm:text-[10px] font-black text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                        {service.imageLabel}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#2258FF]/10 border border-[#2258FF]/20 flex items-center justify-center text-[#2258FF] group-hover:bg-[#2258FF] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-black text-[#2258FF] uppercase tracking-wider bg-[#2258FF]/10 px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 leading-snug">{service.title}</h3>
                  <div className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {service.desc}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                  <span className="truncate">{service.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: How These Services Come Together for Hotels & Restaurants */}
      <section className="py-20 bg-gradient-to-b from-[#F0F1E8]/60 via-[#F5F4F0] to-[#F5F4F0] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
              How It All Works Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              How These Services Come Together
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              See how your website, Google Maps, reviews, and ads connect to turn online searchers into direct paying guests.
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
                <span>How Services Work for Hotels</span>
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
                <span>How Services Work for Restaurants</span>
              </button>
            </div>
          </div>

          {/* Detailed Narrative Card with Engineered Architecture Layout */}
          <div className="mb-12 p-6 sm:p-10 lg:p-12 rounded-[36px] bg-white border border-slate-200/90 shadow-xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header Badge & Title */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-2.5 inline-block">
                    {activeTab === "hotels" ? "🏨 How We Fill Hotel Rooms" : "🍷 How We Pack Dining Tables"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    {activeTab === "hotels"
                      ? "How These Services Come Together for Hotels"
                      : "How These Services Come Together for Restaurants"}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-black">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {activeTab === "hotels"
                      ? "18% Drop in Booking Site Fees"
                      : "2.4x More Direct Table Bookings"}
                  </span>
                </div>
              </div>

              {/* Main Core Strategy Highlight Box */}
              <div className="p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl border border-blue-400/30 mb-8 text-white group">
                {/* High-visibility Photographic Backdrop */}
                <img
                  src={activeTab === "hotels" ? "/images/hotel_lobby_lagos.jpg" : "/images/rooftop_dining_lounge.jpg"}
                  alt="Hospitality Marketing Engine"
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                />
                {/* High-Contrast Dual-Layer Blue Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e64]/95 via-[#1040E6]/88 to-[#2258FF]/82 backdrop-blur-[0.5px]" />
                <div className="absolute inset-0 bg-[#0a1e64]/20" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-300 bg-white/15 px-3 py-1 rounded-full w-fit border border-white/20 backdrop-blur-md">
                      {activeTab === "hotels" ? "The Direct Booking Center" : "The Dining Discovery Center"}
                    </span>
                    <span className="text-xs text-blue-100 font-semibold drop-shadow-sm">
                      {activeTab === "hotels" ? "Saving 15%–25% Middleman Fees" : "Turning Local Searches Into Full Tables"}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-white mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {activeTab === "hotels" ? (
                      <>
                        <strong className="text-white font-black">Direct booking strategy sits at the center of everything</strong> for hotel clients. Every booking that comes through an OTA costs you a commission, often <span className="text-amber-300 font-bold underline decoration-white decoration-2 underline-offset-4">15%–25% of the room rate</span>.
                      </>
                    ) : (
                      <>
                        <strong className="text-white font-black">For restaurants, Google Business optimization and local SEO work together</strong> to win high-intent <span className="text-amber-300 font-bold">&quot;near me&quot;</span> and <span className="text-amber-300 font-bold">&quot;where to eat tonight&quot;</span> searches across your city.
                      </>
                    )}
                  </p>
                  <p className="text-sm text-blue-100/95 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                    {activeTab === "hotels"
                      ? "We combine web design, SEO, Google Business optimization, and reputation management specifically to convince guests to book directly with you instead—the same strategy already reducing OTA dependency by an average of 18% for hotels that invest in it properly."
                      : "Content development and social media turn that local search visibility into actual foot traffic and reservations, while reputation management closes the loop since restaurants live and die by reviews."}
                  </p>
                </div>
              </div>

              {/* 3 Pillars Flow Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {activeTab === "hotels" ? (
                  <>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-[#2258FF]/50 transition-colors">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2258FF] flex items-center justify-center font-bold mb-4">
                          <Globe size={20} />
                        </div>
                        <div className="text-xs font-black uppercase tracking-wider text-[#2258FF] mb-1.5">Direct Bookings</div>
                        <h4 className="text-base font-black text-slate-900 mb-2">Web Design, SEO &amp; Maps</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Convinces guests to book direct with simple checkout, verified reviews, and real-time room availability.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-500">
                        Keeps 100% of the room rate
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-amber-400 transition-colors">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4">
                          <Zap size={20} />
                        </div>
                        <div className="text-xs font-black uppercase tracking-wider text-amber-600 mb-1.5">High-Season &amp; Weekend Ads</div>
                        <h4 className="text-base font-black text-slate-900 mb-2">Paid Ads &amp; Social Media</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Captures demand at peak decision moments—last-minute weekend stays, corporate retreats, and holiday travel dates.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-500">
                        Targeted high-intent bookings
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-purple-400 transition-colors">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4">
                          <Sparkles size={20} />
                        </div>
                        <div className="text-xs font-black uppercase tracking-wider text-purple-600 mb-1.5">AI Recommendations</div>
                        <h4 className="text-base font-black text-slate-900 mb-2">AI Search Visibility</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Ensures your property is understood and recommended by AI systems summarizing hotel options before a guest clicks through.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-500">
                        Ranked in AI answer summaries
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-amber-400 transition-colors">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4">
                          <Search size={20} />
                        </div>
                        <div className="text-xs font-black uppercase tracking-wider text-amber-600 mb-1.5">Nearby Searches</div>
                        <h4 className="text-base font-black text-slate-900 mb-2">Google Maps &amp; Local SEO</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Dominates &quot;near me&quot; and neighborhood searches when diners in your city are actively deciding where to eat tonight.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-500">
                        3x more discovery &amp; phone calls
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-rose-400 transition-colors">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold mb-4">
                          <Camera size={20} />
                        </div>
                        <div className="text-xs font-black uppercase tracking-wider text-rose-600 mb-1.5">Food Photos &amp; Videos</div>
                        <h4 className="text-base font-black text-slate-900 mb-2">Content &amp; Social Media</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Mouth-watering photography, reels, and vibe stories that turn social media scrollers into confirmed table bookings.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-500">
                        Packed weekend &amp; weekday tables
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:border-emerald-400 transition-colors">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
                          <Star size={20} />
                        </div>
                        <div className="text-xs font-black uppercase tracking-wider text-emerald-600 mb-1.5">Reviews &amp; Word of Mouth</div>
                        <h4 className="text-base font-black text-slate-900 mb-2">Reviews &amp; Paid Demand</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Protects 5-star review credibility and runs targeted ads to fill quiet midweek nights and promote new menu launches.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-slate-500">
                        Steady dining room velocity
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Action Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>{activeTab === "hotels" ? "Request Hotel Growth Plan" : "Request Restaurant Growth Plan"}</span>
                    <ArrowRight size={16} />
                  </button>
                  <a
                    href="https://wa.me/2349067623555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all"
                  >
                    Chat With Specialist on WhatsApp →
                  </a>
                </div>
                <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span>Custom roadmap for your property • 100% Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Photo Banner Based on Active Tab */}
          <div className="mb-10 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white relative group max-h-[400px]">
            <img
              src={activeTab === "hotels" ? "/images/luxury_hotel_suite.jpg" : "/images/vibrant_dining_restaurant.jpg"}
              alt={activeTab === "hotels" ? "Luxury Hotel Suite Full Occupancy in Lagos" : "Packed Restaurant in Lagos with Happy Diners"}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/90 via-[#0a1e64]/40 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
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
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
            The Framework Behind Everything We Do
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            We don't guess. Every hospitality client goes through the same proven process:
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
            The Fast, Simple Booking Experience Nigerian Guests Love
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
            <div className="p-8 rounded-[32px] bg-white border-2 border-slate-200 hover:border-[#2258FF] shadow-[0_8px_30px_rgba(34,88,255,0.08)] flex flex-col justify-between relative hover:-translate-y-1 transition-all overflow-hidden group">
              <div className="relative h-44 -mx-8 -mt-8 mb-6 overflow-hidden">
                <img
                  src="/images/luxury_hotel_suite.jpg"
                  alt="Boutique Hotel & Suites Victoria Island"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/80 via-[#0a1e64]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-extrabold text-amber-300">Victoria Island, Lagos</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-black text-[10px]">
                    Verified Hotelier
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500" />
                  ))}
                  <span className="text-xs font-black text-slate-800 ml-2">Saved ₦3.8M/Month</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-medium">
                  &quot;Before ChyWeb, over 80% of our weekend guests came through Booking.com, taking 22% of our money every month. Within 4 months of ChyWeb setting up our direct booking engine and Google local SEO, 64% of guests began booking directly on our website. That extra ₦3.8M in saved commissions goes straight into our business every single month.&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-extrabold text-slate-900 block">Chief Emeka O.</strong>
                  <span className="text-xs text-slate-500">Managing Director • Boutique Hotel &amp; Suites, Victoria Island</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-extrabold text-[10px]">
                  -19% OTA Fees
                </span>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-8 rounded-[32px] bg-white border-2 border-slate-200 hover:border-amber-500 shadow-[0_8px_30px_rgba(245,158,11,0.08)] flex flex-col justify-between relative hover:-translate-y-1 transition-all overflow-hidden group">
              <div className="relative h-44 -mx-8 -mt-8 mb-6 overflow-hidden">
                <img
                  src="/images/rooftop_dining_lounge.jpg"
                  alt="Continental Lounge Lekki"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/80 via-[#0a1e64]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-extrabold text-amber-300">Lekki Phase 1, Lagos</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-white font-black text-[10px]">
                    Verified Restaurateur
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500" />
                  ))}
                  <span className="text-xs font-black text-slate-800 ml-2">Full Weekday Tables</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-medium">
                  &quot;Our lounge in Lekki was packed on Saturdays, but Tuesdays and Wednesdays were painfully quiet while our generator was running. ChyWeb revamped our Google profile, set up table QR reviews, and ran appetizing menu campaigns. Now we have steady dinner bookings across the entire week!&quot;
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-extrabold text-slate-900 block">Chef Folake B.</strong>
                  <span className="text-xs text-slate-500">Head Chef &amp; Owner • Continental Lounge, Lekki</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-extrabold text-[10px]">
                  2.6x Table Bookings
                </span>
              </div>
            </div>

            {/* Story 3 */}
            <div className="p-8 rounded-[32px] bg-white border-2 border-slate-200 hover:border-emerald-500 shadow-[0_8px_30px_rgba(16,185,129,0.08)] flex flex-col justify-between relative hover:-translate-y-1 transition-all overflow-hidden group">
              <div className="relative h-44 -mx-8 -mt-8 mb-6 overflow-hidden">
                <img
                  src="/images/hotel_lobby_lagos.jpg"
                  alt="Diplomatic Suites Abuja"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/80 via-[#0a1e64]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-extrabold text-amber-300">Maitama, Abuja</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-black text-[10px]">
                    Verified General Manager
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500" />
                  ))}
                  <span className="text-xs font-black text-slate-800 ml-2">#1 In Abuja AI Search</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-medium">
                  &quot;When corporate executives and government consultants search for executive suites in Abuja with fast fiber WiFi and reliable power, our hotel shows up first on Google Maps and ChatGPT. The quality of our corporate guests has never been higher, and they book directly with zero OTA cuts.&quot;
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

      {/* Section 6: Why Choose ChyWeb Academy as Your Hospitality Digital Marketing Agency in Nigeria */}
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
              Specialized for Hospitality
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white !text-white mb-6 leading-tight" style={{ color: "#ffffff" }}>
              Why Choose ChyWeb Academy as Your Hospitality Digital Marketing Agency in Nigeria
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              We're not a general agency that added "hospitality" to a long list of industries we serve. Hotels and restaurants are a focus area, and we bring the same framework we use across{" "}
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
              </a>{" "}
              directly into hospitality marketing, so your property isn't just visible on Google, it's visible everywhere your guests are actually searching, including the AI assistants increasingly shaping travel and dining decisions. If you'd rather build this capability on your own team, our{" "}
              <a
                href="https://chyweb.com.ng/"
                className="text-amber-300 font-black underline hover:text-amber-200 transition-colors"
              >
                digital marketing training in Nigeria
              </a>{" "}
              covers the same fundamentals we apply for clients.
            </p>

            <div className="mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-base shadow-[0_10px_25px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book Your Free Strategy Call</span>
                <ArrowRight size={18} />
              </button>
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
      <FaqSection faqs={faqs} title="Frequently Asked Questions — Hospitality Digital Marketing Agency in Nigeria" />

      {/* Final High-Converting CTA Banner - Engaging Photographic Backdrop */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <div className="p-10 sm:p-16 rounded-[40px] shadow-[0_25px_60px_rgba(34,88,255,0.25)] border-4 border-white relative overflow-hidden text-white group">
          {/* High-visibility Background Resort Photo */}
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Luxury resort pool and guests in Lagos"
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
          />
          {/* Engaging ChyWeb Royal Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e64]/92 via-[#1040E6]/84 to-[#2258FF]/80 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-[#0a1e64]/25" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 font-black text-xs uppercase tracking-wider mb-6 inline-block">
              Stop Losing Bookings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black mb-6 leading-tight text-white !text-white" style={{ color: "#ffffff" }}>
              Stop Losing Bookings to Properties With Worse Rooms and Better Marketing
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              Every day your online presence isn't working as hard as your staff is, you're losing guests to a competitor who simply shows up first. Let's fix that.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-white hover:bg-slate-100 text-[#2258FF] font-black text-base shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20discuss%20hospitality%20marketing%20for%20my%20property."
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
