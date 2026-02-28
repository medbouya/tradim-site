import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "À propos - TRADIM.MR",
  description: "TRADIM est le distributeur officiel BYD Energy Storage en Mauritanie. Solutions de stockage fiables pour entreprises et industries.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Qualité prouvée", body: "Nous distribuons exclusivement des systèmes BYD certifiés, réputés pour leur fiabilité thermique et électrique dans des conditions extrêmes." },
  { title: "Expertise locale", body: "Notre équipe intervient de l’audit initial jusqu’à la maintenance, avec une exigence forte sur la sécurité et la disponibilité." },
  { title: "Engagement long terme", body: "Garantie 10 ans sur les batteries, support technique réactif et maintenance préventive pour une autonomie durable." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Fiabiliser l’énergie stockage en Mauritanie."
        description="TRADIM accompagne les organisations qui veulent réduire durablement leurs coûts énergétiques grâce aux systèmes BYD."
      />
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-muted">
            <p>Fondée pour répondre à la demande croissante en solutions énergétiques fiables, TRADIM s’est positionnée comme le partenaire de référence BYD Energy Storage en Mauritanie.</p>
            <p>Nous combinons ingénierie, qualité produit et accompagnement terrain pour livrer des systèmes de stockage LiFePO4 performants dans la durée, adaptés au climat et aux exigences locales.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-sm border border-slate-100 p-6">
                <h2 className="font-heading text-base font-bold text-ink">{v.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
