---
id: NA-M01-L02
module: 01
lesson: 02
title: "The Parts Inside: CPU, Memory (RAM), and Storage"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M01-L01"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 01 · Lesson 02] The Parts Inside: CPU, Memory (RAM), and Storage

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 01-01 (you know a computer does "in → work → out").

Last lesson you learned *what* a computer does. Now let's open it up and meet the three parts that do the actual work — including **RAM**, the part almost everyone is fuzzy about.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what the **CPU** does in plain words.
- [ ] Explain what **RAM** (memory) does, and why it is fast but temporary.
- [ ] Explain what **storage** does, and why it is slower but permanent.
- [ ] Tell the difference between RAM and storage (the mix-up that trips up almost everyone).

---

## 2. Introduction — why this matters

In the last lesson, the "processing" step did the work. But *what* actually does that work? Inside every computer are a few key parts, and three of them do the heavy lifting.

Why should you care? Two reasons. First, when a computer feels slow, it's usually because one of these three parts is overloaded — and soon you'll be able to say *which one*. Second, and more important for this course: the servers, routers, and switches you'll study later all have these same parts. A router is just a computer with a special job, remember? So the parts you learn today show up again and again.

🎯 **Exam tip:** Network+ expects you to know that network devices (routers, switches, firewalls) are specialized computers with a CPU, memory, and storage. This lesson is where that clicks.

---

## 3. Simple explanation

Think of the inside of a computer as a small workshop with a worker in it. Three things matter most:

1. **The CPU — the worker.** The **CPU** (Central Processing Unit) is the part that actually follows the instructions. It does the thinking and the math. It is often called the "brain" of the computer. When something is "processing," the CPU is doing it.

2. **RAM — the workbench.** **RAM** (Random Access Memory) is the open space where the worker lays out whatever they are using *right now*. It is very fast to reach. But it clears off every time you turn the computer off. RAM is **temporary**.

3. **Storage — the cabinet.** **Storage** is where the computer keeps things for the long term — your files, your photos, the programs themselves. It is slower to reach than RAM, but it **keeps everything even when the power is off**. Storage is **permanent**.

Here is the key idea most beginners miss:

> **RAM is temporary and fast. Storage is permanent and slower.** They are *not* the same thing.

When you open a program, the computer copies it from **storage** (the cabinet) onto **RAM** (the workbench) so the **CPU** (the worker) can use it quickly. Close the program and turn off the machine, and the workbench is wiped clean — but the cabinet still holds your saved files.

💡 **Tip:** More **RAM** means a bigger workbench, so you can keep more things open at once. More **storage** means a bigger cabinet, so you can *keep* more files. They solve different problems.

---

## 4. Real-world analogy

> **"The inside of a computer works like a person at a desk."**

Picture yourself doing homework at a desk.

| At the desk… | Inside the computer… |
|--------------|---------------------|
| **You**, doing the thinking and writing | The **CPU** — it does the work |
| The **desktop surface** where you spread out the papers you're using now | **RAM** — fast to reach, but you clear it when you're done |
| The **filing cabinet** where you store finished work and books | **Storage** — slower to open, but it keeps things forever |

If your desk surface is tiny, you can only work on one paper at a time — you keep putting things away and pulling them back out. That's a computer with too little RAM: it feels slow because it's always shuffling. A bigger desk (more RAM) lets you keep many papers open at once.

And if you close your notebook and go to bed, the desktop gets cleared — but the filing cabinet keeps everything. That's exactly how RAM and storage behave.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **CPU** | see-pee-YOO | Central Processing Unit — the part that follows instructions and does the work. The "brain." |
| **RAM** | ram (rhymes with "jam") | Random Access Memory — fast, temporary space for what the computer is using right now. |
| **Storage** | STOR-idj | The place that keeps files and programs for the long term, even when the power is off. |
| **Temporary** | TEM-por-air-ee | Lasts only for a while; RAM is cleared when the computer turns off. |
| **Permanent** | PER-muh-nent | Stays even after the power is off; storage keeps your files this way. |
| **Gigabyte (GB)** | GIG-uh-bite | A unit for measuring memory and storage size. More GB = more room. |

---

## 6. ASCII diagram

```
                    ┌───────────────────────────┐
                    │        CPU (worker)        │
                    │  follows instructions,     │
                    │  does the "work"           │
                    └────────────┬──────────────┘
                    fast ↑↓ (uses right now)
                    ┌────────────┴──────────────┐
                    │        RAM (workbench)     │   TEMPORARY
                    │  what you're using NOW     │   (cleared at power-off)
                    └────────────┬──────────────┘
                    slower ↑↓ (loads / saves)
                    ┌────────────┴──────────────┐
                    │      STORAGE (cabinet)     │   PERMANENT
                    │  files & programs kept     │   (kept at power-off)
                    └───────────────────────────┘
```

