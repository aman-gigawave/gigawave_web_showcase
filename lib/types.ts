
export type Testimonial = {
  testimonial: string;
  companyName: string;
  clientPhoto?: string;
  clientRole: string;
  clientName: string;
};

export type BlogPreview = {
  slug: string;
  title: string;
  description: string;
  authorId: string;
  date: string;
  tags: string[];
  readTime: string;
};

export type BlogAuthors = {
  id: string;
  name: string;
  role: string;
  image: string;
};

type PlatformType = {
  platform: "ANDROID" | "IOS" | "WEB" | "BACKEND";
  link?: string;
  icon?: string;
};

export type TOOLS =
  | "FLUTTER"
  | "REACT"
  | "NEXT"
  | "EXPRESS"
  | "HONO"
  | "DART"
  | "JAVASCRIPT"
  | "TYPESCRIPT"
  | "TAILWIND CSS"
  | "POSTGRESQL"
  | "API"
  | "FIREBASE"
  | "SUPABASE"
  | "CLOUDFLARE"
  | "DRIZZLE ORM"
  | "VERCEL"
  | "AZURE"
  | "GCP"
  | "AWS"
  | "SHADCN"
  | "REDIS"
  | "FIRESTORE"
  | "REALTIME DATABASE"
  | "SQLITE"
  | "MONGODB"
  | "DYNAMODB"
  | "CLOUD"
  | "POSTMAN"
  | "ANDROID STUDIO"
  | "XCODE"
  | "CLOUDFLARE WORKERS"
  | "FRAMER MOTION"
  | "JWT"
  | "REACT HOOK FORM"
  | "REACT QUERY"
  | "THREEJS"
  | "ZOD"
  | "ZUSTAND"
  | "TANSTACK"
  | "SCALAR"
  | "AUTH0"
  | "GETX"
  | "OPENAPI"
  | "DOCKER"
  | "FIGMA"
  | "RAZORPAY"
  | "WEBSOCKETS";
export type ProjectInfoType = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  companyName: string;
  tools: TOOLS[];
  platform?: PlatformType[];
  members: number;
  scratch?: boolean;
  category: string;
  status: "UPCOMMING" | "ONGOING" | "COMPLETED" | "ENHANCEMENTS";
};

// export type NavTitleType = typeof NAVLIST[number]["title"];
// export type NavRefType = typeof NAVLIST[number]["href"];
