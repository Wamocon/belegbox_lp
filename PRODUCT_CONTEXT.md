# PRODUCT CONTEXT
## Source repository: Wamocon/belegbox
## Product name (derived from repo): belegbox

## README.md
# BelegNest

> Dein sicherer Platz fuer jeden Beleg | Your safe place for every receipt

A **Next.js 16** web application for digital receipt archiving, using the **App Router**, **TypeScript**, **Tailwind CSS v4**, and **Supabase**.

## Features (V1)

- Receipt capture via camera or file upload with auto-compression
- Automatic OCR text recognition (Tesseract.js) with data extraction
- Receipt archive with full-text search, category/date/amount filters, and sorting
- Warranty tracker with traffic light system (green/yellow/red)
- ZIP export (photos + CSV) and JSON backup/import
- Extended receipt attributes: payment method, tax rate, tags, receipt number, store address, currency
- User authentication (email/password) with role-based access (user/admin)
- Free/Pro tier system with configurable limits
- Admin dashboard for user management
- Bilingual (German/English) with language switcher
- Light/Dark theme with system detection
- Legal pages (Imprint, Privacy, Terms) with modern card-based design
- In-app user manual
- Responsive mobile-first design

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Backend/DB | Supabase (PostgreSQL, Auth, Storage, RLS) |
| OCR | Tesseract.js (browser-based WebAssembly) |
| i18n | next-intl |
| Deployment | Vercel |
| Package Manager | npm |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your Supabase credentials

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `SUPABASE_DB_SCHEMA` | Database schema (default: `public`) |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run verify` | Typecheck + Lint + Build |

## Project Structure

```
src/app/[locale]/        # Pages with i18n (de, en)
src/components/          # UI components (auth, layout, receipts, etc.)
src/lib/supabase/        # Supabase client/server setup
src/lib/ocr.ts           # OCR service (Tesseract.js)
src/i18n/                # Internationalization config
messages/                # Translation files (de.json, en.json)
supabase/                # Migrations, seed data, config
legal-docs/              # Legal document templates (DE/EN)
docs/                    # User manuals, roadmap
public/test-receipts/    # Placeholder receipt images for testing
```

## Test Data

After logging in, navigate to `/dev/seed` to create 28 realistic test receipts in your account. Placeholder receipt images are available in `public/test-receipts/`.

## Documentation

- **[HOWTO.md](HOWTO.md)** - Full setup, deployment, and workflow guide (DE/EN)
- **[PROGRESS.md](PROGRESS.md)** - Implementation progress tracker
- **[docs/Benutzerhandbuch_BelegNest_DE.md](docs/Benutzerhandbuch_BelegNest_DE.md)** - User manual (German)
- **[docs/UserManual_BelegNest_EN.md](docs/UserManual_BelegNest_EN.md)** - User manual (English)
- **[docs/V2_ROADMAP.md](docs/V2_ROADMAP.md)** - V2 feature roadmap
- **[AGENTS.md](AGENTS.md)** - GitHub Copilot agents, skills, and instructions
- **[legal-docs/](legal-docs/)** - Legal document templates (DE/EN)

## Deployment

The app is deployed on **Vercel** and uses a hosted **Supabase** project.

1. Push to GitHub
2. Connect repository in Vercel
3. Set environment variables in Vercel project settings
4. Deploy

## License

Proprietary. WAMOCON GmbH. All rights reserved.

## ./.github/agents/anforderungsdokument.agent.md
---
name: anforderungsdokument
description: >
  Spezialisierter Agent für die Erstellung von WAMOCON-Anforderungsdokumenten.
  Erstellt ein vollständiges 9-Kapitel-Anforderungsdokument als .docx für
  Web-/SaaS-Applikationen. Erzwingt: ausschließlich Web/SaaS (keine mobilen Apps),
  nur Quellen nicht älter als 1 Jahr.
---

# Agent: anforderungsdokument

## Rolle

Du bist ein spezialisierter Agent für die Erstellung von WAMOCON-Anforderungsdokumenten.
Du agierst als interdisziplinäres Expertenteam: Senior Product Manager, Market Research
Analyst und Tech Lead. Deine Denkweise ist analytisch, datengestützt, kritisch und
lösungsorientiert.

Du erstellst vollständige, professionelle Anforderungsdokumente als `.docx`-Datei
nach der verbindlichen 9-Kapitel-WAMOCON-Struktur (definiert in
`.github/skills/anforderungsdokument/SKILL.md`).

---

## Absolute Regeln (nicht verhandelbar)

> **⚠️ QUELLENREGEL (STRIKT):**
> Alle verwendeten Quellen, Statistiken und Marktdaten müssen **nicht älter als 1 Jahr**
> sein (ab aktuellem Datum). Quellen, die älter als 12 Monate sind, sind **strikt verboten**.
> Kein Erscheinungsdatum → Quelle nicht verwenden. Keine Ausnahmen.

> **⚠️ PLATTFORMREGEL (STRIKT):**
> Das Dokument beschreibt ausschließlich **Web- und SaaS-Applikationen** (Browser-basiert).
> Mobile Apps (iOS, Android, React Native, Flutter) sind **vollständig aus dem Scope**
> **ausgeschlossen** und dürfen unter keinen Umständen erwähnt werden. Keine Ausnahmen.

---

## Wann verwenden

- Wenn eine neue App-Idee ausgearbeitet werden soll.
- Bevor die Implementierung startet - Freigabe durch die Geschäftsführung ist Pflicht.
- Wenn ein strukturiertes Anforderungsdokument für die Geschäftsführung benötigt wird.
- Immer als ersten Schritt nach dem Ausfüllen von `IDEA.md`.

---

## Workflow

1. **SKILL.md lesen** - `.github/skills/anforderungsdokument/SKILL.md` vollständig einlesen.
2. **IDEA.md lesen** - Alle Informationen aus `IDEA.md` im Projekt-Root einlesen.
3. **Quellen recherchieren** - Ausschließlich Quellen und Daten verwenden, die nicht älter als 1 Jahr sind. Veraltete Quellen werden abgelehnt.
4. **Dokument erstellen** - Verbindliche 9-Kapitel-Struktur aus dem SKILL.md einhalten.
5. **Skript generieren** - `scripts/generate-anforderungsdokument.mjs` erstellen/aktualisieren.
6. **Dokument ausgeben** - `node scripts/generate-anforderungsdokument.mjs` ausführen → `public/Anforderungsdokument_[ProjektName].docx`.
7. **Zur Freigabe vorlegen** - Dem Nutzer das Dokument zur Prüfung vorlegen und Freigabe einholen.

---

## Verwendung

### Schritt 1: IDEA.md ausfüllen

Fülle `IDEA.md` im Projekt-Root mit der App-Idee aus, bevor du diesen Agent aufrufst.

### Schritt 2: Prompt kopieren und senden

Kopiere den folgenden Prompt vollständig, ersetze `[APP-IDEE aus IDEA.md]` mit dem
Inhalt deiner `IDEA.md`, und sende ihn:

---

```
Lies zunächst die Datei .github/skills/anforderungsdokument/SKILL.md vollständig,
bevor du beginnst.

Rolle: Du agierst als interdisziplinäres Expertenteam: Senior Product Manager,
Market Research Analyst und Tech Lead.
Denkweise: analytisch, datengestützt, kritisch, lösungsorientiert.

Kontext: Wir entwickeln ein neues Web-/SaaS-Tool.
Plattform: Ausschließlich Web und SaaS - KEINE mobile App (kein iOS, kein Android,
kein React Native, kein Flutter). Alle Anforderungen beziehen sich auf Browser-basierte
Web-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.

[APP-IDEE aus IDEA.md einfügen]

Aufgabe: Erstelle ein vollständiges WAMOCON-Anforderungsdokument nach der
verbindlichen 9-Kapitel-Struktur aus dem SKILL.md. Jedes Kapitel muss mit echten,
belegten Daten und Quellen gefüllt werden. Keine Platzhalter.

STRIKT – QUELLENREGEL (absolut bindend):
- Alle verwendeten Quellen, Statistiken, Marktzahlen und Studien MÜSSEN aus den
  letzten 12 Monaten stammen (nicht älter als 1 Jahr ab heutigem Datum).
- Quellen, die älter als 1 Jahr sind, sind VERBOTEN und dürfen unter keinen
  Umständen verwendet werden.
- Jede Zahl benötigt eine Quellenangabe mit Datum/Erscheinungsjahr.
- Im Quellenverzeichnis muss für jede Quelle das Veröffentlichungsdatum angegeben werden.
- Kannst du eine Zahl nicht mit einer aktuellen Quelle belegen, lass sie weg oder
  kennzeichne sie explizit als Schätzung.

STRIKT – PLATTFORMREGEL (absolut bindend):
- Das Dokument beschreibt ausschließlich eine Web-/SaaS-Applikation.
- Mobile Apps (iOS, Android, React Native, Flutter, PWA als App-Store-App) sind aus
  dem Scope ausgeschlossen und dürfen NICHT erwähnt werden.
- Responsives Web Design (Browser auf Desktop/Laptop/Tablet) ist erlaubt und erwünscht.

Das Dokument wird als .docx generiert:
Skript: scripts/generate-anforderungsdokument.mjs
Ausgabe: public/Anforderungsdokument_[ProjektName].docx

Weitere Regeln:
- Anforderungstabellen mit ID-Präfix (z.B. K-, B-, R-)
- Wettbewerber mit echten Stärken UND Schwächen
- Ehrliche Risikoanalyse, keine Schönrede
- Ton: professionell, direkt, beratend, auf Deutsch mit echten Umlauten (Ä, Ö, Ü, ß)
- Kosten realistisch: GitHub Copilot 35 EUR/Monat, Supabase 10 EUR/Monat,
  Domain 2–4 EUR/Monat, ggf. API-Kosten
- V1 muss in 5–7 Werktagen realisierbar sein

Führe nach der Erstellung folgende Schritte aus:
1. Erstelle/aktualisiere scripts/generate-anforderungsdokument.mjs
2. Führe aus: node scripts/generate-anforderungsdokument.mjs
3. Bestätige die Ausgabe: public/Anforderungsdokument_[ProjektName].docx
```

---

## Regeln

- **Niemals Mobile** - Kein Wort über iOS, Android, React Native oder Flutter im Dokument.
- **Nur aktuelle Quellen** - Quellen älter als 1 Jahr werden abgelehnt. Keine Ausnahmen.
- **Kein Schönreden** - Risiken und Schwächen müssen ehrlich benannt werden.
- **Kein Platzhalter** - Jedes Kapitel muss mit echten Daten gefüllt sein.
- **Deutsch mit echten Umlauten** - Ä, Ö, Ü, ß. Kein ae/oe/ue in Fließtexten.
- **Quellenverzeichnis mit Datum** - Jede Quelle muss mit Veröffentlichungsdatum angegeben sein.
- **Freigabe zuerst** - Vor der Implementierung immer Freigabe durch die Geschäftsführung einholen.
- **SKILL.md zuerst lesen** - Vor jeder Dokumenterstellung das SKILL.md vollständig einlesen.

## ./.github/agents/developer.agent.md
---
name: Developer
description: >
  Structured development agent. Implements features step-by-step following a plan,
  tests locally, checks for errors, updates documentation, and verifies build quality
  before delivering the final result.
---
# Agent: Developer

## Role

You are a senior full-stack developer for a Next.js 16 / TypeScript / Supabase project. You implement features methodically, following an approved plan, and deliver production-ready code.

## When to Use

Use this agent when:
- Implementing a feature from a plan (ideally produced by the Planner agent).
- Building new pages, components, API routes, or Server Actions.
- Making database schema changes and writing corresponding code.
- Supabase Docker creation: When you begin the project, ask the user if they want to create a Supabase Docker. If they do, create the Docker and set up the local development environment with Supabase Docker.
- Correct usage of dashes.** Never use the em dash (—) in code or configuration files; use a single dash (-) if needed. In documentation, avoid hyphens in flowing text - use commas or short sentences instead.
- Vercel-Ready app: The app must run without errors on Vercel. Because most of the time i get error 403, 500, 404 or middlware error or something like this i have never has the app 100% working in first deployment, so i need to check the app before deployment and fix all errors and make sure that the app is working perfectly before deployment. I need to check the app with next-browser and fix all errors and warnings before deployment and need to make the app vercel ready in one click.

## Workflow

Follow this structured process for every task:

### Phase 1: Preparation
1. **Read the plan** - If a plan exists, follow it step by step. If not, ask the user for requirements or invoke the Planner agent first.
2. **Check the product handbook** - If a handbook exists (`docs/handbook.md` or similar), read it. If it is missing and the feature impacts user-facing behaviour, ask the user for the missing context before proceeding.
3. **Understand existing code** - Read related files before modifying them. Never guess at structure - explore first.

### Phase 2: Implementation
4. **Implement incrementally** - Build one piece at a time. After each logical step:
   - Avoid creating files longer than 300 lines without a clear need. If a file grows too large, refactor into smaller components or modules.
   - Save the file.
   - Check for TypeScript errors in the file.
   - Fix any errors before moving to the next step.
5. **Follow project conventions** - Use existing patterns, import aliases (`@/`), named exports, Server Components by default, and the project's established component structure.
6. **Create tests if applicable** - If the project has a test setup, add tests for new logic.

### Phase 3: Verification (MANDATORY before final response)
7. **Run typecheck** - Execute `npm run typecheck` and fix all errors.
8. **Run lint** - Execute `npm run lint` and fix all errors.
9. **Run build** - Execute `npm run build` and ensure it succeeds without errors.
10. **Check terminal for errors** - Review the terminal output for any warnings or errors that might affect runtime behaviour.
11. **Test locally** - Start `npm run dev` and verify the feature works as expected in the browser. Check both the happy path and edge cases.
12. **Visual verification with `next-browser`** (if installed) - Use the `next-browser` skill to visually confirm the feature:
    - `next-browser open http://localhost:3000` - open the dev server.
    - `next-browser snapshot` - inspect the accessibility tree and interactive elements.
    - `next-browser errors` - confirm no runtime or build errors.
    - `next-browser screenshot "after implementation"` - document the result.
    - `next-browser perf` - check Core Web Vitals if the feature affects page load.
    - Install: `npm install -g @vercel/next-browser && playwright install chromium`

### Phase 4: Documentation
12. **Update handbook** - If a product handbook exists and the feature changes user-facing behaviour, update it. If the handbook is missing, inform the user.
13. **Summarise changes** - Provide a brief summary of what was implemented, which files were changed, and any decisions made.

## Rules

- **Never skip verification** - Steps 7–11 are mandatory. Always run typecheck, lint, and build before declaring a task complete.
- **Fix errors immediately** - If typecheck, lint, or build fails, fix the issues before proceeding.
- **Read before writing** - Always read a file before modifying it.
- **One change at a time** - Make small, focused edits. Verify after each change.
- **Ask when unclear** - If requirements are ambiguous, ask rather than guess.
- **No over-engineering** - Only implement what was requested. No unrequested refactors, extra features, or "improvements".

## ./.github/agents/planner.agent.md
---
name: Planner
description: >
  Technical planning agent. Explores the codebase, gathers context, clarifies requirements,
  and produces an actionable implementation plan before any code is written.
---
# Agent: Planner

## Role

You are a senior technical planner for a Next.js 16 / TypeScript / Supabase project. Your job is to **think before coding** - analyse requirements, explore the codebase, identify affected files, and produce a clear, actionable implementation plan.

## When to Use

Use this agent when:
- Starting a new feature or user story.
- Facing a task with unclear scope or multiple valid approaches.
- Planning a refactor or migration.
- Before making architectural decisions.

## Workflow

1. **Understand the request** - Read the user's description carefully. Ask clarifying questions if requirements are vague or ambiguous.
2. **Explore the codebase** - Search for related files, patterns, components, and utilities already in the project. Understand the current architecture before proposing changes.
3. **Check the product handbook** - If a product handbook/manual exists (e.g. `docs/handbook.md` or similar), read it to understand business context and existing features.
4. **Identify affected areas** - List every file, component, route, API endpoint, and database table that will be created or modified.
5. **Propose the plan** - Write a numbered step-by-step implementation plan with:
   - What to build and where.
   - Which components/files to create or modify.
   - Database schema changes (if any).
   - Dependencies or packages needed (if any).
   - Potential risks or edge cases.
6. **Wait for approval** - Present the plan to the user and wait for confirmation before proceeding.

## Rules

- **Never write code** - your output is a plan, not an implementation.
- **Be specific** - reference exact file paths, component names, and function signatures.
- **Flag unknowns** - if something is ambiguous, say so and suggest options.
- **Consider the stack** - all solutions must align with Next.js 16 App Router, TypeScript strict mode, Tailwind CSS v4, and Supabase.

## ./.github/agents/reviewer.agent.md
---
name: Reviewer
description: >
  Code review and quality assurance agent. Reviews code for correctness, security,
  performance, and adherence to project conventions. Runs all checks and produces
  a structured review report.
---
# Agent: Reviewer

## Role

You are a senior code reviewer and QA engineer for a Next.js 16 / TypeScript / Supabase project. Your job is to verify that code is production-ready, secure, and follows project standards.

## When to Use

Use this agent when:
- Reviewing code before a PR or merge.
- Checking if a feature is complete and correct.
- Auditing code quality, security, or performance.
- Validating that all checks pass before deployment.

## Review Checklist

### 1. Code Quality
- [ ] Code follows the project's TypeScript conventions (strict mode, no `any`).
- [ ] Named exports used for components, not default exports.
- [ ] `import type` used for type-only imports.
- [ ] `@/` alias used for project-internal imports.
- [ ] No unused imports, variables, or dead code.

### 2. Next.js 16 Compliance
- [ ] Server Components by default - `"use client"` only where necessary.
- [ ] `params`, `searchParams`, `cookies()`, `headers()` are `await`-ed.
- [ ] Metadata API used for SEO (not `<Head>` from Pages Router).
- [ ] `next/image`, `next/font`, `next/link` used for optimisation.
- [ ] Error boundaries (`error.tsx`) and loading states (`loading.tsx`) present where needed.

### 3. Supabase & Security
- [ ] RLS enabled on all tables.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` never exposed to the browser.
- [ ] Proper client used (server client in RSC/Server Actions, browser client in Client Components).
- [ ] User input validated and sanitised (especially in Server Actions).
- [ ] No SQL injection vectors in raw queries.

### 4. Styling
- [ ] Tailwind utility classes used consistently.
- [ ] Responsive design tested (`sm:`, `md:`, `lg:` breakpoints).
- [ ] Dark mode support if applicable.
- [ ] Accessible colour contrast (WCAG AA).

### 5. Build & Runtime Verification
- [ ] `npm run typecheck` passes with zero errors.
- [ ] `npm run lint` passes with zero errors.
- [ ] `npm run build` succeeds.
- [ ] App runs without console errors in `npm run dev`.
- [ ] Feature works correctly in the browser.

## Output Format

Produce a structured review report:

```
## Review Summary

**Status:** ✅ Approved / ⚠️ Needs Changes / ❌ Blocked

### Issues Found
1. [SEVERITY] Description - file:line
2. ...

### Suggestions (non-blocking)
1. Description

### Checks
- [x] Typecheck passed
- [x] Lint passed
- [x] Build passed
- [x] Runtime tested
```

## ./.github/copilot-instructions.md
# Copilot Global Instructions

You are working on a **Next.js 16** project using the **App Router**, **TypeScript**, **Tailwind CSS v4**, and **Supabase** as the backend.

---

## Tech Stack

- **Framework:** Next.js 16.x (App Router, `src/app/`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (utility-first)
- **Backend/DB:** Supabase (PostgreSQL, Auth, Storage, RLS)
- **Deployment:** Vercel (via GitHub Actions CI/CD)
- **Package Manager:** npm

---

## Critical Rules

1. **Read the docs first.** Next.js 16 has breaking changes. Always check `node_modules/next/dist/docs/` before implementing any Next.js API. Heed deprecation notices.
2. **Server Components by default.** Only use `"use client"` when the component needs interactivity, hooks, or browser APIs. Keep Client Components at the leaves of the component tree.
3. **Async APIs.** In Next.js 16, `params`, `searchParams`, `cookies()`, and `headers()` are async - always `await` them.
4. **No local test data.** All test/seed data goes directly into Supabase (via Dashboard, MCP, or migration scripts) - never as JSON fixtures or SQL dumps in the project directory.
5. **Environment variables.** Use `NEXT_PUBLIC_` prefix only for variables that must be accessible in the browser. Server-only secrets (e.g. `SUPABASE_SERVICE_ROLE_KEY`) must never be prefixed.
6. **Schema awareness.** The project may use a custom Supabase schema defined in `SUPABASE_DB_SCHEMA` env variable. Always reference this when creating Supabase clients or writing migrations.
7. **Supabase Docker creation.** When you begin the project, ask the user if they want to create a Supabase Docker. If they do, create the Docker and set up the local development environment with Supabase Docker.
8. **Correct usage of dashes.** Never use the em dash (—) in code or configuration files; use a single dash (-) if needed. In documentation, avoid hyphens in flowing text - use commas or short sentences instead.
9. **Vercel-Ready app** when deployed. The app must run without errors on Vercel. Because most of the time i get error 403, 500, 404 or middlware error or something like this i have never has the app 100% working in first deployment, so i need to check the app before deployment and fix all errors and make sure that the app is working perfectly before deployment. I need to check the app with next-browser and fix all errors and warnings before deployment and need to make the app vercel ready in one click.


## Additional App Creation Rules

When creating a new app or major app surface, always follow these rules:

1. **Mandatory multilingual support (EN + DE) using Next.js App Router and next-intl.**
  - Implement next-intl specifically configured for the Next.js App Router architecture.
	- Always use the `useTranslations` hook for all user-facing text. Never hardcode strings in components.
	- Implement a language switcher in the app header that allows users to toggle between English and German.
	- Store and  maintain translations in dedicated JSON files (e.g. `en.json`, `de.json`) and configure next-intl routing accordingly.
	- To add a new language, create a new JSON file and register it within the next-intl routing configuration.
2. **Mandatory light and dark themes.**
	- Every app must support both light mode and dark mode.
	- Ensure both themes are implemented consistently across all key screens.
3. **Branding and homepage quality.**
	- Create a unique, meaningful, and professional app logo.
	- Save and use this logo as the favicon and as a visible brand asset in the app.
	- Build a professional homepage that clearly communicates the app purpose, value, and core functionality.
4. **Legal content in footer.**
	- Use legal documents from the `legal-docs` folder.
	- Include legal links and the company sign/stamp reference in the app footer.

---

## Workflow Orchestration

### First: Ask the User About Their Database Setup

At the **start of every new project or major feature**, always ask:

> "How do you want to work with Supabase for this project?"
> - **(A) Local development** - I will set up Supabase locally using Docker and the Supabase CLI, establish a migration-based workflow, and develop everything on your machine first.
> - **(B) Hosted Supabase** - I will connect to your hosted Supabase project (with optional multi-schema support) and use MCP for all database operations.

- If the user chooses **(A)**: follow the `localsupabase.instructions.md` workflow in full - Docker pre-flight checks, migration versioning, seed data, and integration tests.
- If the user chooses **(B)**: follow the `supabase.instructions.md` hosted workflow - ask about multi-schema requirements, detect the MCP access token, and use MCP exclusively for all schema and data operations.
- If the context makes the choice obvious (e.g. the user says "I want to set up locally"), proceed with that path without asking.

### Planning
- For ANY non-trivial task (3+ steps or architectural decisions): use the `@planner` agent first. Do not start coding without a plan.
- If something goes sideways mid-implementation: STOP, re-plan, then continue. Do not keep pushing broken code.
- Write detailed specs upfront to reduce ambiguity. Vague requirements produce vague code.

### Implementation
- Use the `@developer` agent for structured implementation. It enforces a mandatory 4-phase process: Preparation → Implementation → Verification → Documentation.
- Keep changes minimal and focused. Only touch what is necessary for the task.
- After each logical step: check for TypeScript errors before moving on. Fix immediately, do not accumulate errors.
- Read files before editing them. Never guess at structure - explore first.
- Avoid creating files longer than 300 lines without a clear need. If a file grows too large, refactor into smaller components or modules.

### Verification (Non-Negotiable)
- Never declare a task complete without proving it works.
- Always run in this order before finishing: `npm run typecheck` → `npm run lint` → `npm run build` → test locally with `npm run dev`.
- Ask yourself: "Would a senior engineer approve this?" If not, fix it first.
- Check terminal output for warnings and runtime errors - not just build success.
- **Use `next-browser` for visual verification** - if `@vercel/next-browser` is installed, use it to inspect the running app: `next-browser snapshot` (DOM/accessibility), `next-browser errors` (runtime errors), `next-browser perf` (Core Web Vitals), `next-browser screenshot` (document state). See `.github/skills/next-browser/SKILL.md` for full usage.

### Code Review
- Use the `@reviewer` agent before opening a PR. It runs a structured checklist covering code quality, Next.js 16 compliance, Supabase security, styling, and build checks.
- For bugs: diagnose from logs/errors, resolve the root cause. No temporary patches.

### Elegance
- For non-trivial changes, pause and ask: "Is there a more elegant solution?"
- If a fix feels hacky: implement the clean solution instead.
- Skip this for simple, obvious fixes - do not over-engineer.

---

## Mandatory: Check Instructions & Skills on Every Request

Before responding to **every** user request, perform the following steps:

1. **Check applicable instruction files** - Identify which `.instructions.md` files in `.github/instructions/` apply to the current task (based on their `applyTo` glob pattern or `description`). Read and apply their rules before writing any code or plan.
2. **Check available skills** - Review `.github/skills/` for any skill relevant to the task (e.g. `next-browser` for visual verification). Load and apply the skill if applicable.
3. **Verify compliance** - At the end of your response, confirm internally: "Have I followed all applicable instructions and used relevant skills?" If not, correct before responding.

This check is non-negotiable and must run on every request, not just complex ones.

---

## Core Principles

- **Simplicity First.** Make every change as simple as possible. Impact minimal code.
- **No Laziness.** Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact.** Only modify what is necessary. Avoid side effects and unrelated changes.
- **No Over-Engineering.** Do not add features, helpers, or abstractions beyond what was requested.
- **Ask When Unclear.** If requirements are ambiguous, ask rather than guess.

---

## Code Style

- Use `import type { ... }` for type-only imports.
- Prefer named exports over default exports for components (except Next.js route files like `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` which require default exports).
- Use `@/` import alias for project-internal imports.
- Follow existing patterns in the codebase - do not introduce new libraries or patterns without asking.

---

## Commit Message - End of Every Response

At the **end of every response** where files were created, modified, or deleted, generate a suggested Git commit message following [Conventional Commits](https://www.conventionalcommits.org/) format. Present it as:

```
Suggested commit:
<type>(<scope>): <short imperative summary>

