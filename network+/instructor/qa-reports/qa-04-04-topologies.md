# QA Report — NA-M04-L04 "Network Topologies (Star, Bus, Ring, Mesh)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/04-networking-fundamentals/lessons/04-04-network-topologies.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.8** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; shape (not color) carries meaning, each panel titled in text ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Star→C, Bus→A, Mesh→B verified; Q2–Q5 shape defs correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once, all meanings correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with lesson + word bank ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **Topology, Star topology, Bus topology, Ring topology, Mesh topology, Backbone.**
Cheat sheet: `networking-fundamentals-quick-reference.md` gained a "Topologies" table with an ASCII shape strip.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Star/bus/ring/mesh definitions + single-point-of-failure framing match N10-009. |
| 2 | Reading level / clarity | 98 | FK 5.8; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with the seating-arrangement problem, then the shapes. |
| 4 | Zero-assumed-knowledge | 97 | Builds on 04-02/04-03 only; ties star back to nodes+links. |
| 5 | Diagram quality & accessibility | 96 | Four labeled panels; shape carries meaning; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. hands-on observation; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→scenario ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M04-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 04-04 · CompTIA Network+ N10-009 · Instructor materials_
