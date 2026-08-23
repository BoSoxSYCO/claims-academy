---
id: NA-M00-L04
module: 00
lesson: 04
title: "Meet Your Home Lab — a Tour of Your Equipment"
unit: 1
objective_ids: ["orientation"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M00-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-07"
---

# [Module 00 · Lesson 04] Meet Your Home Lab — a Tour of Your Equipment

> **Unit:** Unit 1 — On-Ramp · **Time:** ~25 min · **Equipment:** your lab gear (or follow along on paper)
> **You'll need first:** Lessons 00-01 to 00-03.

One of the two big goals of this course is to build a real network with your own hands. That means real equipment. Today we just meet the gear — a friendly tour, no setup yet. You don't need to own it all right now. You can follow along on paper and picture each piece. When you are ready, you'll build slowly, one step at a time.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Name the four pieces of your home lab.
- [ ] Say, in plain words, what each one does.
- [ ] Point to the ports and lights that matter.
- [ ] Feel ready to start building in later modules.

---

## 2. Introduction — why this matters

Reading about networks is good. Touching one is better. When you plug in a cable and see a light turn green, the ideas become real. That is why this course pairs every big idea with hands-on practice.

Your home lab has just four kinds of gear. That's it. Each one has a simple job. Once you can name them and say what they do, the hands-on labs will feel friendly, not scary.

Today there is nothing to configure and nothing to break. We are only looking and learning names.

🎯 **Exam tip:** The exam expects you to know what a switch, a router, and a cable each do. Meeting the real thing makes that stick.

🔧 **Lab link:** From Module 00-05 on, you'll start setting up. This tour is your map of the gear.

---

## 3. Simple explanation

Here are your four pieces of equipment, one at a time.

### Piece 1 — Your Windows laptop

Your laptop is your main computer and your test tool. Later, you'll type simple commands on it, like `ipconfig` and `ping`, to check the network.

- **What it does:** runs your software and, later, the tools that test the network.
- **One thing to notice:** it has a network port (a rectangular **RJ45** jack) or Wi-Fi, or both.

> ⚠️ Command names like `ipconfig` are real Windows commands. Their output varies by machine. **[TO VERIFY ON HARDWARE]**

### Piece 2 — The Dell PowerConnect 3424 switch

This is the centerpiece of your lab. A **switch** connects wired devices so they can talk on the same local network. Yours is a **managed switch**, which means you can log into it and change its settings. That makes it perfect for learning.

- **What it does:** connects wired devices and forwards their traffic to the right **port**.
- **One thing to notice:** it has a row of network ports, plus a separate **console port** used for the very first login. It is a 24-port managed switch. *[TO VERIFY ON HARDWARE — confirm the exact port layout and labels on your unit.]*

### Piece 3 — Your home router

Your **router** is the door to the internet. It shares one internet connection with all your devices and hands out addresses automatically.

- **What it does:** connects your local network to the internet and gives devices their settings.
- **One thing to notice:** it usually has a few network ports and small status lights.

### Piece 4 — Ethernet cables

These are the wires that connect everything. An **Ethernet** cable has a plastic clip connector called an **RJ45** on each end. It clicks into a port.

- **What it does:** carries the network signal between two ports.
- **One thing to notice:** when a cable makes a live connection, the port often shows a **link light**.

> **The big idea:** Your home lab is just four things — a laptop (your test tool), a managed switch (connects wired devices), a router (the door to the internet), and Ethernet cables (the wires). Learn their names and jobs now; you'll build with them soon.

💡 **Tip:** You don't need to buy everything at once. Start with what you have and add pieces as you go.

⚠️ **Watch out:** The switch's **console port** looks like a network port but is not one. We'll cover its special use later. Don't worry about it yet.

---

## 4. Real-world analogy

> **"Your home lab is like a small kitchen — a few tools, each with one clear job."**

| Kitchen tool | Home-lab gear |
|--------------|---------------|
| The counter where you work | Your laptop |
| The outlet strip everything plugs into | The switch |
| The door to the grocery store | The router (to the internet) |
| The cords that connect appliances | The Ethernet cables |

You don't need a huge kitchen to cook. You need a few good tools you know how to use.

---

## 5. Vocabulary

> These terms were taught earlier in the course and are reused here as we meet the real gear.

| Term | Plain-language meaning |
|------|------------------------|
| **Switch** | A box that connects wired devices on the same local network. |
| **Managed switch** | A switch you can log into and configure. |
| **Router** | The device that connects your network to the internet. |
| **Ethernet** | The family of rules for wired local networks. |
| **RJ45** | The clip connector on the end of an Ethernet cable. |
| **Console port** | A management-only port for the switch's first login. |

---

## 6. ASCII diagram

```
   YOUR HOME LAB (four pieces)

        [ Internet ]
             |
        [ ROUTER ]         <- door to the internet, gives out addresses
             |  (Ethernet cable, RJ45 each end)
        [ SWITCH ]         <- managed; connects wired devices
          (Dell PowerConnect 3424; has a console port for first login)
             |  (Ethernet cable)
        [ LAPTOP ]         <- your test tool (ipconfig, ping later)

   Cables = the wires. Ports = where cables plug in. Lights = link is alive.
```

_Four pieces, each with one job. You'll connect them in later labs._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-00-04-lab-gear-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the four lab pieces stacked (internet → router → switch → laptop) with a short label of each one's job, and a callout on the switch's console port.
> **Key elements & labels:** four labeled boxes (Laptop = test tool; Switch = Dell PowerConnect 3424, managed, connects wired devices; Router = door to the internet; Ethernet cables = the wires with RJ45 connectors); a small callout "console port = first login only."
> **Color meaning:** every piece is labeled in words; nothing depends on color alone.
> **Flow direction:** top (internet) down to the laptop.
> **Alt text (required):** "The four pieces of the home lab, stacked from top to bottom. At the top, the internet connects to a router, which is the door to the internet and hands out addresses. The router connects by an Ethernet cable to a switch, a Dell PowerConnect 3424 managed switch that connects wired devices; a callout notes its console port is used only for the first login. The switch connects by another Ethernet cable to a laptop, the test tool used to run commands like ipconfig and ping. A note explains that cables are the wires, ports are where cables plug in, and a link light shows a live connection."

---

## 8. Suggested real photos (production brief)

> Real photos of your gear can't be captured here yet — these are labeled placeholders for the production team.

> **Photo 1** — `[PHOTO NEEDED: front panel of the Dell PowerConnect 3424 showing the row of network ports and the separate console port]`
> Alt text (planned): "The front of the Dell PowerConnect 3424 switch, showing its row of numbered network ports and the separate console port used for the first login."
>
> **Photo 2** — `[PHOTO NEEDED: a home router with its LAN ports and status lights, and an Ethernet cable with an RJ45 connector next to it]`
> Alt text (planned): "A home router with its network ports and small status lights, beside an Ethernet cable ending in an RJ45 clip connector."
>
> **Photo 3** — `[PHOTO NEEDED: a Windows laptop with an Ethernet port (RJ45 jack) on its side]`
> Alt text (planned): "A Windows laptop with a rectangular RJ45 Ethernet jack on its side, where a network cable plugs in."

---

## 9. Hands-on lab

**Goal:** find and name your four pieces of gear (or picture them on paper).
**Why:** knowing your equipment by sight makes every later lab easier.

**You will need**
- Your gear if you have it, or paper to draw on. ~15 min. Nothing to plug in or change yet.

⚠️ **Before you start:** this is only looking and naming. Do not connect or power anything on yet.

### 9a. Step-by-step instructions

1. Find (or draw) your laptop. Look for its RJ45 network jack, if it has one.
2. Find (or draw) your switch. Count its ports. Find the separate console port.
3. Find (or draw) your router. Note its ports and status lights.
4. Find (or draw) an Ethernet cable. Look at the RJ45 clip on each end.
5. Label each item with its name and its one-line job.

### 9b. Expected results

- Four items found or drawn, each labeled with its name and job.

- ✅ **You did it if:** you can point to each piece and say what it does in one sentence.

> ⚠️ If your switch looks different from the description, trust your own unit and note it. **[TO VERIFY ON HARDWARE]**

### 9c. Verify it worked

1. Can you name all four pieces?
2. Can you point to a port and to a cable's RJ45 connector?

### 9d. Reset / roll back

Nothing to undo — you only looked and labeled. Keep your labeled drawing.

> 🔧 **Home-lab continuity:** in Lesson 00-05, you'll set up a safe workspace for this gear and start a lab notebook.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Plugging in gear during this tour | Risk of confusion or lockout | Today is look-only; setup starts in 00-05 |
| Mixing up the console port | You use the wrong port later | Note it now; it's for the first login only |
| Thinking you must buy it all | You stall before starting | Start with what you have; add pieces slowly |
| Forcing a cable in | Bent pins, no link | The RJ45 clicks in gently; never force it |

---

## 11. Troubleshooting

| The worry | What to do |
|-----------|------------|
| "I don't have the gear yet." | Follow along on paper; picture each piece |
| "My switch looks different." | Trust your unit; note differences `[TO VERIFY ON HARDWARE]` |
| "Which port is the console port?" | It's separate from the numbered network ports; we'll use it later |
| "Do I need Wi-Fi or cables?" | This lab is wired (Ethernet); cables make it clear and reliable |

---

## 12. Lesson summary

- Your home lab is four pieces: a laptop, a **switch**, a **router**, and **Ethernet** cables.
- The laptop is your test tool; later it runs commands like `ipconfig` and `ping`.
- The Dell PowerConnect 3424 is a **managed switch** — it connects wired devices and you can log into it.
- The **router** is the door to the internet and hands out addresses.
- **Ethernet** cables (with **RJ45** connectors) are the wires; a **link light** shows a live connection.

**One-sentence recap:** Your home lab is just a laptop, a managed switch, a router, and some Ethernet cables — four simple pieces you'll soon connect with your own hands.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-00-04-fill-in-the-blank.md`
2. **Matching** — `wb-00-04-matching.md`
3. **Label the diagram** — `wb-00-04-label-the-diagram.md` (your gear)
4. **Short answer** — `wb-00-04-short-answer.md`
5. **Hands-on observation** — `wb-00-04-hands-on-observation.md` (find and name your gear)
6. **Vocabulary review** — `wb-00-04-vocabulary-review.md`
7. **Reflection** — `wb-00-04-reflection.md`

**Quick written warm-up (do this now):** Name the four pieces of your home lab.

1. ______  2. ______  3. ______  4. ______

---

## 14. Quiz

**Instructions:** Choose the best answer. This just checks you know your gear — relax. (A printable copy is `quiz-00-04-knowledge-check.md`.)

1. Which piece is your main computer and test tool? *(Objective: recall)*
   - A) the laptop
   - B) the router
   - C) the cable
   - D) the switch

