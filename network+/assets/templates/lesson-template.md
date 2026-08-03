---
id: NA-M00-L00                      # replace: NetworkAcademy module/lesson ID
module: 00                          # replace: module number
lesson: 00                          # replace: lesson number within module
title: "Lesson Title Goes Here"     # replace: sentence-case title
unit: 0                             # replace: parent Unit number (1–8)
objective_ids: ["0.0"]             # replace: N10-009 objective IDs covered
reading_level_target: 7
status: Planned                     # Planned | Drafting | In Review | Published
est_minutes: 20                     # replace: realistic beginner time
equipment_tier: E0                  # E0 | E1 | E2 | E3 | E4 (see MASTER-CURRICULUM.md)
prerequisites: []                   # replace: list of lesson IDs, e.g. ["NA-M03-L03"]
author: ""
last_reviewed: ""
---

<!--
============================================================================
 MASTER LESSON TEMPLATE — NetworkAcademy+
 This is the CANONICAL shell every lesson is built from. Do not remove or
 reorder sections. If a section truly does not apply, keep the heading and
 write "Not applicable for this lesson — <one-line reason>."
 Follow every rule in ../../CLAUDE.md. Author to a ~7th-grade reading level.
 Everything here is written to print cleanly on Letter/A4 in black and white.
 HTML comments like this one are guidance for the author and are removed
 (or left, since they don't render) before Publishing.
============================================================================
-->

# [Module NN · Lesson MM] Lesson Title Goes Here

> **Unit:** _Unit N — Name_ · **Time:** _~NN min_ · **Equipment:** _E0/E1/E2/E3/E4_
> **You'll need first:** _prerequisite lesson titles, or "Nothing new."_

<!-- One friendly sentence that tells the learner what this lesson is about. No jargon. -->
_A single welcoming sentence in plain language: what you're about to learn and why it's worth your time._

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] _Objective 1 — start with a verb (Explain… / Identify… / Configure…)._
- [ ] _Objective 2._
- [ ] _Objective 3 (3–5 total; each maps to something the quiz will check)._

<!-- Objectives must be observable and testable. No vague verbs like "understand" without a way to show it. -->

---

## 2. Introduction — why this matters

<!-- WHY BEFORE HOW. Open with the real-world problem this lesson solves. -->
_Two or three short paragraphs. Start with a relatable, everyday problem or scenario. Make the learner feel the "pain" this topic removes. End with a one-line promise of what they'll be able to do._

🎯 **Exam tip:** _How CompTIA tends to frame this topic. (Delete if none.)_

---

## 3. Simple explanation

<!-- The concept, explained as if to a curious 12-year-old. One idea at a time. -->
_Explain the core idea in the plainest words possible. Short sentences. One idea per sentence. Define nothing here that isn't defined in Vocabulary below. Build the idea step by step, smallest piece first._

💡 **Tip:** _A helpful shortcut or reassurance. (Delete if none.)_

---

## 4. Real-world analogy

<!-- A concrete, everyday comparison that makes the abstract idea click. -->
> _"Think of it like…"_

_Walk the analogy through: name the everyday thing, then map each part of it back to the networking idea. Keep the mapping explicit so the learner sees exactly how the analogy lines up with reality._

| In the analogy… | In networking… |
|-----------------|----------------|
| _everyday item_ | _the real concept_ |
| _everyday item_ | _the real concept_ |

---

## 5. Vocabulary

<!-- Every NEW bold term used in this lesson, defined in plain language. These also go to the glossary (Section 20). -->

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **_Term_** | _(pronunciation if tricky)_ | _One clear sentence a beginner understands._ |
| **_Term_** | | _…_ |

---

## 6. ASCII diagram

<!--
 A text-only diagram that prints anywhere, needs no image, and is screen-reader friendly.
 Keep it simple and labeled. Use the shared shapes:
   [ Device ]   (( Cloud/WAN ))   ---- wired ----   ~~~ wireless ~~~
