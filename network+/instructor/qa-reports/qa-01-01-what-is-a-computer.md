# QA Report — Lesson NA-M01-L01 "What Is a Computer?"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, cheat sheet.

---

## Method
- **Reading level** measured objectively with a Flesch-Kincaid script (`scratchpad/readability.py`) on lesson prose (front-matter, code, tables, and headings stripped).
- **SVG** validated as well-formed XML.
- **Manual audit** for technical accuracy, grammar, flow, and cross-file consistency (answer key ↔ quiz ↔ worksheets).

## Scores

| Category | Round 1 | Round 2 (final) |
|----------|:------:|:------:|
| Technical accuracy | 96 | 96 |
| Reading level | 97 | 97 |
| Grammar | 92 | 96 |
| Flow | 93 | 96 |
| Workbook quality | 94 | 96 |
| Quiz quality | 91 | 96 |
| Hands-on activity | 96 | 96 |
| Diagrams | 96 | 96 |
| Learning effectiveness | 96 | 96 |
| Engagement | 96 | 96 |
| Professional appearance | 96 | 96 |
| **Minimum** | **91** | **96 ✅** |

**Measured reading level:** Flesch-Kincaid Grade **7.3**, Reading Ease **68** (target: ~grade 7). ✅

## Defects found & fixed (Round 1 → Round 2)

1. **Grammar / Flow** — the core definition read "…turn information you put in into a useful result you get out" (awkward "in into"). **Fixed:** rewritten to "A computer is a machine that follows instructions. It takes information you put in, works on it, and gives you back a useful result."
2. **Quiz quality** — lesson Section 14 Q8 (matching) used an ambiguous inline "· ·" layout. **Fixed:** reformatted to the clear lettered style, consistent with the standalone quiz and the answer key (Input→B, Output→C, Program→A).
3. **Workbook quality** — vocabulary worksheet Part D ("spaced recall") depended on a specific Orientation study-habit detail from a not-yet-published lesson. **Fixed:** reworded to recall the two course goals and a "hidden computer" from this lesson; answer key updated to match.

## Verification
- Re-ran readability after edits: still 7.3 / 68 ✅
- Confirmed no residual "in into" phrasing or ambiguous "· ·" matching ✅
- SVG well-formed XML with title/desc alt text ✅
- Answer key synced to all edited items ✅

## Sign-off
All eleven categories ≥ 95 after one improvement round. Lesson package approved to remain **Published**.

---
_NetworkAcademy+ · QA Report 01-01 · CompTIA Network+ N10-009 · Instructor materials_
