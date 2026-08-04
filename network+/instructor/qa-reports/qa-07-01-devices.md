# QA Report — NA-M07-L01 "Hubs, Switches, Routers — What's the Difference?"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/07-devices-and-switching/lessons/07-01-hubs-switches-routers.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95) · **Opens Module 07 (Unit 4)**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.2** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each device panel labeled with layer + behavior in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Hub→B, Switch→A, Router→C verified; Q4 switch=L2, Q5 router=L3 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms ✅ |

New glossary terms (4): **Hub, Switch, Router, Repeater.**
New cheat sheet created: `resources/cheat-sheets/devices-and-switching-quick-reference.md` (Module 07 reference).
Module 07 README status board populated (6 lessons; 07-01 Published).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Device-to-layer (hub L1/switch L2/router L3) and address roles match N10-009 2.1. |
| 2 | Reading level / clarity | 97 | FK 6.2; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with the shout/clerk/post-office office analogy before mechanics. |
| 4 | Zero-assumed-knowledge | 97 | Builds on OSI (05-02) and the packet journey (05-05); reuses MAC/IP. |
| 5 | Diagram quality & accessibility | 96 | Three device panels with layer + behavior labels; alt text spells out each. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. find-your-devices lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 4 terms added, alpha-verified, footer dated NA-M07-L01. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🔧 lab link to Dell switch), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 07-01 · CompTIA Network+ N10-009 · Instructor materials_
