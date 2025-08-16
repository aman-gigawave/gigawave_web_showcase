import TechCard from "@/app/components/techCard";
import { cn } from "@/lib/utils";

interface TiltedScrollItem {
  name: string;
  icon: string;
  description: string;
}
interface TiltedScrollProps {
  items: TiltedScrollItem[];
  className?: string;
}

export function TiltedScroll({ items, className }: TiltedScrollProps) {
  // TODO : NEED TO CHANGE IT AS INFINITE LOOP
  const duplicatedItems = [...items, ...items, ...items, ...items,...items, ...items, ...items, ...items];

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_5rem),linear-gradient(to_top,transparent,black_5rem)]">
        <div className="grid h-[500px] w-full gap-5 animate-skew-scroll grid-cols-1">
          {duplicatedItems.map((item, index) => (
            <TechCard key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
