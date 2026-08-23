---
worksheet_type: label-the-diagram
number: "9.3.C"
title: "NAT & PAT — Label the Translation Table"
module: 09
lesson: 03
unit: 6
objective_ids: ["1.4"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-09-03-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 9.3.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 09 · Lesson 03 · Unit 6** &nbsp;|&nbsp; **Objective:** the NAT table

---

**Instructions:** Fill in each blank. Four points each.

```
   INSIDE (private)            NAT TABLE               OUTSIDE
   192.168.1.24:51000  ⇄  203.0.113.7:40001
   192.168.1.25:49500  ⇄  203.0.113.7:(1)______
   192.168.1.26:52210  ⇄  203.0.113.7:40003

   A reply comes to 203.0.113.7:40003 →
   the table says it belongs to (2)________________
```

**1.** The public port for the .25 device (next in sequence): ____________

**2.** Which inside device the reply on port 40003 goes to: ____________

**3.** All three inside devices share how many public IP addresses? ____________

**4.** What tells the three conversations apart? ____________

**5.** The name of this whole kind of NAT (many → one): ____________

**Why (+2):** In one sentence, why is 203.0.113.7 used for all three devices?
______________________________________________________________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 9.3.C · CompTIA Network+ N10-009 · Page ___ of ____
