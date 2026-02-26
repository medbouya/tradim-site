import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { dataProvider } from "@/lib/data";
import { contactPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Contact - TRADIM.MR",
  description: "Contactez TRADIM pour un accompagnement technique et commercial.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const settings = await dataProvider.getGlobalSettings();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema()) }}
      />
      <PageHero
        title="Parlons de votre besoin énergétique"
        description="Notre équipe technique vous répond rapidement avec une approche orientée résultat."
      />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div className="space-y-4 text-sm text-muted">
          <p>
            <span className="font-semibold text-ink">Email:</span> {settings.contactInfo.email}
          </p>
          <p>
            <span className="font-semibold text-ink">Téléphone:</span> {settings.contactInfo.phone}
          </p>
          <p>
            <span className="font-semibold text-ink">Adresse:</span> {settings.contactInfo.address}
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