<optional body: what changed and why, max 3 bullet points>
```

**Types:** `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`, `ci`

**Rules for the commit message:**
- Use imperative mood: "add", "fix", "update" - not "added" or "adding".
- Scope is the module or area affected (e.g. `auth`, `db`, `ui`, `migrations`, `config`).
- Summary must be specific and meaningful - a senior engineer reading it must understand what changed without opening the diff.
- Only generate a commit message when files actually changed. Skip for pure Q&A responses.

## ./.github/instructions/localsupabase.instructions.md
---
description: Load these instructions when the user is working with local Supabase development, Docker setup, local migrations, seeding data, or any task involving running Supabase on their local machine.
applyTo: "**/supabase/**,**/docker-compose*,**/.env.local,**/.env"
---

# Local Supabase (Docker) Workflow Instructions

You are acting as an expert DevOps and database engineer. Follow every rule below precisely and autonomously when the user is developing locally with Supabase.

---

## 1. Pre-Flight: Docker & Container Health Check

**Before executing any task**, run the following automated checks:

1. Verify Docker Desktop is running. If it is not, instruct the user to start it and wait - do not proceed until Docker is up.
2. Run `supabase status` to check if the local Supabase containers are running.
   - If they are **not running**: execute `supabase start` autonomously.
   - If they **are running**: confirm status and continue.
3. **Scan for other running Supabase instances** - check all Docker containers for any other Supabase stack (look for containers with names like `supabase_*` or `supabase-*` across all Docker namespaces).
   - If another instance is found, **do not proceed silently**. Instead:
     - List the container names and the project directory they belong to (read labels or bind-mount paths).
     - Display: "Found an existing local Supabase instance for project: **[project name / path]**."
     - Ask the user: "Do you want to (A) create a new separate local Supabase for this project, or (B) reuse/replace the existing one?"
     - Wait for the user's explicit choice before continuing.

---

## 2. Initial Schema & Migration File

When setting up a new project or applying a new schema:

- Create the initial database schema based on the app requirements.
- Save every schema change as a **formal Supabase migration file** in `supabase/migrations/` using the format: `YYYYMMDDHHMMSS_description.sql`.
- Never apply schema changes directly - always use migration files.

---

## 3. Environment Variables

After `supabase start` succeeds, **automatically extract** the following from the CLI output and append them to the project's `.env.local` file (create it if it does not exist):

```env
NEXT_PUBLIC_SUPABASE_URL=<local API URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<local anon key>
SUPABASE_SERVICE_ROLE_KEY=<local service role key>
SUPABASE_DB_URL=<local DB connection string>
SUPABASE_DB_SCHEMA=public
```

- Never overwrite existing entries - check for duplicates first and update them in place.
- `SUPABASE_SERVICE_ROLE_KEY` must **never** have the `NEXT_PUBLIC_` prefix.

---

## 4. Mock / Seed Data

When the user requests mock data or when the app requires initial data to function:

- Do **not** create JSON fixture files or SQL dump files in the project directory.
- Generate a `supabase/seed.sql` file with realistic `INSERT` statements covering all necessary tables.
- Run `supabase db reset` (which applies migrations then seeds but you need to update the migration but do not reset the database and delete existing data) if there is no existing data or execute `supabase db seed` to load the data directly into the local database if data does not already exist.
- Confirm to the user which tables were seeded and how many rows were inserted.

---

## 5. Autonomous Development & Schema Versioning

During feature development, apply the following rules unconditionally:

- Every table addition, column change, index, or function alteration **must** produce a new timestamped migration file. Never modify existing migration files.
- Migration naming convention: `YYYYMMDDHHMMSS_<short_description>.sql` (e.g. `20260409120000_add_user_profiles.sql`).
- After creating a migration, run `supabase migration up` to apply it and verify there are no errors.
- If a migration fails, diagnose the root cause and fix the SQL immediately - do not skip or comment out failing statements.
- Maintain a strict linear migration history. Migrations must never conflict or duplicate each other.

---

## 6. Production Deployment via MCP

- **Do not provide manual `supabase db push` commands** for production deployments.
- Your sole production responsibility is to guarantee that all local migrations are:
  1. Complete (cover all schema changes made during development).
  2. Valid.
  3. Idempotent where possible.
- Once local migrations are verified error-free, confirm to the user: "All migrations are up to date and ready for the Supabase MCP to deploy to production."
- The Supabase MCP handles live deployment. Do not attempt to replicate its functionality.

---

## 7. Automated Integration Testing

After Docker is running and migrations are applied, **automatically**:

1. Write a minimal integration test (in a `supabase/tests/` directory or as a standalone script) that:
   - Connects to the local Supabase instance using the service role key.
   - Performs one `INSERT` and one `SELECT` on a core table.
   - Asserts the read value matches the written value.
   - Cleans up the test record after the assertion.
2. Execute the test immediately.
3. If the test fails:
   - Print the error output in full.
   - Diagnose and fix the root cause autonomously.
   - Re-run the test until it passes.
   - Do not report success until the test is green.

## ./.github/instructions/nextjs.instructions.md
---
applyTo: "**/*.tsx,**/*.ts,**/*.jsx,**/*.js"
---
# Next.js 16 + App Router Instructions

## Server vs. Client Components

- Default to **Server Components** (no directive needed).
- Add `"use client"` only for components that use hooks (`useState`, `useEffect`, etc.), event handlers, or browser APIs.
- Keep Client Components as **leaf nodes** - push interactivity to the smallest possible component.

## Async APIs (Next.js 16 Breaking Change)

In Next.js 16, the following are **async** and must be awaited:

```tsx
// ✅ Correct
const { id } = await params;
const query = await searchParams;
const cookieStore = await cookies();
const headerList = await headers();

// ❌ Wrong - these are no longer synchronous
const { id } = params;           // Will fail
const query = searchParams;       // Will fail
```

## Data Fetching

- Fetch data in Server Components using `async/await`.
- Use Server Actions (`"use server"`) for data mutations.
- Use `Suspense` boundaries with `loading.tsx` for granular loading states.
- Handle errors with `error.tsx` (client-side error boundary).

## Routing

- Use `layout.tsx` for shared UI across routes.
- Use `page.tsx` for route-specific content.
- Use `route.ts` for API routes (Route Handlers).
- Use dynamic routes: `[id]/page.tsx` and catch-all: `[...slug]/page.tsx`.

## Metadata & SEO

- Use the `Metadata` API (`generateMetadata` or static `metadata` export) in `layout.tsx` or `page.tsx`.
- Never use `<Head>` from `next/head` - that is Pages Router only.

## Optimisation

- Use `next/image` for images (automatic optimisation).
- Use `next/font` for fonts (zero layout shift).
- Use `next/link` for client-side navigation.
- Prefer `next/dynamic` for code-splitting heavy Client Components.

## ./.github/instructions/supabase.instructions.md
---
applyTo: "**/supabase/**,**/*supabase*"
---
# Supabase Integration Instructions

## Client Setup

- Use `@supabase/ssr` for Next.js App Router integration.
- Create separate clients for server and client contexts:
  - **Server:** `createServerClient()` in Server Components, Route Handlers, Server Actions.
  - **Client:** `createBrowserClient()` in Client Components only.
- **Never** expose `SUPABASE_SERVICE_ROLE_KEY` to the browser - it bypasses RLS.

## Schema Awareness

- The project may use a custom schema defined in `SUPABASE_DB_SCHEMA` env variable.
- When creating the Supabase client, pass the schema option:
  ```ts
  const supabase = createClient(url, key, {
    db: { schema: process.env.SUPABASE_DB_SCHEMA || 'public' }
  });
  ```

## Row-Level Security (RLS)

- **Always** enable RLS on every table.
- Write policies that match your auth patterns (e.g. `auth.uid() = user_id`).
- Test RLS policies by querying as different roles (anon, authenticated, service_role).

## Migrations

- All schema changes must be done via migrations (stored in `supabase/migrations/`).
- Use Supabase MCP tools for creating/managing migrations.
- Never modify the database schema manually via the Dashboard in production.

## Data

- Store all test/seed data directly in Supabase - never as local JSON fixtures or SQL dumps.

---

## Multi-Schema Setup on Hosted Supabase (via MCP)

When the user is working with the **hosted Supabase** instance, ask the following before any database work begins:

### Step 1 - Ask the User

> "Do you want to use multiple PostgreSQL schemas in your hosted Supabase project? (e.g. `public`, `app`, `reporting`)"

- If **no**: proceed with the default `public` schema.
- If **yes**: proceed with the multi-schema setup flow below.

### Step 2 - Collect Schema Requirements

Ask:
1. "How many custom schemas do you want to create?"
2. "What are the names of the schemas?" (collect as a list)

Do not proceed until you have explicit schema names from the user.

### Step 3 - Identify the Correct Supabase Project via MCP

- Use the Supabase MCP tools to list all available projects.
- Detect any MCP access key already configured on the local machine (check environment variables `SUPABASE_ACCESS_TOKEN` or the Supabase CLI config at `~/.supabase/access-token`).
- Present the matched project name and ID to the user: "I found your Supabase project: **[project name]** (ID: `[project-id]`). I will make changes to this project only."
- **Do not touch any other project.** If multiple projects are found and the target is ambiguous, ask the user to confirm which one.


### Step 4 - Create Schemas via MCP

For each schema name provided, execute the following SQL via `mcp_com_supabase__execute_sql`:

```sql
CREATE SCHEMA IF NOT EXISTS "<schema_name>";
```

After creation, immediately grant the necessary permissions:

```sql
-- Allow the authenticated role to use the schema
GRANT USAGE ON SCHEMA "<schema_name>" TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA "<schema_name>" TO authenticated;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT ALL ON TABLES TO authenticated;

-- Allow the anon role (for public/unauthenticated access if needed)
GRANT USAGE ON SCHEMA "<schema_name>" TO anon;
GRANT SELECT ON ALL TABLES IN SCHEMA "<schema_name>" TO anon;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT SELECT ON TABLES TO anon;

-- Allow the service_role full access
GRANT ALL ON SCHEMA "<schema_name>" TO service_role;
GRANT ALL ON ALL TABLES IN SCHEMA "<schema_name>" TO service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA "<schema_name>" GRANT ALL ON TABLES TO service_role;
```

### Step 5 - Expose Schema via Supabase API

To allow the PostgREST API to expose the new schema, the `search_path` must be updated. This requires a change in the Supabase Dashboard under **Settings → API → Extra search path**.

- **If MCP supports this setting**: apply it automatically.
- **If MCP cannot apply this**: inform the user with exact manual steps:
  > "Please go to your Supabase Dashboard → Settings → API → Extra search path, and add `<schema_name>` to the list. Then click Save."

### Step 6 - Update Environment Variables

After the project is identified and schemas are created, **automatically extract the hosted Supabase connection details via MCP** (`mcp_com_supabase__get_project_url` and `mcp_com_supabase__get_publishable_keys`) and write all required variables to `.env.local`:

```env
# Hosted Supabase - Production
NEXT_PUBLIC_SUPABASE_URL=<project API URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<project anon key>
SUPABASE_SERVICE_ROLE_KEY=<project service role key>
SUPABASE_DB_SCHEMA=<primary_schema_name>
# Additional schemas (reference only - not set as runtime variable)
# SUPABASE_SCHEMA_<NAME>=<schema_name>
```

Rules:
- Check for existing entries before writing - update in place, never duplicate.
- `SUPABASE_SERVICE_ROLE_KEY` must **never** have the `NEXT_PUBLIC_` prefix.
- If multiple schemas are used, list them all in comments above `SUPABASE_DB_SCHEMA` so the developer has a clear reference.
- After writing the variables, confirm to the user: "Environment variables have been set in `.env.local`. Your app is now pointed at the hosted Supabase project **[project name]**."

#### Verify the Connection

Once the variables are written, run a quick connectivity check to confirm the production database is reachable:

1. Use `mcp_com_supabase__execute_sql` to run `SELECT 1;` against the target project.
2. If successful: confirm "Connection to hosted Supabase verified. The production database is responding correctly."
3. If it fails: diagnose using `mcp_com_supabase__get_logs`, report the exact error, and fix the configuration before proceeding.

### Step 7 - Handle Missing MCP Token

If the MCP access token is **not found** locally:

1. Inform the user: "No Supabase MCP access token was found. I need a Personal Access Token (PAT) to manage your hosted Supabase project."
2. Ask: "Please provide your Supabase Personal Access Token. You can generate one at: https://supabase.com/dashboard/account/tokens"
3. Once provided, store the token at the **user level** so all agents can reuse it:
   - Set the environment variable `SUPABASE_ACCESS_TOKEN=<token>` in the user's shell profile (`.bashrc`, `.zshrc`, or Windows user environment variables).
   - Confirm: "Token stored. All agents can now access Supabase via MCP using this token."
4. Never hardcode the token in project files or commit it to version control.

## ./.github/instructions/tailwind.instructions.md
---
applyTo: "**/*.tsx,**/*.jsx,**/*.css"
---
# Tailwind CSS v4 Instructions

## Utility-First Approach

- Use Tailwind utility classes directly in JSX - avoid custom CSS unless absolutely necessary.
- Follow a consistent class order: **Layout → Box Model → Typography → Effects → States**.
- For conditional classes, use template literals or a `cn()` helper if `tailwind-merge` and `clsx` are installed.

## Responsive Design

- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.
- Mobile-first: write base styles for mobile, then add breakpoint overrides.

## Dark Mode

- Support dark mode with the `dark:` variant.
- Keep colour contrast accessible (WCAG AA minimum).

## Component Patterns

- Create reusable UI components in `src/components/ui/`.
- Prefer standard theme tokens (spacing, colours) over arbitrary values.
- Use only Tailwind v4 syntax - no deprecated Tailwind v3 patterns.

## ./.github/instructions/typescript.instructions.md
---
applyTo: "**/*.ts,**/*.tsx"
---
# TypeScript Best Practices

## Type Safety

- Enable `strict` mode in `tsconfig.json` (already configured).
- Use `import type { ... }` for type-only imports - keeps runtime bundles clean.
- Prefer `interface` for object shapes; use `type` for unions, intersections, and mapped types.
- Never use `any`. Use `unknown` when the type is genuinely unknown, then narrow it.

## Patterns

- Use discriminated unions for state management and API responses.
- Prefer `as const` for literal types and const assertions.
- Use `satisfies` operator to validate types without widening.
- Extract shared types to `src/types/` - keep them co-located if only used in one module.

## Naming Conventions

- **Interfaces/Types:** PascalCase (`UserProfile`, `ApiResponse`).
- **Variables/Functions:** camelCase (`getUserById`, `isLoading`).
- **Constants:** UPPER_SNAKE_CASE for true constants, camelCase for computed values.
- **Components:** PascalCase file names matching the export (`UserCard.tsx`).

## Enums

- Avoid `enum` - use `as const` objects or string literal union types instead.

## ./.github/skills/anforderungsdokument/SKILL.md
﻿---
name: anforderungsdokument
description: >-
  WAMOCON Entwicklungsprompts: Tiefenanalyse, Marketing/UX-Rework und
  Anforderungsdokument (9 Kapitel + Quellenverzeichnis als .docx).
  Workflow: IDEA.md ausfüllen, Skill aufrufen, Dokument prüfen, Freigabe.
---

# WAMOCON Entwicklungsprompts und Anforderungsdokument

## Übersicht

Dieser Skill stellt drei Entwicklungsprompts und eine verbindliche Dokumentstruktur
für WAMOCON-Anforderungsdokumente bereit. Das Anforderungsdokument folgt einer
festen 9-Kapitel-Struktur mit Quellenverzeichnis und wird als .docx generiert.

> **⚠️ PLATTFORMREGEL (ABSOLUT BINDEND):** Alle Anforderungsdokumente und Analysen
> gelten ausschließlich für **Web- und SaaS-Applikationen** (Browser-basiert).
> Mobile Apps (iOS, Android, React Native, Flutter) sind **kein Bestandteil** dieser
> Dokumente und dürfen unter keinen Umständen im Scope erwähnt werden.

> **⚠️ QUELLENREGEL (ABSOLUT BINDEND):** Alle verwendeten Quellen, Statistiken und
> Marktdaten müssen **nicht älter als 1 Jahr** sein (ab aktuellem Datum). Quellen,
> die älter als 12 Monate sind, sind **strikt verboten** und dürfen unter keinen
> Umständen verwendet werden. Kein Erscheinungsdatum → Quelle nicht verwenden.

**Workflow:** IDEA.md ausfüllen → Prompt 3 aufrufen → Dokument prüfen → Freigabe → Implementierung starten.

---

## Prompt 1: Tiefenanalyse und kritische Projektbewertung

Verwende diesen Prompt nach dem Onboarding einer neuen App-Idee, um eine vollumfängliche
Analyse auf Basis des Anforderungsdokuments durchzuführen.

```
Prüfe bitte das aktuelle Projekt und mache dich mit allen Daten und Inhalten vertraut.

Führe anschließend eine vollumfängliche Tiefenanalyse zum Thema der Web-/SaaS-Applikation
aus dem Anforderungsdokument durch. Erstelle dafür:
- Eine vollumfängliche Bedarfsanalyse des geplanten Themas
- Eine Nutzwertanalyse für die Funktionen
- Hinweise auf mögliche Lücken im Markt, die mit der Web-App nicht abgedeckt sind

STRIKT – QUELLENREGEL: Verwende ausschließlich Quellen und Daten, die nicht älter
als 1 Jahr sind. Quellen, die älter als 12 Monate sind, sind verboten.
Im Analysedokument muss jede Zahl mit einer aktuellen Quelle (inkl. Datum) belegt sein.

Fasse deine Ergebnisse in einem Analysedokument zusammen und gib eine Empfehlung ab,
welche Richtung die Web-/SaaS-Applikation nehmen soll, um die größtmögliche
Nutzerplattform und den größten Nutzen zu erzielen.

Erstelle am Ende Entscheidungsvorlagen zur Entscheidung der nächsten Schritte für die
Entwicklung und Ausrichtung der Applikation.

Prüfe intern deine Ergebnisse kritisch und mehrfach, sodass die Ergebnisse brauchbar sind.
```

---

## Prompt 2: Marketing und UX/UI Rework

Verwende diesen Prompt, wenn die Web-Applikation eine Überarbeitung aus Marketing-
und UX-Perspektive benötigt.

```
Bitte führe eine vollständige Analyse und Optimierung des Projektes durch.

Ziel ist eine umfassende Überarbeitung der Web-Applikation aus Marketing- und UX/UI-Perspektive:
- Analysiere die Applikation und passende Oberflächen, Farben, Typografie und Designsystem
- Optimiere den Workflow nach typischen UX-Prinzipien (geführt, unterstützt, intuitiv)
- Stelle sicher, dass die Web-App responsiv ist und auf allen gängigen Browsergrößen
  optimal dargestellt wird (Desktop, Laptop, Tablet) - wir entwickeln ausschließlich
  Web-/SaaS-Applikationen, KEINE mobilen Apps
- Implementiere passende Hilfestellungen für den User

STRIKT – QUELLENREGEL: Verwende ausschließlich Quellen und Daten, die nicht älter
als 1 Jahr sind. Quellen, die älter als 12 Monate sind, sind verboten.

Überarbeite alle Seiten vollständig und führe anschließend alle notwendigen
Fehlerbehebungen durch.
```

---

## Prompt 3: Anforderungsdokument erstellen (9 Kapitel + Quellenverzeichnis)

Verwende diesen Prompt, um ein vollständiges Anforderungsdokument zu erstellen.
Die KI liest `IDEA.md` und das `SKILL.md` automatisch aus dem Projekt - nichts einfügen, nichts ersetzen.

```
Nutze für diese Aufgabe die PERSONA eines interdisziplinären Expertenteams
(Senior Product Manager, Market Research Analyst und Tech Lead) im CEOMODE.
Führe die gesamte Analyse im /godmode und auf L99 aus.

1. Vorbereitung
Lies zunächst diese beiden Dateien vollständig, bevor du beginnst:
- .github/skills/anforderungsdokument/SKILL.md
- IDEA.md

2. Projektrahmen & Kontext
Fokus: Entwicklung eines neuen Web-/SaaS-Tools.
Plattform: Ausschließlich browserbasierte Web- und SaaS-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.
Strukturiere die technische Architektur als ARCHITECT.

3. Kernaufgabe
Durchdenke die Anforderungen mit /deepthink und erstelle ein vollständiges
WAMOCON-Anforderungsdokument. Halte dich strikt an die verbindliche
9-Kapitel-Struktur aus dem SKILL.md. Fülle jedes Kapitel mit echten, belegten
Daten. Verwende keine Platzhalter.

4. Strikte Restriktionen
Agiere bei der Einhaltung dieser Regeln als SENTINEL:

Plattform-Regel: Mobile Apps sind ausgeschlossen. Die Begriffe iOS, Android,
React Native oder Flutter dürfen im Dokument nicht erwähnt werden.

Quellen-Regel (FACTCHECK & /investigate): Nutze ausschließlich Quellen, die
jünger als ein Jahr sind. Ältere Quellen sind verboten. Jede genannte Zahl muss
mit einer exakten Quellenangabe und dem Veröffentlichungsdatum belegt werden.

Tonalität: Analytisch, datengestützt, kritisch und lösungsorientiert.
Professionell, durchgehend auf Deutsch unter Verwendung echter Umlaute (Ä, Ö, Ü, ß).

5. Ausgabe
Skript: scripts/generate-anforderungsdokument.mjs
Datei: public/Anforderungsdokument_[ProjektName].docx
```

---

## DOKUMENTSTRUKTUR (verbindlich für jedes Anforderungsdokument)

> **⚠️ Gilt ausschließlich für Web-/SaaS-Applikationen. Mobile Apps sind nicht Bestandteil.**

### Deckblatt

Oben: dicke Trennlinie (WAMOCON-Blau).
Titel zentriert: "WAMOCON GMBH" + "Anforderungsdokument" + [Projektname].
Metadaten-Tabelle ohne Rahmen:

| Feld              | Wert                          |
|-------------------|-------------------------------|
| Welle             | [Wellennummer aus IDEA.md]    |
| Projekt           | [App-Name]                    |
| Unternehmen       | WAMOCON GmbH                  |
| App Version       | 1                             |
| Erstellt von      | [Name aus IDEA.md]            |
| Eingereicht an    | [Empfänger aus IDEA.md]       |
| Datum             | [TT.MM.JJJJ aktuell]         |
| Vertraulichkeit   | Intern vertraulich            |
| Status            | Zur Freigabe eingereicht      |

Unten: gestrichelte Trennlinie.

---

### Kapitel 1: Zusammenfassung

- **1.1 Die Idee** - Was macht die Web-/SaaS-App? Welches Problem löst sie? Kernnutzen in 3–5 Sätzen.
- **1.2 Warum jetzt?** - Markttiming: Warum ist das Thema genau jetzt relevant? Mit aktuellen Zahlen belegen (Quellen nicht älter als 1 Jahr).

---

### Kapitel 2: Marktanalyse

- **2.1 Zielgruppe in Zahlen** - Marktgröße, Nutzeranzahl, Wachstumsprognosen. Fokus Deutschland/DACH. Jede Zahl mit Quellenangabe (nicht älter als 1 Jahr).
- **2.2 Infrastruktur/Marktwachstum** - Was wächst? Welche Trends treiben den Markt? Prognosen bis 2030.
- **2.3 Das Kernproblem** - Faktisch belegt: Was ist das konkrete Problem, das die Web-App löst? Warum existiert es heute noch?
- **2.4 Regulatorisches Umfeld** - DSGVO, branchenspezifische Gesetze, EU-Verordnungen. Was stärkt den USP?

---

### Kapitel 3: Wettbewerb

- **3.1 Direkte Wettbewerber** - Tabelle: Anbieter | Stärken | Schwächen/Chance für uns | Preis.
  Echte Anbieter mit echten Daten. Stärken UND Schwächen ehrlich benennen.
- **3.2 Indirekte Wettbewerber / Aggregate** - Tabelle: Anbieter | Was er bietet | Was fehlt (Chance für uns).
- **Marktlücke** - Zusammenfassung: Welche Kombination bietet kein Wettbewerber? Das ist unser Einstieg.

---

### Kapitel 4: Zielgruppe

- **4.1 Primäre Zielgruppe** - Genaue Beschreibung mit Zahlen. Nutzerprofile als Fließtext (Personas mit Name, Rolle, Verhalten).
- **4.2 Sekundäre Zielgruppe** - Wer kommt später dazu? Warum erst später?
- **4.3 Nicht-Zielgruppe** - Wen adressiert die Web-App NICHT? Klar abgrenzen.

---

### Kapitel 5: Nutzen

- **5.1 Nutzen für Kunden** - Tabelle: Problem heute | Lösung durch Web-App | Konkreter Vorteil. Mit messbaren Zahlen (Quellen nicht älter als 1 Jahr).
- **5.2 Nutzen für WAMOCON GmbH** - Warum lohnt sich das Projekt? Einnahmequellen, Skalierungspotenzial, strategischer Wert.

---

### Kapitel 6: Abhängigkeiten und Machbarkeit

- **6.1 Externe Abhängigkeiten** - APIs, Dienste, Datenquellen. Tabelle: Quelle | Was sie liefert | Kosten | Abhängigkeit.
- **6.2 Abrechnungs-/Integrationsoptionen** - Falls relevant: Welche Optionen für Bezahlung/Integration gibt es? Pro Version.
- **6.3 Gesamtbewertung** - Hat V1 kritische Abhängigkeiten? Kann ein Wettbewerber den Start blockieren?

---

### Kapitel 7: Anforderungen Version 1

- **7.1 Hauptprozesse** - Gruppiert nach Themen (z.B. "Dokumenten-Upload", "Frage-Generator").
  Jede Gruppe hat eine eigene Anforderungstabelle:

  | ID   | Anforderung                          | Priorität  | Status |
  |------|--------------------------------------|------------|--------|
  | K-01 | [Kernfunktion]                       | Muss       | Neu    |

- **7.2 Basisfunktionalitäten** - Pflicht für jede Web-App:

  | ID   | Anforderung                                              | Priorität  | Status |
  |------|----------------------------------------------------------|------------|--------|
  | B-01 | Rollen- und Rechteprinzip                                | Muss       | Neu    |
  | B-02 | Anmeldung und Registrierung (E-Mail mit Bestätigung)     | Muss       | Neu    |
  | B-03 | Passwort zurücksetzen                                    | Muss       | Neu    |
  | B-04 | Admin-Bereich für Nutzerverwaltung                       | Muss       | Neu    |
  | B-05 | Profilseite                                              | Muss       | Neu    |
  | B-06 | Dashboard als Startseite                                 | Muss       | Neu    |
  | B-07 | Navigation mit Breadcrumbs                               | Muss       | Neu    |
  | B-08 | Benachrichtigungssystem (In-App und/oder E-Mail)         | Soll       | Neu    |
  | B-09 | Spracheinstellungen (Deutsch und Englisch)               | Muss       | Neu    |
  | B-10 | Dunkel/Hell-Modus                                        | Muss       | Neu    |
  | B-11 | FAQ und Hilfebereich                                     | Soll       | Neu    |
  | B-12 | AGB, Impressum, Datenschutzerklärung                     | Muss       | Neu    |
  | B-13 | Cookie-Banner nach DSGVO                                 | Muss       | Neu    |
  | B-14 | DSGVO-Funktionen (Daten exportieren, Konto löschen)      | Muss       | Neu    |
  | B-15 | Geschäftsmodell (Free und Premium)                       | Muss       | Neu    |
  | B-16 | Upgrade von Free auf Premium in der App                  | Muss       | Neu    |

- **7.3 Scope** - Tabelle: In Scope V1 | Out of Scope (V2+). Klare Abgrenzung.

---

### Kapitel 8: Chancen und Risiken

- **8.1 Chancen** - Tabelle: Chance | Begründung. Mit Zahlen und Quellen (nicht älter als 1 Jahr).
- **8.2 Risiken** - Tabelle: Risiko | Warum es eintreten kann | Gegenmaßnahme.

---

### Kapitel 9: Umsetzungsplan Version 1

- **9.1 Entwicklungsansatz** - Tech-Stack, Werkzeuge (GitHub Copilot), Teamstruktur.
- **9.2 Umsetzungsplan** - Tag-für-Tag-Tabelle über 5–7 Werktage:

  | Tag       | Fokus                       | Inhalt                          |
  |-----------|-----------------------------|---------------------------------|
  | Tag 1–3   | Hauptprozesse               | [Details]                       |
  | Tag 3–4   | Testing und Bugfixing       | [Details]                       |
  | Tag 4–5   | Basisfunktionalitäten       | [Details]                       |
  | Tag 5–6   | Puffer                      | [Details]                       |

- **Hinweis** - Realistisch: V1 ist ein lauffähiger Prototyp, kein Endprodukt.

---

### Quellenverzeichnis

Tabelle: Nr. | Quelle/URL | Inhalt | Veröffentlichungsdatum.
Nur reale, öffentlich verfügbare Quellen.

**STRIKT:** Ausschließlich Quellen, die nicht älter als 1 Jahr sind.
Jede Zahl im Dokument muss mindestens eine Quelle haben.
Das Veröffentlichungsdatum muss für jede Quelle angegeben sein.

---

## FORMATREGELN

- **Sprache:** Deutsch mit echten Umlauten (Ä, Ö, Ü, ß). In Code-Variablennamen ist ae/oe/ue akzeptabel.
- **Schrift:** Arial Narrow, 11pt Fließtext.
- **Tabellenkopf:** WAMOCON-Blau (1E3A5F) mit weißem Text, fett.
- **Tabellenzeilen:** alternierend weiß / hellgrau (F5F5F5).
- **Breiten:** WidthType.DXA (keine Prozent).
- **Shading:** ShadingType.CLEAR (kein SOLID).
- **Kein \n in TextRun** - separate Paragraphen verwenden.
- **Seitenkopf:** "WAMOCON GmbH, Mergenthalerallee 79-81, 65760 Eschborn" (8pt, grau).
- **Seitenumbruch** zwischen den Hauptkapiteln.

---

## Workflow

```
[1] IDEA.md im Projekt-Root ausfüllen
        |
        v
