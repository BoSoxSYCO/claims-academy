---
title: How this site is built
description: The pipeline that turns the course Markdown into this interactive site, and how to self-host it.
---

Network City is a **static site** generated from the course's Markdown. There is no
database and no backend, so it can be hosted at a public web address *or* on your own
home lab — the exact same files either way.

## The pipeline

```
network+/modules/**/lessons/*.md   (the canonical, authored lessons)
        │
        ▼   scripts/import-lessons.mjs   (runs automatically on every build)
        │     • lifts the title, drops the duplicate in-body H1
        │     • strips instructor-only sections (answer keys, teaching notes,
        │       production briefs) so the student view stays clean
        │     • adds an objective/time badge
        │     • embeds interactive widgets in flagship lessons
        ▼
src/content/docs/modules/**        (generated Starlight pages)
        │
        ▼   astro build
        │
dist/                              (plain HTML/CSS/JS — deploy anywhere)
```

The authored Markdown stays the single source of truth. Re-running the build
regenerates every page, so edits to a lesson flow straight through.

## Running it yourself

```bash
cd network+/site
npm install
npm run build      # imports lessons, then builds to ./dist
npm run preview    # serve the built site locally
```

For a home-lab deployment (Proxmox / Docker), see the `README.md` in this folder:
one small nginx container serves the `dist/` folder.
