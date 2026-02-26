import Link from "next/link";

const links = [
  { href: "/about", label: "Entreprise" },
  { href: "/products", label: "Catalogue" },
  { href: "/projects", label: "Références" },
  { href: "/contact", label: "Support" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-ink">TRADIM.MR</p>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Solutions solaires pour les entreprises et les foyers exigeants.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ink">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="text-muted hover:text-accent" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ink">Coordonnées</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>contact@tradim.mr</li>
            <li>+222 45 12 34 56</li>
            <li>Tevragh-Zeina, Nouakchott</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
