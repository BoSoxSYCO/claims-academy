---
worksheet_type: label-the-diagram
number: "11.6.C"
title: "Inter-VLAN Routing — Label the Diagram"
module: 11
lesson: 06
unit: 8
objective_ids: ["2.3"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-11-06-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 11.6.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 11 · Lesson 06 · Unit 8** &nbsp;|&nbsp; **Objective:** inter-VLAN routing (2.3)

---

**Instructions:** Fill in the blanks on the two methods. Two points each.

```
   METHOD 1: ______________          METHOD 2: ______________
   [Router]                          [__________ switch]
      │ one __________ (VLAN 10+20)     routes inside itself
   [Switch]                          gw for VLAN 10: __________
    ├ VLAN 10  gw __________         gw for VLAN 20: 192.168.20.1
    └ VLAN 20  gw 192.168.20.1

   __________ · one shared link       fast · costs more
```

**Blanks to fill (in order):**
1. Method 1 name = ____________
2. Method 2 name = ____________ (fill the switch type)
3. Router-to-switch link = ____________
4. VLAN 10 gateway (method 1) = ____________ (use 192.168.10.1)
5. VLAN 10 gateway (method 2) = ____________ (use 192.168.10.1)
6. Method 1 cost word = ____________ (cheap/expensive)

**7–10 (2 pts each):**
7. What Layer must the device be to route? ____________
8. Each VLAN needs its own ____________ and gateway.
9. Where do VLAN 10 PCs send traffic meant for VLAN 20? ____________
10. Which method routes inside one box? ____________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 11.6.C · CompTIA Network+ N10-009 · Page ___ of ____
