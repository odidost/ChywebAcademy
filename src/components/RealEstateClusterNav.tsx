"use client";

import Link from "next/link";
import {
  Building2,
  MonitorSmartphone,
  Search,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

interface RealEstateClusterNavProps {
  currentPath: string;
  onOpenAuditModal?: (service?: string) => void;
}

export default function RealEstateClusterNav({
  currentPath,
  onOpenAuditModal,
}: RealEstateClusterNavProps) {
  const links = [
    {
      title: "SEO for Real Estate Developers",
      subtitle: "Off-Plan & Pre-Launch Pipeline",
      desc: "Get your developments found by high-intent buyers in Lekki, Epe & Abuja before physical handover.",
      href: "/seo-for-real-estate-developers-in-nigeria",
      icon: <Building2 className="text-emerald-500" size={20} />,
      tag: "Off-Plan Pipeline",
    },
    {
      title: "Real Estate Web Designer",
      subtitle: "Speed-to-Lead & 5.6%+ Conversion",
      desc: "Fast, mobile-first websites with instant inquiry notifications to capture leads within 5 minutes.",
      href: "/real-estate-web-designer-nigeria",
      icon: <MonitorSmartphone className="text-emerald-500" size={20} />,
      tag: "10x Lead Closes",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles size={13} />
              <span>Nigerian Real Estate Growth Suite</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Explore Our Real Estate Growth Capabilities
            </h4>
          </div>

          {onOpenAuditModal && (
            <button
              onClick={() => onOpenAuditModal("Real Estate Full Stack Strategy")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer w-fit"
            >
              <span>Book Project Audit</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between group ${
                  isActive
                    ? "bg-emerald-950/40 border-emerald-500/50 shadow-lg shadow-emerald-950/50"
                    : "bg-white/5 border-white/10 hover:border-emerald-500/30 hover:bg-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      {link.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {link.tag}
                    </span>
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {link.title}
                  </div>
                  <div className="text-xs text-emerald-400/90 font-medium mb-1.5">
                    {link.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {link.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/80 group-hover:text-emerald-400">
                  <span>{isActive ? "Currently Viewing" : "View Strategy & Packages"}</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