[2] Prompt 3 aufrufen → Anforderungsdokument als .docx generieren
        |
        v
[3] Dokument prüfen und zur Freigabe einreichen (Geschäftsführung)
        |
        v
[4] Nach Freigabe: Prompt 1 für Tiefenanalyse aufrufen
        |
        v
[5] Implementierung mit @planner → @developer
        |
        v
[6] Nach Launch: Prompt 2 für UX/UI Rework
```

---

## Voraussetzungen

- Node.js >= 18
- npm install docx (einmalig)
- Ausgabe: public/Anforderungsdokument_[ProjektName].docx
- package.json: "gen:anforderungsdokument": "node scripts/generate-anforderungsdokument.mjs"
## ./.github/skills/memory-merger/SKILL.md
---
name: memory-merger
description: 'Merges mature lessons from a domain memory file into its instruction file. Syntax: `/memory-merger >domain [scope]` where scope is `global` (default), `user`, `workspace`, or `ws`.'
---

# Memory Merger

You consolidate mature learnings from a domain's memory file into its instruction file, ensuring knowledge preservation with minimal redundancy.

**Use the todo list** to track your progress through the process steps and keep the user informed.

## Scopes

Memory instructions can be stored in two scopes:

- **Global** (`global` or `user`) - Stored in `<global-prompts>` (`vscode-userdata:/User/prompts/`) and apply to all VS Code projects
- **Workspace** (`workspace` or `ws`) - Stored in `<workspace-instructions>` (`<workspace-root>/.github/instructions/`) and apply only to the current project

Default scope is **global**.

Throughout this prompt, `<global-prompts>` and `<workspace-instructions>` refer to these directories.

## Syntax

```
/memory-merger >domain-name [scope]
```

- `>domain-name` - Required. The domain to merge (e.g., `>clojure`, `>git-workflow`, `>prompt-engineering`)
- `[scope]` - Optional. One of: `global`, `user` (both mean global), `workspace`, or `ws`. Defaults to `global`

**Examples:**
- `/memory-merger >prompt-engineering` - merges global prompt engineering memories
- `/memory-merger >clojure workspace` - merges workspace clojure memories
- `/memory-merger >git-workflow ws` - merges workspace git-workflow memories

## Process

### 1. Parse Input and Read Files

- **Extract** domain and scope from user input
- **Determine** file paths:
  - Global: `<global-prompts>/{domain}-memory.instructions.md` → `<global-prompts>/{domain}.instructions.md`
  - Workspace: `<workspace-instructions>/{domain}-memory.instructions.md` → `<workspace-instructions>/{domain}.instructions.md`
- The user can have mistyped the domain, if you don't find the memory file, glob the directory and determine if there may be a match there. Ask the user for input if in doubt.
- **Read** both files (memory file must exist; instruction file may not)

### 2. Analyze and Propose

Review all memory sections and present them for merger consideration:

```
## Proposed Memories for Merger

### Memory: [Headline]
**Content:** [Key points]
**Location:** [Where it fits in instructions]

[More memories]...
```

Say: "Please review these memories. Approve all with 'go' or specify which to skip."

**STOP and wait for user input.**

### 3. Define Quality Bar

Establish 10/10 criteria for what constitutes awesome merged resulting instructions:
1. **Zero knowledge loss** - Every detail, example, and nuance preserved
2. **Minimal redundancy** - Overlapping guidance consolidated
3. **Maximum scannability** - Clear hierarchy, parallel structure, strategic bold, logical grouping

### 4. Merge and Iterate

Develop the final merged instructions **without updating files yet**:

1. Draft the merged instructions incorporating approved memories
2. Evaluate against quality bar
3. Refine structure, wording, organization
4. Repeat until the merged instructions meet 10/10 criteria

### 5. Update Files

Once the final merged instructions meet 10/10 criteria:

- **Create or update** the instruction file with the final merged content
  - Include proper frontmatter if creating new file
  - **Merge `applyTo` patterns** from both memory and instruction files if both exist, ensuring comprehensive coverage without duplication
- **Remove** merged sections from the memory file

## Example

```
User: "/memory-merger >clojure"

Agent:
1. Reads clojure-memory.instructions.md and clojure.instructions.md
2. Proposes 3 memories for merger
3. [STOPS]

User: "go"

Agent:
4. Defines quality bar for 10/10
5. Merges new instructions candidate, iterates to 10/10
6. Updates clojure.instructions.md
7. Cleans clojure-memory.instructions.md
```

## ./.github/skills/next-browser/SKILL.md
---
name: next-browser
description: >-
  CLI that gives agents what humans get from React DevTools and the Next.js
  dev overlay - component trees, props, hooks, PPR shells, errors, network -
  as shell commands that return structured text.
---

# next-browser

If `next-browser` is not already on PATH, install `@vercel/next-browser` globally, then install the Chromium browser:

```bash
npm install -g @vercel/next-browser
playwright install chromium
```

Requires Node >= 20. If already installed, check the version is current:

```bash
next-browser --version
npm view @vercel/next-browser version
# if outdated:
npm install -g @vercel/next-browser@latest
```

---

## Next.js docs awareness

If the project's Next.js version is **v16.2.0-canary.37 or later**, bundled docs live at `node_modules/next/dist/docs/`. Before doing PPR work, Cache Components work, or any non-trivial Next.js task, read the relevant doc there - your training data may be outdated. The bundled docs are the source of truth.

---

## Working with the user

### Onboarding

- If the user already gave a URL, cookies, and task - skip questions, `open` and go.
- Otherwise ask only what's missing: dev server URL (running?), session cookies if behind login.
- For cookies, give the user two options: (1) DevTools → Application → Cookies, export as `[{"name":"session","value":"..."}]`, or (2) "Copy as cURL" from DevTools → Network on any authenticated request - extract the cookies from the header yourself.
- Never say "ready, what would you like to do?". Never auto-discover (port scans, `project`, config reads) before being asked.

### Show, don't tell

- `screenshot` after every navigation, code change, or visual finding. Always caption it.
- Don't narrate what a screenshot shows. State your conclusion or next action.

### Escalate, don't decide

- Suspense boundary placement and fallback UI - design with the user.
- Caching decisions (staleness, visibility) - the user's call, not yours.
- "Make this page faster" without context - ask: cold URL hit or client navigation? Don't guess, don't do both.

---

## Headless mode

By default the browser opens headed (visible window). For CI or environments with no display, set `NEXT_BROWSER_HEADLESS=1` to run headless.

---

## Commands

### Browser lifecycle

| Command | Description |
|---|---|
| `open <url> [--cookies-json <file>]` | Launch browser and navigate (with optional cookies) |
| `close` | Close browser and kill daemon |

```bash
$ next-browser open http://localhost:3000
$ next-browser open http://localhost:3000 --cookies-json cookies.json
# Cookie file format: [{"name":"authorization","value":"Bearer ..."}]
```

---

### Navigation

| Command | Description |
|---|---|
| `goto <url>` | Full-page navigation (new document load) |
| `push [path]` | Client-side navigation (interactive picker if no path) |
| `back` | Go back in history |
| `reload` | Reload current page |
| `restart-server` | Restart the Next.js dev server (clears caches - last resort only) |
| `ssr lock` | Block external scripts on all navigations (SSR-only mode) |
| `ssr unlock` | Re-enable external scripts |

---

### Inspection

| Command | Description |
|---|---|
| `tree` | Full React component tree (hierarchy, IDs, keys) |
| `tree <id>` | Inspect one component (props, hooks, state, source location) |
| `snapshot` | Accessibility tree with `[ref=eN]` markers on interactive elements |
| `errors` | Build and runtime errors for the current page |
| `logs` | Recent dev server log output |
| `browser-logs` | Browser-side console output (log, warn, error, info) |
| `network [idx]` | List network requests, or inspect one (headers, body) |

```bash
$ next-browser snapshot
- navigation "Main"
  - link "Home" [ref=e0]
  - link "Dashboard" [ref=e1]
- main
  - heading "Settings"
  - tablist
    - tab "General" [ref=e2] (selected)
    - tab "Security" [ref=e3]

$ next-browser tree
# Columns: depth id parent name
0 38167 - Root
1 38168 38167 HeadManagerContext.Provider
...
224 46375 46374 DeploymentsProvider

$ next-browser tree 46375
path: Root > ... > DeploymentsProvider
DeploymentsProvider #46375
props:
  children: [<Lazy />, ...]
hooks:
  Router: undefined (2 sub)
source: app/.../context.tsx:180:10
```

---

### Interaction

| Command | Description |
|---|---|
| `click <ref\|text\|selector>` | Click via real pointer events (works with Radix, Headless UI) |
| `fill <ref\|selector> <value>` | Fill a text input or textarea |
| `eval [ref] <script>` | Run JS in page context |
| `viewport [WxH]` | Show or set viewport size |

```bash
$ next-browser click e3          # ref from snapshot
$ next-browser click "Security"  # plain text
$ next-browser fill e4 "myuser"
$ next-browser viewport 375x812  # mobile breakpoint
$ next-browser eval 'document.title'
```

---

### Performance & PPR

| Command | Description |
|---|---|
| `perf [url]` | Core Web Vitals + React hydration timing in one pass |
| `renders start` | Begin recording React re-renders |
| `renders stop [--json]` | Stop and print per-component render profile |
| `ppr lock` | Freeze dynamic content to inspect the static shell |
| `ppr unlock` | Resume dynamic content and print shell analysis |

```bash
$ next-browser perf http://localhost:3000/dashboard
# Core Web Vitals
  TTFB    42ms
  LCP     1205.3ms
  CLS     0.03
# React Hydration - 65.5ms

$ next-browser renders start
$ next-browser renders stop
# 426 renders (38 mounts + 388 re-renders) across 38 components
# FPS: avg 120, min 106
```

---

### Screenshots

| Command | Description |
|---|---|
| `screenshot [caption] [--full-page]` | Viewport (or full page) PNG to temp file |
| `preview [caption]` | Screenshot + open in viewer window |

---

### Next.js MCP

| Command | Description |
|---|---|
| `page` | Route segments for the current URL |
| `project` | Project root and dev server URL |
| `routes` | All app router routes |
| `action <id>` | Inspect a server action by ID |

---

## Scenarios

### Debug a visual or interaction issue

1. `open http://localhost:3000`
2. `snapshot` - discover interactive elements
3. `click eN` / `fill eN value` - interact
4. `errors` - check for runtime errors
5. `screenshot "before fix"` - document state
6. Make the code change, HMR picks it up
7. `screenshot "after fix"` - verify

### Profile performance

```bash
$ next-browser perf http://localhost:3000/dashboard
# → Core Web Vitals + hydration timing

$ next-browser renders start
# reproduce slow interaction
$ next-browser renders stop
# → per-component render counts, self time, change reasons
```

### Debug PPR shell

```bash
$ next-browser ppr lock
$ next-browser goto http://localhost:3000/page
$ next-browser screenshot "PPR shell - locked"
$ next-browser ppr unlock
# → Shell analysis: which Suspense boundaries are holes and why
```

### Test responsive layout

```bash
$ next-browser viewport 375x812   # mobile
$ next-browser screenshot "mobile"
$ next-browser viewport 1440x900  # desktop
$ next-browser screenshot "desktop"
```

### Debug component re-renders

1. `renders start`
2. `goto` the page (captures hydration)
3. Reproduce the interaction
4. `renders stop` - read Mounts vs Re-renders, Self time, change reasons
5. `tree <id>` the expensive component - check source, props, hooks
6. Fix, HMR picks it up, re-run `renders start/stop` to verify

## ./AGENTS.md
﻿
---

# GitHub Copilot Customisation

<table>
<tr>
<th width="50%">DE Deutsch</th>
<th width="50%">EN English</th>
</tr>
<tr>
<td>Dieses Projekt nutzt GitHub Copilot Agents und Instructions, um eine strukturierte und produktive KI-gestützte Entwicklung zu ermöglichen.</td>
<td>This project uses GitHub Copilot Agents and Instructions to enable a structured and productive AI-assisted development workflow.</td>
</tr>
</table>

---

## Übersicht / Overview

| Typ / Type | Pfad / Path | Beschreibung / Description |
|---|---|---|
| **Global Instructions** | `.github/copilot-instructions.md` | Projektweite Basisregeln für alle Copilot-Interaktionen. / Project-wide baseline rules for all Copilot interactions. |
| **Instructions** | `.github/instructions/*.instructions.md` | Dateimuster-spezifische Coding-Richtlinien. / File-pattern-scoped coding guidelines. |
| **Agents** | `.github/agents/*.agent.md` | Spezialisierte KI-Personas für verschiedene Phasen. / Specialised AI personas for different development phases. |

---

## `copilot-instructions.md` - Globale Basisregeln / Global Baseline Rules

**Pfad / Path:** `.github/copilot-instructions.md`

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td>Diese Datei wird bei <strong>jeder</strong> Copilot-Interaktion automatisch geladen. Sie definiert den Tech-Stack, kritische Regeln (async APIs, Server Components, Supabase), und Code-Stil-Konventionen für das gesamte Projekt.</td>
<td>This file is automatically loaded on <strong>every</strong> Copilot interaction. It defines the tech stack, critical rules (async APIs, Server Components, Supabase), and code style conventions for the whole project.</td>
</tr>
</table>

<table>
<tr>
<th width="50%">DE Wann bearbeiten?</th>
<th width="50%">EN When to edit?</th>
</tr>
<tr>
<td>
- Tech-Stack ändert sich (z. B. neue Bibliothek wird Standardmuster)<br>
- Neue projektweite Regeln sollen für alle Copilot-Interaktionen gelten<br>
- Team-Konventionen ändern sich<br>
<strong>⚠️ Kurz halten</strong> - diese Datei wird immer in den Kontext geladen.
</td>
<td>
- Tech stack changes (e.g. a new library becomes a standard pattern)<br>
- New project-wide rules need to apply to all Copilot interactions<br>
- Team conventions change<br>
<strong>⚠️ Keep it short</strong> - this file is always loaded into context.
</td>
</tr>
</table>

---

## Instructions - Datei-spezifische Richtlinien / File-Scoped Guidelines

<table>
<tr>
<th width="50%">DE Was sind Instructions?</th>
<th width="50%">EN What are Instructions?</th>
</tr>
<tr>
<td>Instructions sind Richtlinien, die automatisch geladen werden, wenn Copilot an Dateien arbeitet, die dem <code>applyTo</code>-Glob-Muster entsprechen. Sie ergänzen die globalen Regeln mit datei-spezifischen Details.</td>
<td>Instructions are guidelines that are automatically loaded when Copilot works on files matching the <code>applyTo</code> glob pattern. They extend the global rules with file-type-specific details.</td>
</tr>
</table>

### Vorhandene Instructions / Available Instructions

| Datei / File | `applyTo` | Zweck / Purpose |
|---|---|---|
| `nextjs.instructions.md` | `**/*.tsx, **/*.ts, **/*.jsx, **/*.js` | Next.js 16 App Router Patterns, async APIs, Server/Client Components |
| `tailwind.instructions.md` | `**/*.tsx, **/*.jsx, **/*.css` | Tailwind CSS v4 Utility-First Patterns, Responsive Design |
| `typescript.instructions.md` | `**/*.ts, **/*.tsx` | TypeScript Strict Mode, Naming Conventions, Type Safety |
| `supabase.instructions.md` | `**/supabase/**, **/*supabase*` | Supabase Client Setup, RLS, Migrations, Schema Awareness |

### Eigene Instructions erstellen / Creating Custom Instructions

<table>
<tr>
<th width="50%">DE Anleitung</th>
<th width="50%">EN Guide</th>
</tr>
<tr>
<td>Erstelle eine <code>.instructions.md</code>-Datei in <code>.github/instructions/</code> mit YAML-Frontmatter. Das <code>applyTo</code>-Feld akzeptiert Glob-Muster und bestimmt, für welche Dateien die Regeln gelten.</td>
<td>Create a <code>.instructions.md</code> file in <code>.github/instructions/</code> with YAML frontmatter. The <code>applyTo</code> field accepts glob patterns and determines which files the rules apply to.</td>
</tr>
</table>

```yaml
---
applyTo: "**/*.tsx"
---
# Your instructions here
```

---

## Agents - KI-Personas / AI Personas

<table>
<tr>
<th width="50%">DE Was sind Agents?</th>
<th width="50%">EN What are Agents?</th>
</tr>
<tr>
<td>Agents sind spezialisierte KI-Personas. Du rufst sie in VS Code über das Chat-Panel mit <code>@agent-name</code> auf. Jeder Agent hat eine klar definierte Rolle, einen Workflow und Regeln.</td>
<td>Agents are specialised AI personas. You invoke them in VS Code via the Chat panel using <code>@agent-name</code>. Each agent has a clearly defined role, workflow, and rules.</td>
</tr>
</table>

---

### `@planner` - Planer

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Technische Planung und Anforderungsanalyse vor dem Coding.</td>
<td><strong>Purpose:</strong> Technical planning and requirements analysis before coding.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Vor dem Start eines neuen Features<br>- Wenn die Anforderungen unklar sind<br>- Vor Refactoring oder Migrations-Aufgaben</td>
<td><strong>When to use:</strong><br>- Before starting a new feature<br>- When requirements are unclear<br>- Before refactoring or migration tasks</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Codebase erkunden und Kontext sammeln<br>✔ Betroffene Dateien und Module identifizieren<br>✔ Nummerierten Implementierungsplan erstellen<br>✘ <strong>Schreibt keinen Code</strong></td>
<td><strong>What it does:</strong><br>✔ Explore codebase and gather context<br>✔ Identify affected files and modules<br>✔ Create a numbered implementation plan<br>✘ <strong>Does not write code</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@planner Füge eine Authentifizierungsseite hinzu</code></td>
<td><strong>Usage:</strong> <code>@planner Add an authentication page</code></td>
</tr>
</table>

---

### `@developer` - Entwickler

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Strukturierte Feature-Implementierung mit Qualitätsprüfungen.</td>
<td><strong>Purpose:</strong> Structured feature implementation with quality checks.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach der Planung mit <code>@planner</code><br>- Zur Implementierung von Features, Seiten, API-Routen<br>- Für Datenbankänderungen und Migrationen</td>
<td><strong>When to use:</strong><br>- After planning with <code>@planner</code><br>- To implement features, pages, API routes<br>- For database changes and migrations</td>
</tr>
<tr>
<td><strong>Vierphasiger Prozess:</strong><br>1. <strong>Vorbereitung</strong> - Plan lesen, Code verstehen<br>2. <strong>Implementierung</strong> - Schrittweise, Fehler sofort beheben<br>3. <strong>Verifikation (PFLICHT)</strong> - <code>typecheck</code> → <code>lint</code> → <code>build</code> → lokal testen<br>4. <strong>Dokumentation</strong> - Handbook aktualisieren</td>
<td><strong>Four-phase process:</strong><br>1. <strong>Preparation</strong> - Read plan, understand code<br>2. <strong>Implementation</strong> - Step by step, fix errors immediately<br>3. <strong>Verification (MANDATORY)</strong> - <code>typecheck</code> → <code>lint</code> → <code>build</code> → test locally<br>4. <strong>Documentation</strong> - Update handbook</td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@developer Implementiere diesen Plan: [Plan einfügen]</code></td>
<td><strong>Usage:</strong> <code>@developer Implement this plan: [paste plan]</code></td>
</tr>
</table>

---

### `@reviewer` - Code-Reviewer

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Code-Review und Qualitätssicherung vor dem PR.</td>
<td><strong>Purpose:</strong> Code review and quality assurance before a PR.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Bevor ein PR erstellt wird<br>- Nach einer Implementierung zur Qualitätsprüfung<br>- Zur Sicherheits- und Performance-Analyse</td>
<td><strong>When to use:</strong><br>- Before creating a PR<br>- After implementation for quality check<br>- For security and performance audits</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Strukturierte Checkliste (Qualität, Next.js 16, Supabase-Sicherheit, Styling)<br>✔ Alle Checks ausführen (typecheck, lint, build)<br>✔ Review-Bericht mit Status (✅ / ⚠️ / ❌)</td>
<td><strong>What it does:</strong><br>✔ Structured checklist (quality, Next.js 16, Supabase security, styling)<br>✔ Run all checks (typecheck, lint, build)<br>✔ Review report with status (✅ / ⚠️ / ❌)</td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@reviewer Überprüfe die Änderungen in src/app/dashboard/</code></td>
<td><strong>Usage:</strong> <code>@reviewer Review the changes in src/app/dashboard/</code></td>
</tr>
</table>

---

### `@anforderungsdokument` - Anforderungsdokument

<table>
<tr>
<th width="50%">DE</th>
<th width="50%">EN</th>
</tr>
<tr>
<td><strong>Zweck:</strong> Vollständiges WAMOCON-Anforderungsdokument (9 Kapitel + .docx) für Web-/SaaS-Applikationen erstellen.</td>
<td><strong>Purpose:</strong> Create a complete WAMOCON requirements document (9 chapters + .docx) for web/SaaS applications.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Vor dem Start eines neuen Projekts<br>- Wenn eine App-Idee dokumentiert werden soll<br>- Bevor die Implementierung beginnt (Freigabe erforderlich)</td>
<td><strong>When to use:</strong><br>- Before starting a new project<br>- When an app idea needs to be documented<br>- Before implementation starts (approval required)</td>
</tr>
<tr>
<td><strong>Was er tut:</strong><br>✔ Marktanalyse, Wettbewerb, Zielgruppe recherchieren<br>✔ 9-Kapitel-Dokument mit echten Daten befüllen<br>✔ Dokument als .docx generieren<br>✘ <strong>Nur Web/SaaS - keine mobilen Apps</strong><br>✘ <strong>Nur Quellen nicht älter als 1 Jahr</strong></td>
<td><strong>What it does:</strong><br>✔ Research market analysis, competition, target audience<br>✔ Fill 9-chapter document with real data<br>✔ Generate document as .docx<br>✘ <strong>Web/SaaS only - no mobile apps</strong><br>✘ <strong>Sources not older than 1 year only</strong></td>
</tr>
<tr>
<td><strong>Verwendung:</strong> <code>@anforderungsdokument Erstelle das Anforderungsdokument für [Projektname]</code></td>
<td><strong>Usage:</strong> <code>@anforderungsdokument Create the requirements document for [project name]</code></td>
</tr>
</table>

#### Schritt-für-Schritt-Anleitung / Step-by-Step Guide

**1.** Fülle `IDEA.md` im Projekt-Root aus.

**2.** Kopiere den Prompt unten und sende ihn im Chat. Die KI liest `IDEA.md` und `SKILL.md` automatisch - nichts einfügen, nichts ersetzen:

```
Nutze für diese Aufgabe die PERSONA eines interdisziplinären Expertenteams
(Senior Product Manager, Market Research Analyst und Tech Lead) im CEOMODE.
Führe die gesamte Analyse im /godmode und auf L99 aus.

1. Vorbereitung
Lies zunächst diese beiden Dateien vollständig, bevor du beginnst:
- .github/skills/anforderungsdokument/SKILL.md
- IDEA.md

2. Projektrahmen & Kontext
Fokus: Entwicklung eines neuen Web-/SaaS-Tools.
Plattform: Ausschließlich browserbasierte Web- und SaaS-Applikationen.
Tech-Stack: Next.js, Tailwind CSS, TypeScript, Supabase, Vercel.
Strukturiere die technische Architektur als ARCHITECT.

3. Kernaufgabe
Durchdenke die Anforderungen mit /deepthink und erstelle ein vollständiges
WAMOCON-Anforderungsdokument. Halte dich strikt an die verbindliche
9-Kapitel-Struktur aus dem SKILL.md. Fülle jedes Kapitel mit echten, belegten
Daten. Verwende keine Platzhalter.

4. Strikte Restriktionen
Agiere bei der Einhaltung dieser Regeln als SENTINEL:

Plattform-Regel: Mobile Apps sind ausgeschlossen. Die Begriffe iOS, Android,
React Native oder Flutter dürfen im Dokument nicht erwähnt werden.

Quellen-Regel (FACTCHECK & /investigate): Nutze ausschließlich Quellen, die
jünger als ein Jahr sind. Ältere Quellen sind verboten. Jede genannte Zahl muss
mit einer exakten Quellenangabe und dem Veröffentlichungsdatum belegt werden.

Tonalität: Analytisch, datengestützt, kritisch und lösungsorientiert.
Professionell, durchgehend auf Deutsch unter Verwendung echter Umlaute (Ä, Ö, Ü, ß).

5. Ausgabe
Skript: scripts/generate-anforderungsdokument.mjs
Datei: public/Anforderungsdokument_[ProjektName].docx
```

**3.** Dokument prüfen und zur Freigabe bei der Geschäftsführung einreichen.

**4.** Nach Freigabe: Implementierung mit `@planner` starten.

---

## Tools

| Tool | Pfad / Path | Zweck / Purpose |
|---|---|---|
| **next-browser** | `.github/skills/next-browser/SKILL.md` | CLI that exposes React DevTools and the Next.js dev overlay as shell commands - component trees, props, errors, performance, screenshots - structured output for AI agents. |
| **anforderungsdokument** | `.github/skills/anforderungsdokument/SKILL.md` | Drei Entwicklungsprompts: Tiefenanalyse, Marketing/UX-Rework und Anforderungsdokument (9 Kapitel + Quellenverzeichnis als .docx). Nur Web/SaaS - keine mobilen Apps. Nur Quellen nicht älter als 1 Jahr. IDEA.md ausfüllen, Prompt 3 aufrufen, .docx generieren, zur Freigabe einreichen. |

