---
worksheet_type: hands-on-observation
number: "9.5.E"
title: "Check Your Time Source With w32tm"
module: 09
lesson: 05
unit: 6
objective_ids: ["1.4", "3.1"]
points: 25
est_minutes: 10
answer_key: instructor/answer-keys/wb-09-05-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 9.5.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 09 · Lesson 05 · Unit 6** &nbsp;|&nbsp; **Equipment:** E1 (your Windows laptop)

---

**Goal:** find your laptop's time source and stratum, and confirm it's synced.
**Safety:** `w32tm /query` only reads. Nothing changes.

---

### Step 1 — The source (5 pts)
Open the Command Prompt, type `w32tm /query /source`, press Enter.

Time source: ____________________________

### Step 2 — The status (5 pts)
Run `w32tm /query /status`. Find the **Stratum** line.

Stratum: ____________

### Step 3 — Last sync (5 pts)
Find **Last Successful Sync Time**.

Last sync: ____________________________

### Step 4 — Interpret (5 pts)
Is a lower stratum better or worse? Circle: &nbsp; better &nbsp;/&nbsp; worse

### Step 5 — Why it matters (5 pts)
Name one thing that would break if this clock were far off.

______________________________________________________________

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** read-only command — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 9.5.E · CompTIA Network+ N10-009 · Page ___ of ____
