import React from "react";
import { MagicCard } from "../magicui/magic-card";
import { cn } from "@/lib/utils";

// Modern, dark, glassy magic card with animated accent
// Accepts custom className and gradient props

export type MagicCardProps = {
  className?: string;
  children?: React.ReactNode;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
};
const CustomMagicCard = ({ children, className, ...props }: MagicCardProps) => {
  return (
    <MagicCard
      className={cn([
        "relative overflow-hidden rounded-3xl border border-white/10 bg-black backdrop-blur-md shadow-2xl p-6 transition-all duration-300 hover:shadow-accent/30 hover:border-accent/30",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-accent/10 before:to-transparent before:opacity-80 before:blur-2xl before:rounded-2xl before:pointer-events-none h-fit",
        className,
      ])}
      {...props}
      gradientFrom="hsla(35, 80%, 75%, 0.9)"
      gradientTo="hsla(35, 60%, 50%, 0.4)"
    >
              {children}
      {/* Animated glowing accent ring */}
      {/* <div className="pointer-events-none absolute -inset-1 rounded-2xl border-2 border-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow" />
      <div className="relative z-10"></div> */}
    </MagicCard>
  );
};

export default CustomMagicCard;
