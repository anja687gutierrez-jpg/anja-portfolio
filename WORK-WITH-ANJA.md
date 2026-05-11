# Work With Anja

## Who I Am

I'm **Anja Gutierrez** — an operations coordinator and developer based in Los Angeles. I build the tools my team actually needs — dashboards, AI assistants, tracking systems, and automation that solves real problems on the ground.

I don't work from templates. I don't follow tutorials. I architect systems from scratch, ship them to production, and maintain them myself.

---

## What I Build

### Enterprise Operations

- **Ops Hub Portal** — Enterprise operations dashboard managing 240+ advertising campaigns across multiple markets. React 18 SPA with AI analytics (Groq/Llama 3.3 70B), real-time Google Sheets sync, multi-carrier shipment tracking via batch API, canvas-rendered 4-gear navigation system, email digest builder, weather-aware scheduling, PDF export, and 4-layer IndexedDB persistence. 1.3 MB single-page app with zero build tools. Deployed on Cloudflare Pages.

- **XPO Fleet Intelligence** — Fleet management platform with 24 pages built for a national transportation company. Pre-trip inspections (38 checklist items), CHP compliance engine (48 inspection items + 381 failure modes), preventive maintenance scheduling by vehicle type, 6-tier compliance status model, risk analysis dashboard, and dispatch tracking. Next.js 15, React 19, Tailwind 4, Recharts.

### AI & Machine Learning

- **Elody** — My personal knowledge agent. Natural language search over a knowledge graph, code search with project-aware routing, Chrome bookmark indexing, two-way SMS with auto-reply using the full knowledge pipeline, session persistence, git commit tracking across all repos, and a custom Ink TUI with animated sprites. Node.js, Gemini 2.5 Flash API (chat + embeddings), Ollama fallback for offline use. Includes an autonomous `/loop` engine with plan generation and circuit breaker.

- **AI Pipeline Insights** — One-click executive briefing integrated into Ops Hub. Synthesizes headline risk, install velocity, stalled campaigns, POP compliance, material bottlenecks, hold status, market capacity, and live weather data into a structured analysis. Groq API with Llama 3.3 70B.

- **Ops AI Assistant** — Conversational AI embedded in the operations dashboard. Context-aware — knows every campaign's tracking numbers, install progress, materials, schedules, and shipment status. Ask "tell me about the shipment for Western Union" and it pulls live data.

- **Odyssey AI** — NLP-powered tour generation engine with Gemini Vision for AR trail scanning, narration script generation, and route intelligence. Parses natural language like "3-day coastal trip from LA" into optimized itineraries with waypoints, attractions, and camping spots.

### Financial Technology

- **Bob's StockPulse** — Automated daily stock analysis platform. Scans portfolio holdings, market movers, and trending tickers every morning. Generates AI-powered trading signals with technical indicators, builds unified email reports, and delivers via Resend. Built on Cloudflare Workers with yahoo-finance2 — stays under the 50 subrequest limit with smart batching. Architected for SaaS with Free/Pro tier structure and Stripe billing.

- **Personal Tax Automation** — Built tooling to categorize 12 months of credit card statements, classify business expenses, calculate startup cost deductions, generate mileage logs, and model MFJ vs MFS filing scenarios. Saved ~$2,000 in preparation fees and caught a $1,600 IRA contribution error.

### E-Commerce & Booking Platforms

- **GoIconicWay & Abenteuer Mieten Amerika** — Dual-brand marketing sites for an EV campervan rental startup I co-founded. React 19, Vite 6 SSG, bilingual (EN/DE) with runtime language switching, lead capture via Google Apps Script, optimized Core Web Vitals, deployed via GitHub Actions to Cloudflare Pages. Two separate CF Pages projects from one monorepo.

- **Abenteuer Platform** — Full booking pipeline: marketing site to checkout to admin quote to identity verification to payment to pickup to return. Stripe PaymentIntent + Identity + Connect (provider payouts), Resend email templates (4 transactional flows), custom JWT auth with 3 roles (admin/provider/traveler), Supabase DB with 7 tables. Next.js 15 on Vercel.

### Navigation & Mapping

- **Tour Route Planner** — AI-powered road trip planning with interactive Mapbox maps, route optimization, drag-and-drop itinerary editing, Firebase Auth, and a PathScanner AR feature for real-time trail analysis using device camera + Gemini Vision + GPS. React 18, TypeScript, Vite.

- **Thought Graph** — 3D knowledge visualization with 101 nodes, 403 wikilinks, and 3 topology modes (force-directed, radial, hierarchical). Built with 3d-force-graph and Three.js. Auto-refreshes from my knowledge base. Live on Cloudflare Pages.

### Developer Tools & Infrastructure

- **Ops Hub Intel** — Custom AST-backed code intelligence engine using @babel/parser. Traces impact analysis ("if I change this function, what breaks?"), storage key mapping across 4 persistence layers, and blast radius detection for a 1.3 MB SPA. Runs as a pre-commit validation agent.

