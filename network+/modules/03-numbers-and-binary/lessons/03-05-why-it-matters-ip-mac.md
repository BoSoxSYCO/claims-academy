---
id: NA-M03-L05
module: 03
lesson: 05
title: "Why This Matters for IP and MAC Addresses"
unit: 1
objective_ids: ["on-ramp", "1.0"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M03-L03", "NA-M03-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 03 · Lesson 05] Why This Matters for IP and MAC Addresses

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lessons 03-03 (converting) and 03-04 (hexadecimal).

You've learned binary and hex. Now here's the payoff: those two skills are exactly what network **addresses** are built from. This lesson connects the dots — and finishes the whole on-ramp. After this, real networking begins.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain that an **IPv4 address** is four bytes (four numbers, 0–255).
- [ ] Explain that a **MAC address** is six bytes, written in **hex**.
- [ ] See the binary behind your own IP address and the hex in your MAC.
- [ ] Explain why the Module 03 number skills matter for networking.

---

## 2. Introduction — why this matters

Every device on a network needs a way to be found — like a house needs an address so mail can reach it. Computers use **two** kinds of addresses, and *both* are just the numbers you already learned:

- An **IP address** (like `192.168.1.10`) is written in **decimal**, but underneath it's **binary** — four bytes.
- A **MAC address** (like `00:1A:2B:3C:4D:5E`) is written in **hex** — six bytes.

That's it. Nothing new to fear. The binary and hex from this module *are* how addresses work. You've been learning the alphabet; now you'll see the words.

Why does this matter so much? Because in Module 07 you'll read MAC addresses on your switch, and in Module 08 you'll split IP addresses into subnets. Both jobs are pure binary and hex. Finishing Module 03 means you're ready — the scary-looking addresses are now just numbers you can read.

🎯 **Exam tip:** The exam constantly shows IP and MAC addresses. Knowing IP = four decimal bytes and MAC = six hex bytes is the mental model that makes them easy.

---

## 3. Simple explanation

### IPv4 addresses: four bytes in decimal
An **IPv4 address** looks like this:

```
   192   .   168   .   1   .   10
```

The dots split it into **four parts**. Each part is one **byte** — a number from **0 to 255** (remember: a byte's max is 255). Each part is also called an **octet** ("oct" = eight, because it's 8 bits).

Underneath, each octet is really binary:

```
   192      168        1         10
 11000000 10101000 00000001 00001010
```

So the friendly `192.168.1.10` is really 32 bits — four bytes — of 1s and 0s. When you subnet later, you'll work with these bits directly. The place values you memorized (128 64 32 16 8 4 2 1) are exactly what you'll use.

### MAC addresses: six bytes in hex
A **MAC address** is a device's permanent hardware ID. It looks like this:

```
   00 : 1A : 2B : 3C : 4D : 5E
```

Six pairs, separated by colons or dashes. Each **pair of hex digits is one byte** (8 bits), so a MAC address is **six bytes** = 48 bits. Because it's hex, `1A` is one byte, `2B` is one byte, and so on.

### The big picture
| Address | Written in | How many bytes | Total bits | You'll use it in |
|---------|------------|:--------------:|:----------:|------------------|
| **IPv4** | decimal (dotted) | 4 | 32 | Module 08 (subnetting) |
| **MAC** | hexadecimal | 6 | 48 | Module 07 (switching) |

> **The big idea:** IP addresses are four **decimal** bytes (binary underneath); MAC addresses are six **hex** bytes. Everything you learned in Module 03 is exactly what addresses are made of.

💡 **Tip:** Whenever you see an address, ask two questions: "How is it written — decimal or hex?" and "How many bytes?" That tells you if it's an IP (4, decimal) or a MAC (6, hex).

---

## 4. Real-world analogy

> **"Numbers are the alphabet; addresses are the words."**

| Learning to read… | Learning networking… |
|-------------------|----------------------|
| First you learn **letters** | First you learn **binary and hex** (Module 03) |
| Then letters form **words** | Then bytes form **addresses** (IP and MAC) |
| Then words form **sentences** | Then addresses let devices **talk** (the rest of the course) |

You just finished learning the alphabet of networking. From here on, you're reading real words — and soon, whole conversations between devices.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **IPv4 address** | eye-pee-VERSION-four | A device's network address: four bytes (0–255) written with dots. |
| **Octet** | OK-tet | One byte (8 bits) of an IPv4 address — one of the four numbers. |
| **MAC address** | mack | A device's permanent hardware ID: six bytes written in hex. |
| **Byte** | bite | 8 bits — the building block of both address types. |
| **Bit** | bit | A single 1 or 0 — 32 of them make an IP; 48 make a MAC. |

---

## 6. ASCII diagram

