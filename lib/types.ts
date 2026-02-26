export type Page = {
  title: string;
  slug: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  technicalSpecifications: Record<string, string>;
  images: string[];
  warrantyYears: number;
  downloadablePDF?: string;
  featured?: boolean;
};

export type Project = {
  title: string;
  location: string;
  images: string[];
  description: string;
};

export type Testimonial = {
  clientName: string;
  content: string;
};

export type GlobalSettings = {
  logo: string;
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

export type ProductFilter = {
  category?: string;
  query?: string;
};
