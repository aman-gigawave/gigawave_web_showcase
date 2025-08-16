import CustomTitle from "@/components/custom/CustomTitle";
import React from "react";
import FeatureSection from "./FeatureSection";

const AboutUs = () => {
  const Title = () => (
    <>
      We Build, Launch, and Scale Products for{" "}
      <span className="font-secondary tracking-wider bg-gradient-to-br from-emerald-100 to-orange-200 text-transparent bg-clip-text font-medium inline-block scale-[1.05] mx-2 ">
        Growing Businesses
      </span>
      .
    </>
  );

  return (
    <section className="min-h-screen max-w-screen-xl mx-auto">
      <CustomTitle
        className="px-6 space-y-6"
        pageName="About Us"
        heading={<Title />}
        headingClassName="leading-10 md:leading-14"
        description={
          <span>
            We&apos;re a{" "}
            <span className="text-white font-bold mx-2">
              Full-service software team
            </span>{" "}
            helping startups & business to turn ideas into scalable digital
            products. We focus on quality tech so you can focus on your vision.
          </span>
        }
      />
      <FeatureSection />
    </section>
  );
};

export default AboutUs;
