# QA Report — NA-M08-L06 "Subnetting Practice and Shortcuts"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/08-ip-addressing-and-subnetting/lessons/08-06-subnetting-practice-and-shortcuts.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 5.3** (below the 6–8 aim on the easy side; gate ≤ 8 ✅ — see note) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; located address + block labeled in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping /30→B(2), /29→C(6), /28→A(14) verified; Q1,Q3,Q5,Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Shortcut arithmetic | manual (full) | Round-down results, broadcasts, host ranges, and mask-sizing answers across lesson/worksheets/quiz all verified ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 2 terms ✅ |

New glossary terms (2): **Powers of 2, Magic number.** (A practice lesson — few new terms, both genuinely taught.)
Cheat sheet: `ip-addressing-quick-reference.md` gained a shortcuts section (powers of 2, round-down, mask sizing, usable-hosts row).

> **Reading-level note:** FK 5.3 is below the 6–8 aim but on the *easy* side (gate guards > 8). It is deflated by dense numeric content — powers of 2, block sizes, and worked-problem lines. The prose is grade-appropriate; a fast-recall drill lesson benefits from very plain sentences, so no complexity was added to inflate the number (CLAUDE.md §2). Consistent with lessons 08-04 and 08-05.

> **Accuracy note (full math check):** Every worked value verified. Round-down: 192.168.1.100/26 → .64 (bcast .127); 10.1.1.50/28 → .48 (bcast .63); 172.16.5.200/27 → .192; 192.168.4.10/29 → net .8, bcast .15; 10.5.5.200/27 → .192 (bcast .223, .200 usable). Sizing: 50 hosts → /26, 100 → /25, 300 → /23, 500 → /23; 5 subnets → /27, 6 → /27, 10 → /28, 12 → /28. Lab set a)–e): .128 / .95 / .17–.30 / /25 / /27. All confirmed. `ipconfig` used read-only (Prime Directive #7).

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Every shortcut result verified; matches N10-009 1.4 subnetting. |
| 2 | Reading level / clarity | 96 | FK 5.3 (easy side, numeric density); plain sentences suit a drill lesson. |
| 3 | WHY-before-HOW structure | 96 | Opens with the times-tables/speed motivation before the shortcuts. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 08-05's method; each shortcut derived, not dropped. |
| 5 | Diagram quality & accessibility | 96 | Powers-of-2 strip + round-down number line + sizing flow, each labeled; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. timed-drill lab; all keyed with verified answers. |
| 7 | Quiz quality | 97 | 10 items, recall→apply incl. a full apply scenario; distractors target round-direction and −2 errors. |
| 8 | Answer key & instructor notes | 97 | Every item worked; drill-focused pacing guidance. |
| 9 | Glossary & cross-refs | 96 | 2 terms added, alpha-verified, footer dated NA-M08-L06. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), naming, front-matter (unit 5) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 08-06 · CompTIA Network+ N10-009 · Instructor materials_
