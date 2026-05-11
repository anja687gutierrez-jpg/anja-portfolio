import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      "React 18/19",
      "Next.js 15/16",
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Recharts",
      "Leaflet",
      "Three.js",
      "Vite 6",
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      "Firebase",
      "Supabase",
      "Drizzle ORM",
      "Firestore",
      "Cloudflare Workers + KV",
      "IndexedDB",
      "REST APIs",
      "Stripe",
      "Google Sheets API",
    ],
  },
  {
    label: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Claude Code",
      "Ollama",
      "Gemini API",
      "Playwright",
      "pnpm",
      "ESLint",
      "Python",
      "ChromaDB",
    ],
  },
  {
    label: "Deployment",
    skills: [
      "Vercel",
      "Cloudflare Pages",
      "Firebase Hosting",
      "Cloudflare Workers",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Technologies and tools I use to build applications
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.label} className="rounded-xl border bg-card p-5">
            <h3 className="mb-3 text-sm font-semibold">{category.label}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
