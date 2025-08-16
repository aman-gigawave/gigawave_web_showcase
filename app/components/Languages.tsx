import { TiltedScroll } from "@/components/ui/tilted-scroll";
import CustomMagicCard, {
  MagicCardProps,
} from "@/components/custom/CustomMagicCard";

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
export function Languages({ techData, title, magicCardProps }: Props) {
  return (
    <CustomMagicCard {...magicCardProps} className="!h-full w-full">
      <div className="mb-2">
        <h2 className="text-xl font-extrabold  drop-shadow mb-1 secondary-gradient-text !font-primary !tracking-normal !mx-0.5">
          {title}
        </h2>
        <div className="text-zinc-400 text-sm mb-2 font-semibold">
          {techData.tagline}
        </div>
      </div>
      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <TiltedScroll items={[...techData.items]} className="mt-8" />
      </div>
    </CustomMagicCard>
  );
}
