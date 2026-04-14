import {
  BlogAuthors,
  BlogPreview,
  ProjectInfoType,
  Testimonial,
} from "./types";

export const TESTIMONIALS: Testimonial[] = [
  {
    testimonial:
      "Working with this team was a game-changer for our business. Their innovative solutions helped us scale efficiently and improve customer engagement.",
    companyName: "Forumsquare",
    clientPhoto: "/globe.svg",
    clientRole: "CEO",
    clientName: "Michael Carter",
  },
  {
    testimonial:
      "Their expertise in app development is unmatched. They delivered our project ahead of schedule with flawless execution.",
    companyName: "Appify",
    clientPhoto: "/globe.svg",
    clientRole: "CTO",
    clientName: "Sarah Lin",
  },
  {
    testimonial:
      "The team's dedication to social impact aligns perfectly with our mission. They helped us streamline operations and amplify our reach.",
    companyName: "Daanakarma",
    clientPhoto: "/globe.svg",
    clientRole: "Founder",
    clientName: "Raj Patel",
  },
  {
    testimonial:
      "From concept to launch, their attention to detail was impressive. Our e-commerce platform saw a 40% increase in sales post-launch!",
    companyName: "Tiny Treasure",
    clientPhoto: "/globe.svg",
    clientRole: "Marketing Director",
    clientName: "Emily Wong",
  },
  {
    testimonial:
      "Their data-driven approach helped us optimize our logistics network, reducing costs by 25%.",
    companyName: "Savaal",
    clientPhoto: "/globe.svg",
    clientRole: "Operations Manager",
    clientName: "David Kim",
  },
  {
    testimonial:
      "Fast, reliable, and customer-focused. Their payment solutions transformed our checkout experience.",
    companyName: "Flashpe",
    clientPhoto: "/globe.svg",
    clientRole: "Product Lead",
    clientName: "Jessica Moore",
  },
  {
    testimonial:
      "The seamless UI/UX they designed significantly boosted our app retention rates. Highly recommend!",
    companyName: "Mapp",
    clientPhoto: "/globe.svg",
    clientRole: "Design Head",
    clientName: "Daniel Lee",
  },
  {
    testimonial:
      "Their social media integration tools helped us grow our user base by 300% in just six months.",
    companyName: "Jocial",
    clientPhoto: "/globe.svg",
    clientRole: "Growth Marketer",
    clientName: "Sophia Adams",
  },
];

export const BLOG_AUTHORS: BlogAuthors[] = [
  {
    id: "1",
    name: "Aman Kumar",
    role: "Flutter Developer",
    image: "/images/aman.jpg",
  },
  {
    id: "2",
    name: "Amit Hariyale",
    role: "Full Stack Web Developer",
    image: "/images/amit.jpg",
  },
  {
    id: "3",
    name: "Sai Kiran",
    role: "Developer",
    image: "/images/author.png",
  },
];

