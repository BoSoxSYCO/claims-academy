# Cheat Sheet — Networking Fundamentals

> A printable quick reference for **Module 04**. Grows as the module's lessons are published.

---

## Why networks exist (Lesson 04-01)

- **Network** = **2+ devices connected** to **share resources** and **communicate**.
- **Problems networks solve:**
  1. Share **files** (no carrying by hand)
  2. Share **devices** (one printer for many PCs)
  3. **Communicate** (email, calls, messages)
  4. Reach the **internet** (the biggest network of all)
- **Resource** = anything shared (file, printer, internet).
- **Share** = make a resource available to other devices.
- **Standalone** = a computer on no network. **Sneakernet** = carrying files on a USB (the slow way).

```
Standalone:  [PC]  [PC]  [PC]   ✗ isolated → carry files by hand
Networked:   [PC]─[Switch/Router]─(Internet) + shared printer → share & communicate
```

> **Remember:** every networking topic serves one goal — **sharing or communicating.**

---

## Nodes and links (Lesson 04-02)

- **Node** = any device that connects to a network (laptop, phone, router, switch, printer, TV).
- **Link** = the connection between two nodes. Also called a **connection**.
- **Endpoint** = a node that sends or gets information (a laptop or phone), not a middle device.
- **Wired link** = uses a cable. **Wireless link** = uses radio waves (Wi-Fi).
- **Read any diagram with two questions:** *What are the nodes? What are the links?*
- On a diagram: a **node** is a **dot/box**; a **link** is a **line** (solid = wired, dashed = wireless).

```
Road-map idea:  cities = nodes,  roads = links
Network:        [Laptop]───(wired)───[Router]···(Wi-Fi)···[Phone]
                  node                  node                 node
```

> **Remember:** every network is just **dots (nodes)** joined by **lines (links)**.

---

## Network sizes (Lesson 04-03)

| Name | Full name | Size | Example |
|------|-----------|------|---------|
| **PAN** | Personal Area Network | a few feet, one person | phone ↔ Bluetooth earbuds |
| **LAN** | Local Area Network | one place (home/office) | your router + laptop + TV |
| **WLAN** | Wireless LAN | one place, over Wi-Fi | your laptop on Wi-Fi |
| **MAN** | Metropolitan Area Network | a city | city links its libraries |
| **WAN** | Wide Area Network | long distance / the world | the internet |

- **Size order:** PAN &lt; LAN &lt; MAN &lt; WAN.
- **Middle-letter clue:** **P**ersonal · **L**ocal · **M**etropolitan · **W**ide.
- A **WLAN is a LAN** — just done over Wi-Fi instead of cables.

```
PAN → LAN/WLAN → MAN → WAN
you    one place   city   the world  (bigger →)
```

> **Remember:** the names sort networks by **how big** they are, from your body to the whole planet.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 04_
