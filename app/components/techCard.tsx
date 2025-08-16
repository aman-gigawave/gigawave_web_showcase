import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TechCard = ({
  item,
  descriptionClassName,
}: {
  descriptionClassName?: string;
  item: { name: string; description: string; icon: string };
}) => {
  return (
    <div
      key={item.name}
      className={cn([
        "rounded-xl bg-gradient-to-br from-white/10 via-yellow-400/5 to-yellow-600/10 backdrop-blur-md border border-white/10  hover:shadow-accent/30 hover:border-accent/30 transition px-2 py-3 flex items-center gap-3 group shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] before:from-transparent before:via-white/5 before:to-transparent",
      ])}
    >
      <Image
        src={item?.icon}
        alt={item.icon}
        width={40}
        height={40}
        className="brightness-125"
      />
      <div>
        <div className="text-primary font-semibold text-base group-hover:text-accent-foreground transition ">
          {item.name}
        </div>
        <div
          className={cn([
            "text-neutral-300 font-bold text-[10px] leading-snug",
            descriptionClassName,
          ])}
        >
          {item.description}
        </div>
      </div>
    </div>
  );
};

export default TechCard;
