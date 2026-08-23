---
id: NA-M06-L06
module: 06
lesson: 06
title: "Cable Testing and Common Physical Problems"
unit: 3
objective_ids: ["1.5", "5.2"]
reading_level_target: 7
status: Published
est_minutes: 28
equipment_tier: E2
prerequisites: ["NA-M06-L01", "NA-M06-L02", "NA-M06-L04"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 06 · Lesson 06] Cable Testing and Common Physical Problems

> **Unit:** Unit 3 — Physical Media · **Time:** ~28 min · **Equipment:** E2 (a cable + a device to plug into)
> **You'll need first:** Lessons 06-01 (cable), 06-02 (connectors), and 06-04 (wiring).

You've built up a whole picture of cables, connectors, and standards. But cables fail — they break, get miswired, run too far, or pick up noise. This last lesson of the module teaches you the **common physical problems** and the **tools** that find them, so you can fix a "no link" fast.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Name the common **physical cable problems** (open, short, miswire, attenuation, interference).
- [ ] Explain what a **cable tester** and a **tone generator** each do.
- [ ] Use **continuity** to describe a good vs. broken wire.
- [ ] Follow a simple **check-the-basics-first** troubleshooting order.

---

## 2. Introduction — why this matters

Think about a **doctor's checkup**. Before big tests, the doctor checks the simple things — pulse, breathing, temperature. Most problems show up there. Only if needed do they order deeper tests.

Cables are the same. When a link won't work, the cause is very often something **physical and simple**: a cable not fully seated, a broken plug, a run that's too long, or noise from nearby power. A **cable tester** is like a stethoscope — it checks each wire's "pulse" from end to end. Knowing the common faults and the tools that spot them turns a mystery into a two-minute fix.

Why learn this? Because in the home lab (and on the job), "it won't connect" is the most common problem you'll face, and it's usually the cable or the connector. On the exam, cable faults and their test tools are directly tested.

🎯 **Exam tip:** Know the faults — **open, short, miswire/wrong pinout, split pair, attenuation, interference (EMI)** — and the tools: **cable tester** (finds opens/shorts/miswires) and **tone generator/probe** (traces a cable).

🔧 **Lab link:** If a Dell switch port shows no link light, this lesson's check-the-basics order is exactly what you'll run.

---

## 3. Simple explanation

Let's cover the common faults, then the tools, then a simple checklist.

### Common physical problems
- **Open:** a wire is **broken or cut**, so the signal can't get through — like a gap in a circuit. No **continuity**.
- **Short:** two wires **touch** when they shouldn't, scrambling the signal.
- **Miswire (wrong pinout):** wires are in the **wrong order** in the connector (a T568A/B mistake from Lesson 06-04). It may link at low speed or not at all.
- **Split pair:** two wires from **different pairs** are used together. It can test "connected" but suffers heavy **crosstalk** and errors.
- **Attenuation (signal loss):** the signal gets **too weak** over distance. This is why twisted pair stops at **100 m** (Lesson 06-01).
- **Interference (EMI):** nearby power lines or motors add **noise**, hurting the signal (why we twist and shield).
- **Bad connector / loose plug:** a broken locking **tab** or a poor crimp makes the link cut in and out (Lesson 06-02).
- **Damage / kink:** a crushed or sharply bent cable (or fiber) blocks the signal.

### The tools that find them
- **Continuity** is simply whether a wire has an unbroken path end to end. A good wire has continuity; an **open** does not.
- A **cable tester** checks **each of the 8 wires** from one end to the other. It shows opens, shorts, and miswires — usually with a light per pin. It's the everyday tool for "is this cable good?"
- A **tone generator and probe** (a "toner") helps you **find one cable** in a big bundle. You clip the tone onto one end, then wave the probe over cables until it beeps on the matching one.
- A **cable certifier** is a pro tool that proves a cable meets its category (e.g., truly Cat6a). More than most people need.
- For **fiber**, special tools (like an OTDR) find breaks by distance — mentioned here so the name is familiar.

