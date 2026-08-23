# Teaching Notes — NA-M14-L05 "Troubleshooting Connectivity (Layers 1–3)"

> 🔒 Instructor material. **Module:** 14 · **Unit:** 11 · **Objective:** N10-009 5.2 / 5.3 · **Time:** ~35 min

---

## Learning objective (one line)

Learners troubleshoot connectivity bottom-up through OSI Layers 1–3, matching each symptom and tool to a layer.

## Why this lesson matters

This is the first **application** lesson: it fuses the method (14-01), the CLI tools (14-02/03), and the hardware tools (14-04) into one repeatable approach — the OSI layer ladder. Objectives 5.2/5.3 (cabling and connectivity issues) are exactly this, and "which layer is this symptom?" is a very common exam question.

## The ladder (bottom-up)

- **Layer 1 (Physical):** cable plugged in, **link light**, cable good (tester), right cable, port enabled — **check first**.
- **Layer 2 (Data Link):** right VLAN/switch port, **duplex mismatch**, port errors.
- **Layer 3 (Network):** real IP (not **169.254/APIPA**), subnet mask, **default gateway** (ping it).

## Common misconceptions (and fixes)

- **"Start at the IP settings."** No — go **bottom-up**; check the cable/link light first. Most faults are physical.
- **"A link light is a Layer 3 thing."** It's **Layer 1** — a live physical link.
- **"169.254 is a normal address."** It's **APIPA** — the device self-assigned it because **no DHCP** answered (a Layer 3 clue).
- **"A duplex mismatch drops the link."** It causes **errors and slowness**, not a full outage.

## Pacing guidance

- ~35 minutes. Lead with the lamp/plug analogy (§4) — you check the plug before the fuse box.
- The climb-the-ladder lab (§9) is the core: have learners run `ipconfig` and identify a real vs. 169.254 address, then ping the gateway.
- Drill "which layer is this symptom?" — that's the exam pattern.
- Where learners stall: remembering to start at Layer 1, and recognizing 169.254 as APIPA/no-DHCP.

## How CompTIA tends to test it

- Which OSI layer a symptom belongs to.
- Bottom-up vs. top-down approach; start at Layer 1 for "no connection."
- 169.254 = APIPA = no DHCP.
- Duplex mismatch = slow + errors.

## Accuracy note (Prime Directive #7)

`ipconfig` and `ping` are real; the **169.254 APIPA symptom is real and teachable**. Exact addresses and ping replies are **examples that vary** and are marked `[TO VERIFY ON HARDWARE]`. The lab is read-only (plus a gentle cable reseat); no switch settings are changed and no output is fabricated.

## Extension ideas (fast learners)

- Top-down and divide-and-conquer approaches, and when each is faster.
- Reading interface error counters (CRC, collisions) as Layer 1/2 evidence.
- When a Layer 3 fault is really a routing/gateway problem to escalate.

## Support ideas (struggling learners)

- Give the lamp/plug table (§4) as the anchor; map each row to its layer.
- Practice only "which layer?" with five symptoms before the full lab.
- Anchor the single most useful clue: **169.254 = no DHCP**.

## Where this leads

Next is 14-06 (names, speed, and wireless) — the upper-layer and wireless symptoms (DNS name failures, slow throughput, Wi-Fi issues). Then 14-07 works full scenarios end to end.

---
_NetworkAcademy+ · Teaching Notes · CompTIA Network+ N10-009 · NA-M14-L05 · Module 14_
