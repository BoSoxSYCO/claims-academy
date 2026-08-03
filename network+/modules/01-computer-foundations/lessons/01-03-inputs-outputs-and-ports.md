---
id: NA-M01-L03
module: 01
lesson: 03
title: "Inputs, Outputs, and Ports on Your Laptop"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M01-L01", "NA-M01-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 01 · Lesson 03] Inputs, Outputs, and Ports on Your Laptop

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lessons 01-01 and 01-02 (you know "in → work → out" and the parts inside).

You already know a computer takes information *in* and sends a result *out*. But how does that information physically get in and out? Through **ports** — the little slots and plugs on the edges of your laptop. One of them is where your whole home network will begin.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Tell the difference between an **input device** and an **output device**.
- [ ] Point to and name the common **ports** on your own laptop.
- [ ] Find the **Ethernet (network) port** — or know how to add one if your laptop doesn't have it.
- [ ] Explain why ports matter for joining a network.

---

## 2. Introduction — why this matters

Think about the walls of a house. They aren't solid — they have doors, windows, and outlets. Each opening has a job: a door for people, an outlet for power, a pipe for water. Without those openings, nothing could get in or out.

Your laptop is the same. Its edges have openings called **ports**. Each one is shaped for a specific job: one for power, one for a screen, one for headphones, and — most important for us — one for a **network cable**.

Why does this matter so much? Because in a few lessons you will plug an **Ethernet cable** from your laptop into your switch and router to build your home lab. If you can't find the right port, you can't build the network. So today, we get friendly with the edges of your laptop.

🎯 **Exam tip:** Network+ expects you to recognize connector and port types by sight. Learning the ports on your own laptop today makes that memory work far easier later.

---

## 3. Simple explanation

Let's sort things into two simple groups, then meet the ports.

**Input devices** send information *into* the computer. Examples:
- **Keyboard** — you type.
- **Mouse or trackpad** — you point and click.
- **Microphone** — you speak.
- **Webcam** — it captures video.

**Output devices** send information *out* to you. Examples:
- **Screen** — you read and watch.
- **Speakers** — you listen.
- **Printer** — you get paper.

A **port** is a slot or plug on the computer where you connect these devices and cables. Each port has its own shape so you can only plug in the right thing. Here are the ones you'll meet most:

| Port | What it's for |
|------|---------------|
| **Power** | Charges the laptop |
| **USB** | Connects many devices (mouse, keyboard, drives, adapters) |
| **HDMI** | Sends video to a monitor or TV (output) |
| **Headphone/audio** | Sends sound to headphones (output) |
| **Ethernet (network)** | Connects a network cable — **this is our star** |

The **Ethernet port** is a small, roughly square hole, a little wider than a phone-charger port. A network cable clicks into it. This is the port you'll use to join your laptop to the switch.

⚠️ **Watch out:** Many newer, thin laptops **don't have** a built-in Ethernet port to save space. If yours doesn't, that's normal — you just add one with a small **USB-to-Ethernet adapter** (it plugs into a USB port and gives you an Ethernet port). We'll flag this again before the lab that needs it.

💡 **Tip:** You don't have to memorize every port today. The one to find for sure is the **Ethernet port** (or plan to get an adapter).

---

## 4. Real-world analogy

> **"Ports are like the different outlets and openings in your home."**

Walk through a room in your mind.

| In your home… | On your laptop… |
|---------------|-----------------|
| The **electrical outlet** (only a plug fits) | The **power port** |
| The **front door** people come through | **USB** — many things pass through it |
| The **TV cable jack** | **HDMI** (sends video out) |
| The **headphone jack on a stereo** | The **audio port** |
| The **phone/data jack on the wall** | The **Ethernet (network) port** |

Just like you can't plug a lamp into a water pipe, you can't plug an HDMI cable into a power port. **The shape tells you what belongs there.** That's a helpful trick: when you're unsure, match the shape.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Port** | port | A slot or plug on a computer where you connect a device or cable. |
| **Input device** | IN-put | Hardware that sends information *into* the computer (keyboard, mouse). |
| **Output device** | OWT-put | Hardware that sends information *out* to you (screen, speakers). |
| **USB** | you-ess-BEE | A common port shape used for many devices and adapters. |
| **Ethernet port** | EE-ther-net | The port where a network cable plugs in; a small, near-square slot. |
| **Adapter** | uh-DAP-ter | A small part that changes one port into another (e.g., USB to Ethernet). |

---

## 6. ASCII diagram

```
                 A LAPTOP, VIEWED FROM ITS LEFT AND RIGHT EDGES

   LEFT EDGE                                          RIGHT EDGE
  ┌───────────────────────────┐            ┌───────────────────────────┐
  │ [⏻ Power]  [USB]  [HDMI]  │            │ [Audio 🎧]  [USB]  [Ethernet]│
  └───────────────────────────┘            └───────────────────────────┘
      charge    devices  video                 sound   devices   NETWORK ← our star

  Built-in INPUT:  keyboard, trackpad, microphone, webcam
  Built-in OUTPUT: screen, speakers
```