-->

```
   [ Your Laptop ] ---- Ethernet ---- [ Switch ] ---- uplink ---- (( Internet ))
        |                                  |
     label it                          label it
```

_One sentence under the diagram telling the learner what to notice in it._

---

## 7. Suggested color diagram (production brief)

<!-- A brief for the Graphic Designer. Describe the polished SVG to be created. Do NOT rely on color alone. -->

> **Filename:** `dgm-NN-MM-slug-01.svg` (per Naming Conventions)
> **Shows:** _what the diagram depicts._
> **Key elements & labels:** _list every box, line, and label needed._
> **Color meaning:** _what each color represents — AND the shape/label that carries the same meaning so it works in black & white._
> **Flow direction:** _left-to-right / top-to-bottom._
> **Alt text (required):** _"…describe what it shows and why it matters…"_

---

## 8. Suggested real photos (production brief)

<!-- A brief for the photos/screenshots that give the "look at it for real" channel. -->

> **Photo/Screenshot 1** — `img-NN-MM-slug-01.jpg`
> _What to capture (e.g., "front panel of the Dell PowerConnect 3424 with port 1's link light lit"), what to annotate with arrows, and the alt text._
>
> **Photo/Screenshot 2** — `img-NN-MM-slug-02.jpg`
> _…_

_If a real photo can't be captured yet, leave a placeholder inline:_
`[PHOTO NEEDED: <exact description>]`

---

## 9. Hands-on lab

<!-- Skip only for pure-theory lessons; if so, write "No lab for this lesson — concept only." -->

**Goal:** _what you will build or do, in one sentence._
**Why:** _one line connecting it to the real world / the home lab._

**You will need**
- _Equipment (tier E?): list exact items._
- _Software / prior lab state: e.g., "LAB-B completed; switch reachable."_
- _Estimated time: NN min._

⚠️ **Before you start (safety):** _anything that could lock you out of the switch/router, and how to avoid it._

### 9a. Step-by-step instructions

<!-- One action per step. Name every click, port, and command. Show commands in code blocks. -->

1. _Do exactly one thing. Name the button/port/command._
   ```text
   C:\> command goes here
   ```
2. _Next single action._
3. _…_

### 9b. Expected results

<!-- Tell the learner precisely what success looks like, after key steps. -->

- After step _N_, you should see: _describe the exact light/screen/output._
  ```text
  Example expected output line
  ```
- ✅ **You did it if:** _the clear finish-line signal._

### 9c. Verify it worked

1. _A concrete check the learner runs to confirm success (e.g., a `ping`)._ 
2. _What a passing result looks like._

### 9d. Reset / roll back

_How to safely undo the lab and what state to leave the gear in for the next lab._

---

## 10. Common mistakes

<!-- The real errors beginners make here, and the quick fix for each. -->

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| _…_ | _…_ | _…_ |
| _…_ | _…_ | _…_ |

---

## 11. Troubleshooting

<!-- Symptom → likely cause → fix. Follow the same 7-step method taught in Module 14. -->

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| _"I see X / I don't see Y."_ | _…_ | _…_ |
| _…_ | _…_ | _…_ |

---

## 12. Lesson summary

<!-- The 3–5 things that must stick. Short. Scannable. -->

- **_Key takeaway 1._**
- **_Key takeaway 2._**
- **_Key takeaway 3._**

**One-sentence recap:** _the whole lesson in a single plain sentence._

---

## 13. Workbook exercises

<!-- Written practice the learner does by hand. Not multiple choice — these build skill. -->

1. **_Exercise title._** _Task the learner completes (draw, convert, plan, label). Leave space to write._
   - _Answer space / lines._
2. **_Exercise title._** _…_
3. **_Challenge (optional stretch)._** _A harder one for fast learners._

---

## 14. Quiz

<!-- ~10 questions. Mix of types. Plain language. Every question maps to an objective above. -->

