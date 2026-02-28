import { LinkButton } from "@/components/ui/button";
import { ProductCard } from "@/components/sections/product-card";
import { ProjectCard } from "@/components/sections/project-card";
import { TestimonialList } from "@/components/sections/testimonial-list";
import { settings as staticSettings } from "@/lib/content/settings";
import { products as staticProducts } from "@/lib/content/products";
import { projects as staticProjects } from "@/lib/content/projects";
import { testimonials as staticTestimonials } from "@/lib/content/testimonials";
import { getProducts, getProjects, getTestimonials, getSettings } from "@/lib/sanity/queries";
import { ShieldCheckIcon, WrenchScrewdriverIcon, BoltIcon } from "@heroicons/react/24/solid";

export const revalidate = 3600;

const trustItems = [
  { icon: WrenchScrewdriverIcon, title: "Expertise terrain", description: "Déploiements maîtrisés dans des environnements industriels exigeants de Mauritanie." },
  { icon: ShieldCheckIcon, title: "Garantie 10 ans", description: "Batteries BYD LiFePO4 — certifiées pour 6 000+ cycles dans des conditions extrêmes." },
  { icon: BoltIcon, title: "Support technique", description: "Assistance avant-vente, mise en service et maintenance proactive sur site." },
];

const solutionItems = [
  { title: "Résidentiel & PME", body: "Autonomie nocturne et protection contre les coupures réseau." },
  { title: "Commercial", body: "Réduction de la pointe tarifaire et continuité de service." },
  { title: "Industriel", body: "Architecture redondante pour sites à forte criticité." },
  { title: "Sites isolés", body: "Indépendance énergétique complète hors réseau." },
];

export default async function HomePage() {
  const [sanityProducts, sanityProjects, sanityTestimonials, sanitySettings] = await Promise.all([
    getProducts(),
    getProjects(),
    getTestimonials(),
    getSettings(),
  ]);

  const settings = sanitySettings ?? staticSettings;
  const products = sanityProducts.length > 0 ? sanityProducts : staticProducts;
  const projects = sanityProjects.length > 0 ? sanityProjects : staticProjects;
  const testimonials = sanityTestimonials.length > 0 ? sanityTestimonials : staticTestimonials;

  const featuredProducts = products.filter((p) => p.featured);
  const heroLines = settings.hero.title.split("\n");

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d0d0d] py-32 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{settings.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-heading text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {heroLines[0]}<br />{heroLines[1]}
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg">{settings.hero.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <LinkButton href={settings.hero.ctaHref}>{settings.hero.ctaLabel}</LinkButton>
            <LinkButton href={settings.hero.secondaryCtaHref} intent="secondary">{settings.hero.secondaryCtaLabel}</LinkButton>
          </div>
        </div>
      </section>

      {/* BYD strip */}
      <section className="border-y border-white/5 bg-[#0d0d0d]">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">BYD</span>
          </div>
          <p className="text-sm text-slate-400">Distributeur officiel{" "}<span className="font-semibold text-white">BYD Energy Storage</span> en Mauritanie</p>
          <span className="ml-auto hidden text-xs text-slate-600 sm:block">Power-Box SL 6K · Power-Box SL 10K</span>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {trustItems.map((item) => (
              <article key={item.title} className="flex gap-4 rounded-sm border border-slate-100 p-6">
                <span className="mt-0.5 shrink-0 rounded-sm bg-red-50 p-2.5 text-accent"><item.icon className="h-5 w-5" /></span>
                <div>
                  <h2 className="font-heading text-base font-bold text-ink">{item.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Catalogue</p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">Systèmes de stockage BYD</h2>
            </div>
            <LinkButton href="/products" intent="secondary" className="hidden sm:inline-flex">Voir le catalogue</LinkButton>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProducts.map((product) => (<ProductCard key={product.slug} product={product} />))}
          </div>
          <div className="mt-10 sm:hidden">
            <LinkButton href="/products" intent="secondary" className="w-full justify-center">Voir le catalogue</LinkButton>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Solutions</p>
              <h2 className="mt-2 max-w-md font-heading text-3xl font-bold text-ink sm:text-4xl">Stockage pour chaque besoin énergétique</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">Des installations résidentielles aux sites industriels critiques, les systèmes BYD Power-Box sont dimensionnés pour garantir une autonomie maximale dans les conditions climatiques extrêmes de la Mauritanie.</p>
              <LinkButton href="/solutions" intent="outline" className="mt-8">Découvrir nos solutions</LinkButton>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {solutionItems.map((s) => (
                <div key={s.title} className="rounded-sm border border-slate-100 p-5">
                  <h3 className="font-heading text-sm font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Réalisations</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">Projets déployés</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (<ProjectCard key={project.title} project={project} />))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Témoignages</p>
          <h2 className="mt-2 mb-10 font-heading text-3xl font-bold text-white sm:text-4xl">Ce que disent nos clients</h2>
          <TestimonialList testimonials={testimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#0d0d0d] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="rounded-sm border border-white/10 p-10 md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Démarrer un projet</p>
            <h2 className="mt-3 max-w-lg font-heading text-3xl font-bold text-white sm:text-4xl">Prêt à sécuriser votre alimentation énergétique ?</h2>
            <p className="mt-4 max-w-md text-sm text-slate-400">Nos experts analysent votre profil de consommation et vous proposent le système BYD adapté — sans engagement.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/request-quote">Demander un devis gratuit</LinkButton>
              <LinkButton href="/contact" intent="secondary">Parler à un expert</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
