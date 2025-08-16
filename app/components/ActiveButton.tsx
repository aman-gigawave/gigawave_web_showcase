import React from "react";
import "./activeBtn.css";
import { Sparkles } from "./sparkes";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export const CustomButton = ({
  title,
  onClick,
  variant,
  className,
  isPending = false,
}: {
  title: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "destructive";
  className?: string;
  isPending?: boolean;
}) => {
  return (
    <button
      className={cn([
        "button h-[3rem] relative px-5 border border-[#97cedac4] rounded-full overflow-clip flex items-center gap-2 justify-center",
        variant === "primary"
          ? "bg-gradient-to-br from-sky-900/60 via-sky-700/50 to-blue-400 border-[#97cedac4] btn-primary border-2"
          : variant === "secondary"
          ? "bg-gradient-to-bl from-gray-100 via-white/70 to-neutral-300 text-black border-gray-400 btn-secondary"
          : "bg-gradient-to-br from-red-300/10 via-orange-700/50 to-orange-400/40 border-red-200/80 text-red-100 hover:text-red-200",
        className,
      ])}
      onClick={() => onClick()}
      disabled={isPending}
    >
      {variant != "secondary" && (
        <div
          style={{
            background: "url('/background/noise_1.webp')",
            opacity: "0.15",
            backgroundSize: "128px",
            backgroundRepeat: "repeat",
          }}
          className="absolute inset-0 z-1 "
        />
      )}
      {variant == "primary" && (
        <Sparkles
          density={10}
          speed={1.2}
          size={1.2}
          direction="top"
          opacitySpeed={10}
          color="#97cedac4"
          className="absolute bottom-0 h-full w-full"
        />
      )}
      <span className="tracking-wide font-extrabold flex items-center gap-x-2">
        {title}
      </span>
      {isPending && <Loader2 className="animate-spin text-primary" />}
    </button>
  );
};
