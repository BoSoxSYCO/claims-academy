# QA Report — NA-M05-L01 "Why We Need a Model of a Network"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/05-network-models-osi-tcpip/lessons/05-01-why-we-need-a-model.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95) · **Opens Module 05**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.7** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; layers labeled in text + up/down arrows, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Model→C, Layer→A, Stack→B verified; Q4/Q5 layer counts (7/4) correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once, all meanings correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with lesson + word bank ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **Model, Layer, Stack, OSI model, TCP/IP model, Protocol.**
New cheat sheet created: `resources/cheat-sheets/network-models-quick-reference.md` (Module 05 reference).
Module 05 README status board populated (5 lessons listed; 05-01 Published).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Model/layer/OSI(7)/TCP-IP(4) all correct; motivates N10-009 1.1. |
| 2 | Reading level / clarity | 96 | FK 6.7; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 98 | Entire lesson is the "why" for the model, before any layer names. |
| 4 | Zero-assumed-knowledge | 97 | Builds on 04-02/04-06; keeps layer names generic until 05-02. |
| 5 | Diagram quality & accessibility | 96 | Messy cloud → tidy stack; labeled layers + direction arrows; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. split-a-task lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M05-L01. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 05-01 · CompTIA Network+ N10-009 · Instructor materials_
