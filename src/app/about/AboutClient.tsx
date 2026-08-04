"use client";

import Link from "next/link";
import { Target, Compass, Users, Globe } from "lucide-react";
import { motion } from "framer-motion";
import DecorativeIcon from "@/components/DecorativeIcon";

export default function AboutPage() {
  const values = [
    { title: "Practical Competency First", desc: "We focus 100% on active projects and portfolio building instead of theoretical slide definitions.", icon: <Target className="text-brand-emerald" size={20} /> },
    { title: "AI-Powered Adaptability", desc: "We integrate modern LLMs and prompt automation directly into our syllabus to prepare students for the AI economy.", icon: <Compass className="text-brand-emerald" size={20} /> },
    { title: "Ongoing Mentorship Support", desc: "Learning doesn't terminate at graduation. We provide alumni networking channels and contract project advice.", icon: <Users className="text-brand-emerald" size={20} /> },
  ];

  const stats = [
    { value: "7+ Years", label: "Industry Experience" },
    { value: "300+", label: "Students Graduated" },
    { value: "45+", label: "Portfolios Launched" },
    { value: "100%", label: "Hands-on Focus" },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2258FF]/5 blur-[100px] pointer-events-none"></div>

      {/* Hero */}
      <section className="relative pt-32 pb-28 bg-[#EAEBE0] text-slate-800 rounded-b-[40px] overflow-hidden border-b border-slate-300/40 z-10 text-center">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0"></div>
        <DecorativeIcon Icon={Globe} size="w-[36rem] h-[36rem]" position="absolute left-1/2 -translate-x-1/2 -top-20" opacity="opacity-[0.03]" />

        <div className="max-w-4xl mx-auto flex flex-col items-center px-6 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
            Our Story & Mission
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Learn Digital Skills.<br />
            <span className="text-[#2258FF]">Build Real Careers.</span>
          </h1>
          <p className="text-slate-655 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-sans">
            Chyweb Academy exists to bridge the gap between classroom theory and practical, job-ready execution. We prepare students across Nigeria for remote work, freelancing, and digital business growth.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-transparent border-b border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Why Chyweb Academy Exists</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
              In today's fast-moving, AI-driven global economy, traditional certificates are no longer enough. Employers and freelance clients look for proof of performance: live websites, active ad accounts, and ranked keywords.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our training structure mimics real agency environments. You will write actual code, optimize live domains, and deploy real marketing funnels under direct daily guidance from industry specialists.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="premium-bento-card rounded-[20px] p-6 text-center">
                <span className="block text-3xl font-extrabold text-slate-900 mb-2">{s.value}</span>
                <span className="text-xs text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 relative font-sans">
            Our Core Principles
            <span className="block w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="premium-bento-card rounded-[20px] p-8">
                <div className="w-10 h-10 rounded-lg bg-brand-emerald/10 flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Trainer */}
      <section className="py-24 bg-transparent border-t border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16 font-sans">Meet the Instructor</h2>
          <div className="premium-bento-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center max-w-4xl mx-auto">
            <div className="w-36 h-36 rounded-full border-4 border-[#2258FF]/30 flex-shrink-0 overflow-hidden shadow-md">
              <img src="/oko-david.jpg" alt="Oko David Egbodor" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-emerald uppercase tracking-widest block mb-2">Lead Instructor</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Oko David Egbodor</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Lead Digital Marketing & SEO Specialist with over 7 years of active campaign experience inside leading regional agencies. Oko David has managed digital optimization campaigns for real estate, e-commerce, and SaaS businesses internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50/50 backdrop-blur-sm text-center border-t border-slate-200/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[32px] border border-slate-200/60 bg-white p-12 md:p-16 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-sans">Ready to Build Your Tech Career?</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Join a community of designers, marketers, and developers building high-income skills across Nigeria.
            </p>
            <Link href="/enroll" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold shadow-lg hover:-translate-y-1 transition-all">
              Apply to Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
