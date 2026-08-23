---
worksheet_type: label-the-diagram
number: "11.3.C"
title: "Trunks & Tagging — Label the Diagram"
module: 11
lesson: 03
unit: 8
objective_ids: ["2.3"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-11-03-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 11.3.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 11 · Lesson 03 · Unit 8** &nbsp;|&nbsp; **Objective:** trunks & tagging (2.3)

---

**Instructions:** Fill in the blanks on the diagram. Two points each.

```
   ACCESS vs. TRUNK

   [PC]── g1 ──[ VLAN 10 ]── Switch A          ← this port is an __________ port
                                                  (carries ____ VLAN, ____ tag)

   Switch A ══ g24 ═══════════ Switch B         ← this link is a __________
                │ carries VLAN 10 + 20 │           tagged with __________
                └ native VLAN ____ = untagged ┘
```

**Blanks to fill (in order):**
1. The PC's port type = ____________
2. Number of VLANs it carries = ____________
3. Tag on that port? = ____________ (none / one)
4. The switch-to-switch link type = ____________
5. Tagging standard used = ____________
6. The native VLAN number (default) = ____________

**7–10 (2 pts each):**
7. Does the PC ever see the tag? (yes/no) ____________
8. Where is the tag removed? ____________
9. Both trunk ends must agree on the ____________ VLAN.
10. Which port type faces the router for many VLANs? ____________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 11.3.C · CompTIA Network+ N10-009 · Page ___ of ____
