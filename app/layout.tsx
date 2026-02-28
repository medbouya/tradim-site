import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/config";
import { organizationSchema } from "@/lib/seo/schema";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "TRADIM.MR — Distributeur BYD Energy Storage en Mauritanie",
  description:
    "Systèmes de stockage BYD Power-Box SL 6K et SL 10K. Solutions fiables pour entreprises et infrastructures critiques.",
  openGraph: {
    title: "TRADIM.MR — Distributeur BYD Energy Storage en Mauritanie",
    description:
      "Systèmes de stockage BYD Power-Box SL. Distributeur officiel BYD en Mauritanie.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "TRADIM panneaux solaires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRADIM.MR — Distributeur BYD Energy Storage en Mauritanie",
    description:
      "Systèmes de stockage BYD Power-Box SL. Distributeur officiel BYD en Mauritanie.",
    images: [siteConfig.defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${manrope.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