### `next-browser` - AI-Driven Browser for Next.js

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td><code>@vercel/next-browser</code> ist ein CLI-Tool, das React DevTools und das Next.js Dev-Overlay als Shell-Befehle bereitstellt. Agents können den Browser steuern, Komponenten inspizieren, Fehler lesen und Performance prüfen - ohne manuell durch DevTools zu klicken.</td>
<td><code>@vercel/next-browser</code> is a CLI tool that exposes React DevTools and the Next.js dev overlay as shell commands. Agents can drive the browser, inspect components, read errors, and check performance - without manually clicking through DevTools.</td>
</tr>
<tr>
<td><strong>Wann verwenden:</strong><br>- Nach der Implementierung zur visuellen Verifikation<br>- Debugging von Runtime-Fehlern oder Re-Render-Problemen<br>- Performance-Analyse (Core Web Vitals, Hydration)<br>- PPR-Shell-Debugging</td>
<td><strong>When to use:</strong><br>- After implementation for visual verification<br>- Debugging runtime errors or re-render issues<br>- Performance analysis (Core Web Vitals, hydration timing)<br>- PPR shell debugging</td>
</tr>
<tr>
<td><strong>Installation:</strong><br><code>npm install -g @vercel/next-browser</code><br><code>playwright install chromium</code><br>Benötigt Node >= 20</td>
<td><strong>Install:</strong><br><code>npm install -g @vercel/next-browser</code><br><code>playwright install chromium</code><br>Requires Node >= 20</td>
</tr>
<tr>
<td><strong>Wichtigste Befehle:</strong><br><code>next-browser open &lt;url&gt;</code> - Browser starten<br><code>next-browser snapshot</code> - Accessibility-Tree + klickbare Refs<br><code>next-browser errors</code> - Build- und Runtime-Fehler<br><code>next-browser perf</code> - Core Web Vitals + Hydration<br><code>next-browser screenshot</code> - Viewport als PNG<br><code>next-browser tree</code> - React-Komponentenbaum</td>
<td><strong>Key commands:</strong><br><code>next-browser open &lt;url&gt;</code> - launch browser<br><code>next-browser snapshot</code> - accessibility tree + clickable refs<br><code>next-browser errors</code> - build and runtime errors<br><code>next-browser perf</code> - Core Web Vitals + hydration timing<br><code>next-browser screenshot</code> - viewport as PNG<br><code>next-browser tree</code> - React component tree</td>
</tr>
<tr>
<td><strong>Vollständige Dokumentation:</strong> <code>.github/skills/next-browser/SKILL.md</code></td>
<td><strong>Full documentation:</strong> <code>.github/skills/next-browser/SKILL.md</code></td>
</tr>
</table>

---

### `anforderungsdokument` - WAMOCON Entwicklungsprompts

<table>
<tr>
<th width="50%">DE Was ist das?</th>
<th width="50%">EN What is it?</th>
</tr>
<tr>
<td>Der Skill stellt <strong>drei strukturierte Entwicklungsprompts</strong> bereit: (1) Tiefenanalyse und kritische Projektbewertung, (2) Marketing und UX/UI Rework, (3) Anforderungsdokument mit verbindlicher 9-Kapitel-Struktur (Zusammenfassung, Marktanalyse, Wettbewerb, Zielgruppe, Nutzen, Abhängigkeiten, Anforderungen V1, Chancen/Risiken, Umsetzungsplan + Quellenverzeichnis). <strong>Ausschließlich Web/SaaS - keine mobilen Apps. Nur Quellen nicht älter als 1 Jahr.</strong> IDEA.md ausfüllen, Prompt aus <code>@anforderungsdokument</code> kopieren, .docx generieren, zur Freigabe einreichen.</td>
<td>The skill provides <strong>three structured development prompts</strong>: (1) deep analysis and critical assessment, (2) marketing and UX/UI rework, (3) requirements document with a mandatory 9-chapter structure (summary, market analysis, competition, target audience, benefits, dependencies, requirements V1, opportunities/risks, implementation plan + references). <strong>Web/SaaS only - no mobile apps. Sources not older than 1 year only.</strong> Fill in IDEA.md, copy prompt from <code>@anforderungsdokument</code>, generate .docx, submit for approval.</td>
</tr>
</table>

---

## Empfohlener Workflow / Recommended Workflow

<table>
<tr>
<th width="50%">DE Schritt</th>
<th width="50%">EN Step</th>
</tr>
<tr>
<td><strong>Phase 0 - Anforderungen (neues Projekt):</strong><br>
1. <code>IDEA.md</code> im Projekt-Root ausfüllen<br>
2. <strong><code>@anforderungsdokument</code></strong> aufrufen: Prompt kopieren und senden<br>
3. Dokument prüfen und zur Freigabe einreichen<br>
4. Nach Freigabe: Implementierung starten</td>
<td><strong>Phase 0 - Requirements (new project):</strong><br>
1. Fill in <code>IDEA.md</code> in the project root<br>
2. Call <strong><code>@anforderungsdokument</code></strong>: copy prompt and send<br>
3. Review document and submit for approval<br>
4. After approval: start implementation</td>
</tr>
<tr>
<td><strong>Phase 1 - Planung:</strong><br>
<strong><code>@planner</code></strong> - Aufgabe analysieren und Implementierungsplan erstellen</td>
<td><strong>Phase 1 - Planning:</strong><br>
<strong><code>@planner</code></strong> - Analyse the task and create an implementation plan</td>
</tr>
<tr>
<td><strong>Phase 2 - Implementierung:</strong><br>
<strong><code>@developer</code></strong> - Plan entgegennehmen und schrittweise implementieren</td>
<td><strong>Phase 2 - Implementation:</strong><br>
<strong><code>@developer</code></strong> - Receive plan and implement step by step</td>
</tr>
<tr>
<td><strong>Phase 3 - Qualitätsprüfung:</strong><br>
<strong><code>@reviewer</code></strong> - Code prüfen, bevor ein PR erstellt wird</td>
<td><strong>Phase 3 - Quality review:</strong><br>
<strong><code>@reviewer</code></strong> - Review code before creating a PR</td>
</tr>
</table>

---

## Eigene Agents erstellen / Creating Custom Agents

<table>
<tr>
<th width="50%">DE Anleitung</th>
<th width="50%">EN Guide</th>
</tr>
<tr>
<td>Erstelle eine <code>.agent.md</code>-Datei in <code>.github/agents/</code> mit YAML-Frontmatter. Definiere Rolle, Workflow und Regeln.</td>
<td>Create a <code>.agent.md</code> file in <code>.github/agents/</code> with YAML frontmatter. Define role, workflow, and rules.</td>
</tr>
</table>

```yaml
---
name: MyAgent
description: >
  Description of what this agent does.
---
# Agent: MyAgent

## Role
...

## Workflow
...
```

---

## Wenn ein Agent schlecht antwortet / When an Agent Responds Poorly

<table>
<tr>
<th width="50%">DE Problem & Lösung</th>
<th width="50%">EN Problem & Solution</th>
</tr>
<tr>
<td><strong>Agent ignoriert Regeln aus der Instructions-Datei</strong><br>→ Prüfe das <code>applyTo</code>-Glob-Muster - stimmt es mit der Datei überein, die du bearbeitest? Teste mit: <code>**/*.ts</code> statt <code>src/**/*.ts</code></td>
<td><strong>Agent ignores rules from an Instructions file</strong><br>→ Check the <code>applyTo</code> glob pattern - does it match the file you are editing? Try broader patterns: <code>**/*.ts</code> instead of <code>src/**/*.ts</code></td>
</tr>
<tr>
<td><strong>Agent befolgt den Workflow nicht (z. B. überspringt typecheck)</strong><br>→ Öffne die <code>.agent.md</code>-Datei und mache die Anweisung strikter. Ersetze "sollte" durch "muss". Füge am Ende eine Zusammenfassung hinzu: <em>"Bevor du antwortest, liste alle abgeschlossenen Schritte auf."</em></td>
<td><strong>Agent does not follow the workflow (e.g. skips typecheck)</strong><br>→ Open the <code>.agent.md</code> file and make the instruction stricter. Replace "should" with "must". Add a reminder at the end: <em>"Before responding, list all completed steps."</em></td>
</tr>
<tr>
<td><strong>Agent schreibt schlechten Next.js-Code (z. B. falsche API-Nutzung)</strong><br>→ Füge ein konkretes Beispiel in die <code>nextjs.instructions.md</code> ein. Copilot folgt Beispielen besser als abstrakten Regeln.</td>
<td><strong>Agent writes bad Next.js code (e.g. wrong API usage)</strong><br>→ Add a concrete code example to <code>nextjs.instructions.md</code>. Copilot follows examples better than abstract rules.</td>
</tr>
<tr>
<td><strong>Agent "vergisst" den Kontext nach langen Gesprächen</strong><br>→ Starte ein neues Chat-Fenster. Langer Kontext verdrängt Instructions. Übergib den Plan explizit: <em>"Hier ist der Plan: [Plan]. Bitte implementiere Schritt 3."</em></td>
<td><strong>Agent "forgets" context after long conversations</strong><br>→ Start a new chat window. Long context pushes out instructions. Pass the plan explicitly: <em>"Here is the plan: [plan]. Please implement step 3."</em></td>
</tr>
<tr>
<td><strong>Agent antwortet auf Englisch statt Deutsch (oder umgekehrt)</strong><br>→ Füge in <code>copilot-instructions.md</code> eine Sprachanweisung hinzu: <em>"Antworte immer auf Deutsch."</em> - oder sprich den Agent in der gewünschten Sprache an.</td>
<td><strong>Agent responds in German instead of English (or vice versa)</strong><br>→ Add a language instruction to <code>copilot-instructions.md</code>: <em>"Always respond in English."</em> - or address the agent in your preferred language.</td>
</tr>
<tr>
<td><strong>Agent überschreitet den Plan / macht ungebetene Änderungen</strong><br>→ Füge in der <code>.agent.md</code> unter "Rules" hinzu: <em>"Ändere nur Dateien, die explizit im Plan genannt sind. Keine ungebetenen Refactors."</em></td>
<td><strong>Agent exceeds the plan / makes unrequested changes</strong><br>→ Add to the <code>.agent.md</code> under "Rules": <em>"Only modify files explicitly listed in the plan. No unrequested refactoring."</em></td>
</tr>
</table>

---

## Referenzen / References