### Check the basics first (troubleshooting order)
1. **Look:** Is there a **link light**? Is the plug fully seated (does it click)?
2. **Re-seat:** Unplug and firmly re-plug both ends.
3. **Swap:** Try a **known-good cable**. If it works, the old cable was the problem.
4. **Check length and route:** Is the run under **100 m**? Is it away from power lines/motors?
5. **Test:** Use a **cable tester** to find an open, short, or miswire.
6. **Trace:** Use a **toner** to find which cable is which in a bundle.

> **The big idea:** Most link problems are **physical and simple**: an **open** (break), a **short** (touching wires), a **miswire**, too much length (**attenuation**), or noise (**interference**). A **cable tester** checks each wire's **continuity**; a **tone generator** traces a cable. Check the basics first.

💡 **Tip:** Always start with the cheapest test: swap in a cable you know works. It solves most "no link" cases in seconds.

⚠️ **Watch out:** A cable that "tests connected" can still be a **split pair** — it passes a basic check but fails at speed. Use a real cable tester, not just a link light, for tricky cases.

---

## 4. Real-world analogy

> **"Testing a cable is a doctor's checkup: check the pulse (continuity) first, then run deeper tests only if needed."**

| Doctor's checkup | Cable testing |
|------------------|---------------|
| Feeling for a pulse | Checking **continuity** on each wire |
| No pulse in a limb | An **open** (broken wire) |
| Two nerves crossed | A **short** (wires touching) |
| A voice fading across a big room | **Attenuation** over distance |
| Noise drowning out a whisper | **Interference (EMI)** |
| A stethoscope | A **cable tester** |
| Calling a name to find someone in a crowd | A **tone generator/probe** |

Simple checks catch most problems. Reach for the fancy tools only when the basics don't explain it.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Continuity** | kon-tih-NEW-ih-tee | Whether a wire has an unbroken path from end to end. |
| **Open** | OH-pen | A broken or cut wire — no continuity, no signal. |
| **Short** | short | Two wires touching when they shouldn't, scrambling the signal. |
| **Attenuation** | uh-ten-yoo-AY-shun | Signal loss — the signal weakening over distance. |
| **Cable tester** | | A tool that checks each wire end to end for opens, shorts, and miswires. |
| **Tone generator** | | A tool that sends a tone so a probe can trace/find a cable. |

---

## 6. ASCII diagram

```
   GOOD WIRE (continuity):   end1 ●────────────────● end2   signal passes ✔

   OPEN (break):             end1 ●──────  ╳  ─────● end2   no signal ✗
   SHORT (touching):         end1 ●───┬────────────● end2   wires cross ✗
                                       └──(touch)

   TOOLS:
     [ CABLE TESTER ]  → lights each pin 1–8: shows open / short / miswire
     [ TONE GEN ]))) → ((( [ PROBE ]  → beeps on the matching cable in a bundle

   CHECK BASICS FIRST:  link light? → re-seat → swap known-good → length/route → test → trace
```

