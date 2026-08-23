# Network City — the interactive site

An [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) site
generated from the course Markdown in `../modules`. It's a **static site** — no
database, no backend — so it can be served from a free public host *or* a small
container on your own home lab, from the exact same files.

## What's here

```
site/
├─ astro.config.mjs           Starlight config (title, sidebar, fonts, theme)
├─ scripts/import-lessons.mjs  the pipeline: ../modules → Starlight pages
├─ src/
│  ├─ content/docs/           index + about (lesson pages are generated here)
│  ├─ components/SwitchSim.astro   interactive "smart intersection" widget
│  └─ styles/network-city.css  the Network City visual identity
├─ Dockerfile / nginx.conf / docker-compose.yml   self-hosting
└─ dist/                       build output (generated)
```

The authored lessons in `../modules/**/lessons/*.md` stay the single source of
truth. `import-lessons.mjs` runs automatically on every build and:

- uses the front-matter title, drops the duplicate in-body `# H1`
- **strips instructor-only sections** (answer keys, teaching notes, production
  briefs, glossary updates) so students never see them
- adds an objective/time badge
- embeds the interactive `<SwitchSim/>` in the flagship switch lesson

## Run it locally

```bash
cd network+/site
npm install
npm run dev        # http://localhost:4321  (imports lessons, then live-reloads)
# or
npm run build      # imports lessons, builds to ./dist
npm run preview     # serve the built ./dist locally
```

## Self-host on Proxmox / Docker at a real URL

```bash
cd network+/site
docker compose up -d --build     # serves on port 80
```

Then browse to `http://<host-ip>/`. The build compiles the site inside the
image and serves the static files with nginx (~40 MB final image). Re-run the
same command after editing lessons to rebuild from the current Markdown.

**Getting a friendly URL on your network** (`http://networkcity.lan/` instead
of an IP), Proxmox LXC/VM setup, and optional HTTPS are covered step by step in
**[DEPLOY.md](DEPLOY.md)** — start there if you have Proxmox and nothing else
set up yet.

## Publish to a public URL (optional)

Because `dist/` is just static files, any static host works — Cloudflare Pages,
GitHub Pages, Netlify. Build command `npm run build`, output directory `dist`,
and set the Node version to 20+.
