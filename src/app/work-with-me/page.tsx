import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Github, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Work With Anja — Full-Stack Developer & AI Builder",
  description:
    "I build production tools, not prototypes. Contract work, consulting, architecture reviews. React, Next.js, AI integrations, Cloudflare, Firebase.",
};

const stats = [
  { label: "Production Projects", value: "12+" },
  { label: "Pages / Views Built", value: "60+" },
  { label: "AI Integrations", value: "4" },
  { label: "Custom CLI Skills", value: "10" },
  { label: "CF Pages Deployments", value: "5" },
  { label: "Stripe Payment Flows", value: "3" },
  { label: "Campaigns Managed", value: "860+" },
  { label: "Lines of Code (Ops Hub)", value: "25K+" },
];

const techRange: [string, string][] = [
  [
    "Frontend",
    "React 18/19, Next.js 15/16, TypeScript, Tailwind CSS 4, Three.js, Vite 6, SSG/SSR",
  ],
  [
    "Backend",
    "Node.js, Cloudflare Workers/Pages Functions, Vercel Serverless, Google Apps Script",
  ],
  [
    "Databases",
    "Firebase (Firestore, Auth, Hosting), Supabase (Postgres, Auth, RLS), IndexedDB",
  ],
  ["Payments", "Stripe (PaymentIntent, Identity, Connect, Webhooks)"],
  [
    "AI / ML",
    "Groq (Llama 3.3 70B), Google Gemini 2.5, Ollama (local inference), RAG pipelines",
  ],
  [
    "Infrastructure",
    "Cloudflare Pages/Workers, Vercel, Firebase Hosting, GitHub Actions CI/CD",
  ],
  [
    "Graphics",
    "Three.js (3D scenes), HTML5 Canvas, 3d-force-graph, SVG",
  ],
  ["Mobile", "React Native, Expo, Responsive SPA, Device Camera API"],
];

const principles = [
  {
    title: "I ship.",
    desc: "Every project is deployed and running in production. Not prototypes, not demos — real software handling real data.",
  },
  {
    title: "Zero-dependency by default.",
    desc: "The Ops Hub Portal is a 1.3 MB SPA with no build step, no bundler — just CDN imports. When I use a framework, it's because the project needs it.",
  },
  {
    title: "I own the full stack.",
    desc: "Database schema, API design, frontend polish, deployment pipeline, DNS, SSL, monitoring. No handoffs.",
  },
  {
    title: "I build my own tools.",
    desc: "Code intelligence engines, knowledge agents, CLI workflows, monitoring dashboards. The best developer tool eliminates a daily manual task.",
  },
  {
    title: "I fix the root cause.",
    desc: "Not the symptom. Stale closures, IDB write-through races, cross-origin Worker issues, Stripe webhook signature failures — all debugged in production.",
  },
  {
    title: "AI-native workflow.",
    desc: "I build in collaboration with Claude Code. I bring domain expertise and product vision. Every commit is co-authored because that's how modern software gets built.",
  },
];

export default function WorkWithMePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 pt-20 sm:px-6">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <a href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Portfolio
            </a>
          </Button>
        </div>

        <div className="space-y-16 pb-12">
          <section className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work With Anja
            </h1>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m an operations coordinator and developer based in Los
                Angeles. I build the tools my team actually needs — dashboards,
                AI assistants, tracking systems, and automation that solves real
                problems on the ground.
              </p>
              <p>
                I don&apos;t work from templates. I don&apos;t follow tutorials.
                I architect systems from scratch, ship them to production, and
                maintain them myself.
              </p>
            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">How I Work</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border bg-card p-5 space-y-2"
                >
                  <h3 className="text-sm font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-muted/50 px-3 py-3 text-center"
                >
                  <p className="text-xl font-bold tabular-nums">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Technical Range
            </h2>
            <div className="rounded-xl border bg-card overflow-hidden">
              <div className="divide-y">
                {techRange.map(([area, techs]) => (
                  <div
                    key={area}
                    className="flex flex-col gap-2 px-5 py-3 sm:flex-row sm:gap-4"
                  >
                    <span className="shrink-0 text-sm font-semibold sm:w-28">
                      {area}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {techs.split(", ").map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator />

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Let&apos;s Work Together
            </h2>
            <div className="rounded-xl border bg-card p-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                I&apos;m open to contract work and consulting — building
                production applications, dashboards, internal tools, AI
                features, or doing architecture reviews and infrastructure
                strategy. I work best when I can own a problem end-to-end and
                ship something real.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="mailto:anja687gutierrez@gmail.com">
                    <Mail className="mr-2 size-4" />
                    Email Me
                  </a>
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
                <Button variant="outline" asChild>
                  <a
                    href="https://products.goiconicway.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developer Tools & Guides
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
