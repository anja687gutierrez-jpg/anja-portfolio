import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <div className="rounded-xl border bg-card p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
            Featured Project
          </Badge>
          <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {project.stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg bg-muted/50 px-3 py-2 text-center"
          >
            <p className="text-lg font-bold tabular-nums">{stat.value}</p>
            <p className="text-[11px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t} variant="secondary" className="text-xs">
            {t}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {project.hasCaseStudy && (
          <Button asChild>
            <a href={`/projects/${project.slug}`}>
              Case Study
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        )}
        {project.links.map((link) => (
          <Button key={link.label} variant="outline" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-4" />
              {link.label}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
