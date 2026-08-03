# CLAUDE.md — Operating Manual for NetworkAcademy+

**This file is the permanent, binding rulebook for every session that works on this project.**
Read it in full before writing or editing any content. These rules override default habits.
When a rule here conflicts with a general instinct, **follow this file.**

- **Product:** A beginner-to-certified CompTIA **Network+ (N10-009)** training academy with an integrated home lab.
- **Root of this project:** `network+/`
- **The learner:** someone with **zero computer knowledge** who learns by reading, seeing diagrams, looking at real photos, following steps, and doing hands-on practice.
- **Two goals:** (1) pass the Network+ exam, (2) build a real home lab with a Windows laptop, a Dell PowerConnect 3424 switch, a home router, and Ethernet cables.

Companion blueprint docs (do not duplicate them — extend them): `docs/PROJECT-PLAN.md`, `docs/CURRICULUM-ROADMAP.md`, `docs/MILESTONE-SCHEDULE.md`, `docs/REPOSITORY-STRUCTURE.md`, `docs/NAMING-CONVENTIONS.md`, `docs/STYLE-GUIDE.md`.

---

## 0. The Prime Directives (never break these)

1. **Zero assumed knowledge.** If a word, acronym, or idea has not been taught in an earlier lesson, teach it before you use it — or link to the lesson that does.
2. **WHY before HOW.** Every lesson and every major section opens with the real-world problem it solves, *then* the mechanics.
3. **~7th-grade reading level, always.** Short sentences, plain words, one idea at a time.
4. **Four learning channels in every module:** read it, see it (diagram), look at it (real photo/screenshot), do it (hands-on).
5. **Commercial quality.** Everything must feel like it came from CompTIA, Cisco NetAcad, or Microsoft Learn — consistent, edited, illustrated, and tested. This is a published product, not notes.
6. **Exam-aligned and reality-aligned.** Every lesson maps to an N10-009 objective **and** connects to the home lab where possible.
7. **Do not invent commands or output.** Any command shown must be real and its output accurate for the learner's actual gear (Windows laptop, Dell PowerConnect 3424). Mark anything unverified as a `[TO VERIFY ON HARDWARE]` note — never present a guess as fact.
8. **Never skip a step.** A beginner cannot fill gaps. If a step assumes a click, name the click.

---

## 1. Writing Style

- **Voice:** Second person ("you"). Warm, calm, encouraging coach — not a dry textbook.
- **Sentences:** 15–20 words on average. One idea per sentence. Break up anything longer.
- **Words:** Prefer the plain word. `use` not `utilize`; `start` not `initiate`; `send` not `transmit`; `find` not `locate`.
- **Voice (grammatical):** Active. "The switch learns the address," not "the address is learned by the switch."
- **Acronyms:** Always spell out on first use in a lesson: **Dynamic Host Configuration Protocol (DHCP)**. After that, the acronym is fine.
- **Key terms:** The first time a term is taught, make it **bold** and define it in the same sentence. It must also exist in the glossary.
- **Analogies first, then the technical truth.** Every abstract idea gets a concrete, everyday analogy before the formal definition.
- **No gatekeeping phrases.** Never write "obviously," "simply," "as you already know," or "it's easy." These shame a beginner.
- **Encourage.** Normalize confusion: "This trips up almost everyone at first — let's slow down."
- **Gender-neutral.** Use "they/them" for any unnamed person.

**Do / Don't quick reference**

| ❌ Don't | ✅ Do |
|---------|-------|
| "Utilize the CLI to instantiate a VLAN." | "Use the switch's command line to create a VLAN." |
| "Obviously, ARP resolves L3 to L2." | "**ARP** is how a device finds the hardware address that goes with an IP address. Here's why that matters…" |
| "Configure the interface accordingly." | "Type this exact command, then press Enter:" |

---

## 2. Reading Level

