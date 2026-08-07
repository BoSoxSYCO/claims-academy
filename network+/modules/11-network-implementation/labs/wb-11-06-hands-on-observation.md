---
worksheet_type: hands-on-observation
number: "11.6.E"
title: "Inter-VLAN Routing — Hands-on Build"
module: 11
lesson: 06
unit: 8
objective_ids: ["2.3"]
points: 20
est_minutes: 18
answer_key: instructor/answer-keys/wb-11-06-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 11.6.E — Hands-on Build &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 11 · Lesson 06 · Unit 8** &nbsp;|&nbsp; **Objective:** let VLAN 10 and VLAN 20 talk

---

> ⚠️ **Safety:** manage via the console cable. Give each VLAN a **different** subnet. Check addresses before saving.
> If your switch is Layer 2 only, use a router (router-on-a-stick) instead — note that below.

**Goal:** give each VLAN a gateway and route between VLAN 10 and VLAN 20.

### Steps — check each box and record what you see

**1.** Reached `console#` and `configure`? ☐  (2 pts)

**2.** Gave VLAN 10 a gateway (e.g., 192.168.10.1)? Write it: ____________  (2 pts)

**3.** Gave VLAN 20 a gateway (e.g., 192.168.20.1)? Write it: ____________  (2 pts)

**4.** Enabled routing (`ip routing`) if needed? ☐  (2 pts)

**5.** Saved (`copy running-config startup-config`)? ☐  (2 pts)

**6.** Set a VLAN 10 PC's gateway and a VLAN 20 PC's gateway? ☐  (2 pts)

**7.** From a VLAN 10 PC, pinged a VLAN 20 PC. Result (write the reply line):  (4 pts)
```
______________________________________________________________
```

**8.** Did the ping succeed? (circle) **Yes / No**  (2 pts)

**9.** If your switch was Layer 2 only, what did you use instead? ____________  (2 pts)

> 🔧 **Leave the lab:** keep inter-VLAN routing on (VLANs can talk) or roll it back to keep them separate.

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 11.6.E · CompTIA Network+ N10-009 · Page ___ of ____
