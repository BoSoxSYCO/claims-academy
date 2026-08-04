---
id: NA-M06-L02
module: 06
lesson: 02
title: "Connectors and Jacks (RJ45, Keystones)"
unit: 3
objective_ids: ["1.5"]
reading_level_target: 7
status: Published
est_minutes: 26
equipment_tier: E2
prerequisites: ["NA-M06-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 06 · Lesson 02] Connectors and Jacks (RJ45, Keystones)

> **Unit:** Unit 3 — Physical Media · **Time:** ~26 min · **Equipment:** E2 (an Ethernet cable in hand)
> **You'll need first:** Lesson 06-01 (twisted-pair copper cable).

A cable is only useful if it can plug into something. Last lesson you looked inside the cable. Now we look at the **ends**: the clear plastic plug (an **RJ45**) and the socket it clicks into (a **jack**). You'll also meet the wall and panel jacks that real buildings use.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Tell a **connector** (plug) from a **jack** (socket).
- [ ] Identify an **RJ45** connector and how it locks in.
- [ ] Explain what a **keystone jack** and a **patch panel** are.
- [ ] Tell an **RJ45** from a smaller **RJ11** (phone) connector.

---

## 2. Introduction — why this matters

Think about a **lamp plug and a wall outlet**. The plug is the male end you push in; the outlet is the female end that receives it. They must match, or nothing turns on. Every plug shape has one outlet shape that fits it.

Network cables work the same way. The **connector** is the plug on the cable's end; the **jack** is the socket it goes into. For twisted-pair Ethernet, that plug is an **RJ45** — the clear plastic clip you hear "click" when it seats. If the connector and jack don't match, the cable can't carry your data.

Why learn this? Because when you wire your home lab, you will plug RJ45 connectors into the switch and the laptop, and you may meet wall jacks and patch panels. Knowing the parts by name means you can follow any wiring guide — and answer the exam questions that show a connector and ask you to name it.

🎯 **Exam tip:** Network+ shows pictures of connectors. The big one is **RJ45** (8 pins, Ethernet); the smaller look-alike is **RJ11** (phone). Don't mix them up.

🔧 **Lab link:** The click you feel when a cable seats in the Dell switch is the RJ45's locking tab. A loose tab is a top cause of "no link."

---

## 3. Simple explanation

Let's name the plug, the socket, and the wall/panel parts.

### Connector vs. jack — plug vs. socket
A **connector** is the plug on the end of a cable (the male part you push in). A **jack** is the socket that receives it (the female part on a device or wall). Plug into socket — connector into jack.

### The RJ45 connector
The **RJ45** is the standard connector for twisted-pair Ethernet. It is a small, clear plastic plug with **8 gold pins** — one pin for each of the 8 wires (the 4 pairs from Lesson 06-01). It has a small plastic **tab** (clip) that snaps down to lock it into the jack. Press the tab to release it.

*(You may also see RJ45 written as "8P8C," meaning 8 positions, 8 contacts. Same thing.)*

### RJ45 vs. RJ11 — don't confuse them
The **RJ11** is a **smaller** connector used for **telephones**. It has fewer pins (usually 2 or 4) and a narrower body. An RJ45 is clearly **wider**. If a plug looks a bit small, it's probably RJ11 (phone), not RJ45 (Ethernet).

### Keystone jacks and patch panels
In a real building, cables run inside the walls. They end at parts you snap into place:

- A **keystone jack** is a small snap-in module — a jack you punch the cable's wires into, then clip into a **wall plate** or a panel. It gives a clean wall socket for a patch cable.
- A **patch panel** is a panel full of jacks where all the in-wall cables end. Short **patch cables** (RJ45 on both ends) then connect the panel to your switch. It keeps wiring neat and easy to change.

### Patch cable
A **patch cable** is a short, ready-made cable with an **RJ45 on each end**. It's what you use to connect a device to a jack, or a patch panel to a switch. The cable you'll use in the lab is a patch cable.

> **The big idea:** A **connector** (plug) goes into a **jack** (socket). Ethernet uses the **RJ45** connector (8 pins, locking tab) — bigger than the phone **RJ11**. In buildings, cables end at **keystone jacks** and **patch panels**, joined by short **patch cables**.

💡 **Tip:** To seat an RJ45, line up the tab and push until you hear and feel a **click**. To remove it, squeeze the tab down first, then pull.

⚠️ **Watch out:** A broken locking tab lets the plug wiggle loose. That causes an on-again/off-again link — one of the most common physical faults.

---

## 4. Real-world analogy

> **"A connector and jack are a plug and an outlet — one shape fits one socket."**

| Home electrical | Networking |
|-----------------|------------|
| The lamp **plug** (push in) | The **connector** (RJ45) |
| The **wall outlet** (receives it) | The **jack** (Ethernet port) |
| A **wall socket plate** | A **keystone jack** in a wall plate |
| A **breaker/junction panel** | A **patch panel** (many jacks) |
| A short **extension cord** | A **patch cable** (RJ45 both ends) |
| A tiny plug for a small device | An **RJ11** (phone) — smaller than RJ45 |

Match the plug to the socket, and the click means it's seated. Same idea, network gear.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Connector** | kuh-NEK-ter | The plug on the end of a cable (the male part). |
| **Jack** | jak | The socket that a connector plugs into (the female part). |
| **RJ45** | R-J-45 | The 8-pin connector used for twisted-pair Ethernet. |
| **RJ11** | R-J-11 | A smaller connector used for telephones (fewer pins). |
| **Keystone jack** | KEY-stone | A snap-in jack module that fits a wall plate or panel. |
| **Patch panel** | | A panel of jacks where in-wall cables end; links to the switch. |
| **Patch cable** | | A short cable with an RJ45 on each end. |

---

## 6. ASCII diagram

```
   CONNECTOR (plug)            JACK (socket)
     RJ45                        Ethernet port
     ┌───────┐                   ┌─────────┐
     │▓▓▓▓▓▓▓│ 8 gold pins       │  ▁▁▁▁▁  │
     │  cable│—                  │ (slot)  │   ← click in
     └──┐ ┌──┘                   └─────────┘
        └tab (locks it in)

   RJ45 (Ethernet, wider) ▓▓▓▓▓▓▓▓   vs.   RJ11 (phone, smaller) ▓▓▓▓

   IN A BUILDING:
   [wall keystone jack] —patch cable— [ PATCH PANEL ] —patch cable— [Switch]
```

_Plug (connector) into socket (jack). RJ45 is the Ethernet plug; it locks with a tab._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-06-02-connectors-jacks-01.svg` (created and stored in this module's `assets/`)
> **Shows:** an RJ45 connector (labeled 8 pins + locking tab) beside an Ethernet jack; a size comparison of RJ45 vs. the smaller RJ11; and a small building path: wall keystone jack → patch panel → switch, joined by patch cables.
> **Key elements & labels:** RJ45 pins and tab; the jack slot; the RJ45-vs-RJ11 size difference; keystone, patch panel, patch cable, switch.
> **Color meaning:** RJ45 and RJ11 differ by **size and label**, not color alone; each part is text-labeled.
> **Flow direction:** connector→jack on top; building path left to right below.
> **Alt text (required):** "An RJ45 connector with eight pins and a locking tab beside an Ethernet jack, a size comparison showing the RJ45 is wider than the smaller RJ11 phone connector, and a path from a wall keystone jack through a patch panel to a switch joined by patch cables."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-06-02-rj45-plug-01.jpg`
> A close-up of an RJ45 plug showing the gold pins and tab. Alt text: "A close-up of an RJ45 connector showing eight gold pins and the locking tab."
>
> **Photo 2** — `img-06-02-rj45-vs-rj11-01.jpg`
> An RJ45 next to an RJ11. Alt text: "An RJ45 Ethernet plug beside a smaller RJ11 phone plug for size comparison."
>
> **Photo 3** — `img-06-02-patch-panel-01.jpg`
> A patch panel with many jacks. Alt text: "A patch panel with rows of jacks where in-wall cables end."

---

## 9. Hands-on lab

**Goal:** examine a real RJ45 connector and practice seating and releasing it.
**Why:** feeling the click (and the tab) is how you'll spot a loose or broken connector.

**You will need**
- One Ethernet patch cable (Equipment tier **E2**). A device with an Ethernet port helps (laptop, router, or switch).
- Estimated time: 10 min.

⚠️ **Before you start (safety):** Handle the plug gently. Don't force it — it only fits one way.

### 9a. Step-by-step instructions

1. Hold the RJ45 end of your cable. Count the **gold pins** you can see through the clear plastic. (There should be 8.)
2. Find the small plastic **tab** on the connector. Press it with your finger and feel it flex.
3. Line up the connector with an **Ethernet port** (jack) so the tab faces the right way. Push gently until you hear/feel a **click**.
4. Give the cable a *very* light tug. It should stay put — the tab is holding it.
5. To remove it, **press the tab down first**, then pull the plug straight out.
6. If you have a phone cable handy, compare its **RJ11** plug — notice it's smaller.

### 9b. Expected results

- You counted 8 pins and found the locking tab.
- The plug clicked in and stayed on a light tug.
- ✅ **You did it if:** you can seat the RJ45 until it clicks and release it by pressing the tab.

### 9c. Verify it worked

1. Seated cables usually light a small **link light** on the port — look for it.
2. Say which part is the **connector** and which is the **jack**.

### 9d. Reset / roll back

Unplug the cable by pressing the tab. Nothing is changed on your gear.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Confusing RJ45 and RJ11 | You grab a phone plug for Ethernet | RJ45 is wider (8 pins); RJ11 is smaller |
| Pulling a plug without pressing the tab | You break the tab | Squeeze the tab down first, then pull |
| Using a cable with a broken tab | Link drops on and off | Replace the connector or the patch cable |
| Calling the socket a "connector" | You mislabel parts | Connector = plug; jack = socket |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Cable won't stay in | Broken locking tab | Replace the patch cable |
| No link light | Not fully seated | Re-seat until it clicks; check the other end |
| Plug won't fit the port | Wrong connector (RJ11) | Use an RJ45 for Ethernet |

---

## 12. Lesson summary

- A **connector** is the plug; a **jack** is the socket. Connector into jack.
- Ethernet uses the **RJ45** connector — **8 pins** and a **locking tab**.
- **RJ45** is wider than the phone **RJ11**; don't confuse them.
- In buildings, cables end at **keystone jacks** and **patch panels**, joined by short **patch cables**.

**One-sentence recap:** Ethernet cables end in an RJ45 connector — eight pins and a locking tab — that plugs into a jack, while buildings terminate cables at keystone jacks and patch panels joined by patch cables.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-06-02-fill-in-the-blank.md`
2. **Matching** — `wb-06-02-matching.md`
3. **Label the diagram** — `wb-06-02-label-the-diagram.md` (connector & jack)
4. **Short answer** — `wb-06-02-short-answer.md`
5. **Hands-on observation** — `wb-06-02-hands-on-observation.md` (seat an RJ45)
6. **Vocabulary review** — `wb-06-02-vocabulary-review.md`
7. **Reflection** — `wb-06-02-reflection.md`

**Quick written warm-up (do this now):** How many pins does an RJ45 have? Which is bigger — RJ45 or RJ11?

RJ45 pins: ____________  Bigger: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-06-02-knowledge-check.md`.)

