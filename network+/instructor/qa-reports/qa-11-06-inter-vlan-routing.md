# QA Report — NA-M11-L06 "Inter-VLAN Routing (Getting VLANs to Talk)"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/11-network-implementation/lessons/11-06-inter-vlan-routing.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.4** (in the 6–8 target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each method titled in words, each VLAN paired color+number+gateway, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 A, Q4 B, Q5 B, Q6 False, Q7 A, Q8 RoaS→B/L3→A/Sub→C, Q9 default gateway, Q10 router-on-a-stick + per-VLAN subnet/gateway — verified ✅ |
| Matching uniqueness | cross-check | 11.6.B Part 1 (1–5→A–E) one-to-one; Part 2 R/L tags correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms (incl. hyphen-normalized "Inter-VLAN routing" before "Interface mode") ✅ |
| Command accuracy | **Prime Directive #7** | VLAN-IP / `ip routing` config + ping output marked **[TO VERIFY ON HARDWARE]**; router-on-a-stick offered for Layer 2-only switches; no guessed output as real ✅ |

New glossary terms (4): **Inter-VLAN routing, Router-on-a-stick, Layer 3 switch, Sub-interface.** (Default gateway + Trunk reused.)
Cheat sheet: `vlans-and-switching-quick-reference.md` gained the inter-VLAN routing section.
Module 11 README: 11-06 marked Published (6 of 8 lessons).

> **Prime Directive #7 note:** Not every PowerConnect 3424 supports Layer 3 (VLAN IP + `ip routing`) — many models are Layer 2 only. The lesson tags the VLAN-interface config and the ping reply **[TO VERIFY ON HARDWARE]**, and explicitly offers **router-on-a-stick** with a separate router when the switch can't route. The lab has the learner record their **own** ping result. No fabricated device output.

> **Curriculum note:** This lesson is the payoff of the VLAN arc — it deliberately reuses the g24 trunk from 11-03 and the routing concepts from 11-05, and ties back to the 11-01 rule "VLANs need a router to talk." Prerequisites list 11-01, 11-03, 11-05.

> **Reading-level note:** FK 6.4 sits in target — kept short-sentenced from the first draft (per the 11-05 lesson learned about polysyllabic routing vocabulary), so no remediation was needed this time.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Both methods, subnet/gateway rule, Layer 3 requirement correct; maps to 2.3. |
| 2 | Reading level / clarity | 96 | FK 6.4; locked-rooms analogy anchors controlled connection. |
| 3 | WHY-before-HOW structure | 97 | Opens with "you want VLANs apart most of the time, connected where you choose." |
| 4 | Zero-assumed-knowledge | 96 | Builds on 11-01/03/05; sub-interface, L3 switch, gateway all defined. |
| 5 | Diagram quality & accessibility | 96 | Two-method panel with gateways; full alt text; labels carry meaning. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. cross-VLAN ping lab (with L2-only fallback); all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target "VLANs route themselves" and shared-subnet. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 4 terms added, alpha-verified, footer NA-M11-L06. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 8, E2, objective 2.3) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 11-06 · CompTIA Network+ N10-009 · Instructor materials_
