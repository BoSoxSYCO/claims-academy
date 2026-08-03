# Workbook System — NetworkAcademy+

**A printable, college-grade lab manual that runs alongside every lesson.**

If the lessons are the textbook, the **workbook is the lab manual** — the pages a learner prints, writes on by hand, and keeps in a three-ring binder. It turns reading into doing, and doing into proof. This document defines how the workbook is designed, numbered, assembled, graded, and printed.

---

## 1. Why a workbook (the WHY before the HOW)

Reading a networking concept is not the same as owning it. A learner truly learns when they **write it, draw it, observe it, and reflect on it** with their own hand. The workbook exists to:

- Force **active recall** instead of passive re-reading.
- Give the "**do it**" and "**see it**" learning channels a place to live on paper.
- Produce a **real portfolio** — lab reports and diagrams a learner can show an employer.
- Track **progress and certification readiness** so momentum stays visible.

It is built to feel like a real community-college networking lab manual: numbered worksheets, point values, materials lists, formal lab reports, and instructor sign-off lines.

---

## 2. The worksheet types (the toolkit)

Every worksheet is one printable template in `assets/templates/workbook/`. A lesson or unit assembles the ones it needs.

| # | Worksheet type | Template file | Best used for |
|---|----------------|---------------|---------------|
| 1 | **Fill-in-the-blank** | `worksheet-fill-in-the-blank.md` | Locking in facts, terms, values |
| 2 | **Matching** | `worksheet-matching.md` | Terms ↔ meanings, ports ↔ services |
| 3 | **Label the diagram** | `worksheet-label-the-diagram.md` | Parts of a device, cable, or topology |
| 4 | **Draw your own diagram** | `worksheet-draw-your-diagram.md` | Designing/planning a network |
| 5 | **Short answer** | `worksheet-short-answer.md` | Explaining WHY in the learner's words |
| 6 | **Hands-on observation** | `worksheet-hands-on-observation.md` | Recording what real gear/commands show |
| 7 | **Reflection questions** | `worksheet-reflection.md` | Metacognition, confidence, gaps |
| 8 | **Real lab documentation** | `worksheet-lab-documentation.md` | Formal lab report for a hands-on build |
| 9 | **Vocabulary review** | `worksheet-vocabulary-review.md` | Spaced review of key terms |
| 10 | **End-of-unit review** | `worksheet-end-of-unit-review.md` | Consolidating a whole Unit |
| 11 | **Progress tracker** | `tracker-progress.md` | Seeing how far you've come |
| 12 | **Certification readiness tracker** | `tracker-certification-readiness.md` | Are-you-ready-for-the-exam gate |

---

## 3. How workbooks are assembled

- **Per lesson:** the lesson's Section 13 (Workbook Exercises, from the [lesson template](../assets/templates/lesson-template.md)) is realized as one or more worksheets chosen from the toolkit.
- **Per module:** worksheets collect into a module packet in `modules/NN-.../labs/` (hands-on) and `modules/NN-.../assessments/` (review).
- **Per unit:** each Unit ends with an **End-of-Unit Review** worksheet plus the **Progress Tracker** update.
- **Whole course:** the **Certification Readiness Tracker** spans everything and is revisited at each Domain Checkpoint.

A learner who prints every worksheet in order ends up with a complete, bound lab manual.

---

## 4. Numbering & naming

Worksheets follow the project [Naming Conventions](NAMING-CONVENTIONS.md) with a workbook twist so they sort and file cleanly:

```
wb-NN-MM-<type>-nn.md            # a lesson-level worksheet
wb-unit-N-review.md              # an end-of-unit review
tracker-progress.md              # course-wide trackers (single copies)
tracker-certification-readiness.md
```

- `NN` = module, `MM` = lesson, `nn` = sequence when a lesson has several.
- **Human-facing worksheet number** printed on the page: `Worksheet NN.MM.X` (X = a letter), e.g., **Worksheet 8.5.A**. This is what the learner and instructor refer to out loud — just like a real lab manual.

