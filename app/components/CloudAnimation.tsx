"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Bhuvana } from "@/components/custom/ClientComponents";

const CloudAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[320px] items-center justify-center overflow-hidden p-6  pt-10 "
      ref={containerRef}
    >
      <div className="flex size-full max-h-[300px] max-w-lg flex-col items-stretch justify-between ">
        <div className="flex flex-row items-center justify-between">
          <Bhuvana ref={div1Ref} icon="AWS" />
          <Bhuvana ref={div5Ref} icon="AZURE" />
        </div>
        <div className="flex flex-row items-center justify-between mx-5">
          <Bhuvana ref={div2Ref} icon="SUPABASE" />
          <Bhuvana ref={div4Ref} icon="CLOUD" />
          <Bhuvana ref={div6Ref} icon="FIREBASE" />
        </div>
        <div className="flex flex-row items-center justify-between">
          <Bhuvana ref={div3Ref} icon="GCP" />
          <Bhuvana ref={div7Ref} icon="CLOUDFLARE" />
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-0}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={0}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-0}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={0}
        endYOffset={10}
        reverse
      />
    </div>
  );
};

export default CloudAnimation;
