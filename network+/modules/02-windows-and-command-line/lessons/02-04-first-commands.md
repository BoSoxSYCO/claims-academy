---
id: NA-M02-L04
module: 02
lesson: 04
title: "Your First Commands: ipconfig, ping, cd, dir"
unit: 1
objective_ids: ["on-ramp"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E1
prerequisites: ["NA-M02-L01", "NA-M02-L03"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 02 · Lesson 04] Your First Commands: ipconfig, ping, cd, dir

> **Unit:** Unit 1 — Computer & Digital Foundations · **Time:** ~30 min · **Equipment:** E1 (laptop; internet helps)
> **You'll need first:** Lessons 02-01 (folders/paths) and 02-03 (the terminal and its rhythm).

Now the fun part. You'll learn four small commands that network technicians use every single day. Two of them look at your **network**. Two of them move you around your **folders**. All four are safe.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Use **`ipconfig`** to see your computer's network address and gateway.
- [ ] Use **`ping`** to test whether you can reach another device.
- [ ] Use **`cd`** to move into a folder and **`dir`** to list what's inside.
- [ ] Read the output of each command.

---

## 2. Introduction — why this matters

When a network problem happens, a technician doesn't panic — they reach for a small toolbox of commands. The first two questions are almost always: *"What is my address?"* and *"Can I reach the other device?"* Two commands answer those: **`ipconfig`** and **`ping`**.

The other two commands — **`cd`** and **`dir`** — help you move around folders *inside the terminal*, the same folders you saw in File Explorer (Lesson 02-01). You'll need these to find tools and files while you work.

Why learn them now? Because every hands-on networking lab later — testing your cable, checking your switch, fixing a connection — starts with these exact commands. Master this tiny toolbox, and the rest of the course feels easy.

🎯 **Exam tip:** `ipconfig` and `ping` are two of the most-tested command-line tools on Network+. You'll use them so often here that they'll become second nature.

---

## 3. Simple explanation

Think of these four commands as a small toolbox. Here's what each tool does:

### `ipconfig` — "What is my address?"
Type `ipconfig` and press Enter. It shows your computer's network details. The three lines that matter most right now:

- **IPv4 Address** — your computer's **address** on the network (like a house number). *(We'll learn all about addresses in Module 08; for now, just know this is yours.)*
- **Subnet Mask** — a helper number (more on this in Module 08).
- **Default Gateway** — the address of your **router**, the door to the rest of the network and the internet.

### `ping` — "Can I reach you?"
Type `ping` and then an address, like `ping 8.8.8.8`. It sends a few small "are you there?" messages and shows the answers:

- **Reply from ...** means the other device answered — you can reach it. ✅
- **Request timed out** means no answer — either it's unreachable or it's set to ignore ping.

`ping` is the fastest way to ask, "Is the connection working?"

### `cd` — "Go into a folder"
`cd` stands for **change directory**. Type `cd` and a folder name to move into it, like `cd Documents`. To go back up one folder, type `cd ..` (two dots).

### `dir` — "Show me what's here"
Type `dir` to list all the files and folders in your current location — just like looking inside a folder in File Explorer.

> **The pattern is always the same** (from Lesson 02-03): see the prompt, type the command, press Enter, read the output.

💡 **Tip:** Your **Default Gateway** address (from `ipconfig`) is a great thing to `ping` — if it replies, your connection to the router is working.

---

## 4. Real-world analogy

> **"These four commands are like tools for exploring a building."**

| The tool… | The command… | What it does |
|-----------|--------------|--------------|
| Your **ID card** with your room number | `ipconfig` | Shows *your* address |
| **Knocking** on a door to see if someone answers | `ping` | Tests if you can reach another device |
| **Walking** into a room | `cd` | Moves into a folder |
| **Looking around** the room | `dir` | Lists what's in the folder |

Just like exploring a building — check your own room number, knock to see who's home, walk into rooms, and look around — these four commands let you explore your computer and network.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **ipconfig** | eye-pee-CON-fig | A command that shows your computer's network settings. |
| **ping** | ping | A command that tests whether you can reach another device. |
| **cd** | see-dee | "Change directory" — a command to move into a folder. |
| **dir** | dur (or dee-eye-are) | A command that lists the files and folders where you are. |
| **IP address** | eye-pee | Your computer's address on the network (full details in Module 08). |
| **Default gateway** | | The address of your router — the door to the rest of the network. |

---

## 6. ASCII diagram

```
   YOUR TOOLBOX OF FIRST COMMANDS

   ipconfig ──▶ "What is my address?"
                IPv4 Address . . . : 192.168.1.24     ← your address
                Default Gateway . . : 192.168.1.1      ← your router

   ping ──────▶ "Can I reach you?"
                C:\> ping 192.168.1.1
                Reply from 192.168.1.1: bytes=32 time=2ms   ← it answered ✅

   cd ────────▶ "Go into a folder"     C:\Users\You> cd Documents
   dir ───────▶ "Show me what's here"  C:\Users\You\Documents> dir
```

