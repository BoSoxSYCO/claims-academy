# Naming Conventions — NetworkAcademy+

Consistent names make a large project easy to navigate, search, and maintain. **Every** file, folder, ID, and asset follows the rules below. This is enforced during production review.

---

## Golden rules

1. **Lowercase, hyphen-separated** (kebab-case) for all file and folder names.
   ✅ `08-05-subnetting-step-by-step.md`  ❌ `08_05 Subnetting Step By Step.md`
2. **No spaces, no capitals, no special characters** except hyphens and the module `+` in the root folder name.
3. **Zero-padded numbers** so files sort correctly: `01`, `02`, … `15` (not `1`, `2`).
4. **Names describe content**, not vague labels: `dgm-05-02-osi-layers-01.svg`, not `image1.svg`.
5. **English only**, present tense, no dates in filenames (Git tracks history).

---

## Module folders

```
NN-short-topic-name/
```
- `NN` = two-digit module number (`00`–`15`).
- Example: `07-devices-and-switching/`

## Lessons

```
NN-MM-descriptive-title.md
```
- `NN` = module number · `MM` = lesson number within the module.
- Example: `modules/05-network-models-osi-tcpip/lessons/05-04-encapsulation.md`

## Unique lesson IDs (used inside documents & the objective map)

```
NA-MNN-LMM
```
- `NA` = NetworkAcademy prefix · `MNN` = module · `LMM` = lesson.
- Example: **`NA-M05-L04`** = Module 05, Lesson 04.
- Every lesson's front-matter carries its ID so it can be cross-referenced from the exam objective map, quizzes, and flashcards.

## Labs

| Type | Pattern | Example |
|------|---------|---------|
| Module lab | `lab-NN-MM-title.md` | `lab-07-01-first-switch-login.md` |
| Home-lab stage | `LAB-X-title.md` | `LAB-E-configure-vlans.md` |

Home-lab stages use letters (`A`–`H`, `CAP`) because they form one continuous build, not a per-module set.

## Assessments

| Item | Pattern | Example |
|------|---------|---------|
| Module quiz | `quiz-NN-knowledge-check.md` | `quiz-08-knowledge-check.md` |
| Practice exam | `practice-exam-NN.md` | `practice-exam-01.md` |
| Flashcard deck | `flashcards-domain-N-topic.md` | `flashcards-domain-1-concepts.md` |
| Answer key | `<item-name>-answers.md` | `quiz-08-answers.md` |

## Assets (diagrams, photos, icons)

```
<type>-<module>-<lesson>-<slug>-<nn>.<ext>
```

| Type prefix | Meaning | Preferred format |
|-------------|---------|------------------|
| `dgm-` | Diagram (drawn) | `.svg` (falls back to `.png`) |
| `img-` | Real photo / screenshot | `.jpg` or `.png` |
| `ico-` | Icon | `.svg` |

- `nn` = a two-digit sequence when a lesson has several of the same type.
- Examples:
  - `dgm-05-02-osi-layers-01.svg`
  - `img-07-05-dell-3424-front-panel-01.jpg`
  - `ico-switch.svg` (shared icons may omit module/lesson)

## Resources

| Item | Pattern | Example |
|------|---------|---------|
| Glossary | `glossary-<letter-range or all>.md` | `glossary-a-to-m.md` |
| Cheat sheet | `<topic>-quick-reference.md` | `ports-quick-reference.md` |
| Reference table | `<topic>-map.md` / `<topic>-table.md` | `objective-map.md` |

---

## Lesson front-matter (metadata block)

Every lesson `.md` file **starts** with this YAML block so tooling and reviewers can read its status at a glance:

```yaml
---
id: NA-M08-L05
module: 08
lesson: 05
title: "Subnetting Step by Step"
objective_ids: ["1.4"]        # N10-009 objective IDs this lesson covers
reading_level_target: 7
status: Planned                # Planned | Drafting | In Review | Published
est_minutes: 25
prerequisites: ["NA-M08-L03", "NA-M08-L04"]
---
```

---

## Git conventions

### Branch
All work happens on the designated feature branch:
```
claude/network-plus-folder-kaigr8
```

### Commit messages
Format: `type(scope): summary`

| Type | Use for |
|------|---------|
| `plan` | Planning/blueprint docs |
| `content` | Lessons, labs, quizzes |
| `asset` | Diagrams, photos, icons |
| `fix` | Corrections/edits |
| `chore` | Structure, tooling, housekeeping |

Examples:
- `plan(docs): add curriculum roadmap and milestone schedule`
- `content(m08): draft lessons 08-01 through 08-04`
- `asset(m05): add OSI layer diagram`

### Release tags
Milestone releases (from the [schedule](MILESTONE-SCHEDULE.md)) are tagged:
```
release-RN-short-name      e.g. release-R1-on-ramp
```

---

## Quick reference card

| I'm creating a… | Name it like… |
|-----------------|---------------|
| Module folder | `08-ip-addressing-and-subnetting/` |
| Lesson | `08-05-subnetting-step-by-step.md` |
| Lesson ID | `NA-M08-L05` |
| Module lab | `lab-08-01-plan-your-scheme.md` |
| Home-lab stage | `LAB-C-plan-ip-scheme.md` |
| Quiz | `quiz-08-knowledge-check.md` |
| Diagram | `dgm-08-05-subnet-split-01.svg` |
| Photo | `img-07-05-dell-3424-front-panel-01.jpg` |
| Cheat sheet | `subnetting-quick-reference.md` |

---
*Next document: [STYLE-GUIDE.md](STYLE-GUIDE.md)*
