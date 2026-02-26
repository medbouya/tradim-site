import type { Product } from "@/lib/types";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TRADIM.MR",
    url: "https://tradim.mr",
    logo: "https://tradim.mr/logo.png",
    sameAs: ["https://www.linkedin.com", "https://www.facebook.com"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+22245123456",
      contactType: "customer service",
      areaServed: "MR",
      availableLanguage: ["fr"],
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    warranty: `${product.warrantyYears} years`,
    image: product.images,
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact TRADIM",
    url: "https://tradim.mr/contact",
  };
}
