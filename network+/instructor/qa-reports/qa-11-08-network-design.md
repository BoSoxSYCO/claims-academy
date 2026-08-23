# QA Report — NA-M11-L08 "Designing a Small Network End to End"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/11-network-implementation/lessons/11-08-designing-a-small-network.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95) — **completes Module 11 (8/8)**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.8** (in the 6–8 target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; full topology, each VLAN labeled by number + subnet, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 A, Q4 B, Q5 B, Q6 False, Q7 B, Q8 VLAN→B/Trunk→A/AP→C, Q9 20 (Guest VLAN), Q10 five-step design — verified ✅ |
| Matching uniqueness | cross-check | 11.8.B Part 1 (1–5→A–E) one-to-one; Part 2 orders 1–5 map to the six-step method ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms ✅ |
| Term coverage | CLAUDE.md §13 | Caught **ISP** bolded in-lesson but missing from the glossary; added it (and corrected the lesson's §18 note) ✅ |
| Command accuracy | Prime Directive #7 | Paper-design lesson; no live commands/output claimed; build steps reference verified earlier methods ✅ |

New glossary terms (4): **Network design, Internet edge, Network diagram, ISP.** (ISP was surfaced by the term-coverage check — it was used bold but not yet defined.)
Cheat sheet: `vlans-and-switching-quick-reference.md` gained the six-step design section.
Module 11 README: 11-08 Published; **module status set to ✅ Complete.**

> **Term-coverage note:** During QA the bolded term **ISP** was found in-lesson without a glossary entry (I had wrongly listed it as "reused"). Per CLAUDE.md §13 ("every bolded key term appears in the glossary"), ISP was added to the I section (`ISP (Internet Service Provider)`) and the lesson's §18 note was corrected to list ISP as added rather than reused. Modem and Topology (also bolded/reused) were confirmed already present.

> **Synthesis note:** This capstone deliberately references every Module 11 lesson (VLANs 11-01/02, trunks/802.1Q 11-03, STP 11-04, routing 11-05, inter-VLAN routing 11-06, wireless 11-07). Prerequisites list all six. It's a paper-design lesson (E1), so no new CLI output appears — appropriate for Prime Directive #7.

> **Reading-level note:** FK 6.8 — kept short-sentenced; the blueprint analogy and the numbered six-step method keep the synthesis plain.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Design method, addressing rules, device roles all correct; maps to N10-009 2.1. |
| 2 | Reading level / clarity | 97 | FK 6.8; blueprint analogy anchors the design mindset. |
| 3 | WHY-before-HOW structure | 98 | Opens with "pros design first" before the six steps. |
| 4 | Zero-assumed-knowledge | 96 | Synthesizes taught skills; ISP/edge/diagram newly defined; no unexplained terms. |
| 5 | Diagram quality & accessibility | 97 | Full internet-to-device topology with subnets/gateways; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a full paper-design lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items incl. a five-step design scenario; distractors target shared-subnet + missing gateway. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected; module-wrap note included. |
| 9 | Glossary & cross-refs | 97 | 4 terms added (incl. the caught ISP), alpha-verified, footer NA-M11-L08. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 8, E1, objective 2.1) conform. |

**All categories ≥ 95 on first pass — no remediation loop required (one term-coverage fix applied).**

**Module 11 status:** all eight lessons (11-01 → 11-08) Published. **Module complete.**

---
_NetworkAcademy+ · QA Report 11-08 · CompTIA Network+ N10-009 · Instructor materials_
