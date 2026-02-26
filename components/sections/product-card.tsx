import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card">
      <div className="relative h-52">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {product.category}
        </p>
        <h3 className="mt-2 font-heading text-xl font-semibold text-ink">{product.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm text-muted">{product.description}</p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-5 inline-flex text-sm font-semibold text-ink hover:text-accent"
        >
          Voir la fiche produit
        </Link>
      </div>
    </article>
  );
}
