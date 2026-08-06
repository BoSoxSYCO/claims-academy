# QA Report — NA-M11-L05 "Routing Basics: Static vs. Dynamic"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/11-network-implementation/lessons/11-05-routing-basics-static-vs-dynamic.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95, after one readability remediation)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | First pass **FK 8.3** (over gate) → remediated to **FK 7.4** (in 6–8 target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; Static/Dynamic panels titled in words, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 A, Q4 B, Q5 B, Q6 False, Q7 B, Q8 Static→B/Dynamic→C/Protocol→A, Q9 BGP, Q10 static + reason/risk — verified ✅ |
| Matching uniqueness | cross-check | 11.5.B Part 1 (1–5→A–E) one-to-one; Part 2 S/D tags correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 5 terms ✅ |
| Command accuracy | Prime Directive #7 | `route print` real; sample uses documentation addresses; learner records own table ✅ |

New glossary terms (5): **BGP, Dynamic routing, OSPF, Routing protocol, Static route.** (Routing table + Next hop reused from Module 09.)
Cheat sheet: `vlans-and-switching-quick-reference.md` gained the static-vs-dynamic section.
Module 11 README: 11-05 marked Published.

> **Readability remediation (CLAUDE.md §2):** First pass measured **FK 8.3** — above the ≤ 8 gate, driven by long multi-clause sentences in the intro and the routing-table/dynamic-routing explanations (avg 15.2 words/sentence). Fix: split the longest sentences into shorter ones across sections 2–3 and the big-idea box, with no jargon added and no exam terms dropped. Re-measured **FK 7.4** (13.4 words/sentence). Syllables/word stays ~1.5 because the required exam vocabulary (routing, dynamic, protocol, automatically, network) is inherently polysyllabic — acceptable, and the gate (guards > 8) now passes with margin.

> **Accuracy note:** `route print` is a genuine Windows command; the sample output uses documentation-style private addresses and the learner records their **own** table. OSPF/EIGRP (interior) and BGP (internet) are correctly characterized. No fabricated device data. Note this lesson maps to objective **2.2** (routing), distinct from the VLAN lessons' 2.3.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Routing table, static/dynamic, protocol names all correct; maps to N10-009 2.2. |
| 2 | Reading level / clarity | 96 | FK 7.4 after remediation; GPS analogy anchors the split. |
| 3 | WHY-before-HOW structure | 97 | Opens with the directions-vs-GPS problem before the mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 09-04 (default route/next hop) and 11-01; all terms defined. |
| 5 | Diagram quality & accessibility | 96 | Two-panel static/dynamic with trade-offs; full alt text; labels carry meaning. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. route-print lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target "static self-heals" and routing-vs-switching. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 5 terms added, alpha-verified, footer NA-M11-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 8, objective 2.2) conform. |

**All categories ≥ 95 after the readability remediation loop.**

---
_NetworkAcademy+ · QA Report 11-05 · CompTIA Network+ N10-009 · Instructor materials_
