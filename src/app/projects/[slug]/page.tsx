import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import {
  projects,
  xpoStats,
  researchDocs,
  dataExports,
  originalFeatures,
  xpoTechStack,
  xpoMethodology,
  tourFeatures,
  tourTechDetails,
} from "@/data/projects";

export function generateStaticParams() {
  return [{ slug: "xpo-fleet" }, { slug: "tour-route-planner" }];
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // This needs to be async in Next.js 15
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.title} — Anja Gutierrez`,
      description: project.description,
    };
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.hasCaseStudy) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <Button variant="ghost" size="sm" className="mb-8" asChild>
        <a href="/#projects">
          <ArrowLeft className="mr-2 size-4" />
          Back to Projects
        </a>
      </Button>

      {slug === "xpo-fleet" ? (
        <XpoFleetCaseStudy project={project} />
      ) : (
        <TourRouteCaseStudy project={project} />
      )}
    </div>
  );
}

function XpoFleetCaseStudy({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Case Study
          </Badge>
          <Badge variant="outline">2026</Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{project.tagline}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {xpoStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="rounded-xl border bg-card p-4 text-center"
            >
              <Icon className="mx-auto mb-2 size-5 text-muted-foreground" />
              <p className="text-2xl font-bold tabular-nums">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Tech Stack */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">Technology Stack</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {xpoTechStack.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-lg bg-muted/30 px-3 py-2"
            >
              <span className="text-xs text-muted-foreground">{label}</span>
              <span className="text-xs font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="mb-1 text-lg font-semibold">Methodology</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          This platform was built through a structured research-first approach —
          not from a template or boilerplate.
        </p>
        <div className="space-y-4">
          {xpoMethodology.map((phase) => (
            <div key={phase.phase} className="rounded-lg bg-muted/30 p-4">
              <h3 className="text-sm font-semibold">{phase.phase}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Original Features */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Original Features</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          These features were designed from original research and are not found
          in the reference platform (EBAI):
        </p>
        <div className="space-y-3">
          {originalFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex gap-4 rounded-xl border bg-card p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Research Documents */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Research Documents</h2>
        <div className="rounded-xl border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-xs text-muted-foreground">
                <th className="p-3 text-left font-medium">Document</th>
                <th className="p-3 text-right font-medium">Lines</th>
                <th className="hidden p-3 text-left font-medium sm:table-cell">
                  Scope
                </th>
              </tr>
            </thead>
            <tbody>
              {researchDocs.map((doc) => (
                <tr key={doc.name} className="border-b border-border/30">
                  <td className="p-3 text-xs font-medium">{doc.name}</td>
                  <td className="p-3 text-right text-xs tabular-nums">
                    {doc.lines}
                  </td>
                  <td className="hidden p-3 text-xs text-muted-foreground sm:table-cell">
                    {doc.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Data Sources */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Data Sources Analyzed</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          16 real fleet telematics exports were processed to generate realistic
          mock data:
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {dataExports.map((source, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg bg-muted/30 px-3 py-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs">{source}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Links */}
      <div className="flex flex-wrap items-center gap-3">
        {project.links.map((link) => (
          <Button key={link.label} variant="outline" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 size-4" />
              {link.label}
            </a>
          </Button>
        ))}
        <Button variant="ghost" asChild>
          <a href="/#projects">
            <ArrowLeft className="mr-2 size-4" />
            All Projects
          </a>
        </Button>
      </div>
    </div>
  );
}

function TourRouteCaseStudy({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Case Study
          </Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-lg text-muted-foreground">{project.tagline}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">Technology Stack</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {tourTechDetails.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-lg bg-muted/30 px-3 py-2"
            >
              <span className="text-xs text-muted-foreground">{label}</span>
              <span className="text-xs font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Key Features</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {tourFeatures.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg bg-muted/30 px-3 py-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Badges */}
      <div>
        <h2 className="mb-4 text-lg font-semibold">Built With</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Links */}
      <div className="flex flex-wrap items-center gap-3">
        {project.links.map((link) => (
          <Button key={link.label} variant="outline" asChild>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label === "GitHub" ? (
                <Github className="mr-2 size-4" />
              ) : (
                <ExternalLink className="mr-2 size-4" />
              )}
              {link.label}
            </a>
          </Button>
        ))}
        <Button variant="ghost" asChild>
          <a href="/#projects">
            <ArrowLeft className="mr-2 size-4" />
            All Projects
          </a>
        </Button>
      </div>
    </div>
  );
}
