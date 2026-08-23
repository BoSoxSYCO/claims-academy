# QA Report — NA-M13-L03 "AAA: Authentication, Authorization, and Accounting"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/13-network-security/lessons/13-03-aaa-authentication-authorization-accounting.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.7** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; three numbered steps + arrows show the fixed order; factors/least-privilege/RBAC by **text**, not color ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 C, Q4 A, Q5 B, Q6 False, Q7 B, Q8 Authn→B/Authz→C/Acct→A, Q9 RADIUS, Q10 least privilege — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–3 → C/A/B) and Part 2 (4–8 → F/D/G/E/H) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 11 terms (2FA placed first in ## 0-9) ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all exam terms (AAA, authentication, authorization, accounting, factor, MFA, 2FA, least privilege, RBAC, RADIUS, TACACS+) resolve to glossary headwords; remaining bold hits are labels / a mnemonic / plural of "factor" ✅ |
| Command accuracy | Prime Directive #7 | Concept lesson — **no commands run, no output claimed**; central-server/switch AAA config left for a hardware lab ✅ |

New glossary terms (11): **2FA (Two-Factor Authentication)** (in ## 0-9), **AAA, Accounting, Authentication, Authorization, Factor, Least privilege, MFA (Multi-Factor Authentication), RADIUS, RBAC (Role-Based Access Control), TACACS+.** Footer bumped to NA-M13-L03.
Cheat sheet: `network-security-quick-reference.md` gained the AAA section.
Module 13 README: 13-03 Published (3 of 7).

> **Reading-level note:** FK 6.7 on the first pass — in target, no remediation. Third straight Module-13 lesson to avoid a remediation loop, despite dense vocab (authentication, authorization, accounting). Short sentences from the draft carried it.

> **Glossary structure note:** "2FA" is the first numeric-leading security term; it normalizes to "2fa" and sorts **first** in the ## 0-9 section (before 3-2-1 rule, 802.11, 802.1Q). The order-checker confirms.

> **Scope note:** Kept to objective 4.1 (AAA as a security concept). Accounting is cross-referenced to Syslog (12-02) rather than re-teaching logging; least privilege (flagged as an extension in 12-05) is taught here. RADIUS/TACACS+ kept to one line each — deeper config is a hardware-lab topic.

> **Accuracy note:** The AAA framework, the three factors, MFA-needs-different-factors, least privilege, RBAC, and RADIUS/TACACS+ as central AAA are exam-correct for N10-009 objective 4.1. Nothing is run, so no device data is fabricated.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | AAA, factors, MFA, least privilege, RBAC, RADIUS/TACACS+ all correct; maps to N10-009 4.1. |
| 2 | Reading level / clarity | 97 | FK 6.7; keycard-badge analogy carries a dense framework. |
| 3 | WHY-before-HOW structure | 97 | Opens with the three questions a network must answer. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 13-01 CIA and 12-02 Syslog; every term defined in-line. |
| 5 | Diagram quality & accessibility | 96 | Three ordered steps with arrows; text labels; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. an AAA-plan lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; MFA-vs-same-factor T/F; least-privilege scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions (2 passwords = MFA, authn = authz) corrected. |
| 9 | Glossary & cross-refs | 97 | 11 terms added (2FA in 0-9), alpha-verified, footer NA-M13-L03. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 10, objective 4.1) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 13-03 · CompTIA Network+ N10-009 · Instructor materials_
