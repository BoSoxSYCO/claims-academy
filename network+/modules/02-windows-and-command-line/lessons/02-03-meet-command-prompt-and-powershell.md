---
id: NA-M02-L03
module: 02
lesson: 03
title: "Meet the Command Prompt and PowerShell"
unit: 1
objective_ids: ["on-ramp", "5.0"]
reading_level_target: 7
status: Published
est_minutes: 25
equipment_tier: E1
prerequisites: ["NA-M02-L01", "NA-M02-L02"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 02 · Lesson 03] Meet the Command Prompt and PowerShell

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~25 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lessons 02-01 and 02-02 (folders/paths; opening and pinning tools).

Until now, you've controlled Windows by pointing and clicking. There's another way — one that network professionals use every day: **typing commands.** Let's open the tool for that and say hello.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain what the **command line** is and why it exists.
- [ ] Open the **Command Prompt** and recognize the **prompt** symbol.
- [ ] Tell **Command Prompt** and **PowerShell** apart.
- [ ] Type your first safe command and read the result.

---

## 2. Introduction — why this matters

Think about ordering food two ways. You can **point** at pictures on a menu, or you can **write down** exactly what you want and hand it to the kitchen. Pointing is easy but limited. Writing lets you be exact and ask for anything.

Windows is the same. Clicking buttons (the way you've worked so far) is like pointing at a menu. It's friendly, but slow for some jobs and it can't do everything. The **command line** is like writing your exact order: you type a short instruction, press Enter, and the computer does precisely that.

Why does this matter for networking? Because the fastest way to check a network — see your address, test a connection, trace a path — is by typing a few short commands. Every network technician uses the command line daily. The good news: you only need a small handful of commands, and you'll learn them one at a time.

🎯 **Exam tip:** Network+ expects you to know command-line tools like `ipconfig` and `ping` by name and by what they do. This lesson gets you comfortable in the terminal first; the tools come next lesson.

---

## 3. Simple explanation

The **command line** (also called the **CLI**, short for **Command Line Interface**) is a place where you type text commands to the computer instead of clicking. A window that lets you do this is called a **terminal**.

Windows comes with **two** terminals:

- **Command Prompt** — the classic, simple one. It's been in Windows for decades. We'll use it most in this course.
- **PowerShell** — a newer, more powerful terminal. It can do everything Command Prompt does and much more. You'll meet it, but we'll keep things simple with Command Prompt for now.

Both work the same basic way. When you open one, you see a **prompt** — a short piece of text ending in `>` that shows where you are and waits for you to type. For example:

```
C:\Users\You>
```

That prompt means: "I'm in the folder `C:\Users\You`, ready for your command." You type a command after the `>`, press **Enter**, and the computer runs it. Any text it sends back is the **output**.

Here's the shape of every command-line moment:

> **You see a prompt → you type a command → you press Enter → you read the output.**

That's the whole rhythm. It never changes, no matter which command you use.

⚠️ **Watch out:** Type commands exactly as shown, including spaces. The command line is precise — a small typo means it won't understand you. If that happens, just retype it.

💡 **Tip:** The prompt is not part of the command. When a lesson shows `C:\Users\You> ver`, you only type `ver` and press Enter.

---

## 4. Real-world analogy

> **"The command line is like texting your computer."**

| When you text a person… | When you use the command line… |
|-------------------------|--------------------------------|
| You **write** an exact message | You **type** an exact command |
| You press **send** | You press **Enter** |
| They **reply** | The computer shows **output** |
| A typo can confuse them | A typo confuses the command line |
| Short, clear messages work best | Short, exact commands work best |

Clicking is like pointing; the command line is like writing a clear text. Once you're used to it, typing a quick command is often faster than clicking through menus.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Command line (CLI)** | | A place where you type text commands instead of clicking. |
| **Terminal** | TUR-mih-nul | A window that lets you type commands (Command Prompt is one). |
| **Command Prompt** | | The classic, simple Windows terminal. |
| **PowerShell** | POW-er-shell | A newer, more powerful Windows terminal. |
| **Prompt** | prompt | The text ending in `>` that shows where you are and waits for input. |
| **Command** | kuh-MAND | A short instruction you type for the computer to run. |

---

## 6. ASCII diagram

```
   ┌─ Command Prompt ───────────────────────────────────────────┐
   │                                                             │
   │  C:\Users\You> ver                ← prompt  +  your command │
   │                                                             │
   │  Microsoft Windows [Version 10.0.22631.xxxx]  ← the OUTPUT  │
   │                                                             │
   │  C:\Users\You> _                  ← ready for the next one  │
   │                                                             │
   └─────────────────────────────────────────────────────────────┘

   Rhythm:  see prompt  →  type command  →  press Enter  →  read output
```

_The `C:\Users\You>` part is the prompt (you don't type it). You type only what comes after it._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-02-03-terminal-anatomy-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a terminal window with one command typed and its output, with call-outs labeling the **prompt**, the **command**, and the **output**; a small side note "clicking = pointing · command line = writing."
> **Key elements & labels:** the window title (Command Prompt), the prompt `C:\Users\You>`, a typed command (`ver`), the output line, and three labeled call-outs.
> **Color meaning:** prompt = gray, command = blue, output = green — **and** each is labeled, so it reads in black and white.
> **Flow direction:** top to bottom (prompt → command → output → next prompt).
> **Alt text (required):** "A Command Prompt window showing the prompt C colon Users You, a typed command ver, and the version output below it, with call-outs labeling the prompt, the command, and the output."

---

## 8. Suggested real photos (production brief)

> **Screenshot 1** — `img-02-03-command-prompt-01.jpg`
> An open Command Prompt window with the prompt visible, prompt symbol circled. Alt text: "An open Command Prompt window with the prompt symbol highlighted."
>
> **Screenshot 2** — `img-02-03-powershell-01.jpg`
> An open PowerShell window (often blue), labeled to compare with Command Prompt. Alt text: "An open PowerShell window, labeled to compare with Command Prompt."
>
> **Screenshot 3** — `img-02-03-ver-output-01.jpg`
> The result of typing `ver`, with the prompt, command, and output each labeled. Alt text: "A Command Prompt showing the ver command and its version output, with the prompt, command, and output labeled."

---

## 9. Hands-on lab

**Goal:** open Command Prompt and run your first two safe commands.
**Why:** you'll live in this window during the networking labs — get comfortable now.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- Command Prompt pinned to your taskbar (from Lesson 02-02) — or just search for it.
- Estimated time: 10 min.

⚠️ **Before you start (safety):** The two commands below only *show information*. They change nothing. Type them exactly.

### 9a. Step-by-step instructions

1. Open **Command Prompt** (click its pinned taskbar icon, or press the **Windows key**, type `cmd`, and press **Enter**).
2. Look at the **prompt**. It shows your current folder and ends in `>`, like `C:\Users\You>`.
3. Type this command exactly, then press **Enter**:
   ```text
   ver
   ```
4. Read the output — it shows your Windows version.
5. Now type this command exactly, then press **Enter**:
   ```text
   whoami
   ```
6. Read the output — it shows your computer and user name.

### 9b. Expected results

- After `ver`, you see a line like:
  ```text
  Microsoft Windows [Version 10.0.22631.xxxx]
  ```
- After `whoami`, you see something like:
  ```text
  my-laptop\you
  ```
- A fresh prompt (`C:\Users\You>`) appears after each, waiting for more.
- ✅ **You did it if:** both commands ran and showed output, and you can point to the prompt, the command, and the output.

### 9c. Verify it worked

1. Point at the `>` and say "prompt."
2. Point at what you typed and say "command."
3. Point at what came back and say "output."

### 9d. Reset / roll back

Type `exit` and press **Enter** to close the window (or click the **X**). Nothing was changed.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Typing the prompt too (like `C:\Users\You>`) | The command fails | Type only the command *after* the `>` |
| A small typo in the command | "not recognized" error | Retype it exactly; check spaces and spelling |
| Expecting a pop-up window | You miss the text reply | Output appears as text right below your command |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| "'ver' is not recognized..." | Typo or extra characters | Retype `ver` alone and press Enter |
| The window closed instantly | Wrong shortcut used | Open it again from the taskbar or search `cmd` |
| I see a blue window, not black | You opened PowerShell | That's fine — the same commands work; or open Command Prompt instead |

---

## 12. Lesson summary

- The **command line (CLI)** lets you control the computer by **typing commands** instead of clicking.
- A **terminal** is the window for that; Windows has **Command Prompt** (classic) and **PowerShell** (newer).
- The **prompt** ends in `>` and waits for you; you type a **command** and press Enter to see **output**.
- The rhythm never changes: **prompt → command → Enter → output.**

**One-sentence recap:** The command line is where you type exact commands to your computer, and every command follows the same rhythm: see the prompt, type, press Enter, read the output.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-02-03-fill-in-the-blank.md`
2. **Matching** — `wb-02-03-matching.md`
3. **Label the diagram** — `wb-02-03-label-the-diagram.md` (label prompt, command, output)
4. **Short answer** — `wb-02-03-short-answer.md`
5. **Hands-on observation** — `wb-02-03-hands-on-observation.md` (record your first commands)
6. **Vocabulary review** — `wb-02-03-vocabulary-review.md`
7. **Reflection** — `wb-02-03-reflection.md`

**Quick written warm-up (do this now):** Write the four-step rhythm of every command-line moment.

____________ → ____________ → ____________ → ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-02-03-knowledge-check.md`.)

1. What is the command line? *(Objective: define CLI)*
   - A) A place to type text commands to the computer
   - B) A type of network cable
   - C) A folder full of files
   - D) The power button

