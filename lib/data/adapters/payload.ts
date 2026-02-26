import { runtimeConfig } from "@/lib/config";
import type { DataProvider } from "@/lib/data/provider";
import type {
  Category,
  GlobalSettings,
  Page,
  Product,
  ProductFilter,
  Project,
  Testimonial,
} from "@/lib/types";

type PayloadResult<T> = {
  docs: T[];
};

async function payloadFetch<T>(path: string): Promise<T> {
  if (!runtimeConfig.payloadApiUrl) {
    throw new Error("PAYLOAD_API_URL is missing.");
  }

  const response = await fetch(`${runtimeConfig.payloadApiUrl}${path}`, {
    headers: runtimeConfig.payloadApiToken
      ? {
          Authorization: `Bearer ${runtimeConfig.payloadApiToken}`,
        }
      : undefined,
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(`Payload request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}

export class PayloadDataProvider implements DataProvider {
  async getPage(slug: string) {
    const data = await payloadFetch<PayloadResult<Page>>(
      `/api/pages?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    );

    return data.docs[0] ?? null;
  }

  async getProducts(params?: ProductFilter) {
    const search = new URLSearchParams();
    if (params?.category) {
      search.append("where[category][equals]", params.category);
    }
    if (params?.query) {
      search.append("where[name][like]", params.query);
    }

    const query = search.toString();
    const data = await payloadFetch<PayloadResult<Product>>(
      `/api/products${query ? `?${query}` : ""}`,
    );
    return data.docs;
  }

  async getProductBySlug(slug: string) {
    const data = await payloadFetch<PayloadResult<Product>>(
      `/api/products?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    );

    return data.docs[0] ?? null;
  }

  async getProjects() {
    const data = await payloadFetch<PayloadResult<Project>>("/api/projects");
    return data.docs;
  }

  async getTestimonials() {
    const data = await payloadFetch<PayloadResult<Testimonial>>(
      "/api/testimonials",
    );
    return data.docs;
  }

  async getGlobalSettings() {
    return payloadFetch<GlobalSettings>("/api/globals/settings");
  }

  async getCategories() {
    const data = await payloadFetch<PayloadResult<Category>>("/api/categories");
    return data.docs;
  }
}
