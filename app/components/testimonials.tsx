import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { SparklesCore } from "@/components/ui/sparkles";

function SparklesLogo() {
  const clients = [
    {
      name: "Appify Retail",
      image: "/icons/appify_logo.png",
      url: "https://www.appi-fy.ai/",
      className: "h-[100px] w-[220px] brightness-150",
    },
    {
      name: "Daanakarma",
      image: "/icons/daanakarma.svg",
      url: "https://daanakarma.com/",
      className: "h-[100px] w-[220px] brightness-150",
    },
    {
      name: "Jocial",
      image: "/icons/jocial.png",
      url: "https://play.google.com/store/apps/details?id=com.app.jocial&hl=en_IN",
      className: "invert filter",
    },
    {
      name: "Tiny Treasure",
      image: "/icons/tiny_treasure.svg",
      url: "https://www.tinytreasure.baby/",
      className: "h-[100px] w-[220px]",
    },
    {
      name: "Forumsquare",
      image: "/icons/forumsquare.png",
      url: "https://www.forumsquare.in/",
      className: "size-[100px]",
    },
  ];

  return (
    <div className="h-full w-full relative mb-20 md:mb-64">
      <div className="mx-auto w-full">
        <div className="text-center text-5xl text-white">
          <span className="secondary-gradient-text">Trusted by experts.</span>

          <br />

          <span className="text-2xl mt-3">Used by the leaders.</span>
        </div>

        <div className="mt-14 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5rem),linear-gradient(to_left,transparent,black_5rem),linear-gradient(to_bottom,transparent,black_1rem),linear-gradient(to_top,transparent,black_2rem)]">
          <Marquee
            pauseOnHover
            className="[--duration:30s] gap-x-4 pb-3 mx-0 h-10 py-14 md:h-fit"
          >
            {...clients.map((client) => (
              <Link
                href={client.url}
                target="_blank"
                key={client.url}
                className=" mx-6 sm:mx-12 flex items-center justify-center"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={150}
                  height={60}
                  className={cn([client?.className])}
                />
              </Link>
            ))}
          </Marquee>
        </div>
      </div>

      {/* <div className="w-full flex justify-center overflow-hidden h-[300px]"> */}

      {/* </div> */}
      <div className=" text-foreground px-4 py-16 sm:py-24 md:py-20 fade-bottom absolute mb-12 left-[50%] -translate-x-[50%] !overflow-hidden w-screen md:!w-[calc(100vw)] pb-0 sm:mb-24 sm:pb-0 md:mb-32 md:pb-0 md:h-[600px]">
        <div className="relative">
          <div className="w-screen ">
            <div
              data-slot="rising-large-illustration"
              className="group relative w-screen pt-[50%]"
            >
              <div className="border-[var(--brand)]  absolute top-0  z-10 w-[150%] left-[50%] -translate-x-[53%] sm:-translate-x-[51%]  overflow-hidden rounded-[100%] border-4 pt-[100%] shadow-[0px_0px_12px_var(--brand),_0px_0px_64px_var(--brand-foreground),0px_0px_12px_var(--brand)_inset]">
                <div
                  className="bg-[var(--brand-foreground)]/50 absolute top-0  h-full w-[150%] left-1/2 -translate-x-1/2 rounded-[100%]"
                  style={{
                    maskImage:
                      "radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)",
                  }}
                ></div>
                <div
                  className="bg-[var(--brand)]/50 absolute top-0  h-full w-[150%] left-1/2 -translate-x-1/2 translate-y-[-1rem] rounded-[100%] opacity-80 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                  style={{
                    maskImage:
                      "radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)",
                  }}
                ></div>
                <div
                  className=" absolute top-0  h-full w-[150%] left-1/2 -translate-x-1/2 translate-y-[-1rem] rounded-[100%] opacity-80 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 bg"
                  style={{
                    maskImage:
                      "radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%);",
                  }}
                  data-selected="true"
                  data-label-id="0"
                  data-metatip="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-4 py-8">
      {/* <CustomTitle
        pageName="Testimonials"
        heading="Technologies That Drive Performance, Scale, and Innovation"
        description="We build digital products that are fast, reliable, and scalable—backed by tools that are proven in production. From idea to launch, we choose the tech that makes your product efficient, secure, and ready to grow."
        headingClassName="md:text-4xl"
        className="max-w-screen-xl mx-auto p-4"
      /> */}
      <SparklesLogo />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[40rem]">
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="up"
          speed="normal"
          className="h-full"
        />
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="up"
          speed="slow"
          className="h-full hidden md:block"
        />
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="up"
          speed="normal"
          className="h-full hidden lg:block"
        />
      </div> */}
    </section>
  );
};

export default Testimonials;