_Two commands look at the network (`ipconfig`, `ping`); two move around folders (`cd`, `dir`)._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-02-04-command-toolbox-01.svg` (created and stored in this module's `assets/`)
> **Shows:** a toolbox with four labeled tools — `ipconfig` (ID card), `ping` (knocking hand), `cd` (footprints/door), `dir` (magnifying glass) — each with its one-line job.
> **Key elements & labels:** the four commands, their icons, and a one-line description of each; a split showing "network tools" vs. "folder tools."
> **Color meaning:** network tools = blue, folder tools = green — **and** each is labeled, so it reads in black and white.
> **Flow direction:** grid of four tools.
> **Alt text (required):** "A toolbox of four first commands: ipconfig shows your address, ping tests if you can reach a device, cd moves into a folder, and dir lists what's inside; ipconfig and ping are network tools, cd and dir are folder tools."

---

## 8. Suggested real photos (production brief)

> **Screenshot 1** — `img-02-04-ipconfig-01.jpg`
> Real `ipconfig` output with the IPv4 Address and Default Gateway lines highlighted. Alt text: "The output of the ipconfig command with the IPv4 Address and Default Gateway lines highlighted."
>
> **Screenshot 2** — `img-02-04-ping-reply-01.jpg`
> Real `ping` output showing "Reply from ..." lines. Alt text: "The output of a ping command showing several Reply from lines."
>
> **Screenshot 3** — `img-02-04-cd-dir-01.jpg`
> A terminal showing `cd Documents` then `dir` listing files. Alt text: "A terminal showing the cd command moving into Documents and the dir command listing its files."

---

## 9. Hands-on lab

**Goal:** run all four commands and read what each tells you.
**Why:** these are the exact commands you'll use to check every network connection in this course.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- An internet or network connection (for the `ping` steps).
- Your `NetworkAcademy` folder from Lesson 02-01.
- Estimated time: 12 min.

⚠️ **Before you start (safety):** Every command here only *shows* information or *moves* you between folders. Nothing is changed or deleted.

### 9a. Step-by-step instructions

1. Open **Command Prompt** (taskbar icon, or Windows key → `cmd` → Enter).
2. Type `ipconfig` and press **Enter**. Find two lines: **IPv4 Address** and **Default Gateway**. Write both down.
3. Ping your router. Type `ping ` then your Default Gateway address (for example `ping 192.168.1.1`) and press **Enter**. Look for **Reply from**.
4. Ping a public server. Type `ping 8.8.8.8` and press **Enter**. Look for **Reply from** (this checks internet reachability).
5. Move into your Documents folder. Type `cd Documents` and press **Enter**. The prompt now ends in `\Documents>`.
6. List what's there. Type `dir` and press **Enter**. Find your `NetworkAcademy` folder in the list.
7. Go back up one folder. Type `cd ..` and press **Enter**. The prompt loses the `\Documents` part.

### 9b. Expected results

- `ipconfig` shows lines like:
  ```text
  IPv4 Address. . . . . . . . . . . : 192.168.1.24
  Default Gateway . . . . . . . . . : 192.168.1.1
  ```
- `ping` (when it works) shows:
  ```text
  Reply from 192.168.1.1: bytes=32 time=2ms TTL=64
  ```
- `cd Documents` changes the prompt to end in `\Documents>`.
- `dir` lists your files and folders, including `NetworkAcademy`.
- ✅ **You did it if:** you found your address and gateway, saw at least one **Reply from**, and moved in and out of a folder.

### 9c. Verify it worked

1. Say what `ipconfig` told you: "My address is ____, my router is ____."
2. Say what `ping` told you: "I could / could not reach it."
3. Confirm `cd` and `dir` changed your location and listed files.

### 9d. Reset / roll back

Type `cd %USERPROFILE%` to return to your home folder, then `exit` to close the window. Nothing was changed.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Forgetting the space in `ping 8.8.8.8` | "not recognized" or error | Put one space between `ping` and the address |
| Typing `cd` into a folder that isn't there | "cannot find the path" | Run `dir` first to see the exact folder names |
| Reading "Request timed out" as broken internet | Wrong conclusion | Some devices ignore ping; try `ping 8.8.8.8` or a website |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| `ipconfig` shows no IPv4 Address | Not connected to a network | Check Wi-Fi or plug in a cable, then try again |
| All pings "time out" | No connection, or firewall blocks ping | Ping your Default Gateway first; if that fails, check your connection |
| `cd Documents` says path not found | You're not in your user folder | Type `cd %USERPROFILE%` first, then `cd Documents` |

---

## 12. Lesson summary

- **`ipconfig`** shows your computer's **address** and **default gateway** (your router).
- **`ping`** tests whether you can **reach** another device (**Reply from** = success).
- **`cd`** moves you **into a folder**; **`cd ..`** goes back up.
- **`dir`** **lists** the files and folders where you are.

**One-sentence recap:** `ipconfig` shows your address, `ping` tests a connection, and `cd`/`dir` move you around folders — the everyday toolbox of a network technician.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-02-04-fill-in-the-blank.md`
2. **Matching** — `wb-02-04-matching.md`
3. **Label the diagram** — `wb-02-04-label-the-diagram.md` (match commands to jobs)
4. **Short answer** — `wb-02-04-short-answer.md`
5. **Hands-on observation** — `wb-02-04-hands-on-observation.md` (record your real output)
6. **Vocabulary review** — `wb-02-04-vocabulary-review.md`
7. **Reflection** — `wb-02-04-reflection.md`

