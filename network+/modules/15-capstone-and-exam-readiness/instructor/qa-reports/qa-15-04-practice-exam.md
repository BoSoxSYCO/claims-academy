# QA Report — NA-M15-L04 "Full-Length Practice Exam #1 + Review"

> 🔒 Instructor QA record · **Module:** 15 · **Unit:** 12 · **Objective:** exam-readiness
> Reviewed: practice exam (90 Q) + full answer key + companion lesson + 7 worksheets + short quiz + quiz key + teaching notes + SVG + cheat-sheet growth + README board.

---

## Scores (1–100, gate = 95)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | Objective alignment (exam readiness) | 98 | Full timed dress rehearsal + a review method that produces a weak-domain plan. |
| 2 | Reading level (FK ≤ 8) | 98 | Companion lesson Flesch-Kincaid 6.1; Reading Ease 72. First-draft pass. |
| 3 | WHY-before-HOW | 97 | Opens with recognize-vs-recall-under-pressure before the take/score/review method. |
| 4 | Template fidelity (21 sections) | 97 | Companion lesson has all 21 sections; exam + key are separate per Quiz Standards (`assessments/practice-exams/`). |
| 5 | Accessibility (SVG + alt) | 98 | SVG parses (xml.dom.minidom OK); role=img, title+desc, full alt text; review stage flagged with a text star, not color. |
| 6 | Glossary coverage | 98 | All bolded terms verified (scaled score, PBQ, baseline); no new terms. "Domain" (exam topic area) de-bolded — not a standalone headword. Footer unchanged. |
| 7 | Accuracy / Prime Directive #7 | 99 | All 90 questions answerable from taught content (Modules 01–14), each tagged with objective + source module; sample outputs `[TO VERIFY ON HARDWARE]`; policy specifics `[VERIFY WITH CompTIA]`. No fabricated facts. |
| 8 | Workbook packet (7 worksheets) | 96 | Fill-in, matching, label-the-diagram, short-answer, hands-on (score + weak-domain tracker), vocabulary, reflection — all with answer-key entries. |
| 9 | Exam + answer key | 98 | 90 questions across all 5 domains; difficulty ladder; PBQ-style/scenario, true/false-with-why, matching items; plausible distractors; full key with per-question "why" and objective/module map. Exam count (90) matches key count (90). |
| 10 | Cheat sheet + README board | 97 | Practice-review section added; README board updated (15-04 Published). |
| 11 | Print/markdown cleanliness | 96 | One H1 per file, ordered headings, portrait-safe tables, footer lines, descriptive links. |

**All categories ≥ 95. No remediation loop required.**

---

## Structure note (practice-exam lesson)

Per CLAUDE.md Quiz Standards, the 90-question practice exam lives in `assessments/practice-exams/practice-exam-01.md` with its instructor key at `instructor/answer-keys/practice-exam-01-answers.md`. The companion lesson `15-04-practice-exam-1.md` follows the full 21-section template and frames how to take, score, and review the exam. A separate short "how to review" quiz (`quiz-15-04`) checks the review method itself; its key is in `wb-15-04-answers.md`.

## Coverage audit (all answerable from taught content)

- Domain 1 (Q1–25): OSI/TCP-UDP (M05), devices (M07), DNS/DHCP/IP/ARP/subnet (M08), ports (M10), cabling/topology (M04/M06), cloud (M04).
- Domain 2 (Q26–45): VLANs/trunk/inter-VLAN (M11), wireless/SSID/band/channel (M06/M14), PoE/STP/link-aggregation (M07), static/reservation + masks (M08), WPA2/3 (M13).
- Domain 3 (Q46–57): diagrams, 3-2-1 backup, SNMP, Syslog, baseline, onboarding, change mgmt, HA/RAID, NTP (M12).
- Domain 4 (Q58–72): CIA, phishing/on-path/DDoS, AAA, firewall default-deny, VPN/site-to-site, hardening, least privilege, MFA, screened subnet (M13).
- Domain 5 (Q73–90): 7-step method, ping/tracert/nslookup/pathping/cable tester, APIPA/DNS/duplex/saturation, bottom-up, flushdns, netsh (M14).

## Term-coverage grep

Method-phase spine kept bold (**Take**, **Score**, **Review**); standard callout labels kept. De-bolded: the inline/vocab uses of "domain" (overloaded; the only matching headword is "Domain name"). Verified glossary-backed bolds: scaled score, PBQ, baseline.

## Glossary

No insertions. §18 states "No new terms." Footer unchanged (`last: NA-M15-L02`).

## Module 15 status

Board: 15-01 → 15-04 ✅ Published; 15-05 → 15-07 Planned. Next: 15-05 — Full-Length Practice Exam #2 + Review.

---
_NetworkAcademy+ · QA Report · CompTIA Network+ N10-009 · NA-M15-L04 · Module 15_
