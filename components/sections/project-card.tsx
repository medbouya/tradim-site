import type { Project } from "@/lib/content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-sm border border-slate-200 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
        {project.location}
      </p>
      <h3 className="mt-2 font-heading text-xl font-bold text-ink">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
        <span className="font-heading text-base font-bold text-ink">{project.capacity}</span>
        <span className="text-xs text-muted">de capacité installée</span>
      </div>
    </article>
  );
}