2. Which of these is a Windows terminal? *(Objective: terminals)*
   - A) File Explorer
   - B) Command Prompt
   - C) Task Manager
   - D) The browser

3. What is the **prompt**? *(Objective: prompt)*
   - A) The output of a command
   - B) The text ending in `>` that waits for you to type
   - C) A saved file
   - D) A network port

4. In `C:\Users\You> ver`, what part do you actually type? *(Objective: prompt vs command)*
   - A) `C:\Users\You>`
   - B) `ver`
   - C) The whole line
   - D) Nothing

5. After you type a command, what do you press to run it? *(Objective: rhythm)*
   - A) The spacebar
   - B) Enter
   - C) Escape
   - D) The Windows key

6. **True or false —** PowerShell and Command Prompt are both terminals where you type commands. Explain your answer in one sentence. *(Objective: terminals)*

7. In the texting analogy, pressing **Enter** is like… *(Objective: analogy)*
   - A) Writing the message
   - B) Pressing send
   - C) Deleting the message
   - D) Turning off the phone

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Prompt &nbsp;&nbsp; ___ Command &nbsp;&nbsp; ___ Output
   - A) what you type &nbsp; B) what the computer sends back &nbsp; C) the `>` that waits for you

9. Fill in the blank: The text reply a command sends back is called the ____________. *(Objective: output)*

