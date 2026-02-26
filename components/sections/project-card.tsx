import Image from "next/image";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative h-48">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-wider text-energy">{project.location}</p>
        <h3 className="mt-2 font-heading text-xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm text-muted">{project.description}</p>
      </div>
    </article>
  );
}
