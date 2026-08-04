# QA Report — NA-M07-L06 "First Login: Console vs. Web Management"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/07-devices-and-switching/lessons/07-06-first-login-console-vs-web.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95) · **Completes Module 07**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.2** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each path named out-of-band/in-band in text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping Console cable→C, Baud→A, Web→B verified; Q1–Q5, Q7 keys correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 6 terms ✅ |
| Command / output claims | Prime Directive #7 | No fabricated login or output; credentials, baud rate, COM port, default IP all flagged `[TO VERIFY ON HARDWARE]` ✅ |

New glossary terms (6): **Baud rate, Console cable, In-band management, Out-of-band management, Terminal emulator, Web management (GUI).**
Cheat sheet: `devices-and-switching-quick-reference.md` gained a console-vs-web comparison table and serial-settings quick notes.

> **Accuracy note:** This is a login lesson. Per CLAUDE.md Prime Directive #7, no on-screen prompt, default username/password, exact baud rate, COM port, or default IP is stated as fact — each is marked `[TO VERIFY ON HARDWARE]`. The lab teaches the learner to *open* a session and troubleshoot a blank screen, without asserting any specific 3424 output.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Out-of-band vs. in-band and serial settings map to N10-009 2.3/3.1; hardware specifics flagged. |
| 2 | Reading level / clarity | 97 | FK 6.2; house-key/keypad analogy carries the concept; sentences ~14 words. |
| 3 | WHY-before-HOW structure | 96 | Opens with the "new lock needs the physical key first" problem before the two doors. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 07-05 (found the console port); IP address referenced as coming in Module 08. |
| 5 | Diagram quality & accessibility | 96 | Two-doors SVG: console (out-of-band) over web (in-band), each labeled in text; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. open-a-console lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply ladder, plausible distractors (SSH/Telnet as in-band foils). |
| 8 | Answer key & instructor notes | 97 | Full explanations; misconceptions + pacing + strong accuracy note. |
| 9 | Glossary & cross-refs | 96 | 6 terms added, alpha-verified, footer dated NA-M07-L06. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (incl. 🎯 exam + 🔧 lab), naming, front-matter all conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 07 is now complete** — all six lessons (07-01 → 07-06) Published.

---
_NetworkAcademy+ · QA Report 07-06 · CompTIA Network+ N10-009 · Instructor materials_
