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
  LayoutTemplate,
  Network,
  Folder,
  Route,
  Shield,
  Settings,
  Check,
  Lightbulb,
  BookOpen,
  Zap,
  FolderTree,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";

const NextJSRoutingPage = () => {
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
                <LayoutTemplate className="inline-block text-blue-400 size-12 mr-2" />
                Mastering{" "}
                <span className="secondary-gradient-text">Next.js Routing</span>{" "}
                From Basics to Advanced Patterns
              </>
            }
            // description="Unlock the Full Potential of Next.js File-Based Routing System"
          />
          <WriterInfo
            image={author.image}
            name={author.name}
            role={author.role}
            readTime="10"
            date="June 14, 2025"
          />
        </header>

        <BlogContent>
          Next.js revolutionized web development with its file-based routing
          system that automatically maps your directory structure to application
          routes. This guide explores both fundamental concepts and advanced
          routing patterns to help you build complex applications with
          confidence.
        </BlogContent>

        <BlogList
          title={
            <BlogSubTitle>
              <Zap className="inline-block text-amber-400 w-5 h-5 mr-2" />
              Why Next.js Routing Stands Out
            </BlogSubTitle>
          }
          items={[
            "Zero configuration required",
            "Automatic code splitting",
            "Nested routing support",
            "Built-in loading states",
            "Advanced patterns for complex UIs",
          ]}
        />

        <BlogTips
          title="Did You Know?"
          description="Next.js routes can render as static HTML, server-side rendered, or client-side rendered - all in the same application!"
        />

        <BlogSubTitle>
          <LayoutTemplate className="inline-block text-blue-400 w-5 h-5 mr-2" />
          Basic Routing Fundamentals
        </BlogSubTitle>

        <BlogSubTitle>File Structure = URL Path</BlogSubTitle>
        <BlogContent>
          Next.js automatically maps files in the{" "}
          <BlogHighlighter>app</BlogHighlighter> directory to routes:
        </BlogContent>
        <CodeBlock
          language="bash"
          filename="Project Structure"
          code={`app/
├── page.tsx            → /
├── about/
│   └── page.tsx        → /about
├── blog/
│   ├── page.tsx        → /blog
│   └── [slug]/
│       └── page.tsx    → /blog/:slug
└── dashboard/
    └── settings/
        └── page.tsx    → /dashboard/settings`}
        />

        <BlogSubTitle>Layouts and Templates</BlogSubTitle>
        <BlogContent>
          Create shared UI with <BlogHighlighter>layout.tsx</BlogHighlighter>{" "}
          and
          <BlogHighlighter>template.tsx</BlogHighlighter> files:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/layout.tsx"
          code={`export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}`}
        />

        <BlogSubTitle>
          <Network className="inline-block text-purple-400 w-5 h-5 mr-2" />
          Dynamic Routes
        </BlogSubTitle>
        <BlogContent>
          Capture variable path segments using square brackets:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/blog/[slug]/page.tsx"
          code={`export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  return <h1>Blog Post: {params.slug}</h1>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}`}
        />

        <BlogSubTitle>
          <Folder className="inline-block text-yellow-400 w-5 h-5 mr-2" />
          Route Groups
        </BlogSubTitle>
        <BlogContent>
          Organize routes without affecting URL structure using parentheses:
        </BlogContent>
        <CodeBlock
          language="bash"
          filename="Project Structure"
          code={`app/
├── (marketing)/
│   ├── about/
│   ├── pricing/
│   └── layout.tsx  # Marketing-specific layout
└── (app)/
    ├── dashboard/
    ├── settings/
    └── layout.tsx   # App-specific layout`}
        />

        <BlogSubTitle>
          <Route className="inline-block text-green-400 w-5 h-5 mr-2" />
          Advanced Routing Patterns
        </BlogSubTitle>

        <BlogSubTitle>Parallel Routes</BlogSubTitle>
        <BlogContent>
          Render multiple pages in the same layout simultaneously:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/dashboard/layout.tsx"
          code={`export default function Layout({
  children,
  analytics,
  notifications,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">{children}</div>
      <div className="grid grid-rows-2 gap-4">
        <div>{analytics}</div>
        <div>{notifications}</div>
      </div>
    </div>
  );
}`}
        />

        <BlogSubTitle>Intercepted Routes</BlogSubTitle>
        <BlogContent>
          Show a route in a modal while preserving the context:
        </BlogContent>
        <CodeBlock
          language="bash"
          filename="Project Structure"
          code={`app/
├── @modal/
│   └── (.)photo/
│       └── [id]/
│           └── page.tsx  # Intercepted route
└── photo/
    └── [id]/
        └── page.tsx      # Full page route`}
        />
        <CodeBlock
          language="typescript"
          filename="app/photo/[id]/page.tsx"
          code={`import PhotoModal from "@/app/@modal/(.)photo/[id]/page";

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = getPhoto(id);
  
  return (
    <>
      <PhotoModal photo={photo} />
      {/* Full page content */}
    </>
  );
}`}
        />

        <BlogSubTitle>Conditional Routes</BlogSubTitle>
        <BlogContent>
          Render different UIs based on authentication state:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/dashboard/layout.tsx"
          code={`import { getCurrentUser } from "@/lib/auth";

export default async function Layout({
  user,
  guest,
}: {
  user: React.ReactNode;
  guest: React.ReactNode;
}) {
  const session = await getCurrentUser();
  
  return (
    <div>
      <DashboardHeader />
      {session ? user : guest}
    </div>
  );
}`}
        />

        <BlogSubTitle>
          <Shield className="inline-block text-red-400 w-5 h-5 mr-2" />
          Route Protection with Middleware
        </BlogSubTitle>
        <BlogContent>Protect routes before they render:</BlogContent>
        <CodeBlock
          language="typescript"
          filename="middleware.ts"
          code={`import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  
  // Redirect unauthenticated users
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Add security headers to all routes
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  return response;
}

export const config = {
  matcher: ['/dashboard/:path*'],
};`}
        />

        <BlogSubTitle>
          <Settings className="inline-block text-cyan-400 w-5 h-5 mr-2" />
          Advanced Routing Techniques
        </BlogSubTitle>
        <BlogTable
          title="Next.js Routing Features"
          description="Next.js provides a rich set of routing features to create dynamic and interactive web experiences."
          data={[
            {
              title: "Route Handlers",
              description: "API endpoints using Web Request/Response APIs",
            },
            {
              title: "Server Actions",
              description: "Call server functions directly from components",
            },
            {
              title: "Dynamic Route Segments",
              description:
                "Catch-all [...slug] and optional [[...slug]] routes",
            },
            {
              title: "Internationalization",
              description: "Locale-based routing with next-intl",
            },
            {
              title: "Custom 3D Route Transitions",
              description: "Using Framer Motion and Three.js",
            },
          ]}
        />

        <BlogSubTitle>Custom Route Handlers</BlogSubTitle>
        <BlogContent>Create API endpoints alongside your routes:</BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/api/users/route.ts"
          code={`import { NextResponse } from 'next/server';

export async function GET() {
  const users = await db.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newUser = await db.user.create({ data });
  return NextResponse.json(newUser, { status: 201 });
}`}
        />

        <BlogSubTitle>Dynamic Route Segments</BlogSubTitle>
        <BlogContent>
          Advanced pattern matching with catch-all routes:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/shop/[...category]/page.tsx"
          code={`export default function CategoryPage({
  params,
}: {
  params: { category: string[] };
}) {
  // URL: /shop/electronics/phones
  // params: { category: ['electronics', 'phones'] }
  
  return <ProductGrid category={params.category} />;
}`}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <Check className="inline-block text-emerald-400 w-5 h-5 mr-2" />
              Routing Best Practices
            </BlogSubTitle>
          }
          items={[
            "Use route groups for organization",
            "Implement middleware for cross-cutting concerns",
            "Prefer generateStaticParams for SSG",
            "Use parallel routes for complex dashboards",
            "Add custom 404 and error pages",
          ]}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <Lightbulb className="inline-block text-amber-400 w-5 h-5 mr-2" />
              Pro Tips
            </BlogSubTitle>
          }
          items={[
            "Use the 'useSelectedLayoutSegment' hook to create responsive layouts",
            "Combine route intercepting with history state for seamless modal experiences",
            "Leverage route groups to split CSS bundles by section",
            "Use middleware for A/B testing and feature flags",
            "Implement skeleton screens with loading.tsx for better UX",
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
              href="https://nextjs.org/docs/app/building-your-application/routing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              Next.js Routing Documentation
            </Link>,
            <Link
              key={1}
              href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              Parallel Routes Guide
            </Link>,
            <Link
              key={2}
              href="https://next-intl-docs.vercel.app/docs/routing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              Internationalized Routing with next-intl
            </Link>,
            <Link
              key={3}
              href="https://github.com/vercel-labs/next-routes-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
            >
              Advanced Routing Examples
            </Link>,
          ]}
        />

        <BlogSubTitle>
          <FolderTree className="inline-block text-green-400 w-5 h-5 mr-2" />
          Final Thoughts
        </BlogSubTitle>
        <BlogContent>
          {`Next.js routing system provides an elegant solution that scales from
        simple websites to complex applications. By mastering both fundamental
        concepts and advanced patterns like parallel routes and route
        interception, you can create intuitive navigation experiences that
        delight users.`}
        </BlogContent>
        <BlogContent>
          {`Remember: The file-based routing system is just the beginning -
          combine it with Next.js' data fetching strategies and rendering modes
          to build truly powerful applications.`}
        </BlogContent>
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default NextJSRoutingPage;
