import { LinkButton } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, description, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="border-b border-white/5 bg-[#0d0d0d] py-20 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-400 sm:text-lg">{description}</p>
        {ctaLabel && ctaHref && (
          <LinkButton href={ctaHref} className="mt-8">
            {ctaLabel}
          </LinkButton>
        )}
      </div>
    </section>
  );
}
