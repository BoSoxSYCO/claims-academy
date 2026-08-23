---
teaching_notes_for: NA-M12-L04
module: 12
lesson: 04
unit: 9
objective_ids: ["3.3"]
---

# 🔒 Teaching Notes — Lesson 12-04: Backups, Disaster Recovery, and Change Control

> Instructor guide. Written so a substitute could teach this cold.

## Learning objective (one line)
Learners name backup types (full/incremental/differential/snapshot), the 3-2-1 rule, DR sites (cold/warm/hot), and change control with rollback.

## Where this sits
- **Before:** 11-02 (saving switch config — the config backup / rollback) and 12-03 (RPO/RTO, which pick the DR site). Both hard prerequisites.
- **After:** 12-05 (policies/best practices — completes Module 12), then Module 13 (security).
- Concept + a real config-save lab.

## Core facts
- **Backups:** **full** (all), **incremental** (since last backup, any kind), **differential** (since last full), **snapshot** (point-in-time).
- **3-2-1 rule:** 3 copies · 2 media · 1 **off-site**.
- **DR sites:** cold (empty, slow, cheap) → warm (some gear, medium) → hot (full, fast, costly). RPO/RTO choose.
- **Change control:** plan → approve → schedule → change → **rollback** if needed. A saved startup-config is the switch rollback.

## Common misconceptions (correct both)
1. **"All copies in one place is fine."** No — 3-2-1 requires 1 off-site; a fire/flood destroys on-site copies together.
2. **"Incremental = differential."** No — incremental is since the **last backup**; differential is since the **last full**. Restore steps differ.

## Prime Directive #7 — accuracy
`copy running-config startup-config` is a genuine command (verified in 11-02). Copying config **off** the switch (TFTP/USB) varies by PowerConnect firmware — that step is marked **[TO VERIFY ON HARDWARE]**. No fabricated output.

## Pacing (~30 min)
- 5 min — "power dies mid-report" (WHY backups).
- 10 min — backup types + 3-2-1 (house-key analogy).
- 8 min — DR and cold/warm/hot; tie to RPO/RTO.
- 7 min — change control + rollback; the config-save lab.

## How CompTIA tests it
- Backup types and their restore steps; 3-2-1.
- Cold/warm/hot site trade-offs; RPO/RTO tie-in.
- Change management and rollback.

## Support / extension
- **Support:** have learners write a real 3-2-1 plan for their own files.
- **Extension:** grandfather-father-son rotation; immutable/air-gapped backups vs. ransomware; runbooks and DR testing.

## Module 12 progress
With 12-04 published, Module 12 is at 4/5. Only 12-05 (policies/best practices) remains — mark the module ✅ Complete after it.

---
_NetworkAcademy+ · Teaching Notes 12-04 · CompTIA Network+ N10-009 · Instructor materials_
