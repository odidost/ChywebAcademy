"use client";

import { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import FaqSection from "@/components/FaqSection";
import DecorativeIcon from "@/components/DecorativeIcon";
import HospitalityAuditModal from "@/components/HospitalityAuditModal";
import GrandSlamOfferCard from "@/components/GrandSlamOfferCard";

export default function EcommerceSeoAgencyClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triChannels = [
    {
      title: "Jumia Marketplace SEO",
      icon: <Store className="text-amber-500" size={24} />,
      desc: "Used by 84% of Nigerian online shoppers. We optimize your product titles to capture high-intent buyers, structure rich attribute specs, optimize gallery images, and craft review-generation systems to dominate category search.",
      stat: "84% of Nigerian Shoppers",
    },
    {
      title: "Google Organic & Merchant SEO",
      icon: <Search className="text-[#2258FF]" size={24} />,
      desc: "Engineered mobile-first for a market where 82%+ of orders happen on a smartphone. We build semantic topic clusters, fix variant duplicate content, implement Product schema, and optimize for Nigerian buying intent terms like 'affordable' and 'cheap'.",
      stat: "82%+ Mobile Purchase Share",
    },
    {
      title: "AI Search & Shopping Overview (AEO)",
      icon: <Bot className="text-emerald-500" size={24} />,
      desc: "Nigeria ranks 4th globally in the use of AI for shopping. We structure product buying guides and comparison tables so ChatGPT, Gemini, and Google AI Overviews cite and recommend your store as the #1 authority.",
      stat: "#4 Globally in AI Shopping",
    },
  ];

  const services = [
    {
      title: "Ecommerce Keyword Research & Local Phrasing",
      desc: "We map high-intent transactional keywords factoring in how Nigerians actually search—including local pidgin phrasing and price-conscious modifiers like 'affordable' and 'cheap', not just formal catalog terms.",
    },
    {
      title: "Technical SEO for High-Volume Catalogs",
      desc: "Sub-second site speed, crawl budget optimization, faceted navigation filters, canonical tags across size/color variants, and mobile-first architecture for catalogs with hundreds or thousands of SKUs.",
    },
    {
      title: "High-Converting On-Page SEO",
      desc: "Compelling, benefit-rich product descriptions, structured comparison tables, compressed high-resolution imagery, internal link siloing, and FAQ blocks designed for AI extraction.",
    },
    {
      title: "Comprehensive Technical & AI Store Audit",
      desc: "An exhaustive technical, marketplace, and AI-visibility teardown providing a prioritized revenue roadmap with clear action steps—not a confusing automated PDF export.",
    },
    {
      title: "Off-Page Authority & Social Commerce",
      desc: "Earned editorial backlinks, digital PR in Nigerian business publications, directory consistency, and integration with high-velocity discovery venues like WhatsApp and Instagram.",
    },
    {
      title: "Analytics, Attribution & Sales Tracking",
      desc: "Monthly reports tracking organic revenue, Jumia sales movement, keyword rankings, and AI referral traffic so you see exactly how SEO converts into money in the bank.",
    },
  ];

  const pricingTable = [
    {
      service: "One-Time Technical & AI Store Audit",
      cost: "₦150,000 – ₦600,000+",
      desc: "Exhaustive review of technical health, Jumia visibility, keyword gaps, and AI citation potential.",
      badge: "One-Time",
    },
    {
      service: "Entry-Level / Boutique Store Retainer",
      cost: "₦150,000 – ₦400,000 / mo",
      desc: "Ideal for emerging Nigerian brands and single-category stores scaling initial organic sales.",
      badge: "Starter",
    },
    {
      service: "Mid-Tier Multi-Category Retainer",
      cost: "₦400,000 – ₦1,000,000 / mo",
      desc: "Comprehensive Jumia + Google SEO + AI search for catalogs with 100 to 2,000 SKUs.",
      badge: "Most Popular",
    },
    {
      service: "Competitive Enterprise Ecommerce Campaign",
      cost: "₦1,000,000 – ₦2,500,000+ / mo",
      desc: "Full-scale organic dominance for large marketplace sellers, major retail chains, and high-volume stores.",
      badge: "Enterprise",
    },
    {
      service: "Local SEO Add-On (Google Business Profile & Map Pack)",
      cost: "₦80,000 – ₦250,000 setup + modest monthly",
      desc: "Optimizes your physical retail outlets and showrooms for local 'near me' shopping searches.",
      badge: "Add-On",
    },
  ];

  const faqs = [
    {
      question: "What's the best SEO agency for ecommerce in Nigeria?",
      answer:
        "The strongest indicator is whether an agency covers all three discovery channels driving sales today in Nigeria: Jumia marketplace listing optimization, Google Organic SEO, and conversational AI search visibility (ChatGPT and Google AI Overviews), with verifiable evidence across each. This tri-channel strategy is our specialty.",
    },
    {
      question: "Do you work with businesses that only sell on Jumia, without their own website?",
      answer:
        "Yes! Marketplace SEO is a specialized discipline on its own. Product title algorithms, bullet point completeness, keyword density in backend attributes, and review generation strategy all directly impact your Jumia visibility and sales independently of an external website.",
    },
    {
      question: "How long before we see measurable ecommerce results?",
      answer:
        "Jumia marketplace listing improvements can yield sales spikes within weeks of optimization. Website technical SEO, Google organic ranking, and AI search citations typically require 3 to 6 months of structured work to build compounding, lasting revenue traction.",
    },
    {
      question: "How much does ecommerce SEO cost in Nigeria?",
      answer:
        "Most ecommerce stores invest between ₦150,000 and ₦1,000,000 monthly depending on catalog size and competitiveness, with one-off deep audits ranging between ₦150,000 and ₦600,000.",
    },
    {
      question: "Can you help our products get cited by AI shopping assistants like ChatGPT?",
      answer:
        "Yes! Structuring buying-guide content, Product schema, and question-and-answer comparison matrices specifically to be extractable and trusted by AI shopping assistants is a core component of our modern ecommerce SEO service.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] min-h-screen">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#2258FF]/5 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#EAEBE0] text-slate-800 rounded-b-[48px] overflow-hidden border-b border-slate-300/40 z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0" />
        <DecorativeIcon
          Icon={ShoppingBag}
          size="w-[38rem] h-[38rem]"
          position="absolute -right-24 -top-24"
          opacity="opacity-[0.03]"
          rotation="rotate-12"
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              Ecommerce SEO Agency in Nigeria
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.1] mb-6 text-slate-900">
              We Get Your Products Found on{" "}
              <span className="text-[#2258FF] underline decoration-[#2258FF]/30 underline-offset-8">
                Jumia, Google & AI Search
              </span>
            </h1>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6 font-medium max-w-2xl">
              Your products don't sell themselves if nobody can find them.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              As the leading ecommerce SEO agency in Nigeria, <strong>ChyWeb Academy</strong> builds visibility across every channel where Nigerian shoppers actually search: <strong>Jumia</strong>, <strong>Google</strong>, and increasingly <strong>ChatGPT and Google AI Overview</strong>—so your store stops competing on price alone and starts winning on unstoppable organic visibility.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-extrabold text-base shadow-[0_8px_24px_rgba(34,88,255,0.25)] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Free SEO Audit</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-200/80 border border-slate-300 text-slate-800 font-bold text-base hover:bg-slate-300/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Tag size={18} className="text-[#2258FF]" />
                <span>Request Free Store Audit</span>
              </button>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700 border-t border-slate-300/70 pt-6 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
                <span>Jumia 1st-Page Ranks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
                <span>82%+ Mobile Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#2258FF] flex-shrink-0" />
                <span>AI Shopping Recommendations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tri-Channel Marketplace Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="premium-bento-card p-6 sm:p-8 bg-white/95 shadow-2xl rounded-3xl border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold text-[#2258FF] uppercase tracking-wider">
                  The Nigerian Tri-Channel Engine
                </span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                  $10.49B Market
                </span>
              </div>

              {/* Jumia rank card */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                <div className="flex justify-between items-center">
                  <strong className="text-xs font-black text-amber-900">Jumia Seller #1 Best Seller</strong>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded">
                    Rank #1
                  </span>
                </div>
                <p className="text-[11px] text-amber-900/80">
                  Targeted title and spec optimization capturing 84% of Nigerian shoppers.
                </p>
              </div>

              {/* Google Shopping rank card */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-[#2258FF]/20 space-y-2">
                <div className="flex justify-between items-center">
                  <strong className="text-xs font-black text-slate-900">Google Organic & Merchant</strong>
                  <span className="text-[10px] font-bold text-[#2258FF] bg-blue-100 px-2 py-0.5 rounded">
                    Top 3 SERP
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Captures buying intent queries: 'affordable smart tv Lagos' and 'buy designer shoe Abuja'.
                </p>
              </div>

              {/* AI shopping card */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-2">
                <div className="flex justify-between items-center">
                  <strong className="text-xs font-black text-emerald-900">ChatGPT AI Shopping Recommendation</strong>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    #1 Cited
                  </span>
                </div>
                <p className="text-[11px] text-emerald-900/80">
                  "ChyWeb client store recommended for top durability and customer ratings in Nigeria."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Market Reality: You're Invisible */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            Market Shift
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
            You're Invisible to a Growing Share of Your Customers Right Now
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Nigeria's ecommerce market is worth roughly <strong>$9.35 billion and climbing toward $10.49 billion in 2026</strong>. It is splitting across more discovery channels than ever before. If your products aren't findable on Jumia, aren't ranking on Google, and aren't structured for AI systems to reference, you're invisible in the majority of places where money changes hands.
          </p>
        </div>

        {/* 4 Stats Bento */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-4xl font-black text-amber-500 mb-2">84%</div>
            <h3 className="text-sm font-extrabold text-slate-900 mb-1">Jumia Shopper Share</h3>
            <p className="text-xs text-slate-600">
              Jumia is used by 84% of Nigerian online shoppers and 83% of registered online businesses.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-4xl font-black text-[#2258FF] mb-2">82%+</div>
            <h3 className="text-sm font-extrabold text-slate-900 mb-1">Mobile Orders</h3>
            <p className="text-xs text-slate-600">
              Over 82% of all online orders in Nigeria are placed directly on a smartphone screen.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-4xl font-black text-emerald-600 mb-2">#4 Global</div>
            <h3 className="text-sm font-extrabold text-slate-900 mb-1">AI in Shopping</h3>
            <p className="text-xs text-slate-600">
              Nigeria now ranks 4th globally in consumer use of generative AI tools for shopping research.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-4xl font-black text-purple-600 mb-2">+28.4%</div>
            <h3 className="text-sm font-extrabold text-slate-900 mb-1">BNPL Adoption CAGR</h3>
            <p className="text-xs text-slate-600">
              Buy-now-pay-later adoption is growing rapidly and significantly lifts average order values.
            </p>
          </div>
        </div>

        {/* The Tri-Channel Framework Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {triChannels.map((tc, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                  {tc.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{tc.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{tc.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2258FF]">
                <span>{tc.stat}</span>
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-4 inline-block">
              Full-Stack Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Our Core Ecommerce SEO Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              We don't apply corporate brochure tactics to an online store. We engineer every touchpoint for transactional sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <strong className="text-base font-black text-slate-900 block mb-2">{srv.title}</strong>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Table */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            Transparent Market Rates
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Ecommerce SEO Services Cost in Nigeria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Realistic market breakdown based on catalog size, SKU volume, and competition.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 sm:p-5">Service Tier</th>
                  <th className="p-4 sm:p-5">Typical Cost (Naira)</th>
                  <th className="p-4 sm:p-5">Scope & Highlights</th>
                  <th className="p-4 sm:p-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {pricingTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 sm:p-5">
                      <strong className="text-slate-900 block">{item.service}</strong>
                      <span className="text-[10px] font-bold text-[#2258FF] bg-[#2258FF]/10 px-2 py-0.5 rounded-full inline-block mt-1">
                        {item.badge}
                      </span>
                    </td>
                    <td className="p-4 sm:p-5 font-black text-slate-900 text-sm sm:text-base whitespace-nowrap">
                      {item.cost}
                    </td>
                    <td className="p-4 sm:p-5 text-xs text-slate-600 max-w-sm">
                      {item.desc}
                    </td>
                    <td className="p-4 sm:p-5 text-right whitespace-nowrap">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                      >
                        Request Quote
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Grand Slam Offer */}
      <GrandSlamOfferCard
        onClaim={() => setIsModalOpen(true)}
        title="The Tri-Marketplace Ecommerce SEO Grand Slam System"
        badge="Alex Hormozi Ecommerce Stack"
      />

      {/* Internal Links */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            Why ChyWeb Academy
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
            Why Choose ChyWeb Academy as Your Ecommerce SEO Agency
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            We built our approach around the same proven framework behind our work in{" "}
            <a
              href="https://chyweb.com.ng/blog/best-ai-seo-agency-in-nigeria-rank-in-ai-overviews"
              className="text-[#2258FF] font-bold underline hover:text-[#1040e6]"
            >
              AI-powered SEO
            </a>{" "}
            and{" "}
            <a
              href="https://chyweb.com.ng/blog/best-aeo-agency-in-nigeria-2026-guide-to-ai-search"
              className="text-[#2258FF] font-bold underline hover:text-[#1040e6]"
            >
              Answer Engine Optimization
            </a>
            , applied directly to Nigerian online retail.
          </p>
          <p className="text-xs sm:text-sm text-slate-500">
            If you'd rather learn this to optimize your own store, our{" "}
            <Link href="/digital-marketing" className="text-[#2258FF] font-bold underline">
              digital marketing training
            </Link>{" "}
            or technical{" "}
            <Link href="/seo-training" className="text-[#2258FF] font-bold underline">
              SEO training in Nigeria
            </Link>{" "}
            will equip you with complete hands-on mastery.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions — Ecommerce SEO Agency in Nigeria" />

      {/* Final CTA Banner */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
        <div className="p-10 sm:p-16 rounded-[36px] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/20 border border-[#2258FF]/40 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6 inline-block">
              Win On Visibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
              Stop Losing Sales to Competitors With Better Visibility, Not Better Products
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Every day your products aren't optimized across Jumia, Google, and AI search, you're handing sales to a competitor who simply shows up first. Let's fix that.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-extrabold text-base shadow-xl transition-all cursor-pointer"
              >
                Book a Free SEO Audit →
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base transition-all cursor-pointer"
              >
                Request Free Store Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal */}
      <HospitalityAuditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Ecommerce SEO (Jumia + Google + AI)"
        defaultPropertyType="Ecommerce / Retail Store"
      />
    </div>
  );
}
