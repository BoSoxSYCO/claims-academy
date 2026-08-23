---
id: NA-M01-L04
module: 01
lesson: 04
title: "What an Operating System Does"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M01-L01", "NA-M01-L02", "NA-M01-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 01 · Lesson 04] What an Operating System Does

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lessons 01-01 through 01-03 (jobs of a computer, the parts inside, the ports).

You've met the parts: the CPU, RAM, storage, and ports. But something has to boss all those parts around and let your programs use them. That "something" is the **operating system** — and your laptop, your phone, and even your router each have one.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what an **operating system (OS)** is and what it does.
- [ ] Name at least three real operating systems.
- [ ] Explain how the OS sits between you (and your programs) and the hardware.
- [ ] Explain why network devices like routers and switches also run an OS.

---

## 2. Introduction — why this matters

Imagine a busy restaurant. The kitchen can cook, the tables can seat guests, and the customers are hungry. But if there's no **manager** to take orders, tell the kitchen what to make, and keep everything moving, it all falls apart. The food never reaches the right table.

A computer has the same problem. The CPU, RAM, storage, and ports are all ready to work — but they need a manager to coordinate them and to run your programs. That manager is the **operating system**.

Why care for this course? Because your **router** and your **switch** each run their own operating system too. Later, you'll log in to your Dell switch and change its settings. When you do, you'll be talking to *its* operating system. Knowing the idea now makes that moment feel familiar instead of scary.

🎯 **Exam tip:** Network+ treats switches, routers, and firewalls as devices that run their own operating system with settings you configure. Today's idea is the seed of that.

---

## 3. Simple explanation

An **operating system (OS)** is the main program that controls the whole computer. It has three big jobs:

1. **It runs your programs.** When you open a web browser or Notepad, the OS starts it and gives it what it needs.
2. **It manages the hardware.** The OS decides how the CPU, RAM, storage, and ports are shared among all the programs. That way, nothing crashes into anything else.
3. **It gives you a way to control the computer.** The screen you click on — the desktop, the icons, the menus — is part of the OS. This is called the **user interface**.

Think of the OS as the layer in the middle:

> **You and your programs** talk to **the operating system**, and the operating system talks to **the hardware**. You almost never touch the hardware directly — the OS does it for you.

Some operating systems you may have heard of:

| Operating system | Where you'll find it |
|------------------|----------------------|
| **Windows** | Most laptops and desktops (yours!) |
| **macOS** | Apple computers |
| **Linux** | Many servers, and inside lots of network gear |
| **Android** | Many phones and tablets |
| **iOS** | iPhones and iPads |

And here's the part that matters for us: **routers and switches run operating systems too.** They are special-purpose computers, remember? Your Dell switch has its own OS with a menu of settings you'll learn to change.

💡 **Tip:** You don't run programs *on the hardware* directly. You run them *on the operating system*, which runs on the hardware.

---

## 4. Real-world analogy

> **"The operating system is the manager of a busy restaurant."**

Let's build on the kitchen from Lesson 01-01.

| In the restaurant… | In the computer… |
|--------------------|------------------|
| The **kitchen, tables, and equipment** | The **hardware** (CPU, RAM, storage, ports) |
| The **customers** placing orders | **You and your programs** making requests |
| The **manager** who takes orders and runs the floor | The **operating system** |
| The **manager keeping two orders from clashing** | The OS **sharing hardware** safely between programs |

