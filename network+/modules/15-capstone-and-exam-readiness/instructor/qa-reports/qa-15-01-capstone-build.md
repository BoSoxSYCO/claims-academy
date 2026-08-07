# QA Report — NA-M15-L01 "Capstone Project: Build the Whole Home Lab"

> 🔒 Instructor QA record · **Module:** 15 · **Unit:** 12 · **Objective:** N10-009 1.1 / 2.1 / 2.3 / 5.3
> Reviewed: package complete (lesson, SVG, 7 worksheets, quiz, answer key, teaching notes, new cheat sheet, README board).

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (cross-domain 1–5) | 98 | Capstone synthesis: cabling, switching, IP/DHCP, and troubleshooting in one build. |
| 2 | Reading level (FK ≤ 8) | 99 | Flesch-Kincaid 5.4; Reading Ease 79. First-draft pass, no remediation. |
| 3 | WHY-before-HOW | 97 | Opens with "a real network is all the pieces at once" before any stage. |
| 4 | Template fidelity (21 sections) | 97 | All sections present, in order, including §18 glossary note and §21 checklist. |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); role=img, title+desc, full alt text; no color-only cues. |
| 6 | Glossary coverage | 98 | All 12 bolded exam terms verified in `glossary-all.md`; no new terms (capstone). Footer unchanged. |
| 7 | Accuracy / Prime Directive #7 | 99 | All commands real Windows commands; every address/reply is a varying example marked `[TO VERIFY ON HARDWARE]`; shared switch left unchanged. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on (real build record), vocabulary, reflection — all with answer-key entries. |
| 9 | Quiz + answer key | 97 | 10 items, recall→applied ladder, scenario/PBQ-style closer; every answer explained. |
| 10 | Cheat sheet + README board | 97 | New `exam-readiness-quick-reference.md` created; Module 15 board populated (7 lessons), 15-01 marked Published. |
| 11 | Print/markdown cleanliness | 96 | One H1, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Term-coverage grep

Ran `grep -oE '\*\*[^*]+\*\*'`. Bold classes kept by design:

- **Nine-stage spine** — the §3 stage lead-ins (Gather, Plan, Wire, Power up, Get an address, Test by layer, Check the switch, Troubleshoot, Document) and the `Stage N — …` headers in §9a are the lesson's named-phase structural spine, kept bold (same convention as the 14-01 method steps and 14-07 seven-step labels), not treated as glossary terms.
- **Standard callout labels** — Tip / Watch out / Exam tip / Lab link, plus section-frame labels.

Generic emphasis de-bolded this pass: `**shared**` (quiz stem, lesson + quiz copies). Every exam term left bold verified present in the glossary: switch, router, Ethernet, uplink, DHCP, default gateway, link light, APIPA, ipconfig, ping, nslookup, DNS.

## Glossary

No insertions. §18 states "No new terms" — this capstone reuses course vocabulary. Glossary footer unchanged.

## Module 15 status

First lesson of the final module published. Board populated with all 7 lessons; 15-01 ✅ Published, 15-02 → 15-07 Planned. Next: 15-02 — Exam-Day Logistics and What to Expect.

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M15-L01 · Module 15_
