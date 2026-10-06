import type { MetadataRoute } from "next";
import { siteMeta } from "./data/site";
import { researchAreas } from "./research/data";

/** Static sitemap. Add new routes here as they're created. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMeta.url;
  const lastModified = new Date(siteMeta.lastUpdated);

  const staticRoutes = [
    "",
    "/about",
    "/research",
    "/research/smart-pred",
    "/publications",
    "/conferences",
    "/software",
    "/teaching",
    "/engagement",
    "/contact",
  ];

  const areaRoutes = researchAreas.map((a) => `/research/${a.slug}`);

  return [...staticRoutes, ...areaRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified,
  }));
}
