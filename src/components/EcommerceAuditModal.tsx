"use client";

import { useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Send,
  Clock,
  ShoppingBag,
  Layers,
  Phone,
  Globe,
  Target,
  AlertTriangle,
  Lock,
  Star,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LuxurySelect from "@/components/LuxurySelect";

interface EcommerceAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

const STORE_PLATFORMS = [
  { label: "Shopify Store", value: "Shopify Store", badge: "Popular" },
  { label: "WooCommerce / WordPress", value: "WooCommerce / WordPress" },
  { label: "Custom (Next.js / React / Laravel)", value: "Custom (Next.js / React / Laravel)", badge: "High Speed" },
  { label: "Magento / Adobe Commerce", value: "Magento / Adobe Commerce", badge: "Enterprise" },
  { label: "Instagram DM / WhatsApp store shifting to Web", value: "Instagram / WhatsApp shifting to Web" },
];

const PRODUCT_CATEGORIES = [
  { label: "Beauty & Skincare", value: "Beauty & Skincare", badge: "High AI Search" },
  { label: "Phones & Electronics", value: "Phones & Electronics", badge: "Spec Driven" },
  { label: "Fashion & Clothing", value: "Fashion & Clothing", badge: "High Volume" },
  { label: "Furniture & Home Decor", value: "Furniture & Home Decor" },
  { label: "Supermarket & Food Grocery", value: "Supermarket & Food Grocery", badge: "Repeat Orders" },
  { label: "Jewelry & Luxury Accessories", value: "Jewelry & Luxury Accessories" },
  { label: "Baby & Maternity Products", value: "Baby & Maternity Products" },
  { label: "Auto Parts & Hardware", value: "Auto Parts & Hardware" },
  { label: "Health & Fitness", value: "Health & Fitness" },
  { label: "Other Multi-Category Store", value: "Other Multi-Category Store" },
];

const CATALOG_SIZES = [
  { label: "Under 100 SKUs (Boutique)", value: "Under 100 SKUs" },
  { label: "100 – 1,000 SKUs (Growing Catalog)", value: "100 - 1,000 SKUs", badge: "Core" },
  { label: "1,000 – 5,000 SKUs (High Volume)", value: "1,000 - 5,000 SKUs", badge: "Large" },
  { label: "5,000+ SKUs (Enterprise Marketplace)", value: "5,000+ SKUs", badge: "Enterprise" },
];

const GROWTH_CHALLENGES = [
  { label: "High Meta/TikTok ad costs & declining ROAS", value: "High Meta/TikTok ad costs & declining ROAS", badge: "Critical" },
  { label: "Invisible on ChatGPT & Google's AI Overview", value: "Invisible on ChatGPT & Google's AI Overview", badge: "AI Blindspot" },
  { label: "Google Merchant Center disapproved products / zero traffic", value: "Google Merchant Center disapproved products", badge: "Feed Error" },
  { label: "Mobile store is slow or checkout drops off (>82% traffic)", value: "Mobile store is slow or checkout drops off", badge: "Mobile Friction" },
  { label: "Stuck doing manual Instagram DM sales instead of automated web orders", value: "Stuck doing manual Instagram DM sales" },
];

export default function EcommerceAuditModal({
  isOpen,
  onClose,
  defaultCategory = "Beauty & Skincare",
}: EcommerceAuditModalProps) {
  const [formData, setFormData] = useState({
    storeName: "",
    storeUrl: "",
    platform: "Shopify Store",
    category: defaultCategory,
    catalogSize: "100 - 1,000 SKUs",
    phoneOrWhatsApp: "",
    biggestChallenge: "High Meta/TikTok ad costs & declining ROAS",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.storeName || !formData.phoneOrWhatsApp) return;

    const message = encodeURIComponent(
      `Hello ChyWeb Academy! I want to claim the Free 48-Hour Ecommerce SEO & AI Search Audit (₦150k Value).\n\n` +
      `🛍️ Store Name: ${formData.storeName}\n` +
      `🌐 Store URL: ${formData.storeUrl || "Will share in chat"}\n` +
      `⚙️ Platform: ${formData.platform}\n` +
      `📦 Product Category: ${formData.category}\n` +
      `📊 Catalog Size: ${formData.catalogSize}\n` +
      `📞 WhatsApp / Phone: ${formData.phoneOrWhatsApp}\n` +
      `⚠️ Primary Growth Bottleneck: ${formData.biggestChallenge}`
    );

    const waUrl = `https://wa.me/2349067623555?text=${message}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0a1e64]/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-white border-2 border-slate-200/90 rounded-[28px] sm:rounded-[36px] shadow-[0_25px_70px_rgba(11,15,25,0.35)] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Top Urgency Ribbon */}
            <div className="bg-gradient-to-r from-[#2258FF] via-[#1546e5] to-[#0c2e9e] text-white px-5 sm:px-8 py-3 text-xs sm:text-sm font-bold flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-amber-300 font-mono uppercase text-[11px] tracking-wider">
                  Verified Free Audit
                </span>
                <span className="hidden sm:inline text-white/90">
                  • 48-Hour Technical, Schema &amp; AI Citation Teardown (₦150k Value)
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer text-white/90 hover:text-white"
                aria-label="Close modal"
              >
                <X size={15} />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-6 sm:p-8 lg:p-10 overflow-y-auto flex-1">
              {!submitted ? (
                <div>
                  <div className="mb-6 sm:mb-8 text-center sm:text-left">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#2258FF] text-xs font-bold mb-3">
                      <Sparkles size={13} className="text-amber-500" />
                      <span>Zero-Obligation • Tailored to Nigerian Shopper Behavior</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                      Get Your Free Store SEO, Google Merchant &amp; AI Visibility Audit
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      We manually review your store&apos;s product schema, Google Shopping feed, mobile speed score, and whether ChatGPT or Google AI Overviews cite your products or competitors.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <ShoppingBag size={14} className="text-[#2258FF]" />
                          <span>Store / Brand Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.storeName}
                          onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                          placeholder="e.g., Kemi Glow Beauty, GadgetHub Lagos"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2258FF] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Globe size={14} className="text-[#2258FF]" />
                          <span>Store Website URL</span>
                        </label>
                        <input
                          type="text"
                          value={formData.storeUrl}
                          onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                          placeholder="e.g., https://yourstore.com.ng"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2258FF] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <LuxurySelect
                          label="Store Platform"
                          options={STORE_PLATFORMS}
                          value={formData.platform}
                          onChange={(val) => setFormData({ ...formData, platform: val })}
                        />
                      </div>

                      <div>
                        <LuxurySelect
                          label="Product Category"
                          options={PRODUCT_CATEGORIES}
                          value={formData.category}
                          onChange={(val) => setFormData({ ...formData, category: val })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <LuxurySelect
                          label="Catalog Size (SKUs)"
                          options={CATALOG_SIZES}
                          value={formData.catalogSize}
                          onChange={(val) => setFormData({ ...formData, catalogSize: val })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Phone size={14} className="text-[#2258FF]" />
                          <span>WhatsApp / Phone Number *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phoneOrWhatsApp}
                          onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                          placeholder="e.g., 0803 123 4567"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2258FF] focus:bg-white focus:outline-none text-slate-900 text-sm font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <LuxurySelect
                        label="#1 Current Growth Bottleneck"
                        options={GROWTH_CHALLENGES}
                        value={formData.biggestChallenge}
                        onChange={(val) => setFormData({ ...formData, biggestChallenge: val })}
                      />
                    </div>

                    {/* Security & Free Guarantee Note */}
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 text-slate-700 text-xs leading-relaxed">
                      <ShieldCheck size={18} className="text-[#2258FF] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-bold block">
                          100% Free • No Obligation • Delivered in 48 Hours
                        </strong>
                        We never share your store catalog metrics or contact info. Your audit report will include actual screenshots and prioritized action items.
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#2258FF] to-[#1240e3] hover:from-[#1b4ae8] hover:to-[#0d34c2] text-white font-black text-base shadow-[0_12px_28px_rgba(34,88,255,0.32)] hover:shadow-[0_16px_36px_rgba(34,88,255,0.42)] transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:-translate-y-0.5"
                    >
                      <span>Claim Free Ecommerce Audit Roadmap →</span>
                      <Send size={16} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Your Audit Request Has Been Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    We have opened WhatsApp so our ecommerce SEO engineering desk can verify your store domain and deliver your 48-hour diagnostic roadmap.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
