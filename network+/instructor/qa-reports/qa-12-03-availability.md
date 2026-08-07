# QA Report — NA-M12-L03 "Availability: Redundancy, Uptime, and SLAs"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/12-network-operations/lessons/12-03-availability-redundancy-uptime-slas.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.5** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; three panels titled in words; active/standby paths by solid/dashed + labels, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 B, Q4 A, Q5 A, Q6 False, Q7 B, Q8 MTBF→B/RPO→C/RTO→A, Q9 redundant, Q10 five-nines+redundancy+failover — verified ✅ |
| Matching uniqueness | cross-check | 12.3.B Part 1 (1–5→A–E) and Part 2 (6–9→F–I) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | **Caught a mis-order** (Failover placed after "Fast Ethernet"); fixed to Failover → Fast Ethernet → Fault tolerance; re-verified OK ✅ |
| **Term coverage** | CLAUDE.md §13 | Grepped every bolded term; de-bolded "Load balancing" (Load balancer is the glossary term, reused from 07-04) ✅ |
| Command accuracy | Prime Directive #7 | Nines figures are real arithmetic (8,760 hrs × downtime fraction); no device output claimed ✅ |

New glossary terms (11): **Availability, Uptime, Redundancy, High availability (HA), Failover, Fault tolerance, SLA, MTBF, MTTR, RPO, RTO.** (Load balancer + STP + Single point of failure reused.)
Cheat sheet: `network-operations-quick-reference.md` gained the availability section (nines table + metrics).
Module 12 README: 12-03 Published (3 of 5).

> **Glossary-order note:** The alpha checker flagged **Failover** landing after the pre-existing **Fast Ethernet** entry. Correct dictionary order is Failover (F-a-i) < Fast Ethernet (F-a-s) < Fault tolerance (F-a-u); Failover was moved ahead of Fast Ethernet and the check re-passed. This is the automated glossary check doing exactly its job.

> **Term-coverage note:** The bolded "Load balancing" (an activity) was de-bolded, since **Load balancer** is the glossary term (first taught 07-04) and is referenced here as reuse.

> **Reading-level note:** FK 7.5 on the first pass — in target, no remediation. Short sentences from the draft held it despite the polysyllabic reliability vocabulary (availability, redundancy, recovery).

> **Accuracy note:** The "nines" downtime figures are standard arithmetic on 8,760 hours/year. MTBF/MTTR/RPO/RTO definitions are exam-correct. Redundant-link behavior references verified STP from Lesson 11-04. No fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Nines/downtime, redundancy/HA/failover, SLA, four metrics all correct; maps to N10-009 3.3. |
| 2 | Reading level / clarity | 96 | FK 7.5; spare-tire analogy carries it. |
| 3 | WHY-before-HOW structure | 97 | Opens with "working most of the time isn't enough" before the metrics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 11-04 and 12-02; every term defined; nines math shown step by step. |
| 5 | Diagram quality & accessibility | 96 | Measure/protect/promise panels + metrics; full alt text; solid/dashed paths. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a nines-math + redundancy-plan lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target the nines and MTBF/MTTR mix-up. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 11 terms added, alpha-verified (mis-order fixed), footer NA-M12-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 9, objective 3.3) conform. |

**All categories ≥ 95 on first pass — one glossary-order fix and one de-bold applied during QA.**

---
_NetworkAcademy+ · QA Report 12-03 · CompTIA Network+ N10-009 · Instructor materials_
