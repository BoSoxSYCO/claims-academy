---
worksheet_type: hands-on-observation
number: "8.5.E"
title: "Subnet a Network by Hand"
module: 08
lesson: 05
unit: 5
objective_ids: ["1.4"]
points: 25
est_minutes: 15
answer_key: instructor/answer-keys/wb-08-05-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 8.5.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 08 · Lesson 05 · Unit 5** &nbsp;|&nbsp; **Equipment:** E1 (paper + your laptop)

---

**Goal:** subnet `192.168.1.0/24` into `/26` by hand, then place your own IP in a subnet.
**Safety:** paper exercise + a read-only `ipconfig`. Nothing changes.

---

### Step 1 — Block size (5 pts)
/26 = 255.255.255.192. Block size = 256 − 192 = ______

### Step 2 — List the subnets (5 pts)
Count by the block size from 0:

192.168.1.____ , 192.168.1.____ , 192.168.1.____ , 192.168.1.____

### Step 3 — One full subnet (5 pts)
For the **.64** subnet, write:

Network: 192.168.1.____ &nbsp; Hosts: .____ – .____ &nbsp; Broadcast: 192.168.1.____

### Step 4 — Usable hosts (5 pts)
Usable hosts per subnet = 2^6 − 2 = ______

### Step 5 — Place your own IP (5 pts)
Run `ipconfig`. If your IP is 192.168.1.x, which /26 subnet is it in?

My IP: ______.______.______.______ &nbsp; → Subnet block starting at .______

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** paper + read-only command only — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 8.5.E · CompTIA Network+ N10-009 · Page ___ of ____
