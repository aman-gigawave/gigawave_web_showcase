"use client"

import { Bhuvana } from "@/components/custom/ClientComponents";
import CustomMagicCard, {
  MagicCardProps,
} from "@/components/custom/CustomMagicCard";
import { Marquee } from "@/components/ui/marquee";
import { TOOLS } from "@/lib/types";

type Props = {
  magicCardProps?: MagicCardProps;
};
export function Libraries({  magicCardProps }: Props) {


  const libaries : TOOLS[] = [ "DRIZZLE ORM", "POSTMAN" , "ANDROID STUDIO" , "XCODE" , "GETX", "CLOUDFLARE WORKERS" , "FRAMER MOTION" , "JWT" , "REACT HOOK FORM" , "REACT QUERY" , "THREEJS" , "ZOD" , "ZUSTAND" ,  "SHADCN" , "TANSTACK" , "SCALAR" , "AUTH0" , "OPENAPI" , "DOCKER" , "FIGMA" ,"WEBSOCKETS"  ]

  return (
    <CustomMagicCard {...magicCardProps} className="!h-full w-full ">
      <div className="">
        <h2 className="text-xl font-extrabold  drop-shadow mb-1 secondary-gradient-text !font-primary !tracking-normal !mx-1">
          Dev Tools & Libraries          
        </h2>
        <div className="text-white/60 text-sm mb-2 font-medium">
          Essential toolkit used daily in modern development
        </div>
      </div>
      <div className="relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_2rem),linear-gradient(to_top,transparent,black_2rem)]">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s] gap-x-4 pb-3 mx-0">
            {libaries.map((item) => <Bhuvana icon={item} key={item}   /> )}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s] gap-x-4">
            {libaries.map((item) => <Bhuvana icon={item} key={item}/> )}
        </Marquee>
        </div>
      
      </div>
    </CustomMagicCard>
  );
}
