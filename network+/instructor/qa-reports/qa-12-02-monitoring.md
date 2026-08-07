# QA Report — NA-M12-L02 "Monitoring, Logs, SNMP, and Alerts"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/12-network-operations/lessons/12-02-monitoring-logs-snmp-alerts.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.5** (in target ✅ — no remediation; short sentences from the first draft) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; three lanes titled by question; severity by number+text, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 A, Q3 B, Q4 C, Q5 B, Q6 False, Q7 A, Q8 MIB→C/OID→A/Alert→B, Q9 pulls/pushes, Q10 monitor+threshold+alert — verified ✅ |
| Matching uniqueness | cross-check | 12.2.B Part 1 (1–5→A–E) and Part 2 (6–9→F–I) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 9 terms ✅ |
| **Term coverage** | CLAUDE.md §13 | Grepped every bolded term; de-bolded inline headers "Metrics" and "Flow data" (NetFlow is the named glossary term) so the bold set matches the 9 glossary adds ✅ |
| Command accuracy | Prime Directive #7 | Event Viewer real; sample event list marked **[TO VERIFY ON HARDWARE]**; learner records own; no fabricated SNMP output ✅ |

New glossary terms (9): **Monitoring, SNMP trap, MIB, OID, Severity level, Threshold, Alert, NetFlow, Log.** (SNMP + Syslog reused from Module 09.)
Cheat sheet: `network-operations-quick-reference.md` gained the monitoring/logs/SNMP section.
Module 12 README: 12-02 Published (2 of 5).

> **Term-coverage note:** The grep of `**bold**` spans flagged "Metrics" and "Flow data" as bolded inline category headers without their own glossary entries. Since **NetFlow** (the named tool) is the glossary term and "metrics/flow data" are generic category words explained inline, both were de-bolded (in section 3 and the big-idea recap). All remaining content bold terms now have glossary entries.

> **Reading-level note:** FK 6.5 on the first pass — **no remediation needed**, unlike 12-01 (which hit 8.1). Applying the "short sentences from the first draft" discipline for the polysyllabic ops vocabulary (monitoring, severity, threshold) kept it in target from the start.

> **Accuracy note:** SNMP poll-vs-trap, MIB/OID, and the Syslog 0–7 severity direction (0 worst) are all standards-correct. Windows Event Viewer is genuine; its events vary by machine, so the sample is `[TO VERIFY ON HARDWARE]` and learners record their own.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | SNMP poll/trap, MIB/OID, Syslog 0–7, thresholds, NetFlow all correct; maps to N10-009 3.1. |
| 2 | Reading level / clarity | 97 | FK 6.5 first pass; car-dashboard analogy carries it. |
| 3 | WHY-before-HOW structure | 97 | Opens with "you can't watch it all by hand" before the tools. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 09-05 (SNMP/Syslog) and 12-01; all new terms defined. |
| 5 | Diagram quality & accessibility | 96 | Three-lane overview with poll/trap arrows and 0–7 scale; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. Event Viewer log-reading lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target "level 7 worst" and poll/trap mix-up. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 9 terms added, alpha-verified, footer NA-M12-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 9, objective 3.1) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 12-02 · CompTIA Network+ N10-009 · Instructor materials_
