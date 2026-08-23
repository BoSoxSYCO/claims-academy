# QA Report — NA-M05-L03 "The TCP/IP Model and How It Maps to OSI"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/05-network-models-osi-tcpip/lessons/05-03-tcp-ip-model.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.0** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; mapping shown by labeled bracket lines + text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Network Access→B, Internet→A, Application→C verified; Q3 Internet=OSI3, Q4 Transport=OSI4 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all mappings correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the 4-layer model + mapping ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 5 terms ✅ |

New glossary terms (5): **Network Access layer, Internet layer, IP (Internet Protocol), TCP (Transmission Control Protocol), Map (verb).**
Cheat sheet: `network-models-quick-reference.md` gained a TCP/IP ↔ OSI mapping table.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | 4 TCP/IP layers and the OSI mapping (Internet=3, Transport=4, merges) all correct (N10-009 1.1). |
| 2 | Reading level / clarity | 95 | FK 7.0 (on target); short sentences, mapping table keeps it concrete. |
| 3 | WHY-before-HOW structure | 96 | Opens with "same building, fewer sections" before the layers. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 05-02; IP/TCP introduced plainly, full detail deferred with a note. |
| 5 | Diagram quality & accessibility | 96 | Side-by-side stacks with labeled bracket lines; alt text spells out the mapping. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. draw-the-mapping lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, model/mapping/apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 5 terms added, alpha-verified, footer dated NA-M05-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 05-03 · CompTIA Network+ N10-009 · Instructor materials_
