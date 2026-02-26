import Link from "next/link";
import { BoltIcon } from "@heroicons/react/24/solid";
import { LinkButton } from "@/components/ui/button";

const navItems = [
  { href: "/about", label: "À propos" },
  { href: "/products", label: "Produits" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-ink">
          <span className="rounded bg-accent p-1 text-white">
            <BoltIcon className="h-4 w-4" />
          </span>
          TRADIM.MR
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <LinkButton href="/request-quote" className="hidden md:inline-flex">
          Demander un devis
        </LinkButton>
      </div>
    </header>
  );
}
