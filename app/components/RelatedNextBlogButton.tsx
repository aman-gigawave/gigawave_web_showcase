import { BLOG_PREVIEWS } from "@/lib/constants";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

type RelatedNextBlogButtonProps = {
  currentSlug: string;
  currentTags: string[];
};

export default function RelatedNextBlogButton({
  currentSlug,
  currentTags,
}: RelatedNextBlogButtonProps) {
  // Find related blog by shared tag (case-insensitive)
  const related = BLOG_PREVIEWS.find(
    (blog) =>
      blog.slug !== currentSlug &&
      blog.tags.some((tag) =>
        currentTags.some((ct) => ct.toLowerCase() === tag.toLowerCase())
      )
  );
  // Fallback: next in list
  const currentIndex = BLOG_PREVIEWS.findIndex((b) => b.slug === currentSlug);
  let nextBlog = related;
  if (!nextBlog) {
    const nextIndex = (currentIndex + 1) % BLOG_PREVIEWS.length;
    nextBlog = BLOG_PREVIEWS[nextIndex];
  }
  if (!nextBlog) return null;
  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <div className="text-xs uppercase tracking-widest text-orange-200 mb-2 font-bold">
        Next Blog
      </div>
      <div className="p-1 border rounded-xl border-white/20 bg-gradient-to-br from-yellow-700/20 via-black/30 to-neutral-600/20 w-full max-w-xs md:max-w-md">
        <article className="relative border border-dashed p-3 rounded-xl overflow-hidden flex flex-col gap-y-2">
          <div
            style={{
              background: "url('/background/noise_1.webp')",
              opacity: "0.1",
              backgroundSize: "128px",
              backgroundRepeat: "repeat",
            }}
            className="absolute inset-0 -z-10"
          />
          <h4 className="font-semibold text-lg tracking-wide mt-1 gray_txt ">
            {nextBlog.title}
          </h4>
          <Link
            className="border-white/30 bg-gradient-to-br from-orange-100/30 via-black to-yellow-800/20 border px-2 py-1 rounded-xl text-center w-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 flex items-center gap-x-2"
            href={`/blogs/${nextBlog.slug}`}
          >
            <span className="w-full text-center text-xs font-bold text-gray-300 tracking-wide">
              Read Next
            </span>
            <ChevronsRight className="animate-pulse" />
          </Link>
        </article>
      </div>
    </div>
  );
}
