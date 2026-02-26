import { LinkButton } from "@/components/ui/button";

type PageHeroProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ title, description, ctaLabel, ctaHref }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">TRADIM.MR</p>
        <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-200 sm:text-lg">{description}</p>
        {ctaLabel && ctaHref ? (
          <LinkButton href={ctaHref} className="mt-8">
            {ctaLabel}
          </LinkButton>
        ) : null}
      </div>
    </section>
  );
}