export const BLOG_PREVIEWS: BlogPreview[] = [
  {
    title: "Flutter Fielding Position Picker Using CustomPainter",
    description:
      "Build a cricket fielding position picker in Flutter with CustomPainter, tap detection, and animated UI, mapping user taps to real fielding positions.",
    authorId: "1",
    date: "October 14, 2024",
    readTime: "5",
    tags: ["Flutter", "CustomPainter", "Cricket"],
    slug: "flutter-fielding-position-picker-custompainter",
  },
  {
    title: "Mastering Next.js Routing From Basics to Advanced Patterns",
    description:
      "Unlock the full potential of Next.js file-based routing, from fundamentals to advanced patterns, with practical code and real-world tips.",
    authorId: "2",
    date: "November 14, 2024",
    readTime: "10",
    tags: ["Next.js", "Routing", "Web Development"],
    slug: "nextjs-routing-guide-advanced-patterns",
  },
  {
    title: "Top Flutter Packages: Why You Should Use Them",
    description:
      "Discover the most essential Flutter packages, their benefits, and what you miss out on if you don't use them, with code examples and best practices.",
    authorId: "1",
    date: "December 14, 2024",
    readTime: "7",
    tags: ["Flutter", "Packages", "Best Practices"],
    slug: "top-flutter-packages-benefits",
  },
  {
    title: "Implementing Role-Based Access Control in Next.js Using Middleware",
    description:
      "A practical guide to securing Next.js apps with JWT authentication and middleware for robust role-based access control (RBAC).",
    authorId: "2",
    date: "January 14, 2025",
    readTime: "6",
    tags: ["Next.js", "Security", "Middleware", "RBAC"],
    slug: "nextjs-role-based-access-control-middleware",
  },
  {
    title: "Flutter Web Navigation: GoRouter + GetX (No GetMaterialApp)",
    description:
      "Solve real-world navigation and overlay issues in Flutter Web by combining GoRouter and GetX, with practical code and troubleshooting tips.",
    authorId: "1",
    date: "February 14, 2025",
    readTime: "6",
    tags: ["Flutter", "Web", "Navigation", "GoRouter", "GetX"],
    slug: "flutter-web-navigation-gorouter-getx",
  },
  {
    title: "Boost Your Next.js SEO with Dynamic Sitemaps & Robots.txt",
    description:
      "Learn how to create dynamic sitemaps and optimized robots.txt files in Next.js to maximize your site's SEO and search engine visibility.",
    authorId: "2",
    date: "March 14, 2025",
    readTime: "8",
    tags: ["Next.js", "SEO", "Sitemap", "Robots.txt"],
    slug: "nextjs-seo-dynamic-sitemap-robots",
  },
  {
    title: "Capture Widget as Video in Flutter Using FFmpeg Package",
    description:
      "Record a widget's UI as PNG frames and combine them into a video using FFmpeg in Flutter, with code and step-by-step instructions.",
    authorId: "1",
    date: "April 14, 2025",
    readTime: "4",
    tags: ["Flutter", "Video Generation", "FFmpeg"],
    slug: "flutter-capture-widget-video-ffmpeg",
  },
  {
    title: "Understanding and Fixing Hydration Errors in Next.js",
    description:
      "The complete guide to solving hydration errors in Next.js, including causes, fixes, and best practices for seamless SSR and client hydration.",
    authorId: "2",
    date: "May 14, 2025",
    readTime: "8",
    tags: ["Next.js", "Hydration", "SSR", "Debugging"],
    slug: "nextjs-hydration-errors-fix",
  },
  {
    title: "Merge Two Videos in Flutter Using FFmpegKit",
    description:
      "Learn how to merge two videos and overlay logos/timestamps in Flutter using the FFmpegKit package, with step-by-step Dart code and explanations.",
    authorId: "1",
    date: "June 14, 2025",
    readTime: "4",
    tags: ["Flutter", "FFmpeg", "Video Processing"],
    slug: "flutter-merge-videos-ffmpegkit",
  },
  {
    title: "Mastering ListView.builder and GridView.builder in Flutter",
    description:
      "Learn to implement efficient ListView.builder and GridView.builder in Flutter with practical code examples, performance tips, and production-ready patterns.",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["Flutter", "ListView", "GridView", "Performance", "Dart"],
    slug: "flutter-listview-gridview-builder-implementation",
  },  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260410114513",
  },
  {
    title: "how to install flutter in windows 11",
    description:
      "how to install flutter in windows 11",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["how", "to", "install", "flutter", "in"],
    slug: "install-flutter-windows-11",
  },
  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260410115619",
  },
  {
    title: "how to download flutter in windows 11",
    description:
      "how to download flutter in windows 11",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["how", "to", "download", "flutter", "in"],
    slug: "download-flutter-windows-11",
  },
  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260413090722",
  },
  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260413090749",
  },
  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260414051325",
  },
  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260414051502",
  },
  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260414051533",
  },
  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260414051859",
  },
  {
    title: "CHANGE_THIS_TOPIC_EACH_RUN",
    description:
      "CHANGE_THIS_TOPIC_EACH_RUN",
    authorId: "1",
    date: "April 9, 2026",
    readTime: "8",
    tags: ["CHANGE_THIS_TOPIC_EACH_RUN"],
    slug: "change-this-topic-each-run-20260414051910",
  },

];

