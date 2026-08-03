---
id: NA-M04-L01
module: 04
lesson: 01
title: "Why Networks Exist (The Problem They Solve)"
unit: 2
objective_ids: ["1.0"]
reading_level_target: 7
status: Published
est_minutes: 20
equipment_tier: E1
prerequisites: ["NA-M01-L06"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-03"
---

# [Module 04 · Lesson 01] Why Networks Exist (The Problem They Solve)

> **Unit:** Unit 2 — Networking Foundations · **Time:** ~20 min · **Equipment:** E1 (your laptop)
> **You'll need first:** Lesson 01-06 (clients and servers). Everything from the on-ramp helps.

Welcome to Unit 2 — real networking starts here. Before we learn *how* networks work, we answer the most important question: **why do they exist at all?** Once you feel the problem, every later lesson has a purpose.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain the everyday **problems** that networks solve.
- [ ] Define a **network** in plain words.
- [ ] Give three real things a network lets you do.
- [ ] Explain why connecting computers beats carrying files by hand.

---

## 2. Introduction — why this matters

Imagine a street of houses with **no roads and no phone lines**. Each house has all it needs inside. But the families can never share things or talk to each other. Want to lend a book to your neighbor? You would have to toss it across the yard. Silly, right?

For a long time, computers were like those lonely houses. Each one was a **standalone** machine. Say you made a file on one computer. To get it onto another, you copied it to a disk. Then you walked the disk over by hand. People joked that this was "sneakernet" — the network was your sneakers.

That was slow. So we built **networks**. A network is like the roads and phone lines that connect houses. It lets computers **share** and **talk**. This is why the rest of the course exists. Everything you learn — cables, switches, addresses — helps that sharing happen fast.

🎯 **Exam tip:** Network+ is full of technical details, but they all serve one goal: letting devices share resources and communicate. Keep that "why" in mind and the details stick better.

---

## 3. Simple explanation

A **network** is two or more devices connected together. It lets them **share** things and **talk** to each other.

That's it. But look at what that unlocks. Networks solve four everyday problems:

1. **Sharing files.** Instead of copying to a USB stick and walking it over, you send a file across the network in seconds.
2. **Sharing devices.** One printer can serve a whole office, because every computer can reach it over the network. The same goes for shared storage.
3. **Communicating.** Email, video calls, and messages all travel over networks. People (and computers) talk to each other.
4. **Reaching the internet.** The biggest network of all is the internet. Your home network connects you to millions of servers worldwide.

The thing a network lets you share — a file, a printer, the internet — is called a **resource**. To **share** means to make a resource open to other devices on the network.

Here's the trade-off. Setting up a network takes some work: cables, devices, and settings. But once it is built, sharing is instant. Carrying files by hand does not work well for many computers. Picture doing that for 100 of them! A network does the carrying for you, and it is very fast.

> **The big idea:** a network connects computers so they can **share resources** and **communicate** — solving the problem that standalone machines are isolated.

💡 **Tip:** Whenever you wonder "why does this networking topic matter?", trace it back to sharing or communicating. That's always the goal.

---

## 4. Real-world analogy

> **"A network is like adding roads and phone lines to a town."**

| Before (standalone computers)… | After (a network)… |
|-------------------------------|--------------------|
| Isolated houses, no roads | Computers with no connections |
| Carry things by hand (sneakernet) | Copy files onto a USB and walk them over |
| Build **roads** between houses | Add **cables/Wi-Fi** between devices |
| Add **phone lines** to talk | Devices **communicate** instantly |
| Share a town **library** | Share a **printer** or **files** |
| Connect the town to the **highway** | Connect your network to the **internet** |

Roads and phone lines turned isolated houses into a connected town. Networks do the same for computers — and once the roads exist, sharing is effortless.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Network** | NET-wurk | Two or more devices connected to share and communicate. |
| **Resource** | REE-sorss | Something a network lets you share: a file, printer, or internet connection. |
| **Share** | shair | To make a resource available to other devices on the network. |
| **Standalone** | STAND-uh-lone | A computer that is not connected to any network. |
| **Communicate** | kuh-MYOO-nih-kate | To send and receive information between devices or people. |

---

## 6. ASCII diagram

```
   WITHOUT A NETWORK (standalone):        WITH A NETWORK (connected):

     [ PC ]   [ PC ]   [ PC ]               [ PC ]──┐
       ✗        ✗        ✗                          ├──[ Switch/Router ]──(( Internet ))
     isolated — must carry             [ PC ]──┤        │
     files by hand (sneakernet)                        [ Printer ]  ← shared resource
                                          [ PC ]──┘

   A network connects devices so they can SHARE (files, printer, internet)
   and COMMUNICATE (email, calls, messages).
```

_Standalone computers are islands. A network builds the bridges so they can share and talk._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-04-01-why-networks-01.svg` (created and stored in this module's `assets/`)
> **Shows:** left side — three separate PCs with a red "no connection" mark and a "sneakernet" USB being carried; right side — the same PCs connected to a switch/router, a shared printer, and the internet cloud, labeled "share + communicate."
> **Key elements & labels:** "standalone = isolated" vs. "networked = shares files, printer, internet"; arrows showing sharing.
> **Color meaning:** isolated side muted gray/red, connected side green/blue — **and** each side is labeled, so it reads in black and white.
> **Flow direction:** before (left) → after (right).
> **Alt text (required):** "On the left, three standalone computers are isolated and must carry files by hand; on the right, the same computers are connected through a switch and router to a shared printer and the internet, able to share resources and communicate."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-04-01-office-network-01.jpg`
> An office with several computers and one shared printer, labeled "one printer, many computers." Alt text: "An office where several computers share a single printer over a network."
>
> **Photo 2** — `img-04-01-usb-sneakernet-01.jpg`
> A hand carrying a USB stick between two computers, labeled "sneakernet — the slow way." Alt text: "A hand carrying a USB drive between two computers, labeled as the slow way to share files."
>
> **Photo 3** — `img-04-01-home-network-01.jpg`
> A home router with a laptop, phone, and TV around it, labeled "your home network." Alt text: "A home router connected to a laptop, phone, and TV, labeled as a home network."

---

## 9. Hands-on lab

**Goal:** see that your laptop is already part of a network, and list what it shares.
**Why:** networking feels real when you notice you're using one right now.

**You will need**
- Your Windows laptop (Equipment tier **E1**).
- A network/internet connection.
- Estimated time: 8 min.

⚠️ **Before you start (safety):** You'll only look and think. Nothing is changed.

### 9a. Step-by-step instructions

1. Open **Command Prompt** and run `ping` to your router (your Default Gateway from `ipconfig`). A reply proves you're **on a network**.
2. Open a web browser and load any site. That page came from a server **over the network** — you just shared the internet.
3. On paper, list **three resources** your home network lets you share or use (for example: the internet, a printer, files with another device, a streaming TV).
4. Think of one time you (or someone) used "sneakernet" — copying to a USB and carrying it. How would a network have been faster?

### 9b. Expected results

- Your router replies to `ping` — you're connected to a network.
- The web page loads — proof of sharing the internet resource.
- You listed three real resources.
- ✅ **You did it if:** you confirmed you're on a network and named what it lets you do.

### 9c. Verify it worked

1. Say it out loud: "My laptop is part of a network. It lets me share ______, ______, and ______."
2. Explain why that beats carrying files on a USB.

### 9d. Reset / roll back

Close the browser and Command Prompt. Nothing was changed.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Thinking a network is just "the internet" | You miss home/office networks | The internet is one huge network; small networks exist everywhere |
| Believing you need many computers for a network | You overlook small setups | Even two connected devices make a network |
| Forgetting the "why" | Details feel pointless | Every topic serves sharing or communicating |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Router won't reply to ping | Not connected, or ping blocked | Check Wi-Fi/cable; try loading a website instead |
| No internet, but on a network | Local network works, internet path down | You can still be "on a network" without internet |
| Not sure what my resources are | New idea | Think: internet, printers, shared files, streaming devices |

---

## 12. Lesson summary

- A **network** is two or more devices connected to **share resources** and **communicate**.
- Networks solve real problems: sharing **files**, sharing **devices** (like printers), **communicating**, and reaching the **internet**.
- A **resource** is anything shared; **sharing** makes it available to others.
- Networks beat carrying files by hand ("sneakernet") because sharing becomes instant.

**One-sentence recap:** Networks exist so computers can share resources and communicate instead of sitting isolated — turning a street of separate houses into a connected town.

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-04-01-fill-in-the-blank.md`
2. **Matching** — `wb-04-01-matching.md`
3. **Label the diagram** — `wb-04-01-label-the-diagram.md` (standalone vs. networked)
4. **Short answer** — `wb-04-01-short-answer.md`
5. **Hands-on observation** — `wb-04-01-hands-on-observation.md` (your network's resources)
6. **Vocabulary review** — `wb-04-01-vocabulary-review.md`
7. **Reflection** — `wb-04-01-reflection.md`

**Quick written warm-up (do this now):** Name one thing your home network lets you share.

____________________________________________________________________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-04-01-knowledge-check.md`.)

