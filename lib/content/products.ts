export type Product = {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  technicalSpecifications: Record<string, string>;
  images: string[];
  warrantyYears: number;
  downloadablePDF?: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    name: "Power-Box SL 6K",
    slug: "power-box-sl-6k",
    tagline: "Stockage résidentiel et PME — 6 kWh.",
    description:
      "Le Power-Box SL 6K est un système de stockage d'énergie LiFePO4 compact, conçu pour les installations résidentielles et les petites entreprises. Robuste, silencieux et optimisé pour les environnements à fortes températures, il assure une autonomie fiable pour réduire la dépendance au réseau.",
    category: "Stockage BYD",
    technicalSpecifications: {
      "Capacité nominale": "6 kWh",
      Technologie: "LiFePO4",
      "Profondeur de décharge": "90 %",
      "Tension nominale": "48 V",
      "Puissance de crête": "6 kW",
      "Cycles de vie": "6 000+",
      "Plage de température": "−10 °C à +50 °C",
      "Indice de protection": "IP55",
    },
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    ],
    warrantyYears: 10,
    downloadablePDF: "",
    featured: true,
  },
  {
    name: "Power-Box SL 10K",
    slug: "power-box-sl-10k",
    tagline: "Stockage industriel et commercial — 10 kWh.",
    description:
      "Le Power-Box SL 10K offre une capacité de stockage étendue pour les entreprises, bâtiments commerciaux et sites industriels. Sa technologie BYD LiFePO4 garantit une longue durée de vie et une sécurité maximale, même dans les conditions climatiques extrêmes de la Mauritanie.",
    category: "Stockage BYD",
    technicalSpecifications: {
      "Capacité nominale": "10 kWh",
      Technologie: "LiFePO4",
      "Profondeur de décharge": "90 %",
      "Tension nominale": "48 V",
      "Puissance de crête": "10 kW",
      "Cycles de vie": "6 000+",
      "Plage de température": "−10 °C à +50 °C",
      "Indice de protection": "IP55",
    },
    images: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    ],
    warrantyYears: 10,
    downloadablePDF: "",
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
