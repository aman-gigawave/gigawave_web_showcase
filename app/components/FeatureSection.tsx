import { CustomDivider } from "@/components/custom/mini-components";
import Image from "next/image";
// import {
//   IconAdjustmentsBolt,
//   IconEaseInOut,
//   IconHeart,
//   IconHelp,
//   IconRouteAltLeft,
//   IconTerminal2,
// } from "@tabler/icons-react";

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon?: string;
  index: number;
}) => {
  // For medium screens (2 columns)
  const isMdLeftColumn = index % 2 === 0;
  const isMdTopRow = index < 2;
  const isMdMiddleRow = index >= 2 && index < 4;

  // For large screens (3 columns)
  const isLgLeftColumn = index % 3 === 0;
  const isLgMiddleColumn = index % 3 === 1;
  const isLgTopRow = index < 3;

  return (
    <div className="relative group/feature mt-4 sm:mt-0">
      <div className="flex sm:flex-col gap-5 py-4 md:py-12 px-8 relative overflow-hidden transition-all duration-300 ">
        <div className="mb-6 relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-300/30 to-orange-200/20 backdrop-blur-xs text-sky-100 group-hover/feature:scale-110 group-hover/feature:rotate-3 transition-all duration-300 shadow-sm">
            {icon && (
              <Image
                src={icon}
                alt={icon}
                width={24}
                height={24}
                className="size-8"
              />
            )}
          </div>
        </div>

        <div>
          <div className=" font-semibold mb-3 relative z-10">
            <span className="text-xl sm:text-[22px] group-hover/feature:translate-x-1 transition-all duration-300 inline-block bg-gradient-to-br from-emerald-100 to-orange-200 text-transparent bg-clip-text  group-hover/feature:text-sky-100 dark:group-hover/feature:text-sky-100 font-bold">
              {title}
            </span>
          </div>

          <p className="text-sm sm:text-base  font-medium leading-relaxed bg-gradient-to-tr from-zinc-400 via-sky-100 to-gray-300 text-transparent bg-clip-text relative z-10 group-hover/feature:text-neutral-700 dark:group-hover/feature:text-neutral-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Vertical dividers - responsive logic */}
      <div className="hidden sm:block lg:hidden">
        {/* Medium screens (2 columns) - show divider only for left column items */}
        {isMdLeftColumn && <CustomDivider orientation="vertical" />}
      </div>

      <div className="hidden sm:block">
        {/* Large screens (3 columns) - show divider for left and middle column items */}
        {(isLgLeftColumn || isLgMiddleColumn) && (
          <CustomDivider orientation="vertical" />
        )}
      </div>

      {/* Horizontal dividers - responsive logic */}
      <div className="hidden sm:block lg:hidden">
        {/* Medium screens - show horizontal divider for top and middle rows */}
        {(isMdTopRow || isMdMiddleRow) && (
          <CustomDivider orientation="horizontal" />
        )}
      </div>

      <div className="hidden sm:block">
        {/* Large screens - show horizontal divider only for top row */}
        {isLgTopRow && <CustomDivider orientation="horizontal" />}
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Driven by Your Vision",
      description:
        "We collaborate closely with founders—turning ideas into products that reflect your goals, values, and roadmap.",
      // icon: <IconHeart className="w-6 h-6" />,
      icon: "/icons/heart.svg",
    },
    {
      title: "Cross-Industry Experience",
      description:
        "With 7+ industries under our belt, we bring adaptable thinking and real-world insights to every build.",
      // icon: <IconRouteAltLeft className="w-6 h-6" />,
      icon: "/icons/route.svg",
    },
    {
      title: "MVPs in Weeks",
      description:
        "Move fast with launch-ready MVPs designed to validate your idea and scale when you need it.",
      // icon: <IconEaseInOut className="w-6 h-6" />,
      icon: "/icons/clock.svg",
    },
    {
      title: "Full-Stack Delivery",
      description:
        "One team for everything—mobile, web, backend, dashboards, and infrastructure.",
      // icon: <IconTerminal2 className="w-6 h-6" />,
      icon: "/icons/delivery.svg",
    },
    {
      title: "Flexible Team Models",
      description:
        "Need a developer or full product team? We shape around your needs and scale as you grow.",
      // icon: <IconAdjustmentsBolt className="w-6 h-6" />,
      icon: "/icons/teams.svg",
    },
    {
      title: "Reliable Support",
      description:
        "Post-launch, we've got your back—24/7 support, updates, and maintenance without the headaches.",
      // icon: <IconHelp className="w-6 h-6" />,
      icon: "/icons/support.svg",
    },
  ];

  return (
    <div className="relative pt-10 md:py-10 md:px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-px relative">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-sky-200/20 to-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-orange-200/30 rounded-full blur-3xl" />
    </div>
  );
};

export default FeatureSection;
