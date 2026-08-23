---
worksheet_type: label-the-diagram
number: "9.5.C"
title: "NTP & Services — Label the Stratum Chain"
module: 09
lesson: 05
unit: 6
objective_ids: ["1.4", "3.1"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-09-05-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 9.5.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 09 · Lesson 05 · Unit 6** &nbsp;|&nbsp; **Objective:** the stratum chain

---

**Instructions:** Fill in each blank. Four points each.

```
   Stratum (1)__ :  atomic clock / GPS   ← the true source (not networked)
        │
   Stratum 1  :  (2)________________ time server (directly attached)
        │
   Stratum (3)__ :  syncs from stratum 1 (slightly less exact)
        │
   your router → laptop

   Rule: a (4)__________ stratum number is closer to the source and more accurate.
   Two helpers: (5)________ monitors devices; Syslog collects logs.
```

**1.** The stratum number of the true source: ____________

**2.** The kind of time server at stratum 1: ____________

**3.** The stratum number that syncs from stratum 1: ____________

**4.** Lower or higher stratum = more accurate? ____________

**5.** The service that monitors devices: ____________

**Why (+2):** In one sentence, why is stratum 0 not something you connect to over the network?
______________________________________________________________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 9.5.C · CompTIA Network+ N10-009 · Page ___ of ____
