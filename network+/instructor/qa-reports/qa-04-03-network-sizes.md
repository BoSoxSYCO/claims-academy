# QA Report — NA-M04-L03 "LAN, WAN, MAN, PAN, and WLAN Explained"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/04-networking-fundamentals/lessons/04-03-lan-wan-man-pan-wlan.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.6** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each ring carries size + label + example, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping PAN→B, MAN→C, WAN→A verified; Q7 size order PAN<LAN<MAN<WAN ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once, all meanings correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with lesson + word bank ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **LAN, WAN, MAN, PAN, WLAN, Bluetooth.**
Cheat sheet: `networking-fundamentals-quick-reference.md` gained a "Network sizes" table.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | PAN/LAN/WLAN/MAN/WAN definitions and size order match N10-009. |
| 2 | Reading level / clarity | 98 | FK 5.6; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with "networks come in sizes," then the names. |
| 4 | Zero-assumed-knowledge | 97 | Builds on 04-01/04-02 only; ties LAN back to nodes+links. |
| 5 | Diagram quality & accessibility | 96 | Nested rings labeled by size + example; legend; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. hands-on observation; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→scenario ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M04-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 04-03 · CompTIA Network+ N10-009 · Instructor materials_
