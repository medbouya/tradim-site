export type Testimonial = {
  clientName: string;
  role: string;
  content: string;
};

export const testimonials: Testimonial[] = [
  {
    clientName: "Directeur Technique",
    role: "Groupe SOTRAM",
    content:
      "TRADIM a livré une solution clé en main solide. Le système BYD tourne depuis 8 mois sans interruption, avec un support technique réactif.",
  },
  {
    clientName: "Responsable Exploitation",
    role: "MINEX",
    content:
      "L'équipe a sécurisé la mise en service et amélioré notre stabilité énergétique dès le premier mois. Un partenaire de confiance.",
  },
];
