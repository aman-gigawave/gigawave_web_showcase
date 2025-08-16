"use client";
import CustomTitle from "@/components/custom/CustomTitle";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { DotPattern } from "./DotPattern";

const OnBoarding = () => {
  return (
    <div className=" pb-12 h-fit  relative">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const isMobile = useIsMobile();
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["28%", "-79%"] : ["20%", "-50%"]
  );

  const Title = () => (
    <>
      From
      <span className="font-secondary !tracking-wider bg-gradient-to-br from-emerald-100 to-orange-200 text-transparent bg-clip-text font-medium inline-block scale-[1.05] mx-2 ">
        Concept
      </span>
      <span className="!text-4xl"> to </span>
      <span className="font-secondary !tracking-wider bg-gradient-to-br from-emerald-100 to-orange-200 text-transparent bg-clip-text font-medium inline-block scale-[1.05] mx-2 ">
        Launch
      </span>
      , {"We're With You at Every Step"}
    </>
  );

  return (
    <section ref={targetRef} className="relative  h-[200vh]">
      <div className={cn(["sticky -top-36 sm:top-2 md:top-10 "])}>
        <CustomTitle
          className="px-4 "
          pageName="Onboarding"
          heading={<Title />}
          description={
            <>
              We follow a
              <span className="text-white font-bold ml-2">
                clear and collaborative process
              </span>
              , from idea to deployment and beyond. Here&apos;s how we make your
              product come to life.
            </>
          }
        />
        <div className="flex h-fit pt-5 md:pt-0 md:h-[50vh] items-center overflow-hidden ">
          <motion.div style={{ x }} className="flex gap-8">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[320px] md:w-[350px] overflow-hidden rounded-3xl 0 p-8 [background:radial-gradient(113.03929211915995%_100%_at_50%_0%,#181818,#191919_1%,#080808cf)] border [box-shadow:inset_1.2px_0_#ffffff0a,inset_-1.2px_0_#ffffff0a,inset_0_1.2px_#ffffff1a,inset_0_0.6px_#ffffff1a] duration-300 "
    >
      <DotPattern
        width={25}
        height={25}
        glow={true}
        className={cn(
          "[mask-image:radial-gradient(180px_circle_at_center,white,transparent)] absolute opacity-50"
        )}
      />

      <div className="h-[300px] w-[260px] absolute flex  justify-center -z-10 ">
        <svg viewBox="0 0 100 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g transform="translate(50, 50)">
            <text
              x="0"
              y="0"
              fontFamily="font-primary"
              fontSize="130"
              fontWeight="800"
              fill="white"
              stroke="none"
              opacity={0.9}
              textAnchor="middle"
              dominantBaseline="central"
              filter="url(#glow)"
            >
              {card.id}
            </text>
            <text
              x="0"
              y="0"
              fontFamily="font-primary"
              fontSize="130"
              fontWeight="800"
              fill="white"
              stroke="none"
              opacity={1}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {card.id}
            </text>
          </g>
        </svg>
      </div>
      <div className="relative z-10 h-full flex flex-col pt-[65%] items-center ">
        {/* <div className="text-6xl mb-6">{card.emoji}</div> */}

        <h3 className="text-[22px] group-hover/feature:translate-x-1 transition-all duration-300 inline-block  bg-gradient-to-br from-emerald-50 to-orange-200/70 text-transparent bg-clip-text   font-bold mb-3">
          {card.title}
        </h3>

        <p className="text-zinc-400 text-sm text-center leading-relaxed font-semibold">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default OnBoarding;

type CardType = {
  title: string;
  description: string;
  id: number;
};

const cards: CardType[] = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "We kick things off by understanding your business goals, users, and vision. This phase includes requirement gathering, competitor research, and setting a clear design and development roadmap.",
  },
  {
    id: 2,
    title: "Design & Development",
    description:
      "Once the plan is set, our designers craft intuitive UI/UX, and our developers start building responsive, scalable apps that reflect your brand and goals.",
  },
  {
    id: 3,
    title: "Testing & Review",
    description:
      "We run multiple rounds of testing to catch bugs, optimize performance, and ensure everything works smoothly across devices. Your feedback shapes the final touches.",
  },
  {
    id: 4,
    title: "Launch & Handover",
    description:
      "Your app goes live! We handle deployment across web, iOS, and Android platforms—ensuring a smooth launch with all systems ready.",
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description:
      "Our job doesn't end at launch. We offer ongoing updates, monitoring, and support—keeping your product stable and improving, all at startup-friendly pricing.",
  },
];
