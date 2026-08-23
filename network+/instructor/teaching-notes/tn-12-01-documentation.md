---
teaching_notes_for: NA-M12-L01
module: 12
lesson: 01
unit: 9
objective_ids: ["3.2"]
---

# 🔒 Teaching Notes — Lesson 12-01: Documentation — Diagrams, Labels, and IPAM

> Instructor guide. Written so a substitute could teach this cold. **Opens Module 12 (Network Operations).**

## Learning objective (one line)
Learners name the main documentation types — physical/logical diagrams, rack diagram, labels, IPAM, asset inventory, baseline — and what each is for.

## Where this sits
- **Before:** 11-08 (network design — the thing you now document) and 08-03 (subnets, for IPAM/logical diagrams).
- **After:** 12-02 (monitoring, logs, SNMP), 12-03 (availability/SLAs), 12-04 (backups/DR/change control), 12-05 (policies).
- First lesson of the Network Operations domain (N10-009 domain 3). Concept + a paper/`ipconfig` lab.

## Core facts
- **Physical diagram** = devices/ports/cables ("how is it wired?"). **Logical diagram** = IPs/subnets/VLANs ("how does traffic flow?"). Both are needed.
- **Rack diagram** = a physical diagram of a rack's layout.
- **Labeling** = clear names on cables/ports, **both ends**.
- **IPAM** = tracking every IP (used/free/assigned); prevents conflicts.
- **Asset inventory** = device list (model/serial/location/owner).
- **Baseline** = record of normal behavior, to spot changes.

## Common misconceptions (correct both)
1. **"One diagram is enough."** No — physical traces cables, logical traces packets; keep both.
2. **"Documentation can wait / update later."** No — stale docs mislead; update on every change.

## Prime Directive #7 — accuracy
`ipconfig` is a genuine Windows command; learners use it to fill their own IPAM table with real addresses. No output is fabricated. This lesson is otherwise paper-based.

## Pacing (~30 min)
- 5 min — the "coworker quits, network in their head" pain (WHY).
- 12 min — the doc types (building-blueprint analogy).
- 13 min — the lab: physical sketch, logical sketch, 3-row IPAM.

## How CompTIA tends to test it
- Physical vs. logical diagram (the classic pair).
- IPAM, baseline, asset inventory, rack diagram, SLA, wiring/site-survey diagrams in scenarios.

## Support / extension
- **Support:** provide a partly-drawn physical diagram to complete, then add the logical layer.
- **Extension:** SLAs, CMDB, configuration/baseline management, and audit/assessment reports.

## Module 12 setup
This lesson opens Module 12. Populate the Module 12 README status board and start `resources/cheat-sheets/network-operations-quick-reference.md`.

---
_NetworkAcademy+ · Teaching Notes 12-01 · CompTIA Network+ N10-009 · Instructor materials_
