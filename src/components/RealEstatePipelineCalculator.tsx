"use client";

import { useState } from "react";
import {
  Calculator,
  TrendingUp,
  Zap,
  ArrowRight,
  ShieldCheck,
  Building2,
  DollarSign,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";

interface RealEstatePipelineCalculatorProps {
  onOpenAudit: (service?: string) => void;
}

export default function RealEstatePipelineCalculator({
  onOpenAudit,
}: RealEstatePipelineCalculatorProps) {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(3500);
  const [unitPrice, setUnitPrice] = useState<number>(85000000); // ₦85M default
  const [currentConversion, setCurrentConversion] = useState<number>(2.9);
  const [responseTime, setResponseTime] = useState<string>("same-day");

  // Calculations
  const currentLeads = Math.round((monthlyVisitors * currentConversion) / 100);
  const optimizedConversion = 5.6;
  const optimizedLeads = Math.round((monthlyVisitors * optimizedConversion) / 100);
  const additionalLeads = optimizedLeads - currentLeads;

  // Conversion close probability modifier based on speed-to-lead (5 mins = 10x lead responsiveness)
  const closeRateBySpeed: Record<string, number> = {
    "under-5": 0.08, // 8% of leads convert to actual off-plan reservations/deposits
    "30-mins": 0.04,
    "same-day": 0.02,
    "next-day": 0.008,
  };

  const currentCloseRate = closeRateBySpeed[responseTime] || 0.02;
  const targetCloseRate = 0.08; // With ChyWeb instant lead notifications & speed-to-lead

  const currentEstimatedDeals = Math.max(1, Math.round(currentLeads * currentCloseRate));
  const optimizedEstimatedDeals = Math.max(
    currentEstimatedDeals + 1,
    Math.round(optimizedLeads * targetCloseRate)
  );
  const extraDealsMonth = optimizedEstimatedDeals - currentEstimatedDeals;
  const extraPipelineValue = extraDealsMonth * unitPrice;

  const formatNaira = (val: number) => {
    if (val >= 1000000000) {
      return `₦${(val / 1000000000).toFixed(2)} Billion`;
    }
    return `₦${(val / 1000000).toFixed(1)} Million`;
  };

  return (
    <div className="bg-[#0b1728] border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator size={14} />
              <span>Speed-to-Lead & Conversion Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Calculate Your Lost Pipeline Revenue
            </h3>
            <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-xl">
              See what moving from industry average (2.9%) to top-performer (5.6%+) and 5-minute lead response unlocks for your projects.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0">
              <Clock size={20} />
            </div>
            <div className="text-xs">
              <div className="text-white/60">Speed-to-Lead Rule:</div>
              <div className="font-bold text-amber-300">5-Min Response = 10x More Closes</div>
            </div>
          </div>
        </div>

        {/* Interactive Controls & Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Controls Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Monthly Visitors Slider */}
            <div>
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold mb-2">
                <span className="text-white/90">Estimated Monthly Website / Portal Traffic</span>
                <span className="text-emerald-400 font-mono text-base">{monthlyVisitors.toLocaleString()} visitors</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-white/10 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1">
                <span>500 (Single Project)</span>
                <span>10,000</span>
                <span>25,000+ (Multi-Project Pipeline)</span>
              </div>
            </div>

            {/* Average Unit Price Selector */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-white/90 mb-2">
                Average Unit / Property Price Point
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: "₦35 Million", val: 35000000 },
                  { label: "₦85 Million", val: 85000000 },
                  { label: "₦180 Million", val: 18000000 },
                  { label: "₦350M+ (Luxury)", val: 350000000 },
                ].map((tier) => (
                  <button
                    key={tier.val}
                    type="button"
                    onClick={() => setUnitPrice(tier.val)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all ${
                      unitPrice === tier.val
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Website Conversion Rate */}
            <div>
              <div className="flex justify-between items-center text-xs sm:text-sm font-bold mb-2">
                <span className="text-white/90">Current Site Conversion Rate</span>
                <span className="text-amber-300 font-mono text-base">{currentConversion}% (Benchmark: 2.9%)</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="4.0"
                step="0.1"
                value={currentConversion}
                onChange={(e) => setCurrentConversion(Number(e.target.value))}
                className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Current Lead Follow-up Speed */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-white/90 mb-2">
                Typical Inquiry Response Window Right Now
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "under-5", label: "⚡ < 5 Mins (Fast)" },
                  { id: "30-mins", label: "⏱️ 30-60 Mins" },
                  { id: "same-day", label: "⏳ Same Day (3-6h)" },
                  { id: "next-day", label: "📅 Next Day / Batch" },
                ].map((spd) => (
                  <button
                    key={spd.id}
                    type="button"
                    onClick={() => setResponseTime(spd.id)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all text-center ${
                      responseTime === spd.id
                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {spd.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output Right Column */}
          <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Current Monthly Inquiries</span>
                <span className="text-white font-mono font-bold text-sm">{currentLeads} Leads</span>
              </div>

              <div className="flex items-center justify-between text-xs pb-3 border-b border-white/10">
                <span className="text-emerald-300 font-bold">With Optimized Design (5.6%)</span>
                <span className="text-emerald-400 font-mono font-black text-sm">{optimizedLeads} Leads (+{additionalLeads})</span>
              </div>

              {/* Added pipeline card */}
              <div className="bg-gradient-to-br from-emerald-950/80 to-slate-900 border border-emerald-500/40 rounded-xl p-4 sm:p-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 mb-1">
                  Estimated Unlocked Pipeline / Month
                </div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  +{formatNaira(extraPipelineValue)}
                </div>
                <div className="text-[11px] text-white/70 mt-1">
                  Based on +{extraDealsMonth} additional unit reservation(s) generated from doubled conversion and sub-5-minute lead response.
                </div>
              </div>

              {/* Key Conversion Truth */}
              <div className="text-xs text-white/80 bg-white/5 rounded-xl p-3 border border-white/10 flex items-start gap-2">
                <Sparkles size={16} className="text-amber-300 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Zero extra ad spend required.</strong> Doubling conversion from 2.9% to 5.6% doubles your inquiries with your existing traffic.
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenAudit("Real Estate Pipeline & Web Conversion Audit")}
              className="mt-6 w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
            >
              <span>Unlock This Pipeline For Your Project</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