_Notice: the CPU talks to RAM very fast; RAM loads from and saves to storage more slowly. Power off wipes RAM but not storage._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-01-02-cpu-ram-storage-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the desk analogy beside the computer parts — a worker (CPU), a desktop surface (RAM, labeled "fast / temporary"), and a filing cabinet (storage, labeled "slower / permanent"), with arrows showing fast CPU↔RAM and slower RAM↔storage.
> **Key elements & labels:** three labeled blocks (CPU, RAM, Storage); speed labels on the arrows; "TEMPORARY" tag on RAM and "PERMANENT" tag on Storage.
> **Color meaning:** CPU = green, RAM = blue, Storage = gray — **and** each block is labeled and shaped differently, so it reads in black and white.
> **Flow direction:** top (CPU) to bottom (storage).
> **Alt text (required):** "A diagram of a computer's three main parts stacked vertically: the CPU at top does the work, RAM in the middle is fast but temporary space for what's used now, and Storage at the bottom is slower but permanent. Fast arrows link CPU and RAM; slower arrows link RAM and Storage."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-01-02-cpu-chip-01.jpg`
> A close-up of a CPU chip held in a hand, so the learner sees how small the "brain" really is. Alt text: "A small square CPU chip held between two fingers, showing its metal pins."
>
> **Photo 2** — `img-01-02-ram-and-drive-01.jpg`
> A RAM stick next to a storage drive (SSD), side by side, each labeled. Alt text: "A stick of RAM next to a solid-state storage drive, each labeled to show the difference."
>
> **Screenshot 3** — `img-01-02-task-manager-performance-01.jpg`
> The Windows Task Manager Performance tab showing CPU, Memory, and Disk. Annotate each. Alt text: "Windows Task Manager Performance tab with the CPU, Memory (RAM), and Disk sections labeled."

---

## 9. Hands-on lab

**Goal:** see your own laptop's CPU, RAM, and storage working live.
**Why:** the three parts stop being abstract when you watch your own numbers move.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- No internet or cables needed.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** You will only *look*. Do not click **End task** on anything. Just watch the numbers.

### 9a. Step-by-step instructions

1. Open **Task Manager**. Press these three keys at the same time: **Ctrl + Shift + Esc**.
2. If you see a small window, click **More details** at the bottom.
3. Click the **Performance** tab at the top.
4. On the left, click **CPU**. Watch the graph move as the computer works.
5. On the left, click **Memory**. This is your **RAM**. Note how much you have (for example, "8.0 GB").
6. On the left, click **Disk**. This is your **storage**. Note its size.

### 9b. Expected results

- The **CPU** graph rises and falls as your computer does work. If you open a program, you may see it jump.
  ```text
  Example: CPU  12%   (yours will vary)
  ```
- The **Memory** page shows total RAM and how much is in use right now.
  ```text
  Example: Memory  5.2/8.0 GB (65%)
  ```
- The **Disk** page shows your storage size and activity.
- ✅ **You did it if:** you found separate pages for CPU, Memory (RAM), and Disk (storage), and saw real numbers on each.

### 9c. Verify it worked

1. Open a program (like a web browser). Watch the **CPU** and **Memory** numbers rise.
2. Close it. Watch them fall again. You just saw the CPU and RAM at work.

### 9d. Reset / roll back

Close Task Manager (click the **X**). You changed nothing. Your laptop is exactly as it was.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking RAM and storage are the same | You confuse "room to work" with "room to keep files" | Remember: RAM = temporary workbench; storage = permanent cabinet |
| Believing more storage makes a computer faster | You buy the wrong upgrade | Storage holds *more*; RAM lets you *do more at once*. Speed usually needs more RAM (or a faster CPU/drive) |
| Thinking work in RAM is saved automatically | You lose unsaved work at power-off | RAM is cleared when power is off — **save** your work to storage |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Task Manager opens tiny with no tabs | It's in simple view | Click **More details** at the bottom |
| No **Performance** tab | Older Windows layout | Look along the top row of tabs; it may be labeled the same |
| Memory number looks "full" | Normal — Windows uses free RAM as a cache | High use isn't automatically bad; only worry if the computer is slow |

---

## 12. Lesson summary

- **The CPU is the worker** — it follows instructions and does the processing.
- **RAM is the fast, temporary workbench** — it holds what you're using now and clears at power-off.
- **Storage is the slower, permanent cabinet** — it keeps files and programs even when power is off.
- **RAM ≠ storage.** RAM = room to *work*; storage = room to *keep*.

**One-sentence recap:** The CPU does the work, RAM gives it fast temporary space, and storage keeps everything for the long term.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-01-02-fill-in-the-blank.md`
2. **Matching** — `wb-01-02-matching.md`
3. **Label the diagram** — `wb-01-02-label-the-diagram.md` (label CPU, RAM, storage)
4. **Short answer** — `wb-01-02-short-answer.md`
5. **Hands-on observation** — `wb-01-02-hands-on-observation.md` (record your real CPU/RAM/disk numbers)
6. **Vocabulary review** — `wb-01-02-vocabulary-review.md`
7. **Reflection** — `wb-01-02-reflection.md`

