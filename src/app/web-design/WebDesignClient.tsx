"use client";

import Link from "next/link";
import { ArrowRight, Check, Monitor, Star, Shield, Award, Layout, Globe, Server } from "lucide-react";
import { motion } from "framer-motion";
import FaqSection from "@/components/FaqSection";
import DecorativeIcon from "@/components/DecorativeIcon";

export default function WebDesignPage() {
  const skills = [
    "Modern HTML5 & Semantic Web Structures",
    "Tailwind CSS & Responsive Layout Grids",
    "UI/UX Design Principles & Wireframing",
    "WordPress CMS Installation & Security",
    "Drag & Drop Builder Masterclass (Elementor)",
    "Domain Purchasing, Cloud Hosting, & Live Launching",
    "Page Speed Auditing & Web Accessibility Rules",
    "SEO-Friendly Web Construction Essentials",
    "Freelancing, Portfolio Creation, & Client Closing",
  ];

  const modules = [
    { num: "Module 1", title: "Web Foundations: HTML5 & Semantic Markup", desc: "Learn the core markup language of the web. Structure layouts, code headers, navbars, and main text areas semantic and accessible." },
    { num: "Module 2", title: "Styling & Responsive Design with CSS", desc: "Master styling rules, typography grids, colors, Flexbox, and CSS Grids to align components beautifully for all screen widths." },
    { num: "Module 3", title: "UI/UX & Modern Design Principles", desc: "Understand visual hierarchy, spacing, contrast rules, custom color boards, typography rules, and modern card alignments." },
    { num: "Module 4", title: "WordPress Ecosystem & Installation", desc: "Learn WordPress CMS setup, custom theme uploads, dashboard management, database configuration, and basic plugins setup." },
    { num: "Module 5", title: "Visual Building with Elementor Pro", desc: "Construct gorgeous pages rapidly using visual editors. Add micro-interactions, responsive padding shifts, and custom templates." },
    { num: "Module 6", title: "Hosting, Domains & Going Live", desc: "Configure cloud hosting servers (Namecheap, Hostinger, SiteGround), point domain name systems (DNS), and setup free SSL security." },
    { num: "Module 7", title: "Performance Tuning & Core Web Vitals", desc: "Accelerate site loads by compressing assets, lazy-loading media items, caching rules, and cleaning script delays." },
    { num: "Module 8", title: "Accessibility (a11y) & Compliance", desc: "Ensure your layouts conform to web standard accessibility rules: proper screen-reader tags, colors contrast ratios, and keyboard controls." },
    { num: "Module 9", title: "On-Page SEO Basics for Designers", desc: "Construct search-friendly markup. Connect alt tags, headers, meta snippets, structured data, index controls, and XML sitemaps." },
    { num: "Module 10", title: "Portfolio Development & Showcasing", desc: "Assemble a premium personal design portfolio showcasing complete responsive landing pages, e-commerce templates, and corporate sites." },
    { num: "Module 11", title: "Freelancing & Client Acquisition", desc: "Learn how to build Upwork, Fiverr, and LinkedIn profiles. Pitch client contracts, price design projects, and secure recurring maintenance clients." },
    { num: "Module 12", title: "Capstone Project & Certification", desc: "Complete a custom responsive web project for a real local or international business from wireframe to active online deployment." },
  ];

  const faqs = [
    { question: "1. Do I need coding experience to learn Web Design?", answer: "No coding background is required. We teach you everything from basic HTML up to visual building and server deployment." },
    { question: "2. What software do I need to install?", answer: "We will use Visual Studio Code, WordPress, and free staging environments. All software we use is free or provided during classes." },
    { question: "3. Will I get a real website during the training?", answer: "Yes! Every student receives access to a staging server to build, optimize, and launch real live projects during the course." },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2258FF]/5 blur-[100px] pointer-events-none"></div>

      {/* Hero */}
      <section className="relative pt-32 pb-28 bg-[#EAEBE0] text-slate-800 rounded-b-[40px] overflow-hidden border-b border-slate-300/40 z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0"></div>
        <DecorativeIcon Icon={Monitor} size="w-[36rem] h-[36rem]" position="absolute -right-24 -top-20" opacity="opacity-[0.03]" rotation="rotate-12" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Heading & CTAs */}
          <div className="flex flex-col items-start text-left lg:col-span-7 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
              Web Architecture & Design Track
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Web Design Training in <span className="text-[#2258FF]">Nigeria</span>
            </h1>
            <p className="text-slate-655 text-lg leading-relaxed mb-8 max-w-xl font-sans">
              Learn to build premium, responsive WordPress and coded websites. Launch a lucrative freelance design career or secure local and remote agency roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link href="/enroll" className="px-8 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-base shadow-[0_8px_24px_rgba(34,88,255,0.2)] transition-all hover:-translate-y-0.5">
                Join Next Web Cohort
              </Link>
              <Link href="#curriculum" className="px-8 py-4 rounded-xl bg-slate-200/60 border border-slate-355 text-slate-800 font-bold text-base hover:bg-slate-200/80 transition-all">
                Curriculum Overview
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600 border-t border-slate-300 pt-6 w-full">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>WordPress CMS & Elementor Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>HTML5, CSS3 & Responsive UI</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Hosting, SSL & Domain Settings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Live Staging Server Credentials</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Layout Wireframes */}
          <div className="hidden lg:block lg:col-span-5 relative h-[450px]">
            {/* Base Mock Browser Card */}
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
                <span className="text-[10px] text-slate-400 font-mono">browser-view-preview.html</span>
              </div>
              <div className="flex-1 flex flex-col gap-3 justify-center">
                <div className="w-full h-8 bg-white/5 border border-white/10 rounded flex items-center px-3 justify-between">
                  <span className="text-[9px] text-slate-400 font-mono">www.clientbrand.com</span>
                  <Shield size={10} className="text-brand-emerald" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-white/5 border border-white/10 rounded"></div>
                  <div className="h-16 bg-white/5 border border-white/10 rounded"></div>
                  <div className="h-16 bg-white/5 border border-white/10 rounded"></div>
                </div>
              </div>
            </motion.div>

            {/* Floating DNS Settings Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-white/10 border border-white/15 backdrop-blur-lg rounded-xl p-4 shadow-xl w-44 flex items-center gap-2"
            >
              <Server size={18} className="text-brand-emerald" />
              <div>
                <span className="text-[9px] text-slate-300 font-bold block">Hosting Staging</span>
                <span className="text-xs text-white font-bold">Server Active</span>
              </div>
            </motion.div>

            {/* Floating CSS Grid Layout Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -bottom-6 left-4 bg-slate-900 border border-brand-gold/40 backdrop-blur-md rounded-xl p-4 shadow-2xl w-44 flex items-center gap-2"
            >
              <Layout size={18} className="text-brand-gold" />
              <div>
                <span className="text-[9px] text-brand-gold font-bold block">Layout Engine</span>
                <span className="text-xs text-white font-bold">CSS Flexbox/Grid</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview & Audience */}
      <section className="py-24 bg-transparent border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Course Overview</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              Our Web Design course is completely hands-on. You will progress from foundational layout markup to deploying functional corporate sites, landing pages, and blogs using WordPress and visual design tools.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              This course is tailored for students, graduates, entrepreneurs, freelancers, and creative design professionals looking to add high-paying tech services to their portfolio.
            </p>
            <div className="border-t border-slate-200 pt-6 grid grid-cols-2 gap-6">
              <div>
                <span className="block text-2xl font-extrabold text-slate-900">₦250k - ₦800k</span>
                <span className="text-xs text-slate-500">Average local junior salary</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-slate-900">$1k - $3k+</span>
                <span className="text-xs text-slate-500">Freelance project average</span>
              </div>
            </div>
          </div>

          <div className="premium-bento-card rounded-[20px] p-8 border-t-4 border-brand-emerald/30">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Skills You Will Master</h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-600">
              {skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check size={16} className="text-brand-emerald flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 bg-slate-50/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 relative">
            Syllabus & Modules
            <span className="block w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="premium-bento-card rounded-[20px] p-6 hover:border-brand-emerald/20 transition-all"
              >
                <span className="text-xs font-bold text-brand-emerald block mb-2">{m.num}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{m.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-24 bg-transparent border-t border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Career Opportunities in Web Design</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto">
            Web design skills give you immediate access to employment, remote agency roles, and independent freelancing services globally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Agency Web Designer</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Work alongside marketers, developers, and copywriters inside leading creative digital marketing agencies in Nigeria or abroad.
              </p>
            </div>
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Freelance Designer</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Build landing pages and corporate sites for global business clients via remote freelancing sites like Upwork and Fiverr.
              </p>
            </div>
            <div className="premium-bento-card rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">UI/UX Layout Specialist</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Design custom high-conversion user interfaces, templates, layouts, and interactive experiences for growing web startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions About Web Design Training" />

      {/* Call to action */}
      <section id="enroll" className="py-24 bg-slate-50/50 backdrop-blur-sm text-center border-t border-slate-200/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[32px] border border-slate-200/60 bg-white p-12 md:p-16 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Launch Your Web Design Career</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Build an impressive web design portfolio during our 6-week intensive cohort. Learn domains, hosting, layout design, and client acquisition.
            </p>
            <Link href="/enroll" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all">
              Register for Web Design Course
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
