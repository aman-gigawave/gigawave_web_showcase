import { CustomDivider } from "@/components/custom/mini-components";
import { cn } from "@/lib/utils";
import { Sparkles } from "./sparkes";

const Acheivements = () => {
  const features = [
    {
      title: (
        <span>
          30<span className="text-lg inline-block pl-1">+</span>{" "}
        </span>
      ),
      description: "Projects Delivered in just 2 years.",
    },
    {
      title: (
        <span>
          100<span className="text-lg inline-block pl-1">%</span>{" "}
        </span>
      ),
      description: "Client Retention yep, our clients stick with us",
    },
    {
      title: (
        <span>
          95<span className="text-lg inline-block pl-1">%</span>{" "}
        </span>
      ),
      description: "Projects built from scratch on business needs.",
    },
    {
      title: (
        <span>
          7<span className="text-lg inline-block pl-1">+</span>{" "}
        </span>
      ),
      description: "Industries we've worked in.",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 mt-6 sm:mt-8 md:mt-10">
      <div className="relative overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0">
          <CustomDivider orientation="horizontal" />
          <div
            className="absolute inset-0 -bottom-[100px]"
            style={{
              background:
                "radial-gradient(68.54% 68.72% at 55.02% 68.54%, hsla(35, 80%, 75%, 0.08) 0%, hsla(35, 70%, 60%, 0.04) 50%, hsla(35, 60%, 40%, 0) 80%), " +
                "radial-gradient(50% 50% at 50% 50%, hsla(210, 30%, 90%, 0.06) 0%, hsla(210, 15%, 80%, 0.04) 50%, transparent 100%), " +
                "radial-gradient(50% 50% at 50% 50%, hsla(35, 70%, 70%, 0.05) 0%, hsla(35, 60%, 50%, 0.02) 50%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4  sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative py-2"
            >
              {/* Sparkles for mobile and tablet (show on all cards) */}
              <div className="block md:hidden">
                <Sparkles
                  density={3}
                  speed={1.2}
                  size={1.2}
                  direction="top"
                  opacitySpeed={5}
                  color="#FFFFFF"
                  className="absolute inset-x-0 bottom-0 h-full w-full"
                />
              </div>
              {/* Sparkles for desktop (show only on first and last cards) */}
              <div className="hidden md:block">
                {(index == 0 || index == 3) && (
                  <Sparkles
                    density={10}
                    speed={1.2}
                    size={1.2}
                    direction="top"
                    opacitySpeed={5}
                    color="#FFFFFF"
                    className="absolute inset-x-0 bottom-0 h-full w-full"
                  />
                )}
              </div>
              <div className="px-2 sm:px-3 py-2 sm:py-3 text-center w-full">
                <h3
                  className={cn([
                    "text-4xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-200 via-sky-100 to-neutral-300 text-transparent bg-clip-text leading-tight filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]",
                    (index == 1 || index == 2) &&
                      "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]",
                  ])}
                >
                  {feature.title}
                </h3>
                <p
                  className={cn([
                    "text-slate-300 text-[10px] sm:text-sm leading-relaxed font-semibold max-w-[150px] sm:max-w-[180px] md:max-w-[200px] mx-auto mt-1 sm:mt-2",
                    (index == 1 || index == 2) && "text-gray-200",
                  ])}
                >
                  {feature.description}
                </p>
              </div>
              {/* Show dividers only on larger screens and between items in the same row */}
              {index < features.length - 1 && (
                <>
                  {/* Vertical divider for mobile (2 columns) - between items in same row */}
                  <div className="block sm:hidden">
                    {index % 2 === 0 && (
                      <CustomDivider
                        orientation="vertical"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16"
                      />
                    )}
                  </div>
                  {/* Vertical divider for tablet (2 columns) */}
                  <div className="hidden sm:block md:hidden">
                    {index % 2 === 0 && (
                      <CustomDivider
                        orientation="vertical"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16"
                      />
                    )}
                  </div>
                  {/* Vertical divider for desktop (4 columns) */}
                  <div className="hidden md:block">
                    <CustomDivider
                      orientation="vertical"
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 h-16"
                    />
                  </div>
                  {/* Horizontal divider for mobile between rows */}
                  <div className="block sm:hidden">
                    {index % 2 === 1 && (
                      <CustomDivider
                        orientation="horizontal"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16"
                      />
                    )}
                  </div>
                  {/* Horizontal divider for tablet between rows */}
                  <div className="hidden sm:block md:hidden">
                    {index % 2 === 1 && (
                      <CustomDivider
                        orientation="horizontal"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16"
                      />
                    )}
                  </div>
                </>
              )}
              {/* Bottom divider for first card on mobile/tablet */}
              {index === 0 && (
                <>
                  <div className="block sm:hidden">
                    <CustomDivider
                      orientation="horizontal"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16"
                    />
                  </div>
                  <div className="hidden sm:block md:hidden">
                    <CustomDivider
                      orientation="horizontal"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acheivements;
