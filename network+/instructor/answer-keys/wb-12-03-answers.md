---
answer_key_for: NA-M12-L03
module: 12
lesson: 03
unit: 9
covers: [quiz-12-03, wb-12-03-fill-in-the-blank, wb-12-03-matching, wb-12-03-label-the-diagram, wb-12-03-short-answer, wb-12-03-hands-on-observation, wb-12-03-vocabulary-review, wb-12-03-reflection]
objective_ids: ["3.3"]
---

# 🔒 Instructor Answer Key — Lesson 12-03: Availability — Redundancy, Uptime, and SLAs

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **3.3**.

---

## Quiz 12-03 — answers & explanations

**1. Availability measures → B) the share of time a service is up.**
Not cable speed (A), VLAN count (C), or Wi-Fi channel (D).

**2. 99.9% downtime per year → B) 8.8 hours.**
5 min (A) is 99.999%; 3.65 days (C) is 99%; zero (D) is impossible in practice.

**3. Redundancy → B) having a spare part or path.**
Not deleting spares (A), one supply (C), or turning off backups (D).

**4. Failover → A) the automatic switch to a backup when a part fails.**
Not a cable (B), routing protocol (C), or log level (D).

**5. SLA → A) a written promise about service (like uptime).**
Not a switch model (B), subnet mask (C), or Wi-Fi standard (D).

**6. True or false — more nines cost the same. → FALSE.**
Each extra nine costs far more than the last (five nines is very expensive). Accept any answer that says false and notes rising cost.

**7. MTTR → B) the average time to repair a failed part.**
Time between failures (A) is MTBF; C and D are unrelated.

**8. Matching → MTBF = B (time before failing); RPO = C (data you can lose); RTO = A (how fast back up).**
Full credit requires all three.

**9. Fill in the blank → redundant (true redundancy).**

**10. Scenario (sample full-credit answer):**
"A few minutes a year" points to **99.999% (five nines, ~5 min/yr)** — or at least **99.99%** if a few tens of minutes is acceptable. Two things that give it: **redundancy** (a second, truly separate link) and **failover** (automatic switch to the backup when a link fails). Award credit for a high-nines level + redundancy + failover.

**Score band:** 9–10 ✅ · 7–8 🟡 review the nines · 5–6 🟠 redo the four metrics · <5 🔴 reteach with the spare-tire analogy.

---

## Worksheet 12.3.A — Fill in the Blank (2 pts each)

1. **availability** &nbsp; 2. **uptime** &nbsp; 3. **nines** &nbsp; 4. **redundancy** &nbsp; 5. **failover**
6. **SLA** &nbsp; 7. **MTBF** &nbsp; 8. **MTTR** &nbsp; 9. **RPO** &nbsp; 10. **RTO**

**Challenge (+2):** Each extra nine removes most of the remaining downtime, which needs much more redundancy and testing — so cost rises sharply.

---

## Worksheet 12.3.B — Matching (2 pts each)

**Part 1:** 1. Redundancy → **C** · 2. Failover → **A** · 3. High availability → **E** · 4. SLA → **B** · 5. Fault tolerance → **D**

**Part 2:** 6. MTBF → **G** · 7. MTTR → **H** · 8. RPO → **I** · 9. RTO → **F**

10. **~8.8 hours.**

---

## Worksheet 12.3.C — Label the Diagram (2 pts each)

1. **Measure** &nbsp; 2. **~8.8** &nbsp; 3. **Protect** &nbsp; 4. **failover** &nbsp; 5. **Promise**
6. **MTBF** &nbsp; 7. **MTTR** &nbsp; 8. **RPO** &nbsp; 9. **RTO**

10. **less.**

---

## Worksheet 12.3.D — Short Answer (4 pts each)

1. Availability is the share of time a service is up; the "nines" (99%, 99.9%, …) show it, and more nines mean less downtime per year.
2. **Redundancy** provides a spare part/path; **failover** automatically switches to it when the main part fails — together giving high availability.
3. A shared power supply, cable trench, or provider is a **single point of failure**; if it fails, both the main and "backup" go down together.
4. An **SLA** is a written promise (e.g., 99.9% uptime); if the provider misses it, you may get money back or credits.
5. **MTBF** = average time between failures (want it **higher**); **MTTR** = average time to repair (want it **lower**).

---

## Worksheet 12.3.E — Hands-on Nines Math

- **1.** ~8,760. **2.** ~8.76 hours. **3.** ~0.876 hours (~53 minutes). **4.** 99.99% allows less.
- **5.–7.** Their design: one active link, one standby; **STP** (Lesson 11-04) blocks the loop and keeps the standby ready.
- **8.** Personal, reasoned answer — full credit for matching the level to a real need.

> **Accuracy note (Prime Directive #7):** the downtime figures are real arithmetic (8,760 hours × the downtime fraction); no device output is claimed.

---

## Worksheet 12.3.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Availability → **C** · 2. Uptime → **E** · 3. Redundancy → **A** · 4. Failover → **B** · 5. SLA → **D**

**Part 2 (accept close wording):**
6. About 8.8 hours of downtime per year.
7. The ability to keep working even when a part fails.
8. **Lower** MTTR is better — the service is fixed faster.
9. RPO = how much data you can afford to lose; RTO = how fast you must recover.
10. The shared power is a single point of failure; both parts fail together.

---

## Worksheet 12.3.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Item 3 shows whether the nines math shifted their intuition about "always on."

---
_NetworkAcademy+ · Answer Key 12-03 · CompTIA Network+ N10-009 · Instructor materials_
