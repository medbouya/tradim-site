import Link from "next/link";
import type { Product } from "@/lib/content/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const topSpecs = Object.entries(product.technicalSpecifications).slice(0, 4);

  return (
    <article className="flex flex-col rounded-sm border border-white/10 bg-[#111] transition-colors hover:border-white/20">
      <div className="border-b border-white/5 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
          {product.category}
        </p>
        <h3 className="mt-2 font-heading text-xl font-bold text-white">{product.name}</h3>
        <p className="mt-1.5 text-sm text-slate-400">{product.tagline}</p>
      </div>

      <div className="flex-1 p-6">
        <dl className="space-y-2.5">
          {topSpecs.map(([label, value]) => (
            <div key={label} className="flex items-baseline justify-between gap-4">
              <dt className="text-xs text-slate-500">{label}</dt>
              <dd className="text-xs font-semibold text-white tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-t border-white/5 p-6">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent"
        >
          Voir la fiche produit
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
