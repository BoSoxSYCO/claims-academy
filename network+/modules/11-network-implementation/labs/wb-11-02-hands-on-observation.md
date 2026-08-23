---
worksheet_type: hands-on-observation
number: "11.2.E"
title: "Configuring VLANs on the Dell 3424 — Hands-on Build"
module: 11
lesson: 02
unit: 8
objective_ids: ["2.3"]
points: 20
est_minutes: 20
answer_key: instructor/answer-keys/wb-11-02-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 11.2.E — Hands-on Build &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 11 · Lesson 02 · Unit 8** &nbsp;|&nbsp; **Objective:** create VLAN 10 on the switch

---

> ⚠️ **Safety:** manage the switch through a port you will **not** move (console cable is safest). Do not move the port your session uses.

**Goal:** create VLAN 10 ("Home"), assign port g1, verify, and save.

### Steps — check each box and record what you see

**1.** Reached the `console#` prompt (after `enable`)? ☐  (2 pts)

**2.** Entered global config (`configure`)? ☐  (2 pts)

**3.** Created and named VLAN 10 (Home)? ☐  (2 pts)

**4.** Set g1 to access mode and assigned VLAN 10? ☐  (2 pts)

**5.** Ran `show vlan`. Write the VLAN 10 row exactly as you see it:  (4 pts)
```
______________________________________________________________
```

**6.** Is g1 listed under VLAN 10? (circle) **Yes / No**  (2 pts)

**7.** Ran `copy running-config startup-config`. Did it report success? (circle) **Yes / No**  (2 pts)

**8.** Note any wording on your switch that differed from the lesson (firmware differences are normal):  (2 pts)
______________________________________________________________

### Verify it worked

**9.** VLAN 10 named Home with g1 shows in `show vlan`. Confirmed? ☐  (2 pts)

> 🔧 **Leave the lab:** keep VLAN 10 (Home) with g1 assigned for Lesson 11-03.

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 11.2.E · CompTIA Network+ N10-009 · Page ___ of ____
