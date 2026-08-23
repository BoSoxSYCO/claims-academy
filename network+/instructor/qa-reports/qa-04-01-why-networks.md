# QA Report — Lesson NA-M04-L01 "Why Networks Exist (The Problem They Solve)"

**Reviewer:** QA Department · **Date:** 2026-08-03 · **Result:** ✅ PASS (all categories ≥ 95 after 2 fixes)
**Scope:** lesson, SVG diagram, 7 worksheets, standalone quiz, answer key, teaching notes, glossary, new Module 04 cheat sheet.

## Method
- Reading level measured with the Flesch-Kincaid script (before and after edits).
- SVG validated as well-formed XML.
- Quiz Q8 mapping checked vs. answer key (Network→C, Resource→A, Standalone→B ✓).
- Glossary checked for placeholders, duplicates, section order, and within-section order.

## Scores

| Category | Round 1 | Final |
|----------|:------:|:-----:|
| Technical accuracy | 96 | 96 |
| Reading level | **91** | **95** |
| Grammar | 96 | 96 |
| Flow | 96 | 96 |
| Workbook quality | 96 | 96 |
| Quiz quality | 96 | 96 |
| Hands-on activity | 96 | 96 |
| Diagrams | 96 | 96 |
| Learning effectiveness | 96 | 96 |
| Engagement | 96 | 96 |
| Professional appearance | **94** | **96** |
| **Minimum** | **91** | **95 ✅** |

**Measured reading level:** Flesch-Kincaid **8.4 → 7.8** after simplification (gate is <8). ✅

## Defects found & fixed
1. **Reading level** — the lesson measured **8.4**, over the grade-8 gate (long sentences + polysyllabic terms like "communicate"/"resources"). **Fixed:** split the longest sentences and simplified wording in the intro and explanation → **7.8**, within the 6–8 band.
2. **Professional appearance** — the glossary C section had "Communicate" (comm**u**…) placed before "Command" (comm**a**…). **Fixed:** moved after "Command Prompt"; full within-section check now passes. (A transient placeholder edit was also made and immediately reverted; verified no placeholder or duplicate terms remain — 82 unique terms.)

## Notes verified
- Opens Unit 2 with a clear, concrete "why" (share resources + communicate); no premature technical depth.
- Hands-on uses only prior skills (`ipconfig`/`ping`, browsing) — no forward dependency; spaced recall references Module 01 only.
- New Module 04 cheat sheet created.

## Sign-off
All eleven categories ≥ 95 after two fixes. Lesson package approved **Published**. Module 04 (Networking Fundamentals) now in production (1/6) — Unit 2 begun.

---
_NetworkAcademy+ · QA Report 04-01 · CompTIA Network+ N10-009 · Instructor materials_
