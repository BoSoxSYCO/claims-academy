# QA Report — NA-M05-L04 "Encapsulation: How Data Gets Wrapped and Unwrapped"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/05-network-models-osi-tcpip/lessons/05-04-encapsulation.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.6** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each wrapper text-labeled (port/IP/MAC/trailer) + PDU named, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Segment→C, Packet→A, Frame→B verified; Q3–Q5 PDU names correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the PDU order + direction ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 8 terms ✅ |

New glossary terms (8): **Encapsulation, De-encapsulation, Header, Trailer, PDU, Segment, Packet, Frame.**
Cheat sheet: `network-models-quick-reference.md` gained an Encapsulation/PDU table.

> **Reading-level note:** FK 7.6 is driven by the required six-syllable term "encapsulation" (and "de-encapsulation"). The concept is taught slowly with a nested-envelope analogy and a plain definition per CLAUDE.md §2; sentence length stays ~14 words. Within the 6–8 acceptable band, so no forced substitution of the exam term.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | PDU order and address→layer (IP=packet, MAC=frame), header/trailer all correct (N10-009 1.1). |
| 2 | Reading level / clarity | 95 | FK 7.6 within band; jargon unavoidable but defined + analogized. |
| 3 | WHY-before-HOW structure | 96 | Opens with nested envelopes before the mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 05-02/05-03; reuses port/IP/MAC from earlier modules. |
| 5 | Diagram quality & accessibility | 96 | Growing-wrapper rows with named PDUs + direction arrows; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. wrap-and-unwrap lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, define/name/apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 8 terms added, alpha-verified, footer dated NA-M05-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 05-04 · CompTIA Network+ N10-009 · Instructor materials_
