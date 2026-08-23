---
id: NA-M03-L04
module: 03
lesson: 04
title: "Hexadecimal — Shorthand for Computers"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M03-L02", "NA-M03-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 03 · Lesson 04] Hexadecimal — Shorthand for Computers

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lessons 03-02 and 03-03 (bytes, place values, converting).

Binary is honest but *long*. Writing `11001010` takes eight characters. Pros use a shorthand called **hexadecimal** that says the same thing in just **two** characters. Once you see the trick, it's easy — and you'll spot hex all over networking.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what **hexadecimal (hex)** is and why it exists.
- [ ] Explain that **one hex digit = 4 bits** (a **nibble**).
- [ ] Convert between hex and binary using 4-bit groups.
- [ ] Recognize where hex shows up (MAC addresses, colors, IPv6).

---

## 2. Introduction — why this matters

Think about how we shorten long things every day. "Doctor" becomes "Dr." A long phone number gets grouped: `555-0142` is easier to read than `5550142`. Shorthand keeps the same meaning but takes less space and is easier on the eyes.

Binary has the same problem: it's correct but long and easy to miscount. So computers borrow a shorthand called **hexadecimal**. It packs every **four bits** into a **single symbol**. That turns an 8-character byte like `11001010` into just `CA` — same value, far shorter.

Why care? Because you'll meet hex constantly in networking: a device's **MAC address** (its hardware ID) is written in hex, so are website **colors**, and so are **IPv6** addresses. If you can read hex, none of those look scary. And it all rests on the binary you already know.

🎯 **Exam tip:** MAC addresses on the Network+ exam are always shown in hex (like `00:1A:2B:3C:4D:5E`). Knowing that each pair of hex digits is one byte makes them simple to read.

---

## 3. Simple explanation

### Why hex exists
Group binary into chunks of **4 bits**. Four bits have 16 possible patterns — from `0000` (0) up to `1111` (15). To give each pattern a single symbol, we need 16 symbols. But we only have ten digits (0–9). So hex **borrows six letters** — **A, B, C, D, E, F** — to stand for 10, 11, 12, 13, 14, and 15.

That's the whole idea: **hexadecimal is base 16.** Its "digits" are:

```
0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15   ← what each one means
```

### One hex digit = 4 bits (a nibble)
A group of **4 bits** is called a **nibble** (half of a byte — cute, right?). Each nibble matches exactly one hex digit. Use the small place values `8 4 2 1` for a nibble:

```
 bits:  1 0 1 0
 value: 8 . 2 .   → 8 + 2 = 10 → hex A
```

### Convert binary ↔ hex (split into nibbles)
To turn a byte into hex, **split it into two nibbles** and convert each:

```
 11001010
 → 1100  1010
 →  C     A
 → hex CA
```

To go from hex back to binary, **expand each hex digit into 4 bits**:

```
 CA
 → C = 1100   A = 1010
 → 11001010
```

Two hex digits always make one byte. That's why a MAC address like `00:1A:2B:3C:4D:5E` is really six bytes, written as six pairs.

> **The big idea:** hex is shorthand for binary. **Each hex digit = 4 bits.** Two hex digits = one byte.

💡 **Tip:** You'll often see hex written with `0x` in front (like `0xCA`) or as pairs separated by colons or dashes. The `0x` just means "this is hex."

---

## 4. Real-world analogy

> **"Hex is like abbreviating a long word."**

| Everyday shorthand… | Hexadecimal… |
|---------------------|--------------|
| Writing "Dr." for "Doctor" | Writing `A` for `1010` |
| Grouping a phone number with dashes | Grouping bits into nibbles |
| Fewer characters, same meaning | `CA` means the same as `11001010` |
| A short code everyone agrees on | 0–9 and A–F as the 16 symbols |

Just like abbreviations save space without changing the meaning, hex says exactly what binary says — in a quarter of the characters.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Hexadecimal (hex)** | HEX-uh-DESS-ih-mul | A base-16 number system using 0–9 and A–F. |
| **Base 16** | | A counting system with 16 symbols (hex). |
| **Nibble** | NIB-ul | A group of 4 bits; half of a byte. |
| **Byte** | bite | 8 bits = two nibbles = two hex digits. |
| **MAC address** | mack | A device's hardware ID, written in hex (full details in Module 07). |

---

## 6. ASCII diagram

```
   ONE BYTE  →  TWO NIBBLES  →  TWO HEX DIGITS

     1 1 0 0   1 0 1 0
     └──┬──┘   └──┬──┘
      nibble    nibble
     8+4=12     8+2=10
       │          │
       C          A          →   hex  CA   (0xCA)

   Hex digits:  0 1 2 3 4 5 6 7 8 9 A  B  C  D  E  F
   Values:      0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
```

