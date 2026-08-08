# Cheat Sheet — Capstone & Exam Readiness

> A printable quick reference for **Module 15**. Grows as the module's lessons are published.

---

## Capstone build order (Lesson 15-01)

Build from the bottom. Test from the bottom. Prove each layer before you trust the next.

| Stage | Do this | Prove it worked |
|-------|---------|-----------------|
| 1. Gather | router · switch · laptop · 2 cables | all parts on the desk |
| 2. Plan | draw internet → router → switch → laptop | a simple map |
| 3. Wire | router→switch (uplink), switch→laptop (patch) | cables seated |
| 4. Power | router, then switch, then laptop | **link lights** on |
| 5. Address | `ipconfig` | real IP + gateway (not 169.254) |
| 6. Test | `ping` gateway → `ping 8.8.8.8` → `nslookup` | replies + a name resolves |
| 7. Switch | confirm link/activity lights | steady link, blinking traffic |
| 8. Fix | seven-step method | lowest broken layer first |
| 9. Document | write ports, IP, results | someone could rebuild it |

### The test order (memorize)

**link light (L1) → IP from DHCP (L3) → ping gateway → ping 8.8.8.8 → resolve a name (DNS)**

- `169.254.x.x` = **APIPA** = no DHCP answered. Reseat the cable; check the router; `ipconfig /renew`.
- Real IP but names fail = **DNS**. Try `nslookup`, then `ipconfig /flushdns`.
- On a **shared** switch: only add your cable; never change its settings.

> **Remember:** plumb the pipes, open the main valve, check each faucet in order, then mark the map.

---

## Exam-day logistics (Lesson 15-02)

Know the format so exam day holds no surprises.

| Fact | Value |
|------|-------|
| Time | 90 minutes |
| Questions | up to ~90 *[VERIFY WITH CompTIA]* |
| Passing score | 720 / 900 (a **scaled score**, not a percent) |
| Question types | multiple-choice + **Performance-Based Questions (PBQs)** |
| Where | **Pearson VUE** center or **online proctoring** |
| Bring | a valid government photo ID (and your **voucher**) |

### The game plan (order matters)

1. See an early **PBQ**? **Flag** it and skip it.
2. Answer the fast multiple-choice first — bank the points.
3. Return to the flagged PBQs with the time left.
4. **Guess** any blanks — there is no penalty for guessing.
5. Review, then submit.

- **Never leave a blank.** A guess can score; a blank is a sure zero.
- Do a "brain dump" of facts you fear forgetting the moment you sit down.
- Check the clock at the 30- and 60-minute marks.

> **Remember:** work it like a buffet — easy dishes first, circle back, never leave with an empty plate.

---

## PBQ practice (Lesson 15-03)

A **PBQ** is known content in a hands-on wrapper. Use the same five steps every time.

### The five steps

**Read** the whole task → **Plan** on scratch → **Do** the sure parts → **Guess** the rest → **Check** for blanks.

### The three formats

| Format | Example | Key move |
|--------|---------|----------|
| Drag-and-drop / matching | OSI layers, port numbers | place the sure ones first |
| Fill-in / configure | IP · mask · gateway · VLAN | `/24` = `255.255.255.0` |
| Label / identify | cable type, topology | match the cable to the job |

### Quick recall for PBQs

- IP → Layer 3 · MAC/switch → Layer 2 · cable/hub → Layer 1 · port → Layer 4.
- Host stays in the same network; gateway is the router's address on it.
- PC-to-switch = straight-through; long run = fiber.
- **Answer every sub-part** — partial credit is possible; a blank is zero.

> **Remember:** a PBQ is a cooking test, not a menu quiz — read the recipe, then make it.

---
_NetworkAcademy+ · Cheat Sheet · CompTIA Network+ N10-009 · Module 15_
