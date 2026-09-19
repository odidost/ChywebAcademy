"use client";

import { useState } from "react";
import { Plus, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title: string;
  subtitle?: string;
  supportTitle?: string;
  supportDesc?: string;
  whatsappMessage?: string;
}

export default function FaqSection({
  faqs,
  title,
  subtitle = "Everything you need to know about our organic search strategy, technical audit timelines, and search ROI.",
  supportTitle = "Have a specific question about your store?",
  supportDesc = "Our SEO and search architecture team responds within minutes on WhatsApp.",
  whatsappMessage = "Hello ChyWeb Academy, I have a question about your SEO services.",
}: FaqSectionProps) {
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
          {subtitle && (
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            const itemNumber = (idx + 1).toString().padStart(2, "0");

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#2258FF]/40 shadow-[0_12px_32px_rgba(34,88,255,0.08)] ring-1 ring-[#2258FF]/20"
                    : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md transition-colors ${
                        isOpen
                          ? "bg-[#2258FF] text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {itemNumber}
                    </span>
                    <span
                      className={`font-bold text-base sm:text-lg transition-colors ${
                        isOpen ? "text-[#2258FF]" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#2258FF] text-white rotate-45"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <Plus size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Direct Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#2258FF]/10 text-[#2258FF] border border-[#2258FF]/20 flex items-center justify-center flex-shrink-0">
              <MessageCircle size={22} />
            </div>
            <div>
              <strong className="text-sm sm:text-base font-extrabold text-slate-900 block">
                {supportTitle}
              </strong>
              <span className="text-xs text-slate-500 font-medium">
                {supportDesc}
              </span>
            </div>
          </div>
          <a
            href={`https://wa.me/2349067623555?text=${encodeURIComponent(whatsappMessage)}`}
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
