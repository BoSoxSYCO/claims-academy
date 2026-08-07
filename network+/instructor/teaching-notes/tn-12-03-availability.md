---
teaching_notes_for: NA-M12-L03
module: 12
lesson: 03
unit: 9
objective_ids: ["3.3"]
---

# 🔒 Teaching Notes — Lesson 12-03: Availability — Redundancy, Uptime, and SLAs

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners define availability/uptime, read the "nines," and explain redundancy, high availability, failover, SLAs, and the four metrics (MTBF/MTTR/RPO/RTO).

## Where this sits
- **Before:** 11-04 (STP/redundant links) and 12-02 (monitoring). Both hard prerequisites.
- **After:** 12-04 (backups/DR/change control — where RPO/RTO get applied), 12-05 (policies).
- Concept + a "nines" math lab.

## Core facts
- **Availability** = share of time up; **uptime**/**downtime** are the parts.
- **The nines:** 99% ≈ 3.65 days/yr · 99.9% ≈ 8.8 hrs · 99.99% ≈ 53 min · 99.999% ≈ 5 min. More nines = far less downtime, far more cost.
- **Redundancy** = spare part/path → **high availability**; **failover** = auto switch; **fault tolerance** = keeps working through a failure.
- **SLA** = written uptime promise.
- **MTBF** (between failures, higher better) · **MTTR** (to repair, lower better) · **RPO** (data you can lose) · **RTO** (time to recover).

## Common misconceptions (correct both)
1. **"More nines is always worth it."** No — cost rises sharply; match the level to the need.
2. **"Any backup counts."** No — a backup sharing power/trench/provider is a single point of failure.

## Prime Directive #7 — accuracy
The downtime numbers are plain arithmetic (8,760 hrs/yr × downtime fraction). No device output is fabricated. Reference 11-04 STP for the redundant-link behavior.

## Pacing (~30 min)
- 5 min — "working most of the time isn't enough" (WHY).
- 10 min — availability, the nines (do the math together), cost curve.
- 8 min — redundancy, HA, failover, fault tolerance; the spare-tire analogy.
- 7 min — SLA and the four metrics.

## How CompTIA tests it
- The nines and matching downtime.
- Redundancy/HA/failover/fault tolerance.
- SLA; MTBF vs. MTTR; RPO vs. RTO.

## Support / extension
- **Support:** compute 99.9% and 99.99% downtime together on the board.
- **Extension:** active-active vs. active-passive clusters; geographic/site redundancy; how RPO/RTO drive backup design (12-04).

---
_NetworkAcademy+ · Teaching Notes 12-03 · CompTIA Network+ N10-009 · Instructor materials_