_The exact spots differ on every laptop. What matters: find the **Ethernet port** (or plan for a USB-to-Ethernet adapter)._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-01-03-laptop-ports-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a simple laptop drawn from above/side with its common edge ports labeled: Power, USB, HDMI, Audio, and Ethernet — with the Ethernet port highlighted as "the one for networking."
> **Key elements & labels:** each port drawn to its rough real shape and clearly labeled; a callout star/box on the Ethernet port.
> **Color meaning:** Ethernet port highlighted in orange with a star **and** a bold label, so it stands out in black and white too.
> **Flow direction:** left edge and right edge shown; ports labeled beneath.
> **Alt text (required):** "A laptop with its edge ports labeled — power, USB, HDMI, audio, and Ethernet — with the Ethernet network port highlighted and starred as the most important one for this course."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-01-03-laptop-edge-ports-01.jpg`
> A real photo of a laptop's side with arrows labeling each port. Alt text: "The side edge of a laptop with arrows labeling the power, USB, HDMI, audio, and Ethernet ports."
>
> **Photo 2** — `img-01-03-ethernet-port-closeup-01.jpg`
> A close-up of an Ethernet port with a cable about to click in. Alt text: "A close-up of an Ethernet port on a laptop with a network cable connector lined up to plug in."
>
> **Photo 3** — `img-01-03-usb-to-ethernet-adapter-01.jpg`
> A USB-to-Ethernet adapter, showing the USB end and the Ethernet end. Alt text: "A small USB-to-Ethernet adapter with a USB plug on one side and an Ethernet port on the other."

---

## 9. Hands-on lab

**Goal:** find and name every port on your own laptop, and locate the Ethernet port (or decide you need an adapter).
**Why:** you'll use the Ethernet port to build your network soon — today you make sure you can find it.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- Good lighting. A phone camera is handy for taking a labeled photo (optional).
- Estimated time: 10 min.

⚠️ **Before you start (safety):** Only *look* at the ports and gently feel their shapes. Do **not** force anything into a port. If something doesn't slide in easily, it's the wrong shape.

### 9a. Step-by-step instructions

1. Close your laptop lid partway so you can see the left and right edges clearly.
2. Slowly look along the **left edge**. For each opening, ask: "What shape is this?"
3. Do the same along the **right edge** (and the back, if it's a larger laptop).
4. Try to name each port using the table in Section 3. Write each one down.
5. Now hunt for the **Ethernet port** — a small, near-square slot a bit wider than a charger port, often with a tiny clip shape.
6. **If you find it:** great — mark where it is. **If you don't:** note that you'll need a **USB-to-Ethernet adapter** for the network labs.

### 9b. Expected results

- You should be able to list several ports, for example:
  ```text
  Left edge:  Power, 1 USB, HDMI
  Right edge: Audio (headphone), 1 USB, Ethernet
  ```
- ✅ **You did it if:** you named at least three ports **and** either found your Ethernet port or wrote down "need a USB-to-Ethernet adapter."

### 9c. Verify it worked

1. Point to your keyboard and say "input." Point to your screen and say "output." (Yes, out loud — it helps.)
2. Point to where a network cable will go. If you can do all three, you passed.

### 9d. Reset / roll back

Nothing to undo — you only looked. Open your laptop back up and continue.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Forcing a cable into the wrong port | You can bend pins or damage the port | If it doesn't slide in gently, it's the wrong shape — stop |
| Confusing USB and Ethernet ports | You look in the wrong place for networking | Ethernet is wider and near-square; USB is a thin rectangle |
| Assuming every laptop has Ethernet | You get stuck at the network lab | Check now; if missing, get a USB-to-Ethernet adapter early |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| "I can't find an Ethernet port anywhere" | Thin laptop with no built-in port | That's common — plan to use a USB-to-Ethernet adapter |
| "Two ports look the same" | Some USB shapes are similar | Look for a small network icon or the wider, squarer slot |
| "A plug won't go in" | Wrong port or upside down | Never force it; check the shape and orientation |

---

## 12. Lesson summary

- **Input devices** send information in (keyboard, mouse, mic); **output devices** send it out (screen, speakers).
- **Ports** are shaped slots where you connect devices and cables — the shape tells you what fits.
- The **Ethernet port** is the small near-square slot where a network cable plugs in. It's the one that matters most here.
- If your laptop has **no** Ethernet port, a **USB-to-Ethernet adapter** adds one.

**One-sentence recap:** Ports are the shaped openings that let information in and out of your laptop, and the Ethernet port is where your network will connect.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-01-03-fill-in-the-blank.md`
2. **Matching** — `wb-01-03-matching.md`
3. **Label the diagram** — `wb-01-03-label-the-diagram.md` (label the laptop's ports)
4. **Short answer** — `wb-01-03-short-answer.md`
5. **Hands-on observation** — `wb-01-03-hands-on-observation.md` (map your own laptop's ports)
6. **Vocabulary review** — `wb-01-03-vocabulary-review.md`
7. **Reflection** — `wb-01-03-reflection.md`

**Quick written warm-up (do this now):** Name one input device and one output device you can see right now.

Input: ____________________  Output: ____________________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-01-03-knowledge-check.md`.)

1. Which of these is an **input** device? *(Objective: input vs output)*
   - A) The screen
   - B) The speakers
   - C) The keyboard
   - D) The printer

2. Which of these is an **output** device? *(Objective: input vs output)*
   - A) The mouse
   - B) The microphone
   - C) The webcam
   - D) The screen

3. What is a **port**? *(Objective: ports)*
   - A) A program you install
   - B) A slot or plug where you connect a device or cable
   - C) A type of file
   - D) The computer's brain

4. Which port do you use to plug in a **network cable**? *(Objective: Ethernet port)*
   - A) HDMI
   - B) Audio
   - C) Ethernet
   - D) Power

5. **True or false —** Every laptop has a built-in Ethernet port. Explain your answer in one sentence. *(Objective: Ethernet port)*

6. Your laptop has no Ethernet port. What's the simple fix so you can still plug in a network cable? *(Objective: adapter)*
   - A) Buy a new laptop
   - B) Use a USB-to-Ethernet adapter
   - C) Use the HDMI port instead
   - D) It's impossible

7. Why does each port have a different **shape**? *(Objective: ports)*
   - A) To look nice
   - B) So only the correct plug fits
   - C) To save power
   - D) There's no reason

8. **Matching —** write the letter of the correct use next to each port. *(Objective: vocabulary)*
   - ___ HDMI &nbsp;&nbsp; ___ Ethernet &nbsp;&nbsp; ___ Power
   - A) plug in a network cable &nbsp; B) charge the laptop &nbsp; C) send video to a screen

9. Fill in the blank: If a plug does not slide in gently, it is the wrong ____________. *(Objective: ports)*

10. **Scenario —** You want to connect your laptop to your new switch, but you can't find an Ethernet port on the laptop. What do you check, and what do you do? *(Objective: Ethernet port / adapter)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-01-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-01-03-inputs-outputs-ports.md`. In brief:

- **Objective in one line:** learners can name laptop ports, sort input vs. output, and find the Ethernet port.
- **Common misconceptions:** "all laptops have Ethernet"; confusing USB with Ethernet. Correct both with real inspection.
- **Pacing:** ~25 min. The real payoff is Section 9 — get them physically finding the Ethernet port now, well before the network lab.
- **How CompTIA tests it:** connector/port recognition by sight; this builds that visual memory early.
- **Support idea:** hand them a labeled port photo to hold beside their laptop.
- **Extension idea:** identify the ports on the home router and switch too (preview).

---

## 17. Cheat sheet

> **Quick reference — Laptop Ports**
>
> - **Input device** = sends info *in* (keyboard, mouse, mic, webcam).
> - **Output device** = sends info *out* (screen, speakers, printer).
> - **Port** = a shaped slot for a device or cable; the shape tells you what fits.
> - **Common ports:** Power · USB · HDMI (video) · Audio · **Ethernet (network)**.
> - ⭐ **Ethernet port** = small near-square slot; where the network cable clicks in.
> - **No Ethernet port?** Use a **USB-to-Ethernet adapter**.
>
> _(Full version: `resources/cheat-sheets/computer-basics-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Port** — A slot or plug on a computer where you connect a device or cable.
- **Input device** — Hardware that sends information into the computer.
- **Output device** — Hardware that sends information out to you.
- **USB** — A common port shape used for many devices and adapters.
- **Ethernet port** — The port where a network cable plugs in; a small near-square slot.
- **Adapter** — A small part that changes one port into another (e.g., USB to Ethernet).

---

## 19. Homework

- **Practice:** Take a photo of each edge of your laptop and label every port you can name. Keep it in your binder.
- **Spaced review:** Redo the Lesson 01-02 flashcards for CPU, RAM, and storage.
- **Preview:** A computer needs something to manage all these parts and programs at once. What do you think runs the whole show? The next lesson answers this.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Did I find my Ethernet port, or do I need an adapter? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can tell an input device from an output device.
- [ ] I can name at least three ports on my laptop.
- [ ] I found my Ethernet port — or I wrote down that I need a USB-to-Ethernet adapter.
- [ ] I completed the hands-on lab.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: what runs the whole computer.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M01-L03** — "Inputs, Outputs, and Ports on Your Laptop" · Module 01 · Unit 1_
