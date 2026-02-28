import { defineField, defineType } from "sanity";

export const settingsSchema = defineType({
  name: "settings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom du site", type: "string" }),
    defineField({ name: "legalName", title: "Raison sociale", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "hero",
      title: "Section Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", type: "string", title: "Eyebrow" }),
        defineField({ name: "title", type: "string", title: "Titre (\\n pour saut de ligne)" }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "ctaLabel", type: "string", title: "CTA principal" }),
        defineField({ name: "ctaHref", type: "string", title: "Lien CTA principal" }),
        defineField({ name: "secondaryCtaLabel", type: "string", title: "CTA secondaire" }),
        defineField({ name: "secondaryCtaHref", type: "string", title: "Lien CTA secondaire" }),
      ],
    }),
    defineField({
      name: "contact",
      title: "Coordonnées",
      type: "object",
      fields: [
        defineField({ name: "email", type: "string", title: "Email" }),
        defineField({ name: "phone", type: "string", title: "Téléphone" }),
        defineField({ name: "whatsapp", type: "string", title: "WhatsApp" }),
        defineField({ name: "address", type: "string", title: "Adresse" }),
      ],
    }),
    defineField({
      name: "social",
      title: "Réseaux sociaux",
      type: "object",
      fields: [
        defineField({ name: "linkedin", type: "url", title: "LinkedIn" }),
        defineField({ name: "facebook", type: "url", title: "Facebook" }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO par défaut",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string", title: "Meta title" }),
        defineField({ name: "description", type: "text", title: "Meta description" }),
      ],
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
