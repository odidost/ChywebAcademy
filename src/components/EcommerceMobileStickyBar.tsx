"use client";

import { Phone, Sparkles, Send, ArrowRight } from "lucide-react";

interface EcommerceMobileStickyBarProps {
  onOpenAuditModal: () => void;
}

export default function EcommerceMobileStickyBar({
  onOpenAuditModal,
}: EcommerceMobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] md:hidden">
      <div className="flex items-center gap-2">
        <a
          href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20want%20to%20audit%20my%20ecommerce%20store%20visibility."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md active:scale-95 transition-transform"
          aria-label="WhatsApp Ecommerce Audit Desk"
        >
          <Phone size={20} />
        </a>

        <button
          onClick={onOpenAuditModal}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] text-white font-black text-xs shadow-md active:scale-[0.98] transition-all flex items-center justify-between cursor-pointer"
        >
          <div className="text-left leading-tight">
            <span className="flex items-center gap-1.5 text-amber-300 text-[10px] font-mono font-bold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              ₦150k Store Audit Free
            </span>
            <span className="text-xs font-black block text-white">Get Found on Google &amp; ChatGPT</span>
          </div>
          <ArrowRight size={16} className="text-white flex-shrink-0 ml-2" />
        </button>
      </div>
    </div>
  );
}
