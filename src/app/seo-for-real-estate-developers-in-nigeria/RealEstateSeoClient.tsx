"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Search,
  Bot,
  MapPin,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Layers,
  FileCheck2,
  BarChart3,
  Check,
  Clock,
  PhoneCall,
  Lock,
  Cpu,
  HelpCircle,
  Award,
  ChevronDown,
  Flame,
  Star,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import RealEstateAuditModal from "@/components/RealEstateAuditModal";
import RealEstatePipelineCalculator from "@/components/RealEstatePipelineCalculator";
import RealEstateClusterNav from "@/components/RealEstateClusterNav";
import RealEstateMobileStickyBar from "@/components/RealEstateMobileStickyBar";

export default function RealEstateSeoClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("Developer Pre-Launch & Off-Plan SEO");
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const liveReservations = [
    { title: "3-Bed Luxury Off-Plan Penthouse", corridor: "Lekki Phase 2, Lagos", value: "₦145,000,000", time: "Just now", phase: "Pre-Launch Deposit" },
    { title: "4-Bed Semi-Detached Villa", corridor: "Chevron Corridor, Lekki", value: "₦185,000,000", time: "3 mins ago", phase: "Milestone Phase 2" },
    { title: "Commercial Mixed-Use Tower Unit", corridor: "Maitama Extension, Abuja", value: "₦320,000,000", time: "6 mins ago", phase: "Off-Plan Allocation" },
    { title: "Waterfront Serviced Residential Plot", corridor: "Epe Lagoon Corridor", value: "₦45,000,000", time: "11 mins ago", phase: "Initial Allocation" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotificationIndex((prev) => (prev + 1) % liveReservations.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [liveReservations.length]);

  const openAudit = (service = "Developer Pre-Launch & Off-Plan SEO") => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const searchTicker = [
    "🏗️ 'off-plan apartments Lekki Phase 2 with 24-month payment plan'",
    "📍 'new residential estate for sale Epe with Governor's Consent'",
    "🏙️ 'luxury off-plan duplexes Abuja Maitama pre-launch price'",
    "🤖 'ChatGPT: which real estate developer has the best off-plan deals in Lekki?'",
    "🏢 'commercial warehousing space Lekki Deep Seaport corridor'",
    "📈 'Lagos off-plan property investment 30% capital appreciation'",
  ];

  const services = [
    {
      icon: <Search className="text-[#2258FF]" size={24} />,
      title: "Development-Specific Keyword Research",
      desc: "We map search demand around your specific project and comparable developments in the same area—'off-plan apartments Lekki Phase 2' versus 'land for sale Epe'—since buyer intent and competition differ sharply between an established location and an emerging one.",
      highlight: "Corridor-level demand mapping",
    },
    {
      icon: <Layers className="text-[#2258FF]" size={24} />,
      title: "Project Landing Page Optimization",
      desc: "Dedicated, conversion-focused pages for each development: unique descriptions, payment plan clarity, unit specifications, and construction progress updates, structured to answer a prospective buyer's questions and capture their inquiry directly.",
      highlight: "Unit specifications & schedules",
    },
    {
      icon: <MapPin className="text-[#2258FF]" size={24} />,
      title: "Local SEO for Development Sites & Sales Offices",
      desc: "Google Business Profile optimization for your sales office locations, consistent NAP data across property portals, and location-specific content built to capture buyers searching a specific corridor or emerging area.",
      highlight: "Sales office Google 3-Pack",
    },
    {
      icon: <Sparkles className="text-[#2258FF]" size={24} />,
      title: "Pre-Launch and Off-Plan SEO Strategy",
      desc: "Content and visibility built before a single unit is physically ready, so search momentum and buyer trust are already established by the time your project launches, not built from zero after handover begins.",
      highlight: "Pre-sale momentum from Day 1",
    },
    {
      icon: <Cpu className="text-[#2258FF]" size={24} />,
      title: "Technical SEO for Developer Portfolios",
      desc: "Site speed, mobile optimization, and crawlability fixes built for developer sites managing multiple active projects and phases simultaneously, so every development stays properly indexed and visible.",
      highlight: "Multi-project indexing architecture",
    },
    {
      icon: <ShieldCheck className="text-[#2258FF]" size={24} />,
      title: "Developer Content & Trust-Building Strategy",
      desc: "Area growth guides, infrastructure updates, and construction progress content that builds the confidence off-plan buyers specifically need before committing to a project that isn't finished yet.",
      highlight: "Off-plan investor reassurance",
    },
    {
      icon: <Bot className="text-[#2258FF]" size={24} />,
      title: "AEO and AI Search Optimization",
      desc: "Structuring content to directly answer real buyer questions—'is [development] a good investment', 'what's the payment plan for [project]', 'which developer has the best off-plan deals in [area]'—so your project gets cited inside ChatGPT, Gemini, and Google AI Overviews instead of a competitor's.",
      highlight: "ChatGPT & Gemini entity citation",
    },
    {
      icon: <Globe className="text-[#2258FF]" size={24} />,
      title: "Developer GEO (Generative Engine Optimization)",
      desc: "Building comprehensive, well-organized project and area content that AI systems can accurately summarize when a buyer asks for a broader comparison across developers in the same corridor.",
      highlight: "Top generative comparisons",
    },
    {
      icon: <Award className="text-[#2258FF]" size={24} />,
      title: "Off-Page SEO and Digital PR",
      desc: "Earned mentions on recognized Nigerian business and property publications, backlinks from relevant industry sites, and consistent project presence across major property portals and investment platforms.",
      highlight: "Authority & portal footprint",
    },
    {
      icon: <BarChart3 className="text-[#2258FF]" size={24} />,
      title: "Analytics & Pipeline Attribution",
      desc: "Monthly reporting on organic traffic, keyword rankings by project and location, inquiry and lead volume, and AI referral traffic, tied to actual sales pipeline, not just page visits.",
      highlight: "Units sold attribution",
    },
  ];

  const pricingPackages = [
    {
      name: "Starter",
      bestFor: "Single project, pre-launch or early sales phase",
      price: "₦250,000 – ₦450,000",
      period: "per month",
      desc: "Essential off-plan foundation to capture local buyers searching your immediate corridor.",
      features: [
        "Corridor keyword demand mapping (up to 30 terms)",
        "1 dedicated, conversion-optimized project landing page",
        "Google Business Profile optimization for sales office",
        "Basic technical audit & mobile speed tuning",
        "Monthly inquiry tracking & ranking reports",
      ],
      highlight: false,
    },
    {
      name: "Growth",
      bestFor: "Developers managing 1–3 active projects",
      price: "₦450,000 – ₦900,000",
      period: "per month",
      desc: "Full-scale SEO, content, and AI search visibility engine across multiple developments.",
      features: [
        "Everything in Starter package",
        "Dedicated landing pages for up to 3 active projects",
        "Off-plan trust & area growth content strategy",
        "AEO & JSON-LD schema for ChatGPT & Google AI Overviews",
        "Off-page SEO & authority building across Nigerian portals",
        "Bi-weekly lead attribution & AI citation monitoring",
      ],
      highlight: true,
      badge: "Most Popular for Developers",
    },
    {
      name: "Multi-Project",
      bestFor: "Developers managing 4+ active projects or phases",
      price: "₦900,000 – ₦2,000,000+",
      period: "per month",
      desc: "Enterprise search dominance for high-volume developers with extensive property pipelines.",
      features: [
        "Everything in Growth package",
        "Multi-site technical architecture & portfolio indexation",
        "Generative Engine Optimization (GEO) for AI developer comparisons",
        "Dedicated project pages & phase updates for all developments",
        "Digital PR mentions in Nigerian business & property press",
        "Priority dedicated account director & custom CRM lead sync",
      ],
      highlight: false,
    },
  ];

  const oneTimeOptions = [
    {
      title: "Pre-Launch Sprint (One-Time)",
      target: "New project about to launch, needs visibility before handover",
      price: "₦600,000 – ₦1,500,000",
      timeframe: "8–12 Weeks Focused Sprint",
      deliverables: [
        "Conversion-engineered project landing page",
        "Area corridor trust & infrastructure guide",
        "Local SEO & sales office Google 3-Pack setup",
        "AEO structured data ahead of official launch date",
      ],
    },
    {
      title: "Full Developer SEO Audit (One-Time)",
      target: "Any developer wanting a clear diagnostic before committing",
      price: "₦200,000 – ₦500,000",
      timeframe: "7 Business Days Delivery",
      deliverables: [
        "Full technical crawl & multi-project indexation review",
        "Competitor corridor gap analysis (Lekki, Epe, Abuja)",
        "AI assistant visibility score (ChatGPT/Gemini presence)",
        "Prioritized 90-day execution roadmap",
      ],
    },
  ];

  const differentiators = [
    {
      title: "We build for projects and pipelines, not just keywords",
      desc: "Generic SEO agencies optimize for broad terms like 'real estate developer Lagos'. We build dedicated, conversion-focused strategy around each individual development and the specific corridor it sits in, because that's where developer-specific buyer intent actually lives.",
    },
    {
      title: "We understand off-plan sales cycles",
      desc: "Selling a development that isn't finished yet requires a different kind of trust-building than selling a completed listing. We build content and SEO strategy that supports your pre-launch, construction, and handover phases as one continuous buyer journey.",
    },
    {
      title: "We optimize for AI search now, not later",
      desc: "Most Nigerian agencies claiming real estate SEO experience have no framework for getting cited inside ChatGPT or Google's AI Overview. We built our entire approach around this shift, the same framework behind our work in AI-powered SEO and answer engine optimization (AEO), applied specifically to how buyers research developments.",
    },
    {
      title: "We manage multi-project technical complexity",
      desc: "A developer running several active projects and phases has different technical SEO demands than a single-listing agency: indexation across multiple project sites, avoiding duplicate content between similar unit types, and site speed at scale. This is core to how we structure every developer client's site.",
    },
    {
      title: "We teach as well as execute",
      desc: "Beyond client work, we run digital marketing training in Nigeria and a dedicated SEO training program in Nigeria, so if you'd rather build this capability on your own in-house marketing team, that transparency is built into how we work.",
    },
    {
      title: "We measure what actually matters",
      desc: "Not just rankings and traffic, but qualified inquiries, lead quality by project and location, and AI referral traffic—the numbers that actually connect to units sold, not vanity metrics on a report nobody reads.",
    },
  ];

  const faqs = [
    {
      question: "How is SEO for real estate developers different from SEO for real estate agents?",
      answer:
        "Developer SEO centers on selling specific projects, often off-plan, which requires trust-building content, payment plan clarity, and construction progress updates that a standard listing-based agent site doesn't need to the same degree. Agents optimize for immediate inventory turnover; developers need to generate pre-sale momentum for properties that are still under construction.",
    },
    {
      question: "How long does developer SEO take to show results?",
      answer:
        "Local SEO and project landing page optimization can show movement within 4-8 weeks. Broader organic visibility and AI search citations for a development typically take 3-6 months of consistent content and technical work. We structure pre-launch sprints so your project hits peak visibility right when your sales phase is in full swing.",
    },
    {
      question: "Can you help with pre-launch SEO before our project has any completed units?",
      answer:
        "Yes, this is one of our core focuses. Building search visibility and buyer trust before launch means your project isn't starting from zero once sales officially open. We leverage architectural 3D renders, corridor growth statistics, and infrastructure roadmaps to capture early investor interest.",
    },
    {
      question: "Do you work with developers running multiple active projects at once?",
      answer:
        "Yes, we build technical and content strategy specifically designed to keep several developments properly indexed and visible simultaneously, without one project's content competing against another's for the same corridor keywords.",
    },
    {
      question: "How much does SEO for real estate developers cost in Nigeria?",
      answer:
        "Pricing depends on the number of active projects and market competitiveness, ranging from ₦250,000 monthly for a single project to ₦2,000,000+ for developers managing multiple active developments. We'll recommend the right package and provide an exact quote after a free audit of your current site and project pages.",
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
            LIVE NIGERIAN REAL ESTATE SEARCH DEMAND:
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
          HERO SECTION: Consistent with previous flagship pages
      ========================================================================= */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3F0E6] to-[#E9E5D9] text-slate-800 rounded-b-[48px] sm:rounded-b-[60px] overflow-hidden border-b border-slate-300/50 shadow-[0_12px_45px_rgba(0,0,0,0.04)] z-10">
        {/* Ambient Architectural Lighting & Dot Matrix */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[1100px] h-[580px] bg-gradient-to-b from-[#2258FF]/12 via-amber-400/10 to-transparent blur-[140px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 text-slate-800 text-xs font-bold mb-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:border-[#2258FF]/40 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-900 font-black tracking-wide uppercase text-[11px] sm:text-xs">
              ChyWeb Real Estate Developer SEO
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Lagos • Abuja • Port Harcourt
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            SEO for Real Estate Developers{" "}
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

          {/* Value Subheadline (H2) */}
          <h2 className="text-xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-800 tracking-tight leading-snug mb-5 max-w-4xl mx-auto">
            Get Your Projects Found{" "}
            <span className="text-[#2258FF] font-black">
              Before They&apos;re Built Out
            </span>
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria&apos;s SEO agency for real estate developers, built for pre-launch, off-plan, and multi-project pipelines across Lagos, Abuja, Port Harcourt, and emerging growth corridors.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => openAudit("Developer Pre-Launch & Off-Plan SEO")}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Book a Free SEO Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20am%20a%20real%20estate%20developer%20and%20want%20to%20audit%20my%20off-plan%20search%20visibility."
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
            Free project audit • Zero obligation • Direct strategy line
          </div>

          {/* Micro-Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Zap size={16} className="text-[#2258FF]" />
              <span>₦58.16 Trillion Residential Market</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <TrendingUp size={16} className="text-emerald-500" />
              <span>13.4% of National GDP (2025 Rebasing)</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-amber-500" />
              <span>ChatGPT &amp; Gemini Generative Citations</span>
            </div>
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
                <span>chyweb.agency/real-estate/developer-pipeline-cockpit • Lagos, NG</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Pre-Launch Live Engine</span>
              </div>
            </div>

            {/* Visual Showcase Media */}
            <div className="relative overflow-hidden">
              <img
                src="/images/real_estate_developer_lagos.jpg"
                alt="Luxury Off-Plan Residential Development Lagos"
                className="w-full h-[380px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/95 via-[#0a1e64]/25 to-transparent pointer-events-none" />

              {/* Dynamic Live Reservation Notification */}
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
                    <span className="text-[10px] text-amber-300 font-black block uppercase tracking-wider">
                      ⚡ {liveReservations[currentNotificationIndex].phase}
                    </span>
                    <strong className="text-xs sm:text-sm font-black truncate block text-white">
                      {liveReservations[currentNotificationIndex].title}
                    </strong>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {liveReservations[currentNotificationIndex].corridor}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0 border-l border-white/15 pl-3">
                    <span className="text-xs sm:text-sm font-black text-amber-300 block font-mono">
                      {liveReservations[currentNotificationIndex].value}
                    </span>
                    <span className="text-[9px] text-emerald-300 font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">
                      {liveReservations[currentNotificationIndex].time}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Verified Developer Trust Rating Badge */}
              <div className="hidden sm:flex absolute top-4 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl border border-white/80 items-center gap-3 text-left z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-600">
                  <Star size={18} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-slate-900 font-black text-xs">
                    <span>4.96 / 5.0 Rating</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Verified</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Top Ranked in Lekki, Epe &amp; Abuja
                  </span>
                </div>
              </div>

              {/* Floating Mini Growth Indicator (Bottom Right of Media) */}
              <div className="hidden md:flex absolute bottom-6 right-6 bg-[#2258FF]/95 backdrop-blur-md border border-white/30 text-white rounded-2xl p-3 shadow-xl items-center gap-2.5 z-20 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#2258FF]/30 border border-[#2258FF]/50 flex items-center justify-center text-[#2258FF]">
                  <TrendingUp size={16} className="text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Off-Plan Inquiries</span>
                  <strong className="text-xs font-black text-emerald-400">+3.8x Pipeline Velocity</strong>
                </div>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock - Ultra-Clean Frosted Control Center */}
            <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center text-left text-slate-900 shadow-xl z-20 relative">
              <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Pipeline Value
                </span>
                <strong className="text-base sm:text-xl font-black text-[#2258FF]">
                  ₦4.2B+ Active
                </strong>
                <span className="text-[10px] text-blue-600 font-bold block mt-0.5">Tracked in client pipeline</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Pre-Sale Inquiries
                </span>
                <strong className="text-base sm:text-xl font-black text-emerald-600">
                  850+ Leads
                </strong>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">Direct developer inquiries</span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100/80 hidden sm:block">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Search &amp; AI Share
                </span>
                <strong className="text-base sm:text-xl font-black text-amber-600">
                  #1 Corridor Pack
                </strong>
                <span className="text-[10px] text-amber-700 font-bold block mt-0.5">Google Maps &amp; ChatGPT</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
                <button
                  onClick={() => openAudit("Developer Pre-Launch & Off-Plan SEO")}
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

      {/* =========================================================================
          SECTION: Massive Market H2 - Light Brand Card Styling
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <TrendingUp size={14} className="text-[#2258FF]" />
            <span>Market Opportunity</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            You&apos;re Competing for Buyers in a Massive Market, and Most of It Starts Online
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nigeria&apos;s real estate market is genuinely enormous and still growing, with residential real estate alone
            valued at over <strong>₦58.16 trillion</strong> and the sector now contributing roughly <strong>13.4% of national GDP</strong>{" "}
            following the 2025 GDP rebasing. Lagos alone is absorbing an estimated <strong>475,000 new residents every year</strong>,
            driving constant demand across every price point, and infrastructure projects like the Dangote Refinery and Lekki Deep Seaport
            are already fueling fresh demand for warehousing and logistics developments alongside residential growth.
          </p>
        </div>

        {/* 3 Value Cards in Brand Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-black text-[#2258FF] font-mono mb-2">₦58.16T</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Residential Market Valuation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Contributing 13.4% of national GDP. Capital is moving into verified off-plan developments with clear title documentation.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-black text-amber-500 font-mono mb-2">475,000+</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Annual Lagos Migration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Constant population expansion driving demand in Lekki Phase 1, Phase 2, Chevron, and Epe master-planned communities.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-black text-emerald-600 font-mono mb-2">Mega Growth</div>
            <h3 className="text-base font-bold text-slate-900 mb-2">Dangote &amp; Deep Seaport</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Industrial transformation creating immediate demand for executive housing and logistics facilities months before ground is broken.
            </p>
          </div>
        </div>

        {/* Billboard vs Search Comparison Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-sm">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
            <Zap className="text-amber-500" size={22} />
            <span>Here&apos;s What That Means If You&apos;re Developing Property:</span>
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Buyers and investors aren&apos;t discovering new projects by driving past a billboard anymore. They&apos;re searching{" "}
            <code className="text-[#2258FF] bg-blue-50 font-bold px-2 py-0.5 rounded">&ldquo;new estate for sale Lekki Phase 2&rdquo;</code> or{" "}
            <code className="text-[#2258FF] bg-blue-50 font-bold px-2 py-0.5 rounded">&ldquo;off-plan apartments Abuja payment plan&rdquo;</code> on Google,
            comparing developments on property portals, and increasingly asking AI assistants{" "}
            <span className="text-slate-900 font-bold italic">&ldquo;which developer has the best off-plan deals in [area] right now.&rdquo;</span>{" "}
            If your development isn&apos;t visible across all of these at the exact moment a buyer is comparing options, you&apos;re losing serious inquiries
            and pre-sale momentum to a competing developer who simply shows up first, regardless of whose project is actually the better investment.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Why SEO for Real Estate Developers Is Its Own Discipline
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why SEO for Real Estate Developers Is Its Own Discipline
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Selling a single development is a different SEO problem than running a general property listings site. Developers need buyers to find, trust, and commit to a project that often doesn&apos;t physically exist yet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#2258FF] font-black flex items-center justify-center text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-slate-900">Off-Plan Sales &amp; Trust</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Off-plan sales, payment plan structures, and pre-launch demand generation all carry SEO demands that a generic agency or even a standard real estate SEO approach doesn&apos;t fully address.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#2258FF] font-black flex items-center justify-center text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-slate-900">Project Landing Pages</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We build project-specific landing pages built to convert interest into inquiries, with content that builds institutional trust in a development before it is complete.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#2258FF] font-black flex items-center justify-center text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-slate-900">AI Structured Data</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structuring information so AI systems can accurately answer questions about pricing, payment plans, and completion timelines that prospective buyers research before ever contacting sales.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: Our 10 SEO Services for Real Estate Developers
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles size={13} className="text-[#2258FF]" />
            <span>Complete Development Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our SEO Services for Real Estate Developers
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Everything your sales and marketing team needs to maintain pre-sale momentum from groundbreaking to handover:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2258FF]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    {svc.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {svc.highlight}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#2258FF] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2258FF]">
                <span>Strategy Deliverable</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CALCULATOR: In Brand Navy Contrast
      ========================================================================= */}
      <section id="calculator" className="py-20 px-6 max-w-7xl mx-auto">
        <RealEstatePipelineCalculator onOpenAudit={openAudit} />
      </section>

      {/* =========================================================================
          PRICING PACKAGES
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>Realistic Developer Budgeting</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            SEO Packages for Real Estate Developers in Nigeria
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Pricing depends on how many active projects you&apos;re managing and how competitive your target corridors are. Here&apos;s a realistic breakdown to help you budget:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between relative transition-all ${
                pkg.highlight
                  ? "bg-white border-2 border-[#2258FF] shadow-[0_15px_40px_rgba(34,88,255,0.12)] scale-[1.02]"
                  : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#2258FF] mb-1">
                  {pkg.name}
                </div>
                <div className="text-xs text-slate-500 mb-3">{pkg.bestFor}</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono mb-1">
                  {pkg.price}
                </div>
                <div className="text-xs text-slate-400 mb-6">{pkg.period}</div>
                <p className="text-xs text-slate-600 mb-6 pb-6 border-b border-slate-100 leading-relaxed">
                  {pkg.desc}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                    What&apos;s Included:
                  </div>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 size={15} className="text-[#2258FF] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openAudit(`SEO Package: ${pkg.name}`)}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.highlight
                    ? "bg-[#2258FF] hover:bg-[#1442e6] text-white shadow-md shadow-[#2258FF]/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                <span>Select {pkg.name} Package</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Sprints and One-Time Audits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {oneTimeOptions.map((opt, oIdx) => (
            <div key={oIdx} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-slate-900">{opt.title}</span>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {opt.timeframe}
                  </span>
                </div>
                <div className="text-xs text-slate-500 mb-3">{opt.target}</div>
                <div className="text-xl font-black text-[#2258FF] font-mono mb-4">
                  {opt.price}
                </div>

                <div className="space-y-2 mb-6">
                  {opt.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check size={14} className="text-[#2258FF] flex-shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openAudit(opt.title)}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Request {opt.title}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE CHYWEB ACADEMY
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose ChyWeb Academy
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Plenty of agencies will tell you they can get your development on page one of Google. Here&apos;s what actually separates us for real estate developers specifically:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#2258FF] font-bold text-sm sm:text-base">
                <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-500" />
                <span className="text-slate-900">{diff.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
      ========================================================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-200">
        <FaqSection
          title="Frequently Asked Questions: SEO for Real Estate Developers in Nigeria"
          subtitle="Everything you need to know about off-plan visibility, pre-launch momentum, and pipeline attribution."
          faqs={faqs}
        />
      </section>

      {/* =========================================================================
          FINAL CTA BANNER
      ========================================================================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#0a1e64] via-[#1040e6] to-[#2258FF] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 text-center relative z-10 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black !text-white tracking-tight">
            Stop Losing Buyers to Developments That Simply Show Up First
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
            Every day your projects aren&apos;t optimized for how buyers actually search—on Google, locally, and increasingly through AI—you&apos;re losing qualified inquiries and pre-sale momentum to a competing developer with stronger online visibility, not necessarily a better project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openAudit("Developer Pre-Launch & Off-Plan SEO")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer"
            >
              Book a Free SEO Audit →
            </button>
            <button
              onClick={() => openAudit("Request a Free Project Audit")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/15 hover:bg-white/20 text-white font-bold text-sm border border-white/25 transition-all cursor-pointer"
            >
              Request a Free Project Audit →
            </button>
          </div>

          <p className="text-[11px] text-white/70">
            Free project audit • Zero obligation • Response in under 48 hours
          </p>
        </div>
      </section>

      {/* Real Estate Cluster Nav */}
      <RealEstateClusterNav
        currentPath="/seo-for-real-estate-developers-in-nigeria"
        onOpenAuditModal={openAudit}
      />

      {/* Mobile Sticky Bar */}
      <RealEstateMobileStickyBar onOpenAudit={() => openAudit("Mobile CTA")} ctaText="Free Project Audit" />

      {/* Audit Modal */}
      <RealEstateAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalService}
        defaultPipelineStage="Pre-Launch / Off-Plan Development"
      />
    </div>
  );
}
