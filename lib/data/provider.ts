import type {
  Category,
  GlobalSettings,
  Page,
  Product,
  ProductFilter,
  Project,
  Testimonial,
} from "@/lib/types";

export interface DataProvider {
  getPage(slug: string): Promise<Page | null>;
  getProducts(params?: ProductFilter): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProjects(): Promise<Project[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getGlobalSettings(): Promise<GlobalSettings>;
  getCategories(): Promise<Category[]>;
}
