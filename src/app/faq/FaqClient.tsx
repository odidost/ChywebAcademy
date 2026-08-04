"use client";

import { useState } from "react";
import FaqSection from "@/components/FaqSection";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState("Admissions");

  const categories = ["Admissions", "Payments", "Certificates", "Support", "Online Learning"];

  const faqsData: Record<string, { question: string; answer: string }[]> = {
    Admissions: [
      { question: "Who can join the academy programs?", answer: "Our courses are open to graduates, entrepreneurs, employees, and freelancers who want practical tech skills. No experience is required." },
      { question: "How do I secure my enrollment slot?", answer: "Click 'Enroll Now' on any course page, complete the multi-step registration form, and verify your tuition payment." },
    ],
    Payments: [
      { question: "Are payment installments supported?", answer: "Yes, we support tuition payment in 2 structured installments for virtual and physical cohorts." },
      { question: "Do you offer scholarships or discount plans?", answer: "We periodically offer partial tuition scholarships based on merit and early registration discounts." },
    ],
    Certificates: [
      { question: "Will I get a verified course certificate?", answer: "Yes. Students receive a verified digital certificate of completion after completing assignments and the capstone project." },
      { question: "Can I embed my certificate on LinkedIn?", answer: "Yes, our certificates are fully compatible with LinkedIn and portfolio embedding formats." },
    ],
    Support: [
      { question: "What mentorship channels are available?", answer: "Students get access to weekly direct Q&A checkins, email review systems, and WhatsApp admissions support." },
      { question: "Do I get support after graduation?", answer: "Yes! All graduates join the active alumni community where Oko David offers ongoing career advice and project feedback." },
    ],
    "Online Learning": [
      { question: "How are classes delivered?", answer: "Classes are delivered live online via interactive video rooms. Recorded playbacks are available in the student folder." },
      { question: "What specs do I need to attend online?", answer: "A stable internet connection, a laptop or PC (Core i3+ recommended), and active Zoom/Google Meet installations." },
    ],
  };

  return (
    <div className="relative min-h-screen bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] pt-12">
      <section className="relative pt-24 pb-10 max-w-7xl mx-auto px-6 text-center">
        <span className="px-4 py-1.5 rounded-full bg-[#2258FF]/10 border border-[#2258FF]/20 text-[#2258FF] font-bold text-xs uppercase tracking-wider mb-6 inline-block">
          Support Center
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h1>
        <p className="text-slate-600 text-base max-w-xl mx-auto mb-12">
          Select a category below to quickly resolve your questions about tuition, certificates, learning format, and career support.
        </p>

        {/* Tab Links */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 border-b border-slate-200 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === cat ? "bg-[#2258FF] text-white" : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion container */}
      <div className="pb-24">
        <FaqSection faqs={faqsData[activeTab]} title={`${activeTab} Support Details`} />
      </div>
    </div>
  );
}
