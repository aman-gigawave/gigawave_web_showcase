import CustomTitle from "@/components/custom/CustomTitle";
import React from "react";
import BentoCard from "@/app/components/BentoCard";
import { techStackData } from "@/app/components/techstackData";
import { Databases } from "./Databases";
import { Languages } from "./Languages";
import Framworks from "./Framworks";
import { Libraries } from "./Libraries";

const TeckStack = () => {

  const Title = () => <>
  
  <span className="font-secondary !tracking-wider bg-gradient-to-br from-emerald-100 to-orange-200 text-transparent bg-clip-text font-medium inline-block scale-[1.05] mx-2 ">
  Code. Launch. Grow.
  </span>{" "}Powered by the Right Tech Stack
</>

  return (
    <section 
     id="techstack"
    className="min-h-screen space-y-8 p-6 pb-20   mx-auto">
      <CustomTitle
        pageName="Tech Stack"
        heading={<Title/>}
        description={<>
          From <span className="text-white font-bold mx-0.5" >frontend</span> to <span className="text-white font-bold mx-0.5" >backend</span> to <span className="text-white font-bold mx-0.5" >global deployment</span>, we use proven technologies to craft reliable and high-performing products.
        </>}
        className="max-w-screen-lg mx-auto"
      />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-5 max-w-[1100px] mx-auto pt-5">
        <Languages
          techData={techStackData.languages}
          title="Languages"
          magicCardProps={{
            gradientSize: 350,
            gradientColor: "rgba(141, 94, 8,0.08)",
            gradientOpacity: 90,
          }}
        />
        <div className="flex flex-col gap-5">
          <Framworks
            techData={techStackData.frameworks}
            title="Frameworks"
            magicCardProps={{
              gradientSize: 350,
              gradientColor: "rgba(141, 94, 8,0.08)",
              gradientOpacity: 90,
            }}
          />
          <Databases
            techData={techStackData.databases}
            title="Databases"
            magicCardProps={{
              gradientSize: 350,
              gradientColor: "rgba(141, 94, 8,0.08)",
              gradientOpacity: 90,
            }}
          />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <BentoCard
            title="Deployments"
            magicCardProps={{
              gradientSize: 320,
              gradientColor: "rgba(141, 94, 8,0.08)",
              gradientOpacity: 90,
            }}
          />
          <Libraries
              magicCardProps={{
                gradientSize: 350,
                gradientColor: "rgba(141, 94, 8,0.08)",
                gradientOpacity: 90,
              }}
          />
        </div>
      </div>
    </section>
  );
};

export default TeckStack;
