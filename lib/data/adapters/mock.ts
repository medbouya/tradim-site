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

const pages: Page[] = [
  {
    title: "À propos",
    slug: "about",
    content:
      "TRADIM accompagne les entreprises et foyers vers une énergie solaire fiable, rentable et durable.",
    seoTitle: "À propos de TRADIM",
    seoDescription:
      "Découvrez l'expertise de TRADIM en solutions photovoltaïques pour le marché mauritanien.",
  },
  {
    title: "Solutions",
    slug: "solutions",
    content:
      "Nos solutions couvrent l'autoconsommation, les installations industrielles et les sites isolés.",
    seoTitle: "Solutions solaires TRADIM",
    seoDescription:
      "Des solutions solaires adaptées aux besoins résidentiels, commerciaux et industriels.",
  },
  {
    title: "Contact",
    slug: "contact",
    content:
      "Parlez à notre équipe technique pour dimensionner votre prochaine installation solaire.",
    seoTitle: "Contacter TRADIM",
    seoDescription:
      "Contactez TRADIM pour un accompagnement technique et commercial rapide.",
  },
];

const categories: Category[] = [
  { name: "Panneaux", slug: "panneaux" },
  { name: "Onduleurs", slug: "onduleurs" },
  { name: "Stockage", slug: "stockage" },
];

const products: Product[] = [
  {
    name: "Panneau Monocristallin 550W",
    slug: "panneau-monocristallin-550w",
    category: "panneaux",
    description:
      "Module haute performance pour centrales et toitures industrielles, optimisé pour les zones à forte chaleur.",
    technicalSpecifications: {
      "Puissance nominale": "550W",
      Rendement: "21.3%",
      "Tolérance": "0/+5W",
      Garantie: "6 ans produit / 25 ans performance",
    },
    images: [
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    ],
    warrantyYears: 6,
    downloadablePDF: "/documents/panneau-550w.pdf",
    featured: true,
  },
  {
    name: "Onduleur Hybride 10kW",
    slug: "onduleur-hybride-10kw",
    category: "onduleurs",
    description:
      "Onduleur triphasé avec supervision intelligente et mode secours pour continuité énergétique.",
    technicalSpecifications: {
      "Puissance AC": "10kW",
      "Entrées MPPT": "2",
      "Indice IP": "IP65",
      Connectivité: "Wi-Fi / RS485",
    },
    images: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    ],
    warrantyYears: 6,
    downloadablePDF: "/documents/onduleur-10kw.pdf",
    featured: true,
  },
  {
    name: "Batterie LiFePO4 15kWh",
    slug: "batterie-lifepo4-15kwh",
    category: "stockage",
    description:
      "Système de stockage durable pour applications résidentielles et PME avec forte cyclabilité.",
    technicalSpecifications: {
      "Capacité utile": "15kWh",
      "Cycles": "6000+",
      "Profondeur de décharge": "95%",
      Montage: "Rack / Sol",
    },
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    ],
    warrantyYears: 6,
    downloadablePDF: "/documents/batterie-15kwh.pdf",
    featured: false,
  },
];

const projects: Project[] = [
  {
    title: "Usine Agro-industrielle - 420 kWp",
    location: "Nouakchott",
    description:
      "Réduction de 39% des coûts énergétiques annuels grâce à une centrale hybride solaire + stockage.",
    images: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Centre logistique - 180 kWp",
    location: "Nouadhibou",
    description:
      "Installation en toiture avec supervision en temps réel et maintenance préventive.",
    images: [
      "https://images.unsplash.com/photo-1509391618207-f2f6fd92597c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    clientName: "Directeur Technique, Groupe SOTRAM",
    content:
      "TRADIM a livré une solution clé en main solide, avec un support technique réactif.",
  },
  {
    clientName: "Responsable Exploitation, MINEX",
    content:
      "L'équipe a sécurisé la mise en service et amélioré notre stabilité énergétique dès le premier mois.",
  },
];

const globalSettings: GlobalSettings = {
  logo: "TRADIM.MR",
  contactInfo: {
    email: "contact@tradim.mr",
    phone: "+222 45 12 34 56",
    address: "Tevragh-Zeina, Nouakchott, Mauritanie",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
  },
  defaultSEO: {
    title: "TRADIM.MR - Solutions Solaires Fiables",
    description:
      "TRADIM fournit des produits et solutions solaires performants pour entreprises et particuliers.",
  },
};

function filterProducts(items: Product[], params?: ProductFilter) {
  if (!params) {
    return items;
  }

  return items.filter((item) => {
    const byCategory = params.category ? item.category === params.category : true;
    const byQuery = params.query
      ? item.name.toLowerCase().includes(params.query.toLowerCase())
      : true;

    return byCategory && byQuery;
  });
}

export class MockDataProvider implements DataProvider {
  async getPage(slug: string) {
    return pages.find((item) => item.slug === slug) ?? null;
  }

  async getProducts(params?: ProductFilter) {
    return filterProducts(products, params);
  }

  async getProductBySlug(slug: string) {
    return products.find((item) => item.slug === slug) ?? null;
  }

  async getProjects() {
    return projects;
  }

  async getTestimonials() {
    return testimonials;
  }

  async getGlobalSettings() {
    return globalSettings;
  }

  async getCategories() {
    return categories;
  }
}
