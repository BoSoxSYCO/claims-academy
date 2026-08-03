# QA Report — NA-M04-L06 "Bandwidth, Throughput, and Latency in Plain Words"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/04-networking-fundamentals/lessons/04-06-bandwidth-throughput-latency.md`
**Reviewed:** 2026-08-03 · **Result:** ✅ Published (all categories ≥ 95) · **Closes Module 04**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.8** (target ~7, gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; three strips labeled with text + units, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Bandwidth→B, Throughput→C, Latency→A verified; Q5 throughput apply correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once, all meanings correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with lesson + word bank ✅ |
| Glossary order | alpha checker | All sections + within-section order OK; new **J** section added for Jitter ✅ |

New glossary terms (6): **Bandwidth, Throughput, Latency, Millisecond (ms), Mbps, Jitter.**
Cheat sheet: `networking-fundamentals-quick-reference.md` gained a "Speed words" table (completing the Module 04 reference).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Bandwidth vs. throughput vs. latency and ms/Mbps units match N10-009 (1.2, 5.3). |
| 2 | Reading level / clarity | 96 | FK 6.8; short sentences, one idea each. |
| 3 | WHY-before-HOW structure | 97 | Opens with the highway problem, then the three ideas. |
| 4 | Zero-assumed-knowledge | 97 | Reuses `ping` from 02-05 (time= is latency); links from 04-02. |
| 5 | Diagram quality & accessibility | 96 | Three labeled highway strips with units; alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. ping + speed-test lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→diagnose ladder, plausible distractors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added (new J section), alpha-verified, footer dated NA-M04-L06. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 04 complete:** Lessons 04-01 → 04-06 all Published.

---
_NetworkAcademy+ · QA Report 04-06 · CompTIA Network+ N10-009 · Instructor materials_
