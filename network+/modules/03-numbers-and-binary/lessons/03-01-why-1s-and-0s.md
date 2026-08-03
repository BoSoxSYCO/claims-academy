---
id: NA-M03-L01
module: 03
lesson: 01
title: "Why Computers Only Understand 1s and 0s"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 20
equipment_tier: E1
prerequisites: ["NA-M01-L01", "NA-M01-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 03 · Lesson 01] Why Computers Only Understand 1s and 0s

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~20 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lessons 01-01 and 01-02 (what a computer is; the parts inside).

Welcome to Module 03. You may have heard that computers "think in 1s and 0s." It sounds strange — but there's a simple reason, and once you get it, addresses and networks will make far more sense.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain **why** computers use only two states (on and off).
- [ ] Define a **bit** as a single 1 or 0.
- [ ] Explain that **all** data — numbers, letters, pictures — is stored as 1s and 0s.
- [ ] Say why this matters for the addresses you'll learn later.

---

## 2. Introduction — why this matters

Flip a light switch. It's either **on** or **off** — there's no in-between. That simple, reliable idea is the secret behind every computer on Earth.

Inside your laptop are billions of tiny electronic switches. Each one can only be in one of two states: **on** or **off**. Computers use **on** to mean **1** and **off** to mean **0**. That's it. Everything a computer does — every photo, song, message, and web page — is built out of huge patterns of these 1s and 0s.

Why should you care? Because the addresses that run networks — like `192.168.1.24` — are really just 1s and 0s underneath. In a few lessons you'll learn to read them. But first you need the ground-floor idea: computers speak a language with only two letters, **1** and **0**. That language is called **binary**.

🎯 **Exam tip:** IP addresses, subnet masks, and MAC addresses on the Network+ exam are all based on binary. Getting comfortable with 1s and 0s now makes the addressing lessons much easier later.

---

## 3. Simple explanation

Here's the whole idea, step by step:

1. **Computers are electronic.** They work using electricity flowing through tiny switches.
2. **A switch has two states.** Electricity is either flowing (**on**) or not (**off**). There's no "half on."
3. **We give the two states names.** On = **1**. Off = **0**.
4. **One switch's value is a bit.** A **bit** is a single 1 or 0 — the smallest piece of information a computer has.
5. **Patterns of bits make everything.** Line up many switches, and their pattern of 1s and 0s can stand for a number, a letter, a color, or anything else.

This two-state system is called **binary**. "Bi" means two — like a **bi**cycle has two wheels. Binary uses only two digits: 1 and 0.

Why only two? Because two states are **simple and reliable**. It's easy for a machine to tell the difference between "electricity flowing" and "not flowing." Trying to use ten different levels of electricity would be error-prone. Two states almost never get confused — so computers are fast and accurate.

> **The big idea:** a computer is billions of on/off switches. On = 1, off = 0. Every piece of data is a pattern of these 1s and 0s.

💡 **Tip:** When you line up **8** switches, that group is called a **byte** — you'll meet bytes properly in the next lesson. For now, just remember: **one switch = one bit**.

---

## 4. Real-world analogy

> **"A computer is a giant wall of light switches."**

Imagine a wall covered in light switches. Each switch is **up (on / 1)** or **down (off / 0)**.

| The light-switch wall… | The computer… |
|------------------------|---------------|
| One switch: up or down | One **bit**: 1 or 0 |
| "Up" | **1** (on) |
| "Down" | **0** (off) |
| A pattern of many switches | Data (a number, letter, or color) |
| Reading the pattern | The computer "understanding" the data |

If you and a friend agreed that a certain pattern of up/down switches means the letter "A," you could send messages with light switches alone. That's exactly what a computer does — just with billions of switches, flipping incredibly fast.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Binary** | BY-nuh-ree | A number system that uses only two digits: 1 and 0. |
| **Bit** | bit | A single 1 or 0 — the smallest piece of information. |
| **On / Off** | | The two states of a switch: on = 1, off = 0. |
| **State** | stayt | The condition a switch is in (on or off). |
| **Digital** | DIJ-ih-tul | Using only separate, exact values (like 1 and 0), not an in-between. |
| **Transistor** | tran-ZISS-ter | A tiny electronic switch inside a computer (billions of them). |

---

## 6. ASCII diagram

```
   A COMPUTER = A WALL OF ON/OFF SWITCHES

     switch:   [ON] [OFF] [ON] [ON] [OFF] [OFF] [ON] [OFF]
     value:     1    0     1    1    0     0     1    0
                └──────────── one bit each ───────────┘
                        (8 bits = 1 byte → next lesson)

   on  = 1   ·   off = 0   ·   only two states → simple & reliable
```

_Each switch is one **bit**. Its value is just 1 (on) or 0 (off). Patterns of bits make all data._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-03-01-switches-binary-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a row of eight light switches, some up (on/1) and some down (off/0), with each switch labeled with its bit value below it; a note that 8 switches = 1 byte (coming next lesson).
> **Key elements & labels:** eight switch icons, their on/off state, the 1/0 value under each, and "on = 1, off = 0."
> **Color meaning:** on = green, off = gray — **and** each switch shows its position (up/down) and its 1/0 label, so it reads in black and white.
> **Flow direction:** left-to-right row of switches.
> **Alt text (required):** "A row of eight light switches, some up and some down, each labeled with a 1 (on) or 0 (off) below it, showing that a computer stores data as patterns of on/off bits."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-03-01-light-switch-01.jpg`
> A close-up of a real light switch, one in the ON position, one OFF, labeled 1 and 0. Alt text: "Two light switches, one on and one off, labeled 1 and 0."
>
> **Photo 2** — `img-03-01-cpu-transistors-01.jpg`
> A CPU chip with a caption noting it holds billions of tiny switches (transistors). Alt text: "A CPU chip captioned to show it contains billions of tiny switches."
>
> **Screenshot 3** — `img-03-01-calculator-binary-01.jpg`
> Windows Calculator in Programmer mode showing a number and its binary form. Alt text: "The Windows Calculator in Programmer mode showing a decimal number and its binary version made of 1s and 0s."

---

## 9. Hands-on lab

**Goal:** see a normal number turn into 1s and 0s with your own eyes.
**Why:** it proves that the numbers you know are really binary underneath.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- No internet or cables needed.
- Estimated time: 8 min.

⚠️ **Before you start (safety):** You will only use the Calculator app to view numbers. Nothing is changed.

### 9a. Step-by-step instructions

1. Open the **Calculator** app (Windows key → type `Calculator` → Enter).
2. Click the **menu** (the ☰ lines, top-left) and choose **Programmer**.
3. Make sure **DEC** (decimal) is selected on the left. Type the number `5`.
4. Look at the **BIN** (binary) row. You'll see `5` written in 1s and 0s: `101`.
5. Now type `10`. Watch the **BIN** row change to `1010`.
6. Try `255`. The **BIN** row shows eight 1s: `1111 1111`.

### 9b. Expected results

- The number `5` shows as binary `101`.
- The number `10` shows as binary `1010`.
- The number `255` shows as binary `1111 1111` (eight 1s).
  ```text
  DEC: 255
  BIN: 1111 1111
  ```
- ✅ **You did it if:** you saw everyday numbers appear as patterns of 1s and 0s.

### 9c. Verify it worked

1. Point at the BIN row and say: "That's the same number, written in binary."
2. Notice that bigger numbers use more 1s and 0s. (We'll learn to read them in Lesson 03-03.)

### 9d. Reset / roll back

Close the Calculator. Nothing was changed.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking binary is a different "kind" of number | Confusion | It's the *same* number, just written with two digits instead of ten |
| Believing a bit can be 2 or 3 | Wrong idea of a bit | A bit is only ever **1 or 0** — nothing else |
| Thinking computers understand letters directly | Misunderstanding | Letters are stored as patterns of 1s and 0s too |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No **Programmer** option | Older Calculator | Update Windows, or use any online "decimal to binary" viewer |
| I don't see a BIN row | Not in Programmer mode | Open the ☰ menu and choose **Programmer** |
| The binary looks grouped oddly | Calculator groups by 4s | That's normal — it just makes long binary easier to read |

---

## 12. Lesson summary

- Computers are made of billions of **switches**, each **on** or **off**.
- **On = 1, off = 0.** A single 1 or 0 is a **bit**.
- This two-digit system is called **binary** — simple and reliable.
- **Everything** — numbers, letters, pictures — is stored as patterns of 1s and 0s.

**One-sentence recap:** A computer is a giant wall of on/off switches, so it stores everything as patterns of 1s and 0s — a language called binary.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-03-01-fill-in-the-blank.md`
2. **Matching** — `wb-03-01-matching.md`
3. **Label the diagram** — `wb-03-01-label-the-diagram.md` (switches → bits)
4. **Short answer** — `wb-03-01-short-answer.md`
5. **Hands-on observation** — `wb-03-01-hands-on-observation.md` (record numbers in binary)
6. **Vocabulary review** — `wb-03-01-vocabulary-review.md`
7. **Reflection** — `wb-03-01-reflection.md`

**Quick written warm-up (do this now):** If a switch is ON, what bit value is that? If it's OFF?

ON = ____  OFF = ____

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-03-01-knowledge-check.md`.)

1. Why do computers use only two states? *(Objective: why binary)*
   - A) Because two states are simple and reliable
   - B) Because they are slow
   - C) Because people like the number two
   - D) There is no reason

2. In a computer, **on** means the bit is… *(Objective: on/off)*
   - A) 0
   - B) 1
   - C) 2
   - D) 10

3. What is a **bit**? *(Objective: define bit)*
   - A) A group of files
   - B) A single 1 or 0
   - C) A type of cable
   - D) The whole computer

4. The number system that uses only 1 and 0 is called… *(Objective: binary)*
   - A) decimal
   - B) binary
   - C) English
   - D) hexadecimal

5. **True or false —** Only numbers are stored as 1s and 0s; letters and pictures are stored some other way. Explain your answer in one sentence. *(Objective: everything is binary)*

6. A bit can be… *(Objective: define bit)*
   - A) any number from 0 to 9
   - B) only 1 or 0
   - C) only letters
   - D) any color

7. In the light-switch analogy, a switch that is **down** stands for… *(Objective: analogy)*
   - A) 1
   - B) 0
   - C) a byte
   - D) a letter

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Bit &nbsp;&nbsp; ___ Binary &nbsp;&nbsp; ___ Transistor
   - A) a system using only 1 and 0 &nbsp; B) a tiny switch in a computer &nbsp; C) a single 1 or 0

9. Fill in the blank: On = 1, and off = ____________. *(Objective: on/off)*

10. **Scenario —** Your friend says, "Binary must be some totally different kind of number." Using the Calculator lab, how would you show them that `5` and its binary `101` are the same number? *(Objective: binary is the same number)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-03-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-03-01-why-1s-and-0s.md`. In brief:

- **Objective in one line:** learners can explain why computers use two states and define a bit.
- **Common misconceptions:** binary is a "different number"; a bit can be more than 1/0. Correct with the Calculator lab.
- **Pacing:** ~20 min. Keep it conceptual — counting and converting come in 03-02 and 03-03.
- **How CompTIA tests it:** as the foundation for IP/subnet/MAC addressing — all binary underneath.
- **Support idea:** use real light switches or draw up/down switches on paper.
- **Extension idea:** in Calculator, watch how many bits it takes to write 256 (nine bits) vs. 255 (eight bits).

---

## 17. Cheat sheet

> **Quick reference — Why 1s and 0s**
>
> - Computers = billions of **switches**, each **on** or **off**.
> - **on = 1 · off = 0.** A single 1 or 0 is a **bit**.
> - Two states are used because they're **simple and reliable**.
> - This two-digit system is **binary** ("bi" = two).
> - **Everything** (numbers, letters, pictures) is stored as patterns of 1s and 0s.
> - **See it:** Calculator → Programmer → type a number → read the BIN row.
>
> _(Full version: `resources/cheat-sheets/numbers-and-binary-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Binary** — A number system that uses only two digits: 1 and 0.
- **Bit** — A single 1 or 0; the smallest piece of information.
- **State** — The condition a switch is in (on or off).
- **Digital** — Using only separate, exact values (like 1 and 0), not an in-between.
- **Transistor** — A tiny electronic switch inside a computer.

---

## 19. Homework

- **Practice:** In Calculator's Programmer mode, write down the binary for 1, 2, 4, and 8. Notice the pattern of where the single `1` sits.
- **Spaced review:** Redo the Lesson 01-02 flashcards for the parts inside a computer.
- **Preview:** If one switch is a bit, what do we call a group of eight of them, and how high can they count? The next lesson answers this.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Does "1s and 0s" make sense now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain why computers use only two states.
- [ ] I can define a bit as a single 1 or 0.
- [ ] I understand that all data is stored as 1s and 0s.
- [ ] I saw a normal number as binary in the Calculator.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: bits, bytes, and counting in binary.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M03-L01** — "Why Computers Only Understand 1s and 0s" · Module 03 · Unit 1_
