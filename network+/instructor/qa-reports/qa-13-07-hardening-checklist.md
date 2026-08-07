# QA Report — NA-M13-L07 "A Hardening Checklist for Your Home Lab"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/13-network-security/lessons/13-07-hardening-checklist-home-lab.md`
**Reviewed:** 2026-08-07 · **Result:** ✅ Published (all categories ≥ 95) · **Closes Module 13**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 7.2** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ (root `svg`) |
| SVG accessibility | manual | `role="img"`, `aria-labelledby="title desc"`, `<title>` + `<desc>`; seven numbered layers; all items by **text**, not color ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 B, Q4 B, Q5 B, Q6 False, Q7 B, Q8 MFA→C/Port security→A/Firewall→B, Q9 patch, Q10 two-more-layers — verified ✅ |
| Matching uniqueness | cross-check | Part 1 (1–4 → D/A/B/C) and Part 2 (5–7 → F/G/E) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | 0 errors: all sections + within-section order OK after adding 5 terms ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; all Module-13 terms resolve; **added** Default password (13-07) and **backfilled** Documentation (12-01); de-bolded action/emphasis "Disable unused ports", "first", "unused ports" ✅ |
| Command accuracy | Prime Directive #7 | Synthesis lab is a checklist the learner applies to their own gear; any Dell switch command is **[TO VERIFY ON HARDWARE]** — nothing fabricated ✅ |

New glossary terms (5): **Hardening, Defense in depth, Patch management, Default password** (13-07) + **Documentation** (backfilled to 12-01). Footer bumped to NA-M13-L07.
Cheat sheet: `network-security-quick-reference.md` gained the hardening-checklist section.
Module 13 README: 13-07 Published (7 of 7) — **module marked ✅ Complete.**

> **Reading-level note:** FK 7.2 on the first pass — in target, no remediation. **Seventh straight Module-13 lesson with no remediation loop** — the short-sentence-from-draft discipline held across the entire module.

> **Synthesis note:** This is the Module-13 capstone. It deliberately reuses ~20 terms already taught (AAA, MFA, least privilege, port security, sticky MAC, native VLAN, VLAN, segmentation, guest network, WPA3, PSK, WPS, firewall, ACL, DMZ, encryption, VPN, backups, firmware) and adds only the framing terms (hardening, defense in depth, patch management) plus the two coverage fixes above. The hands-on is a real, fill-in checklist across seven layers.

> **Term-coverage note:** The pre-commit grep caught "documentation" bolded without a headword (12-01 taught specific doc types, not the umbrella term) — backfilled as its own entry citing 12-01. "Default password" (in the §5 vocabulary table) got its own entry. Reused "backups" maps to the Backup headword.

> **Accuracy note:** Hardening, defense in depth, the seven-layer checklist, and patch management are all exam-correct for N10-009 objective 4.3. No device output is fabricated; the lab is applied to the learner's own equipment with safety gating.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Hardening/defense-in-depth/patch management + full checklist correct; maps to N10-009 4.3. |
| 2 | Reading level / clarity | 97 | FK 7.2; castle/house-layers analogy carries the synthesis. |
| 3 | WHY-before-HOW structure | 97 | Opens with "one lock is not enough." |
| 4 | Zero-assumed-knowledge | 97 | Every checklist item links to the lesson that taught it; new framing terms defined. |
| 5 | Diagram quality & accessibility | 96 | Seven-layer stack, numbered + named; full alt text. |
| 6 | Workbook completeness | 97 | 7 worksheets incl. the real capstone checklist across all layers; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; single-control T/F; "add two more layers" scenario. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 5 terms added/backfilled, alpha-verified, footer NA-M13-L07. |
| 10 | Printability & formatting | 96 | Portrait-safe checklist tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 10, objective 4.3, E2) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 13-07 · CompTIA Network+ N10-009 · Instructor materials · Module 13 complete_
