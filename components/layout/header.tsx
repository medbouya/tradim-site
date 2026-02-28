"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { LinkButton } from "@/components/ui/button";

const navItems = [
  { href: "/about", label: "À propos" },
  { href: "/products", label: "Produits" },
  { href: "/solutions", label: "Solutions" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0d0d0d]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-heading text-sm font-bold tracking-[0.2em] text-white uppercase"
          onClick={() => setOpen(false)}
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          TRADIM
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <LinkButton href="/request-quote" className="hidden md:inline-flex">
          Demander un devis
        </LinkButton>

        <button
          className="rounded p-2 text-slate-400 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#0d0d0d] md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-5 pt-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-white/5 py-3 text-sm font-medium text-slate-400 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton href="/request-quote" className="mt-4 w-full justify-center" onClick={() => setOpen(false)}>
              Demander un devis
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
