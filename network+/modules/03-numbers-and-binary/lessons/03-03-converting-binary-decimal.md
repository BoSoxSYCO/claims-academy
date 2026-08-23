---
id: NA-M03-L03
module: 03
lesson: 03
title: "Converting Binary ↔ Decimal the Easy Way"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M03-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 03 · Lesson 03] Converting Binary ↔ Decimal the Easy Way

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~30 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 03-02 (bytes and the place values 128…1).

Last lesson you learned to *read* binary. Now you'll learn a simple, reliable method to convert **both directions** — binary to decimal *and* decimal to binary — using the same place-value chart every time. This is the core skill for subnetting.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Convert **binary → decimal** by adding the "on" place values.
- [ ] Convert **decimal → binary** using the **subtraction method**.
- [ ] Use the place-value chart to convert either direction, reliably.
- [ ] Check your answers in the Calculator.

---

## 2. Introduction — why this matters

Imagine you always carry a small ruler. No matter what you need to measure, you pull out the same ruler and use it the same way. Converting numbers is like that: you'll use **one chart** — the place values `128 64 32 16 8 4 2 1` — and a simple, repeatable method. No guessing, no memorizing long tables.

Why does this matter so much? Because an IP address like `192.168.1.24` is four numbers, and each one is a byte you'll often need to see in binary (and back again) when you plan networks and subnets. If you have a dependable method, subnetting becomes a calm, step-by-step task instead of a scary one.

The good news: you already did half of this last lesson. Reading binary (binary → decimal) is just adding place values. Today we add the **other** direction and turn both into a smooth routine.

🎯 **Exam tip:** On the exam you'll convert numbers under time pressure. A reliable method beats speed tricks — this lesson gives you the method the pros use.

---

## 3. Simple explanation

Always start by writing the chart:

```
 128   64   32   16    8    4    2    1
```

### Direction 1: Binary → Decimal (add the "on" places)
This is the reading skill from last lesson. Under each bit that is **1**, take its place value; add them up.

Example — `10101100`:
```
 128   64   32   16    8    4    2    1
  1     0    1    0    1    1    0    0
  ↓          ↓         ↓    ↓
 128    +   32    +    8  + 4            = 172
```
So `10101100` = **172**.

### Direction 2: Decimal → Binary (the subtraction method)
This is the new skill. Here's the routine — the same three steps for every place, left to right:

> **For each place value (starting at 128): "Does it fit in what's left?"**
> - **Yes** → write **1**, and **subtract** that value from your number.
> - **No** → write **0**, and move on.

Example — turn **200** into binary:

| Place | Does it fit in what's left? | Bit | What's left |
|------:|------------------------------|:---:|------------:|
| 128 | 128 ≤ 200? yes → subtract | **1** | 200 − 128 = 72 |
| 64 | 64 ≤ 72? yes → subtract | **1** | 72 − 64 = 8 |
| 32 | 32 ≤ 8? no | **0** | 8 |
| 16 | 16 ≤ 8? no | **0** | 8 |
| 8 | 8 ≤ 8? yes → subtract | **1** | 8 − 8 = 0 |
| 4 | 4 ≤ 0? no | **0** | 0 |
| 2 | no | **0** | 0 |
| 1 | no | **0** | 0 |

Reading the Bit column top to bottom: **200 = `11001000`**. When "what's left" reaches 0, all the rest are 0s.

> **The routine never changes:** write the chart, then go left to right asking "does it fit?" — subtract when yes.

💡 **Tip:** Always work from the **biggest** place (128) down to the smallest (1). Going big-to-small guarantees the right answer.

⚠️ **Watch out:** After you subtract, keep using the **new** "what's left" number for the next place — not the original.

---

## 4. Real-world analogy

> **"Decimal → binary is like making exact change with doubling coins."**

You have one coin of each value: **128, 64, 32, 16, 8, 4, 2, 1**. Someone owes you a number, say **200**. You hand over coins, always trying the **biggest** coin that still fits:

1. Can I use the 128 coin? Yes → 72 left.
2. Can I use the 64 coin? Yes → 8 left.
3. 32? No. 16? No.
4. Can I use the 8 coin? Yes → 0 left. Done.

Coins used = 128, 64, 8 → that's `11001000`. Making change big-coin-first always works, and so does the subtraction method.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Convert** | kun-VERT | To rewrite a number from one system to another (binary ↔ decimal). |
| **Subtraction method** | | The routine for decimal → binary: "does this place fit? subtract if yes." |
| **Remainder** | ree-MAIN-der | What's left over after you subtract a place value. |
| **Place value** | | What each bit position is worth (1…128) — from Lesson 03-02. |
| **Byte** | bite | A group of 8 bits — from Lesson 03-02. |

