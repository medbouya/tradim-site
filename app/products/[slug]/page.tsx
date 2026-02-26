import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { dataProvider } from "@/lib/data";
import { breadcrumbSchema, productSchema } from "@/lib/seo/schema";

type ProductDetailProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const products = await dataProvider.getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
  const product = await dataProvider.getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Produit non trouvé - TRADIM.MR",
    };
  }

  const title = `${product.name} - TRADIM.MR`;
  const description = product.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteConfig.siteUrl}/products/${product.slug}`,
      images: product.images.map((image) => ({ url: image })),
    },
  };
}

export const revalidate = 300;

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const product = await dataProvider.getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const breadcrumbs = breadcrumbSchema([
    { name: "Accueil", item: `${siteConfig.siteUrl}/` },
    { name: "Produits", item: `${siteConfig.siteUrl}/products` },
    { name: product.name, item: `${siteConfig.siteUrl}/products/${product.slug}` },
  ]);

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productSchema(product), breadcrumbs]),
        }}
      />
      <div>
        <div className="relative h-80 overflow-hidden rounded-xl border border-slate-200">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <p className="text-sm uppercase tracking-wider text-accent">{product.category}</p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-ink">{product.name}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>
        <p className="mt-4 text-sm text-ink">
          Garantie produit: <strong>{product.warrantyYears} ans</strong>
        </p>

        <h2 className="mt-8 font-heading text-xl font-semibold text-ink">Spécifications</h2>
        <dl className="mt-3 space-y-2 rounded-xl border border-slate-200 bg-white p-4">
          {Object.entries(product.technicalSpecifications).map(([label, value]) => (
            <div key={label} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2 last:border-0">
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="text-sm font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="/request-quote">Demander un devis</LinkButton>
          {product.downloadablePDF ? (
            <a
              href={product.downloadablePDF}
              className="inline-flex items-center rounded-md border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:bg-slate-100"
            >
              Télécharger PDF
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