export const PROJECTS: ProjectInfoType[] = [
  {
    id: "project_2",
    title: "Web Application",
    description:
      "Developed a react app for flashpe to place orders through scanning qr codes and looking to the active items available and included multiple payment options like razorpay, paytm, payu and also included wallet management.",
    companyName: "Flashpe",
    category: "food delivery",
    tools: ["REACT", "FIREBASE", "AWS", "JAVASCRIPT"],
    platform: [{ platform: "WEB", icon: "/icons/web.svg" }],
    tags: ["web development", "backend enhancements"],
    members: 1,
    status: "COMPLETED",
  },
  {
    id: "project_3",
    title: "Web Dashboard",
    category: "food delivery",
    description:
      "Developed a React-based admin dashboard for Flashpe with order management, catalogue management, multi-stores management, stock management, and user management with role-based access control. Features granular control on user access levels for specific stores with specific functionalities in real-time. Includes analytics on hourly, monthly, and weekly basis for all stores.",
    companyName: "Flashpe",
    tools: ["REACT", "FIREBASE", "TAILWIND CSS", "AWS", "GCP", "TYPESCRIPT"],
    tags: ["admin dashboard", "web development"],
    members: 1,
    status: "COMPLETED",
  },
  {
    id: "project_4",
    title: "User Application",
    description:
      "Built using Flutter for Android, iOS and responsive web with multi-themes and multi-template apps as part of Appify. Enables businesses to launch their own branded e-commerce apps with product management, crashlytics, cart management, Firebase analytics, push notifications, payment gateway integration and integrated 3rd party delivery partner services.",
    companyName: "Appify Retail",
    category: "e-commerce",
    tools: ["FLUTTER", "DART", "FIREBASE", "AZURE"],
    platform: [
      {
        platform: "ANDROID",
        link: "https://play.google.com/store/apps/details?id=com.appifyai.dheeras",
        icon: "/icons/android.svg",
      },
      {
        platform: "IOS",
        icon: "/icons/IOS.svg",
        link: "https://apps.apple.com/in/app/appify-retail/id6469513631",
      },
      {
        platform: "WEB",
        link: "https://iamback.appifystores.com",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["user app", "app development"],
    members: 2,
    status: "COMPLETED",
  },
  {
    id: "project_1",
    title: "Mobile Application",
    category: "food delivery",
    description:
      "Developed for Flashpe, a comprehensive food delivery platform for restaurants & cafeterias. Built using Flutter for Android and iOS. Features real-time food ordering, wallet management, payment integration (Razorpay, PayU, Paytm), and food management. Includes crashlytics, push notifications, webhooks development for managing payment information, and WhatsApp integration for order status updates.",
    companyName: "Flashpe",
    tools: ["FLUTTER", "DART", "FIREBASE"],
    platform: [
      {
        platform: "ANDROID",
        link: "https://play.google.com/store/apps/details?id=com.kisaann.thedining",
        icon: "/icons/android.svg",
      },
      {
        platform: "IOS",
        link: "https://apps.apple.com/in/app/flashpe/id1585178752",
        icon: "/icons/IOS.svg",
      },
    ],
    tags: ["app development", "backend development"],
    members: 2,
    status: "COMPLETED",
  },
  {
    id: "project_5",
    title: "Frontend Vendor Application",
    description:
      "Built using Flutter for Android and iOS for store management, product management, order management, cart management, Firebase analytics, and push notifications. Integrated with crashlytics, 3rd party delivery partner integration, Google Maps integration, vendor's application theme management, multi-app design selection, subscription-based access management, and multi-payment gateway integration.",
    companyName: "Appify Retail",
    tools: ["FLUTTER", "DART", "FIREBASE"],
    platform: [
      {
        platform: "ANDROID",
        link: "https://vendor.appi-fy.ai/login",
        icon: "/icons/android.svg",
      },
      {
        platform: "IOS",
        link: "https://vendor.appi-fy.ai/login",
        icon: "/icons/IOS.svg",
      },
    ],
    tags: ["admin app", "app development"],
    members: 2,
    status: "COMPLETED",
    category: "e-commerce",
  },
  {
    id: "project_6",
    title: "SaaS Vendor Web Dashboard",
    description:
      "Created a vendor dashboard using Next.js for Appify vendors to configure all functionalities present in the mobile apps, manage inventory, orders, and analytics. Features store management, subscription-based access, user management, and role-based access control.",
    companyName: "Appify Retail",
    tools: ["NEXT", "TYPESCRIPT", "TAILWIND CSS", "VERCEL", "SHADCN", "AZURE"],
    platform: [
      {
        platform: "WEB",
        link: "https://vendor.appi-fy.ai/login",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["vendor dashboard", "web development"],
    members: 2,
    status: "COMPLETED",
    category: "e-commerce",
  },
  {
    id: "project_7",
    title: "Admin Web Dashboard",
    description:
      "Created an admin panel using Next.js for Appify to configure all vendor stores, user management, custom roles creation and management with granular role-based access for multiple teams (support, development, management). Features subscription creation and management, order management with tracking, complex analytics for store performance, product management, and highly configurable search functionalities.",
    companyName: "Appify Retail",
    tools: ["NEXT", "TYPESCRIPT", "TAILWIND CSS", "VERCEL", "SHADCN", "AZURE"],
    platform: [
      {
        platform: "WEB",
        link: "https://vendor.appi-fy.ai/login",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["vendor dashboard", "web development"],
    members: 2,
    status: "COMPLETED",
    category: "e-commerce",
  },
  {
    id: "project_8",
    title: "SaaS Landing Page",
    description:
      "Forumsquare is a marketplace for software tools targeting healthcare and hospitals with subscription-based access to all tools and features including real-time bookings, chat, and doctor reviews.",
    companyName: "Forumsquare",
    category: "healthcare & marketplace",
    tools: ["NEXT", "TAILWIND CSS", "TYPESCRIPT", "VERCEL"],
    platform: [
      {
        platform: "WEB",
        link: "https://forumsquare.in",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["web development"],
    members: 2,
    status: "ONGOING",
  },
  {
    id: "project_9",
    title: "Mobile App",
    description:
      "Built using Flutter, Jocial is a next-generation social media app supporting user interaction and AI-generated content.",
    companyName: "Jocial",
    tools: [
      "FLUTTER",
      "SUPABASE",
      "POSTGRESQL",
      "CLOUDFLARE",
      "DRIZZLE ORM",
      "SHADCN",
    ],
    platform: [
      {
        platform: "ANDROID",
        link: "https://play.google.com/store/search?q=jocial&c=apps",
        icon: "/icons/android.svg",
      },
      {
        platform: "IOS",
        link: "https://apps.apple.com/us/app/jocial/id6740053219",
        icon: "/icons/IOS.svg",
      },
    ],
    tags: ["social media", "flutter", "AI"],
    members: 3,
    status: "ONGOING",
    category: "social media",
  },
  {
    id: "project_10",
    title: "Web App",
    description:
      "Created the web version of Jocial using Flutter Web to enable seamless cross-platform social interactions.",
    companyName: "Jocial",
    tools: ["FLUTTER", "SUPABASE", "CLOUDFLARE"],
    platform: [{ platform: "WEB", icon: "/icons/web.svg" }],
    tags: ["social", "cross-platform", "flutter web"],
    members: 2,
    status: "ONGOING",
    category: "social media",
  },
  {
    id: "project_11",
    title: "Web App",
    description:
      "Forumsquare is a marketplace for software tools targeting hospitals. Built with Next.js and Supabase for real-time bookings, chat, and doctor reviews.",
    companyName: "Forumsquare",
    tools: ["NEXT", "SUPABASE", "CLOUDFLARE"],
    platform: [
      {
        platform: "WEB",
        link: "https://www.forumsquare.in",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["healthcare", "marketplace", "hospital tools"],
    members: 2,
    status: "ONGOING",
    category: "healthcare",
  },
  {
    id: "project_12",
    title: "Mobile App",
    description:
      "Developed with Flutter, Saaval allows local cricketers to record and share their matches. Inspired by platforms like CricHeroes.",
    companyName: "Saaval",
    tools: ["FLUTTER", "POSTGRESQL", "CLOUDFLARE"],
    platform: [{ platform: "ANDROID", icon: "/icons/android.svg" }],
    tags: ["sports", "cricket", "flutter"],
    members: 2,
    status: "ONGOING",
    category: "sports",
  },
  {
    id: "project_13",
    title: "Web Dashboard",
    description:
      "Built using Next.js to manage and review match data recorded on the Saaval platform. Helps teams and sponsors track performance.",
    companyName: "Saaval",
    tools: ["NEXT", "POSTGRESQL", "CLOUDFLARE"],
    platform: [{ platform: "WEB", icon: "/icons/web.svg" }],
    tags: ["sports", "analytics", "nextjs"],
    members: 2,
    status: "ONGOING",
    category: "sports",
  },
  {
    id: "project_14",
    title: "Web Platform",
    description:
      "A donation portal allowing users to contribute to causes with dashboards for managing campaigns and volunteers. Built using Next.js and Supabase.",
    companyName: "Daanakarma",
    tools: [
      "NEXT",
      "SUPABASE",
      "CLOUDFLARE",
      "DRIZZLE ORM",
      "VERCEL",
      "TYPESCRIPT",
    ],
    platform: [
      {
        platform: "WEB",
        link: "https://daanakarma.com/",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["donation", "charity", "volunteer"],
    members: 2,
    category: "donation",
    status: "COMPLETED",
  },
  {
    id: "project_15",
    title: "Web App",
    description:
      "Web application to visualize prenatal images of unborn children. Built using Next.js for clean and performant UI.",
    companyName: "Tiny Treasure",
    tools: ["NEXT"],
    platform: [
      {
        platform: "WEB",
        link: "https://www.tinytreasure.baby",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["healthcare", "prenatal", "nextjs"],
    members: 1,
    category: "healthcare",
    status: "COMPLETED",
  },
  {
    id: "project_16",
    title: "Web App",
    description:
      "Developed a mall navigation system using Next.js to display indoor navigation, store listings, and promotions.",
    companyName: "Mapp",
    tools: ["NEXT"],
    category: "navigation",
    platform: [
      {
        platform: "WEB",
        link: "https://mapp-user.vercel.app/amb-mall",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["navigation", "retail", "mall"],
    members: 2,
    status: "ONGOING",
  },
  {
    id: "project_17",
    title: "Web App",
    description:
      "Built a WhatsApp-based task management chatbot interface using Next.js for productivity tracking and workflow management.",
    companyName: "Hello Aria",
    tools: ["NEXT"],
    category: "chatbot",
    platform: [
      {
        platform: "WEB",
        link: "https://www.helloaria.in/",
        icon: "/icons/web.svg",
      },
    ],
    tags: ["chatbot", "task manager", "productivity"],
    members: 2,
    status: "ONGOING",
  },
];

