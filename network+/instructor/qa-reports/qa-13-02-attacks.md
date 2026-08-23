# QA Report — NA-M13-L02 "Common Attacks"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/13-network-security/lessons/13-02-common-attacks.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.1** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; three cards + "breaks: C/I/A" tags by **text**, not color; banner states Attack = Threat + Vulnerability ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 C, Q4 A, Q5 B, Q6 False, Q7 B, Q8 Phishing→C/DoS→A/Malware→B, Q9 people, Q10 DoS/DDoS + availability — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–5 → C/D/A/B/E) and Part 2 (6–8 → H/F/G) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 11 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all exam terms (threat, vulnerability, attack, malware, ransomware, social engineering, phishing, spoofing, on-path attack, DoS, DDoS) resolve to glossary headwords; de-bolded generic "trick" ✅ |
| Command accuracy | Prime Directive #7 | Concept lesson — **no commands run, no output claimed**; lab is observation only (no links clicked) ✅ |

New glossary terms (11): **Attack, Threat, Vulnerability, Malware, Ransomware, Social engineering, Phishing, Spoofing, On-path attack, DoS (Denial of Service), DDoS (Distributed Denial of Service).** (Confidentiality/integrity/availability reused from 13-01.) Footer bumped to NA-M13-L02.
Cheat sheet: `network-security-quick-reference.md` gained the common-attacks section.
Module 13 README: 13-02 Published (2 of 7).

> **Reading-level note:** FK 7.1 on the first pass — in target, no remediation. Short subject-verb-object sentences from the draft kept the syllable-dense attack vocab (vulnerability, ransomware, confidentiality) under the gate. Second straight Module-13 lesson with no remediation loop.

> **Scope note:** Kept to objective 4.2 (attacks). Defenses (AAA, firewalls, VPNs) are 13-03…13-07. Each attack is tied to the CIA goal it breaks, reinforcing 13-01 without re-teaching it.

> **Term-coverage note:** "on-path" / "DoS/DDoS" spacing variants map to their headwords (On-path attack, DoS, DDoS). The bolded formula "Attack = threat + vulnerability" is a mnemonic, not a term. "trick" was de-bolded as generic emphasis.

> **Accuracy note:** Attack definitions and CIA mappings (DoS/ransomware → availability, phishing/on-path → confidentiality, tampering → integrity) are exam-correct for N10-009 objective 4.2. The current exam uses "on-path" for "man-in-the-middle" — both names are given. Nothing is run, so no device data is fabricated.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Attack names + CIA mappings correct; on-path/MITM both named; maps to N10-009 4.2. |
| 2 | Reading level / clarity | 96 | FK 7.1; locked-house analogy carries a dense topic. |
| 3 | WHY-before-HOW structure | 97 | Opens with "you cannot defend what you cannot name." |
| 4 | Zero-assumed-knowledge | 96 | Builds on 13-01 CIA; every attack term defined in-line. |
| 5 | Diagram quality & accessibility | 96 | Three-card attack map with text CIA tags; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. phishing-spotting lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; scenario is a DoS; threat-vs-vuln T/F. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all three misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 11 terms added, alpha-verified (0 errors), footer NA-M13-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 10, objective 4.2) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 13-02 · CompTIA Network+ N10-009 · Instructor materials_
