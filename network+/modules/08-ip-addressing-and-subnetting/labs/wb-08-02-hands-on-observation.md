---
worksheet_type: hands-on-observation
number: "8.2.E"
title: "Classify Your Own IP Address"
module: 08
lesson: 02
unit: 5
objective_ids: ["1.4"]
points: 25
est_minutes: 10
answer_key: instructor/answer-keys/wb-08-02-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 8.2.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 08 · Lesson 02 · Unit 5** &nbsp;|&nbsp; **Equipment:** E1 (your Windows laptop)

---

**Goal:** classify your own IP by class and private range, and test loopback.
**Safety:** you only **read** settings and `ping` yourself. Nothing changes.

---

### Step 1 — Get your IP (5 pts)
Open the Command Prompt, run `ipconfig`, read the **IPv4 Address**.

Your IPv4 address: ______.______.______.______

### Step 2 — Name the class (5 pts)
Use the first octet: A = 1–126, B = 128–191, C = 192–223.

First octet: ______ &nbsp;&nbsp; Class: ______

### Step 3 — Private or public? (5 pts)
Is it in 10.x, 172.16–31.x, or 192.168.x?

Circle: &nbsp; private &nbsp;/&nbsp; public &nbsp;&nbsp; Which range: ____________

### Step 4 — Test loopback (5 pts)
Run `ping 127.0.0.1`. Did you get replies?

☐ Yes, replies from 127.0.0.1 &nbsp; ☐ No

### Step 5 — Explain (5 pts)
In one sentence, what does a successful loopback ping prove about your laptop?

______________________________________________________________

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** close the Command Prompt — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 8.2.E · CompTIA Network+ N10-009 · Page ___ of ____
