import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Code2,
  Layers,
  Shield,
  Database,
  FileSearch,
  LineChart,
  Lightbulb,
  Wrench,
} from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  stats: { label: string; value: string }[];
  links: { label: string; url: string }[];
  featured?: boolean;
  hasCaseStudy?: boolean;
}

export interface CaseStudyStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ResearchDoc {
  name: string;
  lines: string;
  desc: string;
}

export interface OriginalFeature {
  title: string;
  icon: LucideIcon;
  desc: string;
}

export const projects: Project[] = [
  {
    slug: "xpo-fleet",
    title: "XPO Fleet Intelligence",
    tagline: "Custom-built fleet intelligence dashboard",
    description:
      "A full-scale fleet management platform built from original research. 23 pages covering analytics, monitoring, risk management, service programs, and AI-assisted insights — all with typed mock data ready for API integration.",
    tech: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Recharts",
      "TypeScript",
    ],
    stats: [
      { label: "Pages", value: "23" },
      { label: "Lines of Code", value: "29K+" },
      { label: "Entity Types", value: "21" },
      { label: "TS Errors", value: "0" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/anja687gutierrez-jpg/xpo-fleet",
      },
    ],
    featured: true,
    hasCaseStudy: true,
  },
  {
    slug: "ops-hub-v2",
    title: "Ops Hub v2",
    tagline: "OOH transit advertising operations portal",
    description:
      "Production operations portal managing 860+ advertising campaigns across LA transit. Features Victor AI concierge with deterministic intelligence, RBAC (admin/viewer), real-time Google Sheets sync, batch shipment tracking, canvas gear sidebar, IDB persistence, and own CORS proxy. Zero build tools — 1.3 MB SPA on Cloudflare Pages.",
    tech: [
      "React 18",
      "Tailwind CSS",
      "Three.js",
      "Cloudflare Workers + KV",
      "IndexedDB",
      "Google Sheets API",
    ],
    stats: [
      { label: "Campaigns", value: "860+" },
      { label: "Lines of Code", value: "25K+" },
      { label: "Build Size", value: "1.3 MB" },
      { label: "Build Tools", value: "0" },
    ],
    links: [
      {
        label: "Live Site",
        url: "https://ops-hub-mobile.pages.dev",
      },
      {
        label: "Case Study",
        url: "https://github.com/anja687gutierrez-jpg/ops-hub-portfolio",
      },
    ],
  },
  {
    slug: "tour-route-planner",
    title: "Tour Route Planner",
    tagline: "Iconic Pathways — intelligent route optimization",
    description:
      "A route optimization app for tour planning with interactive maps, drag-and-drop itineraries, Firebase backend, and a voice assistant for hands-free navigation.",
    tech: ["React 18", "TypeScript", "Vite", "Firebase", "Leaflet"],
    stats: [
      { label: "Source Files", value: "164" },
      { label: "Features", value: "Route optimization, voice assistant" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/anja687gutierrez-jpg/tour-route-planner",
      },
    ],
    hasCaseStudy: true,
  },
  {
    slug: "klauz-app",
    title: "Klauz App",
    tagline: "iOS knowledge companion with 3-tier AI",
    description:
      "A mobile knowledge engine with 17 screens, orbital compass navigation, and a 3-tier AI stack (Gemini, Groq, local knowledge fallback). Built from scratch in React Native with Expo.",
    tech: ["React Native", "Expo", "TypeScript", "Gemini API", "Groq API"],
    stats: [
      { label: "Screens", value: "17" },
      { label: "Files", value: "45" },
      { label: "Lines of Code", value: "7,724" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/anja687gutierrez-jpg/klauz-app",
      },
    ],
  },
  {
    slug: "bobs-stockpulse",
    title: "Bob's StockPulse",
    tagline: "Automated daily stock analysis platform",
    description:
      "Scans portfolio holdings and market movers every morning, generates AI-powered trading signals with technical indicators, and delivers unified email reports via Resend. Architected for SaaS with Free/Pro tiers and Stripe billing.",
    tech: [
      "Next.js 16",
      "AI SDK",
      "yahoo-finance2",
      "Cloudflare Workers",
      "Stripe",
      "Resend",
    ],
    stats: [
      { label: "Type", value: "FinTech SaaS" },
      { label: "Hosting", value: "Cloudflare Pages" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/anja687gutierrez-jpg/bobs-stockpulse",
      },
    ],
  },
  {
    slug: "abenteuer-platform",
    title: "Abenteuer Platform",
    tagline: "SaaS marketplace with 3-role auth",
    description:
      "A multi-tenant SaaS marketplace for adventure rental companies. Features 3-role authentication (admin, owner, customer), Stripe integration, and 3D hero elements.",
    tech: [
      "Next.js 15",
      "React 19",
      "Supabase",
      "Drizzle ORM",
      "Stripe",
      "Three.js",
    ],
    stats: [
      { label: "Auth Roles", value: "3" },
      { label: "Type", value: "SaaS Marketplace" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/anja687gutierrez-jpg/abenteuer-mieten-platform",
      },
    ],
  },
  {
    slug: "abenteuer-live",
    title: "Abenteuer LIVE + GIW",
    tagline: "Dual-brand marketing sites from one monorepo",
    description:
      "Bilingual (EN/DE) marketing sites for an EV campervan rental startup. Runtime language switching, lead capture via Google Apps Script, optimized Core Web Vitals. Two CF Pages projects from one monorepo, deployed via GitHub Actions.",
    tech: [
      "React 19",
      "Vite 6",
      "TypeScript",
      "SSG",
      "Cloudflare Pages",
      "GitHub Actions",
    ],
    stats: [
      { label: "Sites", value: "2" },
      { label: "Languages", value: "EN + DE" },
    ],
    links: [
      {
        label: "Live Site",
        url: "https://abenteuer-mieten.pages.dev",
      },
    ],
  },
  {
    slug: "elody",
    title: "Elody",
    tagline: "Personal AI knowledge agent with 20 MCP tools",
    description:
      "Custom knowledge agent with natural language search over a knowledge graph, code search, Chrome bookmark indexing, two-way SMS with auto-reply, session persistence, and git commit tracking across all repos. Includes an autonomous loop engine with plan generation and circuit breaker.",
    tech: [
      "Node.js",
      "Gemini 2.5 Flash",
      "Ollama",
      "MCP SDK",
      "Ink TUI",
    ],
    stats: [
      { label: "MCP Tools", value: "20" },
      { label: "Knowledge Nodes", value: "110+" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/anja687gutierrez-jpg/elody",
      },
    ],
  },
  {
    slug: "magnusview",
    title: "MagnusView",
    tagline: "Production Firebase CDN app",
    description:
      "A Drive-based content delivery application deployed on Firebase Hosting with real-time data sync and responsive design.",
    tech: ["React 18", "Firebase", "Tailwind CSS"],
    stats: [
      { label: "Type", value: "CDN App" },
      { label: "Hosting", value: "Firebase" },
    ],
    links: [],
  },
  {
    slug: "thought-graph",
    title: "Thought Graph",
    tagline: "3D knowledge visualization with 100+ nodes",
    description:
      "Interactive 3D knowledge graph with 101 nodes, 403 wikilinks, and 3 topology modes (force-directed, radial, hierarchical). Auto-refreshes from a live knowledge base. Deployed on Cloudflare Pages.",
    tech: [
      "Vanilla JS",
      "3d-force-graph",
      "Three.js",
      "Cloudflare Pages",
    ],
    stats: [
      { label: "Nodes", value: "101" },
      { label: "Wikilinks", value: "403" },
      { label: "Topology Modes", value: "3" },
    ],
    links: [],
  },
  {
    slug: "chrono",
    title: "Chrono",
    tagline: "Dev CLI with semantic session search",
    description:
      "A developer toolkit with Chrono Trigger-inspired time mechanics. Provides semantic search over 57+ indexed coding sessions using ChromaDB, session bookmarking, and era-based filtering.",
    tech: ["Python", "ChromaDB", "Ollama", "CLI"],
    stats: [
      { label: "Sessions Indexed", value: "57+" },
      { label: "Chunks", value: "860+" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/anja687gutierrez-jpg/chrono-open",
      },
    ],
  },
];

