---
worksheet_type: label-the-diagram
number: "8.8.C"
title: "Public/Private & NAT — Label the Path"
module: 08
lesson: 08
unit: 5
objective_ids: ["1.4"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-08-08-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 8.8.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 08 · Lesson 08 · Unit 5** &nbsp;|&nbsp; **Objective:** NAT path

---

**Instructions:** Fill in each blank. Four points each.

```
   INSIDE ((1)________)          ROUTER          OUTSIDE ((2)________)
   Laptop 192.168.1.24 ──▶ [ (3)________ swaps ] ──▶ internet
                              private → public
                              one public IP: 203.0.113.7

   OUT:  source 192.168.1.24 → rewritten to (4)____________
   BACK: reply to 203.0.113.7 → sent back to (5)____________
```

**1.** The kind of address inside: ____________

**2.** The kind of address outside: ____________

**3.** The feature the router runs: ____________

**4.** The address the source is rewritten to: ____________

**5.** The device the reply is sent back to: ____________

**Why (+2):** In one sentence, how do five devices share the one public address?
______________________________________________________________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 8.8.C · CompTIA Network+ N10-009 · Page ___ of ____
