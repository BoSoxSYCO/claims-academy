---
worksheet_type: hands-on-observation
number: "10.2.E"
title: "Spot TCP and UDP With netstat"
module: 10
lesson: 02
unit: 7
objective_ids: ["1.5"]
points: 25
est_minutes: 10
answer_key: instructor/answer-keys/wb-10-02-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 10.2.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 10 · Lesson 02 · Unit 7** &nbsp;|&nbsp; **Equipment:** E1 (your Windows laptop)

---

**Goal:** find TCP and UDP rows and notice TCP has states while UDP does not.
**Safety:** `netstat` only reads. Nothing changes.

---

### Step 1 — Run netstat (5 pts)
Open the Command Prompt, type `netstat -an`, press Enter.

Ran OK? ☐ Yes ☐ No

### Step 2 — Find a TCP row (5 pts)
Read the **Proto** column. Find a row marked **TCP** and read its **State**.

A TCP state I see: ____________________

### Step 3 — Find a UDP row (5 pts)
Find a row marked **UDP**. What is in its Foreign Address / State?

UDP foreign/state: ____________________

### Step 4 — Compare (5 pts)
Which protocol shows a connection **state**?

Circle: &nbsp; TCP &nbsp;/&nbsp; UDP

### Step 5 — Explain (5 pts)
In one sentence, why does UDP have no state?

______________________________________________________________

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** read-only command — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 10.2.E · CompTIA Network+ N10-009 · Page ___ of ____