**Quick written warm-up (do this now):** Which command answers "What is my address?" and which answers "Can I reach you?"

Address: ____________  Reach: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-02-04-knowledge-check.md`.)

1. Which command shows your computer's network address? *(Objective: ipconfig)*
   - A) ping
   - B) ipconfig
   - C) dir
   - D) cd

2. Which command tests whether you can reach another device? *(Objective: ping)*
   - A) ipconfig
   - B) dir
   - C) ping
   - D) cd

3. In `ipconfig` output, the **Default Gateway** is the address of your… *(Objective: gateway)*
   - A) screen
   - B) router
   - C) keyboard
   - D) CPU

4. What does **`cd`** do? *(Objective: cd)*
   - A) Deletes a folder
   - B) Moves into a folder
   - C) Shows your address
   - D) Tests a connection

5. What does **`dir`** do? *(Objective: dir)*
   - A) Lists the files and folders where you are
   - B) Pings a device
   - C) Restarts Windows
   - D) Closes the terminal

6. **True or false —** "Reply from ..." after a ping means the other device answered. Explain your answer in one sentence. *(Objective: ping output)*

7. To go back up one folder, you type… *(Objective: cd)*
   - A) `dir`
   - B) `cd ..`
   - C) `ping`
   - D) `up`

8. **Matching —** write the letter next to each command. *(Objective: commands)*
   - ___ ipconfig &nbsp;&nbsp; ___ ping &nbsp;&nbsp; ___ dir
   - A) test if you can reach a device &nbsp; B) list what's in this folder &nbsp; C) show your address

9. Fill in the blank: In `ping 8.8.8.8`, you must put a ____________ between `ping` and the address. *(Objective: syntax)*

10. **Scenario —** Your internet seems down. Which two commands would you run first, and what would each tell you? *(Objective: troubleshooting with ipconfig/ping)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-02-04-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-02-04-first-commands.md`. In brief:

- **Objective in one line:** learners can run ipconfig, ping, cd, and dir and read the output.
- **Common misconceptions:** "timed out = internet down"; forgetting the space in `ping`. Correct both live.
- **Pacing:** ~30 min (four commands). Keep IP-address depth for Module 08 — here it's just "your address."
- **How CompTIA tests it:** ipconfig and ping are heavily tested; this builds the muscle memory.
- **Support idea:** have learners ping their own gateway and celebrate the first "Reply from."
- **Extension idea:** try `ipconfig /all` and spot the physical (MAC) address (previews Module 07).

---

## 17. Cheat sheet

> **Quick reference — First Four Commands**
>
> | Command | Asks | Shows |
> |---------|------|-------|
> | `ipconfig` | "What's my address?" | IPv4 Address + Default Gateway (router) |
> | `ping <address>` | "Can I reach you?" | "Reply from" = yes · "Request timed out" = no |
> | `cd <folder>` | "Go into a folder" | moves you in (`cd ..` goes up) |
> | `dir` | "What's here?" | lists files and folders |
>
> - **Test your connection fast:** `ping` your Default Gateway (from `ipconfig`).
> - Put a **space** in `ping 8.8.8.8`. Type exactly.
>
> _(Full version: `resources/cheat-sheets/windows-and-cli-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **ipconfig** — A command that shows your computer's network settings.
- **ping** — A command that tests whether you can reach another device.
- **cd** — "Change directory" — a command to move into a folder.
- **dir** — A command that lists the files and folders where you are.
- **IP address** — Your computer's address on the network (full details in Module 08).
- **Default gateway** — The address of your router; the door to the rest of the network.

---

## 19. Homework

- **Practice:** Run `ipconfig` and write down your IPv4 Address and Default Gateway. Then `ping` your gateway three times.
- **Spaced review:** Redo the Lesson 02-03 flashcards for the terminal's rhythm.
- **Preview:** Command output can look like a wall of text at first. The next lesson teaches you how to read it calmly, one line at a time.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Which command felt the most useful? _______________________
3. Where would I use these in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can use `ipconfig` to find my address and gateway.
- [ ] I can use `ping` to test if I can reach a device.
- [ ] I can use `cd` to move into a folder and `cd ..` to go up.
- [ ] I can use `dir` to list what's in a folder.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: reading command output calmly.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M02-L04** — "Your First Commands: ipconfig, ping, cd, dir" · Module 02 · Unit 1_