**Quick written warm-up (do this now):** In one sentence, explain the difference between RAM and storage to an imaginary friend.

____________________________________________________________________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-01-02-knowledge-check.md`.)

1. What does the CPU do? *(Objective: CPU)*
   - A) Keeps your files forever
   - B) Follows instructions and does the work
   - C) Connects to the internet
   - D) Stores your photos

2. Which part is fast but **temporary** — cleared when the power goes off? *(Objective: RAM)*
   - A) Storage
   - B) The CPU
   - C) RAM
   - D) The screen

3. Which part keeps your files even when the computer is **off**? *(Objective: storage)*
   - A) RAM
   - B) Storage
   - C) The CPU
   - D) Memory

4. **True or false —** RAM and storage are just two names for the same thing. Explain your answer in one sentence. *(Objective: RAM vs storage)*

5. In the desk analogy, the **desktop surface** stands for… *(Objective: RAM)*
   - A) The CPU
   - B) Storage
   - C) RAM
   - D) The internet

6. In the desk analogy, the **filing cabinet** stands for… *(Objective: storage)*
   - A) RAM
   - B) Storage
   - C) The CPU
   - D) Memory

7. Your computer feels slow because you have many programs open at once. Which part is most likely too small? *(Objective: RAM vs storage)*
   - A) Storage
   - B) RAM
   - C) The screen
   - D) The keyboard

8. **Matching —** write the letter of the correct meaning next to each part. *(Objective: vocabulary)*
   - ___ CPU &nbsp;&nbsp; ___ RAM &nbsp;&nbsp; ___ Storage
   - A) permanent place for files &nbsp; B) does the work &nbsp; C) fast, temporary work space

9. Fill in the blank: RAM is temporary; storage is ____________. *(Objective: RAM vs storage)*

10. **Scenario —** You saved a photo, then turned your laptop off overnight. In the morning, is the photo still there? Which part kept it, and why? *(Objective: storage)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-01-02-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-01-02-parts-inside.md`. In brief:

- **Objective in one line:** learners can tell CPU, RAM, and storage apart and explain RAM vs. storage.
- **Common misconceptions:** RAM = storage; more storage = faster. Correct both with the desk analogy.
- **Pacing:** ~25 min. The desk analogy is the anchor; the "power-off wipes the desktop" image is what makes RAM click.
- **How CompTIA tests it:** as background for treating routers/switches as computers with CPU, memory, and storage.
- **Support idea:** have strugglers act it out — hands as CPU, desk as RAM, drawer as storage.
- **Extension idea:** ask fast finishers to look up how much RAM vs. storage their phone has.

---

## 17. Cheat sheet

> **Quick reference — Inside a Computer**
>
> - **CPU** = the worker (does the processing / the "brain").
> - **RAM** = fast, **temporary** work space; cleared at power-off. More RAM = more open at once.
> - **Storage** = slower, **permanent**; keeps files with power off. More storage = keep more files.
> - **Key rule:** RAM ≠ storage. RAM = room to *work*; storage = room to *keep*.
> - **Desk analogy:** you = CPU, desktop = RAM, filing cabinet = storage.
>
> _(Full version: `resources/cheat-sheets/computer-basics-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **CPU (Central Processing Unit)** — The part that follows instructions and does a computer's work; the "brain."
- **RAM (Random Access Memory)** — Fast, temporary space for what a computer is using right now; cleared at power-off.
- **Storage** — Where a computer keeps files and programs long-term, even when the power is off.
- **Temporary** — Lasts only for a while; RAM is temporary.
- **Permanent** — Stays even after power-off; storage is permanent.
- **Gigabyte (GB)** — A unit for measuring memory and storage size.

---

## 19. Homework

- **Practice:** Look up (or check on the box/settings) how much RAM and how much storage your laptop has. Write both numbers down and label which is which.
- **Spaced review:** Redo the Lesson 01-01 flashcards for input, processing, and output.
- **Preview:** Your laptop has holes and plugs on its sides. What do you think each one is for? The next lesson answers this.

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

- [ ] I can explain what the CPU does.
- [ ] I can explain what RAM does and why it's temporary.
- [ ] I can explain what storage does and why it's permanent.
- [ ] I can tell RAM and storage apart in my own words.
- [ ] I completed the hands-on lab and saw my real CPU, RAM, and disk numbers.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M01-L02** — "The Parts Inside: CPU, Memory (RAM), and Storage" · Module 01 · Unit 1_
