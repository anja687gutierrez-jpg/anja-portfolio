export function AboutSection() {
  const stats = [
    { label: "Production Projects", value: "5" },
    { label: "Lines of Code (XPO alone)", value: "29K+" },
    { label: "Pages Built (XPO)", value: "23" },
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
            I&apos;m a full-stack developer who builds production-quality web applications from the ground up. My approach is research-first: I study real systems, analyze real data, and then design architectures that solve real problems.
          </p>
          <p>
            My flagship project — XPO Fleet Intelligence — is a 23-page fleet management dashboard built from 10 research documents and 16 real data exports. It includes original features like a 6-tier compliance engine and digitized CHP inspection forms that don&apos;t exist in the reference platform.
          </p>
          <p>
            I work across the full stack: React and Next.js on the frontend, Firebase and Supabase on the backend, and Vercel and Cloudflare for deployment. I prioritize TypeScript strict mode, zero errors, and clean architecture in everything I build.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
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
