---
worksheet_type: hands-on-observation
number: "9.2.E"
title: "Resolve a Name With nslookup"
module: 09
lesson: 02
unit: 6
objective_ids: ["1.4"]
points: 25
est_minutes: 10
answer_key: instructor/answer-keys/wb-09-02-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 9.2.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 09 · Lesson 02 · Unit 6** &nbsp;|&nbsp; **Equipment:** E1 (laptop, on the internet)

---

**Goal:** turn names into numbers yourself with `nslookup` and `ping`.
**Safety:** read-only lookups of public names. Nothing changes.

---

### Step 1 — Run nslookup (5 pts)
Open the Command Prompt, type `nslookup google.com`, press Enter.

Ran OK? ☐ Yes ☐ No

### Step 2 — The server (5 pts)
Read the **Server** / **Address** at the top — that's your DNS resolver.

DNS Server address: ______.______.______.______

### Step 3 — The answer (5 pts)
Read an **Address** under the answer — that's an IP for google.com.

An IP returned: ______.______.______.______

### Step 4 — Try another (5 pts)
Run `nslookup wikipedia.org`. Did you get an address?

☐ Yes &nbsp; One IP: ____________________

### Step 5 — See it in ping (5 pts)
Run `ping google.com`. What IP is shown in the brackets after the name?

IP in brackets: ______.______.______.______

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** read-only lookups — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 9.2.E · CompTIA Network+ N10-009 · Page ___ of ____
