import Image from "next/image";
import { ProjectCard } from "@/components/sections/project-card";
import { ProductCard } from "@/components/sections/product-card";
import { TestimonialList } from "@/components/sections/testimonial-list";
import { LinkButton } from "@/components/ui/button";
import { dataProvider } from "@/lib/data";
import {
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export const revalidate = 300;

const trustItems = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Crédibilité terrain",
    description: "Déploiements maîtrisés dans des environnements industriels exigeants.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Garantie 6 ans",
    description: "Produits sélectionnés pour leur fiabilité thermique et électrique.",
  },
  {
    icon: PhoneIcon,
    title: "Support technique",
    description: "Assistance avant-vente, mise en service et maintenance proactive.",
  },
];

export default async function HomePage() {
  const [products, projects, testimonials] = await Promise.all([
    dataProvider.getProducts(),
    dataProvider.getProjects(),
    dataProvider.getTestimonials(),
  ]);

  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
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

      {/* BYD partner strip */}
      <section className="border-b border-slate-200 bg-slate-900 py-4">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 px-4 sm:px-6">
          <span className="rounded bg-accent px-2 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
            BYD
          </span>
          <p className="text-sm text-slate-300">
            Distributeur officiel{" "}
            <span className="font-semibold text-white">BYD Energy Storage</span> en Mauritanie
          </p>
          <span className="hidden text-xs text-slate-500 sm:ml-auto sm:block">
            Battery-Box HVS · Battery-Box LVS · BE5
          </span>
        </div>
      </section>

      {/* Trust badges */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6"
            >
              <span className="mt-0.5 shrink-0 rounded-lg bg-red-50 p-2.5 text-accent">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-heading text-lg font-semibold text-ink">{item.title}</h2>
                <p className="mt-1.5 text-sm text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-heading text-3xl font-semibold text-ink">Produits mis en avant</h2>
            <LinkButton href="/products" intent="secondary" className="hidden sm:inline-flex">
              Voir tout le catalogue
            </LinkButton>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-6 font-heading text-3xl font-semibold text-ink">Réalisations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="mb-6 font-heading text-3xl font-semibold text-ink">Témoignages</h2>
          <TestimonialList testimonials={testimonials} />
        </div>
      </section>
    </>
  );
}
