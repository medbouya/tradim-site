import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Réalisations - TRADIM.MR",
  description: "Découvrez les déploiements BYD Energy Storage de TRADIM pour entreprises et infrastructures en Mauritanie.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Projets déployés sur le terrain"
        description="Un aperçu de nos installations BYD Power-Box pour des environnements à forte exigence en Mauritanie."
      />
      <section className="bg-white py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
