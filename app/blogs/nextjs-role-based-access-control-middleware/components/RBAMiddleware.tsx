"use client";
import {
  BlogContent,
  BlogHighlighter,
  BlogList,
  BlogSubTitle,
  BlogTips,
  WriterInfo,
} from "@/app/components/BlogComponents";
import CustomTitle from "@/components/custom/CustomTitle";
import { CodeBlock } from "@/components/ui/code-block";
import { BLOG_AUTHORS, BLOG_PREVIEWS } from "@/lib/constants";
import {
  Check,
  Shield,
  Settings,
  Search,
  AlertTriangle,
  Lightbulb,
  Wrench,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import RelatedNextBlogButton from "@/app/components/RelatedNextBlogButton";
import TagsList from "@/components/custom/TagsList";

const RBACMiddlewarePage = () => {
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
                <Shield className="inline-block text-sky-800 size-12 mr-2" />
                Implementing{" "}
                <span className="secondary-gradient-text">
                  Role-Based Access Control
                </span>{" "}
                in Next.js Using Middleware
              </>
            }
          />
          <WriterInfo
            image={author.image}
            name={author.name}
            role={author.role}
            readTime="6"
            date="June 14, 2025"
          />
        </header>

        <BlogContent>
          Implementing robust access control is crucial for any SaaS
          application. When using Next.js with a custom backend, developers
          often face the challenge of integrating JWT-based authentication with
          middleware for role-based access control (RBAC). This guide walks
          through an effective solution for managing page-level permissions
          using Next.js middleware.
        </BlogContent>

        <BlogList
          title={
            <BlogSubTitle>
              The Challenge: Custom Backend Integration
            </BlogSubTitle>
          }
          items={[
            "Authentication handled by separate backend service",
            "JWT tokens stored in HTTP-only cookies",
            "Need to verify roles before page rendering",
            "Centralized access control for all protected routes",
          ]}
        />

        <BlogTips
          title="Important Note"
          description="Middleware runs on the edge network, so we need lightweight JWT verification methods"
        />

        <BlogSubTitle className="">
          <Settings className="inline-block text-blue-400 w-5 h-5 mr-2" />
          Step 1: Understanding Our JWT Structure
        </BlogSubTitle>
        <BlogContent>
          Our backend team implemented JWTs with a role claim in the payload:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="jwt-payload.d.ts"
          code={`interface JwtPayload {
  userId: string;
  role: "USER" | "ADMIN" | "MODERATOR";
  // ...other claims
}`}
        />

        <BlogSubTitle>
          <Wrench className="inline-block text-green-400 w-5 h-5 mr-2" />
          Step 2: Creating the Middleware
        </BlogSubTitle>
        <BlogContent>
          The middleware handles authentication and authorization before
          requests reach your pages:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="middleware.ts"
          code={`import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth'; // Custom JWT verifier

// Role-based route configuration
const roleRoutes: Record<string, string[]> = {
  ADMIN: ['/dashboard', '/admin', '/settings'],
  MODERATOR: ['/dashboard', '/mod-tools'],
  USER: ['/dashboard'],
};

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token')?.value;
  const { pathname } = req.nextUrl;

  // 1. Redirect unauthenticated users
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // 2. Verify JWT token
  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // 3. Check if path requires specific role
  const requiredRole = Object.entries(roleRoutes).find(([_, paths]) =>
    paths.some(path => pathname.startsWith(path))
  )?.[0];

  // 4. Grant access if no specific role required
  if (!requiredRole) return NextResponse.next();

  // 5. Verify user has required role
  if (payload.role !== requiredRole) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/mod-tools/:path*',
    '/settings/:path*'
  ],
};`}
        />

        <BlogSubTitle className="!mb-0">
          <Search className="inline-block text-purple-400 w-5 h-5 mr-2" />
          Step 3: Key Components Explained
        </BlogSubTitle>

        <BlogSubTitle className="block !mx-5">JWT Verification</BlogSubTitle>
        <BlogContent>
          Our custom <BlogHighlighter>verifyToken</BlogHighlighter> function:
        </BlogContent>
        <CodeBlock
          language="typescript"
          filename="lib/auth.ts"
          code={`import jwt from '@tsndr/cloudflare-worker-jwt'; // Lightweight JWT verifier

export async function verifyToken(token: string) {
  try {
    const isValid = await jwt.verify(token, process.env.JWT_SECRET!);
    if (!isValid) return null;
    
    const { payload } = jwt.decode(token);
    return payload as JwtPayload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}`}
        />

        <BlogSubTitle>Role-Based Path Matching</BlogSubTitle>
        <BlogContent>Defining role/route relationships:</BlogContent>
        <CodeBlock
          filename="middleware.ts"
          language="typescript"
          code={`const roleRoutes = {
  ADMIN: ['/dashboard', '/admin', '/settings'],
  MODERATOR: ['/dashboard', '/mod-tools'],
  USER: ['/dashboard'],
};`}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <AlertTriangle className="inline-block text-yellow-400 w-5 h-5 mr-2" />
              Step 4: Handling Edge Cases
            </BlogSubTitle>
          }
          items={[
            "Token expiration handling",
            "Role inheritance (Admin inherits Moderator permissions)",
            "Public/private hybrid routes",
            "API route protection",
          ]}
        />

        <BlogTips
          title="Pro Tip"
          description="For role inheritance, implement a role hierarchy check:"
        />
        <CodeBlock
          language="typescript"
          filename="middleware.ts"
          code={`const roleHierarchy = {
  ADMIN: ['ADMIN', 'MODERATOR', 'USER'],
  MODERATOR: ['MODERATOR', 'USER'],
  USER: ['USER']
};

// In middleware:
if (!roleHierarchy[payload.role].includes(requiredRole)) {
  return NextResponse.redirect('/unauthorized');
}`}
        />

        <BlogSubTitle>
          <Wrench className="inline-block text-green-400 w-5 h-5 mr-2" />
          Step 5: Server-Side Validation
        </BlogSubTitle>
        <BlogContent>Always verify roles in API routes too:</BlogContent>
        <CodeBlock
          language="typescript"
          filename="app/api/admin/route.ts"
          code={`import { verifyToken } from '@/lib/auth';

export async function GET(req: Request) {
  const token = req.headers.get('Authorization')?.split(' ')[1];
  
  if (!token) {
    return new Response('Unauthorized', { status: 401 });
  }

  const payload = await verifyToken(token);
  
  if (payload?.role !== 'ADMIN') {
    return new Response('Forbidden', { status: 403 });
  }

  // Admin-only logic
}`}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <Check className="inline-block text-emerald-400 w-5 h-5 mr-2" />
              Best Practices
            </BlogSubTitle>
          }
          items={[
            "Always verify tokens on both client and server",
            "Implement short-lived access tokens (15-30 mins)",
            "Use HTTP-only cookies for token storage",
            "Maintain a centralized role definition",
            "Log all access control failures",
          ]}
        />

        <BlogList
          title={
            <BlogSubTitle>
              <BookOpen className="inline-block text-cyan-400 w-5 h-5 mr-2" />
              Useful Resources
            </BlogSubTitle>
          }
          items={[
            <Link
              href="https://nextjs.org/docs/app/building-your-application/routing/middleware"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
              key={0}
            >
              Next.js Middleware Docs
            </Link>,
            <Link
              href="https://jwt.io/introduction"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
              key={1}
            >
              JWT Best Practices
            </Link>,
            <Link
              href="https://owasp.org/www-project-cheat-sheets/cheatsheets/Access_Control_Cheat_Sheet.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-600"
              key={2}
            >
              OWASP Access Control Guide
            </Link>,
          ]}
        />

        <BlogSubTitle>
          <Lightbulb className="inline-block text-amber-400 w-5 h-5 mr-2" />
          Final Thoughts
        </BlogSubTitle>
        <BlogContent>
          Implementing RBAC with a custom backend required careful coordination
          between frontend and backend teams, but using Next.js middleware
          provided a clean, centralized solution. The key was establishing clear
          contracts for JWT structure and implementing lightweight verification
          for edge runtime.
        </BlogContent>
        <BlogContent>
          Remember: Middleware is your first security layer, but always validate
          permissions in your backend too!
        </BlogContent>
        <RelatedNextBlogButton currentSlug={pathname} currentTags={tags} />
      </div>
    </div>
  );
};

export default RBACMiddlewarePage;