// --- XPO Fleet Case Study Data ---

export const xpoStats: CaseStudyStat[] = [
  { label: "Pages Built", value: "23", icon: LayoutDashboard },
  { label: "Source Files", value: "114", icon: Code2 },
  { label: "Lines of Code", value: "29,000+", icon: Layers },
  { label: "TypeScript Errors", value: "0", icon: Shield },
  { label: "Entity Types", value: "21", icon: Database },
  { label: "Research Docs", value: "10", icon: FileSearch },
  { label: "Research Lines", value: "10,647", icon: LineChart },
  { label: "Data Exports Analyzed", value: "16", icon: Lightbulb },
];

export const researchDocs: ResearchDoc[] = [
  {
    name: "Domain Research",
    lines: "1,102",
    desc: "Fleet management industry, EBAI/Accelevate analysis, competitor evaluation, market sizing",
  },
  {
    name: "UX Patterns",
    lines: "806",
    desc: "Dashboard UX research, chart patterns, AI assistant interaction design, design system specifications",
  },
  {
    name: "Data Model",
    lines: "3,194",
    desc: "21 TypeScript entity definitions, entity relationships, example data structures, validation rules",
  },
  {
    name: "Design Brief",
    lines: "214",
    desc: "Color system, typography, layout grid, component inventory, dark mode strategy",
  },
  {
    name: "shadcn/ui Reference",
    lines: "1,673",
    desc: "Component API research, chart system, DataTable patterns, Sidebar architecture",
  },
  {
    name: "Animation Patterns",
    lines: "940",
    desc: "p5.js instance mode, CSS skeletons, loading states, generative AI visualization concepts",
  },
  {
    name: "Mapping Reference",
    lines: "985",
    desc: "react-map-gl + MapLibre, fleet map UX, geofence rendering, real-time marker updates",
  },
  {
    name: "Next.js Patterns",
    lines: "1,259",
    desc: "App Router architecture, Server/Client Components, data fetching, multi-tenant patterns",
  },
  {
    name: "EBAI Screenshot Analysis",
    lines: "343",
    desc: "47 screenshots from live EBAI platform, page-by-page breakdown, design pattern extraction",
  },
];

