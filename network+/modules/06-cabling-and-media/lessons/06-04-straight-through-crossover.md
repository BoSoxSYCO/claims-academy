---
id: NA-M06-L04
module: 06
lesson: 04
title: "Straight-Through vs. Crossover, T568A/B"
unit: 3
objective_ids: ["1.5"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E2
prerequisites: ["NA-M06-L01", "NA-M06-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 06 · Lesson 04] Straight-Through vs. Crossover, T568A/B

> **Unit:** Unit 3 — Physical Media · **Time:** ~28 min · **Equipment:** E2 (an Ethernet cable in hand)
> **You'll need first:** Lesson 06-01 (twisted-pair cable) and Lesson 06-02 (RJ45 connectors).

Inside the RJ45 connector, the 8 wires go in a set **order**. There are two standard orders — **T568A** and **T568B** — and the way you match them at each end makes a cable either **straight-through** or **crossover**. This lesson makes that clear, and tells you which cable to use when.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what a **pinout** is (the wire order in the connector).
- [ ] Name the two standards, **T568A** and **T568B**, and how they differ.
- [ ] Tell a **straight-through** cable from a **crossover** cable.
- [ ] Say which cable connects **unlike** vs. **like** devices, and why modern gear rarely needs a crossover.

---

## 2. Introduction — why this matters

Think about two people having a conversation. For it to work, one person's **mouth** must line up with the other's **ear**. If both talk into the same spot, no one hears anything. The wiring has to send "talk" to "listen."

Ethernet cables face the same problem. Some devices send data on one pair of wires and listen on another. To connect two devices, the cable must line up **send** with **listen**. The **order** the 8 wires sit in the connector — the **pinout** — is what decides this. Get the order right and the link works; get it wrong and nothing connects.

Why learn this? Because the exam asks you to match a cable type to a job, and to know the T568A/B color orders. And in the home lab, using the wrong cable on old gear is a classic "why won't it link?" mystery.

🎯 **Exam tip:** Know that **T568A and T568B swap the green and orange pairs**, that a **straight-through** cable uses the **same** standard on both ends, and that a **crossover** uses **A on one end, B on the other**.

🔧 **Lab link:** Your modern Dell switch auto-fixes the wiring (Auto-MDI-X), so a straight-through patch cable will link everything in your lab. Older gear may need a crossover.

---

## 3. Simple explanation

Let's define the wire order, the two standards, and the two cable types.

### Pinout — the order of the wires
A **pinout** is the exact order the 8 wires are placed into the RJ45's 8 pins. Everyone must use the same orders so cables from different makers work together. There are two agreed orders: **T568A** and **T568B**.

### T568A and T568B — two standards
- **T568B** is the most common order in the US. Pin order: white-orange, orange, white-green, blue, white-blue, green, white-brown, brown.
- **T568A** swaps the **orange** and **green** pairs. Pin order: white-green, green, white-orange, blue, white-blue, orange, white-brown, brown.

The **only difference** is that the green and orange pairs trade places. Both carry data fine — what matters is being **consistent**.

### Straight-through vs. crossover
The cable type depends on whether the two ends use the **same** order or **different** orders:

- A **straight-through** cable uses the **same** standard on **both** ends (both T568B, or both T568A). The wires run straight across, pin 1 to pin 1, and so on. This is the everyday cable.
- A **crossover** cable uses **T568A on one end and T568B on the other**. This "crosses" the send and listen pairs, so two devices that both send on the same pins can still hear each other.

### Which cable for which job
The old rule matched cable to device types:

- **Unlike devices** (PC ↔ switch, switch ↔ router) → **straight-through**.
- **Like devices** (PC ↔ PC, switch ↔ switch, old gear) → **crossover**.

**But modern gear changed this.** Most switches and network cards now have **Auto-MDI-X**: they automatically detect and fix the crossover inside. So today a **straight-through** cable works almost everywhere, and true crossover cables are rare. You still must know crossover for the exam and for older equipment.

> **The big idea:** The **pinout** (wire order) uses two standards — **T568A** and **T568B** — which swap the green and orange pairs. **Same** order both ends = **straight-through** (unlike devices); **A/B** mixed = **crossover** (like devices). **Auto-MDI-X** on modern gear makes straight-through work almost everywhere.

💡 **Tip:** To spot a cable's type, hold both RJ45 ends side by side, tabs down, and compare the wire colors. Same color order = straight-through; orange and green swapped = crossover.

⚠️ **Watch out:** Don't mix A and B on a cable you meant to be straight-through — it becomes an accidental crossover, which can fail to link on old gear.

---

## 4. Real-world analogy

> **"Straight-through vs. crossover is like lining up mouth to ear: sometimes the wiring already lines up; sometimes you must cross it."**

| Two people talking | Ethernet |
|--------------------|----------|
| Mouth must reach the other's ear | **Send** must reach the other's **listen** |
| Two different roles line up naturally | **Unlike** devices → **straight-through** |
| Two same roles need a swap to hear each other | **Like** devices → **crossover** |
| A translator who auto-fixes who-hears-whom | **Auto-MDI-X** (modern gear) |
| The seating chart (who sits where) | The **pinout** (T568A / T568B) |

With a translator present (Auto-MDI-X), everyone hears everyone — so you rarely need the special crossed cable anymore.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Pinout** | PIN-out | The order the 8 wires are placed into the RJ45's pins. |
| **T568A** | T-568-A | One standard wire order; swaps orange/green vs. T568B. |
| **T568B** | T-568-B | The most common US wire order for RJ45. |
| **Straight-through cable** | | A cable using the same standard on both ends (unlike devices). |
| **Crossover cable** | | A cable using T568A on one end and T568B on the other (like devices). |
| **Auto-MDI-X** | auto-M-D-I-X | A feature that auto-fixes crossover, so straight-through works. |

---

## 6. ASCII diagram

```
   TWO WIRE ORDERS (only green & orange swap)

   T568B:  wO  O  wG  Bl  wBl  G  wBr  Br     (most common)
   T568A:  wG  G  wO  Bl  wBl  O  wBr  Br     (orange & green swapped)
             ^^     ^^              ^
   STRAIGHT-THROUGH  = same order both ends → PC ↔ switch (unlike)
      end1: T568B ─────────────── end2: T568B

   CROSSOVER         = A on one end, B on the other → PC ↔ PC (like)
      end1: T568A ──╳──╳────────── end2: T568B

   Modern gear: Auto-MDI-X auto-fixes it → straight-through works almost everywhere.
```

_Same order both ends = straight-through; A/B mixed = crossover. (w = white-stripe.)_

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-06-04-straight-crossover-01.svg` (created and stored in this module's `assets/`)
> **Shows:** two RJ45 pin rows for T568A and T568B with the 8 colored positions, highlighting the swapped orange/green pairs; below, two cable pictures — straight-through (both ends same, PC↔switch) and crossover (A/B ends, PC↔PC).
> **Key elements & labels:** the 8 pin colors named in text for each standard; the swapped pairs marked; straight-through vs. crossover use-cases; a note that Auto-MDI-X makes straight-through work.
> **Color meaning:** wire colors are **named in text** (white-orange, blue, etc.), never color alone; the cable types are labeled.
> **Flow direction:** two standards on top, two cable types below.
> **Alt text (required):** "Two RJ45 pin orders, T568A and T568B, with the eight wire colors named; the orange and green pairs are shown swapped between them. Below, a straight-through cable uses the same order on both ends for unlike devices like a PC to a switch, and a crossover cable uses T568A on one end and T568B on the other for like devices like a PC to a PC. A note says Auto-MDI-X on modern gear makes straight-through work almost everywhere."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-06-04-rj45-wire-order-01.jpg`
> An RJ45 end showing the 8 colored wires in order. Alt text: "An RJ45 connector end showing the eight colored wires in their pin order."
>
> **Photo 2** — `img-06-04-two-ends-compare-01.jpg`
> Both ends of a cable held tab-down for comparison. Alt text: "Both RJ45 ends of a cable held side by side to compare the wire color order."
>
> **Photo 3** — `img-06-04-t568b-diagram-01.jpg`
> A printed T568B color chart. Alt text: "A printed T568B wiring chart listing the eight wire colors in pin order."

---

## 9. Hands-on lab

**Goal:** compare both ends of a real cable to decide if it's straight-through or crossover.
**Why:** reading the wire order is exactly how you diagnose a wiring problem.

**You will need**
- One Ethernet patch cable with clear RJ45 ends (Equipment tier **E2**). Good light.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** Only look at the cable ends. Don't cut or re-crimp anything.

### 9a. Step-by-step instructions

1. Hold **both** RJ45 ends of one cable next to each other, with the plastic **tabs facing down** and the pins facing you.
2. Read the wire colors on **end 1**, left to right. Write them down.
3. Read the wire colors on **end 2**, left to right. Write them down.
4. Compare the two lists. Are they the **same** order, or are the **orange and green** pairs swapped?
5. Decide: same order = **straight-through**; swapped = **crossover**.
6. Note whether this cable would connect **unlike** devices (straight-through) or **like** devices (crossover).

### 9b. Expected results

- You wrote the color order for both ends.
- You correctly named the cable straight-through or crossover.
- ✅ **You did it if:** you can say "both ends match, so it's straight-through — for a PC to a switch" (most patch cables).

### 9c. Verify it worked

1. Point to pins 1–2 and 3–6 on each end and check the orange/green pairs.
2. Say which devices this cable is meant to join.

### 9d. Reset / roll back

Nothing to undo — you only looked at the cable. Keep it for the lab.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Mixing A and B by accident | You make an unwanted crossover | Use the **same** standard on both ends for straight-through |
| Thinking A and B carry data differently | You overthink it | Both work; just be consistent end to end |
| Using a crossover on modern gear "to be safe" | Usually still works (Auto-MDI-X), but confusing | Use straight-through as the default today |
| Reading ends with tabs up | Colors look reversed | Hold both ends **tab down**, pins toward you |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No link between two PCs (old gear) | Straight-through won't cross the pairs | Use a crossover, or gear with Auto-MDI-X |
| Cable links some devices, not others | Accidental crossover | Re-check both ends match (same standard) |
| Not sure which standard a cable uses | Can't read colors | Hold tab down, good light; compare orange/green pairs |

---

## 12. Lesson summary

- A **pinout** is the wire order in the RJ45. The two standards are **T568A** and **T568B**, which **swap the orange and green pairs**.
- **Straight-through** = same standard both ends → **unlike** devices (PC ↔ switch).
- **Crossover** = T568A one end, T568B the other → **like** devices (PC ↔ PC).
- **Auto-MDI-X** on modern gear auto-fixes crossover, so **straight-through works almost everywhere** today.

**One-sentence recap:** T568A and T568B are two wire orders that swap the orange and green pairs; matching them on both ends makes a straight-through cable for unlike devices, while mixing them makes a crossover for like devices — though Auto-MDI-X now lets straight-through work almost everywhere.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-06-04-fill-in-the-blank.md`
2. **Matching** — `wb-06-04-matching.md`
3. **Label the diagram** — `wb-06-04-label-the-diagram.md` (wire orders & cable types)
4. **Short answer** — `wb-06-04-short-answer.md`
5. **Hands-on observation** — `wb-06-04-hands-on-observation.md` (compare both ends)
6. **Vocabulary review** — `wb-06-04-vocabulary-review.md`
7. **Reflection** — `wb-06-04-reflection.md`

**Quick written warm-up (do this now):** Which two pairs swap between T568A and T568B? Same order both ends makes which cable type?

Swapped pairs: ____________  Same both ends: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-06-04-knowledge-check.md`.)

1. What is a **pinout**? *(Objective: pinout)*
   - A) The speed of a cable
   - B) The order the 8 wires go into the RJ45 pins
   - C) A type of jack
   - D) A fiber core

