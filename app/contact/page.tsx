import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { contactPageSchema } from "@/lib/seo/schema";
import { settings } from "@/lib/content/settings";

export const metadata: Metadata = {
  title: "Contact - TRADIM.MR",
  description: "Contactez TRADIM pour un accompagnement technique et commercial sur vos projets de stockage BYD.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema()) }} />
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre besoin énergétique"
        description="Notre équipe technique vous répond rapidement avec une approche orientée résultat."
      />
      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">Email</p>
              <a href={`mailto:${settings.contact.email}`} className="mt-1 block text-sm text-ink hover:text-accent">{settings.contact.email}</a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">Téléphone</p>
              <a href={`tel:${settings.contact.phone.replace(/\s/g, "")}`} className="mt-1 block text-sm text-ink hover:text-accent">{settings.contact.phone}</a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">Adresse</p>
              <p className="mt-1 text-sm text-ink">{settings.contact.address}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
