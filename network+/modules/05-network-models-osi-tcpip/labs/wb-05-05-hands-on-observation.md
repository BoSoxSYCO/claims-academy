---
worksheet_type: hands-on-observation
number: "5.5.E"
title: "See Real Hops with tracert"
module: 05
lesson: 05
unit: 2
objective_ids: ["1.1"]
points: 25
est_minutes: 14
answer_key: instructor/answer-keys/wb-05-05-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 5.5.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 05 · Lesson 05 · Unit 2** &nbsp;|&nbsp; **Equipment:** E1 (Windows laptop, online)

---

**Goal:** watch a real packet's hops to a server, then trace its layers on paper.
**Safety:** `tracert` only reads the path — it changes nothing.

---

### Step 1 — Open Command Prompt (5 pts)
Search "cmd" in the Start menu and press Enter. Type and run:
```
tracert www.google.com
```

### Step 2 — Count the hops (5 pts)
Each numbered line is one **hop** (one device along the way).

Number of hops shown: ____________

### Step 3 — Read the times (5 pts)
The times are in ms — the latency from Lesson 04-06, measured per hop.

First hop time: ______ ms &nbsp;&nbsp; Last hop time: ______ ms
Did the time usually go up as hops increased? ☐ Yes ☐ No

### Step 4 — Trace the layers on paper (5 pts)
Draw: **Laptop → Switch (L2) → Router (L3) → … → Server.**
Under it write: "IP stays the ____________" and "MAC changes each ____________."

### Step 5 — Answer (5 pts)
Which device reads the **IP** to choose the next hop? ____________
Which device reads the **MAC** for local delivery? ____________

---

**What I noticed (write one sentence):**
______________________________________________________________

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 5.5.E · CompTIA Network+ N10-009 · Page ___ of ____