```
   IPv4 ADDRESS  =  4 bytes (octets), written in DECIMAL
     192   .   168   .    1    .   10
   11000000 10101000 00000001 00001010     ← binary underneath (32 bits)

   MAC ADDRESS   =  6 bytes, written in HEX
     00 : 1A : 2B : 3C : 4D : 5E
     └┬┘  └┬┘  each pair of hex digits = 1 byte (8 bits)   (48 bits total)

   Same building blocks you learned: bits, bytes, place values, hex.
```

_An IP is four decimal bytes; a MAC is six hex bytes. Both are just Module 03 numbers._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-03-05-ip-mac-addresses-01.svg` (created and stored in this module's `assets/`)
> **Shows:** an IPv4 address `192.168.1.10` with each octet above its binary, and a MAC address `00:1A:2B:3C:4D:5E` with each hex pair labeled "1 byte"; a caption tying both back to Module 03.
> **Key elements & labels:** the four octets + their binary; the six MAC bytes; labels "decimal / 4 bytes / 32 bits" and "hex / 6 bytes / 48 bits."
> **Color meaning:** IP section blue, MAC section green — **and** each is labeled, so it reads in black and white.
> **Flow direction:** two stacked address examples.
> **Alt text (required):** "An IPv4 address 192.168.1.10 with each of its four octets shown above its 8-bit binary, labeled as four decimal bytes or 32 bits; and a MAC address 00:1A:2B:3C:4D:5E with each hex pair labeled as one byte, labeled as six hex bytes or 48 bits."

---

## 8. Suggested real photos (production brief)

> **Screenshot 1** — `img-03-05-ipconfig-ip-01.jpg`
> `ipconfig` output with the IPv4 Address highlighted and its four octets circled. Alt text: "ipconfig output with the IPv4 address highlighted and its four parts circled."
>
> **Screenshot 2** — `img-03-05-ipconfig-mac-01.jpg`
> `ipconfig /all` with the Physical Address (MAC), a hex value, highlighted. Alt text: "ipconfig /all output with the hex MAC address highlighted."
>
> **Photo 3** — `img-03-05-device-label-01.jpg`
> A sticker on the bottom of a router showing its MAC address in hex. Alt text: "A label on a router showing its MAC address printed in hexadecimal."

---

## 9. Hands-on lab

**Goal:** find your own IP and MAC, and prove they're the numbers you learned.
**Why:** this ties the whole module together with your real addresses.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- Pen and paper.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** Viewing your addresses only. Nothing is changed.

### 9a. Step-by-step instructions

1. Open **Command Prompt** and run `ipconfig`.
2. Find your **IPv4 Address**. Write down its four octets (e.g., `192 . 168 . 1 . 10`).
3. Pick **one** octet and convert it to binary on paper (use `128 64 32 16 8 4 2 1`). Check it in Calculator.
4. Now run `ipconfig /all` and find your **Physical Address** (MAC), like `00-1A-2B-3C-4D-5E`.
5. Count the pairs. There should be **six** — so six bytes.
6. Pick **one** hex pair and convert it to binary (two nibbles). Check it in Calculator (HEX → BIN).

### 9b. Expected results

- Your IPv4 address has **four** numbers, each 0–255.
- One octet converts cleanly to 8 bits (e.g., `192` = `11000000`).
- Your MAC has **six** hex pairs (six bytes).
- One hex pair converts to 8 bits (e.g., `1A` = `00011010`).
- ✅ **You did it if:** you saw four decimal octets and six hex bytes, and converted one of each.

### 9c. Verify it worked

1. Say it out loud: "My IP is four decimal bytes. My MAC is six hex bytes."
2. Show your converted octet and hex pair match the Calculator.

### 9d. Reset / roll back

Close the windows. Nothing was changed. Keep your notes — they preview Modules 07 and 08.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Mixing up IP and MAC | Wrong address type | IP = 4 decimal bytes (dots); MAC = 6 hex bytes (colons/dashes) |
| Thinking an octet can be over 255 | Impossible value | Each octet is one byte: 0–255 only |
| Reading a MAC pair as two separate numbers | Miscount | Each **pair** of hex digits is **one** byte |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No IPv4 Address shown | Not connected | Connect to Wi-Fi or a cable, then re-run `ipconfig` |
| No Physical Address | Used plain `ipconfig` | Run `ipconfig /all` (with `/all`) |
| My octet won't fit in 8 bits | It's over 255 (typo) | Re-read the octet; valid octets are 0–255 |

---

## 12. Lesson summary

- An **IPv4 address** is **four bytes** (octets), 0–255 each, written in decimal — binary underneath (32 bits).
- A **MAC address** is **six bytes**, written in **hex** (48 bits).
- Both are built from the **bits, bytes, place values, and hex** you learned this module.
- You're now ready to use these addresses in real networking.

**One-sentence recap:** IP addresses are four decimal bytes and MAC addresses are six hex bytes — the very numbers you learned in Module 03, now doing a real job.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-03-05-fill-in-the-blank.md`
2. **Matching** — `wb-03-05-matching.md`
3. **Label the diagram** — `wb-03-05-label-the-diagram.md` (IP octets & MAC bytes)
4. **Short answer** — `wb-03-05-short-answer.md`
5. **Hands-on observation** — `wb-03-05-hands-on-observation.md` (your real IP & MAC)
6. **Vocabulary review** — `wb-03-05-vocabulary-review.md`
7. **Reflection** — `wb-03-05-reflection.md`

