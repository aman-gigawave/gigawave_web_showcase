import { TOOLS } from "@/lib/types";
import { cn, getIconPath } from "@/lib/utils";
import Image from "next/image";

export const CustomDivider = ({
  orientation = "vertical",
  className = "",
}: {
  orientation?: "vertical" | "horizontal";
  className?: string;
}) => {
  if (orientation === "vertical") {
    return (
      <div
        className={cn(
          "absolute right-0 top-0 w-px h-full flex flex-col justify-start items-center gap-5 py-4 bg-gradient-to-b from-transparent via-sky-200/40 to-transparent",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 h-px w-full flex flex-row justify-start items-center gap-2 px-4  bg-gradient-to-r from-transparent via-sky-200/40 to-transparent",
        className
      )}
    />
  );
};

export const TechIcon = ({ tech }: { tech: TOOLS }) => {
  const icon = getIconPath(tech);
  return (
    <div className="rounded-full border-white/20 border-1 ">
      <Image
        src={`/icons/${icon}`}
        alt={tech}
        width={24}
        height={24}
        className="size-6 p-1 opacity-90"
      />
    </div>
  );
};