2. What does a switch do? *(Objective: recall)*
   - A) connects wired devices on the local network
   - B) makes coffee
   - C) stores photos only
   - D) charges your phone

3. What does a router do? *(Objective: recall)*
   - A) connects your network to the internet
   - B) tests cables
   - C) nothing
   - D) plays music

4. A "managed" switch is one you can… *(Objective: recall)*
   - A) log into and configure
   - B) only look at
   - C) never use
   - D) eat

5. The clip connector on the end of an Ethernet cable is called… *(Objective: recall)*
   - A) RJ45
   - B) USB
   - C) HDMI
   - D) a plug of nothing

6. **True or false —** You must buy all the gear before you can start the course. Explain in one sentence. *(Objective: recall)*

7. The switch's console port is used for… *(Objective: recall)*
   - A) the very first login/management
   - B) plugging in your coffee maker
   - C) charging a phone
   - D) nothing at all

8. **Matching —** match each piece to its job. *(Objective: recall)*
   - ___ Router &nbsp;&nbsp; ___ Switch &nbsp;&nbsp; ___ Ethernet cable
   - A) connects wired devices on the local network
   - B) the wire between two ports
   - C) the door to the internet

9. Fill in the blank: A small light on a port that shows a live connection is the ____________ light. *(Objective: recall)*

