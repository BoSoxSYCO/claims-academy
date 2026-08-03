---
id: NA-M03-L02
module: 03
lesson: 02
title: "Bits, Bytes, and Counting in Binary"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M03-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 03 · Lesson 02] Bits, Bytes, and Counting in Binary

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~30 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 03-01 (bits, and why computers use 1s and 0s).

Last lesson you learned that one switch is a **bit**. Now we group bits together and learn to count with them. This is the exact skill you'll use to read IP addresses — so it's worth getting comfy here.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain that **8 bits = 1 byte**.
- [ ] Name the eight binary **place values**: 1, 2, 4, 8, 16, 32, 64, 128.
- [ ] Read a simple binary number by adding up its place values.
- [ ] Explain why the biggest number in one byte is **255**.

---

## 2. Introduction — why this matters

You already count every day without thinking about it. When you see the number **253**, you don't sound out each digit — you just *know* it. But there's a hidden system: the **3** is worth three ones, the **5** is worth five tens, and the **2** is worth two hundreds. Each place is worth ten times the one to its right.

Binary works the same way, with one change: each place is worth **two** times the one to its right, not ten. That's the whole trick. Once you know the binary place values, you can read any byte.

Why does this matter? Because an IP address like `192.168.1.24` is made of four numbers, and **each one is a single byte** (0 to 255). To truly understand addresses and subnetting later, you need to count in binary. Master the eight place values today, and Module 08 will feel easy.

🎯 **Exam tip:** The eight place values — **128, 64, 32, 16, 8, 4, 2, 1** — are the single most useful thing to memorize for subnetting. Learn them now and you're ahead.

---

## 3. Simple explanation

### Bits group into bytes
A **bit** is one 1 or 0. When you line up **8 bits**, that group is called a **byte**. A byte looks like this:

```
1 0 1 1 0 0 1 0     ← 8 bits = 1 byte
```

Almost everything is measured in bytes: an IP address number, a letter, a tiny file.

### Each place has a value (and they double)
In our normal numbers, the places are 1, 10, 100, 1000 — each **ten times** bigger. In binary, the places **double**: each is **two times** bigger than the one to its right. For a byte, the eight place values are:

```
 128   64   32   16    8    4    2    1
```

Read them right to left: 1, then 2, then 4, then 8… each one doubles. Notice the **rightmost** place is 1 and the **leftmost** is 128.

### Reading a byte: add the "on" places
To read a binary number, look at each bit. Wherever there's a **1**, add that place's value. Wherever there's a **0**, add nothing.

Example — read `0000 1010`:

```
 128   64   32   16    8    4    2    1
  0     0    0    0    1    0    1    0
                       ↓         ↓
                       8    +    2     =  10
```

So `00001010` in binary is **10**. Only the 8 place and the 2 place are "on," and 8 + 2 = 10.

### Why 255 is the biggest
What's the largest number a byte can hold? Turn **all 8 bits on**:

```
 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1  =  255
```

So one byte counts from **0** (all bits off) to **255** (all bits on) — that's **256 different values**. This is exactly why each number in an IP address goes from 0 to 255.

> **The big idea:** binary place values double (1, 2, 4, 8, 16, 32, 64, 128). To read a byte, add up the values where there's a 1. A full byte is 255.

💡 **Tip:** You'll use the row **128 64 32 16 8 4 2 1** constantly. Write it at the top of your scratch paper every time.

---

## 4. Real-world analogy

> **"Binary place values are like a set of doubling coins."**

Imagine you have exactly one coin of each of these values: **128, 64, 32, 16, 8, 4, 2, 1**. To make any amount from 0 to 255, you just choose which coins to use — each coin is either **in** (a 1) or **out** (a 0).

| Coins | Binary |
|-------|--------|
| Use the 8 and the 2 coins | `00001010` = 10 |
| Use every coin | `11111111` = 255 |
| Use no coins | `00000000` = 0 |
| Use the 128 and 64 coins | `11000000` = 192 |

You can make **any** number from 0 to 255 with these eight coins, and there's only **one** way to make each number. That's exactly how a byte works.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Byte** | bite | A group of 8 bits. |
| **Place value** | | What each bit position is worth (1, 2, 4, 8, 16, 32, 64, 128). |
| **Binary** | BY-nuh-ree | The two-digit (1/0) number system (from Lesson 03-01). |
| **Bit** | bit | A single 1 or 0 (from Lesson 03-01). |
| **Decimal** | DESS-ih-mul | Our everyday number system, using digits 0–9. |

---

## 6. ASCII diagram

