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
import { lexicalToHtml } from "@/lib/utils/lexical-to-html";

type PayloadMedia = {
  id: string | number;
  url: string;
  filename?: string;
};

type PayloadProduct = {
  id: string;
  name: string;
  slug: string;
  category: string | { id: string; slug: string; name: string };
  images: Array<PayloadMedia>;
  description: string;
  technicalSpecifications?: Record<string, string>;
  warrantyYears?: number;
  downloadablePDF?: PayloadMedia | null;
  featured?: boolean;
};

type PayloadProject = {
  id: string;
  title: string;
  slug: string;
  location: string;
  images: Array<PayloadMedia>;
  description: string;
  completionDate?: string;
};

type PayloadPage = {
  id: string;
  title: string;
  slug: string;
  content: unknown; // Lexical JSON
  seoTitle?: string;
  seoDescription?: string;
};

type PayloadGlobalSettings = {
  id: number;
  logo: PayloadMedia | null;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  socialLinks: {
    linkedin?: string;
    facebook?: string;
  };
  defaultSEO: {
    title: string;
    description: string;
  };
};

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

function transformProduct(data: PayloadProduct): Product {
  return {
    name: data.name,
    slug: data.slug,
    category:
      typeof data.category === "string" ? data.category : data.category.slug,
    description: data.description,
    technicalSpecifications: data.technicalSpecifications || {},
    images: data.images.map((img) => img.url),
    warrantyYears: data.warrantyYears || 0,
    downloadablePDF:
      data.downloadablePDF && typeof data.downloadablePDF === "object"
        ? data.downloadablePDF.url
        : undefined,
    featured: data.featured,
  };
}

function transformProject(data: PayloadProject): Project {
  return {
    title: data.title,
    location: data.location,
    description: data.description,
    images: data.images.map((img) => img.url),
  };
}

function transformPage(data: PayloadPage): Page {
  return {
    title: data.title,
    slug: data.slug,
    content: lexicalToHtml(data.content),
    seoTitle: data.seoTitle ?? "",
    seoDescription: data.seoDescription ?? "",
  };
}

function transformGlobalSettings(data: PayloadGlobalSettings): GlobalSettings {
  return {
    logo: data.logo?.url ?? "",
    contactInfo: data.contactInfo,
    socialLinks: data.socialLinks,
    defaultSEO: data.defaultSEO,
  };
}

export class PayloadDataProvider implements DataProvider {
  async getPage(slug: string) {
    const data = await payloadFetch<PayloadResult<PayloadPage>>(
      `/api/pages?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    );

    return data.docs[0] ? transformPage(data.docs[0]) : null;
  }

  async getProducts(params?: ProductFilter) {
    const search = new URLSearchParams();
    if (params?.category) {
      // Filter by related category slug, not raw ID
      search.append("where[category.slug][equals]", params.category);
    }
    if (params?.query) {
      search.append("where[name][like]", params.query);
    }

    const query = search.toString();
    const data = await payloadFetch<PayloadResult<PayloadProduct>>(
      `/api/products${query ? `?${query}` : ""}`,
    );
    return data.docs.map(transformProduct);
  }

  async getProductBySlug(slug: string) {
    const data = await payloadFetch<PayloadResult<PayloadProduct>>(
      `/api/products?where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    );

    return data.docs[0] ? transformProduct(data.docs[0]) : null;
  }

  async getProjects() {
    const data = await payloadFetch<PayloadResult<PayloadProject>>(
      "/api/projects",
    );
    return data.docs.map(transformProject);
  }

  async getTestimonials() {
    const data = await payloadFetch<PayloadResult<Testimonial>>(
      "/api/testimonials",
    );
    return data.docs;
  }

  async getGlobalSettings() {
    const data = await payloadFetch<PayloadGlobalSettings>(
      "/api/globals/settings",
    );
    return transformGlobalSettings(data);
  }

  async getCategories() {
    const data = await payloadFetch<PayloadResult<Category>>("/api/categories");
    return data.docs;
  }
}
