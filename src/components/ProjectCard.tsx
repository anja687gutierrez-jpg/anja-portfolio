import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-xl border bg-card p-5">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{project.tagline}</p>

      <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge key={t} variant="secondary" className="text-[11px]">
            {t}
          </Badge>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.hasCaseStudy && (
          <Button size="sm" variant="ghost" asChild className="h-8 text-xs">
            <a href={`/projects/${project.slug}`}>
              Case Study
              <ArrowRight className="ml-1 size-3" />
            </a>
          </Button>
        )}
        {project.links.map((link) => (
          <Button
            key={link.label}
            size="sm"
            variant="ghost"
            asChild
            className="h-8 text-xs"
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label === "GitHub" ? (
                <Github className="mr-1 size-3" />
              ) : (
                <ExternalLink className="mr-1 size-3" />
              )}
              {link.label}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
