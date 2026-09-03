# Anja Gutierrez Portfolio

## Overview
Two surfaces, one content source:
1. **`anja-portfolio.pages.dev`** — static site: landing page + 8 case studies.
2. **`README.md`** — the GitHub-facing portfolio, rendered on the public repo page.

Both are edited together. Screenshots in `screenshots/` are shared by both.

## Stack
Static HTML + Tailwind CDN + one hand-written stylesheet. **No build step**, no framework,
no dependencies to install. (The Next.js app that used to live here was removed in `e9ce207`
on 2026-05-11 — do not restore it.)

- `assets/site.css` — design tokens (dark-first, carried over from the XPO Fleet oklch palette)
  and every component class. Edit here, not inline.
- Syntax highlighting: highlight.js from cdnjs, `github-dark` theme.

## Structure
```
index.html              # landing page
projects/<slug>.html    # 8 case studies
assets/site.css         # tokens + components
screenshots/            # shared by the site and README.md
_headers                # CF Pages security + cache headers
```

## The rule that shapes this repo
**Most of the source repositories are private.** So the portfolio never links to a repo it
can't guarantee is public — it proves the work with screenshots, metrics, and **annotated code
snippets pulled from the real codebase** and embedded in each case study.

Only three repos are public: `narrator`, `chrono-open`, `anja-portfolio`. Do not link any other.

Before adding a snippet, check it for: Google Sheet IDs/GIDs, `LASTAP-` credentials, API keys,
tokens, account IDs, EIN, and real customer/campaign/lead data. Prefer pure logic (engines,
reducers, validators) over config and integration glue.

Do **not** link `ops-hub-mobile.pages.dev` (production, real campaign data on a world-readable
Sheet) or `thought-graph.pages.dev` (deliberately taken down — never revive it).

## Deploy
Direct-upload CF Pages project (`Git Provider: No`) — **a git push does not deploy.**
```bash
cd ~/Projects/anja-portfolio && CLOUDFLARE_ACCOUNT_ID=f10d50f11f9e1cc7dc6df9274c2a520c \
  npx wrangler pages deploy . --project-name=anja-portfolio --branch=main
```
Verify by **content, not status code** — unmatched routes fall back to `index.html` with a 200.
Check each page's `<title>`, and bust cache with `?cb=$(date +%s)`.

## Local preview
```bash
python3 -m http.server 3004
```
