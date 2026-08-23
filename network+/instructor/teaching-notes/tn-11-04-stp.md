---
teaching_notes_for: NA-M11-L04
module: 11
lesson: 04
unit: 8
objective_ids: ["2.3"]
---

# 🔒 Teaching Notes — Lesson 11-04: Spanning Tree Protocol (Loop Prevention)

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners explain switching loops and broadcast storms, and how STP prevents them by electing a root bridge and blocking redundant paths.

## Where this sits
- **Before:** 07-02 (flooding/broadcasts) and 11-03 (trunks/redundant links). Both hard prerequisites.
- **After:** 11-05 (routing basics), 11-06 (inter-VLAN routing).
- Conceptual + a read-only lab (view STP status). Nothing is changed on the switch.

## Core facts
- **Loop** = redundant paths forming a circle → **broadcast storm** (frames multiply endlessly), MAC instability, duplicates.
- **STP** breaks loops: elect a **root bridge**, choose best path to root, **block** the rest.
- Port states: Forwarding (active), Blocking (standby), Disabled.
- Standards: **802.1D** (STP), **802.1w** (Rapid STP, faster convergence).
- On link failure, STP unblocks a standby path automatically.

## Common misconceptions (correct both)
1. **"A blocked port is broken."** No — it's a standby that activates on failure.
2. **"Disable STP to speed up."** Dangerous — one loop then storms everything. STP overhead is tiny.

## Prime Directive #7 — accuracy
`show spanning-tree` output (Root ID, states, STP vs. RSTP labels) varies by PowerConnect firmware. Every unverified line is marked **[TO VERIFY ON HARDWARE]**; learners record their own output. The lab is **view-only** — never have learners disable STP on a shared switch.

## Pacing (~30 min)
- 8 min — the storm mechanic (WHY loops are catastrophic). This is the hook; don't rush it.
- 10 min — root bridge, best path, blocking; the roundabout analogy.
- 12 min — read `show spanning-tree`, find the root bridge and a blocked port.

## How CompTIA tends to test it
- STP prevents Layer 2 loops / broadcast storms.
- Root bridge and port states (forwarding/blocking).
- RSTP (802.1w) converges faster than STP (802.1D).

## Support / extension
- **Support:** draw the storm step by step on a two-switch loop; count the copies doubling.
- **Extension:** BPDUs, bridge priority, and root election (lowest bridge ID wins); BPDU Guard/PortFast on edge ports.

---
_NetworkAcademy+ · Teaching Notes 11-04 · CompTIA Network+ N10-009 · Instructor materials_
