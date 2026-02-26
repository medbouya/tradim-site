import type { Metadata } from "next";
import { ProductCard } from "@/components/sections/product-card";
import { PageHero } from "@/components/sections/page-hero";
import { dataProvider } from "@/lib/data";

export const metadata: Metadata = {
  title: "Produits - TRADIM.MR",
  description: "Catalogue de panneaux, onduleurs et solutions de stockage TRADIM.",
  alternates: { canonical: "/products" },
};

export const revalidate = 300;

type ProductsPageProps = {
  searchParams?: {
    category?: string;
    q?: string;
  };
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const category = searchParams?.category;
  const query = searchParams?.q;
  const [products, categories] = await Promise.all([
    dataProvider.getProducts({ category, query }),
    dataProvider.getCategories(),
  ]);

  return (
    <>
      <PageHero
        title="Catalogue Produits"
        description="Sélectionnez la meilleure combinaison de produits pour votre performance énergétique."
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <form className="mb-8 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-3">
          <label className="text-sm">
            <span className="mb-1 block font-medium text-ink">Catégorie</span>
            <select name="category" defaultValue={category ?? ""} className="w-full rounded-md border border-slate-300 px-3 py-2">
              <option value="">Toutes</option>
              {categories.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm md:col-span-2">
            <span className="mb-1 block font-medium text-ink">Recherche</span>
            <input
              type="text"
              name="q"
              defaultValue={query ?? ""}
              placeholder="Ex: onduleur hybride"
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </label>
          <div className="md:col-span-3">
            <button
              type="submit"
              className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              Filtrer
            </button>
          </div>
        </form>

        {products.length === 0 ? (
          <p className="text-sm text-muted">Aucun produit ne correspond à vos critères.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
