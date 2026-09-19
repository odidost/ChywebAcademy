"use client";

import Link from "next/link";
import {
  Activity,
  HeartPulse,
  Search,
  MonitorSmartphone,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface HealthcareClusterNavProps {
  currentPath: string;
  onOpenAuditModal?: (service?: string) => void;
}

export default function HealthcareClusterNav({
  currentPath,
  onOpenAuditModal,
}: HealthcareClusterNavProps) {
  const services = [
    {
      title: "Healthcare Digital Marketing",
      subtitle: "Multi-Channel Patient Acquisition",
      desc: "Get found by patients searching for urgent care across Google Maps, local search, paid campaigns, and compliant social media.",
      href: "/healthcare-digital-marketing-nigeria",
      icon: <Activity className="text-cyan-400" size={20} />,
      tag: "Full-Stack Care",
    },
    {
      title: "Healthcare Web Designer",
      subtitle: "Patient Trust & Fast Booking",
      desc: "Fast, mobile-first websites designed for anxious patients. Multi-department intuitive navigation and friction-free appointment flows.",
      href: "/healthcare-web-designer-nigeria",
      icon: <MonitorSmartphone className="text-cyan-400" size={20} />,
      tag: "Trust & Speed",
    },
    {
      title: "SEO for Healthcare",
      subtitle: "Symptom & Condition-Based Search",
      desc: "Rank when patients search their urgent symptoms or conditions on Google and inside AI assistants, not just when they type your facility name.",
      href: "/seo-for-healthcare-nigeria",
      icon: <Search className="text-cyan-400" size={20} />,
      tag: "Symptom Intent",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-[#071d36]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-1">
              <ShieldCheck size={13} />
              <span>Nigerian Healthcare & Life Sciences Suite</span>
            </div>
            <h4 className="text-xl font-bold text-white">
              Explore Our Healthcare Growth Services
            </h4>
          </div>

          {onOpenAuditModal && (
            <button
              onClick={() => onOpenAuditModal("Healthcare Growth Strategy")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors cursor-pointer w-fit"
            >
              <span>Book Clinical Audit</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => {
            const isActive = currentPath === service.href;
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between group ${
                  isActive
                    ? "bg-cyan-950/50 border-cyan-500/50 shadow-lg shadow-cyan-950/50"
                    : "bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {service.tag}
                    </span>
                  </div>
                  <div className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </div>
                  <div className="text-xs text-cyan-400 font-medium mb-1.5">
                    {service.subtitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/80 group-hover:text-cyan-400">
                  <span>{isActive ? "Currently Viewing" : "View Strategy & Pricing"}</span>
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
