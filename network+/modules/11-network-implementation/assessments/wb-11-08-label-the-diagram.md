---
worksheet_type: label-the-diagram
number: "11.8.C"
title: "Network Design — Label the Diagram"
module: 11
lesson: 08
unit: 8
objective_ids: ["2.1"]
points: 20
est_minutes: 10
answer_key: instructor/answer-keys/wb-11-08-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 11.8.C — Label the Diagram &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 11 · Lesson 08 · Unit 8** &nbsp;|&nbsp; **Objective:** network design (2.1)

---

**Instructions:** Fill in the blanks on the topology (top to bottom). Two points each.

```
   Internet → __________ → Router (holds each VLAN's __________)
                              │  __________  (802.1Q: VLAN 10/20/30)
                          [ Switch ]  ── __________ guards backup links
                            ├ VLAN 10 Staff  __________ (subnet)
                            ├ VLAN 20 Guests 192.168.20.0/24
                            ├ VLAN 30 Voice  192.168.30.0/24
                            └ __________ → SSID → VLAN (WPA3, ch __________)
```

**Blanks to fill (in order):**
1. Between Internet and Router = ____________
2. Router holds each VLAN's ____________
3. Switch-to-router link = ____________
4. Guards backup links = ____________
5. VLAN 10 subnet = ____________ (use 192.168.10.0/24)
6. Wireless device = ____________
7. Safe Wi-Fi channels = ____________

**8–10 (2 pts each):**
8. Ports to PCs are ____________ ports.
9. Each VLAN must have its own subnet and ____________.
10. You plan all this on ____________ first.

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 11.8.C · CompTIA Network+ N10-009 · Page ___ of ____
