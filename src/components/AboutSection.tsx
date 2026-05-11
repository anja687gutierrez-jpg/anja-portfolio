export function AboutSection() {
  const aboutStats = [
    { label: "Production Projects", value: "12+" },
    { label: "Lines of Code (XPO alone)", value: "29K+" },
    { label: "Gumroad Products", value: "6" },
    { label: "TypeScript Errors", value: "0" },
  ];

  return (
    <section id="about" className="scroll-mt-20 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">About</h2>
      </div>

      <div className="rounded-xl border bg-card p-6 sm:p-8">
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            I&apos;m an operations coordinator turned full-stack developer who builds production tools from the ground up — dashboards, AI assistants, mobile apps, CLI workflows, and SaaS platforms. My approach is research-first: I study real systems, analyze real data, and design architectures that solve real problems.
          </p>
          <p>
            I ship across the full stack: React and Next.js on the frontend, Firebase and Supabase on the backend, Cloudflare and Vercel for deployment, and React Native for mobile. I also build my own developer tools — 10 custom CLI skills, a personal AI knowledge agent, and a 100+ node knowledge graph system.
          </p>
          <p>
            I sell developer guides and starter kits on Gumroad, covering everything from CLAUDE.md architecture to zero-cost business dashboards. I prioritize TypeScript strict mode, zero errors, and clean architecture in everything I build.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-muted/50 px-3 py-3 text-center"
            >
              <p className="text-xl font-bold tabular-nums">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