10. **Scenario —** A friend points to your switch and asks, "What is that box for?" Answer in one or two sentences. *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Answers to this lesson's quiz and worksheets are in
> `instructor/answer-keys/wb-00-04-answers.md`.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-00-04-meet-your-home-lab.md`. In brief:

- **Objective in one line:** learners recognize the four pieces of home-lab gear and what each does.
- **Common misconceptions:** "must buy it all"; "console port is a normal port"; "plug in now." Correct each.
- **Pacing:** ~25 min. Keep it look-only; no setup today. The §9 find-and-name activity is the core.
- **How CompTIA tests it:** it expects you to know switch vs router vs cable roles; the real gear cements this.
- **Accuracy note (Prime Directive #7):** the Dell PowerConnect 3424 is a 24-port managed switch with a console port; exact port layout/LEDs marked `[TO VERIFY ON HARDWARE]`. Photos are `[PHOTO NEEDED]` placeholders — none were fabricated. Command output examples marked `[TO VERIFY ON HARDWARE]`.
- **Extension idea:** learners label a printed photo of their own gear.

---

## 17. Cheat sheet

> **Quick reference — Your home lab gear**
>
> | Piece | Job |
> |-------|-----|
> | Laptop | your test tool (runs `ipconfig`, `ping` later) |
> | Switch (Dell PowerConnect 3424) | connects wired devices; managed = you can log in |
> | Router | the door to the internet; hands out addresses |
> | Ethernet cables (RJ45) | the wires between ports |
>
> - **Port** = where a cable plugs in. **Link light** = the connection is alive.
> - The switch's **console port** is separate — first login only.
> - You don't need it all at once. Start small; build slowly.
>
> _(Full version: `resources/cheat-sheets/orientation-quick-reference.md`.)_

---

## 18. Glossary updates

**No new terms.** All the gear terms here were taught earlier and are reused: **switch** and **router** (NA-M07-L01), **managed switch**, **console port**, and **uplink port** (NA-M07-L05), **Ethernet** (NA-M06-L05), **RJ45** (NA-M06-L02), **port** (NA-M01-L03), and **link light** (NA-M14-L05). "Laptop" is an everyday word, not a networking term, so it is not glossarized. The glossary is unchanged.

---

## 19. Homework

- **Practice:** Find or draw your four pieces and label each with its job.
- **Spaced review:** Tomorrow, name the four pieces and their jobs from memory.
- **Preview:** Next, **Lesson 00-05 — Setting Up Your Workspace and a Lab Notebook**.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what is your home lab made of? _______________________
2. Which piece are you most curious about? _______________________
3. Do you have the gear yet, or will you follow on paper for now? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box honestly:

- [ ] I can name all four pieces of the home lab.
- [ ] I can say what each one does.
- [ ] I know the switch is a managed switch I can log into.
- [ ] I can point to a port and an RJ45 connector.
- [ ] I know I don't need to buy everything at once.
- [ ] I feel ready for Lesson 00-05.

**Not all checked?** That's fine — look over the gear tour again. You'll know it well before you build.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M00-L04** — "Meet Your Home Lab — a Tour of Your Equipment" · Module 00 · Unit 1_
