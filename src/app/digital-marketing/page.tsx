"use client";

import Link from "next/link";
import { Check, Megaphone, ArrowUpRight, BarChart } from "lucide-react";
import { motion } from "framer-motion";
import FaqSection from "@/components/FaqSection";
import DecorativeIcon from "@/components/DecorativeIcon";

export default function DigitalMarketingPage() {
  const topics = [
    "Search Engine Optimization (SEO) fundamentals",
    "Google Ads (Search & Display Networks)",
    "Meta Advertising (Facebook & Instagram campaigns)",
    "LinkedIn Marketing for B2B leads",
    "Email Campaign Setup & Autoresponders",
    "Google Analytics 4 (GA4) traffic tracking",
    "High-converting landing page Copywriting",
    "Affiliate marketing setup basics",
    "Conversion Rate Optimization (CRO) rules",
  ];

  const modules = [
    { num: "Module 1", title: "Digital Marketing Foundations & Strategy", desc: "Understand marketing ecosystems, customer persona modeling, competitive research, and strategic funnel planning." },
    { num: "Module 2", title: "Search Engine Optimization (SEO) Masterclass", desc: "Learn key keyword mapping, on-page edits, link strategies, local listings, and modern AI search setups." },
    { num: "Module 3", title: "Google Search & Display Advertising", desc: "Set up Google Ads Manager, research keyword bids, structure high-converting campaigns, and configure display campaigns." },
    { num: "Module 4", title: "Meta Ads (Facebook & Instagram Marketing)", desc: "Build custom and lookalike audiences, configure pixel tracking, script conversion-focused ad creatives, and scale budgets." },
    { num: "Module 5", title: "B2B Lead Generation via LinkedIn", desc: "Optimize personal and business LinkedIn profiles. Plan organic content networks and execute paid sponsored messaging campaigns." },
    { num: "Module 6", title: "Email Marketing & Auto-flow Automation", desc: "Design high-converting newsletter templates, write subject lines that convert, build subscriber lists, and program automated sequences." },
    { num: "Module 7", title: "Conversion Copywriting & Landing Page Optimization", desc: "Master copywriting formulas (AIDA, PAS). Structure layouts that guide visitor clicks to lead submissions and sales." },
    { num: "Module 8", title: "Analytics & Traffic Attribution (GA4)", desc: "Install GA4 tracking, define conversion event targets, measure acquisition channels, and construct Looker Studio reports." },
    { num: "Module 9", title: "Affiliate & Influencer Marketing Campaigns", desc: "Understand commission programs, negotiate influencer partnerships, tracking links, and configure secondary sales funnels." },
    { num: "Module 10", title: "Capstone Campaigns & Performance Audits", desc: "Create, budget, deploy, and report on a live marketing campaign for a local business to demonstrate practical outcomes." },
  ];

  const faqs = [
    { question: "1. Who is this program designed for?", answer: "Entrepreneurs, graduates, copywriters, and corporate teams looking to gain practical marketing skills." },
    { question: "2. Will I need ad budget during training?", answer: "No. Staged demonstration campaigns are conducted. Setting up live ad budgets is optional." },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2258FF]/5 blur-[100px] pointer-events-none"></div>

      {/* Hero */}
      <section className="relative pt-32 pb-28 bg-[#EAEBE0] text-slate-800 rounded-b-[40px] overflow-hidden border-b border-slate-300/40 z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0"></div>
        <DecorativeIcon Icon={Megaphone} size="w-[36rem] h-[36rem]" position="absolute -right-24 -top-20" opacity="opacity-[0.03]" rotation="rotate-12" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Heading & CTAs */}
          <div className="flex flex-col items-start text-left lg:col-span-7 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
              Full Marketing Masterclass Track
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Digital Marketing <br/>
              <span className="text-[#2258FF]">Training Program</span>
            </h1>
            <p className="text-slate-655 text-lg leading-relaxed mb-8 max-w-xl font-sans">
              Master the exact paid and organic channels businesses use to acquire leads, drive organic search traffic, and scale digital sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link href="/enroll" className="px-8 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-base shadow-[0_8px_24px_rgba(34,88,255,0.2)] transition-all hover:-translate-y-0.5">
                Register for Masterclass
              </Link>
              <Link href="#syllabus" className="px-8 py-4 rounded-xl bg-slate-200/60 border border-slate-355 text-slate-800 font-bold text-base hover:bg-slate-200/80 transition-all">
                View Syllabus
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600 border-t border-slate-300 pt-6 w-full">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Google & Meta Ads Manager Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Funnels & Conversion Copywriting</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>GA4 Attribution & Conversion Pixel</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Ad Budget Allocation & ROI Tracking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Marketing Widgets */}
          <div className="hidden lg:block lg:col-span-5 relative h-[450px]">
            {/* Base Funnel Mock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute inset-0 bg-slate-900/75 border border-white/15 backdrop-blur-md rounded-2xl p-6 shadow-2xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">marketing-funnel-roi</span>
              </div>
              <div className="flex-1 flex flex-col gap-3 justify-center items-center">
                <div className="w-full bg-white/5 border border-white/10 p-2.5 rounded flex justify-between text-[10px]">
                  <span className="text-slate-300">Impression Reach</span>
                  <strong className="text-white">125,000 Users</strong>
                </div>
                <div className="w-[85%] bg-brand-emerald/10 border border-brand-emerald/20 p-2.5 rounded flex justify-between text-[10px]">
                  <span className="text-brand-emerald">Leads Acquired</span>
                  <strong className="text-brand-emerald">4,200 (3.3%)</strong>
                </div>
                <div className="w-[70%] bg-brand-gold/10 border border-brand-gold/20 p-2.5 rounded flex justify-between text-[10px]">
                  <span className="text-brand-gold">Conversions/Sales</span>
                  <strong className="text-brand-gold">320 Paid</strong>
                </div>
              </div>
            </motion.div>

            {/* Floating Ads Cost Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-white/10 border border-white/15 backdrop-blur-lg rounded-xl p-4 shadow-xl w-44 flex items-center gap-2"
            >
              <BarChart size={18} className="text-brand-emerald" />
              <div>
                <span className="text-[9px] text-slate-300 font-bold block">Ad Spend ROI</span>
                <span className="text-xs text-white font-bold">4.2x Multiplier</span>
              </div>
            </motion.div>

            {/* Floating Campaign Status Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -bottom-6 left-4 bg-slate-900 border border-brand-gold/40 backdrop-blur-md rounded-xl p-4 shadow-2xl w-44 flex items-center gap-2"
            >
              <Megaphone size={18} className="text-brand-gold" />
              <div>
                <span className="text-[9px] text-brand-gold font-bold block">Meta Campaigns</span>
                <span className="text-xs text-white font-bold">Live Running</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-transparent border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Course Overview</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Our 10-week Masterclass provides complete marketing competency. You will gain practical skills in search engine visibility, paid ad optimization, conversion copywriting, and analytics tracking.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Learn how to plan integrated campaigns, structure marketing budgets, and analyze conversion channels using Google and Meta dashboard suites.
            </p>
          </div>

          <div className="premium-bento-card rounded-[20px] p-8 border-t-4 border-brand-emerald/30">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Skills Covered</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-600">
              {topics.map((t, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check size={16} className="text-brand-emerald flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="syllabus" className="py-24 bg-slate-50/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 relative">
            Syllabus & Core Modules
            <span className="block w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="premium-bento-card rounded-[20px] p-8 hover:-translate-y-1 transition-all"
              >
                <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest block mb-2">{m.num}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions About Digital Marketing" />

      {/* CTA Box */}
      <section id="enroll" className="py-24 bg-slate-50/50 backdrop-blur-sm text-center border-t border-slate-200/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[32px] border border-slate-200/60 bg-white p-12 md:p-16 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Build Practical Marketing Skills</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Join the cohort and gain job-ready digital marketing skills through hands-on campaign configurations and personal mentorship.
            </p>
            <Link href="/enroll" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all">
              Enroll in Masterclass (₦150,000)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
