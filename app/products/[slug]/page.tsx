import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { products as staticProducts, getProductBySlug as getStaticBySlug } from "@/lib/content/products";
import { getProductBySlug, getProductSlugs } from "@/lib/sanity/queries";
import { breadcrumbSchema, productSchema } from "@/lib/seo/schema";

export const revalidate = 3600;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const sanitySligs = await getProductSlugs();
  const slugs = sanitySligs.length > 0 ? sanitySligs : staticProducts.map((p) => p.slug);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = (await getProductBySlug(params.slug)) ?? getStaticBySlug(params.slug);
  if (!product) return { title: "Produit non trouvé - TRADIM.MR" };
  return {
    title: `${product.name} - TRADIM.MR`,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} - TRADIM.MR`,
      description: product.description,
      type: "article",
      url: `${siteConfig.siteUrl}/products/${product.slug}`,
      images: product.images.map((img) => ({ url: img })),
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = (await getProductBySlug(params.slug)) ?? getStaticBySlug(params.slug);
  if (!product) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: "Accueil", item: `${siteConfig.siteUrl}/` },
    { name: "Produits", item: `${siteConfig.siteUrl}/products` },
    { name: product.name, item: `${siteConfig.siteUrl}/products/${product.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema(product), breadcrumbs]) }} />

      {/* Dark header */}
      <section className="border-b border-white/5 bg-[#0d0d0d] py-20 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{product.category}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-3 text-base text-slate-400">{product.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/request-quote">Demander un devis</LinkButton>
            {product.downloadablePDF ? (
              <a href={product.downloadablePDF} className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Télécharger PDF
              </a>
            ) : null}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-ink">Description</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{product.description}</p>
            <p className="mt-4 text-sm text-ink">Garantie produit : <strong>{product.warrantyYears} ans</strong></p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold text-ink">Spécifications techniques</h2>
            <dl className="mt-4 divide-y divide-slate-100 rounded-sm border border-slate-200">
              {Object.entries(product.technicalSpecifications).map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 px-4 py-3">
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="text-sm font-semibold text-ink tabular-nums">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
