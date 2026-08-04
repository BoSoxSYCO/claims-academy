---
id: NA-M06-L05
module: 06
lesson: 05
title: "Ethernet Standards and Speeds"
unit: 3
objective_ids: ["1.5"]
reading_level_target: 7
status: Published
est_minutes: 27
equipment_tier: E1
prerequisites: ["NA-M06-L01", "NA-M04-L06"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 06 · Lesson 05] Ethernet Standards and Speeds

> **Unit:** Unit 3 — Physical Media · **Time:** ~27 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 06-01 (cable categories) and Lesson 04-06 (speed words).

You've met cables and connectors. But what makes them all work together is a set of rules called **Ethernet**. Those rules have short names like **1000BASE-T** that pack the speed and cable type into a few characters. This lesson teaches you to read those names and match a speed to the cable it needs.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what **Ethernet** is (the rules for wired LANs).
- [ ] Read a **BASE-T** name and get the speed and cable type from it.
- [ ] Match common speeds (**10/100/1000/10G**) to the cable category they need.
- [ ] Explain **auto-negotiation** and **duplex** in plain words.

---

## 2. Introduction — why this matters

Think about **road signs**. A sign like "SPEED LIMIT 55" packs a rule into a tiny space — everyone reads it the same way and drives accordingly. You don't need a paragraph; the short code says it all.

**Ethernet** standards work like road signs for cables. A name like **1000BASE-T** is a compact code: "1000" is the speed, "BASE" is the signaling, and "T" is the cable type. Once you can read the code, you instantly know how fast a link runs and what cable it needs.

Why learn this? Because when you build your home lab, your laptop, switch, and cables each support certain Ethernet speeds — and the link runs only as fast as the **slowest** part. On the exam, matching a standard name to its speed, cable, and distance is tested directly.

🎯 **Exam tip:** Know the common BASE-T standards by speed and required cable: **10BASE-T, 100BASE-TX, 1000BASE-T, 10GBASE-T** — and the Cat category each needs.

🔧 **Lab link:** Your Dell switch shows a link light and often a speed light per port. After you cable it up, you'll confirm the negotiated speed.

---

## 3. Simple explanation

Let's decode the name, list the common speeds, then cover auto-negotiation and duplex.

### What Ethernet is
**Ethernet** is the family of rules (the IEEE 802.3 standards) for **wired local networks**. It defines the speeds, the cabling, the distances, and how devices share the wire. Almost every wired LAN on Earth runs Ethernet.

### Reading a BASE-T name
Ethernet names follow a pattern like **1000BASE-T**:

