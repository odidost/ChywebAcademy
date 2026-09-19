"use client";

import { Check, ShieldCheck, Flame, Gift, ArrowRight, Sparkles, Lock } from "lucide-react";

interface GrandSlamOfferCardProps {
  onClaim: () => void;
  title?: string;
  badge?: string;
  niche?: string;
}

export default function GrandSlamOfferCard({
  onClaim,
  title = "The ChyWeb Hospitality Grand Slam Growth System",
  badge = "The Alex Hormozi Value Stack",
  niche = "Hotels & Restaurants",
}: GrandSlamOfferCardProps) {
  const stackItems = [
    {
      title: "Conversion-Engineered Direct-Booking Engine & Mobile UX",
      desc: "Simple date picker, clear room cards, and easy checkout that stops guests from leaving without booking.",
      value: "₦1,200,000",
    },
    {
      title: "Local SEO & Google Business Profile 3-Pack Domination",
      desc: "Rank #1 for 'hotels near Victoria Island' or 'best restaurants in Lekki' searches with optimized media and citations.",
      value: "₦400,000",
    },
    {
      title: "2026 AEO & GEO AI Search Engine Structure",
      desc: "Structured schema and entity architecture so ChatGPT, Gemini, and Google AI Overviews cite and recommend your property.",
      value: "₦500,000",
    },
    {
      title: "OTA Commission Slasher Direct Funnel",
      desc: "Cut reliance on Booking.com / Expedia by an average of 18% within 12 months with price parity & guest incentive flow.",
      value: "₦450,000",
    },
    {
      title: "Automated 5-Star Review & Reputation Shield",
      desc: "Systematic review generation turning happy guests into public Google advocates to hit the 4.8-star trust threshold.",
      value: "₦300,000",
    },
  ];

  const bonuses = [
    {
      title: "BONUS #1: Native Nigerian Payment Setup",
      desc: "Paystack, Flutterwave, Apple Pay, & USSD integration directly in your booking flow.",
      value: "₦150,000 (FREE)",
    },
    {
      title: "BONUS #2: 90-Day Direct-Booking Acceleration Playbook",
      desc: "Step-by-step guest remarketing and WhatsApp hospitality sequences that convert one-time visitors into repeat stays.",
      value: "₦200,000 (FREE)",
    },
    {
      title: "BONUS #3: Monthly C-Level Attribution & Revenue Dashboard",
      desc: "Track real direct bookings, ADR, and commissions saved—not confusing vanity impressions.",
      value: "₦180,000 (FREE)",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto rounded-[36px] bg-white border-2 border-[#2258FF]/25 p-6 sm:p-12 text-slate-900 shadow-[0_20px_60px_rgba(34,88,255,0.1)] relative overflow-hidden">
        {/* Decorative graphic glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2258FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-700 text-xs font-black uppercase tracking-wider mb-4">
            <Flame size={14} className="text-amber-500 animate-pulse" />
            <span>{badge}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">
            {title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Everything you need to turn empty rooms and tables into profitable direct reservations without wrestling with tech or bleeding commissions to OTAs.
          </p>
        </div>

        {/* Stack Items */}
        <div className="space-y-4 mb-8 relative z-10">
          <div className="text-xs font-black uppercase tracking-widest text-[#2258FF] mb-2 flex items-center gap-1.5">
            <Sparkles size={14} />
            The Core Done-For-You Deliverables:
          </div>
          {stackItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4.5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-[#2258FF]/50 hover:bg-white hover:shadow-md transition-all gap-2 sm:gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2258FF]/10 text-[#2258FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={15} className="stroke-[3]" />
                </div>
                <div>
                  <strong className="text-sm sm:text-base font-black text-slate-900 block">{item.title}</strong>
                  <span className="text-xs text-slate-600">{item.desc}</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0 pl-9 sm:pl-0">
                <span className="text-xs font-mono text-slate-400 block line-through">Value: {item.value}</span>
                <span className="text-xs font-black text-emerald-600">Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="space-y-3 mb-10 relative z-10 p-6 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300/70 shadow-sm">
          <div className="text-xs font-black uppercase tracking-widest text-amber-800 mb-2 flex items-center gap-1.5">
            <Gift size={16} className="text-amber-600" />
            Plus 3 Exclusive Fast-Action Bonuses:
          </div>
          {bonuses.map((bonus, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 text-xs py-1">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-black text-base leading-none">•</span>
                <span className="text-slate-700">
                  <strong className="text-slate-900 font-bold">{bonus.title}:</strong> {bonus.desc}
                </span>
              </div>
              <span className="font-black text-amber-800 whitespace-nowrap pl-4 sm:pl-0">{bonus.value}</span>
            </div>
          ))}
        </div>

        {/* Total Value & Guarantee Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-200 mb-8 relative z-10">
          {/* Left: Hormozi Risk Reversal */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1">
                The 60-Day "Direct Traction" Risk Reversal
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your website conversion rate, direct booking volume, and local search visibility don't show verifiable progress within 60 days of launch, we will continue optimizing your property <strong className="text-slate-900">100% free of charge</strong> until they do. Zero risk to your business.
              </p>
            </div>
          </div>

          {/* Right: Exclusivity & Scarcity */}
          <div className="flex items-start gap-4 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-300 text-rose-700 flex items-center justify-center flex-shrink-0">
              <Lock size={26} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-slate-900 mb-1">
                Market Exclusivity Protection
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly limit our client roster to a maximum of <strong className="text-slate-900">3 competing properties per city/district</strong> (Victoria Island, Ikeja, Abuja Central, etc.) so we never optimize your direct competitors against you.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center relative z-10 pt-2">
          <div className="mb-4">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Total Measurable Value: Over ₦3,480,000
            </span>
          </div>
          <button
            onClick={onClaim}
            className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 rounded-2xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-black text-sm sm:text-base shadow-[0_12px_28px_rgba(34,88,255,0.35)] transition-all hover:scale-105 cursor-pointer"
          >
            <span>Claim Your Free Strategy Audit & Grand Slam Plan →</span>
          </button>
          <p className="text-[11px] text-slate-500 mt-3 font-medium">
            Click to book your free strategy session on WhatsApp (0906 762 3555) or lock in your audit roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}