_A good wire has continuity end to end; a tester lights each pin; a toner finds the cable._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-06-06-cable-testing-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three wire states (good/continuity, open/break, short/touching); a cable tester with 8 pin lights (some green, some red-labeled "fault"); a tone generator + probe tracing a cable in a bundle; and a numbered "check basics first" flow.
> **Key elements & labels:** the three faults labeled; the tester's pin lights with pass/fault in text; the toner/probe; the 6-step flow.
> **Color meaning:** pass/fault shown by **label** (✓/✗ and text), never color alone; each tool named.
> **Flow direction:** faults on top, tools middle, checklist as a numbered flow.
> **Alt text (required):** "Three wire states — a good wire with continuity, an open with a break, and a short with two wires touching — then a cable tester whose eight pin lights show pass or fault in text, a tone generator and probe tracing one cable in a bundle, and a numbered check-the-basics-first flow: link light, re-seat, swap a known-good cable, check length and route, test, then trace."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-06-06-cable-tester-01.jpg`
> A cable tester with lit pin LEDs. Alt text: "A cable tester with a row of pin lights showing which wires pass."
>
> **Photo 2** — `img-06-06-toner-probe-01.jpg`
> A tone generator clipped to a cable and a probe. Alt text: "A tone generator clipped to a cable end with a probe used to trace it."
>
> **Photo 3** — `img-06-06-kinked-cable-01.jpg`
> A sharply kinked cable. Alt text: "A network cable with a sharp kink that can break the signal."

---

## 9. Hands-on lab

**Goal:** run the check-the-basics order on a real link, and identify one physical risk.
**Why:** this is the exact routine you'll use whenever a link won't come up.

**You will need**
- One patch cable and a device with an Ethernet port (Equipment tier **E2**). (A cable tester is optional.)
- Estimated time: 12 min.

⚠️ **Before you start (safety):** Only plug/unplug gently and look. Don't cut cables. Press the tab to unplug.

### 9a. Step-by-step instructions

1. Plug the cable into a device's Ethernet port and look for a **link light**. Note whether it's on.
2. **Re-seat** both ends — unplug (press the tab) and firmly re-plug until each clicks.
3. If you have a second cable, **swap** it in. Does the link behave differently? Write down what changed.
4. Look at the cable's **route**: is any part sharply kinked, crushed, or run right next to a power strip or motor? Note any risk.
5. Estimate the cable **length**. Is it well under 100 m? (At home, yes.)
6. Write your findings: link light (yes/no), did re-seating or swapping help, and one physical risk you spotted.

### 9b. Expected results

- You checked the link light, re-seated, and (if possible) swapped cables.
- You spotted at least one physical risk (kink, run near power, loose tab, long run).
- ✅ **You did it if:** you can name what you'd check first, second, and third for a "no link" problem.

### 9c. Verify it worked

1. Say the first three steps of the check-the-basics order from memory.
2. Name which tool finds an **open** in a wire (a cable tester).

### 9d. Reset / roll back

Leave the working cable plugged in, or unplug gently by pressing the tab. Nothing is changed on your gear.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Skipping the simple checks | You chase hard causes first | Check link light, re-seat, and swap before anything else |
| Trusting a link light alone | You miss a split pair | Use a real cable tester for tricky, error-prone links |
| Ignoring the route | EMI/kinks keep hurting you | Keep cables away from power and never kink them |
| Blaming the device | You replace the wrong thing | Swap a known-good cable to isolate the cable vs. device |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| No link light | Not seated / open / dead port | Re-seat, swap cable, try another port |
| Link but slow/errors | Miswire, split pair, or EMI | Run a cable tester; move away from power sources |
| Link cuts in and out | Loose/broken tab or damaged cable | Replace the patch cable |
| Can't find the right cable in a bundle | Unlabeled cables | Use a tone generator and probe to trace it |

---

## 12. Lesson summary

- Common cable faults: **open** (break), **short** (touching), **miswire**, **split pair**, **attenuation** (too long), **interference** (EMI), and **bad connectors/damage**.
- **Continuity** = an unbroken path end to end; an **open** breaks it.
- A **cable tester** checks each wire for opens/shorts/miswires; a **tone generator/probe** traces a cable in a bundle.
- **Check the basics first:** link light → re-seat → swap known-good → length/route → test → trace.

**One-sentence recap:** Most link problems are simple physical faults — opens, shorts, miswires, too much length, or noise — that a cable tester and a check-the-basics-first routine will find fast.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-06-06-fill-in-the-blank.md`
2. **Matching** — `wb-06-06-matching.md`
3. **Label the diagram** — `wb-06-06-label-the-diagram.md` (faults & tools)
4. **Short answer** — `wb-06-06-short-answer.md`
5. **Hands-on observation** — `wb-06-06-hands-on-observation.md` (check-the-basics)
6. **Vocabulary review** — `wb-06-06-vocabulary-review.md`
7. **Reflection** — `wb-06-06-reflection.md`

**Quick written warm-up (do this now):** What tool finds an open wire? What is the first thing to check on a "no link" problem?

