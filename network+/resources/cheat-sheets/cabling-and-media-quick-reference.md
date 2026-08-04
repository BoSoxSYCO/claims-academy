# Cheat Sheet — Cabling & Physical Media

> A printable quick reference for **Module 06**. Grows as the module's lessons are published.

---

## Twisted-pair copper (Lesson 06-01)

- A network cable = **4 twisted pairs** of **copper** = **8 wires**.
- **Twist** cancels **interference** (noise/EMI). **Crosstalk** = noise between pairs.
- **UTP** = Unshielded Twisted Pair (common, cheap). **STP** = Shielded Twisted Pair (metal shield, noisy areas).
- The **category** is printed on the jacket and sets the top **speed** and **distance**.

| Category | Top speed | Distance |
|----------|-----------|----------|
| **Cat5e** | 1 Gbps | 100 m |
| **Cat6** | 1 Gbps (10 Gbps ≤55 m) | 100 m |
| **Cat6a** | 10 Gbps | 100 m |
| **Cat7** | 10 Gbps (shielded) | 100 m |
| **Cat8** | 25–40 Gbps | ≤30 m |

- **Standard twisted-pair run limit: 100 m.**
- A higher-category cable sets a **ceiling** — it does **not** speed up a slow plan or gear.

```
Cat5e(1G) → Cat6(1–10G) → Cat6a(10G) → Cat8(25–40G, short)
   read the printed CAT text on the jacket
```

> **Remember:** the cable is 4 twisted pairs of copper; the "Cat" number tells you how fast and how far.

---

## Connectors & jacks (Lesson 06-02)

- **Connector** = plug (male). **Jack** = socket (female). Connector → jack; listen for the **click**.
- **RJ45** = the Ethernet connector — **8 pins** (one per wire), a **locking tab**. (Also "8P8C.")
- **RJ11** = phone connector — **smaller**, fewer pins. Don't confuse it with RJ45.
- **Keystone jack** = snap-in jack for a wall plate/panel. **Patch panel** = many jacks where in-wall cables end.
- **Patch cable** = short cable, **RJ45 on both ends** (device ↔ jack, or panel ↔ switch).
- **Broken locking tab → loose plug → on/off (blinking) link.** Press the tab to release.

```
[RJ45 plug] → clicks into → [jack / Ethernet port]
building:  wall keystone jack —patch cable— PATCH PANEL —patch cable— switch
```

> **Remember:** RJ45 (8 pins, wide) = Ethernet; RJ11 (small) = phone. The tab holds it — press to release.

---

## Fiber optic (Lesson 06-03)

- **Fiber** carries data as **light** in a glass **core**; the **cladding** reflects stray light back in.
- A **mode** = a path light takes down the core.

| Type | Core | Light source | Distance | Jacket |
|------|------|--------------|----------|--------|
| **Single-mode (SMF)** | thin (~9 µm), one path | **laser** | longest (km) | often yellow |
| **Multimode (MMF)** | wide (~50–62.5 µm), many paths | **LED** | shorter (hundreds of m) | often aqua/orange |

- **Fiber vs. copper:** farther · faster · **immune to EMI/crosstalk** (it's light) · more secure — but pricier and fragile (no sharp bends).
- Memory hook: **single** = one path (far); **multi** = many paths (short).

```
core (light) —bounces→ kept in by cladding —→ out the far end
SMF: ══>──────────>  (laser, far)   MMF: ══>╱╲╱╲╱╲──>  (LED, short)
```

> **Remember:** copper = electricity (EMI, 100 m limit); fiber = light (no EMI, goes far).

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 06_
