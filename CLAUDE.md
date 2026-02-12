# Anja Gutierrez Portfolio

## Overview
Personal portfolio site showcasing 5 production projects, with full case studies for XPO Fleet Intelligence and Tour Route Planner.

## Stack
- **Framework:** Next.js 15 (App Router), React 19
- **Styling:** Tailwind CSS 4, shadcn/ui (6 components)
- **Theme:** next-themes (dark-first, oklch palette from XPO Fleet)
- **Icons:** lucide-react
- **Language:** TypeScript (strict, zero errors)

## Key Commands
```bash
pnpm dev              # runs on next available port
npx tsc --noEmit      # type-check (zero errors)
```

## Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, ThemeProvider, Inter font
│   ├── page.tsx            # Landing page (hero, projects, skills, about, contact)
│   ├── globals.css         # oklch theme tokens + GeometryCube CSS
│   └── projects/[slug]/
│       └── page.tsx        # Case study pages (SSG)
├── components/
│   ├── ui/                 # shadcn: badge, button, card, separator, switch, tooltip
│   ├── layout/             # Header, Footer, ThemeProvider
│   ├── GeometryCube.tsx    # Adapted from XPO Fleet FleetCube (80px)
│   ├── HeroSection.tsx
│   ├── FeaturedProject.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── AboutSection.tsx
│   └── ContactSection.tsx
├── data/
│   └── projects.ts         # All project data + case study content
└── lib/
    └── utils.ts            # cn() utility
```

## Pages
| Route | Page |
|-------|------|
| `/` | Landing (hero + 4 scroll sections) |
| `/projects/xpo-fleet` | XPO Fleet case study |
| `/projects/tour-route-planner` | Tour Route Planner case study |

## Deploy
Vercel (connect GitHub repo `anja687gutierrez-jpg/anja-portfolio`)
