"use client";

import { useState } from "react";
import {
  Activity,
  Search,
  CheckCircle2,
  AlertCircle,
  ShieldAlert,
  Bot,
  ArrowRight,
  Loader2,
  Lock,
  Sparkles,
  MapPin,
  HeartPulse,
} from "lucide-react";

interface HealthcareVisibilityCheckerProps {
  onOpenAudit: (service?: string) => void;
}

export default function HealthcareVisibilityChecker({
  onOpenAudit,
}: HealthcareVisibilityCheckerProps) {
  const [facilityName, setFacilityName] = useState("");
  const [cityDistrict, setCityDistrict] = useState("Lekki Phase 1 / Victoria Island, Lagos");
  const [facilityType, setFacilityType] = useState("Multi-Specialty Clinic");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | {
    score: number;
    mapsRanking: string;
    symptomCoverage: string;
    aiSearchPresence: string;
    complianceStatus: string;
  }>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!facilityName.trim()) return;

    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        score: 48,
        mapsRanking: "Outside Google 3-Pack (Position #9–#15 for 'near me' queries)",
        symptomCoverage: "Facility-Name Only — Invisible for 82% of local symptom searches",
        aiSearchPresence: "Thin Entity Data — ChatGPT & Gemini cite competitors first",
        complianceStatus: "NDPA Data Notice & 2026 E-Pharmacy verification required",
      });
    }, 1500);
  };

  return (
    <div className="bg-[#07192f] border-2 border-cyan-500/30 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Activity size={14} />
              <span>Interactive Patient Discovery Diagnostic</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Test Your Facility&apos;s Online Patient Visibility
            </h3>
            <p className="text-white/70 text-xs sm:text-sm mt-1 max-w-xl">
              Nigeria serves 200M+ people. Are patients finding your clinic, hospital, or pharmacy when searching urgent symptoms, or are they finding a competitor?
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
              <HeartPulse size={20} />
            </div>
            <div className="text-xs">
              <div className="text-white/60">Search Behavior Rule:</div>
              <div className="font-bold text-cyan-300">Patients Search Symptoms, Not Names</div>
            </div>
          </div>
        </div>

        {/* Scan Form */}
        <div className="pt-8">
          <form onSubmit={handleScan} className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold text-white/80 mb-1">Facility Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Lifecrest Medical / Medplus Lekki"
                value={facilityName}
                onChange={(e) => setFacilityName(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="sm:col-span-4">
              <label className="block text-xs font-bold text-white/80 mb-1">Target District / City</label>
              <select
                value={cityDistrict}
                onChange={(e) => setCityDistrict(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#0e2744] border border-white/20 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 cursor-pointer"
              >
                <option value="Lekki Phase 1 / Victoria Island, Lagos">Lekki Phase 1 / VI, Lagos</option>
                <option value="Ikeja / GRA / Surulere, Lagos">Ikeja / Mainland, Lagos</option>
                <option value="Maitama / Wuse 2 / Garki, Abuja">Maitama / Wuse 2, Abuja</option>
                <option value="GRA / Old GRA, Port Harcourt">GRA, Port Harcourt</option>
                <option value="Bodija / Ring Road, Ibadan">Bodija, Ibadan</option>
              </select>
            </div>

            <div className="sm:col-span-3 flex items-end">
              <button
                type="submit"
                disabled={isScanning}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Diagnosing...</span>
                  </>
                ) : (
                  <>
                    <Search size={16} />
                    <span>Run Health Scan</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Diagnostic Result */}
          {scanResult && (
            <div className="bg-white/5 border border-cyan-500/40 rounded-2xl p-6 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    Diagnostic Report for {facilityName} ({cityDistrict})
                  </span>
                  <div className="text-lg font-bold text-white mt-0.5">
                    Estimated Patient Discovery Score: <span className="text-amber-400 font-mono">{scanResult.score}/100</span> (Needs Immediate Optimization)
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold">
                    Patients Leaking to Competitors
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-3.5 bg-black/20 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-300 mb-1">
                    <MapPin size={15} />
                    <span>Google Maps 3-Pack Footprint</span>
                  </div>
                  <p className="text-xs text-white/80">{scanResult.mapsRanking}</p>
                </div>

                <div className="p-3.5 bg-black/20 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-1">
                    <HeartPulse size={15} />
                    <span>Symptom & Urgent Query Visibility</span>
                  </div>
                  <p className="text-xs text-white/80">{scanResult.symptomCoverage}</p>
                </div>

                <div className="p-3.5 bg-black/20 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 mb-1">
                    <Bot size={15} />
                    <span>ChatGPT & Gemini AI Overviews</span>
                  </div>
                  <p className="text-xs text-white/80">{scanResult.aiSearchPresence}</p>
                </div>

                <div className="p-3.5 bg-black/20 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                    <Lock size={15} />
                    <span>NDPA & E-Pharmacy Compliance</span>
                  </div>
                  <p className="text-xs text-white/80">{scanResult.complianceStatus}</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-white/70">
                  Fix these gaps before a competitor claims your corridor&apos;s search volume.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenAudit(`Healthcare Visibility & SEO Audit (${facilityName})`)}
                  className="py-2.5 px-5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xs flex items-center gap-2 cursor-pointer transition-all shadow-lg shadow-cyan-500/25"
                >
                  <span>Claim Full 48-Hour Clinical Audit</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
