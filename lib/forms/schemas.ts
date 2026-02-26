import { z } from "zod";

const emptyToUndefined = (value: unknown) => {
  if (typeof value === "string" && value.trim() === "") {
    return undefined;
  }
  return value;
};

const baseFields = {
  name: z.string().min(2, "Nom trop court").max(80, "Nom trop long"),
  email: z.string().email("Email invalide").max(120, "Email trop long"),
  phone: z.string().min(8, "Téléphone invalide").max(30, "Téléphone invalide"),
  company: z.preprocess(
    emptyToUndefined,
    z.string().max(120, "Entreprise trop longue").optional(),
  ),
  consent: z
    .boolean()
    .refine((value) => value, { message: "Le consentement est obligatoire" }),
  website: z.string().max(0, "Champ invalide").optional().default(""),
};

export const contactSchema = z.object({
  ...baseFields,
  phone: z.preprocess(emptyToUndefined, baseFields.phone.optional()),
  message: z
    .string()
    .min(10, "Message trop court")
    .max(1500, "Message trop long"),
});

export const quoteSchema = z.object({
  ...baseFields,
  location: z.preprocess(
    emptyToUndefined,
    z.string().max(120, "Localisation trop longue").optional(),
  ),
  productInterest: z.preprocess(
    emptyToUndefined,
    z.string().max(120, "Produit ciblé trop long").optional(),
  ),
  projectDetails: z
    .string()
    .min(20, "Détails insuffisants")
    .max(3000, "Détails trop longs"),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type QuoteInput = z.infer<typeof quoteSchema>;
