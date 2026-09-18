"use client";

import { useState } from "react";
import Link from "next/link";
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
  Target,
  RefreshCw,
  BarChart,
  DollarSign,
  Star,
  Check,
  Zap,
  Globe,
  Gauge,
  Clock,
  Calendar,
  CreditCard,
  MessageCircle,
  Flame,
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

  const channels = [
    {
      num: "Pillar 01",
      icon: <Layers className="text-[#2258FF]" size={24} />,
      title: "Web Design: Your Direct Booking Engine",
      desc: "Your website is the single destination every other marketing channel funnels traffic into. We build mobile-first hotel websites with native booking engine integration, transparent upfront pricing, and sub-second load times. Structured so AI assistants like ChatGPT and Gemini can cite and summarize your amenities accurately.",
      stat: "+23% Mobile Direct Booking Lift",
      accent: "from-[#2258FF]/15 to-[#2258FF]/5 border-[#2258FF]/20 text-[#2258FF]",
      bar: "bg-[#2258FF]",
    },
    {
      num: "Pillar 02",
      icon: <Search className="text-emerald-600" size={24} />,
      title: "Hotel SEO: Rank Before Guests Open an OTA",
      desc: "Every guest who books through Booking.com costs you a 15% to 25% commission cut. Hotels investing in SEO reduce that dependency by an average of 18% within 12 months. We optimize your Google Business Profile, city-level 'hotels near Victoria Island' searches, and Answer Engine Optimization (AEO) for conversational AI.",
      stat: "Save 18%–25% on Commissions",
      accent: "from-emerald-500/15 to-emerald-500/5 border-emerald-200 text-emerald-600",
      bar: "bg-emerald-500",
    },
    {
      num: "Pillar 03",
      icon: <Megaphone className="text-amber-500" size={24} />,
      title: "Paid Ads: Precision ROI, Zero Wasted Budget",
      desc: "We deploy Google Hotel Ads so your direct rates appear right alongside OTAs in Google Search, Maps, and Google Travel. Then we deploy Meta & Instagram retargeting ads that re-engage site visitors who didn't book on the first visit—converting 2 to 4 times better than cold first-touch traffic.",
      stat: "2.4x Higher Retargeting Conversions",
      accent: "from-amber-500/15 to-amber-500/5 border-amber-200 text-amber-500",
      bar: "bg-amber-500",
    },
    {
      num: "Pillar 04",
      icon: <Share2 className="text-purple-600" size={24} />,
      title: "Social Media: Turning Followers Into Paying Guests",
      desc: "User-generated hotel content earns up to 5x more engagement, and short-form video generates massive organic reach—yet only 12% of hotel social posts include a direct booking link! We bridge that gap with high-intent visual storytelling and 1-tap WhatsApp booking flows.",
      stat: "Bridge the 12% Social Booking Gap",
      accent: "from-purple-500/15 to-purple-500/5 border-purple-200 text-purple-600",
      bar: "bg-purple-600",
    },
  ];

  const flywheelSteps = [
    {
      step: "01. Discovery",
      title: "Instagram & Short-Form Video",
      text: "Travelers discover your suites through vibrant video room walkthroughs, pool tours, and culinary showcases.",
    },
    {
      step: "02. Search & Trust",
      title: "Google Maps & 4.9★ Reviews",
      text: "They search your hotel name on Google and find a verified, 5-star Google Business Profile with glowing guest reviews.",
    },
    {
      step: "03. Re-Engagement",
      title: "Dynamic Retargeting Ads",
      text: "If they hesitate or leave, automated Instagram & Facebook ads re-engage them with exclusive direct perks (free breakfast or late checkout).",
    },
    {
      step: "04. Direct Booking",
      title: "0.8s Mobile Booking Engine",
      text: "They land on your lightning-fast website and complete a 20-second reservation with instant Paystack card or bank transfer.",
    },
  ];

  const pricingPackages = [
    {
      name: "Hotel SEO & Web Foundation",
      price: "₦550,000",
      period: "per month",
      desc: "Ideal for independent boutique hotels looking to cement local organic dominance and direct booking conversions.",
      features: [
        "High-speed, mobile-first booking website optimization",
        "Google Business Profile & Local 3-Pack management",
        "Hotel SEO & city-level keyword ranking campaigns",
        "Automated 5-star guest review generation engine",
        "Monthly direct booking attribution & revenue reports",
      ],
      highlight: false,
    },
    {
      name: "The 4-Channel Revenue Engine",
      price: "₦1,250,000",
      period: "per month (incl. ad management)",
      desc: "Our flagship integrated growth suite: Web, SEO, Paid Ads, and Social Media fully synchronized under one unified team.",
      features: [
        "Everything in SEO & Web Foundation",
        "Google Hotel Ads management (compete directly with Booking.com)",
        "Meta & Instagram dynamic retargeting ad campaigns",
        "High-converting video & social media content calendar",
        "2026 AI Search Engine Optimization (AEO & GEO)",
        "Dedicated Senior Hospitality Marketing Director",
        "60-Day Direct Traction Risk Reversal Guarantee",
      ],
      highlight: true,
      badge: "Highest Direct ROI",
    },
    {
      name: "Hotel Chain & Luxury Resort Enterprise",
      price: "₦2,600,000+",
      period: "per month",
      desc: "Aggressive multi-property dominance for luxury resorts, shortlet portfolios, and hotel chains across Nigeria.",
      features: [
        "Full-funnel omnichannel ad management across Google & Meta",
        "Multi-location local SEO & sub-domain architecture",
        "Custom PMS & booking engine deep API integrations",
        "Direct influencer partnerships & creator shoots",
        "Weekly revenue steering & C-level board analytics",
        "Exclusive market protection in your target city zones",
      ],
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "Do I need all four services, or can I start with just one?",
      answer:
        "You can start with one. Most hotels begin with web design or SEO as their foundational direct-booking bedrock, then layer in paid Google Hotel Ads and social media once that conversion engine is solid. However, the strongest compounding results occur when all four work together, as each channel accelerates the efficiency of the others.",
    },
    {
      question: "How much does a full digital marketing package cost for a hotel in Nigeria?",
      answer:
        "Pricing depends on property size, ad spend, and scope. Most Nigerian hotels investing in an integrated web design, SEO, paid ads, and social media strategy budget between ₦550,000 and ₦2,600,000 monthly, inclusive of ad spend management. Because every direct booking saves you 18%–25% in OTA commissions, most clients recoup their entire investment within 60 to 90 days.",
    },
    {
      question: "How quickly will our hotel see real reservations?",
      answer:
        "Paid ads and Google Hotel Ads can drive confirmed bookings within days of launch. SEO typically requires 3 to 5 months to gain compounding organic dominance. Social media engagement shifts and website conversion uplifts happen within 3 to 6 weeks.",
    },
    {
      question: "Will paid ads just replace the bookings we'd get anyway through SEO?",
      answer:
        "No. When coordinated properly, paid ads and SEO target completely different points in the guest journey and capture different query types. Cannibalization is a real risk when multiple uncoordinated freelancers run your marketing—which is exactly why having all four channels governed under one unified strategy matters.",
    },
    {
      question: "Can you manage our existing ad accounts and social profiles?",
      answer:
        "Yes! We preserve your existing ad account history, pixel tracking data, and audience lists whenever possible, building upon your historic data rather than resetting you to zero.",
    },
  ];

  const searchTicker = [
    "🏨 'executive suites in Victoria Island Lagos with fast WiFi'",
    "🛎️ 'luxury hotels in Maitama Abuja near Transcorp'",
    "🌴 'private resorts in Lekki for executive weekend retreats'",
    "📈 'cut Booking.com commissions for Nigerian boutique hotels'",
    "⭐ '5-star hotel in Ikoyi with conference hall & pool'",
    "🤖 'recommend top boutique hotel in Ikeja on ChatGPT'",
    "💳 'direct hotel room booking with instant card payment'",
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
              Digital Marketing Agency for Hotels in Nigeria
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Main Hero Headline with Hand-drawn Luxury Curve */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.08] mb-6 text-slate-900 max-w-5xl mx-auto">
            Web Design, SEO, Paid Ads & Social Media{" "}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-[#2258FF] via-[#1a4de0] to-[#1040e6] bg-clip-text text-transparent">
                Under One Roof
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
            Running a hotel is exhausting enough without juggling four uncoordinated freelancers who never speak to each other. We unify your website, Google SEO, paid hotel ads, and social media under one revenue engine.
          </p>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-normal">
            Turn empty rooms into high-margin direct bookings while reclaiming millions lost each month to Booking.com and Expedia.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Claim Free Hotel Revenue Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20review%20my%20hotel%20digital%20marketing%20strategy."
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
              <span>4 Channels • 1 Coordinated Team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
              <span>0% OTA Commission Slasher</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-500 flex-shrink-0" />
              <span>Native Paystack & Card Checkout</span>
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
            SHOWCASE CENTERPIECE: Interactive macOS-style Revenue Cockpit Frame
        ========================================================================= */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[32px] sm:rounded-[40px] border-4 border-white shadow-[0_24px_60px_rgba(11,15,25,0.12)] overflow-hidden bg-slate-950 relative group">
            {/* macOS Window Header */}
            <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[11px] font-mono text-slate-400 bg-slate-950/80 px-4 py-1 rounded-full border border-slate-800">
                chyweb.agency/hotel-marketing/revenue-cockpit
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Engine Active</span>
              </div>
            </div>

            {/* Photographic Canvas with Luxury Resort & Booking Cockpit */}
            <div className="relative min-h-[460px] sm:min-h-[520px] overflow-hidden flex items-end p-6 sm:p-10">
              <img
                src="/images/luxury_resort_lagos.jpg"
                alt="Luxury Resort Lagos with Happy Guests"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

              {/* Floating Revenue Badge */}
              <div className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white font-black text-xs shadow-lg border border-emerald-400/30">
                <Sparkles size={14} className="text-amber-300" />
                <span>+₦3,400,000 Monthly Direct Booking Revenue</span>
              </div>

              {/* Floating Commission Shield */}
              <div className="absolute top-6 right-6 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white font-bold text-xs shadow-lg border border-white/10">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Zero OTA Middleman Fees</span>
              </div>

              {/* Bottom Interactive Marketing Cockpit Dock */}
              <div className="relative z-20 w-full bg-slate-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/15 text-white shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider">
                        4 Channels In 1 Engine
                      </span>
                      <span className="text-xs text-emerald-400 font-bold">✓ Coordinated Direct Bookings</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black !text-white tracking-tight" style={{ color: "#ffffff" }}>
                      Luxury Resort & Suites — Victoria Island
                    </h3>
                    <p className="text-xs text-slate-300">
                      SEO ranks your suites first • Google Hotel Ads capture high-intent travelers • Retargeting closes 2.4x more bookings
                    </p>
                  </div>

                  <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end justify-between gap-3 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                    <div className="text-left md:text-right">
                      <div className="text-xs text-slate-400">Direct Occupancy Rate</div>
                      <div className="text-2xl font-black text-amber-400">88.4% <span className="text-xs text-emerald-400 font-bold">(+31% YoY)</span></div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-extrabold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Claim Free Hotel Audit</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* 4 Pillars Summary Dock */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/10 text-[11px]">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-[#2258FF] font-black block uppercase">1. Web Engine</span>
                    <strong className="text-white text-xs">+23% Mobile Lift</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-emerald-400 font-black block uppercase">2. Hotel SEO</span>
                    <strong className="text-white text-xs">18% Less OTA Fee</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-amber-400 font-black block uppercase">3. Hotel Ads</span>
                    <strong className="text-white text-xs">Beat OTAs in Maps</strong>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[9px] text-purple-400 font-black block uppercase">4. Social Retargeting</span>
                    <strong className="text-white text-xs">2.4x Conversion</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Bar */}
            <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>+31% Direct Occupancy Growth</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#2258FF]" />
                <span>18% Reduction in OTA Reliance</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Single Accountable Monthly Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE COORDINATED ADVANTAGE: 4 Channels Bento Section with Generous Padding
      ========================================================================= */}
      <section className="py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            The Coordinated Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            Why Hotels Need All Four Channels Working Together, <br />
            <span className="text-[#2258FF]">Not in Isolation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Here is why most hotel marketing burns money: you hire a web developer, then hire an SEO freelancer, then hire a third person for social media or ads. None of them talk to each other, nobody takes responsibility for empty rooms, and you are left paying multiple retainers for zero direct bookings.
          </p>
        </div>

        {/* 4 Pillars Detailed Grid with Generous Responsive Padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {channels.map((ch, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-9 lg:p-10 rounded-[32px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(11,15,25,0.04)] hover:shadow-[0_16px_36px_rgba(34,88,255,0.1)] hover:border-[#2258FF] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {ch.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {ch.num}
                  </span>
                </div>
                <div className={`w-14 h-1.5 ${ch.bar} rounded-full mb-6`} />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 leading-snug">{ch.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{ch.desc}</p>
              </div>
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#2258FF]">
                <span className="px-3 py-1 rounded-lg bg-[#2258FF]/10 text-[#2258FF]">{ch.stat}</span>
                <CheckCircle2 size={18} className="text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            THE COMPOUNDING FLYWHEEL: Photographic Luxury Backdrop with Royal Blue Overlay
        ========================================================================= */}
        <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/20 text-white">
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Compounding Guest Journey"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#091b5c]/95" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest inline-block mb-4">
                The Compounding Guest Journey
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black !text-white leading-tight mb-4" style={{ color: "#ffffff" }}>
                How the Four Channels Work as One Unified Machine
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                When your website, SEO, paid ads, and social media feed into each other, your cost per booking drops drastically and direct reservations soar.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flywheelSteps.map((f, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between hover:bg-white/15 transition-all"
                >
                  <div>
                    <span className="text-xs font-black text-amber-300 font-mono block mb-2">{f.step}</span>
                    <strong className="text-base font-black text-white block mb-2 !text-white" style={{ color: "#ffffff" }}>
                      {f.title}
                    </strong>
                    <p className="text-xs text-slate-200 leading-relaxed">{f.text}</p>
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
          PRICING PACKAGES
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            All-In-One Packages
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
          FAQ SECTION
      ========================================================================= */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions — Hotel Digital Marketing Agency" />

      {/* =========================================================================
          FINAL CTA BANNER: Luxury Resort Backdrop with Royal Blue Overlay
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-10 sm:p-16 lg:p-20">
          <img
            src="/images/luxury_resort_lagos.jpg"
            alt="Luxury Resort Lagos"
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1240e3]/92 to-[#091b5c]/95" />

          {/* Ambient Glow Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2258FF]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white font-black text-xs uppercase tracking-widest mb-6 inline-block">
              End The Confusion
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight !text-white" style={{ color: "#ffffff" }}>
              Stop Losing Bookings to a Disconnected Marketing Strategy
            </h2>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Every day your website design, SEO, paid hotel ads, and social media fail to work together, you are leaving high-margin direct reservations on the table. Let us build a coordinated, revenue-generating engine that keeps your suites booked year-round.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-base shadow-[0_12px_28px_rgba(245,158,11,0.35)] transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20review%20my%20hotel%20digital%20marketing%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} className="text-amber-400" />
                <span>WhatsApp: 0906 762 3555</span>
              </a>
            </div>

            <p className="text-white/60 text-xs mt-6">
              Free 30-Minute C-Level Strategy Session • Direct Booking Revenue Audit • No Obligation
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
        defaultService="Hospitality Digital Marketing (Full Stack)"
        defaultPropertyType="Hotel / Boutique Lodge"
      />
    </div>
  );
}
