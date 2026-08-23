# QA Report — NA-M08-L03 "Subnet Masks Explained Without Fear"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/08-ip-addressing-and-subnetting/lessons/08-03-subnet-masks-explained.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.3** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; network/host shaded **and** text-labeled (255/0), not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mask mapping 255.0.0.0→B, 255.255.0.0→C, 255.255.255.0→A verified; Q1–Q5, Q7 keys correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Split arithmetic | manual | Worked splits (192.168.1.10, 172.16.8.55, 10.20.30.40) and same-network tests all correct ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 3 terms ✅ |

New glossary terms (3): **Subnet mask, Subnet, Default subnet mask.**
Cheat sheet: `ip-addressing-quick-reference.md` gained a subnet-mask section (255=network/0=host, default masks, same-network test).

> **Accuracy note:** All examples are arithmetic on standard masks; `ipconfig` is a real command (Module 02) and the sample output is representative and labeled "your numbers differ." No fabricated device-specific values (CLAUDE.md Prime Directive #7). Scenario Q10 verified: 10.0.5.7 vs 10.0.9.7 under /24 = different networks (5 ≠ 9).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Mask reading, splitting, same-network test, default masks all correct; maps to N10-009 1.4. |
| 2 | Reading level / clarity | 97 | FK 6.3; highlighter/mailing analogy defuses the topic; sentences ~13 words. |
| 3 | WHY-before-HOW structure | 97 | Opens with "where does the split fall?" before the mask mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 08-02 network/host + classes; bits peek ties to 03-02; gateway to 02-04. |
| 5 | Diagram quality & accessibility | 96 | Mask-as-highlighter over an address, default masks, same-network test; shading paired with labels; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. split-your-own-address lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder; distractors target class-vs-mask and octet-comparison errors. |
| 8 | Answer key & instructor notes | 97 | Worked splits; fear-free delivery guidance; misconceptions covered. |
| 9 | Glossary & cross-refs | 96 | 3 terms added, alpha-verified, footer dated NA-M08-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🎯 exam + 🔧 lab), no-gatekeeping tone ("without fear"), front-matter (unit 5) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 08-03 · CompTIA Network+ N10-009 · Instructor materials_