2. How do **T568A** and **T568B** differ? *(Objective: standards)*
   - A) A has 4 wires, B has 8
   - B) They swap the orange and green pairs
   - C) One is fiber
   - D) They use different metals

3. A **straight-through** cable uses… *(Objective: straight-through)*
   - A) T568A on one end, T568B on the other
   - B) the same standard on both ends
   - C) no standard
   - D) two cores

4. A **crossover** cable uses… *(Objective: crossover)*
   - A) the same standard on both ends
   - B) T568A on one end and T568B on the other
   - C) fiber only
   - D) 2 wires

5. Which cable connects **unlike** devices (PC to switch)? *(Objective: which cable)*
   - A) Crossover
   - B) Straight-through
   - C) Fiber only
   - D) Neither

6. **True or false —** Modern gear with Auto-MDI-X lets a straight-through cable work almost everywhere. Explain in one sentence. *(Objective: auto-mdi-x)*

7. Which cable would you traditionally use to connect **two PCs directly** (old gear)? *(Objective: which cable)*
   - A) Straight-through
   - B) Crossover
   - C) Fiber patch
   - D) Phone cable

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Straight-through &nbsp;&nbsp; ___ Crossover &nbsp;&nbsp; ___ Auto-MDI-X
   - A) T568A + T568B ends &nbsp; B) same standard both ends &nbsp; C) auto-fixes the crossover

