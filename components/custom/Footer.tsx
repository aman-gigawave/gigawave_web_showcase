import React from "react";

const Footer = () => {
  return (
    <footer className=" flex flex-col justify-center relative mt-14 md:mt-0   bg-gradient-to-b from-transparent via-black via-40% md:via-60% to-transparent !h-[200px] sm:!h-fit">
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute top-0 right-1/2 w-full h-64 bg-sky-200 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
        {/* <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]" /> */}
      </div>
      <div className="relative w-full !h-[250px] md:!h-[280px] flex justify-center items-center overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full -z-10"
          width="100%"
          height="100%"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="50"
            y="15"
            fontFamily="arial, sans-serif"
            fontStyle={"bold"}
            fontSize="16"
            fill="none"
            stroke="lightgray"
            opacity={0.5}
            strokeWidth="0.12"
            textAnchor="middle"
            dominantBaseline="middle"
            textLength="100"
            lengthAdjust="spacingAndGlyphs"
          >
            GIGAWAVE
          </text>
        </svg>
      </div>
      <div className=" px-6  py-5 pb-8  flex flex-col items-center gap-1 text-center">
        <div className="text-white/90 font-semibold tracking-wide text-sm md:text-base drop-shadow">
          GIGAWAVE INNOVATIONS PRIVATE LIMITED
        </div>
        <div className="text-white/60 text-xs md:text-sm">
          CIN: U62091TS2023PTC172457
        </div>
        <div className="text-white/50 text-xs md:text-sm">
          © 2023–2025 Gigawave. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
