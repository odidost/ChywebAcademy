"use client";

import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Percent, ArrowRight, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

interface HotelRoiCalculatorProps {
  onOpenAuditModal?: () => void;
}

export default function HotelRoiCalculator({ onOpenAuditModal }: HotelRoiCalculatorProps) {
  const [roomRate, setRoomRate] = useState<number>(150000);
  const [monthlySessions, setMonthlySessions] = useState<number>(3000);
  const [currentConversion, setCurrentConversion] = useState<number>(1.5);
  const [targetConversion, setTargetConversion] = useState<number>(2.5);
  const [otaCommissionRate, setOtaCommissionRate] = useState<number>(20);

  // Calculations
  const currentBookings = Math.round(monthlySessions * (currentConversion / 100));
  const projectedBookings = Math.round(monthlySessions * (targetConversion / 100));
  const extraBookingsPerMonth = Math.max(0, projectedBookings - currentBookings);

  const extraMonthlyRevenue = extraBookingsPerMonth * roomRate;
  const otaCommissionsSavedMonthly = Math.round(projectedBookings * roomRate * (otaCommissionRate / 100));
  const annualTotalGain = (extraMonthlyRevenue + otaCommissionsSavedMonthly) * 12;

  const formatNaira = (val: number) => {
    return "₦" + val.toLocaleString("en-NG");
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#2258FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2258FF]/10 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-2">
              <Calculator size={14} />
              Interactive Hotel Direct-Booking ROI Calculator
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              Calculate How Much You Can Save on OTA Fees
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
              See what happens when you make it easy for guests to book directly on their phones without spending an extra kobo on ads.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3 text-amber-900 text-xs font-semibold max-w-xs">
            <ShieldAlert size={24} className="text-amber-600 flex-shrink-0" />
            <span>Nigerian hotels lose 18%–25% of room revenue to OTAs like Booking.com every single month.</span>
          </div>
        </div>

        {/* Inputs & Outputs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-800 mb-2">
                <span>Average Nightly Room Rate (₦):</span>
                <span className="text-[#2258FF] font-black">{formatNaira(roomRate)}</span>
              </div>
              <input
                type="range"
                min="30000"
                max="600000"
                step="5000"
                value={roomRate}
                onChange={(e) => setRoomRate(Number(e.target.value))}
                className="w-full accent-[#2258FF] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₦30,000 (Mid-tier)</span>
                <span>₦600,000 (Luxury Suite)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-800 mb-2">
                <span>Monthly Website Visitors (Sessions):</span>
                <span className="text-[#2258FF] font-black">{monthlySessions.toLocaleString()} visitors</span>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="250"
                value={monthlySessions}
                onChange={(e) => setMonthlySessions(Number(e.target.value))}
                className="w-full accent-[#2258FF] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>500 sessions</span>
                <span>15,000 sessions</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Current Conversion:
                </label>
                <div className="flex items-center gap-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-800">
                  <Percent size={14} className="text-slate-400" />
                  <select
                    value={currentConversion}
                    onChange={(e) => setCurrentConversion(Number(e.target.value))}
                    className="bg-transparent w-full outline-none"
                  >
                    <option value={1.0}>1.0% (Poor mobile flow)</option>
                    <option value={1.5}>1.5% (Nigerian average)</option>
                    <option value={2.0}>2.0% (Average)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  ChyWeb Optimized:
                </label>
                <div className="flex items-center gap-1 bg-blue-50 border border-[#2258FF]/30 rounded-xl px-3 py-2 text-xs font-bold text-[#2258FF]">
                  <Percent size={14} className="text-[#2258FF]" />
                  <select
                    value={targetConversion}
                    onChange={(e) => setTargetConversion(Number(e.target.value))}
                    className="bg-transparent w-full outline-none"
                  >
                    <option value={2.5}>2.5% (Target baseline)</option>
                    <option value={3.0}>3.0% (Strong engine)</option>
                    <option value={3.8}>3.8% (Top tier conversion)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>OTA Commission Retained by Platforms:</span>
                <span className="text-rose-600 font-extrabold">{otaCommissionRate}% cut</span>
              </div>
              <input
                type="range"
                min="15"
                max="25"
                step="1"
                value={otaCommissionRate}
                onChange={(e) => setOtaCommissionRate(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>15% (Agoda/local)</span>
                <span>25% (Expedia/Booking.com premium)</span>
              </div>
            </div>
          </div>

          {/* Results Column - Photographic Luxury Backdrop */}
          <div className="lg:col-span-6 rounded-3xl shadow-[0_20px_50px_rgba(34,88,255,0.22)] border-4 border-white relative overflow-hidden text-white p-6 sm:p-8 flex flex-col justify-between group">
            {/* Background Luxury Hotel Suite Photo */}
            <img
              src="/images/luxury_hotel_suite.jpg"
              alt="Luxury hotel direct booking savings in Lagos"
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
            {/* Vibrant ChyWeb Royal Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2258FF]/95 via-[#1040e6]/90 to-blue-950/92 backdrop-blur-[1px]" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-1">
                <TrendingUp size={14} className="text-amber-300" />
                <span>Your Direct Monthly Savings</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 shadow-sm">
                  <span className="text-[10px] text-blue-100 uppercase font-black tracking-wider block mb-1">Additional Bookings</span>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    +{extraBookingsPerMonth} /mo
                  </div>
                  <span className="text-[10px] text-blue-200 block mt-0.5">from {currentBookings} to {projectedBookings}</span>
                </div>

                <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 shadow-sm">
                  <span className="text-[10px] text-blue-100 uppercase font-black tracking-wider block mb-1">Extra Room Revenue</span>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">
                    +{formatNaira(extraMonthlyRevenue)}
                  </div>
                  <span className="text-[10px] text-blue-200 block mt-0.5">0% OTA deduction</span>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 shadow-sm">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-blue-100 font-bold">OTA Commission Kept in Your Account:</span>
                  <span className="text-sm font-black text-emerald-300">+{formatNaira(otaCommissionsSavedMonthly)}/mo</span>
                </div>
                <div className="w-full bg-black/25 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, targetConversion * 26)}%` }}></div>
                </div>
              </div>

              <div className="p-4.5 rounded-2xl bg-gradient-to-r from-emerald-500/30 via-emerald-400/20 to-amber-400/20 backdrop-blur-md border-2 border-emerald-300/50 shadow-md">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-200 block mb-1">
                  Estimated 12-Month Extra Profit Kept:
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {formatNaira(annualTotalGain)}
                </div>
                <p className="text-[11px] text-blue-100 mt-1 font-medium">
                  Direct website bookings combined with zero 18%–25% commissions paid to middleman booking sites.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20 relative z-10">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-[#2258FF] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Keep This Money — Request Free Audit</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
