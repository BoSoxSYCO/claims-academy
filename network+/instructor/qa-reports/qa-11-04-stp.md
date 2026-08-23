# QA Report — NA-M11-L04 "Spanning Tree Protocol (Loop Prevention)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/11-network-implementation/lessons/11-04-spanning-tree-protocol.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.7** (in the 6–8 target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; forwarding vs. blocked shown by line style + text label, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 B, Q4 A, Q5 B, Q6 False, Q7 B, Q8 Root→B/Storm→A/Blocking→C, Q9 standby, Q10 loop/storm + STP — verified ✅ |
| Matching uniqueness | cross-check | 11.4.B Part 1 (1–5→A–E) and Part 2 (6–9→F–I) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 5 terms ✅ |
| Command accuracy | **Prime Directive #7** | `show spanning-tree` output marked **[TO VERIFY ON HARDWARE]**; lab is view-only; no guessed output as real ✅ |

New glossary terms (5): **Spanning Tree Protocol (STP), Switching loop, Broadcast storm, Root bridge, Blocking (STP).**
Cheat sheet: `vlans-and-switching-quick-reference.md` gained the STP section.
Module 11 README: 11-04 marked Published.

> **Prime Directive #7 note:** `show spanning-tree` output (Root ID, port states, STP vs. RSTP labels) varies by PowerConnect firmware; the sample is tagged **[TO VERIFY ON HARDWARE]** and the lab is explicitly **view-only** — learners are told never to disable STP on the shared switch, and to record their own output.

> **Safety note:** "Never disable STP" is reinforced in the intro, the lab safety box, common mistakes, troubleshooting, and the quiz — consistent with the real-world danger of an accidental loop storming the network.

> **Reading-level note:** FK 6.7 sits in target; the roundabout analogy and step-by-step storm explanation keep the concept plain.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Loop/storm, root bridge, blocking, RSTP vs STP correct; maps to 2.3. |
| 2 | Reading level / clarity | 96 | FK 6.7; roundabout analogy anchors the fix. |
| 3 | WHY-before-HOW structure | 98 | Opens with the storm danger before introducing STP. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 07-02 flooding and 11-03 redundant links; all terms defined. |
| 5 | Diagram quality & accessibility | 96 | Root + forwarding + blocked triangle; line-style + labels; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. view-only STP-status lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target "blocked = broken" and "disable to speed up." |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 5 terms added, alpha-verified, footer NA-M11-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 8, E2, objective 2.3) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 11-04 · CompTIA Network+ N10-009 · Instructor materials_
