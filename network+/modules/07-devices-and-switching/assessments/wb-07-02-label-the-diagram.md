---
worksheet_type: label-the-diagram
number: "7.2.C"
title: "Switch Learning — Label the Steps"
module: 07
lesson: 02
unit: 4
objective_ids: ["2.1"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-07-02-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 7.2.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 07 · Lesson 02 · Unit 4** &nbsp;|&nbsp; **Objective:** learn & forward

---

**Instructions:** Fill in the blanks. Four points each.

```
   STEP 1 — a frame from AA arrives on port 1
     switch reads the (1) __________ MAC → adds to table: [ AA → port 1 ]

   MAC address table
     MAC   Port
     AA     1
     BB     3

   STEP 2 — deliver, using the (2) __________ MAC
     dest = BB (in table)  → (3) __________ out only port 3
     dest = ZZ (unknown)   → (4) __________ out all other ports
```

**1.** In step 1, the switch reads the ____________ MAC to learn.

**2.** In step 2, the switch reads the ____________ MAC to deliver.

**3.** For a known device (BB), the switch will ____________.

**4.** For an unknown device (ZZ), the switch will ____________.

**5.** After ZZ replies, what does the switch learn? ______________________________

**Why (+2):** How is this smarter than a hub, which sends everything to everyone?
______________________________________________________________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 7.2.C · CompTIA Network+ N10-009 · Page ___ of ____
