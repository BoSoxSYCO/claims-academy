---
worksheet_type: hands-on-observation
number: "8.7.E"
title: "Find Your Own IPv6 Address"
module: 08
lesson: 07
unit: 5
objective_ids: ["1.4"]
points: 25
est_minutes: 12
answer_key: instructor/answer-keys/wb-08-07-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 8.7.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 08 · Lesson 07 · Unit 5** &nbsp;|&nbsp; **Equipment:** E1 (your Windows laptop + paper)

---

**Goal:** find your laptop's IPv6 addresses and shorten a sample by hand.
**Safety:** read-only `ipconfig` + paper. Nothing changes.

---

### Step 1 — Run ipconfig (5 pts)
Open the Command Prompt, run `ipconfig`. Look for IPv6 lines.

Any IPv6 line shown? ☐ Yes ☐ No

### Step 2 — Find your link-local (5 pts)
Find the **Link-local IPv6 Address** — it starts **fe80::**.

First groups of your fe80 address: ____________________________

### Step 3 — Note the interface ID (5 pts)
Windows adds a `%` and a number (like `%12`) after fe80 addresses.

Is there a `%number` at the end? ☐ Yes ☐ No &nbsp; (It names the interface — not part of the address.)

### Step 4 — Shorten a sample (5 pts)
Shorten: `fe80:0000:0000:0000:0204:61ff:fe9d:f156`

Your answer: ____________________________________________

### Step 5 — Identify types (5 pts)
What kind of address is each?

`::1` → ____________ &nbsp; your `fe80::` → ____________

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** read-only command + paper only — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 8.7.E · CompTIA Network+ N10-009 · Page ___ of ____
