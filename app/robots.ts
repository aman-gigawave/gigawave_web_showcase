import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    sitemap: "https://gigawave.io/sitemap.xml",
    host: "https://gigawave.io",
  };
}