export const dataExports: string[] = [
  "Baseline fleet data (trips, hours, fuel, miles)",
  "Violation events (356 events, 4 categories)",
  "Vehicle faults (1,366 faults across 19 vehicles)",
  "Utilization heatmap (24x7 hourly grid)",
  "Fuel transactions and cost breakdowns",
  "Zone visits and dwell time analysis",
  "Mileage reports by vehicle",
  "Idling sessions and duration",
  "Anomaly detection results",
  "Right-size operations recommendations",
  "Route performance data",
  "Passenger counter data",
  "Camera event logs",
  "All recommended assets inventory",
  "EBAI AI assistant response samples",
  "Dwell time analysis by zone",
];

export const originalFeatures: OriginalFeature[] = [
  {
    title: "Risk Management Center",
    icon: Shield,
    desc: "6-tier compliance expiration tracking (90/60/30/7-day alerts) across vehicle documents, driver documents, and enterprise documents. Not available in EBAI or competing platforms.",
  },
  {
    title: "Service Programs Engine",
    icon: Wrench,
    desc: "Vehicle-type-specific PM schedules with 59 service items at mileage/time intervals derived from real maintenance data. Covers E-450 (Gas/CNG/EV) and Freightliner M2-106 Diesel.",
  },
  {
    title: "Digital Inspections",
    icon: FileSearch,
    desc: "Pre-Trip (38 items) + CHP 45-Day (48 items with 381 failure mode dropdowns) — digitized from actual paper forms and CHP 34505 CVC requirements.",
  },
];

export const xpoTechStack: [string, string][] = [
  ["Framework", "Next.js 15 (App Router)"],
  ["UI Library", "React 19 + shadcn/ui"],
  ["Styling", "Tailwind CSS 4"],
  ["Charts", "Recharts (6 chart types)"],
  ["Language", "TypeScript (strict mode)"],
  ["Data Layer", "Typed mock data (API-swap ready)"],
];

export const xpoMethodology = [
  {
    phase: "Phase 0: Research & Knowledge Building",
    desc: "Analyzed 84 screenshots from the live EBAI platform, processed 16 real fleet data exports, and produced 10 research documents (10,647 lines) covering domain analysis, UX patterns, data modeling, technology selection, and competitor evaluation.",
  },
  {
    phase: "Phase 1-2: Architecture & Data Layer",
    desc: "Designed 15 TypeScript entity types from scratch based on real fleet operational patterns. Generated mock data for 32 vehicles, 55 drivers, 4 PM programs, and 22 LAX-area zones — all matching actual telematics data distributions.",
  },
  {
    phase: "Phase 3-10: Implementation & Polish",
    desc: "Built 23 pages across 7 functional areas with 24 UI components, 6 custom chart types, a compliance engine, PM alert system, and dark-first design system. Zero TypeScript errors across the entire codebase.",
  },
];

// --- Tour Route Planner Case Study Data ---

export const tourFeatures = [
  "Interactive map with route visualization",
  "Drag-and-drop itinerary management",
  "Route optimization algorithm",
  "Voice assistant for hands-free use",
  "Firebase real-time data sync",
  "Responsive mobile-first design",
];

export const tourTechDetails: [string, string][] = [
  ["Framework", "React 18 with Vite"],
  ["Language", "TypeScript"],
  ["Backend", "Firebase (Auth, Firestore)"],
  ["Maps", "Leaflet + OpenStreetMap"],
  ["Hosting", "Cloudflare Pages"],
  ["Source Files", "164 files"],
];
