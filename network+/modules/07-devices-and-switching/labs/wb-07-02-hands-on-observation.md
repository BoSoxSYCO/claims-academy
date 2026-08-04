---
worksheet_type: hands-on-observation
number: "7.2.E"
title: "Find Your MAC and Trace the Learning"
module: 07
lesson: 02
unit: 4
objective_ids: ["2.1"]
points: 25
est_minutes: 10
answer_key: instructor/answer-keys/wb-07-02-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 7.2.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 07 · Lesson 02 · Unit 4** &nbsp;|&nbsp; **Equipment:** E1 (Windows laptop)

---

**Goal:** find your real MAC address and reason through how a switch learns it.
**Safety:** `getmac` only reads information — nothing changes.

---

### Step 1 — Open Command Prompt (5 pts)
Search "cmd," press Enter. Type and run:
```
getmac
```

### Step 2 — Read your MAC (5 pts)
Write the **Physical Address** (your MAC, 6 hex bytes):

My MAC: ____________________________

### Step 3 — The table entry (5 pts)
Imagine you plug into **port 5** and send a frame. Write the entry the switch creates:

____________________ → port ______

### Step 4 — Unknown destination (5 pts)
A frame arrives for a device the switch has never seen. What does the switch do?

☐ Forward to one port &nbsp; ☐ Flood to all other ports &nbsp; ☐ Drop it

### Step 5 — After the reply (5 pts)
That device replies. What does the switch learn from the reply?

______________________________________________________________

---

**What I noticed (write one sentence):**
______________________________________________________________

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 7.2.E · CompTIA Network+ N10-009 · Page ___ of ____
