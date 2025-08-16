"use client";
import React from "react";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import TeckStack from "../components/TeckStack";
import OnBoarding from "../components/OnBoarding";
import Testimonials from "../components/testimonials";

export const runtime = "edge";

const Page = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <TeckStack />
      <OnBoarding />
      <Testimonials />
      <FAQ />
      <ContactUs />
    </main>
  );
};

export default Page;

{
  /* <div className="w-screen h-[650px] relative left-1/2 -translate-x-1/2  ">
  <div
    className="absolute w-[150vw] left-1/2 -translate-x-1/2 top- h-[75vw] rounded-t-full  border-t-[4px] border-l-[4px] border-r-[4px] border-[#ffb86c]
     border-b-none
       
        -z-50"
  ></div>
  <div
    className="bg-[var(--brand-foreground)] absolute top-0 left-0 h-full w-full rounded-[100%]"
    style={{
      maskImage:
        "radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)",
    }}
  ></div>
  <div className="absolute w-screen  h-full -top-60 left-1/2 -translate-x-1/2 bg-gradient-to-b from-transparent  via-black via-80%"></div>
  <div className="absolute inset-0 -z-10 bg-neutral-900" />
</div>; */
}
