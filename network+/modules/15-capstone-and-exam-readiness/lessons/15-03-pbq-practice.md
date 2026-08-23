---
id: NA-M15-L03
module: 15
lesson: 03
title: "Performance-Based Question (PBQ) Practice"
unit: 12
objective_ids: ["exam-readiness"]
reading_level_target: 7
status: Published
est_minutes: 40
equipment_tier: E1
prerequisites: ["NA-M15-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 15 · Lesson 03] Performance-Based Question (PBQ) Practice

> **Unit:** Unit 12 — Capstone & Exam Readiness · **Time:** ~40 min · **Equipment:** E1 (none; paper optional)
> **You'll need first:** Lesson 15-02 (the exam format and strategy).

Last lesson you learned what a **PBQ** is. Now let's practice a few. PBQs feel scary because they look different from a normal question. But every PBQ is just the material you already know, shown in a hands-on way. In this lesson we walk three worked PBQs together, step by step. By the end, they will feel like old friends, not surprises.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Recognize the three common **PBQ** formats.
- [ ] Read what a PBQ is really asking before you touch anything.
- [ ] Work a drag-and-drop, a fill-in, and a label PBQ in order.
- [ ] Answer every sub-part you can, and never leave one blank.

---

## 2. Introduction — why this matters

A **Performance-Based Question (PBQ)** is a hands-on task, not a pick-one question. It might ask you to drag items into place, type settings into a fake screen, or label a diagram. It tests whether you can *do* the thing, not just recall it.

PBQs cost time. That is the real danger — not the difficulty. If you freeze or over-think, the clock wins. A calm, step-by-step method fixes that.

The good news: PBQs use content you already learned. OSI layers. Port numbers. IP settings. VLANs. Cables. You are not learning new material here — you are practicing how to show it under pressure.

🎯 **Exam tip:** Read the whole PBQ before you drag or type anything. Know the goal first.

🔧 **Lab link:** No new gear. Your capstone lab (Lesson 15-01) is the real version of these tasks.

---

## 3. Simple explanation

There are three PBQ formats you'll see most. Let's name them, then work one of each.

### The three formats

1. **Drag-and-drop / matching** — move items into the right slots (layers, ports, terms).
2. **Fill-in / configure** — type settings into a simulated screen (an IP, a subnet, a gateway, a VLAN).
3. **Label / identify** — mark parts of a diagram (a topology, a cable type, a device).

### A simple method for any PBQ

- **Read** the whole task first. What is the goal?
- **Plan** your answer before you touch the screen.
- **Do** the parts you are sure of first.
- **Guess** the rest — answer every sub-part, even if unsure.
- **Check** that nothing is left blank before you move on.

### Worked PBQ 1 — Drag-and-drop (OSI layers)

**Task:** Drag each item to its OSI layer.

| Item | Correct layer |
|------|---------------|
| An IP address | Layer 3 (Network) |
| A MAC address / switch | Layer 2 (Data Link) |
| A cable / hub | Layer 1 (Physical) |
| A port number (TCP/UDP) | Layer 4 (Transport) |

**How to work it:** Place the ones you know cold first (a cable is Layer 1). Then reason out the rest. IP = Layer 3; MAC = Layer 2; ports = Layer 4. Never leave a slot empty — a guess can score.

### Worked PBQ 2 — Fill-in / configure (IP settings)

**Task:** A laptop must join the `192.168.1.0/24` network. Fill in valid settings.

| Field | A valid answer |
|-------|----------------|
| IP address | `192.168.1.10` (any unused .1–.254 host) |
| Subnet mask | `255.255.255.0` (that's what /24 means) |
| Default gateway | `192.168.1.1` (the router on this network) |

**How to work it:** `/24` means the mask `255.255.255.0`. The host must be in `192.168.1.x` and not already taken. The gateway is the router's address on the same network. Every value shown is one valid example. **[TO VERIFY ON HARDWARE]**

### Worked PBQ 3 — Label / identify (cabling and topology)

**Task:** Label the link and pick the right cable.

- Two PCs joined directly, no switch → historically a **crossover** cable (modern ports auto-fix this). *[VERIFY WITH CompTIA — auto-MDIX is common now.]*
- A PC to a switch → a **straight-through** cable.
- A long run between buildings → **fiber** (distance, no interference).

**How to work it:** Match the cable to the job: same-device-to-same-device leaned on crossover; different devices used straight-through; long or noisy runs use fiber.

> **The big idea:** A PBQ is known content in a hands-on wrapper. Read the goal, plan, do the sure parts, guess the rest, and never leave a sub-part blank.

💡 **Tip:** Some PBQs have several sub-parts. Partial credit is possible — every correct sub-part can add points.

⚠️ **Watch out:** Don't polish one PBQ forever. Get a solid answer in each blank, then move on and return if time allows.

---

## 4. Real-world analogy

> **"A PBQ is a cooking test, not a menu quiz."**

| Menu quiz (multiple-choice) | Cooking test (PBQ) |
|-----------------------------|--------------------|
| "Which dish has eggs?" | "Make the omelet." |
| Pick one answer | Do the steps in order |
| Fast | Slower — plan first |
| One box to fill | Several steps to finish |

A menu quiz asks if you *know* the recipe. A cooking test asks you to *make* it. Same knowledge — one just wants to see you do it.

---

## 5. Vocabulary

> This is a practice lesson — it reuses terms from across the course. A quick refresher:

| Term | Plain-language meaning |
|------|------------------------|
| **Performance-Based Question (PBQ)** | A hands-on exam task, like drag-and-drop, fill-in, or labeling. |
| **OSI model** | The 7-layer map of how networks work (Physical up to Application). |
| **Subnet mask** | The number that says which part of an IP is the network. |
| **Default gateway** | The router address a device uses to leave its network. |
| **Straight-through cable** | The normal patch cable for a PC-to-switch link. |

---

## 6. ASCII diagram

```
   ANY PBQ, SAME FIVE STEPS

   READ the whole task  -> know the goal
        |
   PLAN your answer     -> before touching the screen
        |
   DO the sure parts    -> place what you know cold
        |
   GUESS the rest       -> answer every sub-part
        |
   CHECK for blanks     -> leave nothing empty, then move on

   Three formats: drag-and-drop | fill-in/configure | label/identify
```

_A PBQ is known content in a hands-on wrapper. Read, plan, do, guess, check._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-15-03-pbq-practice-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the five-step PBQ method as a vertical flow, beside three cards naming the PBQ formats with a tiny example on each.
> **Key elements & labels:** left, a five-step flow (Read → Plan → Do sure parts → Guess the rest → Check for blanks); right, three format cards — "Drag-and-drop" (OSI layers example), "Fill-in / configure" (IP settings example), "Label / identify" (cable type example).
> **Color meaning:** each step and card is labeled in words; nothing depends on color alone.
> **Flow direction:** steps top-to-bottom on the left; three cards stacked on the right.
> **Alt text (required):** "On the left, a five-step method for any Performance-Based Question: read the whole task to know the goal, plan your answer before touching the screen, do the parts you are sure of, guess the rest so every sub-part is answered, and check that nothing is left blank before moving on. On the right, three cards name the common PBQ formats: drag-and-drop or matching, shown with an example of dragging items to OSI layers; fill-in or configure, shown with an example of entering an IP address, subnet mask, and default gateway; and label or identify, shown with an example of picking the right cable type for a link."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-15-03-pbq-screen-01.jpg`
> A candidate working a drag-and-drop task on screen. Alt text: "A test-taker dragging labels into slots on a simulated exam screen — a typical Performance-Based Question."
>
> **Photo 2** — `img-15-03-scratch-plan-01.jpg`
> Scratch notes planning a PBQ answer. Alt text: "Scratch paper where a candidate plans a PBQ answer before touching the screen — read and plan first."

---

## 9. Hands-on lab

**Goal:** work the three practice PBQs on paper, using the five-step method.
**Why:** rehearsing the method turns PBQs from scary to routine.

**You will need**
- Paper and pen. Optional: the OSI and ports cheat sheets. Estimated time: 25 min.

⚠️ **Before you start:** this is paper practice. No gear changes. Read each task fully first.

### 9a. Step-by-step instructions

For each of the three worked PBQs in Section 3:

1. **Read** the task aloud. Say the goal in your own words.
2. **Plan** on paper: list each slot/field and your intended answer.
3. **Do** the parts you are sure of first.
4. **Guess** the rest — fill every slot or field, even if unsure.
5. **Check** that nothing is blank. Then compare to the answer key.

### 9b. Expected results

- Three completed PBQs on paper, with no blank sub-parts, worked in the five-step order.

- ✅ **You did it if:** every slot/field has an answer and you used read-plan-do-guess-check.

> ⚠️ Any IP, port, or output value here is a varying example. **[TO VERIFY ON HARDWARE]**

### 9c. Verify it worked

1. Did you read the whole task before answering?
2. Are all sub-parts filled — none left blank?

### 9d. Reset / roll back

Paper only. Nothing to undo. Repeat with new numbers to build speed.

> 🔧 **Home-lab continuity:** the fill-in PBQ mirrors your real capstone lab settings from Lesson 15-01.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Touching the screen before reading | You answer the wrong goal | Read the whole task first |
| Leaving a sub-part blank | You lose easy partial credit | Guess every slot/field |
| Over-polishing one PBQ | The clock runs out | Get a solid answer, then move on |
| Forgetting /24 means 255.255.255.0 | Wrong subnet mask | Memorize the common masks |

---

## 11. Troubleshooting

| The worry | What to do |
|-----------|------------|
| "I don't know one sub-part." | Answer the others; guess that one — never blank |
| "The screen has many fields." | Plan on scratch paper first, then fill top to bottom |
| "Is this crossover or straight-through?" | Same device type ↔ crossover; different ↔ straight-through *[VERIFY WITH CompTIA — auto-MDIX]* |
| "I'm spending too long." | Lock in your best answer and return later if time allows |

---

## 12. Lesson summary

- A **PBQ** is known content in a hands-on wrapper — drag-and-drop, fill-in, or label.
- Use five steps every time: read, plan, do the sure parts, guess the rest, check for blanks.
- `/24` means the mask 255.255.255.0; the host stays in the same network; the gateway is the router.
- Match the cable to the job (straight-through for PC-to-switch; fiber for long runs).
- Answer every sub-part — partial credit is possible, and a blank scores zero.

**One-sentence recap:** Treat every PBQ as familiar content in a hands-on wrapper — read, plan, do, guess, check, and never leave a sub-part blank.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-15-03-fill-in-the-blank.md`
2. **Matching** — `wb-15-03-matching.md`
3. **Label the diagram** — `wb-15-03-label-the-diagram.md` (the five-step method)
4. **Short answer** — `wb-15-03-short-answer.md`
5. **Hands-on observation** — `wb-15-03-hands-on-observation.md` (work a PBQ on paper)
6. **Vocabulary review** — `wb-15-03-vocabulary-review.md`
7. **Reflection** — `wb-15-03-reflection.md`

**Quick written warm-up (do this now):** What subnet mask does `/24` mean? What's the first step for any PBQ?

Mask: ____________   First step: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-15-03-knowledge-check.md`.)

1. A PBQ is best described as… *(Objective: recall)*
   - A) a hands-on task using content you already know
   - B) an essay question
   - C) brand-new material not taught in the course
   - D) a spoken interview

2. What is the first step for any PBQ? *(Objective: apply)*
   - A) Start typing right away
   - B) Read the whole task and find the goal
   - C) Skip it forever
   - D) Guess everything blindly

3. On a drag-and-drop, an **IP address** belongs at… *(Objective: apply)*
   - A) Layer 1 (Physical)
   - B) Layer 2 (Data Link)
   - C) Layer 3 (Network)
   - D) Layer 7 (Application)

4. A `/24` network uses which subnet mask? *(Objective: apply)*
   - A) 255.0.0.0
   - B) 255.255.0.0
   - C) 255.255.255.0
   - D) 255.255.255.255

5. You are unsure of one field in a fill-in PBQ. You should… *(Objective: apply)*
   - A) leave it blank
   - B) answer your best guess — never blank
   - C) delete the whole answer
   - D) end the exam

6. **True or false —** PBQs test brand-new material you did not study. Explain in one sentence. *(Objective: recall)*

7. Which cable normally joins a PC to a switch? *(Objective: apply)*
   - A) crossover
   - B) straight-through
   - C) fiber only
   - D) power cable

8. **Matching —** drag each item to its OSI layer. *(Objective: apply)*
   - ___ MAC address / switch &nbsp;&nbsp; ___ Port number (TCP/UDP) &nbsp;&nbsp; ___ Cable / hub
   - A) Layer 4 (Transport)
   - B) Layer 1 (Physical)
   - C) Layer 2 (Data Link)

9. Fill in the blank: On a multi-part PBQ, you should answer every ____________ you can, because partial credit is possible. *(Objective: apply)*

10. **Scenario (PBQ-style) —** A laptop must join `192.168.1.0/24`. Give a valid IP address, subnet mask, and default gateway, and say why each is valid. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-15-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-15-03-pbq-practice.md`. In brief:

- **Objective in one line:** learners recognize the three PBQ formats and apply a five-step method to each.
- **Common misconceptions:** "PBQs are new material"; "leave hard sub-parts blank"; "polish one PBQ fully." Correct each.
- **Pacing:** ~40 min. Work all three PBQs aloud; pause at "plan" to model scratch notes.
- **How CompTIA tests it:** PBQs reuse taught content (OSI, ports, IP/subnet, VLANs, cabling) in a hands-on wrapper.
- **Accuracy note (Prime Directive #7):** all IP/port values are varying examples marked `[TO VERIFY ON HARDWARE]`; auto-MDIX/crossover nuance marked `[VERIFY WITH CompTIA]`.
- **Extension idea:** learners write their own PBQ from a past module and swap with a partner.

---

## 17. Cheat sheet

> **Quick reference — PBQ practice**
>
> | Format | Example | Key move |
> |--------|---------|----------|
> | Drag-and-drop | OSI layers, ports | place sure ones first |
> | Fill-in / configure | IP, mask, gateway | /24 = 255.255.255.0 |
> | Label / identify | cable type, topology | match cable to the job |
>
> - Five steps: **read → plan → do → guess → check.**
> - Answer every sub-part — partial credit is possible; a blank is zero.
>
> _(Full version: `resources/cheat-sheets/exam-readiness-quick-reference.md`.)_

---

## 18. Glossary updates

**No new terms.** This practice lesson reuses terms already taught: **Performance-Based Question (PBQ)** (added in 15-02), the **OSI model** and its layers, **subnet mask**, **default gateway**, **straight-through** and **crossover** cables, **fiber**, ports, and VLANs. The glossary is unchanged.

---

## 19. Homework

- **Practice:** Redo the three PBQs with new numbers (a different /24, different items).
- **Spaced review:** Say the five PBQ steps from memory — read, plan, do, guess, check.
- **Preview:** Next, **Lesson 15-04 — Full-Length Practice Exam #1 + Review**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which PBQ format worries you most, and why? _______________________
3. Did the five-step method make PBQs feel calmer? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box honestly:

- [ ] I can name the three PBQ formats.
- [ ] I read the whole task before answering.
- [ ] I use the five-step method on each PBQ.
- [ ] I answer every sub-part and leave none blank.
- [ ] I know `/24` means 255.255.255.0.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M15-L03** — "Performance-Based Question (PBQ) Practice" · Module 15 · Unit 12_
