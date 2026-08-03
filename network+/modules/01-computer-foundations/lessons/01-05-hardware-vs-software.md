---
id: NA-M01-L05
module: 01
lesson: 05
title: "Hardware vs. Software"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 20
equipment_tier: E1
prerequisites: ["NA-M01-L01", "NA-M01-L02", "NA-M01-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 01 · Lesson 05] Hardware vs. Software

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~20 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lessons 01-01, 01-02, and 01-04 (parts of a computer and the operating system).

We keep using two words: **hardware** and **software**. You've met both already. This short lesson makes the difference crystal clear — because your switch and router are each a mix of the two.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Define **hardware** and **software** in your own words.
- [ ] Sort real examples into hardware or software.
- [ ] Explain how hardware and software work together.
- [ ] Explain why a switch is both hardware *and* software.

---

## 2. Introduction — why this matters

Picture a music player — a small device that plays songs. The device itself is a thing you can hold: buttons, a screen, a battery. But by itself, it does nothing interesting. It needs **songs** loaded onto it. The songs aren't things you can touch; they're information.

A computer is the same. The parts you can touch are the **hardware**. The instructions and programs that make it *do* something are the **software**. One without the other is useless. A music player with no songs is a paperweight. Songs with no player are just files sitting there.

Why does this matter for networking? Because your Dell switch is exactly this pairing: a physical box (**hardware**) plus the instructions inside it (**software**) that you'll set up later. Knowing which is which helps you talk about — and fix — network gear like a pro.

🎯 **Exam tip:** Network+ often separates a device's *physical* problems (hardware) from its *settings/instructions* problems (software). This lesson builds that habit.

---

## 3. Simple explanation

Let's define both in the plainest way:

- **Hardware** = the **physical** parts of a computer. If you can touch it, it's hardware. Examples: the laptop itself, the keyboard, the screen, the CPU, RAM, storage, cables, and ports.

- **Software** = the **instructions and programs** a computer runs. You **can't touch** software. Examples: Windows (the operating system), a web browser, Notepad, and any app you install.

Here's the simple test:

> **Can you touch it? → Hardware. Is it instructions the computer runs? → Software.**

The two need each other:

- **Software runs on hardware.** Windows (software) runs on your laptop (hardware).
- **Hardware needs software to be useful.** Your laptop (hardware) does nothing until software tells it what to do.

There's one more word worth knowing: **firmware**. Firmware is a special kind of software that is built into a device and rarely changes. Your Dell switch has firmware — the built-in software that makes it a switch. Think of firmware as software that lives *inside* a piece of hardware.

💡 **Tip:** A quick memory trick — **hardware is the body, software is the ideas.** The body can't act without ideas, and ideas need a body to act through.

---

## 4. Real-world analogy

> **"Hardware is a music player; software is the songs."**

| The music player… | The computer… |
|-------------------|---------------|
| The **device** you hold (buttons, screen) | The **hardware** (laptop, keyboard, CPU) |
| The **songs** loaded on it | The **software** (Windows, apps) |
| Songs built in that you don't change | **Firmware** (built-in software) |
| A player with no songs = useless | Hardware with no software = useless |
| Songs with no player = can't play | Software with no hardware = can't run |

The lesson of the analogy: **you need both.** They are partners. When something goes wrong, a smart first question is, "Is this a *device* problem (hardware) or a *songs* problem (software)?"

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Hardware** | HARD-wair | The physical parts of a computer — anything you can touch. |
| **Software** | SOFT-wair | The instructions and programs a computer runs; you can't touch it. |
| **Firmware** | FURM-wair | Software built into a device, like your switch, that rarely changes. |
| **Operating system** | OP-er-ay-ting | The main software that runs your programs and manages the hardware. |
| **Program** | PRO-gram | A set of instructions the computer follows (a kind of software). |

---

## 6. ASCII diagram

```
        HARDWARE (you can touch)          SOFTWARE (you can't touch)
   ┌───────────────────────────────┐  ┌───────────────────────────────┐
   │ laptop · keyboard · screen     │  │ Windows (operating system)     │
   │ CPU · RAM · storage            │  │ web browser · Notepad · apps   │
   │ cables · ports                 │  │ (instructions the computer runs)│
   └───────────────┬───────────────┘  └───────────────┬───────────────┘
                   └──────── work together ────────────┘
                    software RUNS ON hardware;
                    hardware NEEDS software to be useful
```

_Notice the bridge: neither side does anything useful alone. Firmware is software that lives inside hardware._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-01-05-hardware-vs-software-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two columns — "Hardware (you can touch)" with icons of a laptop, CPU, cable; and "Software (you can't touch)" with icons of Windows, a browser, an app — joined by a "work together" bridge in the middle.
> **Key elements & labels:** each column clearly labeled; a small note that firmware = software inside hardware.
> **Color meaning:** Hardware = gray, Software = blue — **and** each column is labeled and uses different icons, so it reads in black and white.
> **Flow direction:** two side-by-side columns with a connecting bridge.
> **Alt text (required):** "Two columns comparing hardware and software: the hardware column (things you can touch, like a laptop, CPU, and cable) and the software column (instructions you can't touch, like Windows and apps), joined by a bridge showing they work together."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-01-05-hardware-items-01.jpg`
> A flat-lay of real hardware: a laptop, a stick of RAM, a cable, a keyboard — labeled "hardware (you can touch)." Alt text: "Real hardware items laid out — a laptop, RAM, a cable, and a keyboard — labeled as hardware."
>
> **Screenshot 2** — `img-01-05-installed-apps-01.jpg`
> The Windows Settings → Apps list, labeled "software (installed programs)." Alt text: "The Windows list of installed apps, labeled as software."
>
> **Photo 3** — `img-01-05-switch-hardware-software-01.jpg`
> The Dell switch with two callouts: the box = hardware, the settings screen = software/firmware. Alt text: "A network switch labeled to show the physical box is hardware and its settings are software."

---

## 9. Hands-on lab

**Goal:** sort the things on and in your own laptop into hardware and software.
**Why:** the difference sticks when you point at real examples of each.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- No internet or cables needed.
- Estimated time: 8 min.

⚠️ **Before you start (safety):** You will only *look* and *list*. Do not uninstall anything.

### 9a. Step-by-step instructions

1. Look at your laptop. Touch three parts you can physically feel (for example, the keyboard, the screen edge, a port). These are **hardware**.
2. Open **Settings** (click **Start**, then the gear icon).
3. Click **Apps**, then **Installed apps** (or **Apps & features**).
4. Look at the list of programs. Every item on this list is **software**.
5. Write down three hardware items and three software items you found.

### 9b. Expected results

- You can list real hardware you touched.
  ```text
  Example hardware: keyboard, screen, USB port
  ```
- You can list real software from the Apps screen.
  ```text
  Example software: Microsoft Edge, Notepad, Windows
  ```
- ✅ **You did it if:** you have three real examples in each column.

### 9c. Verify it worked

1. Point at your screen and say "hardware." Point at the Apps list and say "software."
2. Ask yourself: "Can I touch it?" If yes, it's hardware. If no, and it's instructions, it's software.

### 9d. Reset / roll back

Close Settings. You changed nothing — you only looked at the list.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Calling an app "hardware" | You mix up the two | Ask "Can I touch it?" Apps are instructions — software |
| Thinking a CD/USB drive *is* the software | You confuse the container with the contents | The drive is hardware; the programs *on* it are software |
| Ignoring firmware | You forget devices have built-in software | Your switch is hardware *plus* firmware (built-in software) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't find the Apps list | Settings layout differs | In Settings, type "Installed apps" in the search box |
| Unsure if something is hardware or software | It's a tricky example | Use the touch test: touchable = hardware; instructions = software |
| "Is Windows hardware or software?" | Common question | Windows is **software** — the operating system that runs on the hardware |

---

## 12. Lesson summary

- **Hardware** = the physical parts you can touch (laptop, CPU, RAM, cables, ports).
- **Software** = the instructions and programs you can't touch (Windows, apps).
- **They need each other:** software runs on hardware; hardware needs software to be useful.
- **Firmware** = software built into a device, like your switch.

**One-sentence recap:** Hardware is the body you can touch, software is the instructions it follows, and every device — including your switch — is a mix of both.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-01-05-fill-in-the-blank.md`
2. **Matching** — `wb-01-05-matching.md`
3. **Label the diagram** — `wb-01-05-label-the-diagram.md` (sort items into two columns)
4. **Short answer** — `wb-01-05-short-answer.md`
5. **Hands-on observation** — `wb-01-05-hands-on-observation.md` (list your real hardware and software)
6. **Vocabulary review** — `wb-01-05-vocabulary-review.md`
7. **Reflection** — `wb-01-05-reflection.md`

**Quick written warm-up (do this now):** Write one thing that is hardware and one thing that is software, both within arm's reach.

Hardware: ____________________  Software: ____________________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-01-05-knowledge-check.md`.)

1. What is hardware? *(Objective: define hardware)*
   - A) Instructions the computer runs
   - B) The physical parts you can touch
   - C) A website
   - D) A password

2. What is software? *(Objective: define software)*
   - A) The physical parts you can touch
   - B) The instructions and programs the computer runs
   - C) A type of cable
   - D) The power button

3. Which of these is **hardware**? *(Objective: sort examples)*
   - A) A web browser
   - B) Windows
   - C) The keyboard
   - D) Notepad

4. Which of these is **software**? *(Objective: sort examples)*
   - A) The screen
   - B) The CPU
   - C) A network cable
   - D) Windows

5. **True or false —** Software can do useful work without any hardware. Explain your answer in one sentence. *(Objective: they work together)*

6. What is the quick test to tell hardware from software? *(Objective: define)*
   - A) Its color
   - B) "Can I touch it?"
   - C) Its price
   - D) Its brand

7. What is **firmware**? *(Objective: firmware)*
   - A) A broken program
   - B) Software built into a device, like a switch
   - C) A kind of cable
   - D) A password

8. **Matching —** write the letter next to each item. *(Objective: sort examples)*
   - ___ RAM &nbsp;&nbsp; ___ Web browser &nbsp;&nbsp; ___ Ethernet cable
   - A) software &nbsp; B) hardware (a chip) &nbsp; C) hardware (a cable)

9. Fill in the blank: Software ____________ on hardware. *(Objective: they work together)*

10. **Scenario —** Your Dell switch won't turn on at all — no lights. Is this more likely a hardware problem or a software problem, and why? *(Objective: hardware vs software thinking)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-01-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-01-05-hardware-vs-software.md`. In brief:

- **Objective in one line:** learners can sort hardware vs. software and know a switch is both.
- **Common misconceptions:** apps called "hardware"; the drive vs. its contents. Correct with the touch test.
- **Pacing:** ~20 min (shorter lesson). The music-player analogy is the anchor.
- **How CompTIA tests it:** separating physical faults from configuration faults — a core troubleshooting split.
- **Support idea:** hold up objects and have learners shout "hardware!" or "software!"
- **Extension idea:** classify parts of the switch and router as hardware, software, or firmware.

---

## 17. Cheat sheet

> **Quick reference — Hardware vs. Software**
>
> - **Hardware** = physical parts you **can touch** (laptop, CPU, RAM, cables, ports).
> - **Software** = instructions/programs you **can't touch** (Windows, browser, apps).
> - **Quick test:** *Can I touch it?* → hardware. *Is it instructions?* → software.
> - **They need each other:** software runs on hardware; hardware needs software.
> - **Firmware** = software built into a device (like your switch).
> - **Memory trick:** hardware = the body · software = the ideas.
>
> _(Full version: `resources/cheat-sheets/computer-basics-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Software** — The instructions and programs a computer runs; you can't touch it.
- **Firmware** — Software built into a device, like a switch, that rarely changes.
- *(Hardware, Operating system, and Program are already defined from earlier lessons.)*

---

## 19. Homework

- **Practice:** Walk around your home and write five things that are hardware and five that are software.
- **Spaced review:** Redo the Lesson 01-04 flashcards for the operating system and user interface.
- **Preview:** You keep hearing "server" and "client." What do those words really mean? The next lesson explains — and it's the last stop in Module 01.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. What is still fuzzy for me? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can define hardware and software in my own words.
- [ ] I can sort real examples into hardware or software.
- [ ] I can explain how they work together.
- [ ] I understand that my switch is both hardware and software (firmware).
- [ ] I completed the hands-on lab.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M01-L05** — "Hardware vs. Software" · Module 01 · Unit 1_
