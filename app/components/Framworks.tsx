import CustomMagicCard, {
  MagicCardProps,
} from "@/components/custom/CustomMagicCard";
import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";
import React from "react";
import TechCard from "./techCard";

type Props = {
  techData: {
    tagline: string;
    items: {
      name: string;
      icon: string;
      description: string;
    }[];
  };
  title: string;
  magicCardProps?: MagicCardProps;
};

const Framworks = ({ techData, title, magicCardProps }: Props) => {
  return (
    <CustomMagicCard
      {...magicCardProps}
      className="max-h-[310px] overflow-hidden rounded-3xl p-6"
    >
      <div className="mb-2">
        <h2 className="text-xl font-extrabold drop-shadow mb-1 secondary-gradient-text !font-primary !tracking-normal !mx-1">
          {title}
        </h2>
        <div className="text-zinc-400 text-sm mb-2 font-semibold mt-0">
          {techData.tagline}
        </div>
      </div>
      <div
        className={cn(
          "relative flex h-[300px] w-full flex-col overflow-hidden mt-5"
        )}
      >
        <AnimatedList delay={2000}>
          {techData.items.map((item) => (
            <TechCard key={item.name} item={item} />
          ))}
        </AnimatedList>
      </div>
    </CustomMagicCard>
  );
};

export default Framworks;