10. **Scenario —** You type a command and get "'xyz' is not recognized." What most likely happened, and what's your first fix? *(Objective: typos)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-02-03-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-02-03-command-line.md`. In brief:

- **Objective in one line:** learners can open a terminal, read the prompt, and run a safe command.
- **Common misconceptions:** typing the prompt text; expecting a pop-up instead of text output. Correct both live.
- **Pacing:** ~25 min. Keep commands to `ver` and `whoami` — real tools come in 02-04.
- **How CompTIA tests it:** by naming CLI tools and their output; comfort in the terminal is the prerequisite.
- **Support idea:** narrate the rhythm aloud each time: "prompt, type, Enter, output."
- **Extension idea:** try `hostname` and `time /t` (both safe) and identify the output.

---

## 17. Cheat sheet

> **Quick reference — The Command Line**
>
> - **Command line (CLI)** = type text commands instead of clicking.
> - **Terminal** = the window for it. Windows has **Command Prompt** (classic) and **PowerShell** (newer).
> - **Prompt** = text ending in `>` (e.g., `C:\Users\You>`); you type only *after* it.
> - **Rhythm:** see prompt → type command → press **Enter** → read **output**.
> - **Open it:** taskbar icon, or Windows key → `cmd` → Enter. **Close it:** type `exit`.
> - **Safe first commands:** `ver` (Windows version), `whoami` (your user).
>
> _(Full version: `resources/cheat-sheets/windows-and-cli-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Command line (CLI)** — A place where you type text commands instead of clicking.
- **Terminal** — A window that lets you type commands (Command Prompt is one).
- **Command Prompt** — The classic, simple Windows terminal.
- **PowerShell** — A newer, more powerful Windows terminal.
- **Prompt** — The text ending in `>` that shows where you are and waits for input.
- **Command** — A short instruction you type for the computer to run.

---

## 19. Homework

- **Practice:** Open Command Prompt and run `ver`, `whoami`, and `hostname` (all safe). Write down each command's output.
- **Spaced review:** Redo the Lesson 02-02 flashcards for finding and pinning tools.
- **Preview:** Next lesson you'll learn the four commands every network tech uses first: `ipconfig`, `ping`, `cd`, and `dir`. Which do you think shows your network address?

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Does the terminal feel scary or okay now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain what the command line is.
- [ ] I opened Command Prompt and found the prompt symbol.
- [ ] I ran `ver` and `whoami` and read the output.
- [ ] I can point to the prompt, the command, and the output.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: the first real network commands.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M02-L03** — "Meet the Command Prompt and PowerShell" · Module 02 · Unit 1_