```
   ONE BYTE = 8 BITS, each with a place value that DOUBLES:

     place:  128   64   32   16    8    4    2    1
     bit:     0     0    0    0    1    0    1    0
                                   ↓         ↓
   add the "on" places:           8    +    2      = 10

   All bits ON:  128+64+32+16+8+4+2+1 = 255  (the biggest byte)
   All bits OFF: 0
   So a byte counts 0 → 255  (256 values)
```

_Wherever there's a 1, add that place value. That's how you read binary._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-03-02-place-values-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a byte as 8 columns; the top row is the place values (128…1), the bottom row is an example bit pattern (e.g., 00001010), with the "on" columns highlighted and an arrow summing them to the decimal answer (10); a side note "all on = 255."
> **Key elements & labels:** the place-value row, the example bits, highlighted "on" columns, the addition, and the decimal result.
> **Color meaning:** "on" (1) columns highlighted green, "off" (0) columns gray — **and** each column shows its bit and value in text, so it reads in black and white.
> **Flow direction:** left (128) to right (1), then sum below.
> **Alt text (required):** "A byte drawn as eight columns with place values 128 down to 1 on top and an example bit pattern below; the columns with a 1 (the 8 and the 2) are highlighted and summed to 10, with a note that all bits on equals 255."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-03-02-place-value-card-01.jpg`
> A hand-written scratch card showing `128 64 32 16 8 4 2 1` with an example filled in. Alt text: "A hand-written card showing the binary place values with an example number worked out."
>
> **Screenshot 2** — `img-03-02-calculator-192-01.jpg`
> Windows Calculator (Programmer) showing 192 in DEC and 11000000 in BIN. Alt text: "Calculator in Programmer mode showing 192 in decimal and 11000000 in binary."
>
> **Photo 3** — `img-03-02-coins-01.jpg`
> Eight coins labeled 128, 64, 32, 16, 8, 4, 2, 1 with some selected. Alt text: "Eight coins labeled with the binary place values, with some selected to make a number."

---

## 9. Hands-on lab

**Goal:** build binary numbers using the eight place values, and check them in the Calculator.
**Why:** this is the exact method you'll use to read every IP address number.

**You will need**
- Your Windows laptop (Equipment tier **E1**) for checking.
- A pen and paper.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** Paper practice plus viewing numbers in Calculator. Nothing is changed.

### 9a. Step-by-step instructions

1. On paper, write the place-value row across the top: `128 64 32 16 8 4 2 1`.
2. **Read a byte:** under the row, write `00001010`. Circle the places with a 1 (the 8 and the 2). Add them: 8 + 2 = **10**.
3. **Check it:** open **Calculator** → **Programmer** → **BIN** → type `1010`. The DEC row should show **10**.
4. **Make a number:** you want **192**. Starting from the big end, use 128 (leaves 64), then 64 (leaves 0). So turn on 128 and 64: `11000000`.
5. **Check it:** in Calculator (Programmer → BIN), type `11000000`. DEC should show **192**.
6. **Prove the max:** type `11111111` in BIN. DEC shows **255**.

### 9b. Expected results

- `00001010` = **10** (8 + 2).
- `11000000` = **192** (128 + 64).
- `11111111` = **255** (all places added).
- ✅ **You did it if:** your paper answers matched the Calculator's DEC values.

### 9c. Verify it worked

1. Cover the Calculator. On paper, read `00010000`. (Answer: 16 — only the 16 place is on.)
2. Uncover and check in Calculator. Did you get 16?

### 9d. Reset / roll back

Close the Calculator. Keep your place-value card — you'll use it all course.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Writing place values left to right as 1→128 | Numbers come out backward | The **rightmost** place is 1; values grow to the **left** (…64, 128) |
| Adding places with a 0 | Wrong total | Only add a place when its bit is **1** |
| Thinking a byte can hold 256 | Off-by-one | A byte holds 0 **to** 255 — that's 256 *values*, but 255 is the biggest |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| My total doesn't match Calculator | A place value added by mistake | Recheck: add only the places with a 1 |
| I forget the place values | Not memorized yet | Start at 1 on the right and double left: 1,2,4,8,16,32,64,128 |
| Calculator won't take my binary | Not in BIN mode | In Programmer mode, click **BIN** first, then type |

---

## 12. Lesson summary

- **8 bits = 1 byte.**
- Binary **place values double**: 1, 2, 4, 8, 16, 32, 64, 128 (right to left).
- **Read a byte** by adding the place values wherever there's a 1.
- A full byte (all 1s) = **255**; a byte counts **0 to 255**.

**One-sentence recap:** A byte is 8 bits whose places double from 1 up to 128, and you read it by adding the values where there's a 1 — with a maximum of 255.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-03-02-fill-in-the-blank.md`
2. **Matching** — `wb-03-02-matching.md`
3. **Label the diagram** — `wb-03-02-label-the-diagram.md` (the place-value row)
4. **Short answer** — `wb-03-02-short-answer.md`
5. **Hands-on observation** — `wb-03-02-hands-on-observation.md` (build and check numbers)
6. **Vocabulary review** — `wb-03-02-vocabulary-review.md`
7. **Reflection** — `wb-03-02-reflection.md`

