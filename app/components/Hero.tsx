"use client";

import { Spotlight } from "@/components/ui/spotlight-new";
import React from "react";
import Acheivements from "./Acheivements";
import Image from "next/image";
import { GridPattern } from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";
import { AnimatedText } from "@/components/ui/animated-underline";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-fit md:min-h-screen p-2 sm:p-4   overflow-hidden pb-10  sm:pb-16  w-screen relative "
    >
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 5"}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />

      <div className="relative flex items-center justify-between w-screen px-4 sm:px-6 md:px-10">
        <Image
          src="/images/logo.png"
          alt="Hero"
          width={100}
          height={100}
          className="grayscale-25 w-[60px] sm:w-[80px] md:w-[100px] z-[100]"
        />

        <div
          className="w-fit relative rounded-full px-2 sm:px-3 pr-3 sm:pr-5 py-1 sm:py-1.5 text-gray-300 font-bold flex items-center gap-x-1 sm:gap-x-2 tracking-wide 
            border border-white/10 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2),inset_-3px_-3px_6px_rgba(255,255,255,0.1)]
            transition-all duration-300 hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.15)]
            backdrop-blur-sm overflow-visible group
            "
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-orange-300/30 via-white/0 to-neutral-400/30 -z-10"></div>

          <div className="size-2 sm:size-2.5 bg-gradient-to-br from-orange-300 to-orange-700 rounded-full animate-pulse shadow-[0_0_10px_2px_rgba(245,158,11,0.8)]" />
          <span className="bg-gradient-to-br from-orange-100 to-red-100 text-transparent bg-clip-text tracking-wide text-xs sm:text-sm font-bold pl-1">
            Available for new projects
          </span>
        </div>
      </div>

      <div className="relative  z-10  flex flex-col items-center space-y-5">
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(35, 80%, 75%, 0.12) 0%, hsla(35, 70%, 60%, 0.06) 50%, hsla(35, 60%, 40%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 30%, 90%, 0.1) 0%, hsla(210, 15%, 80%, 0.06) 50%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(35, 70%, 70%, 0.08) 0%, hsla(35, 60%, 50%, 0.04) 50%, transparent 100%)"
        />

        <h1 className="inline-block leading-14 sm:leading-20 tracking-wide text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-medium text-center flex-col space-y-0 sm:gap-4 gray_txt  mt-20 ">
          Crafting Scalable
          <AnimatedText
            text="Web & Mobile Apps"
            className="!text-white !tracking-wider my-0 text-4xl md:text-5xl !font-semibold"
            textClassName="text-[40px] sm:text-5xl !m-0 "
          />
          <br />
          for the Digital Era
        </h1>

        <p className="text-gray-300  text-center max-w-xl mx-auto text-base sm:text-lg font-medium">
          From concept to launch, we help{" "}
          <strong className="font-extrabold text-orange-50 tracking-wide">
            startups
          </strong>{" "}
          and{" "}
          <strong className="font-extrabold text-orange-50 tracking-wide">
            Businesses
          </strong>{" "}
          build, scale, and succeed seamlessly.
        </p>

        {/* <div className="my-5 mx-auto flex items-center gap-5">

            <CustomButton
              title="Let's Talk"
              variant="primary"
              onClick={() => {}}
            />
            <CustomButton
              title="View Our Work"
              variant="secondary"
              className=""
              onClick={() => {}}
            />
          </div> */}
      </div>
      <Acheivements />
    </section>
  );
};

export default Hero;
