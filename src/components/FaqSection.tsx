"use client";

import { useState } from "react";
import { Plus, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection({ faqs, title }: { faqs: FaqItem[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full py-24 bg-gradient-to-b from-[#F5F4F0] via-[#FAF9F5] to-[#F2EFE9] relative border-t border-slate-200/80 overflow-hidden bg-dot-grid">
      {/* Decorative Ambient Lighting Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#2258FF]/8 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-amber-400/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-slate-800 text-xs font-bold mb-4">
            <Sparkles size={13} className="text-amber-500" />
            <span className="text-[#2258FF] font-black uppercase tracking-wider">Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Everything you need to know about our direct booking strategy, OTA reduction timelines, pricing parity, and ROI.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            const itemNumber = (idx + 1).toString().padStart(2, "0");

            return (
              <div
                key={idx}
                className={`rounded-2xl sm:rounded-3xl transition-all duration-300 overflow-hidden relative ${
                  isOpen
                    ? "bg-white border-2 border-[#2258FF] shadow-[0_16px_40px_rgba(34,88,255,0.12)] ring-4 ring-[#2258FF]/5"
                    : "bg-white/80 hover:bg-white backdrop-blur-md border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_rgba(34,88,255,0.08)] hover:border-[#2258FF]/40"
                }`}
              >
                {/* Active Left Accent Indicator Bar */}
                {isOpen && (
                  <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#2258FF] via-indigo-600 to-amber-400" />
                )}

                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-7 text-left focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 pr-4">
                    {/* Numeric Badge */}
                    <span
                      className={`w-8 h-8 rounded-xl font-mono text-xs font-black flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#2258FF] text-white shadow-sm"
                          : "bg-slate-100 text-slate-500 group-hover:bg-[#2258FF]/10 group-hover:text-[#2258FF]"
                      }`}
                    >
                      {itemNumber}
                    </span>
                    <span
                      className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isOpen ? "text-[#2258FF]" : "text-slate-900 group-hover:text-[#2258FF]"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Morphing Toggle Button */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#2258FF] text-white shadow-md shadow-blue-500/30"
                        : "bg-slate-100 text-slate-600 group-hover:bg-[#2258FF]/15 group-hover:text-[#2258FF]"
                    }`}
                  >
                    <Plus size={18} strokeWidth={2.5} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-7 pb-6 sm:pb-7 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 pl-14 sm:pl-16">
                        <p className="font-normal text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast-Contact Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2258FF]/10 text-[#2258FF] border border-[#2258FF]/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={22} />
            </div>
            <div>
              <strong className="text-sm sm:text-base font-extrabold text-slate-900 block">
                Have a specific question about your property?
              </strong>
              <span className="text-xs text-slate-500 font-medium">
                Our hospitality marketing desk responds within 5 minutes on WhatsApp.
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/2349067623555?text=Hello%20ChyWeb%20Academy%2C%20I%20have%20a%20question%20about%20your%20hospitality%20marketing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#2258FF] hover:bg-[#1040e6] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 flex-shrink-0 hover:-translate-y-0.5"
          >
            <span>Ask on WhatsApp</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
