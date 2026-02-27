"use client";

import { useState } from "react";
import Link from "next/link";
import { BoltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-ink"
          onClick={() => setOpen(false)}
        >
          <span className="rounded bg-accent p-1 text-white">
            <BoltIcon className="h-4 w-4" />
          </span>
          TRADIM.MR
        </Link>

        {/* Desktop nav */}
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

        {/* Hamburger */}
        <button
          className="rounded-md p-2 text-ink hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-4 pt-2 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-slate-100 py-3 text-sm font-semibold text-ink hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton
              href="/request-quote"
              className="mt-4 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Demander un devis
            </LinkButton>
          </nav>
        </div>
      )}
    </header>
  );
}
