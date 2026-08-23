---
worksheet_type: hands-on-observation
number: "10.3.E"
title: "The Must-Know Ports — Hands-on Observation"
module: 10
lesson: 03
unit: 7
objective_ids: ["1.5"]
points: 20
est_minutes: 15
answer_key: instructor/answer-keys/wb-10-03-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 10.3.E — Hands-on Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 10 · Lesson 03 · Unit 7** &nbsp;|&nbsp; **Objective:** spot known ports in `netstat`

---

> ⚠️ **Safety:** `netstat` only **reads**. It changes nothing on your laptop.

**Goal:** find well-known ports in use on your own laptop and name their service.

**You will need:** your Windows laptop (Equipment tier **E1**), on the internet.

### Steps

**1.** Open a browser tab to any secure (`https://`) website. Leave it open.

**2.** Open **Command Prompt** and run this exact command:

```
netstat -an
```

**3.** In the **Foreign Address** column, find a line ending in **:443**. Write the whole line here:
______________________________________________________________

**4.** What service is port 443? ____________  (2 pts)

**5.** In the **Local Address** column, look for **:445** in a `LISTENING` state. Did you find it? (circle) **Yes / No**  (2 pts)

**6.** What service is port 445? ____________  (2 pts)

### Record what you found

| Port you saw | Service (from the table) | TCP or UDP? |
|:------------:|--------------------------|:-----------:|
| | | |
| | | |
| | | |

*(4 points — three rows filled in correctly.)*

### Verify it worked

**7.** Point at your `:443` line and say out loud: "HTTPS — secure web." Done? ☐  (2 pts)

**8.** Name one **UDP** service and its port from memory: ____________  (2 pts)

**9.** Reset note: nothing changed. Close the window. Done? ☐  (2 pts)

**10. Reflect (2 pts):** Which known port surprised you to see in use?
______________________________________________________________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 10.3.E · CompTIA Network+ N10-009 · Page ___ of ____
