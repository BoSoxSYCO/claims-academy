---
id: NA-M07-L06
module: 07
lesson: 06
title: "First Login: Console vs. Web Management"
unit: 4
objective_ids: ["2.3", "3.1"]
reading_level_target: 7
status: Published
est_minutes: 30
equipment_tier: E3
prerequisites: ["NA-M07-L05"]
author: "NetworkAcademy+ team"
last_reviewed: "2026-08-04"
---

# [Module 07 · Lesson 06] First Login: Console vs. Web Management

> **Unit:** Unit 4 — Devices & Switching · **Time:** ~30 min · **Equipment:** E3 (the Dell PowerConnect 3424 switch)
> **You'll need first:** Lesson 07-05 (the parts of your Dell 3424).

Last lesson you met your managed switch and found the **console port**. Now you get **in**. There are two doors into a managed switch: the **console** (a direct cable) and the **web** (a browser). This lesson shows what each is, when to use it, and how the very first login works — safely.

---

## 1. Learning objectives

By the end of this lesson, you will be able to:

- [ ] Explain the two ways to manage a switch: **console** (out-of-band) and **web** (in-band).
- [ ] Say why the **first** setup almost always uses the **console**.
- [ ] Name the parts of a console login: **console cable**, **terminal emulator**, and **baud rate**.
- [ ] Connect the console cable and open a terminal to reach your switch.

---

## 2. Introduction — why this matters

Imagine a new house with a keypad lock on the front door. Before the keypad works, you need the **physical key** to get in the first time and set it up. After that, the keypad is the easy, everyday way in — but only once it's set.

A managed switch is the same. Out of the box it has **no IP address** and no web page yet, so a browser can't reach it. You need the **physical key** — a **console cable** plugged straight into the console port. That always works, even with the network down. Once you've set the switch up (given it an IP), you can use the easy **web** door from then on.

Why learn both? Because the exam and real jobs both expect you to know **console (out-of-band)** vs. **web/remote (in-band)** management — and to reach for the console when nothing else works.

🎯 **Exam tip:** Network+ tests **out-of-band vs. in-band** management. The console port is out-of-band: it works without the network. Web, SSH, and Telnet are in-band: they ride on the network.

🔧 **Lab link:** This is **Lab B, part 2** — connect the console cable and open a terminal to your Dell 3424.

---

## 3. Simple explanation

There are two doors into a managed switch. Let's meet both.

### Door 1 — Console (out-of-band)
- You plug a **console cable** from your laptop straight into the switch's **console port**.
- You open a **terminal emulator** — a small program on your laptop (like PuTTY or Tera Term) that shows the switch's text screen.
- You set the connection speed, called the **baud rate**, plus a few simple settings, then press Enter and log in.
- This is called **out-of-band** management: it does **not** use the network. It works even if the switch has no IP address or the network is broken. That's why the **first** login uses it.

### Door 2 — Web (in-band)
- Once the switch has an **IP address** on your network, you open a **web browser** and type that IP.
- A **web management** page (a GUI — a point-and-click screen) loads, and you log in there.
- This is called **in-band** management: it rides **on** the network. It's easy and visual, but only works when the network and the switch's IP are set and healthy.

### Which door, when?
- **First-ever setup, or network broken?** → **Console.** It always works.
- **Everyday changes on a working network?** → **Web** (or later, SSH). Easier and faster.

The console is your safety net. Even pros keep a console cable in the bag.

### The console settings (serial)
A console link is a **serial** connection, so your terminal needs the right settings. The common defaults are:

| Setting | Common value |
|---------|--------------|
| Baud rate (speed) | `9600` `[TO VERIFY ON HARDWARE]` |
| Data bits | `8` |
| Parity | `None` |
| Stop bits | `1` |
| Flow control | `None` |

People say this as "**9600 8-N-1**." If the screen shows nothing or shows garbage, the baud rate is usually wrong.

> **The big idea:** A managed switch has **two doors**. The **console** (out-of-band) uses a direct cable and always works — so the **first** login uses it. The **web** (in-band) uses a browser and the switch's IP — easy, but only on a working network.

💡 **Tip:** No console port on your laptop? A **USB-to-serial** adapter plus the console cable does the job. Your laptop then sees a "COM" port to pick in the terminal.

⚠️ **Watch out:** Exact **default username/password**, the **baud rate**, and any **default IP** vary by unit and firmware. Confirm them on **your** 3424 — never guess a password into a live switch.

---

## 4. Real-world analogy

> **"The console is the physical key; the web page is the keypad you use after it's set up."**

| House | Switch |
|-------|--------|
| Physical key (always opens the door) | **Console** cable (out-of-band, always works) |
| Keypad lock (easy, once programmed) | **Web** page (in-band, needs an IP) |
| The key works even in a power cut | Console works even with the network down |
| The keypad needs power and a code | Web needs a working network and login |