Tool for open: ____________  First check: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-06-06-knowledge-check.md`.)

1. What is an **open** in a cable? *(Objective: faults)*
   - A) Two wires touching
   - B) A broken or cut wire (no continuity)
   - C) A wire that is too fast
   - D) A type of connector

2. What is a **short**? *(Objective: faults)*
   - A) A broken wire
   - B) Two wires touching when they shouldn't
   - C) A cable under 1 meter
   - D) A fiber core

3. What is **attenuation**? *(Objective: faults)*
   - A) The signal getting weaker over distance
   - B) A crossed pair
   - C) A locking tab
   - D) A speed rating

4. What does a **cable tester** find? *(Objective: tools)*
   - A) Opens, shorts, and miswires
   - B) The internet speed
   - C) A Wi-Fi password
   - D) The cable's color

5. What does a **tone generator and probe** do? *(Objective: tools)*
   - A) Speeds up the link
   - B) Traces/finds one cable in a bundle
   - C) Encrypts the cable
   - D) Adds shielding

6. **True or false —** A cable that shows a link light is guaranteed to have no wiring faults. Explain in one sentence. *(Objective: split pair)*

7. What should you check **first** for a "no link" problem? *(Objective: order)*
   - A) Buy a new switch
   - B) The link light and whether the plug is seated
   - C) The internet plan
   - D) The OSI model

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Open &nbsp;&nbsp; ___ Short &nbsp;&nbsp; ___ Continuity
   - A) two wires touching &nbsp; B) an unbroken end-to-end path &nbsp; C) a broken wire

9. Fill in the blank: Twisted pair stops at 100 m because the signal weakens — this loss is called ____________. *(Objective: attenuation)*

10. **Scenario —** A port shows no link light. Describe the first three things you would check, in order. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-06-06-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-06-06-testing.md`. In brief:

- **Objective in one line:** learners name common cable faults, the test tools, and the check-basics-first order.
- **Common misconceptions:** trust the link light; skip simple checks; blame the device. Correct all three.
- **Pacing:** ~28 min — the module capstone; the check-the-basics lab is the payoff.
- **How CompTIA tests it:** fault names (open/short/miswire/split pair/attenuation/EMI) and tools (tester, toner).
- **Support idea:** demo a cable tester lighting each pin; show a kinked cable.
- **Extension idea:** loopback plugs, cable certifiers, and OTDR for fiber for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Cable testing & faults**
>
> - **Faults:** **open** (break) · **short** (touching) · **miswire** (wrong pinout) · **split pair** (crossed pairs, passes but errors) · **attenuation** (too long) · **interference/EMI** (noise) · bad connector/kink.
> - **Continuity** = unbroken path end to end; an **open** has none.
> - **Cable tester** → opens/shorts/miswires (pin lights). **Tone generator + probe** → trace one cable in a bundle.
> - **Check basics first:** link light → re-seat → swap known-good → length/route → test → trace.
> - **Cheapest test wins:** swap in a cable you know is good.
>
> _(Full version: `resources/cheat-sheets/cabling-and-media-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Continuity** — Whether a wire has an unbroken path from end to end.
- **Open** — A broken or cut wire — no continuity, no signal.
- **Short** — Two wires touching when they shouldn't, scrambling the signal.
- **Attenuation** — Signal loss — the signal weakening over distance.
- **Cable tester** — A tool that checks each wire end to end for opens, shorts, and miswires.
- **Tone generator** — A tool that sends a tone so a probe can trace/find a cable.

---

## 19. Homework

- **Practice:** Walk your home network and find one cable at risk (kinked, run near power, loose plug). Note how you'd fix it.
- **Spaced review:** Redo the Lesson 06-05 flashcards for Ethernet standards and speeds.
- **Preview:** That completes physical media. Next module moves up a layer to the devices that use these cables — switches and how they work (Module 07).

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I list the first steps for a "no link" problem now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can name the common cable faults (open, short, miswire, attenuation, EMI).
- [ ] I can say what a cable tester and a tone generator each do.
- [ ] I can explain continuity.
- [ ] I can run the check-the-basics-first order.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next module: switches (Module 07).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M06-L06** — "Cable Testing and Common Physical Problems" · Module 06 · Unit 3_
