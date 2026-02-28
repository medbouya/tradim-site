import { defineField, defineType } from "@sanity/types";

export const projectSchema = defineType({
  name: "project",
  title: "Réalisation",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Localisation", type: "string" }),
    defineField({ name: "capacity", title: "Capacité (ex: 420 kWp)", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
  ],
  preview: {
    select: { title: "title", subtitle: "location", media: "images.0" },
  },
});
