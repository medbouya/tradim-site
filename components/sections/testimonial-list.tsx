import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialList({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((item) => (
        <blockquote
          key={item.clientName}
          className="rounded-sm border border-white/10 bg-[#111] p-6"
        >
          <p className="text-sm leading-relaxed text-slate-400">&ldquo;{item.content}&rdquo;</p>
          <footer className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
            <span className="h-7 w-7 rounded-full bg-accent/20 text-center text-xs font-bold leading-7 text-accent">
              {item.clientName.charAt(0)}
            </span>
            <div>
              <span className="block text-sm font-semibold text-white">{item.clientName}</span>
              <span className="text-xs text-slate-500">{item.role}</span>
            </div>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
