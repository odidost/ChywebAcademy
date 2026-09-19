"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MonitorSmartphone,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Smartphone,
  Layers,
  Sparkles,
  Building2,
  ArrowRight,
  Send,
  Camera,
  Search,
  Award,
  Check,
  PhoneCall,
  Flame,
  Globe,
  TrendingUp,
  Lock,
  Star,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import RealEstateAuditModal from "@/components/RealEstateAuditModal";
import RealEstatePipelineCalculator from "@/components/RealEstatePipelineCalculator";
import RealEstateClusterNav from "@/components/RealEstateClusterNav";
import RealEstateMobileStickyBar from "@/components/RealEstateMobileStickyBar";

export default function RealEstateWebDesignClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState("High-Converting Real Estate Web Design");
  const [activeTab, setActiveTab] = useState<"agents" | "developers">("agents");
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);

  const liveLeads = [
    { title: "Direct Inquiry: 4-Bed Terrace Lekki", client: "Investor from London (Diaspora)", budget: "₦160,000,000", time: "Just now", channel: "Instant WhatsApp Alert" },
    { title: "Off-Plan Unit Booking: 2-Bed Flat", client: "Executive in Victoria Island", budget: "₦75,000,000", time: "2 mins ago", channel: "Direct Form Submission" },
    { title: "Land Inspection Booking: 600sqm Epe", client: "Doctor in Abuja", budget: "₦38,000,000", time: "5 mins ago", channel: "1-Tap Schedule" },
    { title: "Commercial Floor Inquiry: Ikoyi", client: "Fintech Co-founder", budget: "₦450,000,000", time: "9 mins ago", channel: "Priority Lead Webhook" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotificationIndex((prev) => (prev + 1) % liveLeads.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [liveLeads.length]);

  const openAudit = (service = "High-Converting Real Estate Web Design") => {
    setModalService(service);
    setIsModalOpen(true);
  };

  const searchTicker = [
    "📱 'real estate websites with instant WhatsApp property inquiries'",
    "⚡ '5-minute speed-to-lead response system for Nigerian realtors'",
    "🏡 'mobile-first property listing design with sub-second image loading'",
    "📊 'top real estate websites converting above 5.6% in Nigeria'",
    "🏢 'developer project landing page with payment plan breakdown'",
  ];

  const agentFeatures = [
    {
      icon: <Smartphone className="text-[#2258FF]" size={22} />,
      title: "Mobile-First Listing Pages",
      desc: "With the majority of property research happening on mobile devices in Nigeria, we design listing browsing, filtering, and inquiry flows for a thumb on a small screen first, then scale up to tablet and desktop.",
      highlight: "Thumb-first property filters",
    },
    {
      icon: <Zap className="text-[#2258FF]" size={22} />,
      title: "Fast, Frictionless Inquiry Forms",
      desc: "Every unnecessary field on a contact form costs you leads. We build short, clear inquiry forms placed exactly where a buyer's interest peaks, on the listing page itself, not buried three clicks away.",
      highlight: "1-Tap inquiry placement",
    },
    {
      icon: <Clock className="text-[#2258FF]" size={22} />,
      title: "Instant Lead Notifications",
      desc: "Since a 5-minute response window can mean 10 times higher conversion, we build inquiry systems that notify you or your sales team the moment a lead comes in, not once a day in a batch email you check after lunch.",
      highlight: "Sub-5-minute lead triggers",
    },
    {
      icon: <Camera className="text-[#2258FF]" size={22} />,
      title: "Speed-Optimized Image & Listing Handling",
      desc: "Property photos are the whole sales pitch, and they're also usually what kills a site's load time. We build lean, fast-loading galleries that showcase your listings without punishing your page speed.",
      highlight: "Sub-second gallery load",
    },
    {
      icon: <Search className="text-[#2258FF]" size={22} />,
      title: "Neighborhood & Local Search Pages",
      desc: "Dedicated, content-rich pages built around specific areas—Lekki Phase 1, Ikoyi, Maitama, Wuse 2—structured to capture local search intent and give buyers the confidence-building context that turns a visit into an inquiry.",
      highlight: "Corridor authority pages",
    },
    {
      icon: <ShieldCheck className="text-[#2258FF]" size={22} />,
      title: "Trust & Credibility Signals Throughout",
      desc: "Reviews, verified listing badges, agent credentials, and clear, transparent information displayed prominently, not buried, since trust is one of the highest-impact levers in real estate conversion.",
      highlight: "Institutional trust badges",
    },
    {
      icon: <Sparkles className="text-[#2258FF]" size={22} />,
      title: "AI and Search-Ready Structure",
      desc: "AI systems are increasingly summarizing property information and agency reputations before a buyer clicks through at all. We structure your site's content and data so it's understood and trusted by Google and AI assistants like ChatGPT and Gemini.",
      highlight: "AEO & schema ready",
    },
  ];

  const developerFeatures = [
    {
      icon: <Building2 className="text-[#2258FF]" size={22} />,
      title: "Dedicated Project Landing Pages",
      desc: "Clean, conversion-focused pages for each development: unit specifications, payment plans, and construction progress updates, built to capture serious investor inquiries rather than generic contact requests.",
      highlight: "Unit specs & payment plans",
    },
    {
      icon: <ShieldCheck className="text-[#2258FF]" size={22} />,
      title: "Pre-Launch Sites Built for Trust",
      desc: "Websites that build confidence in an off-plan project before a single unit is finished, since buyers need reassurance a completed listing doesn't require.",
      highlight: "Off-plan investor confidence",
    },
    {
      icon: <Layers className="text-[#2258FF]" size={22} />,
      title: "Multi-Project Technical Architecture",
      desc: "Sites built to manage several active developments simultaneously without one project's pages competing against another's for search visibility or diluting lead capture.",
      highlight: "Scalable portfolio hierarchy",
    },
  ];

  const packages = [
    {
      name: "Agent Starter",
      bestFor: "Individual agents, first professional website",
      price: "₦350,000 – ₦600,000",
      period: "one-time",
      desc: "A sleek, mobile-first property portfolio that captures inquiries directly into your WhatsApp and email.",
      features: [
        "Mobile-first responsive architecture",
        "Up to 15 optimized listing pages",
        "1-tap lead inquiry forms on every listing",
        "Basic local SEO & Google Maps setup",
        "WhatsApp click-to-chat integration",
      ],
      highlight: false,
    },
    {
      name: "Agency Growth",
      bestFor: "Small to mid-size agencies with active listing volume",
      price: "₦700,000 – ₦1,500,000",
      period: "one-time",
      desc: "Full agency platform with unlimited listings, instant lead notifications, and corridor search pages.",
      features: [
        "Everything in Starter package",
        "Unlimited property listings management",
        "CRM & instant WhatsApp/email lead alert webhook",
        "Neighborhood authority pages (Lekki, Ikoyi, Maitama)",
        "Advanced fast image compression & lazy loading",
        "Agent profiles & verified property badges",
      ],
      highlight: true,
      badge: "Most Popular for Agencies",
    },
    {
      name: "Developer Project Site",
      bestFor: "Single development, pre-launch or active sales",
      price: "₦600,000 – ₦1,200,000",
      period: "one-time",
      desc: "Dedicated off-plan sales engine engineered around payment schedules, unit layouts, and construction progress.",
      features: [
        "Dedicated project landing page architecture",
        "Interactive payment plan & milestone schedule display",
        "Unit specifications, floor plans & 3D render showcase",
        "Construction timeline & progress update blog/feed",
        "Off-plan lead capture funnel engineered for high-ticket buyers",
      ],
      highlight: false,
    },
    {
      name: "Multi-Project Developer Platform",
      bestFor: "Developers managing 3+ active projects",
      price: "₦1,500,000 – ₦3,500,000+",
      period: "one-time",
      desc: "Enterprise developer multi-site infrastructure with centralized lead routing and brand consistency.",
      features: [
        "Everything in Developer Project Site",
        "Multiplied across 3+ active developments",
        "Shared high-speed Next.js technical infrastructure",
        "Centralized lead dispatch to sales team members",
        "Priority engineering support & speed optimization",
      ],
      highlight: false,
    },
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery and Audit",
      desc: "We review your current site or starting point, your competitors, and exactly where visitors are dropping off before submitting an inquiry.",
    },
    {
      step: "02",
      title: "Lead-Flow Design",
      desc: "We map the entire buyer journey mobile-first, removing every unnecessary step between interest and a submitted inquiry.",
    },
    {
      step: "03",
      title: "High-Speed Build",
      desc: "Fast, clean, conversion-focused Next.js development—no bloated WordPress templates, no unnecessary plugins slowing down your listing pages.",
    },
    {
      step: "04",
      title: "Inquiry System Integration",
      desc: "Instant notifications and CRM connections built in, so no lead sits unanswered in an email inbox nobody checks until the next day.",
    },
    {
      step: "05",
      title: "Testing and Launch",
      desc: "Speed, mobile responsiveness, and every single inquiry form tested thoroughly across Nigerian mobile networks before your site goes live.",
    },
    {
      step: "06",
      title: "Ongoing Optimization",
      desc: "We continue testing and refining based on real visitor behavior, since even small conversion gains compound into meaningfully more inquiries over time.",
    },
  ];

  const differentiators = [
    {
      title: "We design for lead capture, not just aesthetics",
      desc: "Every design decision, form placement, page speed, and mobile flow is made around one question: does this help turn a visitor into a qualified inquiry? A beautiful site that doesn't convert isn't a win in our book, and it shouldn't be in yours either.",
    },
    {
      title: "We understand real estate's speed-to-lead problem",
      desc: "Since responding within 5 minutes can mean 10 times higher conversion, we build instant notification systems into every site, so leads never sit unanswered in an inbox nobody checks until the next day.",
    },
    {
      title: "We build for agents, agencies, and developers differently",
      desc: "A single agent's listing site and a developer's multi-project payment-plan platform are completely different problems. We don't force either into a generic template.",
    },
    {
      title: "We connect design with search visibility",
      desc: "Your website is built alongside the same framework behind our work in SEO for real estate developers and AI-powered SEO, so your site isn't just fast and well-designed; it's built to actually be found by the buyers searching for what you're selling.",
    },
    {
      title: "We're mobile-first by default, not as an afterthought",
      desc: "With most property research happening on mobile in Nigeria, we design every site starting from a phone screen, not a desktop mockup adapted down after the fact.",
    },
    {
      title: "We teach as well as execute",
      desc: "Beyond client work, we run digital marketing training in Nigeria, so if you'd rather understand the fundamentals behind your own site or build parts of it with your own team, that transparency is built into how we work.",
    },
    {
      title: "We measure what actually matters",
      desc: "Not just how the site looks: page speed, mobile conversion, form completion rate, and lead response time—the numbers that actually connect to closed deals.",
    },
  ];

  const faqs = [
    {
      question: "How much does a real estate website cost in Nigeria?",
      answer:
        "Pricing depends on scope; an individual agent's site is a different build than a developer's multi-project platform with payment plan integration. Packages start at ₦350,000 for individual agents and range up to ₦3,500,000+ for enterprise developers. We'll give you an exact quote after a free audit of your current site or requirements.",
    },
    {
      question: "Can you integrate our existing CRM or listing management system?",
      answer:
        "Yes, we integrate with your existing CRM and listing tools wherever possible, rather than forcing a switch, unless your current setup is genuinely limiting your lead capture and response speed.",
    },
    {
      question: "How long does a real estate website project take?",
      answer:
        "Most agent and agency website builds take 4 to 6 weeks. Developer sites with multiple project pages and payment plan integrations typically take 6 to 10 weeks depending on complexity.",
    },
    {
      question: "Will a new website actually generate more leads, or just look better?",
      answer:
        "Design alone can meaningfully close the gap between average (2.9%) and top-performing (5.6%+) conversion rates, but lead generation also depends on traffic quality and your follow-up speed once inquiries come in. We build the site to convert the traffic you have and can pair it with SEO to grow that traffic over time.",
    },
    {
      question: "Do you also handle SEO for the website once it's built?",
      answer:
        "Yes, we can handle both, or just the design if that's all you need. A well-designed site and a strong search strategy reinforce each other, so most real estate clients see the strongest results when both are built together.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] min-h-screen text-[#0b0f19]">
      {/* Decorative Orbs - ChyWeb Brand Blue & Golden Amber */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2258FF]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[550px] h-[550px] bg-amber-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-emerald-500/8 blur-[120px] pointer-events-none" />

      {/* Live Marquee Ticker */}
      <div className="w-full bg-[#2258FF] text-white py-2.5 overflow-hidden border-b border-blue-600 relative z-20 shadow-sm">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap text-xs font-semibold">
          <span className="flex items-center gap-2 text-amber-300 font-black">
            <Flame size={14} className="animate-pulse" />
            LIVE SPEED-TO-LEAD BENCHMARKS:
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
          HERO SECTION: Centered Luxury Architectural Layout matching Hospitality
      ========================================================================= */}
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
              ChyWeb Real Estate Web Suite
            </span>
            <span className="text-slate-300">|</span>
            <span className="inline-flex items-center gap-1 text-[#2258FF] font-black text-[11px] sm:text-xs">
              <Sparkles size={13} className="text-amber-500" />
              Speed-to-Lead Architecture
            </span>
          </div>

          {/* Centered H1 Headline - Main Target Keyword */}
          <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-black tracking-tight leading-[1.12] mb-4 sm:mb-5 text-slate-900 max-w-5xl mx-auto">
            Real Estate Web Designer{" "}
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
            Websites Built to Capture Leads,{" "}
            <span className="text-[#2258FF] font-black">
              Not Just Look Good
            </span>
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 font-medium max-w-3xl mx-auto">
            Nigeria&apos;s specialist real estate web designer for agents, agencies, and developers, built around speed-to-lead and mobile conversion across Nigerian networks.
          </p>

          {/* Centered Action CTAs - PUSHED UP IMMEDIATELY BELOW LEAD */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => openAudit("Real Estate Website Conversion Audit")}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Get a Free Website Audit</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20my%20real%20estate%20website%20design%20and%20speed-to-lead."
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
            Free website audit • Zero obligation • Direct strategy line
          </div>

          {/* Micro-Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Zap size={16} className="text-[#2258FF]" />
              <span>10x Conversion on 5-Minute Follow-Up</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <TrendingUp size={16} className="text-emerald-500" />
              <span>2.9% → 5.6%+ Lead Capture Surge</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <ShieldCheck size={16} className="text-amber-500" />
              <span>Instant CRM &amp; WhatsApp Notifications</span>
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
                <span>chyweb.agency/real-estate/instant-lead-capture-portal • Lagos, NG</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Speed-to-Lead Active</span>
              </div>
            </div>

            {/* Visual Showcase Media */}
            <div className="relative overflow-hidden">
              <img
                src="/images/real_estate_developer_lagos.jpg"
                alt="Real Estate Web Portal Showcase"
                className="w-full h-[380px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e64]/95 via-[#0a1e64]/25 to-transparent pointer-events-none" />

              {/* Dynamic Live Lead Alert Notification */}
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
                      ⚡ {liveLeads[currentNotificationIndex].channel}
                    </span>
                    <strong className="text-xs sm:text-sm font-black truncate block text-white">
                      {liveLeads[currentNotificationIndex].title}
                    </strong>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {liveLeads[currentNotificationIndex].client}
                    </span>
                  </div>
                  <div className="text-right flex-shrink-0 border-l border-white/15 pl-3">
                    <span className="text-xs sm:text-sm font-black text-amber-300 block font-mono">
                      {liveLeads[currentNotificationIndex].budget}
                    </span>
                    <span className="text-[9px] text-emerald-300 font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">
                      {liveLeads[currentNotificationIndex].time}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Verified Web Excellence Badge */}
              <div className="hidden sm:flex absolute top-4 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl border border-white/80 items-center gap-3 text-left z-20">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 text-amber-600">
                  <Star size={18} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-slate-900 font-black text-xs">
                    <span>4.97 / 5.0 UX Rating</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Verified</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Top Rated Property Portals
                  </span>
                </div>
              </div>

              {/* Floating Mini Growth Indicator (Bottom Right of Media) */}
              <div className="hidden md:flex absolute bottom-6 right-6 bg-[#2258FF]/95 backdrop-blur-md border border-white/30 text-white rounded-2xl p-3 shadow-xl items-center gap-2.5 z-20 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#2258FF]/30 border border-[#2258FF]/50 flex items-center justify-center text-[#2258FF]">
                  <TrendingUp size={16} className="text-blue-300" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block uppercase">Speed-to-Lead</span>
                  <strong className="text-xs font-black text-emerald-400">10x Higher Conversion</strong>
                </div>
              </div>
            </div>

            {/* Integrated Bottom Performance Dock - Ultra-Clean Frosted Control Center */}
            <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/80 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center text-left text-slate-900 shadow-xl z-20 relative">
              <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Visitor Conversion
                </span>
                <strong className="text-base sm:text-xl font-black text-[#2258FF]">
                  5.6% vs 2.9%
                </strong>
                <span className="text-[10px] text-blue-600 font-bold block mt-0.5">2x Industry average</span>
              </div>

              <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Response Window
                </span>
                <strong className="text-base sm:text-xl font-black text-emerald-600">
                  &lt; 5 Minutes
                </strong>
                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">Automated WhatsApp alerts</span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-100/80 hidden sm:block">
                <span className="text-[10px] text-slate-500 font-black block uppercase tracking-wider mb-0.5">
                  Mobile Page Speed
                </span>
                <strong className="text-base sm:text-xl font-black text-amber-600">
                  0.8s Next.js
                </strong>
                <span className="text-[10px] text-amber-700 font-bold block mt-0.5">Zero plugin bloat</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
                <button
                  onClick={() => openAudit("Real Estate Website Conversion Audit")}
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
          SECTION: Losing Leads H2
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Clock size={14} className="text-[#2258FF]" />
            <span>Conversion Economics</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Your Website Is Probably Losing Leads You&apos;ve Already Paid For
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Across the real estate industry globally, the average website converts around <strong>2.9% of visitors into leads</strong>,
            while top-performing sites reach <strong>5.6% or higher</strong>, and that gap is rarely about traffic volume.
            It comes down to deliberate design decisions: page speed, mobile experience, clear calls to action, and trust signals
            built into the site itself, not the number of visitors arriving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="text-3xl font-black text-amber-500 font-mono">10x Follow-Up Power</div>
            <h3 className="text-base font-bold text-slate-900">5-Minute Response Window</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Agents who follow up within 5 minutes of an inquiry are roughly 10 times more likely to convert that lead than those who respond later, and every minute a poorly designed site delays that first response—whether through a clunky contact form, no instant notification, or unclear next steps—is a minute working against you.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
            <div className="text-3xl font-black text-[#2258FF] font-mono">Zero Ad Waste</div>
            <h3 className="text-base font-bold text-slate-900">Conversion Engineering</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If your real estate website in Nigeria was built by a generic web design agency with no understanding of how property leads actually behave, you&apos;re not just missing best practice; you&apos;re paying for traffic your site was never built to convert.
            </p>
          </div>
        </div>

        {/* Specialist Difference Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-sm">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 flex items-center gap-2">
            <ShieldCheck className="text-[#2258FF]" size={22} />
            <span>Why Real Estate Websites Need a Specialist Web Designer</span>
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            A property listing page and a neighborhood guide are not the same design problem as a law firm&apos;s &ldquo;About Us&rdquo; page, and building them the same way is exactly how most Nigerian real estate websites end up looking presentable and converting poorly. A specialist real estate web designer in Nigeria understands the specific mechanics that actually move leads: fast-loading listing pages with proper image handling, frictionless inquiry forms, mobile-first browsing for buyers scrolling listings on the go, and content structured to answer a buyer&apos;s questions before they ever fill out a form.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION: What We Build (Tabbed: Agents vs Developers)
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-4 mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineered for How Property Leads Actually Behave
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Choose your real estate model to see our specific conversion architecture:
          </p>

          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300">
            <button
              type="button"
              onClick={() => setActiveTab("agents")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "agents"
                  ? "bg-[#2258FF] text-white shadow-md shadow-[#2258FF]/20"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              What We Build for Agents &amp; Agencies
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("developers")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "developers"
                  ? "bg-[#2258FF] text-white shadow-md shadow-[#2258FF]/20"
                  : "text-slate-700 hover:text-slate-900"
              }`}
            >
              What We Build for Developers
            </button>
          </div>
        </div>

        {activeTab === "agents" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {agentFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2258FF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {feat.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {developerFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2258FF]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {feat.highlight}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          CALCULATOR SECTION
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <RealEstatePipelineCalculator onOpenAudit={openAudit} />
      </section>

      {/* =========================================================================
          PRICING PACKAGES
      ========================================================================= */}
      <section id="packages" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Real Estate Web Design Packages in Nigeria
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Pricing depends on whether you&apos;re an individual agent, an agency managing multiple listings, or a developer running active projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl border flex flex-col justify-between relative transition-all ${
                pkg.highlight
                  ? "bg-white border-2 border-[#2258FF] shadow-[0_15px_40px_rgba(34,88,255,0.12)] scale-[1.02]"
                  : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#2258FF] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#2258FF] mb-1">
                  {pkg.name}
                </div>
                <div className="text-xs text-slate-500 mb-2">{pkg.bestFor}</div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono mb-1">
                  {pkg.price}
                </div>
                <div className="text-[11px] text-slate-400 mb-4">{pkg.period}</div>
                <p className="text-xs text-slate-600 mb-5 pb-5 border-b border-slate-100 leading-relaxed">
                  {pkg.desc}
                </p>

                <div className="space-y-2.5 mb-6">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-[#2258FF] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openAudit(`Web Design: ${pkg.name}`)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.highlight
                    ? "bg-[#2258FF] hover:bg-[#1442e6] text-white shadow-md shadow-[#2258FF]/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                <span>Select Package</span>
                <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

        {/* Audit & Care Plan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900">Website Audit (One-Time)</h4>
              <p className="text-xs text-slate-600 mt-1">Full conversion, speed, and mobile-experience audit with a prioritized fix list.</p>
              <div className="text-[#2258FF] font-mono font-bold text-lg mt-2">₦150,000 – ₦350,000</div>
            </div>
            <button
              onClick={() => openAudit("One-Time Website Audit")}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all cursor-pointer flex-shrink-0 ml-4"
            >
              Request Audit
            </button>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-slate-900">Ongoing Care Plan (Monthly, Optional)</h4>
              <p className="text-xs text-slate-600 mt-1">Hosting, updates, listing refreshes, and conversion monitoring after launch.</p>
              <div className="text-amber-600 font-mono font-bold text-lg mt-2">₦50,000 – ₦150,000/mo</div>
            </div>
            <button
              onClick={() => openAudit("Ongoing Care Plan")}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-all cursor-pointer flex-shrink-0 ml-4"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROCESS WALKTHROUGH
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Real Estate Web Design Process
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            From lead-flow architecture to launch day and continuous conversion refinement:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProcess.map((step, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#2258FF] flex items-center justify-center font-mono font-black text-sm">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE CHYWEB
      ========================================================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center space-y-3 max-w-xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Choose ChyWeb Academy
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            What actually separates us from generic web design agencies:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-[#2258FF] font-bold text-sm sm:text-base">
                <CheckCircle2 size={17} className="flex-shrink-0 text-emerald-500" />
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
          WHAT A PROPERLY BUILT SITE MEANS
      ========================================================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 space-y-4 text-center shadow-sm">
          <h3 className="text-2xl font-black text-slate-900">
            What a Properly Built Real Estate Website Can Mean for You
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            The gap between an average real estate website (around 2.9% conversion) and a well-optimized one (5.6% or higher) roughly doubles the number of qualified inquiries your existing traffic already generates, without spending a single additional naira on ads. Pair that with faster response times enabled by proper lead notification systems, and the compounding effect on actual closed deals becomes significant.
          </p>
          <p className="text-[11px] text-slate-400 italic">
            (Note: the conversion benchmarks above reflect global real estate industry data, since Nigeria-specific website conversion studies are limited. The underlying principles—speed, mobile experience, and frictionless lead capture—apply directly to the Nigerian market regardless.)
          </p>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION
      ========================================================================= */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-200">
        <FaqSection
          title="Frequently Asked Questions: Real Estate Web Designer in Nigeria"
          subtitle="Clear answers on build timelines, CRM integration, mobile loading speeds, and inquiry conversion."
          faqs={faqs}
        />
      </section>

      {/* =========================================================================
          FINAL CTA BANNER
      ========================================================================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#0a1e64] via-[#1040e6] to-[#2258FF] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 text-center relative z-10 shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black !text-white tracking-tight">
            Stop Losing Leads to a Website Working Against You
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
            Every day your site loads slowly, buries your contact form, or fails to notify you the moment a lead comes in, you&apos;re losing inquiries to a competitor with a faster, smoother experience, or simply losing the leads you already paid to attract. Let&apos;s fix that.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openAudit("Real Estate Free Website Audit")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer"
            >
              Get a Free Website Audit →
            </button>
            <button
              onClick={() => openAudit("Book a Design Consultation")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/15 hover:bg-white/20 text-white font-bold text-sm border border-white/25 transition-all cursor-pointer"
            >
              Book a Design Consultation →
            </button>
          </div>

          <p className="text-[11px] text-white/70">
            Free audit • Zero obligation • Tailored real estate recommendations
          </p>
        </div>
      </section>

      {/* Cluster Nav */}
      <RealEstateClusterNav
        currentPath="/real-estate-web-designer-nigeria"
        onOpenAuditModal={openAudit}
      />

      {/* Mobile Sticky Bar */}
      <RealEstateMobileStickyBar onOpenAudit={() => openAudit("Mobile CTA")} ctaText="Free Website Audit" />

      {/* Audit Modal */}
      <RealEstateAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalService}
        defaultPipelineStage="Real Estate Brokerage / Agency Listings"
      />
    </div>
  );
}
