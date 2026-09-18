"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface LuxuryOption {
  label: string;
  value: string;
  badge?: string;
}

interface LuxurySelectProps {
  label: string;
  icon?: ReactNode;
  value: string;
  onChange: (val: string) => void;
  options: (string | LuxuryOption)[];
  required?: boolean;
}

export default function LuxurySelect({
  label,
  icon,
  value,
  onChange,
  options,
  required = false,
}: LuxurySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize options to LuxuryOption objects
  const normalizedOptions: LuxuryOption[] = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value) || normalizedOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Label with icon */}
      <label className="block text-xs font-black text-slate-900 mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          {icon}
          <span>{label}</span>
          {required && <span className="text-rose-500">*</span>}
        </span>
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl border bg-white text-left transition-all duration-200 flex items-center justify-between shadow-[0_2px_8px_rgba(15,23,42,0.03)] cursor-pointer group ${
          isOpen
            ? "border-[#2258FF] ring-4 ring-[#2258FF]/10 shadow-[0_0_0_1px_#2258FF]"
            : "border-slate-300 hover:border-slate-400 hover:shadow-md"
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate pr-2">
          <span className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
            {selectedOption?.label || value}
          </span>
          {selectedOption?.badge && (
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold bg-blue-50 text-[#2258FF] border border-blue-200 px-1.5 py-0.5 rounded">
              {selectedOption.badge}
            </span>
          )}
        </div>

        <div className="w-6 h-6 rounded-lg bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-[#2258FF] flex items-center justify-center flex-shrink-0 transition-colors">
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-[#2258FF]" : ""}`}
          />
        </div>
      </button>

      {/* Dropdown Menu Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.2)] p-1.5 max-h-60 overflow-y-auto"
            role="listbox"
          >
            <div className="space-y-0.5">
              {normalizedOptions.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    role="option"
                    aria-selected={isSelected}
                    className={`w-full px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-blue-50/90 text-[#2258FF] font-black border border-blue-100"
                        : "text-slate-800 hover:bg-slate-100/80 hover:text-slate-950"
                    }`}
                  >
                    <span className="truncate pr-2">{opt.label}</span>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {opt.badge && (
                        <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                          {opt.badge}
                        </span>
                      )}
                      {isSelected && (
                        <div className="w-4 h-4 rounded-full bg-[#2258FF] text-white flex items-center justify-center">
                          <Check size={11} strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
