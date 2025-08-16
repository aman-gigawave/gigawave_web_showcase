"use client"
import React, { ReactNode, useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#00000" ,"#02050c"];

const BgAura = ({children} : {children : ReactNode}) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 40% 0%, ${color} 50%, #000000)`;  

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid  overflow-hidden  text-gray-200"
    >
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* <div className="stars-container absolute inset-0">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${star.y}%`,
                left: `${star.x}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
              animate={{
                opacity: [star.opacity, star.opacity * 0.5, star.opacity],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div> */}
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 opacity-40"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute inset-1/4 top-0 blur-3xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${COLORS_TOP[0]}20 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: ["5%", "-5%", "5%"],
            y: ["5%", "-5%", "5%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute inset-0 z-5 -top-10">
        <div
          className="h-full bg-[url('/background/noise.svg')] bg-repeat opacity-30"
          style={{ backgroundSize: "500px" }}
        />
      </div>
      {children}
    </motion.section>
  );
};

export default BgAura