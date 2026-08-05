---
worksheet_type: hands-on-observation
number: "8.3.E"
title: "Split Your Own Address With the Mask"
module: 08
lesson: 03
unit: 5
objective_ids: ["1.4"]
points: 25
est_minutes: 10
answer_key: instructor/answer-keys/wb-08-03-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 8.3.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 08 · Lesson 03 · Unit 5** &nbsp;|&nbsp; **Equipment:** E1 (your Windows laptop)

---

**Goal:** read your subnet mask and split your own IP into network and host.
**Safety:** you only **read** settings. Nothing changes.

---

### Step 1 — Get your IP and mask (5 pts)
Open the Command Prompt, run `ipconfig`. Read both lines.

IPv4 Address: ______.______.______.______
Subnet Mask:  ______.______.______.______

### Step 2 — Mark the network octets (5 pts)
Circle each IP octet where the mask is **255**. Those are the network.

My network portion: ____________________

### Step 3 — Mark the host (5 pts)
The octet(s) where the mask is **0** are the host.

My host portion: ____________________

### Step 4 — Check the gateway (5 pts)
Read the **Default Gateway**. Does its network portion match yours?

Default Gateway: ______.______.______.______ &nbsp;&nbsp; Same network as me? ☐ Yes ☐ No

### Step 5 — Same-network test (5 pts)
Would your laptop reach an address that shares your network portion **directly**, or via the router?

Circle: &nbsp; directly &nbsp;/&nbsp; via router

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** close the Command Prompt — nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 8.3.E · CompTIA Network+ N10-009 · Page ___ of ____
