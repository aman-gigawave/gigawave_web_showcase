import CustomTitle from "@/components/custom/CustomTitle";
import { GridPattern } from "@/components/ui/GridPattern";
import { BLOG_AUTHORS, BLOG_PREVIEWS } from "@/lib/constants";
import { BlogPreview } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore how Gigawave approaches scalable code, robust design, and tech-driven problem-solving in our developer blog.",
};

const Page = () => {
  const BlogCard = ({
    title,
    readTime,
    authorId,
    date,
    tags,
    slug,
  }: BlogPreview) => {
    const author = BLOG_AUTHORS.find((author) => author.id === authorId);
    return (
      <li className="p-1 border rounded-xl  border-white/20 bg-gradient-to-br from-yellow-700/20 via-black/30 to-neutral-600/20">
        <article className="relative border border-dashed p-3 rounded-xl overflow-hidden w-[300px] h-[350px]  border-white/30 flex flex-col gap-y-2">
          <div
            style={{
              background: "url('/background/noise_1.webp')",
              opacity: "0.1",
              backgroundSize: "128px",
              backgroundRepeat: "repeat",
            }}
            className="absolute inset-0 -z-10"
          />
          <ul className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <li
                className="text-xs border border-white/20 rounded-full  px-3 py-1 bg-gradient-to-br from-yellow-600/20 via-white/10 to-neutral-400/30 font-bold text-neutral-300 backdrop-blur-xs tracking-wide "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <h4 className="font-semibold text-2xl tracking-wide mt-1 gray_txt ">
            {title}
          </h4>
          <div className="flex flex-col mt-auto">
            <p className="text-base tracking-wide bg-gradient-to-br from-emerald-100 to-orange-100 text-transparent bg-clip-text font-bold">
              {author?.name}
            </p>
            <p className="text-xs tracking-wide text-zinc-400 !font-semibold">
              {date} · {readTime} min read
            </p>
          </div>
          <Link
            className="border-white/30 bg-gradient-to-br from-orange-100/30 via-black to-yellow-800/20 border px-2 py-2 rounded-xl text-center w-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 flex items-center gap-x-2"
            href={`/blogs/${slug}`}
          >
            <span className="w-full line-clamp-1 text-center text-xs font-bold text-gray-300 tracking-wide">
              Read more <span className="sr-only">about {title}</span>
            </span>
          </Link>
        </article>
      </li>
    );
  };

  return (
    <section className="max-w-6xl mx-auto pt-10 space-y-10">
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
        pageName="Blogs"
        heading={
          <>
            We write blogs about the methods and{" "}
            <span className="secondary-gradient-text !font-bold !tracking-widest">
              Best Practices
            </span>{" "}
            we follow in our projects.{" "}
          </>
        }
        className="text-center"
        headingClassName="text-2xl md:!text-4xl leading-[1.4] p-2"
      />
      <ul className="flex flex-wrap justify-center gap-6 px-5 ">
        {BLOG_PREVIEWS.map((blogPreview, index) => (
          <BlogCard key={index} {...blogPreview} />
        ))}
      </ul>
    </section>
  );
};

export default Page;
