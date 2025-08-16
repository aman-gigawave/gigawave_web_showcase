import CustomMagicCard, {
  MagicCardProps,
} from "@/components/custom/CustomMagicCard";
import React from "react";
import CloudAnimation from "./CloudAnimation";

type Props = {
  title: string;
  magicCardProps?: MagicCardProps;
};
const BentoCard = ({ title, magicCardProps }: Props) => {
  return (
    <CustomMagicCard {...magicCardProps} className="w-full p-0">
      <CloudAnimation />
      <div className=" px-6  pb-2">
        <h2 className="text-xl   drop-shadow mb-1 secondary-gradient-text !font-primary !tracking-normal !mx-0">
          {title}
        </h2>
        <div className="text-zinc-400 text-sm mb-2 font-semibold">
          Fast, global, and reliable from dev to production.
        </div>
      </div>
    </CustomMagicCard>
  );
};

export default BentoCard;
