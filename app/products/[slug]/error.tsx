"use client";

export default function ProductError() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6">
      <h2 className="font-heading text-3xl font-semibold text-ink">Erreur de chargement</h2>
      <p className="mt-3 text-sm text-muted">
        Impossible d&apos;afficher cette fiche pour le moment. Réessayez dans quelques instants.
      </p>
    </section>
  );
}
