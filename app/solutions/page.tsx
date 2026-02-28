import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Solutions - TRADIM.MR",
  description: "Systèmes de stockage BYD pour résidentiel, commercial, industriel et sites isolés en Mauritanie.",
  alternates: { canonical: "/solutions" },
};

const solutionCards = [
  { title: "Résidentiel & PME", description: "Autonomie nocturne et protection contre les coupures réseau. Le Power-Box SL 6K offre une capacité idéale pour les foyers et petites entreprises." },
  { title: "Commercial & tertiaire", description: "Réduction de la pointe tarifaire et continuité de service. Déploiement rapide en toiture ou au sol." },
  { title: "Industriel & critique", description: "Architecture redondante avec supervision en temps réel et plan de maintenance préventive. Le Power-Box SL 10K pour les sites à forte criticité." },
  { title: "Sites isolés", description: "Indépendance énergétique complète. Systèmes hybrides solaire + stockage adaptés aux contraintes opérationnelles hors réseau." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Dimensionné pour vos contraintes réelles."
        description="Chaque installation est analysée selon le profil de charge, les conditions climatiques et les exigences de continuité de service."
        ctaLabel="Parler à un expert"
        ctaHref="/contact"
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          {solutionCards.map((item) => (
            <article key={item.title} className="rounded-sm border border-slate-100 p-8">
              <h2 className="font-heading text-xl font-bold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-white/5 bg-[#0d0d0d] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-white">Notre approche</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">Chaque projet commence par un audit de consommation détaillé. Nous dimensionnons la solution BYD adaptée, gérons l’installation complète et assurons le suivi post-déploiement.</p>
          <LinkButton href="/request-quote" className="mt-8">Demander un devis</LinkButton>
        </div>
      </section>
    </>
  );
}
