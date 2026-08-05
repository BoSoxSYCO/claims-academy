# QA Report — NA-M09-L03 "NAT and PAT: Sharing One Public Address"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/09-core-network-services/lessons/09-03-nat-and-pat.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95) · **one remediation pass on reading level**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.2** after remediation (first pass 8.1 > gate; fixed — see note) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each mapping/reply labeled in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Static→B, Dynamic→C, PAT→A verified; Q1–Q5, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |
| Command accuracy | Prime Directive #7 | `netstat -n` is real; sample lines representative; documentation blocks used ✅ |

New glossary terms (6): **Static NAT, Dynamic NAT, NAT overload, Port number, NAT translation table, Port forwarding.** (NAT, PAT reused from 08-08.)
Cheat sheet: `network-services-quick-reference.md` gained a NAT & PAT section (kinds table + translation-table example).

> **Reading-level remediation:** First pass scored **FK 8.1** — just over the ≤ 8 gate, driven by dense required vocabulary (translation, dynamic, forwarding, private/public) at ~15.2 words/sentence. Fixed by splitting long sentences across Sections 2–3 and the big-idea box (no jargon added or exam terms dropped). Re-measured at **FK 7.2** (avg 13.2 words/sentence). This is the CLAUDE.md §2 "simplify if above grade 8" loop working as intended.

> **Accuracy note:** Documentation address block used (203.0.113.0/24, RFC 5737). `netstat -n` is a genuine Windows command; sample output is representative (ports/foreign IPs vary). The router port-forwarding lab is read-only. Ports are introduced with only a working definition and a forward reference to Module 10 (Prime Directive #1). No fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Static/dynamic/PAT, translation table, port forwarding all correct; maps to N10-009 1.4. |
| 2 | Reading level / clarity | 95 | FK 7.2 after remediation; dense NAT vocab kept but sentences shortened. |
| 3 | WHY-before-HOW structure | 96 | Opens with the apartment-building puzzle before the kinds of NAT. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 08-08 NAT; ports taught lightly with a Module 10 forward reference. |
| 5 | Diagram quality & accessibility | 96 | PAT translation table with three mappings + reply routing + kinds table; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. netstat lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target PAT-needs-many-IPs and static-vs-dynamic. |
| 8 | Answer key & instructor notes | 97 | Full explanations; ports-forward-reference note; misconceptions covered. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M09-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), naming, front-matter (unit 6) conform. |

**All categories ≥ 95 after one reading-level remediation pass.**

---
_NetworkAcademy+ · QA Report 09-03 · CompTIA Network+ N10-009 · Instructor materials_