The customers never walk into the kitchen and cook for themselves. They ask the manager, and the manager makes it happen in the right order. That's exactly how you and your programs use the hardware — through the OS.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Operating system (OS)** | OP-er-ay-ting | The main program that runs your programs and manages the hardware. |
| **Software** | SOFT-wair | Instructions/programs a computer runs (you can't touch it), unlike hardware. |
| **Application (app)** | app-lih-KAY-shun | A program you use to do a task, like a browser or Notepad. |
| **User interface** | YOO-zer | The part of the OS you see and click — desktop, icons, menus. |
| **Multitasking** | MUL-tee-task-ing | Running several programs at once; the OS shares the hardware between them. |
| **Windows** | WIN-doze | The operating system on most laptops, including yours. |

---

## 6. ASCII diagram

```
          ┌─────────────────────────────────────────────┐
          │        YOU + YOUR PROGRAMS (apps)           │   you click and type
          └───────────────────────┬─────────────────────┘
                                   │ requests
          ┌───────────────────────▼─────────────────────┐
          │          OPERATING SYSTEM (the manager)      │   runs apps,
          │   runs programs · manages hardware · UI      │   shares hardware
          └───────────────────────┬─────────────────────┘
                                   │ controls
          ┌───────────────────────▼─────────────────────┐
          │   HARDWARE:  CPU · RAM · Storage · Ports     │   does the work
          └─────────────────────────────────────────────┘
```

_Notice the OS sits in the middle. You never reach past it to the hardware — the OS handles that for you._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-01-04-os-in-the-middle-01.svg` (created and stored in this module's `assets/`)
> **Shows:** three stacked layers — "You + Apps" on top, "Operating System" in the middle, "Hardware" on the bottom — with arrows: requests going down from apps to OS, and the OS controlling the hardware.
> **Key elements & labels:** each layer labeled; the middle OS layer emphasized as "the manager"; small icons for CPU/RAM/storage/ports in the hardware layer.
> **Color meaning:** Apps = blue, OS = green (emphasized), Hardware = gray — **and** each layer is labeled and shaped, so it reads in black and white.
> **Flow direction:** top (you) to bottom (hardware), with the OS in the middle.
> **Alt text (required):** "Three stacked layers showing the operating system in the middle: you and your apps on top send requests down to the operating system, which manages and controls the hardware (CPU, RAM, storage, ports) at the bottom."

---

## 8. Suggested real photos (production brief)

> **Photo/Screenshot 1** — `img-01-04-windows-desktop-01.jpg`
> A Windows desktop with the Start menu open, arrows labeling "user interface (part of the OS)." Alt text: "A Windows desktop with the Start menu open, labeled as part of the operating system's user interface."
>
> **Screenshot 2** — `img-01-04-winver-01.jpg`
> The small "About Windows" box shown by the `winver` command, labeling the OS name and version. Alt text: "The About Windows box showing the operating system name and version number."
>
> **Photo 3** — `img-01-04-devices-with-os-01.jpg`
> A laptop, a phone, and a home router side by side, each labeled with "runs an OS." Alt text: "A laptop, a phone, and a home router, each labeled to show they all run an operating system."

---

## 9. Hands-on lab

**Goal:** find out exactly which operating system your laptop runs, and see the OS at work.
**Why:** you'll soon meet other operating systems (on your switch and router), so it helps to know your own.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- No internet or cables needed.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** You will only *look* at information. You will not change any settings.

### 9a. Step-by-step instructions

1. Find your Windows version the quick way. Click **Start**, type `winver`, and press **Enter**.
2. Read the small box that appears. It names your operating system (for example, "Windows 11") and a version number.
3. Close that box.
4. Now open **Settings** (click **Start**, then the gear icon, or type `Settings`).
5. Go to **System**, then scroll down and click **About**.
6. Read the **Windows specifications**. This is more detail about your operating system.

### 9b. Expected results

- The `winver` box shows your OS name and version.
  ```text
  Example: Microsoft Windows
           Version 22H2 (OS Build ...)
  ```
- The **About** page shows the edition and version of your operating system.
- ✅ **You did it if:** you can now say out loud, "My laptop runs the ______ operating system."

### 9c. Verify it worked

1. Say (or write) the name of your operating system and its version.
2. Open Task Manager (**Ctrl + Shift + Esc**) and look at the list of running programs. Every one of those is being managed by your OS right now.

### 9d. Reset / roll back

Close any windows you opened. You changed nothing. Your laptop is exactly as it was.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking "Windows" is the whole computer | You confuse the software with the hardware | Windows is the *operating system* (software); it runs *on* the hardware |
| Believing programs use the hardware directly | You misunderstand how a computer works | Programs ask the **OS**, and the OS uses the hardware |
| Thinking only computers have an OS | You're surprised your switch needs configuring | Phones, routers, and switches all run an operating system |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| `winver` does nothing | Typed it in the wrong place | Click **Start** first, then type `winver`, then press Enter |
| Can't find **About** | Settings layout differs | In Settings, search "About" in the search box at the top |
| Not sure which OS I have | That's what this lab is for | The `winver` box states it plainly — read the first lines |

---

## 12. Lesson summary

- **An operating system (OS) is the main program that runs your programs and manages the hardware.**
- **The OS sits in the middle:** you and your apps → the OS → the hardware.
- **Examples:** Windows, macOS, Linux, Android, iOS.
- **Network devices run an OS too** — your switch and router each have one you'll configure.

**One-sentence recap:** The operating system is the manager that runs your programs and shares the hardware, and every smart device — including your switch — has one.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-01-04-fill-in-the-blank.md`
2. **Matching** — `wb-01-04-matching.md`
3. **Label the diagram** — `wb-01-04-label-the-diagram.md` (label the three layers)
4. **Short answer** — `wb-01-04-short-answer.md`
5. **Hands-on observation** — `wb-01-04-hands-on-observation.md` (record your OS name and version)
6. **Vocabulary review** — `wb-01-04-vocabulary-review.md`
7. **Reflection** — `wb-01-04-reflection.md`

**Quick written warm-up (do this now):** Name the operating system on your phone.

____________________________________________________________________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-01-04-knowledge-check.md`.)

1. What is an operating system? *(Objective: define OS)*
   - A) A physical part inside the computer
   - B) The main program that runs your programs and manages the hardware
   - C) A type of cable
   - D) The screen

2. Which of these is an operating system? *(Objective: examples)*
   - A) Windows
   - B) A keyboard
   - C) RAM
   - D) The Ethernet port

3. In the layer picture, the operating system sits… *(Objective: OS in the middle)*
   - A) Above you and your apps
   - B) Between you/your apps and the hardware
   - C) Inside the CPU only
   - D) Outside the computer

4. **True or false —** A router does not have an operating system. Explain your answer in one sentence. *(Objective: network devices run an OS)*

5. In the restaurant analogy, the **manager** stands for… *(Objective: analogy)*
   - A) The hardware
   - B) The operating system
   - C) A program
   - D) The internet

6. When you open Notepad, what actually starts it and gives it what it needs? *(Objective: OS runs programs)*
   - A) The CPU by itself
   - B) The operating system
   - C) The screen
   - D) The power port

7. The desktop, icons, and menus you click are called the… *(Objective: vocabulary)*
   - A) Hardware
   - B) User interface
   - C) Storage
   - D) Adapter

8. **Matching —** write the letter of the correct description next to each item. *(Objective: vocabulary)*
   - ___ Operating system &nbsp;&nbsp; ___ Application &nbsp;&nbsp; ___ Hardware
   - A) a program you use for a task &nbsp; B) the physical parts &nbsp; C) the manager that runs programs and hardware

9. Fill in the blank: You don't run programs directly on the hardware — you run them on the ____________. *(Objective: OS in the middle)*

10. **Scenario —** Next month you'll log in to your Dell switch and change its settings. What are you actually talking to when you do that, and why isn't that surprising? *(Objective: network devices run an OS)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-01-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-01-04-operating-system.md`. In brief:

- **Objective in one line:** learners can explain what an OS does and that network devices run one too.
- **Common misconceptions:** "Windows = the computer"; "programs use hardware directly." Correct with the manager analogy.
- **Pacing:** ~25 min. The three-layer picture is the anchor; the payoff is "your switch runs an OS too."
- **How CompTIA tests it:** devices (switch/router/firewall) as configurable systems running an OS.
- **Support idea:** act out the restaurant — one learner is the "manager (OS)" passing requests to the "kitchen (hardware)."
- **Extension idea:** list the operating systems on every device in their home.

---

## 17. Cheat sheet

> **Quick reference — Operating System**
>
> - **OS** = the main program that (1) runs your programs, (2) manages the hardware, (3) gives you the user interface.
> - **Layer picture:** You + apps → **OS** → hardware. You never touch the hardware directly.
> - **Examples:** Windows, macOS, Linux, Android, iOS.
> - **Routers and switches run an OS too** — that's what you configure later.
> - **Restaurant analogy:** customers = apps · manager = OS · kitchen = hardware.
>
> _(Full version: `resources/cheat-sheets/computer-basics-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Operating system (OS)** — The main program that runs your programs and manages the hardware.
- **Software** — Instructions/programs a computer runs; the opposite of hardware.
- **Application (app)** — A program you use to do a task.
- **User interface** — The part of the OS you see and click: desktop, icons, menus.
- **Multitasking** — Running several programs at once, with the OS sharing the hardware.
- **Windows** — The operating system on most laptops, including yours.

---

## 19. Homework

- **Practice:** Write down the operating system (and version, if you can find it) on three devices you own.
- **Spaced review:** Redo the Lesson 01-03 flashcards for input/output devices and ports.
- **Preview:** We keep saying "hardware" and "software." What's the exact difference? The next lesson makes it crystal clear.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. What is still fuzzy for me? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what an operating system does.
- [ ] I can name at least three operating systems.
- [ ] I can explain how the OS sits between me/my apps and the hardware.
- [ ] I understand that my switch and router run an OS too.
- [ ] I completed the hands-on lab and know my laptop's OS name.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M01-L04** — "What an Operating System Does" · Module 01 · Unit 1_
