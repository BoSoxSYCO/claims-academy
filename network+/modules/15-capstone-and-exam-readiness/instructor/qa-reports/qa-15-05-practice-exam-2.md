# QA Report — NA-M15-L05 "Full-Length Practice Exam #2 + Review"

> 🔒 Instructor QA record · **Module:** 15 · **Unit:** 12 · **Objective:** exam-readiness
> Reviewed: practice exam #2 (90 Q) + full answer key + companion lesson + 7 worksheets + short quiz + quiz key + teaching notes + SVG + cheat-sheet growth + README board.

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (exam readiness) | 98 | Second timed exam + a compare-two-exams method that yields a readiness decision. |
| 2 | Reading level (FK ≤ 8) | 98 | Companion lesson Flesch-Kincaid 6.4; Reading Ease 72. First-draft pass. |
| 3 | WHY-before-HOW | 97 | Opens with "a snapshot can fool you; a trend is truth" before the method. |
| 4 | Template fidelity (21 sections) | 97 | Companion lesson has all 21 sections; exam + key separate per Quiz Standards. |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); role=img, title+desc, full alt text; trend shown with words/arrows + a labeled domain table, not color alone. |
| 6 | Glossary coverage | 98 | All bolded terms verified (scaled score, baseline, PBQ); no new terms. "domain" kept unbolded (overloaded). Footer unchanged. |
| 7 | Accuracy / Prime Directive #7 | 99 | All 90 questions answerable from taught content (Modules 01–14), each tagged with objective + source module; a genuine second form (fresh wording/scenarios, no copies of Exam #1); sample outputs `[TO VERIFY ON HARDWARE]`; policy specifics `[VERIFY WITH CompTIA]`. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on (two-exam progress tracker), vocabulary, reflection — all with answer-key entries. |
| 9 | Exam + answer key | 98 | 90 distinct questions across all 5 domains; difficulty ladder; PBQ-style/scenario, T/F-with-why, matching; plausible distractors; full key with per-question "why" + objective/module map. Exam count (90) == key count (90). |
| 10 | Cheat sheet + README board | 97 | Compare-two-exams section added; README board updated (15-05 Published). |
| 11 | Print/markdown cleanliness | 96 | One H1 per file, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Distinctness from Exam #1 (second-form check)

Exam #2 is a genuine alternate form, not a reworded copy. Examples of the varied emphasis:
- D1: broadcast/collision domains, loopback 127.0.0.1, broadcast address on a /24, /16 mask, IPv4 bit-length, MAC hex format, HTTP/RDP/SMTP ports (Exam #1 used HTTPS/DNS/SSH), NAT.
- D2: trunk tagging purpose, `ipconfig /renew`, Layer 3 switch for inter-VLAN, host validity on a different subnet, WPA3.
- D3: logical (vs physical) diagram, Syslog 0 = emergency, offboarding (vs onboarding), five-nines availability.
- D4: the "A"/"last A" of CIA/AAA, password-reuse T/F, remote-access vs site-to-site VPN, HTTPS/TLS in transit.
- D5: ICMP behind ping, `arp -a`, `netstat`, loopback plug, step-2/step-after-implement ordering, a three-step method scenario.

## Term-coverage grep

Method-phase spine kept bold (**Take**, **Score**, **Compare**); standard callout labels kept. Glossary-backed bolds verified: scaled score, baseline, PBQ. No generic emphasis required de-bolding; "domain" left unbolded throughout (overloaded — the only headword is "Domain name").

## Glossary

No insertions. §18 "No new terms." Footer unchanged (`last: NA-M15-L02`).

## Module 15 status

Board: 15-01 → 15-05 ✅ Published; 15-06 → 15-07 Planned. Next: 15-06 — Weak-Spot Review and Final Flashcard Sprint.

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M15-L05 · Module 15_
