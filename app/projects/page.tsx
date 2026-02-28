import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectCard } from "@/components/sections/project-card";
import { projects as staticProjects } from "@/lib/content/projects";
import { getProjects } from "@/lib/sanity/queries";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Réalisations - TRADIM.MR",
  description: "Découvrez les déploiements BYD Energy Storage de TRADIM pour entreprises et infrastructures en Mauritanie.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const sanityProjects = await getProjects();
  const projects = sanityProjects.length > 0 ? sanityProjects : staticProjects;

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
