"use client";
import { CustomDivider, TechIcon } from "@/components/custom/mini-components";
import { ProjectInfoType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-mobile";
import { motion, useInView } from "framer-motion";

const ProjectCard = React.memo(
  ({
    title,
    companyName,
    description,
    tools,
    platform,
    tags,
    members,
    status,
    category,
    scratch = true,
  }: ProjectInfoType) => {
    return (
      <article className="p-1 sm:p-2 border rounded-xl border-white/20 bg-gradient-to-br from-yellow-700/20 via-black/30 to-neutral-600/20 w-full max-w-[430px] relative ">
        <div className="relative border border-dashed p-3 sm:p-4 rounded-xl overflow-hidden border-white/30 flex flex-col gap-y-4 w-full">
          <div className="flex mt-auto items-center">
            <div className="flex-1">
              <h3 className="font-semibold text-2xl tracking-wide mt-1 gray_txt ">
                {title}
              </h3>
              <p className="text-xs tracking-wide text-zinc-400 !font-semibold">
                {companyName}
              </p>
            </div>
            <div
              className={cn([
                "text-xs border rounded-full px-3 py-1 tracking-wide font-bold",
                status == "COMPLETED" &&
                  "bg-green-100/30 text-emerald-100 shadow-2xl",
                status == "ONGOING" && "bg-orange-100/30 text-orange-100",
                status == "UPCOMMING" && "bg-blue-100/30 text-blue-100",
                status == "ENHANCEMENTS" && "bg-yellow-100/30 text-yellow-100",
              ])}
            >
              {status.toString().toLowerCase()}
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {scratch && (
              <li className="text-xs flex items-center gap-x-1  rounded-full  px-2 py-1 gold-bg font-bold text-yellow-50 backdrop-blur-xs tracking-wide ">
                <Image
                  src="/icons/sparkle.svg"
                  alt="Sparkle"
                  width={20}
                  height={20}
                  className="size-4 filter invert"
                />
                <span>built from scratch</span>
              </li>
            )}
            <li className="text-xs flex items-center gap-x-1 border border-white/20  rounded-full  px-2 py-1 bg-gradient-to-br from-neutral-600/20 via-white/10 to-yellow-600/30 font-bold text-yellow-50 backdrop-blur-xs tracking-wide ">
              <Image
                src="/icons/category.svg"
                alt="Sparkle"
                width={20}
                height={20}
                className="size-4 filter invert"
              />
              <span>{category}</span>
            </li>
            {tags.map((tag, index) => (
              <li
                className="text-xs border border-white/20 rounded-full  px-3 py-1 bg-gradient-to-br from-yellow-600/20 via-white/10 to-neutral-400/30 font-bold text-neutral-300 backdrop-blur-xs tracking-wide "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <p
            className="text-sm tracking-wide font-medium leading-relaxed text-zinc-400 min-h-[60px] text-balance"
            style={{ fontFamily: "inherit" }}
          >
            {description}
          </p>

          <div className="flex gap-y-2 flex-col">
            <p className="text-sm tracking-wide font-bold">
              Technologies used :{" "}
            </p>
            <ul className="flex gap-2 flex-wrap">
              {tools.map((tag, index) => (
                <li
                  className="h-7 flex items-center gap-x-1 text-sm border border-l-0 border-white/20 rounded-full pr-3 py-1 bg-gradient-to-br from-yellow-600/20 via-white/10 to-neutral-400/30 font-bold text-neutral-300 backdrop-blur-xs tracking-wide "
                  key={index}
                >
                  <TechIcon tech={tag} />
                  <span className="bg-gradient-to-br from-orange-100 to-neutral-200 text-transparent bg-clip-text">
                    {tag.toLowerCase()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            {platform && (
              <div className="flex-1 flex flex-col gap-y-2">
                <p className="text-sm tracking-wide font-bold text-zinc-200 text-start ">
                  Platform :
                </p>
                <div className="flex gap-2 items-center justify-start">
                  {platform.map((tag, index) => (
                    <Link
                      href={tag.link ?? "#"}
                      target="_blank"
                      className="text-xs border border-white/20 rounded-full  p-3 bg-gradient-to-br from-yellow-600/20 via-white/10 to-neutral-400/30 font-bold text-neutral-300 tracking-wide "
                      key={index}
                    >
                      {tag.icon && (
                        <Image
                          src={tag.icon}
                          alt={tag.platform}
                          width={20}
                          height={20}
                          className="size-5"
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {platform && (
              <CustomDivider
                className="static h-20 mx-2"
                orientation="vertical"
              />
            )}

            <div className="flex flex-col gap-y-2 text-center flex-1">
              <p className="text-sm tracking-wide font-bold text-zinc-200 text-start ">
                Members :
              </p>
              <div className="flex gap-x-2">
                {Array.from({ length: members }, (_, index) => (
                  <span
                    key={index}
                    className="text-xs border border-white/20 rounded-full  p-3 bg-gradient-to-br from-yellow-600/20 via-white/10 to-neutral-400/30 font-bold text-neutral-300 tracking-wide"
                  >
                    <Image
                      src={"/icons/user.svg"}
                      alt={"users"}
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export const AnimatedProjectCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" }); 

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Projects = ({ PROJECTS }: { PROJECTS: ProjectInfoType[] }) => {
  const isMobile = useMediaQuery("(max-width: 700px)");
  const isMedium = useMediaQuery("(max-width: 1100px)");

  const columns = useMemo(
    () => (isMobile ? 1 : isMedium ? 2 : 3),
    [isMobile, isMedium]
  );
  const projectList: ProjectInfoType[][] = useMemo(() => {
    const items: ProjectInfoType[][] = Array.from(
      { length: columns },
      () => []
    );
    PROJECTS.forEach((item, index) => {
      items[index % columns].push(item);
    });
    return items;
  }, [PROJECTS, columns]);

  return (
    <>
      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-5">
        {projectList.map((projects, index) => (
          <div key={index} className="flex flex-col gap-5">
            {projects.map((project, index) => (
              <AnimatedProjectCard key={index}>
                <ProjectCard key={index} {...project} />
              </AnimatedProjectCard>
            ))}
          </div>
        ))}
      </div>
      {/* <OpenGraphCard/> */}
    </>
  );
};

export default Projects;
