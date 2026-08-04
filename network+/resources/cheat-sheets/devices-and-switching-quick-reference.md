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
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 07_