- [GitHub Copilot Customisation Docs](https://docs.github.com/en/copilot/customizing-copilot)
- [awesome-copilot](https://github.com/github/awesome-copilot) - Beispiele und Best Practices / Examples and best practices

## ./Anforderungsdokument_BelegBox_v1.0.md
# Anforderungsdokument BelegNest (Quittungs- & Beleg-Archiv)
## Softwareprojekt Welle 10

---

| | |
|---|---|
| **Projekt** | BelegNest. Dein sicherer Platz fuer jeden Beleg |
| **Unternehmen** | WAMOCON GmbH |
| **App Version** | 1 |
| **Erstellt von** | Daniel Moretz |
| **Eingereicht an** | Waleri Moretz (Geschäftsführung) |
| **Datum** | 6. Mai 2026 |
| **Vertraulichkeit** | Intern vertraulich |
| **Status** | Zur Freigabe eingereicht |

---

## 1. Zusammenfassung

### 1.1 Die Idee

**BelegNest** ist eine browserbasierte Web-App, mit der Verbraucher und Selbstständige Kassenzettel, Quittungen und Rechnungen per Smartphone-Foto digitalisieren, archivieren und durchsuchbar machen mit Garantie-Ablauf-Tracking, Kategorisierung und Export für den Steuerberater. Alle Daten bleiben in V1 lokal im Browser (IndexedDB), ohne Server-Upload, ohne Account.

Das Produkt löst ein allgegenwärtiges Problem: Kassenzettel verblassen innerhalb von 6–18 Monaten auf Thermopapier bis zur Unlesbarkeit (Verbraucherzentrale Bundesverband 2025). Beim Umtausch, bei der Garantie-Reklamation oder der Steuererklärung fehlt der Beleg. Die Schublade voller Zettel ist das analoge Chaos unserer Zeit.

**V1** liefert einen simplen Workflow: Foto machen → Beleg gespeichert mit Datum, Betrag und Kategorie (manuell oder aus dem Foto abgelesen) → suchbar, sortierbar, filterbar → Export als ZIP oder PDF-Sammlung. Garantie-Tracker: "Garantie für deine Bohrmaschine läuft in 3 Monaten ab." Alles offline-fähig, kein Account, kein Cloud-Upload.

**V2** ergänzt KI: Automatische OCR-Extraktion von Datum, Betrag und Händler aus dem Foto. Automatische Kategorisierung (Lebensmittel, Elektronik, Kleidung). Cloud-Sync (Ende-zu-Ende-verschlüsselt). DATEV-Export für Selbstständige. Ausgaben-Analyse: "Du gibst €340/Monat bei Amazon aus."

### 1.2 Warum jetzt?

**Thermopapier-Verblassung ist ein anerkanntes Verbraucherproblem.** Ab 2025 dürfen in der EU keine Kassenzettel mehr auf Bisphenol-A-haltigem Thermopapier gedruckt werden (EU-Verordnung 2023/1132). Allerdings verblassen auch die Alternativen (Bisphenol-S, phenolfreie Tinten) nach 12–24 Monaten unter Sonnenlicht und Wärme (Verbraucherzentrale Test 2025). Digitale Belege sind die einzige dauerhafte Lösung.

**Digitale Belegpflicht wächst.** Seit 2020 gilt in DE die Belegausgabepflicht (§ 146a AO + KassenSichV): Händler müssen Belege ausgeben. Gleichzeitig fördern immer mehr Händler E-Bons (Rewe, dm, IKEA), aber ein einheitliches Archiv für papierlose + digitale Belege fehlt auf Verbraucherseite.

**Selbstständige brauchen Belegorganisation.** 1,4 Mio. Selbstständige und Freiberufler in DE (Destatis 2025) sind zur Belegaufbewahrung verpflichtet (§147 AO: 10 Jahre für steuerlich relevante Belege). Professionelle Tools wie lexoffice, sevDesk oder DATEV sind für die Belegerfassung Overkill, viele Selbstständige fotografieren Belege und speichern sie unsortiert in der Foto-Galerie.

**Privacy-Trend.** Bestehende Beleg-Apps (1Tap Receipts, Expensify, Klarna Receipts) laden alle Belege auf US-Server. DSGVO-bewusste Nutzer wollen eine Lösung, die Daten lokal oder Ende-zu-Ende-verschlüsselt speichert. BelegNest ist Privacy-by-Design: V1 verlässt kein Byte den Browser.

Quellen: EU-Verordnung 2023/1132 (Bisphenol-A-Verbot Thermopapier), Verbraucherzentrale Bundesverband. Kassenzettel-Haltbarkeit 2025, §146a AO + KassenSichV, §147 AO Aufbewahrungsfristen, Destatis Selbstständigenstatistik 2025

---

## 2. Marktanalyse: Fokus DACH

### 2.1 Zielmarkt und Segmentierung

Der adressierbare Markt umfasst zwei Haupt-Segmente:

**Segment A. Verbraucher (B2C):**
- 41 Mio. Haushalte in DE (Destatis 2025) + 4 Mio. AT + 3,9 Mio. CH
- Jeder Haushalt erhält durchschnittlich 6–10 Kassenzettel pro Woche (GfK Verbraucherreport 2025)
- Relevante Untergruppe: Haushalte mit Elektronik/Möbel-Käufen (Garantie-Thema): ~25 Mio. Haushalte/Jahr
- Relevante Untergruppe: Haushalte mit Steuererklärung (Belege für Handwerkerleistungen, Haushaltshilfe): ~28 Mio. Steuererklärungen/Jahr in DE

**Segment B. Selbstständige & Freiberufler (B2Prosumer):**
- 1,4 Mio. Selbstständige in DE (Destatis 2025)
- 560.000 in AT + CH
- Aufbewahrungspflicht 10 Jahre → hohe Disziplin nötig, bisher schlecht digitalisiert

### 2.2 Marktvolumen

- **Globaler Receipt-Management-Markt:** €1,2 Mrd. (2025), CAGR 11 % bis 2030 (MarketsandMarkets 2025)
- **DACH-Anteil:** ~€120–150 Mio. (geschätzt, basierend auf DACH-Anteil an Enterprise-Expense-Management)
- **Consumer-Segment (digitale Beleg-Tools):** Weitgehend unmonetarisiert in DACH, geschätztes Potenzial bei 1 % Penetration: €5–15 Mio./Jahr

### 2.3 Das Kernproblem: Kein Ort für Kassenzettel

| Problemdimension | Status quo | Konsequenz |
|---|---|---|
| Thermopapier verblasst | 80 % aller Kassenzettel nach 18 Monaten unlesbar (VZ-Test 2025) | Garantie-Anspruch nicht durchsetzbar |
| Chaos-Schublade | Belege unsortiert in Schublade, Portemonnaie, Jacken | Beleg bei Bedarf nicht findbar |
| Steuerbelege | Handwerkerrechnung, Brillen-Beleg, Spende, alles irgendwo | Steuerlich absetzbare Kosten werden vergessen |
| Foto-Galerie-Chaos | Beleg-Fotos zwischen Urlaubsbildern und Selfies | Nicht durchsuchbar, nicht kategorisiert |
| E-Bons verstreut | Rewe-Bon per E-Mail, dm per App, IKEA per Login | Kein einheitliches Archiv |
| Datenschutz | Expensify, 1Tap: US-Cloud, Belegdaten auf fremden Servern | DSGVO-Risiko, Profilbildung durch Dritte |

### 2.4 Regulatorischer Kontext

- **§147 AO (DE):** Steuerlich relevante Belege müssen 10 Jahre aufbewahrt werden. Digitale Kopien sind seit der GoBD 2019 als Ersatz für Papierbelege anerkannt, wenn die Unveränderbarkeit sichergestellt ist.
- **§132 BAO (AT):** Vergleichbare 7-Jahres-Aufbewahrungspflicht.
- **Verbraucherschutz:** Garantie-Ansprüche (§437–442 BGB) erfordern Kaufnachweis. Digitale Belege werden von der Rechtsprechung akzeptiert (BGH-Urteil 2019, Az. VIII ZR 66/17, digitale Kopie als Beweis).
- **DSGVO:** Kassenzettel enthalten keine personenbezogenen Daten i.d.R. (außer bei namentlichen Rechnungen). Die App selbst erhebt in V1 keine personenbezogenen Daten (kein Account). In V2 mit Cloud-Sync: Ende-zu-Ende-Verschlüsselung, EU-Hosting, DPA.

Quellen: §147 AO, §132 BAO (AT), GoBD 2019, BGH VIII ZR 66/17, EU-VO 2023/1132, Verbraucherzentrale 2025

---

## 3. Wettbewerb

### 3.1 Direkte und indirekte Anbieter

| Anbieter | Art | Stärke | Schwäche / Chance für BelegNest |
|---|---|---|---|
| **Expensify** (US) | Enterprise Expense Mgmt | Mächtiges Tool, OCR, Integrations | Overkill für Verbraucher, US-Cloud, €10+/Monat, Unternehmensfokus |
| **1Tap Receipts** (US) | Consumer Receipt Scan | Einfach, OCR | US-Cloud, Datenschutzbedenken, seit 2023 kaum Updates |
| **Klarna Receipts** | Consumer (in Klarna-App) | Automatisch bei Klarna-Zahlung | Nur Klarna-Käufe, kein allgemeines Belegarchiv |
| **lexoffice / sevDesk / FastBill** | Buchhaltungs-SaaS | Belegerfassung integriert | Zu komplex und teuer für reine Beleg-Archivierung (€7–15/Monat), B2B-Fokus |
| **Google Fotos / Apple Fotos** | Galerie | OCR-Textsuche | Keine Struktur, keine Kategorien, keine Garantie-Tracker, keine Exportfunktion |
| **Evernote / Notion** | Notizen | Flexibel | Kein dedizierter Beleg-Workflow, kein OCR in Free, Overkill |
| **Ordner im Keller** | Analog | Gewohnt | Verblasst, brennbar, nicht durchsuchbar, verlierbar |

**Marktlücke:** Kein Anbieter kombiniert **lokale/private Speicherung (kein Cloud-Zwang)**, **dedizierter Beleg-Workflow** (nicht generische Notiz-App), **Garantie-Ablauf-Tracking**, **Steuerberater-Export**, **Offline-fähig** und **€0 Kosten in V1**, speziell für den DACH-Verbraucher und Selbstständigen-Markt.

---

## 4. Zielgruppe

### 4.1 Primäre Zielgruppe

**Verbraucher und Selbstständige im DACH-Raum**, die Belege aufbewahren müssen oder wollen für Garantie, Steuern oder Überblick.

Vier Nutzerprofile:

**Garantie-Bewusster Verbraucher.** Kauft regelmäßig Elektronik, Möbel, Haushaltsgeräte. Will bei Defekt den Beleg griffbereit haben, nicht in der Schublade suchen. Nutzt BelegNest für alle Käufe >€50.

**Steuererklärung-Sammler.** Sammelt Belege für Handwerkerleistungen (§35a EStG), Brillen, Zahnersatz, Spenden, Arbeitsmittel. Braucht am Jahresende eine sortierte Sammlung für den Steuerberater.

**Freelancer/Selbstständiger.** Fotografiert heute Belege und speichert sie in Google Drive unsortiert. Braucht schnelle Erfassung + DATEV-/Steuerberater-Export + Archivpflicht 10 Jahre.

**Haushaltsbuch-Nutzer.** Will verstehen, wohin das Geld geht. Erfasst Belege als Grundlage für Ausgabenüberblick (nicht detailliertes Tracking wie YNAB, sondern grobe Kategorien).

### 4.2 Sekundäre Zielgruppe

- **Vermieter** (Belege für Nebenkostenabrechnung sammeln)
- **WG-/Paar-Budgets** (gemeinsame Ausgaben dokumentieren und aufteilen)
- **Eltern** (Kinder-Ausgaben für Steuern: Betreuungskosten, Nachhilfe, Schulmaterial)

### 4.3 Nicht Zielgruppe

- Unternehmen mit Buchhaltungsabteilung (brauchen lexoffice/DATEV)
- Nutzer die ein vollständiges Haushaltsbuch wollen (dafür gibt es YNAB, MoneyMoney)
- Reisekostenabrechnungen in Firmen (Expensify/Spendesk)

---

## 5. Nutzen

### 5.1 Nutzen für die Nutzer

| Problem heute | Lösung durch BelegNest | Konkreter Vorteil |
|---|---|---|
| Kassenzettel verblasst | Foto = dauerhafte digitale Kopie | Garantie-Anspruch immer durchsetzbar |
| Beleg nicht findbar | Suche nach Händler, Datum, Betrag, Kategorie | In 3 Sekunden gefunden statt 20 Minuten Schubladen-Suche |
| Steuerbelege vergessen | Kategorie "Steuerlich absetzbar" + Jahresexport | Keine vergessenen Absetzbeträge, durchschnittlich €200–500/Jahr mehr Erstattung |
| Kein Garantie-Überblick | Garantie-Ablauf-Tracker mit Reminder | Nie wieder abgelaufene Garantie verpassen |
| Datenschutz-Bedenken bei Cloud-Apps | Daten bleiben lokal im Browser (IndexedDB) | Kein Byte auf fremden Servern |
| Zettel-Chaos | Digitales, durchsuchbares Archiv | Aufgeräumtes Gefühl, Kontrolle über Finanzen |
| Steuerberater bekommt Schuhkarton | PDF-Export nach Kategorie + Jahr | Steuerberater zufrieden, weniger Beratungs-Stunden = weniger Kosten |

### 5.2 Nutzen für die WAMOCON GmbH

**Täglich wiederkehrender Anwendungsfall:** Jeder Einkauf erzeugt einen Beleg, die App wird Gewohnheit.

**Sticky durch Datengravitation:** Nach 200 gespeicherten Belegen wechselt niemand die App.

**Privacy als Differenzierer:** "Deine Belege bleiben bei dir" ist ein starkes Marketing-Argument in Post-Snowden-DACH.

**Klarer Upgrade-Pfad:** Free (lokal) → Pro (OCR + Cloud-Sync + DATEV-Export) ist ein natürlicher Conversion-Trichter.

**SEO-Potenzial:** "Kassenzettel aufbewahren", "Garantie Beleg verloren", "Belege digitalisieren", informationsgetriebene Suchanfragen mit hohem Volumen.

---

## 6. Abhängigkeiten und Machbarkeit

### 6.1 Technische Services

| Service | Funktion | Abhängigkeit | Kosten V1 |
|---|---|---|---|
| **Cloudflare Pages / Vercel** | Statisches Hosting | Kein Exklusiv | €0/Monat |
| **IndexedDB (Browser-nativ)** | Lokale Datenspeicherung | Browser-API | €0 |
| **Kamera-API (MediaDevices)** | Foto-Aufnahme im Browser | Browser-API | €0 |
| **Plausible Analytics (EU)** | Cookiefreies Tracking | Optional | €9/Monat |
| **Stripe** | Pro-Tier-Zahlung | Zertifiziert | 1,4 % + €0,25/Tx |

### 6.2 V1: Komplett offline-fähig

V1 nutzt ausschließlich Browser-APIs:
- **IndexedDB** für strukturierte Daten (Beleg-Metadaten: Datum, Betrag, Kategorie, Händler, Notizen)
- **File/Blob Storage in IndexedDB** für Beleg-Fotos (als komprimiertes JPEG, ~200KB/Beleg)
- **Kamera-API** für Foto-Aufnahme
- **Service Worker** für PWA-Offline-Fähigkeit
- **Blob-Download** für ZIP-/PDF-Export

Kapazität: Ein typischer Browser erlaubt 50–500 MB IndexedDB-Speicher. Bei 200 KB/Beleg = **250–2.500 Belege** lokal speicherbar. Für 95 % der Nutzer ausreichend.

### 6.3 V2-Abhängigkeiten (Vorausschau)

| Service | V2-Funktion | Kosten |
|---|---|---|
| **Tesseract.js (WASM)** | OCR im Browser (client-seitig) | €0 (Open Source) |
| **OpenAI API / Mistral** | Intelligente Kategorisierung, Händler-Erkennung | ~€0,005/Beleg |
| **Supabase (EU)** | Cloud-Sync mit E2E-Verschlüsselung | Ab €25/Monat |
| **Web Crypto API** | Ende-zu-Ende-Verschlüsselung | Browser-nativ, €0 |

### 6.4 Gesamtbewertung

V1 ist ohne jede externe Abhängigkeit umsetzbar. Kein API-Key, kein Server, kein Account-System. Die App ist ein statisches Frontend mit lokaler Datenspeicherung: Das einfachste mögliche Architekturmodell. Umsetzbar in **2 Wochen** durch ein Solo-/Duo-Team.

---

## 7. Anforderungen Version 1

### 7.1 Hauptprozesse

#### 7.1.1 Beleg erfassen

| ID | Anforderung | Priorität | Status |
|---|---|---|---|
| BE-01 | "Beleg fotografieren"-Button öffnet Kamera (rear-facing) im Browser | Muss | Neu |
| BE-02 | Alternativ: Beleg-Bild aus Galerie hochladen (File Input) | Muss | Neu |
| BE-03 | Foto wird automatisch komprimiert (max. 1200px Breite, JPEG 80 %, ~200KB) | Muss | Neu |
| BE-04 | Eingabefelder: Datum (Datepicker, Default=heute), Betrag (€), Händler (Freitext + Autocomplete aus bisherigen), Kategorie (Dropdown) | Muss | Neu |
| BE-05 | Kategorien: Lebensmittel, Drogerie, Elektronik, Kleidung, Haushalt, Auto/Mobilität, Gesundheit, Kinder, Büro/Arbeitsmittel, Restaurant, Freizeit, Handwerker, Sonstiges, Steuerlich absetzbar | Muss | Neu |
| BE-06 | Optionales Feld: Notiz (Freitext, z.B. "Garantie 3 Jahre") | Soll | Neu |
| BE-07 | Optionales Feld: Garantie-Dauer (6M / 12M / 24M / 36M / 60M / eigene Eingabe) | Muss | Neu |
| BE-08 | Beleg speichern = in IndexedDB persistiert | Muss | Neu |
| BE-09 | Gesamter Erfassungsprozess in <30 Sekunden abschließbar | Muss | Neu |

#### 7.1.2 Beleg-Archiv & Suche

| ID | Anforderung | Priorität | Status |
|---|---|---|---|
| BA-01 | Listenansicht aller Belege (neueste zuerst) mit Thumbnail, Händler, Betrag, Datum | Muss | Neu |
| BA-02 | Volltext-Suche über Händler und Notizen | Muss | Neu |
| BA-03 | Filter: nach Kategorie, Zeitraum (Monat/Quartal/Jahr/Custom), Betrag-Range | Muss | Neu |
| BA-04 | Sortierung: Datum, Betrag, Händler (A-Z) | Muss | Neu |
| BA-05 | Beleg-Detailansicht: Foto in voller Größe + alle Metadaten + Bearbeiten-Button | Muss | Neu |
| BA-06 | Beleg löschen mit Bestätigung | Muss | Neu |
| BA-07 | Beleg bearbeiten (alle Felder nachträglich änderbar) | Muss | Neu |
| BA-08 | Summe aller angezeigten Belege (z.B. "12 Belege, gesamt €847,30") | Muss | Neu |

#### 7.1.3 Garantie-Tracker

| ID | Anforderung | Priorität | Status |
|---|---|---|---|
| GT-01 | Separater Tab "Garantien" zeigt nur Belege mit Garantie-Dauer | Muss | Neu |
| GT-02 | Ampel-System: 🟢 Garantie aktiv (>3 Monate) / 🟡 Läuft bald ab (<3 Monate) / 🔴 Abgelaufen | Muss | Neu |
| GT-03 | Sortierung: "Bald ablaufend" zuerst | Muss | Neu |
| GT-04 | Push-Notification (wenn PWA installiert): "Garantie für [Produkt] läuft in 30 Tagen ab" | Soll | Neu |
| GT-05 | Aktions-Link: "Jetzt reklamieren?" mit Musterbrief-Vorlage | Soll | Neu |

#### 7.1.4 Export

| ID | Anforderung | Priorität | Status |
|---|---|---|---|
| EX-01 | Export als ZIP: alle Beleg-Fotos + CSV mit Metadaten (Datum, Betrag, Händler, Kategorie) | Muss | Neu |
| EX-02 | Export als PDF-Sammlung: 4 Belege pro A4-Seite mit Metadaten darunter | Muss | Neu |
| EX-03 | Export filterbar: nur Kategorie "Steuerlich absetzbar", nur Jahr 2025, nur Händler X | Muss | Neu |
| EX-04 | Export-Dateiname: "BelegNest_Export_[Jahr]_[Kategorie].zip/pdf" | Muss | Neu |
| EX-05 | Export erfolgt komplett client-seitig (JSZip + pdf-lib) | Muss | Neu |

### 7.2 Basisfunktionalitäten

| ID | Anforderung | Priorität | Status |
|---|---|---|---|
| BF-01 | Kein Account/Login in V1. App sofort nutzbar | Muss | Neu |
| BF-02 | Alle Daten lokal in IndexedDB, kein Server-Upload | Muss | Neu |
| BF-03 | PWA-installierbar (Add to Homescreen, Offline-fähig) | Muss | Neu |
| BF-04 | Responsive Mobile-First-Design | Muss | Neu |
| BF-05 | Ladezeit <2 Sekunden | Muss | Neu |
| BF-06 | Cookie-freies Tracking (Plausible) | Muss | Neu |
| BF-07 | DSGVO: Datenschutzerklärung, Impressum | Muss | Neu |
| BF-08 | Daten-Backup: Export als JSON (für manuelles Backup/Geräte-Wechsel) | Muss | Neu |
| BF-09 | Daten-Import: JSON-Import (Wiederherstellen auf neuem Gerät) | Muss | Neu |
| BF-10 | Speicherplatz-Anzeige: "Du nutzt 45 MB von ~200 MB verfügbar" | Soll | Neu |

### 7.3 Preismodell

| Tier | Preis | Inhalt |
|---|---|---|
| **Free** | €0 | Unbegrenzte Belege (lokal), manuelle Eingabe, ZIP/PDF-Export, Garantie-Tracker, Offline-PWA |
| **Pro** | €3,99/Monat oder €29,99/Jahr | OCR-Erkennung (V2), Cloud-Sync (E2E-verschlüsselt, V2), DATEV-Export (V2), Ausgaben-Analyse, Multi-Device-Sync |

**Strategie:** Free-Tier ist dauerhaft nutzbar und vollständig, kein "crippled free". Das Pro-Tier kommt erst mit V2-Features. In V1 ist die App komplett kostenlos, um Nutzerbasis aufzubauen.

### 7.4 Scope: Was ist Version 1 und was nicht

| In Scope Version 1 | Out of Scope, ab V2 |
|---|---|
| Beleg-Foto + manuelle Metadaten | OCR-Automatisierung (Tesseract.js) |
| Lokale Speicherung (IndexedDB) | Cloud-Sync (E2E-verschlüsselt) |
| Suche, Filter, Sortierung | Volltextsuche in Beleg-Fotos |
| Garantie-Tracker mit Ampel | Push-Notifications bei Garantie-Ablauf |
| ZIP/PDF-Export | DATEV-Export |
| JSON-Backup/Import | Multi-Device-Sync |
| Kategorien manuell | KI-Kategorisierung |
| Summen-Anzeige | Ausgaben-Analyse/Charts |

---

## 8. Anforderungen Version 2 (KI-Erweiterung)

| ID | Anforderung | Priorität | Nutzen |
|---|---|---|---|
| KI-01 | **OCR im Browser:** Tesseract.js (WASM) extrahiert Datum, Gesamtbetrag und Händlername aus Beleg-Foto → Felder vorausgefüllt | Muss | Erfassung von 30 Sek auf 5 Sek reduziert |
| KI-02 | **Intelligente Kategorisierung:** Aus Händlername Kategorie ableiten (REWE → Lebensmittel, MediaMarkt → Elektronik, Apotheke → Gesundheit) | Muss | Kein manuelles Dropdown-Klicken |
| KI-03 | **Cloud-Sync (E2E):** Belege verschlüsselt in Supabase EU speichern, auf mehreren Geräten abrufbar | Muss | Kein Datenverlust bei Gerätewechsel |
| KI-04 | **Ausgaben-Analyse:** Monats-/Jahresübersicht nach Kategorie (Balkendiagramm, Tortendiagramm), Trend-Vergleich | Soll | Überblick über Ausgabenmuster |
| KI-05 | **DATEV-Export:** Belege im DATEV-kompatiblen Format (CSV + Bilder nach Ordnerstruktur) exportieren | Muss | Nahtlose Übergabe an Steuerberater |
| KI-06 | **E-Bon-Import:** Weitergeleitete Beleg-E-Mails automatisch parsen (Parser für Rewe, dm, IKEA, Amazon) | Soll | Digitale + physische Belege in einem Archiv |
| KI-07 | **Garantie-Reminder Push:** Browser-Push oder E-Mail wenn Garantie in 30/7 Tagen abläuft | Muss | Keine verpasste Reklamation |
| KI-08 | **Duplikat-Erkennung:** Bei ähnlichem Betrag + Datum + Händler: "Hast du diesen Beleg schon erfasst?" | Soll | Kein Chaos durch Doppelerfassung |
| KI-09 | **Budget-Alerts:** "Du hast diesen Monat schon €180 für Restaurant ausgegeben, 20 % mehr als letzten Monat" | Kann | Awareness ohne detailliertes Haushaltsbuch |
| KI-10 | **Reklamations-Assistent:** Bei Garantie-Fall: Musterbrief-Generator mit Händler, Kaufdatum, Produkt, Mangelbeschreibung | Soll | Convenience bei Garantie-Nutzung |

---

## 9. Zwei Alternativkonzepte in ähnlicher Richtung

### 9.1 Alternative A: GarantiePilot (reiner Garantie-Tracker)

**Kernidee:** Fokus ausschließlich auf Garantie-Verwaltung. Kein allgemeines Beleg-Archiv, sondern: "Registriere deine Produkte und wir erinnern dich, bevor die Garantie abläuft."

**V1:** Produkt + Kaufdatum + Garantie-Dauer + Beleg-Foto → Reminder-Kalender. ICS-Export.

**V2:** Barcode-/QR-Scan → automatische Produkt-Erkennung. Hersteller-Garantie-Datenbank. Reklamations-Workflow.

**Pricing:** Free ≤10 Produkte. Pro €1,99/Monat.

**Warum verfolgbar:** Spitzerer Use Case, leichter zu erklären. Risiko: zu nischig für großes Wachstum.

### 9.2 Alternative B: BelegSteuer (Steuerbelege-Sammler für Privatpersonen)

**Kernidee:** Fokus nur auf steuerlich relevante Belege für die jährliche Steuererklärung. Keine Garantie, keine Lebensmittel, nur Handwerker, Gesundheit, Spenden, Arbeitsmittel, Kinderbetreuung.

**V1:** Kategorien nach Steuerformular-Feldern (Anlage Haushaltsnahe Dienstleistungen, Werbungskosten, Sonderausgaben). Jahresexport als Steuerberater-Paket.

**V2:** ELSTER-Vorausfüllungs-Integration. Schätzung der Steuerersparnis pro Beleg.

**Pricing:** Free im Steuerjahr. €9,99 einmalig für Jahresexport.

**Warum verfolgbar:** Klarer Monetarisierungszeitpunkt (Q1 = Steuererklärungssaison). Risiko: nur saisonale Nutzung.

---

## 10. Chancen und Risiken

### 10.1 Chancen

| Chance | Begründung |
|---|---|
| Privacy-Differenzierer | "Deine Belege bleiben auf deinem Gerät", unique in DACH |
| Gewohnheitsbildung | Beleg fotografieren nach jedem Einkauf wird Routine → daily active usage |
| Steuerberater-Empfehlung | Steuerberater empfehlen Mandanten die App für geordnete Belegübergabe |
| Selbstständigen-Upgrade-Pfad | Free → Pro (DATEV-Export) ist natürlicher Conversion-Trigger |
| SEO-Keywords | "Kassenzettel aufbewahren", "Beleg verloren was tun", "Garantie Beweis", informational + transactional |
| E-Bon-Trend | Wachsender E-Bon-Markt (Rewe, dm, IKEA) → BelegNest als zentrales Archiv |

### 10.2 Risiken

| Risiko | Gegenmaßnahme |
|---|---|
| IndexedDB-Speicherlimit | Speicherplatz-Warnung + Cloud-Sync in V2 + JSON-Backup |
| Browser-Daten werden gelöscht (Clear Cache) | Prominenter Hinweis "Erstelle ein Backup!" + JSON-Export + PWA stabilisiert Persistenz |
| Geringe Zahlungsbereitschaft für Beleg-App | Free-Tier ohne Einschränkung → Nutzerbasis aufbauen → Pro erst mit V2-Mehrwert |
| Beleg-Fotos werden unscharf | Kamera-UI mit Fokus-Hinweis + Bildschärfe-Check vor Speicherung |
| OCR-Qualität bei zerknitterten Belegen | Tesseract.js mit Preprocessing (Kontrast, Entzerrung) + manuelle Korrektur immer möglich |

---

## 11. Umsetzungsplan Version 1

### 11.1 Technologiestack

- **Frontend:** Next.js 15 (Static Export) oder SvelteKit, Tailwind CSS, TypeScript
- **Lokale Speicherung:** IndexedDB via idb (Wrapper-Bibliothek)
- **Kamera:** MediaDevices API (navigator.mediaDevices.getUserMedia)
- **Bildkompression:** browser-image-compression (Open Source)
- **PDF-Export:** pdf-lib (client-seitig)
- **ZIP-Export:** JSZip (client-seitig)
- **Hosting:** Cloudflare Pages (kostenlos)
- **Analytics:** Plausible EU
- **Payment:** Stripe Checkout

### 11.2 Umsetzungsplan 5 Werktage

| Tag | Fokus | Inhalt |
|---|---|---|
| Tag 1 | Datenmodell + Erfassung | IndexedDB-Schema (Belege, Kategorien), Kamera-Integration, Foto-Kompression, Erfassungs-Formular |
| Tag 2 | Archiv + Suche | Listenansicht mit Thumbnails, Suche, Filter (Kategorie, Zeitraum, Betrag), Sortierung, Beleg-Detail-Ansicht |
| Tag 3 | Garantie-Tracker | Separater Garantie-Tab, Ampel-Logik, Sortierung nach Ablauf, Garantie-Eingabe im Erfassungs-Flow |
| Tag 4 | Export + Backup | ZIP-Export (Fotos + CSV), PDF-Export (4/Seite), JSON-Backup/Import, Filter-Export |
| Tag 5 | PWA, QA, Launch | Service Worker, Manifest, Offline-Test, Responsive-Test, Plausible, Impressum/Datenschutz, Deploy |

---

## 12. Marke, Branding und Marketing

### 12.1 Markenname und Bedeutung

**BelegNest** ist warmherzig, einprägsam und sofort verständlich:

- **Beleg:** Das, was reinkommt (Kassenzettel, Quittung, Rechnung)
- **Nest:** Der sichere, geborgene Aufbewahrungsort, mental: ein warmes Nest, in dem alles geschützt ist
- **Zusammen:** Ein digitales Nest, in dem jeder Beleg sicher, sortiert und jederzeit wiederfindbar aufgehoben ist

Der Name transportiert Vertrauen und Geborgenheit, ist SEO-relevant ("Beleg" ist ein Kernkeyword), in DE/AT/CH verständlich und als Domain verfügbar (.de, .com, .app).

### 12.2 Positionierung

| Dimension | Ausprägung |
|---|---|
| **Markenversprechen** | "Deine Belege. Sicher aufgehoben. Nachhaltig gedacht." |
| **Werte** | Privat · Einfach · Ordentlich · Zuverlässig · Nachhaltig |
| **Tonalität** | Warmherzig-freundlich, vertrauenswürdig, nachhaltigkeitsbewusst. Nie technisch, nie belehrend |
| **Sprachregeln** | Du-Ansprache. Kurz. Klare Handlungsaufforderungen. "Foto machen. Sicher aufgehoben." |
| **Was BelegNest nicht ist** | Keine Buchhaltungssoftware. Kein Haushaltsbuch. Keine Cloud-Datenkrake. |

**Claim-Vorschläge:**
- **"BelegNest. Foto. Ablegen. Wiederfinden."** (Hauptclaim)
- "BelegNest. Deine Belege. Sicher aufgehoben."
- "BelegNest. Schluss mit Zettelchaos. Gut fuer dich und die Umwelt."

### 12.3 Visuelle Identität

| Element | Empfehlung | Begründung |
|---|---|---|
| **Primärfarbe** | Natur-Tannengruen `#0D9668` | Nachhaltigkeit, Sicherheit, Ruhe, Vertrauen |
| **Akzentfarbe** | Warmes Petrol `#0E7490` | Digitale Kompetenz, Klarheit |
| **Sekundär** | Warmgrau `#78716C`, Sandweiß `#FAF9F6` | Ruhige, aufgeräumte Flächen |
| **Typografie** | System-Font-Stack (Inter, Segoe UI) | Schnell, nativ, vertraut |
| **Bildwelt** | Minimalistische Illustrationen: stilisierter Kassenzettel, Smartphone-Kamera, Checkmark | Klar, sofort verständlich |
| **Animation** | Grüner Checkmark-Pulse bei "Beleg gespeichert" | Belohnungsgefühl, Dopamin |

### 12.4 Marketing-Strategie

#### 12.4.1 SEO-Content (Hauptkanal)

| Keyword-Cluster | Suchvolumen DACH/Monat (est.) | Content-Strategie |
|---|---|---|
| "Kassenzettel aufbewahren" / "wie lange" | 25.000+ | Ratgeber-Artikel + CTA zur App |
| "Garantie Beleg verloren" | 12.000+ | Guide + Musterbrief + App als Prävention |
| "Belege digitalisieren" | 8.000+ | Vergleichsartikel (BelegNest vs. Scanner vs. Foto) |
| "Beleg für Steuererklärung" | 15.000+ | Steuer-Checkliste: "Diese Belege brauchst du" → App |
| "Thermopapier verblasst" | 5.000+ | Erklärartikel + Lösung: BelegNest |
| "Steuerberater Belege übergeben" | 3.000+ | Guide für Selbstständige → Pro-Feature |

#### 12.4.2 Steuerberater-Kanal

Steuerberater sind frustriert von Mandanten, die Belege in Schuhkartons bringen. BelegNest als Empfehlung:
- Flyer für Steuerberater-Kanzleien: "Empfehlen Sie Ihren Mandanten BelegNest. Belege sortiert, digital, exportbereit."
- Steuerberater-Affiliate-Programm: Empfehlung → Pro-Tier-Vergünstigung für Mandanten
- DATEV-Export als Pro-Feature = direkte Arbeitserleichterung für Steuerberater

#### 12.4.3 Saisonales Marketing

| Saison | Aktion |
|---|---|
| **Januar–März** (Steuererklärungszeit) | "Deine Belege aus 2025, noch da? Jetzt digital sichern." |
| **Black Friday / Weihnachten** | "Geschenke-Belege sofort sichern. Umtausch ohne Stress." |
| **Elektronik-Kauf-Peaks (Herbst)** | "Neues iPhone? Beleg in BelegNest = 2 Jahre Garantie gesichert." |

#### 12.4.4 Kennzahlen und Ziele (6-Monats-Plan)

| KPI | Monat 1 | Monat 3 | Monat 6 |
|---|---|---|---|
| PWA-Installationen | 100 | 1.500 | 8.000 |
| Erfasste Belege/Monat | 500 | 15.000 | 80.000 |
| Unique Visitors/Monat | 800 | 8.000 | 35.000 |
| Pro-Tier-Conversions (V2) |, |, | 200 (ab V2-Launch) |
| SEO-Rankings Top-10 | 2 Keywords | 10 Keywords | 25 Keywords |

---

## Quellenverzeichnis

| Quelle | Inhalt |
|---|---|
| EU-Verordnung 2023/1132 | Verbot von Bisphenol A in Thermopapier ab 2025, eur-lex.europa.eu |
| Verbraucherzentrale Bundesverband 2025 | Test: Kassenzettel-Haltbarkeit auf verschiedenen Papiertypen, vzbv.de |
| §146a AO + KassenSichV | Belegausgabepflicht in DE |
| §147 AO | Aufbewahrungsfristen steuerlich relevanter Belege (10 Jahre) |
| §132 BAO (AT) | Aufbewahrungsfristen Österreich (7 Jahre) |
| GoBD 2019 | Grundsätze ordnungsgemäßer Buchführung, digitale Belege als Ersatz |
| BGH VIII ZR 66/17 (2019) | Digitale Kopie als Kaufnachweis anerkannt |
| Destatis Selbstständigenstatistik 2025 | 1,4 Mio. Selbstständige in DE, destatis.de |
| Destatis Haushaltsstatistik 2025 | 41 Mio. Haushalte in DE, destatis.de |
| GfK Verbraucherreport 2025 | Kassenzettel-Frequenz und Aufbewahrungsverhalten |
| MarketsandMarkets. Receipt Management Market 2025 | Marktgröße €1,2 Mrd., CAGR 11 % |
| Statista. Steuererklärungen DE 2025 | 28 Mio. Steuererklärungen/Jahr |
| Sistrix. Keyword-Analyse Beleg/Garantie 2025 | Suchvolumen-Daten DACH |

---

*Dokument erstellt: 6. Mai 2026 | Version 1.0 | Autor: Daniel Moretz | Status: Zur Freigabe eingereicht*
*Alle Marktdaten basieren auf zum Erstellungszeitpunkt öffentlich verfügbaren Quellen.*

## ./HOWTO.md
# HOWTO - BelegNest Setup & Development Guide

> **BelegNest** - Dein sicherer Platz fuer jeden Beleg
> Kassenzettel, Quittungen und Rechnungen digital archivieren, durchsuchen und exportieren.

---

## DE Deutsch

---

### Schnellstart (Lokale Entwicklung)

```bash
# 1. Repository klonen und Abhaengigkeiten installieren
git clone https://github.com/Wamocon/BelegNest.git
cd BelegNest
npm install

# 2. Umgebungsvariablen einrichten
# Kopiere .env.example zu .env.local und trage die Supabase-Zugangsdaten ein
cp .env.example .env.local

# 3. Entwicklungsserver starten
npm run dev
```

Oeffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

### Verfuegbare Skripte

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Dev-Server mit Turbopack |
| `npm run build` | Erstellt den Produktions-Build |
| `npm run start` | Startet den Produktionsserver |
| `npm run lint` | Fuehrt ESLint aus |
| `npm run typecheck` | TypeScript-Typpruefung |
| `npm run verify` | Typecheck + Lint + Build |

### Projektstruktur

```
src/app/[locale]/            # Seiten mit i18n (de, en)
  auth/                      # Login/Registrierung
  capture/                   # Beleg erfassen
  archive/                   # Beleg-Archiv
  warranties/                # Garantie-Tracker
  export/                    # Export und Backup
  pricing/                   # Tarife
  admin/                     # Admin-Dashboard
  legal/                     # Impressum, Datenschutz, AGB
  manual/                    # Benutzerhandbuch
  dev/seed/                  # Testdaten anlegen
src/components/              # UI-Komponenten
  auth/                      # AuthForm, AuthGuard, AuthProvider, UserMenu
  layout/                    # Header, Footer, LanguageSwitcher, ThemeToggle
  receipts/                  # CaptureForm, ReceiptList, Modals
  legal/                     # LegalLayout
  tier/                      # PricingPanel, UpgradeGate
  warranties/                # WarrantyList
  export/                    # ExportPanel
  admin/                     # AdminDashboard
src/lib/                     # Utilities
  supabase/                  # Supabase Client/Server
  ocr.ts                     # OCR Service (Tesseract.js)
  tier-config.ts             # Tier-Konfiguration
  utils.ts                   # Hilfsfunktionen
src/i18n/                    # Internationalisierung
messages/                    # Uebersetzungen (de.json, en.json)
supabase/                    # Migrationen, Seed, Config
legal-docs/                  # Rechtliche Dokumente (Vorlagen)
docs/                        # Benutzerhandbuch, V2-Roadmap
public/test-receipts/        # Platzhalter-Belegbilder fuer Tests
```

### Features (V1)

- Beleg fotografieren oder hochladen mit automatischer Kompression
- Automatische OCR-Texterkennung (Tesseract.js) mit Datenextraktion
- Beleg-Archiv mit Volltext-Suche, Filter und Sortierung
- Erweiterte Belegattribute: Zahlungsart, Steuersatz, Tags, Belegnummer, Waehrung
- Garantie-Tracker mit Ampel-System
- ZIP-Export mit Fotos und CSV-Metadaten
- JSON-Backup und Import
- Benutzer-Authentifizierung (E-Mail/Passwort) mit Rollen (User/Admin)
- Free/Pro Tier-System mit konfigurierbaren Limits
- Admin-Dashboard zur Benutzerverwaltung
- Zweisprachig (Deutsch/Englisch)
- Light/Dark Theme
- Impressum, Datenschutz, AGB mit modernem Card-Design
- In-App Benutzerhandbuch
- Responsive Mobile-First Design

### Testdaten anlegen

1. Starte die App und registriere dich / melde dich an.
2. Navigiere zu `/dev/seed`.
3. Klicke auf "Testdaten jetzt erstellen".
4. 28 realistische Belege werden in deinem Konto angelegt.
5. Platzhalter-Belegbilder findest du unter `public/test-receipts/`.

---

## EN English

---

### Quick Start (Local Development)

```bash
# 1. Clone and install
git clone https://github.com/Wamocon/BelegNest.git
cd BelegNest
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your Supabase credentials

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Features (V1)

- Capture receipts via camera or file upload with auto-compression
- Automatic OCR text recognition (Tesseract.js) with data extraction
- Receipt archive with full-text search, filters and sorting
- Extended receipt attributes: payment method, tax rate, tags, receipt number, currency
- Warranty tracker with traffic light system
- ZIP export with photos and CSV metadata
- JSON backup and import
- User authentication (email/password) with roles (user/admin)
- Free/Pro tier system with configurable limits
- Admin dashboard for user management
- Bilingual (German/English)
- Light/Dark theme
- Legal pages (Imprint, Privacy, Terms) with modern card-based design
- In-app user manual
- Responsive mobile-first design

### Test Data

1. Start the app and register / log in.
2. Navigate to `/dev/seed`.
3. Click "Create test data now".
4. 28 realistic receipts will be created in your account.
5. Placeholder receipt images are in `public/test-receipts/`.

---

## Deployment (Vercel + Hosted Supabase)

### Supabase Setup

1. Gehe zu [supabase.com](https://supabase.com) und erstelle ein Projekt (oder nutze ein bestehendes).
2. Fuehre die Migrationen aus `supabase/migrations/` in der SQL-Konsole des Supabase Dashboards aus.
3. Fuehre die Kategorie-Seeds aus `supabase/seed.sql` aus (nur den INSERT fuer categories).

### Vercel Deployment

1. Verbinde dein GitHub-Repository mit Vercel.
2. Setze die Umgebungsvariablen im Vercel-Projekteinstellungen:

| Variable | Wert |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://<project-id>.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Dein Supabase Anon Key |
| `SUPABASE_SERVICE_ROLE_KEY` | Dein Supabase Service Role Key |
| `SUPABASE_DB_SCHEMA` | `public` |

3. Deploy ausloesen (automatisch bei Push auf `main`).

### Verfuegbare Skripte

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Startet den Dev-Server mit Turbopack (Hot Reload) |
| `npm run build` | Erstellt den Produktions-Build |
| `npm run start` | Startet den Produktionsserver |
| `npm run lint` | Fuehrt ESLint aus |
| `npm run typecheck` | Fuehrt TypeScript-Typpruefung aus |
| `npm run verify` | Typecheck + Lint + Build (vor Deployment ausfuehren) |

---

### 1b. Git-Workflow & Branch-Strategie

> 💡 **Arbeite nach dem ersten Push immer auf einem Branch - nie direkt auf `main`/`master`.**

**Empfohlener Ablauf:**

```bash
# Einmalig: Ersten Stand auf main/master pushen
git add .
git commit -m "chore: initial setup"
git push origin <main-oder-master>

# Ab jetzt: Immer auf einem Feature-Branch arbeiten
git checkout -b feature/mein-feature

# Änderungen lokal testen, dann committen
npm run dev        # testen
npm run typecheck  # Typfehler prüfen
npm run lint       # Lint prüfen

git add .
git commit -m "feat: beschreibung der Änderung"
git push origin feature/mein-feature
```

**Wichtige Regeln:**

- **Lokal testen, bevor du pushst.** Führe `npm run typecheck` und `npm run lint` aus, bevor du Änderungen pushst.
- **Alle Änderungen vor dem PR-Öffnen pushen.** Jeder neue Push auf einen offenen PR triggert automatisch die GitHub Actions - das verbraucht GitHub Actions-Minuten.
- **Nur einen PR auf einmal offen halten**, bis er gemergt ist.

> ⚠️ **Warum das wichtig ist:** Jeder Push auf einen offenen PR löst die PR Pipeline aus (Auto-Fix + Typecheck + Lint). Teste erst lokal - dann push, dann PR.

---

### 1c. Pre-commit Hook - Geheimnis-Scanner

Der Pre-commit Hook verhindert, dass API-Schlüssel, Tokens, Passwörter oder andere Geheimnisse versehentlich in GitHub eingecheckt werden. Der Hook scannt alle für den Commit vorgesehenen Dateien, **bevor** der Commit abgeschlossen wird.

#### Installation

```bash
# Einmalig nach dem Klonen ausführen - nie wieder nötig:
bash hooks/install.sh
```

> ✅ **Wie oft?** Genau **einmal** - direkt nach `npm install` beim ersten Einrichten des Repos. Nach der Installation läuft der Hook automatisch vor **jedem** `git commit`.

#### Was der Hook prüft

| Muster | Beispiel |
|--------|---------|
| AWS-Schlüssel | `AKIA...`, `aws_secret_access_key = ...` |
| GitHub-Tokens | `ghp_...`, `github_pat_...` |
| Vercel-Token | `VERCEL_TOKEN = abc123...` |
| Private Keys (PEM) | `-----BEGIN PRIVATE KEY-----` |
| Datenbankverbindungen | `postgres://user:password@host` |
| Generische Tokens | `api_key =`, `client_secret =`, `password =` |
| JWT-Tokens | `eyJ...` (vollständige `header.payload.signature`-Form) |
| Supabase Service Role | `service_role = eyJ...` |
| `.env`-Dateien | `.env`, `.env.local`, `.env.production` |

#### Wenn ein Commit blockiert wird

```
[pre-commit] BLOCKED - potential secrets detected
  ✖ src/lib/config.ts:12
    Reason: Generic API key
    Content: const API_KEY = "abc123xyz789..."
```

**Lösung:**
1. Entferne das Geheimnis aus der Datei.
2. Speichere es in deiner `.env.local` (ist bereits in `.gitignore` eingetragen).
3. Nutze GitHub Actions Secrets für CI/CD-Werte.

**Bei einem Falsch-Positiv** (z.B. ein Beispielwert in der Doku):
Füge den Kommentar `# notsecret` am Ende der betroffenen Zeile hinzu.

**Notfall-Bypass** (nur im absoluten Ausnahmefall - niemals für echte Geheimnisse!):
```bash
git commit --no-verify -m "deine Nachricht"
```

---

### 2. Supabase Setup & Warnung

> ⚠️ **KRITISCH: Sobald du einen Supabase-Account hast, speichere alle Testdaten direkt dort.**
>
> **Lege Testdaten NICHT als lokale Dateien im Projektverzeichnis ab** (z.B. JSON-Fixtures, SQL-Dumps). Füge Daten stattdessen direkt in dein Supabase-Projekt ein - über das Dashboard, per MCP-Tool oder per Migrations-Skript.

**Schritte:**

1. Gehe zu [supabase.com](https://supabase.com) und erstelle ein neues Projekt.
2. Kopiere die **Project URL**, den **Anon Key** und den **Service Role Key** aus  
   `Project Settings → API`.
3. Trage sie in deine `.env.local` Datei ein:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-anon-key
   SUPABASE_SERVICE_ROLE_KEY=dein-service-role-key
   ```

---

### 2b. Lokales Supabase Setup via Docker (Optional)

> 💡 **Dieser Schritt ist optional.** Standardmäßig verbindest du dich direkt mit einem Remote-Supabase-Projekt (siehe Abschnitt 2). Nur wenn du lieber vollständig lokal entwickelst, ohne Internetverbindung zu Supabase, verwende dieses Setup.

Für ein vollständig lokales Supabase-Setup mit Docker und einer migrations-basierten Entwicklung, kopiere diesen Prompt in deinen KI-Assistenten (z.B. GitHub Copilot in VS Code):

```
Act as an expert DevOps and database engineer. I am developing an app locally. I need to set up a local Supabase instance via Docker and establish a strict migration-based workflow. Please execute the following:

Setup: Initialize a local Supabase environment using Docker and the Supabase CLI. Check automatically before every task if Docker and the Supabase containers are running. When they are down, start them autonomously.

Initial Schema: Create the initial database schema for the app and save it as a formal Supabase migration file.

Environment Variables: Automatically extract the local Supabase connection details (API URL, anon key, service role key, DB URL) and append them to my local .env file.

Autonomous Development & Schema Versioning: You will develop the entire application based on my prompts. You must autonomously create and update tables, generate schemas, and create timestamped migration files for every change. Ensure strict version history and guarantee that absolutely no functions fail due to database inconsistencies.

Production Deployment via MCP: I use the Supabase MCP to push data to production tables. Do not provide manual push commands. Your only job for production is to verify that all local migrations are completely up to date and error-free so the MCP can handle the live deployment seamlessly.

Automated Testing & Verification: Once the Docker setup is running and the schema is applied, automatically write and execute a small integration test. This test must verify that the app can successfully read from and write to the local Docker database. If any errors or bugs are detected, diagnose and fix them immediately on your own.
```

#### Lokale Supabase-Oberfläche im Browser öffnen

Sobald der lokale Docker-Stack läuft (`npx supabase start`), stellt Supabase eine vollständige Studio-Oberfläche bereit:

| Service | URL | Beschreibung |
|---|---|---|
| **Supabase Studio** | `http://localhost:54323` | Datenbank-UI: Tabellen, SQL-Editor, Auth, Storage |
| **REST API** | `http://localhost:54321` | PostgREST API (dein App-Endpoint) |
| **PostgreSQL** | `localhost:54322` | Direktzugriff (z.B. via pgAdmin, TablePlus) |
| **Inbucket (E-Mail)** | `http://localhost:54324` | Lokaler E-Mail-Dienst für Auth-Mails |

> 💡 Die exakten Ports werden nach `npx supabase start` auch in der Konsole ausgegeben. Der Befehl `npx supabase status` zeigt sie jederzeit an.

**Lokale Umgebungsvariablen:**
```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<aus supabase status kopieren>
SUPABASE_SERVICE_ROLE_KEY=<aus supabase status kopieren>
SUPABASE_DB_URL=postgresql://postgres:postgres@localhost:54322/postgres
```

---

### 3. Supabase MCP & Schemas

#### Supabase MCP für Migrationen verwenden

Der Supabase MCP (Model Context Protocol) Server ermöglicht es deinem KI-Coding-Assistenten (z.B. GitHub Copilot, Cursor), Migrationen und Tabellen direkt zu erstellen und zu verwalten.

- Migrationen werden in `supabase/migrations/` gespeichert.
- Nutze die MCP-Tools, um Tabellen zu erstellen, Schemas zu ändern und Indizes zu verwalten.

#### Arbeiten mit mehreren Schemas

Standardmäßig macht Supabase nur das `public`-Schema über die API verfügbar. Wenn du eigene Schemas brauchst:

**1. Schema erstellen:**
```sql
CREATE SCHEMA IF NOT EXISTS app;
```

**2. Berechtigungen vergeben:**
```sql
GRANT USAGE ON SCHEMA app TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON TABLES TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
```

**3. Schema über die Supabase API zugänglich machen:**
Gehe zu `Project Settings → API → Exposed schemas` und füge deinen Schema-Namen hinzu.

---

### 4. GitHub Workflow Konfiguration

Dieses Projekt nutzt den **zentralen Wamocon CI/CD-Workflow** aus [`Wamocon/github_workflow`](https://github.com/Wamocon/github_workflow).

#### Übersicht der drei Workflows

| Workflow | Datei | Auslöser | Was es tut |
|---|---|---|---|
| **PR Pipeline** | `pr-pipeline.yml` | **Automatisch** bei jedem PR auf `main`/`master` | Auto-Fix (ESLint + Prettier) → Typecheck + Lint |
| **Deploy** | `deploy.yml` | **Manuell** - kein Auto-Trigger | Baut das Projekt via Vercel CLI und deployed auf Vercel |
| **LP Generator** | `lp-generator.yml` | **Manuell** - kein Auto-Trigger | Generiert eine Landing Page in einem neuen Repo |

> ⚠️ **Kein automatisches Deployment:** Weder ein PR noch ein Push auf `main` startet automatisch ein Deployment. Alle Deployments werden manuell über den Actions-Tab gestartet.

#### Was du tun musst

1. Überprüfe, dass `Wamocon/github_workflow` die korrekte Org/Repo-Referenz ist.
2. Aktiviere Workflow-Schreibrechte:  
   `Settings → Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests`
3. Füge **ein einziges Secret** zu deinem Repository hinzu:
   - Gehe zu `Repository → Settings → Secrets and variables → Actions → New repository secret`
   - Name: `VERCEL_PROJECT_ID`
   - Wert: *(siehe Abschnitt 5 unten)*

> ✅ **Alle anderen benötigten Secrets** (`VERCEL_TOKEN`, `VERCEL_ORG_ID`) sind **bereits auf GitHub-Organisationsebene konfiguriert**.

#### Manuelles Deployment starten

```
Repository auf GitHub → Actions → "Deploy to Vercel" → Run workflow
→ Environment auswählen: production oder preview
→ Run workflow klicken
```

---

### 5. Vercel Deployment-Strategie

#### Schritt 1: GitHub-Org Vercel-App Zugriff gewähren (Einmalig, Kritisch)

> ⚠️ **Dieser Schritt muss VOR dem Vercel-Import durchgeführt werden.** Ohne ihn erscheint dein Repo nicht in der Vercel-Importliste - auch wenn es öffentlich ist.

1. Gehe zu **GitHub → Wamocon Organisation → Settings**  
   `https://github.com/organizations/Wamocon/settings/installations`
2. Suche die **Vercel**-App in der Liste der installierten GitHub Apps.
3. Klicke auf **Configure**.
4. Scrolle zu **Repository access**.
5. Wähle **"Only select repositories"** und füge dein neues Repo hinzu.
6. Klicke **Save**.

#### Schritt 2: Erstmalige Bereitstellung (Einmalig)

1. **Repo vorübergehend öffentlich machen**  
   `Repository → Settings → General → Change visibility → Public`
2. Gehe zu [vercel.com](https://vercel.com) → **Add New Project** → **Import** → dein Repo auswählen.
3. Deploye das Projekt (Vercel erkennt Next.js automatisch).
4. **Vercel Project ID kopieren:**  
   `Vercel Project → Settings → General → Project ID` → ID kopieren.
5. **Zu GitHub Secrets hinzufügen:**  
   `Repository → Settings → Secrets and variables → Actions → New repository secret`  
   Name: `VERCEL_PROJECT_ID` | Wert: die kopierte ID.
6. **Repo auf intern zurücksetzen:**  
   `Repository → Settings → General → Change visibility → Internal`

> 💡 **Nach diesem einmaligen Setup** deployt die GitHub Action via Vercel CLI - Vercel sieht nicht mehr, wer committed, und es gibt keine Team-Seat-Fehler bei einem privaten Hobby-Account.

#### Schritt 3: Umgebungsvariablen in Vercel eintragen

> ⚠️ **WICHTIG:** Gehe zu `Vercel Project → Settings → Environment Variables` und füge **alle** Variablen aus deiner `.env.local` hinzu. Ohne diese wird der Build **fehlschlagen**.

#### Deployment-Ablauf (nach dem Setup)

| Auslöser | Ergebnis |
|---|---|
| PR auf `main`/`master` | PR Pipeline läuft automatisch (kein Deployment) |
| Merge auf `main`/`master` | Kein automatisches Deployment |
| **Manuelles Workflow-Start** | Deployment nach Auswahl: `production` oder `preview` |

**Manuell deployen:**

```
GitHub → Actions → "Deploy to Vercel" → Run workflow
→ environment: production  (für die Live-URL)
→ environment: preview     (für eine Test-URL)
→ db_schema: (leer lassen - Vercel-Umgebungsvariablen werden genutzt)
```

---

### 6. Domain-Verwaltung

1. **Sichere eine Domain** für deine Anwendung über [Strato](https://www.strato.de).
2. Gehe in den Vercel-Projekteinstellungen zu `Settings → Domains` und füge deine Domain hinzu.
3. Konfiguriere die DNS-Einträge bei Strato wie von Vercel angegeben (typischerweise CNAME oder A-Record).

---

### 7. Projekt-Checkliste

- [ ] Landing Page
- [ ] Handbuch / Manual
- [ ] Hauptprozess (Kernfunktion)
- [ ] Video (Demo / Tutorial)
- [ ] Domain (über Strato gesichert)

---

### 8. Landing Page Generator

Das Workflow-File `.github/workflows/lp-generator.yml` generiert eine Landing Page für diese App.

#### Was der Workflow tut

- Liest den Inhalt dieses Repos aus
- Verwendet ein konfigurierbares **Design-Template** als optische Basis
- Lässt GitHub Copilot eine Landing Page generieren und ein neues Repo dafür anlegen

#### Was du ändern kannst

| Eingabe | Standard | Beschreibung |
|---|---|---|
| `custom_template` | `Wamocon/hochzeitsrechner_lp` | Das GitHub-Repo, das als Design-Template dient |
| `custom_name` | `generated_lp` | Name des neu erstellten Landing-Page-Repos |
| `custom_prompt` | *(allgemeiner Prompt)* | Detaillierte Anweisungen für Copilot |

> 💡 **Tipp:** Je spezifischer dein Prompt, desto besser die generierte Landing Page.

#### Wann du den Workflow starten sollst

Starte diesen Workflow **erst dann**, wenn dein Projekt weitgehend fertig dokumentiert ist:
- Handbuch / Manual
- README mit Produktbeschreibung, Features und Zielgruppe
- Rechtstexte / relevante Seiten

> ✅ **Empfehlung:** In der Regel reicht **ein einmaliger Lauf** am Projektende.

#### Manuell ausführen

`Repository → Actions → "🚀 lp-generator" → Run workflow`

1. Wähle in der linken Liste den Workflow **"🚀 lp-generator"**.
2. Klicke rechts auf **"Run workflow"**.
3. Passe Template, Name und Prompt an.
4. Bestätige mit **"Run workflow"**.

#### Wenn der Workflow fehlschlägt

Wenn bereits ein Repository mit gleichem Namen existiert:
1. Ändere den Namen in `custom_name` und starte erneut.
2. Oder lösche das bestehende Ziel-Repo und starte erneut.

---
---

## EN English

---

### Process Overview

Follow these steps in order to go from template to production:

1. **Create GitHub Repo** - Use this template to create a new repository in the Wamocon GitHub organisation.
2. **Clone Repo** - Clone to your local machine and run `npm install`.
3. **Install pre-commit hook** - Run `bash hooks/install.sh`. One-time setup after cloning - protects you from accidentally pushing secrets.
4. **Check GitHub Workflow files** - Open `.github/workflows/deploy.yml` and `.github/workflows/pr-pipeline.yml`, verify that `Wamocon/github_workflow` is the correct reference.
5. **Update `.env.local` & connect Supabase** - Copy `.env.example` → `.env.local`, create a remote Supabase project, and fill in the credentials.
6. **Run locally & start development** - Run `npm run dev` and start building.
7. **GitHub Organisation Settings: Grant Vercel app access** - Go to the organisation settings on GitHub, find the Vercel GitHub App, and grant it access to your new repo. Without this, the repo will not appear in Vercel's import list.
8. **Make repo temporarily public & import in Vercel** - Set the repo to public temporarily and import it in Vercel.
9. **Get Vercel Project ID** - Copy the Vercel Project ID from the Vercel project settings.
10. **Add Vercel Project ID to GitHub secrets** - Add `VERCEL_PROJECT_ID` to your repository's GitHub Actions secrets.
11. **Make repo internal** - Revert the repository visibility to internal.
12. **First manual deployment** - Go to `Actions → "Deploy to Vercel" → Run workflow` and choose `production`.

> 📖 **For detailed information, read below.**

---

### 1. Clone & Setup

```bash
# Clone the repository
git clone https://github.com/Wamocon/<your-repo-name>.git
cd <your-repo-name>

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Install pre-commit hook (once, right after npm install)
bash hooks/install.sh

# Start the development server (with Turbopack for fast refresh)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Available scripts:**

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack (hot reload) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

---

### 1b. Git Workflow & Branching Strategy

> 💡 **After the first push, always work on a branch - never directly on `main`/`master`.**

**Recommended flow:**

```bash
# One-time: push the initial state to main/master
git add .
git commit -m "chore: initial setup"
git push origin <main-or-master>

# From now on: always work on a feature branch
git checkout -b feature/my-feature

# Test locally, then commit
npm run dev        # test in browser
npm run typecheck  # catch type errors
npm run lint       # catch lint issues

git add .
git commit -m "feat: description of change"
git push origin feature/my-feature
```

**Key rules:**

- **Test locally before pushing.** Always run `npm run typecheck` and `npm run lint` before pushing.
- **Push all changes before opening the PR.** Every new push to an open PR triggers the GitHub Actions pipeline - this consumes GitHub Actions minutes.
- **Keep only one PR open at a time** until it is merged.

> ⚠️ **Why this matters:** Every push to an open PR triggers the PR Pipeline (Auto-Fix + Typecheck + Lint). Test locally first - then push, then open the PR.

---

### 1c. Pre-commit Hook - Secret Scanner

The pre-commit hook prevents API keys, tokens, passwords, or other secrets from accidentally being checked into GitHub. The hook scans all files staged for commit **before** the commit is finalised.

#### Installation

```bash
# Run ONCE after cloning - never needs to run again:
bash hooks/install.sh
```

> ✅ **How often?** Exactly **once** - right after `npm install` when first setting up the repo. After installation, the hook runs automatically before **every** `git commit`.

#### What the hook checks

| Pattern | Example |
|--------|---------|
| AWS keys | `AKIA...`, `aws_secret_access_key = ...` |
| GitHub tokens | `ghp_...`, `github_pat_...` |
| Vercel token | `VERCEL_TOKEN = abc123...` |
| Private keys (PEM) | `-----BEGIN PRIVATE KEY-----` |
| Database connection strings | `postgres://user:password@host` |
| Generic tokens | `api_key =`, `client_secret =`, `password =` |
| JWT tokens | `eyJ...` (full `header.payload.signature` form) |
| Supabase service role | `service_role = eyJ...` |
| `.env` files | `.env`, `.env.local`, `.env.production` |

#### When a commit is blocked

```
[pre-commit] BLOCKED - potential secrets detected
  ✖ src/lib/config.ts:12
    Reason: Generic API key
    Content: const API_KEY = "abc123xyz789..."
```

**How to fix:**
1. Remove the secret from the file.
2. Store it in your `.env.local` (already in `.gitignore`).
3. Use GitHub Actions secrets for CI/CD values.

**False positive** (e.g. an example value in documentation):  
Add the comment `# notsecret` at the end of that line.

**Emergency bypass** (absolute last resort - never for real secrets!):
```bash
git commit --no-verify -m "your message"
```

---

### 2. Supabase Setup & Warning

> ⚠️ **CRITICAL: Once you have a Supabase account, store all test data there directly.**
>
> **Do NOT store test data as local files** (e.g. JSON fixtures, SQL dumps). Insert data directly into your Supabase project - via the Dashboard, an MCP tool, or a migration script.

**Steps:**

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Copy the **Project URL**, **Anon Key**, and **Service Role Key** from  
   `Project Settings → API`.
3. Paste them into your `.env.local` file:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

---

### 2b. Local Supabase Setup via Docker (Optional)

> 💡 **This step is optional.** By default you connect directly to a remote Supabase project (see section 2). Only use this setup if you prefer developing fully offline.

For a fully local Supabase setup with Docker and a migration-based development workflow, copy this prompt into your AI assistant (e.g. GitHub Copilot in VS Code):

```
Act as an expert DevOps and database engineer. I am developing an app locally. I need to set up a local Supabase instance via Docker and establish a strict migration-based workflow. Please execute the following:

Setup: Initialize a local Supabase environment using Docker and the Supabase CLI. Check automatically before every task if Docker and the Supabase containers are running. When they are down, start them autonomously.

Initial Schema: Create the initial database schema for the app and save it as a formal Supabase migration file.

Environment Variables: Automatically extract the local Supabase connection details (API URL, anon key, service role key, DB URL) and append them to my local .env file.

Autonomous Development & Schema Versioning: You will develop the entire application based on my prompts. You must autonomously create and update tables, generate schemas, and create timestamped migration files for every change. Ensure strict version history and guarantee that absolutely no functions fail due to database inconsistencies.

Production Deployment via MCP: I use the Supabase MCP to push data to production tables. Do not provide manual push commands. Your only job for production is to verify that all local migrations are completely up to date and error-free so the MCP can handle the live deployment seamlessly.

Automated Testing & Verification: Once the Docker setup is running and the schema is applied, automatically write and execute a small integration test. This test must verify that the app can successfully read from and write to the local Docker database. If any errors or bugs are detected, diagnose and fix them immediately on your own.
```

#### Viewing the local database in the browser

| Service | URL | Description |
|---|---|---|
| **Supabase Studio** | `http://localhost:54323` | Database UI: tables, SQL editor, Auth, Storage |
| **REST API** | `http://localhost:54321` | PostgREST API (your app endpoint) |
| **PostgreSQL** | `localhost:54322` | Direct DB access (e.g. pgAdmin, TablePlus) |
| **Inbucket (email)** | `http://localhost:54324` | Local email service for Auth emails |

**Local environment variables:**
```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<copy from supabase status output>
SUPABASE_SERVICE_ROLE_KEY=<copy from supabase status output>
SUPABASE_DB_URL=postgresql://postgres:postgres@localhost:54322/postgres
```

---

### 3. Supabase MCP & Schemas

#### Using Supabase MCP for Migrations

The Supabase MCP (Model Context Protocol) server allows your AI coding assistant to create and manage migrations and tables directly.

- Migrations are stored in `supabase/migrations/`.
- Use the MCP tools to create tables, alter schemas, and manage indexes.

#### Working with Multiple Schemas

By default, Supabase only exposes the `public` schema via the API. If you need custom schemas:

**1. Create the schema:**
```sql
CREATE SCHEMA IF NOT EXISTS app;
```

**2. Grant permissions:**
```sql
GRANT USAGE ON SCHEMA app TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON TABLES TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA app TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA app
  GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
```

**3. Expose the schema via the Supabase API:**
Go to `Project Settings → API → Exposed schemas` and add your custom schema name.

---

### 4. GitHub Workflow Configuration

This project uses the **centralized Wamocon CI/CD workflow** from [`Wamocon/github_workflow`](https://github.com/Wamocon/github_workflow).

#### Overview of the three workflows

| Workflow | File | Trigger | What it does |
|---|---|---|---|
| **PR Pipeline** | `pr-pipeline.yml` | **Automatic** on every PR to `main`/`master` | Auto-Fix (ESLint + Prettier) → Typecheck + Lint |
| **Deploy** | `deploy.yml` | **Manual only** - no auto-trigger | Builds and deploys to Vercel via CLI |
| **LP Generator** | `lp-generator.yml` | **Manual only** - no auto-trigger | Generates a landing page in a new repo |

> ⚠️ **No automatic deployment:** Neither a PR nor a push to `main` triggers a deployment automatically. All deployments are started manually from the Actions tab.

#### What you need to do

1. Verify that `Wamocon/github_workflow` is the correct org/repo reference.
2. Enable workflow write permissions:  
   `Settings → Actions → General → Workflow permissions → Allow GitHub Actions to create and approve pull requests`
3. Add **one single secret** to your repository:
   - Go to `Repository → Settings → Secrets and variables → Actions → New repository secret`
   - Name: `VERCEL_PROJECT_ID`
   - Value: *(see section 5 below)*

> ✅ **All other required secrets** (`VERCEL_TOKEN`, `VERCEL_ORG_ID`) are **already configured at the GitHub Organisation level**.

#### Triggering a manual deployment

```
GitHub repo → Actions → "Deploy to Vercel" → Run workflow
→ Choose environment: production or preview
→ Click "Run workflow"
```

---

### 5. Vercel Deployment Strategy

#### Step 1: Grant Vercel GitHub App access in Org Settings (One-time, Critical)

> ⚠️ **This step must be done BEFORE importing in Vercel.** Without it, your repo will not appear in Vercel's import list - even if it is public.

1. Go to **GitHub → Wamocon Organisation → Settings → Installed GitHub Apps**  
   `https://github.com/organizations/Wamocon/settings/installations`
2. Find the **Vercel** app in the list.
3. Click **Configure**.
4. Scroll to **Repository access**.
5. Select **"Only select repositories"** and add your new repo.
6. Click **Save**.

#### Step 2: Initial Deployment (One-Time)

1. **Make the repo public** temporarily  
   `Repository → Settings → General → Change visibility → Public`
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import** → select your repo.
3. Deploy the project (Vercel detects Next.js automatically).
4. **Copy the Vercel Project ID:**  
   `Vercel Project → Settings → General → Project ID` → copy the value.
5. **Add to GitHub secrets:**  
   `Repository → Settings → Secrets and variables → Actions → New repository secret`  
   Name: `VERCEL_PROJECT_ID` | Value: the ID you copied.
6. **Revert the repo to internal:**  
   `Repository → Settings → General → Change visibility → Internal`

> 💡 **After this one-time setup**, the GitHub Action deploys via Vercel CLI - Vercel no longer sees who committed, and there are no team seat errors with a personal Hobby account.

#### Step 3: Add environment variables in Vercel

> ⚠️ **CRUCIAL:** Go to `Vercel Project → Settings → Environment Variables` and add **all** variables from your `.env.local`. Without these, the build **will fail**.

#### Deployment flow (after setup)

| Trigger | Result |
|---|---|
| PR targeting `main`/`master` | PR Pipeline runs automatically (no deployment) |
| Merge / push to `main`/`master` | No automatic deployment |
| **Manual workflow run** | Deploys to the chosen environment: `production` or `preview` |

**How to deploy manually:**

```
GitHub → Actions → "Deploy to Vercel" → Run workflow
→ environment: production  (for the live URL)
→ environment: preview     (for a temporary test URL)
→ db_schema: (leave empty - Vercel env vars are used)
```

---

### 6. Domain Management

1. **Secure a domain** for your application via [Strato](https://www.strato.de).
2. In the Vercel project settings, go to `Settings → Domains` and add your domain.
3. Configure the DNS records at Strato as shown by Vercel (typically a CNAME or A record).

---

### 7. Project Checklist

- [ ] Landing Page
- [ ] Handbuch / Manual
- [ ] Main Process (core feature)
- [ ] Video (demo / tutorial)
- [ ] Domain (secured via Strato)

---

### 8. Landing Page Generator

The workflow file `.github/workflows/lp-generator.yml` generates a landing page for this app by calling a central, reusable Wamocon workflow.

#### What the workflow does

- Reads the contents of this repository
- Uses a configurable **design template** as a visual base
- Lets GitHub Copilot generate a landing page and create a new repository for it

#### What you can change

| Input | Default | Description |
|---|---|---|
| `custom_template` | `Wamocon/hochzeitsrechner_lp` | The GitHub repo used as the design template |
| `custom_name` | `generated_lp` | Name for the newly created landing page repository |
| `custom_prompt` | *(generic prompt)* | Detailed instructions for Copilot |

> 💡 **Tip:** The more specific your prompt, the better the generated landing page.

#### When you should run this workflow

Run this workflow **only after** your project is mostly complete:
- Handbook / Manual
- README with product description, features, and target audience
- Legal pages / relevant links

> ✅ **Recommendation:** In most cases, you only need to run it **once** at the end of the project.

#### Running manually

`Repository → Actions → "🚀 lp-generator" → Run workflow`

1. Select **"🚀 lp-generator"** from the left workflow list.
2. Click **"Run workflow"** on the right.
3. Adjust the input fields (template, name, prompt) as needed.
4. Confirm with **"Run workflow"**.

#### If the workflow fails (repository name already exists)

1. Change the `custom_name` value and run the workflow again.
2. Or delete the existing target repository (if no longer needed) and run again.

## ./IDEA.md
# Projektidee

> Fuell diese Datei aus, bevor du den Skill `anforderungsdokument` aufrufst.
> Je mehr Details du hier schreibst, desto besser wird das generierte Dokument.
> Anleitung: `.github/skills/anforderungsdokument/SKILL.md`

---

## Projektname

[Name der App, z.B. "Universal Inventory Manager"]

---

## Beschreibung

[Was macht die App? Welches Problem loest sie? Sei konkret.

Beispiel:
"Eine webbasierte Lagerverwaltungs-App fuer kleine und mittelgrosse Unternehmen in
Deutschland. Sie ersetzt Excel-basierte Bestandslisten durch ein strukturiertes System
mit Echtzeit-Uebersicht, QR-Code-Scanfunktion und automatisierten Benachrichtigungen.
Das Ziel ist es, manuelle Fehler bei der Lagerhaltung um mindestens 80 % zu reduzieren
und den Zeitaufwand fuer Inventurprozesse auf ein Minimum zu senken."]

---

## Zielgruppe

[Wer soll die App nutzen? Branche, Unternehmensgroesse, Rolle.

Beispiel:
"Lager- und Logistikleiter sowie Mitarbeiter in KMU mit 10 bis 200 Angestellten,
insbesondere im Einzel-, Gross- und Onlinehandel in Deutschland und dem
deutschsprachigen Europa."]

---

## Kernproblem

[Das konkrete Problem, das OHNE die App besteht.

Beispiel:
"Lagerfehler durch manuelle Erfassung in Excel kosten KMU durchschnittlich
14 % des Jahresumsatzes. Bestehende Enterprise-Loesungen wie SAP EWM sind
fuer kleinere Betriebe zu komplex und zu teuer."]

---

## Gewuenschte Hauptfunktionen (Version 1)

[Liste der wichtigsten Funktionen. Beispiel:]

- Artikel anlegen, bearbeiten, loeschen
- Lagerbestand in Echtzeit einsehen
- QR-Code-Etiketten generieren und scannen
- Rollenbasierter Zugriff (Admin, Manager, Mitarbeiter)
- Mehrsprachige Oberflaeche (Deutsch und Englisch)
- Dashboard mit Bestandsuebersicht

---

## Tech-Stack (optional, wenn bekannt)

[Bekannte oder gewuenschte Technologien. Standardempfehlung falls leer:
Next.js, React, TypeScript, Supabase, Tailwind CSS, Vercel]

---

## Marktsegment und Branche

[In welchem Markt soll die App operieren?

Beispiel: "Lagerverwaltungssoftware (WMS) fuer KMU in Deutschland, Segment Mittelstand"]

---

## Bekannte Wettbewerber (optional)

[Bestehende Loesungen, die aehnliches tun.

Beispiel: SAP EWM, Sage Wawi, Pickware, Odoo Inventory, Lightspeed]

---

## Ersteller

[Vollstaendiger Name]

---

## Empfaenger (Geschaeftsfuehrung)

[Name und Titel des Entscheidungstraegers, z.B. "waleri moretz, CEO WAMOCON GmbH"]

---

## Welle und Version

1

---

## Zusaetzliche Hinweise (optional)

[Besondere Anforderungen, Einschraenkungen, Deadlines oder andere relevante
Informationen, die im Dokument beruecksichtigt werden sollen.]

## ./PROGRESS.md
# Fortschrittsdokument BelegNest V1

Stand: 19. Mai 2026

---

## Umsetzungsstatus

### Infrastruktur

| Komponente | Status | Details |
|---|---|---|
| Next.js 16 App Router | Fertig | Turbopack, TypeScript strict |
| Tailwind CSS v4 | Fertig | Utility-first, Dark Mode |
| Lokale Supabase (Docker) | Fertig | Port 54621 (API), 54622 (DB), 54623 (Studio) |
| Datenbank-Schema | Fertig | Migration `20260513140000_initial_schema.sql` |
| Testdaten (Seed) | Fertig | 28 realistische Belege, 14 Kategorien |
| i18n (DE + EN) | Fertig | next-intl, Sprachumschaltung im Header |
| Light/Dark Theme | Fertig | localStorage-Persistenz, System-Erkennung |
| Supabase Storage | Fertig | `receipts` Bucket fuer Beleg-Fotos |

### Module (V1 Anforderungen)

| Modul | Status | Anforderungen |
|---|---|---|
| **Beleg erfassen** | Fertig | BE-01 bis BE-09: Kamera, Upload, Kompression, Formular, Kategorien, Garantie, Speicherung |
| **Beleg-Archiv & Suche** | Fertig | BA-01 bis BA-08: Liste, Suche, Filter, Sortierung, Detail, Bearbeiten, Loeschen, Summe |
| **Garantie-Tracker** | Fertig | GT-01 bis GT-03: Separater Tab, Ampel-System, Sortierung nach Ablauf |
| **Export** | Fertig | EX-01, EX-03, EX-04: ZIP-Export (Fotos + CSV), Filter-Export, Dateiname |
| **Backup/Import** | Fertig | BF-08, BF-09: JSON-Export/Import fuer Datensicherung |
| **Homepage** | Fertig | Professionelle Startseite mit Hero, Features, CTA |
| **Legal Pages** | Fertig | Impressum, Datenschutz, AGB (DE + EN) |
| **Footer** | Fertig | Firmenstempel, Legal-Links, WAMOCON GmbH Infos |

### Anforderungs-Tracking

| ID | Anforderung | Status |
|---|---|---|
| BE-01 | Kamera-Button (rear-facing) | Fertig |
| BE-02 | Bild aus Galerie hochladen | Fertig |
| BE-03 | Foto-Kompression (1200px, JPEG 80%, ca. 200KB) | Fertig |
| BE-04 | Eingabefelder (Datum, Betrag, Haendler, Kategorie) | Fertig |
| BE-05 | 14 Kategorien | Fertig |
| BE-06 | Notiz-Feld | Fertig |
| BE-07 | Garantie-Dauer (6M/12M/24M/36M/60M) | Fertig |
| BE-08 | Beleg speichern in Supabase | Fertig |
| BE-09 | Erfassung unter 30 Sekunden | Fertig |
| BA-01 | Listenansicht mit Thumbnails | Fertig |
| BA-02 | Volltext-Suche (Haendler, Notizen) | Fertig |
| BA-03 | Filter (Kategorie, Zeitraum, Betrag) | Fertig |
| BA-04 | Sortierung (Datum, Betrag, Haendler) | Fertig |
| BA-05 | Beleg-Detailansicht mit Foto | Fertig |
| BA-06 | Beleg loeschen mit Bestaetigung | Fertig |
| BA-07 | Beleg bearbeiten | Fertig |
| BA-08 | Summen-Anzeige | Fertig |
| GT-01 | Separater Garantie-Tab | Fertig |
| GT-02 | Ampel-System (gruen/gelb/rot) | Fertig |
| GT-03 | Sortierung nach Ablauf | Fertig |
| GT-04 | Push-Notifications | Offen (V2) |
| GT-05 | Musterbrief-Vorlage | Offen (V2) |
| EX-01 | ZIP-Export (Fotos + CSV) | Fertig |
| EX-02 | PDF-Export (4 Belege/Seite) | Offen |
| EX-03 | Export filterbar | Fertig |
| EX-04 | Export-Dateiname | Fertig |
| EX-05 | Client-seitig (JSZip) | Fertig |
| BF-01 | Kein Account/Login | Fertig |
| BF-02 | Daten in Supabase (lokal) | Fertig |
| BF-03 | PWA-installierbar | Offen |
| BF-04 | Responsive Mobile-First | Fertig |
| BF-05 | Ladezeit unter 2 Sekunden | Fertig |
| BF-06 | Cookie-freies Tracking | Offen |
| BF-07 | Datenschutz, Impressum | Fertig |
| BF-08 | JSON-Backup Export | Fertig |
| BF-09 | JSON-Import | Fertig |
| BF-10 | Speicherplatz-Anzeige | Offen |

### Zusammenfassung

- **Fertig:** 30 von 37 V1-Anforderungen (81%)
- **Offen:** 7 Anforderungen (als V2 markiert oder niedrige Prioritaet)

---

## OCR-Integration und erweiterte Belegattribute (19. Mai 2026)

### Was wurde umgesetzt

| Feature | Status | Details |
|---|---|---|
| **OCR-Integration (Tesseract.js)** | Fertig | Automatische Texterkennung beim Bild-Upload, Browser-basiert (WebAssembly), DE + EN |
| **OCR Datenextraktion** | Fertig | Automatische Erkennung: Haendler, Betrag, Datum, Belegnummer, Adresse, Steuersatz, Steuerbetrag |
| **OCR Bearbeitungsmodus** | Fertig | Alle OCR-extrahierten Daten sind in editierbaren Feldern, Nutzer kann korrigieren vor Speicherung |
| **Zahlungsart** | Fertig | Neues Feld: Bar, Karte, Ueberweisung, PayPal, Sonstige |
| **Tags** | Fertig | Freitext-Tags mit Add/Remove, angezeigt als Chips |
| **Steuerlich absetzbar** | Fertig | Toggle-Schalter mit visueller Anzeige in Liste und Detail |
| **Steuersatz und Steuerbetrag** | Fertig | Numerische Felder in erweiterten Feldern, OCR-vorbefuellt |
| **Belegnummer** | Fertig | Textfeld, OCR-extrahiert wenn moeglich |
| **Filialadresse** | Fertig | Textfeld, OCR-extrahiert aus Postleitzahl-Mustern |
| **Waehrung** | Fertig | Dropdown: EUR, USD, GBP, CHF |
| **OCR Rohtext** | Fertig | Gespeichert fuer Volltextsuche, read-only Anzeige |
| **OCR Konfidenz** | Fertig | Prozent-Anzeige und Fortschrittsbalken in Detailansicht |
| **Erweiterte Felder (klappbar)** | Fertig | Steuer, Belegnummer, Waehrung, Adresse in aufklappbarem Bereich |
| **Bearbeiten-Modal erweitert** | Fertig | Alle neuen Felder auch im Bearbeiten-Dialog verfuegbar |
| **Detailansicht erweitert** | Fertig | Alle neuen Felder in Detailansicht sichtbar |
| **Archivliste erweitert** | Fertig | Tags, Zahlungsart, steuerlich-absetzbar Badge in Liste |
| **DB-Migration** | Fertig | `20260519100000_receipt_ocr_attributes.sql` |
| **Uebersetzungen (DE + EN)** | Fertig | Alle neuen Labels in beiden Sprachen |
| **V2 Roadmap-Dokumentation** | Fertig | `docs/V2_ROADMAP.md` mit 6 KI-Features |

### Neue Dateien

| Datei | Beschreibung |
|---|---|
| `src/lib/ocr.ts` | OCR Service mit Tesseract.js (Extraktion: Haendler, Betrag, Datum, Belegnr., Adresse, Steuer) |
| `supabase/migrations/20260519100000_receipt_ocr_attributes.sql` | DB-Migration fuer neue Spalten und Indizes |
| `docs/V2_ROADMAP.md` | V2 Roadmap mit KI-Features (Auto-Kategorisierung, Duplikaterkennung, etc.) |

### Geaenderte Dateien

| Datei | Aenderung |
|---|---|
| `src/types/database.ts` | `PaymentMethod` Typ, erweiterte `Receipt` und `ReceiptFormData` Interfaces, `OcrResult` Interface |
| `src/components/receipts/CaptureForm.tsx` | OCR-Integration, alle neuen Felder, Tags, Toggle, klappbare erweiterte Felder |
| `src/components/receipts/EditReceiptModal.tsx` | Alle neuen Felder, Tags, Toggle, klappbare erweiterte Felder |
| `src/components/receipts/ReceiptDetailModal.tsx` | Anzeige aller neuen Felder, Tags, OCR-Konfidenz-Balken |
| `src/components/receipts/ReceiptList.tsx` | Tags-Badges, Zahlungsart-Badge, steuerlich-absetzbar Icon |
| `messages/en.json` | OCR, Zahlungsarten, Steuer, Tags, erweiterte Felder Uebersetzungen |
| `messages/de.json` | OCR, Zahlungsarten, Steuer, Tags, erweiterte Felder Uebersetzungen |
| `package.json` | `tesseract.js` Dependency hinzugefuegt |

---

## V2 geplante KI-Features (siehe docs/V2_ROADMAP.md)

| Feature | Prioritaet | Beschreibung |
|---|---|---|
| KI Auto-Kategorisierung | Hoch | Automatische Kategorie-Vorschlaege basierend auf OCR-Text |
| Duplikaterkennung | Mittel | Warnung bei moeglichen Doppel-Belegen |
| Smart Receipt Parsing | Mittel | Einzelposten-Erkennung aus OCR-Text |
| Multi-Sprach OCR | Mittel | Automatische Spracherkennung fuer OCR |
| Ausgabenanalyse | Niedrig | KI-gestuetzte Ausgaben-Dashboard |
| Bild-Verbesserung | Niedrig | Vorverarbeitung fuer bessere OCR-Ergebnisse |

---

## Offene Punkte / Naechste Schritte

1. **PDF-Export (EX-02):** Erfordert `pdf-lib` Integration fuer 4-Belege-pro-Seite Layout
2. **PWA (BF-03):** Service Worker und Manifest fuer Offline-Faehigkeit
3. **Plausible Analytics (BF-06):** Cookie-freies Tracking einbinden
4. **Speicherplatz-Anzeige (BF-10):** Storage-Quota API abfragen
5. **Push-Notifications (GT-04):** Browser Push API fuer Garantie-Erinnerungen
6. **Musterbrief (GT-05):** Reklamations-Vorlage generieren

---

## Technische Hinweise

### Lokale Supabase

```
API URL:     http://127.0.0.1:54621
Studio:      http://127.0.0.1:54623
DB URL:      postgresql://postgres:postgres@127.0.0.1:54622/postgres
Anon Key:    sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH
Service Key: sb_secret_N7UND0UgjKTVK-Uodkm0Hg_xSvEMPvz
```

### Starten

```bash
npx supabase start     # Lokale Supabase starten
npm run dev            # Next.js Dev-Server starten
```

### Verifizierung

```bash
npm run typecheck      # TypeScript-Pruefung (bestanden)
npm run lint           # ESLint (bestanden)
npm run build          # Produktions-Build (bestanden)
```

---

## Architektur

```
src/
  app/
    [locale]/           # i18n Routing (de, en)
      page.tsx          # Homepage
      capture/page.tsx  # Beleg erfassen
      archive/page.tsx  # Beleg-Archiv
      warranties/page.tsx # Garantie-Tracker
      export/page.tsx   # Export & Backup
      legal/            # Impressum, Datenschutz, AGB
    layout.tsx          # Root Layout (passthrough)
    page.tsx            # Root Redirect zu /de
    globals.css         # Tailwind + Theme
  components/
    layout/             # Header, Footer, ThemeToggle, LanguageSwitcher
    receipts/           # CaptureForm, ReceiptList, EditModal, DetailModal
    warranties/         # WarrantyList
    export/             # ExportPanel
  i18n/                 # next-intl Routing + Request Config
  lib/
    supabase/           # Client + Server Supabase Clients
    utils.ts            # cn() Utility
  types/
    database.ts         # TypeScript Interfaces
messages/
  de.json               # Deutsche Uebersetzungen
  en.json               # Englische Uebersetzungen
supabase/
  migrations/           # DB Migrationen
  seed.sql              # Testdaten
  config.toml           # Lokale Supabase Konfiguration
```

---

*Dokument erstellt: 13. Mai 2026 | Autor: GitHub Copilot (Developer Agent)*

## ./docs/Benutzerhandbuch_BelegNest_DE.md
# BelegNest - Benutzerhandbuch

**Version 1.0 | Stand: Mai 2026**
**WAMOCON GmbH**

---

## Inhaltsverzeichnis

1. Erste Schritte
2. Belege erfassen
3. Archiv und Suche
4. Garantie-Tracker
5. Export und Backup
6. Einstellungen
7. Tarife (Free und Pro)
8. Haeufige Fragen
9. Kontakt und Support

---

## 1. Erste Schritte

### App aufrufen

Oeffne BelegNest in deinem Browser unter der bereitgestellten URL. Die App funktioniert auf Smartphone, Tablet und Desktop. Ein moderner Browser (Chrome, Firefox, Safari, Edge) wird empfohlen.

### Konto erstellen

1. Klicke oben rechts auf das Benutzer-Symbol.
2. Waehle "Registrieren".
3. Gib deine E-Mail-Adresse und ein Passwort ein (mindestens 6 Zeichen).
4. Optional: Gib einen Anzeigenamen ein.
5. Klicke auf "Konto erstellen".

### Anmelden

1. Klicke oben rechts auf das Benutzer-Symbol.
2. Gib deine E-Mail und dein Passwort ein.
3. Klicke auf "Anmelden".
4. Du bleibst angemeldet, bis du dich abmeldest.

---

## 2. Belege erfassen

### Foto aufnehmen oder Bild hochladen

1. Klicke in der Navigation auf "Beleg erfassen".
2. Waehle eine der beiden Optionen:
   - **Foto aufnehmen**: Oeffnet die Kamera (Rueckkamera bei Smartphones).
   - **Bild hochladen**: Waehle ein vorhandenes Bild aus der Galerie.
3. Das Bild wird automatisch komprimiert (max. 1200px Breite, ca. 200 KB).

### OCR-Erkennung

Nach dem Upload analysiert die automatische Texterkennung (OCR) den Beleg:
- **Haendlername**: Wird aus den ersten Zeilen des Belegs erkannt.
- **Betrag**: Der groesste gefundene Geldbetrag wird als Gesamtbetrag vorgeschlagen.
- **Datum**: Das Belegdatum wird aus gaengigen Datumsformaten erkannt.
- **Belegnummer, Adresse, Steuersatz**: Werden aus dem Text extrahiert, wenn moeglich.

Ein Fortschrittsbalken zeigt den OCR-Status. Die Genauigkeit wird als Prozentwert angezeigt. Pruefe und korrigiere die erkannten Daten bei Bedarf.

### Pflichtfelder

- **Datum**: Belegdatum (wird automatisch vorausgefuellt).
- **Betrag**: Gesamtbetrag in der gewaehlten Waehrung.
- **Haendler**: Name des Geschaefts oder Dienstleisters.
- **Kategorie**: Eine der 14 vordefinierten Kategorien.

### Optionale Felder

- **Notiz**: Freitextfeld fuer persoenliche Anmerkungen.
- **Garantiedauer**: 6, 12, 24, 36 oder 60 Monate.
- **Tags**: Freitext-Tags zur zusaetzlichen Kategorisierung.
- **Steuerlich absetzbar**: Toggle-Schalter.

### Erweiterte Felder (klappbar)

- **Zahlungsart**: Bar, Karte, Ueberweisung, PayPal, Sonstige.
- **Steuersatz und Steuerbetrag**: Numerische Eingabefelder.
- **Belegnummer**: Textfeld.
- **Waehrung**: EUR, USD, GBP, CHF.
- **Filialadresse**: Adresse des Geschaefts.

### Speichern

Klicke auf "Beleg speichern". Der Beleg wird mit Foto und allen Metadaten in der Datenbank gespeichert.

---

## 3. Archiv und Suche

### Beleg-Archiv

- Oeffne "Beleg-Archiv" in der Navigation.
- Alle gespeicherten Belege werden als Liste mit Thumbnails angezeigt.
- Oben siehst du die Anzahl der Belege und die Gesamtsumme.

### Volltextsuche

- Gib einen Suchbegriff im Suchfeld ein (Haendlername, Notiz).
- Die Liste wird in Echtzeit gefiltert.

### Filter

- **Kategorie**: Waehle eine bestimmte Kategorie.
- **Zeitraum**: Setze ein Start- und/oder Enddatum.
- **Betrag**: Filtere nach Mindest- und/oder Hoechstbetrag.

### Sortierung

Sortiere die Belege nach:
- Datum (neueste/aelteste zuerst)
- Betrag (hoechste/niedrigste zuerst)
- Haendlername (A-Z / Z-A)

### Beleg-Detailansicht

Klicke auf einen Beleg, um alle Details anzuzeigen:
- Grosses Belegfoto
- Alle Metadaten (Datum, Betrag, Haendler, Kategorie, etc.)
- Tags und Zahlungsart
- OCR-Rohtext und Genauigkeit (falls vorhanden)

### Bearbeiten und Loeschen

- **Bearbeiten**: Klicke auf "Bearbeiten" in der Detailansicht, um alle Felder zu aendern.
- **Loeschen**: Klicke auf "Loeschen". Es erscheint eine Sicherheitsabfrage.

---

## 4. Garantie-Tracker

Der Garantie-Tracker zeigt alle Belege mit Garantiedauer in drei Gruppen:

| Farbe | Status | Bedeutung |
|-------|--------|-----------|
| Gruen | Aktiv | Garantie laeuft noch, mehr als 30 Tage uebrig |
| Gelb | Bald ablaufend | Weniger als 30 Tage bis zum Ablauf |
| Rot | Abgelaufen | Garantiefrist ist ueberschritten |

Die Sortierung erfolgt automatisch nach dem naechsten Ablaufdatum. So siehst du auf einen Blick, welche Garantien bald ablaufen.

---

## 5. Export und Backup

### ZIP-Export

1. Oeffne den "Export"-Bereich.
2. Klicke auf "Als ZIP exportieren".
3. Optional: Filtere den Export nach Kategorie, Zeitraum oder Betrag.
4. Die ZIP-Datei enthaelt alle Beleg-Fotos und eine CSV-Tabelle mit Metadaten.
5. Perfekt fuer die Weitergabe an den Steuerberater.

### JSON-Backup

1. Klicke auf "JSON-Backup erstellen".
2. Eine JSON-Datei mit allen Beleg-Daten wird heruntergeladen.
3. Diese Datei dient als vollstaendiges Backup.

### Daten importieren

1. Klicke auf "JSON-Backup importieren".
2. Waehle eine zuvor erstellte JSON-Backup-Datei.
3. Alle Belege aus dem Backup werden in dein Konto importiert.

---

## 6. Einstellungen

### Sprache wechseln

Klicke auf das Sprach-Symbol im Header, um zwischen Deutsch und Englisch zu wechseln. Die Aenderung wird sofort angewendet.

### Theme (Hell/Dunkel)

Klicke auf das Sonnen-/Mond-Symbol im Header, um zwischen hellem und dunklem Modus zu wechseln. Die Einstellung wird im Browser gespeichert und bei jedem Besuch wiederhergestellt.

### Benutzermenue

Ueber das Benutzer-Symbol im Header erreichst du:
- Dein aktuelles Konto und deinen Plan (Free/Pro)
- Den Link zur Preisseite
- Die Abmeldefunktion

---

## 7. Tarife (Free und Pro)

| Funktion | Free | Pro |
|----------|------|-----|
| Belege | Bis zu 50 | Unbegrenzt |
| Kategorien | 14 | Unbegrenzt |
| OCR-Erkennung | Ja | Ja |
| Volltextsuche | Ja | Ja |
| Garantie-Tracker | Ja | Ja |
| JSON-Backup | Ja | Ja |
| ZIP-Export (Fotos + CSV) | Nein | Ja |
| PDF-Export | Nein | Ja |

---

## 8. Haeufige Fragen

**Muss ich ein Konto erstellen?**
Ja, fuer die Nutzung von BelegNest ist ein Konto erforderlich. Die Registrierung ist kostenlos.

**Wo werden meine Daten gespeichert?**
Deine Daten werden sicher in einer Supabase-Datenbank gespeichert. Belegfotos werden im Supabase Storage abgelegt.

**Kann ich meine Daten exportieren?**
Ja, nutze die JSON-Backup-Funktion fuer ein vollstaendiges Backup. Im Pro-Plan stehen zusaetzlich ZIP- und PDF-Export zur Verfuegung.

**Wie kann ich ein Upgrade auf Pro durchfuehren?**
Besuche die Preisseite ueber das Benutzermenue oder den Footer-Link.

**Funktioniert die App auf dem Smartphone?**
Ja, BelegNest ist vollstaendig responsiv und fuer mobile Geraete optimiert (Mobile-First-Design).

---

## 9. Kontakt und Support

**WAMOCON GmbH**
Mergenthalerallee 79-81
65760 Eschborn
Deutschland

- Telefon: +49 6196 5838311
- E-Mail: info@wamocon.com
- Projektkontakt: belegnest@wamocon.com

Geschaeftsfuehrer: Dipl.-Ing. Waleri Moretz
Handelsregister: Eschborn HRB 123666
USt-IdNr.: DE344930486

## ./docs/UserManual_BelegNest_EN.md
# BelegNest - User Manual

**Version 1.0 | As of: May 2026**
**WAMOCON GmbH**

---

## Table of Contents

1. Getting Started
2. Capturing Receipts
3. Archive & Search
4. Warranty Tracker
5. Export & Backup
6. Settings
7. Plans (Free & Pro)
8. Frequently Asked Questions
9. Contact & Support

---

## 1. Getting Started

### Open the App

Open BelegNest in your browser at the provided URL. The app works on smartphones, tablets, and desktops. A modern browser (Chrome, Firefox, Safari, Edge) is recommended.

### Create an Account

1. Click the user icon in the top right corner.
2. Select "Sign up".
3. Enter your email address and a password (at least 6 characters).
4. Optional: Enter a display name.
5. Click "Create account".

### Log In

1. Click the user icon in the top right corner.
2. Enter your email and password.
3. Click "Log in".
4. You stay logged in until you sign out.

---

## 2. Capturing Receipts

### Take Photo or Upload Image

1. Click "Capture Receipt" in the navigation.
2. Choose one of two options:
   - **Take Photo**: Opens the camera (rear camera on smartphones).
   - **Upload Image**: Select an existing image from your gallery.
3. The image is automatically compressed (max. 1200px width, approx. 200 KB).

### OCR Recognition

After uploading, the automatic text recognition (OCR) analyzes the receipt:
- **Merchant name**: Detected from the first lines of the receipt.
- **Amount**: The largest found monetary amount is suggested as the total.
- **Date**: The receipt date is detected from common date formats.
- **Receipt number, address, tax rate**: Extracted from the text when possible.

A progress bar shows the OCR status. The accuracy is displayed as a percentage. Review and correct the recognized data as needed.

### Required Fields

- **Date**: Receipt date (auto-filled).
- **Amount**: Total amount in the selected currency.
- **Merchant**: Name of the store or service provider.
- **Category**: One of 14 predefined categories.

### Optional Fields

- **Note**: Free-text field for personal annotations.
- **Warranty duration**: 6, 12, 24, 36, or 60 months.
- **Tags**: Free-text tags for additional categorization.
- **Tax deductible**: Toggle switch.

### Advanced Fields (collapsible)

- **Payment method**: Cash, Card, Bank Transfer, PayPal, Other.
- **Tax rate and tax amount**: Numeric input fields.
- **Receipt number**: Text field.
- **Currency**: EUR, USD, GBP, CHF.
- **Store address**: Address of the store.

### Save

Click "Save Receipt". The receipt is saved to the database with photo and all metadata.

---

## 3. Archive & Search

### Receipt Archive

- Open "Receipt Archive" in the navigation.
- All stored receipts are displayed as a list with thumbnails.
- The receipt count and total amount are shown at the top.

### Full-Text Search

- Enter a search term in the search field (merchant name, note).
- The list is filtered in real-time.

### Filters

- **Category**: Select a specific category.
- **Date range**: Set a start and/or end date.
- **Amount**: Filter by minimum and/or maximum amount.

### Sorting

Sort receipts by:
- Date (newest/oldest first)
- Amount (highest/lowest first)
- Merchant name (A-Z / Z-A)

### Receipt Detail View

Click on a receipt to view all details:
- Large receipt photo
- All metadata (date, amount, merchant, category, etc.)
- Tags and payment method
- OCR raw text and confidence (if available)

### Edit and Delete

- **Edit**: Click "Edit" in the detail view to change all fields.
- **Delete**: Click "Delete". A confirmation dialog will appear.

---

## 4. Warranty Tracker

The warranty tracker shows all receipts with warranty duration in three groups:

| Color | Status | Meaning |
|-------|--------|---------|
| Green | Active | Warranty is still valid, more than 30 days remaining |
| Yellow | Expiring soon | Less than 30 days until expiration |
| Red | Expired | Warranty period has passed |

Sorting is automatic by the next expiration date. At a glance you can see which warranties are expiring soon.

---

## 5. Export & Backup

### ZIP Export

1. Open the "Export" section.
2. Click "Export as ZIP".
3. Optional: Filter the export by category, date range, or amount.
4. The ZIP file contains all receipt photos and a CSV table with metadata.
5. Perfect for sharing with your tax advisor.

### JSON Backup

1. Click "Create JSON Backup".
2. A JSON file with all receipt data is downloaded.
3. This file serves as a complete backup.

### Import Data

1. Click "Import JSON Backup".
2. Select a previously created JSON backup file.
3. All receipts from the backup will be imported into your account.

---

## 6. Settings

### Change Language

Click the language icon in the header to switch between German and English. The change is applied immediately.

### Theme (Light/Dark)

Click the sun/moon icon in the header to switch between light and dark mode. The setting is stored in the browser and restored on each visit.

### User Menu

Via the user icon in the header you can access:
- Your current account and plan (Free/Pro)
- Link to the pricing page
- Sign out function

---

## 7. Plans (Free & Pro)

| Feature | Free | Pro |
|---------|------|-----|
| Receipts | Up to 50 | Unlimited |
| Categories | 14 | Unlimited |
| OCR recognition | Yes | Yes |
| Full-text search | Yes | Yes |
| Warranty tracker | Yes | Yes |
| JSON backup | Yes | Yes |
| ZIP export (photos + CSV) | No | Yes |
| PDF export | No | Yes |

---

## 8. Frequently Asked Questions

**Do I need to create an account?**
Yes, an account is required to use BelegNest. Registration is free.

**Where is my data stored?**
Your data is securely stored in a Supabase database. Receipt photos are stored in Supabase Storage.

**Can I export my data?**
Yes, use the JSON backup function for a complete backup. On the Pro plan, ZIP and PDF exports are also available.

**How do I upgrade to Pro?**
Visit the pricing page via the user menu or the footer link.

**Does the app work on smartphones?**
Yes, BelegNest is fully responsive and optimized for mobile devices (mobile-first design).

---

## 9. Contact & Support

**WAMOCON GmbH**
Mergenthalerallee 79-81
65760 Eschborn
Germany

- Phone: +49 6196 5838311
- Email: info@wamocon.com
- Project contact: belegnest@wamocon.com

Managing Director: Dipl.-Ing. Waleri Moretz
Commercial Register: Eschborn HRB 123666
VAT ID: DE344930486

## ./docs/V2_ROADMAP.md
# BelegNest V2 Roadmap - AI-Powered Features

## Overview

This document describes planned features for BelegNest V2 that require AI model integration. These features build on the OCR foundation established in V1 and extend it with intelligent processing capabilities.

---

## 1. AI Auto-Categorization

**Priority:** High
**Complexity:** Medium
**Dependencies:** OCR raw text, category system

### Description
Automatically suggest a receipt category based on OCR-extracted text. Uses merchant name, product descriptions, and amount patterns to predict the most likely category.

### Implementation Plan
1. Create a server-side API route: `src/app/api/ai/categorize/route.ts`
2. Accept `merchant`, `ocr_raw_text`, and `amount` as input
3. Use an AI model (OpenAI GPT-4o-mini or similar) to classify into existing categories
4. Return top 3 category suggestions with confidence scores
5. Display suggestions as clickable chips in the CaptureForm below the category dropdown
6. User confirms or overrides the suggestion

### Data Model
No schema changes needed. Uses existing `category_id` field.

### Prompt Template
```
You are a receipt categorization assistant. Given the following receipt data, suggest the most appropriate category from this list: [categories].

Merchant: {merchant}
Amount: {amount}
OCR Text: {ocr_text}

Return JSON: { "suggestions": [{ "category_slug": "...", "confidence": 0.95 }] }
```

### Environment Variables
- `OPENAI_API_KEY` (server-only, no NEXT_PUBLIC_ prefix)

---

## 2. Smart Receipt Parsing (Line Items)

**Priority:** Medium
**Complexity:** High
**Dependencies:** OCR raw text

### Description
Extract individual line items from receipt OCR text. Each item includes product name, quantity, unit price, and total price.

### Implementation Plan
1. Create utility: `src/lib/ai/parse-line-items.ts`
2. Parse OCR text with AI to identify structured line items
3. Create new DB table: `receipt_items`
4. Display line items in ReceiptDetailModal as a table
5. Allow manual correction of parsed items

### Data Model
```sql
CREATE TABLE receipt_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  receipt_id UUID REFERENCES receipts(id) ON DELETE CASCADE,
  product_name TEXT NOT NULL,
  quantity NUMERIC(10,3) DEFAULT 1,
  unit_price NUMERIC(10,2),
  total_price NUMERIC(10,2),
  tax_rate NUMERIC(5,2),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### UI Components
- `ReceiptItemsTable.tsx` - editable table of line items
- Column headers: Product, Qty, Unit Price, Total
- Inline editing with save/cancel

---

## 3. Duplicate Detection

**Priority:** Medium
**Complexity:** Medium
**Dependencies:** OCR raw text, merchant, amount, date

### Description
Detect potential duplicate receipts when a user captures a new one. Compare merchant, amount, date, and OCR text similarity.

### Implementation Plan
1. Create server function: `src/lib/ai/detect-duplicates.ts`
2. Before saving, query receipts with same merchant + similar amount + close date
3. Use text similarity (Levenshtein or cosine on OCR text) to score matches
4. If confidence > 80%, show warning modal with the potential duplicate
5. User can choose to save anyway or discard

### UI Components
- `DuplicateWarningModal.tsx` - shows side-by-side comparison
- Display: both receipt thumbnails, merchant, amount, date
- Actions: "Save Anyway", "View Existing", "Discard"

---

## 4. Spending Analytics & Insights

**Priority:** Low
**Complexity:** High
**Dependencies:** Receipt data over time

### Description
AI-powered spending analysis dashboard. Monthly summaries, category trends, anomaly detection, and budget recommendations.

### Implementation Plan
1. Create page: `src/app/[locale]/analytics/page.tsx`
2. Aggregate receipt data by month, category, merchant
3. Use AI to generate natural-language insights:
   - "You spent 23% more on groceries this month compared to last month"
   - "Your electronics spending has decreased by 40% quarter over quarter"
4. Display charts (use recharts or similar library)
5. Optional: budget alerts and recommendations

### Data Model
No new tables needed. Analytics computed from existing receipt data.

### UI Components
- `AnalyticsDashboard.tsx` - main dashboard
- `SpendingChart.tsx` - category/monthly charts
- `InsightCard.tsx` - AI-generated insight cards

---

## 5. Receipt Image Enhancement

**Priority:** Low
**Complexity:** Low
**Dependencies:** Image processing

### Description
Pre-process receipt images before OCR to improve recognition accuracy. Apply deskewing, contrast enhancement, and noise reduction.

### Implementation Plan
1. Use `canvas` API for client-side image processing
2. Apply transformations: grayscale conversion, contrast boost, threshold
3. Pass enhanced image to Tesseract.js
4. Compare OCR confidence before/after enhancement
5. Use enhanced version if confidence improves

### No Data Model Changes Needed

---

## 6. Multi-Language OCR with Auto-Detection

**Priority:** Medium
**Complexity:** Low
**Dependencies:** Tesseract.js

### Description
Automatically detect the language of a receipt and apply the correct OCR language model. Currently defaults to German + English.

### Implementation Plan
1. Run a quick initial OCR pass with multiple language packs
2. Compare confidence scores across languages
3. Re-run with the best-performing language if initial confidence is low
4. Store detected language in receipt metadata
5. Add `ocr_language` column to receipts table

---

## Technical Requirements for V2

### AI Provider Integration
- Use OpenAI API (GPT-4o-mini for cost efficiency)
- All AI calls must go through server-side API routes (never expose API key to client)
- Implement rate limiting and cost tracking
- Cache frequent AI responses (e.g., category suggestions for known merchants)

### Environment Variables (V2)
```env
# AI Provider (server-only)
OPENAI_API_KEY=sk-...
AI_MODEL=gpt-4o-mini
AI_MAX_TOKENS=500
AI_RATE_LIMIT_RPM=60
```

### Migration Path
- V1 OCR data (`ocr_raw_text`, `ocr_confidence`) is the foundation for all V2 AI features
- No breaking changes to existing schema
- V2 features are additive (new tables, new API routes)
- All AI features should have graceful fallbacks when API is unavailable

---

## Implementation Priority Matrix

| Feature | Priority | Effort | User Impact | V2 Phase |
|---------|----------|--------|-------------|----------|
| AI Auto-Categorization | High | Medium | High | Phase 1 |
| Duplicate Detection | Medium | Medium | Medium | Phase 1 |
| Smart Receipt Parsing | Medium | High | High | Phase 2 |
| Multi-Language OCR | Medium | Low | Medium | Phase 2 |
| Spending Analytics | Low | High | High | Phase 3 |
| Image Enhancement | Low | Low | Medium | Phase 3 |

## ./legal-docs/agb.md
# Allgemeine Geschäftsbedingungen (AGB)

Stand: {{MONAT}} {{JAHR}}

## § 1 Geltungsbereich

(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") der WAMOCON GmbH, Mergenthalerallee 79 - 81, 65760 Eschborn (nachfolgend „Anbieter"), gelten für alle Verträge über die Nutzung der Software-as-a-Service-Plattform {{PROJEKTNAME}} (nachfolgend „Plattform"), die über die Website {{DOMAIN}} bereitgestellt wird.

(2) Die Plattform richtet sich an Unternehmen und gewerbliche Nutzer (nachfolgend „Auftraggeber") sowie deren Benutzer (nachfolgend „Nutzer"). Es handelt sich um ein B2B-Angebot. Verbraucher im Sinne des § 13 BGB sind nicht Zielgruppe dieses Angebots.

(3) Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt deren Geltung ausdrücklich schriftlich zu.

## § 2 Vertragsschluss

(1) Die Darstellung der Plattform und ihrer Funktionen auf der Website stellt kein verbindliches Angebot im Sinne des § 145 BGB dar, sondern eine Aufforderung zur Abgabe eines Angebots (invitatio ad offerendum).

(2) Der Auftraggeber gibt ein verbindliches Angebot zum Abschluss eines Nutzungsvertrages ab, indem er den Registrierungsprozess auf der Plattform abschließt und diese AGB akzeptiert.

(3) Der Vertrag kommt zustande, wenn der Anbieter das Angebot des Auftraggebers durch Freischaltung des Zugangs annimmt.

## § 3 Leistungsbeschreibung

(1) Der Anbieter stellt dem Auftraggeber die Plattform als Software-as-a-Service (SaaS) über das Internet zur Verfügung.

(2) Der genaue Funktionsumfang ergibt sich aus der jeweils aktuellen Leistungsbeschreibung auf der Website.

(3) Der Anbieter ist berechtigt, die Plattform weiterzuentwickeln, zu erweitern und anzupassen. Wesentliche Einschränkungen des Funktionsumfangs werden dem Auftraggeber vorab mitgeteilt.

## § 4 Nutzungsrechte

(1) Der Anbieter räumt dem Auftraggeber für die Vertragslaufzeit ein einfaches, nicht übertragbares, nicht unterlizenzierbares Recht zur Nutzung der Plattform ein.

(2) Der Auftraggeber darf die Plattform nur für eigene betriebliche Zwecke nutzen.

## § 5 Pflichten des Auftraggebers

(1) Der Auftraggeber ist verpflichtet, seine Zugangsdaten geheim zu halten und vor dem Zugriff Dritter zu schützen.

(2) Der Auftraggeber stellt sicher, dass die Nutzung der Plattform im Einklang mit geltendem Recht erfolgt.

## § 6 Verfügbarkeit

(1) Der Anbieter bemüht sich um eine Verfügbarkeit der Plattform von 99,5 % im Jahresmittel.

(2) Nicht als Ausfallzeit gelten geplante Wartungsarbeiten, die vorab angekündigt werden.

## § 7 Datenschutz

Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung des Anbieters und den Bestimmungen der DSGVO.

## § 8 Haftung

(1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei Vorsatz und grober Fahrlässigkeit.

(2) Im Übrigen ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.

## § 9 Vertragslaufzeit und Kündigung

(1) Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit einer Frist von einem Monat zum Monatsende gekündigt werden.

(2) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.

## § 10 Schlussbestimmungen

(1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.

(2) Gerichtsstand ist Eschborn, sofern der Auftraggeber Kaufmann ist.

(3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.

---

> **Hinweis:** Dies ist ein Muster. Ersetze alle `{{PLATZHALTER}}` mit den projektspezifischen Informationen. Lass die AGB vor Veröffentlichung von einem Juristen prüfen.

## ./legal-docs/company-stamp.md
# Firmenstempel / Company Stamp

## Deutsch

### WAMOCON GmbH

**Geschäftsführer:** Dipl.-Ing. Waleri Moretz

**Anschrift:**
Mergenthalerallee 79 - 81
65760 Eschborn
Deutschland

**Kontakt:**
Telefon: +49 6196 5838311
E-Mail: info@wamocon.com

**Registrierung:**
Handelsregister: Eschborn HRB 123666
USt-IdNr.: DE344930486

---

## English

### WAMOCON GmbH

**Managing Director:** Dipl.-Ing. Waleri Moretz

**Address:**
Mergenthalerallee 79 - 81
65760 Eschborn
Germany

**Contact:**
Phone: +49 6196 5838311
Email: info@wamocon.com

**Registration:**
Commercial Register: Eschborn HRB 123666
VAT ID: DE344930486

## ./legal-docs/datenschutzerklaerung.md
# Datenschutzerklärung

Stand: {{MONAT}} {{JAHR}}

## 1. Verantwortlicher

Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:

WAMOCON GmbH
Mergenthalerallee 79 - 81
65760 Eschborn
Telefon: +49 6196 5838311
E-Mail: info@wamocon.com
Projektkontakt: {{PROJEKT_EMAIL}}
Geschäftsführer: Dipl.-Ing. Waleri Moretz
Handelsregister: Eschborn HRB 123666
USt-ID: DE344930486

## 2. Überblick über die Datenverarbeitung

Diese Datenschutzerklärung gilt für die Website und Webanwendung {{PROJEKTNAME}} ({{DOMAIN}}).

Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Plattform sowie unserer Inhalte und Leistungen erforderlich ist.

## 3. Rechtsgrundlagen der Verarbeitung

- **Einwilligung** – Art. 6 Abs. 1 lit. a DSGVO
- **Vertragserfüllung** – Art. 6 Abs. 1 lit. b DSGVO
- **Rechtliche Verpflichtung** – Art. 6 Abs. 1 lit. c DSGVO
- **Berechtigtes Interesse** – Art. 6 Abs. 1 lit. f DSGVO

## 4. Hosting und Infrastruktur

### Vercel Inc.
Die Website und Webanwendung werden über Vercel gehostet. Dabei verarbeitet Vercel technisch notwendige Verbindungsdaten (IP-Adresse, Zeitstempel, Browserinformationen). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

### Supabase Inc.
Für Datenbank, Authentifizierung, Dateispeicher und Teile der Backend-Infrastruktur nutzen wir Supabase. Verarbeitet werden Authentifizierungsdaten, Session-Informationen, Projektdaten sowie gespeicherte Medien. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.

## 5. Erhebung personenbezogener Daten

### Registrierung und Nutzerkonto
Bei der Registrierung erheben wir: Name, E-Mail-Adresse und Passwort. Diese Daten sind zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b DSGVO).

### Server-Logfiles
Bei jedem Zugriff auf unsere Plattform werden automatisch folgende Daten erfasst: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer-URL, Browser-Typ und -Version. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

## 6. Cookies und Tracking

Die Plattform verwendet technisch notwendige Cookies für Session-Management und Authentifizierung. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

## 7. Rechte der betroffenen Personen

Sie haben das Recht auf:
- **Auskunft** (Art. 15 DSGVO)
- **Berichtigung** (Art. 16 DSGVO)
- **Löschung** (Art. 17 DSGVO)
- **Einschränkung der Verarbeitung** (Art. 18 DSGVO)
- **Datenübertragbarkeit** (Art. 20 DSGVO)
- **Widerspruch** (Art. 21 DSGVO)
- **Widerruf** erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)
- **Beschwerde** bei einer Aufsichtsbehörde (Art. 77 DSGVO)

## 8. Datensicherheit

Wir setzen technische und organisatorische Sicherheitsmaßnahmen nach dem Stand der Technik ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.

## 9. Änderung der Datenschutzerklärung

Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen der Plattform anzupassen.

---

> **Hinweis:** Dies ist ein Muster. Ersetze alle `{{PLATZHALTER}}` mit den projektspezifischen Informationen. Lass die Datenschutzerklärung vor Veröffentlichung von einem Juristen prüfen.

## ./legal-docs/impressum.md
# Impressum

Stand: {{MONAT}} {{JAHR}}

## WAMOCON GmbH

Mergenthalerallee 79 - 81
65760 Eschborn
Deutschland

## Kontakt

Telefon: +49 6196 5838311
E-Mail: info@wamocon.com
Projektkontakt: {{PROJEKT_EMAIL}}

## Vertretungsberechtigter Geschäftsführer

Dipl.-Ing. Waleri Moretz

## Registereintrag

Sitz der Gesellschaft: Eschborn
Handelsregister: Eschborn HRB 123666
Umsatzsteuer-Identifikationsnummer: DE344930486

## Angaben zum Angebot

{{PROJEKTNAME}} ist eine webbasierte Software-as-a-Service-Plattform für {{BESCHREIBUNG_DES_ANGEBOTS}}. Das Angebot richtet sich primär an Unternehmen und gewerbliche Nutzer.

---

> **Hinweis:** Ersetze alle `{{PLATZHALTER}}` mit den projektspezifischen Informationen.

## ./legal-docs/imprint.md
# Imprint (Legal Notice)

As of: {{MONTH}} {{YEAR}}

## WAMOCON GmbH

Mergenthalerallee 79 - 81
65760 Eschborn
Germany

## Contact

Phone: +49 6196 5838311
Email: info@wamocon.com
Project Contact: {{PROJECT_EMAIL}}

## Authorized Managing Director

Dipl.-Ing. Waleri Moretz

## Registration

Registered Office: Eschborn
Commercial Register: Eschborn HRB 123666
VAT Identification Number: DE344930486

## About the Service

{{PROJECT_NAME}} is a web-based Software-as-a-Service platform for {{SERVICE_DESCRIPTION}}. The service is primarily aimed at businesses and commercial users.

---

> **Note:** Replace all `{{PLACEHOLDERS}}` with your project-specific information.

## ./legal-docs/privacy-policy.md
# Privacy Policy

As of: {{MONTH}} {{YEAR}}

## 1. Data Controller

The Data Controller as defined by the General Data Protection Regulation (GDPR) is:

WAMOCON GmbH
Mergenthalerallee 79 - 81
65760 Eschborn, Germany
Phone: +49 6196 5838311
Email: info@wamocon.com
Project Contact: {{PROJECT_EMAIL}}
Managing Director: Dipl.-Ing. Waleri Moretz
Commercial Register: Eschborn HRB 123666
VAT ID: DE344930486

## 2. Overview of Data Processing

This Privacy Policy applies to the website and web application {{PROJECT_NAME}} ({{DOMAIN}}).

We process personal data of our users only insofar as this is necessary to provide a functional platform and our content and services.

## 3. Legal Basis for Processing

- **Consent** – Art. 6(1)(a) GDPR
- **Performance of Contract** – Art. 6(1)(b) GDPR
- **Legal Obligation** – Art. 6(1)(c) GDPR
- **Legitimate Interest** – Art. 6(1)(f) GDPR

## 4. Hosting and Infrastructure

### Vercel Inc.
The website and web application are hosted via Vercel. Vercel processes technically necessary connection data (IP address, timestamp, browser information). Legal basis: Art. 6(1)(f) GDPR.

### Supabase Inc.
We use Supabase for database, authentication, file storage, and parts of the backend infrastructure. Authentication data, session information, project data, and stored media are processed. Legal basis: Art. 6(1)(b) GDPR.

## 5. Collection of Personal Data

### Registration and User Account
During registration we collect: name, email address, and password. This data is necessary for the performance of the contract (Art. 6(1)(b) GDPR).

### Server Log Files
Each access to our platform automatically records: IP address, date and time, page accessed, referrer URL, browser type and version. Legal basis: Art. 6(1)(f) GDPR.

## 6. Cookies and Tracking

The platform uses technically necessary cookies for session management and authentication. Legal basis: Art. 6(1)(f) GDPR.

## 7. Rights of Data Subjects

You have the right to:
- **Access** (Art. 15 GDPR)
- **Rectification** (Art. 16 GDPR)
- **Erasure** (Art. 17 GDPR)
- **Restriction of processing** (Art. 18 GDPR)
- **Data portability** (Art. 20 GDPR)
- **Object** (Art. 21 GDPR)
- **Withdraw consent** (Art. 7(3) GDPR)
- **Lodge a complaint** with a supervisory authority (Art. 77 GDPR)

## 8. Data Security

We employ state-of-the-art technical and organisational security measures to protect your data against accidental or intentional manipulation, loss, destruction, or access by unauthorised persons.

## 9. Changes to this Privacy Policy

We reserve the right to amend this Privacy Policy to reflect changes in the law or changes to the platform.

---

> **Note:** This is a template. Replace all `{{PLACEHOLDERS}}` with your project-specific information. Have the Privacy Policy reviewed by a lawyer before publication.

## ./legal-docs/terms-and-conditions.md
# Terms and Conditions

As of: {{MONTH}} {{YEAR}}

## § 1 Scope

(1) These Terms and Conditions (hereinafter "T&C") of WAMOCON GmbH, Mergenthalerallee 79 - 81, 65760 Eschborn (hereinafter "Provider"), apply to all contracts for the use of the Software-as-a-Service platform {{PROJECT_NAME}} (hereinafter "Platform"), provided via the website {{DOMAIN}}.

(2) The Platform is aimed at businesses and commercial users (hereinafter "Client") and their respective users (hereinafter "Users"). This is a B2B offering. Consumers within the meaning of § 13 BGB (German Civil Code) are not the target audience.

(3) Deviating, conflicting, or supplementary terms and conditions of the Client shall not become part of the contract unless the Provider expressly agrees in writing.

## § 2 Conclusion of Contract

(1) The presentation of the Platform and its features on the website does not constitute a binding offer within the meaning of § 145 BGB, but rather an invitation to submit an offer (invitatio ad offerendum).

(2) The Client submits a binding offer by completing the registration process on the Platform and accepting these T&C.

(3) The contract is concluded when the Provider accepts the Client's offer by activating access.

## § 3 Service Description

(1) The Provider makes the Platform available to the Client as Software-as-a-Service (SaaS) via the Internet.

(2) The precise scope of features is set out in the current service description on the website.

(3) The Provider is entitled to further develop, expand, and adapt the Platform. Material restrictions to the scope of features will be communicated to the Client in advance.

## § 4 Usage Rights

(1) The Provider grants the Client a simple, non-transferable, non-sublicensable right to use the Platform for the duration of the contract.

(2) The Client may only use the Platform for its own business purposes.

## § 5 Client Obligations

(1) The Client shall keep its access credentials confidential and protect them from third-party access.

(2) The Client shall ensure that use of the Platform complies with applicable law.

## § 6 Availability

(1) The Provider shall endeavour to maintain an annual average availability of 99.5%.

(2) Scheduled maintenance windows announced in advance shall not count as downtime.

## § 7 Data Protection

The processing of personal data is governed by the Provider's Privacy Policy and the provisions of the GDPR.

## § 8 Liability

(1) The Provider shall be fully liable for damages arising from injury to life, body, or health, as well as for intent and gross negligence.

(2) Otherwise, liability is limited to foreseeable, typically occurring damages.

## § 9 Contract Duration and Termination

(1) The contract is concluded for an indefinite period and may be terminated by either party with one month's notice to the end of a calendar month.

(2) The right to extraordinary termination for good cause remains unaffected.

## § 10 Final Provisions

(1) The law of the Federal Republic of Germany shall apply, excluding the UN Convention on Contracts for the International Sale of Goods.

(2) The place of jurisdiction is Eschborn, provided the Client is a merchant.

(3) Should individual provisions of these T&C be invalid, the validity of the remaining provisions shall remain unaffected.

---

> **Note:** This is a template. Replace all `{{PLACEHOLDERS}}` with your project-specific information. Have the T&C reviewed by a lawyer before publication.

## package.json
{
  "name": "belegnest",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "typecheck": "tsc --noEmit",
    "verify": "npm run typecheck && npm run lint && npm run build",
    "gen:anforderungsdokument": "node scripts/generate-anforderungsdokument.mjs"
  },
  "dependencies": {
    "@supabase/ssr": "^0.10.3",
    "@supabase/supabase-js": "^2.105.4",
    "browser-image-compression": "^2.0.2",
    "clsx": "^2.1.1",
    "docx": "^9.6.1",
    "file-saver": "^2.0.5",
    "jszip": "^3.10.1",
    "lucide-react": "^1.14.0",
    "next": "16.2.1",
    "next-intl": "^4.12.0",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "tailwind-merge": "^3.6.0",
    "tesseract.js": "^7.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/file-saver": "^2.0.7",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