Both let you in. The key never fails you; the keypad is nicer once it's ready.

---

## 5. Vocabulary

| Term | Say it like | Plain-language meaning |
|------|-------------|------------------------|
| **Console cable** | | The cable that plugs your laptop straight into the switch's console port. |
| **Terminal emulator** | tur-mih-nul | A program (PuTTY, Tera Term) that shows the switch's text screen on your laptop. |
| **Baud rate** | bawd | The speed of the serial console link (often 9600). |
| **Out-of-band management** | | Managing a device over a path that is not the network (the console). |
| **In-band management** | | Managing a device over the network itself (web, SSH). |
| **Web management (GUI)** | goo-ey | A point-and-click web page for managing the switch in a browser. |

---

## 6. ASCII diagram

```
   TWO DOORS INTO A MANAGED SWITCH (Dell 3424)

   DOOR 1 — CONSOLE  (out-of-band: no network needed)
   ┌─────────┐   console cable    ┌──────────────┐
   │ Laptop  │───────────────────▶│ CONSOLE port │  ← always works,
   │ (PuTTY) │   9600 8-N-1       │  on switch   │    used for FIRST login
   └─────────┘                    └──────────────┘

   DOOR 2 — WEB  (in-band: rides on the network)
   ┌─────────┐   network + IP     ┌──────────────┐
   │ Browser │──────( LAN )──────▶│ Switch's IP  │  ← easy point-and-click,
   │  http://│   e.g. 192.168.x.x │  web page    │    needs a working network
   └─────────┘                    └──────────────┘

   First setup → CONSOLE.   Everyday changes on a live network → WEB.
```

_Console = direct cable, always works. Web = browser to the switch's IP, needs the network._

---

## 7. Suggested color diagram (production brief)

