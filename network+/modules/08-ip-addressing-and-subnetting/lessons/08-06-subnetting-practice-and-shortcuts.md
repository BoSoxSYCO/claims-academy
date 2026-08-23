---
id: NA-M08-L06
module: 08
lesson: 06
title: "Subnetting Practice and Shortcuts"
unit: 5
objective_ids: ["1.7"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M08-L05"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 08 · Lesson 06] Subnetting Practice and Shortcuts

> **Unit:** Unit 5 — IP Addressing & Subnetting · **Time:** ~30 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-05 (the beginner subnetting method).

You can subnet the careful way. Now let's get **fast**. This lesson adds a few shortcuts — the powers of 2, a "round down" trick, and quick sizing — then drills them with practice. Speed comes from patterns, not magic.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Recall the **powers of 2** up to 256 without counting.
- [ ] Use the **round-down (magic number)** trick to find any address's subnet fast.
- [ ] Pick a mask from **hosts needed** or **subnets needed**.
- [ ] Solve subnet problems quickly and check your work.

---

## 2. Introduction — why this matters

Think about times tables. Once you *know* 7 × 8 = 56, you don't add seven eights — you just recall it. Speed comes from patterns already in your head.

Subnetting is the same. The careful 5-step method (Lesson 08-05) always works, but on the exam you have limited time. A few memorized patterns — the **powers of 2** and the **block-size trick** — turn a two-minute problem into a ten-second one. Same answers, far faster.

This lesson is mostly **practice**. We'll learn three shortcuts, then work real problems together. Do the reps; the patterns stick.

🎯 **Exam tip:** Network+ subnetting questions are timed pressure. The round-down trick to find a subnet, and the powers of 2 for host counts, are the two you'll use most.

🔧 **Lab link:** Faster subnetting means you can plan **Lab C** (your home subnets) in minutes, not an evening.

---

## 3. Simple explanation

### Shortcut 1 — Memorize the powers of 2
These appear everywhere in subnetting (subnet counts, host counts, block sizes):

| 2^n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|-----|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| value | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 |

Say them until they're automatic: **1, 2, 4, 8, 16, 32, 64, 128, 256.**

The last-octet mask values are just 256 minus each: **128, 192, 224, 240, 248, 252, 254, 255** — the slashes `/25` through `/32`.

### Shortcut 2 — The round-down (magic number) trick
To find **which subnet** any address is in, you don't list them all. The block size is the **magic number** — round the interesting octet **down** to the nearest multiple of it.

**Example:** which subnet is `192.168.1.100/26` in?
- Block size = 256 − 192 = **64** (the magic number).
- Round **100** down to the nearest multiple of 64 → **64**.
- **Subnet = 192.168.1.64.** Broadcast = 64 + 64 − 1 = **127**. Host range **.65–.126**.
- So `.100` is a **usable host** in the `.64` subnet. Done in seconds.

**Another:** `10.1.1.50/28`?
- Block = 256 − 240 = **16**. Round **50** down to a multiple of 16 → **48**.
- **Subnet = 10.1.1.48.** Broadcast = 48 + 15 = **63**. Hosts **.49–.62**.

### Shortcut 3 — Size a mask from what you need
**Need a number of hosts?** Find the smallest host-bit count where **2^bits − 2 ≥ hosts needed**.
- Need **50** hosts → 2^6 − 2 = 62 ≥ 50 (2^5 − 2 = 30 is too small) → **6 host bits** → **/26**.

**Need a number of subnets?** Borrow bits until **2^borrowed ≥ subnets needed**.
- Need **5** subnets from a /24 → 2^3 = 8 ≥ 5 (2^2 = 4 is too few) → borrow **3** → **/27**.

### Worked practice set

| Address / need | Block | Answer |
|----------------|:-----:|--------|
| Subnet of `172.16.5.200/27`? | 32 | 200 → down to 192 → **172.16.5.192** (bcast .223) |
| Broadcast of `192.168.4.10/29`? | 8 | 10 → down to 8 → net .8, **bcast .15** |
| Mask for **300** hosts? | — | 2^9 − 2 = 510 ≥ 300 → 9 host bits → **/23** |
| Mask for **10** subnets from /24? | — | 2^4 = 16 ≥ 10 → borrow 4 → **/28** |

> **The big idea:** Speed comes from three patterns. **Powers of 2** (1→256) give subnet and host counts. The **magic number** (block size) lets you **round down** the interesting octet to find any subnet instantly. And you **size a mask** by matching 2^host − 2 to hosts needed, or 2^borrowed to subnets needed.

💡 **Tip:** For usable hosts, a fast recall table: `/30`→2, `/29`→6, `/28`→14, `/27`→30, `/26`→62, `/25`→126, `/24`→254.

⚠️ **Watch out:** "Round down" means to the nearest **multiple of the block size**, not just any lower number. For block 64, 100 rounds to 64 — not to 50 or 96.

---

## 4. Real-world analogy

> **"Shortcuts are like knowing your times tables — same answer, no counting."**

| Arithmetic | Subnetting |
|------------|------------|
| Recall 7×8 = 56 | Recall 2^6 = 64 |
| Round money to the nearest $5 | Round the octet to the nearest block |
| Estimate before you compute | Size the mask from what you need |
| Practice makes it automatic | Reps make subnetting fast |

You still *could* count on your fingers — but you don't need to once the pattern is memorized.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Powers of 2** | | The doubling sequence 1, 2, 4, 8, 16, 32, 64, 128, 256 — used to count subnets and hosts. |
| **Magic number** | | A nickname for the block size, used to quickly find which subnet an address is in. |

---

## 6. ASCII diagram

```
   THE THREE SHORTCUTS

   1) POWERS OF 2:   1  2  4  8  16  32  64  128  256
      last-octet masks (256−): 128 192 224 240 248 252 254 255  (/25../32)

   2) ROUND DOWN (magic number = block size):
      192.168.1.100 /26  → block 64 → 100 rounds down to 64
      → subnet 192.168.1.64 , broadcast .127 , hosts .65–.126

   3) SIZE THE MASK:
      need 50 hosts  → 2^6−2 = 62 ≥ 50 → /26
      need 5 subnets → 2^3   = 8  ≥ 5  → borrow 3 → /27
```

_Powers of 2 for counts · round down to find a subnet · size the mask from what you need._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-08-06-shortcuts-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the three shortcuts side by side — a powers-of-2 strip, a round-down number line locating 100 inside the .64 block of a /26, and a "size the mask" mini-flow for hosts and subnets.
> **Key elements & labels:** powers of 2 (1–256); block size 64; 100 → 64 (round down); broadcast 127; 2^6−2=62 → /26; 2^3=8 → /27.
> **Color meaning:** the located address and its subnet block are labeled in text (round-down result), not color alone.
> **Flow direction:** left-to-right; number line 0→255 with the .64 block highlighted.
> **Alt text (required):** "Three subnetting shortcuts. First, a powers-of-2 strip: 1, 2, 4, 8, 16, 32, 64, 128, 256. Second, a number line from 0 to 255 for a /26 with block size 64; the address ending in 100 is rounded down to the 64 block, giving subnet .64, broadcast .127, hosts .65 to .126. Third, a sizing flow: 50 hosts needs 2 to the 6th minus 2 equals 62, so /26; five subnets needs 2 to the 3rd equals 8, so borrow 3 bits for /27."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-08-06-practice-sheet-01.jpg`
> A timed subnet practice sheet with answers. Alt text: "A timed subnetting practice sheet showing worked answers using the round-down trick."
>
> **Photo 2** — `img-08-06-powers-of-two-card-01.jpg`
> A small powers-of-2 study card. Alt text: "A study card listing the powers of 2 from 1 to 256 for quick subnetting recall."

---

## 9. Hands-on lab

**Goal:** run a timed practice set with the shortcuts, then find your own IP's subnet by rounding down.
**Why:** speed only comes from reps — this lab is the reps.

**You will need**
- Pencil, paper, a timer (phone). Your Windows laptop (Equipment tier **E1**). Estimated time: 15 min.

⚠️ **Before you start (safety):** Paper drills plus a read-only `ipconfig`. Nothing changes.

### 9a. Step-by-step instructions

1. Write the powers of 2 (1–256) from memory. Check them.
2. Set a **2-minute** timer. Solve these five with the round-down trick:
   - a) Subnet of `192.168.1.130/26`?
   - b) Broadcast of `10.0.0.70/27`?
   - c) Host range of `172.16.0.20/28`?
   - d) Mask for **100** hosts?
   - e) Mask for **6** subnets from a /24?
3. Check your answers against Section 9b.
4. Run `ipconfig`. Using **your** mask's block size, round your IP's interesting octet **down** to find your own subnet.

### 9b. Expected results

- a) block 64 → 130 → **192.168.1.128** (bcast .191)
- b) block 32 → 70 → net .64, **broadcast 10.0.0.95**
- c) block 16 → 20 → net .16, hosts **.17–.30** (bcast .31)
- d) 2^7 − 2 = 126 ≥ 100 → **/25**
- e) 2^3 = 8 ≥ 6 → borrow 3 → **/27**
- ✅ **You did it if:** you got all five and located your own subnet by rounding down.

### 9c. Verify it worked

1. Re-check each broadcast is one below the next block's start.
2. Time yourself again — aim to beat your first run. Faster each round is the goal.

### 9d. Reset / roll back

Paper and a read-only command only — nothing on any device changed.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Rounding to any lower number | Wrong subnet | Round to the nearest **multiple of the block size** |
| Forgetting −2 on host sizing | Mask too small | Usable hosts = 2^bits − **2** |
| Confusing hosts vs. subnets sizing | Wrong mask | Hosts → 2^bits−2; subnets → 2^borrowed |
| Slow because not memorized | Runs out of time | Drill the powers of 2 until automatic |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Subnet answer feels wrong | Wrong block size | Recompute 256 − mask octet, then round down |
| Host count off by 2 | Missed the −2 | Subtract network + broadcast |
| Can't size the mask | Mixed up the two rules | Hosts use 2^bits−2; subnets use 2^borrowed |
| Still slow | Not enough reps | Redo the timed set daily for a week |

---

## 12. Lesson summary

- Memorize the **powers of 2**: 1, 2, 4, 8, 16, 32, 64, 128, 256.
- **Round down** the interesting octet to the nearest **block size** (magic number) to find any subnet fast.
- **Size a mask**: hosts → smallest bits with **2^bits − 2 ≥ needed**; subnets → **2^borrowed ≥ needed**.
- Same answers as the long method — just faster with practice.

**One-sentence recap:** Subnet fast by recalling the powers of 2, rounding the interesting octet down to the nearest block size to find any subnet, and sizing masks from the hosts or subnets you need.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-08-06-fill-in-the-blank.md`
2. **Matching** — `wb-08-06-matching.md`
3. **Label the diagram** — `wb-08-06-label-the-diagram.md` (round-down line)
4. **Short answer** — `wb-08-06-short-answer.md`
5. **Hands-on observation** — `wb-08-06-hands-on-observation.md` (timed drill)
6. **Vocabulary review** — `wb-08-06-vocabulary-review.md`
7. **Reflection** — `wb-08-06-reflection.md`

**Quick written warm-up (do this now):** What is the block size of a /27? Round 200 down to its /27 subnet.

Block: ____________  Subnet last octet: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-08-06-knowledge-check.md`.)

1. What is 2^6? *(Objective: powers of 2)*
   - A) 32
   - B) 62
   - C) 64
   - D) 128

2. The "magic number" for subnetting is another name for the… *(Objective: magic number)*
   - A) broadcast address
   - B) block size
   - C) gateway
   - D) prefix length

3. Which subnet is `192.168.1.100/26` in? *(Objective: round down)*
   - A) 192.168.1.0
   - B) 192.168.1.64
   - C) 192.168.1.96
   - D) 192.168.1.128

4. To find a subnet fast, you round the interesting octet… *(Objective: round down)*
   - A) up to the next block
   - B) down to the nearest multiple of the block size
   - C) to the nearest 100
   - D) to zero

5. You need **100** hosts on a subnet. Which mask? *(Objective: size)*
   - A) /24
   - B) /25
   - C) /26
   - D) /27

6. **True or false —** To find which subnet an address is in, you must list every subnet first. Explain in one sentence. *(Objective: round down)*

7. You need **6** subnets from a /24. How many bits do you borrow? *(Objective: size)*
   - A) 2
   - B) 3
   - C) 4
   - D) 6

8. **Matching —** write the letter for each usable-host count. *(Objective: recall)*
   - ___ /30 &nbsp;&nbsp; ___ /29 &nbsp;&nbsp; ___ /28
   - A) 14 &nbsp; B) 2 &nbsp; C) 6

9. Fill in the blank: The powers of 2 up to 256 are 1, 2, 4, 8, 16, 32, 64, ____________, 256. *(Objective: powers of 2)*

10. **Scenario —** A host is `10.5.5.200/27`. Find its subnet, broadcast, and whether `.200` is usable. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-08-06-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-08-06-subnetting-practice.md`. In brief:

- **Objective in one line:** learners subnet quickly using powers of 2, the round-down trick, and mask sizing.
- **Common misconceptions:** round to any lower number; forget −2; swap the hosts/subnets sizing rules. Correct all three.
- **Pacing:** ~30 min, mostly drills. Timed reps beat more theory here.
- **How CompTIA tests it:** timed subnet/broadcast/host-range/host-count and mask-sizing questions; the round-down trick is the fastest path.
- **Accuracy note:** every worked answer is verified (see the QA report's math check). No fabricated device output; `ipconfig` used read-only.
- **Extension idea:** VLSM — sizing different subnets to different host needs — for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Subnetting shortcuts**
>
> - **Powers of 2:** 1, 2, 4, 8, 16, 32, 64, 128, 256.
> - **Round down (magic number):** round the interesting octet down to the nearest **block size** → that's the subnet. Broadcast = next block − 1.
> - **Size a mask:** hosts → smallest bits with **2^bits − 2 ≥ needed**; subnets → **2^borrowed ≥ needed**.
> - **Usable hosts:** /30→2 · /29→6 · /28→14 · /27→30 · /26→62 · /25→126 · /24→254.
> - **Last-octet masks:** /25=128 · /26=192 · /27=224 · /28=240 · /29=248 · /30=252.
>
> _(Full version: `resources/cheat-sheets/ip-addressing-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Powers of 2** — The doubling sequence 1, 2, 4, 8, 16, 32, 64, 128, 256 — used to count subnets and hosts.
- **Magic number** — A nickname for the block size, used to quickly find which subnet an address is in.

---

## 19. Homework

- **Practice:** Do 15 timed round-down problems; aim under 15 seconds each.
- **Spaced review:** Redo the Lesson 08-05 subnet-by-hand lab and compare the speed.
- **Preview:** Next lesson we meet **IPv6** — why it exists and how to read it.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I round down to find a subnet fast now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can recall the powers of 2 up to 256.
- [ ] I can round down to find any address's subnet.
- [ ] I can size a mask from hosts needed or subnets needed.
- [ ] I solved a timed practice set.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: IPv6.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M08-L06** — "Subnetting Practice and Shortcuts" · Module 08 · Unit 5_
