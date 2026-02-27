import Link from "next/link";

const links = [
  { href: "/about", label: "Entreprise" },
  { href: "/products", label: "Catalogue" },
  { href: "/projects", label: "Références" },
  { href: "/contact", label: "Support" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-white">TRADIM.MR</p>
          <p className="mt-3 max-w-xs text-sm">
            Solutions solaires pour les entreprises et les foyers exigeants.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="rounded bg-accent px-1.5 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
              BYD
            </span>
            <span className="text-xs text-slate-400">Distributeur officiel</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-accent" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Coordonnées</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>contact@tradim.mr</li>
            <li>+222 45 12 34 56</li>
            <li>Tevragh-Zeina, Nouakchott</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <p className="mx-auto w-full max-w-6xl px-4 py-4 text-xs text-slate-500 sm:px-6">
          © {new Date().getFullYear()} TRADIM.MR — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
