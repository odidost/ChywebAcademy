import React from "react";

interface DecorativeIconProps {
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number; size?: string | number }>;
  size?: string; // e.g. "w-[28rem] h-[28rem]"
  opacity?: string; // e.g. "opacity-[0.03]"
  position?: string; // e.g. "absolute top-1/2 -left-20"
  rotation?: string; // e.g. "rotate-12"
  color?: string; // e.g. "text-[#2258FF]"
  strokeWidth?: number; // e.g. 0.4
  className?: string;
}

export default function DecorativeIcon({
  Icon,
  size = "w-80 h-80",
  opacity = "opacity-[0.03]",
  position = "absolute top-10 right-10",
  rotation = "rotate-0",
  color = "text-[#2258FF]",
  strokeWidth = 0.4,
  className = ""
}: DecorativeIconProps) {
  return (
    <div className={`pointer-events-none select-none z-0 ${position} ${opacity} ${color} ${rotation} ${size} ${className}`}>
      <Icon size="100%" strokeWidth={strokeWidth} />
    </div>
  );
}
