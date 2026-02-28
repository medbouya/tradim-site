import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { productSchema } from "./schemas/product";
import { projectSchema } from "./schemas/project";
import { testimonialSchema } from "./schemas/testimonial";
import { settingsSchema } from "./schemas/settings";

export default defineConfig({
  name: "tradim-studio",
  title: "TRADIM Studio",
  projectId: "o5014ckj",
  dataset: "production",
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
