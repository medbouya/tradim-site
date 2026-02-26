export const siteConfig = {
  name: "TRADIM.MR",
  legalName: "TRADIM Solaire",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "fr-FR",
  defaultOgImage:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
};

export const runtimeConfig = {
  cmsProvider: process.env.CMS_PROVIDER ?? "mock",
  payloadApiUrl: process.env.PAYLOAD_API_URL,
  payloadApiToken: process.env.PAYLOAD_API_TOKEN,
  formReceiverEmail: process.env.FORM_RECEIVER_EMAIL,
};
