import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { productSchema, projectSchema, testimonialSchema, settingsSchema } from "./schemas";

export default defineConfig({
  name: "tradim-studio",
  title: "TRADIM Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("Paramètres du site")
              .id("settings")
              .child(S.document().schemaType("settings").documentId("settings")),
            S.divider(),
            S.documentTypeListItem("product").title("Produits"),
            S.documentTypeListItem("project").title("Réalisations"),
            S.documentTypeListItem("testimonial").title("Témoignages"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [productSchema, projectSchema, testimonialSchema, settingsSchema],
  },
});