_Split a byte into two 4-bit nibbles; each nibble is one hex digit. Two hex digits = one byte._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-03-04-byte-to-hex-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a byte `11001010` split into two nibbles (1100 and 1010), each with its 8-4-2-1 sum, mapping to hex `C` and `A`, forming `CA`; plus the 0–F table.
> **Key elements & labels:** the byte, the split, each nibble's value, the resulting hex digits, and the hex-to-value table.
> **Color meaning:** left nibble blue, right nibble green — **and** each nibble is boxed and labeled, so it reads in black and white.
> **Flow direction:** byte → nibbles → hex digits (left to right).
> **Alt text (required):** "A byte 11001010 split into two nibbles, 1100 and 1010; 1100 equals 12 which is hex C, and 1010 equals 10 which is hex A, giving hex CA; with a table showing hex digits 0 through F and their values 0 through 15."

---

## 8. Suggested real photos (production brief)

> **Screenshot 1** — `img-03-04-calculator-hex-01.jpg`
> Calculator (Programmer) showing a number in DEC, BIN, and HEX at once. Alt text: "Calculator in Programmer mode showing a number in decimal, binary, and hexadecimal."
>
> **Screenshot 2** — `img-03-04-mac-address-01.jpg`
> `ipconfig /all` output with the Physical Address (MAC) line — in hex — highlighted. Alt text: "The ipconfig /all output with the Physical Address, a hex MAC address, highlighted."
>
> **Photo 3** — `img-03-04-color-hex-01.jpg`
> A color picker showing a hex color code like `#1E40AF`. Alt text: "A color picker showing a hexadecimal color code."

---

## 9. Hands-on lab

**Goal:** convert between hex and binary, and spot hex in a real MAC address.
**Why:** you'll read hex MAC addresses on your switch and router very soon.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- Pen and paper.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** Viewing numbers and network info only. Nothing is changed.

### 9a. Step-by-step instructions

1. Open **Calculator** → **Programmer** mode. Notice the four rows: **HEX**, **DEC**, **OCT**, **BIN**.
2. Click **DEC** and type `202`. Read the **BIN** row (`11001010`) and the **HEX** row (`CA`).
3. On paper, split `11001010` into nibbles: `1100` and `1010`. Convert each (C and A). Confirm it matches the HEX row.
4. Click **HEX** and type `FF`. Read **DEC** (255) and **BIN** (`11111111`). So `FF` is the biggest byte.
5. Now see hex in the real world. Open **Command Prompt** and run:
   ```text
   ipconfig /all
   ```
6. Find the **Physical Address** line (your MAC address), like `00-1A-2B-3C-4D-5E`. Those are **hex** pairs — six bytes.

### 9b. Expected results

- `202` = BIN `11001010` = HEX `CA`.
- `FF` = DEC `255` = BIN `11111111`.
- Your **Physical Address** is six pairs of hex digits.
  ```text
  Physical Address. . . . . . . . . : 00-1A-2B-3C-4D-5E
  ```
- ✅ **You did it if:** your paper nibble conversion matched the Calculator, and you found a hex MAC address.

### 9c. Verify it worked

1. On paper, convert hex `2B` to binary. (Answer: 2 = `0010`, B = `1011` → `00101011`.)
2. Check it in Calculator (HEX → type `2B` → read BIN).

### 9d. Reset / roll back

Close the Calculator and Command Prompt. Nothing was changed.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking A–F are units of measure | Confusion | A–F are just symbols for 10–15 |
| Splitting a byte into the wrong-size groups | Wrong hex | Always split into **4-bit** nibbles |
| Reading `0x` as part of the number | Miscount | `0x` only means "this is hex" — ignore it when converting |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No HEX row in Calculator | Not in Programmer mode | Open the ☰ menu → **Programmer** |
| My hex doesn't match | Nibble split or A–F value | Recheck: left 4 bits and right 4 bits; A=10 … F=15 |
| No Physical Address shown | Wrong command | Use `ipconfig /all` (with `/all`), not plain `ipconfig` |

---

## 12. Lesson summary

- **Hexadecimal (hex)** is base 16: digits **0–9 and A–F** (A–F = 10–15).
- Hex exists to **shorten binary**: one hex digit = **4 bits** (a **nibble**).
- **Two hex digits = one byte.** Split a byte into two nibbles to convert.
- Hex is everywhere in networking: **MAC addresses**, colors, and IPv6.

