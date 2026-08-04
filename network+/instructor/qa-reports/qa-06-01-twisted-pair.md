# QA Report — NA-M06-L01 "Copper Cables: Twisted Pair (Cat5e–Cat8)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/06-cabling-and-media/lessons/06-01-copper-twisted-pair.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95) · **Opens Module 06 (Unit 3)**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.3** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; pairs numbered, categories text-labeled with speeds, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Cat5e→B, Cat6a→A, Cat8→C verified; Q1 (8 wires), Q7 (100 m) correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; category specs correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 7 terms ✅ |

New glossary terms (7): **Copper cable, Twisted pair, Cable category, UTP, STP, Interference, Crosstalk.**
New cheat sheet created: `resources/cheat-sheets/cabling-and-media-quick-reference.md` (Module 06 reference).
Module 06 README status board populated (6 lessons; 06-01 Published).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Category speeds/distances, UTP/STP, 100 m limit, crosstalk all match N10-009 1.5. |
| 2 | Reading level / clarity | 97 | FK 6.3; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 96 | Opens with the garden-hose grade problem before internals. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 04-02/04-06; ties speeds back to Mbps/Gbps. |
| 5 | Diagram quality & accessibility | 96 | Cross-section + UTP/STP + category ladder; alt text; numbered pairs. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. read-a-real-cable lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 7 terms added, alpha-verified, footer dated NA-M06-L01. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🔧 lab link), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 06-01 · CompTIA Network+ N10-009 · Instructor materials_
