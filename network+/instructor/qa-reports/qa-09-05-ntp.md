# QA Report — NA-M09-L05 "Time (NTP) and Other Supporting Services"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/09-core-network-services/lessons/09-05-ntp-and-supporting-services.md`
**Reviewed:** 2026-08-04 · **Result:** ✅ Published (all categories ≥ 95) · **Completes Module 09**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.3** (within the 6–8 band; gate ≤ 8) ✅ |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each stratum level numbered/labeled, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q8 mapping NTP→C, SNMP→A, Syslog→B verified; Q2 (lower=closer), Q3, Q7 correct ✅ |
| Matching uniqueness | cross-check | Items 1–8 map to A–H, each used once; all correct ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms (276 total) ✅ |
| Command accuracy | Prime Directive #7 | `w32tm /query /source` and `/status` are real; sample output representative ✅ |

New glossary terms (4): **NTP, Stratum, SNMP, Syslog.**
Cheat sheet: `network-services-quick-reference.md` gained an NTP/supporting-services section **and** a Module 09 at-a-glance table.

> **Accuracy note:** `w32tm /query /source` and `/query /status` are genuine Windows commands; the shown Stratum/Source/sync-time lines are representative (real values vary). Stratum facts are standards-based (0 = reference clock/atomic/GPS not networked; lower = closer/more accurate). Authentication time-sensitivity is stated generically ("some logins fail if clocks disagree") to avoid pre-teaching Module 13 (Kerberos). No fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | NTP/stratum direction, SNMP vs. Syslog all correct; maps to N10-009 1.4 / 3.1. |
| 2 | Reading level / clarity | 96 | FK 7.3; clock-tower analogy carries NTP; sentences ~12 words. |
| 3 | WHY-before-HOW structure | 97 | Opens with the "everyone's watch disagrees" problem before NTP mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on the services idea (09-01); certificate/login impacts explained plainly. |
| 5 | Diagram quality & accessibility | 96 | Stratum chain 0→laptop + SNMP/Syslog panel + why-time list; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. w32tm lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target higher-stratum-is-better and SNMP-vs-Syslog. |
| 8 | Answer key & instructor notes | 97 | Full explanations; stratum-direction + services pacing. |
| 9 | Glossary & cross-refs | 96 | 4 terms added, alpha-verified, footer dated NA-M09-L05. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts (🎯 exam + 🔧 lab), module-complete banner, front-matter (unit 6) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

**Module 09 is now complete** — all five lessons (09-01 → 09-05) Published.

---
_NetworkAcademy+ · QA Report 09-05 · CompTIA Network+ N10-009 · Instructor materials_
