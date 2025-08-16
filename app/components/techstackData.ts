export const techStackData = {
  languages: {
    tagline: "The building blocks of everything we develop.",
    items: [
      {
        name: "Dart",
        icon: "/icons/dart.svg",
        description: "Optimized for fast cross-platform mobile development",
      },
      {
        name: "HTML",
        icon: "/icons/html.svg",
        description: "The structure of every webpage and app interface",
      },
      {
        name: "CSS",
        icon: "/icons/css.svg",
        description: "Beautiful, responsive styling made consistent",
      },
      {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        description: "Adds life to the web with real-time interactivity",
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        description: "Safer, scalable JavaScript for large codebases",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
        description: "Rapid UI styling with a clean utility-first approach",
      },
      {
        name: "SQL",
        icon: "/icons/sql.svg",
        description: "Language of powerful and structured data queries",
      },
    ],
  },
  frameworks: {
    tagline: "Built faster, better, and smarter.",
    items: [
      {
        name: "Flutter",
        icon: "/icons/flutter.svg",
        description:
          "Native-like mobile apps for Android and iOS from one codebase",
      },
      {
        name: "React",
        icon: "/icons/react.svg",
        description: "Component-driven UIs that scale with your product",
      },
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        description: "SEO-friendly full-stack apps with blazing performance",
      },
      {
        name: "Hono",
        icon: "/icons/hono.svg",
        description: "Ultra-fast backend framework built for the edge",
      },
      {
        name: "Express",
        icon: "/icons/express.svg",
        description: "Lightweight APIs built quickly on Node.js",
      },
    ],
  },
  databases: {
    tagline: "Your data - organized, fast, and secure.",
    items: [
      {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        description: "Strong, scalable SQL database for structured data",
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        description: "Flexible NoSQL for fast-moving, schema-less data",
      },
      {
        name: "Firestore",
        icon: "/icons/firestore.svg",
        description: "Real-time sync for web and mobile at scale",
      },
      {
        name: "Realtime Database",
        icon: "/icons/realtime.svg",
        description: "Lightweight DB with instant updates across users",
      },
      {
        name: "SQLite",
        icon: "/icons/sqlite.svg",
        description: "Local-first database ideal for mobile and embedded apps",
      },
      {
        name: "Redis",
        icon: "/icons/redis.svg",
        description: "Lightning-fast memory caching and data queues",
      },
      {
        name: "KV Storage",
        icon: "/icons/kv.svg",
        description:
          "Simple key-value store designed for global low-latency access",
      },
    ],
  },
  deployments: {
    tagline: "Fast, global, and reliable—from dev to production.",
    items: [
      {
        name: "Firebase",
        icon: "/icons/firebase.svg",
        description:
          "Everything from hosting to auth—serverless and production-ready",
      },
      {
        name: "Vercel",
        icon: "/icons/vercel.svg",
        description:
          "Instant deployment with CDN-backed performance for web apps",
      },
      {
        name: "Supabase",
        icon: "/icons/supabase.svg",
        description: "Open-source backend with SQL DB, auth, and storage",
      },
      {
        name: "GCP",
        icon: "/icons/gcp.svg",
        description: "Cloud infrastructure trusted by global enterprises",
      },
      {
        name: "Cloudflare",
        icon: "/icons/cloudflare.svg",
        description:
          "Edge-first hosting with built-in security and global delivery",
      },
      {
        name: "AWS",
        icon: "/icons/aws.svg",
        description: "Battle-tested cloud for enterprise-grade apps and APIs",
      },
      {
        name: "Azure",
        icon: "/icons/azure.svg",
        description:
          "Full-featured cloud for scalable web and enterprise services",
      },
    ],
  },
};

export type TechStackData = typeof techStackData;
export type TechCategory = keyof TechStackData;

export type TechCategoryData = TechStackData[TechCategory];
export type TechItem = {
  name: string;
  description: string;
};