> **Filename:** `dgm-07-06-console-vs-web-01.svg` (created and stored in this module's `assets/`)
> **Shows:** the two ways to manage a switch side by side — a laptop with a console cable into the console port (labeled out-of-band, "always works, first login"), and a browser reaching the switch's IP over the LAN (labeled in-band, "needs a working network").
> **Key elements & labels:** laptop + terminal, console cable, console port, "9600 8-N-1"; browser, LAN, switch IP, web page; the out-of-band vs. in-band labels.
> **Color meaning:** each path is labeled with text (out-of-band / in-band); do not rely on color alone to tell the doors apart.
> **Flow direction:** left-to-right for each door; console on top, web below.
> **Alt text (required):** "Two ways to manage a switch shown side by side. On top, a laptop running a terminal connects by a console cable straight into the switch's console port, labeled out-of-band, always works, used for the first login, with serial settings 9600 8-N-1. Below, a web browser reaches the switch's IP address across the local network, labeled in-band, easy point-and-click, but needs a working network."

---

## 8. Suggested real photos (production brief)

> **Photo 1** — `img-07-06-console-cable-01.jpg`
> The console cable plugged into the switch's console port and the laptop. Alt text: "A console cable connecting a laptop to the switch's console port for the first login."
>
> **Photo 2** — `img-07-06-terminal-settings-01.jpg`
> A terminal program (PuTTY/Tera Term) showing the serial settings (9600 8-N-1). Alt text: "A terminal emulator set to 9600 baud, 8 data bits, no parity, 1 stop bit."
>
> **Photo 3** — `img-07-06-web-login-01.jpg`
> A browser at the switch's IP showing the web login page. Alt text: "A web browser at the switch's IP address showing the switch's web management login page."

---

## 9. Hands-on lab

**Goal:** connect the console cable and open a terminal to your Dell 3424 (Lab B, part 2).
**Why:** the console is the one door that always works — every switch tech must be able to open it.

**You will need**
- The Dell PowerConnect 3424 (Equipment tier **E3**), powered on. Your Windows laptop.
- The **console cable** (and a **USB-to-serial** adapter if your laptop has no serial port).
- A terminal emulator installed (PuTTY is free). Estimated time: 15 min.

⚠️ **Before you start (safety):** Do **not** change any settings or passwords yet — this lesson only **opens** the connection. Making changes comes later, once you know how to undo them.

### 9a. Step-by-step instructions

1. Plug one end of the **console cable** into the switch's **console port**. Plug the other end into your laptop (through the USB-to-serial adapter if needed).
2. On the laptop, find which **COM port** the adapter uses: open **Device Manager**, expand **Ports (COM & LPT)**, and read the **COM** number (for example, `COM3`). `[TO VERIFY ON HARDWARE]`
3. Open **PuTTY**. For **Connection type**, choose **Serial**.
4. In **Serial line**, type your COM port (e.g., `COM3`). In **Speed**, type `9600`. `[TO VERIFY ON HARDWARE: confirm the baud rate for your unit]`
5. (Optional) Under **Connection → Serial**, confirm **8** data bits, **None** parity, **1** stop bit, **None** flow control.
6. Click **Open**. A black terminal window appears.
7. Press **Enter** once or twice. You should see the switch respond with a prompt or a login line. `[TO VERIFY ON HARDWARE: exact prompt and any default login]`

### 9b. Expected results

- A terminal window opens with no error.
- After pressing Enter, the switch shows a **prompt** or a **login** request.
- ✅ **You did it if:** text from the switch appears when you press Enter. (If the screen stays blank or shows garbage, see Troubleshooting — it's almost always the baud rate or COM port.)

### 9c. Verify it worked

1. Confirm you see switch text (a prompt or login), not a blank or frozen screen.
2. Say out loud: "This is **out-of-band** — it works even with no network."

### 9d. Reset / roll back

- You changed **nothing** on the switch. To finish, just **close** PuTTY and unplug the console cable. The switch is exactly as it was.

---

## 10. Common mistakes

| ⚠️ Mistake | What happens | How to fix / avoid it |
|-----------|--------------|-----------------------|
| Wrong **baud rate** | Blank screen or garbage text | Set the speed to `9600` (or your unit's value) |
| Wrong **COM port** | Terminal opens but nothing responds | Check Device Manager for the right COM number |
| Trying the **web** first, out of the box | Browser can't reach it | New switch has no IP yet — use the **console** first |
| Changing settings on this first login | You could lock yourself out | Only **open** the connection today; no changes |
| Guessing a password repeatedly | You may lock the account | Confirm the real default first `[TO VERIFY ON HARDWARE]` |

---

## 11. Troubleshooting

| Symptom | Likely cause | Try this |
|---------|--------------|----------|
| Blank terminal | Wrong baud rate | Set speed to `9600`; try again |
| Garbage characters | Baud rate mismatch | Match the switch's baud rate exactly |
| "Unable to open connection" | Wrong or busy COM port | Re-check the COM number; close other terminal apps |
| No COM port listed | Adapter driver missing | Install the USB-to-serial driver; re-open Device Manager |
| Web page won't load | Switch has no IP / wrong IP | Set it up by console first, then use the known IP |

---

## 12. Lesson summary

- A managed switch has **two doors**: the **console** (out-of-band) and the **web** (in-band).
- The **console** uses a direct **console cable** and a **terminal emulator** at the right **baud rate** — it always works, so the **first** login uses it.
- The **web** uses a browser and the switch's **IP address** — easy, but only on a working network.
- Out of the box a switch has **no IP**, so you start with the console.

**One-sentence recap:** To manage a switch you use the console (a direct cable that always works, used for the first setup) or the web (a browser to the switch's IP, easy once the network is set).

---

## 13. Workbook exercises

Print and complete these worksheets (in this module's `assessments/` and `labs/` folders):

1. **Fill-in-the-blank** — `wb-07-06-fill-in-the-blank.md`
2. **Matching** — `wb-07-06-matching.md`
3. **Label the diagram** — `wb-07-06-label-the-diagram.md` (the two doors)
4. **Short answer** — `wb-07-06-short-answer.md`
5. **Hands-on observation** — `wb-07-06-hands-on-observation.md` (open a console session)
6. **Vocabulary review** — `wb-07-06-vocabulary-review.md`
7. **Reflection** — `wb-07-06-reflection.md`

**Quick written warm-up (do this now):** Which door works with no network? Which needs an IP?

Works with no network: ____________  Needs an IP: ____________

---

## 14. Quiz

**Instructions:** Choose the best answer. Don't peek at the answer key until you finish. (A printable copy is `quiz-07-06-knowledge-check.md`.)

1. Which management method works **even with no network**? *(Objective: out-of-band)*
   - A) Web
   - B) Console (out-of-band)
   - C) SSH
   - D) Telnet

2. **In-band** management means you manage the switch… *(Objective: in-band)*
   - A) over a direct console cable
   - B) over the network (web, SSH)
   - C) by pressing a reset button
   - D) with no login

3. Why does the **first** setup use the **console**? *(Objective: why console)*
   - A) It's the fastest
   - B) The switch has no IP yet, so a browser can't reach it
   - C) The web is never used
   - D) It needs no cable

4. The program on your laptop that shows the switch's text screen is a… *(Objective: terms)*
   - A) web browser
   - B) terminal emulator
   - C) firewall
   - D) spreadsheet

