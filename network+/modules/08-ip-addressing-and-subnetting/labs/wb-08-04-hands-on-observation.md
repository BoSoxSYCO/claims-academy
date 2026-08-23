---
worksheet_type: hands-on-observation
number: "8.4.E"
title: "Convert Your Own Mask to a Slash"
module: 08
lesson: 04
unit: 5
objective_ids: ["1.4"]
points: 25
est_minutes: 10
answer_key: instructor/answer-keys/wb-08-04-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 8.4.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 08 · Lesson 04 · Unit 5** &nbsp;|&nbsp; **Equipment:** E1 (your Windows laptop)

---

**Goal:** convert your own subnet mask to a slash and write your network in CIDR.
**Safety:** you only **read** settings. Nothing changes.

---

### Step 1 — Read your mask (5 pts)
Open the Command Prompt, run `ipconfig`, read the **Subnet Mask**.

Subnet Mask: ______.______.______.______

### Step 2 — Count the bits (5 pts)
Count 255 octets × 8, plus table bits for any partial octet.

255 octets: ______ → ______ bits &nbsp;&nbsp; Partial octet bits: ______

### Step 3 — Write the slash (5 pts)
Add them up.

My mask as a slash: /____________

### Step 4 — Find your network (5 pts)
From your IPv4 Address, write the network (host octet = 0).

My network: ______.______.______.0 (or as your mask requires)

### Step 5 — Write CIDR (5 pts)
Combine network + slash.

My network in CIDR: ____________________ / ______

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** close the Command Prompt — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 8.4.E · CompTIA Network+ N10-009 · Page ___ of ____