1. What is a **connector**? *(Objective: connector vs jack)*
   - A) The socket on a device
   - B) The plug on the end of a cable
   - C) A type of switch
   - D) A number

2. What is a **jack**? *(Objective: connector vs jack)*
   - A) The plug on a cable
   - B) The socket that a connector plugs into
   - C) A cable category
   - D) A speed

3. How many pins does an **RJ45** connector have? *(Objective: RJ45)*
   - A) 2
   - B) 4
   - C) 6
   - D) 8

4. Which connector is used for **twisted-pair Ethernet**? *(Objective: RJ45)*
   - A) RJ11
   - B) RJ45
   - C) USB
   - D) HDMI

5. How is an **RJ11** different from an RJ45? *(Objective: RJ45 vs RJ11)*
   - A) It is bigger
   - B) It is smaller, for phones
   - C) It has 12 pins
   - D) It is for fiber

6. **True or false —** A broken locking tab can cause a link to drop on and off. Explain in one sentence. *(Objective: tab)*

7. What is a **keystone jack**? *(Objective: keystone)*
   - A) A snap-in jack module for a wall plate or panel
   - B) A type of cable
   - C) A speed rating
   - D) A router

8. **Matching —** write the letter next to each part. *(Objective: parts)*
   - ___ RJ45 &nbsp;&nbsp; ___ Patch panel &nbsp;&nbsp; ___ Patch cable
   - A) a panel of jacks where in-wall cables end &nbsp; B) the 8-pin Ethernet plug &nbsp; C) a short cable with RJ45 on both ends

