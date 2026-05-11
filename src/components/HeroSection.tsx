import { Button } from "@/components/ui/button";
import { GeometryCube } from "@/components/GeometryCube";
import { Github } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-8 px-4 text-center">
      <GeometryCube size={80} />

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Anja Gutierrez
        </h1>
        <p className="text-xl text-primary font-medium">
          Full-Stack Developer & AI Builder
        </p>
        <p className="mx-auto max-w-lg text-muted-foreground">
          I build production tools from original research — operations dashboards, AI assistants, mobile apps, and SaaS platforms. 12+ shipped projects, from zero-build SPAs to full Next.js systems.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://github.com/anja687gutierrez-jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 size-4" />
            GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
