"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  Search,
  Bot,
  Layers,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  Smartphone,
  Tag,
  BarChart2,
  Store,
  DollarSign,
  Package,
  Zap,
  Globe,
  Database,
  Cpu,
  Clock,
  Compass,
  Flame,
  CheckCheck,
  Shirt,
  Sparkle,
  Tv,
  Sofa,
  ShoppingCart,
  Gem,
  Baby,
  Wrench,
  Dumbbell,
  Heart,
  Utensils,
  ChevronRight,
  Check,
  Award,
  Sliders,
  Calculator,
  XCircle,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import EcommerceAuditModal from "@/components/EcommerceAuditModal";
import EcommerceMobileStickyBar from "@/components/EcommerceMobileStickyBar";

export default function EcommerceSeoAgencyClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState("Beauty & Skincare");

  // Interactive AI Simulator State
  const [simNiche, setSimNiche] = useState<"beauty" | "phones" | "fashion">("beauty");

  // Interactive ROI Calculator State
  const [monthlyAdSpend, setMonthlyAdSpend] = useState<number>(750000);
  const [aov, setAov] = useState<number>(35000);

  // Industry Filter State
  const [selectedIndustryCategory, setSelectedIndustryCategory] = useState<string>("all");

  // Audit Deliverables Tabs State
  const [activeAuditTab, setActiveAuditTab] = useState<"merchant" | "schema" | "speed" | "keywords">("merchant");

  const openAudit = (category = "Beauty & Skincare") => {
    setModalCategory(category);
    setIsModalOpen(true);
  };

  // Calculator computations
  const annualAdSpend = monthlyAdSpend * 12;
  const estimatedOrganicShare = 0.35; // 35% replaced by organic search
  const annualSavings = Math.round(annualAdSpend * estimatedOrganicShare);
  const monthlyOrganicOrders = Math.max(12, Math.round((monthlyAdSpend * 0.4) / (aov * 0.6)));

  const specializedIndustries = [
    {
      id: "fashion",
      icon: <Shirt size={20} className="text-[#2258FF]" />,
      title: "Fashion and Clothing",
      desc: "Sizing-specific searches, trend-driven content, and seasonal collection optimization.",
      tag: "Seasonal Collections",
      searchQuery: "\"affordable modest corporate gowns in Lagos size 14\"",
    },
    {
      id: "beauty",
      icon: <Sparkle size={20} className="text-pink-500" />,
      title: "Beauty and Skincare",
      desc: "Ingredient-focused search intent, routine-based content, and review-heavy trust signals.",
      tag: "Ingredient SEO",
      searchQuery: "\"best niacinamide serum for hyperpigmentation Nigeria\"",
    },
    {
      id: "phones",
      icon: <Tv size={20} className="text-indigo-500" />,
      title: "Phones and Electronics",
      desc: "Spec-driven comparison content and high-competition keyword strategy.",
      tag: "Spec Comparison",
      searchQuery: "\"original Samsung S24 Ultra warranty price in Computer Village\"",
    },
    {
      id: "furniture",
      icon: <Sofa size={20} className="text-amber-500" />,
      title: "Furniture and Home Products",
      desc: "Visual-first category pages and local delivery/logistics-aware content.",
      tag: "Logistics Aware",
      searchQuery: "\"modern 6-seater dining table with Lagos doorstep delivery\"",
    },
    {
      id: "supermarket",
      icon: <ShoppingCart size={20} className="text-emerald-500" />,
      title: "Supermarket and Grocery",
      desc: "High-frequency repeat-purchase SEO and subscription/reorder optimization.",
      tag: "Repeat Orders",
      searchQuery: "\"wholesale organic brown rice delivery Ikeja\"",
    },
    {
      id: "jewelry",
      icon: <Gem size={20} className="text-purple-500" />,
      title: "Jewelry and Accessories",
      desc: "Gift-intent and occasion-based search targeting.",
      tag: "Gift Intent",
      searchQuery: "\"18k gold engagement rings under ₦400k in Nigeria\"",
    },
    {
      id: "baby",
      icon: <Baby size={20} className="text-rose-400" />,
      title: "Baby and Maternity Products",
      desc: "Trust and safety-focused content, parent-community search behavior.",
      tag: "Safety & Trust",
      searchQuery: "\"hospital bag essentials kit delivery Lagos newborn\"",
    },
    {
      id: "auto",
      icon: <Wrench size={20} className="text-blue-600" />,
      title: "Auto Parts",
      desc: "Highly technical, model-specific keyword matching and fitment accuracy.",
      tag: "Model-Specific",
      searchQuery: "\"Toyota Corolla 2018 genuine front brake pads price Ladipo\"",
    },
    {
      id: "fitness",
      icon: <Dumbbell size={20} className="text-teal-500" />,
      title: "Fitness Products",
      desc: "Goal-based content (weight loss, muscle gain, home gym) and routine-driven buying guides.",
      tag: "Goal Driven",
      searchQuery: "\"best adjustable dumbbells set for home workout Nigeria\"",
    },
    {
      id: "health",
      icon: <Heart size={20} className="text-red-500" />,
      title: "Health and Beauty",
      desc: "Combines wellness search intent with beauty-specific buying patterns.",
      tag: "Wellness Intent",
      searchQuery: "\"organic sea moss gel benefits and where to buy Nigeria\"",
    },
    {
      id: "food",
      icon: <Utensils size={20} className="text-amber-600" />,
      title: "Food and Grocery",
      desc: "Freshness, delivery-radius, and repeat-order optimization.",
      tag: "Delivery Radius",
      searchQuery: "\"fresh boneless beef delivery Lagos same day order\"",
    },
  ];

  const filteredIndustries =
    selectedIndustryCategory === "all"
      ? specializedIndustries
      : specializedIndustries.filter((ind) => ind.id === selectedIndustryCategory);

  const services = [
    {
      num: "01",
      title: "Ecommerce Keyword Research",
      desc: "We map buying-intent keywords across every product category, factoring in how Nigerians actually search, including pidgin phrasing and price-conscious terms like 'affordable' and 'cheap,' alongside the longer, conversational phrasing that AI search queries tend to use.",
      badge: "Pidgin & Buying Intent",
    },
    {
      num: "02",
      title: "Ecommerce Technical SEO",
      desc: "Site speed, crawlability, duplicate content fixes across product variants, and structured data implementation, engineered for catalogs with hundreds or thousands of pages, and built mobile-first given that over 82% of Nigerian online orders happen on a phone.",
      badge: "Mobile-First 82%",
    },
    {
      num: "03",
      title: "Ecommerce Category Page Optimization",
      desc: "Your category pages are often the first thing a shopper lands on from a broad search, and the most overlooked pages on most ecommerce sites. We build clear category structures, optimized filtering, unique descriptive content above the fold, and internal linking that helps both shoppers and AI crawlers understand exactly what's inside each category.",
      badge: "Above-The-Fold Architecture",
    },
    {
      num: "04",
      title: "Ecommerce Product Page Optimization",
      desc: "Unique product titles and descriptions instead of copied manufacturer text, optimized image alt text, clear pricing and availability, genuine review integration, and answer-first content blocks structured for both Google snippets and AI Overview extraction on the pages that actually convert.",
      badge: "Answer-First PDPs",
    },
    {
      num: "05",
      title: "Ecommerce On-Page SEO",
      desc: "The connective tissue across your whole site: internal linking between related products and categories, header structure, metadata, and content hierarchy built to reinforce topical authority sitewide, not just on individual pages.",
      badge: "Sitewide Authority",
    },
    {
      num: "06",
      title: "Ecommerce Content and Blog Strategy",
      desc: "Buying guides, comparison content, and how-to articles built around real shopping questions your customers are already asking, the exact format AI systems favor when deciding what to cite, and the content that builds the topical depth a single product page never can on its own.",
      badge: "AI Citable Guides",
    },
    {
      num: "07",
      title: "Google Merchant Center and Shopping Optimization",
      desc: "Properly structured product feeds, accurate categorization, optimized titles and images for Google Shopping listings, and ongoing feed health monitoring, so your products actually show up in Shopping results instead of getting silently suppressed by feed errors.",
      badge: "Merchant Center Health",
    },
    {
      num: "08",
      title: "Ecommerce AEO (Answer Engine Optimization)",
      desc: (
        <>
          Structuring product and content pages to directly answer real shopping questions in a clear, extractable format, backed by the same entity SEO and schema work covered in our detailed guide on{" "}
          <a
            href="https://chyweb.com.ng/blog/best-aeo-agency-in-nigeria-2026-guide-to-ai-search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2258FF] font-bold underline hover:text-[#1040e6]"
          >
            what Answer Engine Optimization actually involves
          </a>
          , so your products get cited when a shopper asks an AI assistant directly for a recommendation.
        </>
      ),
      badge: "ChatGPT Direct Citations",
    },
    {
      num: "09",
      title: "Ecommerce GEO (Generative Engine Optimization)",
      desc: (
        <>
          Building genuinely comprehensive, well-organized product and category content that AI systems can summarize accurately when generating broader comparisons across stores — the same discipline behind our work in{" "}
          <a
            href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2258FF] font-bold underline hover:text-[#1040e6]"
          >
            AI-powered SEO
          </a>
          , applied specifically to how your store gets represented in AI-generated shopping comparisons.
        </>
      ),
      badge: "AI Overview Comparisons",
    },
    {
      num: "10",
      title: "Ecommerce Backlink Building",
      desc: "Earned backlinks from relevant Nigerian publications and industry sites, digital PR, and directory consistency, all feeding the entity trust that both Google and AI systems weigh when deciding whether to rank or cite your store.",
      badge: "Authority & PR",
    },
    {
      num: "11",
      title: "Ecommerce SEO Audit",
      desc: "A full technical, content, and AI-visibility audit that shows exactly how your store currently performs on Google and whether AI systems can find and reference you at all, with a prioritized roadmap, not just a list of problems.",
      badge: "Full Roadmap Audit",
    },
    {
      num: "12",
      title: "Ecommerce Analytics and Reporting",
      desc: "Monthly reporting on organic traffic, keyword movement, category and product page performance, and AI referral traffic, not vanity metrics that don't connect to actual sales.",
      badge: "Revenue & AI Attribution",
    },
  ];

  const pricingPackages = [
    {
      service: "One-Time SEO Audit",
      price: "₦150,000 – ₦600,000+",
      period: "one-off (higher for large product catalogs)",
      desc: "Technical, content, and AI-visibility teardown providing a prioritized revenue roadmap with clear action steps—not a confusing automated PDF export.",
      features: [
        "Full technical crawl & site speed diagnosis",
        "Google Merchant Center feed error inspection",
        "Product & category schema markup validation",
        "ChatGPT & AI Overview entity citation test",
        "Prioritized engineering fix roadmap",
      ],
      highlight: false,
    },
    {
      service: "Entry-Level / Small Store Retainer",
      price: "₦250,000 – ₦500,000",
      period: "monthly retainer",
      desc: "Perfect for emerging Nigerian brands and single-category boutiques looking to build initial organic search revenue and product schema.",
      features: [
        "Up to 250 product SKUs monitored",
        "Core keyword mapping & Pidgin search terms",
        "Product page metadata & alt tag optimization",
        "Basic Merchant Center feed optimization",
        "Monthly organic traffic & sales reporting",
      ],
      highlight: false,
    },
    {
      service: "Mid-Tier Ecommerce Retainer",
      price: "₦400,000 – ₦1,000,000",
      period: "monthly retainer",
      desc: "Our core strategy uniting Google Shopping, category architecture, ChatGPT citations, and AI Overviews for stores with 100 to 2,000 SKUs.",
      features: [
        "Full Tri-Channel SEO (Google, AEO, and GEO)",
        "Active Google Merchant Center feed maintenance",
        "Deep category page content & filter architecture",
        "High-intent buying guide content production",
        "AI assistant recommendation structuring",
        "Dedicated monthly revenue & attribution reviews",
      ],
      highlight: true,
      tag: "Most Popular for Scaling Stores",
    },
    {
      service: "Competitive / Enterprise Ecommerce Campaign",
      price: "₦1,000,000 – ₦2,500,000+",
      period: "monthly retainer",
      desc: "Full-scale search domination for high-volume catalogs, nationwide retail brands, and multi-category retail platforms.",
      features: [
        "Unlimited SKUs & multi-category architecture",
        "Advanced programmatic SEO & variant deduplication",
        "Digital PR & authority tier-1 Nigerian backlinks",
        "Custom AEO/GEO entity graph building",
        "Bi-weekly executive sprint calls & direct Slack/WhatsApp desk",
      ],
      highlight: false,
    },
    {
      service: "Local SEO Add-On (GBP & Map Pack)",
      price: "₦80,000 – ₦250,000",
      period: "setup, plus modest monthly fee",
      desc: "Optimizes your physical retail showrooms and pickup centers for local 'near me' shopping searches and Google Maps placement.",
      features: [
        "Google Business Profile setup & store verification",
        "Local inventory ads (LIA) schema integration",
        "Map pack citations across Lagos, Abuja, PH",
        "Review generation architecture for in-store shoppers",
      ],
      highlight: false,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Full Audit",
      desc: "Technical, content, and AI-visibility review of your current store, including how (or whether) AI systems currently reference you.",
      badge: "Diagnostics",
      output: "Prioritized Issue & Opportunity Map",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "A prioritized roadmap specific to your catalog, competitors, and category, covering Google, AEO, and GEO together.",
      badge: "Tri-Channel Plan",
      output: "Category Keyword & Entity Blueprint",
    },
    {
      step: "03",
      title: "Execution",
      desc: "Keyword research, technical fixes, category and product page optimization, and off-page authority building rolled out in a structured order.",
      badge: "Implementation",
      output: "Live Code, Feeds & On-Page Updates",
    },
    {
      step: "04",
      title: "AI Search Optimization",
      desc: "Content and schema built specifically for AI extraction and accurate summarization, not just traditional ranking.",
      badge: "AEO / GEO Depth",
      output: "ChatGPT & AI Overview Citations",
    },
    {
      step: "05",
      title: "Monthly Reporting",
      desc: "Clear reporting against agreed KPIs across Google performance and AI referral traffic, not disconnected reports that don't tell you the full picture.",
      badge: "Attribution",
      output: "Net Organic Sales & Revenue Growth",
    },
  ];

  const faqs = [
    {
      question: "What's the best SEO agency for ecommerce in Nigeria?",
      answer:
        "The strongest indicator is whether an agency covers both traditional Google SEO and AI search visibility (AEO and GEO, with real, verifiable evidence across each, not just keyword ranking screenshots. This is exactly what we specialize in.",
    },
    {
      question: "What's the difference between AEO and GEO for an ecommerce store?",
      answer:
        "AEO focuses on getting your content directly cited as the answer when a shopper asks an AI assistant a specific question. GEO focuses on how your store gets represented when AI systems generate a broader comparison or summary across multiple options, where the shopper may never click through to any individual site.",
    },
    {
      question: "Do you work with ecommerce stores outside your specialty industries?",
      answer:
        "Yes, while fashion, beauty, electronics, furniture, grocery, jewelry, baby products, auto parts, fitness, and local specialty stores are where we have the deepest category-specific experience, the core framework, technical SEO, AEO, and GEO applies across any ecommerce vertical.",
    },
    {
      question: "How long before I see results?",
      answer:
        "Technical and on-page fixes can show movement in Google rankings within weeks. AI search visibility, AEO, and GEO citations typically take 3 to 6 months of consistent, structured work to build real traction.",
    },
    {
      question: "How much does ecommerce SEO cost in Nigeria?",
      answer:
        "Most businesses invest between ₦ 300,000 and ₦1,000,000 monthly depending on catalog size and competitiveness, with one-off audits ranging from ₦150,000 to ₦600,000.",
    },
    {
      question: "Can you help us get cited by AI shopping assistants like ChatGPT?",
      answer:
        "Yes, this is a core part of our ecommerce SEO strategy, structuring buying-guide and product content specifically to be extractable, trustworthy, and accurately summarized when shoppers ask AI assistants for recommendations or comparisons.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 font-sans selection:bg-[#2258FF] selection:text-white pb-16 md:pb-0">
      {/* =========================================================================
          HERO SECTION: SINGLE-COLUMN LUXURY ARCHITECTURE
      ========================================================================= */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#F2EFE9] via-[#FAF9F5] to-[#FDFBF7] border-b border-slate-200/80">
        {/* Architectural Grid & Ambient Aura */}
        <div className="absolute inset-0 bg-[radial-gradient(#2258FF_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#2258FF]/15 to-amber-300/15 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Eyebrow Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm text-slate-800 text-xs font-black uppercase tracking-wider mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2258FF] animate-ping" />
            <span className="text-[#2258FF]">Ecommerce SEO Agency in Nigeria</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-bold">Google Shopping • AEO AI Answers • GEO Engine</span>
          </div>

          {/* Centered H1 Main Keyword Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-[1.12] mb-3 max-w-3xl mx-auto">
            Ecommerce SEO Agency{" "}
            <span className="relative inline-block text-[#2258FF]">
              in Nigeria
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-3 text-amber-400"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q50 0 100 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* H2 Value Subheadline */}
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-slate-800 mb-6">
            We Get Your Products Found on Google, ChatGPT &amp; AI Search
          </h2>

          {/* Subtitle & Value Proposition */}
          <p className="text-slate-800 text-lg sm:text-xl lg:text-[22px] leading-snug mb-6 font-bold max-w-3xl mx-auto">
            Nigeria's ecommerce SEO agency, built for Google, AEO, and GEO, not just rankings.
          </p>

          {/* Centered Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-4">
            <button
              onClick={() => openAudit()}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1442e6] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_14px_34px_rgba(34,88,255,0.36)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(34,88,255,0.45)] flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Book a Free SEO Audit →</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20a%20free%20ecommerce%20SEO%20audit%20for%20my%20store."
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
            Free store audit. No obligation.
          </div>

          {/* Floating Revenue Proof Pill */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs sm:text-sm font-semibold text-slate-800 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>
              Nigeria ranks <strong>4th globally in AI-assisted shopping</strong>. Mobile drives <strong>82% of online orders</strong>. Is your store built for either?
            </span>
          </div>

          {/* Micro-Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold mb-12">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Smartphone size={16} className="text-[#2258FF]" />
              <span>82%+ Mobile-Driven Orders</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Bot size={16} className="text-emerald-500" />
              <span>#4 Globally in AI Shopping Adoption</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/90 shadow-xs">
              <Sparkles size={16} className="text-amber-500" />
              <span>Google Shopping &amp; AEO Extraction</span>
            </div>
          </div>
        </div>

        {/* Centered Single-Column Visual Showcase */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-[32px] overflow-hidden shadow-[0_25px_65px_rgba(34,88,255,0.18)] border-4 border-white/90 relative group bg-[#1040E6]">
            {/* High-End App/Browser Control Bar */}
            <div className="bg-[#2258FF] px-4 sm:px-6 py-3 border-b border-white/20 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="px-4 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono border border-white/15 flex items-center gap-2">
                <Globe size={12} className="text-emerald-300" />
                <span>ecommerce-seo.chyweb.com.ng/live-shopping-feed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold">
                  LIVE 2026
                </span>
              </div>
            </div>

            {/* Showcase Image Display */}
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
              <Image
                src="/images/ecommerce_real_checkout.jpg"
                alt="Real customer completing online ecommerce order checkout with debit card and mobile device"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/15 to-transparent pointer-events-none" />

              {/* Floating Live Badge Overlay 1 */}
              <div className="absolute top-6 left-6 p-3 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    ChatGPT Recommendation
                  </div>
                  <div className="text-xs sm:text-sm font-black text-slate-900">
                    Direct Store Citation (#1 Verified)
                  </div>
                </div>
              </div>

              {/* Floating Live Badge Overlay 2 */}
              <div className="absolute bottom-6 right-6 p-3 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center font-black">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    Google Shopping CTR
                  </div>
                  <div className="text-xs sm:text-sm font-black text-slate-900">
                    +342% Organic Orders
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Performance Metrics Bar */}
            <div className="bg-white/95 backdrop-blur-md p-4 sm:p-6 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Mobile Share</div>
                <div className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">82% Orders</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">AI Global Rank</div>
                <div className="text-lg sm:text-xl font-black text-[#2258FF] mt-0.5">#4 in Shopping</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Page Load Target</div>
                <div className="text-lg sm:text-xl font-black text-emerald-600 mt-0.5">0.65s LCP</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Indexed Channels</div>
                <div className="text-lg sm:text-xl font-black text-amber-600 mt-0.5">Google + AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE AI CONSUMER DISCOVERY SHIFT SECTION (BELOW HERO)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF9F5] via-white to-[#FDFBF7] border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Background Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2258FF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-[32px] sm:rounded-[40px] bg-white border-2 border-[#2258FF]/20 shadow-[0_20px_60px_rgba(34,88,255,0.08)] p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2258FF] via-indigo-500 to-amber-400" />

            {/* Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider">
                <Bot size={15} />
                <span>The AI Consumer Discovery Shift</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Consumer Behavior • 2026 Reality
              </span>
            </div>

            {/* Featured Quote / Key Insight Box */}
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 leading-tight mb-6 tracking-tight">
                How Modern Nigerian Shoppers Actually Find Products Now
              </h2>

              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-amber-50/30 border border-blue-100/90 relative">
                <p className="text-slate-800 text-lg sm:text-xl lg:text-[23px] font-bold leading-relaxed">
                  &ldquo;A growing share of your customers are already asking ChatGPT and Google&apos;s AI Overview <span className="text-[#2258FF] underline decoration-amber-400 decoration-2">&ldquo;what&apos;s the best [product] in Nigeria&rdquo;</span> before they ever type a normal search. If your store isn&apos;t structured for that, you&apos;re invisible in the majority of places customers are actually looking, no matter how good your products are.&rdquo;
                </p>
              </div>
            </div>

            {/* 3 Interactive Pillars of This Shift */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-slate-100">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-xl bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center font-black text-xs mb-3">
                  01
                </div>
                <strong className="text-sm font-black text-slate-900 block mb-1.5">
                  The Zero-Click AI Habit
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shoppers ask natural, conversational questions instead of keyword fragments, getting direct answers without scrolling 10 blue links.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xs mb-3">
                  02
                </div>
                <strong className="text-sm font-black text-slate-900 block mb-1.5">
                  Schema-First Citations
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  AI engines only quote stores with machine-readable Product, Offer, and Review schema—ignoring unformatted text and flashy banners.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-xs mb-3">
                  03
                </div>
                <strong className="text-sm font-black text-slate-900 block mb-1.5">
                  Silent Competitor Takeover
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  When your store isn&apos;t citable, AI defaults to recommending your competitors who have structured data in place.
                </p>
              </div>
            </div>

            {/* Bottom Diagnostic Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold text-center sm:text-left">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Find out if ChatGPT &amp; Google AI Overviews currently recommend your store or your competitors.</span>
              </div>
              <button
                onClick={() => openAudit()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:-translate-y-0.5 shrink-0"
              >
                <span>Check My Store AI Visibility (Free) →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          H2: YOU'RE INVISIBLE TO A GROWING SHARE OF YOUR CUSTOMERS RIGHT NOW
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Market Shift
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-tight">
            You're Invisible to a Growing Share of Your Customers Right Now
          </h2>
        </div>

        {/* The 3 Market Reality Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center shrink-0 font-black text-lg border border-[#2258FF]/20">
              $10.5B
            </div>
            <div>
              <strong className="text-base font-black text-slate-900 block mb-1">
                Market Value Surge
              </strong>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nigeria's ecommerce market is climbing from $9.35B to $10.49B in 2026.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-black text-lg border border-emerald-200">
              82%+
            </div>
            <div>
              <strong className="text-base font-black text-slate-900 block mb-1">
                Mobile-First Purchases
              </strong>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over 82% of all online orders across Nigeria happen directly on smartphones.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-black text-lg border border-amber-200">
              #4
            </div>
            <div>
              <strong className="text-base font-black text-slate-900 block mb-1">
                Global AI Shopping Rank
              </strong>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Nigeria ranks 4th worldwide in shoppers using AI to find products.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Copy */}
        <div className="max-w-4xl mx-auto text-slate-700 text-base sm:text-lg leading-relaxed space-y-5 mb-16 text-center sm:text-left">
          <p>
            Nigeria's ecommerce market is worth roughly $9.35 billion and climbing toward $10.49 billion in 2026, and how shoppers discover products is shifting fast. Mobile devices account for over 82% of all online orders, and Nigeria now ranks 4th globally in the use of AI in shopping, meaning a meaningful and growing share of your customers are already asking ChatGPT or Google's AI Overview <strong>&ldquo;what's the best [product] in Nigeria&rdquo;</strong> or <strong>&ldquo;where can I buy [product] online&rdquo;</strong> before they ever type a traditional search query at all.
          </p>
          <p>
            Most ecommerce sellers in Nigeria are still optimizing purely for Google rankings the way it worked five years ago: backlinks, keywords, on-page tweaks, and missing the AI search layer entirely. If your store isn't structured for AI systems to find, trust, and reference it, you're invisible in a channel that's already influencing purchase decisions right now, not years from now.
          </p>
        </div>

        {/* =========================================================================
            UPGRADE 1: INTERACTIVE AI SEARCH VISIBILITY SIMULATOR
        ========================================================================= */}
        <div className="max-w-5xl mx-auto mb-24 p-6 sm:p-10 rounded-[36px] bg-white border-2 border-slate-200/90 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-black text-xs uppercase tracking-wider mb-2 inline-flex items-center gap-1.5">
              <Bot size={13} />
              <span>Interactive Diagnostic</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              See How ChatGPT &amp; AI Search Treat Your Store
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              Select your category to test the difference between an unoptimized store vs. a store built with ChyWeb's Tri-Channel AEO &amp; GEO framework.
            </p>
          </div>

          {/* Category Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            <button
              onClick={() => setSimNiche("beauty")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                simNiche === "beauty"
                  ? "bg-[#2258FF] text-white shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              <Sparkle size={15} />
              <span>Beauty &amp; Skincare</span>
            </button>
            <button
              onClick={() => setSimNiche("phones")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                simNiche === "phones"
                  ? "bg-[#2258FF] text-white shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              <Smartphone size={15} />
              <span>Phones &amp; Electronics</span>
            </button>
            <button
              onClick={() => setSimNiche("fashion")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                simNiche === "fashion"
                  ? "bg-[#2258FF] text-white shadow-md"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              <Shirt size={15} />
              <span>Fashion &amp; Apparel</span>
            </button>
          </div>

          {/* Prompt Header Box */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center shrink-0">
              <MessageSquare size={16} />
            </div>
            <div className="text-xs sm:text-sm text-slate-700 font-mono">
              <span className="text-slate-400 font-bold">Shopper Prompt: </span>
              {simNiche === "beauty" && (
                <span className="text-slate-900 font-bold">
                  &ldquo;What is the best vitamin C serum for hyperpigmentation in Lagos under ₦20,000?&rdquo;
                </span>
              )}
              {simNiche === "phones" && (
                <span className="text-slate-900 font-bold">
                  &ldquo;Where can I buy original Samsung S24 Ultra with warranty in Nigeria online?&rdquo;
                </span>
              )}
              {simNiche === "fashion" && (
                <span className="text-slate-900 font-bold">
                  &ldquo;Where to buy affordable quality corporate gowns for women in Abuja with fast delivery?&rdquo;
                </span>
              )}
            </div>
          </div>

          {/* Dual Column AI Output Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ❌ Unoptimized Result */}
            <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-rose-700 font-black text-xs uppercase tracking-wider">
                    <XCircle size={16} />
                    <span>Without AEO / GEO (95% Stores)</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">
                    Zero Direct Clicks
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-rose-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans space-y-2">
                  <p>
                    &ldquo;Some popular global brands include The Ordinary and CeraVe. In Nigeria, you can check general marketplace websites like Jumia or Konga, or visit physical pharmacy chains.&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-400 italic">
                    • No specific Nigerian store cited<br />
                    • No Naira pricing or stock data<br />
                    • Customer redirected to generic platforms or foreign retailers
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-rose-200/60 text-xs font-bold text-rose-700 flex items-center gap-1.5">
                <span>Result: You lose the sale to international brands or third-party marketplaces.</span>
              </div>
            </div>

            {/* ✅ Optimized Result */}
            <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-black text-xs uppercase tracking-wider">
                    <CheckCircle2 size={16} />
                    <span>With ChyWeb Tri-Channel SEO</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    #1 Cited Source
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-emerald-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans space-y-2">
                  <p>
                    &ldquo;Based on verified reviews and real-time inventory, <strong>[Your Store Name]</strong> is the top-rated source for this item in Lagos:
                  </p>
                  <div className="p-3 rounded-lg bg-emerald-50/60 border border-emerald-200/70 text-xs font-medium space-y-1">
                    <div className="font-bold text-slate-900 flex justify-between items-center">
                      <span>✓ 20% Active Vitamin C Glow Formula</span>
                      <span className="text-emerald-700 font-black">₦18,500</span>
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-3">
                      <span>⭐ 4.9/5 (142 verified orders)</span>
                      <span>• Same-Day Dispatch Lagos</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#2258FF] font-bold flex items-center gap-1">
                    <ExternalLink size={12} />
                    <span>Direct shopping link provided inside AI answer</span>
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-200/60 text-xs font-bold text-emerald-700 flex items-center justify-between">
                <span>Result: High-intent buyer clicks directly to your checkout.</span>
                <button
                  onClick={() => openAudit(simNiche === "beauty" ? "Beauty & Skincare" : simNiche === "phones" ? "Phones & Electronics" : "Fashion & Clothing")}
                  className="text-xs text-[#2258FF] underline font-bold cursor-pointer"
                >
                  Structure My Store →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            WHAT MAKES US DIFFERENT FROM A GENERIC SEO AGENCY
        ========================================================================= */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-3 inline-block">
              Specialist Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              What Makes Us Different From a Generic SEO Agency
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Most SEO agencies in Nigeria apply the same playbook to an ecommerce store that they'd apply to a law firm's website. That doesn't work; ecommerce SEO is its own discipline, with its own technical demands, its own keyword behavior, and now, an entirely new layer most agencies haven't caught up to: getting cited and represented accurately inside AI-generated answers.
            </p>
          </div>

          {/* 3 Compounding Layers Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2258FF] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Search size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#2258FF] block mb-2">Layer 01</span>
                <strong className="text-lg font-black text-slate-900 block mb-2">
                  Traditional Google SEO
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mobile-first technical health, sub-second page speed, crawl budget optimization, and keyword mapping around buying intent terms like "affordable" and "cheap".
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-bold text-[#2258FF] flex items-center justify-between">
                <span>Category &amp; SKU Ranks</span>
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>
            </div>

            <div className="p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Bot size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block mb-2">Layer 02</span>
                <strong className="text-lg font-black text-slate-900 block mb-2">
                  AEO (Answer Engine Optimization)
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Structuring product pages with clear Q&amp;A blocks and Product schema so ChatGPT, Perplexity, and Gemini cite your store as the direct recommendation.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center justify-between">
                <span>Direct AI Quotations</span>
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>
            </div>

            <div className="p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-500 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Sparkles size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 block mb-2">Layer 03</span>
                <strong className="text-lg font-black text-slate-900 block mb-2">
                  GEO (Generative Engine Optimization)
                </strong>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Comprehensive product comparison depth ensuring AI Overviews accurately represent your pricing, warranty, and stock over competing stores.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 text-xs font-bold text-amber-600 flex items-center justify-between">
                <span>AI Overview Dominance</span>
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            ECOMMERCE INDUSTRIES WE SPECIALIZE IN (11 Categories + Interactive Filter)
        ========================================================================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-3 inline-block">
              Category Intelligence
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              Ecommerce Industries We Specialize In
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Generic ecommerce SEO advice misses the specific buying behavior, seasonal patterns, and search language unique to each product category. We build strategy around the categories where Nigerian ecommerce is actually growing:
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedIndustryCategory("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedIndustryCategory === "all"
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              All Categories (11)
            </button>
            {specializedIndustries.slice(0, 6).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedIndustryCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedIndustryCategory === cat.id
                    ? "bg-[#2258FF] text-white"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredIndustries.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#2258FF] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {ind.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {ind.tag}
                    </span>
                  </div>
                  <strong className="text-base font-black text-slate-900 block mb-1.5">{ind.title}</strong>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{ind.desc}</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-mono text-slate-600">
                  <span className="text-slate-400 font-bold block mb-0.5">Live Buying Intent Phrasing:</span>
                  <span className="text-slate-800 font-medium italic">{ind.searchQuery}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 text-center max-w-4xl mx-auto leading-relaxed">
            Each of these categories has its own buying language, seasonal rhythm, and AI search behavior, and we build keyword research, content strategy, and AEO/GEO optimization specifically around them rather than applying one generic ecommerce template across every store.
          </div>
        </div>

        {/* =========================================================================
            OUR ECOMMERCE SEO SERVICES IN NIGERIA (12 Detailed Pillars)
        ========================================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-3 inline-block">
              Full Spectrum Services
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              Our Ecommerce SEO Services in Nigeria
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Twelve specialized engineering disciplines tailored to turn casual product searchers into repeat paying buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#2258FF] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-black text-[#2258FF] bg-[#2258FF]/10 px-2.5 py-1 rounded-full">
                      {svc.badge}
                    </span>
                    <span className="text-xl font-black text-slate-300 font-mono">{svc.num}</span>
                  </div>
                  <strong className="text-base sm:text-lg font-black text-slate-900 block mb-2 leading-snug">
                    {svc.title}
                  </strong>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">{svc.desc}</div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span className="group-hover:text-[#2258FF] transition-colors">Specialist Implementation</span>
                  <CheckCircle2 size={16} className="text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            UPGRADE 2: META AD FATIGUE VS. COMPOUNDING SEO ROI CALCULATOR
        ========================================================================= */}
        <div className="mt-24 p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-white to-blue-50/40 border-2 border-[#2258FF]/20 shadow-xl max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3.5 py-1 rounded-full bg-blue-100 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-2 inline-flex items-center gap-1.5">
              <Calculator size={14} />
              <span>Ecommerce Margin Calculator</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Calculate Your Meta Ad Spend Replacement Savings
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              When CPMs spike on Instagram and TikTok, stores relying 100% on ads bleed profit. See how replacing just 35% of paid traffic with organic Google Shopping and AI citations compounds your store equity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Monthly Meta / TikTok Ad Spend:
                  </label>
                  <span className="text-base sm:text-lg font-black text-[#2258FF] font-mono">
                    ₦{monthlyAdSpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={200000}
                  max={3000000}
                  step={50000}
                  value={monthlyAdSpend}
                  onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                  className="w-full accent-[#2258FF] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>₦200k/mo</span>
                  <span>₦1.5M/mo</span>
                  <span>₦3.0M/mo</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Average Order Value (AOV):
                  </label>
                  <span className="text-base sm:text-lg font-black text-emerald-600 font-mono">
                    ₦{aov.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={120000}
                  step={5000}
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>₦10,000</span>
                  <span>₦60,000</span>
                  <span>₦120,000</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Summary Card */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-[#1040E6] text-white shadow-lg relative overflow-hidden">
              <div className="text-xs uppercase tracking-wider text-amber-300 font-black mb-1">
                Projected Annual ROI Impact
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono mb-4 text-white">
                ₦{annualSavings.toLocaleString()}
              </div>
              <div className="space-y-3 text-xs border-t border-white/20 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Free Organic Orders:</span>
                  <strong className="text-white font-mono text-sm">~{monthlyOrganicOrders} orders/mo</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Acquisition Cost:</span>
                  <strong className="text-emerald-300 font-mono text-sm">₦0 Ad Spend / Click</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Traffic Channel:</span>
                  <strong className="text-white">Google Shopping + AI Overviews</strong>
                </div>
              </div>

              <button
                onClick={() => openAudit()}
                className="w-full py-3.5 rounded-xl bg-white text-[#1040E6] hover:bg-slate-100 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Lock in This Growth Model →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR E-COMMERCE SEO SERVICE PROCESS (5 Stages)
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Scientific Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Our E-commerce SEO Service Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From technical storefront audit to multi-category Google Shopping and AI search recommendation dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl hover:bg-white hover:border-[#2258FF] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
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

              <div className="pt-4 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                <span>{step.output}</span>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            UPGRADE 3: VISUAL AUDIT DELIVERABLES TEARDOWN ("WHAT YOU RECEIVE")
        ========================================================================= */}
        <div className="max-w-5xl mx-auto p-8 rounded-[36px] bg-slate-50 border border-slate-200 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-2 inline-block">
              Deliverable Preview
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              What Your Free 48-Hour Store Audit Actually Delivers
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Not a vague automated PDF export. You receive an engineering teardown across 4 critical pillars:
            </p>
          </div>

          {/* 4 Interactive Deliverable Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveAuditTab("merchant")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeAuditTab === "merchant"
                  ? "bg-[#2258FF] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              1. Merchant Center Health
            </button>
            <button
              onClick={() => setActiveAuditTab("schema")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeAuditTab === "schema"
                  ? "bg-[#2258FF] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              2. Schema &amp; AI Extraction
            </button>
            <button
              onClick={() => setActiveAuditTab("speed")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeAuditTab === "speed"
                  ? "bg-[#2258FF] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              3. 0.8s Mobile Speed Vitals
            </button>
            <button
              onClick={() => setActiveAuditTab("keywords")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeAuditTab === "keywords"
                  ? "bg-[#2258FF] text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              4. 90-Day Keyword Blueprint
            </button>
          </div>

          {/* Tab Content Cards */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            {activeAuditTab === "merchant" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono font-bold text-[#2258FF] uppercase">Feed Diagnostics</span>
                  <h4 className="text-lg font-black text-slate-900 mt-1 mb-2">
                    Google Merchant Center Feed Disapproval &amp; Free Listing Audit
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Over 60% of Nigerian Shopify/WooCommerce stores have silent disapprovals on Google Merchant Center due to currency mismatch (NGN), missing GTIN barcodes, or invalid shipping policy tax data. We unblock your catalog so your items appear in free Google Shopping results.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Zero-click feed error diagnostics &amp; price synchronization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Free Google Shopping placement qualification check</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
                  <div className="text-slate-400 font-bold">// Sample Feed Audit Output</div>
                  <div className="text-emerald-600 font-bold">✓ 842 Active SKUs Inspected</div>
                  <div className="text-rose-500 font-bold">✗ 124 SKUs Suppressed (Missing GTIN/Shipping Policy)</div>
                  <div className="text-[#2258FF] font-bold">→ Estimated Free Shopping Traffic Recovery: +28%</div>
                </div>
              </div>
            )}

            {activeAuditTab === "schema" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 uppercase">AEO &amp; GEO Readiness</span>
                  <h4 className="text-lg font-black text-slate-900 mt-1 mb-2">
                    Product Schema &amp; AI Assistant Entity Extraction Test
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    ChatGPT, Perplexity, and Google AI Overviews cannot recommend your store if they cannot read your product entities. We test your JSON-LD Product, AggregateRating, Offer, and Brand schema in real-time.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Validation of Product &amp; Review Schema across all variant URLs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>AI Overview citation capability test for your top 10 products</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
                  <div className="text-slate-400 font-bold">// AI Entity Extraction Score</div>
                  <div className="text-amber-600 font-bold">⚠️ Current Score: 38/100 (Missing Product Schema)</div>
                  <div className="text-emerald-600 font-bold">✓ Target Score Post-Fix: 96/100</div>
                  <div className="text-slate-700">Result: Direct citations on ChatGPT &amp; Gemini shopping prompts</div>
                </div>
              </div>
            )}

            {activeAuditTab === "speed" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 uppercase">Mobile Core Web Vitals</span>
                  <h4 className="text-lg font-black text-slate-900 mt-1 mb-2">
                    0.8s Mobile Checkout Speed &amp; Variant Freeze Diagnostics
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Since 82% of Nigerian online orders occur on mobile phones, every 1-second delay in variant loading or checkout increases cart abandonment by 16%. We analyze unoptimized app scripts and heavy image assets.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) check</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Mobile checkout bottleneck teardown for Nigerian networks</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
                  <div className="text-slate-400 font-bold">// Mobile Performance Benchmark</div>
                  <div className="text-rose-500 font-bold">Current Speed: 4.8s (High Cart Dropoff)</div>
                  <div className="text-emerald-600 font-bold">ChyWeb Optimized Target: 0.65s (Sub-Second)</div>
                  <div className="text-slate-700">Conversion Impact: +22% completed checkouts</div>
                </div>
              </div>
            )}

            {activeAuditTab === "keywords" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-600 uppercase">Localized Intent</span>
                  <h4 className="text-lg font-black text-slate-900 mt-1 mb-2">
                    90-Day High-Intent Nigerian Keyword Roadmap
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    We map the real commercial keywords your buyers use, including pidgin terms, city-specific terms (Lagos, Abuja, Port Harcourt), and bargain phrasing (&ldquo;affordable&rdquo;, &ldquo;cheap wholesale&rdquo;) that convert immediately.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Top 50 high-converting transactional queries mapped to categories</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span>Competitor keyword gap analysis showing where rivals make sales</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-2">
                  <div className="text-slate-400 font-bold">// Strategic Buying Keywords</div>
                  <div className="text-slate-800">&bull; &ldquo;best [product] price in Lagos&rdquo; (Transactional)</div>
                  <div className="text-slate-800">&bull; &ldquo;where can I buy [product] online Nigeria&rdquo; (AEO)</div>
                  <div className="text-emerald-600 font-bold">→ 90-Day Target: Rank #1-3 across 15 core category collections</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Audit Callout Bar */}
        <div className="p-6 sm:p-7 rounded-2xl bg-blue-50/50 border border-blue-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong className="text-sm font-black text-slate-900 block">
                Free Technical &amp; AI Store Visibility Teardown
              </strong>
              <span className="text-xs text-slate-600">
                Claim a complimentary audit of your product feeds, mobile site speed, and live ChatGPT entity citation status.
              </span>
            </div>
          </div>
          <button
            onClick={() => openAudit()}
            className="px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-xs transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <span>Book a Free SEO Audit →</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          OUR ECOMMERCE SEO PRICING PACKAGES
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-black text-xs uppercase tracking-wider mb-4 inline-block">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight">
            Our Ecommerce SEO Pricing Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            SEO pricing in Nigeria varies by catalog size and competitiveness. Here is a realistic breakdown based on current market rates:
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {pricingPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 transition-all flex flex-col justify-between relative ${
                pkg.highlight
                  ? "bg-white border-2 border-[#2258FF] shadow-[0_20px_50px_rgba(34,88,255,0.16)] ring-4 ring-[#2258FF]/10"
                  : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
              }`}
            >
              {pkg.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#2258FF] text-white text-[10px] font-black tracking-wider uppercase whitespace-nowrap shadow-sm">
                  {pkg.tag}
                </span>
              )}

              <div>
                <strong className="text-sm font-black text-slate-900 block mb-2 min-h-[40px] leading-snug">
                  {pkg.service}
                </strong>

                <div className="mb-4">
                  <div className="text-lg sm:text-xl font-black text-[#2258FF] font-mono leading-tight">
                    {pkg.price}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium block mt-0.5">{pkg.period}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 border-t border-slate-100 pt-3 min-h-[65px]">
                  {pkg.desc}
                </p>

                <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-tight">
                      <Check size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => openAudit(pkg.service)}
                className={`w-full py-3.5 rounded-xl font-black text-xs transition-all cursor-pointer ${
                  pkg.highlight
                    ? "bg-[#2258FF] hover:bg-[#1240e3] text-white shadow-lg"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                Choose {pkg.service}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY CHYWEB ACADEMY AS YOUR ECOMMERCE SEO AGENCY IN NIGERIA
      ========================================================================= */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            Commerce Authority
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-5">
            Why ChyWeb Academy as Your Ecommerce SEO Agency in Nigeria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            We built our approach around the same framework behind our work in{" "}
            <a
              href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2258FF] font-bold underline hover:text-[#1040e6]"
            >
              AI-powered SEO
            </a>{" "}
            and answer engine optimization, applied specifically to Nigerian ecommerce, across the industries we specialize in. If you'd rather learn this deeply enough to run parts of it yourself, our{" "}
            <a
              href="https://chyweb.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2258FF] font-bold underline hover:text-[#1040e6]"
            >
              digital marketing training in Nigeria
            </a>{" "}
            covers the same fundamentals, or go deeper specifically on the technical side through our{" "}
            <Link href="/seo-training" className="text-[#2258FF] font-bold underline hover:text-[#1040e6]">
              SEO training in Nigeria
            </Link>{" "}
            program.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openAudit()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#2258FF] hover:bg-[#1240e3] text-white font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Free SEO Audit →</span>
            </button>
            <Link
              href="/seo-training"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore SEO Training in Nigeria →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION (6 Questions matching prompt)
      ========================================================================= */}
      <FaqSection
        faqs={faqs}
        title="Frequently Asked Questions: Ecommerce SEO Agency in Nigeria"
        subtitle="Clear, transparent answers on AI shopping citations, pricing, category specialization, and organic search timelines for Nigerian ecommerce stores."
        supportTitle="Have a specific question about your online store?"
        supportDesc="Our ecommerce SEO and AI search specialists respond within minutes on WhatsApp."
        whatsappMessage="Hello ChyWeb Academy, I have a question about your Ecommerce SEO and AI search services."
      />

      {/* =========================================================================
          FINAL CTA BANNER: STOP LOSING SALES TO COMPETITORS
      ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-2 border-[#2258FF]/30 text-white p-10 sm:p-16 lg:p-20 bg-gradient-to-br from-[#2258FF] via-[#1240e3] to-[#0a1e64]">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2258FF]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 font-black text-xs uppercase tracking-wider mb-6 inline-block">
              Immediate Growth Opportunity
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
              Stop Losing Sales to Competitors With Better Visibility, Not Better Products
            </h2>

            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Every day your store isn't optimized for Google and AI search, you're handing sales to a competitor who simply shows up first, whether that's in a search result or an AI-generated answer. Let's fix that.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openAudit()}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-[#1040E6] hover:bg-slate-100 font-black text-base shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free SEO Audit →</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20my%20ecommerce%20store%20search%20visibility."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-extrabold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <PhoneCall size={18} className="text-emerald-400" />
                <span>WhatsApp (0906 762 3555)</span>
              </a>
            </div>

            <p className="text-white/60 text-xs mt-6 font-medium">
              Free Store Architecture Audit • Google Merchant Health Check • No Obligation
            </p>
          </div>
        </div>
      </section>

      {/* Dedicated Ecommerce Audit Intake Modal */}
      <EcommerceAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCategory={modalCategory}
      />

      {/* Mobile-First Sticky Conversion Bar */}
      <EcommerceMobileStickyBar onOpenAuditModal={() => openAudit()} />
    </div>
  );
}
