# QA Report — NA-M12-L04 "Backups, Disaster Recovery, and Change Control"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/12-network-operations/lessons/12-04-backups-disaster-recovery-change-control.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.9** (in the 6–8 target ✅ — no remediation) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; three panels + cold/warm/hot by text (slow/fast, low/high), not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 B, Q4 B, Q5 B, Q6 False, Q7 B, Q8 Cold→B/Warm→C/Hot→A, Q9 startup, Q10 hot site + 3-2-1 — verified ✅ |
| Matching uniqueness | cross-check | 12.4.B Part 1 (1–5→A–E) and Part 2 (6–8→F–H) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 14 terms; **3-2-1 rule** placed first in ## 0-9 (before 802.11) ✅ |
| Term coverage | CLAUDE.md §13 | Grepped every bolded term; added Cold/Warm/Hot site as their own glossary entries (they were bolded first-use exam terms) ✅ |
| Command accuracy | Prime Directive #7 | `copy running-config startup-config` real (11-02); copying config OFF the switch marked **[TO VERIFY ON HARDWARE]** ✅ |

New glossary terms (14): **3-2-1 rule** (in ## 0-9), **Backup, Full backup, Incremental backup, Differential backup, Snapshot, Off-site backup, Disaster recovery (DR), DR site, Cold site, Warm site, Hot site, Change control, Rollback.** (RPO/RTO/running-config/startup-config reused.)
Cheat sheet: `network-operations-quick-reference.md` gained the backups/DR/change-control section.
Module 12 README: 12-04 Published (4 of 5).

> **Term-coverage note:** The bold-term grep flagged **Cold site / Warm site / Hot site** as bolded first-use terms. Because these are distinct N10-009 exam terms (not just emphasis), each got its own glossary entry, and the lesson's §18 list was expanded to match — rather than folding them into "DR site."

> **Glossary structure note:** "3-2-1 rule" is the third numeric-leading term; it sorts **first** in the ## 0-9 section ("3…" < "802…"), ahead of 802.11 and 802.1Q. The order-checker confirms.

> **Reading-level note:** FK 6.9 on the first pass — in target, no remediation (short sentences from the draft). Third straight Module-12 lesson to avoid a remediation loop.

> **Accuracy note:** Backup types, the 3-2-1 rule, cold/warm/hot sites, and change-control/rollback are all exam-correct. The config-save command is verified (11-02); copying config off-box varies by firmware and is flagged. No fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | Backup types, 3-2-1, DR sites, change control all correct; maps to N10-009 3.3. |
| 2 | Reading level / clarity | 96 | FK 6.9; house-key analogy carries backups/DR. |
| 3 | WHY-before-HOW structure | 97 | Opens with "power dies mid-report" before the mechanics. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 11-02 (config save) and 12-03 (RPO/RTO); all terms defined. |
| 5 | Diagram quality & accessibility | 96 | Three-panel safety-net diagram; full alt text; text-labeled scales. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. config-backup + 3-2-1-plan lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target incremental/differential and all-in-one-building. |
| 8 | Answer key & instructor notes | 97 | Full explanations; both misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 14 terms added (incl. 3-2-1 in 0-9), alpha-verified, footer NA-M12-L04. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 9, objective 3.3) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 12-04 · CompTIA Network+ N10-009 · Instructor materials_
