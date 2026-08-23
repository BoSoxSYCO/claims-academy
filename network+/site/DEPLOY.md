# Put Network City on your network at a real URL

This walks you from "nothing but Proxmox" to browsing the site at a friendly
address like `http://networkcity.lan/` from any device on your network. No
prior reverse proxy, DNS server, or domain required.

The site is static files served by nginx in one small container, so this is
about **running the container** and **giving it a name your devices can find**.

---

## 1. Pick where it runs

Either works; the LXC is lighter.

**Option A — Proxmox LXC (recommended, ~150 MB idle)**

1. In Proxmox: create a container from a **Debian 12** or **Ubuntu 22.04**
   template. Give it 1 vCPU, 1 GB RAM, 8 GB disk.
2. Before starting it: **Options → Features → enable `nesting`** (Docker needs
   this inside an LXC). For an unprivileged container also tick `keyctl`.
3. Start it, open its console, and install Docker:
   ```bash
   apt update && apt install -y curl
   curl -fsSL https://get.docker.com | sh
   ```

**Option B — a small VM** — create an Ubuntu Server VM (1 vCPU, 1 GB RAM),
then run the same `curl … get.docker.com | sh` inside it. Choose this if you
prefer full isolation.

Either way, note this machine's **IP address**:
```bash
hostname -I        # e.g. 192.168.1.50
```

> **Give it a fixed address.** In your router, add a **DHCP reservation** for
> this machine's MAC so its IP never changes. You'll point the URL at it.

## 2. Get the code and start it

```bash
apt install -y git                       # if not already present
git clone <your repo url> claims-academy
cd claims-academy/network+/site
docker compose up -d --build
```

The first build takes a few minutes (it compiles the whole site inside the
image). When it finishes, the site is live on **port 80**.

## 3. Reach it right now (by IP)

Open `http://<the-ip>/` from any device on your network — e.g.
`http://192.168.1.50/`. That already works. The rest is just giving it a name.

## 4. Give it a friendly URL

Pick one. **B works on every network** even if your router is basic.

### Option A — a name from your router (nicest; all devices at once)

Many home routers register device hostnames or let you add a local DNS entry.

1. Set this machine's hostname to something memorable:
   ```bash
   hostnamectl set-hostname networkcity
   ```
2. In your router, find **DHCP reservations** or **Local DNS / Host names**
   and make sure `networkcity` maps to the machine's IP.
3. Browse `http://networkcity/` (some routers need `http://networkcity.lan/`
   or `.home` — whatever suffix your router appends).

If your router doesn't support this, use Option B.

### Option B — a hosts-file entry (works anywhere, per device)

On each device you'll study from, map a name to the IP once:

- **Windows:** edit `C:\Windows\System32\drivers\etc\hosts` (as Administrator)
- **Mac/Linux:** edit `/etc/hosts` (with `sudo`)

Add this line (use your real IP):
```
192.168.1.50   networkcity.lan
```
Now `http://networkcity.lan/` works on that device. Quickest for one or two
machines; you repeat it per device.

### Option C — a real local DNS server (best long-term)

If you later add **Pi-hole** or **AdGuard Home** (both run as another small
container), add one **Local DNS record**: `networkcity.lan → 192.168.1.50`.
Every device that uses it for DNS then resolves the name automatically — no
per-device edits. Worth doing once you have more than a couple of services.

## 5. (Optional) HTTPS instead of HTTP

For a learning site with no logins, plain `http://` on your LAN is fine. If you
want the padlock:

```bash
SITE_HOST=networkcity.lan \
  docker compose -f docker-compose.yml -f docker-compose.https.yml up -d --build
```

This adds a Caddy container that terminates HTTPS with its **own local
certificate authority**. Browsers will warn until you trust Caddy's root CA on
your devices — copy it from the container:
```bash
docker cp network-city-caddy:/data/caddy/pki/authorities/local/root.crt .
```
Install `root.crt` as a trusted root on each device, and `https://networkcity.lan/`
shows a clean padlock.

## 6. Make links match the hostname (optional polish)

Internal navigation is relative and already works on any host. To also make the
canonical URLs and sitemap use your name, rebuild with `SITE_URL` set:
```bash
SITE_URL=http://networkcity.lan docker compose up -d --build
```

## 7. Updating after you edit lessons

```bash
cd claims-academy/network+/site
git pull
docker compose up -d --build     # rebuilds from the current Markdown
```

## 8. If you ever want it reachable from outside your house

Don't port-forward. The safe, no-open-ports way is a **Cloudflare Tunnel**
(free) if you own a domain: run one more small container (`cloudflared`) that
dials out to Cloudflare, and your site appears at
`https://networkcity.yourdomain.com` with real HTTPS. Tell me when you have a
domain and I'll add the tunnel config.

## Troubleshooting

- **Port 80 already in use** — something else on the host uses it. Either stop
  that, or change the mapping in `docker-compose.yml` to `"8080:80"` and use
  `:8080` in the URL.
- **Can't reach the IP** — check the container is up (`docker compose ps`) and
  that the host's firewall allows port 80 on the LAN.
- **Name doesn't resolve** — the container is fine (the IP works); the name is
  a DNS/hosts issue. Re-check Option A/B/C above.
- **Build runs out of memory** — give the LXC/VM 1 GB+ RAM for the build.
