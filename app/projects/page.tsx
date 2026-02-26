import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectCard } from "@/components/sections/project-card";
import { dataProvider } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projets - TRADIM.MR",
  description:
    "Découvrez les déploiements solaires TRADIM pour entreprises et infrastructures.",
  alternates: { canonical: "/projects" },
};

export const revalidate = 300;

export default async function ProjectsPage() {
  const projects = await dataProvider.getProjects();

  return (
    <>
      <PageHero
        title="Réalisations sur le terrain"
        description="Un aperçu de nos projets déployés pour des environnements à forte exigence."
      />
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
}
