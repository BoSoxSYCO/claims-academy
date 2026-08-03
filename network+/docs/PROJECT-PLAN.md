# Master Project Plan — NetworkAcademy+

**Product:** A beginner-to-certified CompTIA Network+ (N10-009) training academy with an integrated home-lab track.
**Document owner:** Curriculum Director
**Status:** Planning locked — awaiting approval to begin production.
**Last updated:** 2026-08-03

---

## 1. Mission

Take a learner with **zero computer knowledge** and carry them, step by step, to two outcomes:

1. **Passing the CompTIA Network+ N10-009 exam.**
2. **Building and running a real home network lab** with their own equipment.

We do this by treating this like a published product, not a personal notebook. Every lesson is edited, illustrated, tested, and reviewed before it ships.

## 2. Product principles (the rules every lesson must obey)

These are non-negotiable and are enforced during review (see the [Style Guide](STYLE-GUIDE.md)).

1. **Zero assumed knowledge.** If a word has not been taught yet, we teach it before we use it.
2. **WHY before HOW.** Every topic opens with the problem it solves in the real world, *then* the mechanics.
3. **~7th-grade reading level.** Short sentences. Plain words. One idea at a time.
4. **Four learning channels, every module:** read it, see it (diagram), look at it (real photo), do it (hands-on).
5. **Spiral learning.** Ideas are introduced simply, then revisited with more depth later — never dumped all at once.
6. **Exam-aligned + reality-aligned.** Every lesson maps to an N10-009 objective *and* connects to the home lab.
7. **Accessible by default.** Every image has alt text; color is never the only signal; layouts work on a phone.

## 3. Target learner profile

| Attribute | Assumption |
|-----------|-----------|
| Prior IT knowledge | None |
| Comfort with computers | Can turn on a laptop and use a web browser — that's it |
| Learning style | Visual + reading + hands-on |
| Motivation | Career goal: pass Network+, build real skills |
| Time available | Part-time study alongside life/work |
| Equipment | Windows laptop, Dell PowerConnect 3424, home router, Ethernet cables |

## 4. Scope

### In scope
- 16 modules (00–15) from computer basics to full exam readiness.
- Full coverage of all five N10-009 exam domains.
- An integrated home-lab track using the learner's specific equipment.
- Diagrams, real-photo callouts, step-by-step labs, quizzes, flashcards, and practice exams.
- Glossary, cheat sheets, and reference tables.

### Out of scope (for v1.0)
- Video production (planned as a future enhancement; scripts may be drafted).
- Vendor certs beyond Network+ (CCNA, Security+) — noted as "next steps" only.
- Cloud lab hosting / paid simulators — we use the learner's real gear plus free tools.

## 5. Roles (all performed within this project)

| Role | Responsibility |
|------|---------------|
| **Curriculum Director** | Owns the roadmap, exam alignment, sequencing, and sign-off. |
| **Senior Network Engineer** | Technical accuracy, lab design, real-world correctness. |
| **Instructional Designer** | Learning objectives, scaffolding, assessment design, cognitive load. |
| **Technical Writer** | Plain-language prose at a 7th-grade level, consistency, editing. |
| **Graphic Designer** | Diagrams, icons, photo selection, visual consistency, accessibility. |
| **Software Engineer** | Repository structure, naming standards, build/lint checks, version control. |

## 6. Course architecture

Every **module** follows the same repeatable template so the learner always knows what to expect:

```
Module NN
 ├─ 00 Module Overview ....... why this module matters + what you'll be able to do
 ├─ Lessons .................. the teaching content (read + diagrams + photos)
 ├─ Labs ..................... hands-on practice on real equipment
 ├─ Assessments ............. knowledge check quiz + flashcards
 └─ Recap & Bridge ........... summary + how it connects to the next module
```

Each **lesson** follows the same internal template:

```
1. Why this matters (the real-world problem)
2. Key words (plain-language definitions)
3. The concept (explained simply, with a diagram)
4. See it for real (a real photo or screenshot)
5. Step by step (numbered, do-it-yourself)
6. Check yourself (2–3 quick questions)
7. Remember this (the 3–5 things that stick)
```

## 7. Production pipeline (how each lesson is built)

Every lesson moves through six stages. Nothing is marked "done" until it clears Stage 6.

| Stage | Name | Owner | Exit criteria |
|-------|------|-------|--------------|
| 1 | **Outline** | Instructional Designer | Objectives + lesson skeleton approved |
| 2 | **Draft** | Technical Writer | Full prose written to the lesson template |
| 3 | **Illustrate** | Graphic Designer | Diagrams + photo placeholders + alt text added |
| 4 | **Lab-test** | Senior Network Engineer | Every step reproduced on real gear; commands verified |
| 5 | **Edit** | Technical Writer | Reading level + consistency + glossary links checked |
| 6 | **Review & sign-off** | Curriculum Director | Exam mapping confirmed; lesson marked `Published` |

Lesson status is tracked in each module's `README.md` using: `Planned → Drafting → In Review → Published`.

## 8. Exam alignment (N10-009 domains & weights)

| # | Domain | Exam weight | Primary modules |
|---|--------|-------------|-----------------|
| 1 | Networking Concepts | 23% | 04, 05, 08, 09, 10 |
| 2 | Network Implementation | 20% | 06, 07, 11 |
| 3 | Network Operations | 19% | 12 |
| 4 | Network Security | 14% | 13 |
| 5 | Network Troubleshooting | 24% | 14 |

Modules 00–03 are the **zero-knowledge on-ramp** (not directly tested, but required so a true beginner can succeed). Module 15 is exam readiness. Full lesson-to-objective mapping lives in the [Curriculum Roadmap](CURRICULUM-ROADMAP.md).

## 9. Quality bar (definition of "done" for the whole product)

- [ ] All 16 modules Published.
- [ ] 100% of N10-009 objectives mapped to at least one Published lesson.
- [ ] Every lesson passes the reading-level and accessibility checklist.
- [ ] Every lab reproduced end-to-end on the learner's real equipment.
- [ ] Two full-length practice exams + a full flashcard deck complete.
- [ ] Glossary covers every bolded key term used in the course.

## 10. Risks & mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Content drifts above a beginner reading level | Learner gets lost | Reading-level check is a hard gate in Stage 5 |
| Lab steps don't match the learner's exact Dell 3424 firmware | Frustration | Engineer lab-tests on real gear; note firmware in each lab |
| Scope creep (adding CCNA-level depth) | Delays, overwhelm | Roadmap is locked; extras go to a "future" backlog |
| Exam version changes | Content outdated | Objectives mapped by ID so updates are surgical |
| Learner loses momentum | Abandonment | Milestone schedule + short lessons + frequent wins |

## 11. Approval gate

Production of lessons begins **only** after the learner (product owner) approves:
1. This project plan,
2. The curriculum roadmap,
3. A pace track from the milestone schedule.

---
*Next document: [CURRICULUM-ROADMAP.md](CURRICULUM-ROADMAP.md)*
