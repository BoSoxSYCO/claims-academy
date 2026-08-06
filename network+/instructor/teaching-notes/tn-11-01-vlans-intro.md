---
teaching_notes_for: NA-M11-L01
module: 11
lesson: 01
unit: 8
objective_ids: ["2.3"]
---

# 🔒 Teaching Notes — Lesson 11-01: VLANs — Why We Split One Switch Into Many

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners explain what a VLAN is, what it separates (a broadcast domain), its three benefits, and why different VLANs need a router to communicate.

## Where this sits
- **Before:** 07-02/07-03 (switches, broadcast/collision domains) and 08-03 (subnets). These are hard prerequisites — VLAN = broadcast domain builds directly on 07-03.
- **After:** 11-02 (configure VLANs on the Dell 3424 — the hands-on build), then 11-03 (trunks/802.1Q) and 11-06 (inter-VLAN routing).
- This is the **concept** lesson. Keep learners **off** the live switch here; a wrong VLAN move in 11-02 can lock them out, so we plan on paper first.

## Key facts (standards-based, IEEE 802.1Q)
- A VLAN is a logical broadcast domain on a switch.
- VLAN ID range: **1–4094**. **VLAN 1** is the default; every port starts there.
- Each VLAN is normally its own **subnet**.
- Inter-VLAN traffic requires a **Layer 3** device (router or L3 switch).

## Common misconceptions (correct all)
1. **"VLANs can talk to each other by default."** No — they're isolated; you need a router. This surprises beginners when a same-switch ping fails.
2. **"A VLAN needs new hardware."** No — it's software config on one switch.
3. **"One subnet is fine for all VLANs."** No — each VLAN should be its own subnet, or addressing/routing breaks.

## Pacing (~30 min)
- 6 min — the open-office analogy and the broadcast problem (WHY).
- 12 min — what a VLAN is, what it separates, the three benefits.
- 5 min — the two rules (own subnet; router to cross).
- 7 min — the paper VLAN-planning lab (feeds 11-02).
Learners get stuck on "why can't they just talk?" Anchor it to subnets + Layer 3.

## How CompTIA tends to test it
- "A VLAN is a separate ______" → broadcast domain.
- Each VLAN = its own subnet; inter-VLAN needs a router/L3 switch.
- Benefits: segmentation/security, performance, flexibility.

## Support ideas (struggling learners)
- Draw the open office vs. walled rooms side by side.
- Physically point at a switch and say "one box, many rooms."

## Extension ideas (fast learners)
- Preview 802.1Q tagging and the native VLAN (11-03).
- Discuss voice VLANs and guest VLANs as real-world examples.

## Accuracy note (Prime Directive #7)
No switch commands are executed in this lesson (paper planning only), so no output is shown or claimed. The verified Dell PowerConnect 3424 VLAN configuration appears in Lesson 11-02. VLAN ID range and default VLAN are per IEEE 802.1Q.

---
_NetworkAcademy+ · Teaching Notes 11-01 · CompTIA Network+ N10-009 · Instructor materials_
