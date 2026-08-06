---
worksheet_type: hands-on-observation
number: "11.5.E"
title: "Routing Basics — Hands-on Observation"
module: 11
lesson: 05
unit: 8
objective_ids: ["2.2"]
points: 20
est_minutes: 12
answer_key: instructor/answer-keys/wb-11-05-answers.md
---

<!-- NetworkAcademy+ printable worksheet · follows docs/WORKBOOK-SYSTEM.md · print B&W, portrait -->

# NetworkAcademy+ · Lab Manual
### Worksheet 11.5.E — Hands-on Observation &nbsp;&nbsp;|&nbsp;&nbsp; Points: ______ / 20

**Name:** ____________________________ **Date:** ____________ **Time spent:** ______ min
**Module 11 · Lesson 05 · Unit 8** &nbsp;|&nbsp; **Objective:** read a real routing table

---

> ⚠️ **Safety:** `route print` only **reads**. It changes nothing on your laptop.

**Goal:** view your laptop's routing table and find the default route.

### Steps

**1.** Open **Command Prompt** and run this exact command:  (2 pts)

```
route print
```

**2.** Find the **IPv4 Route Table** section. Found it? ☐  (2 pts)

**3.** Find the line whose Network Destination is `0.0.0.0` and Netmask is `0.0.0.0`. Write its **Gateway**:  (4 pts)
______________________________________________________________

**4.** What is that `0.0.0.0` line called? ____________  (2 pts)

**5.** Find a line for your **local network** (e.g., `192.168.1.0`). Write it here:  (4 pts)
______________________________________________________________

**6.** Is your laptop's default route set by hand or automatically (DHCP)? ____________  (2 pts)

**7.** Roughly how many routes are listed? ____________  (2 pts)

**8. Reflect (2 pts):** Would this small setup use static or dynamic routing? Why?
______________________________________________________________

---

Self-score: ______ / 20 &nbsp;&nbsp; Band (circle): ✅ 🟡 🟠 🔴 &nbsp;&nbsp; Verified by: ____________ &nbsp; ☐ Redo
_NetworkAcademy+ · Worksheet 11.5.E · CompTIA Network+ N10-009 · Page ___ of ____
