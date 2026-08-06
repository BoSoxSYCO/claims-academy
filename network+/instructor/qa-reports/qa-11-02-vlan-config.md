# QA Report — NA-M11-L02 "Configuring VLANs on the Dell 3424"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/11-network-implementation/lessons/11-02-configuring-vlans-on-the-dell-3424.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95)

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.3** (in the 6–8 target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; steps numbered 1–3 and labeled in words, not color alone ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 A, Q3 B, Q4 A, Q5 B, Q6 False, Q7 B, Q8 Priv→B/Global→C/Int→A, Q9 access, Q10 console/other path — verified ✅ |
| Matching uniqueness | cross-check | 11.2.B Part 1 (1–5→A–E) and Part 2 (6–9→F–I) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms ✅ |
| Command accuracy | **Prime Directive #7** | Every unverified prompt/output line marked **[TO VERIFY ON HARDWARE]**; no guessed output presented as real ✅ |

New glossary terms (4): **Global configuration mode, Interface mode, running-config, startup-config.** (Access port reused from Module 07.)
Cheat sheet: `vlans-and-switching-quick-reference.md` gained the Dell 3424 VLAN command table.
Module 11 README: 11-02 marked Published.

> **Prime Directive #7 note (the key QA gate for this lesson):** This is a hands-on switch-configuration lesson. PowerConnect 3424 CLI prompts and `show vlan` layout vary by firmware, so **every** sample prompt/output block that has not been verified on the physical unit is explicitly tagged **[TO VERIFY ON HARDWARE]** — including the `vlan database`/`interface vlan` naming flow, the `show vlan` table, and the `no vlan 10` removal command. The learner is instructed to record their **own** output in the lab worksheet. No fabricated device output is presented as fact.

> **Safety note:** The lockout risk (moving the managed port into a new VLAN) is called out in the introduction, the lab safety box, common mistakes, and the quiz scenario — consistent emphasis, since this is the first switch-changing lesson (home-lab stage LAB-E).

> **Reading-level note:** FK 6.3 sits in target. Command-heavy content keeps sentences short; the prose that explains the WHY/analogy carries the readability.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 97 | Command sequence + running/startup-config correct; unverified output flagged; maps to 2.3. |
| 2 | Reading level / clarity | 96 | FK 6.3; desk-assignment analogy anchors the steps. |
| 3 | WHY-before-HOW structure | 97 | Opens with "a plan does nothing until you tell the switch" before commands. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 11-01 and 07-06; modes and each command explained. |
| 5 | Diagram quality & accessibility | 96 | Three-step command flow; numbered; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. live build lab (LAB-E); all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; safety scenario included. |
| 8 | Answer key & instructor notes | 97 | Full explanations; save + lockout misconceptions corrected. |
| 9 | Glossary & cross-refs | 97 | 4 terms added, alpha-verified, footer dated NA-M11-L02. |
| 10 | Printability & formatting | 96 | Portrait-safe command tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 8, E2, objective 2.3) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 11-02 · CompTIA Network+ N10-009 · Instructor materials_
