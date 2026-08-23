---
worksheet_type: hands-on-observation
number: "8.8.E"
title: "See Your Private and Public Addresses"
module: 08
lesson: 08
unit: 5
objective_ids: ["1.4"]
points: 25
est_minutes: 12
answer_key: instructor/answer-keys/wb-08-08-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 8.8.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 08 · Lesson 08 · Unit 5** &nbsp;|&nbsp; **Equipment:** E1 (laptop + home router)

---

**Goal:** compare your private (inside) address with your public (outside) address — NAT in action.
**Safety:** read only. Do **not** change any router settings.

---

### Step 1 — Your private address (5 pts)
Run `ipconfig`. Write the IPv4 Address (private) and Default Gateway.

Private IP: ______.______.______.______ &nbsp; Gateway: ______.______.______.______

### Step 2 — Confirm it's private (5 pts)
Is it in 10.x, 172.16–31.x, or 192.168.x?

☐ Yes, private &nbsp; Which range: ____________

### Step 3 — Your public address (5 pts)
Open the router page (the Default Gateway) → Status/Internet/WAN. Read the public IP.
`[TO VERIFY ON HARDWARE — router address/login vary]`

Public (WAN) IP: ______.______.______.______

### Step 4 — Compare (5 pts)
Is the public IP in a private range?

☐ No — it's public &nbsp; ☐ It's also private (carrier-grade NAT — note it)

### Step 5 — Explain (5 pts)
In one sentence, what connects your private inside address to that public outside address?

______________________________________________________________

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** read-only; log out of the router page. Nothing was changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 8.8.E · CompTIA Network+ N10-009 · Page ___ of ____
