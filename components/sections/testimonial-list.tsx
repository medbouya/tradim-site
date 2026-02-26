import type { Testimonial } from "@/lib/types";

type TestimonialListProps = {
  testimonials: Testimonial[];
};

export function TestimonialList({ testimonials }: TestimonialListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((item) => (
        <blockquote
          key={item.clientName}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
        >
          <p className="text-sm leading-relaxed text-muted">
            &ldquo;{item.content}&rdquo;
          </p>
          <footer className="mt-4 text-sm font-semibold text-ink">{item.clientName}</footer>
        </blockquote>
      ))}
    </div>
  );
}
