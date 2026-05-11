# Anja Gutierrez — Portfolio

Personal portfolio showcasing 12+ production projects across operations dashboards, AI tools, mobile apps, SaaS platforms, and developer products.

## Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, shadcn/ui, Tailwind CSS 4
- **Language:** TypeScript (strict mode)
- **Deployment:** Vercel

## Local Development

```bash
pnpm install
pnpm dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — Pages (landing, case studies, work-with-me)
- `src/components/` — Section components + shadcn/ui primitives
- `src/data/projects.ts` — All project metadata and case study data

## Pages

- `/` — Landing page with projects, skills, about, contact
- `/work-with-me` — Services, philosophy, technical range, contact
- `/projects/xpo-fleet` — XPO Fleet Intelligence case study
- `/projects/tour-route-planner` — Tour Route Planner case study
