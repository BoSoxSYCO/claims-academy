# Exam-Depth Supplement — Objective 1.2: Networking appliances and functions

> **What this is:** a short, exam-depth add-on that goes past the beginner lessons. Read it when you are getting ready for the exam.
> **Objective:** N10-009 **1.2** — Compare and contrast networking appliances, applications, and functions. **Builds on:** Module 07 (devices and switching).

## Why this matters

Module 07 taught the everyday boxes: hub, switch, router, access point, firewall. The exam names more appliances and asks you to tell them apart. This is the full list, in plain words, so no exam name surprises you.

## Key words

- **Appliance** — A device (or a virtual version of one) built to do one network job well.
- **Inline** — Traffic must pass *through* the device (it can block).
- **Out-of-band** — The device sees a *copy* of traffic (it can warn but not block).

## The appliances, compared

| Appliance | What it does | Remember it by |
|-----------|--------------|----------------|
| **Layer 2 switch** | Forwards frames by MAC address inside a LAN | The LAN connector |
| **Layer 3 switch** | A switch that can also route between VLANs | Switch + router in one |
| **Router** | Moves packets between networks by IP | The between-networks box |
| **Firewall** | Allows/blocks traffic by rules | The gatekeeper |
| **NGFW (Next-Gen Firewall)** | Firewall that also sees apps, users, and content | Smart gatekeeper |
| **IDS (Intrusion Detection System)** | Watches a copy of traffic and **alerts** | Out-of-band alarm |
| **IPS (Intrusion Prevention System)** | Sits inline and can **block** attacks | Inline bouncer |
| **Load balancer** | Spreads traffic across many servers | The traffic splitter |
| **Proxy** | Makes requests on a client's behalf; can cache/filter | The middleman |
| **Access point (AP)** | Bridges Wi-Fi devices onto the wired LAN | Wi-Fi door |
| **Wireless controller** | Manages many APs from one place | The AP manager |
| **NAS** | File storage shared over the normal network (file-level) | Shared drive |
| **SAN** | High-speed block storage on its own network | Storage network |
| **CDN (Content Delivery Network)** | Caches content near users worldwide | Copies close to you |

## Forward proxy vs. reverse proxy

- **Forward proxy** — Sits in front of *clients*. Employees' web requests go out through it (filtering, caching, privacy).
- **Reverse proxy** — Sits in front of *servers*. Incoming requests hit it first (it hides servers, adds TLS, balances load).

## NAS vs. SAN (a classic exam pair)

- **NAS** — Talks **files** over the regular LAN (like a shared folder). Simple, cheaper.
- **SAN** — Serves raw **blocks** over a dedicated, fast network; the server treats it like a local disk. Faster, pricier.

## Functions you should name

- **VPN headend / concentrator** — Terminates many VPN tunnels.
- **QoS (Quality of Service)** — Gives important traffic (voice, video) priority.
- **TTL (Time To Live)** — A counter in each packet; drops to stop packets looping forever.
- **Content filtering** — Blocks unwanted or unsafe sites/categories.

> 🎯 **Exam tip:** The trickiest pairs: **IDS vs. IPS** (detect/alert vs. inline/block), **forward vs. reverse proxy** (in front of clients vs. servers), and **NAS vs. SAN** (files over the LAN vs. blocks on a dedicated network).

## Quick check

1. Which watches a copy of traffic and only alerts — IDS or IPS?
2. A proxy that sits in front of your web servers to hide them and add TLS is which kind?
3. NAS or SAN: which serves raw blocks over its own high-speed network?

### Quick-check answers

1. **IDS** — it is out-of-band and alerts. **IPS** is inline and can block.
2. A **reverse proxy** (in front of servers). A forward proxy sits in front of clients.
3. **SAN** — block storage on a dedicated network. **NAS** serves files over the normal LAN.

---
_NetworkAcademy+ · Exam-Depth Supplement · Objective 1.2 (Appliances) · CompTIA Network+ N10-009_
