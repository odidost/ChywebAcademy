"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection({ faqs, title }: { faqs: FaqItem[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden bg-dot-grid">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 orb-glow-emerald opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold text-xs uppercase tracking-wider mb-4 inline-block">
            Frequently Asked
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="premium-glass-card overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center p-6 text-left text-slate-900 font-bold text-base md:text-lg focus:outline-none hover:bg-slate-50/50 cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-8 h-8 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center text-brand-emerald flex-shrink-0 ml-4"
                  >
                    <Plus size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100/80 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
