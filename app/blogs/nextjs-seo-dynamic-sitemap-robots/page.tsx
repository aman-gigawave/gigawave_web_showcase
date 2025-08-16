import { Metadata } from "next";
import SEOSitemapPage from "./components/SEOSitemap";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Next.js SEO: Dynamic Sitemaps & Robots.txt Explained",
  description:
    "Improve your Next.js SEO with dynamic sitemaps and optimized robots.txt. Learn to control crawling, indexing, and page priorities for better rankings.",
};

const Page = () => {
  return <SEOSitemapPage />;
};

export default Page;