**Quick written warm-up (do this now):** How many bytes are in an IPv4 address? How many in a MAC address?

IP: ____  MAC: ____

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-03-05-knowledge-check.md`.)

1. How many bytes are in an IPv4 address? *(Objective: IPv4)*
   - A) 2
   - B) 4
   - C) 6
   - D) 8

2. Each part (octet) of an IPv4 address can be a number from… *(Objective: octet range)*
   - A) 0 to 9
   - B) 0 to 100
   - C) 0 to 255
   - D) 1 to 1000

3. A MAC address is written in which number system? *(Objective: MAC)*
   - A) decimal
   - B) hexadecimal
   - C) binary only
   - D) English

4. How many bytes are in a MAC address? *(Objective: MAC)*
   - A) 4
   - B) 5
   - C) 6
   - D) 8

5. Another name for one byte of an IPv4 address is an… *(Objective: octet)*
   - A) octet
   - B) nibble
   - C) bit
   - D) pixel

6. **True or false —** An IPv4 octet can be the number 300. Explain your answer in one sentence. *(Objective: octet range)*

7. In the MAC address `00:1A:2B:...`, the pair `1A` represents… *(Objective: MAC bytes)*
   - A) two bytes
   - B) one byte
   - C) one bit
   - D) four bytes

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ IPv4 address &nbsp;&nbsp; ___ MAC address &nbsp;&nbsp; ___ Octet
   - A) six hex bytes &nbsp; B) one byte of an IP address &nbsp; C) four decimal bytes

9. Fill in the blank: An IPv4 address is ______ bits in total (4 bytes × 8). *(Objective: IP bits)*

10. **Scenario —** You see `192` as one octet of an IP address. Convert it to its 8-bit binary, and say why it can't be bigger than 255. *(Objective: octet ↔ binary)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-03-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-03-05-ip-mac.md`. In brief:

- **Objective in one line:** learners connect binary/hex to real IP (4 decimal bytes) and MAC (6 hex bytes) addresses.
- **Common misconceptions:** IP vs. MAC confusion; octet over 255; reading a MAC pair as two numbers. Correct all with the two-question tip.
- **Pacing:** ~25 min. This is a synthesis/bridge lesson — keep it light; deep addressing is Modules 07–08.
- **How CompTIA tests it:** every address on the exam is one of these two forms.
- **Support idea:** have learners label their own ipconfig output (IP octets, MAC bytes).
- **Extension idea:** convert a full IP (all four octets) to binary as a Module-08 warm-up.

---

## 17. Cheat sheet

> **Quick reference — Addresses = Module 03 Numbers**
>
> | Address | Written in | Bytes | Bits | Example |
> |---------|------------|:-----:|:----:|---------|
> | **IPv4** | decimal (dots) | 4 | 32 | `192.168.1.10` |
> | **MAC** | hexadecimal | 6 | 48 | `00:1A:2B:3C:4D:5E` |
>
> - Each IP part is an **octet** = one byte = **0–255**.
> - Each MAC **pair** of hex digits = one byte.
> - Two questions for any address: **decimal or hex? how many bytes?**
> - Find yours: `ipconfig` (IP) and `ipconfig /all` (MAC).
>
> _(Full version: `resources/cheat-sheets/numbers-and-binary-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **IPv4 address** — A device's network address: four bytes (0–255) written with dots.
- **Octet** — One byte (8 bits) of an IPv4 address — one of the four numbers.
- *(Byte, bit, hexadecimal, and MAC address are already defined from earlier lessons.)*

---

## 19. Homework

- **Practice:** Convert your full IPv4 address — all four octets — to binary. Check each in Calculator.
- **Spaced review:** This is the end of Module 03. Redo the flashcards from Lessons 03-01 through 03-04.
- **Preview:** You now understand computers and the numbers behind addresses. Next comes the big question that starts real networking: **why connect computers at all?** That's Module 04 — and Unit 2.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Do IP and MAC addresses feel understandable now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain that an IPv4 address is four decimal bytes (octets).
- [ ] I can explain that a MAC address is six hex bytes.
- [ ] I found my own IP and MAC and converted part of each.
- [ ] I understand why Module 03's number skills matter for networking.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I'm ready for Module 04 — real networking.

🎉 **That's the end of Module 03 — and the whole on-ramp (Unit 1)!** You've gone from "I don't know what RAM is" to reading the binary and hex behind real network addresses. Next stop: **Module 04, Networking Fundamentals — the start of Unit 2.**

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M03-L05** — "Why This Matters for IP and MAC Addresses" · Module 03 · Unit 1_
