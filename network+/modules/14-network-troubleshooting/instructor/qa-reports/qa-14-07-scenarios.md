# QA Report — NA-M14-L07 "Worked Scenarios: The Internet Is Down"

> 🔒 Instructor QA record · **Module:** 14 · **Unit:** 11 · **Objective:** N10-009 5.1–5.5
> Reviewed: package complete (lesson, SVG, 7 worksheets, quiz, answer key, teaching notes, cheat-sheet growth, README board).

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (5.1–5.5) | 98 | Synthesis lesson; applies the full 7-step method to four real complaints. |
| 2 | Reading level (FK ≤ 8) | 97 | Flesch-Kincaid 6.9; Reading Ease 69. Passes first-draft, no remediation. |
| 3 | WHY-before-HOW | 97 | Opens with the "internet is down" call and the doctor's-rounds analogy before any tool. |
| 4 | Template fidelity (21 sections) | 97 | All sections present, in order, including §18 glossary note and §21 checklist. |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); `role="img"`, title+desc, full alt text; no color-only cues. |
| 6 | Glossary coverage | 98 | Every bolded term verified in `glossary-all.md`; no new terms (synthesis). Footer stays NA-M14-L06. |
| 7 | Accuracy / Prime Directive #7 | 99 | All commands real; every output value (169.254, Signal %, ping replies) marked as varying / `[TO VERIFY ON HARDWARE]`. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on, vocabulary, reflection — all present with answer-key entries. |
| 9 | Quiz + answer key | 97 | 10 items, recall→applied ladder, scenario/PBQ-style closers; every answer explained. |
| 10 | Cheat sheet + README board | 97 | Worked-scenarios section added; README marked ✅ Complete (14-01 → 14-07 Published). |
| 11 | Print/markdown cleanliness | 96 | One H1, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Term-coverage grep

Ran `grep -oE '\*\*[^*]+\*\*'`. Two bold classes kept by design:

- **Method-step spine** — `**Identify:** **Theory:** **Test:** **Plan:** **Implement:** **Verify:** **Document:**` are the seven named phases repeated in each scenario walk-through. Kept bold as the lesson's structural spine (same decision as 14-01 method steps, 14-05 OSI layers, 14-06 family labels), not as glossary terms.
- **Standard callout labels** — Tip / Watch out / Exam tip / Lab link, plus section frame labels.

Generic emphasis de-bolded this pass: `**tool**`, `**theory**`, `**last**`, `**honestly**`, `**Signal**` (output-field name). All exam terms left bold were verified present in the glossary: APIPA, DHCP, DNS, nslookup, duplex mismatch, bandwidth saturation, RSSI, channel, ping, pathping, ipconfig, link light, default gateway, attenuation, Wi-Fi analyzer.

## Glossary

No insertions. §18 states "No new terms" — this synthesis lesson reuses Module 14 vocabulary. Glossary footer remains `NA-M14-L06`.

## Module 14 close-out

With 14-07 published, **Module 14 (Network Troubleshooting) is complete — 7 of 7.** README status line set to ✅ Complete. Next: **Module 15 — Capstone & Exam Readiness** (unit 12), the final module.

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M14-L07 · Module 14_