1. What is a network? *(Objective: define network)*
   - A) A single computer
   - B) Two or more devices connected to share and communicate
   - C) A type of file
   - D) A power cable

2. Which of these is a **problem** networks solve? *(Objective: why networks)*
   - A) Making computers heavier
   - B) Sharing files without carrying them by hand
   - C) Using more electricity
   - D) Slowing down printers

3. A printer that many computers can use over the network is an example of a shared… *(Objective: resource)*
   - A) resource
   - B) cable
   - C) bit
   - D) octet

4. "Sneakernet" means… *(Objective: why networks)*
   - A) a fast fiber network
   - B) copying files to a USB and carrying them by hand
   - C) a wireless network
   - D) the internet

5. A computer not connected to any network is called… *(Objective: standalone)*
   - A) standalone
   - B) a server
   - C) a resource
   - D) online

6. **True or false —** You need at least ten computers to have a network. Explain your answer in one sentence. *(Objective: define network)*

7. The biggest network of all is… *(Objective: internet)*
   - A) your home Wi-Fi
   - B) the internet
   - C) a single office
   - D) a USB drive

8. **Matching —** write the letter next to each term. *(Objective: vocabulary)*
   - ___ Network &nbsp;&nbsp; ___ Resource &nbsp;&nbsp; ___ Standalone
   - A) something shared over a network &nbsp; B) a computer with no network &nbsp; C) devices connected to share