---

## 6. ASCII diagram

```
   DECIMAL → BINARY  (subtraction method)   Convert 168:

   chart:   128   64   32   16    8    4    2    1
            ───   ──   ──   ──   ──   ──   ──   ──
   fit?     yes   no   yes  no   yes  no   no   no
   bit:      1    0    1    0    1    0    0    0
   left:    168  40    40   8    8    0    0    0
          −128       −32       −8
                                          → 168 = 10101000

   BINARY → DECIMAL  (add the "on" places):  10101000 = 128+32+8 = 168
```

_Same chart, two directions. Add to go one way; subtract to go the other._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-03-03-conversion-method-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the decimal→binary subtraction method worked for 168 as a table (place, fit?, bit, remainder), plus a small binary→decimal addition example, side by side.
> **Key elements & labels:** the place-value header, the yes/no "fit?" row, the resulting bits, and the running remainder; a note "add one way, subtract the other."
> **Color meaning:** "yes/1" cells green, "no/0" cells gray — **and** each cell labeled with its value, so it reads in black and white.
> **Flow direction:** left-to-right through the chart.
> **Alt text (required):** "A worked example converting decimal 168 to binary using the subtraction method: for each place value from 128 to 1, a yes/no fit row, the resulting bit, and the running remainder, giving 10101000; beside it, adding 128+32+8 to convert back to 168."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-03-03-worked-example-01.jpg`
> A hand-written subtraction-method worksheet converting 200 to binary. Alt text: "A hand-written worksheet converting 200 to binary with the subtraction method."
>
> **Screenshot 2** — `img-03-03-calculator-check-01.jpg`
> Calculator (Programmer) confirming 200 = 11001000. Alt text: "Calculator in Programmer mode confirming 200 equals binary 11001000."
>
> **Photo 3** — `img-03-03-coins-change-01.jpg`
> Doubling coins (128…1) with the 128, 64, and 8 selected to make 200. Alt text: "Doubling coins with 128, 64, and 8 selected to make 200."

---

## 9. Hands-on lab

**Goal:** convert numbers both ways with the method, then check every answer in the Calculator.
**Why:** these are the exact conversions you'll do for IP addresses and subnet masks.

**You will need**
- Your Windows laptop (Equipment tier **E1**) for checking.
- Pen and paper.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** Paper practice plus viewing numbers in Calculator. Nothing is changed.

### 9a. Step-by-step instructions

1. Write the chart on paper: `128 64 32 16 8 4 2 1`.
2. **Decimal → binary:** convert **172**. Go left to right, subtracting when a place fits. (Hint: 128 fits, then 32, then 8, then 4.)
3. **Check it:** Calculator → **Programmer** → **DEC** → type `172`. Read the BIN row. It should match your answer.
4. **Binary → decimal:** convert `11000000`. Add the "on" places (128 + 64).
5. **Check it:** Calculator → **BIN** → type `11000000`. DEC should show 192.
6. Repeat the decimal → binary method for **168** and **10** to build speed.

### 9b. Expected results

- **172** → `10101100` (128 + 32 + 8 + 4).
- **11000000** → **192** (128 + 64).
- **168** → `10101000`; **10** → `00001010`.
- ✅ **You did it if:** all your paper answers matched the Calculator, in both directions.

### 9c. Verify it worked

1. Cover the Calculator. Convert **255** to binary in your head. (Answer: `11111111` — every place fits.)
2. Convert `00010100` to decimal. (Answer: 16 + 4 = 20.)
3. Uncover and check both.

### 9d. Reset / roll back

Close the Calculator. Keep your worked examples — they're great review before Module 08.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Using the original number after subtracting | Wrong bits | Always use the **new** "what's left" number for the next place |
| Starting from the small end (1) | Method breaks | Always start at **128** and go down |
| Forgetting to pad to 8 bits | Answer looks short | A byte has 8 bits — add leading 0s (e.g., `10` becomes `00001010`) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| My binary doesn't match Calculator | Subtracted from the wrong number | Redo, tracking "what's left" after each subtraction |
| I ended with leftover (not 0) | Missed a place that fit | Recheck each place from 128 down; every fit must be subtracted |
| My answer has 7 or 9 bits | Padding issue | Write exactly 8 bits; pad the left with 0s |

---

## 12. Lesson summary

- Write the chart first: **128 64 32 16 8 4 2 1**.
- **Binary → decimal:** add the place values where the bit is 1.
- **Decimal → binary:** for each place from 128 down, ask "does it fit?" — write 1 and subtract if yes, else 0.
- Keep using the **remainder** after each subtraction; pad answers to **8 bits**.

**One-sentence recap:** With the place-value chart, you add to turn binary into decimal and subtract (biggest-first) to turn decimal into binary — the same method every time.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-03-03-fill-in-the-blank.md`
2. **Matching** — `wb-03-03-matching.md`
3. **Label the diagram** — `wb-03-03-label-the-diagram.md` (the conversion steps)
4. **Short answer** — `wb-03-03-short-answer.md`
5. **Hands-on observation** — `wb-03-03-hands-on-observation.md` (convert & check)
6. **Vocabulary review** — `wb-03-03-vocabulary-review.md`
7. **Reflection** — `wb-03-03-reflection.md`

