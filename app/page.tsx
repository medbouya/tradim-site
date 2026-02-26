import Image from "next/image";
import { ProjectCard } from "@/components/sections/project-card";
import { ProductCard } from "@/components/sections/product-card";
import { TestimonialList } from "@/components/sections/testimonial-list";
import { LinkButton } from "@/components/ui/button";
import { dataProvider } from "@/lib/data";

export const revalidate = 300;

export default async function HomePage() {
  const [products, projects, testimonials] = await Promise.all([
    dataProvider.getProducts(),
    dataProvider.getProjects(),
    dataProvider.getTestimonials(),
  ]);

  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-900 py-24 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80"
            alt="Champ solaire"
            fill
            className="object-cover opacity-35"
            priority
          />
        </div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-200">
            Ingénierie solaire industrielle
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-6xl">
            Énergie maîtrisée, performance durable.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-100">
            TRADIM conçoit et déploie des solutions photovoltaïques robustes pour les
            entreprises et les infrastructures critiques.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/products">Explorer les produits</LinkButton>
            <LinkButton href="/request-quote" intent="secondary">
              Obtenir un devis
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-heading text-xl font-semibold text-ink">Crédibilité terrain</h2>
            <p className="mt-2 text-sm text-muted">
              Déploiements maîtrisés dans des environnements industriels exigeants.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-heading text-xl font-semibold text-ink">Garantie 6 ans</h2>
            <p className="mt-2 text-sm text-muted">
              Produits sélectionnés pour leur fiabilité thermique et électrique.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-heading text-xl font-semibold text-ink">Support technique</h2>
            <p className="mt-2 text-sm text-muted">
              Assistance avant-vente, mise en service et maintenance proactive.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-heading text-3xl font-semibold text-ink">Produits mis en avant</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-6 font-heading text-3xl font-semibold text-ink">Réalisations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="mb-6 font-heading text-3xl font-semibold text-ink">Témoignages</h2>
        <TestimonialList testimonials={testimonials} />
      </section>
    </>
  );
}
