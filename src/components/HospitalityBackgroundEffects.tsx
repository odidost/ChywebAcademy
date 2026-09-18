"use client";

import { useState, useEffect } from "react";
import {
  Utensils,
  Wine,
  Coffee,
  Hotel,
  Sparkles,
  Bell,
  Compass,
} from "lucide-react";
import { motion } from "framer-motion";

interface FloatingIconItem {
  icon: any;
  top: string;
  left?: string;
  right?: string;
  size: number;
  color: string;
  delay: number;
  duration: number;
  label: string;
}

export default function HospitalityBackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons: FloatingIconItem[] = [
    {
      icon: Utensils,
      top: "12%",
      left: "4%",
      size: 26,
      color: "text-amber-500/30 hover:text-amber-500",
      delay: 0,
      duration: 7,
      label: "Fine Dining",
    },
    {
      icon: Hotel,
      top: "18%",
      right: "5%",
      size: 30,
      color: "text-[#2258FF]/30 hover:text-[#2258FF]",
      delay: 1.2,
      duration: 8.5,
      label: "Boutique Hotel",
    },
    {
      icon: Wine,
      top: "35%",
      left: "6%",
      size: 24,
      color: "text-rose-500/30 hover:text-rose-500",
      delay: 0.8,
      duration: 6.5,
      label: "Lounge & Bar",
    },
    {
      icon: Bell,
      top: "48%",
      right: "6%",
      size: 26,
      color: "text-amber-500/30 hover:text-amber-500",
      delay: 2.1,
      duration: 7.2,
      label: "Concierge 24/7",
    },
    {
      icon: Coffee,
      top: "62%",
      left: "3%",
      size: 24,
      color: "text-amber-600/30 hover:text-amber-600",
      delay: 1.5,
      duration: 9,
      label: "Artisan Cafe",
    },
    {
      icon: Sparkles,
      top: "76%",
      right: "5%",
      size: 28,
      color: "text-[#2258FF]/30 hover:text-[#2258FF]",
      delay: 0.4,
      duration: 6,
      label: "5-Star Experience",
    },
    {
      icon: Compass,
      top: "88%",
      left: "5%",
      size: 26,
      color: "text-emerald-500/30 hover:text-emerald-500",
      delay: 2.4,
      duration: 8,
      label: "Prime Location",
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Interactive Floating Hospitality Icons */}
      {floatingIcons.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={idx}
            className="absolute pointer-events-auto cursor-pointer group hidden md:block"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
            animate={{
              y: [0, -14, 0],
              rotate: [0, 4, -4, 0],
              x: mousePosition.x * (idx % 2 === 0 ? 1 : -1) * 0.5,
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            <div className="relative p-3 rounded-2xl bg-white/40 backdrop-blur-xs border border-white/60 shadow-xs group-hover:bg-white group-hover:shadow-lg group-hover:scale-125 transition-all duration-300">
              <IconComponent size={item.size} className={`${item.color} transition-colors duration-300`} />
              {/* Tooltip on hover */}
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-[#0b0f19] text-white text-[10px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
                {item.label}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Ambient Hospitality Glow Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[40%] right-[15%] w-[600px] h-[600px] bg-[#2258FF]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[25%] w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
