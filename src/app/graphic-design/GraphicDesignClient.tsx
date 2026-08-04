"use client";

import Link from "next/link";
import { Check, Palette, Layers, Compass } from "lucide-react";
import { motion } from "framer-motion";
import FaqSection from "@/components/FaqSection";
import DecorativeIcon from "@/components/DecorativeIcon";

export default function GraphicDesignPage() {
  const tools = [
    { name: "Adobe Photoshop", desc: "Master pixel editing, composite layouts, image grading, custom masking, and editorial flyers design." },
    { name: "Adobe Illustrator", desc: "Understand vector graphics, scalable logos construction, custom icons grids, and typography structures." },
    { name: "Canva Pro", desc: "Learn high-speed visual workflows for daily social creatives, pitch desks templates, and client assets grids." },
    { name: "Figma UI basics", desc: "Explore design systems, vector grids, interface styling layouts, and clickable web page wireframes." },
  ];

  const modules = [
    { num: "Module 1", title: "Visual Arts & Design Foundations", desc: "Understand color harmony wheels, visual hierarchies, negative spacing rules, contrast ratios, and structural layout grids." },
    { num: "Module 2", title: "Adobe Photoshop Masterclass", desc: "Deep-dive into tools, workspace setup, layer hierarchies, non-destructive editing workflows, custom masks, and typography styling." },
    { num: "Module 3", title: "Vector Graphics with Adobe Illustrator", desc: "Master the pen tool, anchor points adjustments, pathfinders, typography outlining, custom logo grids, and SVG exports." },
    { num: "Module 4", title: "Fast-track Designing via Canva Pro", desc: "Structure high-speed brand templates, manage asset libraries, design visual assets, and establish collaborative workspaces." },
    { num: "Module 5", title: "Brand Identity Systems Construction", desc: "Build complete corporate brand identities: design logos, style guides, brand palettes, packaging concepts, and letterheads." },
    { num: "Module 6", title: "Print-ready Design Files & Typography", desc: "Understand bleed lines, margins boundaries, CMYK vs. RGB channels, exporting printer formats, and layout sizing ratios." },
    { num: "Module 7", title: "Digital Ad Design & Marketing Creatives", desc: "Design conversion-focused ads: banner creatives, social carousel templates, promotional banners, and custom graphics." },
    { num: "Module 8", title: "Client Acquisition & Design Freelancing", desc: "Construct a professional design portfolio. Structure Fiverr and Upwork profiles, write creative pitches, and close clients." },
    { num: "Module 9", title: "Capstone Branding Project", desc: "Assemble, organize, and present a complete corporate brand identity mockup project from initial design brief to final exports." },
  ];

  const faqs = [
    { question: "1. Do I need a drawing background to join?", answer: "No. Design is about visual structure and logic. We teach you design principles and tools from the absolute ground up." },
    { question: "2. Is a powerful laptop required?", answer: "A laptop with at least 8GB of RAM is recommended to run Adobe Photoshop and Illustrator smoothly." },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2258FF]/5 blur-[100px] pointer-events-none"></div>

      {/* Hero */}
      <section className="relative pt-32 pb-28 bg-[#EAEBE0] text-slate-800 rounded-b-[40px] overflow-hidden border-b border-slate-300/40 z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0"></div>
        <DecorativeIcon Icon={Palette} size="w-[36rem] h-[36rem]" position="absolute -right-24 -top-20" opacity="opacity-[0.03]" rotation="rotate-12" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Heading & CTAs */}
          <div className="flex flex-col items-start text-left lg:col-span-7 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
              Visual Design & Branding Track
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900">
              Graphic Design & <br/>
              <span className="text-[#2258FF]">Brand Identity Course</span>
            </h1>
            <p className="text-slate-655 text-lg leading-relaxed mb-8 max-w-xl font-sans">
              Master Photoshop, Illustrator, and Canva. Learn visual principles and design professional brand assets for global clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link href="/enroll" className="px-8 py-4 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-base shadow-[0_8px_24px_rgba(34,88,255,0.2)] transition-all hover:-translate-y-0.5">
                Join Next Design Cohort
              </Link>
              <Link href="#tools" className="px-8 py-4 rounded-xl bg-slate-200/60 border border-slate-355 text-slate-800 font-bold text-base hover:bg-slate-200/80 transition-all">
                Learn Photoshop & Illustrator
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600 border-t border-slate-300 pt-6 w-full">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Photoshop Raster Editing & Composites</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Illustrator Logo Grids & Scalable Vectors</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Brand Identity Styleguide Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#2258FF]" />
                <span>Print-Ready Sizing Boundaries & Formats</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Graphic Widgets */}
          <div className="hidden lg:block lg:col-span-5 relative h-[450px]">
            {/* Base Vector Canvas Card */}
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
                <span className="text-[10px] text-slate-400 font-mono">illustrator-vector-grid</span>
              </div>
              <div className="flex-1 flex flex-col gap-3 justify-center items-center">
                <div className="w-24 h-24 rounded-full border border-brand-emerald/40 flex items-center justify-center relative">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-emerald rounded-full"></span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-emerald rounded-full"></span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-emerald rounded-full"></span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-emerald rounded-full"></span>
                  <Compass size={24} className="text-brand-emerald" />
                </div>
                <span className="text-[9px] text-slate-400 font-mono">Vector Anchor Grid Active</span>
              </div>
            </motion.div>

            {/* Floating Palette Settings Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 bg-white/10 border border-white/15 backdrop-blur-lg rounded-xl p-4 shadow-xl w-44 flex items-center gap-2"
            >
              <Palette size={18} className="text-brand-emerald" />
              <div>
                <span className="text-[9px] text-slate-300 font-bold block">Palette Selection</span>
                <span className="text-xs text-white font-bold">RGB/CMYK Safe</span>
              </div>
            </motion.div>

            {/* Floating Art Layers Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute -bottom-6 left-4 bg-slate-900 border border-brand-gold/40 backdrop-blur-md rounded-xl p-4 shadow-2xl w-44 flex items-center gap-2"
            >
              <Layers size={18} className="text-brand-gold" />
              <div>
                <span className="text-[9px] text-brand-gold font-bold block">Active Layers</span>
                <span className="text-xs text-white font-bold">Vector Outline View</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 bg-transparent border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">Software Tools You Will Master</h2>
          <p className="text-center text-slate-600 max-w-xl mx-auto mb-12">Learn hands-on execution of professional design and layout platforms.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((t, idx) => (
              <div key={idx} className="premium-bento-card rounded-[20px] p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-slate-50/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 relative">
            Syllabus & Course Modules
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

      {/* FAQ */}
      <FaqSection faqs={faqs} title="Frequently Asked Questions About Graphic Design Training" />

      {/* CTA Box */}
      <section id="enroll" className="py-24 bg-slate-50/50 backdrop-blur-sm text-center border-t border-slate-200/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[32px] border border-slate-200/60 bg-white p-12 md:p-16 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Build Your Visual Design Portfolio</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Master the exact software layouts and principles that creative studios use to design professional assets.
            </p>
            <Link href="/enroll" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all">
              Register for Graphic Design Course
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
