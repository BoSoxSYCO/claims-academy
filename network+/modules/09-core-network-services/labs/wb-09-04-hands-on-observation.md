---
worksheet_type: hands-on-observation
number: "9.4.E"
title: "Trace a Packet Out With tracert"
module: 09
lesson: 04
unit: 6
objective_ids: ["1.4"]
points: 25
est_minutes: 12
answer_key: instructor/answer-keys/wb-09-04-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 9.4.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 09 · Lesson 04 · Unit 6** &nbsp;|&nbsp; **Equipment:** E1 (laptop, on the internet)

---

**Goal:** trace a packet leaving your network and find the gateway's MAC.
**Safety:** `tracert` and `arp -a` only read/trace. Nothing changes.

---

### Step 1 — Your gateway (5 pts)
Run `ipconfig`. Write the **Default Gateway**.

Default Gateway: ______.______.______.______

### Step 2 — Run tracert (5 pts)
Run `tracert google.com`. (Press Ctrl+C to stop after a few hops.)

Ran OK? ☐ Yes ☐ No

### Step 3 — Check hop 1 (5 pts)
Read hop **1**. Does it match your Default Gateway?

Hop 1 address: ______.______.______.______ &nbsp; Matches gateway? ☐ Yes ☐ No

### Step 4 — Count hops (5 pts)
Roughly how many hops before you stopped or reached the destination?

About how many: ____________

### Step 5 — Gateway's MAC (5 pts)
Run `arp -a`. Find your gateway's IP and read its Physical Address (MAC).

Gateway MAC: ____________________________

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** read/trace only — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 9.4.E · CompTIA Network+ N10-009 · Page ___ of ____
