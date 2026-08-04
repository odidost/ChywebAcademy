"use client";

import { Download, FileText, CheckSquare } from "lucide-react";

export default function FreeResourcesPage() {
  const resources = [
    {
      title: "Google Search Console Performance Audit Checklist",
      desc: "A step-by-step checklist to auditing crawling issues, query impressions, ranking metrics, and page speed index settings.",
      type: "Checklist",
      format: "PDF (2.4 MB)",
      icon: <CheckSquare className="text-brand-emerald" size={24} />,
    },
    {
      title: "On-Page SEO Copywriting & Title tag Formulas",
      desc: "Formula templates to draft high-click-through title tags and meta descriptions optimized for Google & search intent.",
      type: "Template",
      format: "PDF & Google Doc",
      icon: <FileText className="text-brand-emerald" size={24} />,
    },
    {
      title: "WordPress Launch Security and performance Audit",
      desc: "A pre-launch checklist for domain setup, cloud hosting DNS updates, caching config, SSL checks, and security plugins.",
      type: "Guidebook",
      format: "PDF (3.8 MB)",
      icon: <FileText className="text-brand-emerald" size={24} />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] pt-12">
      <section className="relative pt-24 pb-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold text-xs uppercase tracking-wider mb-6 inline-block">
            Download Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Free Digital Marketing Resources</h1>
          <p className="text-slate-600 text-base md:text-lg">
            Download our templates, checklists, and guides compiled directly by Chyweb instructors to optimize your daily campaigns.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {resources.map((res, idx) => (
            <div key={idx} className="premium-card rounded-2xl p-8 flex flex-col justify-between hover:border-brand-emerald/20 transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                  {res.icon}
                </div>
                <span className="text-[10px] font-bold text-brand-emerald bg-brand-emerald/10 py-0.5 px-2 rounded-full mb-3 block w-fit">{res.type}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{res.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6">{res.desc}</p>
              </div>
              <div className="border-t border-slate-100 pt-6 flex justify-between items-center text-xs text-slate-500">
                <span>Format: {res.format}</span>
                <button
                  onClick={() => alert("Resource download initiated!")}
                  className="inline-flex items-center gap-1.5 text-brand-emerald font-bold hover:text-brand-emerald-hover transition-colors cursor-pointer"
                >
                  <Download size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
