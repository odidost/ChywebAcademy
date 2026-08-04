"use client";

import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

export default function SuccessStoriesPage() {
  const transitions = [
    {
      name: "Tunde Olanrewaju",
      type: "Career Transition",
      from: "Unemployed Graduate",
      to: "Junior SEO Specialist at UK remote agency",
      story: "After graduating with no marketing experience, I joined the Masterclass program. Oko David's SEO audit exercises gave me the exact portfolio I needed to close a remote job contract.",
      increase: "+250% Income Increase",
    },
    {
      name: "Chioma Nwosu",
      type: "Business Growth",
      from: "Local E-commerce Seller",
      to: "Generated ₦3.5M in Meta Ads revenue",
      story: "I struggled with scaling my online boutique store. Learning Meta Ads pixel events, target models, and copywriting structures turned my advertising ROI completely positive.",
      increase: "₦3.5M Sales Generated",
    },
    {
      name: "Ibrahim Abdul",
      type: "Freelancing Success",
      from: "Struggling Graphic Designer",
      to: "Upwork Top Rated UI Designer",
      story: "Adding HTML, CSS layouts, and WordPress design to my graphic portfolio changed my client conversations. I shifted from ₦20k logos to ₦350k complete corporate site contracts.",
      increase: "₦350k Average Project Price",
    },
  ];

  return (
    <div className="relative min-h-screen bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] pt-12">
      <section className="relative pt-24 pb-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold text-xs uppercase tracking-wider mb-6 inline-block">
            Student Outcomes
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-sans">Student Success Stories</h1>
          <p className="text-slate-600 text-base md:text-lg">
            Read real-world testimonials of students, business owners, and graduates who transformed their careers and businesses through Chyweb Academy.
          </p>
        </div>

        {/* Transition Stories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {transitions.map((t, idx) => (
            <div key={idx} className="premium-card rounded-2xl p-8 flex flex-col justify-between hover:border-brand-primary/20 transition-all">
              <div>
                <span className="text-[10px] font-bold text-brand-emerald bg-brand-emerald/10 py-1 px-3 rounded-full mb-6 block w-fit">
                  {t.type}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{t.name}</h3>
                <div className="text-xs text-slate-500 mb-6">
                  <span>From: {t.from}</span>
                  <span className="block mt-0.5 text-brand-emerald font-medium">To: {t.to}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.story}"</p>
              </div>
              <div className="border-t border-slate-100 pt-6 flex justify-between items-center text-xs font-bold text-slate-700">
                <span>{t.increase}</span>
                <ArrowUpRight size={16} className="text-brand-emerald" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Statistics */}
        <div className="premium-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Platform Outcomes Checklist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left max-w-2xl mx-auto text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <Check className="text-brand-emerald" />
              <span>85% Job/Contract Placement Rate</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-brand-emerald" />
              <span>₦350,000 Average Project Price</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="text-brand-emerald" />
              <span>Ongoing Alumni Mentorship Group</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
