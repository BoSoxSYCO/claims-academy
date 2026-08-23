# QA Report — NA-M07-L02 "MAC Addresses and How a Switch Learns Them"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/07-devices-and-switching/lessons/07-02-how-a-switch-learns.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.0** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; forward vs. flood shown by one-arrow vs. many + text, table is text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Forward→C, Flood→A, Learn→B verified; Q2 source, Q9 source/dest correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 5 terms ✅ |

New glossary terms (5): **MAC address table, Forward, Flood, Broadcast, Aging time.**
Cheat sheet: `devices-and-switching-quick-reference.md` gained a "How a switch learns" section.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Source-learn/destination-forward, flood on unknown/broadcast, aging all match N10-009 2.1. |
| 2 | Reading level / clarity | 98 | FK 6.0; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with the new-receptionist analogy before mechanics. |
| 4 | Zero-assumed-knowledge | 97 | Builds on switch=L2 (07-01) and MAC (03-04); reviews MAC first. |
| 5 | Diagram quality & accessibility | 96 | Learn + forward/flood steps with table; one-arrow vs. many; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. find-your-MAC lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 5 terms added, alpha-verified, footer dated NA-M07-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🔧 lab link), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 07-02 · CompTIA Network+ N10-009 · Instructor materials_
