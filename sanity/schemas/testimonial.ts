import { defineField, defineType } from "@sanity/types";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Témoignage",
  type: "document",
  fields: [
    defineField({ name: "clientName", title: "Nom du client", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Poste / Entreprise", type: "string" }),
    defineField({ name: "content", title: "Témoignage", type: "text", rows: 4 }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "role" },
  },
});
