# QA Report — NA-M05-L05 "Following One Packet Through All the Layers"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/05-network-models-osi-tcpip/lessons/05-05-following-one-packet.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95) · **Closes Module 05**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.4** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; IP/MAC tracks + device layers text-labeled, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Hop→B, Round trip→C, Destination→A verified; Q3 switch=L2/MAC, Q4 router=L3/IP correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the end-to-end story ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |

New glossary terms (6): **Hop, Source address, Destination address, Round trip, End-to-end, Hop-to-hop.**
Cheat sheet: `network-models-quick-reference.md` gained an end-to-end journey section (completing the Module 05 reference).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | IP end-to-end vs. MAC hop-to-hop, switch=L2/router=L3 all correct (N10-009 1.1). |
| 2 | Reading level / clarity | 97 | FK 6.4; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with the parcel-relabeling problem before the trace. |
| 4 | Zero-assumed-knowledge | 96 | Capstone reusing layers/encapsulation/`tracert`/latency from earlier lessons. |
| 5 | Diagram quality & accessibility | 96 | Path with constant-IP and changing-MAC tracks + device layers; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. `tracert` lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations incl. the 8-router hop-count scenario; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M05-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 05 complete:** Lessons 05-01 → 05-05 all Published.

---
_NetworkAcademy+ · QA Report 05-05 · CompTIA Network+ N10-009 · Instructor materials_
