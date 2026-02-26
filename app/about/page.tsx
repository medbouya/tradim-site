import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { dataProvider } from "@/lib/data";

export const metadata: Metadata = {
  title: "À propos - TRADIM.MR",
  description:
    "TRADIM est une entreprise spécialisée en produits et solutions solaires fiables en Mauritanie.",
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const page = await dataProvider.getPage("about");

  return (
    <>
      <PageHero
        title="Notre mission: fiabiliser l'énergie solaire locale."
        description={
          page?.content ??
          "TRADIM accompagne les organisations qui veulent réduire durablement leurs coûts énergétiques."
        }
      />
      <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6">
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            Nous combinons ingénierie, qualité produit et accompagnement terrain pour livrer des
            systèmes photovoltaïques performants dans la durée.
          </p>
          <p>
            Notre équipe intervient de l&apos;audit initial jusqu&apos;à la maintenance, avec une exigence
            forte sur la sécurité et la disponibilité.
          </p>
        </div>
      </section>
    </>
  );
}
