export type Project = {
  title: string;
  location: string;
  capacity: string;
  description: string;
  images: string[];
};

export const projects: Project[] = [
  {
    title: "Usine agro-industrielle",
    location: "Nouakchott",
    capacity: "420 kWp",
    description:
      "Réduction de 39 % des coûts énergétiques annuels grâce à une centrale hybride solaire + stockage BYD.",
    images: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Centre logistique",
    location: "Nouadhibou",
    capacity: "180 kWp",
    description:
      "Installation en toiture avec supervision en temps réel et maintenance préventive mensuelle.",
    images: [
      "https://images.unsplash.com/photo-1509391618207-f2f6fd92597c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];
