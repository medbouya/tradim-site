import type { Metadata } from "next";
import { ProductCard } from "@/components/sections/product-card";
import { PageHero } from "@/components/sections/page-hero";
import { products } from "@/lib/content/products";

export const metadata: Metadata = {
  title: "Produits - TRADIM.MR",
  description: "Systèmes de stockage BYD Power-Box SL 6K et SL 10K. Distributeur officiel en Mauritanie.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Systèmes de stockage BYD"
        description="Deux solutions LiFePO4 pour couvrir tous les besoins — résidentiel, commercial et industriel."
      />
      <section className="bg-[#0d0d0d] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
