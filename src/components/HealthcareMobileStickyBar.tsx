"use client";

import { PhoneCall, FileText, ArrowRight } from "lucide-react";

interface HealthcareMobileStickyBarProps {
  onOpenAudit: () => void;
  ctaText?: string;
}

export default function HealthcareMobileStickyBar({
  onOpenAudit,
  ctaText = "Free Health Audit",
}: HealthcareMobileStickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07192f]/95 backdrop-blur-lg border-t border-white/15 p-3 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2.5">
        <a
          href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy,%20I%20represent%20a%20healthcare%20facility%20in%20Nigeria%20and%20would%20like%20to%20discuss%20patient%20acquisition%20and%20web%20design."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-700/30 transition-all cursor-pointer"
        >
          <PhoneCall size={14} />
          <span>WhatsApp Chat</span>
        </a>

        <button
          onClick={onOpenAudit}
          className="flex-1 py-3 px-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-slate-950 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-teal-500/30 transition-all cursor-pointer"
        >
          <FileText size={14} />
          <span>{ctaText}</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
