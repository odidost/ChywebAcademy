"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const contactInfo = [
    { label: "Admissions Phone", val: "+234 (0) 803 XXXXXXX", icon: <Phone className="text-brand-emerald" size={20} /> },
    { label: "Email Support", val: "info@chywebacademy.com", icon: <Mail className="text-brand-emerald" size={20} /> },
    { label: "Office Address", val: "Lagos, Nigeria (Physical Cohorts)", icon: <MapPin className="text-brand-emerald" size={20} /> },
    { label: "Admissions Hours", val: "Mon - Sat: 9:00 AM - 5:00 PM", icon: <Clock className="text-brand-emerald" size={20} /> },
  ];

  return (
    <div className="relative min-h-screen bg-dot-grid bg-line-grid bg-noise bg-[#F5F4F0] pt-12">
      <section className="relative pt-24 pb-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-bold text-xs uppercase tracking-wider mb-6 inline-block">
            Connect With Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Contact Chyweb Academy</h1>
          <p className="text-slate-600 text-base md:text-lg">
            Have questions about admissions, payment installments, virtual cohorts, or corporate packages? Send us a message or chat on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details & Info Card */}
          <div className="flex flex-col gap-8">
            <div className="premium-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Channels</h3>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block mb-1">{info.label}</span>
                      <strong className="text-sm text-slate-900 font-bold">{info.val}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Mock */}
            <div className="premium-card rounded-2xl p-6 h-60 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-50 z-0"></div>
              <div className="z-10 flex flex-col items-center">
                <MapPin className="text-brand-emerald mb-3 animate-bounce" size={32} />
                <strong className="text-slate-900 block mb-1">Chyweb Academy Lagos</strong>
                <span className="text-xs text-slate-500">Map Placeholder (Active on site deployment)</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="premium-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 font-sans">Send an Inquiry</h3>
            {submitted ? (
              <div className="rounded-xl border border-blue-500/20 bg-blue-50/50 p-6 text-center text-blue-600">
                <strong className="block mb-2">Message Submitted Successfully!</strong>
                <p className="text-sm text-slate-600">An admissions counselor will review your inquiry and follow up within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full premium-input"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full premium-input"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full premium-input"
                    placeholder="Topic of inquiry"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full premium-input"
                    placeholder="Write details here"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-brand-emerald hover:bg-brand-emerald-hover text-white font-bold flex justify-center items-center gap-2 hover:-translate-y-0.5 transition-all shadow-md cursor-pointer"
                >
                  <Send size={16} />
                  Submit Message
                </button>
              </form>
            )}

            {/* Quick WhatsApp Support */}
            <div className="border-t border-slate-100 mt-8 pt-8 text-center flex flex-col items-center">
              <span className="text-xs text-slate-500 mb-4 block">Need immediate support?</span>
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-100 transition-all font-bold text-xs"
              >
                <MessageCircle size={16} />
                Admissions Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
