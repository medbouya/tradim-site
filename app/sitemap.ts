import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { products } from "@/lib/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/projects",
    "/contact",
    "/request-quote",
  ];

  const productRoutes = products.map((p) => `/products/${p.slug}`);
  const routes = [...staticRoutes, ...productRoutes];

  return routes.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
