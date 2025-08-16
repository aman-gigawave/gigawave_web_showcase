import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";

type Props = {
  className?: string;
  pageName?: ReactNode;
  heading?: ReactNode;
  description?: ReactNode;
  headingClassName?: string;
};

const CustomTitle = ({
  className,
  pageName,
  heading,
  description,
  headingClassName,
}: Props) => {
  return (
    <div
      className={cn([
        "relative z-0 flex flex-col text-center max-w-4xl items-center mx-auto",
        className,
      ])}
    >
      {pageName && (
        <div className="group relative  flex items-center justify-center rounded-full px-7 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] bg-gradient-to-br from-orange-400/10 via-black to-yellow-800/40 transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] w-fit mb-4 ">
          <span
            className={cn(
              "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-yellow-100/5 to-orange-100/30 p-[1px] "
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />

          <AnimatedShinyText className="text-base font-bold text-white">
            {pageName}
          </AnimatedShinyText>
        </div>
      )}

      <h2
        className={cn([
          "text-3xl xs:text-4xl md:text-5xl leading-normal font-medium tracking-wide bg-gradient-to-br from-zinc-200 via-sky-100 to-gray-200 bg-clip-text text-transparent ",
          headingClassName,
        ])}
      >
        {heading}
      </h2>

      {description && (
        <p className="mt-4  md:text-lg max-w-xl  z-10 font-semibold bg-gradient-to-tr from-gray-300 via-slate-300 to-slate-400 text-transparent bg-clip-text tracking-wide">
          {description}
        </p>
      )}
    </div>
  );
};

export default CustomTitle;
