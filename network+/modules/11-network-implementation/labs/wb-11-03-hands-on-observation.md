---
worksheet_type: hands-on-observation
number: "11.3.E"
title: "Trunks & Tagging — Hands-on Build"
module: 11
lesson: 03
unit: 8
objective_ids: ["2.3"]
points: 20
est_minutes: 18
answer_key: instructor/answer-keys/wb-11-03-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 11.3.E — Hands-on Build &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 11 · Lesson 03 · Unit 8** &nbsp;|&nbsp; **Objective:** set g24 to a trunk

---

> ⚠️ **Safety:** manage the switch through the console cable, not through the port you're changing. Don't trunk your management port.

**Goal:** set port g24 to trunk mode carrying VLAN 10 and VLAN 20.

### Steps — check each box and record what you see

**1.** Reached `console#` and entered `configure`? ☐  (2 pts)

**2.** VLAN 20 exists (created it if needed)? ☐  (2 pts)

**3.** Set g24 to trunk mode and allowed VLANs 10 and 20? ☐  (2 pts)

**4.** Ran the verify command (`show interfaces switchport ethernet g24` or `show vlan`). Write what g24's mode shows:  (4 pts)
```
______________________________________________________________
```

**5.** Which VLANs are allowed on g24? ____________  (2 pts)

**6.** What native VLAN is listed? ____________  (2 pts)

**7.** Ran `copy running-config startup-config`. Success? (circle) **Yes / No**  (2 pts)

**8.** Note any command wording that differed on your firmware (differences are normal):  (2 pts)
______________________________________________________________

### Verify it worked

**9.** g24 is in **trunk** mode with VLANs 10 and 20 allowed. Confirmed? ☐  (2 pts)

> 🔧 **Leave the lab:** keep g24 as a trunk (VLAN 10 + 20) for Lesson 11-06.

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 11.3.E · CompTIA Network+ N10-009 · Page ___ of ____
