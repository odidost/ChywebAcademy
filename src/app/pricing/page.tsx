"use client";

import Link from "next/link";
import { Check, Info, BarChart2 } from "lucide-react";
import DecorativeIcon from "@/components/DecorativeIcon";

export default function PricingPage() {
  const plans = [
    {
      title: "One-Time Masterclass",
      price: "₦150,000",
      desc: "Full payment for the 10-week comprehensive Digital Marketing course.",
      features: [
        "All 10 modules study modules",
        "Weekly live classes & assignments",
        "Custom design and SEO toolkits",
        "Ongoing direct trainer Q&A access",
        "Verified digital course certificate",
        "Alumni networking platform access",
      ],
      isFeatured: true,
      ctaText: "Secure Enrollment Slot",
    },
    {
      title: "2-Month Installments",
      price: "₦85,000",
      duration: "per month",
      desc: "Installment payment structure to divide tuition over two milestones.",
      features: [
        "Full access to the 10 modules",
        "First installment secure slot",
        "Includes design toolkits & sitemaps",
        "Verified digital course certificate",
        "Alumni networking platform access",
      ],
      isFeatured: false,
      ctaText: "Enroll via Installment",
    },
    {
      title: "Corporate Training Tier",
      price: "₦350,000",
      desc: "Targeted course structures tailored for marketing and communications teams.",
      features: [
        "Custom syllabus aligned with brand KPIs",
        "Flexible online or on-site workshops",
        "Full company domain SEO audit review",
        "Marketing strategy proposals included",
        "Certificates for all company participants",
      ],
      isFeatured: false,
      ctaText: "Inquire Corporate Plan",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-dot-grid bg-line-grid bg-noise">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2258FF]/5 blur-[100px] pointer-events-none"></div>

      {/* Hero */}
      <section className="relative pt-32 pb-28 bg-[#EAEBE0] text-slate-800 rounded-b-[40px] overflow-hidden border-b border-slate-300/40 z-10 text-center">
        <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none z-0"></div>
        <DecorativeIcon Icon={BarChart2} size="w-[36rem] h-[36rem]" position="absolute left-1/2 -translate-x-1/2 -top-20" opacity="opacity-[0.03]" />

        <div className="max-w-4xl mx-auto flex flex-col items-center px-6 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6">
            Tuition Plans
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Transparent Pricing
          </h1>
          <p className="text-slate-655 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-sans">
            Choose the enrollment route that matches your speed. No hidden fees or recurring subscriptions.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`premium-bento-card rounded-[24px] p-8 flex flex-col justify-between relative ${
                  plan.isFeatured ? "border-2 border-brand-emerald shadow-2xl" : ""
                }`}
              >
                {plan.isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-emerald text-[10px] font-bold uppercase text-white tracking-widest">
                    Best Value
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">{plan.desc}</p>
                  <div className="text-4xl font-extrabold text-slate-900 mb-6">
                    {plan.price}
                    {plan.duration && <span className="text-xs text-slate-400 font-normal"> / {plan.duration}</span>}
                  </div>
                  <ul className="flex flex-col gap-3 text-xs text-slate-600 mb-8 border-t border-slate-100 pt-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check size={14} className="text-brand-emerald flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/enroll"
                  className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                    plan.isFeatured
                      ? "bg-brand-emerald hover:bg-brand-emerald-hover text-white shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-xl mx-auto flex items-center gap-3 bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-xs text-slate-600 justify-center">
            <Info size={16} className="text-brand-emerald flex-shrink-0" />
            <span>Need a custom corporate plan or physical cohort arrangements? Contact our helpdesk for direct support.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
