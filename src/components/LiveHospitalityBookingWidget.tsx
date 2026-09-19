"use client";

import { useState } from "react";
import {
  Utensils,
  Hotel,
  Calendar,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Flame,
  MessageCircle,
  Wine,
  PartyPopper,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LiveHospitalityBookingWidgetProps {
  onOpenAuditModal: () => void;
}

export default function LiveHospitalityBookingWidget({
  onOpenAuditModal,
}: LiveHospitalityBookingWidgetProps) {
  const [bookingType, setBookingType] = useState<"restaurant" | "hotel">("restaurant");
  const [guests, setGuests] = useState("2 Guests");
  const [seating, setSeating] = useState("Rooftop Terrace View");
  const [timeSlot, setTimeSlot] = useState("Tonight • 8:00 PM");
  const [isSimulated, setIsSimulated] = useState(false);

  const handleSimulate = () => {
    setIsSimulated(true);
    setTimeout(() => {
      // Keep it displayed until user resets or closes
    }, 4000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-[40px] shadow-[0_25px_60px_rgba(34,88,255,0.22)] border-4 border-white relative overflow-hidden text-white p-6 sm:p-10">
      {/* Background Photographic Image Dynamic Switcher */}
      <img
        src={
          bookingType === "restaurant"
            ? "/images/vibrant_dining_restaurant.jpg"
            : "/images/luxury_hotel_suite.jpg"
        }
        alt={bookingType === "restaurant" ? "Vibrant dining restaurant in Lagos" : "Luxury hotel suite in Lagos"}
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-all duration-700"
      />
      {/* Engaging Dynamic Overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          bookingType === "restaurant"
            ? "bg-gradient-to-br from-amber-950/92 via-[#0a1e64]/85 to-blue-950/90"
            : "bg-gradient-to-br from-[#2258FF]/95 via-[#1040e6]/90 to-blue-950/92"
        }`}
      />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/20 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles size={13} className="text-amber-300" />
            Interactive Live Experience Simulator
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white !text-white">
            What Your Guests Experience on a ChyWeb Platform
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            Test how effortlessly a Nigerian diner or traveler reserves a table or room in under 20 seconds.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="inline-flex p-1.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex-shrink-0 self-start sm:self-auto">
          <button
            onClick={() => {
              setBookingType("restaurant");
              setSeating("Rooftop Terrace View");
              setIsSimulated(false);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              bookingType === "restaurant"
                ? "bg-amber-500 text-slate-900 shadow-md font-black"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Utensils size={14} />
            <span>Table Flow</span>
          </button>
          <button
            onClick={() => {
              setBookingType("hotel");
              setSeating("Oceanview Penthouse");
              setIsSimulated(false);
            }}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
              bookingType === "hotel"
                ? "bg-white text-[#2258FF] shadow-md font-black"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Hotel size={14} />
            <span>Room Flow</span>
          </button>
        </div>
      </div>

      {/* Interactive Form Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 relative z-10">
        {/* Step 1: Party Size */}
        <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/50 transition-all">
          <label className="text-[11px] font-black text-white uppercase tracking-wider block mb-2 flex items-center gap-1.5">
            <Users size={14} className="text-amber-300" />
            {bookingType === "restaurant" ? "Number of Diners" : "Guests & Stays"}
          </label>
          <select
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value);
              setIsSimulated(false);
            }}
            className="w-full bg-slate-900/80 backdrop-blur-md border border-white/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-black text-white outline-none cursor-pointer shadow-md"
          >
            <option value="2 Guests (Romantic Dinner / Couple)" className="bg-slate-900 text-white">2 Guests (Couple / Intimate)</option>
            <option value="4 Guests (Family / Double Date)" className="bg-slate-900 text-white">4 Guests (Family / Friends)</option>
            <option value="6 Guests (Celebration Table)" className="bg-slate-900 text-white">6 Guests (Birthday / Group)</option>
            <option value="VIP Corporate Group (10+ Pax)" className="bg-slate-900 text-white">VIP Corporate Group (10+ Pax)</option>
          </select>
        </div>

        {/* Step 2: Time & Date Slot */}
        <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/50 transition-all">
          <label className="text-[11px] font-black text-white uppercase tracking-wider block mb-2 flex items-center gap-1.5">
            <Clock size={14} className="text-amber-300" />
            {bookingType === "restaurant" ? "Seating Time" : "Check-in Window"}
          </label>
          <select
            value={timeSlot}
            onChange={(e) => {
              setTimeSlot(e.target.value);
              setIsSimulated(false);
            }}
            className="w-full bg-slate-900/80 backdrop-blur-md border border-white/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-black text-white outline-none cursor-pointer shadow-md"
          >
            <option value="Tonight • 8:00 PM" className="bg-slate-900 text-white">Tonight • 8:00 PM (High Demand)</option>
            <option value="Tomorrow • 7:30 PM" className="bg-slate-900 text-white">Tomorrow • 7:30 PM (Dinner Rush)</option>
            <option value="Friday • 9:00 PM VIP" className="bg-slate-900 text-white">Friday • 9:00 PM VIP Night</option>
            <option value="Sunday Brunch • 1:00 PM" className="bg-slate-900 text-white">Sunday Brunch • 1:00 PM</option>
          </select>
        </div>

        {/* Step 3: Zone Selection */}
        <div className="p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 hover:border-white/50 transition-all">
          <label className="text-[11px] font-black text-white uppercase tracking-wider block mb-2 flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-300" />
            {bookingType === "restaurant" ? "Atmosphere Area" : "Suite Category"}
          </label>
          <select
            value={seating}
            onChange={(e) => {
              setSeating(e.target.value);
              setIsSimulated(false);
            }}
            className="w-full bg-slate-900/80 backdrop-blur-md border border-white/30 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-black text-white outline-none cursor-pointer shadow-md"
          >
            {bookingType === "restaurant" ? (
              <>
                <option value="Rooftop Terrace View" className="bg-slate-900 text-white">Rooftop Terrace View</option>
                <option value="VIP Private Dining Booth" className="bg-slate-900 text-white">VIP Private Dining Booth</option>
                <option value="Chef's Tasting Counter" className="bg-slate-900 text-white">Chef's Tasting Counter</option>
                <option value="Indoor Acoustic Lounge" className="bg-slate-900 text-white">Indoor Acoustic Lounge</option>
              </>
            ) : (
              <>
                <option value="Oceanview Penthouse" className="bg-slate-900 text-white">Oceanview Penthouse (₦450k/night)</option>
                <option value="Executive Diplomatic Suite" className="bg-slate-900 text-white">Executive Diplomatic Suite (₦320k/night)</option>
                <option value="Garden Poolside Villa" className="bg-slate-900 text-white">Garden Poolside Villa (₦280k/night)</option>
                <option value="Deluxe Business King" className="bg-slate-900 text-white">Deluxe Business King (₦160k/night)</option>
              </>
            )}
          </select>
        </div>
      </div>

      {/* CTA Button & Live Feedback */}
      <div className="pt-2 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-white font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>
            {bookingType === "restaurant"
              ? "🟢 3 prime tables left for this slot tonight"
              : "🟢 Only 2 suites remaining for this date"}
          </span>
        </div>

        <button
          onClick={handleSimulate}
          className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-xs sm:text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer ${
            bookingType === "restaurant"
              ? "bg-amber-400 hover:bg-amber-300 text-slate-900 shadow-amber-500/30"
              : "bg-white hover:bg-slate-100 text-[#2258FF] shadow-white/20"
          }`}
        >
          <span>Simulate 1-Tap Guest Reservation</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Animated Success Drawer Simulation */}
      <AnimatePresence>
        {isSimulated && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 15 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: 15 }}
            transition={{ duration: 0.35 }}
            className="mt-6 p-5 rounded-2xl bg-slate-900/90 backdrop-blur-md border-2 border-emerald-400 relative z-20 text-left text-white shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 border border-emerald-400 text-emerald-300 flex items-center justify-center flex-shrink-0">
                <PartyPopper size={22} className="animate-bounce" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black text-emerald-300 uppercase tracking-wider">
                    Instant Booking Confirmed! (0% OTA Fee)
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  <strong>Reserved:</strong> {guests} for <strong>{seating}</strong> on <em>{timeSlot}</em>.
                  An instant branded WhatsApp confirmation has been dispatched to the guest, and your floor manager's tablet has reserved table #14 automatically.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-emerald-300 font-bold text-[10px]">
                    ✓ No 18% OTA Cut
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-amber-300 font-bold text-[10px]">
                    ✓ Direct Customer Data Retained
                  </span>
                  <button
                    onClick={onOpenAuditModal}
                    className="ml-auto text-xs font-black text-amber-300 underline hover:text-white transition-colors cursor-pointer"
                  >
                    Want this on your website? Get It Installed →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