- The **number** is the speed in **megabits per second (Mbps)**: 10, 100, 1000 (= 1 Gbps), 10G (= 10 Gbps).
- **BASE** means **baseband** — the whole cable carries one signal at a time (you don't need the detail; just know "BASE" = normal Ethernet).
- The **letter(s)** show the medium: **T** = twisted-pair copper; **X** is a variant of copper; **F, S, L, R** mean fiber (S/short = multimode, L/long = single-mode).

So **1000BASE-T** = 1000 Mbps (1 Gbps) over twisted-pair copper. **10GBASE-T** = 10 Gbps over copper.

### The common speeds and their cables
The link needs a cable good enough for the speed (from Lesson 06-01):

| Standard | Speed | Cable needed | Distance |
|----------|-------|--------------|----------|
| **10BASE-T** | 10 Mbps | Cat3+ | 100 m |
| **100BASE-TX** (Fast Ethernet) | 100 Mbps | Cat5+ | 100 m |
| **1000BASE-T** (Gigabit Ethernet) | 1 Gbps | Cat5e+ | 100 m |
| **10GBASE-T** | 10 Gbps | Cat6a (Cat6 ≤55 m) | 100 m |

**Fast Ethernet** is the old nickname for 100 Mbps; **Gigabit Ethernet** for 1 Gbps.

### Auto-negotiation and duplex
- **Auto-negotiation** is when two connected devices automatically agree on the **fastest speed and duplex they both support**. Plug in a gigabit laptop and a gigabit switch, and they settle on 1 Gbps by themselves.
- **Duplex** is about direction. **Full-duplex** means a device can **send and receive at the same time** (all modern links). **Half-duplex** means only **one direction at a time** (old shared setups). Modern Ethernet is full-duplex.

### The slowest part wins
A link runs at the **lowest** speed shared by both devices **and** the cable. A gigabit laptop on a Cat5e cable but plugged into a 100 Mbps switch runs at only **100 Mbps** — the switch is the limit.

> **The big idea:** **Ethernet** is the rulebook for wired LANs. A **BASE-T** name gives the **speed** (number, in Mbps) and **cable type** (T = copper). Common: **10/100/1000/10G**. **Auto-negotiation** picks the fastest shared speed; modern links are **full-duplex**. The link runs at the **slowest** part.

💡 **Tip:** Read the name left to right: number = speed, "BASE" = normal Ethernet, last letter = cable (T = copper).

⚠️ **Watch out:** A gigabit cable doesn't give gigabit speed if the switch or laptop only does 100 Mbps. Check every part of the link.

---

## 4. Real-world analogy

> **"Ethernet names are road signs: a short code tells you the speed limit and the road type."**

| Road sign | Ethernet name |
|-----------|---------------|
| "SPEED LIMIT 55" | The **number** (speed in Mbps) |
| "PAVED ROAD" vs "GRAVEL" | The **medium** letter (T = copper, F/S/L = fiber) |
| The car agrees to the posted limit | **Auto-negotiation** picks the shared speed |
| A two-way road (both directions at once) | **Full-duplex** |
| A one-lane bridge (take turns) | **Half-duplex** |
| The slowest vehicle sets the pace | The **slowest part** limits the link |

Read the sign, know the limit. Read the Ethernet name, know the speed and cable.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Ethernet** | EE-ther-net | The family of rules for wired local networks (IEEE 802.3). |
| **BASE-T** | base-T | Ethernet name format: number = speed, T = twisted-pair copper. |
| **Fast Ethernet** | | The 100 Mbps Ethernet standard (100BASE-TX). |
| **Gigabit Ethernet** | GIG-a-bit | The 1 Gbps Ethernet standard (1000BASE-T). |
| **Auto-negotiation** | | Devices agreeing on the fastest speed and duplex they both support. |
| **Duplex** | DOO-plex | Direction of data: full = both ways at once; half = one at a time. |

---

## 6. ASCII diagram

```
   READING AN ETHERNET NAME:   1000 BASE T
                                 │    │    │
        speed in Mbps ──────────┘    │    └── medium: T = copper
        (1000 = 1 Gbps)              └── BASE = normal Ethernet

   COMMON COPPER STANDARDS (need a good-enough cable):
     10BASE-T    10 Mbps   Cat3+     100 m
     100BASE-TX  100 Mbps  Cat5+     100 m   (Fast Ethernet)
     1000BASE-T  1 Gbps    Cat5e+    100 m   (Gigabit Ethernet)
     10GBASE-T   10 Gbps   Cat6a     100 m

   AUTO-NEGOTIATION → devices pick the fastest SHARED speed.
   The SLOWEST part of the link (device or cable) wins.
```

_The number is speed; T means copper. The link runs at the slowest part._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-06-05-ethernet-speeds-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a "decode the name" callout breaking 1000BASE-T into speed / BASE / medium; a ladder of the four copper standards with speed + Cat cable + distance; a small note on auto-negotiation and "slowest part wins."
> **Key elements & labels:** the name parts labeled; the four standards with their speeds and Cat categories; the slowest-part rule.
> **Color meaning:** each standard rung is labeled with its speed and cable in text, so it reads in black and white.
> **Flow direction:** decode on top, speed ladder low-to-high.
> **Alt text (required):** "A breakdown of the name 1000BASE-T into speed 1000 megabits, BASE for normal Ethernet, and T for twisted-pair copper, then a ladder of four copper standards: 10BASE-T at 10 megabits on Cat3, 100BASE-TX at 100 megabits on Cat5, 1000BASE-T at 1 gigabit on Cat5e, and 10GBASE-T at 10 gigabits on Cat6a, all to 100 meters, with a note that auto-negotiation picks the fastest shared speed and the slowest part of the link wins."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-06-05-switch-speed-lights-01.jpg`
> A switch port with link/speed LEDs lit. Alt text: "A switch port showing link and speed indicator lights."
>
> **Photo 2** — `img-06-05-adapter-status-01.jpg`
> A Windows network status screen showing the link speed. Alt text: "A Windows network status window showing the connection speed in megabits or gigabits."
>
> **Photo 3** — `img-06-05-cat-label-speed-01.jpg`
> A Cat6 cable jacket next to a "1 Gbps / 10 Gbps" note. Alt text: "A Cat6 cable jacket beside a note showing the speeds it supports."

---

## 9. Hands-on lab

**Goal:** find your laptop's current Ethernet (or Wi-Fi) link speed and match it to a standard.
**Why:** seeing your real negotiated speed connects the names to your own gear.

**You will need**
- Your Windows laptop (Equipment tier **E1**). A wired connection is ideal but not required.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** You are only reading a status screen. You change nothing.

### 9a. Step-by-step instructions

1. Open **Settings** (press the Windows key, type "Settings," press Enter).
2. Go to **Network & internet**, then open your connection's **Properties** (Ethernet or Wi-Fi).
3. Find the **Link speed** (also called "Speed" or "Receive/Transmit"). Write it down (for example, 1000 Mbps).
4. Match your number to a standard: 100 Mbps → 100BASE-TX; 1000 Mbps → 1000BASE-T; 2500/10000 → faster standards.
5. If you are on a wired link, note your cable's category (from Lesson 06-01). Is the cable fast enough for the speed you got?
6. Write one sentence naming the **slowest part** that could be limiting your speed.

### 9b. Expected results

- You found a link speed in Mbps (or Gbps).
- You matched it to an Ethernet standard name.
- ✅ **You did it if:** you can say "my link negotiated ___ Mbps, which is ___BASE-__."

### 9c. Verify it worked

1. Point to your link-speed number and name its standard.
2. Say what would happen if you plugged into a 100 Mbps-only port (the link drops to 100).

### 9d. Reset / roll back

Nothing to undo — you only read status. Close Settings when done.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Expecting gigabit from any cable | You're puzzled by slow speed | Every part (device + cable) must support the speed |
| Ignoring the switch/port speed | You blame the cable | The slowest device also limits the link |
| Thinking "BASE" changes the speed | You misread the name | The **number** is the speed; BASE is just signaling |
| Confusing half- and full-duplex | You misjudge old gear | Modern = full-duplex (both ways at once) |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Link speed lower than expected | A slow device or cable | Check the switch port speed and the cable category |
| No gigabit on a gigabit laptop | Cat5 or worse cable | Use Cat5e or better for 1000BASE-T |
| Link keeps dropping | Duplex mismatch (old gear) | Set both ends to auto-negotiation |

---

## 12. Lesson summary

- **Ethernet** is the rulebook for wired LANs (IEEE 802.3).
- A **BASE-T** name gives the **speed** (number, in Mbps) and **cable** (T = copper).
- Common: **10BASE-T, 100BASE-TX (Fast), 1000BASE-T (Gigabit), 10GBASE-T** — each needs a good-enough Cat cable.
- **Auto-negotiation** picks the fastest shared speed; modern links are **full-duplex**. The **slowest part** limits the link.

**One-sentence recap:** Ethernet standards like 1000BASE-T pack the speed and cable type into a short name, and a link runs at the slowest speed shared by both devices and the cable.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-06-05-fill-in-the-blank.md`
2. **Matching** — `wb-06-05-matching.md`
3. **Label the diagram** — `wb-06-05-label-the-diagram.md` (decode a name)
4. **Short answer** — `wb-06-05-short-answer.md`
5. **Hands-on observation** — `wb-06-05-hands-on-observation.md` (read your link speed)
6. **Vocabulary review** — `wb-06-05-vocabulary-review.md`
7. **Reflection** — `wb-06-05-reflection.md`

**Quick written warm-up (do this now):** In "1000BASE-T," what is the 1000 and what is the T? What cable does 10GBASE-T need?

1000 = ____________  T = ____________  10GBASE-T cable: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-06-05-knowledge-check.md`.)

1. What is **Ethernet**? *(Objective: Ethernet)*
   - A) A brand of cable
   - B) The family of rules for wired local networks
   - C) A Wi-Fi standard only
   - D) A type of connector

2. In **1000BASE-T**, what does "1000" mean? *(Objective: read name)*
   - A) 1000 meters
   - B) 1000 Mbps (1 Gbps) speed
   - C) 1000 pins
   - D) Cat1000

3. In a BASE-T name, what does the **T** mean? *(Objective: read name)*
   - A) Telephone
   - B) Twisted-pair copper
   - C) Ten
   - D) Test

4. Which standard is **Gigabit Ethernet**? *(Objective: standards)*
   - A) 10BASE-T
   - B) 100BASE-TX
   - C) 1000BASE-T
   - D) 10GBASE-T

5. What cable does **10GBASE-T** need for a full 100 m run? *(Objective: cable match)*
   - A) Cat3
   - B) Cat5
   - C) Cat5e
   - D) Cat6a

6. **True or false —** A gigabit laptop always runs at 1 Gbps no matter the switch. Explain in one sentence. *(Objective: slowest part)*

7. What does **auto-negotiation** do? *(Objective: auto-neg)*
   - A) Picks the fastest speed and duplex both devices support
   - B) Sets the cable color
   - C) Chooses a category
   - D) Encrypts the link

8. **Matching —** write the letter next to each standard. *(Objective: standards)*
   - ___ 100BASE-TX &nbsp;&nbsp; ___ 1000BASE-T &nbsp;&nbsp; ___ 10GBASE-T
   - A) 1 Gbps, Cat5e+ &nbsp; B) 10 Gbps, Cat6a &nbsp; C) 100 Mbps, Cat5+

9. Fill in the blank: **Full-**____________ means a device can send and receive at the same time. *(Objective: duplex)*

10. **Scenario —** Your gigabit laptop connects with a Cat5e cable to a switch port that only supports 100 Mbps. What speed will the link run, and why? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-06-05-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-06-05-ethernet.md`. In brief:

- **Objective in one line:** learners read a BASE-T name, match speeds to Cat cables, and explain auto-negotiation/duplex.
- **Common misconceptions:** any cable gives gigabit; BASE changes speed; ignoring the switch. Correct all three.
- **Pacing:** ~27 min. The read-your-link-speed lab is the payoff.
- **How CompTIA tests it:** standard name → speed/cable/distance; auto-negotiation; full vs. half duplex.
- **Support idea:** decode several names on the board (10/100/1000/10G).
- **Extension idea:** fiber standard names (SX/LX/SR/LR) and 2.5G/5GBASE-T for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Ethernet standards**
>
> - **Ethernet** = the rules for wired LANs (IEEE 802.3).
> - **Read the name:** number = speed (Mbps), **BASE** = normal Ethernet, **T** = copper (F/S/L = fiber).
> - **10BASE-T** 10 Mbps (Cat3) · **100BASE-TX** 100 Mbps (Cat5) · **1000BASE-T** 1 Gbps (Cat5e) · **10GBASE-T** 10 Gbps (Cat6a).
> - **Auto-negotiation** picks the fastest shared speed/duplex. Modern links are **full-duplex**.
> - **Slowest part wins:** device + cable + port must all support the speed.
>
> _(Full version: `resources/cheat-sheets/cabling-and-media-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Ethernet** — The family of rules for wired local networks (IEEE 802.3).
- **BASE-T** — Ethernet name format: number = speed, T = twisted-pair copper.
- **Fast Ethernet** — The 100 Mbps Ethernet standard (100BASE-TX).
- **Gigabit Ethernet** — The 1 Gbps Ethernet standard (1000BASE-T).
- **Auto-negotiation** — Devices agreeing on the fastest speed and duplex they both support.
- **Duplex** — Direction of data: full = both ways at once; half = one at a time.

---

## 19. Homework

- **Practice:** Check the link speed on two devices at home (laptop, game console). What standard is each?
- **Spaced review:** Redo the Lesson 06-04 flashcards for straight-through vs. crossover.
- **Preview:** Cables and standards can still fail physically. The last lesson of this module covers **cable testing and common physical problems**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I read a BASE-T name now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can say what Ethernet is.
- [ ] I can read a BASE-T name (speed + cable).
- [ ] I can match 10/100/1000/10G to their Cat cables.
- [ ] I can explain auto-negotiation and full vs. half duplex.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: cable testing and physical problems.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M06-L05** — "Ethernet Standards and Speeds" · Module 06 · Unit 3_