- **Target:** U.S. **grade 7** (Flesch-Kincaid ~7.0, aim 6–8).
- **How to check:** Before marking a lesson `In Review`, run the prose through a readability estimate. If it scores above grade 8, simplify: shorten sentences, cut jargon, add a definition.
- **Paragraphs:** 2–4 sentences max. White space is a feature.
- **Numbers & units:** Spell out one–nine in prose; use numerals for technical values (`8 bits`, `192.168.1.1`, `Cat6`).
- **When a hard term is unavoidable** (it's on the exam), teach it slowly with an analogy, a diagram, and a plain definition — do not just drop it.

---

## 3. Lesson Format

**Canonical template:** every lesson is authored from `assets/templates/lesson-template.md`, the binding 21-section shell (objectives → introduction → simple explanation → analogy → vocabulary → ASCII diagram → color-diagram brief → real-photo brief → hands-on lab → steps → expected results → common mistakes → troubleshooting → summary → workbook → quiz → answer key → instructor notes → cheat sheet → glossary updates → homework → self-reflection → learning checklist). Do not remove or reorder its sections. The 7-part flow below is the learner-facing spine that lives **inside** that fuller template.

Every lesson is one Markdown file and follows this exact 7-part teaching spine, in order:

```
1. Why this matters      – the real-world problem this solves (WHY first)
2. Key words             – plain-language definitions of every new term
3. The concept           – explained simply, paired with at least one diagram
4. See it for real       – a real photo or screenshot (or a labeled placeholder)
5. Step by step          – numbered, do-it-yourself instructions
6. Check yourself        – 2–3 quick questions (answers in the instructor key)
7. Remember this         – the 3–5 takeaways that stick
```

**Required front-matter** (YAML block at the very top of every lesson file):

```yaml
---
id: NA-M08-L05
module: 08
lesson: 05
title: "Subnetting Step by Step"
objective_ids: ["1.4"]        # N10-009 objective IDs covered
reading_level_target: 7
status: Planned                # Planned | Drafting | In Review | Published
est_minutes: 25
prerequisites: ["NA-M08-L03", "NA-M08-L04"]
---
```

**Lesson rules**
- Keep a lesson to **one clear objective**. If it needs two, split it.
- Target **15–30 minutes** of learner time (`est_minutes`).
- Every concept section pairs with **≥1 diagram**. Every hands-on lesson pairs with **≥1 real photo or screenshot**.
- End every lesson with a one-line **bridge** to the next lesson ("Next, we'll…").
- Use the standard **callout boxes** consistently:
  - 💡 **Tip** — a shortcut or helpful extra.
  - ⚠️ **Watch out** — a common mistake.
  - 🎯 **Exam tip** — how CompTIA tends to test this.
  - 🔧 **Lab link** — connects to the home-lab build.

---

## 4. Diagram Standards

- **One idea per diagram.** If it needs a paragraph to explain, split it.
- **Format:** **SVG preferred** (crisp at any size); PNG fallback only when SVG isn't possible.
- **Consistent visual language** (documented once in `assets/templates/diagram-legend.md`):
  - Rectangle = device · Cloud = internet/WAN · Solid line = wired link · Dashed line = wireless/logical.
- **Consistent icons:** use the shared set in `assets/icons/` (switch, router, PC, server, AP, firewall, cloud). Same icon for the same thing, everywhere.
- **Flow direction:** left-to-right or top-to-bottom. Number the steps when there is a sequence.
- **Label everything.** No unlabeled boxes or lines. IP addresses, port numbers, and device names shown where relevant.
- **Never rely on color alone** — pair color with a label, shape, or pattern (see Accessibility).
- **Minimal text inside diagrams;** the prose does the explaining.
- **Alt text is mandatory** (see Accessibility).

---

## 5. Workbook Standards

**Canonical system:** the workbook is a full printable lab manual defined in `docs/WORKBOOK-SYSTEM.md`, built from the twelve reusable templates in `assets/templates/workbook/` (fill-in-the-blank, matching, label-the-diagram, draw-your-diagram, short-answer, hands-on-observation, reflection, lab-documentation, vocabulary-review, end-of-unit-review, progress tracker, certification-readiness tracker). Realize each lesson's Section 13 exercises by copying the right template(s); every worksheet keeps the standard header/footer frame, maps to an objective, and gets a matching answer-key entry.

Each module has a hands-on workbook component (lives in the module's `labs/` folder; the cumulative build lives in `labs/home-lab-guide/`).

- **State the goal and the "why"** at the top: what you'll build and why it matters.
- **List requirements first:** exact equipment, cables, software, and any prior lab stage needed.
- **Numbered steps only.** One action per step. Name every click, every command, every port.
- **Show expected results** after key steps: "You should now see a green link light on port 1."
- **Include a real photo or screenshot** at each decision point.
- **Add a verification step** — how the learner confirms it worked.
- **Add a rollback/reset note** — how to undo it safely (important on the shared Dell switch).
- **Troubleshooting box** at the end: the 3–5 things that commonly go wrong and how to fix them.
- **Home-lab continuity:** note what state the lab is left in, since later stages build on it.
- **Safety first:** call out anything that could lock the learner out of the switch or router.

---

## 6. Quiz Standards

Each module has one knowledge-check quiz in its `assessments/` folder; full practice exams live in `assessments/practice-exams/`.

- **Map every question to an objective.** Tag each with the N10-009 objective ID and the lesson ID it tests.
- **Question types:** multiple choice (4 options), true/false with a "why," matching, and — for exam realism — at least some **scenario / performance-based (PBQ)-style** items.
- **One correct answer** for multiple choice, unless clearly marked "choose two."
- **Plausible distractors.** Wrong answers should reflect real beginner misconceptions, not filler.
- **Plain language.** Questions obey the same 7th-grade reading rule.
- **Answers live in the instructor key, not the quiz.** Each answer entry explains **why the right answer is right and why each wrong answer is wrong.**
- **Module quiz length:** ~10 questions. **Practice exam length:** ~90 questions, timed at 90 minutes (mirrors the real exam).
- **Difficulty ladder:** start with recall, end with applied scenarios.

---

## 7. Instructor Guide Standards

Instructor material lives in `instructor/` and is walled off from the student view.

- **Answer keys** (`instructor/answer-keys/`): every quiz/exam answer with a full explanation and the mapped objective/lesson ID.
- **Teaching notes** (`instructor/teaching-notes/`): for each lesson, include:
  - **Learning objective(s)** in one line.
  - **Common misconceptions** and how to correct them.
  - **Pacing guidance** (how long, where learners get stuck).
  - **How CompTIA tends to test it** (exam framing).
  - **Extension ideas** for fast learners and **support ideas** for those struggling.
- Written so a substitute instructor could teach the lesson cold.
- Never leak answer keys into student-facing files.

---

## 8. Printable Formatting Standards

Everything must read well **on screen and on paper** (a beginner may print lessons and workbooks).

- **Page-friendly structure:** clear H1 title, logical H2/H3 headings, no reliance on hover or interactivity.
- **No orphaned references.** Don't write "click the blue button" — name the button, because print has no color guarantee.
- **Tables must fit a portrait page.** Keep columns few; if wide, provide a stacked/list alternative.
- **Images sized to print** (readable at ~150 dpi on letter/A4) with captions, since alt text won't print.
- **Every printable lesson/workbook** ends with a footer line: lesson ID, title, module, and "NetworkAcademy+ · CompTIA Network+ N10-009."
- **Page breaks:** structure content so a natural print break never splits a numbered step from its screenshot.
- **Self-contained:** a printed page should make sense without needing to click a link; spell out the key reference inline.
- **Answer sheets** for quizzes are printable and separate from the questions.

---

## 9. Accessibility Rules (non-negotiable)

1. **Alt text on every image.** Describe what it shows *and why it matters* — never just "diagram" or "image."
2. **Color is never the only signal.** Always pair color with a label, shape, icon, or text.
3. **High contrast.** Text and key diagram elements meet **WCAG AA** contrast.
4. **Real heading structure.** Use true Markdown headings (`#`, `##`, `###`) in order — never bold text pretending to be a heading. Screen readers navigate by headings.
5. **Descriptive link text.** "See the [subnetting cheat sheet]" — never "click [here]."
6. **Mobile- and print-friendly.** Tables scroll or stack; images scale; nothing forces sideways scrolling.
7. **Plain language is accessibility too** — it serves non-native speakers and everyone under stress.
8. **No meaning conveyed by emoji alone;** emoji supplement text, they don't replace it.

---

## 10. File Naming Rules

Full rules live in `docs/NAMING-CONVENTIONS.md`. The essentials:

- **kebab-case, lowercase, zero-padded numbers**, no spaces, no capitals.
- **Module folder:** `NN-short-topic-name/` → `08-ip-addressing-and-subnetting/`
- **Lesson file:** `NN-MM-descriptive-title.md` → `08-05-subnetting-step-by-step.md`
- **Lesson ID (in front-matter & cross-refs):** `NA-MNN-LMM` → `NA-M08-L05`
- **Module lab:** `lab-NN-MM-title.md` · **Home-lab stage:** `LAB-X-title.md` (A–H, CAP)
- **Quiz:** `quiz-NN-knowledge-check.md` · **Practice exam:** `practice-exam-NN.md`
- **Answer key:** `<item-name>-answers.md`
- **Diagram:** `dgm-NN-MM-slug-nn.svg` · **Photo/screenshot:** `img-NN-MM-slug-nn.jpg`
- **Cheat sheet:** `<topic>-quick-reference.md`

---

## 11. Markdown Standards

- **One H1 (`#`) per file** — the title. Then `##` and `###` in order; never skip a level.
- **Headings in sentence case:** "Configuring your first VLAN."
- **Lists:** numbered for sequential steps, bullets for non-ordered options.
- **Code & commands** in fenced blocks with a language hint where useful; inline commands in `backticks`. Always show expected output in its own block.
- **Tables** for comparisons and reference data; keep them narrow enough to print.
- **Blockquotes (`>`)** for callouts, paired with the standard emoji labels (💡/⚠️/🎯/🔧).
- **Relative links** between project files (so they work in the repo and when moved).
- **Alt text required** in every image tag: `![clear description](path)`.
- **No raw HTML** unless strictly necessary for a feature Markdown can't do; keep it accessible if used.
- **Blank line** between block elements; end files with a single newline.
- **Front-matter YAML** at the very top of every lesson (see §3).
- **Line length:** wrap prose naturally; don't hard-wrap mid-sentence in ways that break rendering.

---

## 12. Image Organization

- **Module-specific images** (used in one module) → `modules/NN-.../assets/`.
- **Shared images** (used in 2+ modules, e.g., the OSI diagram) → top-level `assets/diagrams/`, `assets/photos/`, or `assets/icons/`.
- **Never duplicate an image** across folders — put it in shared and link to it, so it can't drift out of sync.
- **Naming** follows §10 (`dgm-`, `img-`, `ico-` prefixes).
- **Real-photo placeholders:** when a photo of the learner's actual gear can't be captured yet, insert a clearly-marked placeholder and log what's needed:
  `[PHOTO NEEDED: front panel of Dell PowerConnect 3424 showing port 1 link light]`
- **Icon consistency:** always pull from `assets/icons/`; never introduce a second icon for the same concept.
- **Formats:** SVG for diagrams/icons, JPG/PNG for photos and screenshots. Compress large photos.
- **Captions** on printable images (alt text alone won't print).

---

## 13. Quality Standards & Definition of Done

Every lesson moves through the pipeline in `docs/PROJECT-PLAN.md` (§7): **Outline → Draft → Illustrate → Lab-test → Edit → Review & sign-off.** Update the module `README.md` status board at each move (`Planned → Drafting → In Review → Published`).

**A lesson is `Published` only when ALL of these pass:**

- [ ] Opens with WHY (real-world problem) before HOW.
- [ ] No undefined terms or unexpanded acronyms.
- [ ] Reading level ≈ grade 7 (checked, not guessed).
- [ ] Follows the exact 7-part lesson template (§3).
- [ ] Front-matter complete and accurate (ID, objectives, status, prerequisites).
- [ ] ≥1 diagram, and ≥1 real photo/screenshot (or a labeled placeholder) for hands-on content.
- [ ] Every image has meaningful alt text; color is never the only signal.
- [ ] Callout boxes use the standard set.
- [ ] Every bolded key term appears in the glossary.
- [ ] Any command was actually run (or marked `[TO VERIFY ON HARDWARE]`); shown output is real.
- [ ] Maps to at least one N10-009 objective ID.
- [ ] Reads and prints cleanly; links use descriptive text and resolve.
- [ ] A total beginner could follow it without getting stuck.

**Product-level "done" (before any v1.0 release):** all 16 modules Published · 100% of N10-009 objectives mapped to a Published lesson · two full practice exams + full flashcard deck complete · glossary covers every key term.

---

## 14. Working Rules for Sessions

- **Plan before producing.** Confirm the module/lesson scope against `docs/CURRICULUM-ROADMAP.md` before writing.
- **Produce in order,** module by module, matching the release plan in `docs/MILESTONE-SCHEDULE.md`, unless told otherwise.
- **One source of truth.** The roadmap owns the lesson list; module READMEs own status; don't duplicate content across docs.
- **Save everything under `network+/`.** This project is self-contained and unrelated to any other folder in the repo.
- **Git:** develop on branch `claude/network-plus-folder-kaigr8`. Commit with `type(scope): summary` (e.g., `content(m08): draft lessons 08-01..08-04`). Push with `git push -u origin claude/network-plus-folder-kaigr8`. Do **not** open a pull request unless explicitly asked.
- **When unsure about the learner's exact hardware behavior, ask or mark it for verification — never fabricate.**

---

*This document is the instruction manual for the entire project. If you change how content is made, update this file in the same commit so it stays the single source of truth.*