5. A blank or garbled console screen is most often caused by… *(Objective: troubleshoot)*
   - A) a dead switch
   - B) the wrong baud rate
   - C) a bad password
   - D) no Wi-Fi

6. **True or false —** A brand-new switch out of the box can be managed right away from a web browser. Explain in one sentence. *(Objective: why console)*

7. "9600 8-N-1" describes the… *(Objective: terms)*
   - A) IP address
   - B) serial console settings (speed, data, parity, stop)
   - C) MAC address
   - D) firmware version

8. **Matching —** write the letter next to each term. *(Objective: terms)*
   - ___ Console cable &nbsp;&nbsp; ___ Baud rate &nbsp;&nbsp; ___ Web management
   - A) the serial link's speed &nbsp; B) point-and-click page in a browser &nbsp; C) direct laptop-to-switch cable

9. Fill in the blank: Managing a switch over the network (web or SSH) is called ____________ management. *(Objective: in-band)*

10. **Scenario —** The network is down, and you must fix the switch. Which door do you use, and why? *(Objective: apply)*

---

## 15. Answer key

> 🔒 **Instructor / self-check only.** Full answers with explanations live in
> `instructor/answer-keys/wb-07-06-answers.md` (kept on a separate printable page). Check your quiz there after you finish.

---

## 16. Instructor notes

> Full teaching guide: `instructor/teaching-notes/tn-07-06-first-login.md`. In brief:

- **Objective in one line:** learners contrast console (out-of-band) vs. web (in-band) management and open a real console session.
- **Common misconceptions:** the web works out of the box; console needs the network; baud rate doesn't matter. Correct all three.
- **Pacing:** ~30 min. The console-connect lab is the payoff; most stumbles are COM port or baud rate.
- **How CompTIA tests it:** out-of-band vs. in-band; console/serial settings; why the first setup is console.
- **Accuracy note:** default credentials, baud rate, COM port, and any default IP vary by unit/firmware — mark `[TO VERIFY ON HARDWARE]`, never fabricate a login or output.
- **Extension idea:** SSH vs. Telnet (secure vs. plain) and dedicated management ports for fast learners.

---

## 17. Cheat sheet

> **Quick reference — Console vs. web management**
>
> - **Console = out-of-band.** Direct **console cable** + **terminal emulator** at **9600 8-N-1**. Always works; used for the **first** login.
> - **Web = in-band.** A **browser** to the switch's **IP address**; easy point-and-click; needs a working network.
> - **New switch has no IP** → start with the **console**.
> - **Blank/garbage screen?** → wrong **baud rate** (or COM port).
> - **No serial port on the laptop?** → **USB-to-serial** adapter → pick the **COM** port.
> - Confirm default **login**, **baud rate**, and any default **IP** on **your** unit — never guess.
>
> _(Full version: `resources/cheat-sheets/devices-and-switching-quick-reference.md`.)_

---

## 18. Glossary updates

Added/confirmed in `resources/glossary/glossary-all.md`:

- **Console cable** — The cable that plugs your laptop straight into the switch's console port.
- **Terminal emulator** — A program (PuTTY, Tera Term) that shows the switch's text screen on your laptop.
- **Baud rate** — The speed of a serial console link (often 9600).
- **Out-of-band management** — Managing a device over a path that is not the network (the console).
- **In-band management** — Managing a device over the network itself (web, SSH).
- **Web management (GUI)** — A point-and-click web page for managing a switch in a browser.

---

## 19. Homework

- **Practice:** Open and close a console session twice, until the terminal settings feel routine.
- **Spaced review:** Redo the Lesson 07-05 flashcards on the switch's front-panel parts.
- **Preview:** Next module we start giving devices real **IP addresses** — the very thing the web door needs.

---

## 20. Self-reflection

Answer honestly (no grade):

1. In one sentence, what did this lesson teach? _______________________
2. Can I explain out-of-band vs. in-band now? _______________________
3. Where would I use this idea in real life? _______________________
4. Confidence right now (circle): 😟 1 — 2 — 3 — 4 — 5 😎

---

## 21. Learning checklist

Before you move on, check each box **honestly**:

- [ ] I can explain console (out-of-band) vs. web (in-band) management.
- [ ] I know why the first login uses the console.
- [ ] I can name the console cable, terminal emulator, and baud rate.
- [ ] I opened a terminal to my switch (or know the exact steps).
- [ ] I scored 80%+ on the quiz.
- [ ] I finished the workbook worksheets.
- [ ] I know this connects to the next module: giving devices IP addresses.

**Not all checked?** That's fine — go back to the section you're unsure about. This course waits for you.

---
---
_NetworkAcademy+ · CompTIA Network+ N10-009 · Lesson **NA-M07-L06** — "First Login: Console vs. Web Management" · Module 07 · Unit 4_
