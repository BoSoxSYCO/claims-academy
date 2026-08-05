---
worksheet_type: hands-on-observation
number: "10.1.E"
title: "Spot Ports With netstat"
module: 10
lesson: 01
unit: 7
objective_ids: ["1.5"]
points: 25
est_minutes: 10
answer_key: instructor/answer-keys/wb-10-01-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 10.1.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 10 · Lesson 01 · Unit 7** &nbsp;|&nbsp; **Equipment:** E1 (laptop, on the internet)

---

**Goal:** match a real connection's ephemeral (client) port to a well-known (server) port.
**Safety:** `netstat` only reads. Nothing changes.

---

### Step 1 — Make a connection (5 pts)
Open a browser tab to a secure (`https://`) site.

Tab open? ☐ Yes

### Step 2 — Run netstat (5 pts)
Open the Command Prompt, type `netstat -n`, press Enter.

Ran OK? ☐ Yes ☐ No

### Step 3 — Find :443 (5 pts)
Find a line whose **Foreign Address** ends in `:443`. Write that foreign address.

Foreign address: ____________________ : 443

### Step 4 — Your ephemeral port (5 pts)
On the same line, read your **Local Address** port (a high number).

Local port (ephemeral): ____________

### Step 5 — Label them (5 pts)
Which is well-known and which is ephemeral?

443 = ____________ &nbsp;&nbsp; your high port = ____________

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** read-only command — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 10.1.E · CompTIA Network+ N10-009 · Page ___ of ____
