import CustomTitle from "@/components/custom/CustomTitle";
import Projects from "./components/Projects";
import { Metadata } from "next";
import { PROJECTS } from "@/lib/constants";
import { GridPattern } from "@/components/ui/GridPattern";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Discover practical insights, tools, and best practices we use in real-world projects. From scalable architecture to performance tips, our blogs reflect how we build robust, production-ready applications.",
};
const Page = () => {
  return (
    <section className="pt-10 space-y-10 px-3 sm:px-4 max-w-screen-xl mx-auto min-h-screen">
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 5"}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <CustomTitle
        pageName="Projects"
        headingClassName="text-2xl md:!text-4xl leading-[1.4]"
        heading={
          <>
            We Share What We Build.
            <span className="secondary-gradient-text  !tracking-widest pl-2">
            {" "} Practical Techniques
            </span>{" "}That Power Our Projects
          </>
        }
        className="text-center"
      />
      <div className="min-h-screen">
        <Projects PROJECTS={PROJECTS} />
      </div>
    </section>
  );
};

export default Page;
