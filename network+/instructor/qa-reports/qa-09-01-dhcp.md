# QA Report — NA-M09-L01 "DHCP: How Devices Get an Address Automatically"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/09-core-network-services/lessons/09-01-dhcp-automatic-addresses.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95) · **Opens Module 09**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.5** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each DORA step labeled with its letter + word, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Discover→B, Offer→C, Acknowledge→A verified; Q2 (MAC not provided) and Q1–Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 7 terms ✅ |
| Command accuracy | Prime Directive #7 | `ipconfig /all` fields (DHCP Enabled/Server/Lease) are genuine Windows output; sample values labeled representative ✅ |

New glossary terms (7): **DHCP, DORA, Lease, DHCP scope, DHCP reservation, Dynamic IP address, Static IP address.**
New cheat sheet created for the module: `network-services-quick-reference.md` (DHCP + DORA + scope/lease/reservation).
Module 09 README status board populated with the full 5-lesson list (09-01 Published).

> **Accuracy note:** `ipconfig /all` is real; the shown fields — DHCP Enabled, DHCP Server, Lease Obtained/Expires — are genuine Windows output. Sample values (192.168.1.1, example lease times) are representative and the lesson states "your values differ." The lab is read-only (no `/release` or `/renew`). No fabricated device-specific data (CLAUDE.md Prime Directive #7).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | DORA, what DHCP provides, scope/lease/reservation, APIPA link all correct; maps to N10-009 1.4 / 2. |
| 2 | Reading level / clarity | 96 | FK 7.5 in band; hotel front-desk analogy carries DORA; sentences ~14 words. |
| 3 | WHY-before-HOW structure | 97 | Opens with "who hands out addresses?" before the DORA mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on IP (08-01), APIPA (08-02), broadcast (07-02); DNS forward-referenced to 09-02. |
| 5 | Diagram quality & accessibility | 96 | DORA exchange with the four labeled messages + starter-kit + callouts; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. ipconfig /all lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target DORA order and MAC-from-DHCP errors. |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + hotel-analogy pacing. |
| 9 | Glossary & cross-refs | 96 | 7 terms added, alpha-verified, footer dated NA-M09-L01. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), naming, front-matter (unit 6) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 09 is now in production** — Lesson 09-01 Published; 09-02 → 09-05 Planned.

---
_NetworkAcademy+ · QA Report 09-01 · CompTIA Network+ N10-009 · Instructor materials_