- **10 Custom CLI Skills** — Built for Claude Code: `/primer` (project context loader), `/reflect` (session debrief with 10-layer audit, including a Knowledge Harvest layer that promotes substantive session reasoning into durable wiki nodes), `/checkpoint` (session continuity), `/status` (production health + dev server launcher), `/debt` (multi-project tech debt scanner), `/auth` (auto-detect Firebase/Supabase/AuthJS and scaffold), `/spec` (PRD to task list converter), `/learn` (web doc scraper + embedder), `/legal` (19-topic American law reference), `/frontend-design` (design system with project detection).

- **Automated Production Monitoring** — Health checks across all deployed sites: response time, SSL certificate expiration, HTTP status, redirect chains. One command spins up local dev servers with correct ports and opens browser tabs.

- **Knowledge Graph System** — Interconnected markdown nodes with wikilinks, domain MOCs (Maps of Content), project runbooks, and automated topic extraction. Entry point indexes into domain-specific clusters. Powers Elody's search and my `/primer` context loading. This architecture independently matches the "LLM Wiki" pattern Andrej Karpathy published in April 2026 (raw sources → LLM-maintained wiki → schema file), with one addition: a Maps of Content layer above the flat index that scales better past ~100 nodes. I got to this architecture by solving my own problem over six months of production use, before the pattern had a name in the field.

---

## Technical Range

| Area | Technologies |
|------|-------------|
| **Frontend** | React 18/19, Next.js 15/16, TypeScript, Tailwind CSS 3/4, Three.js, Vite 6, SSG/SSR |
| **Backend** | Node.js, Cloudflare Workers/Pages Functions, Vercel Serverless, Google Apps Script |
| **Databases** | Firebase (Firestore, Auth, Hosting), Supabase (Postgres, Auth, RLS), IndexedDB, localStorage |
| **Payments** | Stripe (PaymentIntent, Identity, Connect, Webhooks) |
| **AI/ML** | Groq (Llama 3.3 70B), Google Gemini 2.5 (Flash + Vision), Ollama (local inference), embeddings, RAG pipelines, NLP parsing |
| **APIs** | 17TRACK, yahoo-finance2, Mapbox, Open-Meteo, Resend, Google Sheets |
| **Infrastructure** | Cloudflare Pages/Workers, Vercel, Firebase Hosting, GitHub Actions CI/CD |
| **Canvas/Graphics** | Three.js (3D scenes + animations), HTML5 Canvas (custom navigation), 3d-force-graph, SVG |
| **Developer Tooling** | Custom CLI skills, AST analysis (@babel/parser), session persistence, knowledge graphs, automated deployments |
| **Mobile** | Responsive SPA, PWA-ready, device camera API (AR scanning) |

---

## How I Work

- **I ship.** Every project listed above is deployed and running in production. Not prototypes, not demos — real software handling real data for real users.
- **Zero-dependency by default.** The Ops Hub Portal is a 1.3 MB SPA that runs in the browser with no build step, no Node.js, no bundler — just CDN imports and a file server. When I use a framework, it's because the project genuinely needs it, not because it's trendy.
- **I own the full stack.** Database schema, API design, frontend polish, deployment pipeline, DNS configuration, SSL certificates, monitoring. No handoffs, no waiting on other teams, no "that's not my job."
- **I build my own tools.** When existing tools don't fit, I build what I need — code intelligence engines, knowledge agents, CLI workflows, monitoring dashboards, tax automation. The best developer tool is the one that eliminates a daily manual task.
- **I fix the root cause.** Not the symptom. I've debugged stale closures in React hooks, IndexedDB write-through races, cross-origin Cloudflare Worker issues, Babel Standalone transpilation edge cases, Stripe webhook signature verification failures, and Apple nanosecond timestamp decoding — all in production.
- **AI-native workflow.** I build in collaboration with Claude Code. I bring the domain expertise, product vision, and quality bar. Claude brings deep technical knowledge and the ability to hold an entire codebase in context. Every commit is co-authored because that's the honest truth of how modern software gets built.

---

## By the Numbers

| Metric | Count |
|--------|-------|
| Production projects | 10+ |
| Total pages/views built | 60+ |
| AI integrations | 4 (Groq, Gemini, Ollama, Odyssey) |
| Custom CLI skills | 10 |
| Cloudflare Pages deployments | 5 |
| Stripe payment flows | 3 (PaymentIntent, Identity, Connect) |
| Campaigns managed (Ops Hub) | 240+ |
| Work orders tracked | 280+ |
| Lines of code (Ops Hub alone) | 25,000+ |

---

## Side Projects & Collaboration

I'm open to:
- **Contract work** — building production applications, dashboards, internal tools, or AI features
- **Consulting** — architecture reviews, AI integration strategy, Cloudflare/Vercel/Firebase infrastructure

I work best when I can own a problem end-to-end and ship something real.

---

## Get In Touch

**Anja Gutierrez** | Los Angeles, CA

[GitHub](https://github.com/anja687gutierrez-jpg) | [Developer Tools & Guides](https://products.goiconicway.com)