**Quick written warm-up (do this now):** Write the eight binary place values in order, biggest first.

____  ____  ____  ____  ____  ____  ____  ____

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-03-02-knowledge-check.md`.)

1. How many bits are in a byte? *(Objective: byte)*
   - A) 2
   - B) 4
   - C) 8
   - D) 10

2. Reading right to left, the first four binary place values are… *(Objective: place values)*
   - A) 1, 2, 4, 8
   - B) 1, 10, 100, 1000
   - C) 2, 4, 6, 8
   - D) 1, 3, 5, 7

3. What is the largest number one byte can hold? *(Objective: max byte)*
   - A) 100
   - B) 128
   - C) 255
   - D) 256

4. In binary, each place is worth how many times the one to its right? *(Objective: doubling)*
   - A) 2 times
   - B) 10 times
   - C) the same
   - D) 5 times

5. What is `00001010` in decimal? *(Objective: read a byte)*
   - A) 8
   - B) 10
   - C) 12
   - D) 1010

6. **True or false —** To read binary, you add the place values only where there is a 1. Explain your answer in one sentence. *(Objective: reading method)*

7. What is `11000000` in decimal? *(Objective: read a byte)*
   - A) 11
   - B) 128
   - C) 192
   - D) 255

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Byte &nbsp;&nbsp; ___ Place value &nbsp;&nbsp; ___ Decimal
   - A) what each bit position is worth &nbsp; B) 8 bits &nbsp; C) our everyday 0–9 number system

9. Fill in the blank: 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = ____________. *(Objective: max byte)*

10. **Scenario —** You need to write the number **160** as a byte. Which place values do you turn on, and what is the binary? *(Objective: build a number)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-03-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-03-02-bits-bytes-counting.md`. In brief:

- **Objective in one line:** learners can name the 8 place values and read a byte by summing the "on" places.
- **Common misconceptions:** writing place values backward; adding "0" places; the 255 vs. 256 off-by-one. Correct all with the coins analogy.
- **Pacing:** ~30 min. This is the highest-value on-ramp lesson for subnetting — invest here.
- **How CompTIA tests it:** every IP octet and subnet mask uses these exact place values.
- **Support idea:** hand out physical "coins" (128…1) to build numbers.
- **Extension idea:** build 172, 168, and 10 (common private-IP numbers) as a preview of Module 08.

---

## 17. Cheat sheet

> **Quick reference — Bytes & Place Values**
>
> - **8 bits = 1 byte.**
> - **Place values (memorize!):** `128  64  32  16  8  4  2  1` (right = 1, values double left).
> - **Read a byte:** add each place value where the bit is **1**.
> - **All 1s = 255** (128+64+32+16+8+4+2+1). A byte = **0 to 255**.
> - Examples: `00001010`=10 · `11000000`=192 · `11111111`=255.
> - Check any number: Calculator → Programmer → BIN.
>
> _(Full version: `resources/cheat-sheets/numbers-and-binary-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Byte** — A group of 8 bits.
- **Place value** — What each bit position is worth (1, 2, 4, 8, 16, 32, 64, 128).
- **Decimal** — Our everyday number system, using digits 0–9.

---

## 19. Homework

- **Practice:** On paper, write the byte for 8, 16, 64, and 200. Check each in Calculator (Programmer → DEC → read BIN).
- **Spaced review:** Redo the Lesson 03-01 flashcards for bits and binary.
- **Preview:** You've read binary by adding place values. Next lesson turns that into a fast, reliable method for converting *both* directions — binary to decimal and back.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I say the eight place values from memory yet? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I know that 8 bits = 1 byte.
- [ ] I can write the place values 128, 64, 32, 16, 8, 4, 2, 1.
- [ ] I can read a byte by adding the "on" place values.
- [ ] I know a byte's biggest value is 255.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: converting binary ↔ decimal quickly.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M03-L02** — "Bits, Bytes, and Counting in Binary" · Module 03 · Unit 1_
