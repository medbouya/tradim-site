import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { dataProvider } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await dataProvider.getProducts();
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/projects",
    "/contact",
    "/request-quote",
  ];

  const productRoutes = products.map((product) => `/products/${product.slug}`);
  const routes = [...staticRoutes, ...productRoutes];

  return routes.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
