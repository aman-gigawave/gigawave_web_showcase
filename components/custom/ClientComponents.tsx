import { TOOLS } from "@/lib/types";
import { cn, getIconPath } from "@/lib/utils";
import Image from "next/image";
import { forwardRef } from "react";

export const Bhuvana = forwardRef<
  HTMLDivElement,
  { className?: string; icon: TOOLS }
>(({ className, icon }, ref) => {
  const iconPath = getIconPath(icon);

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/10 via-yellow-400/5 to-yellow-600/20 font-bold text-neutral-300 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0px_10px_rgba(245,158,11,0.1)] p-2.5 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-white/5 before:to-transparent before:rounded-full",
        className
      )}
    >
      <Image
        width={50}
        height={50}
        alt={icon}
        src={`/icons/${iconPath}`}
        className=""
      />
    </div>
  );
});

Bhuvana.displayName = "Bhuvana";
