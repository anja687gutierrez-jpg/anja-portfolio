import { projects } from "@/data/projects";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Production-quality applications built from research to deployment
        </p>
      </div>

      <FeaturedProject project={featured} />

      <div className="grid gap-4 sm:grid-cols-2">
        {others.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
