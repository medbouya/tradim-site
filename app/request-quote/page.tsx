import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { QuoteForm } from "@/components/sections/quote-form";

export const metadata: Metadata = {
  title: "Demande de devis - TRADIM.MR",
  description:
    "Soumettez votre besoin et recevez une proposition technique et commerciale adaptée.",
  alternates: { canonical: "/request-quote" },
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        title="Demander un devis"
        description="Partagez votre contexte projet pour recevoir une préconisation fiable."
      />
      <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
        <QuoteForm />
      </section>
    </>
  );
}
