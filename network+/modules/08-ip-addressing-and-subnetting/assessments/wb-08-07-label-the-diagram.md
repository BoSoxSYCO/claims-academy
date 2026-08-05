---
worksheet_type: label-the-diagram
number: "8.7.C"
title: "IPv6 — Shorten the Address"
module: 08
lesson: 07
unit: 5
objective_ids: ["1.4"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-08-07-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 8.7.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 08 · Lesson 07 · Unit 5** &nbsp;|&nbsp; **Objective:** shorten IPv6

---

**Instructions:** Shorten this address step by step. Four points each.

```
   Full:   2001:0db8:0000:0000:0000:00a3:0000:1234
                                (three zero groups)  (one)

   Rule 1 (drop leading zeros):
     2001:(1)____:0:0:0:(2)____:0:1234

   Rule 2 (:: for the LONGEST zero run — the three in a row):
     Final = (3)________________________________
```

**1.** `0db8` after Rule 1: ____________

**2.** `00a3` after Rule 1: ____________

**3.** The final shortened address: ____________________________

**4.** How many zero groups does the `::` stand for here? ____________

**5.** Why compress the run of **three** zeros and not the single zero later?

______________________________________________________________

**Bonus (+2):** Is `2001:db8::a3::1234` valid? Why or why not?
______________________________________________________________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 8.7.C · CompTIA Network+ N10-009 · Page ___ of ____
