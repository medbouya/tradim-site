import { sanityClient } from "./client";
import { urlFor } from "./image";
import type { SanityImageSource } from "./image";
import type { Product } from "@/lib/content/products";
import type { Project } from "@/lib/content/projects";
import type { Testimonial } from "@/lib/content/testimonials";

// ─── Products ───────────────────────────────────────────────────────────────

const PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt asc) {
  name,
  "slug": slug.current,
  tagline,
  description,
  category,
  technicalSpecifications[] { label, value },
  images[],
  warrantyYears,
  "downloadablePDF": downloadablePDF.asset->url,
  featured
}`;

type RawProduct = Omit<Product, "images" | "technicalSpecifications" | "slug"> & {
  slug: string;
  images: SanityImageSource[] | null;
  technicalSpecifications: Array<{ label: string; value: string }> | null;
};

function mapProduct(raw: RawProduct): Product {
  const specs: Record<string, string> = {};
  (raw.technicalSpecifications ?? []).forEach(({ label, value }) => {
    specs[label] = value;
  });

  return {
    ...raw,
    slug: raw.slug,
    technicalSpecifications: specs,
    images: (raw.images ?? []).map((img) => urlFor(img).width(1200).url()),
    downloadablePDF: raw.downloadablePDF ?? "",
  };
}

export async function getProducts(): Promise<Product[]> {
  const raw = await sanityClient.fetch<RawProduct[]>(PRODUCTS_QUERY);
  return raw.map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const raw = await sanityClient.fetch<RawProduct | null>(
    `*[_type == "product" && slug.current == $slug][0] {
      name,
      "slug": slug.current,
      tagline,
      description,
      category,
      technicalSpecifications[] { label, value },
      images[],
      warrantyYears,
      "downloadablePDF": downloadablePDF.asset->url,
      featured
    }`,
    { slug },
  );
  if (!raw) return undefined;
  return mapProduct(raw);
}

export async function getProductSlugs(): Promise<string[]> {
  return sanityClient.fetch<string[]>(`*[_type == "product"].slug.current`);
}

// ─── Projects ────────────────────────────────────────────────────────────────

const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt asc) {
  title,
  location,
  capacity,
  description,
  images[]
}`;

type RawProject = Omit<Project, "images"> & {
  images: SanityImageSource[] | null;
};

function mapProject(raw: RawProject): Project {
  return {
    ...raw,
    images: (raw.images ?? []).map((img) => urlFor(img).width(1200).url()),
  };
}

export async function getProjects(): Promise<Project[]> {
  const raw = await sanityClient.fetch<RawProject[]>(PROJECTS_QUERY);
  return raw.map(mapProject);
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(_createdAt asc) {
  clientName,
  role,
  content
}`;

export async function getTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch<Testimonial[]>(TESTIMONIALS_QUERY);
}

// ─── Settings ─────────────────────────────────────────────────────────────────

export type SanitySettings = {
  name: string;
  legalName: string;
  tagline: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
  };
  social: {
    linkedin: string;
    facebook: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

const SETTINGS_QUERY = `*[_type == "settings" && _id == "settings"][0]`;

export async function getSettings(): Promise<SanitySettings | null> {
  return sanityClient.fetch<SanitySettings | null>(SETTINGS_QUERY);
}
