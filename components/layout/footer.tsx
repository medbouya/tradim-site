import Link from "next/link";
import { settings } from "@/lib/content/settings";

const links = [
  { href: "/about", label: "Entreprise" },
  { href: "/products", label: "Catalogue" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Références" },
  { href: "/contact", label: "Support" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-slate-400">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 font-heading text-sm font-bold tracking-[0.2em] text-white uppercase">
            <span className="h-2 w-2 rounded-full bg-accent" />
            TRADIM
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{settings.tagline}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-sm border border-white/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white">BYD</span>
            <span className="text-xs text-slate-600">Distributeur officiel</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white">Navigation</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white">Coordonnées</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${settings.contact.email}`}
                className="transition-colors hover:text-white"
              >
                {settings.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${settings.contact.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-white"
              >
                {settings.contact.phone}
              </a>
            </li>
            <li>{settings.contact.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <p className="mx-auto w-full max-w-7xl px-4 py-4 text-xs text-slate-600 sm:px-6">
          © {new Date().getFullYear()} TRADIM.MR — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
