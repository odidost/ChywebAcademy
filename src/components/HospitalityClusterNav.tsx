"use client";

import Link from "next/link";
import {
  Hotel,
  Monitor,
  Megaphone,
  CalendarCheck,
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface HospitalityClusterNavProps {
  currentPath: string;
  onOpenAuditModal?: () => void;
}

export default function HospitalityClusterNav({
  currentPath,
  onOpenAuditModal,
}: HospitalityClusterNavProps) {
  const services = [
    {
      title: "Hospitality Digital Marketing",
      subtitle: "Full-Stack Strategy",
      desc: "Turn empty rooms & tables into high-margin direct bookings with coordinated Google Maps, review automation, and direct funnels.",
      href: "/hospitality-digital-marketing-agency-nigeria",
      icon: <Hotel className="text-[#2258FF]" size={20} />,
      tag: "Flagship Full-Stack",
    },
    {
      title: "Hospitality Web Design",
      subtitle: "Thumb-First Mobile UX",
      desc: "Sub-second Next.js web applications free of slow WordPress plugins. Built to book on mobile screens in under 20 seconds.",
      href: "/hospitality-web-designer-nigeria",
      icon: <Monitor className="text-[#2258FF]" size={20} />,
      tag: "Sub-Second Speed",
    },
    {
      title: "Hotel Digital Marketing",
      subtitle: "4-Channel Revenue Engine",
      desc: "Stop coordinating 4 uncoordinated freelancers. We unify your website, Google SEO, paid hotel ads, and social media.",
      href: "/hotel-digital-marketing-agency-nigeria",
      icon: <Megaphone className="text-[#2258FF]" size={20} />,
      tag: "4 Channels Unified",
    },
    {
      title: "Hotel Booking Engine Web Design",
      subtitle: "Frictionless Checkout",
      desc: "Native reservation engines with 1-tap Paystack cards, instant Nigerian bank transfers, live rates, and zero forced sign-ups.",
      href: "/hotel-booking-web-designer-nigeria",
      icon: <CalendarCheck className="text-[#2258FF]" size={20} />,
      tag: "Zero OTA Commission",
    },
    {
      title: "Hotel SEO (AEO & GEO)",
      subtitle: "AI & Maps Domination",
      desc: "Capture #1 rankings in Google Maps 3-Pack, ChatGPT recommendations, and Google AI Overviews across Lagos, Abuja, and PH.",
      href: "/hotel-seo-agency-nigeria",
      icon: <Search className="text-[#2258FF]" size={20} />,
      tag: "2026 AI Search Ready",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#F5F4F0] via-white to-[#FAF8F5] border-t border-b border-slate-200/90 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2258FF] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles size={13} className="text-amber-500" />
            <span>The ChyWeb Hospitality Growth Cluster</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Specialist Solutions Engineered for Nigerian Hoteliers & Restaurateurs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every layer of your direct booking engine works in complete harmony. Explore our dedicated hospitality capabilities or claim a zero-risk 48-hour property diagnosis.
          </p>
        </div>

        {/* 5-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((srv, idx) => {
            const isCurrent = currentPath === srv.href;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? "bg-gradient-to-br from-[#2258FF] to-[#1240e3] text-white shadow-[0_16px_36px_rgba(34,88,255,0.28)] ring-2 ring-[#2258FF]"
                    : "bg-white border-2 border-slate-200/90 text-slate-800 hover:border-[#2258FF]/50 hover:shadow-lg group"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isCurrent
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-[#2258FF] group-hover:bg-[#2258FF] group-hover:text-white transition-colors"
                      }`}
                    >
                      {srv.icon}
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                        isCurrent
                          ? "bg-amber-400 text-slate-950"
                          : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#2258FF]"
                      }`}
                    >
                      {isCurrent ? "Current Page" : srv.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-black tracking-tight mb-1 ${
                      isCurrent ? "!text-white" : "text-slate-900"
                    }`}
                    style={isCurrent ? { color: "#ffffff" } : undefined}
                  >
                    {srv.title}
                  </h3>

                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      isCurrent ? "text-amber-300" : "text-[#2258FF]"
                    }`}
                  >
                    {srv.subtitle}
                  </p>

                  <p
                    className={`text-xs leading-relaxed ${
                      isCurrent ? "text-white/85" : "text-slate-600"
                    }`}
                  >
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100/30">
                  {isCurrent ? (
                    <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                      <CheckCircle2 size={15} /> Active Service View
                    </span>
                  ) : (
                    <Link
                      href={srv.href}
                      className="text-xs font-black text-[#2258FF] group-hover:text-[#1240e3] flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}

          {/* 6th Card: Audit CTA Box */}
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0c1f5a] text-white flex flex-col justify-between border-2 border-white/15 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm">
                  FREE
                </div>
                <span className="text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-300/30">
                  ₦150k Waived 100%
                </span>
              </div>

              <h3 className="text-lg font-black !text-white tracking-tight mb-1" style={{ color: "#ffffff" }}>
                Free 48-Hour Property Audit
              </h3>

              <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-amber-300">
                Zero Risk • Confidential
              </p>

              <p className="text-xs text-slate-300 leading-relaxed">
                Uncover mobile checkout leaks, exact OTA commissions lost each month, and your live Google Maps & AI search visibility.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10 relative z-10">
              {onOpenAuditModal ? (
                <button
                  onClick={onOpenAuditModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0c33be] text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Claim Free ₦150k Audit</span>
                  <ArrowRight size={13} />
                </button>
              ) : (
                <Link
                  href="/hospitality-audit"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0c33be] text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 text-center"
                >
                  <span>Open Dedicated Audit Page</span>
                  <ArrowRight size={13} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
