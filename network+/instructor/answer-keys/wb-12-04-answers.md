---
answer_key_for: NA-M12-L04
module: 12
lesson: 04
unit: 9
covers: [quiz-12-04, wb-12-04-fill-in-the-blank, wb-12-04-matching, wb-12-04-label-the-diagram, wb-12-04-short-answer, wb-12-04-hands-on-observation, wb-12-04-vocabulary-review, wb-12-04-reflection]
objective_ids: ["3.3"]
---

# 🔒 Instructor Answer Key — Lesson 12-04: Backups, Disaster Recovery, and Change Control

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **3.3**.

---

## Quiz 12-04 — answers & explanations

**1. Backup → B) a saved copy of data you can restore.**
Not a spare switch (A), routing protocol (C), or Wi-Fi channel (D).

**2. Full backup copies → B) everything, every time.**
"Since last backup" (A) is incremental; not nothing (C) or config-only (D).

**3. Incremental copies → B) only what changed since the last backup (of any kind).**
"Since the last full" (A) is differential; not everything (C) or deleted files (D).

**4. 3-2-1 "1" → B) one copy kept off-site.**
Not one copy total (A), one media type (C), or one hour (D).

**5. Hot site → B) a full running copy, ready fast.**
Empty space (A) is a cold site; not a "warm building" (C) or a tape (D).

**6. True or false — all copies in one building is 3-2-1. → FALSE.**
3-2-1 requires **1 copy off-site**; all-in-one-building fails a fire/flood. Accept any answer that says false and notes the off-site requirement.

**7. Rollback → B) undo a change and return to the last good state.**
Not Wi-Fi speed (A), deleting logs (C), or adding a VLAN (D).

**8. Matching → Cold = B (slow/days); Warm = C (medium/hours); Hot = A (fast/minutes).**
Full credit requires all three.

**9. Fill in the blank → startup (the saved startup-config).**

**10. Scenario (sample full-credit answer):**
"Back in minutes, lose only a moment" points to a **hot site** (a full running copy) with a very low RPO/RTO. Protect the data with **frequent backups following 3-2-1** (3 copies, 2 media, 1 off-site) — ideally continuous/near-real-time replication so almost no data is lost. Award credit for hot site + 3-2-1/frequent off-site backups.

**Score band:** 9–10 ✅ · 7–8 🟡 review backup types · 5–6 🟠 redo cold/warm/hot · <5 🔴 reteach with the house-key analogy.

---

## Worksheet 12.4.A — Fill in the Blank (2 pts each)

1. **backup** &nbsp; 2. **full** &nbsp; 3. **incremental** &nbsp; 4. **differential** &nbsp; 5. **off-site**
6. **disaster recovery** &nbsp; 7. **cold** &nbsp; 8. **hot** &nbsp; 9. **change control** &nbsp; 10. **rollback**

**Challenge (+2):** So a local disaster (fire, flood, theft) can't destroy every copy at once.

---

## Worksheet 12.4.B — Matching (2 pts each)

**Part 1:** 1. Full → **C** · 2. Incremental → **A** · 3. Differential → **E** · 4. Snapshot → **B** · 5. 3-2-1 rule → **D**

**Part 2:** 6. Cold → **G** · 7. Warm → **H** · 8. Hot → **F**

9. **change control** &nbsp; 10. **rollback**

---

## Worksheet 12.4.C — Label the Diagram (2 pts each)

1. **Full** &nbsp; 2. **Incremental** &nbsp; 3. **Differential** &nbsp; 4. **3** &nbsp; 5. **2** &nbsp; 6. **1**
7. **Cold** &nbsp; 8. **Hot** &nbsp; 9. **rollback**

10. **RPO and RTO.**

---

## Worksheet 12.4.D — Short Answer (4 pts each)

1. **Incremental** copies changes since the **last backup** (small, but restore needs the full + every increment); **differential** copies changes since the **last full** (bigger over time, but restore needs only the full + latest differential).
2. **3-2-1:** 3 copies, on 2 media types, with 1 off-site. The off-site copy survives a local disaster that destroys everything on site.
3. **Cold** = empty space, slow (days), cheap; **warm** = some gear, medium (hours), medium cost; **hot** = full running copy, fast (minutes), expensive.
4. **RPO** (data you can lose) and **RTO** (time to recover) set how fast/complete recovery must be — tighter numbers need a warmer/hotter site.
5. **Change control** = plan, approve, schedule, and make changes safely, with a rollback ready. A saved **startup-config** lets you restore the old settings if a new config breaks something.

---

## Worksheet 12.4.E — Config Backup + 3-2-1 Plan

- **Part A (1–3):** completion; **3.** the saved config lets you **roll back** to known-good settings.
- **Part B (4–7):** a valid 3-2-1 plan — 3 copies, 2 media, 1 off-site (cloud counts as off-site).
- **8.** Honest gap analysis — full credit for a thoughtful answer.

> **Accuracy note (Prime Directive #7):** `copy running-config startup-config` is a real command (Lesson 11-02). Copying the config **off** the PowerConnect 3424 varies by firmware, so that step is marked `[TO VERIFY ON HARDWARE]`. No fabricated output.

---

## Worksheet 12.4.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Backup → **B** · 2. Snapshot → **D** · 3. Disaster recovery → **C** · 4. Rollback → **A** · 5. 3-2-1 rule → **E**

**Part 2 (accept close wording):**
6. It copies everything each time — simple to restore, but large and slow.
7. A backup kept in a different location; it survives a local disaster.
8. A full, always-running copy that can take over in minutes.
9. To make changes safely — plan, approve, schedule, and keep a rollback.
10. Restoring the saved startup-config returns the switch to its last good settings.

---

## Worksheet 12.4.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 4 (a habit to start) turns the lesson into action.

---
_NetworkAcademy+ · Answer Key 12-04 · CompTIA Network+ N10-009 · Instructor materials_
