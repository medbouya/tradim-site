import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6">
      <h1 className="font-heading text-4xl font-semibold text-ink">Page introuvable</h1>
      <p className="mt-4 text-sm text-muted">
        La page demandée n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm font-semibold text-accent hover:underline">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
