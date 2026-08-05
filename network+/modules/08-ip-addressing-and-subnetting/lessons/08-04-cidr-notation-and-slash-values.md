---
id: NA-M08-L04
module: 08
lesson: 04
title: "CIDR Notation and Slash Values"
unit: 5
objective_ids: ["1.4"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E1
prerequisites: ["NA-M08-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 08 · Lesson 04] CIDR Notation and Slash Values

> **Unit:** Unit 5 — IP Addressing & Subnetting · **Time:** ~28 min · **Equipment:** E1 (your Windows laptop)
> **You'll need first:** Lesson 08-03 (subnet masks).

Writing `255.255.255.0` every time is long. So techs use a shortcut: **CIDR** — a slash and a number, like `/24`. This lesson shows what the slash number means, how to switch between a mask and a slash, and why CIDR freed us from the old classes.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what **CIDR** and a **slash value** (like `/24`) mean.
- [ ] Convert a **default mask** to a slash (255.255.255.0 ↔ /24).
- [ ] Use the **octet-to-bits** table to read non-default masks (like /26).
- [ ] Explain what **classless** means and why it matters.

---

## 2. Introduction — why this matters

Imagine writing your phone number as "six one seven, five five five…" every single time instead of just the digits. It works, but it's long. People shorten things they say often.

A subnet mask is one of those things. `255.255.255.0` is correct, but techs write it hundreds of times, so they shortened it. **CIDR** notation writes the same mask as **`/24`** — a slash and the count of **network bits**. Shorter, faster, and it appears everywhere: in router configs, in documentation, and on the exam.

CIDR did something bigger too. It cut the address free from the rigid **classes** (Lesson 08-02). With CIDR, the network/host line can fall **anywhere** — not just on a class boundary. That flexibility is why the whole internet uses it.

🎯 **Exam tip:** Network+ mixes masks and slashes freely. You must convert both ways — `255.255.255.0` ⇄ `/24` — quickly and correctly.

🔧 **Lab link:** Feeds **Lab C** — you'll describe your home network as something like `192.168.1.0/24`.

---

## 3. Simple explanation

### CIDR = count the network bits
Remember from Lesson 08-03: a mask is **1s** (network) then **0s** (host). **CIDR** just **counts the 1s** and writes that number after a slash.

- Each **255** octet is `11111111` — **8 ones**.
- So `255.255.255.0` = 8 + 8 + 8 + 0 = **24 ones** = **`/24`**.

That slash number is called the **prefix length** — how many bits are network. `/24` means "the first 24 bits are the network."

### Default masks as slashes
The three default masks (Lesson 08-03) convert simply — count the 255s and multiply by 8:

| Mask | 255 octets | Slash |
|------|:----------:|:-----:|
| 255.0.0.0 | 1 | **/8** |
| 255.255.0.0 | 2 | **/16** |
| 255.255.255.0 | 3 | **/24** |

### Non-default masks (the octet-to-bits table)
Sometimes an octet is **partly** ones — like `128` or `192`. Each value maps to a fixed number of 1-bits:

| Octet value | Bits (1s) | Adds to slash |
|:-----------:|:---------:|:-------------:|
| 0 | 0 | +0 |
| 128 | 1 | +1 |
| 192 | 2 | +2 |
| 224 | 3 | +3 |
| 240 | 4 | +4 |
| 248 | 5 | +5 |
| 252 | 6 | +6 |
| 254 | 7 | +7 |
| 255 | 8 | +8 |

**Example:** `255.255.255.128` = 8 + 8 + 8 + 1 = **/25**. And `255.255.255.192` = 8 + 8 + 8 + 2 = **/26**.

Notice the octet values only ever grow from the left: `128, 192, 224, 240, 248, 252, 254, 255`. That's the run of 1s filling in one bit at a time.

### From a slash back to a mask
Go the other way by handing out 8 bits per octet until the slash runs out:

- **/24** → 8, 8, 8, 0 → `255.255.255.0`
- **/26** → 8, 8, 8, 2 → the last octet has 2 bits = **192** → `255.255.255.192`
- **/16** → 8, 8, 0, 0 → `255.255.0.0`

### Classless — free from A/B/C
Because CIDR sets the split by a **bit count**, the line can fall **anywhere** — not only at octet or class edges. This is **classless**: the old Class A/B/C rules no longer limit you. A network can be `/9`, `/22`, `/30` — whatever fits. That's why CIDR (**Classless** Inter-Domain Routing) replaced the class system.

> **The big idea:** **CIDR** writes a mask as a slash plus the count of network bits (the **prefix length**). Count the 1s: each 255 = 8. `255.255.255.0` = `/24`. Partial octets follow the fixed table (128=1, 192=2, …). CIDR is **classless** — the split can fall anywhere.

💡 **Tip:** Fast default conversions to memorize: `/8` = 255.0.0.0, `/16` = 255.255.0.0, `/24` = 255.255.255.0. Most home and exam questions start from these.

⚠️ **Watch out:** A slash is **network bits**, not octets. `/24` is 24 **bits** (three octets), not "slash 24 octets." Always think bits.

---

## 4. Real-world analogy

> **"A slash value is a shorthand — like saying 'a dozen' instead of 'twelve.'"**

| Everyday shorthand | CIDR |
|--------------------|------|
| "A dozen" = 12 | `/24` = 255.255.255.0 |
| Everyone knows the long form | The mask is still there underneath |
| Faster to say and write | Faster to write in configs |
| "Half a dozen" = 6 | `/25` = 255.255.255.128 |

Both forms mean the same amount. The shorthand is just quicker once everyone agrees on it.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **CIDR (Classless Inter-Domain Routing)** | SIGH-der | Writing a subnet mask as a slash plus the number of network bits (like /24). |
| **Prefix length** | | The /n number: how many bits of the address are network. |
| **Classless** | | Not tied to the old A/B/C classes; the split can fall anywhere. |

---

## 6. ASCII diagram

```
   CIDR = COUNT THE 1s IN THE MASK

   255 . 255 . 255 . 0
    8  +  8  +  8  + 0  =  24 ones   →   /24

   DEFAULT MASKS ↔ SLASHES
     255.0.0.0        = /8    (1 octet  ×8)
     255.255.0.0      = /16   (2 octets ×8)
     255.255.255.0    = /24   (3 octets ×8)

   OCTET → BITS (partial octets)
     0=0  128=1  192=2  224=3  240=4  248=5  252=6  254=7  255=8

   EXAMPLES
     255.255.255.128 = 8+8+8+1 = /25
     255.255.255.192 = 8+8+8+2 = /26
```

_Count the 1-bits → that's the slash. Each 255 = 8. Partial octets use the table._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-08-04-cidr-slash-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a mask 255.255.255.0 with each octet labeled "8 ones," summing to /24; a default-mask↔slash table; and the octet-to-bits table with two worked examples (/25, /26).
> **Key elements & labels:** "count the 1s"; 255=8; /8, /16, /24 defaults; octet-to-bits (128=1 … 255=8); 255.255.255.128 = /25.
> **Color meaning:** the network (1s) region is shaded **and** labeled; the count is shown as text — never color alone.
> **Flow direction:** top mask → sum → slash; tables below.
> **Alt text (required):** "A subnet mask 255.255.255.0 with each of the first three octets labeled as 8 ones and the last as 0, summing to 24 network bits, written as slash 24. A table converts default masks to slashes: 255.0.0.0 is slash 8, 255.255.0.0 is slash 16, 255.255.255.0 is slash 24. An octet-to-bits table shows 0 equals 0 bits, 128 equals 1, 192 equals 2, 224 equals 3, 240 equals 4, 248 equals 5, 252 equals 6, 254 equals 7, and 255 equals 8. Two examples show 255.255.255.128 equals slash 25 and 255.255.255.192 equals slash 26."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-08-04-router-cidr-01.jpg`
> A router or firewall page showing a network written in CIDR (e.g., 192.168.1.0/24). Alt text: "A router page showing the home network written in CIDR as 192.168.1.0 slash 24."
>
> **Photo 2** — `img-08-04-ipconfig-mask-01.jpg`
> An `ipconfig` showing a 255.255.255.0 mask, to convert to /24. Alt text: "An ipconfig result with a 255.255.255.0 subnet mask, which equals slash 24 in CIDR."

---

## 9. Hands-on lab

**Goal:** read your own mask and convert it to a slash value; then write your network in CIDR.
**Why:** turning your real mask into a slash makes CIDR concrete.

**You will need**
- Your Windows laptop (Equipment tier **E1**), on a network. Estimated time: 10 min.

⚠️ **Before you start (safety):** You only **read** settings. Nothing changes.

### 9a. Step-by-step instructions

1. Open the **Command Prompt** and run `ipconfig`.
2. Read your **Subnet Mask** line. Write it down.
3. Convert it to a slash: count the **255** octets and multiply by 8 (add table bits for any partial octet).
4. Read your **IPv4 Address** and find your **network** (Lesson 08-03). Write your network with the host octet as **0**.
5. Write your whole network in **CIDR**: `network/slash` — for example, `192.168.1.0/24`.

### 9b. Expected results

Most home laptops show `255.255.255.0`, which is **/24** (your numbers may differ):

```
   IPv4 Address. . . . . . . . . . . : 192.168.1.24
   Subnet Mask . . . . . . . . . . . : 255.255.255.0    → /24
   Your network in CIDR: 192.168.1.0/24
```

- ✅ **You did it if:** you converted your mask to a slash and wrote your network as `network/slash`.

### 9c. Verify it worked

1. Say: "My mask is ___, which is /___ because it has ___ network bits."
2. Convert one back: what mask is `/16`? (Answer: 255.255.0.0.)

### 9d. Reset / roll back

Nothing changed — you only read settings. Close the window when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking `/24` = 24 octets | Impossible mask | A slash counts **bits**; /24 = 3 octets |
| Counting 0-octets as bits | Slash too big | Only the **1s** count; a 0 octet adds 0 |
| Guessing a partial octet | Wrong slash | Use the table (128=1, 192=2, 224=3, …) |
| Forgetting the network's host = 0 | Wrong CIDR network | Write the network with the host octet as 0 (e.g., .0/24) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Slash doesn't match the mask | Miscounted bits | Recount: 255=8 per octet, then add table bits |
| A tool shows `/25` but you expected `/24` | A non-default (subnetted) mask | 255.255.255.128 = /25; that's valid |
| CIDR network looks wrong | Host octet not zeroed | The network address ends in 0 for the host part |

---

## 12. Lesson summary

- **CIDR** writes a mask as a slash plus the count of **network bits** (the **prefix length**).
- Count the 1s: each **255** = 8. `255.255.255.0` = **/24**.
- Partial octets follow a fixed table: **128=1, 192=2, 224=3, 240=4, 248=5, 252=6, 254=7, 255=8**.
- CIDR is **classless** — the split can fall anywhere, not just on class edges.

**One-sentence recap:** CIDR is shorthand for a subnet mask — a slash and the number of network (1) bits — so 255.255.255.0 becomes /24, and the split is no longer tied to the old classes.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-08-04-fill-in-the-blank.md`
2. **Matching** — `wb-08-04-matching.md`
3. **Label the diagram** — `wb-08-04-label-the-diagram.md` (mask → slash)
4. **Short answer** — `wb-08-04-short-answer.md`
5. **Hands-on observation** — `wb-08-04-hands-on-observation.md` (convert your mask)
6. **Vocabulary review** — `wb-08-04-vocabulary-review.md`
7. **Reflection** — `wb-08-04-reflection.md`

**Quick written warm-up (do this now):** What slash value is 255.255.255.0? What mask is /16?

/___ &nbsp;&nbsp; and &nbsp;&nbsp; ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-08-04-knowledge-check.md`.)

1. What does the number after the slash in CIDR count? *(Objective: definition)*
   - A) octets
   - B) network (1) bits
   - C) hosts
   - D) hops

2. `255.255.255.0` in CIDR is… *(Objective: convert)*
   - A) /8
   - B) /16
   - C) /24
   - D) /32

3. What mask does **/16** mean? *(Objective: convert)*
   - A) 255.0.0.0
   - B) 255.255.0.0
   - C) 255.255.255.0
   - D) 255.255.255.255

4. In the octet-to-bits table, **192** equals how many bits? *(Objective: table)*
   - A) 1
   - B) 2
   - C) 3
   - D) 8

5. `255.255.255.128` in CIDR is… *(Objective: partial octet)*
   - A) /24
   - B) /25
   - C) /26
   - D) /32

6. **True or false —** A `/24` means the first 24 octets are the network. Explain in one sentence. *(Objective: bits not octets)*

7. What does **classless** mean? *(Objective: classless)*
   - A) The network has no address
   - B) The split isn't tied to the old A/B/C classes
   - C) There is no subnet mask
   - D) Only Class C is allowed

8. **Matching —** write the letter next to each mask. *(Objective: convert)*
   - ___ 255.0.0.0 &nbsp;&nbsp; ___ 255.255.0.0 &nbsp;&nbsp; ___ 255.255.255.0
   - A) /24 &nbsp; B) /8 &nbsp; C) /16

9. Fill in the blank: The slash number (like /24) is called the ____________ length. *(Objective: terms)*

10. **Scenario —** A router config lists a network as `10.20.30.0/24`. What is the subnet mask, and how many bits are host? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-08-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-08-04-cidr-slash.md`. In brief:

- **Objective in one line:** learners convert between masks and slash values and explain classless addressing.
- **Common misconceptions:** the slash counts octets; 0-octets add bits; classless means "no mask." Correct all three.
- **Pacing:** ~28 min. Drill the three defaults first, then the octet-to-bits table with /25 and /26.
- **How CompTIA tests it:** mask ⇄ slash conversion both ways; recognizing CIDR networks (x.x.x.0/24); classless concept.
- **Accuracy note:** the octet-to-bits values are exact (128=1 … 255=8). `ipconfig` is real; sample output is representative and labeled so.
- **Extension idea:** host counts per slash (/24 = 254 usable) as a bridge to subnetting math (08-05).

---

## 17. Cheat sheet

> **Quick reference — CIDR / slash values**
>
> - **CIDR** = a slash + the count of **network (1) bits** (the **prefix length**).
> - Each **255** octet = **8** bits. `255.255.255.0` = **/24**.
> - Defaults: `/8` = 255.0.0.0 · `/16` = 255.255.0.0 · `/24` = 255.255.255.0.
> - **Octet → bits:** 128=1 · 192=2 · 224=3 · 240=4 · 248=5 · 252=6 · 254=7 · 255=8.
> - Example: `255.255.255.128` = /25 · `255.255.255.192` = /26.
> - A slash counts **bits, not octets**. CIDR is **classless** — split anywhere.
>
> _(Full version: `resources/cheat-sheets/ip-addressing-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **CIDR (Classless Inter-Domain Routing)** — Writing a subnet mask as a slash plus the number of network bits (like /24).
- **Prefix length** — The /n number: how many bits of the address are network.
- **Classless** — Not tied to the old A/B/C classes; the split can fall anywhere.

---

## 19. Homework

- **Practice:** Convert 10 masks to slashes and 10 slashes back to masks (mix in /25, /26, /30).
- **Spaced review:** Redo the Lesson 08-03 flashcards on reading a mask.
- **Preview:** Next lesson we start **subnetting** — splitting one network into several, step by step.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I convert a mask to a slash both ways now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what CIDR and a slash value mean.
- [ ] I can convert the three default masks to slashes (and back).
- [ ] I can use the octet-to-bits table for /25, /26, etc.
- [ ] I can explain what classless means.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: subnetting step by step.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M08-L04** — "CIDR Notation and Slash Values" · Module 08 · Unit 5_
