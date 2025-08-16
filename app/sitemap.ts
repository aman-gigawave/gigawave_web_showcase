import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const APP_DIR = path.join(process.cwd(), "app");
const BASE_URL = "https://gigawave.io";
const DEFAULT_CHANGE_FREQUENCY = "weekly";
const DEFAULT_PRIORITY = 0.8;

function getAllPages(dir: string, baseRoute = ""): string[] {
  let routes: string[] = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file.startsWith("_") || file === "api") continue;
      routes = routes.concat(getAllPages(fullPath, path.join(baseRoute, file)));
    } else if (file === "page.tsx") {
      let route = baseRoute.replace(/\\/g, "/");
      route = route.replace(/\/?\([^)]+\)/g, "");
      if (route === "") route = "/";
      else route = `/${route.replace(/^\/+/, "")}`;
      routes.push(route);
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const routes = getAllPages(APP_DIR);

  const customSettings: Record<
    string,
    {
      changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
      priority: number;
    }
  > = {
    "/": { changeFrequency: "daily", priority: 1 },
    "/tech-stack": { changeFrequency: "weekly", priority: 0.9 },
    "/flutter": { changeFrequency: "weekly", priority: 0.9 },
  };

  const sitemap: MetadataRoute.Sitemap = routes.map((route) => {
    const settings = customSettings[route] || {
      changeFrequency: DEFAULT_CHANGE_FREQUENCY,
      priority: DEFAULT_PRIORITY,
    };
    return {
      url: `${BASE_URL}${route === "/" ? "" : route}`,
      lastModified: currentDate,
      changeFrequency: settings.changeFrequency,
      priority: settings.priority,
    };
  });

  return sitemap;
}
