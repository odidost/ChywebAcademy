"use client";

import { CheckSquare, Briefcase, Award, PhoneCall } from "lucide-react";

export default function CareerServicesPage() {
  const services = [
    {
      title: "Portfolio Development & Audit",
      desc: "Get personalized audits on your design sites, ad reports, and keyword checklists. Present projects professionally so clients trust your technical abilities.",
      details: ["Live site layouts auditing", "GitHub & Behance setups", "Case study documentation"],
      icon: <Briefcase className="text-brand-emerald" size={24} />,
    },
    {
      title: "Resume Writing",
      desc: "Upgrade your CV. Emphasize actual metrics (e.g. ad ROI, keyword ranks, performance optimizations) instead of generic skills lists.",
      details: ["SaaS & agency keyword optimization", "Template cleanups", "Metric auditing"],
      icon: <CheckSquare className="text-brand-emerald" size={24} />,
    },
    {
      title: "Freelancing & Upwork Setup",
      desc: "Learn to build high-converting freelancing profiles on Upwork, Fiverr, and LinkedIn. Program search tags and write winning proposal copy.",
      details: ["Proposal scripting templates", "Profile optimization", "Contract pricing strategies"],
      icon: <Award className="text-brand-emerald" size={24} />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] pt-12">
      <section className="relative pt-24 pb-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold text-xs uppercase tracking-wider mb-6 inline-block">
            Student Placement Support
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Career Placement Services</h1>
          <p className="text-slate-600 text-base md:text-lg">
            We don't just teach skills. We provide ongoing resume reviews, portfolio construction, Upwork tutorials, and interview coaching to help you get hired.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((ser, idx) => (
            <div key={idx} className="premium-card rounded-2xl p-8 flex flex-col justify-between hover:border-brand-emerald/20 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                  {ser.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{ser.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">{ser.desc}</p>
                <ul className="flex flex-col gap-2 text-xs text-slate-500">
                  {ser.details.map((det, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-brand-emerald font-bold">✓</span>
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="premium-card rounded-3xl p-12 text-center max-w-3xl mx-auto">
          <PhoneCall className="text-brand-emerald mb-4 mx-auto animate-bounce" size={28} />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Need Direct Career Mentorship?</h3>
          <p className="text-slate-600 text-sm mb-6">Alumni receive lifetime access to our recruitment partner networking events.</p>
          <a
            href="https://wa.me/2349067623555"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all inline-block"
          >
            Ask Admissions About Support
          </a>
        </div>
      </section>
    </div>
  );
}
