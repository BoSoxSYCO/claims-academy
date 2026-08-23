---
id: NA-M06-L01
module: 06
lesson: 01
title: "Copper Cables: Twisted Pair (Cat5e–Cat8)"
unit: 3
objective_ids: ["1.5"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E2
prerequisites: ["NA-M04-L02", "NA-M04-L06"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 06 · Lesson 01] Copper Cables: Twisted Pair (Cat5e–Cat8)

> **Unit:** Unit 3 — Physical Media · **Time:** ~28 min · **Equipment:** E2 (an Ethernet cable in hand)
> **You'll need first:** Lesson 04-02 (nodes and links) and Lesson 04-06 (speed words).

You have used the word "cable" many times. Now we open it up. The blue (or gray) network cable in your home is a **twisted-pair copper cable**, and it comes in grades called **categories**. This lesson shows you what's inside, why the wires are twisted, and how to read the category printed on the jacket.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **twisted-pair copper cable** is and what's inside it.
- [ ] Explain **why the pairs are twisted** (to fight interference).
- [ ] Tell **UTP** from **STP** (unshielded vs. shielded).
- [ ] Read a **category** (Cat5e–Cat8) and match it to a speed.

---

## 2. Introduction — why this matters

Think about the cables as **grades of garden hose**. A thin hose carries a little water slowly; a thick, well-made hose carries much more, much faster. If you buy the wrong grade, you don't get the flow you paid for.

Network cables work the same way. The Ethernet cable in your home is made of **copper wires** that carry electrical signals. It comes in **categories** — Cat5e, Cat6, and higher — and each category supports a top speed and distance. Grab the wrong one and your fast internet crawls.

Why learn this? Because when you build your home lab, you will plug real cables into a real switch. Knowing the category lets you pick a cable that can actually carry the speed you want. And on the exam, cable categories and their speeds are tested directly.

🎯 **Exam tip:** Network+ expects you to match each category (Cat5e, Cat6, Cat6a, Cat8) to its **speed** and **distance**, and to know **UTP vs. STP**.

🔧 **Lab link:** The cable you'll use to connect your laptop to the Dell switch is a twisted-pair copper cable — check its printed category before Lab A.

---

## 3. Simple explanation

Let's open the cable, see why it's twisted, then read the grades.

### What's inside — twisted pairs of copper
A **twisted-pair copper cable** holds **8 thin copper wires**, grouped into **4 pairs**. Each pair is twisted together along the whole length. Copper carries the electrical signals that hold your data (the 1s and 0s from Module 03).

### Why the wires are twisted
Electrical signals leak a little "noise" onto nearby wires. This noise is **interference** (also called EMI). When two wires of a pair are **twisted**, the noise hits both wires almost equally and cancels out. So the twist is not decoration — it protects the signal. More twists per inch means better protection, which is part of what separates a higher category from a lower one.

Noise that leaks between pairs inside the same cable has its own name: **crosstalk**. Twisting fights crosstalk too.

### UTP vs. STP — shielding
- **UTP (Unshielded Twisted Pair):** just the twisted pairs, no metal shield. Cheaper, thinner, easier to bend. Most home and office cables are UTP.
- **STP (Shielded Twisted Pair):** adds a thin metal shield (foil or braid) around the pairs to block extra interference. Used in noisy places (near motors, heavy machines). Thicker and pricier.

### Categories — the grade of the cable
The **category** ("Cat") is the cable's grade, printed right on the jacket. Higher numbers mean higher speed, often with tighter twists or shielding.

| Category | Top speed | Distance | Note |
|----------|-----------|----------|------|
| **Cat5e** | 1 Gbps | 100 m | Common, cheap; "e" = enhanced |
| **Cat6** | 1 Gbps (10 Gbps up to 55 m) | 100 m | Tighter twists than Cat5e |
| **Cat6a** | 10 Gbps | 100 m | "a" = augmented; full 10 Gbps run |
| **Cat7** | 10 Gbps | 100 m | Always shielded |
| **Cat8** | 25–40 Gbps | 30 m | Data centers; short runs only |

**100 meters (about 328 feet)** is the standard top length for a twisted-pair Ethernet run. Go longer and the signal weakens.

> **The big idea:** A network cable is **4 twisted pairs of copper** (8 wires). The **twist** cancels **interference**; **shielding** (STP) blocks more. The **category** (Cat5e–Cat8) tells you the top **speed** and **distance** — printed right on the jacket.

💡 **Tip:** To read a cable's grade, look at the text printed along the jacket. You'll see "CAT5E," "CAT6," etc., repeated down its length.

⚠️ **Watch out:** A higher category cable does **not** speed up a slow internet plan. The cable sets a *ceiling*; your plan and gear set the actual speed.

---

## 4. Real-world analogy

> **"Cable categories are grades of hose: a higher grade carries more, faster — but only up to its rated length."**

| Garden hose | Network cable |
|-------------|---------------|
| A thin, cheap hose | **Cat5e** (1 Gbps) |
| A thicker, better hose | **Cat6 / Cat6a** (up to 10 Gbps) |
| A heavy-duty, reinforced hose | **Cat8** (25–40 Gbps, short runs) |
| A hose with an outer wrap for rough ground | **STP** (shielded) |
| A plain hose | **UTP** (unshielded) |
| The hose only reaches so far | The **100 m** distance limit |

Pick the grade that matches the flow you need — and don't run it past its rated length.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Copper cable** | | A cable of copper wires that carry electrical signals. |
| **Twisted pair** | | Two copper wires twisted together to cancel interference. |
| **Cable category** | | The grade of a cable (Cat5e–Cat8) that sets its top speed and distance. |
| **UTP (Unshielded Twisted Pair)** | U-T-P | Twisted-pair cable with no metal shield; common and cheap. |
| **STP (Shielded Twisted Pair)** | S-T-P | Twisted-pair cable with a metal shield to block extra interference. |
| **Interference** | in-ter-FEER-ense | Unwanted electrical noise that can harm a signal (also called EMI). |
| **Crosstalk** | CROSS-talk | Noise that leaks from one pair of wires onto another. |

---

## 6. ASCII diagram

```
   INSIDE A TWISTED-PAIR CABLE (looking at the end)

     Jacket (outer cover)
     ┌───────────────────────────┐
     │  (())  (())  (())  (())    │   4 twisted pairs = 8 copper wires
     │  pair1 pair2 pair3 pair4   │
     └───────────────────────────┘
      UTP = no shield    STP = add a metal shield around the pairs

   THE TWIST CANCELS NOISE
     ~~~~~~  two straight wires: noise adds up  (bad)
     >‑<>‑<  twisted wires: noise cancels out   (good)

   CATEGORY (printed on jacket) = the grade:
     Cat5e(1G) < Cat6(1–10G) < Cat6a(10G) < Cat8(25–40G, short)
```

_Four twisted pairs of copper; the twist fights noise; the category sets the speed._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-06-01-twisted-pair-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a cut-away of a cable end with 4 labeled twisted pairs inside a jacket; beside it, a small "UTP vs STP" pair (one with a shield ring, one without); below, a category ladder from Cat5e to Cat8 with speed labels.
> **Key elements & labels:** the 4 pairs, the jacket, the shield (STP), and the category-to-speed ladder.
> **Color meaning:** each pair a different color **and** numbered; the category ladder labels each rung with its speed in text, so it reads in black and white.
> **Flow direction:** cable cross-section on top, category ladder low-to-high left to right.
> **Alt text (required):** "A cut-away of a twisted-pair cable showing four numbered twisted pairs of copper inside a jacket, a comparison of unshielded (UTP) and shielded (STP) versions, and a ladder of categories from Cat5e at 1 gigabit up to Cat8 at 25 to 40 gigabits."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-06-01-cable-jacket-print-01.jpg`
> A close-up of "CAT6" printed on a cable jacket. Alt text: "A cable jacket printed with CAT6, showing how to read a cable's category."
>
> **Photo 2** — `img-06-01-pairs-exposed-01.jpg`
> A cut cable showing the 4 twisted pairs. Alt text: "A cut network cable showing four twisted pairs of copper wire inside."
>
> **Photo 3** — `img-06-01-utp-vs-stp-01.jpg`
> A UTP cable next to an STP cable with foil. Alt text: "An unshielded cable beside a shielded cable that has a foil layer."

---

## 9. Hands-on lab

**Goal:** find a real Ethernet cable and read its category and type.
**Why:** reading the jacket is the exact skill you'll use to pick a lab cable.

**You will need**
- One Ethernet cable (Equipment tier **E2**). A bright light helps.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** You are only looking at a cable. Don't cut or strip it. Handle it gently.

### 9a. Step-by-step instructions

1. Pick up an Ethernet cable from your home (the kind that plugs into a router or the wall).
2. Hold it under good light and slowly turn it. Find the **printed text** running along the jacket.
3. Read the **category** — look for "CAT5E," "CAT6," "CAT6A," or "CAT8." Write it down.
4. Look for the word **UTP** or **STP** (or "shielded"). If you see neither, assume **UTP** (most common). Write it down.
5. Using the table in Section 3, write the cable's **top speed** and **distance limit**.
6. Estimate the cable's length. Is it under 100 m (almost surely yes at home)?

### 9b. Expected results

- You found and wrote the category printed on the jacket.
- You decided UTP vs. STP.
- ✅ **You did it if:** you can say "this is a Cat__ cable, so it can carry up to __ Gbps up to __ meters."

### 9c. Verify it worked

1. Point to the printed category text and read it aloud.
2. Say one reason the wires inside are twisted (to cancel interference).

### 9d. Reset / roll back

Nothing to undo — you only read the cable. Keep it for the Module 06 build.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking a better cable speeds up any internet | You overpay, see no change | The cable sets a ceiling; the plan/gear set the real speed |
| Confusing UTP and STP | You pick the wrong cable for a noisy spot | STP is shielded (noisy areas); UTP is plain (most uses) |
| Ignoring the 100 m limit | Long runs get flaky | Keep twisted-pair runs at or under 100 m |
| Assuming all cables are the same | You can't hit 10 Gbps on Cat5e | Read the category; higher number = higher top speed |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Can't find the category text | Faded or dirty jacket | Wipe it, use bright light, check the other side |
| Slow speed on a good cable | Cable isn't the limit | Check the plan, the switch/router speed, and the port |
| Link drops on a long cable | Run over ~100 m | Shorten the run or add a switch in between |

---

## 12. Lesson summary

- A network cable is **4 twisted pairs of copper** — **8 wires** total.
- The **twist** cancels **interference**; **crosstalk** is noise between pairs.
- **UTP** = no shield (common); **STP** = shielded (noisy areas).
- The **category** (printed on the jacket) sets the top **speed** and **distance**: Cat5e (1 Gbps) → Cat8 (25–40 Gbps, short runs); **100 m** is the standard limit.

**One-sentence recap:** A twisted-pair copper cable carries data on four twisted pairs of copper, and its printed category (Cat5e–Cat8) tells you the top speed and distance it can handle.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-06-01-fill-in-the-blank.md`
2. **Matching** — `wb-06-01-matching.md`
3. **Label the diagram** — `wb-06-01-label-the-diagram.md` (inside a cable)
4. **Short answer** — `wb-06-01-short-answer.md`
5. **Hands-on observation** — `wb-06-01-hands-on-observation.md` (read a real cable)
6. **Vocabulary review** — `wb-06-01-vocabulary-review.md`
7. **Reflection** — `wb-06-01-reflection.md`

**Quick written warm-up (do this now):** How many wires are inside a twisted-pair cable? What does the "Cat" number tell you?

Wires: ____________  Cat number tells: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-06-01-knowledge-check.md`.)

1. How many copper wires are inside a standard twisted-pair cable? *(Objective: inside)*
   - A) 2
   - B) 4
   - C) 8
   - D) 16

2. Why are the pairs **twisted**? *(Objective: twist)*
   - A) To make the cable pretty
   - B) To cancel interference (noise)
   - C) To add color
   - D) To make it heavier

3. What does **UTP** stand for? *(Objective: UTP/STP)*
   - A) Ultra Thin Plastic
   - B) Unshielded Twisted Pair
   - C) Universal Transfer Port
   - D) Under Twisted Path

4. Which cable adds a metal **shield** to block interference? *(Objective: UTP/STP)*
   - A) UTP
   - B) STP
   - C) Cat5e always
   - D) None do

5. Which category supports a full **10 Gbps at 100 m**? *(Objective: categories)*
   - A) Cat5e
   - B) Cat6a
   - C) Cat3
   - D) Cat1

6. **True or false —** A higher-category cable makes a slow internet plan faster. Explain in one sentence. *(Objective: ceiling)*

7. What is the standard **maximum length** for a twisted-pair Ethernet run? *(Objective: distance)*
   - A) 10 m
   - B) 55 m
   - C) 100 m
   - D) 1,000 m

8. **Matching —** write the letter next to each category. *(Objective: categories)*
   - ___ Cat5e &nbsp;&nbsp; ___ Cat6a &nbsp;&nbsp; ___ Cat8
   - A) 10 Gbps at 100 m &nbsp; B) 1 Gbps &nbsp; C) 25–40 Gbps, short runs

9. Fill in the blank: Noise that leaks from one pair of wires onto another is called ____________. *(Objective: crosstalk)*

10. **Scenario —** You need 10 Gbps across a 90 m run in a normal office. Which category would you choose, and why not Cat5e? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-06-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-06-01-twisted-pair.md`. In brief:

- **Objective in one line:** learners describe twisted-pair copper cable and match categories to speed/distance.
- **Common misconceptions:** a better cable speeds up any internet; UTP/STP confusion; ignoring 100 m. Correct all three.
- **Pacing:** ~28 min. The read-a-real-cable lab is the payoff and ties to the home lab.
- **How CompTIA tests it:** category → speed/distance; UTP vs. STP; the 100 m limit.
- **Support idea:** pass around real cables so learners find the printed category themselves.
- **Extension idea:** discuss plenum vs. riser jackets and solid vs. stranded conductors for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Twisted-pair copper**
>
> - A cable = **4 twisted pairs** of copper = **8 wires**. Twist cancels **interference**; **crosstalk** = noise between pairs.
> - **UTP** = no shield (common). **STP** = shielded (noisy areas).
> - **Categories:** Cat5e (1 Gbps) · Cat6 (1 Gbps; 10 Gbps ≤55 m) · Cat6a (10 Gbps @100 m) · Cat7 (10 Gbps, shielded) · Cat8 (25–40 Gbps, ≤30 m).
> - **Max run:** 100 m for twisted pair.
> - The category is **printed on the jacket** — read it before you buy or plug in.
>
> _(Full version: `resources/cheat-sheets/cabling-and-media-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Copper cable** — A cable of copper wires that carry electrical signals.
- **Twisted pair** — Two copper wires twisted together to cancel interference.
- **Cable category** — The grade of a cable (Cat5e–Cat8) that sets its top speed and distance.
- **UTP (Unshielded Twisted Pair)** — Twisted-pair cable with no metal shield; common and cheap.
- **STP (Shielded Twisted Pair)** — Twisted-pair cable with a metal shield to block extra interference.
- **Interference** — Unwanted electrical noise that can harm a signal (also called EMI).
- **Crosstalk** — Noise that leaks from one pair of wires onto another.

---

## 19. Homework

- **Practice:** Find every network cable in your home and write down each one's category. Which is the highest?
- **Spaced review:** Redo the Lesson 04-06 flashcards for bandwidth, throughput, and latency.
- **Preview:** A cable needs a plug to connect. Next, we look at the **connectors and jacks** — the RJ45 plug and wall jacks.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I read a cable's category off the jacket now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can say what's inside a twisted-pair cable (4 pairs, 8 wires).
- [ ] I can explain why the pairs are twisted.
- [ ] I can tell UTP from STP.
- [ ] I can match Cat5e–Cat8 to a speed, and I know the 100 m limit.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: connectors and jacks (RJ45).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M06-L01** — "Copper Cables: Twisted Pair (Cat5e–Cat8)" · Module 06 · Unit 3_