9. Fill in the blank: T568A and T568B swap the ____________ and green pairs. *(Objective: standards)*

10. **Scenario —** You hold a cable tab-down and see the orange and green pairs are swapped between the two ends. What type of cable is it, and what is it for? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-06-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-06-04-wiring.md`. In brief:

- **Objective in one line:** learners tell straight-through from crossover, know T568A/B swap orange/green, and match cable to device types.
- **Common misconceptions:** A vs. B carry data differently; always need a crossover for two PCs; tabs-up reading. Correct all three.
- **Pacing:** ~28 min. The compare-both-ends lab is the payoff.
- **How CompTIA tests it:** straight-through vs. crossover use; T568A/B difference; Auto-MDI-X.
- **Support idea:** hold two ends tab-down and physically compare orange/green pairs.
- **Extension idea:** show a crimp tool and rollover/console cables for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Wiring standards & cable types**
>
> - **Pinout** = wire order in the RJ45. Two standards: **T568A** and **T568B** — they **swap orange & green**.
> - **Straight-through** = **same** standard both ends → **unlike** devices (PC ↔ switch, switch ↔ router).
> - **Crossover** = **T568A + T568B** ends → **like** devices (PC ↔ PC, switch ↔ switch).
> - **Auto-MDI-X** (modern gear) auto-fixes crossover → **straight-through works almost everywhere** now.
> - Read a cable: hold both ends **tab-down**; orange/green swapped = crossover.
>
> _(Full version: `resources/cheat-sheets/cabling-and-media-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Pinout** — The order the 8 wires are placed into the RJ45's pins.
- **T568A** — One standard wire order; swaps orange/green vs. T568B.
- **T568B** — The most common US wire order for RJ45.
- **Straight-through cable** — A cable using the same standard on both ends (unlike devices).
- **Crossover cable** — A cable using T568A on one end and T568B on the other (like devices).
- **Auto-MDI-X** — A feature that auto-fixes crossover, so straight-through works.

---

## 19. Homework

- **Practice:** Check two of your home cables tab-down. Are they straight-through? (Almost all patch cables are.)
- **Spaced review:** Redo the Lesson 06-03 flashcards for fiber (single vs. multimode).
- **Preview:** Now we put cables and speeds together. Next, we cover the **Ethernet standards and speeds** (10/100/1000BASE-T and beyond).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I tell straight-through from crossover now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can say what a pinout is.
- [ ] I know T568A and T568B swap the orange and green pairs.
- [ ] I can tell a straight-through cable from a crossover.
- [ ] I know Auto-MDI-X makes straight-through work almost everywhere.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: Ethernet standards and speeds.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M06-L04** — "Straight-Through vs. Crossover, T568A/B" · Module 06 · Unit 3_
