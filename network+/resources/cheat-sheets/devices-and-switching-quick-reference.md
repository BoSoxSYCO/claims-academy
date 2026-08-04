# Cheat Sheet — Network Devices & Switching

> A printable quick reference for **Module 07**. Grows as the module's lessons are published.

---

## Hub vs. switch vs. router (Lesson 07-01)

| Device | OSI layer | Reads | What it does |
|--------|:---------:|-------|--------------|
| **Hub** | 1 (Physical) | nothing | Repeats every signal out **all** ports (noisy, obsolete) |
| **Switch** | 2 (Data Link) | **MAC** | Sends a frame to the **one right** port (main LAN device) |
| **Router** | 3 (Network) | **IP** | Connects **different networks** (home ↔ internet) |

- **Address → device:** none = **hub** · MAC = **switch** · IP = **router**.
- **Smarter device = higher layer.**
- **Repeater** (L1) = boosts a weak signal so it goes farther.
- Your home "router" box = **router + switch + Wi-Fi access point** in one case.

```
HUB (L1): msg → ALL ports (everyone hears)   ✗ noisy
SWITCH (L2): msg → the ONE right port (MAC)  ✓ quiet
ROUTER (L3): home network ── router ── internet (IP)
```

> **Remember:** hub shouts to the room, switch delivers to the right desk (MAC), router mails between buildings (IP).

---

## How a switch learns (Lesson 07-02)

- **MAC address table** = the switch's **MAC → port** list, built by itself.
- **Learn:** read the **source** MAC of each frame → record MAC → port.
- **Forward:** destination **known** → send out that **one** port (quiet).
- **Flood:** destination **unknown** or **broadcast** (`FF:FF:FF:FF:FF:FF`) → send out **all** ports except the source.
- **Aging:** idle entries are removed after the aging time (often ~5 min).

```
frame from AA on port 1  → table: AA → 1        (LEARN from source)
dest BB (known, port 3)  → forward out port 3   (one port)
dest ZZ (unknown)        → flood all other ports → ZZ replies → now learned
```

> **Remember:** **source to learn, destination to forward.** Flooding unknown/broadcast frames is normal, not a fault.

---

## Collision & broadcast domains (Lesson 07-03)

- **Collision** = two devices send at once on a shared wire → signals clash (old hubs/half-duplex; `CSMA/CD` handled it).
- **Collision domain** = where a collision can happen. **Broadcast domain** = who hears broadcasts.

| Device | Collision domains | Broadcast domains |
|--------|-------------------|-------------------|
| **Hub** (N ports) | **1** (all share) | 1 |
| **Switch** (N ports) | **N** (one per port) | **1** |
| **Router** (N interfaces) | one per interface | **one per interface** |

- **Mantra:** **switches break up collision domains; routers break up broadcast domains.**
- A switch does **not** stop broadcasts — only a router does.
- Count: every **switch port** = a collision domain; every **router side** = a broadcast domain.

> **Remember:** switch → booths (no collisions); router → walls (no broadcasts across).

---

## Other network gear (Lesson 07-04)

| Device | One-word job | What it does |
|--------|--------------|--------------|
| **Access point (AP)** | Wi-Fi | Lets wireless devices join a wired network |
| **Modem** | ISP door | Connects your home to your internet provider |
| **Firewall** | filter | Allows or blocks traffic by rules (security) |
| **Load balancer** | spread | Spreads traffic across several servers |
| **Proxy server** | middleman | Forwards/filters users' requests |
| **IDS / IPS** | watch | Detect (IDS alerts) / prevent (IPS blocks) attacks |
| **PoE** | power | Power + data over one Ethernet cable |

- **Modem ≠ router:** modem talks to the ISP; router connects networks (often combined in a "gateway").
- **IDS alerts; IPS blocks.**
- Your home box hides an **AP** and a basic **firewall** already.

> **Remember:** each device has one job — AP = Wi-Fi, modem = ISP door, firewall = filter.

---

## Managed switch & the Dell 3424 (Lesson 07-05)

| | **Managed switch** | **Unmanaged switch** |
|---|--------------------|----------------------|
| Settings? | **Yes** — log in & configure | **No** — plug and play |
| Features | VLANs, monitoring, port settings, remote mgmt | just forwards frames |
| Cost / setup | more · needs setup | less · none |
| Example | your **Dell 3424** | cheap home switch |

**Dell PowerConnect 3424 front panel:**

| Part | What it's for |
|------|---------------|
| **Access ports** (24, 10/100) | where your devices plug in |
| **Uplink / Gigabit ports** | faster link up to a router or core switch |
| **SFP slot** | holds a plug-in module (often fiber) |
| **Console port** | **management only** — the first login (serial) |
| **LEDs** | power, system, and per-port link/activity |

- **Console port ≠ network port** — it manages the switch; no normal traffic.
- **SFP** = a slot for a plug-in module (copper or fiber). **Uplink** = faster port to a router/core.
- Exact Gigabit/SFP counts and LED colors vary by unit — **verify on your hardware**.

> **Remember:** managed = log in & configure (your 3424); unmanaged = no settings. Console port is for the first login only.

---

## Console vs. web management (Lesson 07-06)

| | **Console** | **Web** |
|---|-------------|---------|
| Path | direct **console cable** | **browser** over the network |
| Term | **out-of-band** | **in-band** |
| Needs network? | **No** — always works | **Yes** — needs the switch's IP |
| Best for | the **first** login; network down | everyday changes on a live network |
| Tools | terminal emulator (PuTTY) | any web browser |

- **Serial settings:** **9600 8-N-1** (speed 9600 · 8 data · No parity · 1 stop · No flow). `[TO VERIFY ON HARDWARE]`
- **Blank / garbage screen** → wrong **baud rate** (or wrong COM port).
- **No serial port?** → **USB-to-serial** adapter → pick the **COM** port in the terminal.
- **New switch has no IP** → you **must** start with the console.
- Confirm default **login**, **baud rate**, and any default **IP** on **your** unit — never guess.

> **Remember:** console = the physical key (out-of-band, always works, first login); web = the keypad (in-band, easy, needs an IP).

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 07_
