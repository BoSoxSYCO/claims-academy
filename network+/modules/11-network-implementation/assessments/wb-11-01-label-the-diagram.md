---
worksheet_type: label-the-diagram
number: "11.1.C"
title: "VLANs Intro — Label the Diagram"
module: 11
lesson: 01
unit: 8
objective_ids: ["2.3"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-11-01-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 11.1.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 11 · Lesson 01 · Unit 8** &nbsp;|&nbsp; **Objective:** VLAN basics (2.3)

---

**Instructions:** Fill in the blanks on the VLAN diagram. Two points each.

```
   ONE PHYSICAL SWITCH

   VLAN 10 — Sales           VLAN 20 — Engineering
   ports 1–3                 ports 4–6
   subnet ______________     subnet ______________
   [PC][PC][PC]              [PC][PC][PC]
        │                          │
   broadcasts stay _______    broadcasts stay _______

   To move between VLAN 10 and VLAN 20 → go through a ____________.
```

**Blanks to fill (in order):**
1. VLAN 10 subnet = ____________ (use 192.168.10.0/24)
2. VLAN 20 subnet = ____________ (use 192.168.20.0/24)
3. VLAN 10 broadcasts stay ____________ (inside/outside)
4. VLAN 20 broadcasts stay ____________ (inside/outside)
5. Device between VLANs = ____________

**6–10 (2 pts each):**
6. How many physical switches are shown? ____________
7. Each VLAN is its own broadcast ____________.
8. The default VLAN number is ____________.
9. VLAN IDs range from ____ to ____.
10. Can a VLAN 10 PC hear VLAN 20 broadcasts? (yes/no) ____________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 11.1.C · CompTIA Network+ N10-009 · Page ___ of ____
