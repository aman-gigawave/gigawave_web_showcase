"use client";
import {
  BlogContent,
  BlogHighlighter,
  BlogList,
  BlogSubTitle,
  BlogTable,
  BlogTips,
  WriterInfo,
} from "@/app/components/BlogComponents";
import CustomTitle from "@/components/custom/CustomTitle";
import { CodeBlock } from "@/components/ui/code-block";
import { BLOG_AUTHORS, BLOG_PREVIEWS } from "@/lib/constants";
import {
  Globe,
  Bot,
  FileText,
  RefreshCw,
  Code,
  Check,
  Lightbulb,
  BookOpen,
  Search,
  LayoutGrid,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";

const SEOSitemapPage = () => {
  const author = BLOG_AUTHORS[1];

  const pathname = usePathname().split("/")[2];
  const tags = BLOG_PREVIEWS.find((blog) => blog.slug === pathname)?.tags || [];
  return (
    <div className="min-h-screen text-white p-6 md:p-10 leading-relaxed">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="md:my-10">
          <TagsList tags={tags} />
          <CustomTitle
            headingClassName="!text-start"
            heading={
              <>
                <Globe className="inline-block text-emerald-400 size-12 mr-2" />
                Boost Your Next.js SEO with{" "}
                <span className="secondary-gradient-text">
                  Dynamic Sitemaps & Robots.txt
                </span>
              </>
            }
          />
          <WriterInfo
            image={author.image}
            name={author.name}
            role={author.role}
            readTime="8"
            date="June 14, 2025"
          />
        </header>

        <BlogContent>
          {`Implementing proper SEO infrastructure can increase your Next.js
          application's visibility by up to 70%. This guide shows how to create
          both static and dynamic sitemaps along with optimized robots.txt files
          to maximize search engine crawling efficiency.`}
        </BlogContent>

        <BlogList
          title={
            <BlogSubTitle>
              <AlertCircle className="inline-block text-yellow-400 w-5 h-5 mr-2" />
              Why Sitemaps & Robots.txt Matter
            </BlogSubTitle>
          }
          items={[
            "Help search engines discover your pages faster",
            "Prioritize important content in search rankings",
            "Control which pages should be indexed",
            "Provide metadata about page update frequency",
            "Essential for large sites with complex navigation",
          ]}
        />

        <BlogTips
          title="SEO Impact"
          description="Pages with proper sitemaps get indexed 50% faster on average"
        />

        <BlogSubTitle>
          <LayoutGrid className="inline-block text-purple-400 w-5 h-5 mr-2" />
          Our Sitemap Implementation Strategy
        </BlogSubTitle>
        <BlogTable
          title="Key Features"
          description="Sitemap Generator"
          data={[
            {
              title: "Static Routes",
              description: "Predefined important pages",
            },
            {
              title: "Dynamic Routes",
              description: "Automatically generated from app directory",
            },
            {
              title: "Custom Prioritization",
              description: "Control SEO weight for each route",
            },
            {
              title: "Automatic Updates",
              description: "Sitemap regenerates with new pages",
            },
          ]}
        />

        <BlogSubTitle>
          <Code className="inline-block text-blue-400 w-5 h-5 mr-2" />
          Step 1: Static Sitemap Generation
        </BlogSubTitle>
        <BlogContent>
          Automatically crawl your <BlogHighlighter>app</BlogHighlighter>{" "}
          directory to find all routes:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/sitemap.ts"
          code={`import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const APP_DIR = path.join(process.cwd(), "app");
const BASE_URL = "https://yourdomain.com";
const DEFAULT_CHANGE_FREQUENCY = "weekly";
const DEFAULT_PRIORITY = 0.8;

// Recursively find all page.tsx files
function getAllPages(dir: string, baseRoute = ""): string[] {
  let routes: string[] = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip special Next.js folders
      if (file.startsWith("_") || file === "api") continue;
      
      routes = routes.concat(
        getAllPages(fullPath, path.join(baseRoute, file))
      );
    } else if (file === "page.tsx") {
      // Format the route
      let route = baseRoute.replace(/\\\\/g, "/");
      routes.push(route === "" ? "/" : \`/\${route}\`);
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const routes = getAllPages(APP_DIR);

  // Custom settings for important pages
  const customSettings = {
    "/": { changeFrequency: "daily", priority: 1 },
    "/blog": { changeFrequency: "daily", priority: 0.9 },
    "/pricing": { changeFrequency: "monthly", priority: 0.7 },
  };

  return routes.map((route) => {
    const settings = customSettings[route] || {
      changeFrequency: DEFAULT_CHANGE_FREQUENCY,
      priority: DEFAULT_PRIORITY,
    };
    
    return {
      url: \`\${BASE_URL}\${route}\`,
      lastModified: currentDate,
      ...settings
    };
  });
}`}
        />

        <BlogSubTitle>
          <Search className="inline-block text-cyan-400 w-5 h-5 mr-2" />
          Key Features Explained
        </BlogSubTitle>

        <BlogSubTitle>Automatic Route Discovery</BlogSubTitle>
        <BlogContent>
          The <BlogHighlighter>getAllPages</BlogHighlighter> function
          recursively scans your app directory to find all{" "}
          <BlogHighlighter>page.tsx</BlogHighlighter> files, converting them to
          valid routes.
        </BlogContent>

        <BlogSubTitle>SEO Priority Control</BlogSubTitle>
        <BlogContent>Customize importance for critical pages:</BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/sitemap.ts"
          code={`const customSettings = {
  "/": { changeFrequency: "daily", priority: 1 },        // Highest priority
  "/blog": { changeFrequency: "daily", priority: 0.9 },   // Important content
  "/about": { changeFrequency: "monthly", priority: 0.5 } // Less critical
};`}
        />

        <BlogList
          title={<BlogSubTitle>Change Frequency Options</BlogSubTitle>}
          items={[
            "always - Constantly changing content",
            "hourly/daily - News sites, blogs",
            "weekly - Most business sites",
            "monthly - Static content",
            "yearly - Archive pages",
            "never - Deprecated pages",
          ]}
        />

        <BlogSubTitle>
          <RefreshCw className="inline-block text-green-400 w-5 h-5 mr-2" />
          Step 2: Dynamic Sitemap Generation
        </BlogSubTitle>
        <BlogContent>
          For applications with frequently updated content:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/(dynamic)/sitemap.ts"
          code={`export default async function sitemap() {
  // Fetch dynamic routes from CMS
  const blogs = await getBlogPosts();
  const products = await getProducts();

  return [
    ...staticRoutes.map(route => ({ ...route })),
    ...blogs.map(blog => ({
      url: \`https://yoursite.com/blog/\${blog.slug}\`,
      lastModified: blog.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
    ...products.map(product => ({
      url: \`https://yoursite.com/products/\${product.id}\`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}`}
        />

        <BlogSubTitle>
          <Bot className="inline-block text-orange-400 w-5 h-5 mr-2" />
          Step 3: Robots.txt Optimization
        </BlogSubTitle>
        <BlogContent>
          Complement your sitemap with a smart robots.txt file:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/robots.ts"
          code={`import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
    host: 'https://yourdomain.com',
  };
}`}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <FileText className="inline-block text-blue-400 w-5 h-5 mr-2" />
              Advanced Robots.txt Tactics
            </BlogSubTitle>
          }
          items={[
            "Crawl Delay: throttle aggressive bots with crawlDelay: 10",
            "Multi-Sitemap Support: sitemap: ['/sitemap.xml', '/blog-sitemap.xml']",
            "Environment Control: disallow staging environments",
            "Bot-Specific Rules: different rules for Googlebot vs. others",
          ]}
        />

        <BlogTips
          title="Pro Tip"
          description="Add sitemap reference in your layout.tsx for automatic discovery:"
        />
        <CodeBlock
          language="typescript"
          filename="app/layout.tsx"
          code={`export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  robots: {
    index: true,
    follow: true,
  },
};`}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <Check className="inline-block text-emerald-400 w-5 h-5 mr-2" />
              SEO Best Practices
            </BlogSubTitle>
          }
          items={[
            "Priority: Homepage: 1.0, Key pages: 0.8-0.9, Others: 0.6-0.7",
            "Change Frequency: Match actual update patterns",
            "Canonical URLs: Prevent duplicate content issues",
            "Image/Video Sitemaps: Boost media content visibility",
          ]}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <Lightbulb className="inline-block text-amber-400 w-5 h-5 mr-2" />
              Implementation Checklist
            </BlogSubTitle>
          }
          items={[
            "Generated sitemap.xml with all important routes",
            "Created optimized robots.txt",
            "Set proper priorities and change frequencies",
            "Added sitemap to Google Search Console",
            "Tested with SEO validation tools",
          ]}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <BookOpen className="inline-block text-cyan-400 w-5 h-5 mr-2" />
              Essential Resources
            </BlogSubTitle>
          }
          items={[
            <Link
              key={1}
              href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              Next.js Sitemap Documentation
            </Link>,
            <Link
              key={2}
              href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              Google Sitemap Guidelines
            </Link>,
            <Link
              key={3}
              href="https://www.sitemaps.org/protocol.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              Sitemap XML Protocol
            </Link>,
          ]}
        />

        <BlogSubTitle>
          <Globe className="inline-block text-emerald-400 w-5 h-5 mr-2" />
          Final Thoughts
        </BlogSubTitle>
        <BlogContent>
          Proper sitemap implementation is one of the highest ROI SEO activities
          you can perform. With this dynamic solution, your Next.js app will
          stay optimized as your content grows, helping search engines discover
          and prioritize your most important pages.
        </BlogContent>
        <BlogContent>
          Remember: SEO is a marathon, not a sprint. Implement these techniques
          today to reap long-term ranking benefits!
        </BlogContent>
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default SEOSitemapPage;
