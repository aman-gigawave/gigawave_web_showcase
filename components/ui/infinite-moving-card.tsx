"use client";

import { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";



export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Testimonial[];
  direction?: "left" | "right" | "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      if (direction === "left" || direction === "up") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  }, [direction]);
  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);
  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    
    addAnimation();
  }, [getDirection, getSpeed]);
  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col h-max min-h-full shrink-0 flex-nowrap gap-4 px-4",
          start && "animate-scroll-vertical",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ "--gap": "1rem" } as React.CSSProperties}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-full max-w-[600px] shrink-0 rounded-2xl border border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-600 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 dark:before:from-blue-500/5 dark:before:via-purple-500/5 dark:before:to-pink-500/5"
            key={idx}
          >
            <blockquote className="relative z-10">
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-base leading-[1.7] font-normal text-neutral-800 dark:text-gray-100">
                &quot;{item.testimonial}&quot;
              </span>
              <div className="relative z-20 mt-8 flex flex-row items-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                 {
                  item.clientPhoto && 
                    <Image
                      src={item.clientPhoto}
                      alt={item.clientName}
                      width={48}
                      height={48}
                      className="relative rounded-full ring-2 ring-zinc-200 dark:ring-zinc-700 transition-transform duration-300 group-hover:scale-105"
                    />
                 }
                </div>

                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-neutral-900 dark:text-gray-100">
                    {item.clientName}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-gray-400">
                    {item.clientRole}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
