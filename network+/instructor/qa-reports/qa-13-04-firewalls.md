# QA Report — NA-M13-L04 "Firewalls, ACLs, and Network Segmentation"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/13-network-security/lessons/13-04-firewalls-acls-segmentation.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.8** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; ALLOW/DENY written as **text**, zones titled in words; full alt text describes the ACL, DMZ, and segmented VLANs ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 C, Q4 B, Q5 B, Q6 False, Q7 B, Q8 Firewall→C/ACL→A/Segmentation→B, Q9 matches, Q10 segment + DMZ — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–4 → C/A/D/B) and Part 2 (5–7 → G/E/F) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 6 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all exam terms (firewall, ACL, stateful/stateless firewall, implicit deny, segmentation, DMZ, screened subnet) resolve to glossary headwords; de-bolded "blast radius" and "top to bottom" (descriptive emphasis) ✅ |
| Command accuracy | Prime Directive #7 | Concept lesson — **no commands run**; ACL example is plain-language; a real Dell PowerConnect 3424 ACL command is flagged **[TO VERIFY ON HARDWARE]** ✅ |

New glossary terms (6): **ACL (Access Control List), Stateful firewall, Stateless firewall, Implicit deny, DMZ (Demilitarized Zone), Screened subnet.** (Firewall reused from 07-04, Segmentation from 11-01; both deepened.) Footer bumped to NA-M13-L04.
Cheat sheet: `network-security-quick-reference.md` gained the firewalls/ACLs/segmentation section.
Module 13 README: 13-04 Published (4 of 7).

> **Reading-level note:** FK 7.8 on the first pass — in target, no remediation. Fourth straight Module-13 lesson to avoid a remediation loop.

> **Reuse note:** Firewall (07-04) and Segmentation (11-01) already existed; this lesson reuses and deepens them (stateful/stateless firewalls; segmentation as least-privilege-for-the-network) rather than adding duplicate entries.

> **Term-coverage note:** "blast radius" and "top to bottom" were de-bolded — they are descriptive emphasis, not discrete N10-009 terms. Plurals ("ACLs", "firewalls") and cheat-sheet short labels ("Stateful", "Stateless", "DMZ / screened subnet") map to their headwords.

> **Accuracy note:** Firewall behavior (stateful vs. stateless), ACL top-down first-match-wins with implicit deny, segmentation for blast-radius control, and DMZ/screened-subnet purpose are all exam-correct for N10-009 objective 4.3. The exam's current term "screened subnet" is given alongside "DMZ." Nothing is run, so no device data is fabricated.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Firewalls, ACL/implicit deny, segmentation, DMZ all correct; maps to N10-009 4.3. |
| 2 | Reading level / clarity | 96 | FK 7.8; office-building analogy carries four tools. |
| 3 | WHY-before-HOW structure | 97 | Opens with "every door propped open" before the tools. |
| 4 | Zero-assumed-knowledge | 96 | Builds on VLANs (11) and least privilege (13-03); every new term defined. |
| 5 | Diagram quality & accessibility | 96 | Firewall + ACL table + DMZ + segmented VLANs; text ALLOW/DENY; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. a paper-ACL lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; implicit-deny T/F; flat-network scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; all misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 6 terms added, alpha-verified, footer NA-M13-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 10, objective 4.3) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 13-04 · CompTIA Network+ N10-009 · Instructor materials_