**Instructions:** Choose the best answer. Do not look at the Answer Key until you finish.

1. _Question stem?_ *(Objective: 0.0)*
   - A) _option_
   - B) _option_
   - C) _option_
   - D) _option_

2. **True or false —** _statement._ Explain your answer in one sentence. *(Objective: 0.0)*

3. **Matching —** draw a line from each term to its meaning. *(Objective: 0.0)*

4. **Scenario —** _short real-world situation; what would you do first?_ *(Objective: 0.0)*

<!-- Continue to ~10. End with at least one scenario/PBQ-style item for exam realism. -->

---

## 15. Answer key

<!-- PRINTABLE but MOVED to instructor materials for the published build. During authoring keep it here so it stays in sync, then split per the Repository Structure. -->

> 🔒 **Instructor / self-check only.** In the published course this lives in
> `instructor/answer-keys/quiz-NN-answers.md`. Keep it on a separate printable page.

1. **B.** _Why B is right, and why A, C, D are wrong._
2. **False.** _The correct reasoning._
3. _Correct matches listed._
4. _A model answer and what a good response includes._

---

## 16. Instructor notes

<!-- So any instructor (or future you) can teach this cold. Never leaked into the student page. -->

- **Objective(s) in one line:** _…_
- **Common misconceptions:** _what learners get wrong and how to correct it._
- **Pacing:** _where people slow down; what to demo live._
- **How CompTIA tests it:** _exam framing and traps._
- **Support ideas (struggling):** _extra scaffolding._
- **Extension ideas (fast finishers):** _stretch tasks._

---

## 17. Cheat sheet

<!-- A compact, printable quick-reference the learner can tear out. Also feeds resources/cheat-sheets/. -->

> **Quick reference — [topic]**
>
> - _Fact / command / value 1_
> - _Fact / command / value 2_
> - _Fact / command / value 3_
>
> _(Keep to what fits on a half page. Reuse across the course where relevant.)_

---

## 18. Glossary updates

<!-- List the terms from Section 5 to add/update in the master glossary. -->

Add or confirm these entries in `resources/glossary/`:

- **_Term_** — _plain-language definition (must match Section 5)._
- **_Term_** — _…_

---

## 19. Homework

<!-- Short, spaced practice to do before the next lesson. Reinforces + previews. -->

- **Practice:** _a small task using today's skill._
- **Spaced review:** _revisit flashcards from an earlier module (name it)._
- **Preview:** _one question to think about that the next lesson answers._

---

## 20. Self-reflection

<!-- Metacognition. Helps learning stick and flags gaps early. -->

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. What is still fuzzy for me? _______________________
3. Where would I use this in my own home lab or a real job? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

<!-- The learner's own "am I done?" gate before moving on. Mirrors the objectives. -->

Before you go to the next lesson, check each box **honestly**:

- [ ] I can explain this lesson to someone else in plain words.
- [ ] I met every learning objective in Section 1.
- [ ] I completed the hands-on lab and it worked (or I logged why not).
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook exercises.
- [ ] I added the new vocabulary to my notes.
- [ ] I know how this connects to the **next** lesson.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---

<!-- PRINT FOOTER — appears at the bottom of every printed lesson. Keep on its own line. -->
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-MNN-LMM** — "Title" · Module NN · Unit N · Page of the printable set_

<!--
============================================================================
 END OF MASTER LESSON TEMPLATE
 Author checklist before setting status: Published (see CLAUDE.md §13):
  [ ] WHY before HOW · no undefined terms · reading level ~7
  [ ] All 21 sections present and filled (or marked N/A with reason)
  [ ] ≥1 ASCII diagram + color-diagram brief + real-photo brief
  [ ] Every image brief has alt text; color never the only signal
  [ ] Quiz maps to objectives; answer key explains every option
  [ ] Vocab mirrored into glossary; cheat sheet is print-sized
  [ ] Front-matter complete; prints cleanly in black & white
============================================================================
-->