**One-sentence recap:** Hexadecimal is a short way to write binary, where each hex digit stands for four bits — so a whole byte fits in just two characters.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-03-04-fill-in-the-blank.md`
2. **Matching** — `wb-03-04-matching.md`
3. **Label the diagram** — `wb-03-04-label-the-diagram.md` (byte → nibbles → hex)
4. **Short answer** — `wb-03-04-short-answer.md`
5. **Hands-on observation** — `wb-03-04-hands-on-observation.md` (convert & find a MAC)
6. **Vocabulary review** — `wb-03-04-vocabulary-review.md`
7. **Reflection** — `wb-03-04-reflection.md`

**Quick written warm-up (do this now):** What decimal value does the hex digit **F** stand for?

F = ____

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-03-04-knowledge-check.md`.)

1. Hexadecimal uses how many symbols? *(Objective: base 16)*
   - A) 2
   - B) 8
   - C) 10
   - D) 16

2. In hex, the letter **A** stands for the decimal value… *(Objective: A–F)*
   - A) 1
   - B) 10
   - C) 11
   - D) 15

3. One hex digit equals how many bits? *(Objective: nibble)*
   - A) 1
   - B) 2
   - C) 4
   - D) 8

4. A group of 4 bits is called a… *(Objective: nibble)*
   - A) byte
   - B) nibble
   - C) bit
   - D) word

5. What is the binary `1010` as a hex digit? *(Objective: binary → hex)*
   - A) 8
   - B) A
   - C) C
   - D) F

6. **True or false —** Two hex digits make one byte. Explain your answer in one sentence. *(Objective: byte)*

7. What is hex **FF** in decimal? *(Objective: hex → decimal)*
   - A) 15
   - B) 128
   - C) 255
   - D) 256

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Nibble &nbsp;&nbsp; ___ Hexadecimal &nbsp;&nbsp; ___ Byte
   - A) base-16 number system &nbsp; B) 8 bits &nbsp; C) 4 bits

9. Fill in the blank: To convert a byte to hex, split it into two ____________. *(Objective: nibbles)*

10. **Scenario —** You see a MAC address `2B:F0:...` on your switch. Convert the first pair `2B` to binary, showing the two nibbles. *(Objective: hex → binary)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-03-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-03-04-hexadecimal.md`. In brief:

- **Objective in one line:** learners can convert hex ↔ binary via nibbles and know where hex appears.
- **Common misconceptions:** A–F as measures; wrong-size groups; the `0x` prefix. Correct all with the nibble split.
- **Pacing:** ~25 min. The nibble idea (1 hex digit = 4 bits) is the whole lesson.
- **How CompTIA tests it:** MAC addresses (and IPv6) are hex; reading them is expected.
- **Support idea:** give a printed 0–F ↔ 4-bit table to reference while converting.
- **Extension idea:** convert all six bytes of their own MAC address to binary.

---

## 17. Cheat sheet

> **Quick reference — Hexadecimal**
>
> - **Hex = base 16.** Digits: `0 1 2 3 4 5 6 7 8 9 A B C D E F` (A–F = 10–15).
> - **One hex digit = 4 bits (a nibble).** **Two hex digits = one byte.**
> - **Byte → hex:** split into two nibbles; convert each with `8 4 2 1`.
> - **Hex → binary:** expand each digit to 4 bits.
> - Examples: `1010`=A · `1100`=C · `11001010`=`CA` · `FF`=255.
> - Seen in: **MAC addresses** (`00:1A:2B:...`), colors (`#1E40AF`), IPv6.
> - Check in Calculator → Programmer (HEX/DEC/BIN rows).
>
> _(Full version: `resources/cheat-sheets/numbers-and-binary-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Hexadecimal (hex)** — A base-16 number system using digits 0–9 and A–F.
- **Base 16** — A counting system with 16 symbols (hexadecimal).
- **Nibble** — A group of 4 bits; half of a byte.
- **MAC address** — A device's hardware ID, written in hex (full details in Module 07).

---

## 19. Homework

- **Practice:** Convert these to binary: hex `A`, `F`, `3C`, `FF`. Convert these to hex: binary `0001`, `1111`, `10110010`. Check all in Calculator.
- **Spaced review:** Redo the Lesson 03-03 flashcards for converting binary ↔ decimal.
- **Preview:** You've learned binary and hex. The final lesson of Module 03 shows exactly where they live in real network addresses — IP and MAC.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Does hex feel like shorthand now, or still strange? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what hexadecimal is and why it exists.
- [ ] I know one hex digit = 4 bits (a nibble).
- [ ] I can convert a byte to two hex digits and back.
- [ ] I found a hex MAC address on my own laptop.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: binary and hex in real addresses.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M03-L04** — "Hexadecimal — Shorthand for Computers" · Module 03 · Unit 1_
