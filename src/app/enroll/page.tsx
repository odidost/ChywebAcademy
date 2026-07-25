"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, ShieldCheck, CreditCard } from "lucide-react";

export default function EnrollPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    course: "Digital Marketing Masterclass",
    mode: "Online Live Classes",
    name: "",
    email: "",
    phone: "",
    paymentOption: "One-Time",
  });

  const courses = [
    { name: "Digital Marketing Masterclass", price: "₦150,000" },
    { name: "SEO Training Programme", price: "₦100,000" },
    { name: "Paid Advertising Training (Google & Meta Ads)", price: "₦80,000" },
    { name: "Web Design Training Course", price: "₦120,000" },
    { name: "AI & Productivity Program", price: "₦80,000" },
    { name: "Graphic Design Training", price: "₦100,000" },
  ];

  const handleNext = () => {
    if (step === 2 && (!formData.name || !formData.email || !formData.phone)) {
      alert("Please fill in all details before proceeding.");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleConfirm = () => {
    setStep(4);
  };

  return (
    <div className="relative min-h-screen bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] pt-12">
      <section className="relative pt-24 pb-20 max-w-4xl mx-auto px-6">
        {/* Progress bar */}
        {step < 4 && (
          <div className="mb-12">
            <div className="flex justify-between items-center text-xs text-slate-500 mb-2 font-medium">
              <span className={step >= 1 ? "text-brand-emerald font-bold" : ""}>1. Select Course</span>
              <span className={step >= 2 ? "text-brand-emerald font-bold" : ""}>2. Student Info</span>
              <span className={step >= 3 ? "text-brand-emerald font-bold" : ""}>3. Review & Pay</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-brand-emerald h-full transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Step 1: Course Selection */}
        {step === 1 && (
          <div className="premium-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Your Program</h2>
            <div className="flex flex-col gap-6 mb-8 text-sm text-slate-600">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Select Course</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full premium-input"
                >
                  {courses.map((c) => (
                    <option key={c.name} value={c.name} className="bg-white text-slate-900">
                      {c.name} ({c.price})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Learning Mode</label>
                <div className="flex gap-4">
                  {["Online Live Classes", "Physical Classes (Lagos)"].map((m) => (
                    <label
                      key={m}
                      className={`flex-1 p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        formData.mode === m ? "border-brand-emerald bg-brand-emerald/5 text-brand-emerald" : "border-slate-200 bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="mode"
                        value={m}
                        checked={formData.mode === m}
                        onChange={() => setFormData({ ...formData, mode: m })}
                        className="hidden"
                      />
                      <span className="text-xs font-medium">{m}</span>
                      {formData.mode === m && <Check size={14} className="text-brand-emerald" />}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3.5 rounded-lg bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold flex justify-center items-center gap-2 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
            >
              Continue to Student Info
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Step 2: Student Details */}
        {step === 2 && (
          <div className="premium-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Student Information</h2>
            <div className="flex flex-col gap-6 mb-8 text-sm text-slate-600">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full premium-input"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full premium-input"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Phone Number (WhatsApp)</label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full premium-input"
                  placeholder="+234 (0) 80..."
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="w-1/3 py-3.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-bold flex justify-center items-center gap-2 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3.5 rounded-lg bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold flex justify-center items-center gap-2 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
              >
                Proceed to Payment Review
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Payment Options */}
        {step === 3 && (
          <div className="premium-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Review & Payment</h2>
            
            <div className="rounded-xl bg-slate-50 p-6 border border-slate-200 mb-8 text-sm flex flex-col gap-3 text-slate-600">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>Course Selected:</span>
                <strong className="text-slate-900">{formData.course}</strong>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>Learning Mode:</span>
                <span className="text-slate-900">{formData.mode}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span>Student Name:</span>
                <span className="text-slate-900">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Tuition Rate:</span>
                <strong className="text-brand-emerald text-base">
                  {courses.find((c) => c.name === formData.course)?.price}
                </strong>
              </div>
            </div>

            <div className="mb-8 text-sm text-slate-600">
              <label className="block text-xs font-semibold text-slate-500 mb-2">Select Tuition Option</label>
              <div className="flex gap-4">
                {["One-Time", "Installment Plan"].map((opt) => (
                  <label
                    key={opt}
                    className={`flex-1 p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      formData.paymentOption === opt ? "border-brand-emerald bg-brand-emerald/5 text-brand-emerald" : "border-slate-200 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentOption"
                      value={opt}
                      checked={formData.paymentOption === opt}
                      onChange={() => setFormData({ ...formData, paymentOption: opt })}
                      className="hidden"
                    />
                    <span className="text-xs font-medium">{opt}</span>
                    {formData.paymentOption === opt && <Check size={14} className="text-brand-emerald" />}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="w-1/3 py-3.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-bold flex justify-center items-center gap-2 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
                Back
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 py-3.5 rounded-lg bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold flex justify-center items-center gap-2 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
              >
                <CreditCard size={16} />
                Confirm Registration
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Success confirmation */}
        {step === 4 && (
          <div className="premium-card rounded-2xl p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6">
              <ShieldCheck size={36} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Registration Confirmed!</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Congratulations <strong>{formData.name}</strong>, your seat for the <strong>{formData.course}</strong> is provisionally reserved. An admissions counselor will contact you via phone/WhatsApp at <strong>{formData.phone}</strong> to share final invoice and schedule details.
            </p>
            <div className="flex gap-4 w-full justify-center">
              <Link href="/" className="px-6 py-3 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-200 transition-all">
                Return to Home
              </Link>
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all"
              >
                Admissions WhatsApp
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
