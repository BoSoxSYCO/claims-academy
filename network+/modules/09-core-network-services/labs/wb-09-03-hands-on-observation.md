---
worksheet_type: hands-on-observation
number: "9.3.E"
title: "See Ports With netstat"
module: 09
lesson: 03
unit: 6
objective_ids: ["1.4"]
points: 25
est_minutes: 12
answer_key: instructor/answer-keys/wb-09-03-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 9.3.E — Hands-On Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 25

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 09 · Lesson 03 · Unit 6** &nbsp;|&nbsp; **Equipment:** E1 (laptop + router access)

---

**Goal:** watch your laptop use many ports at once, and find the port-forwarding page.
**Safety:** `netstat` reads only. On the router, **look only** — don't change rules.

---

### Step 1 — Make some connections (5 pts)
Open two or three browser tabs to different sites.

Tabs open? ☐ Yes

### Step 2 — Run netstat (5 pts)
Open the Command Prompt, type `netstat -n`, press Enter.

Ran OK? ☐ Yes ☐ No

### Step 3 — Read a line (5 pts)
Pick one line. Write its **Local Address** (ends in `:port`) and **Foreign Address**.

Local: ____________________ &nbsp; Foreign: ____________________

### Step 4 — Count ports (5 pts)
How many **different local ports** does your laptop use? (Count a few lines.)

About how many: ____________

### Step 5 — Port forwarding page (5 pts)
On the router (Default Gateway), find **Port Forwarding** (Advanced/NAT). **Read only.**

Found the page? ☐ Yes ☐ No &nbsp; Any rules present? ☐ Yes ☐ No

---

**What I noticed (write one sentence):**
______________________________________________________________

**Reset:** `netstat` reads only; router rules untouched. Nothing changed.

---

Self-score: ______ / 25 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 9.3.E · CompTIA Network+ N10-009 · Page ___ of ____
