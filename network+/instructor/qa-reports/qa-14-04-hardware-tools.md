# QA Report — NA-M14-L04 "Hardware Tools: Cable Testers and Loopbacks"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/14-network-troubleshooting/lessons/14-04-hardware-tools.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.6** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; five tool groups; the plug-vs-address caution in **text** (⚠), not color ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 A, Q4 A, Q5 False, Q6 B, Q7 A, Q8 tester→B/toner→D/plug→A/OTDR→C, Q9 light meter, Q10 cable tester — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–4 → B/A/D/C) and Part 2 (5–7 → F/G/E) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors after adding 6 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all 6 new tools + reused cable tester/tone generator/opens/shorts/crosstalk/attenuation/loopback address/port resolve; de-bolded generic emphasis (hardware tools, cable, fiber, this, not, where, spare, live, partial plug/address) ✅ |
| Command/hardware accuracy | Prime Directive #7 | Physical tools **described accurately; no device output fabricated.** Real tests on the learner's cable/switch/NIC marked **[TO VERIFY ON HARDWARE]**; lab warns against testing **live** ports ✅ |

New glossary terms (6): **Cable certifier, Toner probe, Loopback plug, OTDR (Optical Time-Domain Reflectometer), Light meter, Wi-Fi analyzer.** (Cable tester, tone generator, opens, shorts, crosstalk, attenuation from Module 06; loopback **address** from Module 08 — all reused and explicitly distinguished.) Footer bumped to NA-M14-L04.
Cheat sheet: `troubleshooting-quick-reference.md` gained the hardware-tools section.
Module 14 README: 14-04 Published (4 of 7).

> **Key distinction QA'd:** loopback **plug** (hardware, tests a port) vs. loopback **address** 127.0.0.1 (software, tests the stack) is called out in §3 (Watch out), §12, the diagram note, the photo alt text, the quiz (Q5 T/F), and the vocabulary Part 3 — the exam's favorite trap here, reinforced in six places.

> **Prime-Directive-#7 note:** This is a physical-tools lesson, so there is no command output to fabricate. Tools are described by function only. The lab is (A) paper tool-to-symptom matching for everyone and (B) an optional real cable test **only if the learner owns a tester**, on a **spare** cable, with results flagged `[TO VERIFY ON HARDWARE]` and a safety warning against live ports.

> **Reading-level note:** FK 6.6 — in target, no remediation. Fourth straight Module-14 lesson with no remediation loop.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Tool-to-symptom mapping, tester-vs-certifier, plug-vs-address, OTDR-for-fiber all correct; maps to N10-009 5.5. |
| 2 | Reading level / clarity | 97 | FK 6.6; physical-repair-kit analogy carries the tool list. |
| 3 | WHY-before-HOW structure | 97 | Opens with what a `ping` *can't* tell you (a broken wire). |
| 4 | Zero-assumed-knowledge | 96 | Reuses cable faults (06), loopback address (08); new tools defined in-line. |
| 5 | Diagram quality & accessibility | 96 | Five grouped tool rows; plug-vs-address caution in text; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a match-plus-optional-test lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; plug-vs-address T/F; dead-jack scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 6 terms added, alpha-verified, footer NA-M14-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 11, objective 5.5, E2) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 14-04 · CompTIA Network+ N10-009 · Instructor materials_