---

## 5. The standard worksheet anatomy

Every worksheet, no matter the type, shares the same frame so the manual feels consistent:

```
┌───────────────────────────────────────────────────────────────┐
│ NetworkAcademy+  ·  Lab Manual            CompTIA Network+ N10-009│
│ Worksheet 8.5.A — Subnetting Practice          Points: ___ / 20 │
│ Name: _______________________  Date: ________  Time: ___ min    │
│ Module 08 · Lesson 05 · Unit 4     Objective(s): 1.4            │
├───────────────────────────────────────────────────────────────┤
│  ▸ Instructions (plain language, ~7th-grade)                    │
│  ▸ The exercise body (the type-specific content)                │
│  ▸ Answer spaces / lines / grid                                 │
├───────────────────────────────────────────────────────────────┤
│ Self-score: ___/___   Instructor/Verified by: __________  ☐ Redo│
│ NetworkAcademy+ · Worksheet 8.5.A · Page __ of __               │
└───────────────────────────────────────────────────────────────┘
```

**Required on every worksheet**
- Header: title, worksheet number, points, Name/Date/Time, module·lesson·unit, mapped objective ID(s).
- Plain-language **instructions**.
- Generous **answer space** (real lines/boxes — a learner writes by hand).
- Footer: self-score, verification/sign-off line, page number.

---

## 6. Grading & rubric

Worksheets are **self-scored first** (the learner checks against the answer key in `instructor/answer-keys/`), with an optional instructor sign-off.

| Band | Score | Meaning | Action |
|------|-------|---------|--------|
| ✅ Solid | 90–100% | You own this | Move on |
| 🟡 Almost | 80–89% | Minor gaps | Fix the misses, then move on |
| 🟠 Shaky | 70–79% | Real gaps | Re-read the lesson section; redo the worksheet |
| 🔴 Not yet | < 70% | Not ready | Re-do the lesson and lab before continuing |

The **80% pass bar** matches the quizzes in the [Master Curriculum](MASTER-CURRICULUM.md). Every worksheet has an answer key entry; open-ended items get a **model answer + "a good answer includes…"** rubric so self-scoring is fair.

---

## 7. Printable standards (non-negotiable)

The workbook is **paper-first**. Every template obeys the printable rules in [CLAUDE.md §8](../CLAUDE.md) and the [Style Guide](STYLE-GUIDE.md):

- **Letter/A4, portrait**, single column, black-and-white safe (no color-only meaning).
- **Real write-on space**: lines (`_______`), blank boxes, and grids sized for handwriting.
- **One worksheet starts on its own page**; steps never split from their answer space across a page break.
- **No interactivity assumed** — a printed page must fully make sense on its own.
- **Footer on every page** with worksheet number and page count.
- **Accessibility**: true headings, descriptive labels, and an ASCII/large-print option for any diagram so screen-reader and low-vision learners aren't blocked.

---

## 8. Accessibility & inclusivity

- Diagrams to label always ship with a **text-described alternative**.
- "Draw" worksheets accept a **written description** as an equal alternative for learners who can't draw by hand.
- Plain language throughout; generous spacing; dyslexia-friendly line height in the print CSS (defined once in `assets/templates/print.css` during production).

---

## 9. Definition of done for a worksheet

A worksheet is ready to ship when:

- [ ] Uses the standard header/footer frame (§5).
- [ ] Instructions are plain-language and unambiguous.
- [ ] Answer space is generous and prints cleanly in B&W.
- [ ] Maps to a lesson objective / N10-009 objective ID.
- [ ] Has a matching answer-key entry (with rubric for open items).
- [ ] Fits whole pages; nothing critical splits across a break.
- [ ] Has an accessible alternative for any visual task.

---

*The reusable templates for all twelve items live in [`assets/templates/workbook/`](../assets/templates/workbook/). This document is the standard they follow.*