9. Fill in the blank: To make a resource available to other devices is to ____________ it. *(Objective: share)*

10. **Scenario —** Your friend emails a file across town in seconds instead of driving a USB stick over. Which two networking benefits did they just use? *(Objective: benefits)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-04-01-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-04-01-why-networks.md`. In brief:

- **Objective in one line:** learners can explain why networks exist (share resources + communicate).
- **Common misconceptions:** "a network = the internet"; "you need many computers." Correct both directly.
- **Pacing:** ~20 min. This is the motivating "why" lesson that opens Unit 2 — keep it concrete and relatable.
- **How CompTIA tests it:** the whole exam serves this goal; framing it now aids retention.
- **Support idea:** brainstorm resources they already share at home (Wi-Fi, printer, streaming).
- **Extension idea:** list every networked device in their home and what each shares.

---

## 17. Cheat sheet

> **Quick reference — Why Networks Exist**
>
> - **Network** = 2+ devices connected to **share resources** and **communicate**.
> - **Problems networks solve:** share files · share devices (printers) · communicate · reach the internet.
> - **Resource** = anything shared (file, printer, internet). **Share** = make it available to others.
> - **Standalone** = a computer on no network. **Sneakernet** = carrying files by hand (the slow way).
> - The **internet** is the biggest network of all.
> - Every networking topic serves one goal: **sharing or communicating.**
>
> _(Full version: `resources/cheat-sheets/networking-fundamentals-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Network** — Two or more devices connected to share resources and communicate.
- **Resource** — Something a network lets you share: a file, printer, or internet connection.
- **Share** — To make a resource available to other devices on the network.
- **Standalone** — A computer that is not connected to any network.
- **Communicate** — To send and receive information between devices or people.

---

## 19. Homework

- **Practice:** Walk through your home and list every device on your network. Next to each, write what it shares or uses (internet, files, printing, streaming).
- **Spaced review:** Redo the Lesson 01-06 flashcards for clients and servers.
- **Preview:** A network needs "ends" (the devices) and "links" (the connections between them). The next lesson names these basic building blocks.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. What surprised me about why networks exist? _______________________
3. Where do I use networks in my own life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can define a network in my own words.
- [ ] I can name the problems networks solve.
- [ ] I can give three things my network lets me share or do.
- [ ] I understand why a network beats carrying files by hand.
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next lesson: the building blocks (nodes and links).

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M04-L01** — "Why Networks Exist (The Problem They Solve)" · Module 04 · Unit 2_
