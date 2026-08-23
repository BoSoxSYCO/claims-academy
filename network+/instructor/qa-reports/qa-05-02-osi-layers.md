# QA Report — NA-M05-L02 "The OSI 7 Layers — A Floor-by-Floor Tour"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/05-network-models-osi-tcpip/lessons/05-02-osi-seven-layers.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.5** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each floor numbered + named + job in text, up/down arrows, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Physical→B, Network→C, Transport→A verified; Q3 router=L3, Q4 switch=L2 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; "Throw"→Transport correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the 7-layer order + mnemonic ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 7 layer terms ✅ |

New glossary terms (7): the seven OSI layer names (**Physical, Data Link, Network, Transport, Session, Presentation, Application**).
Cheat sheet: `network-models-quick-reference.md` gained a full OSI 7-layer table with the mnemonic.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Layer order, numbers, device homes (router L3, switch L2) all correct (N10-009 1.1). |
| 2 | Reading level / clarity | 96 | FK 6.5; each layer kept to a short plain description. |
| 3 | WHY-before-HOW structure | 96 | Opens with the 7-floor building before listing layers. |
| 4 | Zero-assumed-knowledge | 96 | Reuses MAC/IP/switch/router lightly; frames/packets deferred to 05-04 with a note. |
| 5 | Diagram quality & accessibility | 96 | Numbered, named, job-labeled stack; direction arrows + mnemonic; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. build-the-ladder lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, order/device/apply ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 7 terms added, alpha-verified, footer dated NA-M05-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 05-02 · CompTIA Network+ N10-009 · Instructor materials_
