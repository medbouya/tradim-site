import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { dataProvider } from "@/lib/data";

export const metadata: Metadata = {
  title: "Solutions - TRADIM.MR",
  description:
    "Solutions photovoltaïques pour résidentiel, commercial, industriel et sites isolés.",
  alternates: { canonical: "/solutions" },
};

const solutionCards = [
  {
    title: "Autoconsommation professionnelle",
    description:
      "Dimensionnement optimisé pour réduire la facture et sécuriser l'approvisionnement.",
  },
  {
    title: "Sites isolés",
    description:
      "Systèmes hybrides solaire + batterie adaptés aux contraintes opérationnelles.",
  },
  {
    title: "Infrastructures industrielles",
    description: "Architecture robuste avec supervision et plan de maintenance préventive.",
  },
];

export default async function SolutionsPage() {
  const page = await dataProvider.getPage("solutions");

  return (
    <>
      <PageHero
        title="Des solutions dimensionnées pour vos contraintes réelles."
        description={
          page?.content ??
          "Nous concevons des solutions photovoltaïques adaptées au profil de charge de chaque client."
        }
        ctaLabel="Parler à un expert"
        ctaHref="/contact"
      />
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-3">
        {solutionCards.map((item) => (
          <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-heading text-xl font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
