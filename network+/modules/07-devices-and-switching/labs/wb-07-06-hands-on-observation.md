---
worksheet_type: hands-on-observation
number: "7.6.E"
title: "Open a Console Session"
module: 07
lesson: 06
unit: 4
objective_ids: ["2.3", "3.1"]
points: 25
est_minutes: 15
answer_key: instructor/answer-keys/wb-07-06-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 7.6.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 07 · Lesson 06 · Unit 4** &nbsp;|&nbsp; **Equipment:** E3 (Dell 3424 + laptop + console cable)

---

**Goal:** connect the console cable and open a terminal to your Dell 3424 (Lab B, part 2).
**Safety:** only **open** the connection. **Do not** change settings or passwords this time.

---

### Step 1 — Connect the cable (5 pts)
Plug the **console cable** into the switch's **console port** and into your laptop (via a USB-to-serial adapter if needed).

Cable connected? ☐ Yes ☐ No

### Step 2 — Find the COM port (5 pts)
Open **Device Manager → Ports (COM & LPT)** and read the COM number. `[TO VERIFY ON HARDWARE]`

COM port used: ____________

### Step 3 — Set up the terminal (5 pts)
Open **PuTTY**. Connection type = **Serial**. Serial line = your COM port. Speed = **9600**. `[TO VERIFY ON HARDWARE]`

Speed set to: ____________ &nbsp;&nbsp; Type: ☐ Serial

### Step 4 — Open and press Enter (5 pts)
Click **Open**. Press **Enter** once or twice.

Did switch text appear (a prompt or login)? ☐ Yes ☐ No — blank/garbage → check baud & COM

### Step 5 — Name the method (5 pts)
Is a console login **in-band** or **out-of-band**? Circle: &nbsp; in-band &nbsp;/&nbsp; out-of-band

Why does it still work with no network? ______________________________

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** close PuTTY and unplug the console cable — nothing on the switch was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 7.6.E · CompTIA Network+ N10-009 · Page ___ of ____
