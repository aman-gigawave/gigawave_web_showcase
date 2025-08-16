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
  AlertTriangle,
  Code,
  RefreshCw,
  Lightbulb,
  Bug,
  Shield,
  Check,
  BookOpen,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";

const HydrationErrorPage = () => {
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
                <AlertTriangle className="inline-block text-yellow-400 size-12 mr-2" />
                Understanding and Fixing{" "}
                <span className="secondary-gradient-text">
                  Hydration Errors
                </span>{" "}
                in Next.js
              </>
            }
            description="The Complete Guide to Solving the 'Text content does not match' Warning"
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
          {
            "Hydration errors are among the most common and frustrating issues in Next.js development. These errors occur when there's a mismatch between server-rendered HTML and client-side JavaScript. This guide will help you understand why they happen and how to fix them permanently."
          }
        </BlogContent>

        <BlogList
          title={
            <BlogSubTitle>
              <Bug className="inline-block text-red-400 size-5 mr-2" />
              Why Hydration Errors Occur
            </BlogSubTitle>
          }
          items={[
            "Mismatch between server and client HTML",
            "Browser-specific APIs used during server rendering",
            "Inconsistent date/time formatting between server and client",
            "Third-party libraries not SSR-compatible",
            "Incorrect use of useEffect/useLayoutEffect hooks",
          ]}
        />

        <BlogTips
          title="Did You Know?"
          description="Hydration errors only occur in development mode? In production, React will silently reconcile differences, potentially causing layout shifts!"
        />

        <BlogSubTitle>
          <AlertTriangle className="inline-block text-yellow-400 w-5 h-5 mr-2" />
          The Classic Hydration Error Message
        </BlogSubTitle>
        <BlogContent>
          {"You've probably seen this warning in your console"}:
        </BlogContent>
        <CodeBlock
          language="bash"
          filename="bash"
          code={`Warning: Text content did not match. Server: "Hello" Client: "World"
Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server.`}
        />

        <BlogSubTitle>
          <Shield className="inline-block text-blue-400 w-5 h-5 mr-2" />
          Step 1: Understanding the Hydration Process
        </BlogSubTitle>
        <BlogTable
          title="The Hydration Process"
          description="The hydration process in Next.js involves the following steps:"
          data={[
            {
              title: "Server Rendering",
              description: "Next.js generates HTML on the server",
            },
            {
              title: "Initial Hydration",
              description: "React attaches event handlers to server HTML",
            },
            {
              title: "Mismatch Detection",
              description: "React compares server and client output",
            },
            {
              title: "Error Thrown",
              description: "Differences trigger hydration error",
            },
          ]}
        />

        <BlogContent>
          {
            "Hydration is React's process of attaching to server-generated HTML and making it interactive."
          }
        </BlogContent>

        <BlogSubTitle>
          <Code className="inline-block text-purple-400 w-5 h-5 mr-2" />
          Step 2: Common Causes and Fixes
        </BlogSubTitle>

        <BlogSubTitle>Browser-Specific APIs</BlogSubTitle>
        <BlogContent>
          Accessing <BlogHighlighter>window</BlogHighlighter> or{" "}
          <BlogHighlighter>document</BlogHighlighter>
          directly during server rendering:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="components/BrokenComponent.tsx"
          code={`// ❌ Wrong: Accessing window during render
function BrokenComponent() {
  const width = window.innerWidth;  // Server: undefined, Client: 1200
  return <div>Width: {width}px</div>;
}`}
        />
        <CodeBlock
          language="typescript"
          filename="components/FixedComponent.tsx"
          code={`// ✅ Fixed: Use useEffect + useState
function FixedComponent() {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>Width: {width}px</div>;
}`}
        />

        <BlogSubTitle>Date/Time Mismatches</BlogSubTitle>
        <BlogContent>
          Formatting dates differently on server and client:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="components/DateComponent.tsx"
          code={`// ❌ Wrong: Inconsistent formatting
function DateComponent() {
  const date = new Date().toLocaleDateString(); 
  // Server: "7/5/2025", Client: "05/07/2025" (different locales)
  return <div>Today: {date}</div>;
}`}
        />
        <CodeBlock
          language="typescript"
          filename="components/FixedDateComponent.tsx"
          code={`// ✅ Fixed: Use consistent timezone/locale
function FixedDateComponent() {
  const [date, setDate] = useState('');
  
  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US'));
  }, []);

  return <div>Today: {date}</div>;
}`}
        />

        <BlogSubTitle>Third-Party Library Issues</BlogSubTitle>
        <BlogContent>{"Libraries that aren't SSR-compatible:"}</BlogContent>
        <CodeBlock
          language="typescript"
          filename="components/MapComponent.tsx"
          code={`// ❌ Wrong: Directly using non-SSR library
import { Map } from 'non-ssr-map-library';

function LocationMap() {
  return <Map center={[51.505, -0.09]} />;  // Fails on server
}`}
        />
        <CodeBlock
          language="typescript"
          filename="components/FixedMapComponent.tsx"
          code={`// ✅ Fixed: Dynamic import with no SSR
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('non-ssr-map-library').then(mod => mod.Map), {
  ssr: false
});

function FixedLocationMap() {
  return <Map center={[51.505, -0.09]} />;
}`}
        />

        <BlogSubTitle>
          <RefreshCw className="inline-block text-green-400 w-5 h-5 mr-2" />
          Step 3: Advanced Fixes
        </BlogSubTitle>

        <BlogSubTitle>Suppressing Hydration Warnings</BlogSubTitle>
        <BlogContent>
          For safe differences (like unimportant whitespace):
        </BlogContent>
        <CodeBlock
          filename="pages/index.tsx"
          language="typescript"
          code={`// Add suppressHydrationWarning to ignore specific differences
<div suppressHydrationWarning={true}>
  {new Date().toLocaleTimeString()} 
</div>`}
        />

        <BlogSubTitle>Using useLayoutEffect</BlogSubTitle>
        <BlogContent>
          For DOM measurements that need to happen before paint:
        </BlogContent>
        <CodeBlock
          filename="components/MeasureComponent.tsx"
          language="typescript"
          code={`import { useLayoutEffect, useRef } from 'react';

function MeasureComponent() {
  const ref = useRef(null);
  
  useLayoutEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    console.log('Width:', width);
  }, []);

  return <div ref={ref}>Content</div>;
}`}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <Zap className="inline-block text-amber-400 w-5 h-5 mr-2" />
              Pro Tips for Avoiding Hydration Errors
            </BlogSubTitle>
          }
          items={[
            "Always initialize state with consistent values",
            "Use CSS for layout shifts instead of JS",
            "Prefer data fetching in getServerSideProps/getStaticProps",
            "Test with different locales and timezones",
            "Verify third-party library SSR compatibility",
          ]}
        />

        <BlogTable
          title="Hydration Error Checklist"
          description="Common issues that cause hydration errors"
          data={[
            {
              title: "Browser APIs",
              description: "Moved to useEffect/useLayoutEffect",
            },
            {
              title: "Dates/Times",
              description: "Consistent formatting on server/client",
            },
            {
              title: "External Libraries",
              description: "Using dynamic imports with ssr:false",
            },
            {
              title: "State Initialization",
              description: "Consistent initial values",
            },
            {
              title: "CSS-in-JS",
              description: "Proper server-side rendering config",
            },
          ]}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <Check className="inline-block text-emerald-400 w-5 h-5 mr-2" />
              Best Practices
            </BlogSubTitle>
          }
          items={[
            "Always render the same component tree on server and client",
            "Use the 'use client' directive strategically",
            "Abstract browser-specific code into custom hooks",
            "Implement error boundaries for graceful failures",
            "Use Next.js' built-in ESLint rules for hydration checks",
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
              key="1"
              href="https://nextjs.org/docs/messages/react-hydration-error"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              Next.js Hydration Error Documentation
            </Link>,
            <Link
              key="2"
              href="https://react.dev/reference/react-dom/client/hydrateRoot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              React Hydration API Reference
            </Link>,
            <Link
              key="3"
              href="https://www.joshwcomeau.com/react/the-perils-of-rehydration/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              The Perils of Rehydration
            </Link>,
          ]}
        />

        <BlogSubTitle>
          <Lightbulb className="inline-block text-amber-400 w-5 h-5 mr-2" />
          Final Thoughts
        </BlogSubTitle>
        <BlogContent>
          Hydration errors can be tricky, but understanding their root causes
          makes them much easier to solve. Remember that consistency between
          server and client rendering is key - when in doubt, move
          browser-specific logic to useEffect or useLayoutEffect hooks.
        </BlogContent>
        <BlogContent>
          {`
          By following these patterns and best practices, you'll eliminate
          hydration errors and create more robust Next.js applications with
          smoother user experiences.
          `}
        </BlogContent>
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default HydrationErrorPage;
