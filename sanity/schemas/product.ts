import { defineField, defineType } from "@sanity/types";

export const productSchema = defineType({
  name: "product",
  title: "Produit",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "category", title: "Catégorie", type: "string" }),
    defineField({
      name: "technicalSpecifications",
      title: "Spécifications techniques",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Paramètre", type: "string" }),
            defineField({ name: "value", title: "Valeur", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
    }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "warrantyYears", title: "Garantie (années)", type: "number", initialValue: 10 }),
    defineField({ name: "downloadablePDF", title: "PDF téléchargeable", type: "file" }),
    defineField({ name: "featured", title: "Mis en avant", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "name", subtitle: "tagline", media: "images.0" },
  },
});