**Quick written warm-up (do this now):** For the number 130, does the 128 place fit? If yes, what's left after you subtract it?

Fits? ____  What's left? ____

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-03-03-knowledge-check.md`.)

1. To convert **decimal → binary**, you start at which place value? *(Objective: method)*
   - A) 1
   - B) 8
   - C) 128
   - D) 255

2. In the subtraction method, when a place value **fits**, you write… *(Objective: method)*
   - A) 0 and move on
   - B) 1 and subtract it
   - C) the place value itself
   - D) nothing

3. What is `11000000` in decimal? *(Objective: binary → decimal)*
   - A) 11
   - B) 128
   - C) 192
   - D) 255

4. What is **172** in binary? *(Objective: decimal → binary)*
   - A) `10101100`
   - B) `11001000`
   - C) `10001010`
   - D) `11110000`

5. After you subtract a place value, the next step uses… *(Objective: remainder)*
   - A) the original number again
   - B) the new "what's left" number
   - C) zero
   - D) 128

6. **True or false —** You should convert decimal to binary starting from the smallest place (1). Explain your answer in one sentence. *(Objective: big-first)*

7. What is `00010100` in decimal? *(Objective: binary → decimal)*
   - A) 14
   - B) 20
   - C) 24
   - D) 40

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Convert &nbsp;&nbsp; ___ Remainder &nbsp;&nbsp; ___ Subtraction method
   - A) what's left after subtracting &nbsp; B) rewrite a number in another system &nbsp; C) the decimal→binary routine

9. Fill in the blank: A byte should always be written with ____________ bits (pad with leading 0s). *(Objective: padding)*

10. **Scenario —** Convert **168** to binary using the method, showing which places you turn on. *(Objective: full conversion)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-03-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-03-03-converting.md`. In brief:

- **Objective in one line:** learners can convert both directions with the chart, reliably.
- **Common misconceptions:** reusing the original number after subtracting; starting small; not padding to 8 bits. Correct all with the coins analogy.
- **Pacing:** ~30 min. Drill both directions; accuracy first, speed later.
- **How CompTIA tests it:** every IP octet/subnet-mask conversion uses this method.
- **Support idea:** physical coins to "make change" for decimal→binary.
- **Extension idea:** convert the four octets of a real private IP (e.g., 192.168.1.10) as a Module-08 preview.

---

## 17. Cheat sheet

> **Quick reference — Converting Binary ↔ Decimal**
>
> - Always write the chart: `128 64 32 16 8 4 2 1`.
> - **Binary → decimal:** add the place values where the bit is **1**.
> - **Decimal → binary (subtraction method):** for each place from 128 down —
>   - fits? → write **1**, subtract it. not fit? → write **0**.
>   - keep using the **remainder**; pad the answer to **8 bits**.
> - Examples: `10101100`=172 · 200=`11001000` · 168=`10101000`.
> - Check any answer in Calculator → Programmer (DEC ↔ BIN).
>
> _(Full version: `resources/cheat-sheets/numbers-and-binary-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Convert** — To rewrite a number from one system to another (binary ↔ decimal).
- **Subtraction method** — The routine for decimal → binary: for each place from 128 down, write 1 and subtract if it fits, else 0.
- **Remainder** — What's left over after you subtract a place value.

---

## 19. Homework

- **Practice:** Convert these decimals to binary: 10, 192, 255, 100. Then convert these binaries to decimal: `11111111`, `10000001`, `01100100`. Check all in Calculator.
- **Spaced review:** Redo the Lesson 03-02 flashcards for the place values.
- **Preview:** Binary is long to write (`11111111`). There's a shorthand pros use called **hexadecimal**. The next lesson makes it simple.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which direction is easier for me — binary→decimal or decimal→binary? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can convert binary → decimal by adding the "on" places.
- [ ] I can convert decimal → binary with the subtraction method.
- [ ] I always start at 128 and use the remainder after each subtraction.
- [ ] I pad my answers to 8 bits.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: hexadecimal shorthand.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M03-L03** — "Converting Binary ↔ Decimal the Easy Way" · Module 03 · Unit 1_
