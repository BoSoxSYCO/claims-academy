# QA Report — NA-M11-L01 "VLANs: Why We Split One Switch Into Many"

> 🔒 Instructor QA record. Scoring: 1–100 per category; anything < 95 is fixed before publish.

**Lesson:** `modules/11-network-implementation/lessons/11-01-vlans-why-we-split-one-switch.md`
**Reviewed:** 2026-08-06 · **Result:** ✅ Published (all categories ≥ 95) — **opens Module 11**

---

## Automated checks

| Check | Tool | Result |
|-------|------|--------|
| Reading level | `readability.py` | **FK grade 6.6** (squarely in the 6–8 target ✅) |
| SVG well-formed | `xml.dom.minidom` | Parses clean ✅ |
| SVG accessibility | manual | `role="img"`, `aria-labelledby`, `<title>` + `<desc>`; each VLAN marked by color **plus** text label and port range ✅ |
| Quiz key ↔ quiz | cross-check | Q1 B, Q2 B, Q3 B, Q4 B, Q5 B, Q6 False, Q7 A, Q8 VLAN→C/Seg→B/ID→A, Q9 inside, Q10 isolate + router — verified ✅ |
| Matching uniqueness | cross-check | 11.1.B Part 1 (1–5→A–E) and Part 2 (6–8→F–H) one-to-one ✅ |
| Fill-in-blank | cross-check | 10 answers consistent with the lesson ✅ |
| Glossary order | alpha checker | All sections + within-section order OK after adding 4 terms ✅ |
| Command accuracy | Prime Directive #7 | No switch commands run (paper planning only); no output claimed. VLAN ID range/default per IEEE 802.1Q ✅ |

New glossary terms (4): **VLAN (Virtual Local Area Network), VLAN ID, Default VLAN, Segmentation.** (Broadcast domain reused from Module 07.)
New cheat sheet created: `resources/cheat-sheets/vlans-and-switching-quick-reference.md` (Module 11).
Module 11 README status board populated (all 8 lessons listed; 11-01 Published).

> **Reading-level note:** FK 6.6 lands in target. This is a concept lesson (more prose than tables), which reads slightly higher than the number-dense Module 10 lessons — appropriate here.

> **Accuracy note:** This lesson is deliberately hands-off the switch (paper planning), so **no commands or output are shown** — the verified Dell PowerConnect 3424 VLAN build is Lesson 11-02. VLAN ID range 1–4094 and VLAN 1 as default are IEEE 802.1Q standards. The "VLAN = separate broadcast domain, own subnet, router to cross" model is exam-accurate. No fabricated device data.

---

## Category scores

| # | Category | Score | Notes |
|---|----------|:-----:|-------|
| 1 | Accuracy (exam-aligned) | 98 | VLAN = broadcast domain, own subnet, L3 to cross; maps to N10-009 2.3. |
| 2 | Reading level / clarity | 97 | FK 6.6; open-office analogy anchors the WHY. |
| 3 | WHY-before-HOW structure | 98 | Opens with the growing-switch broadcast problem before defining a VLAN. |
| 4 | Zero-assumed-knowledge | 96 | Builds on 07-03 broadcast domains and 08-03 subnets; VLAN/segmentation defined. |
| 5 | Diagram quality & accessibility | 96 | One-switch-two-VLANs with router path; color + label + port range; full alt text. |
| 6 | Workbook completeness | 96 | 7 worksheets incl. paper VLAN-planning lab; all keyed. |
| 7 | Quiz quality | 96 | 10 items, recall→apply; distractors target "VLANs talk by default" and "need new switch." |
| 8 | Answer key & instructor notes | 97 | Full explanations; three misconceptions corrected; hands-off-switch safety noted. |
| 9 | Glossary & cross-refs | 97 | 4 terms added, alpha-verified, footer dated NA-M11-L01. |
| 10 | Printability & formatting | 96 | Portrait-safe tables; standard header/footer frame. |
| 11 | Consistency w/ style guide | 97 | Callouts, naming, front-matter (unit 8, objective 2.3) conform. |

**All categories ≥ 95 on first pass — no remediation loop required.**

---
_NetworkAcademy+ · QA Report 11-01 · CompTIA Network+ N10-009 · Instructor materials_
