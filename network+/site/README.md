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

## Self-host on Proxmox / Docker

The simplest path is a Docker container (run it in a Proxmox VM or LXC that has
Docker, or on any Docker host / NAS):

```bash
cd network+/site
docker compose up -d --build
```

Then browse to `http://<host-ip>:8080`. The build compiles the site inside the
image and serves the static files with nginx (~40 MB final image). To update
after editing lessons, re-run the same command — it rebuilds from the current
Markdown.

### Proxmox specifics

- **LXC container** (lightest): create a Debian/Ubuntu LXC, install Docker
  (`curl -fsSL https://get.docker.com | sh`), clone the repo, then
  `docker compose up -d --build` in `network+/site`. Point a reverse proxy
  (or just the host IP:8080) at it.
- **VM**: same steps inside a small Ubuntu VM if you prefer full isolation.
- Put it behind your existing reverse proxy (Nginx Proxy Manager, Traefik,
  Caddy) to give it a hostname and HTTPS on your LAN.

## Publish to a public URL (optional)

Because `dist/` is just static files, any static host works — Cloudflare Pages,
GitHub Pages, Netlify. Build command `npm run build`, output directory `dist`,
and set the Node version to 20+.
