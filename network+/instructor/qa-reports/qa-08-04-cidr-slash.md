# QA Report — NA-M08-L04 "CIDR Notation and Slash Values"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/08-ip-addressing-and-subnetting/lessons/08-04-cidr-notation-and-slash-values.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.2** (below the 6–8 aim on the easy side; gate ≤ 8 ✅ — see note) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; network region shaded **and** labeled with bit counts, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mask mapping 255.0.0.0→B(/8), 255.255.0.0→C(/16), 255.255.255.0→A(/24) verified; Q1–Q5, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Conversion arithmetic | manual | Mask↔slash both ways and octet-to-bits table (128=1 … 255=8) all verified in binary ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 3 terms ✅ |

New glossary terms (3): **CIDR (Classless Inter-Domain Routing), Prefix length, Classless.**
Cheat sheet: `ip-addressing-quick-reference.md` gained a CIDR section (mask↔slash table + octet-to-bits table).

> **Reading-level note:** FK 5.2 is **below** the 6–8 aim, but on the *easy* side (the gate guards against > 8). The score is deflated by the lesson's many short numeric lines — masks, slash values, and two conversion tables — which cut average sentence length and syllables/word. The teaching prose itself is grade-appropriate; easier-than-target reading serves the zero-knowledge audience, so no complexity was added to inflate the number (CLAUDE.md §2 forbids forcing jargon).

> **Accuracy note:** The octet-to-bits values are exact and binary-verifiable (128 = 10000000 = 1 bit … 255 = 11111111 = 8 bits). Every mask↔slash example was checked. `ipconfig` is real; sample output is representative and labeled "your numbers differ" (Prime Directive #7).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Mask↔slash conversions and the octet-to-bits table are exact; maps to N10-009 1.4. |
| 2 | Reading level / clarity | 96 | FK 5.2 (easy side; numeric-line effect); prose is grade-appropriate and very clear. |
| 3 | WHY-before-HOW structure | 96 | Opens with the "shorthand you say often" problem before the mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 08-03 masks (1s/0s) and 03-02 bits; classes recalled from 08-02. |
| 5 | Diagram quality & accessibility | 96 | Count-the-1s sum, default table, octet-to-bits table, worked examples; shading + labels; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. convert-your-mask lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target the bits-vs-octets and partial-octet errors. |
| 8 | Answer key & instructor notes | 97 | Both-direction conversions worked out; misconceptions covered. |
| 9 | Glossary & cross-refs | 96 | 3 terms added, alpha-verified, footer dated NA-M08-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), naming, front-matter (unit 5) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 08-04 · CompTIA Network+ N10-009 · Instructor materials_