9. Fill in the blank: To remove an RJ45 safely, press the ____________ first, then pull. *(Objective: tab)*

10. **Scenario —** A cable keeps falling out of the switch and the link blinks on and off. What part is likely broken, and how do you fix it? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-06-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-06-02-connectors.md`. In brief:

- **Objective in one line:** learners tell connector from jack, identify RJ45 (vs. RJ11), and name keystone/patch-panel parts.
- **Common misconceptions:** RJ45 vs. RJ11; connector vs. jack naming; pulling without the tab. Correct all three.
- **Pacing:** ~26 min. The seat-an-RJ45 lab is the payoff and ties to the home lab.
- **How CompTIA tests it:** connector identification from a picture; RJ45 = 8 pins/Ethernet, RJ11 = phone.
- **Support idea:** pass around a real RJ45 and an RJ11 for a side-by-side feel.
- **Extension idea:** show a crimp tool and a keystone punch-down for fast learners (no need to build yet).

---

## 17. Cheat sheet

> **Quick reference — Connectors & jacks**
>
> - **Connector** = plug (male). **Jack** = socket (female). Connector → jack.
> - **RJ45** = the Ethernet connector — **8 pins**, a **locking tab**. (Also "8P8C.")
> - **RJ11** = phone connector — **smaller**, fewer pins. Don't confuse with RJ45.
> - **Keystone jack** = snap-in jack for a wall plate/panel. **Patch panel** = many jacks where in-wall cables end.
> - **Patch cable** = short cable, RJ45 on both ends.
> - Broken **tab** → loose plug → on/off link. Press the tab to release.
>
> _(Full version: `resources/cheat-sheets/cabling-and-media-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Connector** — The plug on the end of a cable (the male part).
- **Jack** — The socket that a connector plugs into (the female part).
- **RJ45** — The 8-pin connector used for twisted-pair Ethernet.
- **RJ11** — A smaller connector used for telephones (fewer pins).
- **Keystone jack** — A snap-in jack module that fits a wall plate or panel.
- **Patch panel** — A panel of jacks where in-wall cables end; links to the switch.
- **Patch cable** — A short cable with an RJ45 on each end.

---

## 19. Homework

- **Practice:** Find every RJ45 jack in your home (router, switch, wall). Count them and note where they are.
- **Spaced review:** Redo the Lesson 06-01 flashcards for cable categories (Cat5e–Cat8).
- **Preview:** Copper isn't the only medium. Next, we look at **fiber optic** cable, which carries light instead of electricity.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I tell an RJ45 from an RJ11 now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can tell a connector from a jack.
- [ ] I can identify an RJ45 (8 pins, locking tab).
- [ ] I can tell RJ45 from the smaller RJ11.
- [ ] I know what a keystone jack, patch panel, and patch cable are.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: fiber optic basics.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M06-L02** — "Connectors and Jacks (RJ45, Keystones)" · Module 06 · Unit 3_
