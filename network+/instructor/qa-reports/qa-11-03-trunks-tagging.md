# QA Report — NA-M11-L03 "Trunks, Tagging (802.1Q), and Access Ports"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/11-network-implementation/lessons/11-03-trunks-tagging-and-access-ports.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.1** (in the 6–8 target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; access vs. trunk and each VLAN labeled in words, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 B, Q4 B, Q5 B, Q6 False, Q7 A, Q8 Access→C/Trunk→A/Native→B, Q9 mismatch, Q10 trunk + allow VLANs — verified ✅ |
| Matching uniqueness | cross-check | 11.3.B Part 1 (1–5→A–E) one-to-one; Part 2 A/T tags correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms and a new **## 0-9** section for 802.1Q ✅ |
| Command accuracy | **Prime Directive #7** | Trunk config + verify output marked **[TO VERIFY ON HARDWARE]**; no guessed output presented as real ✅ |

New glossary terms (4): **802.1Q (in a new 0-9 section), Native VLAN, Trunk port, VLAN tag.** (Access port reused from Module 07.)
Cheat sheet: `vlans-and-switching-quick-reference.md` gained the access-vs-trunk table and basic trunk commands.
Module 11 README: 11-03 marked Published.

> **Glossary structure note:** 802.1Q is the first numeric-leading term in the glossary, so a new **## 0-9** section was added at the top (before ## A), following standard dictionary ordering. The order-checker was updated to recognize numeric sections; all sections remain correctly ordered.

> **Prime Directive #7 note:** PowerConnect 3424 trunk syntax and the `show interfaces switchport` output vary by firmware (some versions use "general" mode). Every unverified command/output block is tagged **[TO VERIFY ON HARDWARE]**, and the lab has the learner record their own output. No fabricated device output is presented as fact.

> **Reading-level note:** FK 6.1 sits in target. The mailroom-hallway analogy carries the tagging concept in plain language.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Access/trunk, 802.1Q, native VLAN all correct; unverified output flagged; maps to 2.3. |
| 2 | Reading level / clarity | 96 | FK 6.1; mailroom analogy anchors tagging. |
| 3 | WHY-before-HOW structure | 97 | Opens with "one cable must carry many VLANs" before the mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 11-01/11-02; tag, native VLAN, trunk all defined. |
| 5 | Diagram quality & accessibility | 96 | Two-switch trunk vs. access PCs; full alt text; color + labels. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. trunk-build lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target "PC on trunk" and native-VLAN. |
| 8 | Answer key & instructor notes | 97 | Full explanations; two misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 4 terms added incl. new 0-9 section, alpha-verified, footer NA-M11-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 8, E2, objective 2.3) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 11-03 · CompTIA Network+ N10-009 · Instructor materials_
