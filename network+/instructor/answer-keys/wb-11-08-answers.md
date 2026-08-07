---
answer_key_for: NA-M11-L08
module: 11
lesson: 08
unit: 8
covers: [quiz-11-08, wb-11-08-fill-in-the-blank, wb-11-08-matching, wb-11-08-label-the-diagram, wb-11-08-short-answer, wb-11-08-hands-on-observation, wb-11-08-vocabulary-review, wb-11-08-reflection]
objective_ids: ["2.1"]
---

# 🔒 Instructor Answer Key — Lesson 11-08: Designing a Small Network End to End

> **Instructor-only.** Do not print with student copies. Answers map to N10-009 objective **2.1**.

---

## Quiz 11-08 — answers & explanations

**1. Design starts → B) on paper, before building.**
Buying first (A), guessing (C), or waiting for a break (D) all cause costly mistakes.

**2. Meets the ISP → B) at the internet edge (modem/router).**
Not at a PC (A), printer (C), or the AP alone (D).

**3. Each VLAN needs → A) subnet and gateway.**
Not just a password (B), its own switch (C), or a cable color (D).

**4. Switch-to-switch/router links → B) trunks.**
Access ports (A) carry one VLAN for a device; not off (C) or console (D).

**5. Guards a backup link → B) STP.**
DHCP (A) hands out addresses; NAT (C) translates; DNS (D) resolves names.

**6. True or false — two VLANs share one subnet safely. → FALSE.**
Each VLAN needs its own subnet; sharing one breaks routing. Accept any answer that says false and notes separate subnets.

**7. Lets the right VLANs talk → B) inter-VLAN routing (router or L3 switch).**
A hub (A) doesn't route; a longer cable (C) and disabling STP (D) don't help.

**8. Matching → VLAN = B; Trunk = A; Access point = C.**
Full credit requires all three.

**9. Fill in the blank → 20 (the Guest VLAN in the lesson's plan).**
Accept whichever VLAN the learner assigned to guests, as long as it's consistent with their design.

**10. Scenario (sample full-credit answer, five steps):**
(1) **Edge:** internet → modem → router. (2) **VLANs:** Staff, Guests, Printers — one each. (3) **Addresses:** give each VLAN its own subnet and gateway; DHCP inside. (4) **Switches:** access ports to devices, a trunk to the router, STP on any backup link. (5) **Routing + wireless:** router/L3 switch routes between VLANs and to the internet; add an AP with WPA3, and map the Guest SSID to the Guest VLAN. Award credit for a sensible ordered plan that separates the three groups and gives internet to all.

**Score band:** 9–10 ✅ · 7–8 🟡 review the six steps · 5–6 🟠 redo the design lab · <5 🔴 reteach by walking one full design.

---

## Worksheet 11.8.A — Fill in the Blank (2 pts each)

1. **paper** &nbsp; 2. **edge** &nbsp; 3. **VLAN** &nbsp; 4. **subnet** &nbsp; 5. **gateway**
6. **trunk** &nbsp; 7. **STP** &nbsp; 8. **routing** &nbsp; 9. **access** &nbsp; 10. **WPA3**

**Challenge (+2):** Two VLANs sharing one subnet; and forgetting a VLAN's gateway.

---

## Worksheet 11.8.B — Matching (2 pts each)

**Part 1:** 1. VLAN → **C** · 2. Trunk → **A** · 3. STP → **E** · 4. Inter-VLAN routing → **B** · 5. Access point → **D**

**Part 2 (order 1–5):** 6. Add wireless → **5** · 7. Plan the edge → **1** · 8. Subnet + gateway → **3** · 9. List the VLANs → **2** · 10. Connect switches → **4**

---

## Worksheet 11.8.C — Label the Diagram (2 pts each)

1. **Modem** &nbsp; 2. **gateway** &nbsp; 3. **trunk** &nbsp; 4. **STP** &nbsp; 5. **192.168.10.0/24**
6. **Access Point** &nbsp; 7. **1, 6, 11**
8. **access** &nbsp; 9. **gateway** &nbsp; 10. **paper**

---

## Worksheet 11.8.D — Short Answer (4 pts each)

1. A plan prevents costly mistakes (missing gateway, subnet clash, loops) and gives a clear map to build from.
2. **Edge → VLANs → subnets/gateways → switches (trunks + STP) → routing → wireless.**
3. Its **own subnet and gateway** — so the router can tell networks apart and the VLAN can leave itself.
4. **Trunks** between switches/to the router; **STP** on any backup link; **access ports** to PCs/devices.
5. Design is a **blueprint** — you plan rooms (VLANs), doors (routing), the front door (internet), addresses, and locks (WPA3) before building.

---

## Worksheet 11.8.E — Hands-on Design

- Completion-based. Full credit for a one-page design with: the edge, three named VLANs, three **different** subnets each with a gateway, marked access/trunk ports, STP noted on a backup link, and an AP with SSID/WPA3/channel.
- **8.** Verify no shared subnet and every VLAN has a gateway.

> **Accuracy note (Prime Directive #7):** this is a paper-design exercise — no live commands are run, so no output is claimed. Build methods reference verified steps from Lessons 11-02/03/04/06/07.

---

## Worksheet 11.8.F — Vocabulary Review (2 pts each)

**Part 1:** 1. Network design → **C** · 2. Internet edge → **A** · 3. Network diagram → **E** · 4. ISP → **B** · 5. Topology → **D**

**Part 2 (accept close wording):**
6. To catch mistakes early and have a clear map before spending money/time.
7. The modem (from the ISP) and the router (the internet door).
8. Devices, links, VLANs, subnets, and gateways.
9. To keep untrusted guest devices away from staff data (segmentation).
10. It blocks the loop and keeps the backup as a standby that activates on failure.

---

## Worksheet 11.8.G — Reflection

Not graded for correctness. Full marks for honest, complete answers. Items 2–3 help the learner target exam review across Module 11.

---
_NetworkAcademy+ · Answer Key 11-08 · CompTIA Network+ N10-009 · Instructor materials_
